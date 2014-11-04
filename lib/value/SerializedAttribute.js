'use strict';

var {Map} = require('immutable');
var Attribute = require('./Attribute');
var schema = require('./schema');
var types = require('../types');
var isString = require('../isString');
var invariant = require('../invariant');

var EMPTY_MAP = Map();

class SerializedAttribute extends Attribute {

  initial(value, node) {
    var type = node.props.get('type', types.any);
    if (isString(type)) {
      invariant(
        types[type] !== undefined,
        'invalid type name "%s"'
      );
      type = types[type];
    }
    return type.serialize(value);
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
