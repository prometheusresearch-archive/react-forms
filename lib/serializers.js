/**
 * @jsx React.DOM
 */
'use strict';

function any(value) {
  return value === null ? '' : (value + '');
}

function pad(num, size) {
  return ('0000' + num).substr(-size);
}

function date(value) {
  if (value instanceof Date) {
    var year = value.getFullYear();
    var month = value.getMonth() + 1;
    var day = value.getDate();
    return `${year}-${pad(month, 2)}-${pad(day, 2)}`;
  }
  return any(value);
}

module.exports = {date, any};
