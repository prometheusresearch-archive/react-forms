/**
 * `<FormConfiguration />` component allows to provide configuration to a form.
 * Currently the only supported configuration is overriding constructors for
 * field, fieldset and repeating fieldset form elements.
 *
 * An example usage:
 *
 *    <FormConfiguration fieldConstructor={MyAwesomeField}>
 *      <Form />
 *    </FormConfiguration>
 *
 * This will use `<MyAwesomeField />` for rendering scalar values instead of
 * standard `<Field />` component.
 *
 * @jsx React.DOM
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var React     = require('react');
var PropTypes = React.PropTypes;

var ContextTypes = {
  fieldConstructor: PropTypes.constructor,
  fieldsetConstructor: PropTypes.constructor,
  repeatingFieldsetConstructor: PropTypes.constructor
};

var FormConfiguration = React.createClass({

  propTypes: {
    children: PropTypes.component.isRequired,
    fieldConstructor: PropTypes.constructor,
    fieldsetConstructor: PropTypes.constructor,
    repeatingFieldsetConstructor: PropTypes.constructor
  },

  childContextTypes: ContextTypes,

  render() {
    return React.Children.only(this.props.children);
  },

  getChildContext() {
    var {
      fieldConstructor,
      fieldsetConstructor,
      repeatingFieldsetConstructor
    } = this.props;
    return {
      fieldConstructor,
      fieldsetConstructor,
      repeatingFieldsetConstructor
    };
  }

});

module.exports = FormConfiguration;
module.exports.ContextTypes = ContextTypes;
