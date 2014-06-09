/**
 * @jsx React.DOM
 */
'use strict';

var React     = require('react/addons');
var cx        = React.addons.classSet;
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
    var className = cx({
      'rf-Form': true,
      'rf-Form--invalid': v.isFailure(this.value().validation)
    });
    return this.transferPropsTo(
      <component className={className}>
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
