/**
 * @jsx React.DOM
 */
'use strict';

var React     = require('react');
var FormMixin = require('./FormMixin');
var FormFor   = require('./FormFor');
var v         = require('./validation');

var Form = React.createClass({
  mixins: [FormMixin],

  propTypes: {
    component: React.PropTypes.component,
    onChange: React.PropTypes.func,
    onUpdate: React.PropTypes.func
  },

  render: function() {
    var component = this.props.component;
    return this.transferPropsTo(
      <component>
        <FormFor />
      </component>
    );
  },

  getDefaultProps: function() {
    return {component: React.DOM.form};
  },

  valueUpdated: function(value) {
    if (this.props.onUpdate) {
      this.props.onUpdate(value.value, value);
    }
    if (this.props.onChange && v.isSuccess(value.validation)) {
      this.props.onChange(value.value, value);
    }
  }
});

module.exports = Form;
