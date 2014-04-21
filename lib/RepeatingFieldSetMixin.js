/**
 * @jsx React.DOM
 */
'use strict';

var React                     = require('react');
var cloneWithProps            = require('react/lib/cloneWithProps');
var FormElementMixin          = require('./FormElementMixin');
var FormContextMixin          = require('./FormContextMixin');
var getDefaultValueForSchema  = require('./getDefaultValueForSchema');

var RepeatingFieldsetMixin = {
  mixins: [FormElementMixin, FormContextMixin],

  propTypes: {
    onRemoveItem: React.PropTypes.func,
    onAddItem: React.PropTypes.func
  },

  items: function() {
    // prevent circular require
    var createComponentFromSchema = require('./createComponentFromSchema');
    var schema = this.schema();
    var children = createComponentFromSchema(schema.children);
    return this.value().map((item, name) =>
      cloneWithProps(children, {name, key: name}));
  },

  removeItem: function(name) {
    var value = this.value().slice(0);
    value.splice(name, 1);
    this.updateValue(value);
    if (this.props.onRemoveItem) {
      this.props.onRemoveItem(name);
    }
  },

  addItem: function() {
    var schema = this.schema();
    var defaultValue = schema.props.defaultValue !== undefined ?
      schema.props.defaultValue :
      getDefaultValueForSchema(schema.children);
    this.updateValue(this.value().concat(defaultValue));
    if (this.props.onAddItem) {
      this.props.onAddItem();
    }
  }
};

module.exports = RepeatingFieldsetMixin;
