/**
 * @jsx React.DOM
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var messages      = require('./messages');
var emptyFunction = require('./emptyFunction');
var invariant     = require('./invariant');
var isString      = require('./isString');

class Type {
  constructor(spec) {
    invariant(
      spec.name,
      'Type name should be provided'
    );
    this.spec = spec;
  }

  serialize(value) {
    if (isString(value)) {
      return value;
    }
    if (this.spec.serialize) {
      return this.spec.serialize(value);
    } else {
      return idSerialize(value);
    }
  }

  deserialize(value) {
    if (this.spec.deserialize) {
      return this.spec.deserialize(value);
    } else {
      return idDeserialize(value);
    }
  }

  toString() {
    return `<Type ${this.spec.name}>`;
  }
}

function idSerialize(value) {
  return value == null ? '' : value;
}

function idDeserialize(value) {
  return value === '' ? null : value;
}

var any = new Type({name: 'any'});

var string = new Type({name: 'string'});

var number = new Type({
  name: 'number',
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
});


var date = new Type({
  name: 'date',
  isDateRe:  /^\d\d\d\d-\d\d-\d\d$/,

  pad(num, size) {
    return ('0000' + num).substr(-size);
  },

  serialize(value) {
    if (value == null) {
      return '';
    }
    var year = value.getFullYear();
    var month = value.getMonth() + 1;
    var day = value.getDate();
    return `${year}-${this.pad(month, 2)}-${this.pad(day, 2)}`;
  },

  deserialize(value) {
    if (value === '') {
      return null;
    }

    if (value instanceof Date) {
      return value;
    }

    if (!this.isDateRe.exec(value)) {
      return new Error(messages.IS_NOT_A_DATE);
    }

    value = new Date(value);

    if (isNaN(value.getTime())) {
      return new Error(messages.INVALID_VALUE);
    }

    return value;
  }
});

var array = new Type({
  name: 'array',
  serialize(value) {
    return value ? value : [];
  },
  deserialize: emptyFunction.thatReturnsArgument
});

var bool = new Type({
  name: 'bool',
  serialize: emptyFunction.thatReturnsArgument,
  deserialize: emptyFunction.thatReturnsArgument
});

module.exports = {
  Type,
  any, string, number, date, array, bool
};
