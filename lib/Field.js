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

  render: function() {
    var schema = this.schema();
    var validation = this.validation();

    var className = cx({
      'rex-component-field': true,
      'invalid': validation.isFailure
    });

    return (
      <div className={className}>
        {schema.props.label &&
          <label>{schema.props.label}</label>}
        {this.transferPropsTo(this.renderInputComponent())}
        {validation.isFailure &&
          <Message>{validation.validation.failure}</Message>}
      </div>
    );
  }
});

module.exports = Field;
