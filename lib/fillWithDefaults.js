/**
 * @jsx React.DOM
 */
'use strict';

var {isNode, isSchema, isList, isProperty} = require('./schema');
var {invariant} = require('./utils');

function fillWithDefaults(schema, value) {
  invariant(isNode(schema), 'invalid schema node');

  var defaultValue;
  if (schema && schema.props && schema.props.defaultValue !== undefined) {
    defaultValue = schema.props.defaultValue;
  }

  if (value === undefined) {
    if (defaultValue === undefined) {
      return value;
    } else {
      value = defaultValue;
    }
  }

  if (isSchema(schema)) {
    var result = {};
    schema.forEach(function(subschema, name) {
      var subvalue = fillWithDefaults(subschema, value[name]);
      if (subvalue !== undefined) {
        result[name] = subvalue;
      }
    });
    return result;
  } else if (isList(schema)) {
    return value.map(function(item) {
      return fillWithDefaults(schema.children, item);
    });
  } else if (isProperty(schema)) {
    return value;
  }
}

module.exports = fillWithDefaults;
