/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');

var ContextTypes = {
  value: React.PropTypes.object,
  onValueUpdate: React.PropTypes.func
};

/**
 * Mixin for components which exposes form context.
 *
 * See <Form />, <Fieldset /> and <RepeatingFieldset /> for components which
 * expose form context.
 */
var FormContextMixin = {

  childContextTypes: ContextTypes,

  getChildContext: function() {
    return {
      value: this.value(),
      onValueUpdate: this.onValueUpdate
    };
  }
};

module.exports = FormContextMixin;
module.exports.ContextTypes = ContextTypes;
