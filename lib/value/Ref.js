'use strict';

var {is} = require('immutable');
var emptyFunction = require('../emptyFunction');

class Ref {

  constructor(value, onUpdate, keyPath) {
    this.__value = value;
    this.onUpdate = onUpdate || emptyFunction;
    this.keyPath = keyPath || [];
  }

  get value() {
    return this.__value.getIn(this.keyPath);
  }

  get(key) {
    return new Ref(this.__value, this.onUpdate, this.keyPath.concat(key));
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

  update(value) {
    this.onUpdate(value, this.keyPath);
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
}

module.exports = Ref;
