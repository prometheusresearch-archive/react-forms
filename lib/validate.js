/**
 * Incremental schema validation.
 *
 * @jsx React.DOM
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var {Record, OrderedMap, Sequence}  = require('immutable');
var invariant                       = require('./invariant');
var schema                          = require('./schema');
var ValidationResult                = require('./ValidationResult');
var messages                        = require('./messages');

function unwrapMaybeError(maybeError, maybeValue, value) {
  if (maybeError instanceof Error) {
    return {
      validation: ValidationResult.failure(maybeError.message),
      value: value
    };
  } else {
    return {
      validation: ValidationResult.success,
      value: maybeValue
    };
  }
}

function runValidator(node, value) {
  if (Array.isArray(node.validate)) {
    for (var i = 0, len = node.validate.length; i < len; i++) {
      var validate = node.validate[i];
      if (value !== null) {
        var {validation} = unwrapMaybeError(validate(value, node.props));
        if (validation.isFailure) {
          return {validation, value};
        }
      }
    }
    return {validation: ValidationResult.success, value};
  } else if (node.validate) {
    return unwrapMaybeError(node.validate(value, node.props), value, value);
  } else {
    return {validation: ValidationResult.success, value};
  }
}

/**
 * Deserialize value given the schema node.
 *
 * @param {Schema} node
 * @param {Value} value
 */
function deserialize(node, value) {
  var maybeError = node.type.deserialize(value);
  return unwrapMaybeError(maybeError, maybeError, value);
}

/**
 * Validate value against schema but only using the root schema node.
 *
 * This method is useful when doing an incremental validation.
 *
 * @param {Schema} node
 * @param {Any} value
 * @returns {ValidationResult}
 */
function validate(node, value, children) {
  var required = node.props.get('required');
  if (required && value === undefined) {
    return {value, validation: ValidationResult.failure(messages.VALUE_IS_REQUIRED)};
  }
  if (schema.isMapping(node)) {
    if (children && !Sequence(children).every((validation) => validation.isSuccess)) {
      return {value, validation: ValidationResult(null, children)};
    }
    return runValidator(node, value);
  } else if (schema.isList(node)) {
    if (children && !Sequence(children).every((validation) => validation.isSuccess)) {
      return {value, validation: ValidationResult(null, children)};
    }
    return runValidator(node, value);
  } else if (schema.isScalar(node)) {
    if (value !== null) {
      var {value, validation} = deserialize(node, value);
      if (value === null) {
        if (required) {
          return {value, validation: ValidationResult.failure(messages.VALUE_IS_REQUIRED)};
        } else {
          return {value, validation: ValidationResult.success};
        }
      }
      if (validation.isFailure) {
        return {value, validation};
      }
    }
    return runValidator(node, value);
  } else {
    invariant(
      false,
      'do not know how to validate ' + node + ' of type ' + node.constructor
    );
  }
}

module.exports = validate;
