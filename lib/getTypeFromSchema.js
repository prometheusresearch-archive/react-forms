/**
 * @jsx React.DOM
 */
'use strict';

var utils     = require('./utils');
var types     = require('./types');
var schema    = require('./schema');

/**
 * Return a type which corresponds to a given schema node.
 *
 * @param {Schema} node
 * @return {Type}
 */
function getTypeFromSchema(node) {
  if (node && node.props.type) {

    utils.invariant(
      schema.isProperty(node),
      'only Property schema nodes can have types'
    );

    if (utils.isString(node.props.type)) {
      var type = types[node.props.type];
      utils.invariant(type, 'unknown type ' + node.props.type);
      return type;
    }

    return node.props.type;
  }

  return types.any;
}

module.exports = getTypeFromSchema;
