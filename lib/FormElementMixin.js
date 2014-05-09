/**
 * @jsx React.DOM
 */
'use strict';

var React                     = require('react');
var utils                     = require('./utils');
var schema                    = require('./schema');
var ValidatedMixin            = require('./ValidatedMixin');
var getDefaultValueForSchema  = require('./getDefaultValueForSchema');
var validationM               = require('./validation');

var success = validationM.success;
var serialize = validationM.serialize;
var isFailure = validationM.isFailure;

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
    serializedValueLens: React.PropTypes.object,
    valueLens: React.PropTypes.object,
    validationLens: React.PropTypes.object,
    externalValidation: React.PropTypes.object,
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
  serializedValueLens: function(value) {
    var lens = this.context.serializedValueLens;
    if (this.props.name !== undefined) {
      lens = lens.get(
        this.props.name,
        serialize(this.schema(), this.valueLens().val())
      );
    }
    return value ? lens.for(value) : lens;
  },

  valueLens: function(value) {
    var lens = this.context.valueLens;
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
    var lens = this.context.validationLens;
    if (this.props.name !== undefined) {
      lens = lens.get('children', {}).get(this.props.name, success);
    }
    return validation ? lens.for(validation) : lens;
  },

  externalValidation: function() {
    var externalValidation = this.context.externalValidation;
    if (this.props.name !== undefined &&
        externalValidation &&
        externalValidation.children) {
      return externalValidation.children[this.props.name] || success;
    }
    return externalValidation || success;
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
        utils.invariant(false, 'invalid field used for schema');
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
  onValueUpdate: function(value, validation, serializedValue) {
    var validationLens = this.validationLens(validation);
    var valueLens = this.valueLens(value);

    var local = this.validateOnly(
      valueLens.val(),
      validationLens.val().children
    );

    validationLens = validationLens.update(local.validation);

    if (isFailure(validationLens.val())) {
      // revert to the previous value
      valueLens = this.valueLens();
    } else {
      valueLens = valueLens.mod(local.value);
    }

    this.context.onValueUpdate(
      valueLens.root(),
      validationLens.root(),
      serializedValue
    );
  },

  /**
   * Update the serialized value for the current form element.
   *
   * @param {Any} serializedValue
   */
  updateValue: function(serializedValue) {
    this.onValueUpdate(
      this.valueLens().mod(serializedValue).root(),
      this.validationLens().root(),
      this.serializedValueLens().mod(serializedValue).root()
    );
  }

};

module.exports = FormElementMixin;
