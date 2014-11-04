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

var React         = require('react/addons');
var PropTypes     = React.PropTypes;
var cx            = React.addons.classSet;
var FormPropTypes = require('./PropTypes');
var Element       = require('./Element');
var Value         = require('./value/Value');
var Ref           = require('./value/Ref');

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
    var {render} = this.props;
    render = render || this.defaultRender;
    return render(this.state.value);
  },

  defaultRender(value) {
    var {component: Component, className, render, ...props} = this.props;
    var value = this.state.value
    var classNames = cx(
      className,
      'rf-Form',
      !value.value.isValid && 'rf-Form--invalid'
    );
    return (
      <Component {...props} className={classNames}>
        <Element value={this.state.value} />
      </Component>
    );
  },

  getDefaultProps() {
    return {
      component: 'form'
    };
  },

  getInitialState() {
    var value = Value.create(this.props.schema, this.props.defaultValue);
    return {
      value: Ref.create(value, this.onUpdate)
    };
  },

  onUpdate(value) {
    this.forceUpdate();
    if (this.props.onChange || this.props.onUpdate) {
      var jsValue = value.value.toJS();
      if (this.props.onUpdate) {
        this.props.onUpdate(jsValue, value.validation);
      }
      if (this.props.onChange && value.isValid) {
        this.props.onChange(jsValue);
      }
    }
  },

  getValue() {
    return this.state.value.value.value.toJS();
  },

  setValue(newValue) {
    var value = this.state.value.set(newValue);
    this.setState({value});
  },

  markDirty() {
    var value = this.state.value;
    this.setState({value});
  },

  getValidation() {
    return this.state.value.value.validation;
  },

  isValid() {
    return this.state.value.value.isValid;
  }
});

module.exports = Form;
