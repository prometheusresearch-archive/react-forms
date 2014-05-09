/**
 * @jsx React.DOM
 */
'use strict';

var utils         = require('./utils');
var messages      = require('./messages');

var success = {failure: undefined};
var commonFailure = {failure: messages.INVALID_VALUE};

function isSuccess(validation) {
  return validation.failure === undefined;
}

function isFailure(validation) {
  return validation.failure !== undefined;
}

function make(func) {
  var wrapper = (value, schema) => {
    var maybeFailure = func(value, schema);
    if (maybeFailure === true) {
      return success;
    }
    if (maybeFailure === false) {
      return commonFailure;
    }
    if (utils.isString(maybeFailure)) {
      return {failure: maybeFailure};
    }
    return maybeFailure;
  };
  wrapper.andThen = andThen.bind(null, wrapper);
  wrapper.isValidator = true;
  return wrapper;
}

function validatorEmpty(func) {
  if (!func) {
    return utils.emptyFunction.thatReturnsTrue;
  }
  if (func.isValidator) {
    return func;
  }

  return make(func);
}

function validator(func) {
  if (!func) {
    return utils.emptyFunction.thatReturnsTrue;
  }
  if (func.isValidator) {
    return func;
  }

  var wrapper = (value, schema) =>
    value === null || value === undefined ?
      true :
      func(value, schema);

  return make(wrapper);
}

function andThen(first, second) {
  if (!second) {
    return first;
  }

  second = validator(second);

  var wrapper = (value, schema) => {
    var validation = first(value, schema);
    return isFailure(validation) ?
      validation :
      second(value, schema);
  };

  return make(wrapper);
}

var exists = validatorEmpty((value, schema) =>
  schema.required && (value === null || value === undefined) ?
    messages.VALUE_IS_REQUIRED :
    true);

var nonEmpty = validator((value, schema) =>
  schema.nonEmpty && value.length === 0 ?
    messages.AT_LEAST_ONE_ITEM_IS_REQUIRED :
    true);

module.exports = {
  validatorEmpty,
  validator,

  isSuccess,
  isFailure,

  success,
  exists,
  nonEmpty
};
