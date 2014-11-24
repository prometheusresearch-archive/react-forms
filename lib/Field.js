/**
 * @flow
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var React       = require('react/addons');
var cx          = React.addons.classSet;
var PropTypes   = require('./PropTypes');
var Message     = require('./Message');
var Label       = require('./Label');
var Input       = require('./Input');
var FocusStore  = require('./FocusStore');

/**
 * Field component represents values which correspond to Scalar schema nodes
 * and so received PropetyValue as value.
 *
 * It provides basic markup which include <input /> component (can be customized
 * via schema) and <label /> (label text and hint text).
 */
var Field = React.createClass({

  mixins: [FocusStore.FocusableMixin],

  propTypes: {
    label: React.PropTypes.string,
    hint: React.PropTypes.string,
    value: PropTypes.Value,
    input: React.PropTypes.oneOfType,
    noLabel: React.PropTypes.bool
  },

  render(): any {
    var {value, hint, label, noLabel, input, ...props} = this.props;
    var {node, validation, isDirty, externalValidation} = value;
    var isInvalid = isDirty && (validation.isFailure || externalValidation.isFailure);

    var className = cx({
      'rf-Field': true,
      'rf-Field--invalid': isInvalid,
      'rf-Field--dirty': isDirty
    });

    var id = this._rootNodeID;

    return (
      <div {...props} className={className} value={undefined}>
        {!noLabel &&
          <Label
            htmlFor={id}
            className="rf-Field__label"
            label={label || node.props.get('label')}
            hint={hint || node.props.get('hint')}
            />}
        <Input
          ref="input"
          id={id}
          value={value}
          input={input}
          onBlur={this.onBlur}
          onChange={this.onChange}
          />
        {validation.isFailure && isDirty &&
          <Message>{validation.error}</Message>}
        {externalValidation.isFailure &&
          <Message>{externalValidation.error}</Message>}
      </div>
    );
  },

  focus() {
    this.refs.input.focus();
  },

  onChange(e: Event) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }

    var serialized = getValueFromEvent(e);
    this.props.value.setSerialized(serialized).notify();
  },

  onBlur() {
    var {value} = this.props;
    if (!value.isDirty) {
      value.makeDirty().notify();
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
function getValueFromEvent(e: {target: {value: any}} | any) {
  return e && e.target && e.target.value !== undefined ?
    e.target.value : e;
}

module.exports = Field;
