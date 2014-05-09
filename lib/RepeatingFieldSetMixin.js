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
    var serializedValue = this.serializedValueLens().val().slice(0);
    var value = this.valueLens().val().slice(0);

    serializedValue.splice(index, 1);
    var removed = value.splice(index, 1)[0];

    this.updateValue(serializedValue, value);

    if (this.props.onRemove) {
      this.props.onRemove(removed, index);
    }
  },

  /**
   * Add new value to fieldset's value.
   */
  add: function(value) {
    var schema = this.schema();
    if (value === undefined) {
      value = getDefaultValueForSchema(schema.children);
    }

    var serializedValue = serialize(schema.children, value);

    this.updateValue(
      this.serializedValueLens().val().concat(serializedValue),
      this.valueLens().val().concat(value)
    );

    if (this.props.onAdd) {
      this.props.onAdd(value);
    }
  }
};

module.exports = RepeatingFieldsetMixin;
