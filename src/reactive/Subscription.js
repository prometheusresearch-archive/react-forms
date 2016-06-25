/**
 * @copyright 2015, Prometheus Research, LLC
 */

import {atom} from 'derivable';
import selectValue  from 'lodash/get';

import * as Schema from '../Schema';
import {update as updateValue} from '../update';

export function create(schema, value = {}) {
  value = atom(value);
  let errorList = value.derive(value => Schema.validate(schema, value));
  return new Cursor(null, schema, value, errorList, []);
}

export function select(cursor, ...key) {
  let keyPath = cursor.keyPath.concat(key);
  let schema = Schema.select(cursor.schema, key);
  let value;
  if (schema && schema.select) {
    value = cursor.root.value.derive(value =>
      schema.select(value, keyPath, schema));
  } else {
    value = cursor.value.derive(value =>
      selectValue(value, key));
  }
  let errorList = cursor.errorList; // TODO: select it too!
  return new Cursor(
    cursor.root,
    schema,
    value,
    errorList,
    keyPath,
  );
}

export function update(cursor, value) {
  let nextValue;
  if (cursor.keyPath.length === 0) {
    nextValue = value;
  } else {
    nextValue = updateValue(
      cursor.root.value.get(),
      cursor.keyPath,
      value,
      cursor.root.schema,
    );
  }
  cursor.root.value.set(nextValue);
  return cursor;
}

class Cursor {

  constructor(root, schema, value, errorList, keyPath) {
    this.root = root || this;
    this.schema = schema;
    this.value = value;
    this.errorList = errorList;
    this.keyPath = keyPath;
  }

}
