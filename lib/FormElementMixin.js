/**
 * @jsx React.DOM
 */
'use strict';

var React                     = require('react');
var invariant                 = require('react/lib/invariant');
var schema                    = require('./schema');
var success                   = require('./validation').success;
var ValidatedMixin            = require('./ValidatedMixin');
var getDefaultValueForSchema  = require('./getDefaultValueForSchema');

/**
 * Mixin for the form element (form field, fieldset of repeating fieldset).
 */
var FormElementMixin = {

  mixins: [ValidatedMixin],

  propTypes: {
    name: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ])
  },

  contextTypes: {
    validation: React.PropTypes.object,
    value: React.PropTypes.object,
    schema: React.PropTypes.object,
    onValueUpdate: React.PropTypes.func
  },

  /**
   * Return lens for the form element value or for the value passed as an
   * argument.
   *
   * @param {Any?} value
   * @returns {Lens}
   */
  valueLens: function(value) {
    var lens = this.context.value;
    if (this.props.name !== undefined) {
      lens = lens.get(this.props.name, getDefaultValueForSchema(this.schema()));
    }
    return value ? lens.for(value) : lens;
  },

  /**
   * Return lens for the form element validation state or for the validation
   * state passed as an argument.
   *
   * @param {Validation?} validation
   * @returns {Lens}
   */
  validationLens: function(validation) {
    var lens = this.context.validation;
    if (this.props.name !== undefined) {
      lens = lens.get('children', {}).get(this.props.name, success);
    }
    return validation ? lens.for(validation) : lens;
  },

  /**
   * Return form element value.
   *
   * @returns {Any}
   */
  value: function() {
    return this.valueLens().val();
  },

  /**
   * Return form element validation state.
   *
   * @returns {Validation}
   */
  validation: function() {
    return this.validationLens().val();
  },

  /**
   * Return form element schema.
   *
   * @returns {Schema}
   */
  schema: function() {
    var node = this.context.schema;

    if (node && this.props.name !== undefined) {
      if (schema.isSchema(node)) {
        node = node.children[this.props.name];
      } else if (schema.isList(node)) {
        node = node.children;
      } else {
        invariant(false, 'invalid field used for schema');
      }
    }

    return node;
  },

  /**
   * Called when the form value and validation state is being updated.
   *
   * This method intercepts updated value and validation state and perform its
   * own local validation and deserialization. Then passes everything up the
   * owner.
   *
   * @param {Any} value
   * @param {Validation} validation
   */
  onValueUpdate: function(value, validation) {
    var valueLens = this.valueLens(value);
    var validationLens = this.validationLens(validation);

    var local = this.validateOnly(
        valueLens.val(),
        validationLens.val().children);

    valueLens = valueLens.mod(local.value);
    validationLens = validationLens.update(local.validation);

    this.context.onValueUpdate(valueLens.root(), validationLens.root());
  },

  /**
   * Update the value for the current form element.
   *
   * @param {Any} value
   */
  updateValue: function(value) {
    this.onValueUpdate(this.valueLens().mod(value).root(), success);
  }

};

module.exports = FormElementMixin;
