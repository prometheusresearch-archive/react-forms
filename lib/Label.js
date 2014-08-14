/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');

var Label = React.createClass({

  propTypes: {
    label: React.PropTypes.string,
    hint: React.PropTypes.string
  },

  render: function() {
    if (!this.props.hint && !this.props.label) {
      return null;
    }
    return this.transferPropsTo(
      <label className="rf-Label">
        {this.props.label}
        {this.props.hint && <Hint hint={this.props.hint} />}
      </label>
    );
  }
});

var Hint = React.createClass({

  propTypes: {
    hint: React.PropTypes.string.isRequired
  },

  render: function() {
    return this.transferPropsTo(
      <span className="rf-Hint">{this.props.hint}</span>
    );
  }
});

module.exports = Label;
