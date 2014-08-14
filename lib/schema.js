/**
 * @jsx React.DOM
 */
'use strict';

var invariant = require('./invariant');
var merge     = require('./merge');

class Node {

}

class ScalarNode extends Node {

  constructor(props) {
    props = props ? merge({}, props) : {};

    this.name = props.name;
    this.props = props;
  }
}

class MappingNode extends Node {

  constructor(props) {
    props = props ? merge({}, props) : {};

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

  map(func, context) {
    var results = [];
    for (var name in this.children) {
      results.push(func.call(context, this.children[name], name, this));
    }
    return results;
  }

  get(name) {
    return this.children[name];
  }
}

class ListNode extends Node {

  constructor(props) {
    props = props ? merge({}, props) : {};

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

function isMapping(node) {
  return node instanceof MappingNode;
}

function isList(node) {
  return node instanceof ListNode;
}

function isScalar(node) {
  return node instanceof ScalarNode;
}

module.exports = {
  Node,
  Scalar, isScalar,
  Mapping, isMapping,
  List, isList,
  createType
};
