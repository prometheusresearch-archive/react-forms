/**
 * @copyright 2014, Mathias Buus
 * @copyright 2015, Prometheus Research, LLC
 */

import genobj       from 'generate-object-property';
import genfun       from 'generate-function';
import jsonpointer  from 'jsonpointer';
import isArray      from 'lodash/isArray';
import Format       from './Format';

const HTTP_REF = /^https?:\/\//;
const SPLIT_NAME = /[\[\]]/;

const DEFAULT_ERROR_MESSAGES = {
  IS_REQUIRED: 'is required',
  DOES_NOT_CONFORM_TO_FORMAT: 'does not conform to: ',
  INVALID: 'invalid',
  IS_THE_WRONG_TYPE: 'is the wrong type',
  MUST_BE_UNIQUE: 'must be unique',
  HAS_ADDITIONAL_ITEMS: 'has additional items',
  HAS_ADDITIONAL_PROPERTIES: 'has additional properties',
  MUST_BE_AN_ENUM_VALUE: 'must be an enum value',
  DEPENDENCIES_NOT_SET: 'dependencies not set',
  REFERENCED_SCHEMA_DOES_NOT_MATCH: 'referenced schema does not match',
  NEGATIVE_SCHEMA_MATCHES: 'negative schema matches',
  PATTERN_MISMATCH: 'pattern mismatch',
  NO_SCHEMAS_MATCH: 'no schemas match',
  NO_OR_MORE_THAN_ONE_SCHEMAS_MATCH: 'no (or more than one) schemas match',
  HAS_A_REMAINDER: 'has a remainder',
  HAS_MORE_PROPERTIES_THAN_ALLOWED: 'has more properties than allowed',
  HAS_LESS_PROPERTIES_THAN_ALLOWED: 'has less properties than allowed',
  HAS_MORE_ITEMS_THAN_ALLOWED: 'has more items than allowed',
  HAS_LESS_ITEMS_THAN_ALLOWED: 'has less items than allowed',
  HAS_LONGER_LENGTH_THAN_ALLOWED: 'has longer length than allowed',
  HAS_LESS_LENGTH_THAN_ALLOWED: 'has less length than allowed',
  IS_LESS_THAN_MINIMUM: 'is less than minimum',
  IS_MORE_THAN_MAXIMUM: 'is more than maximum',
};

