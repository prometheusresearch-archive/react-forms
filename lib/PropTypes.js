/**
 * validators for react forms component properties.
 *
 * @copyright prometheus research, llc 2014
 */
'use strict';

var ValueCtor   = require('./Value');
var {Node}      = require('./schema');

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
  if (props[name] !== undefined && !(props[name] instanceof ValueCtor)) {
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

module.exports = {Value, Schema};
