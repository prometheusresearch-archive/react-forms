'use strict';

var {Map} = require('immutable');
var Attribute = require('./Attribute');
var schema = require('./schema');
var types = require('../types');

var EMPTY_MAP = Map();

class SerializedAttribute extends Attribute {

  get(key, attribute, attributes, value, node) {
    if (node instanceof schema.ScalarNode) {
      return attribute.has(key) ?
        attribute.get(key) :
        node.props.get('type', types.any).serialize(value);
    } else {
      return attribute.get(key, EMPTY_MAP);
    }
  }

  merge(children, attribute, attributes, value, node) {
    return attribute.merge(children);
  }

}

module.exports = SerializedAttribute;
