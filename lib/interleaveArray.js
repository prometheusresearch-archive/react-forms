/**
 * @jsx React.DOM
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

function interleaveArray(path, value) {
  var result = [];
  for (var i = 0, len = path.length; i < len; i++) {
    result.push(path[i], value);
  }
  return result;
}

module.exports = interleaveArray;
