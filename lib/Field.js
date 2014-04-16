/**
 * @jsx React.DOM
 */
'use strict';

var React           = require('react');
var cx              = require('react/lib/cx');
var FieldMixin      = require('./FieldMixin');
var Message         = require('./Message');

var Field = React.createClass({
  mixins: [FieldMixin],

  propTypes: {
    label: React.PropTypes.string
  },

  renderLabel: function() {
    var label = this.props.label;
    if (!label) {
      label = this.schema().props.label;
    }
    return label && <label>{label}</label>;
  },

  render: function() {
    var validation = this.validation();

    var className = cx({
      'react-forms-field': true,
      'invalid': validation.isFailure
    });

    return (
      <div className={className}>
        {this.renderLabel()}
        {this.transferPropsTo(this.renderInputComponent())}
        {validation.isFailure &&
          <Message>{validation.validation.failure}</Message>}
      </div>
    );
  }
});

module.exports = Field;
