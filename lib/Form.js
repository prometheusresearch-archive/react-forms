/**
 * @jsx React.DOM
 */
'use strict';

var React     = require('react');
var FormMixin = require('./FormMixin');
var FormFor   = require('./FormFor');

var Form = React.createClass({
  mixins: [FormMixin],

  render: function() {
    return this.transferPropsTo(
      <form>
        <FormFor />
      </form>
    );
  }
});

module.exports = Form;
