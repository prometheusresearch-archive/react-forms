/**
 * @jsx React.DOM
 */
'use strict';

var utils     = require('./utils');

class Node {

}

class PropertyNode extends Node {

  constructor(props) {
    props = props ? utils.merge({}, props) : {};

    this.name = props.name;
    this.props = props;
  }
}

class SchemaNode extends Node {

  constructor(props) {
    props = props ? utils.merge({}, props) : {};

    var args = Array.prototype.slice.call(arguments, 1);
    var children = {};

    if (args.length !== 0) {
      forEachNested(args, (arg) => {
        if (arg) {
          utils.invariant(
            arg.name,
            'Each child of <Schema> node should have name property'
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
    props = props ? utils.merge({}, props) : {};

    var args = Array.prototype.slice.call(arguments, 1);

    utils.invariant(
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

var Property  = makeFactory(PropertyNode);
var List      = makeFactory(ListNode);
var Schema    = makeFactory(SchemaNode);

function createType(spec) {
  return function(props) {
    props = props || {};
    return spec(props);
  };
}

function isSchema(node) {
  return node instanceof SchemaNode;
}

function isList(node) {
  return node instanceof ListNode;
}

function isProperty(node) {
  return node instanceof PropertyNode;
}

module.exports = {
  Node,
  Property, isProperty,
  Schema, isSchema,
  List, isList,
  createType
};
