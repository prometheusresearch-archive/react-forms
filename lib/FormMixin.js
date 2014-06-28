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
    // XXX: We read from pending state... this isn't good but fixes a lot of
    //      problems if you trigger update from some callback deep inside form
    var current = this._pendingState && this._pendingState.value || this.state.value;

    // Use either new value or current value
    var value = nextProps.value || current;

    if (nextProps.value !== undefined) {
      // Form component is in controlled mode.

      this.setState(this._getFormState(value));

    } else if (nextProps.schema !== this.props.schema
               || nextProps.externalValidation !== this.props.externalValidation) {
      // Some of the Value attributes are set by props, update them when props
      // are changed.

      var newValue = Value(
          nextProps.schema,
          value.value, value.serialized, undefined,
          nextProps.externalValidation
      );
      this.setState(this._getFormState(newValue));

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
    var update = {
      schema: value.schema,
      path: value.path
    };

    this.setState(this._getFormState(value.root()), () => {
      if (typeof this.valueUpdated === 'function') {
        this.valueUpdated(this.state.value, update);
      }
    });
  },

  _getFormState: function(value) {
    if (!Value.isValue(value)) {
      value = Value(this.props.schema, value, undefined, undefined, this.props.externalValidation);
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
