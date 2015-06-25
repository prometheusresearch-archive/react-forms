/**
 * @copyright 2015, Prometheus Research, LLC
 */
'use strict';

var _validator = require('./validation');

function validator(schema, options) {
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
  return _validator(schema, options);
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

var Builder = {

  object(properties, params) {
    return {
      type: 'object',
      properties,
      required: Object.keys(properties).filter(k => properties[k].isRequired),
      isRequired: params ? !!params.isRequired : false,
      ...params
    };
  },

  array(items, params) {
    return {
      type: 'array',
      items,
      isRequired: params ? !!params.isRequired : false,
      ...params
    }
  },

  string: _generateSchemaBuilder('string'),
  number: _generateSchemaBuilder('number')
};

module.exports = {
  validator,
  Builder
};
