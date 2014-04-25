/**
 * @jsx React.DOM
 */
'use strict';

var validation = require('./validation');

/**
 * Common validation routines.
 *
 * @private
 */
var ValidatedMixin = {

  /**
   * Validate value incrementally
   *
   * @param {Any} value
   * @param {Object.<{<name>: Validation}>} children
   * @returns {Object.<{value: Any, validation: Validation}>}
   */
  validateOnly: function(value, children) {
    return this._validateWith(validation.validateOnly, value, children);
  },

  /**
   * Validate value.
   *
   * @param {Any} value
   * @returns {Object.<{value: Any, validation: Validation}>}
   */
  validate: function(value) {
    return this._validateWith(validation.validate, value);
  },

  _validateWith: function(validate, value, children) {
    value = value !== undefined ? value : this.valueLens().val();
    var schema = this.schema();
    return schema ?
      validate(schema, value, children) :
      {validation: validation.success, value};
  },

  /**
   * If form value is valid.
   *
   * @returns {Boolean}
   */
  isValid: function() {
    return this.validate().isSuccess;
  }
};

module.exports = ValidatedMixin;
