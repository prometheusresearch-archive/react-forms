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
    serializedValueLens: React.PropTypes.object,
    valueLens: React.PropTypes.object,
    validationLens: React.PropTypes.object,
    externalValidation: React.PropTypes.any,
    schema: React.PropTypes.object,
    onValueUpdate: React.PropTypes.func
  },

  getChildContext: function() {
    return {
      serializedValueLens: this.serializedValueLens(),
      valueLens: this.valueLens(),
      validationLens: this.validationLens(),
      externalValidation: this.externalValidation(),
      schema: this.schema(),
      onValueUpdate: this.onValueUpdate
    };
  }
};

module.exports = FormContextMixin;
