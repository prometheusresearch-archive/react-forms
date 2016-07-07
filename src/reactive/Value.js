/**
 * @copyright 2016-present, Prometheus Research, LLC
 */

import memoize from 'memoize-decorator';
import {atom, derivation, isDerivable} from 'derivable';
import selectValue  from 'lodash/get';

import * as Schema from '../Schema';
import toKeyPath from '../keyPath';
import applyDecorator from '../applyDecorator';
import {update as updateValue} from '../update';
import {eqArray} from '../equality';

export function create({
  schema,
  value = {},
  params = {},
  errorList,
  externalErrorList = [],
  onChange,
  validate = (schema, value) => Schema.validate(schema, value),
} = {}) {

  if (!isDerivable(value)) {
    value = atom(value);
  }

  if (!isDerivable(params)) {
    params = atom(params);
  }

  if (errorList == null) {
    errorList = value.derive(value => validate(schema, value));
  } else if (!isDerivable(errorList)) {
    errorList = atom(errorList);
  }

  if (onChange == null) {
    onChange = (update, keyPath) => {
      let nextValue = updateValue(value.get(), keyPath, update, schema);
      value.set(nextValue);
    };
  }

  if (!isDerivable(externalErrorList)) {
    externalErrorList = atom(externalErrorList);
  }

  let formValue = new Value(
    null,
    [],
    schema,
    value,
    errorList,
    externalErrorList,
    params,
    onChange
  );
  return formValue;
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
    parent._onChange,
  );
}

export function update(cursor, value) {
  cursor._onChange(value, cursor.keyPath);
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
    params,
    onChange,
  ) {
    this.parent = parent;
    this.keyPath = keyPath;
    this.schema = schema;
    this._value = value;
    this._validationErrorList = validationErrorList;
    this._externalErrorList = externalErrorList;
    this._params = params;
    this._onChange = onChange;

    this._completeErrorList = derivation(() => {
      let validationErrorList = this._validationErrorList.get();
      let externalErrorList = this._externalErrorList.get();
      return validationErrorList.concat(externalErrorList);
    }).withEquality(eqArray);
    this._errorList = derivation(() => {
      let completeErrorList = this._completeErrorList.get();
      return filterErrorListByKeyPath(completeErrorList, this.keyPath);
    }).withEquality(eqArray);
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
