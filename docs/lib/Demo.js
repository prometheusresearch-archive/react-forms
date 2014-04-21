/**
 * @jsx React.DOM
 */
'use strict';

var React  = require('react');
var Link   = require('react-router-component').Link;
var Page   = require('./Page');

var Demo = React.createClass({

  render: function() {
    return this.transferPropsTo(
      <Page title={this.props.name}>
        {this.props.children}
      </Page>
    );
  }
});

module.exports = Demo;
