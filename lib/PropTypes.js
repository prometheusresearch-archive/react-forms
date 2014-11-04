/**
 * Validators for React Forms component properties.
 *
 * @jsx React.DOM
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var RefCtor     = require('./value/Ref');
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
  if (props[name] !== undefined && !(props[name] instanceof RefCtor)) {
    return new Error(`Prop '${name}' passed to <${component} /> is not a reference`);
  }
});

var Value = makePropType(function Value(props, name, component) {
  if (props[name] !== undefined && !(props[name] instanceof ValueBase)) {
    return new Error(`Invalid Value object passed as prop "${name}" to <${component} />`);
  }
});

var Schema = makePropType(function Schema(props, name, component) {
  if (props[name] !== undefined && !(props[name] instanceof Node)) {
    return new Error(
      `Invalid Schema object passed as prop "${name}" to <${component} />`
    );
  }
});

module.exports = {Value, Schema, Ref};
