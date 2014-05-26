/**
 * @jsx React.DOM
 */
'use strict';

var React            = require('react');
var FormContextMixin = require('./FormContextMixin');
var v                = require('./validation');

/**
 * Mixin for the form element (form field, fieldset of repeating fieldset).
 */
var FormElementMixin = {

  propTypes: {
    name: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ])
  },

  contextTypes: FormContextMixin.ContextTypes,

  value: function() {
    var value = this.context.value;
    if (this.props.name) {
      value = value.get(this.props.name);
    }
    return value;
  },

  externalValidation: function() {
    var externalValidation = this.context.externalValidation;
    if (this.props.name !== undefined &&
        externalValidation &&
        externalValidation.children) {
      return externalValidation.children[this.props.name] || v.success;
    }
    return externalValidation || v.success;
  },

  /**
   * Called when the form value and validation state is being updated.
   *
   * This method intercepts updated value and validation state and perform its
   * own local validation and deserialization. Then passes everything up the
   * owner.
   *
   * @param {Any} value
   * @param {Validation} validation
   */
  onValueUpdate: function(value) {
    value = this.value().merge(value);
    this.context.onValueUpdate(value);
  }
};

module.exports = FormElementMixin;
