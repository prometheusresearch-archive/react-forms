/**
 * @flow
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var React       = require('react');
var cx          = require('classnames');
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

  render(): ?ReactElement {
    var {value, hint, label, noLabel, input, className, ...props} = this.props;
    var {node, validation, isDirty, externalValidation} = value;
    var isInvalid = isDirty && (validation.isFailure || externalValidation.isFailure);

    var classNames = cx({
      'rf-Field': true,
      'rf-Field--invalid': isInvalid,
      'rf-Field--dirty': isDirty,
      'rf-Field--required': node.props.get('required')
    });

    var id = this._rootNodeID;

    return (
      <div {...props} className={cx(classNames, className)}>
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
          dirtyOnBlur={node.props.get('dirtyOnBlur', true)}
          dirtyOnChange={node.props.get('dirtyOnChange', true)}
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
  }
});

module.exports = Field;
