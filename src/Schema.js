/**
 * @copyright 2015, Prometheus Research, LLC
 */

import JSONSchema from './JSONSchema';
import toKeyPath from './keyPath';

/**
 * Create a React Forms schema validator.
 */
export function Schema(schema, options) {
  options = {
    ...options,
    greedy: true,
    undefinedAsObject: true,
    nullAsObject: true,
    undefinedAsArray: true,
    nullAsUndefined: true,
    nullAsArray: true,
    nullAsBottomType: true
  };
  return JSONSchema(schema, options);
}

function _generateSchemaBuilder(type) {
  return function builder(params) {
    return {
      type,
      isRequired: params ? !!params.isRequired : false,
      ...params
    };
  };
}

export function object(properties, params) {
  return {
    type: 'object',
    properties,
    required: Object.keys(properties).filter(k => properties[k].isRequired),
    isRequired: params ? !!params.isRequired : false,
    ...params
  };
}

export function array(items, params) {
  return {
    type: 'array',
    items,
    isRequired: params ? !!params.isRequired : false,
    ...params
  };
}

export let string = _generateSchemaBuilder('string');
export let number = _generateSchemaBuilder('number');

const NON_ENUMERABLE_PROP = {
  enumerable: false,
  writable: true,
  configurable: true
};

function cache(obj, key, value) {
  Object.defineProperty(obj, key, {...NON_ENUMERABLE_PROP, value});
}

export function validate(schema, value, options) {
  if (!schema) {
    return [];
  }
  if (value.__schema === schema && value.__errorList) {
    return value.__errorList;
  } else {
    if (schema.__validator === undefined) {
      cache(
        schema,
        '__validator',
        Schema(schema, {...options, formats: schema.formats})
      );
    }
    let errorList = schema.__validator(value);
    cache(value, '__schema', schema);
    cache(value, '__errorList', errorList);
    return errorList;
  }
}

export function select(schema, keyPath) {
  keyPath = toKeyPath(keyPath);
  for (let i = 0, len = keyPath.length; i < len; i++) {
    if (!schema) {
      return schema;
    }
    schema = _select(schema, keyPath[i]);
  }
  return schema;
}

function _select(schema, key) {
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
