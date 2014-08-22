/**
 * @jsx React.DOM
 */
'use strict';

var React         = require('react');
var PropTypes     = React.PropTypes;
var FormPropTypes = require('./PropTypes');
var Label         = require('./Label');
var Element       = require('./Element');
var {Mapping}     = require('./schema');

/**
 * A component which renders a set of fields.
 *
 * It is used by <Form /> component at top level to render its fields.
 */
var Fieldset = React.createClass({

  propTypes: {
    value: FormPropTypes.ValueOfType(Mapping),
    label: PropTypes.string,
    hint: PropTypes.string
  },

  render() {
    var value = this.props.value;
    return this.transferPropsTo(
      <div className="rf-Fieldset" value={undefined}>
        <Label
          className="rf-Fieldset__label"
          label={this.props.label || value.schema.props.get('label')}
          hint={this.props.hint || value.schema.props.get('hint')}
          />
        {value.map((value, key) => <Element key={key} value={value} />)}
      </div>
    );
  }
});

module.exports = Fieldset;
