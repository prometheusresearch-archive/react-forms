/**
 * @copyright 2015, Prometheus Research, LLC
 */
'use strict';

var isString = require('./isString');
var isArray = require('./isArray');
var invariant = require('./invariant');

var IS_NUMBER = /[0-9]+/;

function toNumber(v) {
  if (typeof v === 'string' && IS_NUMBER.exec(v)) {
    v = parseInt(v, 10);
  }
  return v;
}

function makeKeyPath(keyPath) {
  if (isArray(keyPath)) {
    return keyPath;
  } else if (isString(keyPath)) {
    if (keyPath.indexOf('.') !== -1) {
      keyPath = keyPath.split('.').filter(Boolean).map(toNumber);
    } else {
      keyPath = [toNumber(keyPath)];
    }
    return keyPath;
  } else if (typeof keyPath === 'number') {
    return [keyPath];
  } else {
    invariant(
      false,
      'keyPath can be either an array or string, got: %s',
      keyPath
    );
  }
}

module.exports = makeKeyPath;
