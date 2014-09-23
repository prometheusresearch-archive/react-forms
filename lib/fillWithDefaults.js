/**
 * @jsx React.DOM
 */
'use strict';

var s                        = require('./schema');
var u                        = require('./utils');
var getDefaultValueForSchema = require('./getDefaultValueForSchema');

function fillWithDefaults(schema, value) {
  u.invariant(s.isNode(schema), 'invalid schema node');

  if (value === undefined) {
    value = getDefaultValueForSchema(schema);
  }

  if (s.isSchema(schema)) {
    var result = {};
    schema.forEach(function(subschema, name) {
      result[name] = fillWithDefaults(subschema, value[name]);
    });
    return result;
  } else if (s.isList(schema)) {
    return value.map(function(item) {
      return fillWithDefaults(schema.children, item);
    });
  } else if (s.isProperty(schema)) {
    return value;
  }
}

module.exports = fillWithDefaults;
