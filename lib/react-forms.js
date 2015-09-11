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
	
	var _Fieldset2 = __webpack_require__(1);
	
	var _Fieldset3 = _interopRequireDefault(_Fieldset2);
	
	exports.Fieldset = _Fieldset3['default'];
	
	var _Field2 = __webpack_require__(15);
	
	var _Field3 = _interopRequireDefault(_Field2);
	
	exports.Field = _Field3['default'];
	
	var _Value2 = __webpack_require__(23);
	
	var _Value3 = _interopRequireDefault(_Value2);
	
	exports.Value = _Value3['default'];
	
	var _WithFormValue2 = __webpack_require__(67);
	
	var _WithFormValue3 = _interopRequireDefault(_WithFormValue2);
	
	exports.WithFormValue = _WithFormValue3['default'];
	
	var _Schema2 = __webpack_require__(56);
	
	var _Schema = _interopRequireWildcard(_Schema2);
	
	exports.Schema = _Schema;
	
	var _Input2 = __webpack_require__(17);
	
	var _Input3 = _interopRequireDefault(_Input2);
	
	exports.Input = _Input3['default'];
	
	var _ErrorList2 = __webpack_require__(21);
	
	var _ErrorList3 = _interopRequireDefault(_ErrorList2);
	
	exports.ErrorList = _ErrorList3['default'];
	
	var _LegacyFieldset2 = __webpack_require__(68);
	
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
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Component2 = __webpack_require__(3);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var Fieldset = (function (_Component) {
	  _inherits(Fieldset, _Component);
	
	  function Fieldset() {
	    _classCallCheck(this, Fieldset);
	
	    _get(Object.getPrototypeOf(Fieldset.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Fieldset, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var Self = _props.Self;
	
	      var props = _objectWithoutProperties(_props, ['Self']);
	
	      return _react2['default'].createElement(Self, props);
	    }
	  }], [{
	    key: 'propTypes',
	    value: _extends({}, _Component3['default'].propTypes, {
	      children: _react.PropTypes.node,
	      Self: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func])
	    }),
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      Self: 'div'
	    },
	    enumerable: true
	  }]);
	
	  return Fieldset;
	})(_Component3['default']);
	
	exports['default'] = Fieldset;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 3 */
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
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _invariant = __webpack_require__(4);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _keyPath = __webpack_require__(6);
	
	var _keyPath2 = _interopRequireDefault(_keyPath);
	
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
	  _inherits(Component, _React$Component);
	
	  function Component() {
	    _classCallCheck(this, Component);
	
	    _get(Object.getPrototypeOf(Component.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Component, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return { formValue: this.formValue };
	    }
	  }, {
	    key: 'formValue',
	    get: function get() {
	      var formValue = this.props.formValue || this.context.formValue;
	
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
	    key: 'propTypes',
	    value: {
	      /**
	       * Form value passed as a prop.
	       */
	      formValue: _react.PropTypes.object,
	
	      /**
	       * Selector for form value.
	       *
	       * Used to select a part from a form value passed via context.
	       */
	      select: selectPropType,
	
	      /**
	       * Same as `select`.
	       *
	       * Deprecated.
	       */
	      selectFormValue: selectPropType
	    },
	    enumerable: true
	  }, {
	    key: 'contextTypes',
	    value: ContextTypes,
	    enumerable: true
	  }, {
	    key: 'childContextTypes',
	    value: ContextTypes,
	    enumerable: true
	  }]);
	
	  return Component;
	})(_react2['default'].Component);
	
	exports['default'] = Component;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        'Invariant Violation: ' +
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 5 */
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
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
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
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 6 */
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
	
	var _lodashLangIsString = __webpack_require__(7);
	
	var _lodashLangIsString2 = _interopRequireDefault(_lodashLangIsString);
	
	var _lodashLangIsArray = __webpack_require__(9);
	
	var _lodashLangIsArray2 = _interopRequireDefault(_lodashLangIsArray);
	
	var _invariant = __webpack_require__(4);
	
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
	    (0, _invariant2['default'])(false, 'keyPath can be either an array, a string or a number, got: %s', value);
	  }
	}
	
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(8);
	
	/** `Object#toString` result references. */
	var stringTag = '[object String]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
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
/* 8 */
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(10),
	    isLength = __webpack_require__(14),
	    isObjectLike = __webpack_require__(8);
	
	/** `Object#toString` result references. */
	var arrayTag = '[object Array]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(11);
	
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(12),
	    isObjectLike = __webpack_require__(8);
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
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
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = isNative;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 which returns 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 13 */
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
/* 14 */
/***/ function(module, exports) {

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @copyright 2015, Prometheus Research, LLC
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _autobindDecorator = __webpack_require__(16);
	
	var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Input = __webpack_require__(17);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _ErrorList = __webpack_require__(21);
	
	var _ErrorList2 = _interopRequireDefault(_ErrorList);
	
	var _Component2 = __webpack_require__(3);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	function Label(_ref) {
	  var label = _ref.label;
	
	  return label && _react2['default'].createElement(
	    'label',
	    null,
	    label
	  );
	}
	
	var Field = (function (_Component) {
	  _inherits(Field, _Component);
	
	  _createClass(Field, null, [{
	    key: 'propTypes',
	    value: _extends({}, _Component3['default'].propTypes, {
	      label: _react.PropTypes.string,
	      children: _react.PropTypes.element,
	      Self: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
	      Label: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
	      ErrorList: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func])
	    }),
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      children: _react2['default'].createElement(_Input2['default'], { type: 'text' }),
	      Label: Label,
	      ErrorList: _ErrorList2['default'],
	      Self: 'div'
	    },
	    enumerable: true
	  }]);
	
	  function Field(props) {
	    _classCallCheck(this, Field);
	
	    _get(Object.getPrototypeOf(Field.prototype), 'constructor', this).call(this, props);
	    this.state = { dirty: false };
	  }
	
	  _createDecoratedClass(Field, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var Self = _props.Self;
	      var ErrorList = _props.ErrorList;
	      var Label = _props.Label;
	      var children = _props.children;
	      var dirty = this.state.dirty;
	      var _formValue = this.formValue;
	      var schema = _formValue.schema;
	      var value = _formValue.value;
	      var params = _formValue.params;
	
	      var showErrors = dirty || params.forceShowErrors;
	      children = _react2['default'].cloneElement(_react2['default'].Children.only(children), { value: value, onChange: this.onChange });
	      var label = this.props.label || schema.label;
	      return _react2['default'].createElement(
	        Self,
	        { onBlur: this.onBlur },
	        _react2['default'].createElement(Label, { label: label, schema: schema }),
	        children,
	        showErrors && _react2['default'].createElement(ErrorList, { formValue: this.formValue })
	      );
	    }
	  }, {
	    key: 'onBlur',
	    decorators: [_autobindDecorator2['default']],
	    value: function onBlur() {
	      this.setState({ dirty: true });
	    }
	  }, {
	    key: 'onChange',
	    decorators: [_autobindDecorator2['default']],
	    value: function onChange(e) {
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
	      this.setState({ dirty: true });
	      this.formValue.update(value);
	    }
	  }]);
	
	  return Field;
	})(_Component3['default']);
	
	exports['default'] = Field;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	/**
	 * @copyright 2015, Andrey Popp <8mayday@gmail.com>
	 *
	 * The decorator may be used on classes or methods
	 * ```
	 * @autobind
	 * class FullBound {}
	 *
	 * class PartBound {
	 *   @autobind
	 *   method () {}
	 * }
	 * ```
	 */
	exports['default'] = autobind;
	
	function autobind() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  if (args.length === 1) {
	    return boundClass.apply(undefined, args);
	  } else {
	    return boundMethod.apply(undefined, args);
	  }
	}
	
	/**
	 * Use boundMethod to bind all methods on the target.prototype
	 */
	function boundClass(target) {
	  // (Using reflect to get all keys including symbols)
	  var keys = undefined;
	  // Use Reflect if exists
	  if (typeof Reflect !== 'undefined') {
	    keys = Reflect.ownKeys(target.prototype);
	  } else {
	    keys = Object.getOwnPropertyNames(target.prototype);
	    // use symbols if support is provided
	    if (typeof Object.getOwnPropertySymbols === 'function') {
	      keys = keys.concat(Object.getOwnPropertySymbols(target.prototype));
	    }
	  }
	
	  keys.forEach(function (key) {
	    // Ignore special case target method
	    if (key === 'constructor') {
	      return;
	    }
	
	    var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);
	
	    // Only methods need binding
	    if (typeof descriptor.value === 'function') {
	      Object.defineProperty(target.prototype, key, boundMethod(target, key, descriptor));
	    }
	  });
	  return target;
	}
	
	/**
	 * Return a descriptor removing the value and returning a getter
	 * The getter will return a .bind version of the function
	 * and memoize the result against a symbol on the instance
	 */
	function boundMethod(target, key, descriptor) {
	  var fn = descriptor.value;
	
	  if (typeof fn !== 'function') {
	    throw new Error('@autobind decorator can only be applied to methods not: ' + typeof fn);
	  }
	
	  return {
	    configurable: true,
	    get: function get() {
	      if (this === target.prototype) {
	        return fn;
	      }
	
	      var boundFn = fn.bind(this);
	      Object.defineProperty(this, key, {
	        value: boundFn,
	        configurable: true,
	        writable: true
	      });
	      return boundFn;
	    }
	  };
	}
	module.exports = exports['default'];


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @copyright 2015, Prometheus Research, LLC
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _autobindDecorator = __webpack_require__(16);
	
	var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodashFunctionDebounce = __webpack_require__(18);
	
	var _lodashFunctionDebounce2 = _interopRequireDefault(_lodashFunctionDebounce);
	
	var _emptyFunction = __webpack_require__(20);
	
	var _emptyFunction2 = _interopRequireDefault(_emptyFunction);
	
	/**
	 * Input component with debounce.
	 */
	
	var Input = (function (_React$Component) {
	  _inherits(Input, _React$Component);
	
	  _createClass(Input, null, [{
	    key: 'propTypes',
	    value: {
	      Self: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
	      debounce: _react.PropTypes.number,
	      value: _react.PropTypes.any,
	      onChange: _react.PropTypes.func
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      Self: 'input',
	      debounce: 100,
	      onChange: _emptyFunction2['default']
	    },
	    enumerable: true
	  }]);
	
	  function Input(props) {
	    _classCallCheck(this, Input);
	
	    _get(Object.getPrototypeOf(Input.prototype), 'constructor', this).call(this, props);
	    this.state = { value: props.value };
	    this._expectedValue = undefined;
	    this._finalizeOnChangeDebounced = props.debounce ? (0, _lodashFunctionDebounce2['default'])(this._finalizeOnChange.bind(this), props.debounce) : this._finalizeOnChange.bind(this);
	  }
	
	  _createDecoratedClass(Input, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var Self = _props.Self;
	      var debounceEnabled = _props.debounce;
	      var value = _props.value;
	
	      var props = _objectWithoutProperties(_props, ['Self', 'debounce', 'value']);
	
	      if (debounceEnabled) {
	        value = this.state.value;
	      }
	      return _react2['default'].createElement(Self, _extends({}, props, {
	        value: value,
	        onChange: this.onChange,
	        onBlur: this.onBlur }));
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.value !== this._expectedValue) {
	        this._cancelOnChange();
	      }
	      if (nextProps.debounce !== this.props.debounce) {
	        this._finalizeOnChange();
	        this._cancelOnChange();
	        this._finalizeOnChangeDebounced = nextProps.debounce ? (0, _lodashFunctionDebounce2['default'])(this._finalizeOnChange.bind(this), nextProps.debounce) : this._finalizeOnChange.bind(this);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this._finalizeOnChange();
	      this._cancelOnChange();
	    }
	  }, {
	    key: '_scheduleOnChange',
	    value: function _scheduleOnChange(value) {
	      this.setState({ value: value });
	      this._expectedValue = value;
	      this._finalizeOnChangeDebounced();
	    }
	  }, {
	    key: '_finalizeOnChange',
	    value: function _finalizeOnChange() {
	      if (this._expectedValue !== undefined) {
	        var value = this._expectedValue;
	        this._expectedValue = undefined;
	        this.props.onChange(value);
	      }
	    }
	  }, {
	    key: '_cancelOnChange',
	    value: function _cancelOnChange() {
	      if (this._finalizeOnChangeDebounced.cancel) {
	        this._expectedValue = undefined;
	        this._finalizeOnChangeDebounced.cancel();
	      }
	    }
	  }, {
	    key: 'onChange',
	    decorators: [_autobindDecorator2['default']],
	    value: function onChange(e) {
	      var value = e && e.target && 'value' in e.target ? e.target.value : e;
	      this._scheduleOnChange(value);
	    }
	  }, {
	    key: 'onBlur',
	    decorators: [_autobindDecorator2['default']],
	    value: function onBlur() {
	      if (this._expectedValue !== undefined) {
	        this._finalizeOnChange();
	        this._cancelOnChange();
	      }
	    }
	  }]);
	
	  return Input;
	})(_react2['default'].Component);
	
	exports['default'] = Input;
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13),
	    now = __webpack_require__(19);
	
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
	 *  delayed before it's invoked.
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
	    leading = !!options.leading;
	    maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	
	  function cancel() {
	    if (timeoutId) {
	      clearTimeout(timeoutId);
	    }
	    if (maxTimeoutId) {
	      clearTimeout(maxTimeoutId);
	    }
	    lastCalled = 0;
	    maxTimeoutId = timeoutId = trailingCall = undefined;
	  }
	
	  function complete(isCalled, id) {
	    if (id) {
	      clearTimeout(id);
	    }
	    maxTimeoutId = timeoutId = trailingCall = undefined;
	    if (isCalled) {
	      lastCalled = now();
	      result = func.apply(thisArg, args);
	      if (!timeoutId && !maxTimeoutId) {
	        args = thisArg = undefined;
	      }
	    }
	  }
	
	  function delayed() {
	    var remaining = wait - (now() - stamp);
	    if (remaining <= 0 || remaining > wait) {
	      complete(trailingCall, maxTimeoutId);
	    } else {
	      timeoutId = setTimeout(delayed, remaining);
	    }
	  }
	
	  function maxDelayed() {
	    complete(trailing, timeoutId);
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
	      args = thisArg = undefined;
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  return debounced;
	}
	
	module.exports = debounce;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(10);
	
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	module.exports = function () {};
	
	if ('production' != process.env.NODE_ENV) {
	  Object.freeze(module.exports);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 21 */
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
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Component2 = __webpack_require__(3);
	
	var _Component3 = _interopRequireDefault(_Component2);
	
	var _Error = __webpack_require__(22);
	
	var _Error2 = _interopRequireDefault(_Error);
	
	var ErrorList = (function (_Component) {
	  _inherits(ErrorList, _Component);
	
	  function ErrorList() {
	    _classCallCheck(this, ErrorList);
	
	    _get(Object.getPrototypeOf(ErrorList.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(ErrorList, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var Self = _props.Self;
	      var Error = _props.Error;
	      var noLabel = _props.noLabel;
	      var complete = _props.complete;
	      var schemaType = _props.schemaType;
	
	      var props = _objectWithoutProperties(_props, ['Self', 'Error', 'noLabel', 'complete', 'schemaType']);
	
	      var errorList = complete ? this.formValue.completeErrorList : this.formValue.errorList;
	      if (schemaType !== undefined) {
	        errorList = errorList.filter(function (error) {
	          return error.schema ? schemaType[error.schema.type] : schemaType.none;
	        });
	      }
	      if (errorList.length === 0) {
	        return null;
	      }
	      var items = errorList.map(function (error, index) {
	        return _react2['default'].createElement(Error, {
	          key: error.field + '__' + index,
	          error: error,
	          noLabel: noLabel,
	          complete: complete
	        });
	      });
	      return _react2['default'].createElement(
	        Self,
	        props,
	        items
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: _extends({}, _Component3['default'].propTypes, {
	
	      /**
	       * Component which is used to render error items.
	       */
	      Error: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
	
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
	      Error: _Error2['default'],
	      Self: 'div'
	    },
	    enumerable: true
	  }]);
	
	  return ErrorList;
	})(_Component3['default']);
	
	exports['default'] = ErrorList;
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @copyright 2015, Prometheus Research, LLC
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = Error;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function Error(_ref) {
	  var error = _ref.error;
	  var label = _ref.label;
	  var noLabel = _ref.noLabel;
	  var complete = _ref.complete;
	
	  if (!label && error.schema) {
	    label = error.schema.label;
	  }
	  if (label && complete && !noLabel) {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      error.schema.label,
	      ': ',
	      error.message
	    );
	  } else {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      error.message
	    );
	  }
	}
	
	module.exports = exports['default'];

/***/ },
/* 23 */
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
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _memoizeDecorator = __webpack_require__(25);
	
	var _memoizeDecorator2 = _interopRequireDefault(_memoizeDecorator);
	
	var _lodashLangCloneDeep = __webpack_require__(26);
	
	var _lodashLangCloneDeep2 = _interopRequireDefault(_lodashLangCloneDeep);
	
	var _lodashObjectGet = __webpack_require__(50);
	
	var _lodashObjectGet2 = _interopRequireDefault(_lodashObjectGet);
	
	var _lodashObjectSet = __webpack_require__(54);
	
	var _lodashObjectSet2 = _interopRequireDefault(_lodashObjectSet);
	
	var _emptyFunction = __webpack_require__(20);
	
	var _emptyFunction2 = _interopRequireDefault(_emptyFunction);
	
	var _keyPath = __webpack_require__(6);
	
	var _keyPath2 = _interopRequireDefault(_keyPath);
	
	var _Schema = __webpack_require__(56);
	
	var Value = (function () {
	  function Value() {
	    _classCallCheck(this, Value);
	  }
	
	  _createClass(Value, [{
	    key: 'select',
	    value: function select(key) {
	      var keyPath = this.keyPath.concat((0, _keyPath2['default'])(key));
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
	  _inherits(ValueRoot, _Value);
	
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
	
	  return ValueRoot;
	})(Value);
	
	var ValueLeaf = (function (_Value2) {
	  _inherits(ValueLeaf, _Value2);
	
	  function ValueLeaf(root, keyPath) {
	    _classCallCheck(this, ValueLeaf);
	
	    _get(Object.getPrototypeOf(ValueLeaf.prototype), 'constructor', this).call(this);
	    this._root = root;
	    this.keyPath = keyPath;
	    this.schema = (0, _Schema.select)(root.schema, keyPath);
	    this.value = (0, _lodashObjectGet2['default'])(root.value, keyPath);
	  }
	
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
	        var keyPath = this.keyPath.slice();
	        keyPath.pop();
	        return new ValueLeaf(this._root, keyPath);
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
	  var value = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	  var onChange = arguments.length <= 2 || arguments[2] === undefined ? _emptyFunction2['default'] : arguments[2];
	  var params = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	  var errorList = arguments.length <= 4 || arguments[4] === undefined ? null : arguments[4];
	
	  if (errorList === null) {
	    errorList = validate(schema, value);
	  }
	  return new ValueRoot(schema, value, onChange, params, errorList);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)))

/***/ },
/* 24 */
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
/* 25 */
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var baseClone = __webpack_require__(27),
	    bindCallback = __webpack_require__(48);
	
	/**
	 * Creates a deep clone of `value`. If `customizer` is provided it's invoked
	 * to produce the cloned values. If `customizer` returns `undefined` cloning
	 * is handled by the method instead. The `customizer` is bound to `thisArg`
	 * and invoked with up to three argument; (value [, index|key, object]).
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
	    ? baseClone(value, true, bindCallback(customizer, thisArg, 3))
	    : baseClone(value, true);
	}
	
	module.exports = cloneDeep;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var arrayCopy = __webpack_require__(28),
	    arrayEach = __webpack_require__(29),
	    baseAssign = __webpack_require__(30),
	    baseForOwn = __webpack_require__(40),
	    initCloneArray = __webpack_require__(44),
	    initCloneByTag = __webpack_require__(45),
	    initCloneObject = __webpack_require__(47),
	    isArray = __webpack_require__(9),
	    isObject = __webpack_require__(13);
	
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
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
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
	  // Check for circular references and return its corresponding clone.
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
/* 28 */
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
/* 29 */
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var baseCopy = __webpack_require__(31),
	    keys = __webpack_require__(32);
	
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
/* 31 */
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(10),
	    isArrayLike = __webpack_require__(33),
	    isObject = __webpack_require__(13),
	    shimKeys = __webpack_require__(36);
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
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
	  var Ctor = object == null ? undefined : object.constructor;
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object != 'function' && isArrayLike(object))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};
	
	module.exports = keys;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(34),
	    isLength = __webpack_require__(14);
	
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(35);
	
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
/* 35 */
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(37),
	    isArray = __webpack_require__(9),
	    isIndex = __webpack_require__(38),
	    isLength = __webpack_require__(14),
	    keysIn = __webpack_require__(39);
	
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
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(33),
	    isObjectLike = __webpack_require__(8);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Native method references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
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
	  return isObjectLike(value) && isArrayLike(value) &&
	    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	}
	
	module.exports = isArguments;


/***/ },
/* 38 */
/***/ function(module, exports) {

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(37),
	    isArray = __webpack_require__(9),
	    isIndex = __webpack_require__(38),
	    isLength = __webpack_require__(14),
	    isObject = __webpack_require__(13);
	
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(41),
	    keys = __webpack_require__(32);
	
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(42);
	
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
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(43);
	
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	
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
/* 44 */
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
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var bufferClone = __webpack_require__(46);
	
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
/* 46 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Native method references. */
	var ArrayBuffer = global.ArrayBuffer,
	    Uint8Array = global.Uint8Array;
	
	/**
	 * Creates a clone of the given array buffer.
	 *
	 * @private
	 * @param {ArrayBuffer} buffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function bufferClone(buffer) {
	  var result = new ArrayBuffer(buffer.byteLength),
	      view = new Uint8Array(result);
	
	  view.set(new Uint8Array(buffer));
	  return result;
	}
	
	module.exports = bufferClone;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 47 */
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
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(49);
	
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
/* 49 */
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
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(51),
	    toPath = __webpack_require__(52);
	
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
	  var result = object == null ? undefined : baseGet(object, toPath(path), (path + ''));
	  return result === undefined ? defaultValue : result;
	}
	
	module.exports = get;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(43);
	
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
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(53),
	    isArray = __webpack_require__(9);
	
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
/* 53 */
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
	  return value == null ? '' : (value + '');
	}
	
	module.exports = baseToString;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var isIndex = __webpack_require__(38),
	    isKey = __webpack_require__(55),
	    isObject = __webpack_require__(13),
	    toPath = __webpack_require__(52);
	
	/**
	 * Sets the property value of `path` on `object`. If a portion of `path`
	 * does not exist it's created.
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
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(9),
	    toObject = __webpack_require__(43);
	
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
/* 56 */
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
	
	var _schema = __webpack_require__(57);
	
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
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var genobj = __webpack_require__(58);
	var genfun = __webpack_require__(60);
	var jsonpointer = __webpack_require__(64);
	var xtend = __webpack_require__(65);
	var formats = __webpack_require__(66);
	
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
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var isProperty = __webpack_require__(59)
	
	var gen = function(obj, prop) {
	  return isProperty(prop) ? obj+'.'+prop : obj+'['+JSON.stringify(prop)+']'
	}
	
	gen.valid = isProperty
	gen.property = function (prop) {
	 return isProperty(prop) ? prop : JSON.stringify(prop)
	}
	
	module.exports = gen


