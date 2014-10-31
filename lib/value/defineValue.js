'use strict';

var {OrderedMap, Map} = require('immutable');
var invariant = require('../invariant');
var ValueBase = require('./ValueBase');

function defineValueClass(...attributes) {
  var spec = OrderedMap().asMutable();
  attributes.forEach(attr => spec = spec.set(attr.name, attr));
  spec = spec.asImmutable();

  var klass = class ValueWithSpec extends ValueBase {

    constructor(parent, key, abstractNode, node, value, attributes) {
      attributes = attributes.asMutable();
      spec.forEach((attr, attrName) => {
        if (!attributes.has(attrName)) {
          attributes = attributes.set(attrName, attr.initial());
        }
      });
      super(parent, key, abstractNode, node, value, attributes);
    }

    __updateAttributes(attributes) {
      var current = this.__with(this.node, this.value, attributes);
      while (current.parent !== null) {
        current = current.parent.__onUpdate(current);
      }
      return current.getIn(this.keyPath);
    }

    setAttribute(name: String, attribute: Any) {
      var attributes = this.attributes.set(name, attribute);
      return this.__updateAttributes(attributes);
    }

    mergeAttributes(attributes) {
      attributes = this.attributes.merge(attributes);
      return this.__updateAttributes(attributes);
    }
  }

//klass.computeAttributes = function(key, node, value, attributes, force) {
//  return spec.map(attr => {
//    var attribute = attributes.get(attr.name);
//    return attr.get(key, attribute, attributes, value, node, force);
//  });
//};
  klass.computeAttributes = compileComputeAttributes(spec);

//klass.mergeAttributes = function(children, node, value, attributes) {
//  return spec.map(attr => {
//    children = children.map(child => child.attributes.get(attr.name));
//    var attribute = attributes.get(attr.name);
//    return attr.merge(children, attribute, attributes, value, node);
//  });
//}
  klass.mergeAttributes = compileMergeAttributes(spec);

  spec.forEach((attr, attrName) => {
    invariant(
      klass.prototype[attrName] === undefined,
      `cannot define attribute '${attrName}': name conflicts with another Value
      method or attribute`
    );
    Object.defineProperty(klass.prototype, attrName, {
      get() {
        return this.attributes.get(attrName);
      }
    });
    klass.prototype[`set${attrName.slice(0, 1).toUpperCase()}${attrName.slice(1)}`] = function(attribute) {
      return this.setAttribute(attrName, attribute);
    }
  });

  return klass;
}

function compileComputeAttributes(spec) {
  var props = spec.map(attr =>
      `${attr.name}: spec.get('${attr.name}').get(
        key, attributes.get('${attr.name}'), attributes, value, node, force)`)
    .join(',\n');
  var func = new Function(
    'Map', 'spec', 'key', 'node', 'value', 'attributes', 'force',
    `return Map({${props}});`);
  return func.bind(null, Map, spec);
}

function compileMergeAttributes(spec) {
  var props = spec.map(attr =>
      `${attr.name}: spec.get('${attr.name}').merge(
        children.map(function(child) { return child.attributes.get('${attr.name}'); }),
        attributes.get('${attr.name}'), attributes, value, node)`)
    .join(',\n');
  var func = new Function(
    'Map', 'spec', 'children', 'node', 'value', 'attributes',
    `return Map({${props}});`);
  return func.bind(null, Map, spec);
}

module.exports = defineValueClass;
