'use strict';

var {Map} = require('immutable');

var EMPTY_MAP = Map();

/**
 * Value attribute.
 */
class Attribute<V> {

  constructor(name: String) {
    this.name = name;
  }

  /**
   * Compute initial attribute value.
   */
  initial(
    value: Any,
    node: Node
  ): V {
    return EMPTY_MAP;
  }

  /**
   * Compute attribute value along the key.
   */
  get(
    key: String,
    attribute: Any,
    attributes: Map<String, Any>,
    value: Any,
    node: Node,
    force: Boolean
  ): V {
    return attribute.get(key, EMPTY_MAP);
  }

  /**
   * Merge children into value and recompute itself.
   */
  merge(
    children: Iterable<String, V>, 
    attribute: Any,
    attributes: Map<String, Any>,
    value: Any,
    node: Node
  ): V {
    return attribute.merge(children);
  }

  toString(): String {
    return `${this.constructor.name} "${this.name}" { }`;
  }

}

module.exports = Attribute;
