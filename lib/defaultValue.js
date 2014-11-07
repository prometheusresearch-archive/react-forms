/**
 * Infer default value from schema node.
 *
 * @copyright Prometheus Research, LLC 2014
 */

var {Map, List}               = require('immutable');
var {MappingNode, ListNode}   = require('./schema');

var EMPTY_MAP = Map();
var EMPTY_LIST = List();

function defaultValue(node: Node): Any {
  if (node.defaultValue !== undefined) {
    return node.defaultValue;
  } else if (node instanceof MappingNode) {
    return EMPTY_MAP;
  } else if (node instanceof ListNode) {
    return EMPTY_LIST;
  } else {
    return undefined;
  }
}

module.exports = defaultValue;
