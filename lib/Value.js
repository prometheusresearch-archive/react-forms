/**
 * @jsx React.DOM
 * @preventMunge
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var {Vector, Map, OrderedMap, Record}            = require('immutable');
var {isSchema, isList, isMapping, isScalar}      = require('./schema');
var ValidationResult                             = require('./ValidationResult');
var mergeInto                                    = require('./mergeInto');
var merge                                        = require('./merge');
var invariant                                    = require('./invariant');
var validate                                     = require('./validate');
var emptyFunction                                = require('./emptyFunction');
var toArray                                      = require('./toArray');

var DIRTY_KEY = '__react_forms_dirty__';

/**
 * Serves as a immutable container for form value attributes.
 */
var ValueAttributes = Record({
  schema: null,
  value: null,
  validation: null,
  externalValidation: null,
  serialized: null,
  onUpdate: emptyFunction,
  dirty: Map.empty(),
  rootRef: null,
  pendingRootRef: null
}, 'ValueAttributes');

/**
 * Reference to the current form value.
 */
class Value {

  constructor(attributes, path) {
    this._attributes = attributes;
    this.path = path;
  }

  equals(other) {
    return (
      this.path.toString() === other.path.toString() &&
      this.schema.equals(other.schema) &&
      (
        this.value && this.value.equals ?
        this.value.equals(other.value) :
        this.value === other.value
      ) &&
      (
        this.serialized && this.serialized.equals ?
        this.serialized.equals(other.serialized) :
        this.serialized === other.serialized
      ) &&
      this.validation.equals(other.validation) &&
      (
        this.externalValidation && this.externalValidation.equals ?
        this.externalValidation.equals(other.externalValidation) :
        this.externalValidation === other.externalValidation
      ) &&
      this.dirty === other.dirty &&
      this._attributes.onUpdate === other._attributes.onUpdate
    );
  }

  child(...key) {
    var schema = this.schema.childIn(key);
    var value = getValueByPath(this.schema, this.value, key);
    var serialized = key.length > 0 && this.serialized !== undefined ?
      this.serialized.getIn(key) : this.serialized;
    var validation = this.validation.childIn(key);
    var externalValidation = this.externalValidation ?
      this.externalValidation.childIn(key) :
      null;
    var ctor = _getCtor(schema);
    var attributes = this._attributes.merge({
      schema, value, serialized, validation, externalValidation
    });
    return new ctor(attributes, this.path.concat(key));
  }

  childIn(keyPath) {
    return this.child.apply(this, keyPath);
  }

  update(newValue) {
    var update = this._update(newValue);
    var {value, serialized, validation, schema} = this.root;
    var path = this.path.slice();

    while (true) {
      if (path.length === this.path.length) {
        // only first update updates value and serialized
        if (path.length > 0) {
          value = value.updateIn(path, () => update.value);
          serialized = serialized.updateIn(path, () => update.serialized);
          validation = validation.updateChildIn(path, update.validation);
        } else {
          value = update.value;
          serialized = update.serialized;
          validation = update.validation;
        }

      } else if (validation.isSuccess) {
        // we need to update validation along the path if previou validation was
        // successful
        validation = validation.updateChildIn(
          path,
          validate(schema.childIn(path), value.getIn(path)).validation
        );
      }
      if (path.length === 0) {
        break;
      } else {
        path.pop();
      }
    }
    var dirty = this._makeDirty();

    var root;
    var pendingRootRef = () => root;
    var attributes = this.root._attributes.merge({
      value,
      serialized,
      validation,
      dirty,
      pendingRootRef
    }),
    root = new this.root.constructor(attributes, []);
    return root.childIn(this.path);
  }

  updateChild(key, newValue) {
    return this.child(key).update(newValue).root();
  }

  updateChildIn(keyPath, newValue) {
    return this.childIn(keyPath).update(newValue).root();
  }

  updateSchema(newSchema) {
    // TODO: Should we try to keep serialized for unchanged parts of schema?
    var {_attributes: {value, externalValidation, dirty, onUpdate, rootRef}} = this.root;
    return make(newSchema, value, externalValidation, onUpdate, dirty, rootRef);
  }

  updateExternalValidation(newExternalValidation) {
    // TODO: Should we try to keep serialized for unchanged parts of schema?
    var {_attributes: {schema, value, dirty, onUpdate, rootRef}} = this.root;
    return make(schema, value, newExternalValidation, onUpdate, dirty, rootRef);
  }

