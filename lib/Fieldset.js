/**
 * @jsx React.DOM
 */
'use strict';

var React         = require('react/addons');
var FormPropTypes = require('./PropTypes');
var Label         = require('./Label');
var FormElement   = require('./FormElement');
var {Mapping}     = require('./schema');

/**
 * A component which renders a set of fields.
 *
 * It is used by <Form /> component at top level to render its fields.
 */
var Fieldset = React.createClass({

  propTypes: {
    value: FormPropTypes.ValueOfType(Mapping)
  },

  render() {
    var value = this.props.value;
    var schema = value.schema;
    var fields = Object.keys(schema.children).map((name) =>
      <FormElement key={name} value={value.get(name)} />
    );
    return this.transferPropsTo(
      <div className="rf-Fieldset">
        <Label
          className="rf-Fieldset__label"
          label={this.props.label || schema.props.label}
          hint={this.props.hint || schema.props.hint}
          />
        {fields}
      </div>
    );
  }
});

module.exports = Fieldset;
