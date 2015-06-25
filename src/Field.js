/**
 * @copyright 2015, Prometheus Research, LLC
 */
'use strict';

var React           = require('react');

var Field = React.createClass({

  render() {
    var {label, children} = this.props;
    var {dirty} = this.state;
    var {value, errors, params} = this.props.formValue;
    var showErrors = dirty || params.forceShowErrors;
    children = React.cloneElement(
      React.Children.only(children),
      {value, onChange: this.onChange});
    return (
      <div onBlur={this.onBlur}>
        <label>{label}</label>
        {children}
        {showErrors && errors &&
          <div>
            {errors.map(error => <div>{error.message}</div>)}
          </div>}
      </div>
    );
  },

  getDefaultProps() {
    return {
      children: <input type="text" />
    };
  },

  getInitialState() {
    return {
      dirty: false
    };
  },

  onBlur() {
    this.setState({dirty: true});
  },

  onChange(e) {
    var value;
    if (e && e.target && e.target.value !== undefined) {
      e.stopPropagation();
      value = e.target.value;
      if (value === '') {
        value = undefined;
      }
    } else {
      value = e;
    }
    this.setState({dirty: true});
    this.props.formValue.set(value);
  }

});

module.exports = Field;
