/**
 * @jsx React.DOM
 */
'use strict';

var React                     = require('react');
var FormElementMixin          = require('./FormElementMixin');
var createComponentFromSchema = require('./createComponentFromSchema');

/**
 * A "proxy" component which renders into field, fieldset or repeating fieldset
 * based on a current schema node.
 *
 * Example usage:
 *
 *    <FormFor name="fieldName" />
 *
 * will automatically generate a form component for the "fieldName" field of the
 * form value (retreived from the current form context).
 *
 * Alternatively pass `value` prop:
 *
 *    <FormFor value={value.get('fieldName')} />
 *
 */
var FormFor = React.createClass({
  mixins: [FormElementMixin],

  render: function() {
    var value = this.value();
    var component = createComponentFromSchema(value.schema, {value});
    return this.transferPropsTo(component);
  }
});

module.exports = FormFor;
