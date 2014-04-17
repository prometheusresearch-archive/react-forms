/**
 * @jsx React.DOM
 */
'use strict';

var React                     = require('react');
var invariant                 = require('react/lib/invariant');
var schema                    = require('./schema');
var success                   = require('./validation').success;
var ValidatedMixin            = require('./ValidatedMixin');
var getDefaultValueForSchema  = require('./getDefaultValueForSchema');

var FormElementMixin = {

  mixins: [ValidatedMixin],

  propTypes: {
    name: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ])
  },

  contextTypes: {
    validation: React.PropTypes.object,
    value: React.PropTypes.object,
    schema: React.PropTypes.object,
    onValueUpdate: React.PropTypes.func
  },

  valueLens: function(value) {
    var lens = this.context.value;
    if (this.props.name !== undefined) {
      lens = lens.get(this.props.name, getDefaultValueForSchema(this.schema()));
    }
    return value ? lens.for(value) : lens;
  },

  validationLens: function(validation) {
    var lens = this.context.validation;
    if (this.props.name !== undefined) {
      lens = lens.get('children', {}).get(this.props.name, {});
    }
    return validation ? lens.for(validation) : lens;
  },

  value: function() {
    return this.valueLens().val();
  },

  validation: function() {
    return this.validationLens().val();
  },

  schema: function() {
    var node = this.context.schema;

    if (node && this.props.name !== undefined) {
      if (schema.isSchema(node)) {
        node = node.children[this.props.name];
      } else if (schema.isList(node)) {
        node = node.children;
      } else {
        invariant(false, 'invalid field used for schema');
      }
    }

    return node;
  },

  onValueUpdate: function(value, validation) {
    var valueLens = this.valueLens(value);
    var validationLens = this.validationLens(validation);

    var local = this.validateSerializedOnly(
        valueLens.val(),
        validationLens.val().children);

    valueLens = valueLens.mod(local.value);
    validationLens = validationLens.update(local.validation);

    this.context.onValueUpdate(valueLens.root(), validationLens.root());
  },

  updateValue: function(value) {
    this.onValueUpdate(this.valueLens().mod(value).root(), success);
  }

};

module.exports = FormElementMixin;
