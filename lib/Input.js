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
    input: React.PropTypes.any,
    markDirty: React.PropTypes.bool
  },

  render(): ?ReactElement {
    var {input: Component, value, dirtyOnBlur, ...props} = this.props;
    props = {
      ...props,
      ref: 'input',
      value: value.serialized,
      name: value.node.props.get('name') || value.keyPath.join('__'),
      onChange: this.onChange,
      onBlur: dirtyOnBlur && this.onBlur,
      dirtyOnBlur: undefined,
      dirtyOnChange: undefined
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

  getDefaultProps() {
    return {
      dirtyOnBlur: true,
      dirtyOnChange: true
    };
  },

  focus() {
    var input = this.refs.input;
    if (input.focus) {
      input.focus();
    } else {
      input.getDOMNode().focus();
    }
  },

  onChange(e) {
    if (e && e.stopPropagation) {
      e.stopPropagation();
    }

    var serialized = getValueFromEvent(e);
    this.props.value.setSerialized(
      serialized, {dirty: this.props.dirtyOnChange});
  },

  onBlur() {
    var {value} = this.props;
    if (!value.isDirty) {
      value.makeDirty();
    }
  }

});

/**
 * Extract value from event
 *
 * We support both React.DOM 'change' events and custom change events
 * emitted from custom components.
 *
 * @param {Event} e
 * @returns {Any}
 */
function getValueFromEvent(e: {target: {value: any}} | any) {
  return e && e.target && e.target.value !== undefined ?
    e.target.value : e;
}

module.exports = Input;
