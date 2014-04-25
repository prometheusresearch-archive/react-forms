/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');

/**
 * Mixin for components which exposes form context.
 *
 * See Form (via FormMixin), Fieldset (via FieldsetMixin) and RepeatingFieldset
 * (via RepeatingFieldsetMixin) for components which expose form context.
 */
var FormContextMixin = {

  childContextTypes: {
    value: React.PropTypes.object,
    deserializedValue: React.PropTypes.object,
    validation: React.PropTypes.object,
    schema: React.PropTypes.object,
    onValueUpdate: React.PropTypes.func
  },

  getChildContext: function() {
    return {
      value: this.valueLens(),
      deserializedValue: this.deserializedValueLens(),
      validation: this.validationLens(),
      schema: this.schema(),
      onValueUpdate: this.onValueUpdate
    };
  }
};

module.exports = FormContextMixin;