function getSchemaByRef(obj, additionalSchemas, ptr) {
  if (HTTP_REF.test(ptr)) {
    return null;
  }

  function visit(sub) {
    if (sub && sub.id === ptr) {
      return sub;
    }
    if (typeof sub !== 'object' || !sub) {
      return null;
    }
    return Object.keys(sub).reduce(function(res, k) {
      return res || visit(sub[k]);
    }, null);
  }

  let res = visit(obj);
  if (res) {
    return res;
  }

  ptr = ptr.replace(/^#/, '');
  ptr = ptr.replace(/\/$/, '');

  try {
    return jsonpointer.get(obj, decodeURI(ptr));
  } catch (err) {
    let other = additionalSchemas[ptr] || additionalSchemas[ptr.replace(/^#/, '')];
    return other || null;
  }
}

let Runtime = {

  errorFromError(errors, schema, keyPath, error) {
    let field = error.field ? keyPath + '.' + error.field : keyPath;
    errors.push({
      ...error,
      field,
      schema
    });
  },

  errorFromErrorList(errors, schema, keyPath, errorList) {
    for (let i = 0; i < errorList.length; i++) {
      let error = errorList[i];
      if (typeof error === 'object') {
        Runtime.errorFromError(errors, schema, keyPath, error);
      } else if (typeof error === 'string') {
        Runtime.errorFromString(errors, schema, keyPath, error);
      }
    }
  },

  errorFromString(errors, schema, keyPath, error) {
    errors.push({field: keyPath, message: error, schema});
  },

  errorFrom(errors, schema, keyPath, error) {
    let typeOf = typeof error;
    if (typeOf === 'string') {
      Runtime.errorFromString(errors, schema, keyPath, error);
    } else if (isArray(error)) {
      Runtime.errorFromErrorList(errors, schema, keyPath, error);
    } else if (typeOf === 'object') {
      Runtime.errorFromError(errors, schema, keyPath, error);
    }
  },

  arrayIsUnique(array) {
    let list = [];
    for (let i = 0; i < array.length; i++) {
      list.push(typeof array[i] === 'object' ? JSON.stringify(array[i]) : array[i]);
    }
    for (let i = 1; i < list.length; i++) {
      if (list.indexOf(list[i]) !== i) {
        return false;
      }
    }
    return true;
  },

};

function formatName(field) {
  field = field.replace(/\[/g, '[\u0001').split(SPLIT_NAME);
  let formatted = [];
  for (let i = 0; i < field.length; i++) {
    let part = field[i];
    if (part[0] === '\u0001') {
      formatted.push(JSON.stringify('.'));
      formatted.push(part.slice(1));
    } else {
      formatted.push(JSON.stringify(part));
    }
  }
  return formatted.join('+');
}

let types = {
  any() {
    return 'true';
  },

  enum() {
    return 'true';
  },

  null(name) {
    return `${name} === null`;
  },

  boolean(name) {
    return `typeof ${name} === "boolean"`;
  },

  array(name) {
    return `Array.isArray(${name})`;
  },

  object(name) {
    return `typeof ${name} === "object" && ${name} && !Array.isArray(${name})`;
  },

  number(name) {
    return `typeof ${name} === "number"`;
  },

  integer(name) {
    return `typeof ${name} === "number" && (Math.floor(${name}) === ${name} || ${name} > 9007199254740992 || ${name} < -9007199254740992)`; // eslint-disable-line max-len
  },

  string(name) {
    return `typeof ${name} === "string"`;
  },
};

function compile(schema, cache, root, opts = {}) {
  let messages = opts.messages || DEFAULT_ERROR_MESSAGES;
  let reporter = opts.reporter;
  let formats = {...Format, ...opts.formats};
  let scope = {formats, ...Runtime};
  let verbose = opts ? !!opts.verbose : false;
  let undefinedAsObject = opts ? !!opts.undefinedAsObject : false;
  let nullAsObject = opts ? !!opts.nullAsObject : false;
  let nullAsUndefined = opts ? !!opts.nullAsUndefined : false;
  let undefinedAsArray = opts ? !!opts.undefinedAsArray : false;
  let nullAsArray = opts ? !!opts.nullAsArray : false;
  let greedy = opts && opts.greedy !== undefined ?
    opts.greedy : false;

  let syms = {};

  function gensym(name) {
    return name + (syms[name] = (syms[name] || 0) + 1);
  }

  let reversePatterns = {};
  let patterns = function(p) {
    if (reversePatterns[p]) {
      return reversePatterns[p];
    }
    let n = gensym('pattern');
    scope[n] = new RegExp(p);
    reversePatterns[p] = n;
    return n;
  };

  let vars = ['i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];
  let genloop = function() {
    let v = vars.shift();
    vars.push(v + v[0]);
    return v;
  };

  function visit(name, _dataSym, node, reporter, filter) {
    let properties = node.properties;
    let type = node.type;
    let tuple = false;

    let dataSym = gensym('data');
    validate('var %s = %s', dataSym, _dataSym);

    let nodeSym = gensym('node');
    scope[nodeSym] = node;

    if (Array.isArray(node.items)) { // tuple type
      properties = {};
      node.items.forEach(function(item, i) {
        properties[i] = item;
      });
      type = 'array';
      tuple = true;
    }

    let indent = 0;

    function error(msg, prop, value, schema) {
      validate('errors++');
      if (reporter === true) {
        let errNameSym = formatName(prop || name);
        validate('if (validate.errors === null) validate.errors = []');
        if (verbose) {
          validate(
            'validate.errors.push({field:%s,message:%s,value:%s,schema:%s})',
            errNameSym, JSON.stringify(msg), value || name, schema || nodeSym
          );
        } else {
          validate(
            'validate.errors.push({field:%s,message:%s,schema:%s})',
            errNameSym, JSON.stringify(msg), schema || nodeSym
          );
        }
      }
    }

    function errorFrom(sym) {
      validate('errors++');
      if (reporter === true) {
        validate('if (validate.errors === null) validate.errors = []');
        validate(
          'errorFrom(validate.errors, %s, %s, %s)',
          nodeSym, formatName(name), sym
        );
      }
    }

    if (node.required === true) {
      indent++;
      if (nullAsUndefined) {
        validate('if (%s == undefined) {', dataSym);
      } else {
        validate('if (%s === undefined) {', dataSym);
      }
      error(messages.IS_REQUIRED);
      validate('} else {');
    } else {
      if (node.type === 'object' && (undefinedAsObject || nullAsObject)) { // eslint-disable-line no-lonely-if,max-len
        if (undefinedAsObject && nullAsObject) {
          validate('if (%s == null) %s = {}', dataSym, dataSym);
        } else if (undefinedAsObject) {
          validate('if (%s === undefined) %s = {}', dataSym, dataSym);
        } else if (nullAsObject) {
          validate('if (%s === null) %s = {}', dataSym, dataSym);
        }
      } else if (node.type === 'array' && (undefinedAsArray || nullAsArray)) {
        if (undefinedAsArray && nullAsArray) {
          validate('if (%s == null) %s = []', dataSym, dataSym);
        } else if (undefinedAsArray) {
          validate('if (%s === undefined) %s = []', dataSym, dataSym);
        } else if (nullAsArray) {
          validate('if (%s === null) %s = []', dataSym, dataSym);
        }
      } else {
        indent++;
        if (nullAsUndefined) {
          validate('if (%s != undefined) {', dataSym);
        } else {
          validate('if (%s !== undefined) {', dataSym);
        }
      }
    }

    let valid = [].concat(type)
      .map(function(t) {
        return types[t || 'any'](dataSym);
      })
      .join(' || ') || 'true';

    if (valid !== 'true') {
      indent++;
      validate('if (!(%s)) {', valid);
      error(messages.IS_THE_WRONG_TYPE);
      validate('} else {');
    }

    if (tuple) {
      if (node.additionalItems === false) {
        validate('if (%s.length > %d) {', dataSym, node.items.length);
        error(messages.HAS_ADDITIONAL_ITEMS);
        validate('}');
      } else if (node.additionalItems) {
        let i = genloop();
        validate('for (var %s = %d; %s < %s.length; %s++) {', i, node.items.length, i, dataSym, i);
        visit(
          `${name}[${i}]`,
          `${dataSym}[${i}]`,
          node.additionalItems, reporter, filter
        );
        validate('}');
      }
    }

    if (node.format && (formats[node.format] || typeof node.format === 'function')) {
      if (type !== 'string' && formats[node.format]) {
        validate('if (%s) {', types.string(dataSym));
      }
      let n = gensym('format');
      if (typeof node.format === 'function') {
        scope[n] = node.format;
      } else {
        scope[n] = formats[node.format];
      }

      if (typeof scope[n] === 'function') {
        let r = gensym('result');
        validate('var %s = %s(%s, %s)', r, n, dataSym, nodeSym);
        validate('if (%s === false) {', r);
        error(messages.INVALID);
        validate('} else if (%s !== true) {', r);
        errorFrom(r);
        validate('}');
      } else {
        validate('if (!%s.test(%s)) {', n, dataSym);
        error(messages.DOES_NOT_CONFORM_TO_FORMAT + node.format);
        validate('}');
      }
      if (type !== 'string' && formats[node.format]) {
        validate('}');
      }
    }

    if (Array.isArray(node.required)) {
      let checkRequired = function(req) {
        if (nullAsUndefined) {
          validate('if (%s == undefined) {', genobj(dataSym, req));
        } else {
          validate('if (%s === undefined) {', genobj(dataSym, req));
        }
        let reqSchema = genobj(nodeSym, 'properties') + ' ? ' + genobj(genobj(nodeSym, 'properties'), req) + ' : undefined'; // eslint-disable-line max-len
        error(messages.IS_REQUIRED, genobj(name, req), undefined, reqSchema);
        validate('missing++');
        validate('}');
      };
      validate('if ((%s)) {', type !== 'object' ? types.object(dataSym) : 'true');
      validate('var missing = 0');
      node.required.map(checkRequired);
      validate('}');
      if (!greedy) {
        validate('if (missing === 0) {');
        indent++;
      }
    }

    if (node.uniqueItems) {
      if (type !== 'array') {
        validate('if (%s) {', types.array(dataSym));
      }
      validate('if (!arrayIsUnique(%s)) {', dataSym);
      error(messages.MUST_BE_UNIQUE);
      validate('}');
      if (type !== 'array') {
        validate('}');
      }
    }

    if (node.enum) {
      let complex = node.enum.some(function(e) {
        return typeof e === 'object';
      });

      let compare = complex ?
        function(e) {
          return `JSON.stringify(${dataSym}) !== JSON.stringify(${JSON.stringify(e)})`;
        } :
        function(e) {
          return `${dataSym} !== ${JSON.stringify(e)}`;
        };

      validate('if (%s) {', node.enum.map(compare).join(' && ') || 'false');
      error(messages.MUST_BE_AN_ENUM_VALUE);
      validate('}');
    }

    if (node.dependencies) {
      if (type !== 'object') {
        validate('if (%s) {', types.object(dataSym));
      }

      Object.keys(node.dependencies).forEach(function(key) {
        let deps = node.dependencies[key];
        if (typeof deps === 'string') {
          deps = [deps];
        }

        let exists = function(k) {
          return genobj(dataSym, k) + ' !== undefined';
        };

        if (Array.isArray(deps)) {
          validate(
            'if (%s !== undefined && !(%s)) {',
            genobj(dataSym, key), deps.map(exists).join(' && ') || 'true'
          );
          error(messages.DEPENDENCIES_NOT_SET);
          validate('}');
        }
        if (typeof deps === 'object') {
          validate('if (%s !== undefined) {', genobj(dataSym, key));
          visit(name, dataSym, deps, reporter, filter);
          validate('}');
        }
      });

      if (type !== 'object') {
        validate('}');
      }
    }

    if (node.additionalProperties || node.additionalProperties === false) {
      if (type !== 'object') {
        validate('if (%s) {', types.object(dataSym));
      }

      let i = genloop();
      let keys = gensym('keys');

      let toCompare = function(p) {
        return `${keys}[${i}] !== ${JSON.stringify(p)}`;
      };

      let toTest = function(p) {
        return `!${patterns(p)}.test(${keys}[${i}])`;
      };

      let additionalProp = Object.keys(properties || {}).map(toCompare)
        .concat(Object.keys(node.patternProperties || {}).map(toTest))
        .join(' && ') || 'true';

      validate('var %s = Object.keys(%s)', keys, dataSym);
      validate('  for (var %s = 0; %s < %s.length; %s++) {', i, i, keys, i);
      validate('    if (%s) {', additionalProp);

      if (node.additionalProperties === false) {
        if (filter) {
          validate(
            'delete %s',
            `${dataSym}[${keys}[${i}]]`
          );
        }
        error(
          messages.HAS_ADDITIONAL_PROPERTIES, null,
          `${JSON.stringify(name + '.')} + ${keys}[${i}]`
        );
      } else {
        visit(
          `${name}[${keys}[${i}]]`,
          `${dataSym}[${keys}[${i}]]`,
          node.additionalProperties, reporter, filter
        );
      }

      validate('  }');
      validate('}');

      if (type !== 'object') {
        validate('}');
      }
    }

    if (node.$ref) {
      let sub = getSchemaByRef(root, opts && opts.schemas || {}, node.$ref);
      if (sub) {
        let fn = cache[node.$ref];
        if (!fn) {
          cache[node.$ref] = function proxy(data) {
            return fn(data);
          };
          fn = compile(sub, cache, root, {...opts, reporter: false});
        }
        let n = gensym('ref');
        scope[n] = fn;
        validate('if (!(%s(%s))) {', n, dataSym);
        error(messages.REFERENCED_SCHEMA_DOES_NOT_MATCH);
        validate('}');
      }
    }

    if (node.not) {
      let prev = gensym('prev');
      validate('var %s = errors', prev);
      visit(name, dataSym, node.not, false, filter);
      validate('if (%s === errors) {', prev);
      error(messages.NEGATIVE_SCHEMA_MATCHES);
      validate('} else {');
      validate('errors = %s', prev);
      validate('}');
    }

    if (node.items && !tuple) {
      if (type !== 'array') {
        validate('if (%s) {', types.array(dataSym));
      }

      let i = genloop();
      validate('for (var %s = 0; %s < %s.length; %s++) {', i, i, dataSym, i);
      visit(
        `${name}[${i}]`,
        `${dataSym}[${i}]`,
        node.items, reporter, filter
      );
      validate('}');

      if (type !== 'array') {
        validate('}');
      }
    }

    if (node.patternProperties) {
      if (type !== 'object') {
        validate('if (%s) {', types.object(dataSym));
      }
      let keys = gensym('keys');
      let i = genloop();
      validate('var %s = Object.keys(%s)', keys, dataSym);
      validate('for (var %s = 0; %s < %s.length; %s++) {', i, i, keys, i);

      Object.keys(node.patternProperties).forEach(function(key) {
        let p = patterns(key);
        validate('if (%s.test(%s)) {', p, `${keys}[${i}]`);
        visit(
          `${name}[${keys}[${i}]]`,
          `${dataSym}[${keys}[${i}]]`, node.patternProperties[key], reporter, filter
        );
        validate('}');
      });

      validate('}');
      if (type !== 'object') {
        validate('}');
      }
    }

    if (node.pattern) {
      let p = patterns(node.pattern);
      if (type !== 'string') {
        validate('if (%s) {', types.string(dataSym));
      }
      validate('if (!(%s.test(%s))) {', p, dataSym);
      error(messages.PATTERN_MISMATCH);
      validate('}');
      if (type !== 'string') {
        validate('}');
      }
    }

    if (node.allOf) {
      node.allOf.forEach(function(sch) {
        visit(name, dataSym, sch, reporter, filter);
      });
    }

    if (node.anyOf && node.anyOf.length) {
      let prev = gensym('prev');

      node.anyOf.forEach(function(sch, i) {
        if (i === 0) {
          validate('var %s = errors', prev);
        } else {
          validate('if (errors !== %s) {', prev);
          validate('errors = %s', prev);
        }
        visit(name, dataSym, sch, false, false);
      });
      node.anyOf.forEach(function(sch, i) {
        if (i) {
          validate('}');
        }
      });
      validate('if (%s !== errors) {', prev);
      error(messages.NO_SCHEMAS_MATCH);
      validate('}');
    }

    if (node.oneOf && node.oneOf.length) {
      let prev = gensym('prev');
      let passes = gensym('passes');

      validate('var %s = errors', prev);
      validate('var %s = 0', passes);

      node.oneOf.forEach(function(sch) {
        visit(name, dataSym, sch, false, false);
        validate('if (%s === errors) {', prev);
        validate('  %s++', passes);
        validate('} else {');
        validate('  errors = %s', prev);
        validate('}');
      });

      validate('if (%s !== 1) {', passes);
      error(messages.NO_OR_MORE_THAN_ONE_SCHEMAS_MATCH);
      validate('}');
    }

    if (node.multipleOf !== undefined) {
      if (type !== 'number' && type !== 'integer') {
        validate('if (%s) {', types.number(dataSym));
      }

      let factor = ((node.multipleOf | 0) !== node.multipleOf) ?
        Math.pow(10, node.multipleOf.toString().split('.').pop().length) :
        1;

      if (factor > 1) {
        validate('if ((%d*%s) % %d) {', factor, dataSym, factor * node.multipleOf);
      } else {
        validate('if (%s % %d) {', dataSym, node.multipleOf);
      }

      error(messages.HAS_A_REMAINDER);
      validate('}');

      if (type !== 'number' && type !== 'integer') {
        validate('}');
      }
    }

    if (node.maxProperties !== undefined) {
      if (type !== 'object') {
        validate('if (%s) {', types.object(dataSym));
      }

      validate('if (Object.keys(%s).length > %d) {', dataSym, node.maxProperties);
      error(messages.HAS_MORE_PROPERTIES_THAN_ALLOWED);
      validate('}');

      if (type !== 'object') {
        validate('}');
      }
    }

    if (node.minProperties !== undefined) {
      if (type !== 'object') {
        validate('if (%s) {', types.object(dataSym));
      }

      validate('if (Object.keys(%s).length < %d) {', dataSym, node.minProperties);
      error(messages.HAS_LESS_PROPERTIES_THAN_ALLOWED);
      validate('}');

      if (type !== 'object') {
        validate('}');
      }
    }

    if (node.maxItems !== undefined) {
      if (type !== 'array') {
        validate('if (%s) {', types.array(dataSym));
      }

      validate('if (%s.length > %d) {', dataSym, node.maxItems);
      error(messages.HAS_MORE_ITEMS_THAN_ALLOWED);
      validate('}');

      if (type !== 'array') {
        validate('}');
      }
    }

    if (node.minItems !== undefined) {
      if (type !== 'array') {
        validate('if (%s) {', types.array(dataSym));
      }

      validate('if (%s.length < %d) {', dataSym, node.minItems);
      error(messages.HAS_LESS_ITEMS_THAN_ALLOWED);
      validate('}');

      if (type !== 'array') {
        validate('}');
      }
    }

    if (node.maxLength !== undefined) {
      if (type !== 'string') {
        validate('if (%s) {', types.string(dataSym));
      }

      validate('if (%s.length > %d) {', dataSym, node.maxLength);
      error(messages.HAS_LONGER_LENGTH_THAN_ALLOWED);
      validate('}');

      if (type !== 'string') {
        validate('}');
      }
    }

    if (node.minLength !== undefined) {
      if (type !== 'string') {
        validate('if (%s) {', types.string(dataSym));
      }

      validate('if (%s.length < %d) {', dataSym, node.minLength);
      error(messages.HAS_LESS_LENGTH_THAN_ALLOWED);
      validate('}');

      if (type !== 'string') {
        validate('}');
      }
    }

    if (node.minimum !== undefined) {
      validate('if (%s %s %d) {', dataSym, node.exclusiveMinimum ? '<=' : '<', node.minimum);
      error(messages.IS_LESS_THAN_MINIMUM);
      validate('}');
    }

    if (node.maximum !== undefined) {
      validate('if (%s %s %d) {', dataSym, node.exclusiveMaximum ? '>=' : '>', node.maximum);
      error(messages.IS_MORE_THAN_MAXIMUM);
      validate('}');
    }

    if (properties) {
      Object.keys(properties).forEach(function(p) {
        visit(genobj(name, p), genobj(dataSym, p), properties[p], reporter, filter);
      });
    }

    while (indent--) {
      validate('}');
    }
  }

  let validate = genfun('function validate(data) {')('validate.errors = null')('var errors = 0');

  visit('data', 'data', schema, reporter, opts && opts.filter);

  validate('return errors === 0')('}');

  validate = validate.toFunction(scope);
  validate.errors = null;

  validate.__defineGetter__('error', function() {
    if (!validate.errors) {
      return '';
    } else {
      return validate.errors
        .map(err => err.field + ' ' + err.message)
        .join('\n');
    }
  });

  validate.toJSON = function() {
    return schema;
  };

  return validate;
}

/**
 * Compile a new JSON Schema validator for the specified schema and options.
 */
export default function compileValidator(schema, opts) {
  if (typeof schema === 'string') {
    schema = JSON.parse(schema);
  }
  return compile(schema, {}, schema, {...opts, reporter: true});
}
