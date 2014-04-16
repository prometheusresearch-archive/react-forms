/**
 * @jsx React.DOM
 */
'use strict';

var React         = require('react');
var FieldSetMixin = require('./FieldSetMixin');

var FieldSet = React.createClass({
  mixins: [FieldSetMixin],

  render: function() {
    var schema = this.schema();
    return this.transferPropsTo(
      <div className="rex-component-fieldset">
        {schema.props.label && <h4>{schema.props.label}</h4>}
        {schema.map(this.renderField)}
      </div>
    );
  }
});

module.exports = FieldSet;
