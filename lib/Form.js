/**
 * `<Form />` component is a stateful wrapper around `<Element />` component.
 *
 * The basic usage is as follows:
 *
 *    <Form
 *      schema={...}
 *      defaultValue={...}
 *      onChange={function(value) { ... }}
 *      onUpdate={function(value, validation) { ... }}
 *      />
 *
 * Property `defaultValue` is used to set the initial value of the form. It only
 * takes effect on initial render, after that form uses its own value from the
 * state.
 *
 * Callback `onUpdate` is called on every change to a form value, `onChange` is
 * only called when form value is valid after the change.
 *
 * Alternatively one can read current form value by calling `getValue()` method
 * (you can access form by keeping a ref to it).
 *
 * @jsx React.DOM
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var {is}          = require('immutable');
var React         = require('react/addons');
var PropTypes     = React.PropTypes;
var cx            = React.addons.classSet;
var FormPropTypes = require('./PropTypes');
var Element       = require('./Element');
var Value         = require('./Value');
var emptyFunction = require('./emptyFunction');

var Form = React.createClass({

  propTypes: {
    component: PropTypes.constructor,
    defaultValue: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    externalValidation: PropTypes.object,
    schema: FormPropTypes.Schema,
    onChange: PropTypes.func,
    onUpdate: PropTypes.func
  },

  render() {
    var {component: Component, className, render, ...props} = this.props;
    var {value} = this.state;
    var classNames = cx(
      className,
      'rf-Form',
      !value.isValid && 'rf-Form--invalid'
    );
    return (
      <Component {...props} className={classNames}>
        <Element value={this.state.value} />
      </Component>
    );
  },

  getDefaultProps() {
    return {
      component: 'form',
      onChange: emptyFunction,
      onUpdate: emptyFunction
    };
  },

  getInitialState() {
    var value = Value.create(
      this.props.schema,
      this.props.defaultValue,
      this.onUpdate,
      this.root
    );
    return {value};
  },

  componentWillReceiveProps({schema}) {
    if (!is(schema, this.props.schema)) {
      var value = this.root().setSchema(schema);
      this.setState({value});
    }
  },

  root() {
    return this._pendingState && this._pendingState.value ?
      this._pendingState.value :
      this.state.value;
  },

  onUpdate(value) {
    value = value.root;
    this.setState({value});
    this.props.onUpdate(value.value, value.validation);
    if (value.isValid) {
      this.props.onChange(value.value);
    }
  },

  getValue() {
    return this.state.value.value;
  },

  setValue(newValue) {
    var value = this.state.value.set(newValue);
    this.setState({value});
  },

  getValidation() {
    return this.state.value.validation;
  },

  isValid() {
    return this.state.value.isValid;
  }
});

module.exports = Form;
