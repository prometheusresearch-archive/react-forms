/**
 * @copyright 2015, Prometheus Research, LLC
 */

import invariant from 'invariant';

import isNumber from 'lodash/isNumber';
import toInteger from 'lodash/toInteger';
import isArray from 'lodash/isArray';
import isEmpty from 'lodash/isEmpty';
import isPlainObject from 'lodash/isPlainObject';
import keys from 'lodash/keys';

export function update(obj, keyPath = [], value, schema) {
  return _update(obj, keyPath, 0, value, schema);
}

function _update(obj, keyPath, keyIndex, value, schema) {
  if (keyPath.length - keyIndex === 0) {
    if (schema && schema.onUpdate) {
      return schema.onUpdate(value, {key: keyPath[keyIndex], schema});
    } else {
      return value;
    }
  }

  let key = keyPath[keyIndex];

  let nextObj;
  let isArrayUpdate = false;

  if (obj) {
    if (isArray(obj)) {
      isArrayUpdate = true;
      nextObj = obj.slice(0);
    } else {
      nextObj = {...obj};
    }
  } else {
    if (isNumber(key)) {
      isArrayUpdate = true;
      nextObj = [];
    } else {
      nextObj = {};
    }
  }

  let nextSchema;
  if (schema) {
    if (isArrayUpdate && schema.items) {
      if (isArray(schema.items)) {
        nextSchema = schema.items[key];
      } else {
        nextSchema = schema.items;
      }
    } else if (schema.properties) {
      nextSchema = schema.properties[key];
    }
  }
  nextObj[key] = _update(nextObj[key], keyPath, keyIndex + 1, value, nextSchema);

  if (schema && schema.onUpdate) {
    nextObj = schema.onUpdate(nextObj, {key, schema});
  }

  return nextObj;
}
