/**
 * @jsx React.DOM
 */
'use strict';

var FormElementMixin = require('./FormElementMixin');
var FormContextMixin = require('./FormContextMixin');

/**
 * Mixin for implementing fieldcomponents.
 *
 * See <Fieldset /> component for the basic implementation example.
 */
var FieldsetMixin = {
  mixins: [FormElementMixin, FormContextMixin],

  /**
   * Render field given a schema node
   *
   * @param {Schema} node
   * @returns {ReactComponent}
   */
  renderField: function(node) {
    // prevent circular require
    var createComponentFromSchema = require('./createComponentFromSchema');
    return createComponentFromSchema(node);
  }
};

module.exports = FieldsetMixin;
