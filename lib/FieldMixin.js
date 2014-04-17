/**
 * @jsx React.DOM
 */
'use strict';

var React             = require('react');
var cloneWithProps    = require('react/lib/cloneWithProps');
var getTypeFromSchema = require('./getTypeFromSchema');
var FormElementMixin  = require('./FormElementMixin');

var FieldMixin = {
  mixins: [FormElementMixin],

  propTypes: {
    input: React.PropTypes.component
  },

  onChange: function(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }

    var value = getValueFromEvent(e);

    this.updateValue(value);
  },

  renderInputComponent: function() {
    var schema = this.schema();
    var type = getTypeFromSchema(schema);
    var value = type.serialize(this.value());

    var input = this.props.input || schema && schema.props.input;

    return input ?
      cloneWithProps(input, {value, onChange: this.onChange}) :
      React.DOM.input({
        value: value,
        onChange: this.onChange,
        type: 'text'
      });
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
  var value = e && e.target && e.target.value !== undefined ?
    e.target.value : e;
  return value === '' ? null : value;
}

module.exports = FieldMixin;
