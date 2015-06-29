module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @copyright 2015, Prometheus Research, LLC
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _Fieldset2 = __webpack_require__(14);
	
	var _Fieldset3 = _interopRequireDefault(_Fieldset2);
	
	exports.Fieldset = _Fieldset3['default'];
	
	var _Field2 = __webpack_require__(27);
	
	var _Field3 = _interopRequireDefault(_Field2);
	
	exports.Field = _Field3['default'];
	
	var _Value2 = __webpack_require__(34);
	
	var _Value3 = _interopRequireDefault(_Value2);
	
	exports.Value = _Value3['default'];
	
	var _WithFormValue2 = __webpack_require__(66);
	
	var _WithFormValue3 = _interopRequireDefault(_WithFormValue2);
	
	exports.WithFormValue = _WithFormValue3['default'];
	
	var _Schema2 = __webpack_require__(1);
	
	var _Schema = _interopRequireWildcard(_Schema2);
	
	exports.Schema = _Schema;
	
	var _Input2 = __webpack_require__(28);
	
	var _Input3 = _interopRequireDefault(_Input2);
	
	exports.Input = _Input3['default'];
	
	var _ErrorList2 = __webpack_require__(33);
	
	var _ErrorList3 = _interopRequireDefault(_ErrorList2);
	
	exports.ErrorList = _ErrorList3['default'];
	
	var _LegacyFieldset2 = __webpack_require__(67);
	
	var _LegacyFieldset3 = _interopRequireDefault(_LegacyFieldset2);
	
	exports.LegacyFieldset = _LegacyFieldset3['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @copyright 2015, Prometheus Research, LLC
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.createValidator = createValidator;
	exports.object = object;
	exports.array = array;
	exports.select = select;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _schema = __webpack_require__(2);
	
	var _schema2 = _interopRequireDefault(_schema);
	
	function createValidator(schema, options) {
	  options = _extends({}, options, {
	    greedy: true,
	    undefinedAsObject: true,
	    nullAsObject: true,
	    undefinedAsArray: true,
	    nullAsUndefined: true,
	    nullAsArray: true,
	    nullAsBottomType: true
	  });
	  return (0, _schema2['default'])(schema, options);
	}
	
	function _generateSchemaBuilder(type) {
	  return function builder(params) {
	    return _extends({
	      type: type,
	      isRequired: params ? !!params.isRequired : false
	    }, params);
	  };
	}
	
	function object(properties, params) {
	  return _extends({
	    type: 'object',
	    properties: properties,
	    required: Object.keys(properties).filter(function (k) {
	      return properties[k].isRequired;
	    }),
	    isRequired: params ? !!params.isRequired : false
	  }, params);
	}
	
	function array(items, params) {
	  return _extends({
	    type: 'array',
	    items: items,
	    isRequired: params ? !!params.isRequired : false
	  }, params);
	}
	
	var string = _generateSchemaBuilder('string');
	exports.string = string;
	var number = _generateSchemaBuilder('number');
	
	exports.number = number;
	
	function select(schema, keyPath) {
	  for (var i = 0, len = keyPath.length; i < len; i++) {
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
	      var subSchema = schema.properties ? schema.properties[key] : undefined;
	      if (Array.isArray(schema.required)) {
	        // transfer required info onto schema
	        subSchema = _extends({
	          type: 'object'
	        }, subSchema, {
	          isRequired: schema.required.indexOf(key) !== -1
	        });
	      }
	      return subSchema;
	    } else if (schema.type === 'array') {
	      if (schema.items) {
	        if (Array.isArray(schema.items)) {
	          // eslint-disable-line max-depth
	          return schema.items[key];
	        } else {
	          return schema.items;
	        }
	      } else {
	        return undefined;
	      }
	    } else {
	      throw new Error(JSON.stringify(schema) + ' ' + key);
	    }
	  }
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var genobj = __webpack_require__(3);
	var genfun = __webpack_require__(5);
	var jsonpointer = __webpack_require__(11);
	var xtend = __webpack_require__(12);
	var formats = __webpack_require__(13);
	
	var get = function get(obj, additionalSchemas, ptr) {
	  if (/^https?:\/\//.test(ptr)) return null;
	
	  var visit = function visit(sub) {
	    if (sub && sub.id === ptr) return sub;
	    if (typeof sub !== 'object' || !sub) return null;
	    return Object.keys(sub).reduce(function (res, k) {
	      return res || visit(sub[k]);
	    }, null);
	  };
	
	  var res = visit(obj);
	  if (res) return res;
	
	  ptr = ptr.replace(/^#/, '');
	  ptr = ptr.replace(/\/$/, '');
	
	  try {
	    return jsonpointer.get(obj, decodeURI(ptr));
	  } catch (err) {
	    var other = additionalSchemas[ptr] || additionalSchemas[ptr.replace(/^#/, '')];
	    return other || null;
	  }
	};
	
	var splitName = /[\[\]]/;
	
	var formatName = function formatName(field) {
	  field = field.replace(/\[/g, '[\u0001').split(splitName);
	  var formatted = [];
	  for (var i = 0; i < field.length; i++) {
	    var part = field[i];
	    if (part[0] === '\u0001') {
	      formatted.push(JSON.stringify('.'));
	      formatted.push(part.slice(1));
	    } else {
	      formatted.push(JSON.stringify(part));
	    }
	  }
	  return formatted.join('+');
	};
	
	var types = {};
	
	types.any = function () {
	  return 'true';
	};
	
	types['null'] = function (name) {
	  return name + ' === null';
	};
	
	types.boolean = function (name) {
	  return 'typeof ' + name + ' === "boolean"';
	};
	
	types.array = function (name) {
	  return 'Array.isArray(' + name + ')';
	};
	
	types.object = function (name) {
	  return 'typeof ' + name + ' === "object" && ' + name + ' && !Array.isArray(' + name + ')';
	};
	
	types.number = function (name) {
	  return 'typeof ' + name + ' === "number"';
	};
	
	types.integer = function (name) {
	  return 'typeof ' + name + ' === "number" && (Math.floor(' + name + ') === ' + name + ' || ' + name + ' > 9007199254740992 || ' + name + ' < -9007199254740992)';
	};
	
	types.string = function (name) {
	  return 'typeof ' + name + ' === "string"';
	};
	
	var unique = function unique(array) {
	  var list = [];
	  for (var i = 0; i < array.length; i++) {
	    list.push(typeof array[i] === 'object' ? JSON.stringify(array[i]) : array[i]);
	  }
	  for (var i = 1; i < list.length; i++) {
	    if (list.indexOf(list[i]) !== i) return false;
	  }
	  return true;
	};
	
	var toType = function toType(node) {
	  return node.type;
	};
	
	var compile = function compile(schema, cache, root, reporter, opts) {
	  var fmts = opts ? xtend(formats, opts.formats) : formats;
	  var scope = { unique: unique, formats: fmts };
	  var verbose = opts ? !!opts.verbose : false;
	  var undefinedAsObject = opts ? !!opts.undefinedAsObject : false;
	  var nullAsObject = opts ? !!opts.nullAsObject : false;
	  var nullAsUndefined = opts ? !!opts.nullAsUndefined : false;
	  var undefinedAsArray = opts ? !!opts.undefinedAsArray : false;
	  var nullAsArray = opts ? !!opts.nullAsArray : false;
	  var greedy = opts && opts.greedy !== undefined ? opts.greedy : false;
	
	  var syms = {};
	  var gensym = function gensym(name) {
	    return name + (syms[name] = (syms[name] || 0) + 1);
	  };
	
	  var reversePatterns = {};
	  var patterns = function patterns(p) {
	    if (reversePatterns[p]) return reversePatterns[p];
	    var n = gensym('pattern');
	    scope[n] = new RegExp(p);
	    reversePatterns[p] = n;
	    return n;
	  };
	
	  var vars = ['i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];
	  var genloop = function genloop() {
	    var v = vars.shift();
	    vars.push(v + v[0]);
	    return v;
	  };
	
	  var visit = function visit(name, _dataSym, node, reporter, filter) {
	    var properties = node.properties;
	    var type = node.type;
	    var tuple = false;
	
	    var dataSym = gensym('data');
	    validate('var %s = %s', dataSym, _dataSym);
	
	    var nodeSym = gensym('node');
	    scope[nodeSym] = node;
	
	    if (Array.isArray(node.items)) {
	      // tuple type
	      properties = {};
	      node.items.forEach(function (item, i) {
	        properties[i] = item;
	      });
	      type = 'array';
	      tuple = true;
	    }
	
	    var indent = 0;
	    var error = function error(msg, prop, value, schema) {
	      validate('errors++');
	      if (reporter === true) {
	        validate('if (validate.errors === null) validate.errors = []');
	        if (verbose) {
	          validate('validate.errors.push({field:%s,message:%s,value:%s,schema:%s})', formatName(prop || name), JSON.stringify(msg), value || name, schema || nodeSym);
	        } else {
	          validate('validate.errors.push({field:%s,message:%s,schema:%s})', formatName(prop || name), JSON.stringify(msg), schema || nodeSym);
	        }
	      }
	    };
	    var errorFromSym = function errorFromSym(sym, schema) {
	      validate('errors++');
	      if (reporter === true) {
	        validate('if (validate.errors === null) validate.errors = []');
	        if (verbose) {
	          validate('validate.errors.push({field:%s,message:%s,value:%s,schema:%s})', formatName(name), sym, name, schema || nodeSym);
	        } else {
	          validate('validate.errors.push({field:%s,message:%s,schema:%s})', formatName(name), sym, schema || nodeSym);
	        }
	      }
	    };
	
	    if (node.required === true) {
	      indent++;
	      if (nullAsUndefined) {
	        validate('if (%s == undefined) {', dataSym);
	      } else {
	        validate('if (%s === undefined) {', dataSym);
	      }
	      error('is required');
	      validate('} else {');
	    } else {
	      if (node.type === 'object' && (undefinedAsObject || nullAsObject)) {
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
	
	    var valid = [].concat(type).map(function (t) {
	      return types[t || 'any'](dataSym);
	    }).join(' || ') || 'true';
	
	    if (valid !== 'true') {
	      indent++;
	      validate('if (!(%s)) {', valid);
	      error('is the wrong type');
	      validate('} else {');
	    }
	
	    if (tuple) {
	      if (node.additionalItems === false) {
	        validate('if (%s.length > %d) {', dataSym, node.items.length);
	        error('has additional items');
	        validate('}');
	      } else if (node.additionalItems) {
	        var i = genloop();
	        validate('for (var %s = %d; %s < %s.length; %s++) {', i, node.items.length, i, dataSym, i);
	        visit(name + '[' + i + ']', dataSym + '[' + i + ']', node.additionalItems, reporter, filter);
	        validate('}');
	      }
	    }
	
	    if (node.format && (fmts[node.format] || typeof node.format === 'function')) {
	      if (type !== 'string' && formats[node.format]) validate('if (%s) {', types.string(dataSym));
	      var n = gensym('format');
	      if (typeof node.format === 'function') {
	        scope[n] = node.format;
	      } else {
	        scope[n] = fmts[node.format];
	      }
	
	      if (typeof scope[n] === 'function') {
	        var r = gensym('result');
	        validate('var %s = %s(%s, %s)', r, n, dataSym, nodeSym);
	        validate('if (!%s) {', r);
	        error('must be ' + node.format + ' format');
	        validate('} else if (typeof %s === "string") {', r);
	        errorFromSym(r);
	        validate('}');
	      } else {
	        validate('if (!%s.test(%s)) {', n, dataSym);
	        error('must be ' + node.format + ' format');
	        validate('}');
	      }
	      if (type !== 'string' && formats[node.format]) validate('}');
	    }
	
	    if (Array.isArray(node.required)) {
	      var isUndefined = function isUndefined(req) {
	        return genobj(dataSym, req) + ' === undefined';
	      };
	
	      var checkRequired = function checkRequired(req) {
	        if (nullAsUndefined) {
	          validate('if (%s == undefined) {', genobj(dataSym, req));
	        } else {
	          validate('if (%s === undefined) {', genobj(dataSym, req));
	        }
	        var reqSchema = genobj(nodeSym, 'properties') + ' ? ' + genobj(genobj(nodeSym, 'properties'), req) + ' : undefined';
	        error('is required', genobj(name, req), undefined, reqSchema);
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
	      if (type !== 'array') validate('if (%s) {', types.array(dataSym));
	      validate('if (!(unique(%s))) {', dataSym);
	      error('must be unique');
	      validate('}');
	      if (type !== 'array') validate('}');
	    }
	
	    if (node['enum']) {
	      var complex = node['enum'].some(function (e) {
	        return typeof e === 'object';
	      });
	
	      var compare = complex ? function (e) {
	        return 'JSON.stringify(' + dataSym + ')' + ' !== JSON.stringify(' + JSON.stringify(e) + ')';
	      } : function (e) {
	        return dataSym + ' !== ' + JSON.stringify(e);
	      };
	
	      validate('if (%s) {', node['enum'].map(compare).join(' && ') || 'false');
	      error('must be an enum value');
	      validate('}');
	    }
	
	    if (node.dependencies) {
	      if (type !== 'object') validate('if (%s) {', types.object(dataSym));
	
	      Object.keys(node.dependencies).forEach(function (key) {
	        var deps = node.dependencies[key];
	        if (typeof deps === 'string') deps = [deps];
	
	        var exists = function exists(k) {
	          return genobj(dataSym, k) + ' !== undefined';
	        };
	
	        if (Array.isArray(deps)) {
	          validate('if (%s !== undefined && !(%s)) {', genobj(dataSym, key), deps.map(exists).join(' && ') || 'true');
	          error('dependencies not set');
	          validate('}');
	        }
	        if (typeof deps === 'object') {
	          validate('if (%s !== undefined) {', genobj(dataSym, key));
	          visit(name, dataSym, deps, reporter, filter);
	          validate('}');
	        }
	      });
	
	      if (type !== 'object') validate('}');
	    }
	
	    if (node.additionalProperties || node.additionalProperties === false) {
	      if (type !== 'object') validate('if (%s) {', types.object(dataSym));
	
	      var i = genloop();
	      var keys = gensym('keys');
	
	      var toCompare = function toCompare(p) {
	        return keys + '[' + i + '] !== ' + JSON.stringify(p);
	      };
	
	      var toTest = function toTest(p) {
	        return '!' + patterns(p) + '.test(' + keys + '[' + i + '])';
	      };
	
	      var additionalProp = Object.keys(properties || {}).map(toCompare).concat(Object.keys(node.patternProperties || {}).map(toTest)).join(' && ') || 'true';
	
	      validate('var %s = Object.keys(%s)', keys, dataSym)('for (var %s = 0; %s < %s.length; %s++) {', i, i, keys, i)('if (%s) {', additionalProp);
	
	      if (node.additionalProperties === false) {
	        if (filter) validate('delete %s', dataSym + '[' + keys + '[' + i + ']]');
	        error('has additional properties', null, JSON.stringify(name + '.') + ' + ' + keys + '[' + i + ']');
	      } else {
	        visit(name + '[' + keys + '[' + i + ']]', dataSym + '[' + keys + '[' + i + ']]', node.additionalProperties, reporter, filter);
	      }
	
	      validate('}')('}');
	
	      if (type !== 'object') validate('}');
	    }
	
	    if (node.$ref) {
	      var sub = get(root, opts && opts.schemas || {}, node.$ref);
	      if (sub) {
	        var fn = cache[node.$ref];
	        if (!fn) {
	          cache[node.$ref] = function proxy(data) {
	            return fn(data);
	          };
	          fn = compile(sub, cache, root, false, opts);
	        }
	        var n = gensym('ref');
	        scope[n] = fn;
	        validate('if (!(%s(%s))) {', n, dataSym);
	        error('referenced schema does not match');
	        validate('}');
	      }
	    }
	
	    if (node.not) {
	      var prev = gensym('prev');
	      validate('var %s = errors', prev);
	      visit(name, dataSym, node.not, false, filter);
	      validate('if (%s === errors) {', prev);
	      error('negative schema matches');
	      validate('} else {')('errors = %s', prev)('}');
	    }
	
	    if (node.items && !tuple) {
	      if (type !== 'array') validate('if (%s) {', types.array(dataSym));
	
	      var i = genloop();
	      validate('for (var %s = 0; %s < %s.length; %s++) {', i, i, dataSym, i);
	      visit(name + '[' + i + ']', dataSym + '[' + i + ']', node.items, reporter, filter);
	      validate('}');
	
	      if (type !== 'array') validate('}');
	    }
	
	    if (node.patternProperties) {
	      if (type !== 'object') validate('if (%s) {', types.object(dataSym));
	      var keys = gensym('keys');
	      var i = genloop();
	      validate('var %s = Object.keys(%s)', keys, dataSym)('for (var %s = 0; %s < %s.length; %s++) {', i, i, keys, i);
	
	      Object.keys(node.patternProperties).forEach(function (key) {
	        var p = patterns(key);
	        validate('if (%s.test(%s)) {', p, keys + '[' + i + ']');
	        visit(name + '[' + keys + '[' + i + ']]', dataSym + '[' + keys + '[' + i + ']]', node.patternProperties[key], reporter, filter);
	        validate('}');
	      });
	
	      validate('}');
	      if (type !== 'object') validate('}');
	    }
	
	    if (node.pattern) {
	      var p = patterns(node.pattern);
	      if (type !== 'string') validate('if (%s) {', types.string(dataSym));
	      validate('if (!(%s.test(%s))) {', p, dataSym);
	      error('pattern mismatch');
	      validate('}');
	      if (type !== 'string') validate('}');
	    }
	
	    if (node.allOf) {
	      node.allOf.forEach(function (sch) {
	        visit(name, dataSym, sch, reporter, filter);
	      });
	    }
	
	    if (node.anyOf && node.anyOf.length) {
	      var prev = gensym('prev');
	
	      node.anyOf.forEach(function (sch, i) {
	        if (i === 0) {
	          validate('var %s = errors', prev);
	        } else {
	          validate('if (errors !== %s) {', prev)('errors = %s', prev);
	        }
	        visit(name, dataSym, sch, false, false);
	      });
	      node.anyOf.forEach(function (sch, i) {
	        if (i) validate('}');
	      });
	      validate('if (%s !== errors) {', prev);
	      error('no schemas match');
	      validate('}');
	    }
	
	    if (node.oneOf && node.oneOf.length) {
	      var prev = gensym('prev');
	      var passes = gensym('passes');
	
	      validate('var %s = errors', prev)('var %s = 0', passes);
	
	      node.oneOf.forEach(function (sch, i) {
	        visit(name, dataSym, sch, false, false);
	        validate('if (%s === errors) {', prev)('%s++', passes)('} else {')('errors = %s', prev)('}');
	      });
	
	      validate('if (%s !== 1) {', passes);
	      error('no (or more than one) schemas match');
	      validate('}');
	    }
	
	    if (node.multipleOf !== undefined) {
	      if (type !== 'number' && type !== 'integer') validate('if (%s) {', types.number(dataSym));
	
	      var factor = (node.multipleOf | 0) !== node.multipleOf ? Math.pow(10, node.multipleOf.toString().split('.').pop().length) : 1;
	      if (factor > 1) validate('if ((%d*%s) % %d) {', factor, dataSym, factor * node.multipleOf);else validate('if (%s % %d) {', dataSym, node.multipleOf);
	
	      error('has a remainder');
	      validate('}');
	
	      if (type !== 'number' && type !== 'integer') validate('}');
	    }
	
	    if (node.maxProperties !== undefined) {
	      if (type !== 'object') validate('if (%s) {', types.object(dataSym));
	
	      validate('if (Object.keys(%s).length > %d) {', dataSym, node.maxProperties);
	      error('has more properties than allowed');
	      validate('}');
	
	      if (type !== 'object') validate('}');
	    }
	
	    if (node.minProperties !== undefined) {
	      if (type !== 'object') validate('if (%s) {', types.object(dataSym));
	
	      validate('if (Object.keys(%s).length < %d) {', dataSym, node.minProperties);
	      error('has less properties than allowed');
	      validate('}');
	
	      if (type !== 'object') validate('}');
	    }
	
	    if (node.maxItems !== undefined) {
	      if (type !== 'array') validate('if (%s) {', types.array(dataSym));
	
	      validate('if (%s.length > %d) {', dataSym, node.maxItems);
	      error('has more items than allowed');
	      validate('}');
	
	      if (type !== 'array') validate('}');
	    }
	
	    if (node.minItems !== undefined) {
	      if (type !== 'array') validate('if (%s) {', types.array(dataSym));
	
	      validate('if (%s.length < %d) {', dataSym, node.minItems);
	      error('has less items than allowed');
	      validate('}');
	
	      if (type !== 'array') validate('}');
	    }
	
	    if (node.maxLength !== undefined) {
	      if (type !== 'string') validate('if (%s) {', types.string(dataSym));
	
	      validate('if (%s.length > %d) {', dataSym, node.maxLength);
	      error('has longer length than allowed');
	      validate('}');
	
	      if (type !== 'string') validate('}');
	    }
	
	    if (node.minLength !== undefined) {
	      if (type !== 'string') validate('if (%s) {', types.string(dataSym));
	
	      validate('if (%s.length < %d) {', dataSym, node.minLength);
	      error('has less length than allowed');
	      validate('}');
	
	      if (type !== 'string') validate('}');
	    }
	
	    if (node.minimum !== undefined) {
	      validate('if (%s %s %d) {', dataSym, node.exclusiveMinimum ? '<=' : '<', node.minimum);
	      error('is less than minimum');
	      validate('}');
	    }
	
	    if (node.maximum !== undefined) {
	      validate('if (%s %s %d) {', dataSym, node.exclusiveMaximum ? '>=' : '>', node.maximum);
	      error('is more than maximum');
	      validate('}');
	    }
	
	    if (properties) {
	      Object.keys(properties).forEach(function (p) {
	        visit(genobj(name, p), genobj(dataSym, p), properties[p], reporter, filter);
	      });
	    }
	
	    while (indent--) validate('}');
	  };
	
	  var validate = genfun('function validate(data) {')('validate.errors = null')('var errors = 0');
	
	  visit('data', 'data', schema, reporter, opts && opts.filter);
	
	  validate('return errors === 0')('}');
	
	  validate = validate.toFunction(scope);
	  validate.errors = null;
	
	  validate.__defineGetter__('error', function () {
	    if (!validate.errors) return '';
	    return validate.errors.map(function (err) {
	      return err.field + ' ' + err.message;
	    }).join('\n');
	  });
	
	  validate.toJSON = function () {
	    return schema;
	  };
	
	  return validate;
	};
	
	module.exports = function (schema, opts) {
	  if (typeof schema === 'string') schema = JSON.parse(schema);
	  return compile(schema, {}, schema, true, opts);
	};
	
	module.exports.filter = function (schema, opts) {
	  var validate = module.exports(schema, xtend(opts, { filter: true }));
	  return function (sch) {
	    validate(sch);
	    return sch;
	  };
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var isProperty = __webpack_require__(4)
	
	var gen = function(obj, prop) {
	  return isProperty(prop) ? obj+'.'+prop : obj+'['+JSON.stringify(prop)+']'
	}
	
	gen.valid = isProperty
	gen.property = function (prop) {
	 return isProperty(prop) ? prop : JSON.stringify(prop)
	}
	
	module.exports = gen


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict"
	function isProperty(str) {
	  return /^[$A-Z\_a-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc][$A-Z\_a-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc0-9\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19b0-\u19c0\u19c8\u19c9\u19d0-\u19d9\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf2-\u1cf4\u1dc0-\u1de6\u1dfc-\u1dff\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua880\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8e0-\ua8f1\ua900-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f]*$/.test(str)
	}
	module.exports = isProperty

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(6)
	
	var INDENT_START = /[\{\[]/
	var INDENT_END = /[\}\]]/
	
	module.exports = function() {
	  var lines = []
	  var indent = 0
	
	  var push = function(str) {
	    var spaces = ''
	    while (spaces.length < indent*2) spaces += '  '
	    lines.push(spaces+str)
	  }
	
	  var line = function(fmt) {
	    if (!fmt) return line
	
	    if (INDENT_END.test(fmt.trim()[0]) && INDENT_START.test(fmt[fmt.length-1])) {
	      indent--
	      push(util.format.apply(util, arguments))
	      indent++
	      return line
	    }
	    if (INDENT_START.test(fmt[fmt.length-1])) {
	      push(util.format.apply(util, arguments))
	      indent++
	      return line
	    }
	    if (INDENT_END.test(fmt.trim()[0])) {
	      indent--
	      push(util.format.apply(util, arguments))
	      return line
	    }
	
	    push(util.format.apply(util, arguments))
	    return line
	  }
	
	  line.toString = function() {
	    return lines.join('\n')
	  }
	
	  line.toFunction = function(scope) {
	    var src = 'return ('+line.toString()+')'
	
	    var keys = Object.keys(scope || {}).map(function(key) {
	      return key
	    })
	
	    var vals = keys.map(function(key) {
	      return scope[key]
	    })
	
	    return Function.apply(null, keys.concat(src)).apply(null, vals)
	  }
	
	  if (arguments.length) line.apply(null, arguments)
	
	  return line
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process, console) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }
	
	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};
	
	
	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }
	
	  if (process.noDeprecation === true) {
	    return fn;
	  }
	
	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }
	
	  return deprecated;
	};
	
	
	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};
	
	
	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;
	
	
	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};
	
	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};
	
	
	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];
	
	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}
	
	
	function stylizeNoColor(str, styleType) {
	  return str;
	}
	
	
	function arrayToHash(array) {
	  var hash = {};
	
	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });
	
	  return hash;
	}
	
	
	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }
	
	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }
	
	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);
	
	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }
	
	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }
	
	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }
	
	  var base = '', array = false, braces = ['{', '}'];
	
	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }
	
	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }
	
	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }
	
	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }
	
	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }
	
	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }
	
	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }
	
	  ctx.seen.push(value);
	
	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }
	
	  ctx.seen.pop();
	
	  return reduceToSingleString(output, base, braces);
	}
	
	
	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}
	
	
	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}
	
	
	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}
	
	
	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }
	
	  return name + ': ' + str;
	}
	
	
	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);
	
	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }
	
	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}
	
	
	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;
	
	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;
	
	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;
	
	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;
	
	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;
	
	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;
	
	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;
	
	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;
	
	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;
	
	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;
	
	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;
	
	exports.isBuffer = __webpack_require__(9);
	
	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}
	
	
	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}
	
	
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];
	
	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}
	
	
	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};
	
	
	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(10);
	
	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;
	
	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};
	
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(7), __webpack_require__(8)))

/***/ },
/* 7 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            currentQueue[queueIndex].run();
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	// TODO(shtylman)
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 8 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {var console;
	if (typeof global !== "undefined" && global.console) {
	    console = global.console
	} else if (typeof window !== "undefined" && window.console) {
	    console = window.console
	} else {
	    console = window.console = {}
	}
	module.exports = console;
	for(var name in {log:1, info:1, error:1, warn:1, dir:1, trace:1, assert:1, time:1, timeEnd: 1})
		if(!console[name])
			console[name] = function() {};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var console = __webpack_require__(8);
	
	var untilde = function(str) {
	  return str.replace(/~./g, function(m) {
	    switch (m) {
	      case "~0":
	        return "~";
	      case "~1":
	        return "/";
	    }
	    throw("Invalid tilde escape: " + m);
	  });
	}
	
	var traverse = function(obj, pointer, value) {
	  // assert(isArray(pointer))
	  var part = untilde(pointer.shift());
	  if(typeof obj[part] === "undefined") {
	    throw("Value for pointer '" + pointer + "' not found.");
	    return;
	  }
	  if(pointer.length !== 0) { // keep traversin!
	    return traverse(obj[part], pointer, value);
	  }
	  // we're done
	  if(typeof value === "undefined") {
	    // just reading
	    return obj[part];
	  }
	  // set new value, return old value
	  var old_value = obj[part];
	  if(value === null) {
	    delete obj[part];
	  } else {
	    obj[part] = value;
	  }
	  return old_value;
	}
	
	var validate_input = function(obj, pointer) {
	  if(typeof obj !== "object") {
	    throw("Invalid input object.");
	  }
	
	  if(pointer === "") {
	    return [];
	  }
	
	  if(!pointer) {
	    throw("Invalid JSON pointer.");
	  }
	
	  pointer = pointer.split("/");
	  var first = pointer.shift();
	  if (first !== "") {
	    throw("Invalid JSON pointer.");
	  }
	
	  return pointer;
	}
	
	var get = function(obj, pointer) {
	  pointer = validate_input(obj, pointer);
	  if (pointer.length === 0) {
	    return obj;
	  }
	  return traverse(obj, pointer);
	}
	
	var set = function(obj, pointer, value) {
	  pointer = validate_input(obj, pointer);
	  if (pointer.length === 0) {
	    throw("Invalid JSON pointer for set.")
	  }
	  return traverse(obj, pointer, value);
	}
	
	exports.get = get
	exports.set = set


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = extend
	
	function extend() {
	    var target = {}
	
	    for (var i = 0; i < arguments.length; i++) {
	        var source = arguments[i]
	
	        for (var key in source) {
	            if (source.hasOwnProperty(key)) {
	                target[key] = source[key]
	            }
	        }
	    }
	
	    return target
	}


/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	exports['date-time'] = /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-[0-9]{2}[tT ]\d{2}:\d{2}:\d{2}(\.\d+)?([zZ]|[+-]\d{2}:\d{2})$/;
	exports['date'] = /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-[0-9]{2}$/;
	exports['time'] = /^\d{2}:\d{2}:\d{2}$/;
	exports['email'] = /^\S+@\S+$/;
	exports['ip-address'] = exports['ipv4'] = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
	exports['ipv6'] = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
	exports['uri'] = /^[a-zA-Z][a-zA-Z0-9+-.]*:[^\s]*$/;
	exports['color'] = /(#?([0-9A-Fa-f]{3,6})\b)|(aqua)|(black)|(blue)|(fuchsia)|(gray)|(green)|(lime)|(maroon)|(navy)|(olive)|(orange)|(purple)|(red)|(silver)|(teal)|(white)|(yellow)|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\))/;
	exports['hostname'] = /^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])(\.([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9]))*$/;
	exports['alpha'] = /^[a-zA-Z]+$/;
	exports['alphanumeric'] = /^[a-zA-Z0-9]+$/;
	exports['style'] = /\s*(.+?):\s*([^;]+);?/g;
	exports['phone'] = /^\+(?:[0-9] ?){6,14}[0-9]$/;
	exports['utc-millisec'] = /^[0-9]+(\.?[0-9]+)?$/;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @copyright 2015, Prometheus Research, LLC
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Component2 = __webpack_require__(16);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var Fieldset = (function (_Component) {
	  function Fieldset() {
	    _classCallCheck(this, Fieldset);
	
	    _get(Object.getPrototypeOf(Fieldset.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _inherits(Fieldset, _Component);
	
	  _createClass(Fieldset, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var Component = _props.component;
	
	      var props = _objectWithoutProperties(_props, ['component']);
	
	      return _react2['default'].createElement(Component, props);
	    }
	  }], [{
	    key: 'propTypes',
	    value: _extends({}, _Component3['default'].propTypes, {
	      children: _react.PropTypes.node,
	      component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element])
	    }),
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      component: 'div'
	    },
	    enumerable: true
	  }]);
	
	  return Fieldset;
	})(_Component3['default']);
	
	exports['default'] = Fieldset;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @copyright 2015, Prometheus Research, LLC
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _invariant = __webpack_require__(17);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _keyPath = __webpack_require__(18);
	
	var _keyPath2 = _interopRequireDefault(_keyPath);
	
	var hasParentContext = !!/0\.14\.[0-9]+/.exec(_react2['default'].version);
	
	var ContextTypes = {
	  formValue: _react.PropTypes.object
	};
	
	exports.ContextTypes = ContextTypes;
	var selectPropType = _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.bool]);
	
	/**
	 * Base class for form components.
	 *
	 * It exposes form value via `this.formValue` which is provided either via
	 * `this.props.formValue` or via context.
	 */
	
	var Component = (function (_React$Component) {
	  function Component() {
	    _classCallCheck(this, Component);
	
	    _get(Object.getPrototypeOf(Component.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _inherits(Component, _React$Component);
	
	  _createClass(Component, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return { formValue: this.formValue };
	    }
	  }, {
	    key: '_parentContext',
	    get: function get() {
	      if (hasParentContext) {
	        return this.context;
	      } else {
	        return this._reactInternalInstance._context;
	      }
	    }
	  }, {
	    key: 'formValue',
	    get: function get() {
	      var formValue = this.props.formValue || this._parentContext.formValue;
	
	      (0, _invariant2['default'])(formValue, 'A form component <%s /> should receive form value via props ' + 'or be used as a part of element hierarchy which ' + 'includes <Form /> component in its ancestors', this.constructor.displayName || this.constructor.name);
	
	      var select = this.props.select || this.props.selectFormValue;
	      // We check for select !== true to keep compatability we eariler
	      // versions of React Forms where we needed to rebuild element tree to
	      // propagate values to form.
	      if (select && select !== true) {
	        select = (0, _keyPath2['default'])(select);
	        formValue = formValue.select(select);
	      }
	
	      return formValue;
	    }
	  }], [{
	    key: 'contextTypes',
	    value: ContextTypes,
	    enumerable: true
	  }, {
	    key: 'childContextTypes',
	    value: ContextTypes,
	    enumerable: true
	  }, {
	    key: 'propTypes',
	    value: {
	      formValue: _react.PropTypes.object,
	      select: selectPropType,
	      selectFormValue: selectPropType
	    },
	    enumerable: true
	  }]);
	
	  return Component;
	})(_react2['default'].Component);
	
	exports['default'] = Component;

/***/ },
/* 17 */
/***/ function(module, exports) {

	/**
	 * @copyright 2015, Prometheus Research, LLC
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = invariant;
	
	function invariant(cond, msg, a, b, c, d, e, f) {
	  // eslint-disable-line max-params
	  if (!cond) {
	    if (msg) {
	      (function () {
	        var replacements = [a, b, c, d, e, f];
	        var idx = 0;
	        msg = msg.replace(/%s/g, function () {
	          return replacements[idx++];
	        });
	        throw new Error('Invariant violation: ' + msg);
	      })();
	    } else {
	      throw new Error('Invariant violation');
	    }
	  }
	}
	
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @copyright 2015, Prometheus Research, LLC
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = keyPath;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _lodashLangIsString = __webpack_require__(19);
	
	var _lodashLangIsString2 = _interopRequireDefault(_lodashLangIsString);
	
	var _lodashLangIsArray = __webpack_require__(21);
	
	var _lodashLangIsArray2 = _interopRequireDefault(_lodashLangIsArray);
	
	var _invariant = __webpack_require__(17);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var IS_NUMBER = /[0-9]+/;
	
	function tryParseInt(v) {
	  if (typeof v === 'string' && IS_NUMBER.exec(v)) {
	    v = parseInt(v, 10);
	  }
	  return v;
	}
	
	function keyPath(value) {
	  if ((0, _lodashLangIsArray2['default'])(value)) {
	    return value;
	  } else if ((0, _lodashLangIsString2['default'])(value)) {
	    if (value.indexOf('.') !== -1) {
	      value = value.split('.').filter(Boolean).map(tryParseInt);
	    } else {
	      value = [tryParseInt(value)];
	    }
	    return value;
	  } else if (typeof value === 'number') {
	    return [value];
	  } else {
	    (0, _invariant2['default'])(false, 'keyPath can be either an array or string, got: %s', value);
	  }
	}
	
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(20);
	
	/** `Object#toString` result references. */
	var stringTag = '[object String]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' || (isObjectLike(value) && objToString.call(value) == stringTag);
	}
	
	module.exports = isString;


/***/ },
/* 20 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(22),
	    isLength = __webpack_require__(26),
	    isObjectLike = __webpack_require__(20);
	
	/** `Object#toString` result references. */
	var arrayTag = '[object Array]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};
	
	module.exports = isArray;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(23);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var escapeRegExp = __webpack_require__(24),
	    isObjectLike = __webpack_require__(20);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]';
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  escapeRegExp(fnToString.call(hasOwnProperty))
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (objToString.call(value) == funcTag) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = isNative;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(25);
	
	/**
	 * Used to match `RegExp` [special characters](http://www.regular-expressions.info/characters.html#special).
	 * In addition to special characters the forward slash is escaped to allow for
	 * easier `eval` use and `Function` compilation.
	 */
	var reRegExpChars = /[.*+?^${}()|[\]\/\\]/g,
	    reHasRegExpChars = RegExp(reRegExpChars.source);
	
	/**
	 * Escapes the `RegExp` special characters "\", "/", "^", "$", ".", "|", "?",
	 * "*", "+", "(", ")", "[", "]", "{" and "}" in `string`.
	 *
	 * @static
	 * @memberOf _
	 * @category String
	 * @param {string} [string=''] The string to escape.
	 * @returns {string} Returns the escaped string.
	 * @example
	 *
	 * _.escapeRegExp('[lodash](https://lodash.com/)');
	 * // => '\[lodash\]\(https:\/\/lodash\.com\/\)'
	 */
	function escapeRegExp(string) {
	  string = baseToString(string);
	  return (string && reHasRegExpChars.test(string))
	    ? string.replace(reRegExpChars, '\\$&')
	    : string;
	}
	
	module.exports = escapeRegExp;


/***/ },
/* 25 */
/***/ function(module, exports) {

	/**
	 * Converts `value` to a string if it's not one. An empty string is returned
	 * for `null` or `undefined` values.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  if (typeof value == 'string') {
	    return value;
	  }
	  return value == null ? '' : (value + '');
	}
	
	module.exports = baseToString;


/***/ },
/* 26 */
/***/ function(module, exports) {

	/**
	 * Used as the [maximum length](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @copyright 2015, Prometheus Research, LLC
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Input = __webpack_require__(28);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _ErrorList = __webpack_require__(33);
	
	var _ErrorList2 = _interopRequireDefault(_ErrorList);
	
	var _Component2 = __webpack_require__(16);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function renderLabel(label) {
	  return label && _react2['default'].createElement(
	    'label',
	    null,
	    label
	  );
	}
	
	function renderErrorList(formValue) {
	  return _react2['default'].createElement(_ErrorList2['default'], { formValue: formValue });
	}
	
	var Field = (function (_Component) {
	  function Field(props) {
	    var _this = this;
	
	    _classCallCheck(this, Field);
	
	    _get(Object.getPrototypeOf(Field.prototype), 'constructor', this).call(this, props);
	
	    this.onBlur = function () {
	      _this.setState({ dirty: true });
	    };
	
	    this.onChange = function (e) {
	      var value = undefined;
	      if (e && e.target && e.target.value !== undefined) {
	        e.stopPropagation();
	        value = e.target.value;
	        if (value === '') {
	          value = undefined;
	        }
	      } else {
	        value = e;
	      }
	      _this.setState({ dirty: true });
	      _this.props.formValue.update(value);
	    };
	
	    this.state = { dirty: false };
	  }
	
	  _inherits(Field, _Component);
	
	  _createClass(Field, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var renderLabel = _props.renderLabel;
	      var renderErrorList = _props.renderErrorList;
	      var dirty = this.state.dirty;
	      var _formValue = this.formValue;
	      var schema = _formValue.schema;
	      var value = _formValue.value;
	      var errors = _formValue.errors;
	      var params = _formValue.params;
	
	      var showErrors = dirty || params.forceShowErrors;
	      children = _react2['default'].cloneElement(_react2['default'].Children.only(children), { value: value, onChange: this.onChange });
	      var label = this.props.label || schema.label;
	      return _react2['default'].createElement(
	        'div',
	        { onBlur: this.onBlur },
	        renderLabel(label, schema),
	        children,
	        showErrors && renderErrorList(this.formValue)
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: _extends({}, _Component3['default'].propTypes, {
	      label: _react.PropTypes.string,
	      children: _react.PropTypes.element,
	      renderLabel: _react.PropTypes.func,
	      renderErrorList: _react.PropTypes.func
	    }),
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      children: _react2['default'].createElement(_Input2['default'], { type: 'text' }),
	      renderLabel: renderLabel,
	      renderErrorList: renderErrorList
	    },
	    enumerable: true
	  }]);
	
	  return Field;
	})(_Component3['default']);
	
	exports['default'] = Field;
	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @copyright 2015, Prometheus Research, LLC
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodashFunctionDebounce = __webpack_require__(29);
	
	var _lodashFunctionDebounce2 = _interopRequireDefault(_lodashFunctionDebounce);
	
	var _emptyFunction = __webpack_require__(32);
	
	var _emptyFunction2 = _interopRequireDefault(_emptyFunction);
	
	/**
	 * Input component with debounce.
	 */
	
	var Input = (function (_React$Component) {
	  function Input(props) {
	    var _this = this;
	
	    _classCallCheck(this, Input);
	
	    _get(Object.getPrototypeOf(Input.prototype), 'constructor', this).call(this, props);
	
	    this.onChange = function (e) {
	      var value = e && e.target && 'value' in e.target ? e.target.value : e;
	      _this.scheduleOnChange(value);
	    };
	
	    this.state = { value: props.value };
	    this._expectedValue = undefined;
	    this._scheduleOnChange = props.debounce ? (0, _lodashFunctionDebounce2['default'])(Input.prototype._scheduleOnChange.bind(this), props.debounce) : Input.prototype._scheduleOnChange.bind(this);
	  }
	
	  _inherits(Input, _React$Component);
	
	  _createClass(Input, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var Element = _props.element;
	      var debounceEnabled = _props.debounce;
	      var value = _props.value;
	
	      var props = _objectWithoutProperties(_props, ['element', 'debounce', 'value']);
	
	      if (debounceEnabled) {
	        value = this.state.value;
	      }
	      return _react2['default'].createElement(Element, _extends({}, props, { value: value, onChange: this.onChange }));
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.value !== this._expectedValue) {
	        this.cancelOnChange();
	      }
	      if (nextProps.debounce !== this.props.debounce) {
	        this.cancelOnChange();
	        this._scheduleOnChange = nextProps.debounce ? (0, _lodashFunctionDebounce2['default'])(Input.prototype._scheduleOnChange.bind(this), nextProps.debounce) : Input.prototype._scheduleOnChange.bind(this);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.cancelOnChange();
	    }
	  }, {
	    key: '_scheduleOnChange',
	    value: function _scheduleOnChange() {
	      var value = this._expectedValue;
	      this._expectedValue = undefined;
	      this.props.onChange(value);
	    }
	  }, {
	    key: 'scheduleOnChange',
	    value: function scheduleOnChange(value) {
	      this.setState({ value: value });
	      this._expectedValue = value;
	      this._scheduleOnChange();
	    }
	  }, {
	    key: 'cancelOnChange',
	    value: function cancelOnChange() {
	      if (this._scheduleOnChange.cancel) {
	        this._expectedValue = undefined;
	        this._scheduleOnChange.cancel();
	      }
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      element: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
	      debounce: _react.PropTypes.number,
	      value: _react.PropTypes.any,
	      onChange: _react.PropTypes.func
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      element: 'input',
	      debounce: 100,
	      onChange: _emptyFunction2['default']
	    },
	    enumerable: true
	  }]);
	
	  return Input;
	})(_react2['default'].Component);
	
	exports['default'] = Input;
	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(30),
	    now = __webpack_require__(31);
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed invocations. Provide an options object to indicate that `func`
	 * should be invoked on the leading and/or trailing edge of the `wait` timeout.
	 * Subsequent calls to the debounced function return the result of the last
	 * `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	 * on the trailing edge of the timeout only if the the debounced function is
	 * invoked more than once during the `wait` timeout.
	 *
	 * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options] The options object.
	 * @param {boolean} [options.leading=false] Specify invoking on the leading
	 *  edge of the timeout.
	 * @param {number} [options.maxWait] The maximum time `func` is allowed to be
	 *  delayed before it is invoked.
	 * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	 *  edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // avoid costly calculations while the window size is in flux
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // invoke `sendMail` when the click event is fired, debouncing subsequent calls
	 * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // ensure `batchLog` is invoked once after 1 second of debounced calls
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', _.debounce(batchLog, 250, {
	 *   'maxWait': 1000
	 * }));
	 *
	 * // cancel a debounced call
	 * var todoChanges = _.debounce(batchLog, 1000);
	 * Object.observe(models.todo, todoChanges);
	 *
	 * Object.observe(models, function(changes) {
	 *   if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {
	 *     todoChanges.cancel();
	 *   }
	 * }, ['delete']);
	 *
	 * // ...at some point `models.todo` is changed
	 * models.todo.completed = true;
	 *
	 * // ...before 1 second has passed `models.todo` is deleted
	 * // which cancels the debounced `todoChanges` call
	 * delete models.todo;
	 */
	function debounce(func, wait, options) {
	  var args,
	      maxTimeoutId,
	      result,
	      stamp,
	      thisArg,
	      timeoutId,
	      trailingCall,
	      lastCalled = 0,
	      maxWait = false,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = wait < 0 ? 0 : (+wait || 0);
	  if (options === true) {
	    var leading = true;
	    trailing = false;
	  } else if (isObject(options)) {
	    leading = options.leading;
	    maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
	    trailing = 'trailing' in options ? options.trailing : trailing;
	  }
	
	  function cancel() {
	    if (timeoutId) {
	      clearTimeout(timeoutId);
	    }
	    if (maxTimeoutId) {
	      clearTimeout(maxTimeoutId);
	    }
	    maxTimeoutId = timeoutId = trailingCall = undefined;
	  }
	
	  function delayed() {
	    var remaining = wait - (now() - stamp);
	    if (remaining <= 0 || remaining > wait) {
	      if (maxTimeoutId) {
	        clearTimeout(maxTimeoutId);
	      }
	      var isCalled = trailingCall;
	      maxTimeoutId = timeoutId = trailingCall = undefined;
	      if (isCalled) {
	        lastCalled = now();
	        result = func.apply(thisArg, args);
	        if (!timeoutId && !maxTimeoutId) {
	          args = thisArg = null;
	        }
	      }
	    } else {
	      timeoutId = setTimeout(delayed, remaining);
	    }
	  }
	
	  function maxDelayed() {
	    if (timeoutId) {
	      clearTimeout(timeoutId);
	    }
	    maxTimeoutId = timeoutId = trailingCall = undefined;
	    if (trailing || (maxWait !== wait)) {
	      lastCalled = now();
	      result = func.apply(thisArg, args);
	      if (!timeoutId && !maxTimeoutId) {
	        args = thisArg = null;
	      }
	    }
	  }
	
	  function debounced() {
	    args = arguments;
	    stamp = now();
	    thisArg = this;
	    trailingCall = trailing && (timeoutId || !leading);
	
	    if (maxWait === false) {
	      var leadingCall = leading && !timeoutId;
	    } else {
	      if (!maxTimeoutId && !leading) {
	        lastCalled = stamp;
	      }
	      var remaining = maxWait - (stamp - lastCalled),
	          isCalled = remaining <= 0 || remaining > maxWait;
	
	      if (isCalled) {
	        if (maxTimeoutId) {
	          maxTimeoutId = clearTimeout(maxTimeoutId);
	        }
	        lastCalled = stamp;
	        result = func.apply(thisArg, args);
	      }
	      else if (!maxTimeoutId) {
	        maxTimeoutId = setTimeout(maxDelayed, remaining);
	      }
	    }
	    if (isCalled && timeoutId) {
	      timeoutId = clearTimeout(timeoutId);
	    }
	    else if (!timeoutId && wait !== maxWait) {
	      timeoutId = setTimeout(delayed, wait);
	    }
	    if (leadingCall) {
	      isCalled = true;
	      result = func.apply(thisArg, args);
	    }
	    if (isCalled && !timeoutId && !maxTimeoutId) {
	      args = thisArg = null;
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  return debounced;
	}
	
	module.exports = debounce;


/***/ },
/* 30 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(22);
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeNow = getNative(Date, 'now');
	
	/**
	 * Gets the number of milliseconds that have elapsed since the Unix epoch
	 * (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @category Date
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => logs the number of milliseconds it took for the deferred function to be invoked
	 */
	var now = nativeNow || function() {
	  return new Date().getTime();
	};
	
	module.exports = now;


/***/ },
/* 32 */
/***/ function(module, exports) {

	/**
	 * @jsx React.DOM
	 */
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = emptyFunction;
	exports.thatReturnsTrue = thatReturnsTrue;
	exports.thatReturnsNull = thatReturnsNull;
	exports.thatReturnsArgument = thatReturnsArgument;
	
	function emptyFunction() {}
	
	function thatReturnsTrue() {
	  return true;
	}
	
	function thatReturnsNull() {
	  return null;
	}
	
	function thatReturnsArgument(arg) {
	  return arg;
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @copyright 2015, Prometheus Research, LLC
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Component2 = __webpack_require__(16);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function renderError(error, index, errorList, props) {
	  var label = props.label || error.schema && error.schema.label;
	  if (props.complete && !props.noLabel && label) {
	    return _react2['default'].createElement(
	      'li',
	      null,
	      error.schema.label,
	      ': ',
	      error.message
	    );
	  } else {
	    return _react2['default'].createElement(
	      'li',
	      null,
	      error.message
	    );
	  }
	}
	
	var ErrorList = (function (_Component) {
	  function ErrorList() {
	    _classCallCheck(this, ErrorList);
	
	    _get(Object.getPrototypeOf(ErrorList.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _inherits(ErrorList, _Component);
	
	  _createClass(ErrorList, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var renderError = _props.renderError;
	      var complete = _props.complete;
	      var schemaType = _props.schemaType;
	
	      var props = _objectWithoutProperties(_props, ['renderError', 'complete', 'schemaType']);
	
	      var errorList = complete ? this.formValue.completeErrorList : this.formValue.errorList;
	      if (schemaType !== undefined) {
	        errorList = errorList.filter(function (error) {
	          return error.schema ? schemaType[error.schema.type] : schemaType.none;
	        });
	      }
	      var items = errorList.map(this.renderError, this);
	      return items.length > 0 ? _react2['default'].createElement(
	        'ul',
	        props,
	        items
	      ) : null;
	    }
	  }, {
	    key: 'renderError',
	    value: function renderError(error, index, errorList) {
	      var element = this.props.renderError(error, index, errorList, this.props);
	      var key = error.field + '__' + index;
	      return _react2['default'].cloneElement(element, { key: key });
	    }
	  }], [{
	    key: 'propTypes',
	    value: _extends({}, _Component3['default'].propTypes, {
	
	      /**
	       * Renderer for error items.
	       */
	      renderError: _react.PropTypes.func,
	
	      /**
	       * If component should render errors from all the subvalues.
	       */
	      complete: _react.PropTypes.bool,
	
	      /**
	       * Restrict schema types
	       */
	      schemaType: _react.PropTypes.object,
	
	      noLabel: _react.PropTypes.bool,
	
	      label: _react.PropTypes.string
	    }),
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      renderError: renderError
	    },
	    enumerable: true
	  }]);
	
	  return ErrorList;
	})(_Component3['default']);
	
	exports['default'] = ErrorList;
	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(console) {/**
	 * @copyright 2015, Prometheus Research, LLC
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();
	
	var _get = function get(_x5, _x6, _x7) { var _again = true; _function: while (_again) { var object = _x5, property = _x6, receiver = _x7; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x5 = parent; _x6 = property; _x7 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	exports.isValue = isValue;
	exports['default'] = createValue;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _memoizeDecorator = __webpack_require__(35);
	
	var _memoizeDecorator2 = _interopRequireDefault(_memoizeDecorator);
	
	var _lodashLangCloneDeep = __webpack_require__(36);
	
	var _lodashLangCloneDeep2 = _interopRequireDefault(_lodashLangCloneDeep);
	
	var _lodashObjectGet = __webpack_require__(61);
	
	var _lodashObjectGet2 = _interopRequireDefault(_lodashObjectGet);
	
	var _lodashObjectSet = __webpack_require__(64);
	
	var _lodashObjectSet2 = _interopRequireDefault(_lodashObjectSet);
	
	var _keyPath2 = __webpack_require__(18);
	
	var _keyPath3 = _interopRequireDefault(_keyPath2);
	
	var _Schema = __webpack_require__(1);
	
	var _emptyFunction = __webpack_require__(32);
	
	var _emptyFunction2 = _interopRequireDefault(_emptyFunction);
	
	var Value = (function () {
	  function Value() {
	    _classCallCheck(this, Value);
	  }
	
	  _createClass(Value, [{
	    key: 'select',
	    value: function select(key) {
	      var keyPath = this.keyPath.concat((0, _keyPath3['default'])(key));
	      return new ValueLeaf(this._root, keyPath);
	    }
	  }, {
	    key: 'set',
	    value: function set(value, quiet) {
	      console.warn( // eslint-disable-line no-console
	      'Value.prototype.set(value) is deprecated, ' + 'use Value.prototype.update(value) instead');
	      return this.update(value, quiet);
	    }
	  }, {
	    key: 'update',
	    value: function update(value, quiet) {
	      var rootValue = (0, _lodashLangCloneDeep2['default'])(this._root.value);
	      if (this.keyPath.length === 0) {
	        rootValue = value;
	      } else {
	        rootValue = (0, _lodashObjectSet2['default'])(rootValue, this.keyPath, value);
	      }
	      var nextRoot = createValue(this._root.schema, rootValue, this._root.onChange, this._root.params);
	      if (!quiet) {
	        this._root.onChange(nextRoot);
	      }
	      return nextRoot;
	    }
	  }]);
	
	  return Value;
	})();
	
	exports.Value = Value;
	
	var ValueRoot = (function (_Value) {
	  function ValueRoot(schema, value, onChange, params, errorList) {
	    _classCallCheck(this, ValueRoot);
	
	    _get(Object.getPrototypeOf(ValueRoot.prototype), 'constructor', this).call(this);
	    this.keyPath = [];
	    this.parent = null;
	    this._root = this;
	    this.keyPath = [];
	    this.schema = schema;
	    this.value = value;
	    this.onChange = onChange;
	    this.params = params;
	    this.errorList = errorList.filter(function (error) {
	      return error.field === 'data';
	    });
	    this.completeErrorList = errorList;
	  }
	
	  _inherits(ValueRoot, _Value);
	
	  return ValueRoot;
	})(Value);
	
	var ValueLeaf = (function (_Value2) {
	  function ValueLeaf(root, keyPath) {
	    _classCallCheck(this, ValueLeaf);
	
	    _get(Object.getPrototypeOf(ValueLeaf.prototype), 'constructor', this).call(this);
	    this._root = root;
	    this.keyPath = keyPath;
	    this.schema = (0, _Schema.select)(root.schema, keyPath);
	    this.value = (0, _lodashObjectGet2['default'])(root.value, keyPath);
	  }
	
	  _inherits(ValueLeaf, _Value2);
	
	  _createDecoratedClass(ValueLeaf, [{
	    key: 'params',
	    get: function get() {
	      return this._root.params;
	    }
	  }, {
	    key: 'errorList',
	    decorators: [_memoizeDecorator2['default']],
	    get: function get() {
	      var errorKeyPath = 'data.' + this.keyPath.join('.');
	      return this._root.completeErrorList.filter(function (error) {
	        return error.field === errorKeyPath;
	      });
	    }
	  }, {
	    key: 'completeErrorList',
	    decorators: [_memoizeDecorator2['default']],
	    get: function get() {
	      var errorKeyPath = 'data.' + this.keyPath.join('.');
	      var length = errorKeyPath.length;
	      return this._root.completeErrorList.filter(function (error) {
	        return error.field.slice(0, length) === errorKeyPath;
	      });
	    }
	  }, {
	    key: 'parent',
	    get: function get() {
	      if (this.keyPath.length === 1) {
	        return this._root;
	      } else {
	        var _keyPath = this.keyPath.slice();
	        _keyPath.pop();
	        return new ValueLeaf(this._root, _keyPath);
	      }
	    }
	  }]);
	
	  return ValueLeaf;
	})(Value);
	
	var NON_ENUMERABLE_PROP = {
	  enumerable: false,
	  writable: true,
	  configurable: true
	};
	
	function cache(obj, key, value) {
	  Object.defineProperty(obj, key, _extends({}, NON_ENUMERABLE_PROP, { value: value }));
	}
	
	function validate(schema, value) {
	  if (!schema) {
	    return [];
	  }
	  if (value.__schema === schema && value.__errorList) {
	    return value.__errorList;
	  } else {
	    if (schema.__validator === undefined) {
	      cache(schema, '__validator', (0, _Schema.createValidator)(schema, { formats: schema.formats }));
	    }
	    schema.__validator(value);
	    var errorList = schema.__validator.errors || [];
	    cache(value, '__schema', schema);
	    cache(value, '__errorList', errorList);
	    return errorList;
	  }
	}
	
	/**
	 * Check if value is a form value.
	 */
	
	function isValue(maybeValue) {
	  return maybeValue instanceof Value;
	}
	
	/**
	 * Create a new root value.
	 */
	
	function createValue(schema) {
	  var value = arguments[1] === undefined ? {} : arguments[1];
	  var onChange = arguments[2] === undefined ? _emptyFunction2['default'] : arguments[2];
	  var params = arguments[3] === undefined ? {} : arguments[3];
	  var errorList = arguments[4] === undefined ? null : arguments[4];
	
	  if (errorList === null) {
	    errorList = validate(schema, value);
	  }
	  return new ValueRoot(schema, value, onChange, params, errorList);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = memoize;
	/**
	 * @copyright 2015, Andrey Popp <8mayday@gmail.com>
	 */
	
	var SENTINEL = {};
	
	function memoize(target, name, descriptor) {
	  if (typeof descriptor.value === 'function') {
	    return _memoizeMethod(target, name, descriptor);
	  } else if (typeof descriptor.get === 'function') {
	    return _memoizeGetter(target, name, descriptor);
	  } else {
	    throw new Error('@memoize decorator can be applied to methods or getters, got ' + String(descriptor.value) + ' instead');
	  }
	}
	
	function _memoizeGetter(target, name, descriptor) {
	  var memoizedName = '_memoized_' + name;
	  var get = descriptor.get;
	  target[memoizedName] = SENTINEL;
	  return _extends({}, descriptor, {
	    get: (function (_get) {
	      function get() {
	        return _get.apply(this, arguments);
	      }
	
	      get.toString = function () {
	        return _get.toString();
	      };
	
	      return get;
	    })(function () {
	      if (this[memoizedName] === SENTINEL) {
	        this[memoizedName] = get.call(this);
	      }
	      return this[memoizedName];
	    })
	  });
	}
	
	function _memoizeMethod(target, name, descriptor) {
	  if (descriptor.value.length > 0) {
	    throw new Error('@memoize decorator can only be applied to methods of zero arguments');
	  }
	  var memoizedName = '_memoized_' + name;
	  var value = descriptor.value;
	  target[memoizedName] = SENTINEL;
	  return _extends({}, descriptor, {
	    value: (function (_value) {
	      function value() {
	        return _value.apply(this, arguments);
	      }
	
	      value.toString = function () {
	        return _value.toString();
	      };
	
	      return value;
	    })(function () {
	      if (this[memoizedName] === SENTINEL) {
	        this[memoizedName] = value.call(this);
	      }
	      return this[memoizedName];
	    })
	  });
	}
	module.exports = exports['default'];


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var baseClone = __webpack_require__(37),
	    bindCallback = __webpack_require__(59);
	
	/**
	 * Creates a deep clone of `value`. If `customizer` is provided it is invoked
	 * to produce the cloned values. If `customizer` returns `undefined` cloning
	 * is handled by the method instead. The `customizer` is bound to `thisArg`
	 * and invoked with two argument; (value [, index|key, object]).
	 *
	 * **Note:** This method is loosely based on the
	 * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
	 * The enumerable properties of `arguments` objects and objects created by
	 * constructors other than `Object` are cloned to plain `Object` objects. An
	 * empty object is returned for uncloneable values such as functions, DOM nodes,
	 * Maps, Sets, and WeakMaps.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to deep clone.
	 * @param {Function} [customizer] The function to customize cloning values.
	 * @param {*} [thisArg] The `this` binding of `customizer`.
	 * @returns {*} Returns the deep cloned value.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney' },
	 *   { 'user': 'fred' }
	 * ];
	 *
	 * var deep = _.cloneDeep(users);
	 * deep[0] === users[0];
	 * // => false
	 *
	 * // using a customizer callback
	 * var el = _.cloneDeep(document.body, function(value) {
	 *   if (_.isElement(value)) {
	 *     return value.cloneNode(true);
	 *   }
	 * });
	 *
	 * el === document.body
	 * // => false
	 * el.nodeName
	 * // => BODY
	 * el.childNodes.length;
	 * // => 20
	 */
	function cloneDeep(value, customizer, thisArg) {
	  return typeof customizer == 'function'
	    ? baseClone(value, true, bindCallback(customizer, thisArg, 1))
	    : baseClone(value, true);
	}
	
	module.exports = cloneDeep;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var arrayCopy = __webpack_require__(38),
	    arrayEach = __webpack_require__(39),
	    baseAssign = __webpack_require__(40),
	    baseForOwn = __webpack_require__(50),
	    initCloneArray = __webpack_require__(54),
	    initCloneByTag = __webpack_require__(55),
	    initCloneObject = __webpack_require__(58),
	    isArray = __webpack_require__(21),
	    isObject = __webpack_require__(30);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] =
	cloneableTags[arrayBufferTag] = cloneableTags[boolTag] =
	cloneableTags[dateTag] = cloneableTags[float32Tag] =
	cloneableTags[float64Tag] = cloneableTags[int8Tag] =
	cloneableTags[int16Tag] = cloneableTags[int32Tag] =
	cloneableTags[numberTag] = cloneableTags[objectTag] =
	cloneableTags[regexpTag] = cloneableTags[stringTag] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] =
	cloneableTags[mapTag] = cloneableTags[setTag] =
	cloneableTags[weakMapTag] = false;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * The base implementation of `_.clone` without support for argument juggling
	 * and `this` binding `customizer` functions.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @param {Function} [customizer] The function to customize cloning values.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The object `value` belongs to.
	 * @param {Array} [stackA=[]] Tracks traversed source objects.
	 * @param {Array} [stackB=[]] Associates clones with source counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, isDeep, customizer, key, object, stackA, stackB) {
	  var result;
	  if (customizer) {
	    result = object ? customizer(value, key, object) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return arrayCopy(value, result);
	    }
	  } else {
	    var tag = objToString.call(value),
	        isFunc = tag == funcTag;
	
	    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	      result = initCloneObject(isFunc ? {} : value);
	      if (!isDeep) {
	        return baseAssign(result, value);
	      }
	    } else {
	      return cloneableTags[tag]
	        ? initCloneByTag(value, tag, isDeep)
	        : (object ? value : {});
	    }
	  }
	  // Check for circular references and return corresponding clone.
	  stackA || (stackA = []);
	  stackB || (stackB = []);
	
	  var length = stackA.length;
	  while (length--) {
	    if (stackA[length] == value) {
	      return stackB[length];
	    }
	  }
	  // Add the source value to the stack of traversed objects and associate it with its clone.
	  stackA.push(value);
	  stackB.push(result);
	
	  // Recursively populate clone (susceptible to call stack limits).
	  (isArr ? arrayEach : baseForOwn)(value, function(subValue, key) {
	    result[key] = baseClone(subValue, isDeep, customizer, key, value, stackA, stackB);
	  });
	  return result;
	}
	
	module.exports = baseClone;


/***/ },
/* 38 */
/***/ function(module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function arrayCopy(source, array) {
	  var index = -1,
	      length = source.length;
	
	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}
	
	module.exports = arrayCopy;


/***/ },
/* 39 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}
	
	module.exports = arrayEach;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var baseCopy = __webpack_require__(41),
	    keys = __webpack_require__(42);
	
	/**
	 * The base implementation of `_.assign` without support for argument juggling,
	 * multiple sources, and `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return source == null
	    ? object
	    : baseCopy(source, keys(source), object);
	}
	
	module.exports = baseAssign;


/***/ },
/* 41 */
/***/ function(module, exports) {

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property names to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @returns {Object} Returns `object`.
	 */
	function baseCopy(source, props, object) {
	  object || (object = {});
	
	  var index = -1,
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index];
	    object[key] = source[key];
	  }
	  return object;
	}
	
	module.exports = baseCopy;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(22),
	    isArrayLike = __webpack_require__(43),
	    isObject = __webpack_require__(30),
	    shimKeys = __webpack_require__(46);
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function(object) {
	  var Ctor = object == null ? null : object.constructor;
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object != 'function' && isArrayLike(object))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};
	
	module.exports = keys;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(44),
	    isLength = __webpack_require__(26);
	
	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}
	
	module.exports = isArrayLike;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(45);
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	module.exports = getLength;


/***/ },
/* 45 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(47),
	    isArray = __webpack_require__(21),
	    isIndex = __webpack_require__(48),
	    isLength = __webpack_require__(26),
	    keysIn = __webpack_require__(49);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;
	
	  var allowIndexes = !!length && isLength(length) &&
	    (isArray(object) || isArguments(object));
	
	  var index = -1,
	      result = [];
	
	  while (++index < propsLength) {
	    var key = props[index];
	    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = shimKeys;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(43),
	    isObjectLike = __webpack_require__(20);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  return isObjectLike(value) && isArrayLike(value) && objToString.call(value) == argsTag;
	}
	
	module.exports = isArguments;


/***/ },
/* 48 */
/***/ function(module, exports) {

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/**
	 * Used as the [maximum length](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	module.exports = isIndex;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(47),
	    isArray = __webpack_require__(21),
	    isIndex = __webpack_require__(48),
	    isLength = __webpack_require__(26),
	    isObject = __webpack_require__(30);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;
	
	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;
	
	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keysIn;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(51),
	    keys = __webpack_require__(42);
	
	/**
	 * The base implementation of `_.forOwn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return baseFor(object, iteratee, keys);
	}
	
	module.exports = baseForOwn;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(52);
	
	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();
	
	module.exports = baseFor;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(53);
	
	/**
	 * Creates a base function for `_.forIn` or `_.forInRight`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var iterable = toObject(object),
	        props = keysFunc(object),
	        length = props.length,
	        index = fromRight ? length : -1;
	
	    while ((fromRight ? index-- : ++index < length)) {
	      var key = props[index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}
	
	module.exports = createBaseFor;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(30);
	
	/**
	 * Converts `value` to an object if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Object} Returns the object.
	 */
	function toObject(value) {
	  return isObject(value) ? value : Object(value);
	}
	
	module.exports = toObject;


/***/ },
/* 54 */
/***/ function(module, exports) {

	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = new array.constructor(length);
	
	  // Add array properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}
	
	module.exports = initCloneArray;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var bufferClone = __webpack_require__(56);
	
	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    stringTag = '[object String]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;
	
	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag:
	      return bufferClone(object);
	
	    case boolTag:
	    case dateTag:
	      return new Ctor(+object);
	
	    case float32Tag: case float64Tag:
	    case int8Tag: case int16Tag: case int32Tag:
	    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	      var buffer = object.buffer;
	      return new Ctor(isDeep ? bufferClone(buffer) : buffer, object.byteOffset, object.length);
	
	    case numberTag:
	    case stringTag:
	      return new Ctor(object);
	
	    case regexpTag:
	      var result = new Ctor(object.source, reFlags.exec(object));
	      result.lastIndex = object.lastIndex;
	  }
	  return result;
	}
	
	module.exports = initCloneByTag;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var constant = __webpack_require__(57),
	    getNative = __webpack_require__(22);
	
	/** Native method references. */
	var ArrayBuffer = getNative(global, 'ArrayBuffer'),
	    bufferSlice = getNative(ArrayBuffer && new ArrayBuffer(0), 'slice'),
	    floor = Math.floor,
	    Uint8Array = getNative(global, 'Uint8Array');
	
	/** Used to clone array buffers. */
	var Float64Array = (function() {
	  // Safari 5 errors when using an array buffer to initialize a typed array
	  // where the array buffer's `byteLength` is not a multiple of the typed
	  // array's `BYTES_PER_ELEMENT`.
	  try {
	    var func = getNative(global, 'Float64Array'),
	        result = new func(new ArrayBuffer(10), 0, 1) && func;
	  } catch(e) {}
	  return result || null;
	}());
	
	/** Used as the size, in bytes, of each `Float64Array` element. */
	var FLOAT64_BYTES_PER_ELEMENT = Float64Array ? Float64Array.BYTES_PER_ELEMENT : 0;
	
	/**
	 * Creates a clone of the given array buffer.
	 *
	 * @private
	 * @param {ArrayBuffer} buffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function bufferClone(buffer) {
	  return bufferSlice.call(buffer, 0);
	}
	if (!bufferSlice) {
	  // PhantomJS has `ArrayBuffer` and `Uint8Array` but not `Float64Array`.
	  bufferClone = !(ArrayBuffer && Uint8Array) ? constant(null) : function(buffer) {
	    var byteLength = buffer.byteLength,
	        floatLength = Float64Array ? floor(byteLength / FLOAT64_BYTES_PER_ELEMENT) : 0,
	        offset = floatLength * FLOAT64_BYTES_PER_ELEMENT,
	        result = new ArrayBuffer(byteLength);
	
	    if (floatLength) {
	      var view = new Float64Array(result, 0, floatLength);
	      view.set(new Float64Array(buffer, 0, floatLength));
	    }
	    if (byteLength != offset) {
	      view = new Uint8Array(result, offset);
	      view.set(new Uint8Array(buffer, offset));
	    }
	    return result;
	  };
	}
	
	module.exports = bufferClone;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 57 */
/***/ function(module, exports) {

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 * var getter = _.constant(object);
	 *
	 * getter() === object;
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}
	
	module.exports = constant;


/***/ },
/* 58 */
/***/ function(module, exports) {

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  var Ctor = object.constructor;
	  if (!(typeof Ctor == 'function' && Ctor instanceof Ctor)) {
	    Ctor = Object;
	  }
	  return new Ctor;
	}
	
	module.exports = initCloneObject;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(60);
	
	/**
	 * A specialized version of `baseCallback` which only supports `this` binding
	 * and specifying the number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {Function} func The function to bind.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function bindCallback(func, thisArg, argCount) {
	  if (typeof func != 'function') {
	    return identity;
	  }
	  if (thisArg === undefined) {
	    return func;
	  }
	  switch (argCount) {
	    case 1: return function(value) {
	      return func.call(thisArg, value);
	    };
	    case 3: return function(value, index, collection) {
	      return func.call(thisArg, value, index, collection);
	    };
	    case 4: return function(accumulator, value, index, collection) {
	      return func.call(thisArg, accumulator, value, index, collection);
	    };
	    case 5: return function(value, other, key, object, source) {
	      return func.call(thisArg, value, other, key, object, source);
	    };
	  }
	  return function() {
	    return func.apply(thisArg, arguments);
	  };
	}
	
	module.exports = bindCallback;


/***/ },
/* 60 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument provided to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(62),
	    toPath = __webpack_require__(63);
	
	/**
	 * Gets the property value at `path` of `object`. If the resolved value is
	 * `undefined` the `defaultValue` is used in its place.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, toPath(path), path + '');
	  return result === undefined ? defaultValue : result;
	}
	
	module.exports = get;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(53);
	
	/**
	 * The base implementation of `get` without support for string paths
	 * and default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} path The path of the property to get.
	 * @param {string} [pathKey] The key representation of path.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path, pathKey) {
	  if (object == null) {
	    return;
	  }
	  if (pathKey !== undefined && pathKey in toObject(object)) {
	    path = [pathKey];
	  }
	  var index = 0,
	      length = path.length;
	
	  while (object != null && index < length) {
	    object = object[path[index++]];
	  }
	  return (index && index == length) ? object : undefined;
	}
	
	module.exports = baseGet;


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(25),
	    isArray = __webpack_require__(21);
	
	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;
	
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	
	/**
	 * Converts `value` to property path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Array} Returns the property path array.
	 */
	function toPath(value) {
	  if (isArray(value)) {
	    return value;
	  }
	  var result = [];
	  baseToString(value).replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	}
	
	module.exports = toPath;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var isIndex = __webpack_require__(48),
	    isKey = __webpack_require__(65),
	    isObject = __webpack_require__(30),
	    toPath = __webpack_require__(63);
	
	/**
	 * Sets the property value of `path` on `object`. If a portion of `path`
	 * does not exist it is created.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to augment.
	 * @param {Array|string} path The path of the property to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.set(object, 'a[0].b.c', 4);
	 * console.log(object.a[0].b.c);
	 * // => 4
	 *
	 * _.set(object, 'x[0].y.z', 5);
	 * console.log(object.x[0].y.z);
	 * // => 5
	 */
	function set(object, path, value) {
	  if (object == null) {
	    return object;
	  }
	  var pathKey = (path + '');
	  path = (object[pathKey] != null || isKey(path, object)) ? [pathKey] : toPath(path);
	
	  var index = -1,
	      length = path.length,
	      lastIndex = length - 1,
	      nested = object;
	
	  while (nested != null && ++index < length) {
	    var key = path[index];
	    if (isObject(nested)) {
	      if (index == lastIndex) {
	        nested[key] = value;
	      } else if (nested[key] == null) {
	        nested[key] = isIndex(path[index + 1]) ? [] : {};
	      }
	    }
	    nested = nested[key];
	  }
	  return object;
	}
	
	module.exports = set;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(21),
	    toObject = __webpack_require__(53);
	
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;
	
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  var type = typeof value;
	  if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
	    return true;
	  }
	  if (isArray(value)) {
	    return false;
	  }
	  var result = !reIsDeepProp.test(value);
	  return result || (object != null && value in toObject(object));
	}
	
	module.exports = isKey;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @copyright 2015, Prometheus Research, LLC
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	exports['default'] = WithFormValue;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Component = __webpack_require__(16);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function WithFormValue(Component) {
	  return (function (_FormComponent) {
	    var _class = function _class() {
	      _classCallCheck(this, _class);
	
	      _get(Object.getPrototypeOf(_class.prototype), 'constructor', this).apply(this, arguments);
	    };
	
	    _inherits(_class, _FormComponent);
	
	    _createClass(_class, [{
	      key: 'render',
	      value: function render() {
	        return _react2['default'].createElement(Component, _extends({}, this.props, {
	          formValue: this.formValue
	        }));
	      }
	    }], [{
	      key: 'displayName',
	      value: 'WithFormValue(' + (Component.displayName || Component.name) + ')',
	      enumerable: true
	    }]);
	
	    return _class;
	  })(_Component2['default']);
	}
	
	module.exports = exports['default'];

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @copyright 2015, Prometheus Research, LLC
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodashLangIsArray = __webpack_require__(21);
	
	var _lodashLangIsArray2 = _interopRequireDefault(_lodashLangIsArray);
	
	var _lodashLangIsString = __webpack_require__(19);
	
	var _lodashLangIsString2 = _interopRequireDefault(_lodashLangIsString);
	
	var _mapElement = __webpack_require__(68);
	
	var _mapElement2 = _interopRequireDefault(_mapElement);
	
	var _Component = __webpack_require__(16);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var LegacyFieldset = (function (_React$Component) {
	  function LegacyFieldset() {
	    var _this = this;
	
	    _classCallCheck(this, LegacyFieldset);
	
	    _get(Object.getPrototypeOf(LegacyFieldset.prototype), 'constructor', this).apply(this, arguments);
	
	    this._propagateFormValue = function (element) {
	      if (element && element.props && element.props.selectFormValue && !element.props.formValue) {
	        var formValue = _this.props.formValue;
	        var selectFormValue = element.props.selectFormValue;
	        if ((0, _lodashLangIsString2['default'])(selectFormValue) || (0, _lodashLangIsArray2['default'])(selectFormValue)) {
	          formValue = formValue.select(selectFormValue);
	        }
	        element = _react2['default'].cloneElement(element, { formValue: formValue });
	        return [false, element];
	      }
	      return element;
	    };
	  }
	
	  _inherits(LegacyFieldset, _React$Component);
	
	  _createClass(LegacyFieldset, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var Component = _props.component;
	
	      var props = _objectWithoutProperties(_props, ['children', 'component']);
	
	      children = (0, _mapElement2['default'])(children, this._propagateFormValue);
	      return _react2['default'].createElement(
	        Component,
	        null,
	        children
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: _extends({}, _Component2['default'].propTypes, {
	      children: _react.PropTypes.node,
	      component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element])
	    }),
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      component: 'div'
	    },
	    enumerable: true
	  }]);
	
	  return LegacyFieldset;
	})(_react2['default'].Component);
	
	exports['default'] = LegacyFieldset;
	module.exports = exports['default'];

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @copyright 2015, Prometheus Research, LLC
	 */
	
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodashLangIsArray = __webpack_require__(21);
	
	var _lodashLangIsArray2 = _interopRequireDefault(_lodashLangIsArray);
	
	function mapElement(element, func) {
	  return _react2['default'].Children.map(element, function (el) {
	    var recurse = true;
	    el = func(el);
	    if ((0, _lodashLangIsArray2['default'])(el)) {
	      recurse = el[0];
	      el = el[1];
	    }
	    if (recurse && el && el.props && el.props.children) {
	      el = _react2['default'].cloneElement(el, {
	        children: _react2['default'].Children.map(el.props.children, function (child) {
	          return mapElement(child, func);
	        })
	      });
	    }
	    return el;
	  });
	}
	
	module.exports = mapElement;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmVhYWYyMzFhOTUyZjJhOWYyYjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9TY2hlbWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19zY2hlbWEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9nZW5lcmF0ZS1vYmplY3QtcHJvcGVydHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1wcm9wZXJ0eS9pcy1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2dlbmVyYXRlLWZ1bmN0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vdXRpbC91dGlsLmpzIiwid2VicGFjazovLy8uL34vcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vbm9kZS1saWJzLWJyb3dzZXIvbW9jay9jb25zb2xlLmpzIiwid2VicGFjazovLy8uL34vdXRpbC9zdXBwb3J0L2lzQnVmZmVyQnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9qc29ucG9pbnRlci9qc29ucG9pbnRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3h0ZW5kL2ltbXV0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvX3NjaGVtYS9mb3JtYXRzLmpzIiwid2VicGFjazovLy8uL3NyYy9GaWVsZHNldC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9pbnZhcmlhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tleVBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvbGFuZy9pc1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvbGFuZy9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2dldE5hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9sYW5nL2lzTmF0aXZlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3N0cmluZy9lc2NhcGVSZWdFeHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZVRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2lzTGVuZ3RoLmpzIiwid2VicGFjazovLy8uL3NyYy9GaWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvZnVuY3Rpb24vZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvbGFuZy9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9kYXRlL25vdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW1wdHlGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXJyb3JMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9WYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L21lbW9pemUtZGVjb3JhdG9yL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9sYW5nL2Nsb25lRGVlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlQ2xvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYXJyYXlDb3B5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2FycmF5RWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlQXNzaWduLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2Jhc2VDb3B5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2dldExlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvc2hpbUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvbGFuZy9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9pc0luZGV4LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL29iamVjdC9rZXlzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUZvck93bi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlRm9yLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2NyZWF0ZUJhc2VGb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvdG9PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvaW5pdENsb25lQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvaW5pdENsb25lQnlUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYnVmZmVyQ2xvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvdXRpbGl0eS9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9pbml0Q2xvbmVPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYmluZENhbGxiYWNrLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3V0aWxpdHkvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvb2JqZWN0L2dldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL3RvUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9vYmplY3Qvc2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2lzS2V5LmpzIiwid2VicGFjazovLy8uL3NyYy9XaXRoRm9ybVZhbHVlLmpzIiwid2VicGFjazovLy8uL3NyYy9MZWdhY3lGaWVsZHNldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFwRWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0NsQzJCLEVBQVk7Ozs7U0FBaEMsUUFBUTs7bUNBQ1ksRUFBUzs7OztTQUE3QixLQUFLOzttQ0FDZSxFQUFTOzs7O1NBQTdCLEtBQUs7OzJDQUNlLEVBQWlCOzs7O1NBQXJDLGFBQWE7O29DQUNPLENBQVU7Ozs7U0FBekIsTUFBTTs7bUNBQ1MsRUFBUzs7OztTQUE3QixLQUFLOzt1Q0FDZSxFQUFhOzs7O1NBQWpDLFNBQVM7OzRDQUVXLEVBQWtCOzs7O1NBQXRDLGNBQWMsK0I7Ozs7Ozs7OztBQ1RyQixhQUFZLENBQUM7Ozs7Ozs7O1NBSUcsZUFBZSxHQUFmLGVBQWU7U0F3QmYsTUFBTSxHQUFOLE1BQU07U0FVTixLQUFLLEdBQUwsS0FBSztTQVlMLE1BQU0sR0FBTixNQUFNOzs7O21DQWhETyxDQUFXOzs7O0FBRWpDLFVBQVMsZUFBZSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZDQUE0QyxLQUFLOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0Esb0NBQW1DLE9BQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLDBEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWCxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsU0FBUztBQUNwQjtBQUNBLFlBQVcsU0FBUztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDemtCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw2QkFBNEIsVUFBVTs7Ozs7OztBQ3pGdEM7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQiw2RUFBNkU7QUFDOUY7QUFDQTs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN0QkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzlFQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNoQkEsYUFBWSxDQUFDOztBQUViLFFBQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyw4RkFBOEY7QUFDckgsUUFBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLDBDQUEwQztBQUM1RCxRQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcscUJBQXFCO0FBQ3ZDLFFBQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxXQUFXO0FBQzlCLFFBQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsNkZBQTZGO0FBQ3ZJLFFBQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyx5akNBQXlqQztBQUMza0MsUUFBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLGtDQUFrQztBQUNuRCxRQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcseWFBQXlhO0FBQzViLFFBQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyx1SEFBdUg7QUFDN0ksUUFBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLGFBQWE7QUFDaEMsUUFBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLGdCQUFnQjtBQUMxQyxRQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsd0JBQXdCO0FBQzNDLFFBQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyw0QkFBNEI7QUFDL0MsUUFBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLHNCQUFzQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDWGpCLEVBQU87Ozs7dUNBQ1AsRUFBYTs7OztLQUV2QixRQUFRO1lBQVIsUUFBUTsyQkFBUixRQUFROztnQ0FBUixRQUFROzs7YUFBUixRQUFROztnQkFBUixRQUFROztZQVlyQixrQkFBRztvQkFDZ0MsSUFBSSxDQUFDLEtBQUs7V0FBakMsU0FBUyxVQUFwQixTQUFTOztXQUFnQixLQUFLOztBQUNuQyxjQUFPLGlDQUFDLFNBQVMsRUFBSyxLQUFLLENBQUksQ0FBQztNQUNqQzs7O3lCQVpJLHVCQUFVLFNBQVM7QUFDdEIsZUFBUSxFQUFFLE9BUEMsU0FBUyxDQU9BLElBQUk7QUFDeEIsZ0JBQVMsRUFBRSxPQVJBLFNBQVMsQ0FRQyxTQUFTLENBQUMsQ0FBQyxPQVJyQixTQUFTLENBUXNCLE1BQU0sRUFBRSxPQVJ2QyxTQUFTLENBUXdDLE9BQU8sQ0FBQyxDQUFDOzs7OztZQUdqRDtBQUNwQixnQkFBUyxFQUFFLEtBQUs7TUFDakI7Ozs7VUFWa0IsUUFBUTs7O3NCQUFSLFFBQVE7Ozs7Ozs7QUNQN0IsbUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQ0krQixFQUFPOzs7O3NDQUNQLEVBQWE7Ozs7b0NBQ2IsRUFBVzs7OztBQUUxQyxLQUFNLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLG1CQUFNLE9BQU8sQ0FBQyxDQUFDOztBQUV4RCxLQUFNLFlBQVksR0FBRztBQUMxQixZQUFTLEVBQUUsT0FQRSxTQUFTLENBT0QsTUFBTTtFQUM1QixDQUFDOztTQUZXLFlBQVksR0FBWixZQUFZO0FBSXpCLEtBQUksY0FBYyxHQUFHLE9BVk4sU0FBUyxDQVVPLFNBQVMsQ0FBQyxDQUN2QyxPQVhhLFNBQVMsQ0FXWixLQUFLLEVBQ2YsT0FaYSxTQUFTLENBWVosTUFBTSxFQUNoQixPQWJhLFNBQVMsQ0FhWixNQUFNLEVBQ2hCLE9BZGEsU0FBUyxDQWNaLElBQUksQ0FDZixDQUFDLENBQUM7Ozs7Ozs7OztLQVFrQixTQUFTO1lBQVQsU0FBUzsyQkFBVCxTQUFTOztnQ0FBVCxTQUFTOzs7YUFBVCxTQUFTOztnQkFBVCxTQUFTOztZQVdiLDJCQUFHO0FBQ2hCLGNBQU8sRUFBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBQyxDQUFDO01BQ3BDOzs7VUFFaUIsZUFBRztBQUNuQixXQUFJLGdCQUFnQixFQUFFO0FBQ3BCLGdCQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDckIsTUFBTTtBQUNMLGdCQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUM7UUFDN0M7TUFDRjs7O1VBRVksZUFBRztBQUNkLFdBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDOztBQUV0RSxtQ0FDRSxTQUFTLEVBQ1QsOERBQThELEdBQzlELGtEQUFrRCxHQUNsRCw4Q0FBOEMsRUFDOUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQ3RELENBQUM7O0FBRUYsV0FBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7Ozs7QUFJN0QsV0FBSSxNQUFNLElBQUksTUFBTSxLQUFLLElBQUksRUFBRTtBQUM3QixlQUFNLEdBQUcsMEJBQVEsTUFBTSxDQUFDLENBQUM7QUFDekIsa0JBQVMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDOztBQUVELGNBQU8sU0FBUyxDQUFDO01BQ2xCOzs7WUExQ3FCLFlBQVk7Ozs7WUFDUCxZQUFZOzs7O1lBRXBCO0FBQ2pCLGdCQUFTLEVBQUUsT0E3QkEsU0FBUyxDQTZCQyxNQUFNO0FBQzNCLGFBQU0sRUFBRSxjQUFjO0FBQ3RCLHNCQUFlLEVBQUUsY0FBYztNQUNoQzs7OztVQVRrQixTQUFTO0lBQVMsbUJBQU0sU0FBUzs7c0JBQWpDLFNBQVMsQzs7Ozs7Ozs7Ozs7Ozs7O3NCQ3ZCTixTQUFTOztBQUFsQixVQUFTLFNBQVMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFOztBQUM3RCxPQUFJLENBQUMsSUFBSSxFQUFFO0FBQ1QsU0FBSSxHQUFHLEVBQUU7O0FBQ1AsYUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3RDLGFBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztBQUNaLFlBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxZQUFXO0FBQ2xDLGtCQUFPLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1VBQzVCLENBQUMsQ0FBQztBQUNILGVBQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLEdBQUcsR0FBRyxDQUFDLENBQUM7O01BQ2hELE1BQU07QUFDTCxhQUFNLElBQUksS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7TUFDeEM7SUFDRjtFQUNGOzs7Ozs7Ozs7Ozs7Ozs7OztzQkNBdUIsT0FBTzs7OzsrQ0FiVCxFQUFzQjs7Ozs4Q0FDdEIsRUFBcUI7Ozs7c0NBQ3JCLEVBQWE7Ozs7QUFFbkMsS0FBTSxTQUFTLEdBQUcsUUFBUSxDQUFDOztBQUUzQixVQUFTLFdBQVcsQ0FBQyxDQUFDLEVBQUU7QUFDdEIsT0FBSSxPQUFPLENBQUMsS0FBSyxRQUFRLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUM5QyxNQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNyQjtBQUNELFVBQU8sQ0FBQyxDQUFDO0VBQ1Y7O0FBRWMsVUFBUyxPQUFPLENBQUMsS0FBSyxFQUFFO0FBQ3JDLE9BQUksb0NBQVEsS0FBSyxDQUFDLEVBQUU7QUFDbEIsWUFBTyxLQUFLLENBQUM7SUFDZCxNQUFNLElBQUkscUNBQVMsS0FBSyxDQUFDLEVBQUU7QUFDMUIsU0FBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO0FBQzdCLFlBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7TUFDM0QsTUFBTTtBQUNMLFlBQUssR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO01BQzlCO0FBQ0QsWUFBTyxLQUFLLENBQUM7SUFDZCxNQUFNLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO0FBQ3BDLFlBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQixNQUFNO0FBQ0wsaUNBQ0UsS0FBSyxFQUNMLG1EQUFtRCxFQUNuRCxLQUFLLENBQ04sQ0FBQztJQUNIO0VBQ0Y7Ozs7Ozs7O0FDcENEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLGNBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDWEE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUIsa0JBQWtCLEVBQUU7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3ZDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLE9BQU87QUFDbEIsY0FBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLEVBQUU7QUFDYixjQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3hEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQThCO0FBQzlCOztBQUVBO0FBQ0E7QUFDQSxvQ0FBbUMsUUFBUTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixjQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLEVBQUU7QUFDYixjQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQ2ZpQyxFQUFPOzs7O2tDQUNQLEVBQVM7Ozs7c0NBQ1QsRUFBYTs7Ozt1Q0FDYixFQUFhOzs7O0FBRTlDLFVBQVMsV0FBVyxDQUFDLEtBQUssRUFBRTtBQUMxQixVQUFPLEtBQUssSUFBSTs7O0tBQVEsS0FBSztJQUFTLENBQUM7RUFDeEM7O0FBRUQsVUFBUyxlQUFlLENBQUMsU0FBUyxFQUFFO0FBQ2xDLFVBQU8sMkRBQVcsU0FBUyxFQUFFLFNBQVUsR0FBRyxDQUFDO0VBQzVDOztLQUVvQixLQUFLO0FBZ0JiLFlBaEJRLEtBQUssQ0FnQlosS0FBSyxFQUFFOzs7MkJBaEJBLEtBQUs7O0FBaUJ0QixnQ0FqQmlCLEtBQUssNkNBaUJoQixLQUFLLEVBQUU7O1VBc0JmLE1BQU0sR0FBRyxZQUFNO0FBQ2IsYUFBSyxRQUFRLENBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztNQUM5Qjs7VUFFRCxRQUFRLEdBQUcsVUFBQyxDQUFDLEVBQUs7QUFDaEIsV0FBSSxLQUFLLGFBQUM7QUFDVixXQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtBQUNqRCxVQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDcEIsY0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ3ZCLGFBQUksS0FBSyxLQUFLLEVBQUUsRUFBRTtBQUNoQixnQkFBSyxHQUFHLFNBQVMsQ0FBQztVQUNuQjtRQUNGLE1BQU07QUFDTCxjQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1g7QUFDRCxhQUFLLFFBQVEsQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO0FBQzdCLGFBQUssS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7TUFDcEM7O0FBdENDLFNBQUksQ0FBQyxLQUFLLEdBQUcsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUM7SUFDN0I7O2FBbkJrQixLQUFLOztnQkFBTCxLQUFLOztZQXFCbEIsa0JBQUc7b0JBQ3dDLElBQUksQ0FBQyxLQUFLO1dBQXBELFFBQVEsVUFBUixRQUFRO1dBQUUsV0FBVyxVQUFYLFdBQVc7V0FBRSxlQUFlLFVBQWYsZUFBZTtXQUN0QyxLQUFLLEdBQUksSUFBSSxDQUFDLEtBQUssQ0FBbkIsS0FBSzt3QkFDNEIsSUFBSSxDQUFDLFNBQVM7V0FBL0MsTUFBTSxjQUFOLE1BQU07V0FBRSxLQUFLLGNBQUwsS0FBSztXQUFFLE1BQU0sY0FBTixNQUFNO1dBQUUsTUFBTSxjQUFOLE1BQU07O0FBQ2xDLFdBQUksVUFBVSxHQUFHLEtBQUssSUFBSSxNQUFNLENBQUMsZUFBZSxDQUFDO0FBQ2pELGVBQVEsR0FBRyxtQkFBTSxZQUFZLENBQzNCLG1CQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQzdCLEVBQUMsS0FBSyxFQUFMLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUFDLENBQUM7QUFDcEMsV0FBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQztBQUM3QyxjQUNFOztXQUFLLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTztTQUN0QixXQUFXLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQztTQUMxQixRQUFRO1NBQ1IsVUFBVSxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFDLENBQ047TUFDSDs7O3lCQWxDSSx1QkFBVSxTQUFTO0FBQ3RCLFlBQUssRUFBRSxPQWpCSSxTQUFTLENBaUJILE1BQU07QUFDdkIsZUFBUSxFQUFFLE9BbEJDLFNBQVMsQ0FrQkEsT0FBTztBQUMzQixrQkFBVyxFQUFFLE9BbkJGLFNBQVMsQ0FtQkcsSUFBSTtBQUMzQixzQkFBZSxFQUFFLE9BcEJOLFNBQVMsQ0FvQk8sSUFBSTs7Ozs7WUFHWDtBQUNwQixlQUFRLEVBQUUsdURBQU8sSUFBSSxFQUFDLE1BQU0sR0FBRztBQUMvQixrQkFBVyxFQUFYLFdBQVc7QUFDWCxzQkFBZSxFQUFmLGVBQWU7TUFDaEI7Ozs7VUFka0IsS0FBSzs7O3NCQUFMLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDYkssRUFBTzs7OzttREFDUCxFQUEwQjs7OzswQ0FDMUIsRUFBaUI7Ozs7Ozs7O0tBSzNCLEtBQUs7QUFlYixZQWZRLEtBQUssQ0FlWixLQUFLLEVBQUU7OzsyQkFmQSxLQUFLOztBQWdCdEIsZ0NBaEJpQixLQUFLLDZDQWdCaEIsS0FBSyxFQUFFOztVQW1EZixRQUFRLEdBQUcsVUFBQyxDQUFDLEVBQUs7QUFDaEIsV0FBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLElBQUksT0FBTyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQzlDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUNkLENBQUMsQ0FBQztBQUNKLGFBQUssZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7TUFDOUI7O0FBdkRDLFNBQUksQ0FBQyxLQUFLLEdBQUcsRUFBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBQyxDQUFDO0FBQ2xDLFNBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO0FBQ2hDLFNBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsUUFBUSxHQUNyQyx5Q0FBUyxLQUFLLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQ3RFLEtBQUssQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hEOzthQXRCa0IsS0FBSzs7Z0JBQUwsS0FBSzs7WUF3QmxCLGtCQUFHO29CQUM4RCxJQUFJLENBQUMsS0FBSztXQUFqRSxPQUFPLFVBQWhCLE9BQU87V0FBcUIsZUFBZSxVQUF6QixRQUFRO1dBQW1CLEtBQUssVUFBTCxLQUFLOztXQUFLLEtBQUs7O0FBQ2pFLFdBQUksZUFBZSxFQUFFO0FBQ25CLGNBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUMxQjtBQUNELGNBQU8saUNBQUMsT0FBTyxlQUFLLEtBQUssSUFBRSxLQUFLLEVBQUUsS0FBTSxFQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUyxJQUFHLENBQUM7TUFDdEU7OztZQUV3QixtQ0FBQyxTQUFTLEVBQUU7QUFDbkMsV0FBSSxTQUFTLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxjQUFjLEVBQUU7QUFDM0MsYUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCO0FBQ0QsV0FBSSxTQUFTLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO0FBQzlDLGFBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUN0QixhQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLFFBQVEsR0FDekMseUNBQVMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUMxRSxLQUFLLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRDtNQUNGOzs7WUFFbUIsZ0NBQUc7QUFDckIsV0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO01BQ3ZCOzs7WUFFZ0IsNkJBQUc7QUFDbEIsV0FBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztBQUNoQyxXQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztBQUNoQyxXQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztNQUM1Qjs7O1lBRWUsMEJBQUMsS0FBSyxFQUFFO0FBQ3RCLFdBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxLQUFLLEVBQUwsS0FBSyxFQUFDLENBQUMsQ0FBQztBQUN2QixXQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztBQUM1QixXQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztNQUMxQjs7O1lBRWEsMEJBQUc7QUFDZixXQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUU7QUFDakMsYUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7QUFDaEMsYUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2pDO01BQ0Y7OztZQS9Ea0I7QUFDakIsY0FBTyxFQUFFLE9BVkUsU0FBUyxDQVVELFNBQVMsQ0FBQyxDQUFDLE9BVm5CLFNBQVMsQ0FVb0IsTUFBTSxFQUFFLE9BVnJDLFNBQVMsQ0FVc0MsT0FBTyxDQUFDLENBQUM7QUFDbkUsZUFBUSxFQUFFLE9BWEMsU0FBUyxDQVdBLE1BQU07QUFDMUIsWUFBSyxFQUFFLE9BWkksU0FBUyxDQVlILEdBQUc7QUFDcEIsZUFBUSxFQUFFLE9BYkMsU0FBUyxDQWFBLElBQUk7TUFDekI7Ozs7WUFFcUI7QUFDcEIsY0FBTyxFQUFFLE9BQU87QUFDaEIsZUFBUSxFQUFFLEdBQUc7QUFDYixlQUFRLDRCQUFlO01BQ3hCOzs7O1VBYmtCLEtBQUs7SUFBUyxtQkFBTSxTQUFTOztzQkFBN0IsS0FBSzs7Ozs7OztBQ1gxQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsU0FBUztBQUNwQixZQUFXLE9BQU87QUFDbEIsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsUUFBUTtBQUNuQjtBQUNBLFlBQVcsT0FBTztBQUNsQjtBQUNBLFlBQVcsUUFBUTtBQUNuQjtBQUNBLGNBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMEIsa0NBQWtDO0FBQzVEO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzFMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLGNBQWEsUUFBUTtB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QUFLLENBQUMsUUFBUSxFQUNqQixVQUFTLEtBQUssRUFBRTtBQUNkLGtCQUFPLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7VUFDaEMsQ0FBQztRQUNMLENBQUMsQ0FBQztNQUNKO0FBQ0QsWUFBTyxFQUFFLENBQUM7SUFDWCxDQUFDLENBQUM7RUFDSjs7QUFFRCxPQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsQyIsImZpbGUiOiJyZWFjdC1mb3Jtcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMmVhYWYyMzFhOTUyZjJhOWYyYjVcbiAqKi8iLCIvKipcbiAqIEBjb3B5cmlnaHQgMjAxNSwgUHJvbWV0aGV1cyBSZXNlYXJjaCwgTExDXG4gKi9cblxuZXhwb3J0IEZpZWxkc2V0ICAgICAgIGZyb20gJy4vRmllbGRzZXQnO1xuZXhwb3J0IEZpZWxkICAgICAgICAgIGZyb20gJy4vRmllbGQnO1xuZXhwb3J0IFZhbHVlICAgICAgICAgIGZyb20gJy4vVmFsdWUnO1xuZXhwb3J0IFdpdGhGb3JtVmFsdWUgIGZyb20gJy4vV2l0aEZvcm1WYWx1ZSc7XG5leHBvcnQgKiBhcyBTY2hlbWEgICAgZnJvbSAnLi9TY2hlbWEnO1xuZXhwb3J0IElucHV0ICAgICAgICAgIGZyb20gJy4vSW5wdXQnO1xuZXhwb3J0IEVycm9yTGlzdCAgICAgIGZyb20gJy4vRXJyb3JMaXN0JztcblxuZXhwb3J0IExlZ2FjeUZpZWxkc2V0IGZyb20gJy4vTGVnYWN5RmllbGRzZXQnO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCIvKipcbiAqIEBjb3B5cmlnaHQgMjAxNSwgUHJvbWV0aGV1cyBSZXNlYXJjaCwgTExDXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IF9jcmVhdGVWYWxpZGF0b3IgZnJvbSAnLi9fc2NoZW1hJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZhbGlkYXRvcihzY2hlbWEsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IHtcbiAgICAuLi5vcHRpb25zLFxuICAgIGdyZWVkeTogdHJ1ZSxcbiAgICB1bmRlZmluZWRBc09iamVjdDogdHJ1ZSxcbiAgICBudWxsQXNPYmplY3Q6IHRydWUsXG4gICAgdW5kZWZpbmVkQXNBcnJheTogdHJ1ZSxcbiAgICBudWxsQXNVbmRlZmluZWQ6IHRydWUsXG4gICAgbnVsbEFzQXJyYXk6IHRydWUsXG4gICAgbnVsbEFzQm90dG9tVHlwZTogdHJ1ZVxuICB9O1xuICByZXR1cm4gX2NyZWF0ZVZhbGlkYXRvcihzY2hlbWEsIG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBfZ2VuZXJhdGVTY2hlbWFCdWlsZGVyKHR5cGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGJ1aWxkZXIocGFyYW1zKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGUsXG4gICAgICBpc1JlcXVpcmVkOiBwYXJhbXMgPyAhIXBhcmFtcy5pc1JlcXVpcmVkIDogZmFsc2UsXG4gICAgICAuLi5wYXJhbXNcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0KHByb3BlcnRpZXMsIHBhcmFtcykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdvYmplY3QnLFxuICAgIHByb3BlcnRpZXMsXG4gICAgcmVxdWlyZWQ6IE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLmZpbHRlcihrID0+IHByb3BlcnRpZXNba10uaXNSZXF1aXJlZCksXG4gICAgaXNSZXF1aXJlZDogcGFyYW1zID8gISFwYXJhbXMuaXNSZXF1aXJlZCA6IGZhbHNlLFxuICAgIC4uLnBhcmFtc1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXkoaXRlbXMsIHBhcmFtcykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdhcnJheScsXG4gICAgaXRlbXMsXG4gICAgaXNSZXF1aXJlZDogcGFyYW1zID8gISFwYXJhbXMuaXNSZXF1aXJlZCA6IGZhbHNlLFxuICAgIC4uLnBhcmFtc1xuICB9O1xufVxuXG5leHBvcnQgbGV0IHN0cmluZyA9IF9nZW5lcmF0ZVNjaGVtYUJ1aWxkZXIoJ3N0cmluZycpO1xuZXhwb3J0IGxldCBudW1iZXIgPSBfZ2VuZXJhdGVTY2hlbWFCdWlsZGVyKCdudW1iZXInKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdChzY2hlbWEsIGtleVBhdGgpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGtleVBhdGgubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoIXNjaGVtYSkge1xuICAgICAgcmV0dXJuIHNjaGVtYTtcbiAgICB9XG4gICAgc2NoZW1hID0gX3NlbGVjdChzY2hlbWEsIGtleVBhdGhbaV0pO1xuICB9XG4gIHJldHVybiBzY2hlbWE7XG59XG5cbmZ1bmN0aW9uIF9zZWxlY3Qoc2NoZW1hLCBrZXkpIHtcbiAgaWYgKHNjaGVtYSkge1xuICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGxldCBzdWJTY2hlbWEgPSBzY2hlbWEucHJvcGVydGllcyA/XG4gICAgICAgIHNjaGVtYS5wcm9wZXJ0aWVzW2tleV0gOlxuICAgICAgICB1bmRlZmluZWQ7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShzY2hlbWEucmVxdWlyZWQpKSB7XG4gICAgICAgIC8vIHRyYW5zZmVyIHJlcXVpcmVkIGluZm8gb250byBzY2hlbWFcbiAgICAgICAgc3ViU2NoZW1hID0ge1xuICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgIC4uLnN1YlNjaGVtYSxcbiAgICAgICAgICBpc1JlcXVpcmVkOiBzY2hlbWEucmVxdWlyZWQuaW5kZXhPZihrZXkpICE9PSAtMVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN1YlNjaGVtYTtcbiAgICB9IGVsc2UgaWYgKHNjaGVtYS50eXBlID09PSAnYXJyYXknKSB7XG4gICAgICBpZiAoc2NoZW1hLml0ZW1zKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNjaGVtYS5pdGVtcykpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtZGVwdGhcbiAgICAgICAgICByZXR1cm4gc2NoZW1hLml0ZW1zW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHNjaGVtYS5pdGVtcztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke0pTT04uc3RyaW5naWZ5KHNjaGVtYSl9ICR7a2V5fWApO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvU2NoZW1hLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZ2Vub2JqICAgICAgPSByZXF1aXJlKCdnZW5lcmF0ZS1vYmplY3QtcHJvcGVydHknKVxudmFyIGdlbmZ1biAgICAgID0gcmVxdWlyZSgnZ2VuZXJhdGUtZnVuY3Rpb24nKVxudmFyIGpzb25wb2ludGVyID0gcmVxdWlyZSgnanNvbnBvaW50ZXInKVxudmFyIHh0ZW5kICAgICAgID0gcmVxdWlyZSgneHRlbmQnKVxudmFyIGZvcm1hdHMgICAgID0gcmVxdWlyZSgnLi9mb3JtYXRzJylcblxudmFyIGdldCA9IGZ1bmN0aW9uKG9iaiwgYWRkaXRpb25hbFNjaGVtYXMsIHB0cikge1xuICBpZiAoL15odHRwcz86XFwvXFwvLy50ZXN0KHB0cikpIHJldHVybiBudWxsXG5cbiAgdmFyIHZpc2l0ID0gZnVuY3Rpb24oc3ViKSB7XG4gICAgaWYgKHN1YiAmJiBzdWIuaWQgPT09IHB0cikgcmV0dXJuIHN1YlxuICAgIGlmICh0eXBlb2Ygc3ViICE9PSAnb2JqZWN0JyB8fCAhc3ViKSByZXR1cm4gbnVsbFxuICAgIHJldHVybiBPYmplY3Qua2V5cyhzdWIpLnJlZHVjZShmdW5jdGlvbihyZXMsIGspIHtcbiAgICAgIHJldHVybiByZXMgfHwgdmlzaXQoc3ViW2tdKVxuICAgIH0sIG51bGwpXG4gIH1cblxuICB2YXIgcmVzID0gdmlzaXQob2JqKVxuICBpZiAocmVzKSByZXR1cm4gcmVzXG5cbiAgcHRyID0gcHRyLnJlcGxhY2UoL14jLywgJycpXG4gIHB0ciA9IHB0ci5yZXBsYWNlKC9cXC8kLywgJycpXG5cbiAgdHJ5IHtcbiAgICByZXR1cm4ganNvbnBvaW50ZXIuZ2V0KG9iaiwgZGVjb2RlVVJJKHB0cikpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHZhciBvdGhlciA9IGFkZGl0aW9uYWxTY2hlbWFzW3B0cl0gfHwgYWRkaXRpb25hbFNjaGVtYXNbcHRyLnJlcGxhY2UoL14jLywgJycpXVxuICAgIHJldHVybiBvdGhlciB8fCBudWxsXG4gIH1cbn1cblxudmFyIHNwbGl0TmFtZSA9IC9bXFxbXFxdXS87XG5cbnZhciBmb3JtYXROYW1lID0gZnVuY3Rpb24oZmllbGQpIHtcbiAgZmllbGQgPSBmaWVsZC5yZXBsYWNlKC9cXFsvZywgJ1tcXHUwMDAxJykuc3BsaXQoc3BsaXROYW1lKTtcbiAgdmFyIGZvcm1hdHRlZCA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGZpZWxkLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBhcnQgPSBmaWVsZFtpXTtcbiAgICBpZiAocGFydFswXSA9PT0gJ1xcdTAwMDEnKSB7XG4gICAgICBmb3JtYXR0ZWQucHVzaChKU09OLnN0cmluZ2lmeSgnLicpKTtcbiAgICAgIGZvcm1hdHRlZC5wdXNoKHBhcnQuc2xpY2UoMSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JtYXR0ZWQucHVzaChKU09OLnN0cmluZ2lmeShwYXJ0KSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBmb3JtYXR0ZWQuam9pbignKycpO1xufVxuXG52YXIgdHlwZXMgPSB7fVxuXG50eXBlcy5hbnkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICd0cnVlJ1xufVxuXG50eXBlcy5udWxsID0gZnVuY3Rpb24obmFtZSkge1xuICByZXR1cm4gbmFtZSsnID09PSBudWxsJ1xufVxuXG50eXBlcy5ib29sZWFuID0gZnVuY3Rpb24obmFtZSkge1xuICByZXR1cm4gJ3R5cGVvZiAnK25hbWUrJyA9PT0gXCJib29sZWFuXCInXG59XG5cbnR5cGVzLmFycmF5ID0gZnVuY3Rpb24obmFtZSkge1xuICByZXR1cm4gJ0FycmF5LmlzQXJyYXkoJytuYW1lKycpJ1xufVxuXG50eXBlcy5vYmplY3QgPSBmdW5jdGlvbihuYW1lKSB7XG4gIHJldHVybiAndHlwZW9mICcrbmFtZSsnID09PSBcIm9iamVjdFwiICYmICcrbmFtZSsnICYmICFBcnJheS5pc0FycmF5KCcrbmFtZSsnKSdcbn1cblxudHlwZXMubnVtYmVyID0gZnVuY3Rpb24obmFtZSkge1xuICByZXR1cm4gJ3R5cGVvZiAnK25hbWUrJyA9PT0gXCJudW1iZXJcIidcbn1cblxudHlwZXMuaW50ZWdlciA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgcmV0dXJuICd0eXBlb2YgJytuYW1lKycgPT09IFwibnVtYmVyXCIgJiYgKE1hdGguZmxvb3IoJytuYW1lKycpID09PSAnK25hbWUrJyB8fCAnK25hbWUrJyA+IDkwMDcxOTkyNTQ3NDA5OTIgfHwgJytuYW1lKycgPCAtOTAwNzE5OTI1NDc0MDk5MiknXG59XG5cbnR5cGVzLnN0cmluZyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgcmV0dXJuICd0eXBlb2YgJytuYW1lKycgPT09IFwic3RyaW5nXCInXG59XG5cbnZhciB1bmlxdWUgPSBmdW5jdGlvbihhcnJheSkge1xuICB2YXIgbGlzdCA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBsaXN0LnB1c2godHlwZW9mIGFycmF5W2ldID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGFycmF5W2ldKSA6IGFycmF5W2ldKVxuICB9XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChsaXN0LmluZGV4T2YobGlzdFtpXSkgIT09IGkpIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbnZhciB0b1R5cGUgPSBmdW5jdGlvbihub2RlKSB7XG4gIHJldHVybiBub2RlLnR5cGVcbn1cblxudmFyIGNvbXBpbGUgPSBmdW5jdGlvbihzY2hlbWEsIGNhY2hlLCByb290LCByZXBvcnRlciwgb3B0cykge1xuICB2YXIgZm10cyA9IG9wdHMgPyB4dGVuZChmb3JtYXRzLCBvcHRzLmZvcm1hdHMpIDogZm9ybWF0c1xuICB2YXIgc2NvcGUgPSB7dW5pcXVlOnVuaXF1ZSwgZm9ybWF0czpmbXRzfVxuICB2YXIgdmVyYm9zZSA9IG9wdHMgPyAhIW9wdHMudmVyYm9zZSA6IGZhbHNlO1xuICB2YXIgdW5kZWZpbmVkQXNPYmplY3QgPSBvcHRzID8gISFvcHRzLnVuZGVmaW5lZEFzT2JqZWN0IDogZmFsc2U7XG4gIHZhciBudWxsQXNPYmplY3QgPSBvcHRzID8gISFvcHRzLm51bGxBc09iamVjdCA6IGZhbHNlO1xuICB2YXIgbnVsbEFzVW5kZWZpbmVkID0gb3B0cyA/ICEhb3B0cy5udWxsQXNVbmRlZmluZWQgOiBmYWxzZTtcbiAgdmFyIHVuZGVmaW5lZEFzQXJyYXkgPSBvcHRzID8gISFvcHRzLnVuZGVmaW5lZEFzQXJyYXkgOiBmYWxzZTtcbiAgdmFyIG51bGxBc0FycmF5ID0gb3B0cyA/ICEhb3B0cy5udWxsQXNBcnJheSA6IGZhbHNlO1xuICB2YXIgZ3JlZWR5ID0gb3B0cyAmJiBvcHRzLmdyZWVkeSAhPT0gdW5kZWZpbmVkID9cbiAgICBvcHRzLmdyZWVkeSA6IGZhbHNlO1xuXG4gIHZhciBzeW1zID0ge31cbiAgdmFyIGdlbnN5bSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gbmFtZSsoc3ltc1tuYW1lXSA9IChzeW1zW25hbWVdIHx8IDApKzEpXG4gIH1cblxuICB2YXIgcmV2ZXJzZVBhdHRlcm5zID0ge31cbiAgdmFyIHBhdHRlcm5zID0gZnVuY3Rpb24ocCkge1xuICAgIGlmIChyZXZlcnNlUGF0dGVybnNbcF0pIHJldHVybiByZXZlcnNlUGF0dGVybnNbcF1cbiAgICB2YXIgbiA9IGdlbnN5bSgncGF0dGVybicpXG4gICAgc2NvcGVbbl0gPSBuZXcgUmVnRXhwKHApXG4gICAgcmV2ZXJzZVBhdHRlcm5zW3BdID0gblxuICAgIHJldHVybiBuXG4gIH1cblxuICB2YXIgdmFycyA9IFsnaScsJ2onLCdrJywnbCcsJ20nLCduJywnbycsJ3AnLCdxJywncicsJ3MnLCd0JywndScsJ3YnLCd4JywneScsJ3onXVxuICB2YXIgZ2VubG9vcCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFycy5zaGlmdCgpXG4gICAgdmFycy5wdXNoKHYrdlswXSlcbiAgICByZXR1cm4gdlxuICB9XG5cbiAgdmFyIHZpc2l0ID0gZnVuY3Rpb24obmFtZSwgX2RhdGFTeW0sIG5vZGUsIHJlcG9ydGVyLCBmaWx0ZXIpIHtcbiAgICB2YXIgcHJvcGVydGllcyA9IG5vZGUucHJvcGVydGllc1xuICAgIHZhciB0eXBlID0gbm9kZS50eXBlXG4gICAgdmFyIHR1cGxlID0gZmFsc2VcblxuICAgIHZhciBkYXRhU3ltID0gZ2Vuc3ltKCdkYXRhJyk7XG4gICAgdmFsaWRhdGUoJ3ZhciAlcyA9ICVzJywgZGF0YVN5bSwgX2RhdGFTeW0pO1xuXG4gICAgdmFyIG5vZGVTeW0gPSBnZW5zeW0oJ25vZGUnKVxuICAgIHNjb3BlW25vZGVTeW1dID0gbm9kZTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KG5vZGUuaXRlbXMpKSB7IC8vIHR1cGxlIHR5cGVcbiAgICAgIHByb3BlcnRpZXMgPSB7fVxuICAgICAgbm9kZS5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIGkpIHtcbiAgICAgICAgcHJvcGVydGllc1tpXSA9IGl0ZW1cbiAgICAgIH0pXG4gICAgICB0eXBlID0gJ2FycmF5J1xuICAgICAgdHVwbGUgPSB0cnVlXG4gICAgfVxuXG4gICAgdmFyIGluZGVudCA9IDBcbiAgICB2YXIgZXJyb3IgPSBmdW5jdGlvbihtc2csIHByb3AsIHZhbHVlLCBzY2hlbWEpIHtcbiAgICAgIHZhbGlkYXRlKCdlcnJvcnMrKycpXG4gICAgICBpZiAocmVwb3J0ZXIgPT09IHRydWUpIHtcbiAgICAgICAgdmFsaWRhdGUoJ2lmICh2YWxpZGF0ZS5lcnJvcnMgPT09IG51bGwpIHZhbGlkYXRlLmVycm9ycyA9IFtdJylcbiAgICAgICAgaWYgKHZlcmJvc2UpIHtcbiAgICAgICAgICB2YWxpZGF0ZSgndmFsaWRhdGUuZXJyb3JzLnB1c2goe2ZpZWxkOiVzLG1lc3NhZ2U6JXMsdmFsdWU6JXMsc2NoZW1hOiVzfSknLCBmb3JtYXROYW1lKHByb3AgfHwgbmFtZSksIEpTT04uc3RyaW5naWZ5KG1zZyksIHZhbHVlIHx8IG5hbWUsIHNjaGVtYSB8fCBub2RlU3ltKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlKCd2YWxpZGF0ZS5lcnJvcnMucHVzaCh7ZmllbGQ6JXMsbWVzc2FnZTolcyxzY2hlbWE6JXN9KScsIGZvcm1hdE5hbWUocHJvcCB8fCBuYW1lKSwgSlNPTi5zdHJpbmdpZnkobXNnKSwgc2NoZW1hIHx8IG5vZGVTeW0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGVycm9yRnJvbVN5bSA9IGZ1bmN0aW9uKHN5bSwgc2NoZW1hKSB7XG4gICAgICB2YWxpZGF0ZSgnZXJyb3JzKysnKVxuICAgICAgaWYgKHJlcG9ydGVyID09PSB0cnVlKSB7XG4gICAgICAgIHZhbGlkYXRlKCdpZiAodmFsaWRhdGUuZXJyb3JzID09PSBudWxsKSB2YWxpZGF0ZS5lcnJvcnMgPSBbXScpXG4gICAgICAgIGlmICh2ZXJib3NlKSB7XG4gICAgICAgICAgdmFsaWRhdGUoJ3ZhbGlkYXRlLmVycm9ycy5wdXNoKHtmaWVsZDolcyxtZXNzYWdlOiVzLHZhbHVlOiVzLHNjaGVtYTolc30pJywgZm9ybWF0TmFtZShuYW1lKSwgc3ltLCBuYW1lLCBzY2hlbWEgfHwgbm9kZVN5bSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZSgndmFsaWRhdGUuZXJyb3JzLnB1c2goe2ZpZWxkOiVzLG1lc3NhZ2U6JXMsc2NoZW1hOiVzfSknLCBmb3JtYXROYW1lKG5hbWUpLCBzeW0sIHNjaGVtYSB8fCBub2RlU3ltKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5vZGUucmVxdWlyZWQgPT09IHRydWUpIHtcbiAgICAgIGluZGVudCsrXG4gICAgICBpZiAobnVsbEFzVW5kZWZpbmVkKSB7XG4gICAgICAgIHZhbGlkYXRlKCdpZiAoJXMgPT0gdW5kZWZpbmVkKSB7JywgZGF0YVN5bSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbGlkYXRlKCdpZiAoJXMgPT09IHVuZGVmaW5lZCkgeycsIGRhdGFTeW0pXG4gICAgICB9XG4gICAgICBlcnJvcignaXMgcmVxdWlyZWQnKVxuICAgICAgdmFsaWRhdGUoJ30gZWxzZSB7JylcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG5vZGUudHlwZSA9PT0gJ29iamVjdCcgJiYgKHVuZGVmaW5lZEFzT2JqZWN0IHx8IG51bGxBc09iamVjdCkpIHtcbiAgICAgICAgaWYgKHVuZGVmaW5lZEFzT2JqZWN0ICYmIG51bGxBc09iamVjdCkge1xuICAgICAgICAgIHZhbGlkYXRlKCdpZiAoJXMgPT0gbnVsbCkgJXMgPSB7fScsIGRhdGFTeW0sIGRhdGFTeW0pO1xuICAgICAgICB9IGVsc2UgaWYgKHVuZGVmaW5lZEFzT2JqZWN0KSB7XG4gICAgICAgICAgdmFsaWRhdGUoJ2lmICglcyA9PT0gdW5kZWZpbmVkKSAlcyA9IHt9JywgZGF0YVN5bSwgZGF0YVN5bSk7XG4gICAgICAgIH0gZWxzZSBpZiAobnVsbEFzT2JqZWN0KSB7XG4gICAgICAgICAgdmFsaWRhdGUoJ2lmICglcyA9PT0gbnVsbCkgJXMgPSB7fScsIGRhdGFTeW0sIGRhdGFTeW0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG5vZGUudHlwZSA9PT0gJ2FycmF5JyAmJiAodW5kZWZpbmVkQXNBcnJheSB8fCBudWxsQXNBcnJheSkpIHtcbiAgICAgICAgaWYgKHVuZGVmaW5lZEFzQXJyYXkgJiYgbnVsbEFzQXJyYXkpIHtcbiAgICAgICAgICB2YWxpZGF0ZSgnaWYgKCVzID09IG51bGwpICVzID0gW10nLCBkYXRhU3ltLCBkYXRhU3ltKTtcbiAgICAgICAgfSBlbHNlIGlmICh1bmRlZmluZWRBc0FycmF5KSB7XG4gICAgICAgICAgdmFsaWRhdGUoJ2lmICglcyA9PT0gdW5kZWZpbmVkKSAlcyA9IFtdJywgZGF0YVN5bSwgZGF0YVN5bSk7XG4gICAgICAgIH0gZWxzZSBpZiAobnVsbEFzQXJyYXkpIHtcbiAgICAgICAgICB2YWxpZGF0ZSgnaWYgKCVzID09PSBudWxsKSAlcyA9IFtdJywgZGF0YVN5bSwgZGF0YVN5bSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGVudCsrXG4gICAgICAgIGlmIChudWxsQXNVbmRlZmluZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZSgnaWYgKCVzICE9IHVuZGVmaW5lZCkgeycsIGRhdGFTeW0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGUoJ2lmICglcyAhPT0gdW5kZWZpbmVkKSB7JywgZGF0YVN5bSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhciB2YWxpZCA9IFtdLmNvbmNhdCh0eXBlKVxuICAgICAgLm1hcChmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiB0eXBlc1t0IHx8ICdhbnknXShkYXRhU3ltKVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcgfHwgJykgfHwgJ3RydWUnXG5cbiAgICBpZiAodmFsaWQgIT09ICd0cnVlJykge1xuICAgICAgaW5kZW50KytcbiAgICAgIHZhbGlkYXRlKCdpZiAoISglcykpIHsnLCB2YWxpZClcbiAgICAgIGVycm9yKCdpcyB0aGUgd3JvbmcgdHlwZScpXG4gICAgICB2YWxpZGF0ZSgnfSBlbHNlIHsnKVxuICAgIH1cblxuICAgIGlmICh0dXBsZSkge1xuICAgICAgaWYgKG5vZGUuYWRkaXRpb25hbEl0ZW1zID09PSBmYWxzZSkge1xuICAgICAgICB2YWxpZGF0ZSgnaWYgKCVzLmxlbmd0aCA+ICVkKSB7JywgZGF0YVN5bSwgbm9kZS5pdGVtcy5sZW5ndGgpXG4gICAgICAgIGVycm9yKCdoYXMgYWRkaXRpb25hbCBpdGVtcycpXG4gICAgICAgIHZhbGlkYXRlKCd9JylcbiAgICAgIH0gZWxzZSBpZiAobm9kZS5hZGRpdGlvbmFsSXRlbXMpIHtcbiAgICAgICAgdmFyIGkgPSBnZW5sb29wKClcbiAgICAgICAgdmFsaWRhdGUoJ2ZvciAodmFyICVzID0gJWQ7ICVzIDwgJXMubGVuZ3RoOyAlcysrKSB7JywgaSwgbm9kZS5pdGVtcy5sZW5ndGgsIGksIGRhdGFTeW0sIGkpXG4gICAgICAgIHZpc2l0KG5hbWUrJ1snK2krJ10nLCBkYXRhU3ltKydbJytpKyddJywgbm9kZS5hZGRpdGlvbmFsSXRlbXMsIHJlcG9ydGVyLCBmaWx0ZXIpXG4gICAgICAgIHZhbGlkYXRlKCd9JylcbiAgICAgIH0gICBcbiAgICB9XG5cbiAgICBpZiAobm9kZS5mb3JtYXQgJiYgKGZtdHNbbm9kZS5mb3JtYXRdIHx8IHR5cGVvZiBub2RlLmZvcm1hdCA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgIGlmICh0eXBlICE9PSAnc3RyaW5nJyAmJiBmb3JtYXRzW25vZGUuZm9ybWF0XSkgdmFsaWRhdGUoJ2lmICglcykgeycsIHR5cGVzLnN0cmluZyhkYXRhU3ltKSlcbiAgICAgIHZhciBuID0gZ2Vuc3ltKCdmb3JtYXQnKVxuICAgICAgaWYgKHR5cGVvZiBub2RlLmZvcm1hdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBzY29wZVtuXSA9IG5vZGUuZm9ybWF0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NvcGVbbl0gPSBmbXRzW25vZGUuZm9ybWF0XVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHNjb3BlW25dID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciByID0gZ2Vuc3ltKCdyZXN1bHQnKVxuICAgICAgICB2YWxpZGF0ZSgndmFyICVzID0gJXMoJXMsICVzKScsIHIsIG4sIGRhdGFTeW0sIG5vZGVTeW0pXG4gICAgICAgIHZhbGlkYXRlKCdpZiAoISVzKSB7JywgcilcbiAgICAgICAgZXJyb3IoJ211c3QgYmUgJytub2RlLmZvcm1hdCsnIGZvcm1hdCcpXG4gICAgICAgIHZhbGlkYXRlKCd9IGVsc2UgaWYgKHR5cGVvZiAlcyA9PT0gXCJzdHJpbmdcIikgeycsIHIpXG4gICAgICAgIGVycm9yRnJvbVN5bShyKVxuICAgICAgICB2YWxpZGF0ZSgnfScpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWxpZGF0ZSgnaWYgKCElcy50ZXN0KCVzKSkgeycsIG4sIGRhdGFTeW0pXG4gICAgICAgIGVycm9yKCdtdXN0IGJlICcrbm9kZS5mb3JtYXQrJyBmb3JtYXQnKVxuICAgICAgICB2YWxpZGF0ZSgnfScpXG4gICAgICB9XG4gICAgICBpZiAodHlwZSAhPT0gJ3N0cmluZycgJiYgZm9ybWF0c1tub2RlLmZvcm1hdF0pIHZhbGlkYXRlKCd9JylcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShub2RlLnJlcXVpcmVkKSkge1xuICAgICAgdmFyIGlzVW5kZWZpbmVkID0gZnVuY3Rpb24ocmVxKSB7XG4gICAgICAgIHJldHVybiBnZW5vYmooZGF0YVN5bSwgcmVxKSArICcgPT09IHVuZGVmaW5lZCdcbiAgICAgIH1cblxuICAgICAgdmFyIGNoZWNrUmVxdWlyZWQgPSBmdW5jdGlvbiAocmVxKSB7XG4gICAgICAgIGlmIChudWxsQXNVbmRlZmluZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZSgnaWYgKCVzID09IHVuZGVmaW5lZCkgeycsIGdlbm9iaihkYXRhU3ltLCByZXEpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlKCdpZiAoJXMgPT09IHVuZGVmaW5lZCkgeycsIGdlbm9iaihkYXRhU3ltLCByZXEpKVxuICAgICAgICB9XG4gICAgICAgIHZhciByZXFTY2hlbWEgPSBnZW5vYmoobm9kZVN5bSwgJ3Byb3BlcnRpZXMnKSArICcgPyAnICsgZ2Vub2JqKGdlbm9iaihub2RlU3ltLCAncHJvcGVydGllcycpLCByZXEpICsgJyA6IHVuZGVmaW5lZCc7XG4gICAgICAgIGVycm9yKCdpcyByZXF1aXJlZCcsIGdlbm9iaihuYW1lLCByZXEpLCB1bmRlZmluZWQsIHJlcVNjaGVtYSk7XG4gICAgICAgIHZhbGlkYXRlKCdtaXNzaW5nKysnKVxuICAgICAgICB2YWxpZGF0ZSgnfScpXG4gICAgICB9XG4gICAgICB2YWxpZGF0ZSgnaWYgKCglcykpIHsnLCB0eXBlICE9PSAnb2JqZWN0JyA/IHR5cGVzLm9iamVjdChkYXRhU3ltKSA6ICd0cnVlJylcbiAgICAgIHZhbGlkYXRlKCd2YXIgbWlzc2luZyA9IDAnKVxuICAgICAgbm9kZS5yZXF1aXJlZC5tYXAoY2hlY2tSZXF1aXJlZClcbiAgICAgIHZhbGlkYXRlKCd9Jyk7XG4gICAgICBpZiAoIWdyZWVkeSkge1xuICAgICAgICB2YWxpZGF0ZSgnaWYgKG1pc3NpbmcgPT09IDApIHsnKVxuICAgICAgICBpbmRlbnQrK1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChub2RlLnVuaXF1ZUl0ZW1zKSB7XG4gICAgICBpZiAodHlwZSAhPT0gJ2FycmF5JykgdmFsaWRhdGUoJ2lmICglcykgeycsIHR5cGVzLmFycmF5KGRhdGFTeW0pKVxuICAgICAgdmFsaWRhdGUoJ2lmICghKHVuaXF1ZSglcykpKSB7JywgZGF0YVN5bSlcbiAgICAgIGVycm9yKCdtdXN0IGJlIHVuaXF1ZScpXG4gICAgICB2YWxpZGF0ZSgnfScpXG4gICAgICBpZiAodHlwZSAhPT0gJ2FycmF5JykgdmFsaWRhdGUoJ30nKVxuICAgIH1cblxuICAgIGlmIChub2RlLmVudW0pIHtcbiAgICAgIHZhciBjb21wbGV4ID0gbm9kZS5lbnVtLnNvbWUoZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGUgPT09ICdvYmplY3QnXG4gICAgICB9KVxuXG4gICAgICB2YXIgY29tcGFyZSA9IGNvbXBsZXggP1xuICAgICAgICBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgcmV0dXJuICdKU09OLnN0cmluZ2lmeSgnK2RhdGFTeW0rJyknKycgIT09IEpTT04uc3RyaW5naWZ5KCcrSlNPTi5zdHJpbmdpZnkoZSkrJyknXG4gICAgICAgIH0gOlxuICAgICAgICBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgcmV0dXJuIGRhdGFTeW0rJyAhPT0gJytKU09OLnN0cmluZ2lmeShlKVxuICAgICAgICB9XG5cbiAgICAgIHZhbGlkYXRlKCdpZiAoJXMpIHsnLCBub2RlLmVudW0ubWFwKGNvbXBhcmUpLmpvaW4oJyAmJiAnKSB8fCAnZmFsc2UnKVxuICAgICAgZXJyb3IoJ211c3QgYmUgYW4gZW51bSB2YWx1ZScpXG4gICAgICB2YWxpZGF0ZSgnfScpXG4gICAgfVxuXG4gICAgaWYgKG5vZGUuZGVwZW5kZW5jaWVzKSB7XG4gICAgICBpZiAodHlwZSAhPT0gJ29iamVjdCcpIHZhbGlkYXRlKCdpZiAoJXMpIHsnLCB0eXBlcy5vYmplY3QoZGF0YVN5bSkpXG5cbiAgICAgIE9iamVjdC5rZXlzKG5vZGUuZGVwZW5kZW5jaWVzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICB2YXIgZGVwcyA9IG5vZGUuZGVwZW5kZW5jaWVzW2tleV1cbiAgICAgICAgaWYgKHR5cGVvZiBkZXBzID09PSAnc3RyaW5nJykgZGVwcyA9IFtkZXBzXVxuXG4gICAgICAgIHZhciBleGlzdHMgPSBmdW5jdGlvbihrKSB7XG4gICAgICAgICAgcmV0dXJuIGdlbm9iaihkYXRhU3ltLCBrKSArICcgIT09IHVuZGVmaW5lZCdcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRlcHMpKSB7XG4gICAgICAgICAgdmFsaWRhdGUoJ2lmICglcyAhPT0gdW5kZWZpbmVkICYmICEoJXMpKSB7JywgZ2Vub2JqKGRhdGFTeW0sIGtleSksIGRlcHMubWFwKGV4aXN0cykuam9pbignICYmICcpIHx8ICd0cnVlJylcbiAgICAgICAgICBlcnJvcignZGVwZW5kZW5jaWVzIG5vdCBzZXQnKVxuICAgICAgICAgIHZhbGlkYXRlKCd9JylcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGRlcHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdmFsaWRhdGUoJ2lmICglcyAhPT0gdW5kZWZpbmVkKSB7JywgZ2Vub2JqKGRhdGFTeW0sIGtleSkpXG4gICAgICAgICAgdmlzaXQobmFtZSwgZGF0YVN5bSwgZGVwcywgcmVwb3J0ZXIsIGZpbHRlcilcbiAgICAgICAgICB2YWxpZGF0ZSgnfScpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGlmICh0eXBlICE9PSAnb2JqZWN0JykgdmFsaWRhdGUoJ30nKVxuICAgIH1cblxuICAgIGlmIChub2RlLmFkZGl0aW9uYWxQcm9wZXJ0aWVzIHx8IG5vZGUuYWRkaXRpb25hbFByb3BlcnRpZXMgPT09IGZhbHNlKSB7XG4gICAgICBpZiAodHlwZSAhPT0gJ29iamVjdCcpIHZhbGlkYXRlKCdpZiAoJXMpIHsnLCB0eXBlcy5vYmplY3QoZGF0YVN5bSkpXG5cbiAgICAgIHZhciBpID0gZ2VubG9vcCgpXG4gICAgICB2YXIga2V5cyA9IGdlbnN5bSgna2V5cycpXG5cbiAgICAgIHZhciB0b0NvbXBhcmUgPSBmdW5jdGlvbihwKSB7XG4gICAgICAgIHJldHVybiBrZXlzKydbJytpKyddICE9PSAnK0pTT04uc3RyaW5naWZ5KHApXG4gICAgICB9XG5cbiAgICAgIHZhciB0b1Rlc3QgPSBmdW5jdGlvbihwKSB7XG4gICAgICAgIHJldHVybiAnIScrcGF0dGVybnMocCkrJy50ZXN0KCcra2V5cysnWycraSsnXSknXG4gICAgICB9XG5cbiAgICAgIHZhciBhZGRpdGlvbmFsUHJvcCA9IE9iamVjdC5rZXlzKHByb3BlcnRpZXMgfHwge30pLm1hcCh0b0NvbXBhcmUpXG4gICAgICAgIC5jb25jYXQoT2JqZWN0LmtleXMobm9kZS5wYXR0ZXJuUHJvcGVydGllcyB8fCB7fSkubWFwKHRvVGVzdCkpXG4gICAgICAgIC5qb2luKCcgJiYgJykgfHwgJ3RydWUnXG5cbiAgICAgIHZhbGlkYXRlKCd2YXIgJXMgPSBPYmplY3Qua2V5cyglcyknLCBrZXlzLCBkYXRhU3ltKVxuICAgICAgICAoJ2ZvciAodmFyICVzID0gMDsgJXMgPCAlcy5sZW5ndGg7ICVzKyspIHsnLCBpLCBpLCBrZXlzLCBpKVxuICAgICAgICAgICgnaWYgKCVzKSB7JywgYWRkaXRpb25hbFByb3ApXG5cbiAgICAgIGlmIChub2RlLmFkZGl0aW9uYWxQcm9wZXJ0aWVzID09PSBmYWxzZSkge1xuICAgICAgICBpZiAoZmlsdGVyKSB2YWxpZGF0ZSgnZGVsZXRlICVzJywgZGF0YVN5bSsnWycra2V5cysnWycraSsnXV0nKVxuICAgICAgICBlcnJvcignaGFzIGFkZGl0aW9uYWwgcHJvcGVydGllcycsIG51bGwsIEpTT04uc3RyaW5naWZ5KG5hbWUrJy4nKSArICcgKyAnICsga2V5cyArICdbJytpKyddJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZpc2l0KG5hbWUrJ1snK2tleXMrJ1snK2krJ11dJywgZGF0YVN5bSsnWycra2V5cysnWycraSsnXV0nLCBub2RlLmFkZGl0aW9uYWxQcm9wZXJ0aWVzLCByZXBvcnRlciwgZmlsdGVyKVxuICAgICAgfVxuXG4gICAgICB2YWxpZGF0ZVxuICAgICAgICAgICgnfScpXG4gICAgICAgICgnfScpXG5cbiAgICAgIGlmICh0eXBlICE9PSAnb2JqZWN0JykgdmFsaWRhdGUoJ30nKVxuICAgIH1cblxuICAgIGlmIChub2RlLiRyZWYpIHtcbiAgICAgIHZhciBzdWIgPSBnZXQocm9vdCwgb3B0cyAmJiBvcHRzLnNjaGVtYXMgfHwge30sIG5vZGUuJHJlZilcbiAgICAgIGlmIChzdWIpIHtcbiAgICAgICAgdmFyIGZuID0gY2FjaGVbbm9kZS4kcmVmXVxuICAgICAgICBpZiAoIWZuKSB7XG4gICAgICAgICAgY2FjaGVbbm9kZS4kcmVmXSA9IGZ1bmN0aW9uIHByb3h5KGRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiBmbihkYXRhKVxuICAgICAgICAgIH1cbiAgICAgICAgICBmbiA9IGNvbXBpbGUoc3ViLCBjYWNoZSwgcm9vdCwgZmFsc2UsIG9wdHMpXG4gICAgICAgIH1cbiAgICAgICAgdmFyIG4gPSBnZW5zeW0oJ3JlZicpXG4gICAgICAgIHNjb3BlW25dID0gZm5cbiAgICAgICAgdmFsaWRhdGUoJ2lmICghKCVzKCVzKSkpIHsnLCBuLCBkYXRhU3ltKVxuICAgICAgICBlcnJvcigncmVmZXJlbmNlZCBzY2hlbWEgZG9lcyBub3QgbWF0Y2gnKVxuICAgICAgICB2YWxpZGF0ZSgnfScpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5vZGUubm90KSB7XG4gICAgICB2YXIgcHJldiA9IGdlbnN5bSgncHJldicpXG4gICAgICB2YWxpZGF0ZSgndmFyICVzID0gZXJyb3JzJywgcHJldilcbiAgICAgIHZpc2l0KG5hbWUsIGRhdGFTeW0sIG5vZGUubm90LCBmYWxzZSwgZmlsdGVyKVxuICAgICAgdmFsaWRhdGUoJ2lmICglcyA9PT0gZXJyb3JzKSB7JywgcHJldilcbiAgICAgIGVycm9yKCduZWdhdGl2ZSBzY2hlbWEgbWF0Y2hlcycpXG4gICAgICB2YWxpZGF0ZSgnfSBlbHNlIHsnKVxuICAgICAgICAoJ2Vycm9ycyA9ICVzJywgcHJldilcbiAgICAgICgnfScpXG4gICAgfVxuXG4gICAgaWYgKG5vZGUuaXRlbXMgJiYgIXR1cGxlKSB7XG4gICAgICBpZiAodHlwZSAhPT0gJ2FycmF5JykgdmFsaWRhdGUoJ2lmICglcykgeycsIHR5cGVzLmFycmF5KGRhdGFTeW0pKVxuXG4gICAgICB2YXIgaSA9IGdlbmxvb3AoKVxuICAgICAgdmFsaWRhdGUoJ2ZvciAodmFyICVzID0gMDsgJXMgPCAlcy5sZW5ndGg7ICVzKyspIHsnLCBpLCBpLCBkYXRhU3ltLCBpKVxuICAgICAgdmlzaXQobmFtZSsnWycraSsnXScsIGRhdGFTeW0rJ1snK2krJ10nLCBub2RlLml0ZW1zLCByZXBvcnRlciwgZmlsdGVyKVxuICAgICAgdmFsaWRhdGUoJ30nKVxuXG4gICAgICBpZiAodHlwZSAhPT0gJ2FycmF5JykgdmFsaWRhdGUoJ30nKVxuICAgIH1cblxuICAgIGlmIChub2RlLnBhdHRlcm5Qcm9wZXJ0aWVzKSB7XG4gICAgICBpZiAodHlwZSAhPT0gJ29iamVjdCcpIHZhbGlkYXRlKCdpZiAoJXMpIHsnLCB0eXBlcy5vYmplY3QoZGF0YVN5bSkpXG4gICAgICB2YXIga2V5cyA9IGdlbnN5bSgna2V5cycpXG4gICAgICB2YXIgaSA9IGdlbmxvb3AoKVxuICAgICAgdmFsaWRhdGVcbiAgICAgICAgKCd2YXIgJXMgPSBPYmplY3Qua2V5cyglcyknLCBrZXlzLCBkYXRhU3ltKVxuICAgICAgICAoJ2ZvciAodmFyICVzID0gMDsgJXMgPCAlcy5sZW5ndGg7ICVzKyspIHsnLCBpLCBpLCBrZXlzLCBpKVxuXG4gICAgICBPYmplY3Qua2V5cyhub2RlLnBhdHRlcm5Qcm9wZXJ0aWVzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICB2YXIgcCA9IHBhdHRlcm5zKGtleSlcbiAgICAgICAgdmFsaWRhdGUoJ2lmICglcy50ZXN0KCVzKSkgeycsIHAsIGtleXMrJ1snK2krJ10nKVxuICAgICAgICB2aXNpdChuYW1lKydbJytrZXlzKydbJytpKyddXScsIGRhdGFTeW0rJ1snK2tleXMrJ1snK2krJ11dJywgbm9kZS5wYXR0ZXJuUHJvcGVydGllc1trZXldLCByZXBvcnRlciwgZmlsdGVyKVxuICAgICAgICB2YWxpZGF0ZSgnfScpXG4gICAgICB9KVxuXG4gICAgICB2YWxpZGF0ZSgnfScpXG4gICAgICBpZiAodHlwZSAhPT0gJ29iamVjdCcpIHZhbGlkYXRlKCd9JylcbiAgICB9XG5cbiAgICBpZiAobm9kZS5wYXR0ZXJuKSB7XG4gICAgICB2YXIgcCA9IHBhdHRlcm5zKG5vZGUucGF0dGVybilcbiAgICAgIGlmICh0eXBlICE9PSAnc3RyaW5nJykgdmFsaWRhdGUoJ2lmICglcykgeycsIHR5cGVzLnN0cmluZyhkYXRhU3ltKSlcbiAgICAgIHZhbGlkYXRlKCdpZiAoISglcy50ZXN0KCVzKSkpIHsnLCBwLCBkYXRhU3ltKVxuICAgICAgZXJyb3IoJ3BhdHRlcm4gbWlzbWF0Y2gnKVxuICAgICAgdmFsaWRhdGUoJ30nKVxuICAgICAgaWYgKHR5cGUgIT09ICdzdHJpbmcnKSB2YWxpZGF0ZSgnfScpXG4gICAgfVxuXG4gICAgaWYgKG5vZGUuYWxsT2YpIHtcbiAgICAgIG5vZGUuYWxsT2YuZm9yRWFjaChmdW5jdGlvbihzY2gpIHtcbiAgICAgICAgdmlzaXQobmFtZSwgZGF0YVN5bSwgc2NoLCByZXBvcnRlciwgZmlsdGVyKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAobm9kZS5hbnlPZiAmJiBub2RlLmFueU9mLmxlbmd0aCkge1xuICAgICAgdmFyIHByZXYgPSBnZW5zeW0oJ3ByZXYnKVxuXG4gICAgICBub2RlLmFueU9mLmZvckVhY2goZnVuY3Rpb24oc2NoLCBpKSB7XG4gICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgdmFsaWRhdGUoJ3ZhciAlcyA9IGVycm9ycycsIHByZXYpXG4gICAgICAgIH0gZWxzZSB7ICAgICAgICAgIFxuICAgICAgICAgIHZhbGlkYXRlKCdpZiAoZXJyb3JzICE9PSAlcykgeycsIHByZXYpXG4gICAgICAgICAgICAoJ2Vycm9ycyA9ICVzJywgcHJldilcbiAgICAgICAgfVxuICAgICAgICB2aXNpdChuYW1lLCBkYXRhU3ltLCBzY2gsIGZhbHNlLCBmYWxzZSlcbiAgICAgIH0pXG4gICAgICBub2RlLmFueU9mLmZvckVhY2goZnVuY3Rpb24oc2NoLCBpKSB7XG4gICAgICAgIGlmIChpKSB2YWxpZGF0ZSgnfScpXG4gICAgICB9KVxuICAgICAgdmFsaWRhdGUoJ2lmICglcyAhPT0gZXJyb3JzKSB7JywgcHJldilcbiAgICAgIGVycm9yKCdubyBzY2hlbWFzIG1hdGNoJylcbiAgICAgIHZhbGlkYXRlKCd9JylcbiAgICB9XG5cbiAgICBpZiAobm9kZS5vbmVPZiAmJiBub2RlLm9uZU9mLmxlbmd0aCkge1xuICAgICAgdmFyIHByZXYgPSBnZW5zeW0oJ3ByZXYnKVxuICAgICAgdmFyIHBhc3NlcyA9IGdlbnN5bSgncGFzc2VzJylcblxuICAgICAgdmFsaWRhdGVcbiAgICAgICAgKCd2YXIgJXMgPSBlcnJvcnMnLCBwcmV2KVxuICAgICAgICAoJ3ZhciAlcyA9IDAnLCBwYXNzZXMpXG5cbiAgICAgIG5vZGUub25lT2YuZm9yRWFjaChmdW5jdGlvbihzY2gsIGkpIHtcbiAgICAgICAgdmlzaXQobmFtZSwgZGF0YVN5bSwgc2NoLCBmYWxzZSwgZmFsc2UpXG4gICAgICAgIHZhbGlkYXRlKCdpZiAoJXMgPT09IGVycm9ycykgeycsIHByZXYpXG4gICAgICAgICAgKCclcysrJywgcGFzc2VzKVxuICAgICAgICAoJ30gZWxzZSB7JylcbiAgICAgICAgICAoJ2Vycm9ycyA9ICVzJywgcHJldilcbiAgICAgICAgKCd9JylcbiAgICAgIH0pXG5cbiAgICAgIHZhbGlkYXRlKCdpZiAoJXMgIT09IDEpIHsnLCBwYXNzZXMpXG4gICAgICBlcnJvcignbm8gKG9yIG1vcmUgdGhhbiBvbmUpIHNjaGVtYXMgbWF0Y2gnKVxuICAgICAgdmFsaWRhdGUoJ30nKVxuICAgIH1cblxuICAgIGlmIChub2RlLm11bHRpcGxlT2YgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGUgIT09ICdudW1iZXInICYmIHR5cGUgIT09ICdpbnRlZ2VyJykgdmFsaWRhdGUoJ2lmICglcykgeycsIHR5cGVzLm51bWJlcihkYXRhU3ltKSlcblxuICAgICAgdmFyIGZhY3RvciA9ICgobm9kZS5tdWx0aXBsZU9mIHwgMCkgIT09IG5vZGUubXVsdGlwbGVPZikgPyBNYXRoLnBvdygxMCwgbm9kZS5tdWx0aXBsZU9mLnRvU3RyaW5nKCkuc3BsaXQoJy4nKS5wb3AoKS5sZW5ndGgpIDogMVxuICAgICAgaWYgKGZhY3RvciA+IDEpIHZhbGlkYXRlKCdpZiAoKCVkKiVzKSAlICVkKSB7JywgZmFjdG9yLCBkYXRhU3ltLCBmYWN0b3Iqbm9kZS5tdWx0aXBsZU9mKVxuICAgICAgZWxzZSB2YWxpZGF0ZSgnaWYgKCVzICUgJWQpIHsnLCBkYXRhU3ltLCBub2RlLm11bHRpcGxlT2YpXG5cbiAgICAgIGVycm9yKCdoYXMgYSByZW1haW5kZXInKVxuICAgICAgdmFsaWRhdGUoJ30nKVxuXG4gICAgICBpZiAodHlwZSAhPT0gJ251bWJlcicgJiYgdHlwZSAhPT0gJ2ludGVnZXInKSB2YWxpZGF0ZSgnfScpXG4gICAgfVxuXG4gICAgaWYgKG5vZGUubWF4UHJvcGVydGllcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZSAhPT0gJ29iamVjdCcpIHZhbGlkYXRlKCdpZiAoJXMpIHsnLCB0eXBlcy5vYmplY3QoZGF0YVN5bSkpXG4gICAgICBcbiAgICAgIHZhbGlkYXRlKCdpZiAoT2JqZWN0LmtleXMoJXMpLmxlbmd0aCA+ICVkKSB7JywgZGF0YVN5bSwgbm9kZS5tYXhQcm9wZXJ0aWVzKVxuICAgICAgZXJyb3IoJ2hhcyBtb3JlIHByb3BlcnRpZXMgdGhhbiBhbGxvd2VkJylcbiAgICAgIHZhbGlkYXRlKCd9JylcblxuICAgICAgaWYgKHR5cGUgIT09ICdvYmplY3QnKSB2YWxpZGF0ZSgnfScpXG4gICAgfVxuXG4gICAgaWYgKG5vZGUubWluUHJvcGVydGllcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZSAhPT0gJ29iamVjdCcpIHZhbGlkYXRlKCdpZiAoJXMpIHsnLCB0eXBlcy5vYmplY3QoZGF0YVN5bSkpXG4gICAgICBcbiAgICAgIHZhbGlkYXRlKCdpZiAoT2JqZWN0LmtleXMoJXMpLmxlbmd0aCA8ICVkKSB7JywgZGF0YVN5bSwgbm9kZS5taW5Qcm9wZXJ0aWVzKVxuICAgICAgZXJyb3IoJ2hhcyBsZXNzIHByb3BlcnRpZXMgdGhhbiBhbGxvd2VkJylcbiAgICAgIHZhbGlkYXRlKCd9JylcblxuICAgICAgaWYgKHR5cGUgIT09ICdvYmplY3QnKSB2YWxpZGF0ZSgnfScpXG4gICAgfVxuXG4gICAgaWYgKG5vZGUubWF4SXRlbXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGUgIT09ICdhcnJheScpIHZhbGlkYXRlKCdpZiAoJXMpIHsnLCB0eXBlcy5hcnJheShkYXRhU3ltKSlcbiAgICAgIFxuICAgICAgdmFsaWRhdGUoJ2lmICglcy5sZW5ndGggPiAlZCkgeycsIGRhdGFTeW0sIG5vZGUubWF4SXRlbXMpXG4gICAgICBlcnJvcignaGFzIG1vcmUgaXRlbXMgdGhhbiBhbGxvd2VkJylcbiAgICAgIHZhbGlkYXRlKCd9JylcblxuICAgICAgaWYgKHR5cGUgIT09ICdhcnJheScpIHZhbGlkYXRlKCd9JylcbiAgICB9XG5cbiAgICBpZiAobm9kZS5taW5JdGVtcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZSAhPT0gJ2FycmF5JykgdmFsaWRhdGUoJ2lmICglcykgeycsIHR5cGVzLmFycmF5KGRhdGFTeW0pKVxuICAgICAgXG4gICAgICB2YWxpZGF0ZSgnaWYgKCVzLmxlbmd0aCA8ICVkKSB7JywgZGF0YVN5bSwgbm9kZS5taW5JdGVtcylcbiAgICAgIGVycm9yKCdoYXMgbGVzcyBpdGVtcyB0aGFuIGFsbG93ZWQnKVxuICAgICAgdmFsaWRhdGUoJ30nKVxuXG4gICAgICBpZiAodHlwZSAhPT0gJ2FycmF5JykgdmFsaWRhdGUoJ30nKVxuICAgIH1cblxuICAgIGlmIChub2RlLm1heExlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZSAhPT0gJ3N0cmluZycpIHZhbGlkYXRlKCdpZiAoJXMpIHsnLCB0eXBlcy5zdHJpbmcoZGF0YVN5bSkpXG5cbiAgICAgIHZhbGlkYXRlKCdpZiAoJXMubGVuZ3RoID4gJWQpIHsnLCBkYXRhU3ltLCBub2RlLm1heExlbmd0aClcbiAgICAgIGVycm9yKCdoYXMgbG9uZ2VyIGxlbmd0aCB0aGFuIGFsbG93ZWQnKVxuICAgICAgdmFsaWRhdGUoJ30nKVxuXG4gICAgICBpZiAodHlwZSAhPT0gJ3N0cmluZycpIHZhbGlkYXRlKCd9JylcbiAgICB9XG5cbiAgICBpZiAobm9kZS5taW5MZW5ndGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGUgIT09ICdzdHJpbmcnKSB2YWxpZGF0ZSgnaWYgKCVzKSB7JywgdHlwZXMuc3RyaW5nKGRhdGFTeW0pKVxuXG4gICAgICB2YWxpZGF0ZSgnaWYgKCVzLmxlbmd0aCA8ICVkKSB7JywgZGF0YVN5bSwgbm9kZS5taW5MZW5ndGgpXG4gICAgICBlcnJvcignaGFzIGxlc3MgbGVuZ3RoIHRoYW4gYWxsb3dlZCcpXG4gICAgICB2YWxpZGF0ZSgnfScpXG5cbiAgICAgIGlmICh0eXBlICE9PSAnc3RyaW5nJykgdmFsaWRhdGUoJ30nKVxuICAgIH1cblxuICAgIGlmIChub2RlLm1pbmltdW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFsaWRhdGUoJ2lmICglcyAlcyAlZCkgeycsIGRhdGFTeW0sIG5vZGUuZXhjbHVzaXZlTWluaW11bSA/ICc8PScgOiAnPCcsIG5vZGUubWluaW11bSlcbiAgICAgIGVycm9yKCdpcyBsZXNzIHRoYW4gbWluaW11bScpXG4gICAgICB2YWxpZGF0ZSgnfScpXG4gICAgfVxuXG4gICAgaWYgKG5vZGUubWF4aW11bSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YWxpZGF0ZSgnaWYgKCVzICVzICVkKSB7JywgZGF0YVN5bSwgbm9kZS5leGNsdXNpdmVNYXhpbXVtID8gJz49JyA6ICc+Jywgbm9kZS5tYXhpbXVtKVxuICAgICAgZXJyb3IoJ2lzIG1vcmUgdGhhbiBtYXhpbXVtJylcbiAgICAgIHZhbGlkYXRlKCd9JylcbiAgICB9XG5cbiAgICBpZiAocHJvcGVydGllcykge1xuICAgICAgT2JqZWN0LmtleXMocHJvcGVydGllcykuZm9yRWFjaChmdW5jdGlvbihwKSB7XG4gICAgICAgIHZpc2l0KGdlbm9iaihuYW1lLCBwKSwgZ2Vub2JqKGRhdGFTeW0sIHApLCBwcm9wZXJ0aWVzW3BdLCByZXBvcnRlciwgZmlsdGVyKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB3aGlsZSAoaW5kZW50LS0pIHZhbGlkYXRlKCd9JylcbiAgfVxuXG4gIHZhciB2YWxpZGF0ZSA9IGdlbmZ1blxuICAgICgnZnVuY3Rpb24gdmFsaWRhdGUoZGF0YSkgeycpXG4gICAgICAoJ3ZhbGlkYXRlLmVycm9ycyA9IG51bGwnKVxuICAgICAgKCd2YXIgZXJyb3JzID0gMCcpXG5cbiAgdmlzaXQoJ2RhdGEnLCAnZGF0YScsIHNjaGVtYSwgcmVwb3J0ZXIsIG9wdHMgJiYgb3B0cy5maWx0ZXIpXG5cbiAgdmFsaWRhdGVcbiAgICAgICgncmV0dXJuIGVycm9ycyA9PT0gMCcpXG4gICAgKCd9JylcblxuICB2YWxpZGF0ZSA9IHZhbGlkYXRlLnRvRnVuY3Rpb24oc2NvcGUpXG4gIHZhbGlkYXRlLmVycm9ycyA9IG51bGxcblxuICB2YWxpZGF0ZS5fX2RlZmluZUdldHRlcl9fKCdlcnJvcicsIGZ1bmN0aW9uKCkge1xuICAgIGlmICghdmFsaWRhdGUuZXJyb3JzKSByZXR1cm4gJydcbiAgICByZXR1cm4gdmFsaWRhdGUuZXJyb3JzXG4gICAgICAubWFwKGZ1bmN0aW9uKGVycikge1xuICAgICAgICByZXR1cm4gZXJyLmZpZWxkKycgJytlcnIubWVzc2FnZVxuICAgICAgfSlcbiAgICAgIC5qb2luKCdcXG4nKVxuICB9KVxuXG4gIHZhbGlkYXRlLnRvSlNPTiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBzY2hlbWFcbiAgfVxuXG4gIHJldHVybiB2YWxpZGF0ZVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHNjaGVtYSwgb3B0cykge1xuICBpZiAodHlwZW9mIHNjaGVtYSA9PT0gJ3N0cmluZycpIHNjaGVtYSA9IEpTT04ucGFyc2Uoc2NoZW1hKVxuICByZXR1cm4gY29tcGlsZShzY2hlbWEsIHt9LCBzY2hlbWEsIHRydWUsIG9wdHMpXG59XG5cbm1vZHVsZS5leHBvcnRzLmZpbHRlciA9IGZ1bmN0aW9uKHNjaGVtYSwgb3B0cykge1xuICB2YXIgdmFsaWRhdGUgPSBtb2R1bGUuZXhwb3J0cyhzY2hlbWEsIHh0ZW5kKG9wdHMsIHtmaWx0ZXI6IHRydWV9KSlcbiAgcmV0dXJuIGZ1bmN0aW9uKHNjaCkge1xuICAgIHZhbGlkYXRlKHNjaClcbiAgICByZXR1cm4gc2NoXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL19zY2hlbWEvaW5kZXguanNcbiAqKi8iLCJ2YXIgaXNQcm9wZXJ0eSA9IHJlcXVpcmUoJ2lzLXByb3BlcnR5JylcblxudmFyIGdlbiA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkge1xuICByZXR1cm4gaXNQcm9wZXJ0eShwcm9wKSA/IG9iaisnLicrcHJvcCA6IG9iaisnWycrSlNPTi5zdHJpbmdpZnkocHJvcCkrJ10nXG59XG5cbmdlbi52YWxpZCA9IGlzUHJvcGVydHlcbmdlbi5wcm9wZXJ0eSA9IGZ1bmN0aW9uIChwcm9wKSB7XG4gcmV0dXJuIGlzUHJvcGVydHkocHJvcCkgPyBwcm9wIDogSlNPTi5zdHJpbmdpZnkocHJvcClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZW5cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2dlbmVyYXRlLW9iamVjdC1wcm9wZXJ0eS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiXG5mdW5jdGlvbiBpc1Byb3BlcnR5KHN0cikge1xuICByZXR1cm4gL15bJEEtWlxcX2EtelxceGFhXFx4YjVcXHhiYVxceGMwLVxceGQ2XFx4ZDgtXFx4ZjZcXHhmOC1cXHUwMmMxXFx1MDJjNi1cXHUwMmQxXFx1MDJlMC1cXHUwMmU0XFx1MDJlY1xcdTAyZWVcXHUwMzcwLVxcdTAzNzRcXHUwMzc2XFx1MDM3N1xcdTAzN2EtXFx1MDM3ZFxcdTAzODZcXHUwMzg4LVxcdTAzOGFcXHUwMzhjXFx1MDM4ZS1cXHUwM2ExXFx1MDNhMy1cXHUwM2Y1XFx1MDNmNy1cXHUwNDgxXFx1MDQ4YS1cXHUwNTI3XFx1MDUzMS1cXHUwNTU2XFx1MDU1OVxcdTA1NjEtXFx1MDU4N1xcdTA1ZDAtXFx1MDVlYVxcdTA1ZjAtXFx1MDVmMlxcdTA2MjAtXFx1MDY0YVxcdTA2NmVcXHUwNjZmXFx1MDY3MS1cXHUwNmQzXFx1MDZkNVxcdTA2ZTVcXHUwNmU2XFx1MDZlZVxcdTA2ZWZcXHUwNmZhLVxcdTA2ZmNcXHUwNmZmXFx1MDcxMFxcdTA3MTItXFx1MDcyZlxcdTA3NGQtXFx1MDdhNVxcdTA3YjFcXHUwN2NhLVxcdTA3ZWFcXHUwN2Y0XFx1MDdmNVxcdTA3ZmFcXHUwODAwLVxcdTA4MTVcXHUwODFhXFx1MDgyNFxcdTA4MjhcXHUwODQwLVxcdTA4NThcXHUwOGEwXFx1MDhhMi1cXHUwOGFjXFx1MDkwNC1cXHUwOTM5XFx1MDkzZFxcdTA5NTBcXHUwOTU4LVxcdTA5NjFcXHUwOTcxLVxcdTA5NzdcXHUwOTc5LVxcdTA5N2ZcXHUwOTg1LVxcdTA5OGNcXHUwOThmXFx1MDk5MFxcdTA5OTMtXFx1MDlhOFxcdTA5YWEtXFx1MDliMFxcdTA5YjJcXHUwOWI2LVxcdTA5YjlcXHUwOWJkXFx1MDljZVxcdTA5ZGNcXHUwOWRkXFx1MDlkZi1cXHUwOWUxXFx1MDlmMFxcdTA5ZjFcXHUwYTA1LVxcdTBhMGFcXHUwYTBmXFx1MGExMFxcdTBhMTMtXFx1MGEyOFxcdTBhMmEtXFx1MGEzMFxcdTBhMzJcXHUwYTMzXFx1MGEzNVxcdTBhMzZcXHUwYTM4XFx1MGEzOVxcdTBhNTktXFx1MGE1Y1xcdTBhNWVcXHUwYTcyLVxcdTBhNzRcXHUwYTg1LVxcdTBhOGRcXHUwYThmLVxcdTBhOTFcXHUwYTkzLVxcdTBhYThcXHUwYWFhLVxcdTBhYjBcXHUwYWIyXFx1MGFiM1xcdTBhYjUtXFx1MGFiOVxcdTBhYmRcXHUwYWQwXFx1MGFlMFxcdTBhZTFcXHUwYjA1LVxcdTBiMGNcXHUwYjBmXFx1MGIxMFxcdTBiMTMtXFx1MGIyOFxcdTBiMmEtXFx1MGIzMFxcdTBiMzJcXHUwYjMzXFx1MGIzNS1cXHUwYjM5XFx1MGIzZFxcdTBiNWNcXHUwYjVkXFx1MGI1Zi1cXHUwYjYxXFx1MGI3MVxcdTBiODNcXHUwYjg1LVxcdTBiOGFcXHUwYjhlLVxcdTBiOTBcXHUwYjkyLVxcdTBiOTVcXHUwYjk5XFx1MGI5YVxcdTBiOWNcXHUwYjllXFx1MGI5ZlxcdTBiYTNcXHUwYmE0XFx1MGJhOC1cXHUwYmFhXFx1MGJhZS1cXHUwYmI5XFx1MGJkMFxcdTBjMDUtXFx1MGMwY1xcdTBjMGUtXFx1MGMxMFxcdTBjMTItXFx1MGMyOFxcdTBjMmEtXFx1MGMzM1xcdTBjMzUtXFx1MGMzOVxcdTBjM2RcXHUwYzU4XFx1MGM1OVxcdTBjNjBcXHUwYzYxXFx1MGM4NS1cXHUwYzhjXFx1MGM4ZS1cXHUwYzkwXFx1MGM5Mi1cXHUwY2E4XFx1MGNhYS1cXHUwY2IzXFx1MGNiNS1cXHUwY2I5XFx1MGNiZFxcdTBjZGVcXHUwY2UwXFx1MGNlMVxcdTBjZjFcXHUwY2YyXFx1MGQwNS1cXHUwZDBjXFx1MGQwZS1cXHUwZDEwXFx1MGQxMi1cXHUwZDNhXFx1MGQzZFxcdTBkNGVcXHUwZDYwXFx1MGQ2MVxcdTBkN2EtXFx1MGQ3ZlxcdTBkODUtXFx1MGQ5NlxcdTBkOWEtXFx1MGRiMVxcdTBkYjMtXFx1MGRiYlxcdTBkYmRcXHUwZGMwLVxcdTBkYzZcXHUwZTAxLVxcdTBlMzBcXHUwZTMyXFx1MGUzM1xcdTBlNDAtXFx1MGU0NlxcdTBlODFcXHUwZTgyXFx1MGU4NFxcdTBlODdcXHUwZTg4XFx1MGU4YVxcdTBlOGRcXHUwZTk0LVxcdTBlOTdcXHUwZTk5LVxcdTBlOWZcXHUwZWExLVxcdTBlYTNcXHUwZWE1XFx1MGVhN1xcdTBlYWFcXHUwZWFiXFx1MGVhZC1cXHUwZWIwXFx1MGViMlxcdTBlYjNcXHUwZWJkXFx1MGVjMC1cXHUwZWM0XFx1MGVjNlxcdTBlZGMtXFx1MGVkZlxcdTBmMDBcXHUwZjQwLVxcdTBmNDdcXHUwZjQ5LVxcdTBmNmNcXHUwZjg4LVxcdTBmOGNcXHUxMDAwLVxcdTEwMmFcXHUxMDNmXFx1MTA1MC1cXHUxMDU1XFx1MTA1YS1cXHUxMDVkXFx1MTA2MVxcdTEwNjVcXHUxMDY2XFx1MTA2ZS1cXHUxMDcwXFx1MTA3NS1cXHUxMDgxXFx1MTA4ZVxcdTEwYTAtXFx1MTBjNVxcdTEwYzdcXHUxMGNkXFx1MTBkMC1cXHUxMGZhXFx1MTBmYy1cXHUxMjQ4XFx1MTI0YS1cXHUxMjRkXFx1MTI1MC1cXHUxMjU2XFx1MTI1OFxcdTEyNWEtXFx1MTI1ZFxcdTEyNjAtXFx1MTI4OFxcdTEyOGEtXFx1MTI4ZFxcdTEyOTAtXFx1MTJiMFxcdTEyYjItXFx1MTJiNVxcdTEyYjgtXFx1MTJiZVxcdTEyYzBcXHUxMmMyLVxcdTEyYzVcXHUxMmM4LVxcdTEyZDZcXHUxMmQ4LVxcdTEzMTBcXHUxMzEyLVxcdTEzMTVcXHUxMzE4LVxcdTEzNWFcXHUxMzgwLVxcdTEzOGZcXHUxM2EwLVxcdTEzZjRcXHUxNDAxLVxcdTE2NmNcXHUxNjZmLVxcdTE2N2ZcXHUxNjgxLVxcdTE2OWFcXHUxNmEwLVxcdTE2ZWFcXHUxNmVlLVxcdTE2ZjBcXHUxNzAwLVxcdTE3MGNcXHUxNzBlLVxcdTE3MTFcXHUxNzIwLVxcdTE3MzFcXHUxNzQwLVxcdTE3NTFcXHUxNzYwLVxcdTE3NmNcXHUxNzZlLVxcdTE3NzBcXHUxNzgwLVxcdTE3YjNcXHUxN2Q3XFx1MTdkY1xcdTE4MjAtXFx1MTg3N1xcdTE4ODAtXFx1MThhOFxcdTE4YWFcXHUxOGIwLVxcdTE4ZjVcXHUxOTAwLVxcdTE5MWNcXHUxOTUwLVxcdTE5NmRcXHUxOTcwLVxcdTE5NzRcXHUxOTgwLVxcdTE5YWJcXHUxOWMxLVxcdTE5YzdcXHUxYTAwLVxcdTFhMTZcXHUxYTIwLVxcdTFhNTRcXHUxYWE3XFx1MWIwNS1cXHUxYjMzXFx1MWI0NS1cXHUxYjRiXFx1MWI4My1cXHUxYmEwXFx1MWJhZVxcdTFiYWZcXHUxYmJhLVxcdTFiZTVcXHUxYzAwLVxcdTFjMjNcXHUxYzRkLVxcdTFjNGZcXHUxYzVhLVxcdTFjN2RcXHUxY2U5LVxcdTFjZWNcXHUxY2VlLVxcdTFjZjFcXHUxY2Y1XFx1MWNmNlxcdTFkMDAtXFx1MWRiZlxcdTFlMDAtXFx1MWYxNVxcdTFmMTgtXFx1MWYxZFxcdTFmMjAtXFx1MWY0NVxcdTFmNDgtXFx1MWY0ZFxcdTFmNTAtXFx1MWY1N1xcdTFmNTlcXHUxZjViXFx1MWY1ZFxcdTFmNWYtXFx1MWY3ZFxcdTFmODAtXFx1MWZiNFxcdTFmYjYtXFx1MWZiY1xcdTFmYmVcXHUxZmMyLVxcdTFmYzRcXHUxZmM2LVxcdTFmY2NcXHUxZmQwLVxcdTFmZDNcXHUxZmQ2LVxcdTFmZGJcXHUxZmUwLVxcdTFmZWNcXHUxZmYyLVxcdTFmZjRcXHUxZmY2LVxcdTFmZmNcXHUyMDcxXFx1MjA3ZlxcdTIwOTAtXFx1MjA5Y1xcdTIxMDJcXHUyMTA3XFx1MjEwYS1cXHUyMTEzXFx1MjExNVxcdTIxMTktXFx1MjExZFxcdTIxMjRcXHUyMTI2XFx1MjEyOFxcdTIxMmEtXFx1MjEyZFxcdTIxMmYtXFx1MjEzOVxcdTIxM2MtXFx1MjEzZlxcdTIxNDUtXFx1MjE0OVxcdTIxNGVcXHUyMTYwLVxcdTIxODhcXHUyYzAwLVxcdTJjMmVcXHUyYzMwLVxcdTJjNWVcXHUyYzYwLVxcdTJjZTRcXHUyY2ViLVxcdTJjZWVcXHUyY2YyXFx1MmNmM1xcdTJkMDAtXFx1MmQyNVxcdTJkMjdcXHUyZDJkXFx1MmQzMC1cXHUyZDY3XFx1MmQ2ZlxcdTJkODAtXFx1MmQ5NlxcdTJkYTAtXFx1MmRhNlxcdTJkYTgtXFx1MmRhZVxcdTJkYjAtXFx1MmRiNlxcdTJkYjgtXFx1MmRiZVxcdTJkYzAtXFx1MmRjNlxcdTJkYzgtXFx1MmRjZVxcdTJkZDAtXFx1MmRkNlxcdTJkZDgtXFx1MmRkZVxcdTJlMmZcXHUzMDA1LVxcdTMwMDdcXHUzMDIxLVxcdTMwMjlcXHUzMDMxLVxcdTMwMzVcXHUzMDM4LVxcdTMwM2NcXHUzMDQxLVxcdTMwOTZcXHUzMDlkLVxcdTMwOWZcXHUzMGExLVxcdTMwZmFcXHUzMGZjLVxcdTMwZmZcXHUzMTA1LVxcdTMxMmRcXHUzMTMxLVxcdTMxOGVcXHUzMWEwLVxcdTMxYmFcXHUzMWYwLVxcdTMxZmZcXHUzNDAwLVxcdTRkYjVcXHU0ZTAwLVxcdTlmY2NcXHVhMDAwLVxcdWE0OGNcXHVhNGQwLVxcdWE0ZmRcXHVhNTAwLVxcdWE2MGNcXHVhNjEwLVxcdWE2MWZcXHVhNjJhXFx1YTYyYlxcdWE2NDAtXFx1YTY2ZVxcdWE2N2YtXFx1YTY5N1xcdWE2YTAtXFx1YTZlZlxcdWE3MTctXFx1YTcxZlxcdWE3MjItXFx1YTc4OFxcdWE3OGItXFx1YTc4ZVxcdWE3OTAtXFx1YTc5M1xcdWE3YTAtXFx1YTdhYVxcdWE3ZjgtXFx1YTgwMVxcdWE4MDMtXFx1YTgwNVxcdWE4MDctXFx1YTgwYVxcdWE4MGMtXFx1YTgyMlxcdWE4NDAtXFx1YTg3M1xcdWE4ODItXFx1YThiM1xcdWE4ZjItXFx1YThmN1xcdWE4ZmJcXHVhOTBhLVxcdWE5MjVcXHVhOTMwLVxcdWE5NDZcXHVhOTYwLVxcdWE5N2NcXHVhOTg0LVxcdWE5YjJcXHVhOWNmXFx1YWEwMC1cXHVhYTI4XFx1YWE0MC1cXHVhYTQyXFx1YWE0NC1cXHVhYTRiXFx1YWE2MC1cXHVhYTc2XFx1YWE3YVxcdWFhODAtXFx1YWFhZlxcdWFhYjFcXHVhYWI1XFx1YWFiNlxcdWFhYjktXFx1YWFiZFxcdWFhYzBcXHVhYWMyXFx1YWFkYi1cXHVhYWRkXFx1YWFlMC1cXHVhYWVhXFx1YWFmMi1cXHVhYWY0XFx1YWIwMS1cXHVhYjA2XFx1YWIwOS1cXHVhYjBlXFx1YWIxMS1cXHVhYjE2XFx1YWIyMC1cXHVhYjI2XFx1YWIyOC1cXHVhYjJlXFx1YWJjMC1cXHVhYmUyXFx1YWMwMC1cXHVkN2EzXFx1ZDdiMC1cXHVkN2M2XFx1ZDdjYi1cXHVkN2ZiXFx1ZjkwMC1cXHVmYTZkXFx1ZmE3MC1cXHVmYWQ5XFx1ZmIwMC1cXHVmYjA2XFx1ZmIxMy1cXHVmYjE3XFx1ZmIxZFxcdWZiMWYtXFx1ZmIyOFxcdWZiMmEtXFx1ZmIzNlxcdWZiMzgtXFx1ZmIzY1xcdWZiM2VcXHVmYjQwXFx1ZmI0MVxcdWZiNDNcXHVmYjQ0XFx1ZmI0Ni1cXHVmYmIxXFx1ZmJkMy1cXHVmZDNkXFx1ZmQ1MC1cXHVmZDhmXFx1ZmQ5Mi1cXHVmZGM3XFx1ZmRmMC1cXHVmZGZiXFx1ZmU3MC1cXHVmZTc0XFx1ZmU3Ni1cXHVmZWZjXFx1ZmYyMS1cXHVmZjNhXFx1ZmY0MS1cXHVmZjVhXFx1ZmY2Ni1cXHVmZmJlXFx1ZmZjMi1cXHVmZmM3XFx1ZmZjYS1cXHVmZmNmXFx1ZmZkMi1cXHVmZmQ3XFx1ZmZkYS1cXHVmZmRjXVskQS1aXFxfYS16XFx4YWFcXHhiNVxceGJhXFx4YzAtXFx4ZDZcXHhkOC1cXHhmNlxceGY4LVxcdTAyYzFcXHUwMmM2LVxcdTAyZDFcXHUwMmUwLVxcdTAyZTRcXHUwMmVjXFx1MDJlZVxcdTAzNzAtXFx1MDM3NFxcdTAzNzZcXHUwMzc3XFx1MDM3YS1cXHUwMzdkXFx1MDM4NlxcdTAzODgtXFx1MDM4YVxcdTAzOGNcXHUwMzhlLVxcdTAzYTFcXHUwM2EzLVxcdTAzZjVcXHUwM2Y3LVxcdTA0ODFcXHUwNDhhLVxcdTA1MjdcXHUwNTMxLVxcdTA1NTZcXHUwNTU5XFx1MDU2MS1cXHUwNTg3XFx1MDVkMC1cXHUwNWVhXFx1MDVmMC1cXHUwNWYyXFx1MDYyMC1cXHUwNjRhXFx1MDY2ZVxcdTA2NmZcXHUwNjcxLVxcdTA2ZDNcXHUwNmQ1XFx1MDZlNVxcdTA2ZTZcXHUwNmVlXFx1MDZlZlxcdTA2ZmEtXFx1MDZmY1xcdTA2ZmZcXHUwNzEwXFx1MDcxMi1cXHUwNzJmXFx1MDc0ZC1cXHUwN2E1XFx1MDdiMVxcdTA3Y2EtXFx1MDdlYVxcdTA3ZjRcXHUwN2Y1XFx1MDdmYVxcdTA4MDAtXFx1MDgxNVxcdTA4MWFcXHUwODI0XFx1MDgyOFxcdTA4NDAtXFx1MDg1OFxcdTA4YTBcXHUwOGEyLVxcdTA4YWNcXHUwOTA0LVxcdTA5MzlcXHUwOTNkXFx1MDk1MFxcdTA5NTgtXFx1MDk2MVxcdTA5NzEtXFx1MDk3N1xcdTA5NzktXFx1MDk3ZlxcdTA5ODUtXFx1MDk4Y1xcdTA5OGZcXHUwOTkwXFx1MDk5My1cXHUwOWE4XFx1MDlhYS1cXHUwOWIwXFx1MDliMlxcdTA5YjYtXFx1MDliOVxcdTA5YmRcXHUwOWNlXFx1MDlkY1xcdTA5ZGRcXHUwOWRmLVxcdTA5ZTFcXHUwOWYwXFx1MDlmMVxcdTBhMDUtXFx1MGEwYVxcdTBhMGZcXHUwYTEwXFx1MGExMy1cXHUwYTI4XFx1MGEyYS1cXHUwYTMwXFx1MGEzMlxcdTBhMzNcXHUwYTM1XFx1MGEzNlxcdTBhMzhcXHUwYTM5XFx1MGE1OS1cXHUwYTVjXFx1MGE1ZVxcdTBhNzItXFx1MGE3NFxcdTBhODUtXFx1MGE4ZFxcdTBhOGYtXFx1MGE5MVxcdTBhOTMtXFx1MGFhOFxcdTBhYWEtXFx1MGFiMFxcdTBhYjJcXHUwYWIzXFx1MGFiNS1cXHUwYWI5XFx1MGFiZFxcdTBhZDBcXHUwYWUwXFx1MGFlMVxcdTBiMDUtXFx1MGIwY1xcdTBiMGZcXHUwYjEwXFx1MGIxMy1cXHUwYjI4XFx1MGIyYS1cXHUwYjMwXFx1MGIzMlxcdTBiMzNcXHUwYjM1LVxcdTBiMzlcXHUwYjNkXFx1MGI1Y1xcdTBiNWRcXHUwYjVmLVxcdTBiNjFcXHUwYjcxXFx1MGI4M1xcdTBiODUtXFx1MGI4YVxcdTBiOGUtXFx1MGI5MFxcdTBiOTItXFx1MGI5NVxcdTBiOTlcXHUwYjlhXFx1MGI5Y1xcdTBiOWVcXHUwYjlmXFx1MGJhM1xcdTBiYTRcXHUwYmE4LVxcdTBiYWFcXHUwYmFlLVxcdTBiYjlcXHUwYmQwXFx1MGMwNS1cXHUwYzBjXFx1MGMwZS1cXHUwYzEwXFx1MGMxMi1cXHUwYzI4XFx1MGMyYS1cXHUwYzMzXFx1MGMzNS1cXHUwYzM5XFx1MGMzZFxcdTBjNThcXHUwYzU5XFx1MGM2MFxcdTBjNjFcXHUwYzg1LVxcdTBjOGNcXHUwYzhlLVxcdTBjOTBcXHUwYzkyLVxcdTBjYThcXHUwY2FhLVxcdTBjYjNcXHUwY2I1LVxcdTBjYjlcXHUwY2JkXFx1MGNkZVxcdTBjZTBcXHUwY2UxXFx1MGNmMVxcdTBjZjJcXHUwZDA1LVxcdTBkMGNcXHUwZDBlLVxcdTBkMTBcXHUwZDEyLVxcdTBkM2FcXHUwZDNkXFx1MGQ0ZVxcdTBkNjBcXHUwZDYxXFx1MGQ3YS1cXHUwZDdmXFx1MGQ4NS1cXHUwZDk2XFx1MGQ5YS1cXHUwZGIxXFx1MGRiMy1cXHUwZGJiXFx1MGRiZFxcdTBkYzAtXFx1MGRjNlxcdTBlMDEtXFx1MGUzMFxcdTBlMzJcXHUwZTMzXFx1MGU0MC1cXHUwZTQ2XFx1MGU4MVxcdTBlODJcXHUwZTg0XFx1MGU4N1xcdTBlODhcXHUwZThhXFx1MGU4ZFxcdTBlOTQtXFx1MGU5N1xcdTBlOTktXFx1MGU5ZlxcdTBlYTEtXFx1MGVhM1xcdTBlYTVcXHUwZWE3XFx1MGVhYVxcdTBlYWJcXHUwZWFkLVxcdTBlYjBcXHUwZWIyXFx1MGViM1xcdTBlYmRcXHUwZWMwLVxcdTBlYzRcXHUwZWM2XFx1MGVkYy1cXHUwZWRmXFx1MGYwMFxcdTBmNDAtXFx1MGY0N1xcdTBmNDktXFx1MGY2Y1xcdTBmODgtXFx1MGY4Y1xcdTEwMDAtXFx1MTAyYVxcdTEwM2ZcXHUxMDUwLVxcdTEwNTVcXHUxMDVhLVxcdTEwNWRcXHUxMDYxXFx1MTA2NVxcdTEwNjZcXHUxMDZlLVxcdTEwNzBcXHUxMDc1LVxcdTEwODFcXHUxMDhlXFx1MTBhMC1cXHUxMGM1XFx1MTBjN1xcdTEwY2RcXHUxMGQwLVxcdTEwZmFcXHUxMGZjLVxcdTEyNDhcXHUxMjRhLVxcdTEyNGRcXHUxMjUwLVxcdTEyNTZcXHUxMjU4XFx1MTI1YS1cXHUxMjVkXFx1MTI2MC1cXHUxMjg4XFx1MTI4YS1cXHUxMjhkXFx1MTI5MC1cXHUxMmIwXFx1MTJiMi1cXHUxMmI1XFx1MTJiOC1cXHUxMmJlXFx1MTJjMFxcdTEyYzItXFx1MTJjNVxcdTEyYzgtXFx1MTJkNlxcdTEyZDgtXFx1MTMxMFxcdTEzMTItXFx1MTMxNVxcdTEzMTgtXFx1MTM1YVxcdTEzODAtXFx1MTM4ZlxcdTEzYTAtXFx1MTNmNFxcdTE0MDEtXFx1MTY2Y1xcdTE2NmYtXFx1MTY3ZlxcdTE2ODEtXFx1MTY5YVxcdTE2YTAtXFx1MTZlYVxcdTE2ZWUtXFx1MTZmMFxcdTE3MDAtXFx1MTcwY1xcdTE3MGUtXFx1MTcxMVxcdTE3MjAtXFx1MTczMVxcdTE3NDAtXFx1MTc1MVxcdTE3NjAtXFx1MTc2Y1xcdTE3NmUtXFx1MTc3MFxcdTE3ODAtXFx1MTdiM1xcdTE3ZDdcXHUxN2RjXFx1MTgyMC1cXHUxODc3XFx1MTg4MC1cXHUxOGE4XFx1MThhYVxcdTE4YjAtXFx1MThmNVxcdTE5MDAtXFx1MTkxY1xcdTE5NTAtXFx1MTk2ZFxcdTE5NzAtXFx1MTk3NFxcdTE5ODAtXFx1MTlhYlxcdTE5YzEtXFx1MTljN1xcdTFhMDAtXFx1MWExNlxcdTFhMjAtXFx1MWE1NFxcdTFhYTdcXHUxYjA1LVxcdTFiMzNcXHUxYjQ1LVxcdTFiNGJcXHUxYjgzLVxcdTFiYTBcXHUxYmFlXFx1MWJhZlxcdTFiYmEtXFx1MWJlNVxcdTFjMDAtXFx1MWMyM1xcdTFjNGQtXFx1MWM0ZlxcdTFjNWEtXFx1MWM3ZFxcdTFjZTktXFx1MWNlY1xcdTFjZWUtXFx1MWNmMVxcdTFjZjVcXHUxY2Y2XFx1MWQwMC1cXHUxZGJmXFx1MWUwMC1cXHUxZjE1XFx1MWYxOC1cXHUxZjFkXFx1MWYyMC1cXHUxZjQ1XFx1MWY0OC1cXHUxZjRkXFx1MWY1MC1cXHUxZjU3XFx1MWY1OVxcdTFmNWJcXHUxZjVkXFx1MWY1Zi1cXHUxZjdkXFx1MWY4MC1cXHUxZmI0XFx1MWZiNi1cXHUxZmJjXFx1MWZiZVxcdTFmYzItXFx1MWZjNFxcdTFmYzYtXFx1MWZjY1xcdTFmZDAtXFx1MWZkM1xcdTFmZDYtXFx1MWZkYlxcdTFmZTAtXFx1MWZlY1xcdTFmZjItXFx1MWZmNFxcdTFmZjYtXFx1MWZmY1xcdTIwNzFcXHUyMDdmXFx1MjA5MC1cXHUyMDljXFx1MjEwMlxcdTIxMDdcXHUyMTBhLVxcdTIxMTNcXHUyMTE1XFx1MjExOS1cXHUyMTFkXFx1MjEyNFxcdTIxMjZcXHUyMTI4XFx1MjEyYS1cXHUyMTJkXFx1MjEyZi1cXHUyMTM5XFx1MjEzYy1cXHUyMTNmXFx1MjE0NS1cXHUyMTQ5XFx1MjE0ZVxcdTIxNjAtXFx1MjE4OFxcdTJjMDAtXFx1MmMyZVxcdTJjMzAtXFx1MmM1ZVxcdTJjNjAtXFx1MmNlNFxcdTJjZWItXFx1MmNlZVxcdTJjZjJcXHUyY2YzXFx1MmQwMC1cXHUyZDI1XFx1MmQyN1xcdTJkMmRcXHUyZDMwLVxcdTJkNjdcXHUyZDZmXFx1MmQ4MC1cXHUyZDk2XFx1MmRhMC1cXHUyZGE2XFx1MmRhOC1cXHUyZGFlXFx1MmRiMC1cXHUyZGI2XFx1MmRiOC1cXHUyZGJlXFx1MmRjMC1cXHUyZGM2XFx1MmRjOC1cXHUyZGNlXFx1MmRkMC1cXHUyZGQ2XFx1MmRkOC1cXHUyZGRlXFx1MmUyZlxcdTMwMDUtXFx1MzAwN1xcdTMwMjEtXFx1MzAyOVxcdTMwMzEtXFx1MzAzNVxcdTMwMzgtXFx1MzAzY1xcdTMwNDEtXFx1MzA5NlxcdTMwOWQtXFx1MzA5ZlxcdTMwYTEtXFx1MzBmYVxcdTMwZmMtXFx1MzBmZlxcdTMxMDUtXFx1MzEyZFxcdTMxMzEtXFx1MzE4ZVxcdTMxYTAtXFx1MzFiYVxcdTMxZjAtXFx1MzFmZlxcdTM0MDAtXFx1NGRiNVxcdTRlMDAtXFx1OWZjY1xcdWEwMDAtXFx1YTQ4Y1xcdWE0ZDAtXFx1YTRmZFxcdWE1MDAtXFx1YTYwY1xcdWE2MTAtXFx1YTYxZlxcdWE2MmFcXHVhNjJiXFx1YTY0MC1cXHVhNjZlXFx1YTY3Zi1cXHVhNjk3XFx1YTZhMC1cXHVhNmVmXFx1YTcxNy1cXHVhNzFmXFx1YTcyMi1cXHVhNzg4XFx1YTc4Yi1cXHVhNzhlXFx1YTc5MC1cXHVhNzkzXFx1YTdhMC1cXHVhN2FhXFx1YTdmOC1cXHVhODAxXFx1YTgwMy1cXHVhODA1XFx1YTgwNy1cXHVhODBhXFx1YTgwYy1cXHVhODIyXFx1YTg0MC1cXHVhODczXFx1YTg4Mi1cXHVhOGIzXFx1YThmMi1cXHVhOGY3XFx1YThmYlxcdWE5MGEtXFx1YTkyNVxcdWE5MzAtXFx1YTk0NlxcdWE5NjAtXFx1YTk3Y1xcdWE5ODQtXFx1YTliMlxcdWE5Y2ZcXHVhYTAwLVxcdWFhMjhcXHVhYTQwLVxcdWFhNDJcXHVhYTQ0LVxcdWFhNGJcXHVhYTYwLVxcdWFhNzZcXHVhYTdhXFx1YWE4MC1cXHVhYWFmXFx1YWFiMVxcdWFhYjVcXHVhYWI2XFx1YWFiOS1cXHVhYWJkXFx1YWFjMFxcdWFhYzJcXHVhYWRiLVxcdWFhZGRcXHVhYWUwLVxcdWFhZWFcXHVhYWYyLVxcdWFhZjRcXHVhYjAxLVxcdWFiMDZcXHVhYjA5LVxcdWFiMGVcXHVhYjExLVxcdWFiMTZcXHVhYjIwLVxcdWFiMjZcXHVhYjI4LVxcdWFiMmVcXHVhYmMwLVxcdWFiZTJcXHVhYzAwLVxcdWQ3YTNcXHVkN2IwLVxcdWQ3YzZcXHVkN2NiLVxcdWQ3ZmJcXHVmOTAwLVxcdWZhNmRcXHVmYTcwLVxcdWZhZDlcXHVmYjAwLVxcdWZiMDZcXHVmYjEzLVxcdWZiMTdcXHVmYjFkXFx1ZmIxZi1cXHVmYjI4XFx1ZmIyYS1cXHVmYjM2XFx1ZmIzOC1cXHVmYjNjXFx1ZmIzZVxcdWZiNDBcXHVmYjQxXFx1ZmI0M1xcdWZiNDRcXHVmYjQ2LVxcdWZiYjFcXHVmYmQzLVxcdWZkM2RcXHVmZDUwLVxcdWZkOGZcXHVmZDkyLVxcdWZkYzdcXHVmZGYwLVxcdWZkZmJcXHVmZTcwLVxcdWZlNzRcXHVmZTc2LVxcdWZlZmNcXHVmZjIxLVxcdWZmM2FcXHVmZjQxLVxcdWZmNWFcXHVmZjY2LVxcdWZmYmVcXHVmZmMyLVxcdWZmYzdcXHVmZmNhLVxcdWZmY2ZcXHVmZmQyLVxcdWZmZDdcXHVmZmRhLVxcdWZmZGMwLTlcXHUwMzAwLVxcdTAzNmZcXHUwNDgzLVxcdTA0ODdcXHUwNTkxLVxcdTA1YmRcXHUwNWJmXFx1MDVjMVxcdTA1YzJcXHUwNWM0XFx1MDVjNVxcdTA1YzdcXHUwNjEwLVxcdTA2MWFcXHUwNjRiLVxcdTA2NjlcXHUwNjcwXFx1MDZkNi1cXHUwNmRjXFx1MDZkZi1cXHUwNmU0XFx1MDZlN1xcdTA2ZThcXHUwNmVhLVxcdTA2ZWRcXHUwNmYwLVxcdTA2ZjlcXHUwNzExXFx1MDczMC1cXHUwNzRhXFx1MDdhNi1cXHUwN2IwXFx1MDdjMC1cXHUwN2M5XFx1MDdlYi1cXHUwN2YzXFx1MDgxNi1cXHUwODE5XFx1MDgxYi1cXHUwODIzXFx1MDgyNS1cXHUwODI3XFx1MDgyOS1cXHUwODJkXFx1MDg1OS1cXHUwODViXFx1MDhlNC1cXHUwOGZlXFx1MDkwMC1cXHUwOTAzXFx1MDkzYS1cXHUwOTNjXFx1MDkzZS1cXHUwOTRmXFx1MDk1MS1cXHUwOTU3XFx1MDk2MlxcdTA5NjNcXHUwOTY2LVxcdTA5NmZcXHUwOTgxLVxcdTA5ODNcXHUwOWJjXFx1MDliZS1cXHUwOWM0XFx1MDljN1xcdTA5YzhcXHUwOWNiLVxcdTA5Y2RcXHUwOWQ3XFx1MDllMlxcdTA5ZTNcXHUwOWU2LVxcdTA5ZWZcXHUwYTAxLVxcdTBhMDNcXHUwYTNjXFx1MGEzZS1cXHUwYTQyXFx1MGE0N1xcdTBhNDhcXHUwYTRiLVxcdTBhNGRcXHUwYTUxXFx1MGE2Ni1cXHUwYTcxXFx1MGE3NVxcdTBhODEtXFx1MGE4M1xcdTBhYmNcXHUwYWJlLVxcdTBhYzVcXHUwYWM3LVxcdTBhYzlcXHUwYWNiLVxcdTBhY2RcXHUwYWUyXFx1MGFlM1xcdTBhZTYtXFx1MGFlZlxcdTBiMDEtXFx1MGIwM1xcdTBiM2NcXHUwYjNlLVxcdTBiNDRcXHUwYjQ3XFx1MGI0OFxcdTBiNGItXFx1MGI0ZFxcdTBiNTZcXHUwYjU3XFx1MGI2MlxcdTBiNjNcXHUwYjY2LVxcdTBiNmZcXHUwYjgyXFx1MGJiZS1cXHUwYmMyXFx1MGJjNi1cXHUwYmM4XFx1MGJjYS1cXHUwYmNkXFx1MGJkN1xcdTBiZTYtXFx1MGJlZlxcdTBjMDEtXFx1MGMwM1xcdTBjM2UtXFx1MGM0NFxcdTBjNDYtXFx1MGM0OFxcdTBjNGEtXFx1MGM0ZFxcdTBjNTVcXHUwYzU2XFx1MGM2MlxcdTBjNjNcXHUwYzY2LVxcdTBjNmZcXHUwYzgyXFx1MGM4M1xcdTBjYmNcXHUwY2JlLVxcdTBjYzRcXHUwY2M2LVxcdTBjYzhcXHUwY2NhLVxcdTBjY2RcXHUwY2Q1XFx1MGNkNlxcdTBjZTJcXHUwY2UzXFx1MGNlNi1cXHUwY2VmXFx1MGQwMlxcdTBkMDNcXHUwZDNlLVxcdTBkNDRcXHUwZDQ2LVxcdTBkNDhcXHUwZDRhLVxcdTBkNGRcXHUwZDU3XFx1MGQ2MlxcdTBkNjNcXHUwZDY2LVxcdTBkNmZcXHUwZDgyXFx1MGQ4M1xcdTBkY2FcXHUwZGNmLVxcdTBkZDRcXHUwZGQ2XFx1MGRkOC1cXHUwZGRmXFx1MGRmMlxcdTBkZjNcXHUwZTMxXFx1MGUzNC1cXHUwZTNhXFx1MGU0Ny1cXHUwZTRlXFx1MGU1MC1cXHUwZTU5XFx1MGViMVxcdTBlYjQtXFx1MGViOVxcdTBlYmJcXHUwZWJjXFx1MGVjOC1cXHUwZWNkXFx1MGVkMC1cXHUwZWQ5XFx1MGYxOFxcdTBmMTlcXHUwZjIwLVxcdTBmMjlcXHUwZjM1XFx1MGYzN1xcdTBmMzlcXHUwZjNlXFx1MGYzZlxcdTBmNzEtXFx1MGY4NFxcdTBmODZcXHUwZjg3XFx1MGY4ZC1cXHUwZjk3XFx1MGY5OS1cXHUwZmJjXFx1MGZjNlxcdTEwMmItXFx1MTAzZVxcdTEwNDAtXFx1MTA0OVxcdTEwNTYtXFx1MTA1OVxcdTEwNWUtXFx1MTA2MFxcdTEwNjItXFx1MTA2NFxcdTEwNjctXFx1MTA2ZFxcdTEwNzEtXFx1MTA3NFxcdTEwODItXFx1MTA4ZFxcdTEwOGYtXFx1MTA5ZFxcdTEzNWQtXFx1MTM1ZlxcdTE3MTItXFx1MTcxNFxcdTE3MzItXFx1MTczNFxcdTE3NTJcXHUxNzUzXFx1MTc3MlxcdTE3NzNcXHUxN2I0LVxcdTE3ZDNcXHUxN2RkXFx1MTdlMC1cXHUxN2U5XFx1MTgwYi1cXHUxODBkXFx1MTgxMC1cXHUxODE5XFx1MThhOVxcdTE5MjAtXFx1MTkyYlxcdTE5MzAtXFx1MTkzYlxcdTE5NDYtXFx1MTk0ZlxcdTE5YjAtXFx1MTljMFxcdTE5YzhcXHUxOWM5XFx1MTlkMC1cXHUxOWQ5XFx1MWExNy1cXHUxYTFiXFx1MWE1NS1cXHUxYTVlXFx1MWE2MC1cXHUxYTdjXFx1MWE3Zi1cXHUxYTg5XFx1MWE5MC1cXHUxYTk5XFx1MWIwMC1cXHUxYjA0XFx1MWIzNC1cXHUxYjQ0XFx1MWI1MC1cXHUxYjU5XFx1MWI2Yi1cXHUxYjczXFx1MWI4MC1cXHUxYjgyXFx1MWJhMS1cXHUxYmFkXFx1MWJiMC1cXHUxYmI5XFx1MWJlNi1cXHUxYmYzXFx1MWMyNC1cXHUxYzM3XFx1MWM0MC1cXHUxYzQ5XFx1MWM1MC1cXHUxYzU5XFx1MWNkMC1cXHUxY2QyXFx1MWNkNC1cXHUxY2U4XFx1MWNlZFxcdTFjZjItXFx1MWNmNFxcdTFkYzAtXFx1MWRlNlxcdTFkZmMtXFx1MWRmZlxcdTIwMGNcXHUyMDBkXFx1MjAzZlxcdTIwNDBcXHUyMDU0XFx1MjBkMC1cXHUyMGRjXFx1MjBlMVxcdTIwZTUtXFx1MjBmMFxcdTJjZWYtXFx1MmNmMVxcdTJkN2ZcXHUyZGUwLVxcdTJkZmZcXHUzMDJhLVxcdTMwMmZcXHUzMDk5XFx1MzA5YVxcdWE2MjAtXFx1YTYyOVxcdWE2NmZcXHVhNjc0LVxcdWE2N2RcXHVhNjlmXFx1YTZmMFxcdWE2ZjFcXHVhODAyXFx1YTgwNlxcdWE4MGJcXHVhODIzLVxcdWE4MjdcXHVhODgwXFx1YTg4MVxcdWE4YjQtXFx1YThjNFxcdWE4ZDAtXFx1YThkOVxcdWE4ZTAtXFx1YThmMVxcdWE5MDAtXFx1YTkwOVxcdWE5MjYtXFx1YTkyZFxcdWE5NDctXFx1YTk1M1xcdWE5ODAtXFx1YTk4M1xcdWE5YjMtXFx1YTljMFxcdWE5ZDAtXFx1YTlkOVxcdWFhMjktXFx1YWEzNlxcdWFhNDNcXHVhYTRjXFx1YWE0ZFxcdWFhNTAtXFx1YWE1OVxcdWFhN2JcXHVhYWIwXFx1YWFiMi1cXHVhYWI0XFx1YWFiN1xcdWFhYjhcXHVhYWJlXFx1YWFiZlxcdWFhYzFcXHVhYWViLVxcdWFhZWZcXHVhYWY1XFx1YWFmNlxcdWFiZTMtXFx1YWJlYVxcdWFiZWNcXHVhYmVkXFx1YWJmMC1cXHVhYmY5XFx1ZmIxZVxcdWZlMDAtXFx1ZmUwZlxcdWZlMjAtXFx1ZmUyNlxcdWZlMzNcXHVmZTM0XFx1ZmU0ZC1cXHVmZTRmXFx1ZmYxMC1cXHVmZjE5XFx1ZmYzZl0qJC8udGVzdChzdHIpXG59XG5tb2R1bGUuZXhwb3J0cyA9IGlzUHJvcGVydHlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9pcy1wcm9wZXJ0eS9pcy1wcm9wZXJ0eS5qc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciB1dGlsID0gcmVxdWlyZSgndXRpbCcpXG5cbnZhciBJTkRFTlRfU1RBUlQgPSAvW1xce1xcW10vXG52YXIgSU5ERU5UX0VORCA9IC9bXFx9XFxdXS9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGxpbmVzID0gW11cbiAgdmFyIGluZGVudCA9IDBcblxuICB2YXIgcHVzaCA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHZhciBzcGFjZXMgPSAnJ1xuICAgIHdoaWxlIChzcGFjZXMubGVuZ3RoIDwgaW5kZW50KjIpIHNwYWNlcyArPSAnICAnXG4gICAgbGluZXMucHVzaChzcGFjZXMrc3RyKVxuICB9XG5cbiAgdmFyIGxpbmUgPSBmdW5jdGlvbihmbXQpIHtcbiAgICBpZiAoIWZtdCkgcmV0dXJuIGxpbmVcblxuICAgIGlmIChJTkRFTlRfRU5ELnRlc3QoZm10LnRyaW0oKVswXSkgJiYgSU5ERU5UX1NUQVJULnRlc3QoZm10W2ZtdC5sZW5ndGgtMV0pKSB7XG4gICAgICBpbmRlbnQtLVxuICAgICAgcHVzaCh1dGlsLmZvcm1hdC5hcHBseSh1dGlsLCBhcmd1bWVudHMpKVxuICAgICAgaW5kZW50KytcbiAgICAgIHJldHVybiBsaW5lXG4gICAgfVxuICAgIGlmIChJTkRFTlRfU1RBUlQudGVzdChmbXRbZm10Lmxlbmd0aC0xXSkpIHtcbiAgICAgIHB1c2godXRpbC5mb3JtYXQuYXBwbHkodXRpbCwgYXJndW1lbnRzKSlcbiAgICAgIGluZGVudCsrXG4gICAgICByZXR1cm4gbGluZVxuICAgIH1cbiAgICBpZiAoSU5ERU5UX0VORC50ZXN0KGZtdC50cmltKClbMF0pKSB7XG4gICAgICBpbmRlbnQtLVxuICAgICAgcHVzaCh1dGlsLmZvcm1hdC5hcHBseSh1dGlsLCBhcmd1bWVudHMpKVxuICAgICAgcmV0dXJuIGxpbmVcbiAgICB9XG5cbiAgICBwdXNoKHV0aWwuZm9ybWF0LmFwcGx5KHV0aWwsIGFyZ3VtZW50cykpXG4gICAgcmV0dXJuIGxpbmVcbiAgfVxuXG4gIGxpbmUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbGluZXMuam9pbignXFxuJylcbiAgfVxuXG4gIGxpbmUudG9GdW5jdGlvbiA9IGZ1bmN0aW9uKHNjb3BlKSB7XG4gICAgdmFyIHNyYyA9ICdyZXR1cm4gKCcrbGluZS50b1N0cmluZygpKycpJ1xuXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhzY29wZSB8fCB7fSkubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIGtleVxuICAgIH0pXG5cbiAgICB2YXIgdmFscyA9IGtleXMubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIHNjb3BlW2tleV1cbiAgICB9KVxuXG4gICAgcmV0dXJuIEZ1bmN0aW9uLmFwcGx5KG51bGwsIGtleXMuY29uY2F0KHNyYykpLmFwcGx5KG51bGwsIHZhbHMpXG4gIH1cblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCkgbGluZS5hcHBseShudWxsLCBhcmd1bWVudHMpXG5cbiAgcmV0dXJuIGxpbmVcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2dlbmVyYXRlLWZ1bmN0aW9uL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbnZhciBmb3JtYXRSZWdFeHAgPSAvJVtzZGolXS9nO1xuZXhwb3J0cy5mb3JtYXQgPSBmdW5jdGlvbihmKSB7XG4gIGlmICghaXNTdHJpbmcoZikpIHtcbiAgICB2YXIgb2JqZWN0cyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBvYmplY3RzLnB1c2goaW5zcGVjdChhcmd1bWVudHNbaV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdHMuam9pbignICcpO1xuICB9XG5cbiAgdmFyIGkgPSAxO1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgc3RyID0gU3RyaW5nKGYpLnJlcGxhY2UoZm9ybWF0UmVnRXhwLCBmdW5jdGlvbih4KSB7XG4gICAgaWYgKHggPT09ICclJScpIHJldHVybiAnJSc7XG4gICAgaWYgKGkgPj0gbGVuKSByZXR1cm4geDtcbiAgICBzd2l0Y2ggKHgpIHtcbiAgICAgIGNhc2UgJyVzJzogcmV0dXJuIFN0cmluZyhhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWQnOiByZXR1cm4gTnVtYmVyKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclaic6XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFyZ3NbaSsrXSk7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICByZXR1cm4gJ1tDaXJjdWxhcl0nO1xuICAgICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gIH0pO1xuICBmb3IgKHZhciB4ID0gYXJnc1tpXTsgaSA8IGxlbjsgeCA9IGFyZ3NbKytpXSkge1xuICAgIGlmIChpc051bGwoeCkgfHwgIWlzT2JqZWN0KHgpKSB7XG4gICAgICBzdHIgKz0gJyAnICsgeDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyICs9ICcgJyArIGluc3BlY3QoeCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdHI7XG59O1xuXG5cbi8vIE1hcmsgdGhhdCBhIG1ldGhvZCBzaG91bGQgbm90IGJlIHVzZWQuXG4vLyBSZXR1cm5zIGEgbW9kaWZpZWQgZnVuY3Rpb24gd2hpY2ggd2FybnMgb25jZSBieSBkZWZhdWx0LlxuLy8gSWYgLS1uby1kZXByZWNhdGlvbiBpcyBzZXQsIHRoZW4gaXQgaXMgYSBuby1vcC5cbmV4cG9ydHMuZGVwcmVjYXRlID0gZnVuY3Rpb24oZm4sIG1zZykge1xuICAvLyBBbGxvdyBmb3IgZGVwcmVjYXRpbmcgdGhpbmdzIGluIHRoZSBwcm9jZXNzIG9mIHN0YXJ0aW5nIHVwLlxuICBpZiAoaXNVbmRlZmluZWQoZ2xvYmFsLnByb2Nlc3MpKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGV4cG9ydHMuZGVwcmVjYXRlKGZuLCBtc2cpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLm5vRGVwcmVjYXRpb24gPT09IHRydWUpIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICB2YXIgd2FybmVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGRlcHJlY2F0ZWQoKSB7XG4gICAgaWYgKCF3YXJuZWQpIHtcbiAgICAgIGlmIChwcm9jZXNzLnRocm93RGVwcmVjYXRpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3MudHJhY2VEZXByZWNhdGlvbikge1xuICAgICAgICBjb25zb2xlLnRyYWNlKG1zZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XG4gICAgICB9XG4gICAgICB3YXJuZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBkZXByZWNhdGVkO1xufTtcblxuXG52YXIgZGVidWdzID0ge307XG52YXIgZGVidWdFbnZpcm9uO1xuZXhwb3J0cy5kZWJ1Z2xvZyA9IGZ1bmN0aW9uKHNldCkge1xuICBpZiAoaXNVbmRlZmluZWQoZGVidWdFbnZpcm9uKSlcbiAgICBkZWJ1Z0Vudmlyb24gPSBwcm9jZXNzLmVudi5OT0RFX0RFQlVHIHx8ICcnO1xuICBzZXQgPSBzZXQudG9VcHBlckNhc2UoKTtcbiAgaWYgKCFkZWJ1Z3Nbc2V0XSkge1xuICAgIGlmIChuZXcgUmVnRXhwKCdcXFxcYicgKyBzZXQgKyAnXFxcXGInLCAnaScpLnRlc3QoZGVidWdFbnZpcm9uKSkge1xuICAgICAgdmFyIHBpZCA9IHByb2Nlc3MucGlkO1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1zZyA9IGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJyVzICVkOiAlcycsIHNldCwgcGlkLCBtc2cpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHt9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVidWdzW3NldF07XG59O1xuXG5cbi8qKlxuICogRWNob3MgdGhlIHZhbHVlIG9mIGEgdmFsdWUuIFRyeXMgdG8gcHJpbnQgdGhlIHZhbHVlIG91dFxuICogaW4gdGhlIGJlc3Qgd2F5IHBvc3NpYmxlIGdpdmVuIHRoZSBkaWZmZXJlbnQgdHlwZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIHByaW50IG91dC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIE9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0IHRoYXQgYWx0ZXJzIHRoZSBvdXRwdXQuXG4gKi9cbi8qIGxlZ2FjeTogb2JqLCBzaG93SGlkZGVuLCBkZXB0aCwgY29sb3JzKi9cbmZ1bmN0aW9uIGluc3BlY3Qob2JqLCBvcHRzKSB7XG4gIC8vIGRlZmF1bHQgb3B0aW9uc1xuICB2YXIgY3R4ID0ge1xuICAgIHNlZW46IFtdLFxuICAgIHN0eWxpemU6IHN0eWxpemVOb0NvbG9yXG4gIH07XG4gIC8vIGxlZ2FjeS4uLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAzKSBjdHguZGVwdGggPSBhcmd1bWVudHNbMl07XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDQpIGN0eC5jb2xvcnMgPSBhcmd1bWVudHNbM107XG4gIGlmIChpc0Jvb2xlYW4ob3B0cykpIHtcbiAgICAvLyBsZWdhY3kuLi5cbiAgICBjdHguc2hvd0hpZGRlbiA9IG9wdHM7XG4gIH0gZWxzZSBpZiAob3B0cykge1xuICAgIC8vIGdvdCBhbiBcIm9wdGlvbnNcIiBvYmplY3RcbiAgICBleHBvcnRzLl9leHRlbmQoY3R4LCBvcHRzKTtcbiAgfVxuICAvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG4gIGlmIChpc1VuZGVmaW5lZChjdHguc2hvd0hpZGRlbikpIGN0eC5zaG93SGlkZGVuID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguZGVwdGgpKSBjdHguZGVwdGggPSAyO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmNvbG9ycykpIGN0eC5jb2xvcnMgPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jdXN0b21JbnNwZWN0KSkgY3R4LmN1c3RvbUluc3BlY3QgPSB0cnVlO1xuICBpZiAoY3R4LmNvbG9ycykgY3R4LnN0eWxpemUgPSBzdHlsaXplV2l0aENvbG9yO1xuICByZXR1cm4gZm9ybWF0VmFsdWUoY3R4LCBvYmosIGN0eC5kZXB0aCk7XG59XG5leHBvcnRzLmluc3BlY3QgPSBpbnNwZWN0O1xuXG5cbi8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQU5TSV9lc2NhcGVfY29kZSNncmFwaGljc1xuaW5zcGVjdC5jb2xvcnMgPSB7XG4gICdib2xkJyA6IFsxLCAyMl0sXG4gICdpdGFsaWMnIDogWzMsIDIzXSxcbiAgJ3VuZGVybGluZScgOiBbNCwgMjRdLFxuICAnaW52ZXJzZScgOiBbNywgMjddLFxuICAnd2hpdGUnIDogWzM3LCAzOV0sXG4gICdncmV5JyA6IFs5MCwgMzldLFxuICAnYmxhY2snIDogWzMwLCAzOV0sXG4gICdibHVlJyA6IFszNCwgMzldLFxuICAnY3lhbicgOiBbMzYsIDM5XSxcbiAgJ2dyZWVuJyA6IFszMiwgMzldLFxuICAnbWFnZW50YScgOiBbMzUsIDM5XSxcbiAgJ3JlZCcgOiBbMzEsIDM5XSxcbiAgJ3llbGxvdycgOiBbMzMsIDM5XVxufTtcblxuLy8gRG9uJ3QgdXNlICdibHVlJyBub3QgdmlzaWJsZSBvbiBjbWQuZXhlXG5pbnNwZWN0LnN0eWxlcyA9IHtcbiAgJ3NwZWNpYWwnOiAnY3lhbicsXG4gICdudW1iZXInOiAneWVsbG93JyxcbiAgJ2Jvb2xlYW4nOiAneWVsbG93JyxcbiAgJ3VuZGVmaW5lZCc6ICdncmV5JyxcbiAgJ251bGwnOiAnYm9sZCcsXG4gICdzdHJpbmcnOiAnZ3JlZW4nLFxuICAnZGF0ZSc6ICdtYWdlbnRhJyxcbiAgLy8gXCJuYW1lXCI6IGludGVudGlvbmFsbHkgbm90IHN0eWxpbmdcbiAgJ3JlZ2V4cCc6ICdyZWQnXG59O1xuXG5cbmZ1bmN0aW9uIHN0eWxpemVXaXRoQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgdmFyIHN0eWxlID0gaW5zcGVjdC5zdHlsZXNbc3R5bGVUeXBlXTtcblxuICBpZiAoc3R5bGUpIHtcbiAgICByZXR1cm4gJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVswXSArICdtJyArIHN0ciArXG4gICAgICAgICAgICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMV0gKyAnbSc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHN0eWxpemVOb0NvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHJldHVybiBzdHI7XG59XG5cblxuZnVuY3Rpb24gYXJyYXlUb0hhc2goYXJyYXkpIHtcbiAgdmFyIGhhc2ggPSB7fTtcblxuICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKHZhbCwgaWR4KSB7XG4gICAgaGFzaFt2YWxdID0gdHJ1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGhhc2g7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0VmFsdWUoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzKSB7XG4gIC8vIFByb3ZpZGUgYSBob29rIGZvciB1c2VyLXNwZWNpZmllZCBpbnNwZWN0IGZ1bmN0aW9ucy5cbiAgLy8gQ2hlY2sgdGhhdCB2YWx1ZSBpcyBhbiBvYmplY3Qgd2l0aCBhbiBpbnNwZWN0IGZ1bmN0aW9uIG9uIGl0XG4gIGlmIChjdHguY3VzdG9tSW5zcGVjdCAmJlxuICAgICAgdmFsdWUgJiZcbiAgICAgIGlzRnVuY3Rpb24odmFsdWUuaW5zcGVjdCkgJiZcbiAgICAgIC8vIEZpbHRlciBvdXQgdGhlIHV0aWwgbW9kdWxlLCBpdCdzIGluc3BlY3QgZnVuY3Rpb24gaXMgc3BlY2lhbFxuICAgICAgdmFsdWUuaW5zcGVjdCAhPT0gZXhwb3J0cy5pbnNwZWN0ICYmXG4gICAgICAvLyBBbHNvIGZpbHRlciBvdXQgYW55IHByb3RvdHlwZSBvYmplY3RzIHVzaW5nIHRoZSBjaXJjdWxhciBjaGVjay5cbiAgICAgICEodmFsdWUuY29uc3RydWN0b3IgJiYgdmFsdWUuY29uc3RydWN0b3IucHJvdG90eXBlID09PSB2YWx1ZSkpIHtcbiAgICB2YXIgcmV0ID0gdmFsdWUuaW5zcGVjdChyZWN1cnNlVGltZXMsIGN0eCk7XG4gICAgaWYgKCFpc1N0cmluZyhyZXQpKSB7XG4gICAgICByZXQgPSBmb3JtYXRWYWx1ZShjdHgsIHJldCwgcmVjdXJzZVRpbWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vIFByaW1pdGl2ZSB0eXBlcyBjYW5ub3QgaGF2ZSBwcm9wZXJ0aWVzXG4gIHZhciBwcmltaXRpdmUgPSBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSk7XG4gIGlmIChwcmltaXRpdmUpIHtcbiAgICByZXR1cm4gcHJpbWl0aXZlO1xuICB9XG5cbiAgLy8gTG9vayB1cCB0aGUga2V5cyBvZiB0aGUgb2JqZWN0LlxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgdmFyIHZpc2libGVLZXlzID0gYXJyYXlUb0hhc2goa2V5cyk7XG5cbiAgaWYgKGN0eC5zaG93SGlkZGVuKSB7XG4gICAga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlKTtcbiAgfVxuXG4gIC8vIElFIGRvZXNuJ3QgbWFrZSBlcnJvciBmaWVsZHMgbm9uLWVudW1lcmFibGVcbiAgLy8gaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2R3dzUyc2J0KHY9dnMuOTQpLmFzcHhcbiAgaWYgKGlzRXJyb3IodmFsdWUpXG4gICAgICAmJiAoa2V5cy5pbmRleE9mKCdtZXNzYWdlJykgPj0gMCB8fCBrZXlzLmluZGV4T2YoJ2Rlc2NyaXB0aW9uJykgPj0gMCkpIHtcbiAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgLy8gU29tZSB0eXBlIG9mIG9iamVjdCB3aXRob3V0IHByb3BlcnRpZXMgY2FuIGJlIHNob3J0Y3V0dGVkLlxuICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgIHZhciBuYW1lID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tGdW5jdGlvbicgKyBuYW1lICsgJ10nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH1cbiAgICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAnZGF0ZScpO1xuICAgIH1cbiAgICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGJhc2UgPSAnJywgYXJyYXkgPSBmYWxzZSwgYnJhY2VzID0gWyd7JywgJ30nXTtcblxuICAvLyBNYWtlIEFycmF5IHNheSB0aGF0IHRoZXkgYXJlIEFycmF5XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIGFycmF5ID0gdHJ1ZTtcbiAgICBicmFjZXMgPSBbJ1snLCAnXSddO1xuICB9XG5cbiAgLy8gTWFrZSBmdW5jdGlvbnMgc2F5IHRoYXQgdGhleSBhcmUgZnVuY3Rpb25zXG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIHZhciBuID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgYmFzZSA9ICcgW0Z1bmN0aW9uJyArIG4gKyAnXSc7XG4gIH1cblxuICAvLyBNYWtlIFJlZ0V4cHMgc2F5IHRoYXQgdGhleSBhcmUgUmVnRXhwc1xuICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGRhdGVzIHdpdGggcHJvcGVydGllcyBmaXJzdCBzYXkgdGhlIGRhdGVcbiAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgRGF0ZS5wcm90b3R5cGUudG9VVENTdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGVycm9yIHdpdGggbWVzc2FnZSBmaXJzdCBzYXkgdGhlIGVycm9yXG4gIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICBpZiAoa2V5cy5sZW5ndGggPT09IDAgJiYgKCFhcnJheSB8fCB2YWx1ZS5sZW5ndGggPT0gMCkpIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArIGJyYWNlc1sxXTtcbiAgfVxuXG4gIGlmIChyZWN1cnNlVGltZXMgPCAwKSB7XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbT2JqZWN0XScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG5cbiAgY3R4LnNlZW4ucHVzaCh2YWx1ZSk7XG5cbiAgdmFyIG91dHB1dDtcbiAgaWYgKGFycmF5KSB7XG4gICAgb3V0cHV0ID0gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cyk7XG4gIH0gZWxzZSB7XG4gICAgb3V0cHV0ID0ga2V5cy5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSk7XG4gICAgfSk7XG4gIH1cblxuICBjdHguc2Vlbi5wb3AoKTtcblxuICByZXR1cm4gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKSB7XG4gIGlmIChpc1VuZGVmaW5lZCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCd1bmRlZmluZWQnLCAndW5kZWZpbmVkJyk7XG4gIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICB2YXIgc2ltcGxlID0gJ1xcJycgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkucmVwbGFjZSgvXlwifFwiJC9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJykgKyAnXFwnJztcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoc2ltcGxlLCAnc3RyaW5nJyk7XG4gIH1cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ251bWJlcicpO1xuICBpZiAoaXNCb29sZWFuKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ2Jvb2xlYW4nKTtcbiAgLy8gRm9yIHNvbWUgcmVhc29uIHR5cGVvZiBudWxsIGlzIFwib2JqZWN0XCIsIHNvIHNwZWNpYWwgY2FzZSBoZXJlLlxuICBpZiAoaXNOdWxsKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ251bGwnLCAnbnVsbCcpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEVycm9yKHZhbHVlKSB7XG4gIHJldHVybiAnWycgKyBFcnJvci5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgKyAnXSc7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cykge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5KHZhbHVlLCBTdHJpbmcoaSkpKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIFN0cmluZyhpKSwgdHJ1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQucHVzaCgnJyk7XG4gICAgfVxuICB9XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoIWtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAga2V5LCB0cnVlKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KSB7XG4gIHZhciBuYW1lLCBzdHIsIGRlc2M7XG4gIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHZhbHVlLCBrZXkpIHx8IHsgdmFsdWU6IHZhbHVlW2tleV0gfTtcbiAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlci9TZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoIWhhc093blByb3BlcnR5KHZpc2libGVLZXlzLCBrZXkpKSB7XG4gICAgbmFtZSA9ICdbJyArIGtleSArICddJztcbiAgfVxuICBpZiAoIXN0cikge1xuICAgIGlmIChjdHguc2Vlbi5pbmRleE9mKGRlc2MudmFsdWUpIDwgMCkge1xuICAgICAgaWYgKGlzTnVsbChyZWN1cnNlVGltZXMpKSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgbnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIHJlY3Vyc2VUaW1lcyAtIDEpO1xuICAgICAgfVxuICAgICAgaWYgKHN0ci5pbmRleE9mKCdcXG4nKSA+IC0xKSB7XG4gICAgICAgIGlmIChhcnJheSkge1xuICAgICAgICAgIHN0ciA9IHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKS5zdWJzdHIoMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RyID0gJ1xcbicgKyBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbQ2lyY3VsYXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzVW5kZWZpbmVkKG5hbWUpKSB7XG4gICAgaWYgKGFycmF5ICYmIGtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIG5hbWUgPSBKU09OLnN0cmluZ2lmeSgnJyArIGtleSk7XG4gICAgaWYgKG5hbWUubWF0Y2goL15cIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVwiJC8pKSB7XG4gICAgICBuYW1lID0gbmFtZS5zdWJzdHIoMSwgbmFtZS5sZW5ndGggLSAyKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnbmFtZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvKF5cInxcIiQpL2csIFwiJ1wiKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnc3RyaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5hbWUgKyAnOiAnICsgc3RyO1xufVxuXG5cbmZ1bmN0aW9uIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKSB7XG4gIHZhciBudW1MaW5lc0VzdCA9IDA7XG4gIHZhciBsZW5ndGggPSBvdXRwdXQucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cikge1xuICAgIG51bUxpbmVzRXN0Kys7XG4gICAgaWYgKGN1ci5pbmRleE9mKCdcXG4nKSA+PSAwKSBudW1MaW5lc0VzdCsrO1xuICAgIHJldHVybiBwcmV2ICsgY3VyLnJlcGxhY2UoL1xcdTAwMWJcXFtcXGRcXGQ/bS9nLCAnJykubGVuZ3RoICsgMTtcbiAgfSwgMCk7XG5cbiAgaWYgKGxlbmd0aCA+IDYwKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArXG4gICAgICAgICAgIChiYXNlID09PSAnJyA/ICcnIDogYmFzZSArICdcXG4gJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBvdXRwdXQuam9pbignLFxcbiAgJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBicmFjZXNbMV07XG4gIH1cblxuICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArICcgJyArIG91dHB1dC5qb2luKCcsICcpICsgJyAnICsgYnJhY2VzWzFdO1xufVxuXG5cbi8vIE5PVEU6IFRoZXNlIHR5cGUgY2hlY2tpbmcgZnVuY3Rpb25zIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIGBpbnN0YW5jZW9mYFxuLy8gYmVjYXVzZSBpdCBpcyBmcmFnaWxlIGFuZCBjYW4gYmUgZWFzaWx5IGZha2VkIHdpdGggYE9iamVjdC5jcmVhdGUoKWAuXG5mdW5jdGlvbiBpc0FycmF5KGFyKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFyKTtcbn1cbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJztcbn1cbmV4cG9ydHMuaXNCb29sZWFuID0gaXNCb29sZWFuO1xuXG5mdW5jdGlvbiBpc051bGwoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbCA9IGlzTnVsbDtcblxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsT3JVbmRlZmluZWQgPSBpc051bGxPclVuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcblxuZnVuY3Rpb24gaXNTdHJpbmcoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3RyaW5nJztcbn1cbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcblxuZnVuY3Rpb24gaXNTeW1ib2woYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3ltYm9sJztcbn1cbmV4cG9ydHMuaXNTeW1ib2wgPSBpc1N5bWJvbDtcblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNSZWdFeHAocmUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHJlKSAmJiBvYmplY3RUb1N0cmluZyhyZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuZXhwb3J0cy5pc1JlZ0V4cCA9IGlzUmVnRXhwO1xuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcblxuZnVuY3Rpb24gaXNEYXRlKGQpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGQpICYmIG9iamVjdFRvU3RyaW5nKGQpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5leHBvcnRzLmlzRGF0ZSA9IGlzRGF0ZTtcblxuZnVuY3Rpb24gaXNFcnJvcihlKSB7XG4gIHJldHVybiBpc09iamVjdChlKSAmJlxuICAgICAgKG9iamVjdFRvU3RyaW5nKGUpID09PSAnW29iamVjdCBFcnJvcl0nIHx8IGUgaW5zdGFuY2VvZiBFcnJvcik7XG59XG5leHBvcnRzLmlzRXJyb3IgPSBpc0Vycm9yO1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnYm9vbGVhbicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdudW1iZXInIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCcgfHwgIC8vIEVTNiBzeW1ib2xcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICd1bmRlZmluZWQnO1xufVxuZXhwb3J0cy5pc1ByaW1pdGl2ZSA9IGlzUHJpbWl0aXZlO1xuXG5leHBvcnRzLmlzQnVmZmVyID0gcmVxdWlyZSgnLi9zdXBwb3J0L2lzQnVmZmVyJyk7XG5cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKTtcbn1cblxuXG5mdW5jdGlvbiBwYWQobikge1xuICByZXR1cm4gbiA8IDEwID8gJzAnICsgbi50b1N0cmluZygxMCkgOiBuLnRvU3RyaW5nKDEwKTtcbn1cblxuXG52YXIgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsXG4gICAgICAgICAgICAgICdPY3QnLCAnTm92JywgJ0RlYyddO1xuXG4vLyAyNiBGZWIgMTY6MTk6MzRcbmZ1bmN0aW9uIHRpbWVzdGFtcCgpIHtcbiAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICB2YXIgdGltZSA9IFtwYWQoZC5nZXRIb3VycygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0TWludXRlcygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0U2Vjb25kcygpKV0uam9pbignOicpO1xuICByZXR1cm4gW2QuZ2V0RGF0ZSgpLCBtb250aHNbZC5nZXRNb250aCgpXSwgdGltZV0uam9pbignICcpO1xufVxuXG5cbi8vIGxvZyBpcyBqdXN0IGEgdGhpbiB3cmFwcGVyIHRvIGNvbnNvbGUubG9nIHRoYXQgcHJlcGVuZHMgYSB0aW1lc3RhbXBcbmV4cG9ydHMubG9nID0gZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCclcyAtICVzJywgdGltZXN0YW1wKCksIGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cykpO1xufTtcblxuXG4vKipcbiAqIEluaGVyaXQgdGhlIHByb3RvdHlwZSBtZXRob2RzIGZyb20gb25lIGNvbnN0cnVjdG9yIGludG8gYW5vdGhlci5cbiAqXG4gKiBUaGUgRnVuY3Rpb24ucHJvdG90eXBlLmluaGVyaXRzIGZyb20gbGFuZy5qcyByZXdyaXR0ZW4gYXMgYSBzdGFuZGFsb25lXG4gKiBmdW5jdGlvbiAobm90IG9uIEZ1bmN0aW9uLnByb3RvdHlwZSkuIE5PVEU6IElmIHRoaXMgZmlsZSBpcyB0byBiZSBsb2FkZWRcbiAqIGR1cmluZyBib290c3RyYXBwaW5nIHRoaXMgZnVuY3Rpb24gbmVlZHMgdG8gYmUgcmV3cml0dGVuIHVzaW5nIHNvbWUgbmF0aXZlXG4gKiBmdW5jdGlvbnMgYXMgcHJvdG90eXBlIHNldHVwIHVzaW5nIG5vcm1hbCBKYXZhU2NyaXB0IGRvZXMgbm90IHdvcmsgYXNcbiAqIGV4cGVjdGVkIGR1cmluZyBib290c3RyYXBwaW5nIChzZWUgbWlycm9yLmpzIGluIHIxMTQ5MDMpLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gd2hpY2ggbmVlZHMgdG8gaW5oZXJpdCB0aGVcbiAqICAgICBwcm90b3R5cGUuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBzdXBlckN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gdG8gaW5oZXJpdCBwcm90b3R5cGUgZnJvbS5cbiAqL1xuZXhwb3J0cy5pbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG5cbmV4cG9ydHMuX2V4dGVuZCA9IGZ1bmN0aW9uKG9yaWdpbiwgYWRkKSB7XG4gIC8vIERvbid0IGRvIGFueXRoaW5nIGlmIGFkZCBpc24ndCBhbiBvYmplY3RcbiAgaWYgKCFhZGQgfHwgIWlzT2JqZWN0KGFkZCkpIHJldHVybiBvcmlnaW47XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhZGQpO1xuICB2YXIgaSA9IGtleXMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgb3JpZ2luW2tleXNbaV1dID0gYWRkW2tleXNbaV1dO1xuICB9XG4gIHJldHVybiBvcmlnaW47XG59O1xuXG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdXRpbC91dGlsLmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgc2V0VGltZW91dChkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbi8vIFRPRE8oc2h0eWxtYW4pXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9wcm9jZXNzL2Jyb3dzZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgY29uc29sZTtcclxuaWYgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLmNvbnNvbGUpIHtcclxuICAgIGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZVxyXG59IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmNvbnNvbGUpIHtcclxuICAgIGNvbnNvbGUgPSB3aW5kb3cuY29uc29sZVxyXG59IGVsc2Uge1xyXG4gICAgY29uc29sZSA9IHdpbmRvdy5jb25zb2xlID0ge31cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnNvbGU7XHJcbmZvcih2YXIgbmFtZSBpbiB7bG9nOjEsIGluZm86MSwgZXJyb3I6MSwgd2FybjoxLCBkaXI6MSwgdHJhY2U6MSwgYXNzZXJ0OjEsIHRpbWU6MSwgdGltZUVuZDogMX0pXHJcblx0aWYoIWNvbnNvbGVbbmFtZV0pXHJcblx0XHRjb25zb2xlW25hbWVdID0gZnVuY3Rpb24oKSB7fTtcclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbm9kZS1saWJzLWJyb3dzZXIvbW9jay9jb25zb2xlLmpzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0J1ZmZlcihhcmcpIHtcbiAgcmV0dXJuIGFyZyAmJiB0eXBlb2YgYXJnID09PSAnb2JqZWN0J1xuICAgICYmIHR5cGVvZiBhcmcuY29weSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcuZmlsbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcucmVhZFVJbnQ4ID09PSAnZnVuY3Rpb24nO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3V0aWwvc3VwcG9ydC9pc0J1ZmZlckJyb3dzZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgLy8gaW1wbGVtZW50YXRpb24gZnJvbSBzdGFuZGFyZCBub2RlLmpzICd1dGlsJyBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckN0b3IucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogY3RvcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIG9sZCBzY2hvb2wgc2hpbSBmb3Igb2xkIGJyb3dzZXJzXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICB2YXIgVGVtcEN0b3IgPSBmdW5jdGlvbiAoKSB7fVxuICAgIFRlbXBDdG9yLnByb3RvdHlwZSA9IHN1cGVyQ3Rvci5wcm90b3R5cGVcbiAgICBjdG9yLnByb3RvdHlwZSA9IG5ldyBUZW1wQ3RvcigpXG4gICAgY3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yXG4gIH1cbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGNvbnNvbGUgPSByZXF1aXJlKFwiY29uc29sZVwiKTtcblxudmFyIHVudGlsZGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9+Li9nLCBmdW5jdGlvbihtKSB7XG4gICAgc3dpdGNoIChtKSB7XG4gICAgICBjYXNlIFwifjBcIjpcbiAgICAgICAgcmV0dXJuIFwiflwiO1xuICAgICAgY2FzZSBcIn4xXCI6XG4gICAgICAgIHJldHVybiBcIi9cIjtcbiAgICB9XG4gICAgdGhyb3coXCJJbnZhbGlkIHRpbGRlIGVzY2FwZTogXCIgKyBtKTtcbiAgfSk7XG59XG5cbnZhciB0cmF2ZXJzZSA9IGZ1bmN0aW9uKG9iaiwgcG9pbnRlciwgdmFsdWUpIHtcbiAgLy8gYXNzZXJ0KGlzQXJyYXkocG9pbnRlcikpXG4gIHZhciBwYXJ0ID0gdW50aWxkZShwb2ludGVyLnNoaWZ0KCkpO1xuICBpZih0eXBlb2Ygb2JqW3BhcnRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdGhyb3coXCJWYWx1ZSBmb3IgcG9pbnRlciAnXCIgKyBwb2ludGVyICsgXCInIG5vdCBmb3VuZC5cIik7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmKHBvaW50ZXIubGVuZ3RoICE9PSAwKSB7IC8vIGtlZXAgdHJhdmVyc2luIVxuICAgIHJldHVybiB0cmF2ZXJzZShvYmpbcGFydF0sIHBvaW50ZXIsIHZhbHVlKTtcbiAgfVxuICAvLyB3ZSdyZSBkb25lXG4gIGlmKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIC8vIGp1c3QgcmVhZGluZ1xuICAgIHJldHVybiBvYmpbcGFydF07XG4gIH1cbiAgLy8gc2V0IG5ldyB2YWx1ZSwgcmV0dXJuIG9sZCB2YWx1ZVxuICB2YXIgb2xkX3ZhbHVlID0gb2JqW3BhcnRdO1xuICBpZih2YWx1ZSA9PT0gbnVsbCkge1xuICAgIGRlbGV0ZSBvYmpbcGFydF07XG4gIH0gZWxzZSB7XG4gICAgb2JqW3BhcnRdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIG9sZF92YWx1ZTtcbn1cblxudmFyIHZhbGlkYXRlX2lucHV0ID0gZnVuY3Rpb24ob2JqLCBwb2ludGVyKSB7XG4gIGlmKHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIpIHtcbiAgICB0aHJvdyhcIkludmFsaWQgaW5wdXQgb2JqZWN0LlwiKTtcbiAgfVxuXG4gIGlmKHBvaW50ZXIgPT09IFwiXCIpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBpZighcG9pbnRlcikge1xuICAgIHRocm93KFwiSW52YWxpZCBKU09OIHBvaW50ZXIuXCIpO1xuICB9XG5cbiAgcG9pbnRlciA9IHBvaW50ZXIuc3BsaXQoXCIvXCIpO1xuICB2YXIgZmlyc3QgPSBwb2ludGVyLnNoaWZ0KCk7XG4gIGlmIChmaXJzdCAhPT0gXCJcIikge1xuICAgIHRocm93KFwiSW52YWxpZCBKU09OIHBvaW50ZXIuXCIpO1xuICB9XG5cbiAgcmV0dXJuIHBvaW50ZXI7XG59XG5cbnZhciBnZXQgPSBmdW5jdGlvbihvYmosIHBvaW50ZXIpIHtcbiAgcG9pbnRlciA9IHZhbGlkYXRlX2lucHV0KG9iaiwgcG9pbnRlcik7XG4gIGlmIChwb2ludGVyLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cbiAgcmV0dXJuIHRyYXZlcnNlKG9iaiwgcG9pbnRlcik7XG59XG5cbnZhciBzZXQgPSBmdW5jdGlvbihvYmosIHBvaW50ZXIsIHZhbHVlKSB7XG4gIHBvaW50ZXIgPSB2YWxpZGF0ZV9pbnB1dChvYmosIHBvaW50ZXIpO1xuICBpZiAocG9pbnRlci5sZW5ndGggPT09IDApIHtcbiAgICB0aHJvdyhcIkludmFsaWQgSlNPTiBwb2ludGVyIGZvciBzZXQuXCIpXG4gIH1cbiAgcmV0dXJuIHRyYXZlcnNlKG9iaiwgcG9pbnRlciwgdmFsdWUpO1xufVxuXG5leHBvcnRzLmdldCA9IGdldFxuZXhwb3J0cy5zZXQgPSBzZXRcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2pzb25wb2ludGVyL2pzb25wb2ludGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZXh0ZW5kXG5cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICB2YXIgdGFyZ2V0ID0ge31cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV1cblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi94dGVuZC9pbW11dGFibGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzWydkYXRlLXRpbWUnXSA9IC9eXFxkezR9LSg/OjBbMC05XXsxfXwxWzAtMl17MX0pLVswLTldezJ9W3RUIF1cXGR7Mn06XFxkezJ9OlxcZHsyfShcXC5cXGQrKT8oW3paXXxbKy1dXFxkezJ9OlxcZHsyfSkkL1xuZXhwb3J0c1snZGF0ZSddID0gL15cXGR7NH0tKD86MFswLTldezF9fDFbMC0yXXsxfSktWzAtOV17Mn0kL1xuZXhwb3J0c1sndGltZSddID0gL15cXGR7Mn06XFxkezJ9OlxcZHsyfSQvXG5leHBvcnRzWydlbWFpbCddID0gL15cXFMrQFxcUyskL1xuZXhwb3J0c1snaXAtYWRkcmVzcyddID0gZXhwb3J0c1snaXB2NCddID0gL14oPzooPzoyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pXFwuKXszfSg/OjI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldPykkL1xuZXhwb3J0c1snaXB2NiddID0gL15cXHMqKCgoWzAtOUEtRmEtZl17MSw0fTopezd9KFswLTlBLUZhLWZdezEsNH18OikpfCgoWzAtOUEtRmEtZl17MSw0fTopezZ9KDpbMC05QS1GYS1mXXsxLDR9fCgoMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKFxcLigyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkpezN9KXw6KSl8KChbMC05QS1GYS1mXXsxLDR9Oil7NX0oKCg6WzAtOUEtRmEtZl17MSw0fSl7MSwyfSl8OigoMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKFxcLigyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkpezN9KXw6KSl8KChbMC05QS1GYS1mXXsxLDR9Oil7NH0oKCg6WzAtOUEtRmEtZl17MSw0fSl7MSwzfSl8KCg6WzAtOUEtRmEtZl17MSw0fSk/OigoMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKFxcLigyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkpezN9KSl8OikpfCgoWzAtOUEtRmEtZl17MSw0fTopezN9KCgoOlswLTlBLUZhLWZdezEsNH0pezEsNH0pfCgoOlswLTlBLUZhLWZdezEsNH0pezAsMn06KCgyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkoXFwuKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSl7M30pKXw6KSl8KChbMC05QS1GYS1mXXsxLDR9Oil7Mn0oKCg6WzAtOUEtRmEtZl17MSw0fSl7MSw1fSl8KCg6WzAtOUEtRmEtZl17MSw0fSl7MCwzfTooKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKShcXC4oMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKXszfSkpfDopKXwoKFswLTlBLUZhLWZdezEsNH06KXsxfSgoKDpbMC05QS1GYS1mXXsxLDR9KXsxLDZ9KXwoKDpbMC05QS1GYS1mXXsxLDR9KXswLDR9OigoMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKFxcLigyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkpezN9KSl8OikpfCg6KCgoOlswLTlBLUZhLWZdezEsNH0pezEsN30pfCgoOlswLTlBLUZhLWZdezEsNH0pezAsNX06KCgyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkoXFwuKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSl7M30pKXw6KSkpKCUuKyk/XFxzKiQvXG5leHBvcnRzWyd1cmknXSA9IC9eW2EtekEtWl1bYS16QS1aMC05Ky0uXSo6W15cXHNdKiQvXG5leHBvcnRzWydjb2xvciddID0gLygjPyhbMC05QS1GYS1mXXszLDZ9KVxcYil8KGFxdWEpfChibGFjayl8KGJsdWUpfChmdWNoc2lhKXwoZ3JheSl8KGdyZWVuKXwobGltZSl8KG1hcm9vbil8KG5hdnkpfChvbGl2ZSl8KG9yYW5nZSl8KHB1cnBsZSl8KHJlZCl8KHNpbHZlcil8KHRlYWwpfCh3aGl0ZSl8KHllbGxvdyl8KHJnYlxcKFxccypcXGIoWzAtOV18WzEtOV1bMC05XXwxWzAtOV1bMC05XXwyWzAtNF1bMC05XXwyNVswLTVdKVxcYlxccyosXFxzKlxcYihbMC05XXxbMS05XVswLTldfDFbMC05XVswLTldfDJbMC00XVswLTldfDI1WzAtNV0pXFxiXFxzKixcXHMqXFxiKFswLTldfFsxLTldWzAtOV18MVswLTldWzAtOV18MlswLTRdWzAtOV18MjVbMC01XSlcXGJcXHMqXFwpKXwocmdiXFwoXFxzKihcXGQ/XFxkJXwxMDAlKStcXHMqLFxccyooXFxkP1xcZCV8MTAwJSkrXFxzKixcXHMqKFxcZD9cXGQlfDEwMCUpK1xccypcXCkpL1xuZXhwb3J0c1snaG9zdG5hbWUnXSA9IC9eKFthLXpBLVowLTldfFthLXpBLVowLTldW2EtekEtWjAtOVxcLV17MCw2MX1bYS16QS1aMC05XSkoXFwuKFthLXpBLVowLTldfFthLXpBLVowLTldW2EtekEtWjAtOVxcLV17MCw2MX1bYS16QS1aMC05XSkpKiQvXG5leHBvcnRzWydhbHBoYSddID0gL15bYS16QS1aXSskL1xuZXhwb3J0c1snYWxwaGFudW1lcmljJ10gPSAvXlthLXpBLVowLTldKyQvXG5leHBvcnRzWydzdHlsZSddID0gL1xccyooLis/KTpcXHMqKFteO10rKTs/L2dcbmV4cG9ydHNbJ3Bob25lJ10gPSAvXlxcKyg/OlswLTldID8pezYsMTR9WzAtOV0kL1xuZXhwb3J0c1sndXRjLW1pbGxpc2VjJ10gPSAvXlswLTldKyhcXC4/WzAtOV0rKT8kL1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvX3NjaGVtYS9mb3JtYXRzLmpzXG4gKiovIiwiLyoqXG4gKiBAY29weXJpZ2h0IDIwMTUsIFByb21ldGhldXMgUmVzZWFyY2gsIExMQ1xuICovXG5cbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlc30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbXBvbmVudCAgICAgICAgICBmcm9tICcuL0NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZWxkc2V0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC4uLkNvbXBvbmVudC5wcm9wVHlwZXMsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIGNvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKVxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29tcG9uZW50OiAnZGl2J1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2NvbXBvbmVudDogQ29tcG9uZW50LCAuLi5wcm9wc30gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz47XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL0ZpZWxkc2V0LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9XG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQGNvcHlyaWdodCAyMDE1LCBQcm9tZXRoZXVzIFJlc2VhcmNoLCBMTENcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXN9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBpbnZhcmlhbnQgICAgICAgICAgZnJvbSAnLi9pbnZhcmlhbnQnO1xuaW1wb3J0IGtleVBhdGggICAgICAgICAgICBmcm9tICcuL2tleVBhdGgnO1xuXG5jb25zdCBoYXNQYXJlbnRDb250ZXh0ID0gISEvMFxcLjE0XFwuWzAtOV0rLy5leGVjKFJlYWN0LnZlcnNpb24pO1xuXG5leHBvcnQgY29uc3QgQ29udGV4dFR5cGVzID0ge1xuICBmb3JtVmFsdWU6IFByb3BUeXBlcy5vYmplY3Rcbn07XG5cbmxldCBzZWxlY3RQcm9wVHlwZSA9IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICBQcm9wVHlwZXMuYXJyYXksXG4gIFByb3BUeXBlcy5zdHJpbmcsXG4gIFByb3BUeXBlcy5udW1iZXIsXG4gIFByb3BUeXBlcy5ib29sXG5dKTtcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBmb3JtIGNvbXBvbmVudHMuXG4gKlxuICogSXQgZXhwb3NlcyBmb3JtIHZhbHVlIHZpYSBgdGhpcy5mb3JtVmFsdWVgIHdoaWNoIGlzIHByb3ZpZGVkIGVpdGhlciB2aWFcbiAqIGB0aGlzLnByb3BzLmZvcm1WYWx1ZWAgb3IgdmlhIGNvbnRleHQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IENvbnRleHRUeXBlcztcbiAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0gQ29udGV4dFR5cGVzO1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZm9ybVZhbHVlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHNlbGVjdDogc2VsZWN0UHJvcFR5cGUsXG4gICAgc2VsZWN0Rm9ybVZhbHVlOiBzZWxlY3RQcm9wVHlwZVxuICB9O1xuXG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4ge2Zvcm1WYWx1ZTogdGhpcy5mb3JtVmFsdWV9O1xuICB9XG5cbiAgZ2V0IF9wYXJlbnRDb250ZXh0KCkge1xuICAgIGlmIChoYXNQYXJlbnRDb250ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVhY3RJbnRlcm5hbEluc3RhbmNlLl9jb250ZXh0O1xuICAgIH1cbiAgfVxuXG4gIGdldCBmb3JtVmFsdWUoKSB7XG4gICAgbGV0IGZvcm1WYWx1ZSA9IHRoaXMucHJvcHMuZm9ybVZhbHVlIHx8IHRoaXMuX3BhcmVudENvbnRleHQuZm9ybVZhbHVlO1xuXG4gICAgaW52YXJpYW50KFxuICAgICAgZm9ybVZhbHVlLFxuICAgICAgJ0EgZm9ybSBjb21wb25lbnQgPCVzIC8+IHNob3VsZCByZWNlaXZlIGZvcm0gdmFsdWUgdmlhIHByb3BzICcgK1xuICAgICAgJ29yIGJlIHVzZWQgYXMgYSBwYXJ0IG9mIGVsZW1lbnQgaGllcmFyY2h5IHdoaWNoICcgK1xuICAgICAgJ2luY2x1ZGVzIDxGb3JtIC8+IGNvbXBvbmVudCBpbiBpdHMgYW5jZXN0b3JzJyxcbiAgICAgIHRoaXMuY29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lXG4gICAgKTtcblxuICAgIGxldCBzZWxlY3QgPSB0aGlzLnByb3BzLnNlbGVjdCB8fCB0aGlzLnByb3BzLnNlbGVjdEZvcm1WYWx1ZTtcbiAgICAvLyBXZSBjaGVjayBmb3Igc2VsZWN0ICE9PSB0cnVlIHRvIGtlZXAgY29tcGF0YWJpbGl0eSB3ZSBlYXJpbGVyXG4gICAgLy8gdmVyc2lvbnMgb2YgUmVhY3QgRm9ybXMgd2hlcmUgd2UgbmVlZGVkIHRvIHJlYnVpbGQgZWxlbWVudCB0cmVlIHRvXG4gICAgLy8gcHJvcGFnYXRlIHZhbHVlcyB0byBmb3JtLlxuICAgIGlmIChzZWxlY3QgJiYgc2VsZWN0ICE9PSB0cnVlKSB7XG4gICAgICBzZWxlY3QgPSBrZXlQYXRoKHNlbGVjdCk7XG4gICAgICBmb3JtVmFsdWUgPSBmb3JtVmFsdWUuc2VsZWN0KHNlbGVjdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1WYWx1ZTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvQ29tcG9uZW50LmpzXG4gKiovIiwiLyoqXG4gKiBAY29weXJpZ2h0IDIwMTUsIFByb21ldGhldXMgUmVzZWFyY2gsIExMQ1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGludmFyaWFudChjb25kLCBtc2csIGEsIGIsIGMsIGQsIGUsIGYpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtcGFyYW1zXG4gIGlmICghY29uZCkge1xuICAgIGlmIChtc2cpIHtcbiAgICAgIGxldCByZXBsYWNlbWVudHMgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICBsZXQgaWR4ID0gMDtcbiAgICAgIG1zZyA9IG1zZy5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJlcGxhY2VtZW50c1tpZHgrK107XG4gICAgICB9KTtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YXJpYW50IHZpb2xhdGlvbjogJyArIG1zZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YXJpYW50IHZpb2xhdGlvbicpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW52YXJpYW50LmpzXG4gKiovIiwiLyoqXG4gKiBAY29weXJpZ2h0IDIwMTUsIFByb21ldGhldXMgUmVzZWFyY2gsIExMQ1xuICovXG5cbmltcG9ydCBpc1N0cmluZyAgZnJvbSAnbG9kYXNoL2xhbmcvaXNTdHJpbmcnO1xuaW1wb3J0IGlzQXJyYXkgICBmcm9tICdsb2Rhc2gvbGFuZy9pc0FycmF5JztcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAnLi9pbnZhcmlhbnQnO1xuXG5jb25zdCBJU19OVU1CRVIgPSAvWzAtOV0rLztcblxuZnVuY3Rpb24gdHJ5UGFyc2VJbnQodikge1xuICBpZiAodHlwZW9mIHYgPT09ICdzdHJpbmcnICYmIElTX05VTUJFUi5leGVjKHYpKSB7XG4gICAgdiA9IHBhcnNlSW50KHYsIDEwKTtcbiAgfVxuICByZXR1cm4gdjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ga2V5UGF0aCh2YWx1ZSkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgaWYgKHZhbHVlLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJy4nKS5maWx0ZXIoQm9vbGVhbikubWFwKHRyeVBhcnNlSW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBbdHJ5UGFyc2VJbnQodmFsdWUpXTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gW3ZhbHVlXTtcbiAgfSBlbHNlIHtcbiAgICBpbnZhcmlhbnQoXG4gICAgICBmYWxzZSxcbiAgICAgICdrZXlQYXRoIGNhbiBiZSBlaXRoZXIgYW4gYXJyYXkgb3Igc3RyaW5nLCBnb3Q6ICVzJyxcbiAgICAgIHZhbHVlXG4gICAgKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMva2V5UGF0aC5qc1xuICoqLyIsInZhciBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nO1xuXG4vKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlIFtgdG9TdHJpbmdUYWdgXShodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9ialRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTdHJpbmdgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGNvcnJlY3RseSBjbGFzc2lmaWVkLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTdHJpbmcoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTdHJpbmcoMSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8IChpc09iamVjdExpa2UodmFsdWUpICYmIG9ialRvU3RyaW5nLmNhbGwodmFsdWUpID09IHN0cmluZ1RhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTdHJpbmc7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvbGFuZy9pc1N0cmluZy5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2lzT2JqZWN0TGlrZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvZ2V0TmF0aXZlJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc0xlbmd0aCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nO1xuXG4vKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlIFtgdG9TdHJpbmdUYWdgXShodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9ialRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qIE5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNBcnJheSA9IGdldE5hdGl2ZShBcnJheSwgJ2lzQXJyYXknKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IG5hdGl2ZUlzQXJyYXkgfHwgZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiBvYmpUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBhcnJheVRhZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9sYW5nL2lzQXJyYXkuanNcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzTmF0aXZlID0gcmVxdWlyZSgnLi4vbGFuZy9pc05hdGl2ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgcmV0dXJuIGlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9nZXROYXRpdmUuanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGVzY2FwZVJlZ0V4cCA9IHJlcXVpcmUoJy4uL3N0cmluZy9lc2NhcGVSZWdFeHAnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSA+IDUpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZm5Ub1N0cmluZyA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlIFtgdG9TdHJpbmdUYWdgXShodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9ialRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBlc2NhcGVSZWdFeHAoZm5Ub1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KSlcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTmF0aXZlKEFycmF5LnByb3RvdHlwZS5wdXNoKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTmF0aXZlKF8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKG9ialRvU3RyaW5nLmNhbGwodmFsdWUpID09IGZ1bmNUYWcpIHtcbiAgICByZXR1cm4gcmVJc05hdGl2ZS50ZXN0KGZuVG9TdHJpbmcuY2FsbCh2YWx1ZSkpO1xuICB9XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIHJlSXNIb3N0Q3Rvci50ZXN0KHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc05hdGl2ZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9sYW5nL2lzTmF0aXZlLmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBiYXNlVG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlVG9TdHJpbmcnKTtcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgIFtzcGVjaWFsIGNoYXJhY3RlcnNdKGh0dHA6Ly93d3cucmVndWxhci1leHByZXNzaW9ucy5pbmZvL2NoYXJhY3RlcnMuaHRtbCNzcGVjaWFsKS5cbiAqIEluIGFkZGl0aW9uIHRvIHNwZWNpYWwgY2hhcmFjdGVycyB0aGUgZm9yd2FyZCBzbGFzaCBpcyBlc2NhcGVkIHRvIGFsbG93IGZvclxuICogZWFzaWVyIGBldmFsYCB1c2UgYW5kIGBGdW5jdGlvbmAgY29tcGlsYXRpb24uXG4gKi9cbnZhciByZVJlZ0V4cENoYXJzID0gL1suKis/XiR7fSgpfFtcXF1cXC9cXFxcXS9nLFxuICAgIHJlSGFzUmVnRXhwQ2hhcnMgPSBSZWdFeHAocmVSZWdFeHBDaGFycy5zb3VyY2UpO1xuXG4vKipcbiAqIEVzY2FwZXMgdGhlIGBSZWdFeHBgIHNwZWNpYWwgY2hhcmFjdGVycyBcIlxcXCIsIFwiL1wiLCBcIl5cIiwgXCIkXCIsIFwiLlwiLCBcInxcIiwgXCI/XCIsXG4gKiBcIipcIiwgXCIrXCIsIFwiKFwiLCBcIilcIiwgXCJbXCIsIFwiXVwiLCBcIntcIiBhbmQgXCJ9XCIgaW4gYHN0cmluZ2AuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyaW5nPScnXSBUaGUgc3RyaW5nIHRvIGVzY2FwZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGVzY2FwZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmVzY2FwZVJlZ0V4cCgnW2xvZGFzaF0oaHR0cHM6Ly9sb2Rhc2guY29tLyknKTtcbiAqIC8vID0+ICdcXFtsb2Rhc2hcXF1cXChodHRwczpcXC9cXC9sb2Rhc2hcXC5jb21cXC9cXCknXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVJlZ0V4cChzdHJpbmcpIHtcbiAgc3RyaW5nID0gYmFzZVRvU3RyaW5nKHN0cmluZyk7XG4gIHJldHVybiAoc3RyaW5nICYmIHJlSGFzUmVnRXhwQ2hhcnMudGVzdChzdHJpbmcpKVxuICAgID8gc3RyaW5nLnJlcGxhY2UocmVSZWdFeHBDaGFycywgJ1xcXFwkJicpXG4gICAgOiBzdHJpbmc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXNjYXBlUmVnRXhwO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL3N0cmluZy9lc2NhcGVSZWdFeHAuanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIGlmIGl0J3Mgbm90IG9uZS4gQW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkXG4gKiBmb3IgYG51bGxgIG9yIGB1bmRlZmluZWRgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRvU3RyaW5nKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6ICh2YWx1ZSArICcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVG9TdHJpbmc7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZVRvU3RyaW5nLmpzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogVXNlZCBhcyB0aGUgW21heGltdW0gbGVuZ3RoXShodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtbnVtYmVyLm1heF9zYWZlX2ludGVnZXIpXG4gKiBvZiBhbiBhcnJheS1saWtlIHZhbHVlLlxuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBpcyBiYXNlZCBvbiBbYFRvTGVuZ3RoYF0oaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0xlbmd0aDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9pc0xlbmd0aC5qc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEBjb3B5cmlnaHQgMjAxNSwgUHJvbWV0aGV1cyBSZXNlYXJjaCwgTExDXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzfSAgIGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbnB1dCAgICAgICAgICAgICAgICBmcm9tICcuL0lucHV0JztcbmltcG9ydCBFcnJvckxpc3QgICAgICAgICAgICBmcm9tICcuL0Vycm9yTGlzdCc7XG5pbXBvcnQgQ29tcG9uZW50ICAgICAgICAgICAgZnJvbSAnLi9Db21wb25lbnQnO1xuXG5mdW5jdGlvbiByZW5kZXJMYWJlbChsYWJlbCkge1xuICByZXR1cm4gbGFiZWwgJiYgPGxhYmVsPntsYWJlbH08L2xhYmVsPjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyRXJyb3JMaXN0KGZvcm1WYWx1ZSkge1xuICByZXR1cm4gPEVycm9yTGlzdCBmb3JtVmFsdWU9e2Zvcm1WYWx1ZX0gLz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC4uLkNvbXBvbmVudC5wcm9wVHlwZXMsXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LFxuICAgIHJlbmRlckxhYmVsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICByZW5kZXJFcnJvckxpc3Q6IFByb3BUeXBlcy5mdW5jXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjaGlsZHJlbjogPElucHV0IHR5cGU9XCJ0ZXh0XCIgLz4sXG4gICAgcmVuZGVyTGFiZWwsXG4gICAgcmVuZGVyRXJyb3JMaXN0XG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtkaXJ0eTogZmFsc2V9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y2hpbGRyZW4sIHJlbmRlckxhYmVsLCByZW5kZXJFcnJvckxpc3R9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQge2RpcnR5fSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IHtzY2hlbWEsIHZhbHVlLCBlcnJvcnMsIHBhcmFtc30gPSB0aGlzLmZvcm1WYWx1ZTtcbiAgICBsZXQgc2hvd0Vycm9ycyA9IGRpcnR5IHx8IHBhcmFtcy5mb3JjZVNob3dFcnJvcnM7XG4gICAgY2hpbGRyZW4gPSBSZWFjdC5jbG9uZUVsZW1lbnQoXG4gICAgICBSZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKSxcbiAgICAgIHt2YWx1ZSwgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2V9KTtcbiAgICBsZXQgbGFiZWwgPSB0aGlzLnByb3BzLmxhYmVsIHx8IHNjaGVtYS5sYWJlbDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBvbkJsdXI9e3RoaXMub25CbHVyfT5cbiAgICAgICAge3JlbmRlckxhYmVsKGxhYmVsLCBzY2hlbWEpfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHtzaG93RXJyb3JzICYmIHJlbmRlckVycm9yTGlzdCh0aGlzLmZvcm1WYWx1ZSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgb25CbHVyID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe2RpcnR5OiB0cnVlfSk7XG4gIH1cblxuICBvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgbGV0IHZhbHVlO1xuICAgIGlmIChlICYmIGUudGFyZ2V0ICYmIGUudGFyZ2V0LnZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgaWYgKHZhbHVlID09PSAnJykge1xuICAgICAgICB2YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBlO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtkaXJ0eTogdHJ1ZX0pO1xuICAgIHRoaXMucHJvcHMuZm9ybVZhbHVlLnVwZGF0ZSh2YWx1ZSk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL0ZpZWxkLmpzXG4gKiovIiwiLyoqXG4gKiBAY29weXJpZ2h0IDIwMTUsIFByb21ldGhldXMgUmVzZWFyY2gsIExMQ1xuICovXG5cbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlc30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGRlYm91bmNlICAgICAgICAgICBmcm9tICdsb2Rhc2gvZnVuY3Rpb24vZGVib3VuY2UnO1xuaW1wb3J0IGVtcHR5RnVuY3Rpb24gICAgICBmcm9tICcuL2VtcHR5RnVuY3Rpb24nO1xuXG4vKipcbiAqIElucHV0IGNvbXBvbmVudCB3aXRoIGRlYm91bmNlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBlbGVtZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICAgIGRlYm91bmNlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuY1xuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZWxlbWVudDogJ2lucHV0JyxcbiAgICBkZWJvdW5jZTogMTAwLFxuICAgIG9uQ2hhbmdlOiBlbXB0eUZ1bmN0aW9uXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt2YWx1ZTogcHJvcHMudmFsdWV9O1xuICAgIHRoaXMuX2V4cGVjdGVkVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fc2NoZWR1bGVPbkNoYW5nZSA9IHByb3BzLmRlYm91bmNlID9cbiAgICAgIGRlYm91bmNlKElucHV0LnByb3RvdHlwZS5fc2NoZWR1bGVPbkNoYW5nZS5iaW5kKHRoaXMpLCBwcm9wcy5kZWJvdW5jZSkgOlxuICAgICAgSW5wdXQucHJvdG90eXBlLl9zY2hlZHVsZU9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtlbGVtZW50OiBFbGVtZW50LCBkZWJvdW5jZTogZGVib3VuY2VFbmFibGVkLCB2YWx1ZSwgLi4ucHJvcHN9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoZGVib3VuY2VFbmFibGVkKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG4gICAgfVxuICAgIHJldHVybiA8RWxlbWVudCB7Li4ucHJvcHN9IHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IC8+O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLnZhbHVlICE9PSB0aGlzLl9leHBlY3RlZFZhbHVlKSB7XG4gICAgICB0aGlzLmNhbmNlbE9uQ2hhbmdlKCk7XG4gICAgfVxuICAgIGlmIChuZXh0UHJvcHMuZGVib3VuY2UgIT09IHRoaXMucHJvcHMuZGVib3VuY2UpIHtcbiAgICAgIHRoaXMuY2FuY2VsT25DaGFuZ2UoKTtcbiAgICAgIHRoaXMuX3NjaGVkdWxlT25DaGFuZ2UgPSBuZXh0UHJvcHMuZGVib3VuY2UgP1xuICAgICAgICBkZWJvdW5jZShJbnB1dC5wcm90b3R5cGUuX3NjaGVkdWxlT25DaGFuZ2UuYmluZCh0aGlzKSwgbmV4dFByb3BzLmRlYm91bmNlKSA6XG4gICAgICAgIElucHV0LnByb3RvdHlwZS5fc2NoZWR1bGVPbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuY2FuY2VsT25DaGFuZ2UoKTtcbiAgfVxuXG4gIF9zY2hlZHVsZU9uQ2hhbmdlKCkge1xuICAgIGxldCB2YWx1ZSA9IHRoaXMuX2V4cGVjdGVkVmFsdWU7XG4gICAgdGhpcy5fZXhwZWN0ZWRWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgfVxuXG4gIHNjaGVkdWxlT25DaGFuZ2UodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZX0pO1xuICAgIHRoaXMuX2V4cGVjdGVkVmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLl9zY2hlZHVsZU9uQ2hhbmdlKCk7XG4gIH1cblxuICBjYW5jZWxPbkNoYW5nZSgpIHtcbiAgICBpZiAodGhpcy5fc2NoZWR1bGVPbkNoYW5nZS5jYW5jZWwpIHtcbiAgICAgIHRoaXMuX2V4cGVjdGVkVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9zY2hlZHVsZU9uQ2hhbmdlLmNhbmNlbCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICBsZXQgdmFsdWUgPSBlICYmIGUudGFyZ2V0ICYmICd2YWx1ZScgaW4gZS50YXJnZXQgP1xuICAgICAgZS50YXJnZXQudmFsdWUgOlxuICAgICAgZTtcbiAgICB0aGlzLnNjaGVkdWxlT25DaGFuZ2UodmFsdWUpO1xuICB9XG5cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL0lucHV0LmpzXG4gKiovIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vbGFuZy9pc09iamVjdCcpLFxuICAgIG5vdyA9IHJlcXVpcmUoJy4uL2RhdGUvbm93Jyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiBOYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGludm9jYXRpb25zLiBQcm92aWRlIGFuIG9wdGlvbnMgb2JqZWN0IHRvIGluZGljYXRlIHRoYXQgYGZ1bmNgXG4gKiBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGUgbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKiBTdWJzZXF1ZW50IGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3RcbiAqIGBmdW5jYCBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXMgaW52b2tlZFxuICogb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiBpc1xuICogaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwOi8vZHJ1cGFsbW90aW9uLmNvbS9hcnRpY2xlL2RlYm91bmNlLWFuZC10aHJvdHRsZS12aXN1YWwtZXhwbGFuYXRpb24pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmdcbiAqICBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmVcbiAqICBkZWxheWVkIGJlZm9yZSBpdCBpcyBpbnZva2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXSBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZ1xuICogIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIGF2b2lkIGNvc3RseSBjYWxjdWxhdGlvbnMgd2hpbGUgdGhlIHdpbmRvdyBzaXplIGlzIGluIGZsdXhcbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gaW52b2tlIGBzZW5kTWFpbGAgd2hlbiB0aGUgY2xpY2sgZXZlbnQgaXMgZmlyZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxsc1xuICogalF1ZXJ5KCcjcG9zdGJveCcpLm9uKCdjbGljaycsIF8uZGVib3VuY2Uoc2VuZE1haWwsIDMwMCwge1xuICogICAnbGVhZGluZyc6IHRydWUsXG4gKiAgICd0cmFpbGluZyc6IGZhbHNlXG4gKiB9KSk7XG4gKlxuICogLy8gZW5zdXJlIGBiYXRjaExvZ2AgaXMgaW52b2tlZCBvbmNlIGFmdGVyIDEgc2Vjb25kIG9mIGRlYm91bmNlZCBjYWxsc1xuICogdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSgnL3N0cmVhbScpO1xuICogalF1ZXJ5KHNvdXJjZSkub24oJ21lc3NhZ2UnLCBfLmRlYm91bmNlKGJhdGNoTG9nLCAyNTAsIHtcbiAqICAgJ21heFdhaXQnOiAxMDAwXG4gKiB9KSk7XG4gKlxuICogLy8gY2FuY2VsIGEgZGVib3VuY2VkIGNhbGxcbiAqIHZhciB0b2RvQ2hhbmdlcyA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDEwMDApO1xuICogT2JqZWN0Lm9ic2VydmUobW9kZWxzLnRvZG8sIHRvZG9DaGFuZ2VzKTtcbiAqXG4gKiBPYmplY3Qub2JzZXJ2ZShtb2RlbHMsIGZ1bmN0aW9uKGNoYW5nZXMpIHtcbiAqICAgaWYgKF8uZmluZChjaGFuZ2VzLCB7ICd1c2VyJzogJ3RvZG8nLCAndHlwZSc6ICdkZWxldGUnfSkpIHtcbiAqICAgICB0b2RvQ2hhbmdlcy5jYW5jZWwoKTtcbiAqICAgfVxuICogfSwgWydkZWxldGUnXSk7XG4gKlxuICogLy8gLi4uYXQgc29tZSBwb2ludCBgbW9kZWxzLnRvZG9gIGlzIGNoYW5nZWRcbiAqIG1vZGVscy50b2RvLmNvbXBsZXRlZCA9IHRydWU7XG4gKlxuICogLy8gLi4uYmVmb3JlIDEgc2Vjb25kIGhhcyBwYXNzZWQgYG1vZGVscy50b2RvYCBpcyBkZWxldGVkXG4gKiAvLyB3aGljaCBjYW5jZWxzIHRoZSBkZWJvdW5jZWQgYHRvZG9DaGFuZ2VzYCBjYWxsXG4gKiBkZWxldGUgbW9kZWxzLnRvZG87XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGFyZ3MsXG4gICAgICBtYXhUaW1lb3V0SWQsXG4gICAgICByZXN1bHQsXG4gICAgICBzdGFtcCxcbiAgICAgIHRoaXNBcmcsXG4gICAgICB0aW1lb3V0SWQsXG4gICAgICB0cmFpbGluZ0NhbGwsXG4gICAgICBsYXN0Q2FsbGVkID0gMCxcbiAgICAgIG1heFdhaXQgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gd2FpdCA8IDAgPyAwIDogKCt3YWl0IHx8IDApO1xuICBpZiAob3B0aW9ucyA9PT0gdHJ1ZSkge1xuICAgIHZhciBsZWFkaW5nID0gdHJ1ZTtcbiAgICB0cmFpbGluZyA9IGZhbHNlO1xuICB9IGVsc2UgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9IG9wdGlvbnMubGVhZGluZztcbiAgICBtYXhXYWl0ID0gJ21heFdhaXQnIGluIG9wdGlvbnMgJiYgbmF0aXZlTWF4KCtvcHRpb25zLm1heFdhaXQgfHwgMCwgd2FpdCk7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyBvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVvdXRJZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgfVxuICAgIGlmIChtYXhUaW1lb3V0SWQpIHtcbiAgICAgIGNsZWFyVGltZW91dChtYXhUaW1lb3V0SWQpO1xuICAgIH1cbiAgICBtYXhUaW1lb3V0SWQgPSB0aW1lb3V0SWQgPSB0cmFpbGluZ0NhbGwgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxheWVkKCkge1xuICAgIHZhciByZW1haW5pbmcgPSB3YWl0IC0gKG5vdygpIC0gc3RhbXApO1xuICAgIGlmIChyZW1haW5pbmcgPD0gMCB8fCByZW1haW5pbmcgPiB3YWl0KSB7XG4gICAgICBpZiAobWF4VGltZW91dElkKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChtYXhUaW1lb3V0SWQpO1xuICAgICAgfVxuICAgICAgdmFyIGlzQ2FsbGVkID0gdHJhaWxpbmdDYWxsO1xuICAgICAgbWF4VGltZW91dElkID0gdGltZW91dElkID0gdHJhaWxpbmdDYWxsID0gdW5kZWZpbmVkO1xuICAgICAgaWYgKGlzQ2FsbGVkKSB7XG4gICAgICAgIGxhc3RDYWxsZWQgPSBub3coKTtcbiAgICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICAgICAgaWYgKCF0aW1lb3V0SWQgJiYgIW1heFRpbWVvdXRJZCkge1xuICAgICAgICAgIGFyZ3MgPSB0aGlzQXJnID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGRlbGF5ZWQsIHJlbWFpbmluZyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbWF4RGVsYXllZCgpIHtcbiAgICBpZiAodGltZW91dElkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICB9XG4gICAgbWF4VGltZW91dElkID0gdGltZW91dElkID0gdHJhaWxpbmdDYWxsID0gdW5kZWZpbmVkO1xuICAgIGlmICh0cmFpbGluZyB8fCAobWF4V2FpdCAhPT0gd2FpdCkpIHtcbiAgICAgIGxhc3RDYWxsZWQgPSBub3coKTtcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgICBpZiAoIXRpbWVvdXRJZCAmJiAhbWF4VGltZW91dElkKSB7XG4gICAgICAgIGFyZ3MgPSB0aGlzQXJnID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICBzdGFtcCA9IG5vdygpO1xuICAgIHRoaXNBcmcgPSB0aGlzO1xuICAgIHRyYWlsaW5nQ2FsbCA9IHRyYWlsaW5nICYmICh0aW1lb3V0SWQgfHwgIWxlYWRpbmcpO1xuXG4gICAgaWYgKG1heFdhaXQgPT09IGZhbHNlKSB7XG4gICAgICB2YXIgbGVhZGluZ0NhbGwgPSBsZWFkaW5nICYmICF0aW1lb3V0SWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghbWF4VGltZW91dElkICYmICFsZWFkaW5nKSB7XG4gICAgICAgIGxhc3RDYWxsZWQgPSBzdGFtcDtcbiAgICAgIH1cbiAgICAgIHZhciByZW1haW5pbmcgPSBtYXhXYWl0IC0gKHN0YW1wIC0gbGFzdENhbGxlZCksXG4gICAgICAgICAgaXNDYWxsZWQgPSByZW1haW5pbmcgPD0gMCB8fCByZW1haW5pbmcgPiBtYXhXYWl0O1xuXG4gICAgICBpZiAoaXNDYWxsZWQpIHtcbiAgICAgICAgaWYgKG1heFRpbWVvdXRJZCkge1xuICAgICAgICAgIG1heFRpbWVvdXRJZCA9IGNsZWFyVGltZW91dChtYXhUaW1lb3V0SWQpO1xuICAgICAgICB9XG4gICAgICAgIGxhc3RDYWxsZWQgPSBzdGFtcDtcbiAgICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCFtYXhUaW1lb3V0SWQpIHtcbiAgICAgICAgbWF4VGltZW91dElkID0gc2V0VGltZW91dChtYXhEZWxheWVkLCByZW1haW5pbmcpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNDYWxsZWQgJiYgdGltZW91dElkKSB7XG4gICAgICB0aW1lb3V0SWQgPSBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoIXRpbWVvdXRJZCAmJiB3YWl0ICE9PSBtYXhXYWl0KSB7XG4gICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGRlbGF5ZWQsIHdhaXQpO1xuICAgIH1cbiAgICBpZiAobGVhZGluZ0NhbGwpIHtcbiAgICAgIGlzQ2FsbGVkID0gdHJ1ZTtcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgfVxuICAgIGlmIChpc0NhbGxlZCAmJiAhdGltZW91dElkICYmICFtYXhUaW1lb3V0SWQpIHtcbiAgICAgIGFyZ3MgPSB0aGlzQXJnID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYm91bmNlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2Z1bmN0aW9uL2RlYm91bmNlLmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlIFtsYW5ndWFnZSB0eXBlXShodHRwczovL2VzNS5naXRodWIuaW8vI3g4KSBvZiBgT2JqZWN0YC5cbiAqIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoMSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAvLyBBdm9pZCBhIFY4IEpJVCBidWcgaW4gQ2hyb21lIDE5LTIwLlxuICAvLyBTZWUgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTIyOTEgZm9yIG1vcmUgZGV0YWlscy5cbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvbGFuZy9pc09iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvZ2V0TmF0aXZlJyk7XG5cbi8qIE5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTm93ID0gZ2V0TmF0aXZlKERhdGUsICdub3cnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBVbml4IGVwb2NoXG4gKiAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IERhdGVcbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZlcihmdW5jdGlvbihzdGFtcCkge1xuICogICBjb25zb2xlLmxvZyhfLm5vdygpIC0gc3RhbXApO1xuICogfSwgXy5ub3coKSk7XG4gKiAvLyA9PiBsb2dzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRvb2sgZm9yIHRoZSBkZWZlcnJlZCBmdW5jdGlvbiB0byBiZSBpbnZva2VkXG4gKi9cbnZhciBub3cgPSBuYXRpdmVOb3cgfHwgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbm93O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2RhdGUvbm93LmpzXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGF0UmV0dXJuc1RydWUoKSB7XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhhdFJldHVybnNOdWxsKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRoYXRSZXR1cm5zQXJndW1lbnQoYXJnKSB7XG4gIHJldHVybiBhcmc7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9lbXB0eUZ1bmN0aW9uLmpzXG4gKiovIiwiLyoqXG4gKiBAY29weXJpZ2h0IDIwMTUsIFByb21ldGhldXMgUmVzZWFyY2gsIExMQ1xuICovXG5cbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlc30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbXBvbmVudCAgICAgICAgICBmcm9tICcuL0NvbXBvbmVudCc7XG5cbmZ1bmN0aW9uIHJlbmRlckVycm9yKGVycm9yLCBpbmRleCwgZXJyb3JMaXN0LCBwcm9wcykge1xuICBsZXQgbGFiZWwgPSBwcm9wcy5sYWJlbCB8fCAoZXJyb3Iuc2NoZW1hICYmIGVycm9yLnNjaGVtYS5sYWJlbCk7XG4gIGlmIChwcm9wcy5jb21wbGV0ZSAmJiAhcHJvcHMubm9MYWJlbCAmJiBsYWJlbCkge1xuICAgIHJldHVybiA8bGk+e2Vycm9yLnNjaGVtYS5sYWJlbH06IHtlcnJvci5tZXNzYWdlfTwvbGk+O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiA8bGk+e2Vycm9yLm1lc3NhZ2V9PC9saT47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC4uLkNvbXBvbmVudC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJlciBmb3IgZXJyb3IgaXRlbXMuXG4gICAgICovXG4gICAgcmVuZGVyRXJyb3I6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogSWYgY29tcG9uZW50IHNob3VsZCByZW5kZXIgZXJyb3JzIGZyb20gYWxsIHRoZSBzdWJ2YWx1ZXMuXG4gICAgICovXG4gICAgY29tcGxldGU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogUmVzdHJpY3Qgc2NoZW1hIHR5cGVzXG4gICAgICovXG4gICAgc2NoZW1hVHlwZTogUHJvcFR5cGVzLm9iamVjdCxcblxuICAgIG5vTGFiZWw6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmdcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHJlbmRlckVycm9yXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7cmVuZGVyRXJyb3IsIGNvbXBsZXRlLCBzY2hlbWFUeXBlLCAuLi5wcm9wc30gPSB0aGlzLnByb3BzO1xuICAgIGxldCBlcnJvckxpc3QgPSBjb21wbGV0ZSA/XG4gICAgICB0aGlzLmZvcm1WYWx1ZS5jb21wbGV0ZUVycm9yTGlzdCA6XG4gICAgICB0aGlzLmZvcm1WYWx1ZS5lcnJvckxpc3Q7XG4gICAgaWYgKHNjaGVtYVR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3JMaXN0ID0gZXJyb3JMaXN0LmZpbHRlcihlcnJvciA9PlxuICAgICAgICBlcnJvci5zY2hlbWEgPyBzY2hlbWFUeXBlW2Vycm9yLnNjaGVtYS50eXBlXSA6IHNjaGVtYVR5cGUubm9uZSk7XG4gICAgfVxuICAgIGxldCBpdGVtcyA9IGVycm9yTGlzdC5tYXAodGhpcy5yZW5kZXJFcnJvciwgdGhpcyk7XG4gICAgcmV0dXJuIGl0ZW1zLmxlbmd0aCA+IDAgPyAoXG4gICAgICA8dWwgey4uLnByb3BzfT5cbiAgICAgICAge2l0ZW1zfVxuICAgICAgPC91bD5cbiAgICApIDogbnVsbDtcbiAgfVxuXG4gIHJlbmRlckVycm9yKGVycm9yLCBpbmRleCwgZXJyb3JMaXN0KSB7XG4gICAgbGV0IGVsZW1lbnQgPSB0aGlzLnByb3BzLnJlbmRlckVycm9yKGVycm9yLCBpbmRleCwgZXJyb3JMaXN0LCB0aGlzLnByb3BzKTtcbiAgICBsZXQga2V5ID0gYCR7ZXJyb3IuZmllbGR9X18ke2luZGV4fWA7XG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChlbGVtZW50LCB7a2V5fSk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL0Vycm9yTGlzdC5qc1xuICoqLyIsIi8qKlxuICogQGNvcHlyaWdodCAyMDE1LCBQcm9tZXRoZXVzIFJlc2VhcmNoLCBMTENcbiAqL1xuXG5pbXBvcnQgbWVtb2l6ZSAgICAgICAgICAgICAgICAgICAgZnJvbSAnbWVtb2l6ZS1kZWNvcmF0b3InO1xuaW1wb3J0IGNsb25lICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ2xvZGFzaC9sYW5nL2Nsb25lRGVlcCc7XG5pbXBvcnQgc2VsZWN0VmFsdWUgICAgICAgICAgICAgICAgZnJvbSAnbG9kYXNoL29iamVjdC9nZXQnO1xuaW1wb3J0IHNldCAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ2xvZGFzaC9vYmplY3Qvc2V0JztcbmltcG9ydCBtYWtlS2V5UGF0aCAgICAgICAgICAgICAgICBmcm9tICcuL2tleVBhdGgnO1xuaW1wb3J0IHtjcmVhdGVWYWxpZGF0b3IsXG4gICAgICAgIHNlbGVjdCBhcyBzZWxlY3RTY2hlbWF9ICAgZnJvbSAnLi9TY2hlbWEnO1xuaW1wb3J0IGVtcHR5RnVuY3Rpb24gICAgICAgICAgICAgIGZyb20gJy4vZW1wdHlGdW5jdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBWYWx1ZSB7XG5cbiAgc2VsZWN0KGtleSkge1xuICAgIGxldCBrZXlQYXRoID0gdGhpcy5rZXlQYXRoLmNvbmNhdChtYWtlS2V5UGF0aChrZXkpKTtcbiAgICByZXR1cm4gbmV3IFZhbHVlTGVhZih0aGlzLl9yb290LCBrZXlQYXRoKTtcbiAgfVxuXG4gIHNldCh2YWx1ZSwgcXVpZXQpIHtcbiAgICBjb25zb2xlLndhcm4oLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAnVmFsdWUucHJvdG90eXBlLnNldCh2YWx1ZSkgaXMgZGVwcmVjYXRlZCwgJyArXG4gICAgICAndXNlIFZhbHVlLnByb3RvdHlwZS51cGRhdGUodmFsdWUpIGluc3RlYWQnXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy51cGRhdGUodmFsdWUsIHF1aWV0KTtcbiAgfVxuXG4gIHVwZGF0ZSh2YWx1ZSwgcXVpZXQpIHtcbiAgICBsZXQgcm9vdFZhbHVlID0gY2xvbmUodGhpcy5fcm9vdC52YWx1ZSk7XG4gICAgaWYgKHRoaXMua2V5UGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJvb3RWYWx1ZSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByb290VmFsdWUgPSBzZXQocm9vdFZhbHVlLCB0aGlzLmtleVBhdGgsIHZhbHVlKTtcbiAgICB9XG4gICAgbGV0IG5leHRSb290ID0gY3JlYXRlVmFsdWUoXG4gICAgICB0aGlzLl9yb290LnNjaGVtYSxcbiAgICAgIHJvb3RWYWx1ZSxcbiAgICAgIHRoaXMuX3Jvb3Qub25DaGFuZ2UsXG4gICAgICB0aGlzLl9yb290LnBhcmFtcyk7XG4gICAgaWYgKCFxdWlldCkge1xuICAgICAgdGhpcy5fcm9vdC5vbkNoYW5nZShuZXh0Um9vdCk7XG4gICAgfVxuICAgIHJldHVybiBuZXh0Um9vdDtcbiAgfVxufVxuXG5jbGFzcyBWYWx1ZVJvb3QgZXh0ZW5kcyBWYWx1ZSB7XG5cbiAga2V5UGF0aCA9IFtdO1xuICBwYXJlbnQgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHNjaGVtYSwgdmFsdWUsIG9uQ2hhbmdlLCBwYXJhbXMsIGVycm9yTGlzdCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fcm9vdCA9IHRoaXM7XG4gICAgdGhpcy5rZXlQYXRoID0gW107XG4gICAgdGhpcy5zY2hlbWEgPSBzY2hlbWE7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZTtcbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgICB0aGlzLmVycm9yTGlzdCA9IGVycm9yTGlzdC5maWx0ZXIoZXJyb3IgPT4gZXJyb3IuZmllbGQgPT09ICdkYXRhJyk7XG4gICAgdGhpcy5jb21wbGV0ZUVycm9yTGlzdCA9IGVycm9yTGlzdDtcbiAgfVxufVxuXG5jbGFzcyBWYWx1ZUxlYWYgZXh0ZW5kcyBWYWx1ZSB7XG5cbiAgY29uc3RydWN0b3Iocm9vdCwga2V5UGF0aCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fcm9vdCA9IHJvb3Q7XG4gICAgdGhpcy5rZXlQYXRoID0ga2V5UGF0aDtcbiAgICB0aGlzLnNjaGVtYSA9IHNlbGVjdFNjaGVtYShyb290LnNjaGVtYSwga2V5UGF0aCk7XG4gICAgdGhpcy52YWx1ZSA9IHNlbGVjdFZhbHVlKHJvb3QudmFsdWUsIGtleVBhdGgpO1xuICB9XG5cbiAgZ2V0IHBhcmFtcygpIHtcbiAgICByZXR1cm4gdGhpcy5fcm9vdC5wYXJhbXM7XG4gIH1cblxuICBAbWVtb2l6ZVxuICBnZXQgZXJyb3JMaXN0KCkge1xuICAgIGxldCBlcnJvcktleVBhdGggPSBgZGF0YS4ke3RoaXMua2V5UGF0aC5qb2luKCcuJyl9YDtcbiAgICByZXR1cm4gdGhpcy5fcm9vdC5jb21wbGV0ZUVycm9yTGlzdC5maWx0ZXIoZXJyb3IgPT4gZXJyb3IuZmllbGQgPT09IGVycm9yS2V5UGF0aCk7XG4gIH1cblxuICBAbWVtb2l6ZVxuICBnZXQgY29tcGxldGVFcnJvckxpc3QoKSB7XG4gICAgbGV0IGVycm9yS2V5UGF0aCA9IGBkYXRhLiR7dGhpcy5rZXlQYXRoLmpvaW4oJy4nKX1gO1xuICAgIGxldCBsZW5ndGggPSBlcnJvcktleVBhdGgubGVuZ3RoO1xuICAgIHJldHVybiB0aGlzLl9yb290LmNvbXBsZXRlRXJyb3JMaXN0XG4gICAgICAuZmlsdGVyKGVycm9yID0+IGVycm9yLmZpZWxkLnNsaWNlKDAsIGxlbmd0aCkgPT09IGVycm9yS2V5UGF0aCk7XG4gIH1cblxuICBnZXQgcGFyZW50KCkge1xuICAgIGlmICh0aGlzLmtleVBhdGgubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcm9vdDtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGtleVBhdGggPSB0aGlzLmtleVBhdGguc2xpY2UoKTtcbiAgICAgIGtleVBhdGgucG9wKCk7XG4gICAgICByZXR1cm4gbmV3IFZhbHVlTGVhZihcbiAgICAgICAgdGhpcy5fcm9vdCxcbiAgICAgICAga2V5UGF0aFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxufVxuXG5jb25zdCBOT05fRU5VTUVSQUJMRV9QUk9QID0ge1xuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgd3JpdGFibGU6IHRydWUsXG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZVxufTtcblxuZnVuY3Rpb24gY2FjaGUob2JqLCBrZXksIHZhbHVlKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgey4uLk5PTl9FTlVNRVJBQkxFX1BST1AsIHZhbHVlfSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHNjaGVtYSwgdmFsdWUpIHtcbiAgaWYgKCFzY2hlbWEpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgaWYgKHZhbHVlLl9fc2NoZW1hID09PSBzY2hlbWEgJiYgdmFsdWUuX19lcnJvckxpc3QpIHtcbiAgICByZXR1cm4gdmFsdWUuX19lcnJvckxpc3Q7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHNjaGVtYS5fX3ZhbGlkYXRvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjYWNoZShzY2hlbWEsICdfX3ZhbGlkYXRvcicsIGNyZWF0ZVZhbGlkYXRvcihzY2hlbWEsIHtmb3JtYXRzOiBzY2hlbWEuZm9ybWF0c30pKTtcbiAgICB9XG4gICAgc2NoZW1hLl9fdmFsaWRhdG9yKHZhbHVlKTtcbiAgICBsZXQgZXJyb3JMaXN0ID0gc2NoZW1hLl9fdmFsaWRhdG9yLmVycm9ycyB8fCBbXTtcbiAgICBjYWNoZSh2YWx1ZSwgJ19fc2NoZW1hJywgc2NoZW1hKTtcbiAgICBjYWNoZSh2YWx1ZSwgJ19fZXJyb3JMaXN0JywgZXJyb3JMaXN0KTtcbiAgICByZXR1cm4gZXJyb3JMaXN0O1xuICB9XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdmFsdWUgaXMgYSBmb3JtIHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNWYWx1ZShtYXliZVZhbHVlKSB7XG4gIHJldHVybiBtYXliZVZhbHVlIGluc3RhbmNlb2YgVmFsdWU7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IHJvb3QgdmFsdWUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVZhbHVlKFxuICAgIHNjaGVtYSxcbiAgICB2YWx1ZSA9IHt9LFxuICAgIG9uQ2hhbmdlID0gZW1wdHlGdW5jdGlvbixcbiAgICBwYXJhbXMgPSB7fSxcbiAgICBlcnJvckxpc3QgPSBudWxsKSB7XG4gIGlmIChlcnJvckxpc3QgPT09IG51bGwpIHtcbiAgICBlcnJvckxpc3QgPSB2YWxpZGF0ZShzY2hlbWEsIHZhbHVlKTtcbiAgfVxuICByZXR1cm4gbmV3IFZhbHVlUm9vdChzY2hlbWEsIHZhbHVlLCBvbkNoYW5nZSwgcGFyYW1zLCBlcnJvckxpc3QpO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvVmFsdWUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1snZGVmYXVsdCddID0gbWVtb2l6ZTtcbi8qKlxuICogQGNvcHlyaWdodCAyMDE1LCBBbmRyZXkgUG9wcCA8OG1heWRheUBnbWFpbC5jb20+XG4gKi9cblxudmFyIFNFTlRJTkVMID0ge307XG5cbmZ1bmN0aW9uIG1lbW9pemUodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XG4gIGlmICh0eXBlb2YgZGVzY3JpcHRvci52YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBfbWVtb2l6ZU1ldGhvZCh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBkZXNjcmlwdG9yLmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBfbWVtb2l6ZUdldHRlcih0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignQG1lbW9pemUgZGVjb3JhdG9yIGNhbiBiZSBhcHBsaWVkIHRvIG1ldGhvZHMgb3IgZ2V0dGVycywgZ290ICcgKyBTdHJpbmcoZGVzY3JpcHRvci52YWx1ZSkgKyAnIGluc3RlYWQnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfbWVtb2l6ZUdldHRlcih0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpIHtcbiAgdmFyIG1lbW9pemVkTmFtZSA9ICdfbWVtb2l6ZWRfJyArIG5hbWU7XG4gIHZhciBnZXQgPSBkZXNjcmlwdG9yLmdldDtcbiAgdGFyZ2V0W21lbW9pemVkTmFtZV0gPSBTRU5USU5FTDtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBkZXNjcmlwdG9yLCB7XG4gICAgZ2V0OiAoZnVuY3Rpb24gKF9nZXQpIHtcbiAgICAgIGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIF9nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgZ2V0LnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX2dldC50b1N0cmluZygpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGdldDtcbiAgICB9KShmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpc1ttZW1vaXplZE5hbWVdID09PSBTRU5USU5FTCkge1xuICAgICAgICB0aGlzW21lbW9pemVkTmFtZV0gPSBnZXQuY2FsbCh0aGlzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzW21lbW9pemVkTmFtZV07XG4gICAgfSlcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIF9tZW1vaXplTWV0aG9kKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcikge1xuICBpZiAoZGVzY3JpcHRvci52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdAbWVtb2l6ZSBkZWNvcmF0b3IgY2FuIG9ubHkgYmUgYXBwbGllZCB0byBtZXRob2RzIG9mIHplcm8gYXJndW1lbnRzJyk7XG4gIH1cbiAgdmFyIG1lbW9pemVkTmFtZSA9ICdfbWVtb2l6ZWRfJyArIG5hbWU7XG4gIHZhciB2YWx1ZSA9IGRlc2NyaXB0b3IudmFsdWU7XG4gIHRhcmdldFttZW1vaXplZE5hbWVdID0gU0VOVElORUw7XG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgZGVzY3JpcHRvciwge1xuICAgIHZhbHVlOiAoZnVuY3Rpb24gKF92YWx1ZSkge1xuICAgICAgZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiBfdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgdmFsdWUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9KShmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpc1ttZW1vaXplZE5hbWVdID09PSBTRU5USU5FTCkge1xuICAgICAgICB0aGlzW21lbW9pemVkTmFtZV0gPSB2YWx1ZS5jYWxsKHRoaXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXNbbWVtb2l6ZWROYW1lXTtcbiAgICB9KVxuICB9KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbWVtb2l6ZS1kZWNvcmF0b3IvbGliL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBiYXNlQ2xvbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlQ2xvbmUnKSxcbiAgICBiaW5kQ2FsbGJhY2sgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iaW5kQ2FsbGJhY2snKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVlcCBjbG9uZSBvZiBgdmFsdWVgLiBJZiBgY3VzdG9taXplcmAgaXMgcHJvdmlkZWQgaXQgaXMgaW52b2tlZFxuICogdG8gcHJvZHVjZSB0aGUgY2xvbmVkIHZhbHVlcy4gSWYgYGN1c3RvbWl6ZXJgIHJldHVybnMgYHVuZGVmaW5lZGAgY2xvbmluZ1xuICogaXMgaGFuZGxlZCBieSB0aGUgbWV0aG9kIGluc3RlYWQuIFRoZSBgY3VzdG9taXplcmAgaXMgYm91bmQgdG8gYHRoaXNBcmdgXG4gKiBhbmQgaW52b2tlZCB3aXRoIHR3byBhcmd1bWVudDsgKHZhbHVlIFssIGluZGV4fGtleSwgb2JqZWN0XSkuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb24gdGhlXG4gKiBbc3RydWN0dXJlZCBjbG9uZSBhbGdvcml0aG1dKGh0dHA6Ly93d3cudzMub3JnL1RSL2h0bWw1L2luZnJhc3RydWN0dXJlLmh0bWwjaW50ZXJuYWwtc3RydWN0dXJlZC1jbG9uaW5nLWFsZ29yaXRobSkuXG4gKiBUaGUgZW51bWVyYWJsZSBwcm9wZXJ0aWVzIG9mIGBhcmd1bWVudHNgIG9iamVjdHMgYW5kIG9iamVjdHMgY3JlYXRlZCBieVxuICogY29uc3RydWN0b3JzIG90aGVyIHRoYW4gYE9iamVjdGAgYXJlIGNsb25lZCB0byBwbGFpbiBgT2JqZWN0YCBvYmplY3RzLiBBblxuICogZW1wdHkgb2JqZWN0IGlzIHJldHVybmVkIGZvciB1bmNsb25lYWJsZSB2YWx1ZXMgc3VjaCBhcyBmdW5jdGlvbnMsIERPTSBub2RlcyxcbiAqIE1hcHMsIFNldHMsIGFuZCBXZWFrTWFwcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGRlZXAgY2xvbmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjbG9uaW5nIHZhbHVlcy5cbiAqIEBwYXJhbSB7Kn0gW3RoaXNBcmddIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgY3VzdG9taXplcmAuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZGVlcCBjbG9uZWQgdmFsdWUuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciB1c2VycyA9IFtcbiAqICAgeyAndXNlcic6ICdiYXJuZXknIH0sXG4gKiAgIHsgJ3VzZXInOiAnZnJlZCcgfVxuICogXTtcbiAqXG4gKiB2YXIgZGVlcCA9IF8uY2xvbmVEZWVwKHVzZXJzKTtcbiAqIGRlZXBbMF0gPT09IHVzZXJzWzBdO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiAvLyB1c2luZyBhIGN1c3RvbWl6ZXIgY2FsbGJhY2tcbiAqIHZhciBlbCA9IF8uY2xvbmVEZWVwKGRvY3VtZW50LmJvZHksIGZ1bmN0aW9uKHZhbHVlKSB7XG4gKiAgIGlmIChfLmlzRWxlbWVudCh2YWx1ZSkpIHtcbiAqICAgICByZXR1cm4gdmFsdWUuY2xvbmVOb2RlKHRydWUpO1xuICogICB9XG4gKiB9KTtcbiAqXG4gKiBlbCA9PT0gZG9jdW1lbnQuYm9keVxuICogLy8gPT4gZmFsc2VcbiAqIGVsLm5vZGVOYW1lXG4gKiAvLyA9PiBCT0RZXG4gKiBlbC5jaGlsZE5vZGVzLmxlbmd0aDtcbiAqIC8vID0+IDIwXG4gKi9cbmZ1bmN0aW9uIGNsb25lRGVlcCh2YWx1ZSwgY3VzdG9taXplciwgdGhpc0FyZykge1xuICByZXR1cm4gdHlwZW9mIGN1c3RvbWl6ZXIgPT0gJ2Z1bmN0aW9uJ1xuICAgID8gYmFzZUNsb25lKHZhbHVlLCB0cnVlLCBiaW5kQ2FsbGJhY2soY3VzdG9taXplciwgdGhpc0FyZywgMSkpXG4gICAgOiBiYXNlQ2xvbmUodmFsdWUsIHRydWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lRGVlcDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9sYW5nL2Nsb25lRGVlcC5qc1xuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYXJyYXlDb3B5ID0gcmVxdWlyZSgnLi9hcnJheUNvcHknKSxcbiAgICBhcnJheUVhY2ggPSByZXF1aXJlKCcuL2FycmF5RWFjaCcpLFxuICAgIGJhc2VBc3NpZ24gPSByZXF1aXJlKCcuL2Jhc2VBc3NpZ24nKSxcbiAgICBiYXNlRm9yT3duID0gcmVxdWlyZSgnLi9iYXNlRm9yT3duJyksXG4gICAgaW5pdENsb25lQXJyYXkgPSByZXF1aXJlKCcuL2luaXRDbG9uZUFycmF5JyksXG4gICAgaW5pdENsb25lQnlUYWcgPSByZXF1aXJlKCcuL2luaXRDbG9uZUJ5VGFnJyksXG4gICAgaW5pdENsb25lT2JqZWN0ID0gcmVxdWlyZSgnLi9pbml0Q2xvbmVPYmplY3QnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FycmF5JyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9sYW5nL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgc3VwcG9ydGVkIGJ5IGBfLmNsb25lYC4gKi9cbnZhciBjbG9uZWFibGVUYWdzID0ge307XG5jbG9uZWFibGVUYWdzW2FyZ3NUYWddID0gY2xvbmVhYmxlVGFnc1thcnJheVRhZ10gPVxuY2xvbmVhYmxlVGFnc1thcnJheUJ1ZmZlclRhZ10gPSBjbG9uZWFibGVUYWdzW2Jvb2xUYWddID1cbmNsb25lYWJsZVRhZ3NbZGF0ZVRhZ10gPSBjbG9uZWFibGVUYWdzW2Zsb2F0MzJUYWddID1cbmNsb25lYWJsZVRhZ3NbZmxvYXQ2NFRhZ10gPSBjbG9uZWFibGVUYWdzW2ludDhUYWddID1cbmNsb25lYWJsZVRhZ3NbaW50MTZUYWddID0gY2xvbmVhYmxlVGFnc1tpbnQzMlRhZ10gPVxuY2xvbmVhYmxlVGFnc1tudW1iZXJUYWddID0gY2xvbmVhYmxlVGFnc1tvYmplY3RUYWddID1cbmNsb25lYWJsZVRhZ3NbcmVnZXhwVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc3RyaW5nVGFnXSA9XG5jbG9uZWFibGVUYWdzW3VpbnQ4VGFnXSA9IGNsb25lYWJsZVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9XG5jbG9uZWFibGVUYWdzW3VpbnQxNlRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xuY2xvbmVhYmxlVGFnc1tlcnJvclRhZ10gPSBjbG9uZWFibGVUYWdzW2Z1bmNUYWddID1cbmNsb25lYWJsZVRhZ3NbbWFwVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc2V0VGFnXSA9XG5jbG9uZWFibGVUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgW2B0b1N0cmluZ1RhZ2BdKGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqVG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jbG9uZWAgd2l0aG91dCBzdXBwb3J0IGZvciBhcmd1bWVudCBqdWdnbGluZ1xuICogYW5kIGB0aGlzYCBiaW5kaW5nIGBjdXN0b21pemVyYCBmdW5jdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNsb25pbmcgdmFsdWVzLlxuICogQHBhcmFtIHtzdHJpbmd9IFtrZXldIFRoZSBrZXkgb2YgYHZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IGB2YWx1ZWAgYmVsb25ncyB0by5cbiAqIEBwYXJhbSB7QXJyYXl9IFtzdGFja0E9W11dIFRyYWNrcyB0cmF2ZXJzZWQgc291cmNlIG9iamVjdHMuXG4gKiBAcGFyYW0ge0FycmF5fSBbc3RhY2tCPVtdXSBBc3NvY2lhdGVzIGNsb25lcyB3aXRoIHNvdXJjZSBjb3VudGVycGFydHMuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgY2xvbmVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBiYXNlQ2xvbmUodmFsdWUsIGlzRGVlcCwgY3VzdG9taXplciwga2V5LCBvYmplY3QsIHN0YWNrQSwgc3RhY2tCKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChjdXN0b21pemVyKSB7XG4gICAgcmVzdWx0ID0gb2JqZWN0ID8gY3VzdG9taXplcih2YWx1ZSwga2V5LCBvYmplY3QpIDogY3VzdG9taXplcih2YWx1ZSk7XG4gIH1cbiAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKTtcbiAgaWYgKGlzQXJyKSB7XG4gICAgcmVzdWx0ID0gaW5pdENsb25lQXJyYXkodmFsdWUpO1xuICAgIGlmICghaXNEZWVwKSB7XG4gICAgICByZXR1cm4gYXJyYXlDb3B5KHZhbHVlLCByZXN1bHQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFnID0gb2JqVG9TdHJpbmcuY2FsbCh2YWx1ZSksXG4gICAgICAgIGlzRnVuYyA9IHRhZyA9PSBmdW5jVGFnO1xuXG4gICAgaWYgKHRhZyA9PSBvYmplY3RUYWcgfHwgdGFnID09IGFyZ3NUYWcgfHwgKGlzRnVuYyAmJiAhb2JqZWN0KSkge1xuICAgICAgcmVzdWx0ID0gaW5pdENsb25lT2JqZWN0KGlzRnVuYyA/IHt9IDogdmFsdWUpO1xuICAgICAgaWYgKCFpc0RlZXApIHtcbiAgICAgICAgcmV0dXJuIGJhc2VBc3NpZ24ocmVzdWx0LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjbG9uZWFibGVUYWdzW3RhZ11cbiAgICAgICAgPyBpbml0Q2xvbmVCeVRhZyh2YWx1ZSwgdGFnLCBpc0RlZXApXG4gICAgICAgIDogKG9iamVjdCA/IHZhbHVlIDoge30pO1xuICAgIH1cbiAgfVxuICAvLyBDaGVjayBmb3IgY2lyY3VsYXIgcmVmZXJlbmNlcyBhbmQgcmV0dXJuIGNvcnJlc3BvbmRpbmcgY2xvbmUuXG4gIHN0YWNrQSB8fCAoc3RhY2tBID0gW10pO1xuICBzdGFja0IgfHwgKHN0YWNrQiA9IFtdKTtcblxuICB2YXIgbGVuZ3RoID0gc3RhY2tBLmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKHN0YWNrQVtsZW5ndGhdID09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gc3RhY2tCW2xlbmd0aF07XG4gICAgfVxuICB9XG4gIC8vIEFkZCB0aGUgc291cmNlIHZhbHVlIHRvIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cyBhbmQgYXNzb2NpYXRlIGl0IHdpdGggaXRzIGNsb25lLlxuICBzdGFja0EucHVzaCh2YWx1ZSk7XG4gIHN0YWNrQi5wdXNoKHJlc3VsdCk7XG5cbiAgLy8gUmVjdXJzaXZlbHkgcG9wdWxhdGUgY2xvbmUgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgKGlzQXJyID8gYXJyYXlFYWNoIDogYmFzZUZvck93bikodmFsdWUsIGZ1bmN0aW9uKHN1YlZhbHVlLCBrZXkpIHtcbiAgICByZXN1bHRba2V5XSA9IGJhc2VDbG9uZShzdWJWYWx1ZSwgaXNEZWVwLCBjdXN0b21pemVyLCBrZXksIHZhbHVlLCBzdGFja0EsIHN0YWNrQik7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VDbG9uZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlQ2xvbmUuanNcbiAqKiBtb2R1bGUgaWQgPSAzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3BpZXMgdGhlIHZhbHVlcyBvZiBgc291cmNlYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBzb3VyY2UgVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXk9W11dIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyB0by5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheUNvcHkoc291cmNlLCBhcnJheSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHNvdXJjZS5sZW5ndGg7XG5cbiAgYXJyYXkgfHwgKGFycmF5ID0gQXJyYXkobGVuZ3RoKSk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbaW5kZXhdID0gc291cmNlW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlDb3B5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2FycmF5Q29weS5qc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5mb3JFYWNoYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgY2FsbGJhY2tcbiAqIHNob3J0aGFuZHMgYW5kIGB0aGlzYCBiaW5kaW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheUVhY2goYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSA9PT0gZmFsc2UpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlFYWNoO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2FycmF5RWFjaC5qc1xuICoqIG1vZHVsZSBpZCA9IDM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYmFzZUNvcHkgPSByZXF1aXJlKCcuL2Jhc2VDb3B5JyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4uL29iamVjdC9rZXlzJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uYXNzaWduYCB3aXRob3V0IHN1cHBvcnQgZm9yIGFyZ3VtZW50IGp1Z2dsaW5nLFxuICogbXVsdGlwbGUgc291cmNlcywgYW5kIGBjdXN0b21pemVyYCBmdW5jdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduKG9iamVjdCwgc291cmNlKSB7XG4gIHJldHVybiBzb3VyY2UgPT0gbnVsbFxuICAgID8gb2JqZWN0XG4gICAgOiBiYXNlQ29weShzb3VyY2UsIGtleXMoc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQXNzaWduO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2Jhc2VBc3NpZ24uanNcbiAqKiBtb2R1bGUgaWQgPSA0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3BpZXMgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IG5hbWVzIHRvIGNvcHkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlQ29weShzb3VyY2UsIHByb3BzLCBvYmplY3QpIHtcbiAgb2JqZWN0IHx8IChvYmplY3QgPSB7fSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuICAgIG9iamVjdFtrZXldID0gc291cmNlW2tleV07XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQ29weTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlQ29weS5qc1xuICoqIG1vZHVsZSBpZCA9IDQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvZ2V0TmF0aXZlJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc0FycmF5TGlrZScpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vbGFuZy9pc09iamVjdCcpLFxuICAgIHNoaW1LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvc2hpbUtleXMnKTtcblxuLyogTmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2tleXMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5cyhuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLmtleXMoJ2hpJyk7XG4gKiAvLyA9PiBbJzAnLCAnMSddXG4gKi9cbnZhciBrZXlzID0gIW5hdGl2ZUtleXMgPyBzaGltS2V5cyA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICB2YXIgQ3RvciA9IG9iamVjdCA9PSBudWxsID8gbnVsbCA6IG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgaWYgKCh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlID09PSBvYmplY3QpIHx8XG4gICAgICAodHlwZW9mIG9iamVjdCAhPSAnZnVuY3Rpb24nICYmIGlzQXJyYXlMaWtlKG9iamVjdCkpKSB7XG4gICAgcmV0dXJuIHNoaW1LZXlzKG9iamVjdCk7XG4gIH1cbiAgcmV0dXJuIGlzT2JqZWN0KG9iamVjdCkgPyBuYXRpdmVLZXlzKG9iamVjdCkgOiBbXTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5cztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9vYmplY3Qva2V5cy5qc1xuICoqIG1vZHVsZSBpZCA9IDQyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZ2V0TGVuZ3RoID0gcmVxdWlyZSgnLi9nZXRMZW5ndGgnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgoZ2V0TGVuZ3RoKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2U7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvaXNBcnJheUxpa2UuanNcbiAqKiBtb2R1bGUgaWQgPSA0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGJhc2VQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vYmFzZVByb3BlcnR5Jyk7XG5cbi8qKlxuICogR2V0cyB0aGUgXCJsZW5ndGhcIiBwcm9wZXJ0eSB2YWx1ZSBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGF2b2lkIGEgW0pJVCBidWddKGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNDI3OTIpXG4gKiB0aGF0IGFmZmVjdHMgU2FmYXJpIG9uIGF0IGxlYXN0IGlPUyA4LjEtOC4zIEFSTTY0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgXCJsZW5ndGhcIiB2YWx1ZS5cbiAqL1xudmFyIGdldExlbmd0aCA9IGJhc2VQcm9wZXJ0eSgnbGVuZ3RoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TGVuZ3RoO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2dldExlbmd0aC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnByb3BlcnR5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eShrZXkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQcm9wZXJ0eTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlUHJvcGVydHkuanNcbiAqKiBtb2R1bGUgaWQgPSA0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9sYW5nL2lzQXJyYXknKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9pc0luZGV4JyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnLi4vb2JqZWN0L2tleXNJbicpO1xuXG4vKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBIGZhbGxiYWNrIGltcGxlbWVudGF0aW9uIG9mIGBPYmplY3Qua2V5c2Agd2hpY2ggY3JlYXRlcyBhbiBhcnJheSBvZiB0aGVcbiAqIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBzaGltS2V5cyhvYmplY3QpIHtcbiAgdmFyIHByb3BzID0ga2V5c0luKG9iamVjdCksXG4gICAgICBwcm9wc0xlbmd0aCA9IHByb3BzLmxlbmd0aCxcbiAgICAgIGxlbmd0aCA9IHByb3BzTGVuZ3RoICYmIG9iamVjdC5sZW5ndGg7XG5cbiAgdmFyIGFsbG93SW5kZXhlcyA9ICEhbGVuZ3RoICYmIGlzTGVuZ3RoKGxlbmd0aCkgJiZcbiAgICAoaXNBcnJheShvYmplY3QpIHx8IGlzQXJndW1lbnRzKG9iamVjdCkpO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKCsraW5kZXggPCBwcm9wc0xlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG4gICAgaWYgKChhbGxvd0luZGV4ZXMgJiYgaXNJbmRleChrZXksIGxlbmd0aCkpIHx8IGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNoaW1LZXlzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL3NoaW1LZXlzLmpzXG4gKiogbW9kdWxlIGlkID0gNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzQXJyYXlMaWtlJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgW2B0b1N0cmluZ1RhZ2BdKGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqVG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgY29ycmVjdGx5IGNsYXNzaWZpZWQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0FycmF5TGlrZSh2YWx1ZSkgJiYgb2JqVG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FyZ3VtZW50cztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9sYW5nL2lzQXJndW1lbnRzLmpzXG4gKiogbW9kdWxlIGlkID0gNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eXFxkKyQvO1xuXG4vKipcbiAqIFVzZWQgYXMgdGhlIFttYXhpbXVtIGxlbmd0aF0oaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLW51bWJlci5tYXhfc2FmZV9pbnRlZ2VyKVxuICogb2YgYW4gYXJyYXktbGlrZSB2YWx1ZS5cbiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICB2YWx1ZSA9ICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgfHwgcmVJc1VpbnQudGVzdCh2YWx1ZSkpID8gK3ZhbHVlIDogLTE7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcbiAgcmV0dXJuIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGg7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJbmRleDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9pc0luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FycmF5JyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzSW5kZXgnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzTGVuZ3RoJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9sYW5nL2lzT2JqZWN0Jyk7XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5c0luKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InLCAnYyddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbmZ1bmN0aW9uIGtleXNJbihvYmplY3QpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICB9XG4gIHZhciBsZW5ndGggPSBvYmplY3QubGVuZ3RoO1xuICBsZW5ndGggPSAobGVuZ3RoICYmIGlzTGVuZ3RoKGxlbmd0aCkgJiZcbiAgICAoaXNBcnJheShvYmplY3QpIHx8IGlzQXJndW1lbnRzKG9iamVjdCkpICYmIGxlbmd0aCkgfHwgMDtcblxuICB2YXIgQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcixcbiAgICAgIGluZGV4ID0gLTEsXG4gICAgICBpc1Byb3RvID0gdHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSA9PT0gb2JqZWN0LFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKSxcbiAgICAgIHNraXBJbmRleGVzID0gbGVuZ3RoID4gMDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSAoaW5kZXggKyAnJyk7XG4gIH1cbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmICghKHNraXBJbmRleGVzICYmIGlzSW5kZXgoa2V5LCBsZW5ndGgpKSAmJlxuICAgICAgICAhKGtleSA9PSAnY29uc3RydWN0b3InICYmIChpc1Byb3RvIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXNJbjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9vYmplY3Qva2V5c0luLmpzXG4gKiogbW9kdWxlIGlkID0gNDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBiYXNlRm9yID0gcmVxdWlyZSgnLi9iYXNlRm9yJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4uL29iamVjdC9rZXlzJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZm9yT3duYCB3aXRob3V0IHN1cHBvcnQgZm9yIGNhbGxiYWNrXG4gKiBzaG9ydGhhbmRzIGFuZCBgdGhpc2AgYmluZGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlRm9yT3duKG9iamVjdCwgaXRlcmF0ZWUpIHtcbiAgcmV0dXJuIGJhc2VGb3Iob2JqZWN0LCBpdGVyYXRlZSwga2V5cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZvck93bjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlRm9yT3duLmpzXG4gKiogbW9kdWxlIGlkID0gNTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBjcmVhdGVCYXNlRm9yID0gcmVxdWlyZSgnLi9jcmVhdGVCYXNlRm9yJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGJhc2VGb3JJbmAgYW5kIGBiYXNlRm9yT3duYCB3aGljaCBpdGVyYXRlc1xuICogb3ZlciBgb2JqZWN0YCBwcm9wZXJ0aWVzIHJldHVybmVkIGJ5IGBrZXlzRnVuY2AgaW52b2tpbmcgYGl0ZXJhdGVlYCBmb3JcbiAqIGVhY2ggcHJvcGVydHkuIEl0ZXJhdGVlIGZ1bmN0aW9ucyBtYXkgZXhpdCBpdGVyYXRpb24gZWFybHkgYnkgZXhwbGljaXRseVxuICogcmV0dXJuaW5nIGBmYWxzZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbnZhciBiYXNlRm9yID0gY3JlYXRlQmFzZUZvcigpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGb3I7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUZvci5qc1xuICoqIG1vZHVsZSBpZCA9IDUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL3RvT2JqZWN0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGJhc2UgZnVuY3Rpb24gZm9yIGBfLmZvckluYCBvciBgXy5mb3JJblJpZ2h0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBiYXNlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVCYXNlRm9yKGZyb21SaWdodCkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0LCBpdGVyYXRlZSwga2V5c0Z1bmMpIHtcbiAgICB2YXIgaXRlcmFibGUgPSB0b09iamVjdChvYmplY3QpLFxuICAgICAgICBwcm9wcyA9IGtleXNGdW5jKG9iamVjdCksXG4gICAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aCxcbiAgICAgICAgaW5kZXggPSBmcm9tUmlnaHQgPyBsZW5ndGggOiAtMTtcblxuICAgIHdoaWxlICgoZnJvbVJpZ2h0ID8gaW5kZXgtLSA6ICsraW5kZXggPCBsZW5ndGgpKSB7XG4gICAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuICAgICAgaWYgKGl0ZXJhdGVlKGl0ZXJhYmxlW2tleV0sIGtleSwgaXRlcmFibGUpID09PSBmYWxzZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVCYXNlRm9yO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2NyZWF0ZUJhc2VGb3IuanNcbiAqKiBtb2R1bGUgaWQgPSA1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vbGFuZy9pc09iamVjdCcpO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYW4gb2JqZWN0IGlmIGl0J3Mgbm90IG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gdG9PYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbHVlKSA/IHZhbHVlIDogT2JqZWN0KHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b09iamVjdDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC90b09iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBhcnJheSBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lQXJyYXkoYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IG5ldyBhcnJheS5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIC8vIEFkZCBhcnJheSBwcm9wZXJ0aWVzIGFzc2lnbmVkIGJ5IGBSZWdFeHAjZXhlY2AuXG4gIGlmIChsZW5ndGggJiYgdHlwZW9mIGFycmF5WzBdID09ICdzdHJpbmcnICYmIGhhc093blByb3BlcnR5LmNhbGwoYXJyYXksICdpbmRleCcpKSB7XG4gICAgcmVzdWx0LmluZGV4ID0gYXJyYXkuaW5kZXg7XG4gICAgcmVzdWx0LmlucHV0ID0gYXJyYXkuaW5wdXQ7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0Q2xvbmVBcnJheTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9pbml0Q2xvbmVBcnJheS5qc1xuICoqIG1vZHVsZSBpZCA9IDU0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYnVmZmVyQ2xvbmUgPSByZXF1aXJlKCcuL2J1ZmZlckNsb25lJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgIGZsYWdzIGZyb20gdGhlaXIgY29lcmNlZCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlRmxhZ3MgPSAvXFx3KiQvO1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZSBiYXNlZCBvbiBpdHMgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNsb25pbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBOdW1iZXJgLCBgUmVnRXhwYCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lQnlUYWcob2JqZWN0LCB0YWcsIGlzRGVlcCkge1xuICB2YXIgQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlIGFycmF5QnVmZmVyVGFnOlxuICAgICAgcmV0dXJuIGJ1ZmZlckNsb25lKG9iamVjdCk7XG5cbiAgICBjYXNlIGJvb2xUYWc6XG4gICAgY2FzZSBkYXRlVGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yKCtvYmplY3QpO1xuXG4gICAgY2FzZSBmbG9hdDMyVGFnOiBjYXNlIGZsb2F0NjRUYWc6XG4gICAgY2FzZSBpbnQ4VGFnOiBjYXNlIGludDE2VGFnOiBjYXNlIGludDMyVGFnOlxuICAgIGNhc2UgdWludDhUYWc6IGNhc2UgdWludDhDbGFtcGVkVGFnOiBjYXNlIHVpbnQxNlRhZzogY2FzZSB1aW50MzJUYWc6XG4gICAgICB2YXIgYnVmZmVyID0gb2JqZWN0LmJ1ZmZlcjtcbiAgICAgIHJldHVybiBuZXcgQ3Rvcihpc0RlZXAgPyBidWZmZXJDbG9uZShidWZmZXIpIDogYnVmZmVyLCBvYmplY3QuYnl0ZU9mZnNldCwgb2JqZWN0Lmxlbmd0aCk7XG5cbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICBjYXNlIHN0cmluZ1RhZzpcbiAgICAgIHJldHVybiBuZXcgQ3RvcihvYmplY3QpO1xuXG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgICB2YXIgcmVzdWx0ID0gbmV3IEN0b3Iob2JqZWN0LnNvdXJjZSwgcmVGbGFncy5leGVjKG9iamVjdCkpO1xuICAgICAgcmVzdWx0Lmxhc3RJbmRleCA9IG9iamVjdC5sYXN0SW5kZXg7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0Q2xvbmVCeVRhZztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9pbml0Q2xvbmVCeVRhZy5qc1xuICoqIG1vZHVsZSBpZCA9IDU1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgY29uc3RhbnQgPSByZXF1aXJlKCcuLi91dGlsaXR5L2NvbnN0YW50JyksXG4gICAgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9nZXROYXRpdmUnKTtcblxuLyoqIE5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBBcnJheUJ1ZmZlciA9IGdldE5hdGl2ZShnbG9iYWwsICdBcnJheUJ1ZmZlcicpLFxuICAgIGJ1ZmZlclNsaWNlID0gZ2V0TmF0aXZlKEFycmF5QnVmZmVyICYmIG5ldyBBcnJheUJ1ZmZlcigwKSwgJ3NsaWNlJyksXG4gICAgZmxvb3IgPSBNYXRoLmZsb29yLFxuICAgIFVpbnQ4QXJyYXkgPSBnZXROYXRpdmUoZ2xvYmFsLCAnVWludDhBcnJheScpO1xuXG4vKiogVXNlZCB0byBjbG9uZSBhcnJheSBidWZmZXJzLiAqL1xudmFyIEZsb2F0NjRBcnJheSA9IChmdW5jdGlvbigpIHtcbiAgLy8gU2FmYXJpIDUgZXJyb3JzIHdoZW4gdXNpbmcgYW4gYXJyYXkgYnVmZmVyIHRvIGluaXRpYWxpemUgYSB0eXBlZCBhcnJheVxuICAvLyB3aGVyZSB0aGUgYXJyYXkgYnVmZmVyJ3MgYGJ5dGVMZW5ndGhgIGlzIG5vdCBhIG11bHRpcGxlIG9mIHRoZSB0eXBlZFxuICAvLyBhcnJheSdzIGBCWVRFU19QRVJfRUxFTUVOVGAuXG4gIHRyeSB7XG4gICAgdmFyIGZ1bmMgPSBnZXROYXRpdmUoZ2xvYmFsLCAnRmxvYXQ2NEFycmF5JyksXG4gICAgICAgIHJlc3VsdCA9IG5ldyBmdW5jKG5ldyBBcnJheUJ1ZmZlcigxMCksIDAsIDEpICYmIGZ1bmM7XG4gIH0gY2F0Y2goZSkge31cbiAgcmV0dXJuIHJlc3VsdCB8fCBudWxsO1xufSgpKTtcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUsIGluIGJ5dGVzLCBvZiBlYWNoIGBGbG9hdDY0QXJyYXlgIGVsZW1lbnQuICovXG52YXIgRkxPQVQ2NF9CWVRFU19QRVJfRUxFTUVOVCA9IEZsb2F0NjRBcnJheSA/IEZsb2F0NjRBcnJheS5CWVRFU19QRVJfRUxFTUVOVCA6IDA7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIHRoZSBnaXZlbiBhcnJheSBidWZmZXIuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGJ1ZmZlciBUaGUgYXJyYXkgYnVmZmVyIHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYXJyYXkgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBidWZmZXJDbG9uZShidWZmZXIpIHtcbiAgcmV0dXJuIGJ1ZmZlclNsaWNlLmNhbGwoYnVmZmVyLCAwKTtcbn1cbmlmICghYnVmZmVyU2xpY2UpIHtcbiAgLy8gUGhhbnRvbUpTIGhhcyBgQXJyYXlCdWZmZXJgIGFuZCBgVWludDhBcnJheWAgYnV0IG5vdCBgRmxvYXQ2NEFycmF5YC5cbiAgYnVmZmVyQ2xvbmUgPSAhKEFycmF5QnVmZmVyICYmIFVpbnQ4QXJyYXkpID8gY29uc3RhbnQobnVsbCkgOiBmdW5jdGlvbihidWZmZXIpIHtcbiAgICB2YXIgYnl0ZUxlbmd0aCA9IGJ1ZmZlci5ieXRlTGVuZ3RoLFxuICAgICAgICBmbG9hdExlbmd0aCA9IEZsb2F0NjRBcnJheSA/IGZsb29yKGJ5dGVMZW5ndGggLyBGTE9BVDY0X0JZVEVTX1BFUl9FTEVNRU5UKSA6IDAsXG4gICAgICAgIG9mZnNldCA9IGZsb2F0TGVuZ3RoICogRkxPQVQ2NF9CWVRFU19QRVJfRUxFTUVOVCxcbiAgICAgICAgcmVzdWx0ID0gbmV3IEFycmF5QnVmZmVyKGJ5dGVMZW5ndGgpO1xuXG4gICAgaWYgKGZsb2F0TGVuZ3RoKSB7XG4gICAgICB2YXIgdmlldyA9IG5ldyBGbG9hdDY0QXJyYXkocmVzdWx0LCAwLCBmbG9hdExlbmd0aCk7XG4gICAgICB2aWV3LnNldChuZXcgRmxvYXQ2NEFycmF5KGJ1ZmZlciwgMCwgZmxvYXRMZW5ndGgpKTtcbiAgICB9XG4gICAgaWYgKGJ5dGVMZW5ndGggIT0gb2Zmc2V0KSB7XG4gICAgICB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkocmVzdWx0LCBvZmZzZXQpO1xuICAgICAgdmlldy5zZXQobmV3IFVpbnQ4QXJyYXkoYnVmZmVyLCBvZmZzZXQpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBidWZmZXJDbG9uZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9idWZmZXJDbG9uZS5qc1xuICoqIG1vZHVsZSBpZCA9IDU2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYHZhbHVlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxpdHlcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHJldHVybiBmcm9tIHRoZSBuZXcgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ3VzZXInOiAnZnJlZCcgfTtcbiAqIHZhciBnZXR0ZXIgPSBfLmNvbnN0YW50KG9iamVjdCk7XG4gKlxuICogZ2V0dGVyKCkgPT09IG9iamVjdDtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gY29uc3RhbnQodmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb25zdGFudDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC91dGlsaXR5L2NvbnN0YW50LmpzXG4gKiogbW9kdWxlIGlkID0gNTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gb2JqZWN0IGNsb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lT2JqZWN0KG9iamVjdCkge1xuICB2YXIgQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgaWYgKCEodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yIGluc3RhbmNlb2YgQ3RvcikpIHtcbiAgICBDdG9yID0gT2JqZWN0O1xuICB9XG4gIHJldHVybiBuZXcgQ3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0Q2xvbmVPYmplY3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvaW5pdENsb25lT2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gNThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpZGVudGl0eSA9IHJlcXVpcmUoJy4uL3V0aWxpdHkvaWRlbnRpdHknKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VDYWxsYmFja2Agd2hpY2ggb25seSBzdXBwb3J0cyBgdGhpc2AgYmluZGluZ1xuICogYW5kIHNwZWNpZnlpbmcgdGhlIG51bWJlciBvZiBhcmd1bWVudHMgdG8gcHJvdmlkZSB0byBgZnVuY2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGJpbmQuXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbYXJnQ291bnRdIFRoZSBudW1iZXIgb2YgYXJndW1lbnRzIHRvIHByb3ZpZGUgdG8gYGZ1bmNgLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBjYWxsYmFjay5cbiAqL1xuZnVuY3Rpb24gYmluZENhbGxiYWNrKGZ1bmMsIHRoaXNBcmcsIGFyZ0NvdW50KSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGlkZW50aXR5O1xuICB9XG4gIGlmICh0aGlzQXJnID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZnVuYztcbiAgfVxuICBzd2l0Y2ggKGFyZ0NvdW50KSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgdmFsdWUpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24odmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbik7XG4gICAgfTtcbiAgICBjYXNlIDQ6IHJldHVybiBmdW5jdGlvbihhY2N1bXVsYXRvciwgdmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFjY3VtdWxhdG9yLCB2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pO1xuICAgIH07XG4gICAgY2FzZSA1OiByZXR1cm4gZnVuY3Rpb24odmFsdWUsIG90aGVyLCBrZXksIG9iamVjdCwgc291cmNlKSB7XG4gICAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIHZhbHVlLCBvdGhlciwga2V5LCBvYmplY3QsIHNvdXJjZSk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpc0FyZywgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiaW5kQ2FsbGJhY2s7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYmluZENhbGxiYWNrLmpzXG4gKiogbW9kdWxlIGlkID0gNTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgZmlyc3QgYXJndW1lbnQgcHJvdmlkZWQgdG8gaXQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsaXR5XG4gKiBAcGFyYW0geyp9IHZhbHVlIEFueSB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIGB2YWx1ZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICd1c2VyJzogJ2ZyZWQnIH07XG4gKlxuICogXy5pZGVudGl0eShvYmplY3QpID09PSBvYmplY3Q7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpZGVudGl0eTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC91dGlsaXR5L2lkZW50aXR5LmpzXG4gKiogbW9kdWxlIGlkID0gNjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBiYXNlR2V0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYmFzZUdldCcpLFxuICAgIHRvUGF0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3RvUGF0aCcpO1xuXG4vKipcbiAqIEdldHMgdGhlIHByb3BlcnR5IHZhbHVlIGF0IGBwYXRoYCBvZiBgb2JqZWN0YC4gSWYgdGhlIHJlc29sdmVkIHZhbHVlIGlzXG4gKiBgdW5kZWZpbmVkYCB0aGUgYGRlZmF1bHRWYWx1ZWAgaXMgdXNlZCBpbiBpdHMgcGxhY2UuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IFtkZWZhdWx0VmFsdWVdIFRoZSB2YWx1ZSByZXR1cm5lZCBpZiB0aGUgcmVzb2x2ZWQgdmFsdWUgaXMgYHVuZGVmaW5lZGAuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogW3sgJ2InOiB7ICdjJzogMyB9IH1dIH07XG4gKlxuICogXy5nZXQob2JqZWN0LCAnYVswXS5iLmMnKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLmdldChvYmplY3QsIFsnYScsICcwJywgJ2InLCAnYyddKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLmdldChvYmplY3QsICdhLmIuYycsICdkZWZhdWx0Jyk7XG4gKiAvLyA9PiAnZGVmYXVsdCdcbiAqL1xuZnVuY3Rpb24gZ2V0KG9iamVjdCwgcGF0aCwgZGVmYXVsdFZhbHVlKSB7XG4gIHZhciByZXN1bHQgPSBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IGJhc2VHZXQob2JqZWN0LCB0b1BhdGgocGF0aCksIHBhdGggKyAnJyk7XG4gIHJldHVybiByZXN1bHQgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRWYWx1ZSA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvb2JqZWN0L2dldC5qc1xuICoqIG1vZHVsZSBpZCA9IDYxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL3RvT2JqZWN0Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldGAgd2l0aG91dCBzdXBwb3J0IGZvciBzdHJpbmcgcGF0aHNcbiAqIGFuZCBkZWZhdWx0IHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheX0gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHtzdHJpbmd9IFtwYXRoS2V5XSBUaGUga2V5IHJlcHJlc2VudGF0aW9uIG9mIHBhdGguXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXQob2JqZWN0LCBwYXRoLCBwYXRoS2V5KSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAocGF0aEtleSAhPT0gdW5kZWZpbmVkICYmIHBhdGhLZXkgaW4gdG9PYmplY3Qob2JqZWN0KSkge1xuICAgIHBhdGggPSBbcGF0aEtleV07XG4gIH1cbiAgdmFyIGluZGV4ID0gMCxcbiAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuXG4gIHdoaWxlIChvYmplY3QgIT0gbnVsbCAmJiBpbmRleCA8IGxlbmd0aCkge1xuICAgIG9iamVjdCA9IG9iamVjdFtwYXRoW2luZGV4KytdXTtcbiAgfVxuICByZXR1cm4gKGluZGV4ICYmIGluZGV4ID09IGxlbmd0aCkgPyBvYmplY3QgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlR2V0LmpzXG4gKiogbW9kdWxlIGlkID0gNjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBiYXNlVG9TdHJpbmcgPSByZXF1aXJlKCcuL2Jhc2VUb1N0cmluZycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9sYW5nL2lzQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlUHJvcE5hbWUgPSAvW14uW1xcXV0rfFxcWyg/OigtP1xcZCsoPzpcXC5cXGQrKT8pfChbXCInXSkoKD86KD8hXFwyKVteXFxuXFxcXF18XFxcXC4pKj8pXFwyKVxcXS9nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBiYWNrc2xhc2hlcyBpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUVzY2FwZUNoYXIgPSAvXFxcXChcXFxcKT8vZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIHByb3BlcnR5IHBhdGggYXJyYXkgaWYgaXQncyBub3Qgb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICovXG5mdW5jdGlvbiB0b1BhdGgodmFsdWUpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgYmFzZVRvU3RyaW5nKHZhbHVlKS5yZXBsYWNlKHJlUHJvcE5hbWUsIGZ1bmN0aW9uKG1hdGNoLCBudW1iZXIsIHF1b3RlLCBzdHJpbmcpIHtcbiAgICByZXN1bHQucHVzaChxdW90ZSA/IHN0cmluZy5yZXBsYWNlKHJlRXNjYXBlQ2hhciwgJyQxJykgOiAobnVtYmVyIHx8IG1hdGNoKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvUGF0aDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC90b1BhdGguanNcbiAqKiBtb2R1bGUgaWQgPSA2M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc0luZGV4JyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc0tleScpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vbGFuZy9pc09iamVjdCcpLFxuICAgIHRvUGF0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3RvUGF0aCcpO1xuXG4vKipcbiAqIFNldHMgdGhlIHByb3BlcnR5IHZhbHVlIG9mIGBwYXRoYCBvbiBgb2JqZWN0YC4gSWYgYSBwb3J0aW9uIG9mIGBwYXRoYFxuICogZG9lcyBub3QgZXhpc3QgaXQgaXMgY3JlYXRlZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGF1Z21lbnQuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiBbeyAnYic6IHsgJ2MnOiAzIH0gfV0gfTtcbiAqXG4gKiBfLnNldChvYmplY3QsICdhWzBdLmIuYycsIDQpO1xuICogY29uc29sZS5sb2cob2JqZWN0LmFbMF0uYi5jKTtcbiAqIC8vID0+IDRcbiAqXG4gKiBfLnNldChvYmplY3QsICd4WzBdLnkueicsIDUpO1xuICogY29uc29sZS5sb2cob2JqZWN0LnhbMF0ueS56KTtcbiAqIC8vID0+IDVcbiAqL1xuZnVuY3Rpb24gc2V0KG9iamVjdCwgcGF0aCwgdmFsdWUpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuICB2YXIgcGF0aEtleSA9IChwYXRoICsgJycpO1xuICBwYXRoID0gKG9iamVjdFtwYXRoS2V5XSAhPSBudWxsIHx8IGlzS2V5KHBhdGgsIG9iamVjdCkpID8gW3BhdGhLZXldIDogdG9QYXRoKHBhdGgpO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGgsXG4gICAgICBsYXN0SW5kZXggPSBsZW5ndGggLSAxLFxuICAgICAgbmVzdGVkID0gb2JqZWN0O1xuXG4gIHdoaWxlIChuZXN0ZWQgIT0gbnVsbCAmJiArK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHBhdGhbaW5kZXhdO1xuICAgIGlmIChpc09iamVjdChuZXN0ZWQpKSB7XG4gICAgICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgICAgIG5lc3RlZFtrZXldID0gdmFsdWU7XG4gICAgICB9IGVsc2UgaWYgKG5lc3RlZFtrZXldID09IG51bGwpIHtcbiAgICAgICAgbmVzdGVkW2tleV0gPSBpc0luZGV4KHBhdGhbaW5kZXggKyAxXSkgPyBbXSA6IHt9O1xuICAgICAgfVxuICAgIH1cbiAgICBuZXN0ZWQgPSBuZXN0ZWRba2V5XTtcbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9vYmplY3Qvc2V0LmpzXG4gKiogbW9kdWxlIGlkID0gNjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FycmF5JyksXG4gICAgdG9PYmplY3QgPSByZXF1aXJlKCcuL3RvT2JqZWN0Jyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUlzRGVlcFByb3AgPSAvXFwufFxcWyg/OlteW1xcXV0qfChbXCInXSkoPzooPyFcXDEpW15cXG5cXFxcXXxcXFxcLikqP1xcMSlcXF0vLFxuICAgIHJlSXNQbGFpblByb3AgPSAvXlxcdyokLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUgYW5kIG5vdCBhIHByb3BlcnR5IHBhdGguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkga2V5cyBvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleSh2YWx1ZSwgb2JqZWN0KSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBpZiAoKHR5cGUgPT0gJ3N0cmluZycgJiYgcmVJc1BsYWluUHJvcC50ZXN0KHZhbHVlKSkgfHwgdHlwZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gIXJlSXNEZWVwUHJvcC50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIHJlc3VsdCB8fCAob2JqZWN0ICE9IG51bGwgJiYgdmFsdWUgaW4gdG9PYmplY3Qob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNLZXk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvaXNLZXkuanNcbiAqKiBtb2R1bGUgaWQgPSA2NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBAY29weXJpZ2h0IDIwMTUsIFByb21ldGhldXMgUmVzZWFyY2gsIExMQ1xuICovXG5cbmltcG9ydCBSZWFjdCAgICAgICAgIGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb3JtQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2l0aEZvcm1WYWx1ZShDb21wb25lbnQpIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgRm9ybUNvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSBgV2l0aEZvcm1WYWx1ZSgke0NvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZX0pYDtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxDb21wb25lbnRcbiAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICBmb3JtVmFsdWU9e3RoaXMuZm9ybVZhbHVlfVxuICAgICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cbiAgfTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL1dpdGhGb3JtVmFsdWUuanNcbiAqKi8iLCIvKipcbiAqIEBjb3B5cmlnaHQgMjAxNSwgUHJvbWV0aGV1cyBSZXNlYXJjaCwgTExDXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaXNBcnJheSAgICAgICAgICAgIGZyb20gJ2xvZGFzaC9sYW5nL2lzQXJyYXknO1xuaW1wb3J0IGlzU3RyaW5nICAgICAgICAgICBmcm9tICdsb2Rhc2gvbGFuZy9pc1N0cmluZyc7XG5pbXBvcnQgbWFwRWxlbWVudCAgICAgICAgIGZyb20gJy4vbWFwRWxlbWVudCc7XG5pbXBvcnQgQ29tcG9uZW50ICAgICAgICAgIGZyb20gJy4vQ29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVnYWN5RmllbGRzZXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLi4uQ29tcG9uZW50LnByb3BUeXBlcyxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgY29tcG9uZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb21wb25lbnQ6ICdkaXYnXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y2hpbGRyZW4sIGNvbXBvbmVudDogQ29tcG9uZW50LCAuLi5wcm9wc30gPSB0aGlzLnByb3BzO1xuICAgIGNoaWxkcmVuID0gbWFwRWxlbWVudChjaGlsZHJlbiwgdGhpcy5fcHJvcGFnYXRlRm9ybVZhbHVlKTtcbiAgICByZXR1cm4gPENvbXBvbmVudD57Y2hpbGRyZW59PC9Db21wb25lbnQ+O1xuICB9XG5cbiAgX3Byb3BhZ2F0ZUZvcm1WYWx1ZSA9IChlbGVtZW50KSA9PiB7XG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5wcm9wcyAmJiBlbGVtZW50LnByb3BzLnNlbGVjdEZvcm1WYWx1ZSAmJiAhZWxlbWVudC5wcm9wcy5mb3JtVmFsdWUpIHtcbiAgICAgIGxldCBmb3JtVmFsdWUgPSB0aGlzLnByb3BzLmZvcm1WYWx1ZTtcbiAgICAgIGxldCBzZWxlY3RGb3JtVmFsdWUgPSBlbGVtZW50LnByb3BzLnNlbGVjdEZvcm1WYWx1ZTtcbiAgICAgIGlmIChpc1N0cmluZyhzZWxlY3RGb3JtVmFsdWUpIHx8IGlzQXJyYXkoc2VsZWN0Rm9ybVZhbHVlKSkge1xuICAgICAgICBmb3JtVmFsdWUgPSBmb3JtVmFsdWUuc2VsZWN0KHNlbGVjdEZvcm1WYWx1ZSk7XG4gICAgICB9XG4gICAgICBlbGVtZW50ID0gUmVhY3QuY2xvbmVFbGVtZW50KGVsZW1lbnQsIHtmb3JtVmFsdWV9KTtcbiAgICAgIHJldHVybiBbZmFsc2UsIGVsZW1lbnRdO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvTGVnYWN5RmllbGRzZXQuanNcbiAqKi8iLCIvKipcbiAqIEBjb3B5cmlnaHQgMjAxNSwgUHJvbWV0aGV1cyBSZXNlYXJjaCwgTExDXG4gKi9cblxuaW1wb3J0IFJlYWN0ICAgIGZyb20gJ3JlYWN0JztcbmltcG9ydCBpc0FycmF5ICBmcm9tICdsb2Rhc2gvbGFuZy9pc0FycmF5JztcblxuZnVuY3Rpb24gbWFwRWxlbWVudChlbGVtZW50LCBmdW5jKSB7XG4gIHJldHVybiBSZWFjdC5DaGlsZHJlbi5tYXAoZWxlbWVudCwgZnVuY3Rpb24oZWwpIHtcbiAgICBsZXQgcmVjdXJzZSA9IHRydWU7XG4gICAgZWwgPSBmdW5jKGVsKTtcbiAgICBpZiAoaXNBcnJheShlbCkpIHtcbiAgICAgIHJlY3Vyc2UgPSBlbFswXTtcbiAgICAgIGVsID0gZWxbMV07XG4gICAgfVxuICAgIGlmIChyZWN1cnNlICYmIGVsICYmIGVsLnByb3BzICYmIGVsLnByb3BzLmNoaWxkcmVuKSB7XG4gICAgICBlbCA9IFJlYWN0LmNsb25lRWxlbWVudChlbCwge1xuICAgICAgICBjaGlsZHJlbjogUmVhY3QuQ2hpbGRyZW4ubWFwKFxuICAgICAgICAgIGVsLnByb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgICAgICByZXR1cm4gbWFwRWxlbWVudChjaGlsZCwgZnVuYyk7XG4gICAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZWw7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcEVsZW1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tYXBFbGVtZW50LmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==