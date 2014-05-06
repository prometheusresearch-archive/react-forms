/**
 * @jsx React.DOM
 */
'use strict';

var utils     = require('./utils');
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
  if (schema.isSchema(node)) {
    return {};
  } else if (schema.isList(node)) {
    return [];
  } else if (schema.isProperty(node)) {
    return null;
  } else {
    utils.invariant(
      false,
      'do not know how to infer default value for ' + node
    );
  }
}

module.exports = getDefaultValueForSchema;
