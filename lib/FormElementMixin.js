/**
 * @jsx React.DOM
 */
'use strict';

var React            = require('react');
var FormContextMixin = require('./FormContextMixin');
var v                = require('./validation');
var PropTypes        = require('./PropTypes');

/**
 * Mixin for components which serve as form elements.
 *
 * Form elements can get their values being in the context of a form or via
 * props.
 *
 * See <Field />, <Fieldset /> and <RepeatingFieldset /> components for the
 * examples.
 */
var FormElementMixin = {

  propTypes: {
    value: PropTypes.Value,
    externalValidation: React.PropTypes.object,
    onValueUpdate: React.PropTypes.func,
    name: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ])
  },

  contextTypes: FormContextMixin.ContextTypes,

  /**
   * Get the form value corresponding to an element.
   *
   * @returns {Value}
   */
  value: function() {
    if (this.props.value) {
      return this.props.value;
    }

    var value = this.context.value;
    if (this.props.name !== undefined) {
      value = value.get(this.props.name);
    }

    return value;
  },

  /**
   * Get external validation state corresponding to an element.
   *
   * @returns {Validation}
   */
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

  /**
   * Notify form controller of the changed form value.
   *
   * @param {Value} value
   */
  updateValue: function(value) {
    if (this.props.onValueUpdate) {
      this.props.onValueUpdate(value);
    } else {
      this.context.onValueUpdate(value);
    }
  },

  /**
   * Called when the form value is being updated.
   *
   * This method intercepts updated value and perform its own local validation
   * and deserialization. Then passes everything up to the form controller.
   *
   * @param {Any} value
   */
  onValueUpdate: function(value) {
    this.updateValue(value);
  }
};

module.exports = FormElementMixin;