/***/ },
/* 59 */
/***/ function(module, exports) {

	"use strict"
	function isProperty(str) {
	  return /^[$A-Z\_a-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc][$A-Z\_a-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc0-9\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19b0-\u19c0\u19c8\u19c9\u19d0-\u19d9\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf2-\u1cf4\u1dc0-\u1de6\u1dfc-\u1dff\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua880\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8e0-\ua8f1\ua900-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f]*$/.test(str)
	}
	module.exports = isProperty

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(61)
	
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
/* 61 */
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
	
	exports.isBuffer = __webpack_require__(62);
	
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
	exports.inherits = __webpack_require__(63);
	
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(5), __webpack_require__(24)))

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ },
/* 63 */
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
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var console = __webpack_require__(24);
	
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
/* 65 */
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
/* 66 */
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
	
	exports['default'] = WithFormValue;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Component = __webpack_require__(3);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function WithFormValue(Component) {
	
	  var displayName = Component.displayName || Component.name;
	
	  return (function (_FormComponent) {
	    _inherits(_class, _FormComponent);
	
	    function _class() {
	      _classCallCheck(this, _class);
	
	      _get(Object.getPrototypeOf(_class.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(_class, [{
	      key: 'render',
	      value: function render() {
	        return _react2['default'].createElement(Component, _extends({}, this.props, {
	          formValue: this.formValue
	        }));
	      }
	    }], [{
	      key: 'displayName',
	      value: 'WithFormValue(' + displayName + ')',
	      enumerable: true
	    }]);
	
	    return _class;
	  })(_Component2['default']);
	}
	
	module.exports = exports['default'];

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @copyright 2015, Prometheus Research, LLC
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _autobindDecorator = __webpack_require__(16);
	
	var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodashLangIsArray = __webpack_require__(9);
	
	var _lodashLangIsArray2 = _interopRequireDefault(_lodashLangIsArray);
	
	var _lodashLangIsString = __webpack_require__(7);
	
	var _lodashLangIsString2 = _interopRequireDefault(_lodashLangIsString);
	
	var _mapElement = __webpack_require__(69);
	
	var _mapElement2 = _interopRequireDefault(_mapElement);
	
	var _Component = __webpack_require__(3);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var LegacyFieldset = (function (_React$Component) {
	  _inherits(LegacyFieldset, _React$Component);
	
	  function LegacyFieldset() {
	    _classCallCheck(this, LegacyFieldset);
	
	    _get(Object.getPrototypeOf(LegacyFieldset.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createDecoratedClass(LegacyFieldset, [{
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
	  }, {
	    key: '_propagateFormValue',
	    decorators: [_autobindDecorator2['default']],
	    value: function _propagateFormValue(element) {
	      if (element && element.props && element.props.selectFormValue && !element.props.formValue) {
	        var formValue = this.props.formValue;
	        var selectFormValue = element.props.selectFormValue;
	        if ((0, _lodashLangIsString2['default'])(selectFormValue) || (0, _lodashLangIsArray2['default'])(selectFormValue)) {
	          formValue = formValue.select(selectFormValue);
	        }
	        element = _react2['default'].cloneElement(element, { formValue: formValue });
	        return [false, element];
	      }
	      return element;
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
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @copyright 2015, Prometheus Research, LLC
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = mapElement;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodashLangIsArray = __webpack_require__(9);
	
	var _lodashLangIsArray2 = _interopRequireDefault(_lodashLangIsArray);
	
	/**
	 * Map React `element` structure over `func`.
	 */
	
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
	
	module.exports = exports['default'];

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDE3MmY2ZmU3MGRkYTJhYjA4YjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9GaWVsZHNldC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL34vaW52YXJpYW50L2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tleVBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvbGFuZy9pc1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvbGFuZy9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2dldE5hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9sYW5nL2lzTmF0aXZlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2xhbmcvaXNGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9sYW5nL2lzT2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2lzTGVuZ3RoLmpzIiwid2VicGFjazovLy8uL3NyYy9GaWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2F1dG9iaW5kLWRlY29yYXRvci9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0lucHV0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2Z1bmN0aW9uL2RlYm91bmNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2RhdGUvbm93LmpzIiwid2VicGFjazovLy8uL34vZW1wdHkvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Vycm9yTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ZhbHVlLmpzIiwid2VicGFjazovLy8uL34vbm9kZS1saWJzLWJyb3dzZXIvbW9jay9jb25zb2xlLmpzIiwid2VicGFjazovLy8uL34vbWVtb2l6ZS1kZWNvcmF0b3IvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2xhbmcvY2xvbmVEZWVwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2Jhc2VDbG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9hcnJheUNvcHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYXJyYXlFYWNoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2Jhc2VBc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUNvcHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvaXNBcnJheUxpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvZ2V0TGVuZ3RoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2Jhc2VQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9zaGltS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9sYW5nL2lzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2lzSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvb2JqZWN0L2tleXNJbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlRm9yT3duLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2Jhc2VGb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvY3JlYXRlQmFzZUZvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC90b09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9pbml0Q2xvbmVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9pbml0Q2xvbmVCeVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9idWZmZXJDbG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9pbml0Q2xvbmVPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYmluZENhbGxiYWNrLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3V0aWxpdHkvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvb2JqZWN0L2dldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL3RvUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvb2JqZWN0L3NldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9pc0tleS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2NoZW1hLmpzIiwid2VicGFjazovLy8uL3NyYy9fc2NoZW1hL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZ2VuZXJhdGUtb2JqZWN0LXByb3BlcnR5L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vaXMtcHJvcGVydHkvaXMtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9nZW5lcmF0ZS1mdW5jdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3V0aWwvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9+L3V0aWwvc3VwcG9ydC9pc0J1ZmZlckJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vanNvbnBvaW50ZXIvanNvbnBvaW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi94dGVuZC9pbW11dGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19zY2hlbWEvZm9ybWF0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvV2l0aEZvcm1WYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGVnYWN5RmllbGRzZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NDbEMyQixDQUFZOzs7O1NBQWhDLFFBQVE7O21DQUNZLEVBQVM7Ozs7U0FBN0IsS0FBSzs7bUNBQ2UsRUFBUzs7OztTQUE3QixLQUFLOzsyQ0FDZSxFQUFpQjs7OztTQUFyQyxhQUFhOztvQ0FDTyxFQUFVOzs7O1NBQXpCLE1BQU07O21DQUNTLEVBQVM7Ozs7U0FBN0IsS0FBSzs7dUNBQ2UsRUFBYTs7OztTQUFqQyxTQUFTOzs0Q0FFVyxFQUFrQjs7OztTQUF0QyxjQUFjLCtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDUlUsQ0FBTzs7Ozt1Q0FDUCxDQUFhOzs7O0tBRXZCLFFBQVE7YUFBUixRQUFROztZQUFSLFFBQVE7MkJBQVIsUUFBUTs7Z0NBQVIsUUFBUTs7O2dCQUFSLFFBQVE7O1lBWXJCLGtC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O0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZDQUE0QyxLQUFLOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0Esb0NBQW1DLE9BQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLDBEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWCxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsU0FBUztBQUNwQjtBQUNBLFlBQVcsU0FBUztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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Q0FDUCxDQUFxQjs7Ozs7Ozs7QUFLM0IsVUFBUyxVQUFVLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtBQUNoRCxVQUFPLG1CQUFNLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFVBQVMsRUFBRSxFQUFFO0FBQzlDLFNBQUksT0FBTyxHQUFHLElBQUksQ0FBQztBQUNuQixPQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2QsU0FBSSxvQ0FBUSxFQUFFLENBQUMsRUFBRTtBQUNmLGNBQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEIsU0FBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNaO0FBQ0QsU0FBSSxPQUFPLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7QUFDbEQsU0FBRSxHQUFHLG1CQUFNLFlBQVksQ0FBQyxFQUFFLEVBQUU7QUFDMUIsaUJBQVEsRUFBRSxtQkFBTSxRQUFRLENBQUMsR0FBRyxDQUMxQixFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFDakIsVUFBUyxLQUFLLEVBQUU7QUFDZCxrQkFBTyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1VBQ2hDLENBQUM7UUFDTCxDQUFDLENBQUM7TUFDSjtBQUNELFlBQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQyxDQUFDO0VBQ0oiLCJmaWxlIjoicmVhY3QtZm9ybXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGQxNzJmNmZlNzBkZGEyYWIwOGI2XG4gKiovIiwiLyoqXG4gKiBAY29weXJpZ2h0IDIwMTUsIFByb21ldGhldXMgUmVzZWFyY2gsIExMQ1xuICovXG5cbmV4cG9ydCBGaWVsZHNldCAgICAgICBmcm9tICcuL0ZpZWxkc2V0JztcbmV4cG9ydCBGaWVsZCAgICAgICAgICBmcm9tICcuL0ZpZWxkJztcbmV4cG9ydCBWYWx1ZSAgICAgICAgICBmcm9tICcuL1ZhbHVlJztcbmV4cG9ydCBXaXRoRm9ybVZhbHVlICBmcm9tICcuL1dpdGhGb3JtVmFsdWUnO1xuZXhwb3J0ICogYXMgU2NoZW1hICAgIGZyb20gJy4vU2NoZW1hJztcbmV4cG9ydCBJbnB1dCAgICAgICAgICBmcm9tICcuL0lucHV0JztcbmV4cG9ydCBFcnJvckxpc3QgICAgICBmcm9tICcuL0Vycm9yTGlzdCc7XG5cbmV4cG9ydCBMZWdhY3lGaWVsZHNldCBmcm9tICcuL0xlZ2FjeUZpZWxkc2V0JztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiovIiwiLyoqXG4gKiBAY29weXJpZ2h0IDIwMTUsIFByb21ldGhldXMgUmVzZWFyY2gsIExMQ1xuICovXG5cbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlc30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbXBvbmVudCAgICAgICAgICBmcm9tICcuL0NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZWxkc2V0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC4uLkNvbXBvbmVudC5wcm9wVHlwZXMsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIFNlbGY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBTZWxmOiAnZGl2J1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge1NlbGYsIC4uLnByb3BzfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIDxTZWxmIHsuLi5wcm9wc30gLz47XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL0ZpZWxkc2V0LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9XG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBAY29weXJpZ2h0IDIwMTUsIFByb21ldGhldXMgUmVzZWFyY2gsIExMQ1xuICovXG5cbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlc30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGludmFyaWFudCAgICAgICAgICBmcm9tICdpbnZhcmlhbnQnO1xuaW1wb3J0IGtleVBhdGggICAgICAgICAgICBmcm9tICcuL2tleVBhdGgnO1xuXG5leHBvcnQgY29uc3QgQ29udGV4dFR5cGVzID0ge1xuICBmb3JtVmFsdWU6IFByb3BUeXBlcy5vYmplY3Rcbn07XG5cbmxldCBzZWxlY3RQcm9wVHlwZSA9IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICBQcm9wVHlwZXMuYXJyYXksXG4gIFByb3BUeXBlcy5zdHJpbmcsXG4gIFByb3BUeXBlcy5udW1iZXIsXG4gIFByb3BUeXBlcy5ib29sXG5dKTtcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBmb3JtIGNvbXBvbmVudHMuXG4gKlxuICogSXQgZXhwb3NlcyBmb3JtIHZhbHVlIHZpYSBgdGhpcy5mb3JtVmFsdWVgIHdoaWNoIGlzIHByb3ZpZGVkIGVpdGhlciB2aWFcbiAqIGB0aGlzLnByb3BzLmZvcm1WYWx1ZWAgb3IgdmlhIGNvbnRleHQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBGb3JtIHZhbHVlIHBhc3NlZCBhcyBhIHByb3AuXG4gICAgICovXG4gICAgZm9ybVZhbHVlOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0b3IgZm9yIGZvcm0gdmFsdWUuXG4gICAgICpcbiAgICAgKiBVc2VkIHRvIHNlbGVjdCBhIHBhcnQgZnJvbSBhIGZvcm0gdmFsdWUgcGFzc2VkIHZpYSBjb250ZXh0LlxuICAgICAqL1xuICAgIHNlbGVjdDogc2VsZWN0UHJvcFR5cGUsXG5cbiAgICAvKipcbiAgICAgKiBTYW1lIGFzIGBzZWxlY3RgLlxuICAgICAqXG4gICAgICogRGVwcmVjYXRlZC5cbiAgICAgKi9cbiAgICBzZWxlY3RGb3JtVmFsdWU6IHNlbGVjdFByb3BUeXBlXG4gIH07XG5cbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IENvbnRleHRUeXBlcztcbiAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0gQ29udGV4dFR5cGVzO1xuXG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4ge2Zvcm1WYWx1ZTogdGhpcy5mb3JtVmFsdWV9O1xuICB9XG5cbiAgZ2V0IGZvcm1WYWx1ZSgpIHtcbiAgICBsZXQgZm9ybVZhbHVlID0gdGhpcy5wcm9wcy5mb3JtVmFsdWUgfHwgdGhpcy5jb250ZXh0LmZvcm1WYWx1ZTtcblxuICAgIGludmFyaWFudChcbiAgICAgIGZvcm1WYWx1ZSxcbiAgICAgICdBIGZvcm0gY29tcG9uZW50IDwlcyAvPiBzaG91bGQgcmVjZWl2ZSBmb3JtIHZhbHVlIHZpYSBwcm9wcyAnICtcbiAgICAgICdvciBiZSB1c2VkIGFzIGEgcGFydCBvZiBlbGVtZW50IGhpZXJhcmNoeSB3aGljaCAnICtcbiAgICAgICdpbmNsdWRlcyA8Rm9ybSAvPiBjb21wb25lbnQgaW4gaXRzIGFuY2VzdG9ycycsXG4gICAgICB0aGlzLmNvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IHRoaXMuY29uc3RydWN0b3IubmFtZVxuICAgICk7XG5cbiAgICBsZXQgc2VsZWN0ID0gdGhpcy5wcm9wcy5zZWxlY3QgfHwgdGhpcy5wcm9wcy5zZWxlY3RGb3JtVmFsdWU7XG4gICAgLy8gV2UgY2hlY2sgZm9yIHNlbGVjdCAhPT0gdHJ1ZSB0byBrZWVwIGNvbXBhdGFiaWxpdHkgd2UgZWFyaWxlclxuICAgIC8vIHZlcnNpb25zIG9mIFJlYWN0IEZvcm1zIHdoZXJlIHdlIG5lZWRlZCB0byByZWJ1aWxkIGVsZW1lbnQgdHJlZSB0b1xuICAgIC8vIHByb3BhZ2F0ZSB2YWx1ZXMgdG8gZm9ybS5cbiAgICBpZiAoc2VsZWN0ICYmIHNlbGVjdCAhPT0gdHJ1ZSkge1xuICAgICAgc2VsZWN0ID0ga2V5UGF0aChzZWxlY3QpO1xuICAgICAgZm9ybVZhbHVlID0gZm9ybVZhbHVlLnNlbGVjdChzZWxlY3QpO1xuICAgIH1cblxuICAgIHJldHVybiBmb3JtVmFsdWU7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL0NvbXBvbmVudC5qc1xuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBpbnZhcmlhbnRcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICtcbiAgICAgICAgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdJbnZhcmlhbnQgVmlvbGF0aW9uOiAnICtcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJnc1thcmdJbmRleCsrXTsgfSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2ludmFyaWFudC9icm93c2VyLmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZHJhaW5RdWV1ZSwgMCk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9wcm9jZXNzL2Jyb3dzZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEBjb3B5cmlnaHQgMjAxNSwgUHJvbWV0aGV1cyBSZXNlYXJjaCwgTExDXG4gKi9cblxuaW1wb3J0IGlzU3RyaW5nICBmcm9tICdsb2Rhc2gvbGFuZy9pc1N0cmluZyc7XG5pbXBvcnQgaXNBcnJheSAgIGZyb20gJ2xvZGFzaC9sYW5nL2lzQXJyYXknO1xuaW1wb3J0IGludmFyaWFudCBmcm9tICdpbnZhcmlhbnQnO1xuXG5jb25zdCBJU19OVU1CRVIgPSAvWzAtOV0rLztcblxuZnVuY3Rpb24gdHJ5UGFyc2VJbnQodikge1xuICBpZiAodHlwZW9mIHYgPT09ICdzdHJpbmcnICYmIElTX05VTUJFUi5leGVjKHYpKSB7XG4gICAgdiA9IHBhcnNlSW50KHYsIDEwKTtcbiAgfVxuICByZXR1cm4gdjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ga2V5UGF0aCh2YWx1ZSkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgaWYgKHZhbHVlLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJy4nKS5maWx0ZXIoQm9vbGVhbikubWFwKHRyeVBhcnNlSW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBbdHJ5UGFyc2VJbnQodmFsdWUpXTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gW3ZhbHVlXTtcbiAgfSBlbHNlIHtcbiAgICBpbnZhcmlhbnQoXG4gICAgICBmYWxzZSxcbiAgICAgICdrZXlQYXRoIGNhbiBiZSBlaXRoZXIgYW4gYXJyYXksIGEgc3RyaW5nIG9yIGEgbnVtYmVyLCBnb3Q6ICVzJyxcbiAgICAgIHZhbHVlXG4gICAgKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMva2V5UGF0aC5qc1xuICoqLyIsInZhciBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nO1xuXG4vKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqVG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN0cmluZ2AgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgY29ycmVjdGx5IGNsYXNzaWZpZWQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N0cmluZygnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N0cmluZygxKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycgfHwgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgb2JqVG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gc3RyaW5nVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N0cmluZztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9sYW5nL2lzU3RyaW5nLmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9pc09iamVjdExpa2UuanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvZ2V0TmF0aXZlJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc0xlbmd0aCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nO1xuXG4vKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqVG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyogTmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVJc0FycmF5ID0gZ2V0TmF0aXZlKEFycmF5LCAnaXNBcnJheScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGNvcnJlY3RseSBjbGFzc2lmaWVkLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gbmF0aXZlSXNBcnJheSB8fCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmIG9ialRvU3RyaW5nLmNhbGwodmFsdWUpID09IGFycmF5VGFnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2xhbmcvaXNBcnJheS5qc1xuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc05hdGl2ZSA9IHJlcXVpcmUoJy4uL2xhbmcvaXNOYXRpdmUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIHJldHVybiBpc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXROYXRpdmU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvZ2V0TmF0aXZlLmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpID4gNSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmblRvU3RyaW5nID0gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZm5Ub1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZywgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc05hdGl2ZShBcnJheS5wcm90b3R5cGUucHVzaCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc05hdGl2ZShfKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIHJldHVybiByZUlzTmF0aXZlLnRlc3QoZm5Ub1N0cmluZy5jYWxsKHZhbHVlKSk7XG4gIH1cbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgcmVJc0hvc3RDdG9yLnRlc3QodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTmF0aXZlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2xhbmcvaXNOYXRpdmUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmpUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgY29ycmVjdGx5IGNsYXNzaWZpZWQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBvbGRlciB2ZXJzaW9ucyBvZiBDaHJvbWUgYW5kIFNhZmFyaSB3aGljaCByZXR1cm4gJ2Z1bmN0aW9uJyBmb3IgcmVnZXhlc1xuICAvLyBhbmQgU2FmYXJpIDggd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXkgY29uc3RydWN0b3JzLlxuICByZXR1cm4gaXNPYmplY3QodmFsdWUpICYmIG9ialRvU3RyaW5nLmNhbGwodmFsdWUpID09IGZ1bmNUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9sYW5nL2lzRnVuY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGUgW2xhbmd1YWdlIHR5cGVdKGh0dHBzOi8vZXM1LmdpdGh1Yi5pby8jeDgpIG9mIGBPYmplY3RgLlxuICogKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdCgxKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIC8vIEF2b2lkIGEgVjggSklUIGJ1ZyBpbiBDaHJvbWUgMTktMjAuXG4gIC8vIFNlZSBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MjI5MSBmb3IgbW9yZSBkZXRhaWxzLlxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9sYW5nL2lzT2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogVXNlZCBhcyB0aGUgW21heGltdW0gbGVuZ3RoXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1udW1iZXIubWF4X3NhZmVfaW50ZWdlcilcbiAqIG9mIGFuIGFycmF5LWxpa2UgdmFsdWUuXG4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIGlzIGJhc2VkIG9uIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJiB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvaXNMZW5ndGguanNcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBAY29weXJpZ2h0IDIwMTUsIFByb21ldGhldXMgUmVzZWFyY2gsIExMQ1xuICovXG5cbmltcG9ydCBhdXRvYmluZCAgICAgICAgICAgICBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InO1xuaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzfSAgIGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbnB1dCAgICAgICAgICAgICAgICBmcm9tICcuL0lucHV0JztcbmltcG9ydCBFcnJvckxpc3QgICAgICAgICAgICBmcm9tICcuL0Vycm9yTGlzdCc7XG5pbXBvcnQgQ29tcG9uZW50ICAgICAgICAgICAgZnJvbSAnLi9Db21wb25lbnQnO1xuXG5mdW5jdGlvbiBMYWJlbCh7bGFiZWx9KSB7XG4gIHJldHVybiBsYWJlbCAmJiA8bGFiZWw+e2xhYmVsfTwvbGFiZWw+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWVsZCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAuLi5Db21wb25lbnQucHJvcFR5cGVzLFxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICBTZWxmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIExhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIEVycm9yTGlzdDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNoaWxkcmVuOiA8SW5wdXQgdHlwZT1cInRleHRcIiAvPixcbiAgICBMYWJlbCxcbiAgICBFcnJvckxpc3QsXG4gICAgU2VsZjogJ2RpdicsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtkaXJ0eTogZmFsc2V9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7U2VsZiwgRXJyb3JMaXN0LCBMYWJlbCwgY2hpbGRyZW59ID0gdGhpcy5wcm9wcztcbiAgICBsZXQge2RpcnR5fSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IHtzY2hlbWEsIHZhbHVlLCBwYXJhbXN9ID0gdGhpcy5mb3JtVmFsdWU7XG4gICAgbGV0IHNob3dFcnJvcnMgPSBkaXJ0eSB8fCBwYXJhbXMuZm9yY2VTaG93RXJyb3JzO1xuICAgIGNoaWxkcmVuID0gUmVhY3QuY2xvbmVFbGVtZW50KFxuICAgICAgUmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbiksXG4gICAgICB7dmFsdWUsIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlfSk7XG4gICAgbGV0IGxhYmVsID0gdGhpcy5wcm9wcy5sYWJlbCB8fCBzY2hlbWEubGFiZWw7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWxmIG9uQmx1cj17dGhpcy5vbkJsdXJ9PlxuICAgICAgICA8TGFiZWwgbGFiZWw9e2xhYmVsfSBzY2hlbWE9e3NjaGVtYX0gLz5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICB7c2hvd0Vycm9ycyAmJlxuICAgICAgICAgIDxFcnJvckxpc3QgZm9ybVZhbHVlPXt0aGlzLmZvcm1WYWx1ZX0gLz59XG4gICAgICA8L1NlbGY+XG4gICAgKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBvbkJsdXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZGlydHk6IHRydWV9KTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBvbkNoYW5nZShlKSB7XG4gICAgbGV0IHZhbHVlO1xuICAgIGlmIChlICYmIGUudGFyZ2V0ICYmIGUudGFyZ2V0LnZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgaWYgKHZhbHVlID09PSAnJykge1xuICAgICAgICB2YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBlO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtkaXJ0eTogdHJ1ZX0pO1xuICAgIHRoaXMuZm9ybVZhbHVlLnVwZGF0ZSh2YWx1ZSk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL0ZpZWxkLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbi8qKlxuICogQGNvcHlyaWdodCAyMDE1LCBBbmRyZXkgUG9wcCA8OG1heWRheUBnbWFpbC5jb20+XG4gKlxuICogVGhlIGRlY29yYXRvciBtYXkgYmUgdXNlZCBvbiBjbGFzc2VzIG9yIG1ldGhvZHNcbiAqIGBgYFxuICogQGF1dG9iaW5kXG4gKiBjbGFzcyBGdWxsQm91bmQge31cbiAqXG4gKiBjbGFzcyBQYXJ0Qm91bmQge1xuICogICBAYXV0b2JpbmRcbiAqICAgbWV0aG9kICgpIHt9XG4gKiB9XG4gKiBgYGBcbiAqL1xuZXhwb3J0c1snZGVmYXVsdCddID0gYXV0b2JpbmQ7XG5cbmZ1bmN0aW9uIGF1dG9iaW5kKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gYm91bmRDbGFzcy5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBib3VuZE1ldGhvZC5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICB9XG59XG5cbi8qKlxuICogVXNlIGJvdW5kTWV0aG9kIHRvIGJpbmQgYWxsIG1ldGhvZHMgb24gdGhlIHRhcmdldC5wcm90b3R5cGVcbiAqL1xuZnVuY3Rpb24gYm91bmRDbGFzcyh0YXJnZXQpIHtcbiAgLy8gKFVzaW5nIHJlZmxlY3QgdG8gZ2V0IGFsbCBrZXlzIGluY2x1ZGluZyBzeW1ib2xzKVxuICB2YXIga2V5cyA9IHVuZGVmaW5lZDtcbiAgLy8gVXNlIFJlZmxlY3QgaWYgZXhpc3RzXG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBrZXlzID0gUmVmbGVjdC5vd25LZXlzKHRhcmdldC5wcm90b3R5cGUpO1xuICB9IGVsc2Uge1xuICAgIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQucHJvdG90eXBlKTtcbiAgICAvLyB1c2Ugc3ltYm9scyBpZiBzdXBwb3J0IGlzIHByb3ZpZGVkXG4gICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBrZXlzID0ga2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0YXJnZXQucHJvdG90eXBlKSk7XG4gICAgfVxuICB9XG5cbiAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAvLyBJZ25vcmUgc3BlY2lhbCBjYXNlIHRhcmdldCBtZXRob2RcbiAgICBpZiAoa2V5ID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldC5wcm90b3R5cGUsIGtleSk7XG5cbiAgICAvLyBPbmx5IG1ldGhvZHMgbmVlZCBiaW5kaW5nXG4gICAgaWYgKHR5cGVvZiBkZXNjcmlwdG9yLnZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LnByb3RvdHlwZSwga2V5LCBib3VuZE1ldGhvZCh0YXJnZXQsIGtleSwgZGVzY3JpcHRvcikpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbi8qKlxuICogUmV0dXJuIGEgZGVzY3JpcHRvciByZW1vdmluZyB0aGUgdmFsdWUgYW5kIHJldHVybmluZyBhIGdldHRlclxuICogVGhlIGdldHRlciB3aWxsIHJldHVybiBhIC5iaW5kIHZlcnNpb24gb2YgdGhlIGZ1bmN0aW9uXG4gKiBhbmQgbWVtb2l6ZSB0aGUgcmVzdWx0IGFnYWluc3QgYSBzeW1ib2wgb24gdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIGJvdW5kTWV0aG9kKHRhcmdldCwga2V5LCBkZXNjcmlwdG9yKSB7XG4gIHZhciBmbiA9IGRlc2NyaXB0b3IudmFsdWU7XG5cbiAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignQGF1dG9iaW5kIGRlY29yYXRvciBjYW4gb25seSBiZSBhcHBsaWVkIHRvIG1ldGhvZHMgbm90OiAnICsgdHlwZW9mIGZuKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgaWYgKHRoaXMgPT09IHRhcmdldC5wcm90b3R5cGUpIHtcbiAgICAgICAgcmV0dXJuIGZuO1xuICAgICAgfVxuXG4gICAgICB2YXIgYm91bmRGbiA9IGZuLmJpbmQodGhpcyk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywga2V5LCB7XG4gICAgICAgIHZhbHVlOiBib3VuZEZuLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBib3VuZEZuO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYXV0b2JpbmQtZGVjb3JhdG9yL2xpYi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEBjb3B5cmlnaHQgMjAxNSwgUHJvbWV0aGV1cyBSZXNlYXJjaCwgTExDXG4gKi9cblxuaW1wb3J0IGF1dG9iaW5kICAgICAgICAgICBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InO1xuaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZGVib3VuY2UgICAgICAgICAgIGZyb20gJ2xvZGFzaC9mdW5jdGlvbi9kZWJvdW5jZSc7XG5pbXBvcnQgZW1wdHlGdW5jdGlvbiAgICAgIGZyb20gJ2VtcHR5L2Z1bmN0aW9uJztcblxuLyoqXG4gKiBJbnB1dCBjb21wb25lbnQgd2l0aCBkZWJvdW5jZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgU2VsZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBkZWJvdW5jZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmNcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIFNlbGY6ICdpbnB1dCcsXG4gICAgZGVib3VuY2U6IDEwMCxcbiAgICBvbkNoYW5nZTogZW1wdHlGdW5jdGlvblxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7dmFsdWU6IHByb3BzLnZhbHVlfTtcbiAgICB0aGlzLl9leHBlY3RlZFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2ZpbmFsaXplT25DaGFuZ2VEZWJvdW5jZWQgPSBwcm9wcy5kZWJvdW5jZSA/XG4gICAgICBkZWJvdW5jZSh0aGlzLl9maW5hbGl6ZU9uQ2hhbmdlLmJpbmQodGhpcyksIHByb3BzLmRlYm91bmNlKSA6XG4gICAgICB0aGlzLl9maW5hbGl6ZU9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtTZWxmLCBkZWJvdW5jZTogZGVib3VuY2VFbmFibGVkLCB2YWx1ZSwgLi4ucHJvcHN9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoZGVib3VuY2VFbmFibGVkKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8U2VsZlxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIG9uQmx1cj17dGhpcy5vbkJsdXJ9IC8+XG4gICAgKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy52YWx1ZSAhPT0gdGhpcy5fZXhwZWN0ZWRWYWx1ZSkge1xuICAgICAgdGhpcy5fY2FuY2VsT25DaGFuZ2UoKTtcbiAgICB9XG4gICAgaWYgKG5leHRQcm9wcy5kZWJvdW5jZSAhPT0gdGhpcy5wcm9wcy5kZWJvdW5jZSkge1xuICAgICAgdGhpcy5fZmluYWxpemVPbkNoYW5nZSgpO1xuICAgICAgdGhpcy5fY2FuY2VsT25DaGFuZ2UoKTtcbiAgICAgIHRoaXMuX2ZpbmFsaXplT25DaGFuZ2VEZWJvdW5jZWQgPSBuZXh0UHJvcHMuZGVib3VuY2UgP1xuICAgICAgICBkZWJvdW5jZSh0aGlzLl9maW5hbGl6ZU9uQ2hhbmdlLmJpbmQodGhpcyksIG5leHRQcm9wcy5kZWJvdW5jZSkgOlxuICAgICAgICB0aGlzLl9maW5hbGl6ZU9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5fZmluYWxpemVPbkNoYW5nZSgpO1xuICAgIHRoaXMuX2NhbmNlbE9uQ2hhbmdlKCk7XG4gIH1cblxuICBfc2NoZWR1bGVPbkNoYW5nZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlfSk7XG4gICAgdGhpcy5fZXhwZWN0ZWRWYWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuX2ZpbmFsaXplT25DaGFuZ2VEZWJvdW5jZWQoKTtcbiAgfVxuXG4gIF9maW5hbGl6ZU9uQ2hhbmdlKCkge1xuICAgIGlmICh0aGlzLl9leHBlY3RlZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGxldCB2YWx1ZSA9IHRoaXMuX2V4cGVjdGVkVmFsdWU7XG4gICAgICB0aGlzLl9leHBlY3RlZFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgX2NhbmNlbE9uQ2hhbmdlKCkge1xuICAgIGlmICh0aGlzLl9maW5hbGl6ZU9uQ2hhbmdlRGVib3VuY2VkLmNhbmNlbCkge1xuICAgICAgdGhpcy5fZXhwZWN0ZWRWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2ZpbmFsaXplT25DaGFuZ2VEZWJvdW5jZWQuY2FuY2VsKCk7XG4gICAgfVxuICB9XG5cbiAgQGF1dG9iaW5kXG4gIG9uQ2hhbmdlKGUpIHtcbiAgICBsZXQgdmFsdWUgPSBlICYmIGUudGFyZ2V0ICYmICd2YWx1ZScgaW4gZS50YXJnZXQgP1xuICAgICAgZS50YXJnZXQudmFsdWUgOlxuICAgICAgZTtcbiAgICB0aGlzLl9zY2hlZHVsZU9uQ2hhbmdlKHZhbHVlKTtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBvbkJsdXIoKSB7XG4gICAgaWYgKHRoaXMuX2V4cGVjdGVkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fZmluYWxpemVPbkNoYW5nZSgpO1xuICAgICAgdGhpcy5fY2FuY2VsT25DaGFuZ2UoKTtcbiAgICB9XG4gIH1cblxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvSW5wdXQuanNcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9sYW5nL2lzT2JqZWN0JyksXG4gICAgbm93ID0gcmVxdWlyZSgnLi4vZGF0ZS9ub3cnKTtcblxuLyoqIFVzZWQgYXMgdGhlIGBUeXBlRXJyb3JgIG1lc3NhZ2UgZm9yIFwiRnVuY3Rpb25zXCIgbWV0aG9kcy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qIE5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXg7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRlbGF5cyBpbnZva2luZyBgZnVuY2AgdW50aWwgYWZ0ZXIgYHdhaXRgXG4gKiBtaWxsaXNlY29uZHMgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB3YXNcbiAqIGludm9rZWQuIFRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgIG1ldGhvZCB0byBjYW5jZWxcbiAqIGRlbGF5ZWQgaW52b2NhdGlvbnMuIFByb3ZpZGUgYW4gb3B0aW9ucyBvYmplY3QgdG8gaW5kaWNhdGUgdGhhdCBgZnVuY2BcbiAqIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZSBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqIFN1YnNlcXVlbnQgY2FsbHMgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbiByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdFxuICogYGZ1bmNgIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpcyBpbnZva2VkXG4gKiBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIGlzXG4gKiBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHA6Ly9kcnVwYWxtb3Rpb24uY29tL2FydGljbGUvZGVib3VuY2UtYW5kLXRocm90dGxlLXZpc3VhbC1leHBsYW5hdGlvbilcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8uZGVib3VuY2VgIGFuZCBgXy50aHJvdHRsZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gZGVib3VuY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV0gU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZ1xuICogIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4V2FpdF0gVGhlIG1heGltdW0gdGltZSBgZnVuY2AgaXMgYWxsb3dlZCB0byBiZVxuICogIGRlbGF5ZWQgYmVmb3JlIGl0J3MgaW52b2tlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV0gU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmdcbiAqICBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBhdm9pZCBjb3N0bHkgY2FsY3VsYXRpb25zIHdoaWxlIHRoZSB3aW5kb3cgc2l6ZSBpcyBpbiBmbHV4XG4gKiBqUXVlcnkod2luZG93KS5vbigncmVzaXplJywgXy5kZWJvdW5jZShjYWxjdWxhdGVMYXlvdXQsIDE1MCkpO1xuICpcbiAqIC8vIGludm9rZSBgc2VuZE1haWxgIHdoZW4gdGhlIGNsaWNrIGV2ZW50IGlzIGZpcmVkLCBkZWJvdW5jaW5nIHN1YnNlcXVlbnQgY2FsbHNcbiAqIGpRdWVyeSgnI3Bvc3Rib3gnKS5vbignY2xpY2snLCBfLmRlYm91bmNlKHNlbmRNYWlsLCAzMDAsIHtcbiAqICAgJ2xlYWRpbmcnOiB0cnVlLFxuICogICAndHJhaWxpbmcnOiBmYWxzZVxuICogfSkpO1xuICpcbiAqIC8vIGVuc3VyZSBgYmF0Y2hMb2dgIGlzIGludm9rZWQgb25jZSBhZnRlciAxIHNlY29uZCBvZiBkZWJvdW5jZWQgY2FsbHNcbiAqIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoJy9zdHJlYW0nKTtcbiAqIGpRdWVyeShzb3VyY2UpLm9uKCdtZXNzYWdlJywgXy5kZWJvdW5jZShiYXRjaExvZywgMjUwLCB7XG4gKiAgICdtYXhXYWl0JzogMTAwMFxuICogfSkpO1xuICpcbiAqIC8vIGNhbmNlbCBhIGRlYm91bmNlZCBjYWxsXG4gKiB2YXIgdG9kb0NoYW5nZXMgPSBfLmRlYm91bmNlKGJhdGNoTG9nLCAxMDAwKTtcbiAqIE9iamVjdC5vYnNlcnZlKG1vZGVscy50b2RvLCB0b2RvQ2hhbmdlcyk7XG4gKlxuICogT2JqZWN0Lm9ic2VydmUobW9kZWxzLCBmdW5jdGlvbihjaGFuZ2VzKSB7XG4gKiAgIGlmIChfLmZpbmQoY2hhbmdlcywgeyAndXNlcic6ICd0b2RvJywgJ3R5cGUnOiAnZGVsZXRlJ30pKSB7XG4gKiAgICAgdG9kb0NoYW5nZXMuY2FuY2VsKCk7XG4gKiAgIH1cbiAqIH0sIFsnZGVsZXRlJ10pO1xuICpcbiAqIC8vIC4uLmF0IHNvbWUgcG9pbnQgYG1vZGVscy50b2RvYCBpcyBjaGFuZ2VkXG4gKiBtb2RlbHMudG9kby5jb21wbGV0ZWQgPSB0cnVlO1xuICpcbiAqIC8vIC4uLmJlZm9yZSAxIHNlY29uZCBoYXMgcGFzc2VkIGBtb2RlbHMudG9kb2AgaXMgZGVsZXRlZFxuICogLy8gd2hpY2ggY2FuY2VscyB0aGUgZGVib3VuY2VkIGB0b2RvQ2hhbmdlc2AgY2FsbFxuICogZGVsZXRlIG1vZGVscy50b2RvO1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBhcmdzLFxuICAgICAgbWF4VGltZW91dElkLFxuICAgICAgcmVzdWx0LFxuICAgICAgc3RhbXAsXG4gICAgICB0aGlzQXJnLFxuICAgICAgdGltZW91dElkLFxuICAgICAgdHJhaWxpbmdDYWxsLFxuICAgICAgbGFzdENhbGxlZCA9IDAsXG4gICAgICBtYXhXYWl0ID0gZmFsc2UsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgd2FpdCA9IHdhaXQgPCAwID8gMCA6ICgrd2FpdCB8fCAwKTtcbiAgaWYgKG9wdGlvbnMgPT09IHRydWUpIHtcbiAgICB2YXIgbGVhZGluZyA9IHRydWU7XG4gICAgdHJhaWxpbmcgPSBmYWxzZTtcbiAgfSBlbHNlIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAhIW9wdGlvbnMubGVhZGluZztcbiAgICBtYXhXYWl0ID0gJ21heFdhaXQnIGluIG9wdGlvbnMgJiYgbmF0aXZlTWF4KCtvcHRpb25zLm1heFdhaXQgfHwgMCwgd2FpdCk7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGltZW91dElkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICB9XG4gICAgaWYgKG1heFRpbWVvdXRJZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KG1heFRpbWVvdXRJZCk7XG4gICAgfVxuICAgIGxhc3RDYWxsZWQgPSAwO1xuICAgIG1heFRpbWVvdXRJZCA9IHRpbWVvdXRJZCA9IHRyYWlsaW5nQ2FsbCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXBsZXRlKGlzQ2FsbGVkLCBpZCkge1xuICAgIGlmIChpZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgICB9XG4gICAgbWF4VGltZW91dElkID0gdGltZW91dElkID0gdHJhaWxpbmdDYWxsID0gdW5kZWZpbmVkO1xuICAgIGlmIChpc0NhbGxlZCkge1xuICAgICAgbGFzdENhbGxlZCA9IG5vdygpO1xuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICAgIGlmICghdGltZW91dElkICYmICFtYXhUaW1lb3V0SWQpIHtcbiAgICAgICAgYXJncyA9IHRoaXNBcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGVsYXllZCgpIHtcbiAgICB2YXIgcmVtYWluaW5nID0gd2FpdCAtIChub3coKSAtIHN0YW1wKTtcbiAgICBpZiAocmVtYWluaW5nIDw9IDAgfHwgcmVtYWluaW5nID4gd2FpdCkge1xuICAgICAgY29tcGxldGUodHJhaWxpbmdDYWxsLCBtYXhUaW1lb3V0SWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGRlbGF5ZWQsIHJlbWFpbmluZyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbWF4RGVsYXllZCgpIHtcbiAgICBjb21wbGV0ZSh0cmFpbGluZywgdGltZW91dElkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHN0YW1wID0gbm93KCk7XG4gICAgdGhpc0FyZyA9IHRoaXM7XG4gICAgdHJhaWxpbmdDYWxsID0gdHJhaWxpbmcgJiYgKHRpbWVvdXRJZCB8fCAhbGVhZGluZyk7XG5cbiAgICBpZiAobWF4V2FpdCA9PT0gZmFsc2UpIHtcbiAgICAgIHZhciBsZWFkaW5nQ2FsbCA9IGxlYWRpbmcgJiYgIXRpbWVvdXRJZDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFtYXhUaW1lb3V0SWQgJiYgIWxlYWRpbmcpIHtcbiAgICAgICAgbGFzdENhbGxlZCA9IHN0YW1wO1xuICAgICAgfVxuICAgICAgdmFyIHJlbWFpbmluZyA9IG1heFdhaXQgLSAoc3RhbXAgLSBsYXN0Q2FsbGVkKSxcbiAgICAgICAgICBpc0NhbGxlZCA9IHJlbWFpbmluZyA8PSAwIHx8IHJlbWFpbmluZyA+IG1heFdhaXQ7XG5cbiAgICAgIGlmIChpc0NhbGxlZCkge1xuICAgICAgICBpZiAobWF4VGltZW91dElkKSB7XG4gICAgICAgICAgbWF4VGltZW91dElkID0gY2xlYXJUaW1lb3V0KG1heFRpbWVvdXRJZCk7XG4gICAgICAgIH1cbiAgICAgICAgbGFzdENhbGxlZCA9IHN0YW1wO1xuICAgICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIW1heFRpbWVvdXRJZCkge1xuICAgICAgICBtYXhUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KG1heERlbGF5ZWQsIHJlbWFpbmluZyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpc0NhbGxlZCAmJiB0aW1lb3V0SWQpIHtcbiAgICAgIHRpbWVvdXRJZCA9IGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgIH1cbiAgICBlbHNlIGlmICghdGltZW91dElkICYmIHdhaXQgIT09IG1heFdhaXQpIHtcbiAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZGVsYXllZCwgd2FpdCk7XG4gICAgfVxuICAgIGlmIChsZWFkaW5nQ2FsbCkge1xuICAgICAgaXNDYWxsZWQgPSB0cnVlO1xuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICB9XG4gICAgaWYgKGlzQ2FsbGVkICYmICF0aW1lb3V0SWQgJiYgIW1heFRpbWVvdXRJZCkge1xuICAgICAgYXJncyA9IHRoaXNBcmcgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGNhbmNlbDtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWJvdW5jZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9mdW5jdGlvbi9kZWJvdW5jZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvZ2V0TmF0aXZlJyk7XG5cbi8qIE5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTm93ID0gZ2V0TmF0aXZlKERhdGUsICdub3cnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBVbml4IGVwb2NoXG4gKiAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IERhdGVcbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZlcihmdW5jdGlvbihzdGFtcCkge1xuICogICBjb25zb2xlLmxvZyhfLm5vdygpIC0gc3RhbXApO1xuICogfSwgXy5ub3coKSk7XG4gKiAvLyA9PiBsb2dzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRvb2sgZm9yIHRoZSBkZWZlcnJlZCBmdW5jdGlvbiB0byBiZSBpbnZva2VkXG4gKi9cbnZhciBub3cgPSBuYXRpdmVOb3cgfHwgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbm93O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2RhdGUvbm93LmpzXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7fTtcblxuaWYgKCdwcm9kdWN0aW9uJyAhPSBwcm9jZXNzLmVudi5OT0RFX0VOVikge1xuICBPYmplY3QuZnJlZXplKG1vZHVsZS5leHBvcnRzKTtcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2VtcHR5L2Z1bmN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQGNvcHlyaWdodCAyMDE1LCBQcm9tZXRoZXVzIFJlc2VhcmNoLCBMTENcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXN9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb21wb25lbnQgICAgICAgICAgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IEVycm9yICAgICAgICAgICAgICBmcm9tICcuL0Vycm9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC4uLkNvbXBvbmVudC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBDb21wb25lbnQgd2hpY2ggaXMgdXNlZCB0byByZW5kZXIgZXJyb3IgaXRlbXMuXG4gICAgICovXG4gICAgRXJyb3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG5cbiAgICAvKipcbiAgICAgKiBJZiBjb21wb25lbnQgc2hvdWxkIHJlbmRlciBlcnJvcnMgZnJvbSBhbGwgdGhlIHN1YnZhbHVlcy5cbiAgICAgKi9cbiAgICBjb21wbGV0ZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBSZXN0cmljdCBzY2hlbWEgdHlwZXNcbiAgICAgKi9cbiAgICBzY2hlbWFUeXBlOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgbm9MYWJlbDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZ1xuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgRXJyb3IsXG4gICAgU2VsZjogJ2RpdidcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtTZWxmLCBFcnJvciwgbm9MYWJlbCwgY29tcGxldGUsIHNjaGVtYVR5cGUsIC4uLnByb3BzfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IGVycm9yTGlzdCA9IGNvbXBsZXRlID9cbiAgICAgIHRoaXMuZm9ybVZhbHVlLmNvbXBsZXRlRXJyb3JMaXN0IDpcbiAgICAgIHRoaXMuZm9ybVZhbHVlLmVycm9yTGlzdDtcbiAgICBpZiAoc2NoZW1hVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvckxpc3QgPSBlcnJvckxpc3QuZmlsdGVyKGVycm9yID0+XG4gICAgICAgIGVycm9yLnNjaGVtYSA/IHNjaGVtYVR5cGVbZXJyb3Iuc2NoZW1hLnR5cGVdIDogc2NoZW1hVHlwZS5ub25lKTtcbiAgICB9XG4gICAgaWYgKGVycm9yTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBsZXQgaXRlbXMgPSBlcnJvckxpc3QubWFwKChlcnJvciwgaW5kZXgpID0+XG4gICAgICA8RXJyb3JcbiAgICAgICAga2V5PXtlcnJvci5maWVsZCArICdfXycgKyBpbmRleH1cbiAgICAgICAgZXJyb3I9e2Vycm9yfVxuICAgICAgICBub0xhYmVsPXtub0xhYmVsfVxuICAgICAgICBjb21wbGV0ZT17Y29tcGxldGV9XG4gICAgICAgIC8+XG4gICAgKTtcbiAgICByZXR1cm4gPFNlbGYgey4uLnByb3BzfT57aXRlbXN9PC9TZWxmPjtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvRXJyb3JMaXN0LmpzXG4gKiovIiwiLyoqXG4gKiBAY29weXJpZ2h0IDIwMTUsIFByb21ldGhldXMgUmVzZWFyY2gsIExMQ1xuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVycm9yKHtlcnJvciwgbGFiZWwsIG5vTGFiZWwsIGNvbXBsZXRlfSkge1xuICBpZiAoIWxhYmVsICYmIGVycm9yLnNjaGVtYSkge1xuICAgIGxhYmVsID0gZXJyb3Iuc2NoZW1hLmxhYmVsO1xuICB9XG4gIGlmIChsYWJlbCAmJiBjb21wbGV0ZSAmJiAhbm9MYWJlbCkge1xuICAgIHJldHVybiA8ZGl2PntlcnJvci5zY2hlbWEubGFiZWx9OiB7ZXJyb3IubWVzc2FnZX08L2Rpdj47XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDxkaXY+e2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xuICB9XG59XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL0Vycm9yLmpzXG4gKiovIiwiLyoqXG4gKiBAY29weXJpZ2h0IDIwMTUsIFByb21ldGhldXMgUmVzZWFyY2gsIExMQ1xuICovXG5cbmltcG9ydCBtZW1vaXplICAgICAgICAgICAgICAgICAgICBmcm9tICdtZW1vaXplLWRlY29yYXRvcic7XG5pbXBvcnQgY2xvbmUgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnbG9kYXNoL2xhbmcvY2xvbmVEZWVwJztcbmltcG9ydCBzZWxlY3RWYWx1ZSAgICAgICAgICAgICAgICBmcm9tICdsb2Rhc2gvb2JqZWN0L2dldCc7XG5pbXBvcnQgc2V0ICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnbG9kYXNoL29iamVjdC9zZXQnO1xuaW1wb3J0IGVtcHR5RnVuY3Rpb24gICAgICAgICAgICAgIGZyb20gJ2VtcHR5L2Z1bmN0aW9uJztcbmltcG9ydCBtYWtlS2V5UGF0aCAgICAgICAgICAgICAgICBmcm9tICcuL2tleVBhdGgnO1xuaW1wb3J0IHtjcmVhdGVWYWxpZGF0b3IsXG4gICAgICAgIHNlbGVjdCBhcyBzZWxlY3RTY2hlbWF9ICAgZnJvbSAnLi9TY2hlbWEnO1xuXG5leHBvcnQgY2xhc3MgVmFsdWUge1xuXG4gIHNlbGVjdChrZXkpIHtcbiAgICBsZXQga2V5UGF0aCA9IHRoaXMua2V5UGF0aC5jb25jYXQobWFrZUtleVBhdGgoa2V5KSk7XG4gICAgcmV0dXJuIG5ldyBWYWx1ZUxlYWYodGhpcy5fcm9vdCwga2V5UGF0aCk7XG4gIH1cblxuICBzZXQodmFsdWUsIHF1aWV0KSB7XG4gICAgY29uc29sZS53YXJuKC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgJ1ZhbHVlLnByb3RvdHlwZS5zZXQodmFsdWUpIGlzIGRlcHJlY2F0ZWQsICcgK1xuICAgICAgJ3VzZSBWYWx1ZS5wcm90b3R5cGUudXBkYXRlKHZhbHVlKSBpbnN0ZWFkJ1xuICAgICk7XG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKHZhbHVlLCBxdWlldCk7XG4gIH1cblxuICB1cGRhdGUodmFsdWUsIHF1aWV0KSB7XG4gICAgbGV0IHJvb3RWYWx1ZSA9IGNsb25lKHRoaXMuX3Jvb3QudmFsdWUpO1xuICAgIGlmICh0aGlzLmtleVBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgICByb290VmFsdWUgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm9vdFZhbHVlID0gc2V0KHJvb3RWYWx1ZSwgdGhpcy5rZXlQYXRoLCB2YWx1ZSk7XG4gICAgfVxuICAgIGxldCBuZXh0Um9vdCA9IGNyZWF0ZVZhbHVlKFxuICAgICAgdGhpcy5fcm9vdC5zY2hlbWEsXG4gICAgICByb290VmFsdWUsXG4gICAgICB0aGlzLl9yb290Lm9uQ2hhbmdlLFxuICAgICAgdGhpcy5fcm9vdC5wYXJhbXMpO1xuICAgIGlmICghcXVpZXQpIHtcbiAgICAgIHRoaXMuX3Jvb3Qub25DaGFuZ2UobmV4dFJvb3QpO1xuICAgIH1cbiAgICByZXR1cm4gbmV4dFJvb3Q7XG4gIH1cbn1cblxuY2xhc3MgVmFsdWVSb290IGV4dGVuZHMgVmFsdWUge1xuXG4gIGtleVBhdGggPSBbXTtcbiAgcGFyZW50ID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihzY2hlbWEsIHZhbHVlLCBvbkNoYW5nZSwgcGFyYW1zLCBlcnJvckxpc3QpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX3Jvb3QgPSB0aGlzO1xuICAgIHRoaXMua2V5UGF0aCA9IFtdO1xuICAgIHRoaXMuc2NoZW1hID0gc2NoZW1hO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2U7XG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gICAgdGhpcy5lcnJvckxpc3QgPSBlcnJvckxpc3QuZmlsdGVyKGVycm9yID0+IGVycm9yLmZpZWxkID09PSAnZGF0YScpO1xuICAgIHRoaXMuY29tcGxldGVFcnJvckxpc3QgPSBlcnJvckxpc3Q7XG4gIH1cbn1cblxuY2xhc3MgVmFsdWVMZWFmIGV4dGVuZHMgVmFsdWUge1xuXG4gIGNvbnN0cnVjdG9yKHJvb3QsIGtleVBhdGgpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX3Jvb3QgPSByb290O1xuICAgIHRoaXMua2V5UGF0aCA9IGtleVBhdGg7XG4gICAgdGhpcy5zY2hlbWEgPSBzZWxlY3RTY2hlbWEocm9vdC5zY2hlbWEsIGtleVBhdGgpO1xuICAgIHRoaXMudmFsdWUgPSBzZWxlY3RWYWx1ZShyb290LnZhbHVlLCBrZXlQYXRoKTtcbiAgfVxuXG4gIGdldCBwYXJhbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jvb3QucGFyYW1zO1xuICB9XG5cbiAgQG1lbW9pemVcbiAgZ2V0IGVycm9yTGlzdCgpIHtcbiAgICBsZXQgZXJyb3JLZXlQYXRoID0gYGRhdGEuJHt0aGlzLmtleVBhdGguam9pbignLicpfWA7XG4gICAgcmV0dXJuIHRoaXMuX3Jvb3QuY29tcGxldGVFcnJvckxpc3QuZmlsdGVyKGVycm9yID0+IGVycm9yLmZpZWxkID09PSBlcnJvcktleVBhdGgpO1xuICB9XG5cbiAgQG1lbW9pemVcbiAgZ2V0IGNvbXBsZXRlRXJyb3JMaXN0KCkge1xuICAgIGxldCBlcnJvcktleVBhdGggPSBgZGF0YS4ke3RoaXMua2V5UGF0aC5qb2luKCcuJyl9YDtcbiAgICBsZXQgbGVuZ3RoID0gZXJyb3JLZXlQYXRoLmxlbmd0aDtcbiAgICByZXR1cm4gdGhpcy5fcm9vdC5jb21wbGV0ZUVycm9yTGlzdFxuICAgICAgLmZpbHRlcihlcnJvciA9PiBlcnJvci5maWVsZC5zbGljZSgwLCBsZW5ndGgpID09PSBlcnJvcktleVBhdGgpO1xuICB9XG5cbiAgZ2V0IHBhcmVudCgpIHtcbiAgICBpZiAodGhpcy5rZXlQYXRoLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3Jvb3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBrZXlQYXRoID0gdGhpcy5rZXlQYXRoLnNsaWNlKCk7XG4gICAgICBrZXlQYXRoLnBvcCgpO1xuICAgICAgcmV0dXJuIG5ldyBWYWx1ZUxlYWYoXG4gICAgICAgIHRoaXMuX3Jvb3QsXG4gICAgICAgIGtleVBhdGhcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbn1cblxuY29uc3QgTk9OX0VOVU1FUkFCTEVfUFJPUCA9IHtcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIHdyaXRhYmxlOiB0cnVlLFxuICBjb25maWd1cmFibGU6IHRydWVcbn07XG5cbmZ1bmN0aW9uIGNhY2hlKG9iaiwga2V5LCB2YWx1ZSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsuLi5OT05fRU5VTUVSQUJMRV9QUk9QLCB2YWx1ZX0pO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZShzY2hlbWEsIHZhbHVlKSB7XG4gIGlmICghc2NoZW1hKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGlmICh2YWx1ZS5fX3NjaGVtYSA9PT0gc2NoZW1hICYmIHZhbHVlLl9fZXJyb3JMaXN0KSB7XG4gICAgcmV0dXJuIHZhbHVlLl9fZXJyb3JMaXN0O1xuICB9IGVsc2Uge1xuICAgIGlmIChzY2hlbWEuX192YWxpZGF0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY2FjaGUoc2NoZW1hLCAnX192YWxpZGF0b3InLCBjcmVhdGVWYWxpZGF0b3Ioc2NoZW1hLCB7Zm9ybWF0czogc2NoZW1hLmZvcm1hdHN9KSk7XG4gICAgfVxuICAgIHNjaGVtYS5fX3ZhbGlkYXRvcih2YWx1ZSk7XG4gICAgbGV0IGVycm9yTGlzdCA9IHNjaGVtYS5fX3ZhbGlkYXRvci5lcnJvcnMgfHwgW107XG4gICAgY2FjaGUodmFsdWUsICdfX3NjaGVtYScsIHNjaGVtYSk7XG4gICAgY2FjaGUodmFsdWUsICdfX2Vycm9yTGlzdCcsIGVycm9yTGlzdCk7XG4gICAgcmV0dXJuIGVycm9yTGlzdDtcbiAgfVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHZhbHVlIGlzIGEgZm9ybSB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsdWUobWF5YmVWYWx1ZSkge1xuICByZXR1cm4gbWF5YmVWYWx1ZSBpbnN0YW5jZW9mIFZhbHVlO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyByb290IHZhbHVlLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVWYWx1ZShcbiAgICBzY2hlbWEsXG4gICAgdmFsdWUgPSB7fSxcbiAgICBvbkNoYW5nZSA9IGVtcHR5RnVuY3Rpb24sXG4gICAgcGFyYW1zID0ge30sXG4gICAgZXJyb3JMaXN0ID0gbnVsbCkge1xuICBpZiAoZXJyb3JMaXN0ID09PSBudWxsKSB7XG4gICAgZXJyb3JMaXN0ID0gdmFsaWRhdGUoc2NoZW1hLCB2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIG5ldyBWYWx1ZVJvb3Qoc2NoZW1hLCB2YWx1ZSwgb25DaGFuZ2UsIHBhcmFtcywgZXJyb3JMaXN0KTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL1ZhbHVlLmpzXG4gKiovIiwidmFyIGNvbnNvbGU7XHJcbmlmICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5jb25zb2xlKSB7XHJcbiAgICBjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGVcclxufSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5jb25zb2xlKSB7XHJcbiAgICBjb25zb2xlID0gd2luZG93LmNvbnNvbGVcclxufSBlbHNlIHtcclxuICAgIGNvbnNvbGUgPSB3aW5kb3cuY29uc29sZSA9IHt9XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBjb25zb2xlO1xyXG5mb3IodmFyIG5hbWUgaW4ge2xvZzoxLCBpbmZvOjEsIGVycm9yOjEsIHdhcm46MSwgZGlyOjEsIHRyYWNlOjEsIGFzc2VydDoxLCB0aW1lOjEsIHRpbWVFbmQ6IDF9KVxyXG5cdGlmKCFjb25zb2xlW25hbWVdKVxyXG5cdFx0Y29uc29sZVtuYW1lXSA9IGZ1bmN0aW9uKCkge307XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L25vZGUtbGlicy1icm93c2VyL21vY2svY29uc29sZS5qc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1snZGVmYXVsdCddID0gbWVtb2l6ZTtcbi8qKlxuICogQGNvcHlyaWdodCAyMDE1LCBBbmRyZXkgUG9wcCA8OG1heWRheUBnbWFpbC5jb20+XG4gKi9cblxudmFyIFNFTlRJTkVMID0ge307XG5cbmZ1bmN0aW9uIG1lbW9pemUodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XG4gIGlmICh0eXBlb2YgZGVzY3JpcHRvci52YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBfbWVtb2l6ZU1ldGhvZCh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBkZXNjcmlwdG9yLmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBfbWVtb2l6ZUdldHRlcih0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignQG1lbW9pemUgZGVjb3JhdG9yIGNhbiBiZSBhcHBsaWVkIHRvIG1ldGhvZHMgb3IgZ2V0dGVycywgZ290ICcgKyBTdHJpbmcoZGVzY3JpcHRvci52YWx1ZSkgKyAnIGluc3RlYWQnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfbWVtb2l6ZUdldHRlcih0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpIHtcbiAgdmFyIG1lbW9pemVkTmFtZSA9ICdfbWVtb2l6ZWRfJyArIG5hbWU7XG4gIHZhciBnZXQgPSBkZXNjcmlwdG9yLmdldDtcbiAgdGFyZ2V0W21lbW9pemVkTmFtZV0gPSBTRU5USU5FTDtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBkZXNjcmlwdG9yLCB7XG4gICAgZ2V0OiAoZnVuY3Rpb24gKF9nZXQpIHtcbiAgICAgIGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIF9nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgZ2V0LnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX2dldC50b1N0cmluZygpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGdldDtcbiAgICB9KShmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpc1ttZW1vaXplZE5hbWVdID09PSBTRU5USU5FTCkge1xuICAgICAgICB0aGlzW21lbW9pemVkTmFtZV0gPSBnZXQuY2FsbCh0aGlzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzW21lbW9pemVkTmFtZV07XG4gICAgfSlcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIF9tZW1vaXplTWV0aG9kKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcikge1xuICBpZiAoZGVzY3JpcHRvci52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdAbWVtb2l6ZSBkZWNvcmF0b3IgY2FuIG9ubHkgYmUgYXBwbGllZCB0byBtZXRob2RzIG9mIHplcm8gYXJndW1lbnRzJyk7XG4gIH1cbiAgdmFyIG1lbW9pemVkTmFtZSA9ICdfbWVtb2l6ZWRfJyArIG5hbWU7XG4gIHZhciB2YWx1ZSA9IGRlc2NyaXB0b3IudmFsdWU7XG4gIHRhcmdldFttZW1vaXplZE5hbWVdID0gU0VOVElORUw7XG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgZGVzY3JpcHRvciwge1xuICAgIHZhbHVlOiAoZnVuY3Rpb24gKF92YWx1ZSkge1xuICAgICAgZnVuY3Rpb24gdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiBfdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgdmFsdWUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9KShmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpc1ttZW1vaXplZE5hbWVdID09PSBTRU5USU5FTCkge1xuICAgICAgICB0aGlzW21lbW9pemVkTmFtZV0gPSB2YWx1ZS5jYWxsKHRoaXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXNbbWVtb2l6ZWROYW1lXTtcbiAgICB9KVxuICB9KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbWVtb2l6ZS1kZWNvcmF0b3IvbGliL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBiYXNlQ2xvbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlQ2xvbmUnKSxcbiAgICBiaW5kQ2FsbGJhY2sgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iaW5kQ2FsbGJhY2snKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVlcCBjbG9uZSBvZiBgdmFsdWVgLiBJZiBgY3VzdG9taXplcmAgaXMgcHJvdmlkZWQgaXQncyBpbnZva2VkXG4gKiB0byBwcm9kdWNlIHRoZSBjbG9uZWQgdmFsdWVzLiBJZiBgY3VzdG9taXplcmAgcmV0dXJucyBgdW5kZWZpbmVkYCBjbG9uaW5nXG4gKiBpcyBoYW5kbGVkIGJ5IHRoZSBtZXRob2QgaW5zdGVhZC4gVGhlIGBjdXN0b21pemVyYCBpcyBib3VuZCB0byBgdGhpc0FyZ2BcbiAqIGFuZCBpbnZva2VkIHdpdGggdXAgdG8gdGhyZWUgYXJndW1lbnQ7ICh2YWx1ZSBbLCBpbmRleHxrZXksIG9iamVjdF0pLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uIHRoZVxuICogW3N0cnVjdHVyZWQgY2xvbmUgYWxnb3JpdGhtXShodHRwOi8vd3d3LnczLm9yZy9UUi9odG1sNS9pbmZyYXN0cnVjdHVyZS5odG1sI2ludGVybmFsLXN0cnVjdHVyZWQtY2xvbmluZy1hbGdvcml0aG0pLlxuICogVGhlIGVudW1lcmFibGUgcHJvcGVydGllcyBvZiBgYXJndW1lbnRzYCBvYmplY3RzIGFuZCBvYmplY3RzIGNyZWF0ZWQgYnlcbiAqIGNvbnN0cnVjdG9ycyBvdGhlciB0aGFuIGBPYmplY3RgIGFyZSBjbG9uZWQgdG8gcGxhaW4gYE9iamVjdGAgb2JqZWN0cy4gQW5cbiAqIGVtcHR5IG9iamVjdCBpcyByZXR1cm5lZCBmb3IgdW5jbG9uZWFibGUgdmFsdWVzIHN1Y2ggYXMgZnVuY3Rpb25zLCBET00gbm9kZXMsXG4gKiBNYXBzLCBTZXRzLCBhbmQgV2Vha01hcHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBkZWVwIGNsb25lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY2xvbmluZyB2YWx1ZXMuXG4gKiBAcGFyYW0geyp9IFt0aGlzQXJnXSBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGN1c3RvbWl6ZXJgLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGRlZXAgY2xvbmVkIHZhbHVlLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgdXNlcnMgPSBbXG4gKiAgIHsgJ3VzZXInOiAnYmFybmV5JyB9LFxuICogICB7ICd1c2VyJzogJ2ZyZWQnIH1cbiAqIF07XG4gKlxuICogdmFyIGRlZXAgPSBfLmNsb25lRGVlcCh1c2Vycyk7XG4gKiBkZWVwWzBdID09PSB1c2Vyc1swXTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogLy8gdXNpbmcgYSBjdXN0b21pemVyIGNhbGxiYWNrXG4gKiB2YXIgZWwgPSBfLmNsb25lRGVlcChkb2N1bWVudC5ib2R5LCBmdW5jdGlvbih2YWx1ZSkge1xuICogICBpZiAoXy5pc0VsZW1lbnQodmFsdWUpKSB7XG4gKiAgICAgcmV0dXJuIHZhbHVlLmNsb25lTm9kZSh0cnVlKTtcbiAqICAgfVxuICogfSk7XG4gKlxuICogZWwgPT09IGRvY3VtZW50LmJvZHlcbiAqIC8vID0+IGZhbHNlXG4gKiBlbC5ub2RlTmFtZVxuICogLy8gPT4gQk9EWVxuICogZWwuY2hpbGROb2Rlcy5sZW5ndGg7XG4gKiAvLyA9PiAyMFxuICovXG5mdW5jdGlvbiBjbG9uZURlZXAodmFsdWUsIGN1c3RvbWl6ZXIsIHRoaXNBcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBjdXN0b21pemVyID09ICdmdW5jdGlvbidcbiAgICA/IGJhc2VDbG9uZSh2YWx1ZSwgdHJ1ZSwgYmluZENhbGxiYWNrKGN1c3RvbWl6ZXIsIHRoaXNBcmcsIDMpKVxuICAgIDogYmFzZUNsb25lKHZhbHVlLCB0cnVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZURlZXA7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvbGFuZy9jbG9uZURlZXAuanNcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGFycmF5Q29weSA9IHJlcXVpcmUoJy4vYXJyYXlDb3B5JyksXG4gICAgYXJyYXlFYWNoID0gcmVxdWlyZSgnLi9hcnJheUVhY2gnKSxcbiAgICBiYXNlQXNzaWduID0gcmVxdWlyZSgnLi9iYXNlQXNzaWduJyksXG4gICAgYmFzZUZvck93biA9IHJlcXVpcmUoJy4vYmFzZUZvck93bicpLFxuICAgIGluaXRDbG9uZUFycmF5ID0gcmVxdWlyZSgnLi9pbml0Q2xvbmVBcnJheScpLFxuICAgIGluaXRDbG9uZUJ5VGFnID0gcmVxdWlyZSgnLi9pbml0Q2xvbmVCeVRhZycpLFxuICAgIGluaXRDbG9uZU9iamVjdCA9IHJlcXVpcmUoJy4vaW5pdENsb25lT2JqZWN0JyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcnJheScpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vbGFuZy9pc09iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIHN1cHBvcnRlZCBieSBgXy5jbG9uZWAuICovXG52YXIgY2xvbmVhYmxlVGFncyA9IHt9O1xuY2xvbmVhYmxlVGFnc1thcmdzVGFnXSA9IGNsb25lYWJsZVRhZ3NbYXJyYXlUYWddID1cbmNsb25lYWJsZVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gY2xvbmVhYmxlVGFnc1tib29sVGFnXSA9XG5jbG9uZWFibGVUYWdzW2RhdGVUYWddID0gY2xvbmVhYmxlVGFnc1tmbG9hdDMyVGFnXSA9XG5jbG9uZWFibGVUYWdzW2Zsb2F0NjRUYWddID0gY2xvbmVhYmxlVGFnc1tpbnQ4VGFnXSA9XG5jbG9uZWFibGVUYWdzW2ludDE2VGFnXSA9IGNsb25lYWJsZVRhZ3NbaW50MzJUYWddID1cbmNsb25lYWJsZVRhZ3NbbnVtYmVyVGFnXSA9IGNsb25lYWJsZVRhZ3Nbb2JqZWN0VGFnXSA9XG5jbG9uZWFibGVUYWdzW3JlZ2V4cFRhZ10gPSBjbG9uZWFibGVUYWdzW3N0cmluZ1RhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50MTZUYWddID0gY2xvbmVhYmxlVGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbmNsb25lYWJsZVRhZ3NbZXJyb3JUYWddID0gY2xvbmVhYmxlVGFnc1tmdW5jVGFnXSA9XG5jbG9uZWFibGVUYWdzW21hcFRhZ10gPSBjbG9uZWFibGVUYWdzW3NldFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqVG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jbG9uZWAgd2l0aG91dCBzdXBwb3J0IGZvciBhcmd1bWVudCBqdWdnbGluZ1xuICogYW5kIGB0aGlzYCBiaW5kaW5nIGBjdXN0b21pemVyYCBmdW5jdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNsb25pbmcgdmFsdWVzLlxuICogQHBhcmFtIHtzdHJpbmd9IFtrZXldIFRoZSBrZXkgb2YgYHZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IGB2YWx1ZWAgYmVsb25ncyB0by5cbiAqIEBwYXJhbSB7QXJyYXl9IFtzdGFja0E9W11dIFRyYWNrcyB0cmF2ZXJzZWQgc291cmNlIG9iamVjdHMuXG4gKiBAcGFyYW0ge0FycmF5fSBbc3RhY2tCPVtdXSBBc3NvY2lhdGVzIGNsb25lcyB3aXRoIHNvdXJjZSBjb3VudGVycGFydHMuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgY2xvbmVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBiYXNlQ2xvbmUodmFsdWUsIGlzRGVlcCwgY3VzdG9taXplciwga2V5LCBvYmplY3QsIHN0YWNrQSwgc3RhY2tCKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChjdXN0b21pemVyKSB7XG4gICAgcmVzdWx0ID0gb2JqZWN0ID8gY3VzdG9taXplcih2YWx1ZSwga2V5LCBvYmplY3QpIDogY3VzdG9taXplcih2YWx1ZSk7XG4gIH1cbiAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKTtcbiAgaWYgKGlzQXJyKSB7XG4gICAgcmVzdWx0ID0gaW5pdENsb25lQXJyYXkodmFsdWUpO1xuICAgIGlmICghaXNEZWVwKSB7XG4gICAgICByZXR1cm4gYXJyYXlDb3B5KHZhbHVlLCByZXN1bHQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFnID0gb2JqVG9TdHJpbmcuY2FsbCh2YWx1ZSksXG4gICAgICAgIGlzRnVuYyA9IHRhZyA9PSBmdW5jVGFnO1xuXG4gICAgaWYgKHRhZyA9PSBvYmplY3RUYWcgfHwgdGFnID09IGFyZ3NUYWcgfHwgKGlzRnVuYyAmJiAhb2JqZWN0KSkge1xuICAgICAgcmVzdWx0ID0gaW5pdENsb25lT2JqZWN0KGlzRnVuYyA/IHt9IDogdmFsdWUpO1xuICAgICAgaWYgKCFpc0RlZXApIHtcbiAgICAgICAgcmV0dXJuIGJhc2VBc3NpZ24ocmVzdWx0LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjbG9uZWFibGVUYWdzW3RhZ11cbiAgICAgICAgPyBpbml0Q2xvbmVCeVRhZyh2YWx1ZSwgdGFnLCBpc0RlZXApXG4gICAgICAgIDogKG9iamVjdCA/IHZhbHVlIDoge30pO1xuICAgIH1cbiAgfVxuICAvLyBDaGVjayBmb3IgY2lyY3VsYXIgcmVmZXJlbmNlcyBhbmQgcmV0dXJuIGl0cyBjb3JyZXNwb25kaW5nIGNsb25lLlxuICBzdGFja0EgfHwgKHN0YWNrQSA9IFtdKTtcbiAgc3RhY2tCIHx8IChzdGFja0IgPSBbXSk7XG5cbiAgdmFyIGxlbmd0aCA9IHN0YWNrQS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChzdGFja0FbbGVuZ3RoXSA9PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHN0YWNrQltsZW5ndGhdO1xuICAgIH1cbiAgfVxuICAvLyBBZGQgdGhlIHNvdXJjZSB2YWx1ZSB0byB0aGUgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHMgYW5kIGFzc29jaWF0ZSBpdCB3aXRoIGl0cyBjbG9uZS5cbiAgc3RhY2tBLnB1c2godmFsdWUpO1xuICBzdGFja0IucHVzaChyZXN1bHQpO1xuXG4gIC8vIFJlY3Vyc2l2ZWx5IHBvcHVsYXRlIGNsb25lIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gIChpc0FyciA/IGFycmF5RWFjaCA6IGJhc2VGb3JPd24pKHZhbHVlLCBmdW5jdGlvbihzdWJWYWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0W2tleV0gPSBiYXNlQ2xvbmUoc3ViVmFsdWUsIGlzRGVlcCwgY3VzdG9taXplciwga2V5LCB2YWx1ZSwgc3RhY2tBLCBzdGFja0IpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQ2xvbmU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUNsb25lLmpzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29waWVzIHRoZSB2YWx1ZXMgb2YgYHNvdXJjZWAgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gc291cmNlIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5PVtdXSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgdG8uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlDb3B5KHNvdXJjZSwgYXJyYXkpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBzb3VyY2UubGVuZ3RoO1xuXG4gIGFycmF5IHx8IChhcnJheSA9IEFycmF5KGxlbmd0aCkpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W2luZGV4XSA9IHNvdXJjZVtpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5Q29weTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9hcnJheUNvcHkuanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZm9yRWFjaGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGNhbGxiYWNrXG4gKiBzaG9ydGhhbmRzIGFuZCBgdGhpc2AgYmluZGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlFYWNoKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkgPT09IGZhbHNlKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RWFjaDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9hcnJheUVhY2guanNcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGJhc2VDb3B5ID0gcmVxdWlyZSgnLi9iYXNlQ29weScpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuLi9vYmplY3Qva2V5cycpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmFzc2lnbmAgd2l0aG91dCBzdXBwb3J0IGZvciBhcmd1bWVudCBqdWdnbGluZyxcbiAqIG11bHRpcGxlIHNvdXJjZXMsIGFuZCBgY3VzdG9taXplcmAgZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnbihvYmplY3QsIHNvdXJjZSkge1xuICByZXR1cm4gc291cmNlID09IG51bGxcbiAgICA/IG9iamVjdFxuICAgIDogYmFzZUNvcHkoc291cmNlLCBrZXlzKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUFzc2lnbjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlQXNzaWduLmpzXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29waWVzIHByb3BlcnRpZXMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIFRoZSBwcm9wZXJ0eSBuYW1lcyB0byBjb3B5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUNvcHkoc291cmNlLCBwcm9wcywgb2JqZWN0KSB7XG4gIG9iamVjdCB8fCAob2JqZWN0ID0ge30pO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcbiAgICBvYmplY3Rba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUNvcHk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUNvcHkuanNcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2dldE5hdGl2ZScpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNBcnJheUxpa2UnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2xhbmcvaXNPYmplY3QnKSxcbiAgICBzaGltS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3NoaW1LZXlzJyk7XG5cbi8qIE5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlS2V5cyA9IGdldE5hdGl2ZShPYmplY3QsICdrZXlzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5cyhuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLmtleXMoJ2hpJyk7XG4gKiAvLyA9PiBbJzAnLCAnMSddXG4gKi9cbnZhciBrZXlzID0gIW5hdGl2ZUtleXMgPyBzaGltS2V5cyA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICB2YXIgQ3RvciA9IG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0LmNvbnN0cnVjdG9yO1xuICBpZiAoKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUgPT09IG9iamVjdCkgfHxcbiAgICAgICh0eXBlb2Ygb2JqZWN0ICE9ICdmdW5jdGlvbicgJiYgaXNBcnJheUxpa2Uob2JqZWN0KSkpIHtcbiAgICByZXR1cm4gc2hpbUtleXMob2JqZWN0KTtcbiAgfVxuICByZXR1cm4gaXNPYmplY3Qob2JqZWN0KSA/IG5hdGl2ZUtleXMob2JqZWN0KSA6IFtdO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL29iamVjdC9rZXlzLmpzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnZXRMZW5ndGggPSByZXF1aXJlKCcuL2dldExlbmd0aCcpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aChnZXRMZW5ndGgodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9pc0FycmF5TGlrZS5qc1xuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYmFzZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9iYXNlUHJvcGVydHknKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBcImxlbmd0aFwiIHByb3BlcnR5IHZhbHVlIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gYXZvaWQgYSBbSklUIGJ1Z10oaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE0Mjc5MilcbiAqIHRoYXQgYWZmZWN0cyBTYWZhcmkgb24gYXQgbGVhc3QgaU9TIDguMS04LjMgQVJNNjQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBcImxlbmd0aFwiIHZhbHVlLlxuICovXG52YXIgZ2V0TGVuZ3RoID0gYmFzZVByb3BlcnR5KCdsZW5ndGgnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRMZW5ndGg7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvZ2V0TGVuZ3RoLmpzXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucHJvcGVydHlgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5KGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVByb3BlcnR5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2Jhc2VQcm9wZXJ0eS5qc1xuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuLi9sYW5nL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcnJheScpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL2lzSW5kZXgnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuLi9vYmplY3Qva2V5c0luJyk7XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEEgZmFsbGJhY2sgaW1wbGVtZW50YXRpb24gb2YgYE9iamVjdC5rZXlzYCB3aGljaCBjcmVhdGVzIGFuIGFycmF5IG9mIHRoZVxuICogb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIHNoaW1LZXlzKG9iamVjdCkge1xuICB2YXIgcHJvcHMgPSBrZXlzSW4ob2JqZWN0KSxcbiAgICAgIHByb3BzTGVuZ3RoID0gcHJvcHMubGVuZ3RoLFxuICAgICAgbGVuZ3RoID0gcHJvcHNMZW5ndGggJiYgb2JqZWN0Lmxlbmd0aDtcblxuICB2YXIgYWxsb3dJbmRleGVzID0gISFsZW5ndGggJiYgaXNMZW5ndGgobGVuZ3RoKSAmJlxuICAgIChpc0FycmF5KG9iamVjdCkgfHwgaXNBcmd1bWVudHMob2JqZWN0KSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBbXTtcblxuICB3aGlsZSAoKytpbmRleCA8IHByb3BzTGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcbiAgICBpZiAoKGFsbG93SW5kZXhlcyAmJiBpc0luZGV4KGtleSwgbGVuZ3RoKSkgfHwgaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hpbUtleXM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvc2hpbUtleXMuanNcbiAqKiBtb2R1bGUgaWQgPSAzNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNBcnJheUxpa2UnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc09iamVjdExpa2UnKTtcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBOYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgY29ycmVjdGx5IGNsYXNzaWZpZWQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0FycmF5TGlrZSh2YWx1ZSkgJiZcbiAgICBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiYgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FyZ3VtZW50cztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9sYW5nL2lzQXJndW1lbnRzLmpzXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eXFxkKyQvO1xuXG4vKipcbiAqIFVzZWQgYXMgdGhlIFttYXhpbXVtIGxlbmd0aF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtbnVtYmVyLm1heF9zYWZlX2ludGVnZXIpXG4gKiBvZiBhbiBhcnJheS1saWtlIHZhbHVlLlxuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIHZhbHVlID0gKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyB8fCByZUlzVWludC50ZXN0KHZhbHVlKSkgPyArdmFsdWUgOiAtMTtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuICByZXR1cm4gdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0luZGV4O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2lzSW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9sYW5nL2lzQXJyYXknKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNJbmRleCcpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNMZW5ndGgnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2xhbmcvaXNPYmplY3QnKTtcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzSW4obmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYicsICdjJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqL1xuZnVuY3Rpb24ga2V5c0luKG9iamVjdCkge1xuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIH1cbiAgdmFyIGxlbmd0aCA9IG9iamVjdC5sZW5ndGg7XG4gIGxlbmd0aCA9IChsZW5ndGggJiYgaXNMZW5ndGgobGVuZ3RoKSAmJlxuICAgIChpc0FycmF5KG9iamVjdCkgfHwgaXNBcmd1bWVudHMob2JqZWN0KSkgJiYgbGVuZ3RoKSB8fCAwO1xuXG4gIHZhciBDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yLFxuICAgICAgaW5kZXggPSAtMSxcbiAgICAgIGlzUHJvdG8gPSB0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlID09PSBvYmplY3QsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBsZW5ndGggPiAwO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IChpbmRleCArICcnKTtcbiAgfVxuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKCEoc2tpcEluZGV4ZXMgJiYgaXNJbmRleChrZXksIGxlbmd0aCkpICYmXG4gICAgICAgICEoa2V5ID09ICdjb25zdHJ1Y3RvcicgJiYgKGlzUHJvdG8gfHwgIWhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5c0luO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL29iamVjdC9rZXlzSW4uanNcbiAqKiBtb2R1bGUgaWQgPSAzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGJhc2VGb3IgPSByZXF1aXJlKCcuL2Jhc2VGb3InKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi4vb2JqZWN0L2tleXMnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5mb3JPd25gIHdpdGhvdXQgc3VwcG9ydCBmb3IgY2FsbGJhY2tcbiAqIHNob3J0aGFuZHMgYW5kIGB0aGlzYCBiaW5kaW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGb3JPd24ob2JqZWN0LCBpdGVyYXRlZSkge1xuICByZXR1cm4gYmFzZUZvcihvYmplY3QsIGl0ZXJhdGVlLCBrZXlzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRm9yT3duO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2Jhc2VGb3JPd24uanNcbiAqKiBtb2R1bGUgaWQgPSA0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGNyZWF0ZUJhc2VGb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUJhc2VGb3InKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgYmFzZUZvckluYCBhbmQgYGJhc2VGb3JPd25gIHdoaWNoIGl0ZXJhdGVzXG4gKiBvdmVyIGBvYmplY3RgIHByb3BlcnRpZXMgcmV0dXJuZWQgYnkgYGtleXNGdW5jYCBpbnZva2luZyBgaXRlcmF0ZWVgIGZvclxuICogZWFjaCBwcm9wZXJ0eS4gSXRlcmF0ZWUgZnVuY3Rpb25zIG1heSBleGl0IGl0ZXJhdGlvbiBlYXJseSBieSBleHBsaWNpdGx5XG4gKiByZXR1cm5pbmcgYGZhbHNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xudmFyIGJhc2VGb3IgPSBjcmVhdGVCYXNlRm9yKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZvcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlRm9yLmpzXG4gKiogbW9kdWxlIGlkID0gNDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vdG9PYmplY3QnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgYmFzZSBmdW5jdGlvbiBmb3IgYF8uZm9ySW5gIG9yIGBfLmZvckluUmlnaHRgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGJhc2UgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VGb3IoZnJvbVJpZ2h0KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QsIGl0ZXJhdGVlLCBrZXlzRnVuYykge1xuICAgIHZhciBpdGVyYWJsZSA9IHRvT2JqZWN0KG9iamVjdCksXG4gICAgICAgIHByb3BzID0ga2V5c0Z1bmMob2JqZWN0KSxcbiAgICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoLFxuICAgICAgICBpbmRleCA9IGZyb21SaWdodCA/IGxlbmd0aCA6IC0xO1xuXG4gICAgd2hpbGUgKChmcm9tUmlnaHQgPyBpbmRleC0tIDogKytpbmRleCA8IGxlbmd0aCkpIHtcbiAgICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG4gICAgICBpZiAoaXRlcmF0ZWUoaXRlcmFibGVba2V5XSwga2V5LCBpdGVyYWJsZSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUJhc2VGb3I7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvY3JlYXRlQmFzZUZvci5qc1xuICoqIG1vZHVsZSBpZCA9IDQyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9sYW5nL2lzT2JqZWN0Jyk7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhbiBvYmplY3QgaWYgaXQncyBub3Qgb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgb2JqZWN0LlxuICovXG5mdW5jdGlvbiB0b09iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3QodmFsdWUpID8gdmFsdWUgOiBPYmplY3QodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvT2JqZWN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL3RvT2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIGFycmF5IGNsb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVBcnJheShhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gbmV3IGFycmF5LmNvbnN0cnVjdG9yKGxlbmd0aCk7XG5cbiAgLy8gQWRkIGFycmF5IHByb3BlcnRpZXMgYXNzaWduZWQgYnkgYFJlZ0V4cCNleGVjYC5cbiAgaWYgKGxlbmd0aCAmJiB0eXBlb2YgYXJyYXlbMF0gPT0gJ3N0cmluZycgJiYgaGFzT3duUHJvcGVydHkuY2FsbChhcnJheSwgJ2luZGV4JykpIHtcbiAgICByZXN1bHQuaW5kZXggPSBhcnJheS5pbmRleDtcbiAgICByZXN1bHQuaW5wdXQgPSBhcnJheS5pbnB1dDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRDbG9uZUFycmF5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2luaXRDbG9uZUFycmF5LmpzXG4gKiogbW9kdWxlIGlkID0gNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBidWZmZXJDbG9uZSA9IHJlcXVpcmUoJy4vYnVmZmVyQ2xvbmUnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGAgZmxhZ3MgZnJvbSB0aGVpciBjb2VyY2VkIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVGbGFncyA9IC9cXHcqJC87XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gb2JqZWN0IGNsb25lIGJhc2VkIG9uIGl0cyBgdG9TdHJpbmdUYWdgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIG9ubHkgc3VwcG9ydHMgY2xvbmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVCeVRhZyhvYmplY3QsIHRhZywgaXNEZWVwKSB7XG4gIHZhciBDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yO1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICByZXR1cm4gYnVmZmVyQ2xvbmUob2JqZWN0KTtcblxuICAgIGNhc2UgYm9vbFRhZzpcbiAgICBjYXNlIGRhdGVUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3IoK29iamVjdCk7XG5cbiAgICBjYXNlIGZsb2F0MzJUYWc6IGNhc2UgZmxvYXQ2NFRhZzpcbiAgICBjYXNlIGludDhUYWc6IGNhc2UgaW50MTZUYWc6IGNhc2UgaW50MzJUYWc6XG4gICAgY2FzZSB1aW50OFRhZzogY2FzZSB1aW50OENsYW1wZWRUYWc6IGNhc2UgdWludDE2VGFnOiBjYXNlIHVpbnQzMlRhZzpcbiAgICAgIHZhciBidWZmZXIgPSBvYmplY3QuYnVmZmVyO1xuICAgICAgcmV0dXJuIG5ldyBDdG9yKGlzRGVlcCA/IGJ1ZmZlckNsb25lKGJ1ZmZlcikgOiBidWZmZXIsIG9iamVjdC5ieXRlT2Zmc2V0LCBvYmplY3QubGVuZ3RoKTtcblxuICAgIGNhc2UgbnVtYmVyVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yKG9iamVjdCk7XG5cbiAgICBjYXNlIHJlZ2V4cFRhZzpcbiAgICAgIHZhciByZXN1bHQgPSBuZXcgQ3RvcihvYmplY3Quc291cmNlLCByZUZsYWdzLmV4ZWMob2JqZWN0KSk7XG4gICAgICByZXN1bHQubGFzdEluZGV4ID0gb2JqZWN0Lmxhc3RJbmRleDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRDbG9uZUJ5VGFnO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2luaXRDbG9uZUJ5VGFnLmpzXG4gKiogbW9kdWxlIGlkID0gNDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKiBOYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgQXJyYXlCdWZmZXIgPSBnbG9iYWwuQXJyYXlCdWZmZXIsXG4gICAgVWludDhBcnJheSA9IGdsb2JhbC5VaW50OEFycmF5O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiB0aGUgZ2l2ZW4gYXJyYXkgYnVmZmVyLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBidWZmZXIgVGhlIGFycmF5IGJ1ZmZlciB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtBcnJheUJ1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGFycmF5IGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gYnVmZmVyQ2xvbmUoYnVmZmVyKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgQXJyYXlCdWZmZXIoYnVmZmVyLmJ5dGVMZW5ndGgpLFxuICAgICAgdmlldyA9IG5ldyBVaW50OEFycmF5KHJlc3VsdCk7XG5cbiAgdmlldy5zZXQobmV3IFVpbnQ4QXJyYXkoYnVmZmVyKSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnVmZmVyQ2xvbmU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYnVmZmVyQ2xvbmUuanNcbiAqKiBtb2R1bGUgaWQgPSA0NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVPYmplY3Qob2JqZWN0KSB7XG4gIHZhciBDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yO1xuICBpZiAoISh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IgaW5zdGFuY2VvZiBDdG9yKSkge1xuICAgIEN0b3IgPSBPYmplY3Q7XG4gIH1cbiAgcmV0dXJuIG5ldyBDdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRDbG9uZU9iamVjdDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9pbml0Q2xvbmVPYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSA0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlkZW50aXR5ID0gcmVxdWlyZSgnLi4vdXRpbGl0eS9pZGVudGl0eScpO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUNhbGxiYWNrYCB3aGljaCBvbmx5IHN1cHBvcnRzIGB0aGlzYCBiaW5kaW5nXG4gKiBhbmQgc3BlY2lmeWluZyB0aGUgbnVtYmVyIG9mIGFyZ3VtZW50cyB0byBwcm92aWRlIHRvIGBmdW5jYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYmluZC5cbiAqIEBwYXJhbSB7Kn0gdGhpc0FyZyBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGZ1bmNgLlxuICogQHBhcmFtIHtudW1iZXJ9IFthcmdDb3VudF0gVGhlIG51bWJlciBvZiBhcmd1bWVudHMgdG8gcHJvdmlkZSB0byBgZnVuY2AuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIGNhbGxiYWNrLlxuICovXG5mdW5jdGlvbiBiaW5kQ2FsbGJhY2soZnVuYywgdGhpc0FyZywgYXJnQ291bnQpIHtcbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gaWRlbnRpdHk7XG4gIH1cbiAgaWYgKHRoaXNBcmcgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBmdW5jO1xuICB9XG4gIHN3aXRjaCAoYXJnQ291bnQpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCB2YWx1ZSk7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pIHtcbiAgICAgIHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgdmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKTtcbiAgICB9O1xuICAgIGNhc2UgNDogcmV0dXJuIGZ1bmN0aW9uKGFjY3VtdWxhdG9yLCB2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pIHtcbiAgICAgIHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbik7XG4gICAgfTtcbiAgICBjYXNlIDU6IHJldHVybiBmdW5jdGlvbih2YWx1ZSwgb3RoZXIsIGtleSwgb2JqZWN0LCBzb3VyY2UpIHtcbiAgICAgIHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgdmFsdWUsIG90aGVyLCBrZXksIG9iamVjdCwgc291cmNlKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJpbmRDYWxsYmFjaztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iaW5kQ2FsbGJhY2suanNcbiAqKiBtb2R1bGUgaWQgPSA0OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBmaXJzdCBhcmd1bWVudCBwcm92aWRlZCB0byBpdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxpdHlcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQW55IHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgYHZhbHVlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ3VzZXInOiAnZnJlZCcgfTtcbiAqXG4gKiBfLmlkZW50aXR5KG9iamVjdCkgPT09IG9iamVjdDtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlkZW50aXR5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL3V0aWxpdHkvaWRlbnRpdHkuanNcbiAqKiBtb2R1bGUgaWQgPSA0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGJhc2VHZXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlR2V0JyksXG4gICAgdG9QYXRoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvdG9QYXRoJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgcHJvcGVydHkgdmFsdWUgYXQgYHBhdGhgIG9mIGBvYmplY3RgLiBJZiB0aGUgcmVzb2x2ZWQgdmFsdWUgaXNcbiAqIGB1bmRlZmluZWRgIHRoZSBgZGVmYXVsdFZhbHVlYCBpcyB1c2VkIGluIGl0cyBwbGFjZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gW2RlZmF1bHRWYWx1ZV0gVGhlIHZhbHVlIHJldHVybmVkIGlmIHRoZSByZXNvbHZlZCB2YWx1ZSBpcyBgdW5kZWZpbmVkYC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiBbeyAnYic6IHsgJ2MnOiAzIH0gfV0gfTtcbiAqXG4gKiBfLmdldChvYmplY3QsICdhWzBdLmIuYycpO1xuICogLy8gPT4gM1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgWydhJywgJzAnLCAnYicsICdjJ10pO1xuICogLy8gPT4gM1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgJ2EuYi5jJywgJ2RlZmF1bHQnKTtcbiAqIC8vID0+ICdkZWZhdWx0J1xuICovXG5mdW5jdGlvbiBnZXQob2JqZWN0LCBwYXRoLCBkZWZhdWx0VmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogYmFzZUdldChvYmplY3QsIHRvUGF0aChwYXRoKSwgKHBhdGggKyAnJykpO1xuICByZXR1cm4gcmVzdWx0ID09PSB1bmRlZmluZWQgPyBkZWZhdWx0VmFsdWUgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL29iamVjdC9nZXQuanNcbiAqKiBtb2R1bGUgaWQgPSA1MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi90b09iamVjdCcpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RyaW5nIHBhdGhzXG4gKiBhbmQgZGVmYXVsdCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbcGF0aEtleV0gVGhlIGtleSByZXByZXNlbnRhdGlvbiBvZiBwYXRoLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc29sdmVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0KG9iamVjdCwgcGF0aCwgcGF0aEtleSkge1xuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHBhdGhLZXkgIT09IHVuZGVmaW5lZCAmJiBwYXRoS2V5IGluIHRvT2JqZWN0KG9iamVjdCkpIHtcbiAgICBwYXRoID0gW3BhdGhLZXldO1xuICB9XG4gIHZhciBpbmRleCA9IDAsXG4gICAgICBsZW5ndGggPSBwYXRoLmxlbmd0aDtcblxuICB3aGlsZSAob2JqZWN0ICE9IG51bGwgJiYgaW5kZXggPCBsZW5ndGgpIHtcbiAgICBvYmplY3QgPSBvYmplY3RbcGF0aFtpbmRleCsrXV07XG4gIH1cbiAgcmV0dXJuIChpbmRleCAmJiBpbmRleCA9PSBsZW5ndGgpID8gb2JqZWN0IDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUdldC5qc1xuICoqIG1vZHVsZSBpZCA9IDUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYmFzZVRvU3RyaW5nID0gcmVxdWlyZSgnLi9iYXNlVG9TdHJpbmcnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZVByb3BOYW1lID0gL1teLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcblxcXFxdfFxcXFwuKSo/KVxcMilcXF0vZztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYmFja3NsYXNoZXMgaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVFc2NhcGVDaGFyID0gL1xcXFwoXFxcXCk/L2c7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBwcm9wZXJ0eSBwYXRoIGFycmF5IGlmIGl0J3Mgbm90IG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gdG9QYXRoKHZhbHVlKSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIGJhc2VUb1N0cmluZyh2YWx1ZSkucmVwbGFjZShyZVByb3BOYW1lLCBmdW5jdGlvbihtYXRjaCwgbnVtYmVyLCBxdW90ZSwgc3RyaW5nKSB7XG4gICAgcmVzdWx0LnB1c2gocXVvdGUgPyBzdHJpbmcucmVwbGFjZShyZUVzY2FwZUNoYXIsICckMScpIDogKG51bWJlciB8fCBtYXRjaCkpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1BhdGg7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvdG9QYXRoLmpzXG4gKiogbW9kdWxlIGlkID0gNTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyBpZiBpdCdzIG5vdCBvbmUuIEFuIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZFxuICogZm9yIGBudWxsYCBvciBgdW5kZWZpbmVkYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogKHZhbHVlICsgJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUb1N0cmluZztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlVG9TdHJpbmcuanNcbiAqKiBtb2R1bGUgaWQgPSA1M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc0luZGV4JyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc0tleScpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vbGFuZy9pc09iamVjdCcpLFxuICAgIHRvUGF0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3RvUGF0aCcpO1xuXG4vKipcbiAqIFNldHMgdGhlIHByb3BlcnR5IHZhbHVlIG9mIGBwYXRoYCBvbiBgb2JqZWN0YC4gSWYgYSBwb3J0aW9uIG9mIGBwYXRoYFxuICogZG9lcyBub3QgZXhpc3QgaXQncyBjcmVhdGVkLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gYXVnbWVudC5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IFt7ICdiJzogeyAnYyc6IDMgfSB9XSB9O1xuICpcbiAqIF8uc2V0KG9iamVjdCwgJ2FbMF0uYi5jJywgNCk7XG4gKiBjb25zb2xlLmxvZyhvYmplY3QuYVswXS5iLmMpO1xuICogLy8gPT4gNFxuICpcbiAqIF8uc2V0KG9iamVjdCwgJ3hbMF0ueS56JywgNSk7XG4gKiBjb25zb2xlLmxvZyhvYmplY3QueFswXS55LnopO1xuICogLy8gPT4gNVxuICovXG5mdW5jdGlvbiBzZXQob2JqZWN0LCBwYXRoLCB2YWx1ZSkge1xuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG4gIHZhciBwYXRoS2V5ID0gKHBhdGggKyAnJyk7XG4gIHBhdGggPSAob2JqZWN0W3BhdGhLZXldICE9IG51bGwgfHwgaXNLZXkocGF0aCwgb2JqZWN0KSkgPyBbcGF0aEtleV0gOiB0b1BhdGgocGF0aCk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwYXRoLmxlbmd0aCxcbiAgICAgIGxhc3RJbmRleCA9IGxlbmd0aCAtIDEsXG4gICAgICBuZXN0ZWQgPSBvYmplY3Q7XG5cbiAgd2hpbGUgKG5lc3RlZCAhPSBudWxsICYmICsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcGF0aFtpbmRleF07XG4gICAgaWYgKGlzT2JqZWN0KG5lc3RlZCkpIHtcbiAgICAgIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICAgICAgbmVzdGVkW2tleV0gPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAobmVzdGVkW2tleV0gPT0gbnVsbCkge1xuICAgICAgICBuZXN0ZWRba2V5XSA9IGlzSW5kZXgocGF0aFtpbmRleCArIDFdKSA/IFtdIDoge307XG4gICAgICB9XG4gICAgfVxuICAgIG5lc3RlZCA9IG5lc3RlZFtrZXldO1xuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL29iamVjdC9zZXQuanNcbiAqKiBtb2R1bGUgaWQgPSA1NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9sYW5nL2lzQXJyYXknKSxcbiAgICB0b09iamVjdCA9IHJlcXVpcmUoJy4vdG9PYmplY3QnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlSXNEZWVwUHJvcCA9IC9cXC58XFxbKD86W15bXFxdXSp8KFtcIiddKSg/Oig/IVxcMSlbXlxcblxcXFxdfFxcXFwuKSo/XFwxKVxcXS8sXG4gICAgcmVJc1BsYWluUHJvcCA9IC9eXFx3KiQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSBhbmQgbm90IGEgcHJvcGVydHkgcGF0aC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5KHZhbHVlLCBvYmplY3QpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIGlmICgodHlwZSA9PSAnc3RyaW5nJyAmJiByZUlzUGxhaW5Qcm9wLnRlc3QodmFsdWUpKSB8fCB0eXBlID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciByZXN1bHQgPSAhcmVJc0RlZXBQcm9wLnRlc3QodmFsdWUpO1xuICByZXR1cm4gcmVzdWx0IHx8IChvYmplY3QgIT0gbnVsbCAmJiB2YWx1ZSBpbiB0b09iamVjdChvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9pc0tleS5qc1xuICoqIG1vZHVsZSBpZCA9IDU1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEBjb3B5cmlnaHQgMjAxNSwgUHJvbWV0aGV1cyBSZXNlYXJjaCwgTExDXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IF9jcmVhdGVWYWxpZGF0b3IgZnJvbSAnLi9fc2NoZW1hJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZhbGlkYXRvcihzY2hlbWEsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IHtcbiAgICAuLi5vcHRpb25zLFxuICAgIGdyZWVkeTogdHJ1ZSxcbiAgICB1bmRlZmluZWRBc09iamVjdDogdHJ1ZSxcbiAgICBudWxsQXNPYmplY3Q6IHRydWUsXG4gICAgdW5kZWZpbmVkQXNBcnJheTogdHJ1ZSxcbiAgICBudWxsQXNVbmRlZmluZWQ6IHRydWUsXG4gICAgbnVsbEFzQXJyYXk6IHRydWUsXG4gICAgbnVsbEFzQm90dG9tVHlwZTogdHJ1ZVxuICB9O1xuICByZXR1cm4gX2NyZWF0ZVZhbGlkYXRvcihzY2hlbWEsIG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBfZ2VuZXJhdGVTY2hlbWFCdWlsZGVyKHR5cGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGJ1aWxkZXIocGFyYW1zKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGUsXG4gICAgICBpc1JlcXVpcmVkOiBwYXJhbXMgPyAhIXBhcmFtcy5pc1JlcXVpcmVkIDogZmFsc2UsXG4gICAgICAuLi5wYXJhbXNcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0KHByb3BlcnRpZXMsIHBhcmFtcykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdvYmplY3QnLFxuICAgIHByb3BlcnRpZXMsXG4gICAgcmVxdWlyZWQ6IE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLmZpbHRlcihrID0+IHByb3BlcnRpZXNba10uaXNSZXF1aXJlZCksXG4gICAgaXNSZXF1aXJlZDogcGFyYW1zID8gISFwYXJhbXMuaXNSZXF1aXJlZCA6IGZhbHNlLFxuICAgIC4uLnBhcmFtc1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXkoaXRlbXMsIHBhcmFtcykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdhcnJheScsXG4gICAgaXRlbXMsXG4gICAgaXNSZXF1aXJlZDogcGFyYW1zID8gISFwYXJhbXMuaXNSZXF1aXJlZCA6IGZhbHNlLFxuICAgIC4uLnBhcmFtc1xuICB9O1xufVxuXG5leHBvcnQgbGV0IHN0cmluZyA9IF9nZW5lcmF0ZVNjaGVtYUJ1aWxkZXIoJ3N0cmluZycpO1xuZXhwb3J0IGxldCBudW1iZXIgPSBfZ2VuZXJhdGVTY2hlbWFCdWlsZGVyKCdudW1iZXInKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdChzY2hlbWEsIGtleVBhdGgpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGtleVBhdGgubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoIXNjaGVtYSkge1xuICAgICAgcmV0dXJuIHNjaGVtYTtcbiAgICB9XG4gICAgc2NoZW1hID0gX3NlbGVjdChzY2hlbWEsIGtleVBhdGhbaV0pO1xuICB9XG4gIHJldHVybiBzY2hlbWE7XG59XG5cbmZ1bmN0aW9uIF9zZWxlY3Qoc2NoZW1hLCBrZXkpIHtcbiAgaWYgKHNjaGVtYSkge1xuICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGxldCBzdWJTY2hlbWEgPSBzY2hlbWEucHJvcGVydGllcyA/XG4gICAgICAgIHNjaGVtYS5wcm9wZXJ0aWVzW2tleV0gOlxuICAgICAgICB1bmRlZmluZWQ7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShzY2hlbWEucmVxdWlyZWQpKSB7XG4gICAgICAgIC8vIHRyYW5zZmVyIHJlcXVpcmVkIGluZm8gb250byBzY2hlbWFcbiAgICAgICAgc3ViU2NoZW1hID0ge1xuICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgIC4uLnN1YlNjaGVtYSxcbiAgICAgICAgICBpc1JlcXVpcmVkOiBzY2hlbWEucmVxdWlyZWQuaW5kZXhPZihrZXkpICE9PSAtMVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN1YlNjaGVtYTtcbiAgICB9IGVsc2UgaWYgKHNjaGVtYS50eXBlID09PSAnYXJyYXknKSB7XG4gICAgICBpZiAoc2NoZW1hLml0ZW1zKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNjaGVtYS5pdGVtcykpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtZGVwdGhcbiAgICAgICAgICByZXR1cm4gc2NoZW1hLml0ZW1zW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHNjaGVtYS5pdGVtcztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke0pTT04uc3RyaW5naWZ5KHNjaGVtYSl9ICR7a2V5fWApO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvU2NoZW1hLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZ2Vub2JqICAgICAgPSByZXF1aXJlKCdnZW5lcmF0ZS1vYmplY3QtcHJvcGVydHknKVxudmFyIGdlbmZ1biAgICAgID0gcmVxdWlyZSgnZ2VuZXJhdGUtZnVuY3Rpb24nKVxudmFyIGpzb25wb2ludGVyID0gcmVxdWlyZSgnanNvbnBvaW50ZXInKVxudmFyIHh0ZW5kICAgICAgID0gcmVxdWlyZSgneHRlbmQnKVxudmFyIGZvcm1hdHMgICAgID0gcmVxdWlyZSgnLi9mb3JtYXRzJylcblxudmFyIGdldCA9IGZ1bmN0aW9uKG9iaiwgYWRkaXRpb25hbFNjaGVtYXMsIHB0cikge1xuICBpZiAoL15odHRwcz86XFwvXFwvLy50ZXN0KHB0cikpIHJldHVybiBudWxsXG5cbiAgdmFyIHZpc2l0ID0gZnVuY3Rpb24oc3ViKSB7XG4gICAgaWYgKHN1YiAmJiBzdWIuaWQgPT09IHB0cikgcmV0dXJuIHN1YlxuICAgIGlmICh0eXBlb2Ygc3ViICE9PSAnb2JqZWN0JyB8fCAhc3ViKSByZXR1cm4gbnVsbFxuICAgIHJldHVybiBPYmplY3Qua2V5cyhzdWIpLnJlZHVjZShmdW5jdGlvbihyZXMsIGspIHtcbiAgICAgIHJldHVybiByZXMgfHwgdmlzaXQoc3ViW2tdKVxuICAgIH0sIG51bGwpXG4gIH1cblxuICB2YXIgcmVzID0gdmlzaXQob2JqKVxuICBpZiAocmVzKSByZXR1cm4gcmVzXG5cbiAgcHRyID0gcHRyLnJlcGxhY2UoL14jLywgJycpXG4gIHB0ciA9IHB0ci5yZXBsYWNlKC9cXC8kLywgJycpXG5cbiAgdHJ5IHtcbiAgICByZXR1cm4ganNvbnBvaW50ZXIuZ2V0KG9iaiwgZGVjb2RlVVJJKHB0cikpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHZhciBvdGhlciA9IGFkZGl0aW9uYWxTY2hlbWFzW3B0cl0gfHwgYWRkaXRpb25hbFNjaGVtYXNbcHRyLnJlcGxhY2UoL14jLywgJycpXVxuICAgIHJldHVybiBvdGhlciB8fCBudWxsXG4gIH1cbn1cblxudmFyIHNwbGl0TmFtZSA9IC9bXFxbXFxdXS87XG5cbnZhciBmb3JtYXROYW1lID0gZnVuY3Rpb24oZmllbGQpIHtcbiAgZmllbGQgPSBmaWVsZC5yZXBsYWNlKC9cXFsvZywgJ1tcXHUwMDAxJykuc3BsaXQoc3BsaXROYW1lKTtcbiAgdmFyIGZvcm1hdHRlZCA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGZpZWxkLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBhcnQgPSBmaWVsZFtpXTtcbiAgICBpZiAocGFydFswXSA9PT0gJ1xcdTAwMDEnKSB7XG4gICAgICBmb3JtYXR0ZWQucHVzaChKU09OLnN0cmluZ2lmeSgnLicpKTtcbiAgICAgIGZvcm1hdHRlZC5wdXNoKHBhcnQuc2xpY2UoMSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JtYXR0ZWQucHVzaChKU09OLnN0cmluZ2lmeShwYXJ0KSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBmb3JtYXR0ZWQuam9pbignKycpO1xufVxuXG52YXIgdHlwZXMgPSB7fVxuXG50eXBlcy5hbnkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICd0cnVlJ1xufVxuXG50eXBlcy5udWxsID0gZnVuY3Rpb24obmFtZSkge1xuICByZXR1cm4gbmFtZSsnID09PSBudWxsJ1xufVxuXG50eXBlcy5ib29sZWFuID0gZnVuY3Rpb24obmFtZSkge1xuICByZXR1cm4gJ3R5cGVvZiAnK25hbWUrJyA9PT0gXCJib29sZWFuXCInXG59XG5cbnR5cGVzLmFycmF5ID0gZnVuY3Rpb24obmFtZSkge1xuICByZXR1cm4gJ0FycmF5LmlzQXJyYXkoJytuYW1lKycpJ1xufVxuXG50eXBlcy5vYmplY3QgPSBmdW5jdGlvbihuYW1lKSB7XG4gIHJldHVybiAndHlwZW9mICcrbmFtZSsnID09PSBcIm9iamVjdFwiICYmICcrbmFtZSsnICYmICFBcnJheS5pc0FycmF5KCcrbmFtZSsnKSdcbn1cblxudHlwZXMubnVtYmVyID0gZnVuY3Rpb24obmFtZSkge1xuICByZXR1cm4gJ3R5cGVvZiAnK25hbWUrJyA9PT0gXCJudW1iZXJcIidcbn1cblxudHlwZXMuaW50ZWdlciA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgcmV0dXJuICd0eXBlb2YgJytuYW1lKycgPT09IFwibnVtYmVyXCIgJiYgKE1hdGguZmxvb3IoJytuYW1lKycpID09PSAnK25hbWUrJyB8fCAnK25hbWUrJyA+IDkwMDcxOTkyNTQ3NDA5OTIgfHwgJytuYW1lKycgPCAtOTAwNzE5OTI1NDc0MDk5MiknXG59XG5cbnR5cGVzLnN0cmluZyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgcmV0dXJuICd0eXBlb2YgJytuYW1lKycgPT09IFwic3RyaW5nXCInXG59XG5cbnZhciB1bmlxdWUgPSBmdW5jdGlvbihhcnJheSkge1xuICB2YXIgbGlzdCA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBsaXN0LnB1c2godHlwZW9mIGFycmF5W2ldID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGFycmF5W2ldKSA6IGFycmF5W2ldKVxuICB9XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChsaXN0LmluZGV4T2YobGlzdFtpXSkgIT09IGkpIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbnZhciB0b1R5cGUgPSBmdW5jdGlvbihub2RlKSB7XG4gIHJldHVybiBub2RlLnR5cGVcbn1cblxudmFyIGNvbXBpbGUgPSBmdW5jdGlvbihzY2hlbWEsIGNhY2hlLCByb290LCByZXBvcnRlciwgb3B0cykge1xuICB2YXIgZm10cyA9IG9wdHMgPyB4dGVuZChmb3JtYXRzLCBvcHRzLmZvcm1hdHMpIDogZm9ybWF0c1xuICB2YXIgc2NvcGUgPSB7dW5pcXVlOnVuaXF1ZSwgZm9ybWF0czpmbXRzfVxuICB2YXIgdmVyYm9zZSA9IG9wdHMgPyAhIW9wdHMudmVyYm9zZSA6IGZhbHNlO1xuICB2YXIgdW5kZWZpbmVkQXNPYmplY3QgPSBvcHRzID8gISFvcHRzLnVuZGVmaW5lZEFzT2JqZWN0IDogZmFsc2U7XG4gIHZhciBudWxsQXNPYmplY3QgPSBvcHRzID8gISFvcHRzLm51bGxBc09iamVjdCA6IGZhbHNlO1xuICB2YXIgbnVsbEFzVW5kZWZpbmVkID0gb3B0cyA/ICEhb3B0cy5udWxsQXNVbmRlZmluZWQgOiBmYWxzZTtcbiAgdmFyIHVuZGVmaW5lZEFzQXJyYXkgPSBvcHRzID8gISFvcHRzLnVuZGVmaW5lZEFzQXJyYXkgOiBmYWxzZTtcbiAgdmFyIG51bGxBc0FycmF5ID0gb3B0cyA/ICEhb3B0cy5udWxsQXNBcnJheSA6IGZhbHNlO1xuICB2YXIgZ3JlZWR5ID0gb3B0cyAmJiBvcHRzLmdyZWVkeSAhPT0gdW5kZWZpbmVkID9cbiAgICBvcHRzLmdyZWVkeSA6IGZhbHNlO1xuXG4gIHZhciBzeW1zID0ge31cbiAgdmFyIGdlbnN5bSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gbmFtZSsoc3ltc1tuYW1lXSA9IChzeW1zW25hbWVdIHx8IDApKzEpXG4gIH1cblxuICB2YXIgcmV2ZXJzZVBhdHRlcm5zID0ge31cbiAgdmFyIHBhdHRlcm5zID0gZnVuY3Rpb24ocCkge1xuICAgIGlmIChyZXZlcnNlUGF0dGVybnNbcF0pIHJldHVybiByZXZlcnNlUGF0dGVybnNbcF1cbiAgICB2YXIgbiA9IGdlbnN5bSgncGF0dGVybicpXG4gICAgc2NvcGVbbl0gPSBuZXcgUmVnRXhwKHApXG4gICAgcmV2ZXJzZVBhdHRlcm5zW3BdID0gblxuICAgIHJldHVybiBuXG4gIH1cblxuICB2YXIgdmFycyA9IFsnaScsJ2onLCdrJywnbCcsJ20nLCduJywnbycsJ3AnLCdxJywncicsJ3MnLCd0JywndScsJ3YnLCd4JywneScsJ3onXVxuICB2YXIgZ2VubG9vcCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFycy5zaGlmdCgpXG4gICAgdmFycy5wdXNoKHYrdlswXSlcbiAgICByZXR1cm4gdlxuICB9XG5cbiAgdmFyIHZpc2l0ID0gZnVuY3Rpb24obmFtZSwgX2RhdGFTeW0sIG5vZGUsIHJlcG9ydGVyLCBmaWx0ZXIpIHtcbiAgICB2YXIgcHJvcGVydGllcyA9IG5vZGUucHJvcGVydGllc1xuICAgIHZhciB0eXBlID0gbm9kZS50eXBlXG4gICAgdmFyIHR1cGxlID0gZmFsc2VcblxuICAgIHZhciBkYXRhU3ltID0gZ2Vuc3ltKCdkYXRhJyk7XG4gICAgdmFsaWRhdGUoJ3ZhciAlcyA9ICVzJywgZGF0YVN5bSwgX2RhdGFTeW0pO1xuXG4gICAgdmFyIG5vZGVTeW0gPSBnZW5zeW0oJ25vZGUnKVxuICAgIHNjb3BlW25vZGVTeW1dID0gbm9kZTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KG5vZGUuaXRlbXMpKSB7IC8vIHR1cGxlIHR5cGVcbiAgICAgIHByb3BlcnRpZXMgPSB7fVxuICAgICAgbm9kZS5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIGkpIHtcbiAgICAgICAgcHJvcGVydGllc1tpXSA9IGl0ZW1cbiAgICAgIH0pXG4gICAgICB0eXBlID0gJ2FycmF5J1xuICAgICAgdHVwbGUgPSB0cnVlXG4gICAgfVxuXG4gICAgdmFyIGluZGVudCA9IDBcbiAgICB2YXIgZXJyb3IgPSBmdW5jdGlvbihtc2csIHByb3AsIHZhbHVlLCBzY2hlbWEpIHtcbiAgICAgIHZhbGlkYXRlKCdlcnJvcnMrKycpXG4gICAgICBpZiAocmVwb3J0ZXIgPT09IHRydWUpIHtcbiAgICAgICAgdmFsaWRhdGUoJ2lmICh2YWxpZGF0ZS5lcnJvcnMgPT09IG51bGwpIHZhbGlkYXRlLmVycm9ycyA9IFtdJylcbiAgICAgICAgaWYgKHZlcmJvc2UpIHtcbiAgICAgICAgICB2YWxpZGF0ZSgndmFsaWRhdGUuZXJyb3JzLnB1c2goe2ZpZWxkOiVzLG1lc3NhZ2U6JXMsdmFsdWU6JXMsc2NoZW1hOiVzfSknLCBmb3JtYXROYW1lKHByb3AgfHwgbmFtZSksIEpTT04uc3RyaW5naWZ5KG1zZyksIHZhbHVlIHx8IG5hbWUsIHNjaGVtYSB8fCBub2RlU3ltKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlKCd2YWxpZGF0ZS5lcnJvcnMucHVzaCh7ZmllbGQ6JXMsbWVzc2FnZTolcyxzY2hlbWE6JXN9KScsIGZvcm1hdE5hbWUocHJvcCB8fCBuYW1lKSwgSlNPTi5zdHJpbmdpZnkobXNnKSwgc2NoZW1hIHx8IG5vZGVTeW0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGVycm9yRnJvbVN5bSA9IGZ1bmN0aW9uKHN5bSwgc2NoZW1hKSB7XG4gICAgICB2YWxpZGF0ZSgnZXJyb3JzKysnKVxuICAgICAgaWYgKHJlcG9ydGVyID09PSB0cnVlKSB7XG4gICAgICAgIHZhbGlkYXRlKCdpZiAodmFsaWRhdGUuZXJyb3JzID09PSBudWxsKSB2YWxpZGF0ZS5lcnJvcnMgPSBbXScpXG4gICAgICAgIGlmICh2ZXJib3NlKSB7XG4gICAgICAgICAgdmFsaWRhdGUoJ3ZhbGlkYXRlLmVycm9ycy5wdXNoKHtmaWVsZDolcyxtZXNzYWdlOiVzLHZhbHVlOiVzLHNjaGVtYTolc30pJywgZm9ybWF0TmFtZShuYW1lKSwgc3ltLCBuYW1lLCBzY2hlbWEgfHwgbm9kZVN5bSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZSgndmFsaWRhdGUuZXJyb3JzLnB1c2goe2ZpZWxkOiVzLG1lc3NhZ2U6JXMsc2NoZW1hOiVzfSknLCBmb3JtYXROYW1lKG5hbWUpLCBzeW0sIHNjaGVtYSB8fCBub2RlU3ltKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5vZGUucmVxdWlyZWQgPT09IHRydWUpIHtcbiAgICAgIGluZGVudCsrXG4gICAgICBpZiAobnVsbEFzVW5kZWZpbmVkKSB7XG4gICAgICAgIHZhbGlkYXRlKCdpZiAoJXMgPT0gdW5kZWZpbmVkKSB7JywgZGF0YVN5bSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbGlkYXRlKCdpZiAoJXMgPT09IHVuZGVmaW5lZCkgeycsIGRhdGFTeW0pXG4gICAgICB9XG4gICAgICBlcnJvcignaXMgcmVxdWlyZWQnKVxuICAgICAgdmFsaWRhdGUoJ30gZWxzZSB7JylcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG5vZGUudHlwZSA9PT0gJ29iamVjdCcgJiYgKHVuZGVmaW5lZEFzT2JqZWN0IHx8IG51bGxBc09iamVjdCkpIHtcbiAgICAgICAgaWYgKHVuZGVmaW5lZEFzT2JqZWN0ICYmIG51bGxBc09iamVjdCkge1xuICAgICAgICAgIHZhbGlkYXRlKCdpZiAoJXMgPT0gbnVsbCkgJXMgPSB7fScsIGRhdGFTeW0sIGRhdGFTeW0pO1xuICAgICAgICB9IGVsc2UgaWYgKHVuZGVmaW5lZEFzT2JqZWN0KSB7XG4gICAgICAgICAgdmFsaWRhdGUoJ2lmICglcyA9PT0gdW5kZWZpbmVkKSAlcyA9IHt9JywgZGF0YVN5bSwgZGF0YVN5bSk7XG4gICAgICAgIH0gZWxzZSBpZiAobnVsbEFzT2JqZWN0KSB7XG4gICAgICAgICAgdmFsaWRhdGUoJ2lmICglcyA9PT0gbnVsbCkgJXMgPSB7fScsIGRhdGFTeW0sIGRhdGFTeW0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG5vZGUudHlwZSA9PT0gJ2FycmF5JyAmJiAodW5kZWZpbmVkQXNBcnJheSB8fCBudWxsQXNBcnJheSkpIHtcbiAgICAgICAgaWYgKHVuZGVmaW5lZEFzQXJyYXkgJiYgbnVsbEFzQXJyYXkpIHtcbiAgICAgICAgICB2YWxpZGF0ZSgnaWYgKCVzID09IG51bGwpICVzID0gW10nLCBkYXRhU3ltLCBkYXRhU3ltKTtcbiAgICAgICAgfSBlbHNlIGlmICh1bmRlZmluZWRBc0FycmF5KSB7XG4gICAgICAgICAgdmFsaWRhdGUoJ2lmICglcyA9PT0gdW5kZWZpbmVkKSAlcyA9IFtdJywgZGF0YVN5bSwgZGF0YVN5bSk7XG4gICAgICAgIH0gZWxzZSBpZiAobnVsbEFzQXJyYXkpIHtcbiAgICAgICAgICB2YWxpZGF0ZSgnaWYgKCVzID09PSBudWxsKSAlcyA9IFtdJywgZGF0YVN5bSwgZGF0YVN5bSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGVudCsrXG4gICAgICAgIGlmIChudWxsQXNVbmRlZmluZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZSgnaWYgKCVzICE9IHVuZGVmaW5lZCkgeycsIGRhdGFTeW0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGUoJ2lmICglcyAhPT0gdW5kZWZpbmVkKSB7JywgZGF0YVN5bSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhciB2YWxpZCA9IFtdLmNvbmNhdCh0eXBlKVxuICAgICAgLm1hcChmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiB0eXBlc1t0IHx8ICdhbnknXShkYXRhU3ltKVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcgfHwgJykgfHwgJ3RydWUnXG5cbiAgICBpZiAodmFsaWQgIT09ICd0cnVlJykge1xuICAgICAgaW5kZW50KytcbiAgICAgIHZhbGlkYXRlKCdpZiAoISglcykpIHsnLCB2YWxpZClcbiAgICAgIGVycm9yKCdpcyB0aGUgd3JvbmcgdHlwZScpXG4gICAgICB2YWxpZGF0ZSgnfSBlbHNlIHsnKVxuICAgIH1cblxuICAgIGlmICh0dXBsZSkge1xuICAgICAgaWYgKG5vZGUuYWRkaXRpb25hbEl0ZW1zID09PSBmYWxzZSkge1xuICAgICAgICB2YWxpZGF0ZSgnaWYgKCVzLmxlbmd0aCA+ICVkKSB7JywgZGF0YVN5bSwgbm9kZS5pdGVtcy5sZW5ndGgpXG4gICAgICAgIGVycm9yKCdoYXMgYWRkaXRpb25hbCBpdGVtcycpXG4gICAgICAgIHZhbGlkYXRlKCd9JylcbiAgICAgIH0gZWxzZSBpZiAobm9kZS5hZGRpdGlvbmFsSXRlbXMpIHtcbiAgICAgICAgdmFyIGkgPSBnZW5sb29wKClcbiAgICAgICAgdmFsaWRhdGUoJ2ZvciAodmFyICVzID0gJWQ7ICVzIDwgJXMubGVuZ3RoOyAlcysrKSB7JywgaSwgbm9kZS5pdGVtcy5sZW5ndGgsIGksIGRhdGFTeW0sIGkpXG4gICAgICAgIHZpc2l0KG5hbWUrJ1snK2krJ10nLCBkYXRhU3ltKydbJytpKyddJywgbm9kZS5hZGRpdGlvbmFsSXRlbXMsIHJlcG9ydGVyLCBmaWx0ZXIpXG4gICAgICAgIHZhbGlkYXRlKCd9JylcbiAgICAgIH0gICBcbiAgICB9XG5cbiAgICBpZiAobm9kZS5mb3JtYXQgJiYgKGZtdHNbbm9kZS5mb3JtYXRdIHx8IHR5cGVvZiBub2RlLmZvcm1hdCA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgIGlmICh0eXBlICE9PSAnc3RyaW5nJyAmJiBmb3JtYXRzW25vZGUuZm9ybWF0XSkgdmFsaWRhdGUoJ2lmICglcykgeycsIHR5cGVzLnN0cmluZyhkYXRhU3ltKSlcbiAgICAgIHZhciBuID0gZ2Vuc3ltKCdmb3JtYXQnKVxuICAgICAgaWYgKHR5cGVvZiBub2RlLmZvcm1hdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBzY29wZVtuXSA9IG5vZGUuZm9ybWF0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NvcGVbbl0gPSBmbXRzW25vZGUuZm9ybWF0XVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHNjb3BlW25dID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciByID0gZ2Vuc3ltKCdyZXN1bHQnKVxuICAgICAgICB2YWxpZGF0ZSgndmFyICVzID0gJXMoJXMsICVzKScsIHIsIG4sIGRhdGFTeW0sIG5vZGVTeW0pXG4gICAgICAgIHZhbGlkYXRlKCdpZiAoISVzKSB7JywgcilcbiAgICAgICAgZXJyb3IoJ211c3QgYmUgJytub2RlLmZvcm1hdCsnIGZvcm1hdCcpXG4gICAgICAgIHZhbGlkYXRlKCd9IGVsc2UgaWYgKHR5cGVvZiAlcyA9PT0gXCJzdHJpbmdcIikgeycsIHIpXG4gICAgICAgIGVycm9yRnJvbVN5bShyKVxuICAgICAgICB2YWxpZGF0ZSgnfScpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWxpZGF0ZSgnaWYgKCElcy50ZXN0KCVzKSkgeycsIG4sIGRhdGFTeW0pXG4gICAgICAgIGVycm9yKCdtdXN0IGJlICcrbm9kZS5mb3JtYXQrJyBmb3JtYXQnKVxuICAgICAgICB2YWxpZGF0ZSgnfScpXG4gICAgICB9XG4gICAgICBpZiAodHlwZSAhPT0gJ3N0cmluZycgJiYgZm9ybWF0c1tub2RlLmZvcm1hdF0pIHZhbGlkYXRlKCd9JylcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShub2RlLnJlcXVpcmVkKSkge1xuICAgICAgdmFyIGlzVW5kZWZpbmVkID0gZnVuY3Rpb24ocmVxKSB7XG4gICAgICAgIHJldHVybiBnZW5vYmooZGF0YVN5bSwgcmVxKSArICcgPT09IHVuZGVmaW5lZCdcbiAgICAgIH1cblxuICAgICAgdmFyIGNoZWNrUmVxdWlyZWQgPSBmdW5jdGlvbiAocmVxKSB7XG4gICAgICAgIGlmIChudWxsQXNVbmRlZmluZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZSgnaWYgKCVzID09IHVuZGVmaW5lZCkgeycsIGdlbm9iaihkYXRhU3ltLCByZXEpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlKCdpZiAoJXMgPT09IHVuZGVmaW5lZCkgeycsIGdlbm9iaihkYXRhU3ltLCByZXEpKVxuICAgICAgICB9XG4gICAgICAgIHZhciByZXFTY2hlbWEgPSBnZW5vYmoobm9kZVN5bSwgJ3Byb3BlcnRpZXMnKSArICcgPyAnICsgZ2Vub2JqKGdlbm9iaihub2RlU3ltLCAncHJvcGVydGllcycpLCByZXEpICsgJyA6IHVuZGVmaW5lZCc7XG4gICAgICAgIGVycm9yKCdpcyByZXF1aXJlZCcsIGdlbm9iaihuYW1lLCByZXEpLCB1bmRlZmluZWQsIHJlcVNjaGVtYSk7XG4gICAgICAgIHZhbGlkYXRlKCdtaXNzaW5nKysnKVxuICAgICAgICB2YWxpZGF0ZSgnfScpXG4gICAgICB9XG4gICAgICB2YWxpZGF0ZSgnaWYgKCglcykpIHsnLCB0eXBlICE9PSAnb2JqZWN0JyA/IHR5cGVzLm9iamVjdChkYXRhU3ltKSA6ICd0cnVlJylcbiAgICAgIHZhbGlkYXRlKCd2YXIgbWlzc2luZyA9IDAnKVxuICAgICAgbm9kZS5yZXF1aXJlZC5tYXAoY2hlY2tSZXF1aXJlZClcbiAgICAgIHZhbGlkYXRlKCd9Jyk7XG4gICAgICBpZiAoIWdyZWVkeSkge1xuICAgICAgICB2YWxpZGF0ZSgnaWYgKG1pc3NpbmcgPT09IDApIHsnKVxuICAgICAgICBpbmRlbnQrK1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChub2RlLnVuaXF1ZUl0ZW1zKSB7XG4gICAgICBpZiAodHlwZSAhPT0gJ2FycmF5JykgdmFsaWRhdGUoJ2lmICglcykgeycsIHR5cGVzLmFycmF5KGRhdGFTeW0pKVxuICAgICAgdmFsaWRhdGUoJ2lmICghKHVuaXF1ZSglcykpKSB7JywgZGF0YVN5bSlcbiAgICAgIGVycm9yKCdtdXN0IGJlIHVuaXF1ZScpXG4gICAgICB2YWxpZGF0ZSgnfScpXG4gICAgICBpZiAodHlwZSAhPT0gJ2FycmF5JykgdmFsaWRhdGUoJ30nKVxuICAgIH1cblxuICAgIGlmIChub2RlLmVudW0pIHtcbiAgICAgIHZhciBjb21wbGV4ID0gbm9kZS5lbnVtLnNvbWUoZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGUgPT09ICdvYmplY3QnXG4gICAgICB9KVxuXG4gICAgICB2YXIgY29tcGFyZSA9IGNvbXBsZXggP1xuICAgICAgICBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgcmV0dXJuICdKU09OLnN0cmluZ2lmeSgnK2RhdGFTeW0rJyknKycgIT09IEpTT04uc3RyaW5naWZ5KCcrSlNPTi5zdHJpbmdpZnkoZSkrJyknXG4gICAgICAgIH0gOlxuICAgICAgICBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgcmV0dXJuIGRhdGFTeW0rJyAhPT0gJytKU09OLnN0cmluZ2lmeShlKVxuICAgICAgICB9XG5cbiAgICAgIHZhbGlkYXRlKCdpZiAoJXMpIHsnLCBub2RlLmVudW0ubWFwKGNvbXBhcmUpLmpvaW4oJyAmJiAnKSB8fCAnZmFsc2UnKVxuICAgICAgZXJyb3IoJ211c3QgYmUgYW4gZW51bSB2YWx1ZScpXG4gICAgICB2YWxpZGF0ZSgnfScpXG4gICAgfVxuXG4gICAgaWYgKG5vZGUuZGVwZW5kZW5jaWVzKSB7XG4gICAgICBpZiAodHlwZSAhPT0gJ29iamVjdCcpIHZhbGlkYXRlKCdpZiAoJXMpIHsnLCB0eXBlcy5vYmplY3QoZGF0YVN5bSkpXG5cbiAgICAgIE9iamVjdC5rZXlzKG5vZGUuZGVwZW5kZW5jaWVzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICB2YXIgZGVwcyA9IG5vZGUuZGVwZW5kZW5jaWVzW2tleV1cbiAgICAgICAgaWYgKHR5cGVvZiBkZXBzID09PSAnc3RyaW5nJykgZGVwcyA9IFtkZXBzXVxuXG4gICAgICAgIHZhciBleGlzdHMgPSBmdW5jdGlvbihrKSB7XG4gICAgICAgICAgcmV0dXJuIGdlbm9iaihkYXRhU3ltLCBrKSArICcgIT09IHVuZGVmaW5lZCdcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRlcHMpKSB7XG4gICAgICAgICAgdmFsaWRhdGUoJ2lmICglcyAhPT0gdW5kZWZpbmVkICYmICEoJXMpKSB7JywgZ2Vub2JqKGRhdGFTeW0sIGtleSksIGRlcHMubWFwKGV4aXN0cykuam9pbignICYmICcpIHx8ICd0cnVlJylcbiAgICAgICAgICBlcnJvcignZGVwZW5kZW5jaWVzIG5vdCBzZXQnKVxuICAgICAgICAgIHZhbGlkYXRlKCd9JylcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGRlcHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdmFsaWRhdGUoJ2lmICglcyAhPT0gdW5kZWZpbmVkKSB7JywgZ2Vub2JqKGRhdGFTeW0sIGtleSkpXG4gICAgICAgICAgdmlzaXQobmFtZSwgZGF0YVN5bSwgZGVwcywgcmVwb3J0ZXIsIGZpbHRlcilcbiAgICAgICAgICB2YWxpZGF0ZSgnfScpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGlmICh0eXBlICE9PSAnb2JqZWN0JykgdmFsaWRhdGUoJ30nKVxuICAgIH1cblxuICAgIGlmIChub2RlLmFkZGl0aW9uYWxQcm9wZXJ0aWVzIHx8IG5vZGUuYWRkaXRpb25hbFByb3BlcnRpZXMgPT09IGZhbHNlKSB7XG4gICAgICBpZiAodHlwZSAhPT0gJ29iamVjdCcpIHZhbGlkYXRlKCdpZiAoJXMpIHsnLCB0eXBlcy5vYmplY3QoZGF0YVN5bSkpXG5cbiAgICAgIHZhciBpID0gZ2VubG9vcCgpXG4gICAgICB2YXIga2V5cyA9IGdlbnN5bSgna2V5cycpXG5cbiAgICAgIHZhciB0b0NvbXBhcmUgPSBmdW5jdGlvbihwKSB7XG4gICAgICAgIHJldHVybiBrZXlzKydbJytpKyddICE9PSAnK0pTT04uc3RyaW5naWZ5KHApXG4gICAgICB9XG5cbiAgICAgIHZhciB0b1Rlc3QgPSBmdW5jdGlvbihwKSB7XG4gICAgICAgIHJldHVybiAnIScrcGF0dGVybnMocCkrJy50ZXN0KCcra2V5cysnWycraSsnXSknXG4gICAgICB9XG5cbiAgICAgIHZhciBhZGRpdGlvbmFsUHJvcCA9IE9iamVjdC5rZXlzKHByb3BlcnRpZXMgfHwge30pLm1hcCh0b0NvbXBhcmUpXG4gICAgICAgIC5jb25jYXQoT2JqZWN0LmtleXMobm9kZS5wYXR0ZXJuUHJvcGVydGllcyB8fCB7fSkubWFwKHRvVGVzdCkpXG4gICAgICAgIC5qb2luKCcgJiYgJykgfHwgJ3RydWUnXG5cbiAgICAgIHZhbGlkYXRlKCd2YXIgJXMgPSBPYmplY3Qua2V5cyglcyknLCBrZXlzLCBkYXRhU3ltKVxuICAgICAgICAoJ2ZvciAodmFyICVzID0gMDsgJXMgPCAlcy5sZW5ndGg7ICVzKyspIHsnLCBpLCBpLCBrZXlzLCBpKVxuICAgICAgICAgICgnaWYgKCVzKSB7JywgYWRkaXRpb25hbFByb3ApXG5cbiAgICAgIGlmIChub2RlLmFkZGl0aW9uYWxQcm9wZXJ0aWVzID09PSBmYWxzZSkge1xuICAgICAgICBpZiAoZmlsdGVyKSB2YWxpZGF0ZSgnZGVsZXRlICVzJywgZGF0YVN5bSsnWycra2V5cysnWycraSsnXV0nKVxuICAgICAgICBlcnJvcignaGFzIGFkZGl0aW9uYWwgcHJvcGVydGllcycsIG51bGwsIEpTT04uc3RyaW5naWZ5KG5hbWUrJy4nKSArICcgKyAnICsga2V5cyArICdbJytpKyddJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZpc2l0KG5hbWUrJ1snK2tleXMrJ1snK2krJ11dJywgZGF0YVN5bSsnWycra2V5cysnWycraSsnXV0nLCBub2RlLmFkZGl0aW9uYWxQcm9wZXJ0aWVzLCByZXBvcnRlciwgZmlsdGVyKVxuICAgICAgfVxuXG4gICAgICB2YWxpZGF0ZVxuICAgICAgICAgICgnfScpXG4gICAgICAgICgnfScpXG5cbiAgICAgIGlmICh0eXBlICE9PSAnb2JqZWN0JykgdmFsaWRhdGUoJ30nKVxuICAgIH1cblxuICAgIGlmIChub2RlLiRyZWYpIHtcbiAgICAgIHZhciBzdWIgPSBnZXQocm9vdCwgb3B0cyAmJiBvcHRzLnNjaGVtYXMgfHwge30sIG5vZGUuJHJlZilcbiAgICAgIGlmIChzdWIpIHtcbiAgICAgICAgdmFyIGZuID0gY2FjaGVbbm9kZS4kcmVmXVxuICAgICAgICBpZiAoIWZuKSB7XG4gICAgICAgICAgY2FjaGVbbm9kZS4kcmVmXSA9IGZ1bmN0aW9uIHByb3h5KGRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiBmbihkYXRhKVxuICAgICAgICAgIH1cbiAgICAgICAgICBmbiA9IGNvbXBpbGUoc3ViLCBjYWNoZSwgcm9vdCwgZmFsc2UsIG9wdHMpXG4gICAgICAgIH1cbiAgICAgICAgdmFyIG4gPSBnZW5zeW0oJ3JlZicpXG4gICAgICAgIHNjb3BlW25dID0gZm5cbiAgICAgICAgdmFsaWRhdGUoJ2lmICghKCVzKCVzKSkpIHsnLCBuLCBkYXRhU3ltKVxuICAgICAgICBlcnJvcigncmVmZXJlbmNlZCBzY2hlbWEgZG9lcyBub3QgbWF0Y2gnKVxuICAgICAgICB2YWxpZGF0ZSgnfScpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5vZGUubm90KSB7XG4gICAgICB2YXIgcHJldiA9IGdlbnN5bSgncHJldicpXG4gICAgICB2YWxpZGF0ZSgndmFyICVzID0gZXJyb3JzJywgcHJldilcbiAgICAgIHZpc2l0KG5hbWUsIGRhdGFTeW0sIG5vZGUubm90LCBmYWxzZSwgZmlsdGVyKVxuICAgICAgdmFsaWRhdGUoJ2lmICglcyA9PT0gZXJyb3JzKSB7JywgcHJldilcbiAgICAgIGVycm9yKCduZWdhdGl2ZSBzY2hlbWEgbWF0Y2hlcycpXG4gICAgICB2YWxpZGF0ZSgnfSBlbHNlIHsnKVxuICAgICAgICAoJ2Vycm9ycyA9ICVzJywgcHJldilcbiAgICAgICgnfScpXG4gICAgfVxuXG4gICAgaWYgKG5vZGUuaXRlbXMgJiYgIXR1cGxlKSB7XG4gICAgICBpZiAodHlwZSAhPT0gJ2FycmF5JykgdmFsaWRhdGUoJ2lmICglcykgeycsIHR5cGVzLmFycmF5KGRhdGFTeW0pKVxuXG4gICAgICB2YXIgaSA9IGdlbmxvb3AoKVxuICAgICAgdmFsaWRhdGUoJ2ZvciAodmFyICVzID0gMDsgJXMgPCAlcy5sZW5ndGg7ICVzKyspIHsnLCBpLCBpLCBkYXRhU3ltLCBpKVxuICAgICAgdmlzaXQobmFtZSsnWycraSsnXScsIGRhdGFTeW0rJ1snK2krJ10nLCBub2RlLml0ZW1zLCByZXBvcnRlciwgZmlsdGVyKVxuICAgICAgdmFsaWRhdGUoJ30nKVxuXG4gICAgICBpZiAodHlwZSAhPT0gJ2FycmF5JykgdmFsaWRhdGUoJ30nKVxuICAgIH1cblxuICAgIGlmIChub2RlLnBhdHRlcm5Qcm9wZXJ0aWVzKSB7XG4gICAgICBpZiAodHlwZSAhPT0gJ29iamVjdCcpIHZhbGlkYXRlKCdpZiAoJXMpIHsnLCB0eXBlcy5vYmplY3QoZGF0YVN5bSkpXG4gICAgICB2YXIga2V5cyA9IGdlbnN5bSgna2V5cycpXG4gICAgICB2YXIgaSA9IGdlbmxvb3AoKVxuICAgICAgdmFsaWRhdGVcbiAgICAgICAgKCd2YXIgJXMgPSBPYmplY3Qua2V5cyglcyknLCBrZXlzLCBkYXRhU3ltKVxuICAgICAgICAoJ2ZvciAodmFyICVzID0gMDsgJXMgPCAlcy5sZW5ndGg7ICVzKyspIHsnLCBpLCBpLCBrZXlzLCBpKVxuXG4gICAgICBPYmplY3Qua2V5cyhub2RlLnBhdHRlcm5Qcm9wZXJ0aWVzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICB2YXIgcCA9IHBhdHRlcm5zKGtleSlcbiAgICAgICAgdmFsaWRhdGUoJ2lmICglcy50ZXN0KCVzKSkgeycsIHAsIGtleXMrJ1snK2krJ10nKVxuICAgICAgICB2aXNpdChuYW1lKydbJytrZXlzKydbJytpKyddXScsIGRhdGFTeW0rJ1snK2tleXMrJ1snK2krJ11dJywgbm9kZS5wYXR0ZXJuUHJvcGVydGllc1trZXldLCByZXBvcnRlciwgZmlsdGVyKVxuICAgICAgICB2YWxpZGF0ZSgnfScpXG4gICAgICB9KVxuXG4gICAgICB2YWxpZGF0ZSgnfScpXG4gICAgICBpZiAodHlwZSAhPT0gJ29iamVjdCcpIHZhbGlkYXRlKCd9JylcbiAgICB9XG5cbiAgICBpZiAobm9kZS5wYXR0ZXJuKSB7XG4gICAgICB2YXIgcCA9IHBhdHRlcm5zKG5vZGUucGF0dGVybilcbiAgICAgIGlmICh0eXBlICE9PSAnc3RyaW5nJykgdmFsaWRhdGUoJ2lmICglcykgeycsIHR5cGVzLnN0cmluZyhkYXRhU3ltKSlcbiAgICAgIHZhbGlkYXRlKCdpZiAoISglcy50ZXN0KCVzKSkpIHsnLCBwLCBkYXRhU3ltKVxuICAgICAgZXJyb3IoJ3BhdHRlcm4gbWlzbWF0Y2gnKVxuICAgICAgdmFsaWRhdGUoJ30nKVxuICAgICAgaWYgKHR5cGUgIT09ICdzdHJpbmcnKSB2YWxpZGF0ZSgnfScpXG4gICAgfVxuXG4gICAgaWYgKG5vZGUuYWxsT2YpIHtcbiAgICAgIG5vZGUuYWxsT2YuZm9yRWFjaChmdW5jdGlvbihzY2gpIHtcbiAgICAgICAgdmlzaXQobmFtZSwgZGF0YVN5bSwgc2NoLCByZXBvcnRlciwgZmlsdGVyKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAobm9kZS5hbnlPZiAmJiBub2RlLmFueU9mLmxlbmd0aCkge1xuICAgICAgdmFyIHByZXYgPSBnZW5zeW0oJ3ByZXYnKVxuXG4gICAgICBub2RlLmFueU9mLmZvckVhY2goZnVuY3Rpb24oc2NoLCBpKSB7XG4gICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgdmFsaWRhdGUoJ3ZhciAlcyA9IGVycm9ycycsIHByZXYpXG4gICAgICAgIH0gZWxzZSB7ICAgICAgICAgIFxuICAgICAgICAgIHZhbGlkYXRlKCdpZiAoZXJyb3JzICE9PSAlcykgeycsIHByZXYpXG4gICAgICAgICAgICAoJ2Vycm9ycyA9ICVzJywgcHJldilcbiAgICAgICAgfVxuICAgICAgICB2aXNpdChuYW1lLCBkYXRhU3ltLCBzY2gsIGZhbHNlLCBmYWxzZSlcbiAgICAgIH0pXG4gICAgICBub2RlLmFueU9mLmZvckVhY2goZnVuY3Rpb24oc2NoLCBpKSB7XG4gICAgICAgIGlmIChpKSB2YWxpZGF0ZSgnfScpXG4gICAgICB9KVxuICAgICAgdmFsaWRhdGUoJ2lmICglcyAhPT0gZXJyb3JzKSB7JywgcHJldilcbiAgICAgIGVycm9yKCdubyBzY2hlbWFzIG1hdGNoJylcbiAgICAgIHZhbGlkYXRlKCd9JylcbiAgICB9XG5cbiAgICBpZiAobm9kZS5vbmVPZiAmJiBub2RlLm9uZU9mLmxlbmd0aCkge1xuICAgICAgdmFyIHByZXYgPSBnZW5zeW0oJ3ByZXYnKVxuICAgICAgdmFyIHBhc3NlcyA9IGdlbnN5bSgncGFzc2VzJylcblxuICAgICAgdmFsaWRhdGVcbiAgICAgICAgKCd2YXIgJXMgPSBlcnJvcnMnLCBwcmV2KVxuICAgICAgICAoJ3ZhciAlcyA9IDAnLCBwYXNzZXMpXG5cbiAgICAgIG5vZGUub25lT2YuZm9yRWFjaChmdW5jdGlvbihzY2gsIGkpIHtcbiAgICAgICAgdmlzaXQobmFtZSwgZGF0YVN5bSwgc2NoLCBmYWxzZSwgZmFsc2UpXG4gICAgICAgIHZhbGlkYXRlKCdpZiAoJXMgPT09IGVycm9ycykgeycsIHByZXYpXG4gICAgICAgICAgKCclcysrJywgcGFzc2VzKVxuICAgICAgICAoJ30gZWxzZSB7JylcbiAgICAgICAgICAoJ2Vycm9ycyA9ICVzJywgcHJldilcbiAgICAgICAgKCd9JylcbiAgICAgIH0pXG5cbiAgICAgIHZhbGlkYXRlKCdpZiAoJXMgIT09IDEpIHsnLCBwYXNzZXMpXG4gICAgICBlcnJvcignbm8gKG9yIG1vcmUgdGhhbiBvbmUpIHNjaGVtYXMgbWF0Y2gnKVxuICAgICAgdmFsaWRhdGUoJ30nKVxuICAgIH1cblxuICAgIGlmIChub2RlLm11bHRpcGxlT2YgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGUgIT09ICdudW1iZXInICYmIHR5cGUgIT09ICdpbnRlZ2VyJykgdmFsaWRhdGUoJ2lmICglcykgeycsIHR5cGVzLm51bWJlcihkYXRhU3ltKSlcblxuICAgICAgdmFyIGZhY3RvciA9ICgobm9kZS5tdWx0aXBsZU9mIHwgMCkgIT09IG5vZGUubXVsdGlwbGVPZikgPyBNYXRoLnBvdygxMCwgbm9kZS5tdWx0aXBsZU9mLnRvU3RyaW5nKCkuc3BsaXQoJy4nKS5wb3AoKS5sZW5ndGgpIDogMVxuICAgICAgaWYgKGZhY3RvciA+IDEpIHZhbGlkYXRlKCdpZiAoKCVkKiVzKSAlICVkKSB7JywgZmFjdG9yLCBkYXRhU3ltLCBmYWN0b3Iqbm9kZS5tdWx0aXBsZU9mKVxuICAgICAgZWxzZSB2YWxpZGF0ZSgnaWYgKCVzICUgJWQpIHsnLCBkYXRhU3ltLCBub2RlLm11bHRpcGxlT2YpXG5cbiAgICAgIGVycm9yKCdoYXMgYSByZW1haW5kZXInKVxuICAgICAgdmFsaWRhdGUoJ30nKVxuXG4gICAgICBpZiAodHlwZSAhPT0gJ251bWJlcicgJiYgdHlwZSAhPT0gJ2ludGVnZXInKSB2YWxpZGF0ZSgnfScpXG4gICAgfVxuXG4gICAgaWYgKG5vZGUubWF4UHJvcGVydGllcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZSAhPT0gJ29iamVjdCcpIHZhbGlkYXRlKCdpZiAoJXMpIHsnLCB0eXBlcy5vYmplY3QoZGF0YVN5bSkpXG4gICAgICBcbiAgICAgIHZhbGlkYXRlKCdpZiAoT2JqZWN0LmtleXMoJXMpLmxlbmd0aCA+ICVkKSB7JywgZGF0YVN5bSwgbm9kZS5tYXhQcm9wZXJ0aWVzKVxuICAgICAgZXJyb3IoJ2hhcyBtb3JlIHByb3BlcnRpZXMgdGhhbiBhbGxvd2VkJylcbiAgICAgIHZhbGlkYXRlKCd9JylcblxuICAgICAgaWYgKHR5cGUgIT09ICdvYmplY3QnKSB2YWxpZGF0ZSgnfScpXG4gICAgfVxuXG4gICAgaWYgKG5vZGUubWluUHJvcGVydGllcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZSAhPT0gJ29iamVjdCcpIHZhbGlkYXRlKCdpZiAoJXMpIHsnLCB0eXBlcy5vYmplY3QoZGF0YVN5bSkpXG4gICAgICBcbiAgICAgIHZhbGlkYXRlKCdpZiAoT2JqZWN0LmtleXMoJXMpLmxlbmd0aCA8ICVkKSB7JywgZGF0YVN5bSwgbm9kZS5taW5Qcm9wZXJ0aWVzKVxuICAgICAgZXJyb3IoJ2hhcyBsZXNzIHByb3BlcnRpZXMgdGhhbiBhbGxvd2VkJylcbiAgICAgIHZhbGlkYXRlKCd9JylcblxuICAgICAgaWYgKHR5cGUgIT09ICdvYmplY3QnKSB2YWxpZGF0ZSgnfScpXG4gICAgfVxuXG4gICAgaWYgKG5vZGUubWF4SXRlbXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGUgIT09ICdhcnJheScpIHZhbGlkYXRlKCdpZiAoJXMpIHsnLCB0eXBlcy5hcnJheShkYXRhU3ltKSlcbiAgICAgIFxuICAgICAgdmFsaWRhdGUoJ2lmICglcy5sZW5ndGggPiAlZCkgeycsIGRhdGFTeW0sIG5vZGUubWF4SXRlbXMpXG4gICAgICBlcnJvcignaGFzIG1vcmUgaXRlbXMgdGhhbiBhbGxvd2VkJylcbiAgICAgIHZhbGlkYXRlKCd9JylcblxuICAgICAgaWYgKHR5cGUgIT09ICdhcnJheScpIHZhbGlkYXRlKCd9JylcbiAgICB9XG5cbiAgICBpZiAobm9kZS5taW5JdGVtcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZSAhPT0gJ2FycmF5JykgdmFsaWRhdGUoJ2lmICglcykgeycsIHR5cGVzLmFycmF5KGRhdGFTeW0pKVxuICAgICAgXG4gICAgICB2YWxpZGF0ZSgnaWYgKCVzLmxlbmd0aCA8ICVkKSB7JywgZGF0YVN5bSwgbm9kZS5taW5JdGVtcylcbiAgICAgIGVycm9yKCdoYXMgbGVzcyBpdGVtcyB0aGFuIGFsbG93ZWQnKVxuICAgICAgdmFsaWRhdGUoJ30nKVxuXG4gICAgICBpZiAodHlwZSAhPT0gJ2FycmF5JykgdmFsaWRhdGUoJ30nKVxuICAgIH1cblxuICAgIGlmIChub2RlLm1heExlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZSAhPT0gJ3N0cmluZycpIHZhbGlkYXRlKCdpZiAoJXMpIHsnLCB0eXBlcy5zdHJpbmcoZGF0YVN5bSkpXG5cbiAgICAgIHZhbGlkYXRlKCdpZiAoJXMubGVuZ3RoID4gJWQpIHsnLCBkYXRhU3ltLCBub2RlLm1heExlbmd0aClcbiAgICAgIGVycm9yKCdoYXMgbG9uZ2VyIGxlbmd0aCB0aGFuIGFsbG93ZWQnKVxuICAgICAgdmFsaWRhdGUoJ30nKVxuXG4gICAgICBpZiAodHlwZSAhPT0gJ3N0cmluZycpIHZhbGlkYXRlKCd9JylcbiAgICB9XG5cbiAgICBpZiAobm9kZS5taW5MZW5ndGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGUgIT09ICdzdHJpbmcnKSB2YWxpZGF0ZSgnaWYgKCVzKSB7JywgdHlwZXMuc3RyaW5nKGRhdGFTeW0pKVxuXG4gICAgICB2YWxpZGF0ZSgnaWYgKCVzLmxlbmd0aCA8ICVkKSB7JywgZGF0YVN5bSwgbm9kZS5taW5MZW5ndGgpXG4gICAgICBlcnJvcignaGFzIGxlc3MgbGVuZ3RoIHRoYW4gYWxsb3dlZCcpXG4gICAgICB2YWxpZGF0ZSgnfScpXG5cbiAgICAgIGlmICh0eXBlICE9PSAnc3RyaW5nJykgdmFsaWRhdGUoJ30nKVxuICAgIH1cblxuICAgIGlmIChub2RlLm1pbmltdW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFsaWRhdGUoJ2lmICglcyAlcyAlZCkgeycsIGRhdGFTeW0sIG5vZGUuZXhjbHVzaXZlTWluaW11bSA/ICc8PScgOiAnPCcsIG5vZGUubWluaW11bSlcbiAgICAgIGVycm9yKCdpcyBsZXNzIHRoYW4gbWluaW11bScpXG4gICAgICB2YWxpZGF0ZSgnfScpXG4gICAgfVxuXG4gICAgaWYgKG5vZGUubWF4aW11bSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YWxpZGF0ZSgnaWYgKCVzICVzICVkKSB7JywgZGF0YVN5bSwgbm9kZS5leGNsdXNpdmVNYXhpbXVtID8gJz49JyA6ICc+Jywgbm9kZS5tYXhpbXVtKVxuICAgICAgZXJyb3IoJ2lzIG1vcmUgdGhhbiBtYXhpbXVtJylcbiAgICAgIHZhbGlkYXRlKCd9JylcbiAgICB9XG5cbiAgICBpZiAocHJvcGVydGllcykge1xuICAgICAgT2JqZWN0LmtleXMocHJvcGVydGllcykuZm9yRWFjaChmdW5jdGlvbihwKSB7XG4gICAgICAgIHZpc2l0KGdlbm9iaihuYW1lLCBwKSwgZ2Vub2JqKGRhdGFTeW0sIHApLCBwcm9wZXJ0aWVzW3BdLCByZXBvcnRlciwgZmlsdGVyKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB3aGlsZSAoaW5kZW50LS0pIHZhbGlkYXRlKCd9JylcbiAgfVxuXG4gIHZhciB2YWxpZGF0ZSA9IGdlbmZ1blxuICAgICgnZnVuY3Rpb24gdmFsaWRhdGUoZGF0YSkgeycpXG4gICAgICAoJ3ZhbGlkYXRlLmVycm9ycyA9IG51bGwnKVxuICAgICAgKCd2YXIgZXJyb3JzID0gMCcpXG5cbiAgdmlzaXQoJ2RhdGEnLCAnZGF0YScsIHNjaGVtYSwgcmVwb3J0ZXIsIG9wdHMgJiYgb3B0cy5maWx0ZXIpXG5cbiAgdmFsaWRhdGVcbiAgICAgICgncmV0dXJuIGVycm9ycyA9PT0gMCcpXG4gICAgKCd9JylcblxuICB2YWxpZGF0ZSA9IHZhbGlkYXRlLnRvRnVuY3Rpb24oc2NvcGUpXG4gIHZhbGlkYXRlLmVycm9ycyA9IG51bGxcblxuICB2YWxpZGF0ZS5fX2RlZmluZUdldHRlcl9fKCdlcnJvcicsIGZ1bmN0aW9uKCkge1xuICAgIGlmICghdmFsaWRhdGUuZXJyb3JzKSByZXR1cm4gJydcbiAgICByZXR1cm4gdmFsaWRhdGUuZXJyb3JzXG4gICAgICAubWFwKGZ1bmN0aW9uKGVycikge1xuICAgICAgICByZXR1cm4gZXJyLmZpZWxkKycgJytlcnIubWVzc2FnZVxuICAgICAgfSlcbiAgICAgIC5qb2luKCdcXG4nKVxuICB9KVxuXG4gIHZhbGlkYXRlLnRvSlNPTiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBzY2hlbWFcbiAgfVxuXG4gIHJldHVybiB2YWxpZGF0ZVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHNjaGVtYSwgb3B0cykge1xuICBpZiAodHlwZW9mIHNjaGVtYSA9PT0gJ3N0cmluZycpIHNjaGVtYSA9IEpTT04ucGFyc2Uoc2NoZW1hKVxuICByZXR1cm4gY29tcGlsZShzY2hlbWEsIHt9LCBzY2hlbWEsIHRydWUsIG9wdHMpXG59XG5cbm1vZHVsZS5leHBvcnRzLmZpbHRlciA9IGZ1bmN0aW9uKHNjaGVtYSwgb3B0cykge1xuICB2YXIgdmFsaWRhdGUgPSBtb2R1bGUuZXhwb3J0cyhzY2hlbWEsIHh0ZW5kKG9wdHMsIHtmaWx0ZXI6IHRydWV9KSlcbiAgcmV0dXJuIGZ1bmN0aW9uKHNjaCkge1xuICAgIHZhbGlkYXRlKHNjaClcbiAgICByZXR1cm4gc2NoXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL19zY2hlbWEvaW5kZXguanNcbiAqKi8iLCJ2YXIgaXNQcm9wZXJ0eSA9IHJlcXVpcmUoJ2lzLXByb3BlcnR5JylcblxudmFyIGdlbiA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkge1xuICByZXR1cm4gaXNQcm9wZXJ0eShwcm9wKSA/IG9iaisnLicrcHJvcCA6IG9iaisnWycrSlNPTi5zdHJpbmdpZnkocHJvcCkrJ10nXG59XG5cbmdlbi52YWxpZCA9IGlzUHJvcGVydHlcbmdlbi5wcm9wZXJ0eSA9IGZ1bmN0aW9uIChwcm9wKSB7XG4gcmV0dXJuIGlzUHJvcGVydHkocHJvcCkgPyBwcm9wIDogSlNPTi5zdHJpbmdpZnkocHJvcClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZW5cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2dlbmVyYXRlLW9iamVjdC1wcm9wZXJ0eS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDU4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIlxuZnVuY3Rpb24gaXNQcm9wZXJ0eShzdHIpIHtcbiAgcmV0dXJuIC9eWyRBLVpcXF9hLXpcXHhhYVxceGI1XFx4YmFcXHhjMC1cXHhkNlxceGQ4LVxceGY2XFx4ZjgtXFx1MDJjMVxcdTAyYzYtXFx1MDJkMVxcdTAyZTAtXFx1MDJlNFxcdTAyZWNcXHUwMmVlXFx1MDM3MC1cXHUwMzc0XFx1MDM3NlxcdTAzNzdcXHUwMzdhLVxcdTAzN2RcXHUwMzg2XFx1MDM4OC1cXHUwMzhhXFx1MDM4Y1xcdTAzOGUtXFx1MDNhMVxcdTAzYTMtXFx1MDNmNVxcdTAzZjctXFx1MDQ4MVxcdTA0OGEtXFx1MDUyN1xcdTA1MzEtXFx1MDU1NlxcdTA1NTlcXHUwNTYxLVxcdTA1ODdcXHUwNWQwLVxcdTA1ZWFcXHUwNWYwLVxcdTA1ZjJcXHUwNjIwLVxcdTA2NGFcXHUwNjZlXFx1MDY2ZlxcdTA2NzEtXFx1MDZkM1xcdTA2ZDVcXHUwNmU1XFx1MDZlNlxcdTA2ZWVcXHUwNmVmXFx1MDZmYS1cXHUwNmZjXFx1MDZmZlxcdTA3MTBcXHUwNzEyLVxcdTA3MmZcXHUwNzRkLVxcdTA3YTVcXHUwN2IxXFx1MDdjYS1cXHUwN2VhXFx1MDdmNFxcdTA3ZjVcXHUwN2ZhXFx1MDgwMC1cXHUwODE1XFx1MDgxYVxcdTA4MjRcXHUwODI4XFx1MDg0MC1cXHUwODU4XFx1MDhhMFxcdTA4YTItXFx1MDhhY1xcdTA5MDQtXFx1MDkzOVxcdTA5M2RcXHUwOTUwXFx1MDk1OC1cXHUwOTYxXFx1MDk3MS1cXHUwOTc3XFx1MDk3OS1cXHUwOTdmXFx1MDk4NS1cXHUwOThjXFx1MDk4ZlxcdTA5OTBcXHUwOTkzLVxcdTA5YThcXHUwOWFhLVxcdTA5YjBcXHUwOWIyXFx1MDliNi1cXHUwOWI5XFx1MDliZFxcdTA5Y2VcXHUwOWRjXFx1MDlkZFxcdTA5ZGYtXFx1MDllMVxcdTA5ZjBcXHUwOWYxXFx1MGEwNS1cXHUwYTBhXFx1MGEwZlxcdTBhMTBcXHUwYTEzLVxcdTBhMjhcXHUwYTJhLVxcdTBhMzBcXHUwYTMyXFx1MGEzM1xcdTBhMzVcXHUwYTM2XFx1MGEzOFxcdTBhMzlcXHUwYTU5LVxcdTBhNWNcXHUwYTVlXFx1MGE3Mi1cXHUwYTc0XFx1MGE4NS1cXHUwYThkXFx1MGE4Zi1cXHUwYTkxXFx1MGE5My1cXHUwYWE4XFx1MGFhYS1cXHUwYWIwXFx1MGFiMlxcdTBhYjNcXHUwYWI1LVxcdTBhYjlcXHUwYWJkXFx1MGFkMFxcdTBhZTBcXHUwYWUxXFx1MGIwNS1cXHUwYjBjXFx1MGIwZlxcdTBiMTBcXHUwYjEzLVxcdTBiMjhcXHUwYjJhLVxcdTBiMzBcXHUwYjMyXFx1MGIzM1xcdTBiMzUtXFx1MGIzOVxcdTBiM2RcXHUwYjVjXFx1MGI1ZFxcdTBiNWYtXFx1MGI2MVxcdTBiNzFcXHUwYjgzXFx1MGI4NS1cXHUwYjhhXFx1MGI4ZS1cXHUwYjkwXFx1MGI5Mi1cXHUwYjk1XFx1MGI5OVxcdTBiOWFcXHUwYjljXFx1MGI5ZVxcdTBiOWZcXHUwYmEzXFx1MGJhNFxcdTBiYTgtXFx1MGJhYVxcdTBiYWUtXFx1MGJiOVxcdTBiZDBcXHUwYzA1LVxcdTBjMGNcXHUwYzBlLVxcdTBjMTBcXHUwYzEyLVxcdTBjMjhcXHUwYzJhLVxcdTBjMzNcXHUwYzM1LVxcdTBjMzlcXHUwYzNkXFx1MGM1OFxcdTBjNTlcXHUwYzYwXFx1MGM2MVxcdTBjODUtXFx1MGM4Y1xcdTBjOGUtXFx1MGM5MFxcdTBjOTItXFx1MGNhOFxcdTBjYWEtXFx1MGNiM1xcdTBjYjUtXFx1MGNiOVxcdTBjYmRcXHUwY2RlXFx1MGNlMFxcdTBjZTFcXHUwY2YxXFx1MGNmMlxcdTBkMDUtXFx1MGQwY1xcdTBkMGUtXFx1MGQxMFxcdTBkMTItXFx1MGQzYVxcdTBkM2RcXHUwZDRlXFx1MGQ2MFxcdTBkNjFcXHUwZDdhLVxcdTBkN2ZcXHUwZDg1LVxcdTBkOTZcXHUwZDlhLVxcdTBkYjFcXHUwZGIzLVxcdTBkYmJcXHUwZGJkXFx1MGRjMC1cXHUwZGM2XFx1MGUwMS1cXHUwZTMwXFx1MGUzMlxcdTBlMzNcXHUwZTQwLVxcdTBlNDZcXHUwZTgxXFx1MGU4MlxcdTBlODRcXHUwZTg3XFx1MGU4OFxcdTBlOGFcXHUwZThkXFx1MGU5NC1cXHUwZTk3XFx1MGU5OS1cXHUwZTlmXFx1MGVhMS1cXHUwZWEzXFx1MGVhNVxcdTBlYTdcXHUwZWFhXFx1MGVhYlxcdTBlYWQtXFx1MGViMFxcdTBlYjJcXHUwZWIzXFx1MGViZFxcdTBlYzAtXFx1MGVjNFxcdTBlYzZcXHUwZWRjLVxcdTBlZGZcXHUwZjAwXFx1MGY0MC1cXHUwZjQ3XFx1MGY0OS1cXHUwZjZjXFx1MGY4OC1cXHUwZjhjXFx1MTAwMC1cXHUxMDJhXFx1MTAzZlxcdTEwNTAtXFx1MTA1NVxcdTEwNWEtXFx1MTA1ZFxcdTEwNjFcXHUxMDY1XFx1MTA2NlxcdTEwNmUtXFx1MTA3MFxcdTEwNzUtXFx1MTA4MVxcdTEwOGVcXHUxMGEwLVxcdTEwYzVcXHUxMGM3XFx1MTBjZFxcdTEwZDAtXFx1MTBmYVxcdTEwZmMtXFx1MTI0OFxcdTEyNGEtXFx1MTI0ZFxcdTEyNTAtXFx1MTI1NlxcdTEyNThcXHUxMjVhLVxcdTEyNWRcXHUxMjYwLVxcdTEyODhcXHUxMjhhLVxcdTEyOGRcXHUxMjkwLVxcdTEyYjBcXHUxMmIyLVxcdTEyYjVcXHUxMmI4LVxcdTEyYmVcXHUxMmMwXFx1MTJjMi1cXHUxMmM1XFx1MTJjOC1cXHUxMmQ2XFx1MTJkOC1cXHUxMzEwXFx1MTMxMi1cXHUxMzE1XFx1MTMxOC1cXHUxMzVhXFx1MTM4MC1cXHUxMzhmXFx1MTNhMC1cXHUxM2Y0XFx1MTQwMS1cXHUxNjZjXFx1MTY2Zi1cXHUxNjdmXFx1MTY4MS1cXHUxNjlhXFx1MTZhMC1cXHUxNmVhXFx1MTZlZS1cXHUxNmYwXFx1MTcwMC1cXHUxNzBjXFx1MTcwZS1cXHUxNzExXFx1MTcyMC1cXHUxNzMxXFx1MTc0MC1cXHUxNzUxXFx1MTc2MC1cXHUxNzZjXFx1MTc2ZS1cXHUxNzcwXFx1MTc4MC1cXHUxN2IzXFx1MTdkN1xcdTE3ZGNcXHUxODIwLVxcdTE4NzdcXHUxODgwLVxcdTE4YThcXHUxOGFhXFx1MThiMC1cXHUxOGY1XFx1MTkwMC1cXHUxOTFjXFx1MTk1MC1cXHUxOTZkXFx1MTk3MC1cXHUxOTc0XFx1MTk4MC1cXHUxOWFiXFx1MTljMS1cXHUxOWM3XFx1MWEwMC1cXHUxYTE2XFx1MWEyMC1cXHUxYTU0XFx1MWFhN1xcdTFiMDUtXFx1MWIzM1xcdTFiNDUtXFx1MWI0YlxcdTFiODMtXFx1MWJhMFxcdTFiYWVcXHUxYmFmXFx1MWJiYS1cXHUxYmU1XFx1MWMwMC1cXHUxYzIzXFx1MWM0ZC1cXHUxYzRmXFx1MWM1YS1cXHUxYzdkXFx1MWNlOS1cXHUxY2VjXFx1MWNlZS1cXHUxY2YxXFx1MWNmNVxcdTFjZjZcXHUxZDAwLVxcdTFkYmZcXHUxZTAwLVxcdTFmMTVcXHUxZjE4LVxcdTFmMWRcXHUxZjIwLVxcdTFmNDVcXHUxZjQ4LVxcdTFmNGRcXHUxZjUwLVxcdTFmNTdcXHUxZjU5XFx1MWY1YlxcdTFmNWRcXHUxZjVmLVxcdTFmN2RcXHUxZjgwLVxcdTFmYjRcXHUxZmI2LVxcdTFmYmNcXHUxZmJlXFx1MWZjMi1cXHUxZmM0XFx1MWZjNi1cXHUxZmNjXFx1MWZkMC1cXHUxZmQzXFx1MWZkNi1cXHUxZmRiXFx1MWZlMC1cXHUxZmVjXFx1MWZmMi1cXHUxZmY0XFx1MWZmNi1cXHUxZmZjXFx1MjA3MVxcdTIwN2ZcXHUyMDkwLVxcdTIwOWNcXHUyMTAyXFx1MjEwN1xcdTIxMGEtXFx1MjExM1xcdTIxMTVcXHUyMTE5LVxcdTIxMWRcXHUyMTI0XFx1MjEyNlxcdTIxMjhcXHUyMTJhLVxcdTIxMmRcXHUyMTJmLVxcdTIxMzlcXHUyMTNjLVxcdTIxM2ZcXHUyMTQ1LVxcdTIxNDlcXHUyMTRlXFx1MjE2MC1cXHUyMTg4XFx1MmMwMC1cXHUyYzJlXFx1MmMzMC1cXHUyYzVlXFx1MmM2MC1cXHUyY2U0XFx1MmNlYi1cXHUyY2VlXFx1MmNmMlxcdTJjZjNcXHUyZDAwLVxcdTJkMjVcXHUyZDI3XFx1MmQyZFxcdTJkMzAtXFx1MmQ2N1xcdTJkNmZcXHUyZDgwLVxcdTJkOTZcXHUyZGEwLVxcdTJkYTZcXHUyZGE4LVxcdTJkYWVcXHUyZGIwLVxcdTJkYjZcXHUyZGI4LVxcdTJkYmVcXHUyZGMwLVxcdTJkYzZcXHUyZGM4LVxcdTJkY2VcXHUyZGQwLVxcdTJkZDZcXHUyZGQ4LVxcdTJkZGVcXHUyZTJmXFx1MzAwNS1cXHUzMDA3XFx1MzAyMS1cXHUzMDI5XFx1MzAzMS1cXHUzMDM1XFx1MzAzOC1cXHUzMDNjXFx1MzA0MS1cXHUzMDk2XFx1MzA5ZC1cXHUzMDlmXFx1MzBhMS1cXHUzMGZhXFx1MzBmYy1cXHUzMGZmXFx1MzEwNS1cXHUzMTJkXFx1MzEzMS1cXHUzMThlXFx1MzFhMC1cXHUzMWJhXFx1MzFmMC1cXHUzMWZmXFx1MzQwMC1cXHU0ZGI1XFx1NGUwMC1cXHU5ZmNjXFx1YTAwMC1cXHVhNDhjXFx1YTRkMC1cXHVhNGZkXFx1YTUwMC1cXHVhNjBjXFx1YTYxMC1cXHVhNjFmXFx1YTYyYVxcdWE2MmJcXHVhNjQwLVxcdWE2NmVcXHVhNjdmLVxcdWE2OTdcXHVhNmEwLVxcdWE2ZWZcXHVhNzE3LVxcdWE3MWZcXHVhNzIyLVxcdWE3ODhcXHVhNzhiLVxcdWE3OGVcXHVhNzkwLVxcdWE3OTNcXHVhN2EwLVxcdWE3YWFcXHVhN2Y4LVxcdWE4MDFcXHVhODAzLVxcdWE4MDVcXHVhODA3LVxcdWE4MGFcXHVhODBjLVxcdWE4MjJcXHVhODQwLVxcdWE4NzNcXHVhODgyLVxcdWE4YjNcXHVhOGYyLVxcdWE4ZjdcXHVhOGZiXFx1YTkwYS1cXHVhOTI1XFx1YTkzMC1cXHVhOTQ2XFx1YTk2MC1cXHVhOTdjXFx1YTk4NC1cXHVhOWIyXFx1YTljZlxcdWFhMDAtXFx1YWEyOFxcdWFhNDAtXFx1YWE0MlxcdWFhNDQtXFx1YWE0YlxcdWFhNjAtXFx1YWE3NlxcdWFhN2FcXHVhYTgwLVxcdWFhYWZcXHVhYWIxXFx1YWFiNVxcdWFhYjZcXHVhYWI5LVxcdWFhYmRcXHVhYWMwXFx1YWFjMlxcdWFhZGItXFx1YWFkZFxcdWFhZTAtXFx1YWFlYVxcdWFhZjItXFx1YWFmNFxcdWFiMDEtXFx1YWIwNlxcdWFiMDktXFx1YWIwZVxcdWFiMTEtXFx1YWIxNlxcdWFiMjAtXFx1YWIyNlxcdWFiMjgtXFx1YWIyZVxcdWFiYzAtXFx1YWJlMlxcdWFjMDAtXFx1ZDdhM1xcdWQ3YjAtXFx1ZDdjNlxcdWQ3Y2ItXFx1ZDdmYlxcdWY5MDAtXFx1ZmE2ZFxcdWZhNzAtXFx1ZmFkOVxcdWZiMDAtXFx1ZmIwNlxcdWZiMTMtXFx1ZmIxN1xcdWZiMWRcXHVmYjFmLVxcdWZiMjhcXHVmYjJhLVxcdWZiMzZcXHVmYjM4LVxcdWZiM2NcXHVmYjNlXFx1ZmI0MFxcdWZiNDFcXHVmYjQzXFx1ZmI0NFxcdWZiNDYtXFx1ZmJiMVxcdWZiZDMtXFx1ZmQzZFxcdWZkNTAtXFx1ZmQ4ZlxcdWZkOTItXFx1ZmRjN1xcdWZkZjAtXFx1ZmRmYlxcdWZlNzAtXFx1ZmU3NFxcdWZlNzYtXFx1ZmVmY1xcdWZmMjEtXFx1ZmYzYVxcdWZmNDEtXFx1ZmY1YVxcdWZmNjYtXFx1ZmZiZVxcdWZmYzItXFx1ZmZjN1xcdWZmY2EtXFx1ZmZjZlxcdWZmZDItXFx1ZmZkN1xcdWZmZGEtXFx1ZmZkY11bJEEtWlxcX2EtelxceGFhXFx4YjVcXHhiYVxceGMwLVxceGQ2XFx4ZDgtXFx4ZjZcXHhmOC1cXHUwMmMxXFx1MDJjNi1cXHUwMmQxXFx1MDJlMC1cXHUwMmU0XFx1MDJlY1xcdTAyZWVcXHUwMzcwLVxcdTAzNzRcXHUwMzc2XFx1MDM3N1xcdTAzN2EtXFx1MDM3ZFxcdTAzODZcXHUwMzg4LVxcdTAzOGFcXHUwMzhjXFx1MDM4ZS1cXHUwM2ExXFx1MDNhMy1cXHUwM2Y1XFx1MDNmNy1cXHUwNDgxXFx1MDQ4YS1cXHUwNTI3XFx1MDUzMS1cXHUwNTU2XFx1MDU1OVxcdTA1NjEtXFx1MDU4N1xcdTA1ZDAtXFx1MDVlYVxcdTA1ZjAtXFx1MDVmMlxcdTA2MjAtXFx1MDY0YVxcdTA2NmVcXHUwNjZmXFx1MDY3MS1cXHUwNmQzXFx1MDZkNVxcdTA2ZTVcXHUwNmU2XFx1MDZlZVxcdTA2ZWZcXHUwNmZhLVxcdTA2ZmNcXHUwNmZmXFx1MDcxMFxcdTA3MTItXFx1MDcyZlxcdTA3NGQtXFx1MDdhNVxcdTA3YjFcXHUwN2NhLVxcdTA3ZWFcXHUwN2Y0XFx1MDdmNVxcdTA3ZmFcXHUwODAwLVxcdTA4MTVcXHUwODFhXFx1MDgyNFxcdTA4MjhcXHUwODQwLVxcdTA4NThcXHUwOGEwXFx1MDhhMi1cXHUwOGFjXFx1MDkwNC1cXHUwOTM5XFx1MDkzZFxcdTA5NTBcXHUwOTU4LVxcdTA5NjFcXHUwOTcxLVxcdTA5NzdcXHUwOTc5LVxcdTA5N2ZcXHUwOTg1LVxcdTA5OGNcXHUwOThmXFx1MDk5MFxcdTA5OTMtXFx1MDlhOFxcdTA5YWEtXFx1MDliMFxcdTA5YjJcXHUwOWI2LVxcdTA5YjlcXHUwOWJkXFx1MDljZVxcdTA5ZGNcXHUwOWRkXFx1MDlkZi1cXHUwOWUxXFx1MDlmMFxcdTA5ZjFcXHUwYTA1LVxcdTBhMGFcXHUwYTBmXFx1MGExMFxcdTBhMTMtXFx1MGEyOFxcdTBhMmEtXFx1MGEzMFxcdTBhMzJcXHUwYTMzXFx1MGEzNVxcdTBhMzZcXHUwYTM4XFx1MGEzOVxcdTBhNTktXFx1MGE1Y1xcdTBhNWVcXHUwYTcyLVxcdTBhNzRcXHUwYTg1LVxcdTBhOGRcXHUwYThmLVxcdTBhOTFcXHUwYTkzLVxcdTBhYThcXHUwYWFhLVxcdTBhYjBcXHUwYWIyXFx1MGFiM1xcdTBhYjUtXFx1MGFiOVxcdTBhYmRcXHUwYWQwXFx1MGFlMFxcdTBhZTFcXHUwYjA1LVxcdTBiMGNcXHUwYjBmXFx1MGIxMFxcdTBiMTMtXFx1MGIyOFxcdTBiMmEtXFx1MGIzMFxcdTBiMzJcXHUwYjMzXFx1MGIzNS1cXHUwYjM5XFx1MGIzZFxcdTBiNWNcXHUwYjVkXFx1MGI1Zi1cXHUwYjYxXFx1MGI3MVxcdTBiODNcXHUwYjg1LVxcdTBiOGFcXHUwYjhlLVxcdTBiOTBcXHUwYjkyLVxcdTBiOTVcXHUwYjk5XFx1MGI5YVxcdTBiOWNcXHUwYjllXFx1MGI5ZlxcdTBiYTNcXHUwYmE0XFx1MGJhOC1cXHUwYmFhXFx1MGJhZS1cXHUwYmI5XFx1MGJkMFxcdTBjMDUtXFx1MGMwY1xcdTBjMGUtXFx1MGMxMFxcdTBjMTItXFx1MGMyOFxcdTBjMmEtXFx1MGMzM1xcdTBjMzUtXFx1MGMzOVxcdTBjM2RcXHUwYzU4XFx1MGM1OVxcdTBjNjBcXHUwYzYxXFx1MGM4NS1cXHUwYzhjXFx1MGM4ZS1cXHUwYzkwXFx1MGM5Mi1cXHUwY2E4XFx1MGNhYS1cXHUwY2IzXFx1MGNiNS1cXHUwY2I5XFx1MGNiZFxcdTBjZGVcXHUwY2UwXFx1MGNlMVxcdTBjZjFcXHUwY2YyXFx1MGQwNS1cXHUwZDBjXFx1MGQwZS1cXHUwZDEwXFx1MGQxMi1cXHUwZDNhXFx1MGQzZFxcdTBkNGVcXHUwZDYwXFx1MGQ2MVxcdTBkN2EtXFx1MGQ3ZlxcdTBkODUtXFx1MGQ5NlxcdTBkOWEtXFx1MGRiMVxcdTBkYjMtXFx1MGRiYlxcdTBkYmRcXHUwZGMwLVxcdTBkYzZcXHUwZTAxLVxcdTBlMzBcXHUwZTMyXFx1MGUzM1xcdTBlNDAtXFx1MGU0NlxcdTBlODFcXHUwZTgyXFx1MGU4NFxcdTBlODdcXHUwZTg4XFx1MGU4YVxcdTBlOGRcXHUwZTk0LVxcdTBlOTdcXHUwZTk5LVxcdTBlOWZcXHUwZWExLVxcdTBlYTNcXHUwZWE1XFx1MGVhN1xcdTBlYWFcXHUwZWFiXFx1MGVhZC1cXHUwZWIwXFx1MGViMlxcdTBlYjNcXHUwZWJkXFx1MGVjMC1cXHUwZWM0XFx1MGVjNlxcdTBlZGMtXFx1MGVkZlxcdTBmMDBcXHUwZjQwLVxcdTBmNDdcXHUwZjQ5LVxcdTBmNmNcXHUwZjg4LVxcdTBmOGNcXHUxMDAwLVxcdTEwMmFcXHUxMDNmXFx1MTA1MC1cXHUxMDU1XFx1MTA1YS1cXHUxMDVkXFx1MTA2MVxcdTEwNjVcXHUxMDY2XFx1MTA2ZS1cXHUxMDcwXFx1MTA3NS1cXHUxMDgxXFx1MTA4ZVxcdTEwYTAtXFx1MTBjNVxcdTEwYzdcXHUxMGNkXFx1MTBkMC1cXHUxMGZhXFx1MTBmYy1cXHUxMjQ4XFx1MTI0YS1cXHUxMjRkXFx1MTI1MC1cXHUxMjU2XFx1MTI1OFxcdTEyNWEtXFx1MTI1ZFxcdTEyNjAtXFx1MTI4OFxcdTEyOGEtXFx1MTI4ZFxcdTEyOTAtXFx1MTJiMFxcdTEyYjItXFx1MTJiNVxcdTEyYjgtXFx1MTJiZVxcdTEyYzBcXHUxMmMyLVxcdTEyYzVcXHUxMmM4LVxcdTEyZDZcXHUxMmQ4LVxcdTEzMTBcXHUxMzEyLVxcdTEzMTVcXHUxMzE4LVxcdTEzNWFcXHUxMzgwLVxcdTEzOGZcXHUxM2EwLVxcdTEzZjRcXHUxNDAxLVxcdTE2NmNcXHUxNjZmLVxcdTE2N2ZcXHUxNjgxLVxcdTE2OWFcXHUxNmEwLVxcdTE2ZWFcXHUxNmVlLVxcdTE2ZjBcXHUxNzAwLVxcdTE3MGNcXHUxNzBlLVxcdTE3MTFcXHUxNzIwLVxcdTE3MzFcXHUxNzQwLVxcdTE3NTFcXHUxNzYwLVxcdTE3NmNcXHUxNzZlLVxcdTE3NzBcXHUxNzgwLVxcdTE3YjNcXHUxN2Q3XFx1MTdkY1xcdTE4MjAtXFx1MTg3N1xcdTE4ODAtXFx1MThhOFxcdTE4YWFcXHUxOGIwLVxcdTE4ZjVcXHUxOTAwLVxcdTE5MWNcXHUxOTUwLVxcdTE5NmRcXHUxOTcwLVxcdTE5NzRcXHUxOTgwLVxcdTE5YWJcXHUxOWMxLVxcdTE5YzdcXHUxYTAwLVxcdTFhMTZcXHUxYTIwLVxcdTFhNTRcXHUxYWE3XFx1MWIwNS1cXHUxYjMzXFx1MWI0NS1cXHUxYjRiXFx1MWI4My1cXHUxYmEwXFx1MWJhZVxcdTFiYWZcXHUxYmJhLVxcdTFiZTVcXHUxYzAwLVxcdTFjMjNcXHUxYzRkLVxcdTFjNGZcXHUxYzVhLVxcdTFjN2RcXHUxY2U5LVxcdTFjZWNcXHUxY2VlLVxcdTFjZjFcXHUxY2Y1XFx1MWNmNlxcdTFkMDAtXFx1MWRiZlxcdTFlMDAtXFx1MWYxNVxcdTFmMTgtXFx1MWYxZFxcdTFmMjAtXFx1MWY0NVxcdTFmNDgtXFx1MWY0ZFxcdTFmNTAtXFx1MWY1N1xcdTFmNTlcXHUxZjViXFx1MWY1ZFxcdTFmNWYtXFx1MWY3ZFxcdTFmODAtXFx1MWZiNFxcdTFmYjYtXFx1MWZiY1xcdTFmYmVcXHUxZmMyLVxcdTFmYzRcXHUxZmM2LVxcdTFmY2NcXHUxZmQwLVxcdTFmZDNcXHUxZmQ2LVxcdTFmZGJcXHUxZmUwLVxcdTFmZWNcXHUxZmYyLVxcdTFmZjRcXHUxZmY2LVxcdTFmZmNcXHUyMDcxXFx1MjA3ZlxcdTIwOTAtXFx1MjA5Y1xcdTIxMDJcXHUyMTA3XFx1MjEwYS1cXHUyMTEzXFx1MjExNVxcdTIxMTktXFx1MjExZFxcdTIxMjRcXHUyMTI2XFx1MjEyOFxcdTIxMmEtXFx1MjEyZFxcdTIxMmYtXFx1MjEzOVxcdTIxM2MtXFx1MjEzZlxcdTIxNDUtXFx1MjE0OVxcdTIxNGVcXHUyMTYwLVxcdTIxODhcXHUyYzAwLVxcdTJjMmVcXHUyYzMwLVxcdTJjNWVcXHUyYzYwLVxcdTJjZTRcXHUyY2ViLVxcdTJjZWVcXHUyY2YyXFx1MmNmM1xcdTJkMDAtXFx1MmQyNVxcdTJkMjdcXHUyZDJkXFx1MmQzMC1cXHUyZDY3XFx1MmQ2ZlxcdTJkODAtXFx1MmQ5NlxcdTJkYTAtXFx1MmRhNlxcdTJkYTgtXFx1MmRhZVxcdTJkYjAtXFx1MmRiNlxcdTJkYjgtXFx1MmRiZVxcdTJkYzAtXFx1MmRjNlxcdTJkYzgtXFx1MmRjZVxcdTJkZDAtXFx1MmRkNlxcdTJkZDgtXFx1MmRkZVxcdTJlMmZcXHUzMDA1LVxcdTMwMDdcXHUzMDIxLVxcdTMwMjlcXHUzMDMxLVxcdTMwMzVcXHUzMDM4LVxcdTMwM2NcXHUzMDQxLVxcdTMwOTZcXHUzMDlkLVxcdTMwOWZcXHUzMGExLVxcdTMwZmFcXHUzMGZjLVxcdTMwZmZcXHUzMTA1LVxcdTMxMmRcXHUzMTMxLVxcdTMxOGVcXHUzMWEwLVxcdTMxYmFcXHUzMWYwLVxcdTMxZmZcXHUzNDAwLVxcdTRkYjVcXHU0ZTAwLVxcdTlmY2NcXHVhMDAwLVxcdWE0OGNcXHVhNGQwLVxcdWE0ZmRcXHVhNTAwLVxcdWE2MGNcXHVhNjEwLVxcdWE2MWZcXHVhNjJhXFx1YTYyYlxcdWE2NDAtXFx1YTY2ZVxcdWE2N2YtXFx1YTY5N1xcdWE2YTAtXFx1YTZlZlxcdWE3MTctXFx1YTcxZlxcdWE3MjItXFx1YTc4OFxcdWE3OGItXFx1YTc4ZVxcdWE3OTAtXFx1YTc5M1xcdWE3YTAtXFx1YTdhYVxcdWE3ZjgtXFx1YTgwMVxcdWE4MDMtXFx1YTgwNVxcdWE4MDctXFx1YTgwYVxcdWE4MGMtXFx1YTgyMlxcdWE4NDAtXFx1YTg3M1xcdWE4ODItXFx1YThiM1xcdWE4ZjItXFx1YThmN1xcdWE4ZmJcXHVhOTBhLVxcdWE5MjVcXHVhOTMwLVxcdWE5NDZcXHVhOTYwLVxcdWE5N2NcXHVhOTg0LVxcdWE5YjJcXHVhOWNmXFx1YWEwMC1cXHVhYTI4XFx1YWE0MC1cXHVhYTQyXFx1YWE0NC1cXHVhYTRiXFx1YWE2MC1cXHVhYTc2XFx1YWE3YVxcdWFhODAtXFx1YWFhZlxcdWFhYjFcXHVhYWI1XFx1YWFiNlxcdWFhYjktXFx1YWFiZFxcdWFhYzBcXHVhYWMyXFx1YWFkYi1cXHVhYWRkXFx1YWFlMC1cXHVhYWVhXFx1YWFmMi1cXHVhYWY0XFx1YWIwMS1cXHVhYjA2XFx1YWIwOS1cXHVhYjBlXFx1YWIxMS1cXHVhYjE2XFx1YWIyMC1cXHVhYjI2XFx1YWIyOC1cXHVhYjJlXFx1YWJjMC1cXHVhYmUyXFx1YWMwMC1cXHVkN2EzXFx1ZDdiMC1cXHVkN2M2XFx1ZDdjYi1cXHVkN2ZiXFx1ZjkwMC1cXHVmYTZkXFx1ZmE3MC1cXHVmYWQ5XFx1ZmIwMC1cXHVmYjA2XFx1ZmIxMy1cXHVmYjE3XFx1ZmIxZFxcdWZiMWYtXFx1ZmIyOFxcdWZiMmEtXFx1ZmIzNlxcdWZiMzgtXFx1ZmIzY1xcdWZiM2VcXHVmYjQwXFx1ZmI0MVxcdWZiNDNcXHVmYjQ0XFx1ZmI0Ni1cXHVmYmIxXFx1ZmJkMy1cXHVmZDNkXFx1ZmQ1MC1cXHVmZDhmXFx1ZmQ5Mi1cXHVmZGM3XFx1ZmRmMC1cXHVmZGZiXFx1ZmU3MC1cXHVmZTc0XFx1ZmU3Ni1cXHVmZWZjXFx1ZmYyMS1cXHVmZjNhXFx1ZmY0MS1cXHVmZjVhXFx1ZmY2Ni1cXHVmZmJlXFx1ZmZjMi1cXHVmZmM3XFx1ZmZjYS1cXHVmZmNmXFx1ZmZkMi1cXHVmZmQ3XFx1ZmZkYS1cXHVmZmRjMC05XFx1MDMwMC1cXHUwMzZmXFx1MDQ4My1cXHUwNDg3XFx1MDU5MS1cXHUwNWJkXFx1MDViZlxcdTA1YzFcXHUwNWMyXFx1MDVjNFxcdTA1YzVcXHUwNWM3XFx1MDYxMC1cXHUwNjFhXFx1MDY0Yi1cXHUwNjY5XFx1MDY3MFxcdTA2ZDYtXFx1MDZkY1xcdTA2ZGYtXFx1MDZlNFxcdTA2ZTdcXHUwNmU4XFx1MDZlYS1cXHUwNmVkXFx1MDZmMC1cXHUwNmY5XFx1MDcxMVxcdTA3MzAtXFx1MDc0YVxcdTA3YTYtXFx1MDdiMFxcdTA3YzAtXFx1MDdjOVxcdTA3ZWItXFx1MDdmM1xcdTA4MTYtXFx1MDgxOVxcdTA4MWItXFx1MDgyM1xcdTA4MjUtXFx1MDgyN1xcdTA4MjktXFx1MDgyZFxcdTA4NTktXFx1MDg1YlxcdTA4ZTQtXFx1MDhmZVxcdTA5MDAtXFx1MDkwM1xcdTA5M2EtXFx1MDkzY1xcdTA5M2UtXFx1MDk0ZlxcdTA5NTEtXFx1MDk1N1xcdTA5NjJcXHUwOTYzXFx1MDk2Ni1cXHUwOTZmXFx1MDk4MS1cXHUwOTgzXFx1MDliY1xcdTA5YmUtXFx1MDljNFxcdTA5YzdcXHUwOWM4XFx1MDljYi1cXHUwOWNkXFx1MDlkN1xcdTA5ZTJcXHUwOWUzXFx1MDllNi1cXHUwOWVmXFx1MGEwMS1cXHUwYTAzXFx1MGEzY1xcdTBhM2UtXFx1MGE0MlxcdTBhNDdcXHUwYTQ4XFx1MGE0Yi1cXHUwYTRkXFx1MGE1MVxcdTBhNjYtXFx1MGE3MVxcdTBhNzVcXHUwYTgxLVxcdTBhODNcXHUwYWJjXFx1MGFiZS1cXHUwYWM1XFx1MGFjNy1cXHUwYWM5XFx1MGFjYi1cXHUwYWNkXFx1MGFlMlxcdTBhZTNcXHUwYWU2LVxcdTBhZWZcXHUwYjAxLVxcdTBiMDNcXHUwYjNjXFx1MGIzZS1cXHUwYjQ0XFx1MGI0N1xcdTBiNDhcXHUwYjRiLVxcdTBiNGRcXHUwYjU2XFx1MGI1N1xcdTBiNjJcXHUwYjYzXFx1MGI2Ni1cXHUwYjZmXFx1MGI4MlxcdTBiYmUtXFx1MGJjMlxcdTBiYzYtXFx1MGJjOFxcdTBiY2EtXFx1MGJjZFxcdTBiZDdcXHUwYmU2LVxcdTBiZWZcXHUwYzAxLVxcdTBjMDNcXHUwYzNlLVxcdTBjNDRcXHUwYzQ2LVxcdTBjNDhcXHUwYzRhLVxcdTBjNGRcXHUwYzU1XFx1MGM1NlxcdTBjNjJcXHUwYzYzXFx1MGM2Ni1cXHUwYzZmXFx1MGM4MlxcdTBjODNcXHUwY2JjXFx1MGNiZS1cXHUwY2M0XFx1MGNjNi1cXHUwY2M4XFx1MGNjYS1cXHUwY2NkXFx1MGNkNVxcdTBjZDZcXHUwY2UyXFx1MGNlM1xcdTBjZTYtXFx1MGNlZlxcdTBkMDJcXHUwZDAzXFx1MGQzZS1cXHUwZDQ0XFx1MGQ0Ni1cXHUwZDQ4XFx1MGQ0YS1cXHUwZDRkXFx1MGQ1N1xcdTBkNjJcXHUwZDYzXFx1MGQ2Ni1cXHUwZDZmXFx1MGQ4MlxcdTBkODNcXHUwZGNhXFx1MGRjZi1cXHUwZGQ0XFx1MGRkNlxcdTBkZDgtXFx1MGRkZlxcdTBkZjJcXHUwZGYzXFx1MGUzMVxcdTBlMzQtXFx1MGUzYVxcdTBlNDctXFx1MGU0ZVxcdTBlNTAtXFx1MGU1OVxcdTBlYjFcXHUwZWI0LVxcdTBlYjlcXHUwZWJiXFx1MGViY1xcdTBlYzgtXFx1MGVjZFxcdTBlZDAtXFx1MGVkOVxcdTBmMThcXHUwZjE5XFx1MGYyMC1cXHUwZjI5XFx1MGYzNVxcdTBmMzdcXHUwZjM5XFx1MGYzZVxcdTBmM2ZcXHUwZjcxLVxcdTBmODRcXHUwZjg2XFx1MGY4N1xcdTBmOGQtXFx1MGY5N1xcdTBmOTktXFx1MGZiY1xcdTBmYzZcXHUxMDJiLVxcdTEwM2VcXHUxMDQwLVxcdTEwNDlcXHUxMDU2LVxcdTEwNTlcXHUxMDVlLVxcdTEwNjBcXHUxMDYyLVxcdTEwNjRcXHUxMDY3LVxcdTEwNmRcXHUxMDcxLVxcdTEwNzRcXHUxMDgyLVxcdTEwOGRcXHUxMDhmLVxcdTEwOWRcXHUxMzVkLVxcdTEzNWZcXHUxNzEyLVxcdTE3MTRcXHUxNzMyLVxcdTE3MzRcXHUxNzUyXFx1MTc1M1xcdTE3NzJcXHUxNzczXFx1MTdiNC1cXHUxN2QzXFx1MTdkZFxcdTE3ZTAtXFx1MTdlOVxcdTE4MGItXFx1MTgwZFxcdTE4MTAtXFx1MTgxOVxcdTE4YTlcXHUxOTIwLVxcdTE5MmJcXHUxOTMwLVxcdTE5M2JcXHUxOTQ2LVxcdTE5NGZcXHUxOWIwLVxcdTE5YzBcXHUxOWM4XFx1MTljOVxcdTE5ZDAtXFx1MTlkOVxcdTFhMTctXFx1MWExYlxcdTFhNTUtXFx1MWE1ZVxcdTFhNjAtXFx1MWE3Y1xcdTFhN2YtXFx1MWE4OVxcdTFhOTAtXFx1MWE5OVxcdTFiMDAtXFx1MWIwNFxcdTFiMzQtXFx1MWI0NFxcdTFiNTAtXFx1MWI1OVxcdTFiNmItXFx1MWI3M1xcdTFiODAtXFx1MWI4MlxcdTFiYTEtXFx1MWJhZFxcdTFiYjAtXFx1MWJiOVxcdTFiZTYtXFx1MWJmM1xcdTFjMjQtXFx1MWMzN1xcdTFjNDAtXFx1MWM0OVxcdTFjNTAtXFx1MWM1OVxcdTFjZDAtXFx1MWNkMlxcdTFjZDQtXFx1MWNlOFxcdTFjZWRcXHUxY2YyLVxcdTFjZjRcXHUxZGMwLVxcdTFkZTZcXHUxZGZjLVxcdTFkZmZcXHUyMDBjXFx1MjAwZFxcdTIwM2ZcXHUyMDQwXFx1MjA1NFxcdTIwZDAtXFx1MjBkY1xcdTIwZTFcXHUyMGU1LVxcdTIwZjBcXHUyY2VmLVxcdTJjZjFcXHUyZDdmXFx1MmRlMC1cXHUyZGZmXFx1MzAyYS1cXHUzMDJmXFx1MzA5OVxcdTMwOWFcXHVhNjIwLVxcdWE2MjlcXHVhNjZmXFx1YTY3NC1cXHVhNjdkXFx1YTY5ZlxcdWE2ZjBcXHVhNmYxXFx1YTgwMlxcdWE4MDZcXHVhODBiXFx1YTgyMy1cXHVhODI3XFx1YTg4MFxcdWE4ODFcXHVhOGI0LVxcdWE4YzRcXHVhOGQwLVxcdWE4ZDlcXHVhOGUwLVxcdWE4ZjFcXHVhOTAwLVxcdWE5MDlcXHVhOTI2LVxcdWE5MmRcXHVhOTQ3LVxcdWE5NTNcXHVhOTgwLVxcdWE5ODNcXHVhOWIzLVxcdWE5YzBcXHVhOWQwLVxcdWE5ZDlcXHVhYTI5LVxcdWFhMzZcXHVhYTQzXFx1YWE0Y1xcdWFhNGRcXHVhYTUwLVxcdWFhNTlcXHVhYTdiXFx1YWFiMFxcdWFhYjItXFx1YWFiNFxcdWFhYjdcXHVhYWI4XFx1YWFiZVxcdWFhYmZcXHVhYWMxXFx1YWFlYi1cXHVhYWVmXFx1YWFmNVxcdWFhZjZcXHVhYmUzLVxcdWFiZWFcXHVhYmVjXFx1YWJlZFxcdWFiZjAtXFx1YWJmOVxcdWZiMWVcXHVmZTAwLVxcdWZlMGZcXHVmZTIwLVxcdWZlMjZcXHVmZTMzXFx1ZmUzNFxcdWZlNGQtXFx1ZmU0ZlxcdWZmMTAtXFx1ZmYxOVxcdWZmM2ZdKiQvLnRlc3Qoc3RyKVxufVxubW9kdWxlLmV4cG9ydHMgPSBpc1Byb3BlcnR5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaXMtcHJvcGVydHkvaXMtcHJvcGVydHkuanNcbiAqKiBtb2R1bGUgaWQgPSA1OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJylcblxudmFyIElOREVOVF9TVEFSVCA9IC9bXFx7XFxbXS9cbnZhciBJTkRFTlRfRU5EID0gL1tcXH1cXF1dL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbGluZXMgPSBbXVxuICB2YXIgaW5kZW50ID0gMFxuXG4gIHZhciBwdXNoID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgdmFyIHNwYWNlcyA9ICcnXG4gICAgd2hpbGUgKHNwYWNlcy5sZW5ndGggPCBpbmRlbnQqMikgc3BhY2VzICs9ICcgICdcbiAgICBsaW5lcy5wdXNoKHNwYWNlcytzdHIpXG4gIH1cblxuICB2YXIgbGluZSA9IGZ1bmN0aW9uKGZtdCkge1xuICAgIGlmICghZm10KSByZXR1cm4gbGluZVxuXG4gICAgaWYgKElOREVOVF9FTkQudGVzdChmbXQudHJpbSgpWzBdKSAmJiBJTkRFTlRfU1RBUlQudGVzdChmbXRbZm10Lmxlbmd0aC0xXSkpIHtcbiAgICAgIGluZGVudC0tXG4gICAgICBwdXNoKHV0aWwuZm9ybWF0LmFwcGx5KHV0aWwsIGFyZ3VtZW50cykpXG4gICAgICBpbmRlbnQrK1xuICAgICAgcmV0dXJuIGxpbmVcbiAgICB9XG4gICAgaWYgKElOREVOVF9TVEFSVC50ZXN0KGZtdFtmbXQubGVuZ3RoLTFdKSkge1xuICAgICAgcHVzaCh1dGlsLmZvcm1hdC5hcHBseSh1dGlsLCBhcmd1bWVudHMpKVxuICAgICAgaW5kZW50KytcbiAgICAgIHJldHVybiBsaW5lXG4gICAgfVxuICAgIGlmIChJTkRFTlRfRU5ELnRlc3QoZm10LnRyaW0oKVswXSkpIHtcbiAgICAgIGluZGVudC0tXG4gICAgICBwdXNoKHV0aWwuZm9ybWF0LmFwcGx5KHV0aWwsIGFyZ3VtZW50cykpXG4gICAgICByZXR1cm4gbGluZVxuICAgIH1cblxuICAgIHB1c2godXRpbC5mb3JtYXQuYXBwbHkodXRpbCwgYXJndW1lbnRzKSlcbiAgICByZXR1cm4gbGluZVxuICB9XG5cbiAgbGluZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBsaW5lcy5qb2luKCdcXG4nKVxuICB9XG5cbiAgbGluZS50b0Z1bmN0aW9uID0gZnVuY3Rpb24oc2NvcGUpIHtcbiAgICB2YXIgc3JjID0gJ3JldHVybiAoJytsaW5lLnRvU3RyaW5nKCkrJyknXG5cbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHNjb3BlIHx8IHt9KS5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4ga2V5XG4gICAgfSlcblxuICAgIHZhciB2YWxzID0ga2V5cy5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gc2NvcGVba2V5XVxuICAgIH0pXG5cbiAgICByZXR1cm4gRnVuY3Rpb24uYXBwbHkobnVsbCwga2V5cy5jb25jYXQoc3JjKSkuYXBwbHkobnVsbCwgdmFscylcbiAgfVxuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoKSBsaW5lLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcblxuICByZXR1cm4gbGluZVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZ2VuZXJhdGUtZnVuY3Rpb24vaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA2MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbnZhciBmb3JtYXRSZWdFeHAgPSAvJVtzZGolXS9nO1xuZXhwb3J0cy5mb3JtYXQgPSBmdW5jdGlvbihmKSB7XG4gIGlmICghaXNTdHJpbmcoZikpIHtcbiAgICB2YXIgb2JqZWN0cyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBvYmplY3RzLnB1c2goaW5zcGVjdChhcmd1bWVudHNbaV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdHMuam9pbignICcpO1xuICB9XG5cbiAgdmFyIGkgPSAxO1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgc3RyID0gU3RyaW5nKGYpLnJlcGxhY2UoZm9ybWF0UmVnRXhwLCBmdW5jdGlvbih4KSB7XG4gICAgaWYgKHggPT09ICclJScpIHJldHVybiAnJSc7XG4gICAgaWYgKGkgPj0gbGVuKSByZXR1cm4geDtcbiAgICBzd2l0Y2ggKHgpIHtcbiAgICAgIGNhc2UgJyVzJzogcmV0dXJuIFN0cmluZyhhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWQnOiByZXR1cm4gTnVtYmVyKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclaic6XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFyZ3NbaSsrXSk7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICByZXR1cm4gJ1tDaXJjdWxhcl0nO1xuICAgICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gIH0pO1xuICBmb3IgKHZhciB4ID0gYXJnc1tpXTsgaSA8IGxlbjsgeCA9IGFyZ3NbKytpXSkge1xuICAgIGlmIChpc051bGwoeCkgfHwgIWlzT2JqZWN0KHgpKSB7XG4gICAgICBzdHIgKz0gJyAnICsgeDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyICs9ICcgJyArIGluc3BlY3QoeCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdHI7XG59O1xuXG5cbi8vIE1hcmsgdGhhdCBhIG1ldGhvZCBzaG91bGQgbm90IGJlIHVzZWQuXG4vLyBSZXR1cm5zIGEgbW9kaWZpZWQgZnVuY3Rpb24gd2hpY2ggd2FybnMgb25jZSBieSBkZWZhdWx0LlxuLy8gSWYgLS1uby1kZXByZWNhdGlvbiBpcyBzZXQsIHRoZW4gaXQgaXMgYSBuby1vcC5cbmV4cG9ydHMuZGVwcmVjYXRlID0gZnVuY3Rpb24oZm4sIG1zZykge1xuICAvLyBBbGxvdyBmb3IgZGVwcmVjYXRpbmcgdGhpbmdzIGluIHRoZSBwcm9jZXNzIG9mIHN0YXJ0aW5nIHVwLlxuICBpZiAoaXNVbmRlZmluZWQoZ2xvYmFsLnByb2Nlc3MpKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGV4cG9ydHMuZGVwcmVjYXRlKGZuLCBtc2cpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLm5vRGVwcmVjYXRpb24gPT09IHRydWUpIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICB2YXIgd2FybmVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGRlcHJlY2F0ZWQoKSB7XG4gICAgaWYgKCF3YXJuZWQpIHtcbiAgICAgIGlmIChwcm9jZXNzLnRocm93RGVwcmVjYXRpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3MudHJhY2VEZXByZWNhdGlvbikge1xuICAgICAgICBjb25zb2xlLnRyYWNlKG1zZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XG4gICAgICB9XG4gICAgICB3YXJuZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBkZXByZWNhdGVkO1xufTtcblxuXG52YXIgZGVidWdzID0ge307XG52YXIgZGVidWdFbnZpcm9uO1xuZXhwb3J0cy5kZWJ1Z2xvZyA9IGZ1bmN0aW9uKHNldCkge1xuICBpZiAoaXNVbmRlZmluZWQoZGVidWdFbnZpcm9uKSlcbiAgICBkZWJ1Z0Vudmlyb24gPSBwcm9jZXNzLmVudi5OT0RFX0RFQlVHIHx8ICcnO1xuICBzZXQgPSBzZXQudG9VcHBlckNhc2UoKTtcbiAgaWYgKCFkZWJ1Z3Nbc2V0XSkge1xuICAgIGlmIChuZXcgUmVnRXhwKCdcXFxcYicgKyBzZXQgKyAnXFxcXGInLCAnaScpLnRlc3QoZGVidWdFbnZpcm9uKSkge1xuICAgICAgdmFyIHBpZCA9IHByb2Nlc3MucGlkO1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1zZyA9IGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJyVzICVkOiAlcycsIHNldCwgcGlkLCBtc2cpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHt9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVidWdzW3NldF07XG59O1xuXG5cbi8qKlxuICogRWNob3MgdGhlIHZhbHVlIG9mIGEgdmFsdWUuIFRyeXMgdG8gcHJpbnQgdGhlIHZhbHVlIG91dFxuICogaW4gdGhlIGJlc3Qgd2F5IHBvc3NpYmxlIGdpdmVuIHRoZSBkaWZmZXJlbnQgdHlwZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIHByaW50IG91dC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIE9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0IHRoYXQgYWx0ZXJzIHRoZSBvdXRwdXQuXG4gKi9cbi8qIGxlZ2FjeTogb2JqLCBzaG93SGlkZGVuLCBkZXB0aCwgY29sb3JzKi9cbmZ1bmN0aW9uIGluc3BlY3Qob2JqLCBvcHRzKSB7XG4gIC8vIGRlZmF1bHQgb3B0aW9uc1xuICB2YXIgY3R4ID0ge1xuICAgIHNlZW46IFtdLFxuICAgIHN0eWxpemU6IHN0eWxpemVOb0NvbG9yXG4gIH07XG4gIC8vIGxlZ2FjeS4uLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAzKSBjdHguZGVwdGggPSBhcmd1bWVudHNbMl07XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDQpIGN0eC5jb2xvcnMgPSBhcmd1bWVudHNbM107XG4gIGlmIChpc0Jvb2xlYW4ob3B0cykpIHtcbiAgICAvLyBsZWdhY3kuLi5cbiAgICBjdHguc2hvd0hpZGRlbiA9IG9wdHM7XG4gIH0gZWxzZSBpZiAob3B0cykge1xuICAgIC8vIGdvdCBhbiBcIm9wdGlvbnNcIiBvYmplY3RcbiAgICBleHBvcnRzLl9leHRlbmQoY3R4LCBvcHRzKTtcbiAgfVxuICAvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG4gIGlmIChpc1VuZGVmaW5lZChjdHguc2hvd0hpZGRlbikpIGN0eC5zaG93SGlkZGVuID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguZGVwdGgpKSBjdHguZGVwdGggPSAyO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmNvbG9ycykpIGN0eC5jb2xvcnMgPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jdXN0b21JbnNwZWN0KSkgY3R4LmN1c3RvbUluc3BlY3QgPSB0cnVlO1xuICBpZiAoY3R4LmNvbG9ycykgY3R4LnN0eWxpemUgPSBzdHlsaXplV2l0aENvbG9yO1xuICByZXR1cm4gZm9ybWF0VmFsdWUoY3R4LCBvYmosIGN0eC5kZXB0aCk7XG59XG5leHBvcnRzLmluc3BlY3QgPSBpbnNwZWN0O1xuXG5cbi8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQU5TSV9lc2NhcGVfY29kZSNncmFwaGljc1xuaW5zcGVjdC5jb2xvcnMgPSB7XG4gICdib2xkJyA6IFsxLCAyMl0sXG4gICdpdGFsaWMnIDogWzMsIDIzXSxcbiAgJ3VuZGVybGluZScgOiBbNCwgMjRdLFxuICAnaW52ZXJzZScgOiBbNywgMjddLFxuICAnd2hpdGUnIDogWzM3LCAzOV0sXG4gICdncmV5JyA6IFs5MCwgMzldLFxuICAnYmxhY2snIDogWzMwLCAzOV0sXG4gICdibHVlJyA6IFszNCwgMzldLFxuICAnY3lhbicgOiBbMzYsIDM5XSxcbiAgJ2dyZWVuJyA6IFszMiwgMzldLFxuICAnbWFnZW50YScgOiBbMzUsIDM5XSxcbiAgJ3JlZCcgOiBbMzEsIDM5XSxcbiAgJ3llbGxvdycgOiBbMzMsIDM5XVxufTtcblxuLy8gRG9uJ3QgdXNlICdibHVlJyBub3QgdmlzaWJsZSBvbiBjbWQuZXhlXG5pbnNwZWN0LnN0eWxlcyA9IHtcbiAgJ3NwZWNpYWwnOiAnY3lhbicsXG4gICdudW1iZXInOiAneWVsbG93JyxcbiAgJ2Jvb2xlYW4nOiAneWVsbG93JyxcbiAgJ3VuZGVmaW5lZCc6ICdncmV5JyxcbiAgJ251bGwnOiAnYm9sZCcsXG4gICdzdHJpbmcnOiAnZ3JlZW4nLFxuICAnZGF0ZSc6ICdtYWdlbnRhJyxcbiAgLy8gXCJuYW1lXCI6IGludGVudGlvbmFsbHkgbm90IHN0eWxpbmdcbiAgJ3JlZ2V4cCc6ICdyZWQnXG59O1xuXG5cbmZ1bmN0aW9uIHN0eWxpemVXaXRoQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgdmFyIHN0eWxlID0gaW5zcGVjdC5zdHlsZXNbc3R5bGVUeXBlXTtcblxuICBpZiAoc3R5bGUpIHtcbiAgICByZXR1cm4gJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVswXSArICdtJyArIHN0ciArXG4gICAgICAgICAgICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMV0gKyAnbSc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHN0eWxpemVOb0NvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHJldHVybiBzdHI7XG59XG5cblxuZnVuY3Rpb24gYXJyYXlUb0hhc2goYXJyYXkpIHtcbiAgdmFyIGhhc2ggPSB7fTtcblxuICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKHZhbCwgaWR4KSB7XG4gICAgaGFzaFt2YWxdID0gdHJ1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGhhc2g7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0VmFsdWUoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzKSB7XG4gIC8vIFByb3ZpZGUgYSBob29rIGZvciB1c2VyLXNwZWNpZmllZCBpbnNwZWN0IGZ1bmN0aW9ucy5cbiAgLy8gQ2hlY2sgdGhhdCB2YWx1ZSBpcyBhbiBvYmplY3Qgd2l0aCBhbiBpbnNwZWN0IGZ1bmN0aW9uIG9uIGl0XG4gIGlmIChjdHguY3VzdG9tSW5zcGVjdCAmJlxuICAgICAgdmFsdWUgJiZcbiAgICAgIGlzRnVuY3Rpb24odmFsdWUuaW5zcGVjdCkgJiZcbiAgICAgIC8vIEZpbHRlciBvdXQgdGhlIHV0aWwgbW9kdWxlLCBpdCdzIGluc3BlY3QgZnVuY3Rpb24gaXMgc3BlY2lhbFxuICAgICAgdmFsdWUuaW5zcGVjdCAhPT0gZXhwb3J0cy5pbnNwZWN0ICYmXG4gICAgICAvLyBBbHNvIGZpbHRlciBvdXQgYW55IHByb3RvdHlwZSBvYmplY3RzIHVzaW5nIHRoZSBjaXJjdWxhciBjaGVjay5cbiAgICAgICEodmFsdWUuY29uc3RydWN0b3IgJiYgdmFsdWUuY29uc3RydWN0b3IucHJvdG90eXBlID09PSB2YWx1ZSkpIHtcbiAgICB2YXIgcmV0ID0gdmFsdWUuaW5zcGVjdChyZWN1cnNlVGltZXMsIGN0eCk7XG4gICAgaWYgKCFpc1N0cmluZyhyZXQpKSB7XG4gICAgICByZXQgPSBmb3JtYXRWYWx1ZShjdHgsIHJldCwgcmVjdXJzZVRpbWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vIFByaW1pdGl2ZSB0eXBlcyBjYW5ub3QgaGF2ZSBwcm9wZXJ0aWVzXG4gIHZhciBwcmltaXRpdmUgPSBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSk7XG4gIGlmIChwcmltaXRpdmUpIHtcbiAgICByZXR1cm4gcHJpbWl0aXZlO1xuICB9XG5cbiAgLy8gTG9vayB1cCB0aGUga2V5cyBvZiB0aGUgb2JqZWN0LlxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgdmFyIHZpc2libGVLZXlzID0gYXJyYXlUb0hhc2goa2V5cyk7XG5cbiAgaWYgKGN0eC5zaG93SGlkZGVuKSB7XG4gICAga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlKTtcbiAgfVxuXG4gIC8vIElFIGRvZXNuJ3QgbWFrZSBlcnJvciBmaWVsZHMgbm9uLWVudW1lcmFibGVcbiAgLy8gaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2R3dzUyc2J0KHY9dnMuOTQpLmFzcHhcbiAgaWYgKGlzRXJyb3IodmFsdWUpXG4gICAgICAmJiAoa2V5cy5pbmRleE9mKCdtZXNzYWdlJykgPj0gMCB8fCBrZXlzLmluZGV4T2YoJ2Rlc2NyaXB0aW9uJykgPj0gMCkpIHtcbiAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgLy8gU29tZSB0eXBlIG9mIG9iamVjdCB3aXRob3V0IHByb3BlcnRpZXMgY2FuIGJlIHNob3J0Y3V0dGVkLlxuICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgIHZhciBuYW1lID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tGdW5jdGlvbicgKyBuYW1lICsgJ10nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH1cbiAgICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAnZGF0ZScpO1xuICAgIH1cbiAgICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGJhc2UgPSAnJywgYXJyYXkgPSBmYWxzZSwgYnJhY2VzID0gWyd7JywgJ30nXTtcblxuICAvLyBNYWtlIEFycmF5IHNheSB0aGF0IHRoZXkgYXJlIEFycmF5XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIGFycmF5ID0gdHJ1ZTtcbiAgICBicmFjZXMgPSBbJ1snLCAnXSddO1xuICB9XG5cbiAgLy8gTWFrZSBmdW5jdGlvbnMgc2F5IHRoYXQgdGhleSBhcmUgZnVuY3Rpb25zXG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIHZhciBuID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgYmFzZSA9ICcgW0Z1bmN0aW9uJyArIG4gKyAnXSc7XG4gIH1cblxuICAvLyBNYWtlIFJlZ0V4cHMgc2F5IHRoYXQgdGhleSBhcmUgUmVnRXhwc1xuICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGRhdGVzIHdpdGggcHJvcGVydGllcyBmaXJzdCBzYXkgdGhlIGRhdGVcbiAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgRGF0ZS5wcm90b3R5cGUudG9VVENTdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGVycm9yIHdpdGggbWVzc2FnZSBmaXJzdCBzYXkgdGhlIGVycm9yXG4gIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICBpZiAoa2V5cy5sZW5ndGggPT09IDAgJiYgKCFhcnJheSB8fCB2YWx1ZS5sZW5ndGggPT0gMCkpIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArIGJyYWNlc1sxXTtcbiAgfVxuXG4gIGlmIChyZWN1cnNlVGltZXMgPCAwKSB7XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbT2JqZWN0XScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG5cbiAgY3R4LnNlZW4ucHVzaCh2YWx1ZSk7XG5cbiAgdmFyIG91dHB1dDtcbiAgaWYgKGFycmF5KSB7XG4gICAgb3V0cHV0ID0gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cyk7XG4gIH0gZWxzZSB7XG4gICAgb3V0cHV0ID0ga2V5cy5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSk7XG4gICAgfSk7XG4gIH1cblxuICBjdHguc2Vlbi5wb3AoKTtcblxuICByZXR1cm4gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKSB7XG4gIGlmIChpc1VuZGVmaW5lZCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCd1bmRlZmluZWQnLCAndW5kZWZpbmVkJyk7XG4gIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICB2YXIgc2ltcGxlID0gJ1xcJycgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkucmVwbGFjZSgvXlwifFwiJC9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJykgKyAnXFwnJztcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoc2ltcGxlLCAnc3RyaW5nJyk7XG4gIH1cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ251bWJlcicpO1xuICBpZiAoaXNCb29sZWFuKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ2Jvb2xlYW4nKTtcbiAgLy8gRm9yIHNvbWUgcmVhc29uIHR5cGVvZiBudWxsIGlzIFwib2JqZWN0XCIsIHNvIHNwZWNpYWwgY2FzZSBoZXJlLlxuICBpZiAoaXNOdWxsKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ251bGwnLCAnbnVsbCcpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEVycm9yKHZhbHVlKSB7XG4gIHJldHVybiAnWycgKyBFcnJvci5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgKyAnXSc7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cykge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5KHZhbHVlLCBTdHJpbmcoaSkpKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIFN0cmluZyhpKSwgdHJ1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQucHVzaCgnJyk7XG4gICAgfVxuICB9XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoIWtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAga2V5LCB0cnVlKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KSB7XG4gIHZhciBuYW1lLCBzdHIsIGRlc2M7XG4gIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHZhbHVlLCBrZXkpIHx8IHsgdmFsdWU6IHZhbHVlW2tleV0gfTtcbiAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlci9TZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoIWhhc093blByb3BlcnR5KHZpc2libGVLZXlzLCBrZXkpKSB7XG4gICAgbmFtZSA9ICdbJyArIGtleSArICddJztcbiAgfVxuICBpZiAoIXN0cikge1xuICAgIGlmIChjdHguc2Vlbi5pbmRleE9mKGRlc2MudmFsdWUpIDwgMCkge1xuICAgICAgaWYgKGlzTnVsbChyZWN1cnNlVGltZXMpKSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgbnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIHJlY3Vyc2VUaW1lcyAtIDEpO1xuICAgICAgfVxuICAgICAgaWYgKHN0ci5pbmRleE9mKCdcXG4nKSA+IC0xKSB7XG4gICAgICAgIGlmIChhcnJheSkge1xuICAgICAgICAgIHN0ciA9IHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKS5zdWJzdHIoMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RyID0gJ1xcbicgKyBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbQ2lyY3VsYXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzVW5kZWZpbmVkKG5hbWUpKSB7XG4gICAgaWYgKGFycmF5ICYmIGtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIG5hbWUgPSBKU09OLnN0cmluZ2lmeSgnJyArIGtleSk7XG4gICAgaWYgKG5hbWUubWF0Y2goL15cIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVwiJC8pKSB7XG4gICAgICBuYW1lID0gbmFtZS5zdWJzdHIoMSwgbmFtZS5sZW5ndGggLSAyKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnbmFtZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvKF5cInxcIiQpL2csIFwiJ1wiKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnc3RyaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5hbWUgKyAnOiAnICsgc3RyO1xufVxuXG5cbmZ1bmN0aW9uIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKSB7XG4gIHZhciBudW1MaW5lc0VzdCA9IDA7XG4gIHZhciBsZW5ndGggPSBvdXRwdXQucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cikge1xuICAgIG51bUxpbmVzRXN0Kys7XG4gICAgaWYgKGN1ci5pbmRleE9mKCdcXG4nKSA+PSAwKSBudW1MaW5lc0VzdCsrO1xuICAgIHJldHVybiBwcmV2ICsgY3VyLnJlcGxhY2UoL1xcdTAwMWJcXFtcXGRcXGQ/bS9nLCAnJykubGVuZ3RoICsgMTtcbiAgfSwgMCk7XG5cbiAgaWYgKGxlbmd0aCA+IDYwKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArXG4gICAgICAgICAgIChiYXNlID09PSAnJyA/ICcnIDogYmFzZSArICdcXG4gJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBvdXRwdXQuam9pbignLFxcbiAgJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBicmFjZXNbMV07XG4gIH1cblxuICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArICcgJyArIG91dHB1dC5qb2luKCcsICcpICsgJyAnICsgYnJhY2VzWzFdO1xufVxuXG5cbi8vIE5PVEU6IFRoZXNlIHR5cGUgY2hlY2tpbmcgZnVuY3Rpb25zIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIGBpbnN0YW5jZW9mYFxuLy8gYmVjYXVzZSBpdCBpcyBmcmFnaWxlIGFuZCBjYW4gYmUgZWFzaWx5IGZha2VkIHdpdGggYE9iamVjdC5jcmVhdGUoKWAuXG5mdW5jdGlvbiBpc0FycmF5KGFyKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFyKTtcbn1cbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJztcbn1cbmV4cG9ydHMuaXNCb29sZWFuID0gaXNCb29sZWFuO1xuXG5mdW5jdGlvbiBpc051bGwoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbCA9IGlzTnVsbDtcblxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsT3JVbmRlZmluZWQgPSBpc051bGxPclVuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcblxuZnVuY3Rpb24gaXNTdHJpbmcoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3RyaW5nJztcbn1cbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcblxuZnVuY3Rpb24gaXNTeW1ib2woYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3ltYm9sJztcbn1cbmV4cG9ydHMuaXNTeW1ib2wgPSBpc1N5bWJvbDtcblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNSZWdFeHAocmUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHJlKSAmJiBvYmplY3RUb1N0cmluZyhyZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuZXhwb3J0cy5pc1JlZ0V4cCA9IGlzUmVnRXhwO1xuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcblxuZnVuY3Rpb24gaXNEYXRlKGQpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGQpICYmIG9iamVjdFRvU3RyaW5nKGQpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5leHBvcnRzLmlzRGF0ZSA9IGlzRGF0ZTtcblxuZnVuY3Rpb24gaXNFcnJvcihlKSB7XG4gIHJldHVybiBpc09iamVjdChlKSAmJlxuICAgICAgKG9iamVjdFRvU3RyaW5nKGUpID09PSAnW29iamVjdCBFcnJvcl0nIHx8IGUgaW5zdGFuY2VvZiBFcnJvcik7XG59XG5leHBvcnRzLmlzRXJyb3IgPSBpc0Vycm9yO1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnYm9vbGVhbicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdudW1iZXInIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCcgfHwgIC8vIEVTNiBzeW1ib2xcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICd1bmRlZmluZWQnO1xufVxuZXhwb3J0cy5pc1ByaW1pdGl2ZSA9IGlzUHJpbWl0aXZlO1xuXG5leHBvcnRzLmlzQnVmZmVyID0gcmVxdWlyZSgnLi9zdXBwb3J0L2lzQnVmZmVyJyk7XG5cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKTtcbn1cblxuXG5mdW5jdGlvbiBwYWQobikge1xuICByZXR1cm4gbiA8IDEwID8gJzAnICsgbi50b1N0cmluZygxMCkgOiBuLnRvU3RyaW5nKDEwKTtcbn1cblxuXG52YXIgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsXG4gICAgICAgICAgICAgICdPY3QnLCAnTm92JywgJ0RlYyddO1xuXG4vLyAyNiBGZWIgMTY6MTk6MzRcbmZ1bmN0aW9uIHRpbWVzdGFtcCgpIHtcbiAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICB2YXIgdGltZSA9IFtwYWQoZC5nZXRIb3VycygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0TWludXRlcygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0U2Vjb25kcygpKV0uam9pbignOicpO1xuICByZXR1cm4gW2QuZ2V0RGF0ZSgpLCBtb250aHNbZC5nZXRNb250aCgpXSwgdGltZV0uam9pbignICcpO1xufVxuXG5cbi8vIGxvZyBpcyBqdXN0IGEgdGhpbiB3cmFwcGVyIHRvIGNvbnNvbGUubG9nIHRoYXQgcHJlcGVuZHMgYSB0aW1lc3RhbXBcbmV4cG9ydHMubG9nID0gZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCclcyAtICVzJywgdGltZXN0YW1wKCksIGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cykpO1xufTtcblxuXG4vKipcbiAqIEluaGVyaXQgdGhlIHByb3RvdHlwZSBtZXRob2RzIGZyb20gb25lIGNvbnN0cnVjdG9yIGludG8gYW5vdGhlci5cbiAqXG4gKiBUaGUgRnVuY3Rpb24ucHJvdG90eXBlLmluaGVyaXRzIGZyb20gbGFuZy5qcyByZXdyaXR0ZW4gYXMgYSBzdGFuZGFsb25lXG4gKiBmdW5jdGlvbiAobm90IG9uIEZ1bmN0aW9uLnByb3RvdHlwZSkuIE5PVEU6IElmIHRoaXMgZmlsZSBpcyB0byBiZSBsb2FkZWRcbiAqIGR1cmluZyBib290c3RyYXBwaW5nIHRoaXMgZnVuY3Rpb24gbmVlZHMgdG8gYmUgcmV3cml0dGVuIHVzaW5nIHNvbWUgbmF0aXZlXG4gKiBmdW5jdGlvbnMgYXMgcHJvdG90eXBlIHNldHVwIHVzaW5nIG5vcm1hbCBKYXZhU2NyaXB0IGRvZXMgbm90IHdvcmsgYXNcbiAqIGV4cGVjdGVkIGR1cmluZyBib290c3RyYXBwaW5nIChzZWUgbWlycm9yLmpzIGluIHIxMTQ5MDMpLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gd2hpY2ggbmVlZHMgdG8gaW5oZXJpdCB0aGVcbiAqICAgICBwcm90b3R5cGUuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBzdXBlckN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gdG8gaW5oZXJpdCBwcm90b3R5cGUgZnJvbS5cbiAqL1xuZXhwb3J0cy5pbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG5cbmV4cG9ydHMuX2V4dGVuZCA9IGZ1bmN0aW9uKG9yaWdpbiwgYWRkKSB7XG4gIC8vIERvbid0IGRvIGFueXRoaW5nIGlmIGFkZCBpc24ndCBhbiBvYmplY3RcbiAgaWYgKCFhZGQgfHwgIWlzT2JqZWN0KGFkZCkpIHJldHVybiBvcmlnaW47XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhZGQpO1xuICB2YXIgaSA9IGtleXMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgb3JpZ2luW2tleXNbaV1dID0gYWRkW2tleXNbaV1dO1xuICB9XG4gIHJldHVybiBvcmlnaW47XG59O1xuXG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdXRpbC91dGlsLmpzXG4gKiogbW9kdWxlIGlkID0gNjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCdWZmZXIoYXJnKSB7XG4gIHJldHVybiBhcmcgJiYgdHlwZW9mIGFyZyA9PT0gJ29iamVjdCdcbiAgICAmJiB0eXBlb2YgYXJnLmNvcHkgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLmZpbGwgPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgYXJnLnJlYWRVSW50OCA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi91dGlsL3N1cHBvcnQvaXNCdWZmZXJCcm93c2VyLmpzXG4gKiogbW9kdWxlIGlkID0gNjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgY3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ3Rvci5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufSBlbHNlIHtcbiAgLy8gb2xkIHNjaG9vbCBzaGltIGZvciBvbGQgYnJvd3NlcnNcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgVGVtcEN0b3IucHJvdG90eXBlID0gc3VwZXJDdG9yLnByb3RvdHlwZVxuICAgIGN0b3IucHJvdG90eXBlID0gbmV3IFRlbXBDdG9yKClcbiAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgfVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaW5oZXJpdHMvaW5oZXJpdHNfYnJvd3Nlci5qc1xuICoqIG1vZHVsZSBpZCA9IDYzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgY29uc29sZSA9IHJlcXVpcmUoXCJjb25zb2xlXCIpO1xuXG52YXIgdW50aWxkZSA9IGZ1bmN0aW9uKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL34uL2csIGZ1bmN0aW9uKG0pIHtcbiAgICBzd2l0Y2ggKG0pIHtcbiAgICAgIGNhc2UgXCJ+MFwiOlxuICAgICAgICByZXR1cm4gXCJ+XCI7XG4gICAgICBjYXNlIFwifjFcIjpcbiAgICAgICAgcmV0dXJuIFwiL1wiO1xuICAgIH1cbiAgICB0aHJvdyhcIkludmFsaWQgdGlsZGUgZXNjYXBlOiBcIiArIG0pO1xuICB9KTtcbn1cblxudmFyIHRyYXZlcnNlID0gZnVuY3Rpb24ob2JqLCBwb2ludGVyLCB2YWx1ZSkge1xuICAvLyBhc3NlcnQoaXNBcnJheShwb2ludGVyKSlcbiAgdmFyIHBhcnQgPSB1bnRpbGRlKHBvaW50ZXIuc2hpZnQoKSk7XG4gIGlmKHR5cGVvZiBvYmpbcGFydF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB0aHJvdyhcIlZhbHVlIGZvciBwb2ludGVyICdcIiArIHBvaW50ZXIgKyBcIicgbm90IGZvdW5kLlwiKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYocG9pbnRlci5sZW5ndGggIT09IDApIHsgLy8ga2VlcCB0cmF2ZXJzaW4hXG4gICAgcmV0dXJuIHRyYXZlcnNlKG9ialtwYXJ0XSwgcG9pbnRlciwgdmFsdWUpO1xuICB9XG4gIC8vIHdlJ3JlIGRvbmVcbiAgaWYodHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgLy8ganVzdCByZWFkaW5nXG4gICAgcmV0dXJuIG9ialtwYXJ0XTtcbiAgfVxuICAvLyBzZXQgbmV3IHZhbHVlLCByZXR1cm4gb2xkIHZhbHVlXG4gIHZhciBvbGRfdmFsdWUgPSBvYmpbcGFydF07XG4gIGlmKHZhbHVlID09PSBudWxsKSB7XG4gICAgZGVsZXRlIG9ialtwYXJ0XTtcbiAgfSBlbHNlIHtcbiAgICBvYmpbcGFydF0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gb2xkX3ZhbHVlO1xufVxuXG52YXIgdmFsaWRhdGVfaW5wdXQgPSBmdW5jdGlvbihvYmosIHBvaW50ZXIpIHtcbiAgaWYodHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIikge1xuICAgIHRocm93KFwiSW52YWxpZCBpbnB1dCBvYmplY3QuXCIpO1xuICB9XG5cbiAgaWYocG9pbnRlciA9PT0gXCJcIikge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGlmKCFwb2ludGVyKSB7XG4gICAgdGhyb3coXCJJbnZhbGlkIEpTT04gcG9pbnRlci5cIik7XG4gIH1cblxuICBwb2ludGVyID0gcG9pbnRlci5zcGxpdChcIi9cIik7XG4gIHZhciBmaXJzdCA9IHBvaW50ZXIuc2hpZnQoKTtcbiAgaWYgKGZpcnN0ICE9PSBcIlwiKSB7XG4gICAgdGhyb3coXCJJbnZhbGlkIEpTT04gcG9pbnRlci5cIik7XG4gIH1cblxuICByZXR1cm4gcG9pbnRlcjtcbn1cblxudmFyIGdldCA9IGZ1bmN0aW9uKG9iaiwgcG9pbnRlcikge1xuICBwb2ludGVyID0gdmFsaWRhdGVfaW5wdXQob2JqLCBwb2ludGVyKTtcbiAgaWYgKHBvaW50ZXIubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuICByZXR1cm4gdHJhdmVyc2Uob2JqLCBwb2ludGVyKTtcbn1cblxudmFyIHNldCA9IGZ1bmN0aW9uKG9iaiwgcG9pbnRlciwgdmFsdWUpIHtcbiAgcG9pbnRlciA9IHZhbGlkYXRlX2lucHV0KG9iaiwgcG9pbnRlcik7XG4gIGlmIChwb2ludGVyLmxlbmd0aCA9PT0gMCkge1xuICAgIHRocm93KFwiSW52YWxpZCBKU09OIHBvaW50ZXIgZm9yIHNldC5cIilcbiAgfVxuICByZXR1cm4gdHJhdmVyc2Uob2JqLCBwb2ludGVyLCB2YWx1ZSk7XG59XG5cbmV4cG9ydHMuZ2V0ID0gZ2V0XG5leHBvcnRzLnNldCA9IHNldFxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vanNvbnBvaW50ZXIvanNvbnBvaW50ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA2NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBleHRlbmRcblxuZnVuY3Rpb24gZXh0ZW5kKCkge1xuICAgIHZhciB0YXJnZXQgPSB7fVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXVxuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3h0ZW5kL2ltbXV0YWJsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDY1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHNbJ2RhdGUtdGltZSddID0gL15cXGR7NH0tKD86MFswLTldezF9fDFbMC0yXXsxfSktWzAtOV17Mn1bdFQgXVxcZHsyfTpcXGR7Mn06XFxkezJ9KFxcLlxcZCspPyhbelpdfFsrLV1cXGR7Mn06XFxkezJ9KSQvXG5leHBvcnRzWydkYXRlJ10gPSAvXlxcZHs0fS0oPzowWzAtOV17MX18MVswLTJdezF9KS1bMC05XXsyfSQvXG5leHBvcnRzWyd0aW1lJ10gPSAvXlxcZHsyfTpcXGR7Mn06XFxkezJ9JC9cbmV4cG9ydHNbJ2VtYWlsJ10gPSAvXlxcUytAXFxTKyQvXG5leHBvcnRzWydpcC1hZGRyZXNzJ10gPSBleHBvcnRzWydpcHY0J10gPSAvXig/Oig/OjI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldPylcXC4pezN9KD86MjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/KSQvXG5leHBvcnRzWydpcHY2J10gPSAvXlxccyooKChbMC05QS1GYS1mXXsxLDR9Oil7N30oWzAtOUEtRmEtZl17MSw0fXw6KSl8KChbMC05QS1GYS1mXXsxLDR9Oil7Nn0oOlswLTlBLUZhLWZdezEsNH18KCgyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkoXFwuKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSl7M30pfDopKXwoKFswLTlBLUZhLWZdezEsNH06KXs1fSgoKDpbMC05QS1GYS1mXXsxLDR9KXsxLDJ9KXw6KCgyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkoXFwuKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSl7M30pfDopKXwoKFswLTlBLUZhLWZdezEsNH06KXs0fSgoKDpbMC05QS1GYS1mXXsxLDR9KXsxLDN9KXwoKDpbMC05QS1GYS1mXXsxLDR9KT86KCgyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkoXFwuKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSl7M30pKXw6KSl8KChbMC05QS1GYS1mXXsxLDR9Oil7M30oKCg6WzAtOUEtRmEtZl17MSw0fSl7MSw0fSl8KCg6WzAtOUEtRmEtZl17MSw0fSl7MCwyfTooKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKShcXC4oMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKXszfSkpfDopKXwoKFswLTlBLUZhLWZdezEsNH06KXsyfSgoKDpbMC05QS1GYS1mXXsxLDR9KXsxLDV9KXwoKDpbMC05QS1GYS1mXXsxLDR9KXswLDN9OigoMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKFxcLigyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkpezN9KSl8OikpfCgoWzAtOUEtRmEtZl17MSw0fTopezF9KCgoOlswLTlBLUZhLWZdezEsNH0pezEsNn0pfCgoOlswLTlBLUZhLWZdezEsNH0pezAsNH06KCgyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkoXFwuKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSl7M30pKXw6KSl8KDooKCg6WzAtOUEtRmEtZl17MSw0fSl7MSw3fSl8KCg6WzAtOUEtRmEtZl17MSw0fSl7MCw1fTooKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKShcXC4oMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKXszfSkpfDopKSkoJS4rKT9cXHMqJC9cbmV4cG9ydHNbJ3VyaSddID0gL15bYS16QS1aXVthLXpBLVowLTkrLS5dKjpbXlxcc10qJC9cbmV4cG9ydHNbJ2NvbG9yJ10gPSAvKCM/KFswLTlBLUZhLWZdezMsNn0pXFxiKXwoYXF1YSl8KGJsYWNrKXwoYmx1ZSl8KGZ1Y2hzaWEpfChncmF5KXwoZ3JlZW4pfChsaW1lKXwobWFyb29uKXwobmF2eSl8KG9saXZlKXwob3JhbmdlKXwocHVycGxlKXwocmVkKXwoc2lsdmVyKXwodGVhbCl8KHdoaXRlKXwoeWVsbG93KXwocmdiXFwoXFxzKlxcYihbMC05XXxbMS05XVswLTldfDFbMC05XVswLTldfDJbMC00XVswLTldfDI1WzAtNV0pXFxiXFxzKixcXHMqXFxiKFswLTldfFsxLTldWzAtOV18MVswLTldWzAtOV18MlswLTRdWzAtOV18MjVbMC01XSlcXGJcXHMqLFxccypcXGIoWzAtOV18WzEtOV1bMC05XXwxWzAtOV1bMC05XXwyWzAtNF1bMC05XXwyNVswLTVdKVxcYlxccypcXCkpfChyZ2JcXChcXHMqKFxcZD9cXGQlfDEwMCUpK1xccyosXFxzKihcXGQ/XFxkJXwxMDAlKStcXHMqLFxccyooXFxkP1xcZCV8MTAwJSkrXFxzKlxcKSkvXG5leHBvcnRzWydob3N0bmFtZSddID0gL14oW2EtekEtWjAtOV18W2EtekEtWjAtOV1bYS16QS1aMC05XFwtXXswLDYxfVthLXpBLVowLTldKShcXC4oW2EtekEtWjAtOV18W2EtekEtWjAtOV1bYS16QS1aMC05XFwtXXswLDYxfVthLXpBLVowLTldKSkqJC9cbmV4cG9ydHNbJ2FscGhhJ10gPSAvXlthLXpBLVpdKyQvXG5leHBvcnRzWydhbHBoYW51bWVyaWMnXSA9IC9eW2EtekEtWjAtOV0rJC9cbmV4cG9ydHNbJ3N0eWxlJ10gPSAvXFxzKiguKz8pOlxccyooW147XSspOz8vZ1xuZXhwb3J0c1sncGhvbmUnXSA9IC9eXFwrKD86WzAtOV0gPyl7NiwxNH1bMC05XSQvXG5leHBvcnRzWyd1dGMtbWlsbGlzZWMnXSA9IC9eWzAtOV0rKFxcLj9bMC05XSspPyQvXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9fc2NoZW1hL2Zvcm1hdHMuanNcbiAqKi8iLCIvKipcbiAqIEBjb3B5cmlnaHQgMjAxNSwgUHJvbWV0aGV1cyBSZXNlYXJjaCwgTExDXG4gKi9cblxuaW1wb3J0IFJlYWN0ICAgICAgICAgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvcm1Db21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaXRoRm9ybVZhbHVlKENvbXBvbmVudCkge1xuXG4gIGxldCBkaXNwbGF5TmFtZSA9IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZTtcblxuICByZXR1cm4gY2xhc3MgZXh0ZW5kcyBGb3JtQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9IGBXaXRoRm9ybVZhbHVlKCR7ZGlzcGxheU5hbWV9KWA7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q29tcG9uZW50XG4gICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgZm9ybVZhbHVlPXt0aGlzLmZvcm1WYWx1ZX1cbiAgICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9XG4gIH07XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9XaXRoRm9ybVZhbHVlLmpzXG4gKiovIiwiLyoqXG4gKiBAY29weXJpZ2h0IDIwMTUsIFByb21ldGhldXMgUmVzZWFyY2gsIExMQ1xuICovXG5cbmltcG9ydCBhdXRvYmluZCAgICAgICAgICAgZnJvbSAnYXV0b2JpbmQtZGVjb3JhdG9yJztcbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlc30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGlzQXJyYXkgICAgICAgICAgICBmcm9tICdsb2Rhc2gvbGFuZy9pc0FycmF5JztcbmltcG9ydCBpc1N0cmluZyAgICAgICAgICAgZnJvbSAnbG9kYXNoL2xhbmcvaXNTdHJpbmcnO1xuaW1wb3J0IG1hcEVsZW1lbnQgICAgICAgICBmcm9tICcuL21hcEVsZW1lbnQnO1xuaW1wb3J0IENvbXBvbmVudCAgICAgICAgICBmcm9tICcuL0NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlZ2FjeUZpZWxkc2V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC4uLkNvbXBvbmVudC5wcm9wVHlwZXMsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIGNvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKVxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29tcG9uZW50OiAnZGl2J1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2NoaWxkcmVuLCBjb21wb25lbnQ6IENvbXBvbmVudCwgLi4ucHJvcHN9ID0gdGhpcy5wcm9wcztcbiAgICBjaGlsZHJlbiA9IG1hcEVsZW1lbnQoY2hpbGRyZW4sIHRoaXMuX3Byb3BhZ2F0ZUZvcm1WYWx1ZSk7XG4gICAgcmV0dXJuIDxDb21wb25lbnQ+e2NoaWxkcmVufTwvQ29tcG9uZW50PjtcbiAgfVxuXG4gIEBhdXRvYmluZFxuICBfcHJvcGFnYXRlRm9ybVZhbHVlKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50LnByb3BzICYmIGVsZW1lbnQucHJvcHMuc2VsZWN0Rm9ybVZhbHVlICYmICFlbGVtZW50LnByb3BzLmZvcm1WYWx1ZSkge1xuICAgICAgbGV0IGZvcm1WYWx1ZSA9IHRoaXMucHJvcHMuZm9ybVZhbHVlO1xuICAgICAgbGV0IHNlbGVjdEZvcm1WYWx1ZSA9IGVsZW1lbnQucHJvcHMuc2VsZWN0Rm9ybVZhbHVlO1xuICAgICAgaWYgKGlzU3RyaW5nKHNlbGVjdEZvcm1WYWx1ZSkgfHwgaXNBcnJheShzZWxlY3RGb3JtVmFsdWUpKSB7XG4gICAgICAgIGZvcm1WYWx1ZSA9IGZvcm1WYWx1ZS5zZWxlY3Qoc2VsZWN0Rm9ybVZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQgPSBSZWFjdC5jbG9uZUVsZW1lbnQoZWxlbWVudCwge2Zvcm1WYWx1ZX0pO1xuICAgICAgcmV0dXJuIFtmYWxzZSwgZWxlbWVudF07XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9MZWdhY3lGaWVsZHNldC5qc1xuICoqLyIsIi8qKlxuICogQGNvcHlyaWdodCAyMDE1LCBQcm9tZXRoZXVzIFJlc2VhcmNoLCBMTENcbiAqL1xuXG5pbXBvcnQgUmVhY3QgICAgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGlzQXJyYXkgIGZyb20gJ2xvZGFzaC9sYW5nL2lzQXJyYXknO1xuXG4vKipcbiAqIE1hcCBSZWFjdCBgZWxlbWVudGAgc3RydWN0dXJlIG92ZXIgYGZ1bmNgLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYXBFbGVtZW50KGVsZW1lbnQsIGZ1bmMpIHtcbiAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLm1hcChlbGVtZW50LCBmdW5jdGlvbihlbCkge1xuICAgIGxldCByZWN1cnNlID0gdHJ1ZTtcbiAgICBlbCA9IGZ1bmMoZWwpO1xuICAgIGlmIChpc0FycmF5KGVsKSkge1xuICAgICAgcmVjdXJzZSA9IGVsWzBdO1xuICAgICAgZWwgPSBlbFsxXTtcbiAgICB9XG4gICAgaWYgKHJlY3Vyc2UgJiYgZWwgJiYgZWwucHJvcHMgJiYgZWwucHJvcHMuY2hpbGRyZW4pIHtcbiAgICAgIGVsID0gUmVhY3QuY2xvbmVFbGVtZW50KGVsLCB7XG4gICAgICAgIGNoaWxkcmVuOiBSZWFjdC5DaGlsZHJlbi5tYXAoXG4gICAgICAgICAgZWwucHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgICAgICAgIHJldHVybiBtYXBFbGVtZW50KGNoaWxkLCBmdW5jKTtcbiAgICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBlbDtcbiAgfSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tYXBFbGVtZW50LmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==