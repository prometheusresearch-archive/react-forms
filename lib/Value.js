'use strict';
/**
 * Value is a wrapper for form value and associated metadata such as form
 * validaton and dirtyness state.
 *
 * @copyright Prometheus Research, LLC 2014
 * @preventMungle
 */

var Immutable                   = require('immutable');
var {List, Map, is, fromJS}     = Immutable; // jshint ignore:line
var emptyFunction               = require('./emptyFunction');
var {ScalarNode, CompositeNode} = require('./schema');
var invariant                   = require('./invariant');
var ValidationResult            = require('./ValidationResult');
var defaultValue                = require('./defaultValue');

var EMPTY_MAP = Map(); // jshint ignore:line

var DIRTY_SENTINEL = '__react_forms_dirty__';
var DIRTY = EMPTY_MAP.set(DIRTY_SENTINEL, true);

class Value {

  constructor(attributes, onUpdate, root, keyPath) {
    this.attributes = attributes;
    this.onUpdate = onUpdate;
    this.__root = root;
    this.keyPath = keyPath || [];
  }

  is(nodeType) {
    return (this.node instanceof nodeType);
  }

  equals(other) {
    return other && is(this.attributes, other.attributes);
  }

  hashCode() {
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

  get externalValidation() {
    return this.attributes.get('externalValidation');
  }

  get isValid() {
    return (
      this.attributes.get('validation').isSuccess &&
      this.attributes.get('externalValidation', ValidationResult.success()).isSuccess
    );
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

  get hasDirty() {
    return this.attributes.get('dirty').size > 0;
  }

  keys() {
    return this.node.keys(this.value);
  }

  get(key) {
    var abstractNode = this.node.get(key);
    invariant(
      abstractNode !== undefined,
      'Access to key "%s" which does not exist in schema', key
    );
    var value = this.value.get(key);
    if (value == undefined) {
      value = defaultValue(abstractNode);
    }
    var {node, value} = abstractNode.instantiate(value, undefined);
    var externalValidation = this.externalValidation.has(key) ?
      this.externalValidation.get(key) :
      ValidationResult.success();
    var validation = this.validation.has(key) ?
      this.validation.get(key) :
      value != undefined ?
      validate(node, value, ValidationResult.success()) :
      ValidationResult.success();
    var serialized = this.serialized.has(key) ? this.serialized.get(key) : serialize(node, value);
    var dirty = this.dirty.has(key) ?
      this.dirty.get(key) :
      this.isDirty ? DIRTY : EMPTY_MAP;
    var attributes = Map({ // jshint ignore:line
      abstractNode, node,
      value, serialized,
      validation, externalValidation,
      dirty
    });
    return new this.constructor(attributes, this.onUpdate, this.__root, this.keyPath.concat(key));
  }

  getIn(keyPath) {
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

  set(value) {
    value = fromJS(value);
    var {node, value} = this.abstractNode.instantiate(value, this.node);
    var attributes = {
      node, value,
      // either get a new serialized value for scalar nodes or destroy it
      // otherwise
      serialized: (node instanceof ScalarNode) ? node.serialize(value) : EMPTY_MAP
    };
    return this.__update(attributes);
  }

  transform(updater) {
    return this.set(updater(this.value));
  }

  setSerialized(serialized, options) {
    options = options || {};
    invariant(
      (this.node instanceof ScalarNode),
      'value should be a scalar'
    );
    var value = serialized !== '' ? this.node.deserialize(serialized) : null;
    var attributes = {value, serialized};
    if (options.dirtyOnChange) {
      attributes.dirty = DIRTY;
    }
    if (value instanceof Error) {
      attributes.validation = value;
      attributes.value = serialized;
    }
    return this.__update(attributes);
  }

  setExternalValidation(externalValidation) {
    return this.__update({externalValidation});
  }

  setSchema(abstractNode) {
    var {node, value} = abstractNode.instantiate(this.value, this.node);
    return this.__update({value, node, abstractNode});
  }

  notify() {
    console.warn(
      'Value: notify() method is deprecated, the onUpdate() callback ' +
      'is now called automatically by each mutative method'
    );
  }

  __update(attributes) {
    var keyPath = this.keyPath;
    var cur = this.root;
    var prev = cur;
    var trace = [cur];
    for (var i = 0, len = keyPath.length; i < len; i++) {
      cur = cur.get(keyPath[i]);
      trace.push(cur);
    }

    cur = trace.pop();
    cur = cur.__with(attributes).__grow();

    while (trace.length > 0) {
      var par = trace.pop();
      cur = par.__onUpdate(cur);
    }

    this.onUpdate(cur, keyPath, prev);

    return cur;
  }

  __onUpdate(child) {
    var value = this.value.set(child.key, child.value);
    var {node, value, dirty} = this.abstractNode.instantiate(value, this.node);
    if (node.constructor !== this.node.constructor) {
      value = defaultValue(node);
      return this.__with({node, value, serialized: EMPTY_MAP, dirty: (dirty || EMPTY_MAP)}).__grow();
    } else if (!is(node, this.node)) {
      return this.__with({node, value, serialized: EMPTY_MAP, dirty: (dirty || EMPTY_MAP)}).__grow();
    } else {
      var childrenValidation = child.validation.isSuccess ?
        ValidationResult.children(this.validation.children.remove(String(child.key))) :
        ValidationResult.children(this.validation.children.set(String(child.key), child.validation));
      var validation = validate(node, value, childrenValidation);
      dirty = dirty ? dirty : (child.dirty.size > 0 ? this.dirty.set(child.key, child.dirty) : this.dirty.remove(child.key));
      var serialized = this.serialized.set(child.key, child.serialized);
      return this.__with({node, value, validation, dirty, serialized});
    }
  }

  __grow() {
    if (this.node instanceof CompositeNode) {
      var value = this.value.asMutable();
      var iterator = this.node.keys(this.value);
      var children = EMPTY_MAP.asMutable();

      var areChildrenValid = true;

      var step;
      while (!(step = iterator.next()).done) {
        if (
          this.value.get(step.value) != undefined ||
          this.node.get(step.value).defaultValue != undefined
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
      var {node, value, dirty} = this.abstractNode.instantiate(value, this.node);
      var childrenValidation = areChildrenValid ?
        ValidationResult.success() :
        new ValidationResult(null, children.map(c => c.validation).filter(v => !v.isSuccess));
      var validation = validate(node, value, childrenValidation);
      dirty = dirty ? dirty : this.dirty.merge(children.filter(c => c.dirty.size > 0).map(c => c.dirty));
      var serialized = this.serialized.merge(children.map(c => c.serialized));
      return this.__with({node, value, validation, dirty, serialized});
    } else {
      var validation = validate(this.node, this.value, ValidationResult.success());
      return this.__with({validation});
    }
  }

  __with(attributes) {
    attributes = this.attributes.merge(attributes);
    return new this.constructor(
      attributes,
      this.onUpdate,
      this.__root,
      this.keyPath
    );
  }

  static create(abstractNode, value, onUpdate, root) {
    onUpdate = onUpdate || emptyFunction;
    value = fromJS(value);
    // check for both undefined and null
    if (value == undefined) {
      value = defaultValue(abstractNode);
    }
    var {node, value} = abstractNode.instantiate(value, undefined);
    var externalValidation = ValidationResult.success();
    var validation = ValidationResult.success();
    var serialized = serialize(node, value);
    var dirty = EMPTY_MAP;
    var attributes = Map({ // jshint ignore:line
      abstractNode, node,
      value, serialized,
      validation, externalValidation,
      dirty
    });
    var created = new this(attributes, onUpdate, root, null);
    created = created.__grow();
    return created;
  }

}


/**
 * Validate value against schema node.
 */
function validate(node, value, childrenValidation) {
  var result = node.validate(value, childrenValidation);
  if (result instanceof ValidationResult) {
    return result;
  } else if (result instanceof Error) {
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
