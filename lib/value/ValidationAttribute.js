'use strict';

var Attribute = require('./Attribute');
var {fromJS, is, Map} = require('immutable');

class ValidationResult {

  constructor(error, children) {
    this.error = error;
    this.children = children ? fromJS(children) : Map();
  }

  equals(other) {
    return (
      other !== null && other !== undefined &&
      is(this.error, other.error) &&
      is(this.children, other.children)
    );
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
    return new ValidationResult(message, Map());
  }

  static success() {
    return new ValidationResult(null, Map());
  }

}

var SUCCESS = ValidationResult.success();

class ValidationAttribute extends Attribute {

  initial(value, node) {
    return validate(node, value);
  }

  get(key, attribute, attributes, value, node, force) {
    if (force || !attribute || !attribute.children.has(key)) {
      return validate(node, value);
    }
    return attribute.children.has(key) ?
      attribute.children.get(key) :
      validate(node, value);
  }

  merge(children, attribute, attributes, value, node) {
    children = children.filter(validation => !validation.isSuccess).toMap();
    if (children.size === 0) {
      return validate(node, value);
    } else {
      children = attribute.children.merge(children);
      return new ValidationResult(null, children);
    }
  }
}

/**
 * Validate value against schema node.
 *
 * @param {Node} node
 * @param {Any} value
 */
function validate(node, value) {
  var result;
  // Check if validation implemented through a method on schema node
  if (node.validate) {
    result = node.validate(value);
  // otherwise check `validate` prop
  } else {
    var validate = node.props.get('validate');
    // `validate` could be an array for convenienve
    if (Array.isArray(validate)) {
      for (var i = 0, len = validate.length; i < len; i++) {
        result = validate[i](node, value);
        if (result instanceof Error) {
          break;
        }
      }
    } else  if (validate) {
      result = validate(node, value);
    }
  }
  if (result instanceof Error) {
    return new ValidationResult(result.message);
  } else {
    return SUCCESS;
  }
}

module.exports = ValidationAttribute;
module.exports.ValidationResult = ValidationResult;
module.exports.ValidationAttribute = ValidationAttribute;
