'use strict';

var emptyFunction = require('../emptyFunction');

class Ref {

  constructor(data, onUpdate) {
    this.data = data;
    this.onUpdate = onUpdate || emptyFunction;
  }

  update(data) {
    this.data = data;
    this.onUpdate(this);
  }

  equals(ref) {
    return is(this.data, ref.data) && this.onUpdate === ref.onUpdate;
  }
}

module.exports = Ref;
