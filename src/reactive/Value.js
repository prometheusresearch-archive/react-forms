/**
 * @copyright 2016-present, Prometheus Research, LLC
 */

import memoize from 'memoize-decorator';
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
    value = cursor.root._value.derive(value =>
      schema.select(value, keyPath, schema));
  } else {
    value = cursor._value.derive(value =>
      selectValue(value, key));
  }
  return new Value(
    cursor,
    schema,
    value,
    cursor._errorList,
    cursor._externalErrorList,
    cursor._params,
    keyPath,
  );
}

export function update(cursor, value) {
  let nextValue;
  if (cursor.keyPath.length === 0) {
    nextValue = value;
  } else {
    nextValue = updateValue(
      cursor.root._value.get(),
      cursor.keyPath,
      value,
      cursor.root.schema,
    );
  }
  cursor.root._value.set(nextValue);
  return cursor;
}

class Value {

  constructor(parent, schema, value, errorList, externalErrorList, params, keyPath) {
    this.parent = parent;
    this.schema = schema;
    this._value = value;
    this._errorList = errorList;
    this._externalErrorList = externalErrorList;
    this._params = params;
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

  get value() {
    return this._value.get();
  }

  get params() {
    return this._params.get();
  }

  @memoize
  get root() {
    let root = this;
    while (root.parent) {
      root = root.parent;
    }
    return root;
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
