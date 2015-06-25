/**
 * @copyright 2015, Prometheus Research, LLC
 */
'use strict';

var React           = require('react');
var isString        = require('./isString');
var isArray         = require('./isArray');
var mapElement      = require('./mapElement');

var Fieldset = React.createClass({

  render() {
    var {children, component: Component, ...props} = this.props;
    children = mapElement(children, this._propagateFormValue);
    return <Component>{children}</Component>;
  },

  getDefaultProps() {
    return {
      component: 'div'
    };
  },

  _propagateFormValue(element) {
    if (element && element.props && element.props.selectFormValue) {
      var formValue = this.props.formValue;
      var selectFormValue = element.props.selectFormValue;
      if (isString(selectFormValue) || isArray(selectFormValue)) {
        formValue = formValue.select(selectFormValue);
      }
      element = React.cloneElement(element, {formValue});
      return [false, element];
    }
    return element;
  }
});

module.exports = Fieldset;
