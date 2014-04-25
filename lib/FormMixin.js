/**
 * @jsx React.DOM
 */
'use strict';

var React                     = require('react');
var ReactUpdates              = require('react/lib/ReactUpdates');
var lens                      = require('./lens');
var ValidatedMixin            = require('./ValidatedMixin');
var FormContextMixin          = require('./FormContextMixin');
var getDefaultValueForSchema  = require('./getDefaultValueForSchema');

/**
 * Mixin which handles form value and form validation state.
 *
 * @private
 */
var FormStateMixin = {
  mixins: [ValidatedMixin],

  propTypes: {
    defaultValue: React.PropTypes.any,
    value: React.PropTypes.any,
    schema: React.PropTypes.object,
    onChange: React.PropTypes.func,
    onUpdate: React.PropTypes.func
  },

  getInitialState: function() {
    var value = this.props.value ||
      this.props.defaultValue ||
      getDefaultValueForSchema(this.props.schema);
    return this.getFormState(value);
  },

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.value !== undefined) {
      var nextState;
      if (nextProps.validation && nextProps.deserializedValue) {
        nextState = {
          value: nextProps.value,
          validation: nextProps.validation,
          deserializedValue: nextProps.deserializedValue
        };
      } else {
        nextState = this.getFormState(nextProps.value);
      }
      this.setState(nextState);
    }
  },

  getFormState: function(value) {
    var validation = this.validate(value);
    return {
      value: value,
      validation: validation.validation,
      deserializedValue: validation.value
    };
  },

  /**
   * Return lens for the form value or for the value passed as an argument.
   *
   * @param {Any?} value
   * @returns {Lens}
   */
  valueLens: function(value) {
    return lens(value !== undefined ? value : this.state.value);
  },

  deserializedValueLens: function(value) {
    return lens(value !== undefined ? value : this.state.deserializedValue);
  },

  /**
   * Return lens for the form validation state or for the validation state
   * passed as an argument.
   *
   * @param {Validation?} validation
   * @returns {Lens}
   */
  validationLens: function(validation) {
    return lens(validation !== undefined ? validation : this.state.validation);
  },

  /**
   * Return form value.
   */
  value: function() {
    return this.state.value;
  },

  deserializedValue: function() {
    return this.state.deserializedValue;
  },

  /**
   * Return form validation state.
   */
  validation: function() {
    return this.state.validation;
  },

  /**
   * Form schema.
   *
   * @returns {Schema}
   */
  schema: function() {
    return this.props.schema;
  },

  /**
   * Called when the form value and validation state is being updated.
   *
   * @param {Any} value
   * @param {Validation} validation
   * @param {Any} convertedValue
   */
  onValueUpdate: function(value, validation, deserializedValue) {
    ReactUpdates.batchedUpdates(() => {
      if (this.props.onUpdate) {
        this.props.onUpdate(value, validation, deserializedValue);
      }
      if (this.props.onChange && validation.isSuccess) {
        this.props.onChange(value, validation, deserializedValue);
      }
      this.setState({value, validation, deserializedValue});
    });
  }
};

var FormMixin = {
  mixins: [FormStateMixin, FormContextMixin]
};

module.exports = FormMixin;
