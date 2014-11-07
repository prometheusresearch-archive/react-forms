/**
 * @jsx React.DOM
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var React         = require('react/addons');
var PropTypes     = React.PropTypes;
var cx            = React.addons.classSet;
var FormPropTypes = require('./PropTypes');
var Label         = require('./Label');
var Element       = require('./Element');

/**
 * A component which renders a set of fields.
 *
 * It is used by <Form /> component at top level to render its fields.
 */
var Fieldset = React.createClass({

  propTypes: {
    value: FormPropTypes.Value,
    label: PropTypes.string,
    hint: PropTypes.string
  },

  render() {
    var {value, className, ...props} = this.props;
    return (
      <div {...props} className={cx(className, 'rf-Fieldset')}>
        <Label
          className="rf-Fieldset__label"
          label={this.props.label || value.node.props.get('label')}
          hint={this.props.hint || value.node.props.get('hint')}
          />
        {value.map((value, key) => <Element key={key} value={value} />)}
      </div>
    );
  }
});

module.exports = Fieldset;
