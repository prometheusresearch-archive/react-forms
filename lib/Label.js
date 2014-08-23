/**
 * @jsx React.DOM
 */
'use strict';

var React     = require('react');
var PropTypes = React.PropTypes;
var Hint      = require('./Hint');

var Label = React.createClass({

  propTypes: {
    label: React.PropTypes.string,
    hint: React.PropTypes.string
  },

  render() {
    if (!this.props.hint && !this.props.label) {
      return null;
    }
    return this.transferPropsTo(
      <label className="rf-Label">
        {this.props.label}
        {this.props.hint && <Hint hint={this.props.hint} />}
      </label>
    );
  },

  shouldComponentUpdate({hint, label}) {
    return label !== this.props.label && hint !== this.props.hint;
  }
});

module.exports = Label;
