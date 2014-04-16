/**
 * @jsx React.DOM
 */
'use strict';

var FormElementMixin  = require('./FormElementMixin');
var FormContextMixin  = require('./FormContextMixin');

var FieldSetMixin = {
  mixins: [FormElementMixin, FormContextMixin],

  renderFieldByName: function(name) {
    return this.renderField(this.schema().children[name]);
  },

  renderField: function(field) {
    var createComponentFromSchema = require('./createComponentFromSchema');
    return createComponentFromSchema(field);
  }
};

module.exports = FieldSetMixin;
