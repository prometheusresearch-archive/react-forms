/**
 * @jsx React.DOM
 */
'use strict';

var React           = require('react/addons');
var cloneWithProps  = React.addons.cloneWithProps;
var PropTypes       = React.PropTypes;
var FormPropTypes   = require('./PropTypes');
var {Property}      = require('./schema');

var FormInput = React.createClass({

  propTypes: {
    value: FormPropTypes.ValueOfType(Property)
  },

  render() {
    var {input, value} = this.props;
    input = input || value.schema.props.input;

    var props = {value: value.serialized};

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

module.exports = FormInput;
