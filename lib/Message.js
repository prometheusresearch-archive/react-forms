/**
 * @jsx React.DOM
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var React = require('react');

var Message = React.createClass({

  render() {
    return this.transferPropsTo(
      <span className="rf-Message">
        {this.props.children}
      </span>
    );
  }
});

module.exports = Message;
