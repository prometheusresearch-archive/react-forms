/**
 * @jsx React.DOM
 */
'use strict';

var React             = require('react');
var ReactUpdates      = require('react/lib/ReactUpdates');
var Lens              = require('./Lens');
var ValidatedMixin    = require('./ValidatedMixin');
var FormContextMixin  = require('./FormContextMixin');

var FormStateMixin = {
  mixins: [ValidatedMixin],

  propTypes: {
    value: React.PropTypes.any,
    schema: React.PropTypes.object,
    onChange: React.PropTypes.func,
    onUpdate: React.PropTypes.func
  },

  getInitialState: function() {
    var value = this.props.value || {};
    var validation = this.validate(value);
    return {value, validation};
  },

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.value !== undefined) {
      var value = nextProps.value;
      var validation = this.validate(value);
      this.setState({value, validation});
    }
  },

  valueLens: function(value) {
    value = value || this.state.value;
    return Lens.make(value);
  },

  validationLens: function(validation) {
    validation = validation || this.state.validation;
    return Lens.make(validation);
  },

  value: function() {
    return this.state.value;
  },

  validation: function() {
    return this.state.validation;
  },

  schema: function() {
    return this.props.schema;
  },

  onValueUpdate: function(value, validation) {

    if (validation === undefined) {
      validation = this.validate(value);
    }

    ReactUpdates.batchedUpdates(() => {
      if (this.props.onUpdate) {
        this.props.onUpdate(value);
      }
      if (this.props.onChange && validation.isSuccess) {
        this.props.onChange(value);
      }
      this.setState({value, validation});
    });
  }
};

var FormMixin = {
  mixins: [FormStateMixin, FormContextMixin]
};

module.exports = FormMixin;
