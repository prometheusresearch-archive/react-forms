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
    schema: React.PropTypes.object.isRequired
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
      this.setState(this._getFormState(nextProps.value));
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
    this.setState(this._getFormState(value));
  },

  /**
   * Called when the form value and validation state is being updated.
   *
   * @param {Any} value
   * @param {Validation} validation
   * @param {Any} convertedValue
   */
  onValueUpdate: function(value) {
    var nextState = this._getFormState(value.root());
    if (typeof this.valueUpdated === 'function') {
      this.valueUpdated(nextState.value);
    }
    this.setState(nextState);
  },

  _getFormState: function(value) {
    if (!Value.isValue(value)) {
      value = Value(this.props.schema, value);
    }
    if (typeof this.getFormState === 'function') {
      return this.getFormState(value);
    } else {
      return {value};
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
