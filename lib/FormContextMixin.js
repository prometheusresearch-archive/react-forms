/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');

var FormContextMixin = {

  childContextTypes: {
    value: React.PropTypes.object,
    validation: React.PropTypes.object,
    schema: React.PropTypes.object,
    onValueUpdate: React.PropTypes.func
  },

  getChildContext: function() {
    return {
      value: this.valueLens(),
      validation: this.validationLens(),
      schema: this.schema(),
      onValueUpdate: this.onValueUpdate
    };
  }
};

module.exports = FormContextMixin;
