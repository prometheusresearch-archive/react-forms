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
    valueLens: React.PropTypes.object,
    deserializedValueLens: React.PropTypes.object,
    validationLens: React.PropTypes.object,
    schema: React.PropTypes.object,
    onValueUpdate: React.PropTypes.func
  },

  getChildContext: function() {
    return {
      valueLens: this.valueLens(),
      deserializedValueLens: this.deserializedValueLens(),
      validationLens: this.validationLens(),
      schema: this.schema(),
      onValueUpdate: this.onValueUpdate
    };
  }
};

module.exports = FormContextMixin;
