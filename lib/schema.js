/**
 * @jsx React.DOM
 */
'use strict';

var invariant = require('./invariant');

/**
 * Abstract base class for schema nodes.
 */
class Node {

}

/**
 * Schema nodes which represent scalar values.
 */
class ScalarNode extends Node {

  constructor(props) {
    props = props || {};

    this.name = props.name;
    this.props = props;
  }
}

/**
 * Schema nodes which represent mappings from string key to values.
 */
class MappingNode extends Node {

  constructor(props) {
    props = props || {};

    var args = Array.prototype.slice.call(arguments, 1);
    var children = {};

    if (args.length !== 0) {
      forEachNested(args, (arg) => {
        if (arg) {
          invariant(
            arg.name,
            'Each child of <Mapping> node should have name property'
          );
          children[arg.name] = arg;
        }
      });
    }

    this.name = props.name;
    this.props = props;
    this.children = children;
  }

  get(name) {
    return this.children[name];
  }
}

/**
 * Schema nodes which represent arrays.
 */
class ListNode extends Node {

  constructor(props) {
    props = props || {};

    var args = Array.prototype.slice.call(arguments, 1);

    invariant(
      args.length === 1,
      '<List> node should contain exactly one child'
    );

    this.name = props.name;
    this.props = props;
    this.children = args[0];
  }

  get() {
    return this.children;
  }
}

function forEachNested(collection, func, context) {
  for (var i = 0, len = collection.length; i < len; i++) {
    if (Array.isArray(collection[i])) {
      forEachNested(collection[i], func, context);
    } else {
      func.call(context, collection[i], i, collection);
    }
  }
}

function makeFactory(constructor) {
  function factory() {
    var node = Object.create(constructor.prototype);
    constructor.apply(node, arguments);
    return node;
  }
  // we do this to support instanceof check
  factory.prototype = constructor.prototype;
  return factory;
}

var Scalar  = makeFactory(ScalarNode);
var List    = makeFactory(ListNode);
var Mapping = makeFactory(MappingNode);

function createType(spec) {
  return function(props) {
    props = props || {};
    return spec(props);
  };
}

/**
 * Check if schema node is a schema.
 *
 * @param {Node} node
 */
function isSchema(node) {
  return node instanceof Node
}

/**
 * Check if schema node is `MappingNode`.
 *
 * @param {Node} node
 */
function isMapping(node) {
  return node instanceof MappingNode;
}

/**
 * Check if schema node is `ListNode`.
 *
 * @param {Node} node
 */
function isList(node) {
  return node instanceof ListNode;
}

/**
 * Check if schema node is `ScalarNode`.
 *
 * @param {Node} node
 */
function isScalar(node) {
  return node instanceof ScalarNode;
}

module.exports = {
  isSchema,
  Scalar, isScalar,
  Mapping, isMapping,
  List, isList,
  createType
};
