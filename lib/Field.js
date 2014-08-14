/**
 * @jsx React.DOM
 */
'use strict';

var React       = require('react/addons');
var cx          = React.addons.classSet;
var Message     = require('./Message');
var Label       = require('./Label');
var FormInput   = require('./FormInput');
var isFailure   = require('./validation').isFailure;

/**
 * Field component represents values which correspond to Scalar schema nodes
 * and so received PropetyValue as value.
 *
 * It provides basic markup which include <input /> component (can be customized
 * via schema) and <label /> (label text and hint text).
 */
var Field = React.createClass({
  propTypes: {
    label: React.PropTypes.string
  },

  render: function() {
    var {value, hint, label} = this.props;
    var {schema, validation, externalValidation} = value;
    var isInvalid = isFailure(validation)
                 || isFailure(externalValidation.validation);

    var className = cx({
      'rf-Field': true,
      'rf-Field--invalid': isInvalid,
      'rf-Field--dirty': !value.isUndefined
    });

    var id = this._rootNodeID;

    return this.transferPropsTo(
      <div className={className}>
        <Label
          htmlFor={id}
          className="rf-Field__label"
          label={this.props.label || schema.props.label}
          hint={this.props.hint || schema.props.hint}
          />
        <FormInput
          id={id}
          value={value}
          input={this.props.input}
          onBlur={this.onBlur}
          onChange={this.onChange}
          />
        {isFailure(value.externalValidation) &&
          <Message>{value.externalValidation.validation.failure}</Message>}
        {isFailure(value.validation) && !value.isUndefined &&
          <Message>{value.validation.validation.failure}</Message>}
      </div>
    );
  },

  onChange: function(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }

    var serialized = getValueFromEvent(e);
    this.props.value.update({serialized}).notify();
  },

  onBlur: function() {
    var value = this.value();
    if (value.isUndefined) {
      value.update({value: value.value}).notify();
    }
  }
});

/**
 * Extract value from event
 *
 * We support both React.DOM 'change' events and custom change events
 * emitted from custom components.
 *
 * @param {Event} e
 * @returns {Any} 
 */
function getValueFromEvent(e) {
  return e && e.target && e.target.value !== undefined ?
    e.target.value : e;
}

module.exports = Field;
