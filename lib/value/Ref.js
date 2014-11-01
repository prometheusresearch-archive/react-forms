'use strict';

var {is} = require('immutable');
var emptyFunction = require('../emptyFunction');

class Ref {

  constructor(value, onUpdate, keyPath, root) {
    this.__value = value;
    this.__root = root || this;
    this.onUpdate = onUpdate || emptyFunction;
    this.keyPath = keyPath || [];
  }

  get value() {
    return this.__root.__value.getIn(this.keyPath);
  }

  get(key) {
    return new Ref(null, this.onUpdate, this.keyPath.concat(key), this.__root);
  }

  map(func) {
    var result = [];
    var iterator = this.value.keys();
    var step;
    while (!(step = iterator.next()).done) {
      var ref = this.get(step.value);
      result.push(func(ref, step.value, this));
    }
    return result;
  }

  getIn(keyPath) {
    return this.get(keyPath);
  }

  transform(func) {
    var newValue = func(this.value).root;
    this.__root.__value = newValue;
    this.onUpdate(newValue, this.keyPath);
  }

  set(value) {
    var newValue;
    if (this.keyPath.length > 0) {
      newValue = this.__root.__value.setIn(this.keyPath, value);
    } else {
      newValue = value;
    }
    this.__root.__value = newValue;
    this.onUpdate(newValue, this.keyPath);
  }

  equals(ref) {
    return (
      is(this.value, ref.value)
      && this.onUpdate === ref.onUpdate
    );
  }

  toString() {
    return `${this.constructor.name} { "${this.keyPath.join('.')}" in ${this.__value} }`;
  }

  static create(value, onUpdate) {
    return new Ref(value, onUpdate);
  }
}

module.exports = Ref;
