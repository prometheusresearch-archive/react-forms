/**
 * @flow
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var React           = require('react/addons');
var cloneElement    = require('./cloneElement');
var FormPropTypes   = require('./PropTypes');
var merge           = require('./merge');

var Input = React.createClass({

  propTypes: {
    value: FormPropTypes.Value.isRequired
  },

  render() {
    var {input: Component, value, ...props} = this.props;
    Component = Component || value.node.props.get('input');
    if (Component) {
      return (
        React.isValidElement(Component) ?
          cloneElement(
            Component,
            merge(props, {value: value.serialized, ref: 'input'})
          ) :
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
