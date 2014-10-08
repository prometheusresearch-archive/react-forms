/**
 * Validators for React Forms component properties.
 *
 * @jsx React.DOM
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var {isValue}   = require('./Value');
var {isSchema}  = require('./schema');
var invariant   = require('./invariant');

function makePropType(validate) {
  function validator(props, name, component) {
    return validate(props, name, component);
  }
  validator.isRequired = function(props, name, component) {
    if (props[name] === undefined) {
      return new Error(`Prop "${name}" is required for component "${component}"`);
    } else {
      return validate(props, name, component);
    }
  }
  return validator;
}

var Value = makePropType(function Value(props, name, component) {
  if (props[name] !== undefined && !isValue(props[name])) {
    return new Error(`Invalid Value object passed as prop "${name}" to component "${component}"`);
  }
});

var ValueOfType = makePropType(function ValueOfType(type) {
  invariant(
    typeof type.is === 'function',
    'ValueOfType(schemaType) should receive one of Mapping, List or Scalar as its argument'
  );
  return function ValueOfType(props, name, component) {
    var maybeError = Value(props, name, component);
    if (maybeError !== undefined) {
      return maybeError;
    }
    if (props[name] !== undefined && !type.is(props[name].schema)) {
      return new Error(
        `Invalid Value object passed as prop "${name}" to component "${component}",
        expected schema type of "${type.name}" but got "${props[name].schema.constructor.name}"`);
    }
  };
});

var Schema = makePropType(function Schema(props, name, component) {
  if (props[name] !== undefined && !isSchema(props[name])) {
    return new Error(`Invalid Schema object passed as prop "${name}" to component "${component}"`);
  }
});

module.exports = {Value, ValueOfType, Schema};
