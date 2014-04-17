/**
 * @jsx React.DOM
 */
'use strict';

function idSerialize(value) {
  return value === null ? '' : '' + value;
}

function idDeserialize(value) {
  return value === '' ? null : value;
}

var any = {
  serialize: idSerialize,
  deserialize: idDeserialize
};

var string = any;

var number = {
  serialize: idSerialize,
  deserialize: function(value) {
    if (value === '') {
      return null;
    // based on http://stackoverflow.com/a/1830844/182954
    } else if (!isNaN(parseFloat(value)) && isFinite(value)) {
      return parseFloat(value);
    } else {
      throw new Error('invalid value');
    }
  }
};

var isDateRe = /^\d\d\d\d-\d\d-\d\d$/;

var date = {
  serialize: function(value) {
    if (value === null) {
      return '';
    }
    var year = value.getFullYear();
    var month = value.getMonth() + 1;
    var day = value.getDate();
    return `${year}-${pad(month, 2)}-${pad(day, 2)}`;
  },
  deserialize: function(value) {
    if (value === '') {
      return null;
    }

    if (value instanceof Date) {
      return value;
    }

    if (!isDateRe.exec(value)) {
      throw new Error('should be a date in YYYY-MM-DD format');
    }

    value = new Date(value);

    if (isNaN(value.getTime())) {
      throw new Error('invalid date');
    }

    return value;
  }
};

function pad(num, size) {
  return ('0000' + num).substr(-size);
}

module.exports = {any, string, number, date};
