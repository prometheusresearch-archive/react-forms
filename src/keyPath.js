/**
 * @copyright 2015, Prometheus Research, LLC
 */

import isString  from 'lodash/lang/isString';
import isArray   from 'lodash/lang/isArray';
import invariant from 'invariant';

const IS_NUMBER = /^[0-9]+$/;

function tryParseInt(v) {
  if (typeof v === 'string' && IS_NUMBER.exec(v)) {
    v = parseInt(v, 10);
  }
  return v;
}

export default function keyPath(value) {
  if (isArray(value)) {
    return value;
  } else if (isString(value)) {
    if (value.indexOf('.') !== -1) {
      value = value.split('.').filter(Boolean).map(tryParseInt);
    } else {
      value = [tryParseInt(value)];
    }
    return value;
  } else if (typeof value === 'number') {
    return [value];
  } else {
    invariant(
      false,
      'keyPath can be either an array, a string or a number, got: %s',
      value
    );
  }
}
