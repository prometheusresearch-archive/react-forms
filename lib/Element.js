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

var Immutable                           = require('immutable');
var React                               = require('react/addons');
var assign                              = require('react/lib/Object.assign');
var PropTypes                           = React.PropTypes;
var cloneWithProps                      = React.addons.cloneWithProps;
var {ContextTypes}                      = require('./FormConfiguration');
var FormPropTypes                       = require('./PropTypes');
var invariant                           = require('./invariant');
var {ScalarNode, MappingNode, ListNode} = require('./value/schema');

var Element = React.createClass({

  propTypes: {
    value: FormPropTypes.Ref
  },

  contextTypes: ContextTypes,

  render() {
    var {value} = this.props;
    var Component = value.value.node.props.get('component');

    if (Component) {
      return (
        React.isValidElement(Component) ?
          cloneWithProps(Component, this.props) :
          React.createElement(Component, this.props)
      );
    }

    return this.renderElementForSchema(value.value.node);
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
      invariant(false, 'invalid schema node: ' + node);
    }
    return <Component {...this.props} />;
  },

  shouldComponentUpdate({value}, nextState, nextContext) {
    var sameContext = (
      this.context.fieldConstructor === nextContext.fieldConstructor &&
      this.context.fieldsetConstructor === nextContext.fieldsetConstructor &&
      this.context.repeatingFieldsetConstructor === nextContext.repeatingFieldsetConstructor
    );
    var shouldComponentUpdate = (
      value.value.node.props.get('forceUpdate') ||
      !sameContext ||
      !Immutable.is(value, this.props)
    );
    return shouldComponentUpdate;
  }
});

module.exports = Element;
