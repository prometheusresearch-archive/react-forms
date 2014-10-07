/**
 * @jsx React.DOM
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var React           = require('react/addons');
var cloneWithProps  = React.addons.cloneWithProps;
var PropTypes       = React.PropTypes;
var FormPropTypes   = require('./PropTypes');
var {Scalar}        = require('./schema');

var Input = React.createClass({

  propTypes: {
    value: FormPropTypes.ValueOfType(Scalar)
  },

  render() {
    var {input: component, value} = this.props;
    component = component || value.schema.props.get('input');
    if (component) {
      return this.transferPropsTo(
        React.isValidComponent(component) ?
          cloneWithProps(component, {value: value.serialized}) :
          <component value={value.serialized} />
      );
    } else {
      return this.transferPropsTo(
        <input type="text" value={value.serialized} />
      );
    }
  }
});

module.exports = Input;
