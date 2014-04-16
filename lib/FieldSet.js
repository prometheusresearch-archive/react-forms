/**
 * @jsx React.DOM
 */
'use strict';

var React         = require('react');
var FieldsetMixin = require('./FieldsetMixin');

var Fieldset = React.createClass({
  mixins: [FieldsetMixin],

  render: function() {
    var schema = this.schema();
    return this.transferPropsTo(
      <div className="react-forms-fieldset">
        {schema.props.label && <h4>{schema.props.label}</h4>}
        {schema.map(this.renderField)}
      </div>
    );
  }
});

module.exports = Fieldset;
