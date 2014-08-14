/**
 * @jsx React.DOM
 */
'use strict';

var isValue = require('./Value').isValue;
var schema  = require('./schema');

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

module.exports = {Value, ValueOfType};
