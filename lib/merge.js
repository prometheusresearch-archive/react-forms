/**
 * @jsx React.DOM
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var mergeInto = require('./mergeInto');

function merge(a, b, c) {
  var result = {};
  if (a) {
    mergeInto(result, a);
  }
  if (b) {
    mergeInto(result, b);
  }
  if (c) {
    mergeInto(result, c);
  }
  return result;
}

module.exports = merge;
