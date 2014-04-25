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
var validationM               = require('./validation');

var serialize = validationM.serialize;
var success = validationM.success;

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
    serializedValue: React.PropTypes.any,
    schema: React.PropTypes.object,
    onChange: React.PropTypes.func,
    onUpdate: React.PropTypes.func
  },

  getInitialState: function() {
    var value = this.props.value ||
      this.props.defaultValue ||
      getDefaultValueForSchema(this.props.schema);
    var state = this.getFormState(value);
    return state;
  },

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.value !== undefined) {
      var nextState;
      if (nextProps.validation !== undefined &&
          nextProps.serializedValue !== undefined) {
        nextState = {
          serializedValue: nextProps.serializedValue,
          validation: nextProps.validation,
          value: nextProps.value
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
      value: validation.value,
      validation: validation.validation,
      serializedValue: serialize(this.schema(), validation.value)
    };
  },

  /**
   * Return lens for the form value or for the value passed as an argument.
   *
   * @param {Any?} value
   * @returns {Lens}
   */
  serializedValueLens: function(value) {
    return lens(value !== undefined ? value : this.state.serializedValue);
  },

  valueLens: function(value) {
    return lens(value !== undefined ? value : this.state.value);
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
  onValueUpdate: function(value, validation, serializedValue) {
    validation = validation || success;
    ReactUpdates.batchedUpdates(() => {
      if (this.props.onUpdate) {
        this.props.onUpdate(value, validation, serializedValue);
      }
      if (this.props.onChange && validation.isSuccess) {
        this.props.onChange(value, validation, serializedValue);
      }
      this.setState({value, validation, serializedValue});
    });
  }
};

var FormMixin = {
  mixins: [FormStateMixin, FormContextMixin]
};

module.exports = FormMixin;
