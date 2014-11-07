/**
 * Value is a wrapper for form value and associated metadata such as form
 * validaton and dirtyness state.
 *
 * @copyright Prometheus Research, LLC 2014
 * @preventMungle
 */

var Immutable = require('immutable');
var {List, Map, is, fromJS} = Immutable;
var emptyFunction = require('./emptyFunction');
var {ScalarNode, MappingNode, ListNode, CompositeNode} = require('./value/schema');
var invariant = require('./invariant');
var ValidationResult = require('./ValidationResult');

var EMPTY_LIST = List();
var EMPTY_MAP = Map();

var DIRTY_SENTINEL = '__react_forms_dirty__';
var DIRTY = EMPTY_MAP.set(DIRTY_SENTINEL, true);

class Value {

  constructor(attributes, onUpdate, root, keyPath) {
    this.attributes = attributes;
    this.onUpdate = onUpdate;
    this.__root = root || (() => this);
    this.keyPath = keyPath || [];
  }

  equals(other: Value) {
    return other && is(this.attributes, other.attributes);
  }

  hashCode(): Number {
    return this.attributes.hashCode();
  }

  get root() {
    return this.__root();
  }

  get key() {
    if (this.keyPath.length > 0) {
      return this.keyPath[this.keyPath.length - 1];
    } else {
      return null;
    }
  }

  get value() {
    return this.attributes.get('value');
  }

  /**
   * Schema related attributes
   */
  get abstractNode() {
    return this.attributes.get('abstractNode');
  }

  get node() {
    return this.attributes.get('node');
  }

  /**
   * Validation related attributes
   */
  get validation() {
    return this.attributes.get('validation');
  }

  get isValid() {
    return this.attributes.get('validation').isSuccess;
  }

  /**
   * Serialized value attribute
   */
  get serialized() {
    return this.attributes.get('serialized');
  }

  /**
   * Dirtyness state attributes and methods
   */
  get dirty() {
    return this.attributes.get('dirty');
  }

  makeDirty() {
    var attributes = this.attributes.setIn(['dirty', DIRTY_SENTINEL], true);
    return this.__update(attributes);
  }

  makeNotDirty() {
    var attributes = this.attributes.removeIn(['dirty', DIRTY_SENTINEL]);
    return this.__update(attributes);
  }

  get isDirty() {
    return this.attributes.get('dirty').get(DIRTY_SENTINEL, false);
  }

  keys() {
    return this.node.keys(this.value);
  }

  get(key: String): Value {
    var abstractNode = this.node.get(key);
    var value = this.value.get(key, defaultValue(abstractNode));
    var node = abstractNode.instantiate(value);
    var validation = this.validation.has(key) ? this.validation.get(key) : validate(node, value);
    var serialized = this.serialized.has(key) ? this.serialized.get(key) : serialize(node, value);
    var dirty = this.dirty.has(key) ?
      this.dirty.get(key) :
      this.isDirty ? DIRTY : EMPTY_MAP;
    var attributes = Map({abstractNode, node, value, validation, serialized, dirty});
    return new this.constructor(attributes, this.onUpdate, this.__root, this.keyPath.concat(key));
  }

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

  map(func) {
    var result = [];
    var iterator = this.node.keys(this.value);
    var step;
    while (!(step = iterator.next()).done) {
      result.push(func(this.get(step.value), step.value, this));
    }
    return result;
  }

  set(value: Any) {
    value = fromJS(value);
    var node = this.abstractNode.instantiate(value);
    var attributes = {node, value};
    if (node instanceof ScalarNode) {
      attributes.serialized = node.serialize(value);
    }
    return this.__update(attributes);
  }

  transform(updater) {
    return this.set(updater(this.value));
  }

  setSerialized(serialized: String) {
    invariant(
      (this.node instanceof ScalarNode),
      'value should be a scalar'
    );
    var value = this.node.deserialize(serialized);
    var attributes = {value, serialized};
    if (value instanceof Error) {
      attributes.validation = value;
      attributes.value = serialized;
    }
    return this.__update(attributes);
  }

  notify() {
    this.onUpdate(this);
  }

