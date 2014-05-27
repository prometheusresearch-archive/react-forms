/**
 * @jsx React.DOM
 */
'use strict';

var React           = require('react/addons');
var cx              = React.addons.classSet;
var mergeInto       = require('./utils').mergeInto;
var FieldMixin      = require('./FieldMixin');
var Message         = require('./Message');
var isFailure       = require('./validation').isFailure;

var Field = React.createClass({
  mixins: [FieldMixin],

  propTypes: {
    label: React.PropTypes.string
  },

  renderLabel: function(props) {
    var schema = this.value().schema;
    var label = this.props.label ? this.props.label : schema.props.label;
    var hint = this.props.hint ? this.props.hint : schema.props.hint;
    var labelProps = {className: 'react-forms-label'};
    if (props) {
      mergeInto(labelProps, props);
    }
    return (label || hint) && React.DOM.label(labelProps,
      label,
      hint && <span className="react-forms-hint">{hint}</span>);
  },

  onBlur: function() {
    var serializedValueLens = this.value().serializedValueLens;
    if (serializedValueLens.isUndefined()) {
      var value = this.value().updateSerializedValue(serializedValueLens.val());
      this.onValueUpdate(value);
    }
  },

  render: function() {
    var value = this.value();
    var externalValidation = this.externalValidation();

    var className = cx({
      'react-forms-field': true,
      'invalid': isFailure(value.validation)
    });

    var id = this._rootNodeID;

    var input = this.renderInputComponent({id, onBlur: this.onBlur});

    return (
      <div className={className}>
        {this.renderLabel({htmlFor: id})}
        {this.transferPropsTo(input)}
        {isFailure(externalValidation) &&
          <Message>{externalValidation.validation.failure}</Message>}
        {isFailure(value.validation) && !value.serializedValueLens.isUndefined() &&
          <Message>{value.validation.validation.failure}</Message>}
      </div>
    );
  }
});

module.exports = Field;
