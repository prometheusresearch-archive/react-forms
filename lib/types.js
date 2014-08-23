/**
 * @jsx React.DOM
 */
'use strict';

var messages      = require('./messages');
var emptyFunction = require('./emptyFunction');

class Type {
  constructor(name, serialize, deserialize) {
    this.name = name;
    this.serialize = serialize;
    this.deserialize = deserialize;
  }

  toString() {
    return `<Type ${this.name}>`;
  }
}

function idSerialize(value) {
  return value == null ? '' : value;
}

function idDeserialize(value) {
  return value === '' ? null : value;
}

var any = new Type('any', idSerialize, idDeserialize);

var string = new Type('string', idSerialize, idDeserialize);

var number = new Type('number',
  idSerialize,
  function(value) {
    if (value === '') {
      return null;
    // based on http://stackoverflow.com/a/1830844/182954
    } else if (!isNaN(parseFloat(value)) && isFinite(value)) {
      return parseFloat(value);
    } else {
      return new Error(messages.INVALID_VALUE);
    }
  });

var isDateRe = /^\d\d\d\d-\d\d-\d\d$/;

var date = new Type('date',
  function(value) {
    if (value == null) {
      return '';
    }
    var year = value.getFullYear();
    var month = value.getMonth() + 1;
    var day = value.getDate();
    return `${year}-${pad(month, 2)}-${pad(day, 2)}`;
  },
  function(value) {
    if (value === '') {
      return null;
    }

    if (value instanceof Date) {
      return value;
    }

    if (!isDateRe.exec(value)) {
      return new Error(messages.IS_NOT_A_DATE);
    }

    value = new Date(value);

    if (isNaN(value.getTime())) {
      return new Error(messages.INVALID_VALUE);
    }

    return value;
  });

var array = new Type('array',
  function (value) {
    return value ? value : [];
  },
  emptyFunction.thatReturnsArgument);

var bool = new Type('bool',
  function (value) {
    return value;
  },
  function(value) {
    return value;
  });

function pad(num, size) {
  return ('0000' + num).substr(-size);
}

module.exports = {any, string, number, date, array, bool};
