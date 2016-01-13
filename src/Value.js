/**
 * @copyright 2015, Prometheus Research, LLC
 */

import memoize                    from 'memoize-decorator';
import selectValue                from 'lodash/object/get';
import emptyFunction              from 'empty/function';
import update                     from 'immupdate';
import makeKeyPath                from './keyPath';
import {Schema,
        select as selectSchema}   from './Schema';

function filterErrorListByKeyPath(errorList, keyPath) {
  let field = ['data'].concat(keyPath).join('.');
  return errorList.filter(error => error.field === field);
}

export class Value {

  select(key) {
    let keyPath = makeKeyPath(key);
    if (keyPath.length === 0) {
      return this;
    } else {
      return new ValueBranch(this.root, this.keyPath.concat(keyPath));
    }
  }

  @memoize
  get errorList() {
    let validateErrorList = filterErrorListByKeyPath(
      this.root.completeErrorList, this.keyPath);
    let externalErrorList = filterErrorListByKeyPath(
      this.root.externalErrorList, this.keyPath);
    return validateErrorList.concat(externalErrorList);
  }

  set(value, quiet) {
    console.warn(// eslint-disable-line no-console
      'Value.prototype.set(value) is deprecated, ' +
      'use Value.prototype.update(value) instead'
    );
    return this.update(value, quiet);
  }

  _createRoot(update) {
    let values = {
      schema: this.root.schema,
      value: this.root.value,
      onChange: this.root.onChange,
      params: this.root.params,
      errorList: this.root.errorList,
      externalErrorList: this.root.externalErrorList,
    };
    return new ValueRoot({...values, ...update});
  }

  updateParams(params, quiet) {
    params = {...this.root.params, ...params};
    let nextRoot = this._createRoot({params});
    if (!quiet) {
      this.root.onChange(nextRoot, this.keyPath);
    }
    return nextRoot.select(this.keyPath);
  }

  update(valueUpdate, quiet) {
    let value;
    if (this.keyPath.length === 0) {
      value = valueUpdate;
    } else {
      value = update(this.root.value, this.keyPath.join('.'), valueUpdate);
    }
    let errorList = validate(this.root.schema, value);
    let nextRoot = this._createRoot({value, errorList});
    if (!quiet) {
      this.root.onChange(nextRoot, this.keyPath);
    }
    return nextRoot.select(this.keyPath);
  }

  addError(error, quiet) {
    error = {
      ...error,
      field: ['data'].concat(this.keyPath).join('.'),
    };
    let externalErrorList = this.root.externalErrorList.concat(error);
    let nextRoot = this._createRoot({externalErrorList});
    if (!quiet) {
      this.root.onChange(nextRoot, this.keyPath);
    }
    return nextRoot.select(this.keyPath);
  }

  removeError(error, quiet) {
    let idx = this.root.externalErrorList.indexOf(error);
    if (idx > -1) {
      let externalErrorList = this.root.externalErrorList.slice(0);
      externalErrorList.splice(idx, 1);
      let nextRoot = this._createRoot({externalErrorList});
      if (!quiet) {
        this.root.onChange(nextRoot, this.keyPath);
      }
      return nextRoot.select(this.keyPath);
    } else {
      return this;
    }
  }
}

class ValueRoot extends Value {

  constructor({schema, value, onChange, params, errorList, externalErrorList}) {
    super();
    this.parent = null;
    this.keyPath = [];
    this.schema = schema;
    this.value = value;
    this.onChange = onChange;
    this.params = params;
    this.completeErrorList = errorList;
    this.externalErrorList = externalErrorList;
  }

  get root() {
    return this;
  }
}

class ValueBranch extends Value {

  constructor(root, keyPath) {
    super();
    this.root = root;
    this.keyPath = keyPath;
  }

  get params() {
    return this.root.params;
  }

  @memoize
  get schema() {
    return selectSchema(this.root.schema, this.keyPath);
  }

  @memoize
  get value() {
    return selectValue(this.root.value, this.keyPath);
  }

  get externalErrorList() {
    return this.root.externalErrorList;
  }

  @memoize
  get completeErrorList() {
    let errorKeyPath = `data.${this.keyPath.join('.')}`;
    let length = errorKeyPath.length;
    return this.root.completeErrorList
      .filter(error => error.field.slice(0, length) === errorKeyPath)
      .concat(this.root.externalErrorList
        .filter(error => error.field.slice(0, length) === errorKeyPath));
  }

  get parent() {
    if (this.keyPath.length === 1) {
      return this.root;
    } else {
      let keyPath = this.keyPath.slice();
      keyPath.pop();
      return new ValueBranch(
        this.root,
        keyPath
      );
    }
  }

}

const NON_ENUMERABLE_PROP = {
  enumerable: false,
  writable: true,
  configurable: true
};

function cache(obj, key, value) {
  Object.defineProperty(obj, key, {...NON_ENUMERABLE_PROP, value});
}

function validate(schema, value) {
  if (!schema) {
    return [];
  }
  if (value.__schema === schema && value.__errorList) {
    return value.__errorList;
  } else {
    if (schema.__validator === undefined) {
      cache(schema, '__validator', Schema(schema, {formats: schema.formats}));
    }
    let errorList = schema.__validator(value);
    cache(value, '__schema', schema);
    cache(value, '__errorList', errorList);
    return errorList;
  }
}

/**
 * Check if value is a form value.
 */
export function isValue(maybeValue) {
  return maybeValue instanceof Value;
}

/**
 * Create a new root value.
 */
export function createValue({
    schema,
    value = {},
    onChange = emptyFunction,
    params = {},
    errorList = null,
    externalErrorList = [],
  } = {}) {
  if (errorList === null) {
    errorList = validate(schema, value);
  }
  return new ValueRoot({schema, value, onChange, params, errorList, externalErrorList});
}
