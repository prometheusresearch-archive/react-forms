'use strict';

var Attribute = require('./Attribute');
var {Map} = require('immutable');

var EMPTY = Map();

class DirtyAttribute extends Attribute {

  initial() {
    return EMPTY;
  }

  get(key, attribute, attributes, value, node) {
    // propagate dirtyness state down to child if we are dirty
    if (attribute.has('__dirty__')) {
      return attribute.get(key, Map()).set('__dirty__', true)
    } else {
      return attribute.get(key, EMPTY);
    }
  }

  merge(children, attribute, attributes, value, node) {
    return attribute.merge(children);
  }
}

module.exports = DirtyAttribute;
