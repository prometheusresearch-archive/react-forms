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
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var {is}          = require('immutable');
var React         = require('react');
var PropTypes     = React.PropTypes;
var cx            = require('classnames');
var FormPropTypes = require('./PropTypes');
var Element       = require('./Element');
var Value         = require('./Value');
var emptyFunction = require('./emptyFunction');
var FocusStore    = require('./FocusStore');

var Form = React.createClass({

  mixins: [FocusStore.ScopeMixin],

  propTypes: {
    component: PropTypes.constructor,
    defaultValue: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    externalValidation: PropTypes.object,
    schema: FormPropTypes.Schema,
    onChange: PropTypes.func,
    onUpdate: PropTypes.func
  },

  render() {
    var {
      component: Component, className,
      onUpdate, onChange,
      defaultValue, externalValidation,
      ...props
    } = this.props;
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
    var {schema, defaultValue, externalValidation} = this.props;
    var value = Value.create(schema, defaultValue, this.onUpdate, this.root);
    if (externalValidation) {
      value = value.setExternalValidation(externalValidation);
    }
    return {value};
  },

  componentWillReceiveProps({schema, externalValidation}) {
    var value = this.root();
    if (!is(schema, this.props.schema)) {
      value = value.setSchema(schema);
    }
    if (!is(externalValidation, this.props.externalValidation)) {
      value = value.setExternalValidation(externalValidation);
    }
    this.setState({value});
  },

  root() {
    return this._pendingState && this._pendingState.value ?
      this._pendingState.value :
      this.state.value;
  },

  onUpdate(value, keyPath) {
    this.setState({value});
    this.props.onUpdate(value.value, value.validation, keyPath);
    if (value.isValid) {
      this.props.onChange(value.value, value.validation, keyPath);
    }
  },

  getValue() {
    return this.state.value.value;
  },

  makeDirty() {
    this.state.value.makeDirty();
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
