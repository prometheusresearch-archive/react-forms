/**
 * @flow
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var React           = require('react/addons');
var cloneWithProps  = React.addons.cloneWithProps;
var FormPropTypes   = require('./PropTypes');

var Input = React.createClass({

  propTypes: {
    value: FormPropTypes.Value.isRequired,
    input: React.PropTypes.any
  },

  render(): ?ReactElement {
    var {input: Component, value, ...props} = this.props;
    props = {
      ...props,
      ref: 'input',
      value: value.serialized,
      name: value.node.props.get('name') || value.keyPath.join('__')
    };
    Component = Component || value.node.props.get('input');
    if (Component) {
      return React.isValidElement(Component) ?
        cloneWithProps(Component, props) :
        <Component {...props} />;
    } else {
      return <input {...props} type="text" />;
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
