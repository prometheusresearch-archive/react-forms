/**
 * @jsx React.DOM
 */
'use strict';

var React            = require('react');
var FormContextMixin = require('./FormContextMixin');
var v                = require('./validation');
var PropTypes        = require('./PropTypes');

/**
 * Mixin for the form element (form field, fieldset of repeating fieldset).
 */
var FormElementMixin = {

  propTypes: {
    value: PropTypes.FormValue,
    externalValidation: React.PropTypes.object,
    onValueUpdate: React.PropTypes.func,
    name: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ])
  },

  contextTypes: FormContextMixin.ContextTypes,

  value: function() {
    if (this.props.value) {
      return this.props.value;
    }

    var value = this.context.value;
    if (this.props.name) {
      value = value.get(this.props.name);
    }

    return value;
  },

  externalValidation: function() {
    if (this.props.externalValidation) {
      return this.props.externalValidation;
    }

    var externalValidation = this.context.externalValidation;
    if (this.props.name !== undefined &&
        externalValidation &&
        externalValidation.children) {
      return externalValidation.children[this.props.name] || v.success;
    }
    return externalValidation || v.success;
  },

  updateValue: function(value) {
    if (this.props.onValueUpdate) {
      this.props.onValueUpdate(value);
    } else {
      this.context.onValueUpdate(value);
    }
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
    this.updateValue(value);
  }
};

module.exports = FormElementMixin;
