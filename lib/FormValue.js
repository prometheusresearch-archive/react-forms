/**
 * FormValue is a set of classes which incapsulate form value along with schema
 * and validation state.
 *
 * @jsx React.DOM
 */
'use strict';

var lens                     = require('./lens');
var invariant                = require('./utils').invariant;
var v                        = require('./validation');
var s                        = require('./schema');
var getDefaultValueForSchema = require('./getDefaultValueForSchema');

var str = JSON.stringify.bind(JSON);

/**
 * Abstract base class for form values.
 */
class Value {

  constructor(
      schemaLens,
      valueLens,
      serializedValueLens,
      validationLens,
      path) {

    this.schemaLens = schemaLens;
    this.valueLens = valueLens;
    this.serializedValueLens = serializedValueLens;
    this.validationLens = validationLens;

    this.path = path;

    this.schema = schemaLens.val();
    this.value = valueLens.val();
    this.serializedValue = serializedValueLens.val();
    this.validation = validationLens.val();
  }

  merge(value) {
    invariant(
      value.schemaLens.root() === this.schemaLens.root(),
      'trying to merge with a value which have different schema'
    );

    return value;
  }
}

class PropetyValue extends Value {

  updateSerializedValue(serializedValue) {
    var serializedValueLens = this.serializedValueLens.mod(serializedValue);
    var validation = v.validate(this.schema, serializedValue);
    var validationLens = this.validationLens.update(validation.validation);
    var valueLens = this.valueLens;

    if (v.isSuccess(validation.validation)) {
      valueLens = this.valueLens.mod(validation.value);
    }

    return new this.constructor(
      this.schemaLens,
      valueLens,
      serializedValueLens,
      validationLens,
      this.path
    );
  }
}

/**
 * Abstract base class for composite form values.
 */
class CompositeValue extends Value {

  /**
   * Get a sub-value of a composite value.
   *
   * @param {String} name
   * @returns {Value}
   */
  get(name) {
    var schemaLens = this.getSchemaLens(name);
    var schema = schemaLens.val();

    invariant(
      !schemaLens.isUndefined(),
      `trying to get a value for an invalid key ${str(name)}`
    );

    var valueLens = this.valueLens.get(name, getDefaultValueForSchema(schema));
    var value = valueLens.val();

    return _make(
      schemaLens,
      valueLens,
      this.serializedValueLens.get(name, v.serialize(schema, value)),
      this.validationLens.get('children', {}).get(name, v.success),
      this.path.concat(name)
    );
  }

  /**
   * Produce a new value by merging with another value.
   *
   * @param {Value} value
   * @returns {Value}
   */
  merge(value) {
    invariant(
      value.schemaLens.root() === this.schemaLens.root(),
      'trying to merge with a value which have different schema'
    );

    var valueLens = this.valueLens
      .for(value.valueLens.root());
    var serializedValueLens = this.serializedValueLens
      .for(value.serializedValueLens.root());
    var validationLens = this.validationLens
      .for(value.validationLens.root());

    var local = v.validateOnly(
      this.schema,
      valueLens.val(),
      validationLens.val().children
    );

    validationLens = validationLens.update(local.validation);

    if (v.isFailure(validationLens.val())) {
      // revert to the previous value
      valueLens = this.valueLens;
    } else {
      valueLens = valueLens.mod(local.value);
    }

    return new this.constructor(
      this.schemaLens,
      valueLens,
      serializedValueLens,
      validationLens,
      this.path
    );
  }

}

class ListValue extends CompositeValue {

  getSchemaLens() {
    return this.schemaLens.get('children');
  }

  /**
   * Produce a new ListValue by adding a value
   *
   * @param {Any} value
   * @returns {FormValue}
   */
  add(value) {
    if (value === undefined) {
      value = getDefaultValueForSchema(this.schema.children);
    }

    var serializedValue = v.serialize(this.schema.children, value);

    return new this.constructor(
      this.schemaLens,
      this.valueLens.mod(this.value.concat(value)),
      this.serializedValueLens.mod(this.serializedValue.concat(serializedValue)),
      this.validationLens,
      this.path
    );
  }

  /**
   * Produce a new ListValue by removing an element by index.
   *
   * @param {Number} index
   * @returns {FormValue}
   */
  remove(index) {
    var value = this.value.slice(0);
    var serializedValue = this.serializedValue.slice(0);

    value.splice(index, 1);
    serializedValue.splice(index, 1);

    return new this.constructor(
      this.schemaLens,
      this.valueLens.mod(value),
      this.serializedValueLens.mod(serializedValue),
      this.validationLens,
      this.path
    );
  }
}

class SchemaValue extends CompositeValue {

  getSchemaLens(name) {
    return this.schemaLens.get('children').get(name);
  }
}

/**
 * Make a form value.
 */
function _make(
    schemaLens,
    valueLens,
    serializedValueLens,
    validationLens,
    path) {
  path = path || [];

  var schema = schemaLens.val();

  var constructor;

  if (s.isSchema(schema)) {
    constructor = SchemaValue;
  } else if (s.isList(schema)) {
    constructor = ListValue;
  } else if (s.isProperty(schema)) {
    constructor = PropetyValue;
  } else {
    invariant(
      false,
      "do not know how to construct value"
    );
  }

  return new constructor(
    schemaLens,
    valueLens,
    serializedValueLens,
    validationLens,
    path
  );
}

function make(schema, value, serializedValue, validation, path) {
  if (validation === undefined) {
    validation = v.validate(schema, value).validation;
  }

  if (serializedValue === undefined) {
    serializedValue = v.serialize(schema, value);
  }

  var schemaLens = lens(schema);
  var valueLens = lens(value);
  var serializedValueLens = lens(serializedValue);
  var validationLens = lens(validation);

  return _make(
    schemaLens,
    valueLens,
    serializedValueLens,
    validationLens,
    path
  );
}

function isFormValue(value) {
  return value instanceof Value;
}

module.exports = make;
module.exports.isFormValue = isFormValue;
