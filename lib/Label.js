/**
 * @jsx React.DOM
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var React     = require('react/addons');
var PropTypes = React.PropTypes;
var Hint      = require('./Hint');
var cx        = React.addons.classSet;

var Label = React.createClass({

  propTypes: {
    label: React.PropTypes.string,
    hint: React.PropTypes.string
  },

  render() {
    var {hint, label, className, ...props} = this.props;
    if (!hint && !label) {
      return null;
    }
    return (
      <label {...props} className={cx(className, 'rf-Label')}>
        {label}
        {hint && <Hint hint={hint} />}
      </label>
    );
  },

  shouldComponentUpdate({hint, label}) {
    return label !== this.props.label && hint !== this.props.hint;
  }
});

module.exports = Label;
