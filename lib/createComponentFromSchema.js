/**
 * @jsx React.DOM
 */
'use strict';

var invariant         = require('react/lib/invariant');
var schema            = require('./schema');
var Field             = require('./Field');
var FieldSet          = require('./FieldSet');
var RepeatingFieldSet = require('./RepeatingFieldSet');

/**
 * Create a component which represents provided schema node
 *
 * @param {SchemaNode} node
 * @returns {ReactComponent}
 */
function createComponentFromSchema(node) {
  if (node.props.component) {
    return node.props.component({key: node.name, name: node.name});
  }

  if (schema.isList(node)) {
    return <RepeatingFieldSet key={node.name} name={node.name} />;
  } else if (schema.isSchema(node)) {
    return <FieldSet key={node.name} name={node.name} />;
  } else if (schema.isProperty(node)) {
    return <Field key={node.name} name={node.name} />;
  } else {
    invariant(false, 'invalid schema node: %s', node);
  }
}

module.exports = createComponentFromSchema;
