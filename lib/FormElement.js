/**
 * @jsx React.DOM
 */
'use strict';

var React                         = require('react/addons');
var cloneWithProps                = React.addons.cloneWithProps;
var FormPropTypes                 = require('./PropTypes');
var invariant                     = require('./invariant');
var {isList, isMapping, isScalar} = require('./schema');

var FormElement = React.createClass({

  propTypes: {
    value: FormPropTypes.Value
  },

  render() {
    var schema = this.props.value.schema;
    var component = schema.props.component;

    if (component) {
      return this.transferPropsTo(
        React.isValidComponent(component) ?
          cloneWithProps(component, props) :
          <component />
      );
    }

    return this.renderFormElementForSchema(schema);
  },

  renderFormElementForSchema(schema) {
    var component;
    if (isList(schema)) {
      component = require('./RepeatingFieldset');
    } else if (isMapping(schema)) {
      component = require('./Fieldset');
    } else if (isScalar(schema)) {
      component = require('./Field');
    } else {
      invariant(false, 'invalid schema node: ' + schema);
    }
    return this.transferPropsTo(<component value={this.props.value} />);
  }
});

module.exports = FormElement;
