/**
 * @jsx React.DOM
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

function mergeInto(dst, src) {
  if (src !== null && src !== undefined) {
    for (var k in src) {
      if (!src.hasOwnProperty(k)) {
        continue;
      }
      dst[k] = src[k];
    }
  }
}

module.exports = mergeInto;
