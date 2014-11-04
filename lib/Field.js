/**
 * @jsx React.DOM
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var React       = require('react/addons');
var cx          = React.addons.classSet;
var PropTypes   = require('./PropTypes');
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
    //value: PropTypes.Ref
  },

  render() {
    var {value, hint, label, inline, ...props} = this.props;
    var {node, validation, isDirty, externalValidation} = value.value;
    var isInvalid = isDirty && validation.isFailure; // || externalValidation.isFailure;

    var className = cx({
      'rf-Field': true,
      'rf-Field--invalid': isInvalid,
      'rf-Field--inline': inline,
      'rf-Field--dirty': isDirty
    });

    var id = this._rootNodeID;

    //  {externalValidation.isFailure &&
    //    <Message>{externalValidation.error}</Message>}

    return (
      <div {...props} className={className} value={undefined}>
        <Label
          htmlFor={id}
          className="rf-Field__label"
          label={this.props.label || node.props.get('label')}
          hint={this.props.hint || node.props.get('hint')}
          />
        <Input
          id={id}
          value={value.value}
          input={this.props.input}
          onBlur={this.onBlur}
          onChange={this.onChange}
          />
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
    this.props.value.transform(value => value.setInputValue(serialized));
  },

  onBlur: function() {
    var value = this.props.value;
//  if (!value.isDirty) {
//    value.markDirty().notify();
//  }
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
