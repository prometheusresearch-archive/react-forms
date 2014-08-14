/**
 * @jsx React.DOM
 * @preventMunge
 */
'use strict';

var v                        = require('./validation');
var s                        = require('./schema');
var emptyFunction            = require('./emptyFunction');
var invariant                = require('./invariant');
var merge                    = require('./merge');
var getDefaultValueForSchema = require('./getDefaultValueForSchema');

class Value {

  constructor(attrs) {

    invariant(
      attrs.schema,
      'Value: schema attribute is requiered'
    );

    this.parent = attrs.parent;
    this.name = attrs.name;
    this.path = attrs.path;
    this.schema = attrs.schema;
    this.value = attrs.value;
    this.serialized = attrs.serialized;
    this.validation = attrs.validation;
    this.externalValidation = attrs.externalValidation || v.success;
    this.onUpdate = attrs.onUpdate || emptyFunction;

    this.isUndefined = this.value === undefined;

    if (this.value === undefined) {
      this.value = getDefaultValueForSchema(this.schema);
    }

    if (this.validation === undefined) {
      var validated = v.validate(this.schema, this.value);
      this.value = validated.value;
      this.validation = validated.validation;
    }

    if (this.serialized === undefined) {
      this.serialized = v.serialize(this.schema, this.value);
    }
  }

  root() {
    var value = this;

    while (value.parent) {
      value = value.parent;
    }

    return value;
  }

  for_(root) {
    var value = root;

    for (var i = 0, len = this.path.length; i < len; i++) {
      value = value.get(this.path[i]);
    }

    return value;
  }

  get(name) {
    return _make({
      parent: this,
      name,
      path: this.path.concat(name),
      schema: this.schema.get(name),
      value: this.value[name],
      serialized: this.serialized[name],
      validation: (this.validation.children && this.validation.children[name]) || v.success,
      externalValidation: (this.externalValidation.children && this.externalValidation.children[name]) || v.success,
      onUpdate: this.onUpdate
    });
  }

  update(update) {
    var current = this;
    update = this._updateSelf(update);

    while (current.parent) {
      update = current.parent._updateChild(current.name, update);
      current = current.parent;
    }

    return this.for_(make({
      schema: current.schema,
      value: update.value,
      serialized: update.serialized,
      validation: update.validation,
      externalValidation: current.externalValidation,
      onUpdate: this.onUpdate
    }));
  }

  notify() {
    this.onUpdate(this);
    return this;
  }

  _updateSelf(update) {
    invariant(
      !(update.value === undefined
        && update.serialized === undefined
        && update.validation === undefined)
    );

    if (update.value === undefined || update.validation === undefined) {
      var toValidate = update.value !== undefined ?
        update.value :
        update.serialized !== undefined ?
        update.serialized :
        this.value;
      var validated = v.validate(this.schema, toValidate);
      update.value = validated.value;
      update.validation = mergeValidation(
        validated.validation,
        update.validation);
    }

    if (update.serialized === undefined) {
      update.serialized = v.serialize(this.schema, update.value);
    }

    return update;
  }

}

class MappingValue extends Value {

  _updateChild(name, update) {
    update = this._updateSelf(update);

    var value = {};
    var serialized = {};
    var validation = {
      validation: this.validation.validation,
      children: {}
    };

    var n;

    for (n in this.value) {
      value[n] = this.value[n];
      serialized[n] = this.serialized[n];
    }

    for (n in this.validation.children) {
      validation.children[n] = this.validation.children[n];
    }

    value[name] = update.value;
    serialized[name] = update.serialized;
    validation.children[name] = update.validation;

    var validated = v.validateOnly(this.schema, value, validation.children);

    value = validated.value;
    validation = validated.validation;

    return {value, serialized, validation};
  }
}

class ListValue extends Value {

  _updateChild(name, update) {
    update = this._updateSelf(update);

    var value = this.value.slice(0);
    var serialized = this.serialized.slice(0);

    var validation = {
      validation: this.validation.validation,
      children: {}
    };

    for (var n in this.validation.children) {
      validation.children[n] = this.validation.children[n];
    }

    value[name] = update.value;
    serialized[name] = update.serialized;
    validation.children[name] = update.validation;

    return {value, serialized, validation};
  }

  swap(aIndex, bIndex) {
    var value = this.value.slice(0);
    var serialized = this.serialized.slice(0);

    value.splice(bIndex, 0, value.splice(aIndex, 1)[0]);
    serialized.splice(bIndex, 0, serialized.splice(aIndex, 1)[0]);

    return this.update({value, serialized});
  }

  add(value) {
    if (value === undefined) {
      value = getDefaultValueForSchema(this.schema.children);
    }

    return this.update({value: this.value.concat(value)});
  }

  remove(index) {
    var value = this.value.slice(0);
    var serialized = this.serialized.slice(0);

    value.splice(index, 1);
    serialized.splice(index, 1);

    return this.update({value, serialized});
  }
}

class ScalarValue extends Value {

}

function mergeValidation(a, b) {
  if (b === undefined || b === null) {
    return a;
  }

  var result = {
    validation: {},
    children: {}
  };

  if (b.validation) {
    result.validation = b.validation;
  } else if (a.validation) {
    result.validation = a.validation;
  }

  var k;

  if (b.children) {
    for (k in a.children) {
      result.children[k] = mergeValidation(a.children[k], b.children[k]);
    }

    for (k in b.children) {
      if (result.children[k] === undefined) {
        result.children[k] = b.children[k];
      }
    }
  } else {
    result.children = a.children;
  }

  return result;
}

function _make(attrs) {
  var constructor;
  var schema = attrs.schema;

  if (s.isMapping(schema)) {
    constructor = MappingValue;
  } else if (s.isList(schema)) {
    constructor = ListValue;
  } else if (s.isScalar(schema)) {
    constructor = ScalarValue;
  } else {
    invariant(false, 'invalid schema node');
  }

  return new constructor(attrs);
}

function make(attrs) {
  attrs = merge(attrs, {name: null, path: []});
  return _make(attrs);
}

function isValue(value) {
  return value instanceof Value;
}

module.exports = make;
module.exports.isValue = isValue;