  _makeDirty() {
    var {_attributes: {dirty}, path} = this;
    return dirty.updateIn(path.concat(DIRTY_KEY), () => true);
  }

  markDirty() {
    var dirty = this._makeDirty();
    return new this.root.constructor(this.root._attributes.merge({dirty}), []);
  }

  markAsConsistent() {
    return new this.constructor(this._attributes.merge({pendingRootRef: null}), this.path);
  }

  notify() {
    this._attributes.onUpdate(this);
    return this;
  }
}

Object.defineProperty(Value.prototype, 'root', {
  get: function() {
    if (this._attributes.pendingRootRef) {
      return this._attributes.pendingRootRef();
    } else if (this._attributes.rootRef) {
      return this._attributes.rootRef();
    } else {
      return this;
    }
  }
});

Object.defineProperty(Value.prototype, 'parent', {
  get: function() {
    if (this.path.length === 0) {
      return null;
    }
    var path = this.path.slice(0);
    path.pop();
    return this.root.childIn(path);
  }
});

Object.defineProperty(Value.prototype, 'schema', {
  get: function() {
    return this._attributes.schema;
  }
});

function getValueByPath(schema, value, path) {
  if (value === undefined) {
    return _defaultValue(schema);
  }
  if (path.length > 0) {
    for (var i = 0, len = path.length; i < len; i++) {
      schema = schema.child(path[i]);
      value = value.get(path[i], schema.defaultValue);
      if (value === undefined) {
        return _defaultValue(schema);
      }
    }
    return value;
  } else {
    return value;
  }
}

Object.defineProperty(Value.prototype, 'value', {
  get: function() {
    return this._attributes.value;
  }
});

Object.defineProperty(Value.prototype, 'serialized', {
  get: function() {
    return this._attributes.serialized;
  }
});

Object.defineProperty(Value.prototype, 'validation', {
  get: function() {
    return this._attributes.validation;
  }
});

Object.defineProperty(Value.prototype, 'externalValidation', {
  get: function() {
    return this._attributes.externalValidation;
  }
});

Object.defineProperty(Value.prototype, 'isValid', {
  get: function() {
    return this.validation.isSuccess;
  }
});

Object.defineProperty(Value.prototype, 'isDirty', {
  get: function() {
    var {_attributes: {dirty}, path} = this;
    for (var i = 0, len = path.length; i < len; i++) {
      if (dirty) {
        if (dirty.get(DIRTY_KEY) || dirty.get(path[i])) {
          return true;
        }
      } else {
        return false;
      }
      dirty = dirty.get(path[i]);
    }
    return dirty && (dirty.get(DIRTY_KEY) || dirty.length > 0);
  }
});

class ScalarValue extends Value {

  _update(newValue) {
    var {value, validation} = validate(this.schema, newValue);
    var serialized = this.schema.type.serialize(value);
    return {value, validation, serialized};
  }
}

class MappingValue extends Value {

  _update(value) {
    var {schema} = this;
    return _makeMapping({schema, value});
  }

  map(func, context) {
    return this.schema.children
      .map((_, key) => func.call(context, this.child(key)))
      .toJS();
  }

  forEach(func, context) {
    this.schema.children.forEach((_, key) => {
      return func.call(context, this.child(key), key);
    });
  }
}

class ListValue extends Value {

  _update(value) {
    var {schema} = this;
    return _makeList({schema, value});
  }

  map(func, context) {
    return this.value
      .map((_, key) => func.call(context, this.child(key), key))
      .toJS();
  }

  forEach(func, context) {
    this.value.forEach((_, key) => func.call(context, this.child(key), key));
  }

  emptyChild() {
    return _defaultValue(this.schema.children);
  }

  push(...values) {
    var newValue = this.value.push.apply(this.value, values);
    return this.update(newValue);
  }

  splice() {
    var newValue = this.value.splice.apply(this.value, toArray(arguments));
    return this.update(newValue);
  }
}

function isValue(maybeValue) {
  return maybeValue instanceof Value;
}

function isScalarValue(value) {
  return value instanceof ScalarValue;
}

function isMappingValue(value) {
  return value instanceof MappingValue;
}

function isListValue(value) {
  return value instanceof ListValue;
}

