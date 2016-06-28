/**
 * @copyright 2016-present, Prometheus Research, LLC
 */

import memoize from 'memoize-decorator';
import {atom, derivation} from 'derivable';
import selectValue  from 'lodash/get';

import * as Schema from '../Schema';
import toKeyPath from '../keyPath';
import applyDecorator from '../applyDecorator';
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
  let validationErrorList= value.derive(value => Schema.validate(schema, value));
  return new Value(
    null,
    [],
    schema,
    value,
    validationErrorList,
    externalErrorList,
    params
  );
}

export function select(parent, ...key) {
  let keyPath = parent.keyPath.concat(key);
  let schema = Schema.select(parent.schema, key);
  let value;
  if (schema && schema.select) {
    value = parent.root._value.derive(value =>
      schema.select(value, keyPath, schema));
  } else {
    value = parent._value.derive(value =>
      selectValue(value, key));
  }
  let validationErrorList = parent._validationErrorList.derive(errorList =>
    filterErrorListByKeyPathPrefix(errorList, keyPath));
  let externalErrorList = parent._externalErrorList.derive(errorList =>
    filterErrorListByKeyPathPrefix(errorList, keyPath));
  return new Value(
    parent,
    keyPath,
    schema,
    value,
    validationErrorList,
    externalErrorList,
    parent._params,
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

  constructor(
    parent,
    keyPath,
    schema,
    value,
    validationErrorList,
    externalErrorList,
    params
  ) {
    this.parent = parent;
    this.keyPath = keyPath;
    this.schema = schema;
    this._value = value;
    this._validationErrorList = validationErrorList;
    this._externalErrorList = externalErrorList;
    this._params = params;

    this._completeErrorList = derivation(() =>
      this._validationErrorList.get().concat(this._externalErrorList.get()));
    this._errorList = this._completeErrorList.derive(errorList =>
      filterErrorListByKeyPath(errorList));
  }

  get root() {
    let root = this;
    while (root.parent) {
      root = root.parent;
    }
    return root;
  }

  get errorList() {
    return this._errorList.get();
  }

  get completeErrorList() {
    return this._completeErrorList.get();
  }

  get value() {
    return this._value.get();
  }

  get params() {
    return this._params.get();
  }

  select(keyPath) {
    keyPath = toKeyPath(keyPath);
    return select(this, ...keyPath);
  }

  update(value) {
    return update(this, value);
  }

}

applyDecorator(Value.prototype, 'root', memoize);

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
