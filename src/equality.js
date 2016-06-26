/**
 * @copyright 2016-present, Prometheus Research, LLC
 */

export function eqShallow(a, b) {
  return a === b;
}

export function eqArray(a, b, itemEq = eqShallow) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (!itemEq(a[i], b[i])) {
      return false;
    }
  }
  return true;
}

export function eqError(a, b) {
  return (
    a && b &&
    a.field === b.field &&
    a.message === b.message
  );
}
