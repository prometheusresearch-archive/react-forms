/**
 * @jsx React.DOM
 */
'use strict';

var React         = require('react');
var Label         = require('./Label');
var FieldsetMixin = require('./FieldsetMixin');

/**
 * A component which renders a set of fields.
 *
 * It is used by <Form /> component at top level to render its fields.
 */
var Fieldset = React.createClass({
  mixins: [FieldsetMixin],

  render: function() {
    var schema = this.value().schema;
    return this.transferPropsTo(
      <div className="rf-Fieldset">
        {this.renderLabel()}
        {schema.map(this.renderField)}
      </div>
    );
  },

  renderLabel: function() {
    var schema = this.value().schema;
    return (
      <Label
        className="rf-Fieldset__label"
        schema={schema}
        label={this.props.label}
        hint={this.props.hint}
        />
    );
  }
});

module.exports = Fieldset;
