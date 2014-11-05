'use strict';

var {Map} = require('immutable');
var Attribute = require('./Attribute');
var schema = require('./schema');
var isString = require('../isString');
var invariant = require('../invariant');

var EMPTY_MAP = Map();

class SerializedAttribute extends Attribute {

  initial(value, node) {
    if (node instanceof schema.ScalarNode) {
      return node.serialize(value);
    }
    return EMPTY_MAP;
  }

  get(key, attribute, attributes, value, node) {
    if (node instanceof schema.ScalarNode) {
      if (attribute === undefined) {
        return this.initial(value, node);
      }
      if (!attribute.has(key)) {
        return this.initial(value, node);
      }
      return attribute.get(key);
    } else {
      return attribute.get(key, EMPTY_MAP);
    }
  }

  merge(children, attribute, attributes, value, node) {
    return attribute.merge(children);
  }

}

module.exports = SerializedAttribute;
