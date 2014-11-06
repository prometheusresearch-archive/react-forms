'use strict';

var {Iterable, List, Map, is, fromJS} = require('immutable');
var invariant = require('../invariant');
var {MappingNode, ListNode, CompositeNode} = require('./schema');

var EMPTY_MAP = Map();
var EMPTY_LIST = List();

/**
 * Value
 */
class Value {

  constructor(
    parent: Nullable<Value>,
    key: Nullable<String>,
    abstractNode: Node,
    node: ConcreteNode,
    value: Any,
    attributes: Map<String, Any>
  ) {
    // reference to the parent value
    this.parent = parent;
    this.key = key;

    // original schema node which should be used on value updates to produce new
    // concrete schema node
    this.abstractNode = abstractNode;
    // concrete schema node
    this.node = node;

    // value
    this.value = value;
    // attributes
    this.attributes = attributes;

    // children cache
    this.__children = {};
    this.__childrenAttributes = {};
  }

  /**
   * Return the key path from the root to the value.
   */
  get keyPath() {
    var path = [];
    var current = this;
    if (current.key !== null) {
      path.unshift(current.key);
    }
    while (current.parent !== null && current.parent.key !== null) {
      current = current.parent;
      path.unshift(current.key);
    }
    return path;
  }

  /**
   * Return the root of the current value.
   */
  get root() {
    var current = this;
    while (current.parent !== null) {
      current = current.parent;
    }
    return current;
  }

  /**
   * Check if value equals to other value.
   */
  equals(value: Any): Boolean {
    return (
      is(this.abstractNode, value.abstractNode) &&
      is(this.node, value.node) &&
      is(this.value, value.value) &&
      is(this.attributes, value.attributes)
    );
  }

  /**
   * Get children value by key.
   */
  get(key: String): Value {
    if (this.__children[key] === undefined) {
      invariant(
        (this.node instanceof CompositeNode) && this.node.has(key),
        'Invalid key "%s" for value with schema "%s"', key, this.node
      );
      var abstractNode = this.node.get(key);
      var value = this.value.get(key, defaultValue(abstractNode));
      var node = abstractNode.instantiate(value);
      if (this.__childrenAttributes[key] === undefined) {
        this.__childrenAttributes[key] = this.constructor.computeAttributes(key, node, value, this.attributes, false);
      }
      var attributes = this.__childrenAttributes[key];
      this.__children[key] = new this.constructor(
        this, key, abstractNode, node, value, attributes);
    }
    return this.__children[key];
  }

  /**
   * Get children value by key path.
   */
  getIn(keyPath: Array<String>): Value {
    if (keyPath.length === 0) {
      return this;
    }
    var current = this;
    for (var i = 0, len = keyPath.length; i < len; i++) {
      current = current.get(keyPath[i]);
    }
    return current;
  }

  /**
   * Return iterator over value keys.
   */
  keys() {
    return this.node.keys(this.value);
  }

  map(func) {
    var result = [];
    var iterator = this.node.keys(this.value);
    var step;
    while (!(step = iterator.next()).done) {
      result.push(func(this.get(step.value), step.value, this));
    }
    return result;
  }

  /**
   * Set new value.
   */
  set(value: Any): Value {
    value = fromJS(value);
    var node = this.abstractNode.instantiate(value);
    var parentAttributes = this.parent ? this.parent.attributes : EMPTY_MAP;
    var attributes = this.constructor.computeAttributes(this.key, node, value, parentAttributes, true);
    return this.__update(node, value, attributes);
  }

  setIn(keyPath: Array<String>, value: Any) {
    return this.getIn(keyPath).set(value);
  }

  setAttribute(name: String, attribute: Any) {
    return this;
  }

  toString(): String {
    return `${this.constructor.name} { ${this.value} }`;
  }

  __update(node, value, attributes) {
    var current = this.__with(node, value, attributes).__grow();
    while (current.parent !== null) {
      current = current.parent.__onUpdate(current);
    }
    return current.getIn(this.keyPath);
  }

  __onUpdate(child: Value): Value {
    var value = this.value.set(child.key, child.value);
    var node = this.abstractNode.instantiate(value);
    var children = EMPTY_MAP.set(child.key, child);
    var attributes = this.constructor.mergeAttributes(children, node, value, this.attributes);
    if (node.constructor !== this.node.constructor) {
      return this.__with(node, defaultValue(node), EMPTY_MAP).__grow();
    } else {
      return this.__with(node, value, attributes);
    }
  }

  /**
   * Grow value.
   */
  __grow(): Value {
    if (this.node instanceof CompositeNode) {
      // if we see a CompositeNode schema we iterate over all available keys and
      // see if we need to "grow" value with default values.
      var valueChildren = EMPTY_MAP.asMutable();
      var children = EMPTY_MAP.asMutable();
      var iterator = this.node.keys(this.value);
      var step;
      while (!(step = iterator.next()).done) {
        if (this.value.get(step.value) !== undefined || this.node.get(step.value).defaultValue !== undefined) {
          var child = this.get(step.value).__grow();
          children = children.set(step.value, child);
          valueChildren = valueChildren.set(step.value, child.value)
          this.__childrenAttributes[step.value] = child.attributes;
        }
      }
      var newValue = this.value.merge(valueChildren.asImmutable());
      var node = this.abstractNode.instantiate(newValue);
      var newAttributes = this.constructor.mergeAttributes(
        children.asImmutable(), node, newValue, this.attributes);
      // we transfer attribute cache to new value, this puts restriction on how
      // attributes are computed and merged, we need to document it (and enforce?)
      var self = this.__with(node, newValue, newAttributes);
      self.__childrenAttributes = this.__childrenAttributes;
      return self;
    } else {
      return this;
    }
  }

  __with(node: Node, value: Any, attributes: Map<String, Any>): Value {
    return new this.constructor(
      this.parent,
      this.key,
      this.abstractNode,
      node,
      value,
      attributes
    );
  }

  static create(abstractNode: Node, value: Any, attributes: Map<String, Any>): Value {
    value = fromJS(value);
    if (value === undefined) {
      value = defaultValue(abstractNode);
    }
    attributes = fromJS(attributes);
    if (attributes === undefined) {
      attributes = EMPTY_MAP;
    }
    var node = abstractNode.instantiate(value);
    if (value === undefined) {
      value = defaultValue(node);
    }
    var val = new this(null, null, abstractNode, node, value, attributes);
    return val.__grow();
  }

  static computeAttributes(key: String, node: Node, value: Any, attributes: Map<String, Any>, force: Boolean) {
    return EMPTY_MAP;
  }

  static mergeAttributes(children, node, value, attributes: Map<String, Any>): Map<String, Any> {
    return EMPTY_MAP;
  }
}

/**
 * Infer default value based on schema node.
 */
function defaultValue(node: Node): Any {
  if (node.defaultValue !== undefined) {
    return node.defaultValue;
  } else if (node instanceof MappingNode) {
    return EMPTY_MAP;
  } else if (node instanceof ListNode) {
    return EMPTY_LIST;
  } else {
    return undefined;
  }
}

module.exports = Value;
