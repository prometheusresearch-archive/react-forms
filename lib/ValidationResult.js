/**
 * @copyright Prometheus Research, LLC 2014
 * @preventMungle
 */
'use strict';

var Immutable = require('immutable');
var {Map, is} = Immutable;

var EMPTY_MAP = Map();

var VALIDATION_SUCCESS = new ValidationResult(null, EMPTY_MAP);

class ValidationResult {

  constructor(error, children) {
    this.error = error;
    this.children = children ? Map(children) : EMPTY_MAP;
  }

  equals(other) {
    return (
      other !== null && other !== undefined &&
      is(this.error, other.error) &&
      is(this.children, other.children)
    );
  }

  get(key) {
    return this.children.get(key, VALIDATION_SUCCESS);
  }

  has(key) {
    return this.children.has(key);
  }

  get isSuccess() {
    return this.error === null && this.children.size === 0;
  }

  get isFailure() {
    return !this.isSuccess;
  }

  toString() {
    if (this.isSuccess) {
      return `${this.constructor.name} { SUCCESS }`;
    } else {
      return `${this.constructor.name} { error: ${this.error}, children: ${this.children} }`;
    }
  }

  static error(message) {
    return new ValidationResult(message, EMPTY_MAP);
  }

  static children(children) {
    return new ValidationResult(null, children);
  }

  static success() {
    return VALIDATION_SUCCESS;
  }

}

module.exports = ValidationResult;
