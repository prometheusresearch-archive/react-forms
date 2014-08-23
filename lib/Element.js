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
 * Also `<Element />` can be used by application developer as a form in
 * "controlled mode":
 *
 *    <Element value={...} onUpdate={...} />
 *
 * The argument passed to `onUpdate` should be passed to `<Element />` as
 * `value` to render the updated form.
 *
 * @jsx React.DOM
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var React                         = require('react/addons');
var PropTypes                     = React.PropTypes;
var cloneWithProps                = React.addons.cloneWithProps;
var {ContextTypes}                = require('./FormConfiguration');
var FormPropTypes                 = require('./PropTypes');
var invariant                     = require('./invariant');
var {isList, isMapping, isScalar} = require('./schema');

var Element = React.createClass({

  propTypes: {
    value: FormPropTypes.Value,
    onUpdate: PropTypes.func
  },

  contextTypes: ContextTypes,

  render() {
    var value = this.props.value;
    var schema = this.props.value.schema;
    var component = schema.props.get('component');

    if (this.props.onUpdate) {
      value = value.update({onUpdate: this.onUpdate});
    }

    if (component) {
      return this.transferPropsTo(
        React.isValidComponent(component) ?
          cloneWithProps(component, {value}) :
          <component value={value} />
      );
    }

    return this.renderElementForSchema(schema);
  },

  renderElementForSchema(schema) {
    var component;
    if (isList(schema)) {
      component = this.context.repeatingFieldsetConstructor || require('./RepeatingFieldset');
    } else if (isMapping(schema)) {
      component = this.context.fieldsetConstructor || require('./Fieldset');
    } else if (isScalar(schema)) {
      component = this.context.fieldConstructor || require('./Field');
    } else {
      invariant(false, 'invalid schema node: ' + schema);
    }
    return this.transferPropsTo(<component value={this.props.value} />);
  },

// TODO: Make sure to provide correctness, the onUpdate callback isn't always
// propagated correctly
//shouldComponentUpdate({value}) {
//  return !this.props.value.equals(value);
//},

  onUpdate(value) {
    this.props.value.onUpdate(value);
    this.props.onUpdate(this.props.value.for_(value.root()));
  }
});

module.exports = Element;
