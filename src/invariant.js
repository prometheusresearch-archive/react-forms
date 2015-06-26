/**
 * @copyright 2015, Prometheus Research, LLC
 */

export default function invariant(cond, msg, a, b, c, d, e, f) { // eslint-disable-line max-params
  if (!cond) {
    if (msg) {
      let replacements = [a, b, c, d, e, f];
      let idx = 0;
      msg = msg.replace(/%s/g, function() {
        return replacements[idx++];
      });
      throw new Error('Invariant violation: ' + msg);
    } else {
      throw new Error('Invariant violation');
    }
  }
}
