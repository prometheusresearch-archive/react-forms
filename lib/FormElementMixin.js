/**
 * @jsx React.DOM
 */
'use strict';

var React            = require('react');
var FormContextMixin = require('./FormContextMixin');
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
  }
};

module.exports = FormElementMixin;
