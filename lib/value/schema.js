'use strict';

var Immutable = require('immutable');
var {is, fromJS} = Immutable;
var invariant = require('../invariant');

/**
 * Node represent schema for data.
 *
 * Hierarchy is the following:
 *
 *                       ScalarNode
 *                      /
 *   Node - ConcreteNode                MappingNode
 *                      \             /
 *                       CompositeNode
 *                                    \
 *                                     ListNode
 */
class Node {

  constructor(props) {
    this.props = props;
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
    return this.props.get('defaultValue');
  }

  instantiate(value) {
    throw new Error('not implemented');
  }

  toString() {
    var props = this.props.map((v, k) => `${k}: ${v}`).toList().join(', ');
    return `${this.constructor.name} { ${props} }`;
  }

  static create(props) {
    props = props || {};
    props = fromJS(props);
    return new this(props);
  }
}

class ConcreteNode extends Node {

  instantiate(value) {
    return this;
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

  has(key) {
    throw new Error('has(key): not implemented');
  }

  keys(value) {
    throw new Error('keys(value): not implemented');
  }
}

class ScalarNode extends ConcreteNode {

}

var Scalar = ScalarNode.create.bind(ScalarNode);

class MappingNode extends CompositeNode {

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

  static create(props, children) {
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
    props = fromJS(props);
    return new this(props);
  }
}

var Mapping = MappingNode.create.bind(MappingNode);

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

  static create(props, children) {
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
    props = fromJS(props);
    return new ListNode(props);
  }
}

var List = ListNode.create.bind(List);

module.exports = {
  Node, CompositeNode,
  ScalarNode, MappingNode, ListNode,
  Scalar, Mapping, List
};
