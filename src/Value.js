/**
 * @copyright 2015, Prometheus Research, LLC
 */
'use strict';

import clone              from 'lodash/lang/cloneDeep';
import get                from 'lodash/object/get';
import set                from 'lodash/object/set';
import makeKeyPath        from './keyPath';
import {createValidator}  from './Schema';
import emptyFunction      from './emptyFunction';

/**
 * Thin wrapper over form value with associated validation information and flag
 * to force rendering validation errors.
 */
export class Value {

  constructor(keyPath, rootSchema, root, onChange, allErrors, params) { // eslint-disable-line max-params
    this.rootSchema = rootSchema;
    this.schema = subSchemaByKeyPath(rootSchema, keyPath);
    this.root = root;
    this.value = keyPath.length > 0 ? get(root, keyPath) : root;
    this.onChange = onChange;
    this.allErrors = allErrors;
    this.params = params;
    this.keyPath = keyPath;
  }

  get parent() {
    if (this.keyPath.length === 0) {
      return null;
    }
    let keyPath = this.keyPath.slice();
    keyPath.pop();
    return new Value(
      keyPath,
      this.rootSchema,
      this.root,
      this.onChange,
      this.allErrors,
      this.params
    );
  }

  get errors() {
    if (!this.allErrors) {
      return [];
    }
    let exactKeyPath = `data.${this.keyPath.join('.')}`;
    let wildcardKeyPath = `data.${makeWildcardFromKeyPath(this.keyPath).join('.')}`;
    return this.allErrors.filter(error =>
      error.field === exactKeyPath || error.field === wildcardKeyPath);
  }

  select(key) {
    let keyPath = this.keyPath.concat(makeKeyPath(key));
    return new Value(
      keyPath,
      this.rootSchema,
      this.root,
      this.onChange,
      this.allErrors,
      this.params
    );
  }

  set(value, quiet) {
    if (value === this.root) {
      return this;
    }
    let root = clone(this.root);
    if (this.keyPath.length === 0) {
      root = value;
    } else {
      root = set(root, this.keyPath, value);
    }
    let nextValue = createValue(this.rootSchema, root, this.onChange, this.params);
    if (!quiet) {
      this.onChange(nextValue);
    }
    return nextValue;
  }

  setParams(params) {
    if (this.keyPath.length !== 0) {
      throw new Error('withParams() is only allowed on root value');
    }
    return new Value(
      this.keyPath,
      this.rootSchema,
      this.root,
      this.onChange,
      this.allErrors,
      {...this.params, ...params}
    );
  }
}

function makeWildcardFromKeyPath(keyPath) {
  let wildcard = [];
  for (let i = 0, len = keyPath.length; i < len; i++) {
    let item = keyPath[i];
    if (!isNaN(item)) {
      wildcard.push('*');
    } else {
      wildcard.push(item);
    }
  }
  return wildcard;
}

function subSchemaByKeyPath(schema, keyPath) {
  for (let i = 0, len = keyPath.length; i < len; i++) {
    if (!schema) {
      return schema;
    }
    schema = subSchemaByKey(schema, keyPath[i]);
  }
  return schema;
}

function subSchemaByKey(schema, key) {
  if (schema) {
    if (schema.type === 'object') {
      let subSchema = schema.properties ?
        schema.properties[key] :
        undefined;
      if (Array.isArray(schema.required)) {
        // transfer required info onto schema
        subSchema = {
          type: 'object',
          ...subSchema,
          isRequired: schema.required.indexOf(key) !== -1
        };
      }
      return subSchema;
    } else if (schema.type === 'array') {
      if (schema.items) {
        if (Array.isArray(schema.items)) { // eslint-disable-line max-depth
          return schema.items[key];
        } else {
          return schema.items;
        }
      } else {
        return undefined;
      }
    } else {
      throw new Error(`${JSON.stringify(schema)} ${key}`);
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

export function validate(schema, value) {
  if (!schema) {
    return null;
  }
  if (value.__schema === schema && value.__errors) {
    return value.__errors;
  } else {
    if (schema.__validator === undefined) {
      cache(schema, '__validator', createValidator(schema, {formats: schema.formats}));
    }
    schema.__validator(value);
    let errors = schema.__validator.errors;
    cache(value, '__schema', schema);
    cache(value, '__errors', errors);
    return errors;
  }
}

export function isValue(maybeValue) {
  return maybeValue instanceof Value;
}

export default function createValue(schema, value, onChange, params) {
  value = value || {};
  onChange = onChange || emptyFunction;
  params = params || {};
  let allErrors = validate(schema, value);
  return new Value([], schema, value, onChange, allErrors, params);
}

