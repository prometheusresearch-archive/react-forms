/**
 * @flow
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var React = require('react/addons');
var cx = React.addons.classSet;

var Checkbox = React.createClass({

  propTypes: {
    value: React.PropTypes.bool.isRequired,
    onChange: React.PropTypes.func.isRequired,
    className: React.PropTypes.string
  },

  render(): any {
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
