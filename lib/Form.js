/**
 * @jsx React.DOM
 */
'use strict';

var React     = require('react');
var FormMixin = require('./FormMixin');
var FormFor   = require('./FormFor');

var Form = React.createClass({
  mixins: [FormMixin],

  propTypes: {
    component: React.PropTypes.component
  },

  getDefaultProps: function() {
    return {component: React.DOM.form};
  },

  render: function() {
    var component = this.props.component;
    return this.transferPropsTo(
      <component>
        <FormFor />
      </component>
    );
  }
});

module.exports = Form;
