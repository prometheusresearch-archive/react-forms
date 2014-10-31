'use strict';

var {Map} = require('immutable');

var EMPTY_MAP = Map();

/**
 * Value attribute.
 */
class Attribute {

  constructor(name) {
    this.name = name;
  }

  /**
   * Compute initial attribute value.
   */
  initial() {
    return EMPTY_MAP;
  }

  /**
   * Compute attribute value along the key.
   *
   * @param {String|Number} key
   * @param {Any} attribute
   * @param {Map<String, Any>} attributes
   * @param {Any} value
   * @param {Node} node
   */
  get(key, attribute, attributes, value, node, force) {
    return attribute.get(key, EMPTY_MAP);
  }

  /**
   * Merge children into value and recompute itself.
   *
   * @param {Iterable<String, Any>} children
   * @param {Any} attribute
   * @param {Map<String, Any>} attributes
   * @param {Any} value
   * @param {Node} node
   */
  merge(children, attribute, attributes, value, node) {
    return attribute.merge(children);
  }

  toString() {
    return `${this.constructor.name} "${this.name}" { }`;
  }
}

module.exports = Attribute;
