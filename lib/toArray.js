/**
 * @jsx React.DOM
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var slice = Array.prototype.slice;

function toArray(arrayLike) {
  return slice.call(arrayLike);
}

module.exports = toArray;
