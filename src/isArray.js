/**
 * @copyright 2015, Prometheus Research, LLC
 */
'use strict';

var toString = Object.prototype.toString;
var ARRAY_REP = '[object Array]';

function isArray(o) {
  return toString.call(o) === ARRAY_REP;
}

module.exports = isArray
