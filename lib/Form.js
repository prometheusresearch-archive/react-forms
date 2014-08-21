/**
 * `<Form />` component is a stateful wrapper around `<FormElement />` component.
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

var React         = require('react/addons');
var PropTypes     = React.PropTypes;
var cx            = React.addons.classSet;
var FormPropTypes = require('./PropTypes');
var FormElement   = require('./FormElement');
var Value         = require('./Value');

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
    var {component} = this.props;
    var {value} = this.state;
    var className = cx({
      'rf-Form': true,
      'rf-Form--invalid': value.validation.isFailure
    });
    return this.transferPropsTo(
      <component className={className}>
        <FormElement value={value} />
      </component>
    );
  },

  getDefaultProps() {
    return {
      component: React.DOM.form
    };
  },

  getInitialState() {
    return {
      value: Value(
        this.props.schema,
        this.props.defaultValue,
        this.props.externalValidation,
        this.onUpdate
      )
    };
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.schema && nextProps.schema !== this.props.schema) {
      var value = this.state.value.withSchema(nextProps.schema);
      this.setState({value});
    }
  },

  onUpdate(value) {
    var path = value.path;
    value = value.root();
    this.setState({value});
    if (this.props.onChange || this.props.onUpdate) {
      var jsValue = value.value.toJS();
      if (this.props.onUpdate) {
        this.props.onUpdate(jsValue, value.validation, path);
      }
      if (this.props.onChange && value.isValid) {
        this.props.onChange(jsValue);
      }
    }
  },

  getValue() {
    return this.state.value.value.toJS();
  },

  getValidation() {
    return this.state.value.validation;
  },

  isValid() {
    return this.state.value.isValid;
  }
});

module.exports = Form;