function make(schema, value, externalValidation, onUpdate, dirty, rootRef) {
  externalValidation = externalValidation || ValidationResult.success;
  dirty = dirty || Map.empty();
  var params = _make({schema, value, externalValidation}, true);
  var ctor = _getCtor(schema);
  rootRef = rootRef || (() => value);
  var value = new ctor(new ValueAttributes(merge(params, {onUpdate, dirty, rootRef})), []);
  return value;
}

function _make(args, root) {
  var {schema, value} = args;

  invariant(
    isSchema(schema),
    'make(schema, ...) has received not a schema value as its first argument'
  );

  if (isScalar(schema)) {
    if (value === undefined) {
      if (schema.defaultValue !== undefined) {
        value = schema.defaultValue;
      } else {
        return undefined;
      }
    }
    var {value, validation} = validate(schema, value);
    var serialized = schema.type.serialize(value);
    return merge(args, {value, validation, serialized});
  } else if (isMapping(schema)) {
    return _makeMapping(args, root);
  } else if (isList(schema)) {
    return _makeList(args, root);
  }
}

function _makeMapping(args, root) {
  var {schema, value, externalValidation} = args;
  if (value === undefined) {
    if (schema.defaultValue !== undefined) {
      value = schema.defaultValue;
    } else if (root) {
      value = {};
    } else {
      return undefined;
    }
  }
  if (!(value instanceof OrderedMap)) {
    value = OrderedMap.from(value);
  }

  var _value = {};
  var _serialized = {};
  var _childrenValidation = {};
  var _hasChildError = false;
  var _validation;
  schema.children.forEach((schema, name) => {
    var child = _make({
      schema,
      value: value.get(name)
    });
    if (child === undefined) {
      if (schema.props.get('required')) {
        _hasChildError = true;
        _childrenValidation[name] = ValidationResult.failure('value is required');
      }
      return;
    }
    var {
      value: childValue,
      serialized: childSerialized,
      validation: childValidation
    } = child;
    _value[name] = childValue;
    _serialized[name] = childSerialized;
    if (childValidation.isFailure) {
      _hasChildError = true;
      _childrenValidation[name] = childValidation;
    }
  });
  if (_hasChildError) {
    _validation = new ValidationResult(null, OrderedMap(_childrenValidation));
  } else {
    var {value: _value, validation: _validation} = validate(schema, _value);
  }
  return {
    schema,
    value: value.merge(_value),
    serialized: OrderedMap.from(_serialized),
    validation: _validation,
    externalValidation
  };
}

function _makeList(args, root) {
  var {schema, value, externalValidation} = args;
  if (value === undefined) {
    if (schema.defaultValue !== undefined) {
      value = schema.defaultValue;
    } else if (root) {
      value = [];
    } else {
      return undefined;
    }
  }
  if (!(value instanceof Vector)) {
    value = Vector.from(value);
  }

  var _value = [];
  var _serialized = [];
  var _childrenValidation = {};
  var _hasChildError = false;
  var _validation;
  value.forEach((value, name) => {
    var child = _make({
      schema: schema.child(name),
      value
    });
    if (child === undefined) {
      return;
    }
    var {
      value: childValue,
      serialized: childSerialized,
      validation: childValidation
    } = child;
    _value.push(childValue);
    _serialized.push(childSerialized);
    if (childValidation.isFailure) {
      _hasChildError = true;
      _childrenValidation[name] = childValidation;
    }
  });
  if (_hasChildError) {
    _validation = new ValidationResult(null, OrderedMap(_childrenValidation));
  } else {
    var {value: _value, validation: _validation} = validate(schema, _value);
  }
  return {
    schema,
    value: Vector.from(_value),
    serialized: Vector.from(_serialized),
    validation: _validation,
    externalValidation
  };
}

/**
 * Get value constructor for given schema node.
 *
 * @private
 * @param {Schema} schema
 * @returns {Constructor}
 */
function _getCtor(schema) {
  var constructor;
  if (isScalar(schema)) {
    constructor = ScalarValue;
  } else if (isMapping(schema)) {
    constructor = MappingValue;
  } else if (isList(schema)) {
    constructor = ListValue;
  } else {
    invariant(false);
  }
  return constructor;
}

function _defaultValue(schema) {
  if (schema.defaultValue !== undefined) {
    return schema.defaultValue;
  } else if (isMapping(schema)) {
    return OrderedMap.empty();
  } else if (isList(schema)) {
    return Vector.empty();
  } else {
    return null;
  }
}

module.exports = make;
mergeInto(module.exports, {
  isValue, isScalarValue, isMappingValue, isListValue
});
