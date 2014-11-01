'use strict';

var {Map} = require('immutable');
var defineValue = require('./defineValue');
var invariant = require('../invariant');
var schema = require('./schema');
var types = require('../types');
var DirtyAttribute = require('./DirtyAttribute');
var ValidationAttribute = require('./ValidationAttribute');
var SerializedAttribute = require('./SerializedAttribute');

var EMPTY_MAP = Map();

var _Value = defineValue(
  new SerializedAttribute('serialized'),
  new DirtyAttribute('dirty'),
  new ValidationAttribute('validation')
);

class Value extends _Value {

  /**
   * Oveloaded setter for serialized attribute which also updates value by
   * deserializing serialized value according to current schema node.
   */
  setInputValue(serialized) {
    invariant(
      (this.node instanceof schema.ScalarNode),
      'setInputValue(serialized) is only allows for value with Scalar schemas'
    );

    var value = this.node.props.get('type', types.any).deserialize(serialized);
    var node = this.abstractNode.instantiate(value);
    var parentAttributes = this.parent ? this.parent.attributes : EMPTY_MAP;
    var attributes = this.constructor.computeAttributes(this.key, node, value, parentAttributes, true);
    attributes = attributes.set('serialized', serialized);
    return this.__update(node, value, attributes);
  }

  get isValid() {
    return this.validation.isSuccess;
  }
}

module.exports = Value;
