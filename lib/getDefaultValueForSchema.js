/**
 * @jsx React.DOM
 */
'use strict';

var invariant = require('./invariant');
var schema    = require('./schema');

/**
 * Get default value for schema node
 *
 * @param {SchemaNode} node
 * @returns {Any}
 */
function getDefaultValueForSchema(node) {
  if (node && node.props && node.props.defaultValue !== undefined) {
    return node.props.defaultValue;
  }
  if (schema.isMapping(node)) {
    return {};
  } else if (schema.isList(node)) {
    return [];
  } else if (schema.isScalar(node)) {
    return null;
  } else {
    invariant(
      false,
      'do not know how to infer default value for ' + node
    );
  }
}

module.exports = getDefaultValueForSchema;
