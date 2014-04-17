/**
 * @jsx React.DOM
 */
'use strict';

var validation = require('./validation');

var ValidatedMixin = {

  validateSerializedOnly: function(value, children) {
    value = value || this.value();
    var schema = this.schema();
    return schema ?
      validation.validateSerializedOnly(schema, value, children) :
      {validation: validation.success, value};
  },

  validate: function(value) {
    value = value || this.value();
    var schema = this.schema();
    return schema ? validation.validate(schema, value) : validation.success;
  },

  isValid: function() {
    return this.validate().isSuccess;
  }
};

module.exports = ValidatedMixin;
