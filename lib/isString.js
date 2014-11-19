/**
 * @flow
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var toString = Object.prototype.toString;

function isString(o: any): bool {
  return toString.call(o) === '[object String]';
}

module.exports = isString;
