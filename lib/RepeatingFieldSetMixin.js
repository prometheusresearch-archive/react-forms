/**
 * @jsx React.DOM
 */
'use strict';

var React                     = require('react/addons');
var cloneWithProps            = React.addons.cloneWithProps;
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
    var schema = this.schema();
    var children = createComponentFromSchema(schema.children);
    return this.serializedValueLens().val().map((item, name) =>
      cloneWithProps(children, {name, key: name}));
  },

  /**
   * Remove a value from fieldset's value by index
   *
   * @param {Number} index
   */
  remove: function(index) {
    var value = this.serializedValueLens().val().slice(0);
    var removed = value.splice(index, 1)[0];

    this.updateValue(value);

    if (this.props.onRemove) {
      this.props.onRemove(removed, index);
    }
  },

  /**
   * Add new value to fieldset's value.
   */
  add: function(value) {
    if (value === undefined) {
      var schema = this.schema();
      value = getDefaultValueForSchema(schema.children);
    }

    this.updateValue(this.valueLens().val().concat(value));

    if (this.props.onAdd) {
      this.props.onAdd(value);
    }
  }
};

module.exports = RepeatingFieldsetMixin;
