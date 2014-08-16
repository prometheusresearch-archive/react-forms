/**
 * Validators for React Forms component properties.
 *
 * @jsx React.DOM
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var {isValue}   = require('./Value');
var {isSchema}  = require('./schema');

function Value(props, name, component) {
  if (props[name] !== undefined && !isValue(props[name])) {
    return new Error(`Invalid Value object passed as prop "${name}" to component "${component}"`);
  }
}

function ValueOfType(type) {
  return function ValueOfType(props, name, component) {
    var maybeError = Value(props, name, component);
    if (maybeError !== undefined) {
      return maybeError;
    }
    if (props[name] !== undefined && !(props[name].schema instanceof type)) {
      return new Error(
        `Invalid Value object passed as prop "${name}" to component "${component}",
        expected schema type of "${type.name}" but got "${props[name].constructor.name}"`);
    }
  };
}

function Schema(props, name, component) {
  if (props[name] !== undefined && !isSchema(props[name])) {
    return new Error(`Invalid Schema object passed as prop "${name}" to component "${component}"`);
  }
}

module.exports = {Value, ValueOfType, Schema};
