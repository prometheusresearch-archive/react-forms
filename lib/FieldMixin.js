/**
 * @jsx React.DOM
 */
'use strict';

var React            = require('react/addons');
var cloneWithProps   = React.addons.cloneWithProps;
var mergeInto        = require('./utils').mergeInto;
var FormElementMixin = require('./FormElementMixin');

/**
 * Mixin for implementing fieldcomponents.
 *
 * See <Field /> component for the basic implementation example.
 */
var FieldMixin = {
  mixins: [FormElementMixin],

  propTypes: {
    input: React.PropTypes.component
  },

  onChange: function(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }

    var serialized = getValueFromEvent(e);
    var value = this.value().updateSerialized(serialized);
    this.onValueUpdate(value);
  },

  /**
   * Render input component.
   *
   * @returns {ReactComponent}
   */
  renderInputComponent: function(props) {
    var value = this.value();

    var input = this.props.input || value.schema.props.input;
    var inputProps = {value: value.serialized, onChange: this.onChange};

    if (props) {
      mergeInto(inputProps, props);
    }

    if (input) {
      return cloneWithProps(input, inputProps);
    } else {
      inputProps.type = 'text';
      return React.DOM.input(inputProps);
    }
  }
};

/**
 * Extract value from event
 *
 * We support both React.DOM 'change' events and custom change events
 * emitted from custom components.
 *
 * This function also normalizes empty strings to null.
 *
 * @param {Event} e
 */
function getValueFromEvent(e) {
  return e && e.target && e.target.value !== undefined ?
    e.target.value : e;
}

module.exports = FieldMixin;
