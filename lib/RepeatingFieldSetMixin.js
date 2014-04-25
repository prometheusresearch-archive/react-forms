/**
 * @jsx React.DOM
 */
'use strict';

var React                     = require('react');
var cloneWithProps            = require('react/lib/cloneWithProps');
var FormElementMixin          = require('./FormElementMixin');
var FormContextMixin          = require('./FormContextMixin');
var getDefaultValueForSchema  = require('./getDefaultValueForSchema');

/**
 * Mixin for implementing repeating fieldsets.
 *
 * See <RepeatingFieldset /> component for the basic implementation example.
 */
var RepeatingFieldsetMixin = {
  mixins: [FormElementMixin, FormContextMixin],

  propTypes: {
    onRemoveItem: React.PropTypes.func,
    onAddItem: React.PropTypes.func
  },

  /**
   * Return an array of React components rendered for all the values in an array
   * this fieldset owns.
   *
   * @returns {Array.<ReactComponent>}
   */
  items: function() {
    // prevent circular require
    var createComponentFromSchema = require('./createComponentFromSchema');
    var schema = this.schema();
    var children = createComponentFromSchema(schema.children);
    return this.serializedValueLens().val().map((item, name) =>
      cloneWithProps(children, {name, key: name}));
  },

  /**
   * Remove an item by index
   *
   * @param {String|Number} name
   */
  removeItem: function(name) {
    var value = this.serializedValueLens().val().slice(0);
    value.splice(name, 1);
    this.updateValue(value);
    if (this.props.onRemoveItem) {
      this.props.onRemoveItem(name);
    }
  },

  /**
   * Add new item.
   */
  addItem: function() {
    var schema = this.schema();
    var defaultValue = getDefaultValueForSchema(schema.children);
    this.updateValue(this.valueLens().val().concat(defaultValue));
    if (this.props.onAddItem) {
      this.props.onAddItem();
    }
  }
};

module.exports = RepeatingFieldsetMixin;
