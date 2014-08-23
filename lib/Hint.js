/**
 * @jsx React.DOM
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var React     = require('react');
var PropTypes = React.PropTypes;

var Hint = React.createClass({

  propTypes: {
    hint: PropTypes.string.isRequired
  },

  render() {
    return this.transferPropsTo(
      <span className="rf-Hint">{this.props.hint}</span>
    );
  }
});

module.exports = Hint;
