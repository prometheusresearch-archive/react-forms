/**
 * @copyright 2015, Prometheus Research, LLC
 */

import isString  from 'lodash/lang/isString';
import isArray   from 'lodash/lang/isArray';
import invariant from './invariant';

const IS_NUMBER = /[0-9]+/;

function tryParseInt(v) {
  if (typeof v === 'string' && IS_NUMBER.exec(v)) {
    v = parseInt(v, 10);
  }
  return v;
}

export default function keyPath(keyPath) {
  if (isArray(keyPath)) {
    return keyPath;
  } else if (isString(keyPath)) {
    if (keyPath.indexOf('.') !== -1) {
      keyPath = keyPath.split('.').filter(Boolean).map(tryParseInt);
    } else {
      keyPath = [tryParseInt(keyPath)];
    }
    return keyPath;
  } else if (typeof keyPath === 'number') {
    return [keyPath];
  } else {
    invariant(
      false,
      'keyPath can be either an array or string, got: %s',
      keyPath
    );
  }
}
