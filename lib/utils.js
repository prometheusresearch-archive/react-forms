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
  mergeInto(result, a);
  mergeInto(result, b);
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

function deepFreeze (o) {
  if (Object.freeze === undefined || o === null || typeof o !== 'object') {
    return;
  }
  Object.freeze(o);

  for (var k in o) {
    if (o.hasOwnProperty(k)) {
      deepFreeze(o[k]);
    }
  }
}

module.exports = {mergeInto, merge, invariant, emptyFunction, isString, deepFreeze};
