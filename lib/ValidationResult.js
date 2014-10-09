/**
 * Data structure which represents a validation result.
 *
 * @jsx React.DOM
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var {Record, OrderedMap, Sequence}  = require('immutable');
var interleaveArray                 = require('./interleaveArray');
var invariant                       = require('./invariant');
var mergeInto                       = require('./mergeInto');

var _ValidationResult = Record({
    error: null,
    children: OrderedMap.empty()
  }, 'ValidationResult');

class ValidationResult extends _ValidationResult {

  child(key) {
    key = '' + key;
    return this.children.get(key, success);
  }

  childIn(keyPath) {
    var result = this;
    for (var i = 0, len = keyPath.length; i < len; i++) {
      result = result.child(keyPath[i]);
      if (result.equals(success)) {
        return result;
      }
    }
    return result;
  }

  updateChild(key, value) {
    // TODO: check if this immutable bug but we can't get correct .get()/.has()
    // with Number as key
    key = '' + key;
    invariant(value instanceof ValidationResult);
    if (
      this.children.length === 0 && value.isSuccess ||
      this.children.length === 1 && this.children.has(key) && value.isSuccess
    ) {
      return success;
    } else {
      return this.set(
        'children',
        value.isSuccess ? this.children.delete(key) : this.children.set(key, value)
      );
    }
  }

  updateChildIn(keyPath, value) {
    if (keyPath.length === 0) {
      return value;
    }

    var i;
    var len;
    var path = [{key: undefined, value: this}];
    var current = this;

    for (i = 0, len = keyPath.length; i < len; i++) {
      var key = keyPath[i];
      path.unshift({key, value: current});
      current = i === keyPath.length - 1 ?
        value :
        current.child(key);
    }

    return path.reduce((update, {key, value}) =>
      key !== undefined ? value.updateChild(key, update) : update, value);
  }
}

Object.defineProperty(ValidationResult.prototype, 'isSuccess', {
  get: function() {
    return this.error === null && this.children.length === 0;
  }
});

Object.defineProperty(ValidationResult.prototype, 'isFailure', {
  get: function() {
    return this.error !== null || this.children.length > 0;
  }
});

Object.defineProperty(ValidationResult.prototype, 'hasError', {
  get: function() {
    return this.error !== null;
  }
});

/**
 * Successful validation result.
 */
var success = new ValidationResult();

success.toString = function() {
  return "ValidationResult { SUCCESS }";
};

/**
 * Construct a validation result which manifests failure.
 *
 * @param {Any} error
 * @param {Map<String, ValidationResult>} children
 */
function failure(error, children) {
  error = error || null;
  if (children) {
    children = Sequence(children)
      .filter((v, k) => !v.equals(success))
      .toOrderedMap();
    if (children.length === 0 && error === null) {
      return success;
    }
    return new ValidationResult({error, children});
  } else {
    if (error === null) {
      return success;
    }
    return new ValidationResult({error});
  }
}

/**
 * Check if argument is a validation result.
 *
 * @param {Any} maybeValidationResult
 */
function isValidationResult(maybeValidationResult) {
  return maybeValidationResult instanceof ValidationResult;
}

module.exports = failure;
mergeInto(module.exports, {
  ValidationResult, isValidationResult,
  failure, success
});
