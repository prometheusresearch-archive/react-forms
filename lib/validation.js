/**
 * Schema validation
 *
 * @jsx React.DOM
 */
'use strict';

var invariant         = require('react/lib/invariant');
var schema            = require('./schema');
var getTypeFromSchema = require('./getTypeFromSchema');
var validators        = require('./validators');

var exists     = validators.exists;
var nonEmpty   = validators.nonEmpty;

function deserialize(node, value) {
  if (value === undefined || value === null) {
    return {value, validation: success};
  }
  var type = getTypeFromSchema(node);
  try {
    value = type.deserialize(value);
  } catch(e) {
    return {
      validation: failure(e.message),
      value
    };
  }
  return {
    validation: success,
    value
  };
}

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
function validateOnly(node, value, children) {
  if (schema.isSchema(node)) {
    return validateSchemaOnly(node, value, children);
  } else if (schema.isList(node)) {
    return validateListOnly(node, value, children);
  } else if (schema.isProperty(node)) {
    return validateProperty(node, value, children);
  } else {
    invariant(
      false,
      'do not know how to validate %s of type %s', node, node.constructor
    );
  }
}

function validateSchema(node, value) {
  var childrenValidation = validateSchemaChildren(node, value);

  var convertedValue = value;

  if (Object.keys(childrenValidation.children).length > 0) {
    convertedValue = {};
    for (var k in value) {
      convertedValue[k] = childrenValidation.children[k] !== undefined ?
        childrenValidation.children[k] :
        value[k];
    }
  }

  var validation = validateSchemaOnly(
      node,
      convertedValue,
      childrenValidation.validation
  );

  return validation;
}

function validateSchemaOnly(node, value, children) {

  if (!areChildrenValid(children)) {
    return {
      value,
      validation: {
        isSuccess: false,
        isFailure: true,
        validation: {failure: undefined},
        children: children
      }
    };
  }

  var deserialized = deserialize(node, value);

  if (deserialized.validation.isFailure) {
    return deserialized;
  }

  var validator = exists.andThen(node.props.validate);
  var validation = validator(value, node.props);

  var isSuccess = validators.isSuccess(validation);

  return {
    value: deserialized.value,
    validation: {
      validation,
      isSuccess,
      isFailure: !isSuccess
    }
  };
}

function validateSchemaChildren(node, value) {
  var validation = {};
  var children = {};

  if (value && node.children) {
    for (var name in node.children) {
      var childValidation = validate(node.children[name], value[name]);

      if (childValidation.validation.isFailure) {
        validation[name] = childValidation.validation;
      }

      children[name] = childValidation.value;
    }
  }

  return {validation, children};
}

function validateList(node, value) {
  var childrenValidation = validateListChildren(node, value);

  var validation = validateListOnly(
      node,
      childrenValidation.children,
      childrenValidation.validation
  );
  return validation;
}

function validateListOnly(node, value, children) {

  if (!areChildrenValid(children)) {
    return {
      value,
      validation: {
        isSuccess: false,
        isFailure: true,
        validation: {failure: undefined},
        children: children
      }
    };
  }

  var deserialized = deserialize(node, value);

  if (deserialized.validation.isFailure) {
    return deserialized;
  }

  var validator = nonEmpty.andThen(node.props.validate);
  var validation = validator(deserialized.value, node.props);
  var isSuccess = validators.isSuccess(validation);

  return {
    value: deserialized.value,
    validation: {
      validation,
      isSuccess,
      isFailure: !isSuccess
    }
  };
}

function validateListChildren(node, value) {
  var validation = {};
  var children = [];

  if (value && node.children) {
    for (var idx = 0, len = value.length; idx < len; idx++) {
      var childValidation = validate(node.children, value[idx]);
      if (childValidation.validation.isFailure) {
        validation[idx] = childValidation.validation;
      }
      children[idx] = childValidation.value;
    }
  }

  return {validation, children};
}

function validateProperty(node, value) {

  var deserialized = deserialize(node, value);

  if (deserialized.validation.isFailure) {
    return deserialized;
  }

  var validator = exists.andThen(node.props.validate);
  var validation = validator(deserialized.value, node.props);
  var isSuccess = validators.isSuccess(validation);

  return {
    value: deserialized.value,
    validation: {
      validation,
      isSuccess,
      isFailure: !isSuccess
    }
  };
}

function areChildrenValid(children) {
  for (var k in children) {
    if (children[k].isFailure) {
      return false;
    }
  }
  return true;
}

var success = {
  isSuccess: true,
  isFailure: false,
  children: {}
};

function failure(failure) {
  return {
    validation: {failure},
    isSuccess: false,
    isFailure: true
  };
}

module.exports = {
  validate, validateOnly,
  success, failure
};
