/**
 * @jsx React.DOM
 */
'use strict';

var React                     = require('react');
var FormContextMixin          = require('./FormContextMixin');
var getDefaultValueForSchema  = require('./getDefaultValueForSchema');
var Value                     = require('./Value');
var v                         = require('./validation');

/**
 * Mixin which handles form value.
 *
 * @private
 */
var FormStateMixin = {

  propTypes: {
    defaultValue: React.PropTypes.any,
    value: React.PropTypes.any,
    externalValidation: React.PropTypes.any,
    schema: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func,
    onUpdate: React.PropTypes.func
  },

  getInitialState: function() {
    var value = (
      this.props.value
      || this.props.defaultValue
      || getDefaultValueForSchema(this.props.schema)
    );
    return this._getFormState(value);
  },

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.value !== undefined) {
      this._setFormState(this._getFormState(nextProps.value));
    }
  },

  /**
   * Return current form value.
   *
   * @returns {Value}
   */
  value: function() {
    return this.state.value;
  },

  /**
   * Return external validation.
   *
   * @returns {Validation}
   */
  externalValidation: function() {
    return this.props.externalValidation || v.success;
  },

  updateValue: function(value) {
    this._setFormState(this._getFormState(value));
  },

  /**
   * Called when the form value and validation state is being updated.
   *
   * @param {Any} value
   * @param {Validation} validation
   * @param {Any} convertedValue
   */
  onValueUpdate: function(value) {
    if (this.props.onUpdate) {
      this.props.onUpdate(value.value, value);
    }
    if (this.props.onChange && v.isSuccess(value.validation)) {
      this.props.onChange(value.value, value);
    }
    this._setFormState({value});
  },

  _getFormState: function(value) {
    if (!Value.isValue(value)) {
      value = Value(this.props.schema, value);
    }
    return {value};
  },

  _setFormState: function(formState) {
    if (typeof this.setFormState === 'function') {
      this.setFormState(formState);
    } else {
      this.setState(formState);
    }
  }
};

/**
 * Mixin for form controller components.
 *
 * See <Form /> component for the example.
 */
var FormMixin = {
  mixins: [FormStateMixin, FormContextMixin]
};

module.exports = FormMixin;
