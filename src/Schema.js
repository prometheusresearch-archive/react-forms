/**
 * @copyright 2015, Prometheus Research, LLC
 */
'use strict';

import _createValidator from './validation';

export function createValidator(schema, options) {
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
  return _createValidator(schema, options);
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
