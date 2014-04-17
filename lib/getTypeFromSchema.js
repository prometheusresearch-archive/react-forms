/**
 * @jsx React.DOM
 */
'use strict';

var invariant = require('react/lib/invariant');
var isString  = require('./isString');
var types     = require('./types');

function getTypeFromSchema(schema) {
  if (schema && schema.props.type) {
    if (isString(schema.props.type)) {
      var type = types[schema.props.type];
      invariant(type, 'unknown type %s', schema.props.type);
      return type;
    }

    return schema.props.type;
  }

  return types.any;
}

module.exports = getTypeFromSchema;
