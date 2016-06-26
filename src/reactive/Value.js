/**
 * @copyright 2016-present, Prometheus Research, LLC
 */

import {atom, derivation} from 'derivable';
import selectValue  from 'lodash/get';

import * as Schema from '../Schema';
import {update as updateValue} from '../update';

export function create({
  schema,
  value = {},
  params = {},
  externalErrorList = [],
} = {}) {
  value = atom(value);
  params = atom(params);
  externalErrorList = atom(externalErrorList);
  let errorList = value.derive(value => Schema.validate(schema, value));
  return new Value(null, schema, value, errorList, externalErrorList, params, []);
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
  return new Value(
    cursor.root,
    schema,
    value,
    errorList,
    cursor.externalErrorList,
    cursor.params,
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

class Value {

  constructor(root, schema, value, errorList, externalErrorList, params, keyPath) {
    this.root = root || this;
    this.schema = schema;
    this.value = value;
    this._errorList = errorList;
    this._externalErrorList = externalErrorList;
    this.params = params;
    this.keyPath = keyPath;

    this.errorList = derivation(() => {
      let errorList = filterErrorListByKeyPath(
        this._errorList, this.keyPath);
      let externalErrorList = filterErrorListByKeyPath(
        this._externalErrorList, this.keyPath);
      return errorList.concat(externalErrorList);
    });
    this.completeErrorList = derivation(() => {
      let errorList = filterErrorListByKeyPathPrefix(
        this._errorList, this.keyPath);
      let externalErrorList = filterErrorListByKeyPathPrefix(
        this._externalErrorList, this.keyPath);
      return errorList.concat(externalErrorList);
    });
  }

  select(keyPath) {
    return select(this, ...keyPath);
  }

  update(value) {
    return update(this, value);
  }

}

function filterErrorListByKeyPath(errorList, keyPath) {
  let field = ['data'].concat(keyPath).join('.');
  return errorList.filter(error => error.field === field);
}

function filterErrorListByKeyPathPrefix(errorList, keyPath) {
  if (keyPath.length === 0) {
    return errorList;
  }
  let field = ['data'].concat(keyPath).join('.');
  let length = field.length;
  return errorList.filter(error =>
    error.field === field ||
    error.field.slice(0, length) === field && error.field[length] === '.'
  );
}