  __update(attributes: Attributes): Value {
    var cur = this.root;
    var trace = [cur];
    for (var i = 0, len = this.keyPath.length; i < len; i++) {
      cur = cur.get(this.keyPath[i]);
      trace.push(cur);
    }

    cur = trace.pop();
    cur = cur.__with(attributes).__grow();

    while (trace.length > 0) {
      var par = trace.pop();
      cur = par.__onUpdate(cur);
    }

    // re-parent
    cur.__root = (() => cur);

    return cur.getIn(this.keyPath);
  }

  __onUpdate(child: Value): Value {
    var value = this.value.set(child.key, child.value);
    var node = this.abstractNode.instantiate(value);
    if (node.constructor !== this.node.constructor) {
      value = defaultValue(node);
      return this.__with({node, value}).__grow();
    } else {
      var validation = child.validation.isSuccess ?
        validate(node, value) :
        ValidationResult.children(this.validation.children.set(child.key, child.validation));
      var dirty = child.dirty.size > 0 ? this.dirty.set(child.key, child.dirty) : this.dirty.remove(child.key);
      var serialized = this.serialized.set(child.key, child.serialized);
      return this.__with({node, value, validation, dirty, serialized});
    }
  }

  __grow(): Value {
    if (this.node instanceof CompositeNode) {
      var value = this.value.asMutable();
      var iterator = this.node.keys(this.value);
      var children = EMPTY_MAP.asMutable();

      var areChildrenValid = true;

      var step;
      while (!(step = iterator.next()).done) {
        if (
          this.value.get(step.value) !== undefined ||
          this.node.get(step.value).defaultValue !== undefined
        ) {
          var child = this.get(step.value).__grow();
          if (!child.validation.isSuccess) {
            areChildrenValid = false;
          }
          children = children.set(child.key, child);
          value = value.set(step.value, child.value)
        }
      }
      value = value.asImmutable();
      var node = this.abstractNode.instantiate(value);
      var validation = areChildrenValid ?
        validate(node, value) :
        new ValidationResult(null, children.map(child => child.validation));
      var dirty = this.dirty.merge(children.map(child => child.dirty));
      var serialized = this.serialized.merge(children.map(child => child.serialized));
      return this.__with({node, value, validation, dirty, serialized});
    } else {
      var validation = validate(this.node, this.value);
      return this.__with({validation});
    }
  }

  __with(attributes: Map<String, Any>): Value {
    attributes = this.attributes.merge(attributes);
    return new this.constructor(
      attributes,
      this.onUpdate,
      this.__root,
      this.keyPath
    );
  }

  static create(abstractNode: Node, value: Any, onUpdate: Function): Value {
    onUpdate = onUpdate || emptyFunction;
    value = fromJS(value);
    if (value === undefined) {
      value = defaultValue(abstractNode);
    }
    var node = abstractNode.instantiate(value);
    var validation = ValidationResult.success();
    var serialized = serialize(node, value);
    var dirty = EMPTY_MAP;
    var attributes = Map({abstractNode, node, value, validation, serialized, dirty});
    var created = new this(attributes, onUpdate, null, null);
    created = created.__grow();
    created.__root = (() => created);
    return created;
  }

}


/**
 * Infer default value from schema node
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


/**
 * Validate value against schema node.
 */
function validate(node: Node, value: Any): ValidationResult {
  var result;
  // Check if validation implemented through a method on schema node
  if (node instanceof ScalarNode) {
    value = node.deserialize(value);
    if (value instanceof Error) {
      return new ValidationResult(value.message);
    }
  }
  if (node.validate) {
    result = node.validate(value);
  // otherwise check `validate` prop
  } else {
    var validate = node.props.get('validate');
    // `validate` could be an array for convenienve
    if (Array.isArray(validate)) {
      for (var i = 0, len = validate.length; i < len; i++) {
        result = validate[i](node, value);
        if (result instanceof Error) {
          break;
        }
      }
    } else  if (validate) {
      result = validate(node, value);
    }
  }
  if (result instanceof Error) {
    return new ValidationResult(result.message);
  } else {
    return ValidationResult.success();
  }
}


/**
 * Serialize value.
 */
function serialize(node, value) {
  if (node instanceof CompositeNode) {
    return EMPTY_MAP;
  } else {
    return node.serialize(value);
  }
}

module.exports = Value;
