/**
 * @copyright 2015, Prometheus Research, LLC
 */
'use strict';

var toString = Object.prototype.toString;
var STRING_REP = '[object String]';

function isString(o) {
  return toString.call(o) === STRING_REP;
}

module.exports = isString;
