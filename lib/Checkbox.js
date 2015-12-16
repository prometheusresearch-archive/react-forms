/**
 * @flow
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var React = require('react');
var cx = require('classnames');

var Checkbox = React.createClass({

  propTypes: {
    value: React.PropTypes.bool.isRequired,
    onChange: React.PropTypes.func.isRequired,
    className: React.PropTypes.string
  },

  render(): ?ReactElement {
    var {value, onChange, className, ...props} = this.props;
    return (
      <input {...props}
        type="checkbox"
        className={cx('rf-Checkbox', className)}
        onChange={this.onChange}
        checked={value}
        />
    );
  },

  onChange(e: {target: {checked: boolean}}) {
    var checked = e.target.checked;
    this.props.onChange(checked);
  }
});

module.exports = Checkbox;
