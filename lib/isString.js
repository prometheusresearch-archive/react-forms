/**
 * @jsx React.DOM
 */
'use strict';

var toString = Object.prototype.toString;

function isString(o) {
  return toString.call(o) === '[object String]';
}

module.exports = isString;
