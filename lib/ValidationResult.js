/**
 * @copyright Prometheus Research, LLC 2014
 * @preventMungle
 */
'use strict';

var Immutable = require('immutable');
var {Map, is} = Immutable; // jshint ignore:line

var EMPTY_MAP = Map(); // jshint ignore:line

class ValidationResult {

  constructor(error, children) {
    this.error = error;
    this.children = children ? Map(children).mapKeys(k => String(k)) : EMPTY_MAP; // jshint ignore:line
  }

  equals(other: any) {
    return (
      other != null && // jshint ignore:line
      is(this.error, other.error) &&
      is(this.children, other.children)
    );
  }

  get(key: string | number) {
    return this.children.get(String(key), VALIDATION_SUCCESS);
  }

  has(key) {
    return this.children.has(String(key));
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

  toJS() {
    var {error, children} = this;
    return {error, children};
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

var VALIDATION_SUCCESS = new ValidationResult(null, EMPTY_MAP);

module.exports = ValidationResult;
