/**
 * @jsx React.DOM
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var React       = require('react/addons');
var cx          = React.addons.classSet;
var Message     = require('./Message');
var Label       = require('./Label');
var Input       = require('./Input');

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
    var {schema, validation, isDirty, externalValidation} = value;
    var isInvalid = isDirty && validation.isFailure || externalValidation.isFailure;

    var className = cx({
      'rf-Field': true,
      'rf-Field--invalid': isInvalid,
      'rf-Field--dirty': isDirty
    });

    var id = this._rootNodeID;

    return this.transferPropsTo(
      <div className={className} value={undefined}>
        <Label
          htmlFor={id}
          className="rf-Field__label"
          label={this.props.label || schema.props.get('label') || value.schema.name}
          hint={this.props.hint || schema.props.get('hint')}
          />
        <Input
          id={id}
          value={value}
          input={this.props.input}
          onBlur={this.onBlur}
          onChange={this.onChange}
          />
        {externalValidation.isFailure &&
          <Message>{externalValidation.error}</Message>}
        {validation.isFailure && isDirty &&
          <Message>{validation.error}</Message>}
      </div>
    );
  },

  onChange: function(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }

    var serialized = getValueFromEvent(e);
    this.props.value.update(serialized).notify();
  },

  onBlur: function() {
    var value = this.props.value;
    if (!value.isDirty) {
      value.markDirty().notify();
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
