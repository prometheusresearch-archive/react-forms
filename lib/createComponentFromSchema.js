/**
 * @jsx React.DOM
 */
'use strict';

var React             = require('react/addons');
var cloneWithProps    = React.addons.cloneWithProps;
var utils             = require('./utils');
var schema            = require('./schema');
var Field             = require('./Field');
var Fieldset          = require('./Fieldset');
var RepeatingFieldset = require('./RepeatingFieldset');

/**
 * Create a component which represents provided schema node
 *
 * @private
 * @param {SchemaNode} node
 * @returns {ReactComponent}
 */
function createComponentFromSchema(node) {
  var props = {key: node.name, name: node.name};

  if (node.props.component) {
    // React.isValidComponent returns true even for component classes so we
    // check if it is not in fact
    if (React.isValidComponent(node.props.component)
        && !React.isValidClass(node.props.component)) {
      return cloneWithProps(node.props.component, props);
    } else {
      return node.props.component(props);
    }
  }

  if (schema.isList(node)) {
    return RepeatingFieldset(props);
  } else if (schema.isSchema(node)) {
    return Fieldset(props);
  } else if (schema.isProperty(node)) {
    return Field(props);
  } else {
    utils.invariant(false, 'invalid schema node: ' + node);
  }
}

module.exports = createComponentFromSchema;
