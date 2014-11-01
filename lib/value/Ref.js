'use strict';

var {is} = require('immutable');
var emptyFunction = require('../emptyFunction');

class Ref {

  constructor(value, onUpdate) {
    this.value = value;
    this.onUpdate = onUpdate || emptyFunction;
  }

  update(value) {
    this.value = value;
    this.onUpdate(value);
  }

  equals(ref) {
    return is(this.value, ref.value) && this.onUpdate === ref.onUpdate;
  }
}

module.exports = Ref;
