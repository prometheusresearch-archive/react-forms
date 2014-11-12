/**
 * @jsx React.DOM
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var React           = require('react/addons');
var cloneWithProps  = React.addons.cloneWithProps;
var merge           = require('./merge');
var FormPropTypes   = require('./PropTypes');

var Input = React.createClass({

  propTypes: {
    value: FormPropTypes.Value
  },

  render() {
    var {input: Component, value, ...props} = this.props;
    Component = Component || value.node.props.get('input');
    if (Component) {
      return (
        React.isValidElement(Component) ?
          cloneWithProps(Component, merge(props, {value: value.serialized, ref: 'input'})) :
          <Component {...props} ref="input" value={value.serialized} />
      );
    } else {
      return (
        <input {...props} ref="input" type="text" value={value.serialized} />
      );
    }
  },

  focus() {
    var input = this.refs.input;
    if (input.focus) {
      input.focus();
    } else {
      input.getDOMNode().focus();
    }
  }
});

module.exports = Input;
