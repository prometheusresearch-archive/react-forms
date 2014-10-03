/**
 * Schema nodes are used to describe the shape and validation of a data
 * structure form operate on.
 *
 * Three schema node types are provided, `ScalarNode`, `MappingNode` and
 * `ListNode`, each correspondingly to describe scalar, object and array values.
 *
 * The constructors for schema nodes are compatible with JSX syntax:
 *
 *    var schema = Mapping({
 *      name: Scalar({type: "number"}),
 *      items: List(Scalar({type: "string"}))
 *    })
 *
 * @jsx React.DOM
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var {OrderedMap, Map, Record, Vector} = require('immutable');
var invariant                         = require('./invariant');
var messages                          = require('./messages');
var types                             = require('./types');
var emptyFunction                     = require('./emptyFunction');
var isString                          = require('./isString');

function nonEmpty(value, props) {
  var active = props.get('nonEmpty', false);
  if (active && value.length === 0) {
    return new Error(messages.AT_LEAST_ONE_ITEM_IS_REQUIRED);
  }
}

nonEmpty.toString = function() {
  return '<Validate value non empty>';
};

function childIn(keyPath) {
  switch (keyPath.length) {
    /* jshint ignore:start */
    case 0:
      return this;
    case 1:
      return this.child(keyPath[0]);
    /* jshint ignore:end */
    default:
      var schema;
      /* jshint ignore:start */
      schema = this;
      /* jshint ignore:end */
      for (var i = 0, len = keyPath.length; i < len; i++) {
        schema = schema.child(keyPath[i]);
      }
      return schema;
  }
}

var ScalarNode = Record({
  props: Map.empty(),
  defaultValue: undefined,
  type: types.string,
  validate: null,
}, 'ScalarNode');

ScalarNode.prototype.childIn = childIn;
ScalarNode.prototype.child = function(key) {
  invariant(
    false,
    'scalar schema %s does not have child schemas', this
  );
};

var MappingNode = Record({
  props: Map.empty(),
  defaultValue: undefined,
  validate: emptyFunction.thatReturnsArgument,
  children: OrderedMap.empty()
}, 'MappingNode');

MappingNode.prototype.childIn = childIn;
MappingNode.prototype.child = function(key) {
  invariant(
    this.children.has(key),
    'schema %s does not have %s key', this, key
  );
  return this.children.get(key);
};

var ListNode = Record({
  props: Map.empty(),
  defaultValue: undefined,
  validate: nonEmpty,
  children: null
}, 'ListNode');

ListNode.prototype.childIn = childIn;
ListNode.prototype.child = function() {
  return this.children;
};

/**
 * Check if value is a schema node.
 */
function isSchema(node) {
  return (
    node instanceof MappingNode ||
    node instanceof ListNode ||
    node instanceof ScalarNode ||
    typeof node === 'function'
  );
}

/**
 * Check if schema node is a Mapping.
 *
 * @param {Node} node
 */
function isMapping(node) {
  return node instanceof MappingNode;
}

/**
 * Check if schema node is a List.
 *
 * @param {Node} node
 */
function isList(node) {
  return node instanceof ListNode;
}

/**
 * Check if schema node is a Scalar.
 *
 * @param {Node} node
 */
function isScalar(node) {
  return node instanceof ScalarNode;
}

/**
 * Create a new Scalar schema node.
 */
function Scalar(props) {
  props = props || {};
  props = Map.from(props);
  return new ScalarNode({
    props: props,
    validate: props.get('validate', emptyFunction.thatReturnsArgument),
    defaultValue: props.get('defaultValue'),
    type: resolveType(props.get('type', types.any))
  });
}

Scalar.is = isScalar;

/**
 * Create a new Mapping schema node.
 */
function Mapping(props, children) {
  if (children === undefined) {
    children = props;
    props = {};
  }
  var childrenMap = {};
  for (var name in children) {
    var child = children[name];
    if (child) {
      childrenMap[name] = child;
    }
  }
  props = Map.from(props);
  return new MappingNode({
    props: props,
    validate: props.get('validate', emptyFunction.thatReturnsArgument),
    defaultValue: props.get('defaultValue'),
    children: OrderedMap.from(childrenMap)
  });
}

Mapping.is = isMapping;

/**
 * Create a new List schema node.
 */
function List(props, children) {
  if (children === undefined) {
    children = props;
    props = {};
  }
  invariant(
    isSchema(children),
    'List child should be a schema but got %s', children
  );
  props = Map.from(props);
  return new ListNode({
    props: props,
    validate: [nonEmpty, props.get('validate', emptyFunction.thatReturnsArgument)],
    defaultValue: props.get('defaultValue'),
    children
  });
}

List.is = isList;

function Variant(props, variants) {
  var key = props.key;
  if (isString(key)) {
    key = function keyFunc(value) {
      return (value && value.get) ?
        value.get(props.key, props.defaultKey) :
        props.defaultKey;
    };
  } else {
    invariant(
      typeof key === 'function',
      'Variant schema should have "key" property, a function or a string'
    );
  }
  return function VariantInstance(value) {
    var variantKey = key(value);
    var variant = variants[variantKey];
    invariant(
      variant !== undefined,
      'invalid variant for key %s', variantKey
    );
    return variant;
  }
}

/**
 * Resolve type.
 *
 * @private
 */
function resolveType(maybeType) {
  if (isString(maybeType)) {
    var type = types[maybeType];
    invariant(
      type !== undefined,
      'unknown type "%s"', maybeType
    );
    return type;
  }
  return maybeType;
}

/**
 * Iterate over JSX-style collection.
 *
 * @private
 */
function forEachNested(collection, func, context) {
  for (var i = 0, len = collection.length; i < len; i++) {
    if (Array.isArray(collection[i])) {
      forEachNested(collection[i], func, context);
    } else {
      func.call(context, collection[i], i, collection);
    }
  }
}

module.exports = {
  isSchema,
  isScalar, isMapping, isList,
  Scalar, Mapping, List, Variant
};
