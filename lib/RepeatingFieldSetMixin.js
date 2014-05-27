/**
 * @jsx React.DOM
 */
'use strict';

var React                     = require('react/addons');
var cloneWithProps            = React.addons.cloneWithProps;
var FormElementMixin          = require('./FormElementMixin');
var FormContextMixin          = require('./FormContextMixin');
var getDefaultValueForSchema  = require('./getDefaultValueForSchema');
var serialize                 = require('./validation').serialize;

/**
 * Mixin for implementing repeating fieldsets.
 *
 * See <RepeatingFieldset /> component for the basic implementation example.
 */
var RepeatingFieldsetMixin = {
  mixins: [FormElementMixin, FormContextMixin],

  propTypes: {
    onRemove: React.PropTypes.func,
    onAdd: React.PropTypes.func
  },

  /**
   * Return an array of React components rendered for all the values in an array
   * this fieldset owns.
   *
   * @returns {Array.<ReactComponent>}
   */
  renderFields: function() {
    // prevent circular require
    var createComponentFromSchema = require('./createComponentFromSchema');
    var value = this.value();
    var children = createComponentFromSchema(value.schema.children);
    return value.serializedValue.map((item, name) =>
      cloneWithProps(children, {name, key: name}));
  },

  /**
   * Remove a value from fieldset's value by index
   *
   * @param {Number} index
   */
  remove: function(index) {
    var value = this.value().remove(index);
    this.onValueUpdate(value);
    if (this.props.onRemove) {
      this.props.onRemove(index);
    }
  },

  /**
   * Add new value to fieldset's value.
   */
  add: function(itemValue) {
    var value = this.value().add(itemValue);
    this.onValueUpdate(value);
    if (this.props.onAdd) {
      this.props.onAdd(value.value[value.value.length - 1]);
    }
  }
};

module.exports = RepeatingFieldsetMixin;
