/**
 * @copyright 2015, Prometheus Research, LLC
 * @flow
 */

import invariant from 'invariant';

export type KeyPath = Array<string | number>;
export type LooseKeyPath = KeyPath | string | number;

const IS_NUMBER = /^[0-9]+$/;

function tryParseInt(v: string | number): string | number {
  if (typeof v === 'string' && IS_NUMBER.exec(v)) {
    v = parseInt(v, 10);
  }
  return v;
}

export default function keyPath(value: LooseKeyPath): KeyPath {
  if (Array.isArray(value)) {
    return value;
  } else if (typeof value === 'string') {
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
