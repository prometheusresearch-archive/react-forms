/**
 * @jsx React.DOM
 */
'use strict';

function toDate(value) {
  return new Date(value);
}

function toNumber(value) {
  return value - 0;
}

module.exports = {toDate, toNumber};
