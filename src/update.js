/**
 * @copyright 2015, Prometheus Research, LLC
 */

import isNumber from 'lodash/isNumber';
import isArray from 'lodash/isArray';

export default function update(obj, keyPath = [], value) {
  return _update(obj, keyPath, 0, value);
}

function _update(obj, keyPath, keyIndex, value) {
  if (keyPath.length - keyIndex === 0) {
    return value;
  }

  let key = keyPath[keyIndex];

  let nextObj;

  if (obj) {
    nextObj = isArray(obj) ? obj.slice(0) : {...obj};
  } else {
    nextObj = isNumber(key) ? [] : {};
  }

  if (keyPath.length - keyIndex === 1) {
    nextObj[key] = value;
  } else {
    nextObj[key] = _update(nextObj[key], keyPath, keyIndex + 1, value);
  }

  return nextObj;
}

