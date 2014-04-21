/**
 * @jsx React.DOM
 */
'use strict';

var invariant         = require('react/lib/invariant');
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
  if (node.props.component) {
    return node.props.component({key: node.name, name: node.name});
  }

  if (schema.isList(node)) {
    return <RepeatingFieldset key={node.name} name={node.name} />;
  } else if (schema.isSchema(node)) {
    return <Fieldset key={node.name} name={node.name} />;
  } else if (schema.isProperty(node)) {
    return <Field key={node.name} name={node.name} />;
  } else {
    invariant(false, 'invalid schema node: %s', node);
  }
}

module.exports = createComponentFromSchema;
