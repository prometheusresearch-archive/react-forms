'use strict';

var Immutable         = require('immutable');
var {is, fromJS,
    Map, OrderedMap}  = Immutable;
var invariant         = require('./invariant');
var messages          = require('./messages');
var emptyFunction     = require('./emptyFunction');
var ValidationResult  = require('./ValidationResult');

var EMPTY_MAP = Map();

/**
 * Node represent schema for data.
 *
 * Hierarchy is the following:
 *
 *                       ScalarNode
 *                      /
 *   Node - ConcreteNode               MappingNode
 *                      \             /
 *                       CompositeNode
 *                                    \
 *                                     ListNode
 */
class Node {

  constructor(props) {
    props = Map(this.getDefaultProps()).merge(props);
    this.props = props;
  }

  getDefaultProps() {
    return EMPTY_MAP;
  }

  equals(node) {
    if (
      node === null || node === undefined ||
      node.constructor !== undefined &&
      node.constructor !== this.constructor
    ) {
      return false;
    }
    return is(this.props, node.props) && is(this.children, node.children);
  }

  get defaultValue() {
    if (this.__defaultValue === undefined) {
      this.__defaultValue = fromJS(this.props.get('defaultValue'));
    }
    return this.__defaultValue;
  }

  instantiate(value) {
    throw new Error('instantiate(value): not implemented');
  }

  validate(value, childrenValidation) {
    throw new Error('validate(value, childrenValidation): not implemented');
  }

  toString() {
    var props = this.props.map((v, k) => `${k}: ${v}`).toList().join(', ');
    return `${this.constructor.name} { ${props} }`;
  }

  static create(props) {
    props = props ? Map(props) : EMPTY_MAP;
    return new this(props);
  }
}

class ConcreteNode extends Node {

  validate(value, childrenValidation) {
    if (value == null) {
      return;
    }
    if (!childrenValidation.isSuccess) {
      return childrenValidation;
    }
    var result;
    var validate = this.props.get('validate');
    // `validate` could be an array for convenienve
    if (Array.isArray(validate)) {
      for (var i = 0, len = validate.length; i < len; i++) {
        result = validate[i](this, value);
        if (result instanceof Error) {
          result;
        }
      }
    } else  if (validate) {
      result = validate(this, value);
    }
    return result;
  }

  instantiate(value) {
    return {node: this, value};
  }
}

class CompositeNode extends ConcreteNode {

  get children() {
    if (this.__children === undefined) {
      this.__children = this.getChildren();
    }
    return this.__children;
  }

  getChildren() {
    throw new Error('getChildren(): not implemented');
  }

  get(key) {
    throw new Error('get(key): not implemented');
  }

  getIn(keyPath) {
    var cur = this;
    for (var i = 0, len = keyPath.length; i < len; i++) {
      cur = cur.get(keyPath[i]);
    }
    return cur;
  }

  has(key) {
    throw new Error('has(key): not implemented');
  }

  keys(value) {
    throw new Error('keys(value): not implemented');
  }
}

class ScalarNode extends ConcreteNode {

  validate(value, childrenValidation) {
    if (value == null) {
      return;
    }
    value = this.deserialize(value);
    if (value instanceof Error) {
      return value;
    } else {
      return super(value, childrenValidation)
    }
  }

  serialize(value) {
    return value === null ? '' : value;
  }

  deserialize(value) {
    return value === '' ? null : value;
  }
}

class NumberNode extends ScalarNode {

  deserialize(value) {
    if (value === '') {
      return null;
    // based on http://stackoverflow.com/a/1830844/182954
    } else if (!isNaN(parseFloat(value)) && isFinite(value)) {
      return parseFloat(value);
    } else {
      return new Error(messages.INVALID_VALUE);
    }
  }
}

class BoolNode extends ScalarNode {

  serialize(value) {
    return value;
  }

  deserialize(value) {
    return value;
  }

}

class ArrayNode extends ScalarNode {

  serialize(value) {
    return value ? value : [];
  }

  deserialize(value) {
    return value;
  }
}

var IS_DATE_RE =  /^\d\d\d\d-\d\d-\d\d$/;

class DateNode extends ScalarNode {

  serialize(value) {
    if (value == null) {
      return '';
    }
    var year = value.getFullYear();
    var month = value.getMonth() + 1;
    var day = value.getDate();
    return `${year}-${this.pad(month, 2)}-${this.pad(day, 2)}`;
  }

  deserialize(value) {
    if (value === '') {
      return null;
    }

    if (value instanceof Date) {
      return value;
    }

    if (!IS_DATE_RE.exec(value)) {
      return new Error(messages.IS_NOT_A_DATE);
    }

    value = new Date(value);

    if (isNaN(value.getTime())) {
      return new Error(messages.INVALID_VALUE);
    }

    return value;
  }

  pad(num, size) {
    return ('0000' + num).substr(-size);
  }
}

function Scalar(props) {
  switch (props && props.type || 'string') {
    case 'string':
      return ScalarNode.create(props);
    case 'number':
      return NumberNode.create(props);
    case 'array':
      return ArrayNode.create(props);
    case 'date':
      return DateNode.create(props);
    case 'bool':
      return BoolNode.create(props);
    default:
      invariant(
        false,
        `invalid type "${props.type}" supplied to Scalar`
      );
  }
}

var VALUE_IS_REQUIRED = ValidationResult.error(messages.VALUE_IS_REQUIRED);

class MappingNode extends CompositeNode {

  constructor(props) {
    super(props);
    this.__requiredKeys = props.get('children', EMPTY_MAP)
      .toSeq()
      .filter(child => child.props.get('required'))
      .keySeq()
      .toSet();
  }

  validate(value, childrenValidation) {
    var missingKeys = this.__requiredKeys.subtract(value.filter(v => v != null).keys());
    if (missingKeys.size > 0) {
      var missingKeysValidation = Map().asMutable();
      missingKeys.forEach(k =>
        missingKeysValidation = missingKeysValidation.set(k, VALUE_IS_REQUIRED));
      return ValidationResult.children(childrenValidation.children.merge(missingKeysValidation));
    }
    return super(value, childrenValidation);
  }

  getChildren() {
    return this.props.get('children');
  }

  get(key) {
    return this.children.get(key);
  }

  has(key) {
    return this.children.has(key);
  }

  keys(value) {
    return this.children.keys();
  }
}

function Mapping(props, children) {
  if (children === undefined) {
    children = props;
    children = OrderedMap(children);
    props = {children};
  } else {
    children = OrderedMap(children);
    var newProps = {children};
    for (var k in props) {
      if (props.hasOwnProperty(k)) {
        newProps[k] = props[k];
      }
    }
    props = newProps;
  }
  props = Map(props);
  return new MappingNode(props);
}

class ListNode extends CompositeNode {

  getChildren() {
    return this.props.get('children');
  }

  get(key) {
    return this.children;
  }

  has(key) {
    return true;
  }

  keys(value) {
    return value.keys();
  }
}

function List(props, children) {
  if (children === undefined) {
    children = props;
    props = {children};
  } else {
    var newProps = {};
    for (var k in props) {
      if (props.hasOwnProperty(k)) {
        newProps[k] = props[k];
      }
      newProps.children = children;
    }
    props = newProps;
  }
  props = Map(props);
  return new ListNode(props);
}

module.exports = {
  Node,
  ScalarNode, NumberNode, ArrayNode,
  CompositeNode,
  MappingNode, ListNode,
  Scalar, Mapping, List
};
