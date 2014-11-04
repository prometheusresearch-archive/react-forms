/**
 * Validators for React Forms component properties.
 *
 * @jsx React.DOM
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var Ref         = require('./value/Ref');
var ValueBase   = require('./value/ValueBase');
var {Node}      = require('./value/schema');
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

var Ref = makePropType(function Ref(props, name, component) {
  if (props[name] !== undefined && !(props[name] instanceof Ref)) {
    return new Error(`Prop "${name}" to component "${component}" is not a reference`);
  }
});

var Value = makePropType(function Value(props, name, component) {
  if (props[name] !== undefined && !(props[name] instanceof ValueBase)) {
    return new Error(`Invalid Value object passed as prop "${name}" to component "${component}"`);
  }
});

var ValueOfType = makePropType(function ValueOfType(type) {
  return function ValueOfType(props, name, component) {
    var maybeError = Value(props, name, component);
    if (maybeError !== undefined) {
      return maybeError;
    }
    if (props[name] !== undefined && (props[name].node instanceof type)) {
      return new Error(
        `Invalid Value object passed as prop "${name}" to component "${component}",
        expected schema type of "${type.name}" but got "${props[name].schema.constructor.name}"`);
    }
  };
});

var Schema = makePropType(function Schema(props, name, component) {
  if (props[name] !== undefined && !(props[name] instanceof Node)) {
    return new Error(`Invalid Schema object passed as prop "${name}" to component "${component}"`);
  }
});

module.exports = {Value, ValueOfType, Schema, Ref};
