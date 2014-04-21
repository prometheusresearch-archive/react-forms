/**
 * @jsx React.DOM
 */
'use strict';

var invariant = require('react/lib/invariant');
var schema    = require('./schema');

/**
 * Get default value for schema node
 *
 * @param {SchemaNode} node
 * @returns {Any}
 */
function getDefaultValueForSchema(node) {
  if (schema.isSchema(node)) {
    return {};
  } else if (schema.isList(node)) {
    return [];
  } else if (schema.isProperty(node)) {
    return null;
  } else {
    invariant(
      false,
      'do not know how to infer default value for %s', node
    );
  }
}

module.exports = getDefaultValueForSchema;
