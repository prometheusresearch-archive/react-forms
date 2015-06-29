/**
 * @copyright 2015, Prometheus Research, LLC
 */

import memoize                    from 'memoize-decorator';
import clone                      from 'lodash/lang/cloneDeep';
import selectValue                from 'lodash/object/get';
import set                        from 'lodash/object/set';
import makeKeyPath                from './keyPath';
import {createValidator,
        select as selectSchema}   from './Schema';
import emptyFunction              from './emptyFunction';

export class Value {

  select(key) {
    let keyPath = this.keyPath.concat(makeKeyPath(key));
    return new ValueLeaf(this._root, keyPath);
  }

  set(value, quiet) {
    console.warn('Value.prototype.set(value) is deprecated, use Value.prototype.update(value) instead');
    return this.update(value, quiet);
  }

  update(value, quiet) {
    let rootValue = clone(this._root.value);
    if (this.keyPath.length === 0) {
      rootValue = value;
    } else {
      rootValue = set(rootValue, this.keyPath, value);
    }
    let nextRoot = createValue(this._root.schema, rootValue, this._root.onChange, this._root.params);
    if (!quiet) {
      this._root.onChange(nextRoot);
    }
    return nextRoot;
  }
}

class ValueRoot extends Value {

  keyPath = [];
  parent = null;

  constructor(schema, value, onChange, params, errorList) {
    super();
    this._root = this;
    this.keyPath = [];
    this.schema = schema;
    this.value = value;
    this.onChange = onChange;
    this.params = params;
    this.errorList = errorList.filter(error => error.field === 'data');
    this.completeErrorList = errorList;
  }
}

class ValueLeaf extends Value {

  constructor(root, keyPath) {
    super();
    this._root = root;
    this.keyPath = keyPath;
    this.schema = selectSchema(root.schema, keyPath);
    this.value = selectValue(root.value, keyPath);
  }

  get params() {
    return this._root.params;
  }

  @memoize
  get errorList() {
    let errorKeyPath = `data.${this.keyPath.join('.')}`;
    return this._root.completeErrorList.filter(error => error.field === errorKeyPath);
  }

  @memoize
  get completeErrorList() {
    let errorKeyPath = `data.${this.keyPath.join('.')}`;
    let length = errorKeyPath.length;
    return this._root.completeErrorList.filter(error => error.field.slice(0, length) === errorKeyPath);
  }

  get parent() {
    if (this.keyPath.length === 1) {
      return this._root;
    } else {
      let keyPath = this.keyPath.slice();
      keyPath.pop();
      return new ValueLeaf(
        this._root,
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
      cache(schema, '__validator', createValidator(schema, {formats: schema.formats}));
    }
    schema.__validator(value);
    let errorList = schema.__validator.errors || [];
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
export default function createValue(
    schema,
    value = {},
    onChange = emptyFunction,
    params = {},
    errorList = null) {
  if (errorList === null) {
    errorList = validate(schema, value);
  }
  return new ValueRoot(schema, value, onChange, params, errorList);
}
