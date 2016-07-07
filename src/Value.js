/**
 * @copyright 2015, Prometheus Research, LLC
 * @flow
 */

import type {KeyPath, LooseKeyPath} from './keyPath';

import memoize from 'memoize-decorator';
import selectValue  from 'lodash/get';
import noop from 'lodash/noop';

import makeKeyPath from './keyPath';
import {update} from './update';
import * as Schema from './Schema';
import applyDecorator from './applyDecorator';

let suppressUpdateContextual = false;

/**
 * Suppress any onChange notifications during the execution of the callback.
 */
export function suppressUpdate(tx: Function) {
  suppressUpdateContextual = true;
  try {
    return tx();
  } finally {
    suppressUpdateContextual = false;
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

export class Value {

  root: ValueRoot;
  keyPath: KeyPath;
  params: mixed;
  value: mixed;
  schema: mixed;
  onChange: (formValue: ValueRoot, keyPath: KeyPath) => void;
  parent: ?Value;

  select(key: LooseKeyPath): Value {
    let keyPath = makeKeyPath(key);
    if (keyPath.length === 0) {
      return this;
    } else {
      return new ValueBranch(this.root, this.keyPath.concat(keyPath));
    }
  }

  get errorList(): FormErrorList {
    let validateErrorList = filterErrorListByKeyPath(
      this.root._errorList, this.keyPath);
    let externalErrorList = filterErrorListByKeyPath(
      this.root._externalErrorList, this.keyPath);
    return validateErrorList.concat(externalErrorList);
  }

  get completeErrorList(): FormErrorList {
    let validateErrorList = filterErrorListByKeyPathPrefix(
      this.root._errorList, this.keyPath);
    let externalErrorList = filterErrorListByKeyPathPrefix(
      this.root._externalErrorList, this.keyPath);
    return validateErrorList.concat(externalErrorList);
  }

  createRoot(update: ValueInit) {
    let values = {
      schema: this.root.schema,
      value: this.root.value,
      onChange: this.root.onChange,
      params: this.root.params,
      errorList: this.root._errorList,
      externalErrorList: this.root._externalErrorList,
    };
    return new ValueRoot({...values, ...update});
  }

  updateParams(params: mixed, suppressUpdate?: boolean) {
    params = {...this.root.params, ...params};
    let nextRoot = this.createRoot({params});
    if (!suppressUpdate && !suppressUpdateContextual) {
      this.root.onChange(nextRoot, this.keyPath);
    }
    return nextRoot.select(this.keyPath);
  }

  update(valueUpdate: mixed, suppressUpdate?: boolean) {
    let value;
    if (this.keyPath.length === 0) {
      value = valueUpdate;
    } else {
      value = update(this.root.value, this.keyPath, valueUpdate, this.root.schema);
    }
    let errorList = Schema.validate(this.root.schema, value);
    let nextRoot = this.createRoot({value, errorList});
    if (!suppressUpdate && !suppressUpdateContextual) {
      this.root.onChange(nextRoot, this.keyPath);
    }
    return nextRoot.select(this.keyPath);
  }

  updateError(error: FormError, suppressUpdate?: boolean) {
    let field = ['data'].concat(this.keyPath).join('.');
    let externalErrorList;
    if (Array.isArray(error)) {
      externalErrorList = error.map(error => ({...error, field}));
    } else {
      externalErrorList = [{...error, field}];
    }

    let nextRoot = this.createRoot({externalErrorList});
    if (!suppressUpdate && !suppressUpdateContextual) {
      this.root.onChange(nextRoot, this.keyPath);
    }
    return nextRoot.select(this.keyPath);
  }

  addError(error: FormError, suppressUpdate?: boolean) {
    error = {
      ...error,
      field: ['data'].concat(this.keyPath).join('.'),
    };
    let externalErrorList = this.root._externalErrorList.concat(error);
    let nextRoot = this.createRoot({externalErrorList});
    if (!suppressUpdate && !suppressUpdateContextual) {
      this.root.onChange(nextRoot, this.keyPath);
    }
    return nextRoot.select(this.keyPath);
  }

  removeError(error: FormError, suppressUpdate?: boolean) {
    let idx = this.root._externalErrorList.indexOf(error);
    if (idx > -1) {
      let externalErrorList = this.root._externalErrorList.slice(0);
      externalErrorList.splice(idx, 1);
      let nextRoot = this.createRoot({externalErrorList});
      if (!suppressUpdate && !suppressUpdateContextual) {
        this.root.onChange(nextRoot, this.keyPath);
      }
      return nextRoot.select(this.keyPath);
    } else {
      return this;
    }
  }
}

applyDecorator(Value.prototype, 'errorList', memoize);
applyDecorator(Value.prototype, 'completeErrorList', memoize);

type FormError = {
  message: string;
  field: string;
};

type FormErrorList = Array<FormError>;

class ValueRoot extends Value {

  _errorList: FormErrorList;
  _externalErrorList: FormErrorList;

  constructor({schema, value, onChange, params, errorList, externalErrorList}: ValueInitComplete) {
    super();
    this.parent = null;
    this.keyPath = [];
    this.schema = schema;
    this.value = value;
    this.onChange = onChange;
    this.params = params;
    this._errorList = errorList;
    this._externalErrorList = externalErrorList;
  }

  get root(): ValueRoot {
    return this;
  }

  /**
   * Set schema.
   *
   * This method performs re-validation.
   */
  setSchema(schema: mixed) {
    let errorList = Schema.validate(schema, this.value);
    return this.createRoot({schema, errorList});
  }
}

class ValueBranch extends Value {

  constructor(root: ValueRoot, keyPath: KeyPath) {
    super();
    this.root = root;
    this.keyPath = keyPath;
  }

  get params(): mixed {
    return this.root.params;
  }

  get schema(): mixed {
    return Schema.select(this.root.schema, this.keyPath);
  }

  get value(): mixed {
    return selectValue(this.root.value, this.keyPath);
  }

  get parent(): ?Value {
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

applyDecorator(ValueBranch.prototype, 'schema', memoize);
applyDecorator(ValueBranch.prototype, 'value', memoize);

/**
 * Check if value is a form value.
 */
export function isValue(maybeValue: any): boolean {
  return maybeValue instanceof Value;
}

type ValueInit = {
  schema?: mixed;
  value?: mixed;
  onChange?: Function;
  errorList?: FormErrorList;
  externalErrorList?: FormErrorList;
  params?: mixed;
};

type ValueInitComplete = {
  schema: mixed;
  value: mixed;
  onChange: Function;
  errorList: FormErrorList;
  externalErrorList: FormErrorList;
  params: mixed;
};

/**
 * Create a new root value.
 */
export function create({
    schema,
    value = {},
    onChange = noop,
    params = {},
    errorList = null,
    externalErrorList = [],
  }: ValueInit = {}) {
  if (errorList === null) {
    errorList = Schema.validate(schema, value);
  }
  return new ValueRoot({schema, value, onChange, params, errorList, externalErrorList});
}
