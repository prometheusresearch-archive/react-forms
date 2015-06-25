/**
 * @jsx React.DOM
 */
'use strict';

function invariant(cond, msg, a, b, c, d, e, f) {
  if (!cond) {
    if (msg) {
      var replacements = [a, b, c, d, e, f];
      var idx = 0;
      msg = msg.replace(/%s/g, function() {
        return replacements[idx++];
      });
      throw new Error('Invariant violation: ' + msg);
    } else {
      throw new Error('Invariant violation');
    }
  }
}

module.exports = invariant;
