/**
 * `<Element />` component renders form value into one of then `<Field />`,
 * `<Fieldset />` or `<RepeatingFieldset />` component:
 *
 *    <Element value={...} />
 *
 * This component is the main building block for composite form elements such as
 * `<Fieldset />` and `<RepeatingFieldset />` which use it to render its
 * children.
 *
 * @jsx React.DOM
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var React                               = require('react/addons');
var PropTypes                           = React.PropTypes;
var cloneWithProps                      = React.addons.cloneWithProps;
var {ContextTypes}                      = require('./FormConfiguration');
var FormPropTypes                       = require('./PropTypes');
var invariant                           = require('./invariant');
var {ScalarNode, MappingNode, ListNode} = require('./value/schema');

var Element = React.createClass({

  propTypes: {
    value: FormPropTypes.Value
  },

  contextTypes: ContextTypes,

  render() {
    var {value} = this.props;
    var Component = value.node.props.get('component');

    if (Component) {
      return this.transferPropsTo(
        React.isValidComponent(Component) ?
          cloneWithProps(Component, {value}) :
          <Component value={value} />
      );
    }

    return this.renderElementForSchema(value.node);
  },

  renderElementForSchema(node) {
    var Component;
    if (node instanceof ListNode) {
      Component = this.context.repeatingFieldsetConstructor || require('./RepeatingFieldset');
    } else if (node instanceof MappingNode) {
      Component = this.context.fieldsetConstructor || require('./Fieldset');
    } else if (node instanceof ScalarNode) {
      Component = this.context.fieldConstructor || require('./Field');
    } else {
      invariant(false, 'invalid schema node: ' + schema);
    }
    return this.transferPropsTo(<Component value={this.props.value} />);
  },

  shouldComponentUpdate({value}, nextState, nextContext) {
    var sameContext = (
      this.context.fieldConstructor === nextContext.fieldConstructor &&
      this.context.fieldsetConstructor === nextContext.fieldsetConstructor &&
      this.context.repeatingFieldsetConstructor === nextContext.repeatingFieldsetConstructor
    );
    var shouldComponentUpdate = (
      value.schema.props.get('forceUpdate') ||
      !sameContext ||
      !value.equals(this.props.value)
    );
    return shouldComponentUpdate;
  }
});

module.exports = Element;
