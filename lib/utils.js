/**
 * @jsx React.DOM
 */
'use strict';

function mergeInto(dst, src) {
  if (src != null) {
    for (var k in src) {
      if (!src.hasOwnProperty(k)) {
        continue;
      }
      dst[k] = src[k];
    }
  }
}

function merge(a, b) {
  var result = {};
  if (a) {
    mergeInto(result, a);
  }
  if (b) {
    mergeInto(result, b);
  }
  return result;
}

function invariant(condition, message) {
  if (!condition) {

    throw new Error(message || 'invariant violation');
  }
}

function emptyFunction() {

}

emptyFunction.thatReturnsTrue = function() {
  return true;
};

var toString = Object.prototype.toString;

function isString(o) {
  return toString.call(o) === '[object String]';
}

module.exports = {mergeInto, merge, invariant, emptyFunction, isString};
