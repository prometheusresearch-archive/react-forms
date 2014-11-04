/**
 * @jsx React.DOM
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var React           = require('react/addons');
var cloneWithProps  = React.addons.cloneWithProps;
var assign          = require('react/lib/Object.assign');
var PropTypes       = React.PropTypes;
var FormPropTypes   = require('./PropTypes');
var {ScalarNode}    = require('./value/schema');

var Input = React.createClass({

  propTypes: {
    value: FormPropTypes.Value
  },

  render() {
    var {input: Element, value, ...props} = this.props;
    Element = Element || value.node.props.get('input');
    if (Element) {
      return (
        React.isValidElement(Element) ?
          cloneWithProps(Element, assign(props, {value: value.serialized})) :
          <Element {...props} value={value.serialized} />
      );
    } else {
      return (
        <input {...props} type="text" value={value.serialized} />
      );
    }
  }
});

module.exports = Input;
