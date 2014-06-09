/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');

var Message = React.createClass({

  render: function() {
    return this.transferPropsTo(
      <span className="rf-Message">
        {this.props.children}
      </span>
    );
  }
});

module.exports = Message;
