/**
 * @jsx React.DOM
 */
'use strict';

var React         = require('react');
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
      <div className="react-forms-fieldset">
        {schema.props.label && <h4>{schema.props.label}</h4>}
        {schema.map(this.renderField)}
      </div>
    );
  }
});

module.exports = Fieldset;
