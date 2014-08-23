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
    var {input, value} = this.props;
    input = input || value.schema.props.get('input');
    if (input) {
      return this.transferPropsTo(
        cloneWithProps(input, {value: value.serialized})
      );
    } else {
      return this.transferPropsTo(
        <input type="text" value={value.serialized} />
      );
    }
  }
});

module.exports = Input;
