/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');

var Message = React.createClass({

  render: function() {
    return this.transferPropsTo(
      <span className="rex-component-message">
        {this.props.children}
      </span>
    );
  }
});

module.exports = Message;
