/**
 * Schema validation
 *
 * @jsx React.DOM
 */
'use strict';

var invariant  = require('react/lib/invariant');
var schema     = require('./schema');
var validators = require('./validators');

var exists     = validators.exists;
var nonEmpty   = validators.nonEmpty;

var Schema     = schema.Schema;
var List       = schema.List;
var Property   = schema.Property;

/**
 * Validate value against schema
 *
 * @param {Schema} node
 * @param {Any} value
 * @returns {Validation}
 */
function validate(node, value) {
  if (schema.isSchema(node)) {
    return validateSchema(node, value);
  } else if (schema.isList(node)) {
    return validateList(node, value);
  } else if (schema.isProperty(node)) {
    return validateProperty(node, value);
  } else {
    invariant(
      false,
      'do not know how to validate %s of type %s', node, node.constructor
    );
  }
}

/**
 * Validate value against schema but only using the root schema node.
 *
 * This method is useful when doing an incremental validation.
 *
 * @param {Schema} node
 * @param {Any} value
 * @returns {Validation}
 */
function validateOnly(node, value) {
  if (schema.isSchema(node)) {
    return validateSchemaOnly(node, value);
  } else if (schema.isList(node)) {
    return validateListOnly(node, value);
  } else if (schema.isProperty(node)) {
    return validateProperty(node, value);
  } else {
    invariant(
      false,
      'do not know how to validate %s of type %s', node, node.constructor
    );
  }
}

function validateSchema(schema, value) {
  var children = validateSchemaChildren(schema, value);
  var validation = validateSchemaOnly(schema, value, children);
  validation.children = children;
  return validation;
}

function validateSchemaOnly(schema, value, children) {
  var validator = exists.andThen(schema.props.validate);
  var validation = validator(value, schema.props);

  var areChildrenValid = children !== undefined ?
    Object.keys(children).length === 0 :
    true;
  var isSuccess = validators.isSuccess(validation) && areChildrenValid;

  return {
    validation,
    isSuccess,
    isFailure: !isSuccess
  };
}

function validateSchemaChildren(schema, value) {
  var validationMap = {};

  if (value && schema.children) {
    for (var name in schema.children) {
      var childValidation = validate(schema.children[name], value[name]);

      if (childValidation.isFailure) {
        validationMap[name] = childValidation;
      }
    }
  }

  return validationMap;
}

function validateList(schema, value) {
  var children = validateListChildren(schema, value);
  var validation = validateListOnly(schema, value, children);
  validation.children = children;
  return validation;
}

function validateListOnly(schema, value, children) {
  var validator = nonEmpty.andThen(schema.props.validate);
  var validation = validator(value, schema.props);

  var areChildrenValid = children !== undefined ?
    Object.keys(children).length === 0 :
    true;
  var isSuccess = validators.isSuccess(validation) && areChildrenValid;

  return {
    validation,
    isSuccess,
    isFailure: !isSuccess
  };
}

function validateListChildren(schema, value) {
  var validationMap = {};

  if (value && schema.children) {
    for (var idx = 0, len = value.length; idx < len; idx++) {
      var childValidation = validate(schema.children, value[idx]);
      if (childValidation.isFailure) {
        validationMap[idx] = childValidation;
      }
    }
  }

  return validationMap;
}

function validateProperty(schema, value) {
  var validator = exists.andThen(schema.props.validate);
  var validation = validator(value, schema.props);
  var isSuccess = validators.isSuccess(validation);

  return {
    validation,
    isSuccess,
    isFailure: !isSuccess
  };
}

var success = {
  isSuccess: true,
  isFailure: false,
  children: {}
};

module.exports = {validate, validateOnly, success};
