/**
 * @jsx React.DOM
 */
'use strict';

var validation = require('./validation');

var ValidatedMixin = {

  validateOnly: function(value, children) {
    return this._validateWith(validation.validateOnly, value, children);
  },

  validate: function(value) {
    return this._validateWith(validation.validate, value);
  },

  _validateWith: function(validate, value, children) {
    value = value || this.value();
    var schema = this.schema();
    return schema ? validate(schema, value, children) : validation.success;
  },

  isValid: function() {
    return this.validate().isSuccess;
  }
};

module.exports = ValidatedMixin;
