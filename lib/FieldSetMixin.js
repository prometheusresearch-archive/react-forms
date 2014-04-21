/**
 * @jsx React.DOM
 */
'use strict';

var FormElementMixin  = require('./FormElementMixin');
var FormContextMixin  = require('./FormContextMixin');

var FieldsetMixin = {
  mixins: [FormElementMixin, FormContextMixin],

  renderFieldByName: function(name) {
    return this.renderField(this.schema().children[name]);
  },

  renderField: function(node) {
    // prevent circular require
    var createComponentFromSchema = require('./createComponentFromSchema');
    return createComponentFromSchema(node);
  }
};

module.exports = FieldsetMixin;
