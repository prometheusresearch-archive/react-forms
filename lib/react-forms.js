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
	        Label({ label: label, schema: schema }),
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
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Error = (function (_React$Component) {
	  _inherits(Error, _React$Component);
	
	  function Error() {
	    _classCallCheck(this, Error);
	
	    _get(Object.getPrototypeOf(Error.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Error, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var error = _props.error;
	      var label = _props.label;
	      var noLabel = _props.noLabel;
	      var complete = _props.complete;
	
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
	  }]);
	
	  return Error;
	})(_react2['default'].Component);
	
	exports['default'] = Error;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTBhZDJjMGE2YjU4NDNhYWQ5MTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9GaWVsZHNldC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL34vaW52YXJpYW50L2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tleVBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvbGFuZy9pc1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvbGFuZy9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2dldE5hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9sYW5nL2lzTmF0aXZlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2xhbmcvaXNGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9sYW5nL2lzT2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2lzTGVuZ3RoLmpzIiwid2VicGFjazovLy8uL3NyYy9GaWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2F1dG9iaW5kLWRlY29yYXRvci9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0lucHV0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2Z1bmN0aW9uL2RlYm91bmNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2RhdGUvbm93LmpzIiwid2VicGFjazovLy8uL34vZW1wdHkvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Vycm9yTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ZhbHVlLmpzIiwid2VicGFjazovLy8uL34vbm9kZS1saWJzLWJyb3dzZXIvbW9jay9jb25zb2xlLmpzIiwid2VicGFjazovLy8uL34vbWVtb2l6ZS1kZWNvcmF0b3IvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2xhbmcvY2xvbmVEZWVwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2Jhc2VDbG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9hcnJheUNvcHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYXJyYXlFYWNoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2Jhc2VBc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUNvcHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvaXNBcnJheUxpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvZ2V0TGVuZ3RoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2Jhc2VQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9zaGltS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9sYW5nL2lzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2lzSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvb2JqZWN0L2tleXNJbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlRm9yT3duLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2Jhc2VGb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvY3JlYXRlQmFzZUZvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC90b09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9pbml0Q2xvbmVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9pbml0Q2xvbmVCeVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9idWZmZXJDbG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9pbml0Q2xvbmVPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYmluZENhbGxiYWNrLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3V0aWxpdHkvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvb2JqZWN0L2dldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL3RvUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvb2JqZWN0L3NldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9pc0tleS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2NoZW1hLmpzIiwid2VicGFjazovLy8uL3NyYy9fc2NoZW1hL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZ2VuZXJhdGUtb2JqZWN0LXByb3BlcnR5L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vaXMtcHJvcGVydHkvaXMtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9nZW5lcmF0ZS1mdW5jdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3V0aWwvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9+L3V0aWwvc3VwcG9ydC9pc0J1ZmZlckJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vanNvbnBvaW50ZXIvanNvbnBvaW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi94dGVuZC9pbW11dGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19zY2hlbWEvZm9ybWF0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvV2l0aEZvcm1WYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGVnYWN5RmllbGRzZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NDbEMyQixDQUFZOzs7O1NBQWhDLFFBQVE7O21DQUNZLEVBQVM7Ozs7U0FBN0IsS0FBSzs7bUNBQ2UsRUFBUzs7OztTQUE3QixLQUFLOzsyQ0FDZSxFQUFpQjs7OztTQUFyQyxhQUFhOztvQ0FDTyxFQUFVOzs7O1NBQXpCLE1BQU07O21DQUNTLEVBQVM7Ozs7U0FBN0IsS0FBSzs7dUNBQ2UsRUFBYTs7OztTQUFqQyxTQUFTOzs0Q0FFVyxFQUFrQjs7OztTQUF0QyxjQUFjLCtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDUlUsQ0FBTzs7Ozt1Q0FDUCxDQUFhOzs7O0tBRXZCLFFBQVE7YUFBUixRQUFROztZQUFSLFFBQVE7MkJBQVIsUUFBUTs7Z0NBQVIsUUFBUTs7O2dCQUFSLFFBQVE7O1lBWXJCLGtC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Q0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkNBQTRDLEtBQUs7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxvQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsMERBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYLFVBQVM7QUFDVDtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxT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QU0sU0FBUzs7c0JBQXRDLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7c0JDRFgsVUFBVTs7OztrQ0FOYixDQUFPOzs7OzhDQUNQLENBQXFCOzs7Ozs7OztBQUszQixVQUFTLFVBQVUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQ2hELFVBQU8sbUJBQU0sUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsVUFBUyxFQUFFLEVBQUU7QUFDOUMsU0FBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ25CLE9BQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDZCxTQUFJLG9DQUFRLEVBQUUsQ0FBQyxFQUFFO0FBQ2YsY0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoQixTQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ1o7QUFDRCxTQUFJLE9BQU8sSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtBQUNsRCxTQUFFLEdBQUcsbUJBQU0sWUFBWSxDQUFDLEVBQUUsRUFBRTtBQUMxQixpQkFBUSxFQUFFLG1CQUFNLFFBQVEsQ0FBQyxHQUFHLENBQzFCLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUNqQixVQUFTLEtBQUssRUFBRTtBQUNkLGtCQUFPLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7VUFDaEMsQ0FBQztRQUNMLENBQUMsQ0FBQztNQUNKO0FBQ0QsWUFBTyxFQUFFLENBQUM7SUFDWCxDQUFDLENBQUM7RUFDSiIsImZpbGUiOiJyZWFjdC1mb3Jtcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgYTBhZDJjMGE2YjU4NDNhYWQ5MTlcbiAqKi8iLCIvKipcbiAqIEBjb3B5cmlnaHQgMjAxNSwgUHJvbWV0aGV1cyBSZXNlYXJjaCwgTExDXG4gKi9cblxuZXhwb3J0IEZpZWxkc2V0ICAgICAgIGZyb20gJy4vRmllbGRzZXQnO1xuZXhwb3J0IEZpZWxkICAgICAgICAgIGZyb20gJy4vRmllbGQnO1xuZXhwb3J0IFZhbHVlICAgICAgICAgIGZyb20gJy4vVmFsdWUnO1xuZXhwb3J0IFdpdGhGb3JtVmFsdWUgIGZyb20gJy4vV2l0aEZvcm1WYWx1ZSc7XG5leHBvcnQgKiBhcyBTY2hlbWEgICAgZnJvbSAnLi9TY2hlbWEnO1xuZXhwb3J0IElucHV0ICAgICAgICAgIGZyb20gJy4vSW5wdXQnO1xuZXhwb3J0IEVycm9yTGlzdCAgICAgIGZyb20gJy4vRXJyb3JMaXN0JztcblxuZXhwb3J0IExlZ2FjeUZpZWxkc2V0IGZyb20gJy4vTGVnYWN5RmllbGRzZXQnO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCIvKipcbiAqIEBjb3B5cmlnaHQgMjAxNSwgUHJvbWV0aGV1cyBSZXNlYXJjaCwgTExDXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tcG9uZW50ICAgICAgICAgIGZyb20gJy4vQ29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmllbGRzZXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLi4uQ29tcG9uZW50LnByb3BUeXBlcyxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgU2VsZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIFNlbGY6ICdkaXYnXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7U2VsZiwgLi4ucHJvcHN9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gPFNlbGYgey4uLnByb3BzfSAvPjtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvRmllbGRzZXQuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImFtZFwiOlwicmVhY3RcIn1cbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEBjb3B5cmlnaHQgMjAxNSwgUHJvbWV0aGV1cyBSZXNlYXJjaCwgTExDXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaW52YXJpYW50ICAgICAgICAgIGZyb20gJ2ludmFyaWFudCc7XG5pbXBvcnQga2V5UGF0aCAgICAgICAgICAgIGZyb20gJy4va2V5UGF0aCc7XG5cbmV4cG9ydCBjb25zdCBDb250ZXh0VHlwZXMgPSB7XG4gIGZvcm1WYWx1ZTogUHJvcFR5cGVzLm9iamVjdFxufTtcblxubGV0IHNlbGVjdFByb3BUeXBlID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gIFByb3BUeXBlcy5hcnJheSxcbiAgUHJvcFR5cGVzLnN0cmluZyxcbiAgUHJvcFR5cGVzLm51bWJlcixcbiAgUHJvcFR5cGVzLmJvb2xcbl0pO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIGZvcm0gY29tcG9uZW50cy5cbiAqXG4gKiBJdCBleHBvc2VzIGZvcm0gdmFsdWUgdmlhIGB0aGlzLmZvcm1WYWx1ZWAgd2hpY2ggaXMgcHJvdmlkZWQgZWl0aGVyIHZpYVxuICogYHRoaXMucHJvcHMuZm9ybVZhbHVlYCBvciB2aWEgY29udGV4dC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIEZvcm0gdmFsdWUgcGFzc2VkIGFzIGEgcHJvcC5cbiAgICAgKi9cbiAgICBmb3JtVmFsdWU6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3RvciBmb3IgZm9ybSB2YWx1ZS5cbiAgICAgKlxuICAgICAqIFVzZWQgdG8gc2VsZWN0IGEgcGFydCBmcm9tIGEgZm9ybSB2YWx1ZSBwYXNzZWQgdmlhIGNvbnRleHQuXG4gICAgICovXG4gICAgc2VsZWN0OiBzZWxlY3RQcm9wVHlwZSxcblxuICAgIC8qKlxuICAgICAqIFNhbWUgYXMgYHNlbGVjdGAuXG4gICAgICpcbiAgICAgKiBEZXByZWNhdGVkLlxuICAgICAqL1xuICAgIHNlbGVjdEZvcm1WYWx1ZTogc2VsZWN0UHJvcFR5cGVcbiAgfTtcblxuICBzdGF0aWMgY29udGV4dFR5cGVzID0gQ29udGV4dFR5cGVzO1xuICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSBDb250ZXh0VHlwZXM7XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB7Zm9ybVZhbHVlOiB0aGlzLmZvcm1WYWx1ZX07XG4gIH1cblxuICBnZXQgZm9ybVZhbHVlKCkge1xuICAgIGxldCBmb3JtVmFsdWUgPSB0aGlzLnByb3BzLmZvcm1WYWx1ZSB8fCB0aGlzLmNvbnRleHQuZm9ybVZhbHVlO1xuXG4gICAgaW52YXJpYW50KFxuICAgICAgZm9ybVZhbHVlLFxuICAgICAgJ0EgZm9ybSBjb21wb25lbnQgPCVzIC8+IHNob3VsZCByZWNlaXZlIGZvcm0gdmFsdWUgdmlhIHByb3BzICcgK1xuICAgICAgJ29yIGJlIHVzZWQgYXMgYSBwYXJ0IG9mIGVsZW1lbnQgaGllcmFyY2h5IHdoaWNoICcgK1xuICAgICAgJ2luY2x1ZGVzIDxGb3JtIC8+IGNvbXBvbmVudCBpbiBpdHMgYW5jZXN0b3JzJyxcbiAgICAgIHRoaXMuY29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lXG4gICAgKTtcblxuICAgIGxldCBzZWxlY3QgPSB0aGlzLnByb3BzLnNlbGVjdCB8fCB0aGlzLnByb3BzLnNlbGVjdEZvcm1WYWx1ZTtcbiAgICAvLyBXZSBjaGVjayBmb3Igc2VsZWN0ICE9PSB0cnVlIHRvIGtlZXAgY29tcGF0YWJpbGl0eSB3ZSBlYXJpbGVyXG4gICAgLy8gdmVyc2lvbnMgb2YgUmVhY3QgRm9ybXMgd2hlcmUgd2UgbmVlZGVkIHRvIHJlYnVpbGQgZWxlbWVudCB0cmVlIHRvXG4gICAgLy8gcHJvcGFnYXRlIHZhbHVlcyB0byBmb3JtLlxuICAgIGlmIChzZWxlY3QgJiYgc2VsZWN0ICE9PSB0cnVlKSB7XG4gICAgICBzZWxlY3QgPSBrZXlQYXRoKHNlbGVjdCk7XG4gICAgICBmb3JtVmFsdWUgPSBmb3JtVmFsdWUuc2VsZWN0KHNlbGVjdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1WYWx1ZTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvQ29tcG9uZW50LmpzXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGludmFyaWFudFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgK1xuICAgICAgICAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ0ludmFyaWFudCBWaW9sYXRpb246ICcgK1xuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7IHJldHVybiBhcmdzW2FyZ0luZGV4KytdOyB9KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaW52YXJpYW50L2Jyb3dzZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgc2V0VGltZW91dChkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQGNvcHlyaWdodCAyMDE1LCBQcm9tZXRoZXVzIFJlc2VhcmNoLCBMTENcbiAqL1xuXG5pbXBvcnQgaXNTdHJpbmcgIGZyb20gJ2xvZGFzaC9sYW5nL2lzU3RyaW5nJztcbmltcG9ydCBpc0FycmF5ICAgZnJvbSAnbG9kYXNoL2xhbmcvaXNBcnJheSc7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gJ2ludmFyaWFudCc7XG5cbmNvbnN0IElTX05VTUJFUiA9IC9bMC05XSsvO1xuXG5mdW5jdGlvbiB0cnlQYXJzZUludCh2KSB7XG4gIGlmICh0eXBlb2YgdiA9PT0gJ3N0cmluZycgJiYgSVNfTlVNQkVSLmV4ZWModikpIHtcbiAgICB2ID0gcGFyc2VJbnQodiwgMTApO1xuICB9XG4gIHJldHVybiB2O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBrZXlQYXRoKHZhbHVlKSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfSBlbHNlIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICBpZiAodmFsdWUuaW5kZXhPZignLicpICE9PSAtMSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnLicpLmZpbHRlcihCb29sZWFuKS5tYXAodHJ5UGFyc2VJbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IFt0cnlQYXJzZUludCh2YWx1ZSldO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBbdmFsdWVdO1xuICB9IGVsc2Uge1xuICAgIGludmFyaWFudChcbiAgICAgIGZhbHNlLFxuICAgICAgJ2tleVBhdGggY2FuIGJlIGVpdGhlciBhbiBhcnJheSwgYSBzdHJpbmcgb3IgYSBudW1iZXIsIGdvdDogJXMnLFxuICAgICAgdmFsdWVcbiAgICApO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9rZXlQYXRoLmpzXG4gKiovIiwidmFyIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXSc7XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmpUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3RyaW5nYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3RyaW5nKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3RyaW5nKDEpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyB8fCAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBvYmpUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBzdHJpbmdUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3RyaW5nO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2xhbmcvaXNTdHJpbmcuanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2lzT2JqZWN0TGlrZS5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9nZXROYXRpdmUnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzTGVuZ3RoJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XSc7XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmpUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiBOYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQXJyYXkgPSBnZXROYXRpdmUoQXJyYXksICdpc0FycmF5Jyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgY29ycmVjdGx5IGNsYXNzaWZpZWQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBuYXRpdmVJc0FycmF5IHx8IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgb2JqVG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gYXJyYXlUYWc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvbGFuZy9pc0FycmF5LmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzTmF0aXZlID0gcmVxdWlyZSgnLi4vbGFuZy9pc05hdGl2ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgcmV0dXJuIGlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9nZXROYXRpdmUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc09iamVjdExpa2UnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkgPiA1KS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZuVG9TdHJpbmcgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmblRvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UoL1tcXFxcXiQuKis/KClbXFxde318XS9nLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTmF0aXZlKEFycmF5LnByb3RvdHlwZS5wdXNoKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTmF0aXZlKF8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgcmV0dXJuIHJlSXNOYXRpdmUudGVzdChmblRvU3RyaW5nLmNhbGwodmFsdWUpKTtcbiAgfVxuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiByZUlzSG9zdEN0b3IudGVzdCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNOYXRpdmU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvbGFuZy9pc05hdGl2ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZSBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9ialRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIG9sZGVyIHZlcnNpb25zIG9mIENocm9tZSBhbmQgU2FmYXJpIHdoaWNoIHJldHVybiAnZnVuY3Rpb24nIGZvciByZWdleGVzXG4gIC8vIGFuZCBTYWZhcmkgOCB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheSBjb25zdHJ1Y3RvcnMuXG4gIHJldHVybiBpc09iamVjdCh2YWx1ZSkgJiYgb2JqVG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gZnVuY1RhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2xhbmcvaXNGdW5jdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZSBbbGFuZ3VhZ2UgdHlwZV0oaHR0cHM6Ly9lczUuZ2l0aHViLmlvLyN4OCkgb2YgYE9iamVjdGAuXG4gKiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KDEpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgLy8gQXZvaWQgYSBWOCBKSVQgYnVnIGluIENocm9tZSAxOS0yMC5cbiAgLy8gU2VlIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0yMjkxIGZvciBtb3JlIGRldGFpbHMuXG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2xhbmcvaXNPYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBVc2VkIGFzIHRoZSBbbWF4aW11bSBsZW5ndGhdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW51bWJlci5tYXhfc2FmZV9pbnRlZ2VyKVxuICogb2YgYW4gYXJyYXktbGlrZSB2YWx1ZS5cbiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gaXMgYmFzZWQgb24gW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0xlbmd0aDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9pc0xlbmd0aC5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEBjb3B5cmlnaHQgMjAxNSwgUHJvbWV0aGV1cyBSZXNlYXJjaCwgTExDXG4gKi9cblxuaW1wb3J0IGF1dG9iaW5kICAgICAgICAgICAgIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXN9ICAgZnJvbSAncmVhY3QnO1xuaW1wb3J0IElucHV0ICAgICAgICAgICAgICAgIGZyb20gJy4vSW5wdXQnO1xuaW1wb3J0IEVycm9yTGlzdCAgICAgICAgICAgIGZyb20gJy4vRXJyb3JMaXN0JztcbmltcG9ydCBDb21wb25lbnQgICAgICAgICAgICBmcm9tICcuL0NvbXBvbmVudCc7XG5cbmZ1bmN0aW9uIExhYmVsKHtsYWJlbH0pIHtcbiAgcmV0dXJuIGxhYmVsICYmIDxsYWJlbD57bGFiZWx9PC9sYWJlbD47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC4uLkNvbXBvbmVudC5wcm9wVHlwZXMsXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LFxuICAgIFNlbGY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgTGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgRXJyb3JMaXN0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2hpbGRyZW46IDxJbnB1dCB0eXBlPVwidGV4dFwiIC8+LFxuICAgIExhYmVsLFxuICAgIEVycm9yTGlzdCxcbiAgICBTZWxmOiAnZGl2JyxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge2RpcnR5OiBmYWxzZX07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtTZWxmLCBFcnJvckxpc3QsIExhYmVsLCBjaGlsZHJlbn0gPSB0aGlzLnByb3BzO1xuICAgIGxldCB7ZGlydHl9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQge3NjaGVtYSwgdmFsdWUsIHBhcmFtc30gPSB0aGlzLmZvcm1WYWx1ZTtcbiAgICBsZXQgc2hvd0Vycm9ycyA9IGRpcnR5IHx8IHBhcmFtcy5mb3JjZVNob3dFcnJvcnM7XG4gICAgY2hpbGRyZW4gPSBSZWFjdC5jbG9uZUVsZW1lbnQoXG4gICAgICBSZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKSxcbiAgICAgIHt2YWx1ZSwgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2V9KTtcbiAgICBsZXQgbGFiZWwgPSB0aGlzLnByb3BzLmxhYmVsIHx8IHNjaGVtYS5sYWJlbDtcbiAgICByZXR1cm4gKFxuICAgICAgPFNlbGYgb25CbHVyPXt0aGlzLm9uQmx1cn0+XG4gICAgICAgIHtMYWJlbCh7bGFiZWwsIHNjaGVtYX0pfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHtzaG93RXJyb3JzICYmXG4gICAgICAgICAgPEVycm9yTGlzdCBmb3JtVmFsdWU9e3RoaXMuZm9ybVZhbHVlfSAvPn1cbiAgICAgIDwvU2VsZj5cbiAgICApO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIG9uQmx1cigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtkaXJ0eTogdHJ1ZX0pO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIG9uQ2hhbmdlKGUpIHtcbiAgICBsZXQgdmFsdWU7XG4gICAgaWYgKGUgJiYgZS50YXJnZXQgJiYgZS50YXJnZXQudmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICBpZiAodmFsdWUgPT09ICcnKSB7XG4gICAgICAgIHZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IGU7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe2RpcnR5OiB0cnVlfSk7XG4gICAgdGhpcy5mb3JtVmFsdWUudXBkYXRlKHZhbHVlKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvRmllbGQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuLyoqXG4gKiBAY29weXJpZ2h0IDIwMTUsIEFuZHJleSBQb3BwIDw4bWF5ZGF5QGdtYWlsLmNvbT5cbiAqXG4gKiBUaGUgZGVjb3JhdG9yIG1heSBiZSB1c2VkIG9uIGNsYXNzZXMgb3IgbWV0aG9kc1xuICogYGBgXG4gKiBAYXV0b2JpbmRcbiAqIGNsYXNzIEZ1bGxCb3VuZCB7fVxuICpcbiAqIGNsYXNzIFBhcnRCb3VuZCB7XG4gKiAgIEBhdXRvYmluZFxuICogICBtZXRob2QgKCkge31cbiAqIH1cbiAqIGBgYFxuICovXG5leHBvcnRzWydkZWZhdWx0J10gPSBhdXRvYmluZDtcblxuZnVuY3Rpb24gYXV0b2JpbmQoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBib3VuZENsYXNzLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJvdW5kTWV0aG9kLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gIH1cbn1cblxuLyoqXG4gKiBVc2UgYm91bmRNZXRob2QgdG8gYmluZCBhbGwgbWV0aG9kcyBvbiB0aGUgdGFyZ2V0LnByb3RvdHlwZVxuICovXG5mdW5jdGlvbiBib3VuZENsYXNzKHRhcmdldCkge1xuICAvLyAoVXNpbmcgcmVmbGVjdCB0byBnZXQgYWxsIGtleXMgaW5jbHVkaW5nIHN5bWJvbHMpXG4gIHZhciBrZXlzID0gdW5kZWZpbmVkO1xuICAvLyBVc2UgUmVmbGVjdCBpZiBleGlzdHNcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGtleXMgPSBSZWZsZWN0Lm93bktleXModGFyZ2V0LnByb3RvdHlwZSk7XG4gIH0gZWxzZSB7XG4gICAga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldC5wcm90b3R5cGUpO1xuICAgIC8vIHVzZSBzeW1ib2xzIGlmIHN1cHBvcnQgaXMgcHJvdmlkZWRcbiAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldC5wcm90b3R5cGUpKTtcbiAgICB9XG4gIH1cblxuICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIC8vIElnbm9yZSBzcGVjaWFsIGNhc2UgdGFyZ2V0IG1ldGhvZFxuICAgIGlmIChrZXkgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LnByb3RvdHlwZSwga2V5KTtcblxuICAgIC8vIE9ubHkgbWV0aG9kcyBuZWVkIGJpbmRpbmdcbiAgICBpZiAodHlwZW9mIGRlc2NyaXB0b3IudmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQucHJvdG90eXBlLCBrZXksIGJvdW5kTWV0aG9kKHRhcmdldCwga2V5LCBkZXNjcmlwdG9yKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYSBkZXNjcmlwdG9yIHJlbW92aW5nIHRoZSB2YWx1ZSBhbmQgcmV0dXJuaW5nIGEgZ2V0dGVyXG4gKiBUaGUgZ2V0dGVyIHdpbGwgcmV0dXJuIGEgLmJpbmQgdmVyc2lvbiBvZiB0aGUgZnVuY3Rpb25cbiAqIGFuZCBtZW1vaXplIHRoZSByZXN1bHQgYWdhaW5zdCBhIHN5bWJvbCBvbiB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gYm91bmRNZXRob2QodGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpIHtcbiAgdmFyIGZuID0gZGVzY3JpcHRvci52YWx1ZTtcblxuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdAYXV0b2JpbmQgZGVjb3JhdG9yIGNhbiBvbmx5IGJlIGFwcGxpZWQgdG8gbWV0aG9kcyBub3Q6ICcgKyB0eXBlb2YgZm4pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAodGhpcyA9PT0gdGFyZ2V0LnByb3RvdHlwZSkge1xuICAgICAgICByZXR1cm4gZm47XG4gICAgICB9XG5cbiAgICAgIHZhciBib3VuZEZuID0gZm4uYmluZCh0aGlzKTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBrZXksIHtcbiAgICAgICAgdmFsdWU6IGJvdW5kRm4sXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGJvdW5kRm47XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9hdXRvYmluZC1kZWNvcmF0b3IvbGliL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQGNvcHlyaWdodCAyMDE1LCBQcm9tZXRoZXVzIFJlc2VhcmNoLCBMTENcbiAqL1xuXG5pbXBvcnQgYXV0b2JpbmQgICAgICAgICAgIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXN9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkZWJvdW5jZSAgICAgICAgICAgZnJvbSAnbG9kYXNoL2Z1bmN0aW9uL2RlYm91bmNlJztcbmltcG9ydCBlbXB0eUZ1bmN0aW9uICAgICAgZnJvbSAnZW1wdHkvZnVuY3Rpb24nO1xuXG4vKipcbiAqIElucHV0IGNvbXBvbmVudCB3aXRoIGRlYm91bmNlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBTZWxmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGRlYm91bmNlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuY1xuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgU2VsZjogJ2lucHV0JyxcbiAgICBkZWJvdW5jZTogMTAwLFxuICAgIG9uQ2hhbmdlOiBlbXB0eUZ1bmN0aW9uXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt2YWx1ZTogcHJvcHMudmFsdWV9O1xuICAgIHRoaXMuX2V4cGVjdGVkVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fZmluYWxpemVPbkNoYW5nZURlYm91bmNlZCA9IHByb3BzLmRlYm91bmNlID9cbiAgICAgIGRlYm91bmNlKHRoaXMuX2ZpbmFsaXplT25DaGFuZ2UuYmluZCh0aGlzKSwgcHJvcHMuZGVib3VuY2UpIDpcbiAgICAgIHRoaXMuX2ZpbmFsaXplT25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge1NlbGYsIGRlYm91bmNlOiBkZWJvdW5jZUVuYWJsZWQsIHZhbHVlLCAuLi5wcm9wc30gPSB0aGlzLnByb3BzO1xuICAgIGlmIChkZWJvdW5jZUVuYWJsZWQpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWxmXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgb25CbHVyPXt0aGlzLm9uQmx1cn0gLz5cbiAgICApO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLnZhbHVlICE9PSB0aGlzLl9leHBlY3RlZFZhbHVlKSB7XG4gICAgICB0aGlzLl9jYW5jZWxPbkNoYW5nZSgpO1xuICAgIH1cbiAgICBpZiAobmV4dFByb3BzLmRlYm91bmNlICE9PSB0aGlzLnByb3BzLmRlYm91bmNlKSB7XG4gICAgICB0aGlzLl9maW5hbGl6ZU9uQ2hhbmdlKCk7XG4gICAgICB0aGlzLl9jYW5jZWxPbkNoYW5nZSgpO1xuICAgICAgdGhpcy5fZmluYWxpemVPbkNoYW5nZURlYm91bmNlZCA9IG5leHRQcm9wcy5kZWJvdW5jZSA/XG4gICAgICAgIGRlYm91bmNlKHRoaXMuX2ZpbmFsaXplT25DaGFuZ2UuYmluZCh0aGlzKSwgbmV4dFByb3BzLmRlYm91bmNlKSA6XG4gICAgICAgIHRoaXMuX2ZpbmFsaXplT25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLl9maW5hbGl6ZU9uQ2hhbmdlKCk7XG4gICAgdGhpcy5fY2FuY2VsT25DaGFuZ2UoKTtcbiAgfVxuXG4gIF9zY2hlZHVsZU9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWV9KTtcbiAgICB0aGlzLl9leHBlY3RlZFZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5fZmluYWxpemVPbkNoYW5nZURlYm91bmNlZCgpO1xuICB9XG5cbiAgX2ZpbmFsaXplT25DaGFuZ2UoKSB7XG4gICAgaWYgKHRoaXMuX2V4cGVjdGVkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbGV0IHZhbHVlID0gdGhpcy5fZXhwZWN0ZWRWYWx1ZTtcbiAgICAgIHRoaXMuX2V4cGVjdGVkVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBfY2FuY2VsT25DaGFuZ2UoKSB7XG4gICAgaWYgKHRoaXMuX2ZpbmFsaXplT25DaGFuZ2VEZWJvdW5jZWQuY2FuY2VsKSB7XG4gICAgICB0aGlzLl9leHBlY3RlZFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZmluYWxpemVPbkNoYW5nZURlYm91bmNlZC5jYW5jZWwoKTtcbiAgICB9XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgb25DaGFuZ2UoZSkge1xuICAgIGxldCB2YWx1ZSA9IGUgJiYgZS50YXJnZXQgJiYgJ3ZhbHVlJyBpbiBlLnRhcmdldCA/XG4gICAgICBlLnRhcmdldC52YWx1ZSA6XG4gICAgICBlO1xuICAgIHRoaXMuX3NjaGVkdWxlT25DaGFuZ2UodmFsdWUpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIG9uQmx1cigpIHtcbiAgICBpZiAodGhpcy5fZXhwZWN0ZWRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9maW5hbGl6ZU9uQ2hhbmdlKCk7XG4gICAgICB0aGlzLl9jYW5jZWxPbkNoYW5nZSgpO1xuICAgIH1cbiAgfVxuXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9JbnB1dC5qc1xuICoqLyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2xhbmcvaXNPYmplY3QnKSxcbiAgICBub3cgPSByZXF1aXJlKCcuLi9kYXRlL25vdycpO1xuXG4vKiogVXNlZCBhcyB0aGUgYFR5cGVFcnJvcmAgbWVzc2FnZSBmb3IgXCJGdW5jdGlvbnNcIiBtZXRob2RzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyogTmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGVsYXlzIGludm9raW5nIGBmdW5jYCB1bnRpbCBhZnRlciBgd2FpdGBcbiAqIG1pbGxpc2Vjb25kcyBoYXZlIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHdhc1xuICogaW52b2tlZC4gVGhlIGRlYm91bmNlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGAgbWV0aG9kIHRvIGNhbmNlbFxuICogZGVsYXllZCBpbnZvY2F0aW9ucy4gUHJvdmlkZSBhbiBvcHRpb25zIG9iamVjdCB0byBpbmRpY2F0ZSB0aGF0IGBmdW5jYFxuICogc2hvdWxkIGJlIGludm9rZWQgb24gdGhlIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICogU3Vic2VxdWVudCBjYWxscyB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0XG4gKiBgZnVuY2AgaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzIGludm9rZWRcbiAqIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gaXNcbiAqIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cDovL2RydXBhbG1vdGlvbi5jb20vYXJ0aWNsZS9kZWJvdW5jZS1hbmQtdGhyb3R0bGUtdmlzdWFsLWV4cGxhbmF0aW9uKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy5kZWJvdW5jZWAgYW5kIGBfLnRocm90dGxlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBkZWJvdW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPWZhbHNlXSBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nXG4gKiAgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhXYWl0XSBUaGUgbWF4aW11bSB0aW1lIGBmdW5jYCBpcyBhbGxvd2VkIHRvIGJlXG4gKiAgZGVsYXllZCBiZWZvcmUgaXQncyBpbnZva2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXSBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZ1xuICogIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIGF2b2lkIGNvc3RseSBjYWxjdWxhdGlvbnMgd2hpbGUgdGhlIHdpbmRvdyBzaXplIGlzIGluIGZsdXhcbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gaW52b2tlIGBzZW5kTWFpbGAgd2hlbiB0aGUgY2xpY2sgZXZlbnQgaXMgZmlyZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxsc1xuICogalF1ZXJ5KCcjcG9zdGJveCcpLm9uKCdjbGljaycsIF8uZGVib3VuY2Uoc2VuZE1haWwsIDMwMCwge1xuICogICAnbGVhZGluZyc6IHRydWUsXG4gKiAgICd0cmFpbGluZyc6IGZhbHNlXG4gKiB9KSk7XG4gKlxuICogLy8gZW5zdXJlIGBiYXRjaExvZ2AgaXMgaW52b2tlZCBvbmNlIGFmdGVyIDEgc2Vjb25kIG9mIGRlYm91bmNlZCBjYWxsc1xuICogdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSgnL3N0cmVhbScpO1xuICogalF1ZXJ5KHNvdXJjZSkub24oJ21lc3NhZ2UnLCBfLmRlYm91bmNlKGJhdGNoTG9nLCAyNTAsIHtcbiAqICAgJ21heFdhaXQnOiAxMDAwXG4gKiB9KSk7XG4gKlxuICogLy8gY2FuY2VsIGEgZGVib3VuY2VkIGNhbGxcbiAqIHZhciB0b2RvQ2hhbmdlcyA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDEwMDApO1xuICogT2JqZWN0Lm9ic2VydmUobW9kZWxzLnRvZG8sIHRvZG9DaGFuZ2VzKTtcbiAqXG4gKiBPYmplY3Qub2JzZXJ2ZShtb2RlbHMsIGZ1bmN0aW9uKGNoYW5nZXMpIHtcbiAqICAgaWYgKF8uZmluZChjaGFuZ2VzLCB7ICd1c2VyJzogJ3RvZG8nLCAndHlwZSc6ICdkZWxldGUnfSkpIHtcbiAqICAgICB0b2RvQ2hhbmdlcy5jYW5jZWwoKTtcbiAqICAgfVxuICogfSwgWydkZWxldGUnXSk7XG4gKlxuICogLy8gLi4uYXQgc29tZSBwb2ludCBgbW9kZWxzLnRvZG9gIGlzIGNoYW5nZWRcbiAqIG1vZGVscy50b2RvLmNvbXBsZXRlZCA9IHRydWU7XG4gKlxuICogLy8gLi4uYmVmb3JlIDEgc2Vjb25kIGhhcyBwYXNzZWQgYG1vZGVscy50b2RvYCBpcyBkZWxldGVkXG4gKiAvLyB3aGljaCBjYW5jZWxzIHRoZSBkZWJvdW5jZWQgYHRvZG9DaGFuZ2VzYCBjYWxsXG4gKiBkZWxldGUgbW9kZWxzLnRvZG87XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGFyZ3MsXG4gICAgICBtYXhUaW1lb3V0SWQsXG4gICAgICByZXN1bHQsXG4gICAgICBzdGFtcCxcbiAgICAgIHRoaXNBcmcsXG4gICAgICB0aW1lb3V0SWQsXG4gICAgICB0cmFpbGluZ0NhbGwsXG4gICAgICBsYXN0Q2FsbGVkID0gMCxcbiAgICAgIG1heFdhaXQgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gd2FpdCA8IDAgPyAwIDogKCt3YWl0IHx8IDApO1xuICBpZiAob3B0aW9ucyA9PT0gdHJ1ZSkge1xuICAgIHZhciBsZWFkaW5nID0gdHJ1ZTtcbiAgICB0cmFpbGluZyA9IGZhbHNlO1xuICB9IGVsc2UgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heFdhaXQgPSAnbWF4V2FpdCcgaW4gb3B0aW9ucyAmJiBuYXRpdmVNYXgoK29wdGlvbnMubWF4V2FpdCB8fCAwLCB3YWl0KTtcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aW1lb3V0SWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgIH1cbiAgICBpZiAobWF4VGltZW91dElkKSB7XG4gICAgICBjbGVhclRpbWVvdXQobWF4VGltZW91dElkKTtcbiAgICB9XG4gICAgbGFzdENhbGxlZCA9IDA7XG4gICAgbWF4VGltZW91dElkID0gdGltZW91dElkID0gdHJhaWxpbmdDYWxsID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcGxldGUoaXNDYWxsZWQsIGlkKSB7XG4gICAgaWYgKGlkKSB7XG4gICAgICBjbGVhclRpbWVvdXQoaWQpO1xuICAgIH1cbiAgICBtYXhUaW1lb3V0SWQgPSB0aW1lb3V0SWQgPSB0cmFpbGluZ0NhbGwgPSB1bmRlZmluZWQ7XG4gICAgaWYgKGlzQ2FsbGVkKSB7XG4gICAgICBsYXN0Q2FsbGVkID0gbm93KCk7XG4gICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgICAgaWYgKCF0aW1lb3V0SWQgJiYgIW1heFRpbWVvdXRJZCkge1xuICAgICAgICBhcmdzID0gdGhpc0FyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkZWxheWVkKCkge1xuICAgIHZhciByZW1haW5pbmcgPSB3YWl0IC0gKG5vdygpIC0gc3RhbXApO1xuICAgIGlmIChyZW1haW5pbmcgPD0gMCB8fCByZW1haW5pbmcgPiB3YWl0KSB7XG4gICAgICBjb21wbGV0ZSh0cmFpbGluZ0NhbGwsIG1heFRpbWVvdXRJZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZGVsYXllZCwgcmVtYWluaW5nKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtYXhEZWxheWVkKCkge1xuICAgIGNvbXBsZXRlKHRyYWlsaW5nLCB0aW1lb3V0SWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgc3RhbXAgPSBub3coKTtcbiAgICB0aGlzQXJnID0gdGhpcztcbiAgICB0cmFpbGluZ0NhbGwgPSB0cmFpbGluZyAmJiAodGltZW91dElkIHx8ICFsZWFkaW5nKTtcblxuICAgIGlmIChtYXhXYWl0ID09PSBmYWxzZSkge1xuICAgICAgdmFyIGxlYWRpbmdDYWxsID0gbGVhZGluZyAmJiAhdGltZW91dElkO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIW1heFRpbWVvdXRJZCAmJiAhbGVhZGluZykge1xuICAgICAgICBsYXN0Q2FsbGVkID0gc3RhbXA7XG4gICAgICB9XG4gICAgICB2YXIgcmVtYWluaW5nID0gbWF4V2FpdCAtIChzdGFtcCAtIGxhc3RDYWxsZWQpLFxuICAgICAgICAgIGlzQ2FsbGVkID0gcmVtYWluaW5nIDw9IDAgfHwgcmVtYWluaW5nID4gbWF4V2FpdDtcblxuICAgICAgaWYgKGlzQ2FsbGVkKSB7XG4gICAgICAgIGlmIChtYXhUaW1lb3V0SWQpIHtcbiAgICAgICAgICBtYXhUaW1lb3V0SWQgPSBjbGVhclRpbWVvdXQobWF4VGltZW91dElkKTtcbiAgICAgICAgfVxuICAgICAgICBsYXN0Q2FsbGVkID0gc3RhbXA7XG4gICAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghbWF4VGltZW91dElkKSB7XG4gICAgICAgIG1heFRpbWVvdXRJZCA9IHNldFRpbWVvdXQobWF4RGVsYXllZCwgcmVtYWluaW5nKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzQ2FsbGVkICYmIHRpbWVvdXRJZCkge1xuICAgICAgdGltZW91dElkID0gY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCF0aW1lb3V0SWQgJiYgd2FpdCAhPT0gbWF4V2FpdCkge1xuICAgICAgdGltZW91dElkID0gc2V0VGltZW91dChkZWxheWVkLCB3YWl0KTtcbiAgICB9XG4gICAgaWYgKGxlYWRpbmdDYWxsKSB7XG4gICAgICBpc0NhbGxlZCA9IHRydWU7XG4gICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIH1cbiAgICBpZiAoaXNDYWxsZWQgJiYgIXRpbWVvdXRJZCAmJiAhbWF4VGltZW91dElkKSB7XG4gICAgICBhcmdzID0gdGhpc0FyZyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYm91bmNlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2Z1bmN0aW9uL2RlYm91bmNlLmpzXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9nZXROYXRpdmUnKTtcblxuLyogTmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVOb3cgPSBnZXROYXRpdmUoRGF0ZSwgJ25vdycpO1xuXG4vKipcbiAqIEdldHMgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBoYXZlIGVsYXBzZWQgc2luY2UgdGhlIFVuaXggZXBvY2hcbiAqICgxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IGxvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGZ1bmN0aW9uIHRvIGJlIGludm9rZWRcbiAqL1xudmFyIG5vdyA9IG5hdGl2ZU5vdyB8fCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBub3c7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvZGF0ZS9ub3cuanNcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHt9O1xuXG5pZiAoJ3Byb2R1Y3Rpb24nICE9IHByb2Nlc3MuZW52Lk5PREVfRU5WKSB7XG4gIE9iamVjdC5mcmVlemUobW9kdWxlLmV4cG9ydHMpO1xufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZW1wdHkvZnVuY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBAY29weXJpZ2h0IDIwMTUsIFByb21ldGhldXMgUmVzZWFyY2gsIExMQ1xuICovXG5cbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlc30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbXBvbmVudCAgICAgICAgICBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgRXJyb3IgICAgICAgICAgICAgIGZyb20gJy4vRXJyb3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvckxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLi4uQ29tcG9uZW50LnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIENvbXBvbmVudCB3aGljaCBpcyB1c2VkIHRvIHJlbmRlciBlcnJvciBpdGVtcy5cbiAgICAgKi9cbiAgICBFcnJvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcblxuICAgIC8qKlxuICAgICAqIElmIGNvbXBvbmVudCBzaG91bGQgcmVuZGVyIGVycm9ycyBmcm9tIGFsbCB0aGUgc3VidmFsdWVzLlxuICAgICAqL1xuICAgIGNvbXBsZXRlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFJlc3RyaWN0IHNjaGVtYSB0eXBlc1xuICAgICAqL1xuICAgIHNjaGVtYVR5cGU6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgICBub0xhYmVsOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBFcnJvcixcbiAgICBTZWxmOiAnZGl2J1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge1NlbGYsIEVycm9yLCBub0xhYmVsLCBjb21wbGV0ZSwgc2NoZW1hVHlwZSwgLi4ucHJvcHN9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgZXJyb3JMaXN0ID0gY29tcGxldGUgP1xuICAgICAgdGhpcy5mb3JtVmFsdWUuY29tcGxldGVFcnJvckxpc3QgOlxuICAgICAgdGhpcy5mb3JtVmFsdWUuZXJyb3JMaXN0O1xuICAgIGlmIChzY2hlbWFUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yTGlzdCA9IGVycm9yTGlzdC5maWx0ZXIoZXJyb3IgPT5cbiAgICAgICAgZXJyb3Iuc2NoZW1hID8gc2NoZW1hVHlwZVtlcnJvci5zY2hlbWEudHlwZV0gOiBzY2hlbWFUeXBlLm5vbmUpO1xuICAgIH1cbiAgICBpZiAoZXJyb3JMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGxldCBpdGVtcyA9IGVycm9yTGlzdC5tYXAoKGVycm9yLCBpbmRleCkgPT5cbiAgICAgIDxFcnJvclxuICAgICAgICBrZXk9e2Vycm9yLmZpZWxkICsgJ19fJyArIGluZGV4fVxuICAgICAgICBlcnJvcj17ZXJyb3J9XG4gICAgICAgIG5vTGFiZWw9e25vTGFiZWx9XG4gICAgICAgIGNvbXBsZXRlPXtjb21wbGV0ZX1cbiAgICAgICAgLz5cbiAgICApO1xuICAgIHJldHVybiA8U2VsZiB7Li4ucHJvcHN9PntpdGVtc308L1NlbGY+O1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9FcnJvckxpc3QuanNcbiAqKi8iLCIvKipcbiAqIEBjb3B5cmlnaHQgMjAxNSwgUHJvbWV0aGV1cyBSZXNlYXJjaCwgTExDXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2Vycm9yLCBsYWJlbCwgbm9MYWJlbCwgY29tcGxldGV9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWxhYmVsICYmIGVycm9yLnNjaGVtYSkge1xuICAgICAgbGFiZWwgPSBlcnJvci5zY2hlbWEubGFiZWw7XG4gICAgfVxuICAgIGlmIChsYWJlbCAmJiBjb21wbGV0ZSAmJiAhbm9MYWJlbCkge1xuICAgICAgcmV0dXJuIDxkaXY+e2Vycm9yLnNjaGVtYS5sYWJlbH06IHtlcnJvci5tZXNzYWdlfTwvZGl2PjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxkaXY+e2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9FcnJvci5qc1xuICoqLyIsIi8qKlxuICogQGNvcHlyaWdodCAyMDE1LCBQcm9tZXRoZXVzIFJlc2VhcmNoLCBMTENcbiAqL1xuXG5pbXBvcnQgbWVtb2l6ZSAgICAgICAgICAgICAgICAgICAgZnJvbSAnbWVtb2l6ZS1kZWNvcmF0b3InO1xuaW1wb3J0IGNsb25lICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ2xvZGFzaC9sYW5nL2Nsb25lRGVlcCc7XG5pbXBvcnQgc2VsZWN0VmFsdWUgICAgICAgICAgICAgICAgZnJvbSAnbG9kYXNoL29iamVjdC9nZXQnO1xuaW1wb3J0IHNldCAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ2xvZGFzaC9vYmplY3Qvc2V0JztcbmltcG9ydCBlbXB0eUZ1bmN0aW9uICAgICAgICAgICAgICBmcm9tICdlbXB0eS9mdW5jdGlvbic7XG5pbXBvcnQgbWFrZUtleVBhdGggICAgICAgICAgICAgICAgZnJvbSAnLi9rZXlQYXRoJztcbmltcG9ydCB7Y3JlYXRlVmFsaWRhdG9yLFxuICAgICAgICBzZWxlY3QgYXMgc2VsZWN0U2NoZW1hfSAgIGZyb20gJy4vU2NoZW1hJztcblxuZXhwb3J0IGNsYXNzIFZhbHVlIHtcblxuICBzZWxlY3Qoa2V5KSB7XG4gICAgbGV0IGtleVBhdGggPSB0aGlzLmtleVBhdGguY29uY2F0KG1ha2VLZXlQYXRoKGtleSkpO1xuICAgIHJldHVybiBuZXcgVmFsdWVMZWFmKHRoaXMuX3Jvb3QsIGtleVBhdGgpO1xuICB9XG5cbiAgc2V0KHZhbHVlLCBxdWlldCkge1xuICAgIGNvbnNvbGUud2FybigvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICdWYWx1ZS5wcm90b3R5cGUuc2V0KHZhbHVlKSBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICd1c2UgVmFsdWUucHJvdG90eXBlLnVwZGF0ZSh2YWx1ZSkgaW5zdGVhZCdcbiAgICApO1xuICAgIHJldHVybiB0aGlzLnVwZGF0ZSh2YWx1ZSwgcXVpZXQpO1xuICB9XG5cbiAgdXBkYXRlKHZhbHVlLCBxdWlldCkge1xuICAgIGxldCByb290VmFsdWUgPSBjbG9uZSh0aGlzLl9yb290LnZhbHVlKTtcbiAgICBpZiAodGhpcy5rZXlQYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcm9vdFZhbHVlID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvb3RWYWx1ZSA9IHNldChyb290VmFsdWUsIHRoaXMua2V5UGF0aCwgdmFsdWUpO1xuICAgIH1cbiAgICBsZXQgbmV4dFJvb3QgPSBjcmVhdGVWYWx1ZShcbiAgICAgIHRoaXMuX3Jvb3Quc2NoZW1hLFxuICAgICAgcm9vdFZhbHVlLFxuICAgICAgdGhpcy5fcm9vdC5vbkNoYW5nZSxcbiAgICAgIHRoaXMuX3Jvb3QucGFyYW1zKTtcbiAgICBpZiAoIXF1aWV0KSB7XG4gICAgICB0aGlzLl9yb290Lm9uQ2hhbmdlKG5leHRSb290KTtcbiAgICB9XG4gICAgcmV0dXJuIG5leHRSb290O1xuICB9XG59XG5cbmNsYXNzIFZhbHVlUm9vdCBleHRlbmRzIFZhbHVlIHtcblxuICBrZXlQYXRoID0gW107XG4gIHBhcmVudCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3Ioc2NoZW1hLCB2YWx1ZSwgb25DaGFuZ2UsIHBhcmFtcywgZXJyb3JMaXN0KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9yb290ID0gdGhpcztcbiAgICB0aGlzLmtleVBhdGggPSBbXTtcbiAgICB0aGlzLnNjaGVtYSA9IHNjaGVtYTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5vbkNoYW5nZSA9IG9uQ2hhbmdlO1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICAgIHRoaXMuZXJyb3JMaXN0ID0gZXJyb3JMaXN0LmZpbHRlcihlcnJvciA9PiBlcnJvci5maWVsZCA9PT0gJ2RhdGEnKTtcbiAgICB0aGlzLmNvbXBsZXRlRXJyb3JMaXN0ID0gZXJyb3JMaXN0O1xuICB9XG59XG5cbmNsYXNzIFZhbHVlTGVhZiBleHRlbmRzIFZhbHVlIHtcblxuICBjb25zdHJ1Y3Rvcihyb290LCBrZXlQYXRoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9yb290ID0gcm9vdDtcbiAgICB0aGlzLmtleVBhdGggPSBrZXlQYXRoO1xuICAgIHRoaXMuc2NoZW1hID0gc2VsZWN0U2NoZW1hKHJvb3Quc2NoZW1hLCBrZXlQYXRoKTtcbiAgICB0aGlzLnZhbHVlID0gc2VsZWN0VmFsdWUocm9vdC52YWx1ZSwga2V5UGF0aCk7XG4gIH1cblxuICBnZXQgcGFyYW1zKCkge1xuICAgIHJldHVybiB0aGlzLl9yb290LnBhcmFtcztcbiAgfVxuXG4gIEBtZW1vaXplXG4gIGdldCBlcnJvckxpc3QoKSB7XG4gICAgbGV0IGVycm9yS2V5UGF0aCA9IGBkYXRhLiR7dGhpcy5rZXlQYXRoLmpvaW4oJy4nKX1gO1xuICAgIHJldHVybiB0aGlzLl9yb290LmNvbXBsZXRlRXJyb3JMaXN0LmZpbHRlcihlcnJvciA9PiBlcnJvci5maWVsZCA9PT0gZXJyb3JLZXlQYXRoKTtcbiAgfVxuXG4gIEBtZW1vaXplXG4gIGdldCBjb21wbGV0ZUVycm9yTGlzdCgpIHtcbiAgICBsZXQgZXJyb3JLZXlQYXRoID0gYGRhdGEuJHt0aGlzLmtleVBhdGguam9pbignLicpfWA7XG4gICAgbGV0IGxlbmd0aCA9IGVycm9yS2V5UGF0aC5sZW5ndGg7XG4gICAgcmV0dXJuIHRoaXMuX3Jvb3QuY29tcGxldGVFcnJvckxpc3RcbiAgICAgIC5maWx0ZXIoZXJyb3IgPT4gZXJyb3IuZmllbGQuc2xpY2UoMCwgbGVuZ3RoKSA9PT0gZXJyb3JLZXlQYXRoKTtcbiAgfVxuXG4gIGdldCBwYXJlbnQoKSB7XG4gICAgaWYgKHRoaXMua2V5UGF0aC5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yb290O1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQga2V5UGF0aCA9IHRoaXMua2V5UGF0aC5zbGljZSgpO1xuICAgICAga2V5UGF0aC5wb3AoKTtcbiAgICAgIHJldHVybiBuZXcgVmFsdWVMZWFmKFxuICAgICAgICB0aGlzLl9yb290LFxuICAgICAgICBrZXlQYXRoXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG59XG5cbmNvbnN0IE5PTl9FTlVNRVJBQkxFX1BST1AgPSB7XG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICB3cml0YWJsZTogdHJ1ZSxcbiAgY29uZmlndXJhYmxlOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBjYWNoZShvYmosIGtleSwgdmFsdWUpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7Li4uTk9OX0VOVU1FUkFCTEVfUFJPUCwgdmFsdWV9KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGUoc2NoZW1hLCB2YWx1ZSkge1xuICBpZiAoIXNjaGVtYSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBpZiAodmFsdWUuX19zY2hlbWEgPT09IHNjaGVtYSAmJiB2YWx1ZS5fX2Vycm9yTGlzdCkge1xuICAgIHJldHVybiB2YWx1ZS5fX2Vycm9yTGlzdDtcbiAgfSBlbHNlIHtcbiAgICBpZiAoc2NoZW1hLl9fdmFsaWRhdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNhY2hlKHNjaGVtYSwgJ19fdmFsaWRhdG9yJywgY3JlYXRlVmFsaWRhdG9yKHNjaGVtYSwge2Zvcm1hdHM6IHNjaGVtYS5mb3JtYXRzfSkpO1xuICAgIH1cbiAgICBzY2hlbWEuX192YWxpZGF0b3IodmFsdWUpO1xuICAgIGxldCBlcnJvckxpc3QgPSBzY2hlbWEuX192YWxpZGF0b3IuZXJyb3JzIHx8IFtdO1xuICAgIGNhY2hlKHZhbHVlLCAnX19zY2hlbWEnLCBzY2hlbWEpO1xuICAgIGNhY2hlKHZhbHVlLCAnX19lcnJvckxpc3QnLCBlcnJvckxpc3QpO1xuICAgIHJldHVybiBlcnJvckxpc3Q7XG4gIH1cbn1cblxuLyoqXG4gKiBDaGVjayBpZiB2YWx1ZSBpcyBhIGZvcm0gdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbHVlKG1heWJlVmFsdWUpIHtcbiAgcmV0dXJuIG1heWJlVmFsdWUgaW5zdGFuY2VvZiBWYWx1ZTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgcm9vdCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVmFsdWUoXG4gICAgc2NoZW1hLFxuICAgIHZhbHVlID0ge30sXG4gICAgb25DaGFuZ2UgPSBlbXB0eUZ1bmN0aW9uLFxuICAgIHBhcmFtcyA9IHt9LFxuICAgIGVycm9yTGlzdCA9IG51bGwpIHtcbiAgaWYgKGVycm9yTGlzdCA9PT0gbnVsbCkge1xuICAgIGVycm9yTGlzdCA9IHZhbGlkYXRlKHNjaGVtYSwgdmFsdWUpO1xuICB9XG4gIHJldHVybiBuZXcgVmFsdWVSb290KHNjaGVtYSwgdmFsdWUsIG9uQ2hhbmdlLCBwYXJhbXMsIGVycm9yTGlzdCk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9WYWx1ZS5qc1xuICoqLyIsInZhciBjb25zb2xlO1xyXG5pZiAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuY29uc29sZSkge1xyXG4gICAgY29uc29sZSA9IGdsb2JhbC5jb25zb2xlXHJcbn0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cuY29uc29sZSkge1xyXG4gICAgY29uc29sZSA9IHdpbmRvdy5jb25zb2xlXHJcbn0gZWxzZSB7XHJcbiAgICBjb25zb2xlID0gd2luZG93LmNvbnNvbGUgPSB7fVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gY29uc29sZTtcclxuZm9yKHZhciBuYW1lIGluIHtsb2c6MSwgaW5mbzoxLCBlcnJvcjoxLCB3YXJuOjEsIGRpcjoxLCB0cmFjZToxLCBhc3NlcnQ6MSwgdGltZToxLCB0aW1lRW5kOiAxfSlcclxuXHRpZighY29uc29sZVtuYW1lXSlcclxuXHRcdGNvbnNvbGVbbmFtZV0gPSBmdW5jdGlvbigpIHt9O1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9ub2RlLWxpYnMtYnJvd3Nlci9tb2NrL2NvbnNvbGUuanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IG1lbW9pemU7XG4vKipcbiAqIEBjb3B5cmlnaHQgMjAxNSwgQW5kcmV5IFBvcHAgPDhtYXlkYXlAZ21haWwuY29tPlxuICovXG5cbnZhciBTRU5USU5FTCA9IHt9O1xuXG5mdW5jdGlvbiBtZW1vaXplKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcikge1xuICBpZiAodHlwZW9mIGRlc2NyaXB0b3IudmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gX21lbW9pemVNZXRob2QodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZGVzY3JpcHRvci5nZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gX21lbW9pemVHZXR0ZXIodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0BtZW1vaXplIGRlY29yYXRvciBjYW4gYmUgYXBwbGllZCB0byBtZXRob2RzIG9yIGdldHRlcnMsIGdvdCAnICsgU3RyaW5nKGRlc2NyaXB0b3IudmFsdWUpICsgJyBpbnN0ZWFkJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX21lbW9pemVHZXR0ZXIodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XG4gIHZhciBtZW1vaXplZE5hbWUgPSAnX21lbW9pemVkXycgKyBuYW1lO1xuICB2YXIgZ2V0ID0gZGVzY3JpcHRvci5nZXQ7XG4gIHRhcmdldFttZW1vaXplZE5hbWVdID0gU0VOVElORUw7XG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgZGVzY3JpcHRvciwge1xuICAgIGdldDogKGZ1bmN0aW9uIChfZ2V0KSB7XG4gICAgICBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBfZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIGdldC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9nZXQudG9TdHJpbmcoKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBnZXQ7XG4gICAgfSkoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXNbbWVtb2l6ZWROYW1lXSA9PT0gU0VOVElORUwpIHtcbiAgICAgICAgdGhpc1ttZW1vaXplZE5hbWVdID0gZ2V0LmNhbGwodGhpcyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpc1ttZW1vaXplZE5hbWVdO1xuICAgIH0pXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBfbWVtb2l6ZU1ldGhvZCh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpIHtcbiAgaWYgKGRlc2NyaXB0b3IudmFsdWUubGVuZ3RoID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQG1lbW9pemUgZGVjb3JhdG9yIGNhbiBvbmx5IGJlIGFwcGxpZWQgdG8gbWV0aG9kcyBvZiB6ZXJvIGFyZ3VtZW50cycpO1xuICB9XG4gIHZhciBtZW1vaXplZE5hbWUgPSAnX21lbW9pemVkXycgKyBuYW1lO1xuICB2YXIgdmFsdWUgPSBkZXNjcmlwdG9yLnZhbHVlO1xuICB0YXJnZXRbbWVtb2l6ZWROYW1lXSA9IFNFTlRJTkVMO1xuICByZXR1cm4gX2V4dGVuZHMoe30sIGRlc2NyaXB0b3IsIHtcbiAgICB2YWx1ZTogKGZ1bmN0aW9uIChfdmFsdWUpIHtcbiAgICAgIGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gX3ZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHZhbHVlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3ZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSkoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXNbbWVtb2l6ZWROYW1lXSA9PT0gU0VOVElORUwpIHtcbiAgICAgICAgdGhpc1ttZW1vaXplZE5hbWVdID0gdmFsdWUuY2FsbCh0aGlzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzW21lbW9pemVkTmFtZV07XG4gICAgfSlcbiAgfSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L21lbW9pemUtZGVjb3JhdG9yL2xpYi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYmFzZUNsb25lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYmFzZUNsb25lJyksXG4gICAgYmluZENhbGxiYWNrID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYmluZENhbGxiYWNrJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlZXAgY2xvbmUgb2YgYHZhbHVlYC4gSWYgYGN1c3RvbWl6ZXJgIGlzIHByb3ZpZGVkIGl0J3MgaW52b2tlZFxuICogdG8gcHJvZHVjZSB0aGUgY2xvbmVkIHZhbHVlcy4gSWYgYGN1c3RvbWl6ZXJgIHJldHVybnMgYHVuZGVmaW5lZGAgY2xvbmluZ1xuICogaXMgaGFuZGxlZCBieSB0aGUgbWV0aG9kIGluc3RlYWQuIFRoZSBgY3VzdG9taXplcmAgaXMgYm91bmQgdG8gYHRoaXNBcmdgXG4gKiBhbmQgaW52b2tlZCB3aXRoIHVwIHRvIHRocmVlIGFyZ3VtZW50OyAodmFsdWUgWywgaW5kZXh8a2V5LCBvYmplY3RdKS5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvbiB0aGVcbiAqIFtzdHJ1Y3R1cmVkIGNsb25lIGFsZ29yaXRobV0oaHR0cDovL3d3dy53My5vcmcvVFIvaHRtbDUvaW5mcmFzdHJ1Y3R1cmUuaHRtbCNpbnRlcm5hbC1zdHJ1Y3R1cmVkLWNsb25pbmctYWxnb3JpdGhtKS5cbiAqIFRoZSBlbnVtZXJhYmxlIHByb3BlcnRpZXMgb2YgYGFyZ3VtZW50c2Agb2JqZWN0cyBhbmQgb2JqZWN0cyBjcmVhdGVkIGJ5XG4gKiBjb25zdHJ1Y3RvcnMgb3RoZXIgdGhhbiBgT2JqZWN0YCBhcmUgY2xvbmVkIHRvIHBsYWluIGBPYmplY3RgIG9iamVjdHMuIEFuXG4gKiBlbXB0eSBvYmplY3QgaXMgcmV0dXJuZWQgZm9yIHVuY2xvbmVhYmxlIHZhbHVlcyBzdWNoIGFzIGZ1bmN0aW9ucywgRE9NIG5vZGVzLFxuICogTWFwcywgU2V0cywgYW5kIFdlYWtNYXBzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gZGVlcCBjbG9uZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNsb25pbmcgdmFsdWVzLlxuICogQHBhcmFtIHsqfSBbdGhpc0FyZ10gVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBjdXN0b21pemVyYC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBkZWVwIGNsb25lZCB2YWx1ZS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIHVzZXJzID0gW1xuICogICB7ICd1c2VyJzogJ2Jhcm5leScgfSxcbiAqICAgeyAndXNlcic6ICdmcmVkJyB9XG4gKiBdO1xuICpcbiAqIHZhciBkZWVwID0gXy5jbG9uZURlZXAodXNlcnMpO1xuICogZGVlcFswXSA9PT0gdXNlcnNbMF07XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIC8vIHVzaW5nIGEgY3VzdG9taXplciBjYWxsYmFja1xuICogdmFyIGVsID0gXy5jbG9uZURlZXAoZG9jdW1lbnQuYm9keSwgZnVuY3Rpb24odmFsdWUpIHtcbiAqICAgaWYgKF8uaXNFbGVtZW50KHZhbHVlKSkge1xuICogICAgIHJldHVybiB2YWx1ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gKiAgIH1cbiAqIH0pO1xuICpcbiAqIGVsID09PSBkb2N1bWVudC5ib2R5XG4gKiAvLyA9PiBmYWxzZVxuICogZWwubm9kZU5hbWVcbiAqIC8vID0+IEJPRFlcbiAqIGVsLmNoaWxkTm9kZXMubGVuZ3RoO1xuICogLy8gPT4gMjBcbiAqL1xuZnVuY3Rpb24gY2xvbmVEZWVwKHZhbHVlLCBjdXN0b21pemVyLCB0aGlzQXJnKSB7XG4gIHJldHVybiB0eXBlb2YgY3VzdG9taXplciA9PSAnZnVuY3Rpb24nXG4gICAgPyBiYXNlQ2xvbmUodmFsdWUsIHRydWUsIGJpbmRDYWxsYmFjayhjdXN0b21pemVyLCB0aGlzQXJnLCAzKSlcbiAgICA6IGJhc2VDbG9uZSh2YWx1ZSwgdHJ1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVEZWVwO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2xhbmcvY2xvbmVEZWVwLmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBhcnJheUNvcHkgPSByZXF1aXJlKCcuL2FycmF5Q29weScpLFxuICAgIGFycmF5RWFjaCA9IHJlcXVpcmUoJy4vYXJyYXlFYWNoJyksXG4gICAgYmFzZUFzc2lnbiA9IHJlcXVpcmUoJy4vYmFzZUFzc2lnbicpLFxuICAgIGJhc2VGb3JPd24gPSByZXF1aXJlKCcuL2Jhc2VGb3JPd24nKSxcbiAgICBpbml0Q2xvbmVBcnJheSA9IHJlcXVpcmUoJy4vaW5pdENsb25lQXJyYXknKSxcbiAgICBpbml0Q2xvbmVCeVRhZyA9IHJlcXVpcmUoJy4vaW5pdENsb25lQnlUYWcnKSxcbiAgICBpbml0Q2xvbmVPYmplY3QgPSByZXF1aXJlKCcuL2luaXRDbG9uZU9iamVjdCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9sYW5nL2lzQXJyYXknKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2xhbmcvaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBzdXBwb3J0ZWQgYnkgYF8uY2xvbmVgLiAqL1xudmFyIGNsb25lYWJsZVRhZ3MgPSB7fTtcbmNsb25lYWJsZVRhZ3NbYXJnc1RhZ10gPSBjbG9uZWFibGVUYWdzW2FycmF5VGFnXSA9XG5jbG9uZWFibGVUYWdzW2FycmF5QnVmZmVyVGFnXSA9IGNsb25lYWJsZVRhZ3NbYm9vbFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tkYXRlVGFnXSA9IGNsb25lYWJsZVRhZ3NbZmxvYXQzMlRhZ10gPVxuY2xvbmVhYmxlVGFnc1tmbG9hdDY0VGFnXSA9IGNsb25lYWJsZVRhZ3NbaW50OFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tpbnQxNlRhZ10gPSBjbG9uZWFibGVUYWdzW2ludDMyVGFnXSA9XG5jbG9uZWFibGVUYWdzW251bWJlclRhZ10gPSBjbG9uZWFibGVUYWdzW29iamVjdFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tyZWdleHBUYWddID0gY2xvbmVhYmxlVGFnc1tzdHJpbmdUYWddID1cbmNsb25lYWJsZVRhZ3NbdWludDhUYWddID0gY2xvbmVhYmxlVGFnc1t1aW50OENsYW1wZWRUYWddID1cbmNsb25lYWJsZVRhZ3NbdWludDE2VGFnXSA9IGNsb25lYWJsZVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG5jbG9uZWFibGVUYWdzW2Vycm9yVGFnXSA9IGNsb25lYWJsZVRhZ3NbZnVuY1RhZ10gPVxuY2xvbmVhYmxlVGFnc1ttYXBUYWddID0gY2xvbmVhYmxlVGFnc1tzZXRUYWddID1cbmNsb25lYWJsZVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZSBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9ialRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY2xvbmVgIHdpdGhvdXQgc3VwcG9ydCBmb3IgYXJndW1lbnQganVnZ2xpbmdcbiAqIGFuZCBgdGhpc2AgYmluZGluZyBgY3VzdG9taXplcmAgZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjbG9uaW5nIHZhbHVlcy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBba2V5XSBUaGUga2V5IG9mIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCBgdmFsdWVgIGJlbG9uZ3MgdG8uXG4gKiBAcGFyYW0ge0FycmF5fSBbc3RhY2tBPVtdXSBUcmFja3MgdHJhdmVyc2VkIHNvdXJjZSBvYmplY3RzLlxuICogQHBhcmFtIHtBcnJheX0gW3N0YWNrQj1bXV0gQXNzb2NpYXRlcyBjbG9uZXMgd2l0aCBzb3VyY2UgY291bnRlcnBhcnRzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGNsb25lZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUNsb25lKHZhbHVlLCBpc0RlZXAsIGN1c3RvbWl6ZXIsIGtleSwgb2JqZWN0LCBzdGFja0EsIHN0YWNrQikge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoY3VzdG9taXplcikge1xuICAgIHJlc3VsdCA9IG9iamVjdCA/IGN1c3RvbWl6ZXIodmFsdWUsIGtleSwgb2JqZWN0KSA6IGN1c3RvbWl6ZXIodmFsdWUpO1xuICB9XG4gIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSk7XG4gIGlmIChpc0Fycikge1xuICAgIHJlc3VsdCA9IGluaXRDbG9uZUFycmF5KHZhbHVlKTtcbiAgICBpZiAoIWlzRGVlcCkge1xuICAgICAgcmV0dXJuIGFycmF5Q29weSh2YWx1ZSwgcmVzdWx0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhZyA9IG9ialRvU3RyaW5nLmNhbGwodmFsdWUpLFxuICAgICAgICBpc0Z1bmMgPSB0YWcgPT0gZnVuY1RhZztcblxuICAgIGlmICh0YWcgPT0gb2JqZWN0VGFnIHx8IHRhZyA9PSBhcmdzVGFnIHx8IChpc0Z1bmMgJiYgIW9iamVjdCkpIHtcbiAgICAgIHJlc3VsdCA9IGluaXRDbG9uZU9iamVjdChpc0Z1bmMgPyB7fSA6IHZhbHVlKTtcbiAgICAgIGlmICghaXNEZWVwKSB7XG4gICAgICAgIHJldHVybiBiYXNlQXNzaWduKHJlc3VsdCwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY2xvbmVhYmxlVGFnc1t0YWddXG4gICAgICAgID8gaW5pdENsb25lQnlUYWcodmFsdWUsIHRhZywgaXNEZWVwKVxuICAgICAgICA6IChvYmplY3QgPyB2YWx1ZSA6IHt9KTtcbiAgICB9XG4gIH1cbiAgLy8gQ2hlY2sgZm9yIGNpcmN1bGFyIHJlZmVyZW5jZXMgYW5kIHJldHVybiBpdHMgY29ycmVzcG9uZGluZyBjbG9uZS5cbiAgc3RhY2tBIHx8IChzdGFja0EgPSBbXSk7XG4gIHN0YWNrQiB8fCAoc3RhY2tCID0gW10pO1xuXG4gIHZhciBsZW5ndGggPSBzdGFja0EubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoc3RhY2tBW2xlbmd0aF0gPT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiBzdGFja0JbbGVuZ3RoXTtcbiAgICB9XG4gIH1cbiAgLy8gQWRkIHRoZSBzb3VyY2UgdmFsdWUgdG8gdGhlIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzIGFuZCBhc3NvY2lhdGUgaXQgd2l0aCBpdHMgY2xvbmUuXG4gIHN0YWNrQS5wdXNoKHZhbHVlKTtcbiAgc3RhY2tCLnB1c2gocmVzdWx0KTtcblxuICAvLyBSZWN1cnNpdmVseSBwb3B1bGF0ZSBjbG9uZSAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAoaXNBcnIgPyBhcnJheUVhY2ggOiBiYXNlRm9yT3duKSh2YWx1ZSwgZnVuY3Rpb24oc3ViVmFsdWUsIGtleSkge1xuICAgIHJlc3VsdFtrZXldID0gYmFzZUNsb25lKHN1YlZhbHVlLCBpc0RlZXAsIGN1c3RvbWl6ZXIsIGtleSwgdmFsdWUsIHN0YWNrQSwgc3RhY2tCKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUNsb25lO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2Jhc2VDbG9uZS5qc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcGllcyB0aGUgdmFsdWVzIG9mIGBzb3VyY2VgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHNvdXJjZSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheT1bXV0gVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIHRvLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5Q29weShzb3VyY2UsIGFycmF5KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gc291cmNlLmxlbmd0aDtcblxuICBhcnJheSB8fCAoYXJyYXkgPSBBcnJheShsZW5ndGgpKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtpbmRleF0gPSBzb3VyY2VbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUNvcHk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYXJyYXlDb3B5LmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZvckVhY2hgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBjYWxsYmFja1xuICogc2hvcnRoYW5kcyBhbmQgYHRoaXNgIGJpbmRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RWFjaChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpID09PSBmYWxzZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUVhY2g7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYXJyYXlFYWNoLmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBiYXNlQ29weSA9IHJlcXVpcmUoJy4vYmFzZUNvcHknKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi4vb2JqZWN0L2tleXMnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5hc3NpZ25gIHdpdGhvdXQgc3VwcG9ydCBmb3IgYXJndW1lbnQganVnZ2xpbmcsXG4gKiBtdWx0aXBsZSBzb3VyY2VzLCBhbmQgYGN1c3RvbWl6ZXJgIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ24ob2JqZWN0LCBzb3VyY2UpIHtcbiAgcmV0dXJuIHNvdXJjZSA9PSBudWxsXG4gICAgPyBvYmplY3RcbiAgICA6IGJhc2VDb3B5KHNvdXJjZSwga2V5cyhzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VBc3NpZ247XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUFzc2lnbi5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcGllcyBwcm9wZXJ0aWVzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wcyBUaGUgcHJvcGVydHkgbmFtZXMgdG8gY29weS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0by5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VDb3B5KHNvdXJjZSwgcHJvcHMsIG9iamVjdCkge1xuICBvYmplY3QgfHwgKG9iamVjdCA9IHt9KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG4gICAgb2JqZWN0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VDb3B5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2Jhc2VDb3B5LmpzXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9nZXROYXRpdmUnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzQXJyYXlMaWtlJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9sYW5nL2lzT2JqZWN0JyksXG4gICAgc2hpbUtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9zaGltS2V5cycpO1xuXG4vKiBOYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUtleXMgPSBnZXROYXRpdmUoT2JqZWN0LCAna2V5cycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLiBTZWUgdGhlXG4gKiBbRVMgc3BlY10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG52YXIga2V5cyA9ICFuYXRpdmVLZXlzID8gc2hpbUtleXMgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgdmFyIEN0b3IgPSBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgaWYgKCh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlID09PSBvYmplY3QpIHx8XG4gICAgICAodHlwZW9mIG9iamVjdCAhPSAnZnVuY3Rpb24nICYmIGlzQXJyYXlMaWtlKG9iamVjdCkpKSB7XG4gICAgcmV0dXJuIHNoaW1LZXlzKG9iamVjdCk7XG4gIH1cbiAgcmV0dXJuIGlzT2JqZWN0KG9iamVjdCkgPyBuYXRpdmVLZXlzKG9iamVjdCkgOiBbXTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5cztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9vYmplY3Qva2V5cy5qc1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZ2V0TGVuZ3RoID0gcmVxdWlyZSgnLi9nZXRMZW5ndGgnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgoZ2V0TGVuZ3RoKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2U7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvaXNBcnJheUxpa2UuanNcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGJhc2VQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vYmFzZVByb3BlcnR5Jyk7XG5cbi8qKlxuICogR2V0cyB0aGUgXCJsZW5ndGhcIiBwcm9wZXJ0eSB2YWx1ZSBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGF2b2lkIGEgW0pJVCBidWddKGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNDI3OTIpXG4gKiB0aGF0IGFmZmVjdHMgU2FmYXJpIG9uIGF0IGxlYXN0IGlPUyA4LjEtOC4zIEFSTTY0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgXCJsZW5ndGhcIiB2YWx1ZS5cbiAqL1xudmFyIGdldExlbmd0aCA9IGJhc2VQcm9wZXJ0eSgnbGVuZ3RoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TGVuZ3RoO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2dldExlbmd0aC5qc1xuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnByb3BlcnR5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eShrZXkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQcm9wZXJ0eTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlUHJvcGVydHkuanNcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9sYW5nL2lzQXJyYXknKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9pc0luZGV4JyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnLi4vb2JqZWN0L2tleXNJbicpO1xuXG4vKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBIGZhbGxiYWNrIGltcGxlbWVudGF0aW9uIG9mIGBPYmplY3Qua2V5c2Agd2hpY2ggY3JlYXRlcyBhbiBhcnJheSBvZiB0aGVcbiAqIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBzaGltS2V5cyhvYmplY3QpIHtcbiAgdmFyIHByb3BzID0ga2V5c0luKG9iamVjdCksXG4gICAgICBwcm9wc0xlbmd0aCA9IHByb3BzLmxlbmd0aCxcbiAgICAgIGxlbmd0aCA9IHByb3BzTGVuZ3RoICYmIG9iamVjdC5sZW5ndGg7XG5cbiAgdmFyIGFsbG93SW5kZXhlcyA9ICEhbGVuZ3RoICYmIGlzTGVuZ3RoKGxlbmd0aCkgJiZcbiAgICAoaXNBcnJheShvYmplY3QpIHx8IGlzQXJndW1lbnRzKG9iamVjdCkpO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKCsraW5kZXggPCBwcm9wc0xlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG4gICAgaWYgKChhbGxvd0luZGV4ZXMgJiYgaXNJbmRleChrZXksIGxlbmd0aCkpIHx8IGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNoaW1LZXlzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL3NoaW1LZXlzLmpzXG4gKiogbW9kdWxlIGlkID0gMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzQXJyYXlMaWtlJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogTmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGNvcnJlY3RseSBjbGFzc2lmaWVkLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpICYmXG4gICAgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcmd1bWVudHM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvbGFuZy9pc0FyZ3VtZW50cy5qc1xuICoqIG1vZHVsZSBpZCA9IDM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXlxcZCskLztcblxuLyoqXG4gKiBVc2VkIGFzIHRoZSBbbWF4aW11bSBsZW5ndGhdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW51bWJlci5tYXhfc2FmZV9pbnRlZ2VyKVxuICogb2YgYW4gYXJyYXktbGlrZSB2YWx1ZS5cbiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICB2YWx1ZSA9ICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgfHwgcmVJc1VpbnQudGVzdCh2YWx1ZSkpID8gK3ZhbHVlIDogLTE7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcbiAgcmV0dXJuIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGg7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJbmRleDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9pc0luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FycmF5JyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzSW5kZXgnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzTGVuZ3RoJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9sYW5nL2lzT2JqZWN0Jyk7XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5c0luKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InLCAnYyddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbmZ1bmN0aW9uIGtleXNJbihvYmplY3QpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICB9XG4gIHZhciBsZW5ndGggPSBvYmplY3QubGVuZ3RoO1xuICBsZW5ndGggPSAobGVuZ3RoICYmIGlzTGVuZ3RoKGxlbmd0aCkgJiZcbiAgICAoaXNBcnJheShvYmplY3QpIHx8IGlzQXJndW1lbnRzKG9iamVjdCkpICYmIGxlbmd0aCkgfHwgMDtcblxuICB2YXIgQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcixcbiAgICAgIGluZGV4ID0gLTEsXG4gICAgICBpc1Byb3RvID0gdHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSA9PT0gb2JqZWN0LFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKSxcbiAgICAgIHNraXBJbmRleGVzID0gbGVuZ3RoID4gMDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSAoaW5kZXggKyAnJyk7XG4gIH1cbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmICghKHNraXBJbmRleGVzICYmIGlzSW5kZXgoa2V5LCBsZW5ndGgpKSAmJlxuICAgICAgICAhKGtleSA9PSAnY29uc3RydWN0b3InICYmIChpc1Byb3RvIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXNJbjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9vYmplY3Qva2V5c0luLmpzXG4gKiogbW9kdWxlIGlkID0gMzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBiYXNlRm9yID0gcmVxdWlyZSgnLi9iYXNlRm9yJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4uL29iamVjdC9rZXlzJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZm9yT3duYCB3aXRob3V0IHN1cHBvcnQgZm9yIGNhbGxiYWNrXG4gKiBzaG9ydGhhbmRzIGFuZCBgdGhpc2AgYmluZGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlRm9yT3duKG9iamVjdCwgaXRlcmF0ZWUpIHtcbiAgcmV0dXJuIGJhc2VGb3Iob2JqZWN0LCBpdGVyYXRlZSwga2V5cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZvck93bjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlRm9yT3duLmpzXG4gKiogbW9kdWxlIGlkID0gNDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBjcmVhdGVCYXNlRm9yID0gcmVxdWlyZSgnLi9jcmVhdGVCYXNlRm9yJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGJhc2VGb3JJbmAgYW5kIGBiYXNlRm9yT3duYCB3aGljaCBpdGVyYXRlc1xuICogb3ZlciBgb2JqZWN0YCBwcm9wZXJ0aWVzIHJldHVybmVkIGJ5IGBrZXlzRnVuY2AgaW52b2tpbmcgYGl0ZXJhdGVlYCBmb3JcbiAqIGVhY2ggcHJvcGVydHkuIEl0ZXJhdGVlIGZ1bmN0aW9ucyBtYXkgZXhpdCBpdGVyYXRpb24gZWFybHkgYnkgZXhwbGljaXRseVxuICogcmV0dXJuaW5nIGBmYWxzZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbnZhciBiYXNlRm9yID0gY3JlYXRlQmFzZUZvcigpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGb3I7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUZvci5qc1xuICoqIG1vZHVsZSBpZCA9IDQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL3RvT2JqZWN0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGJhc2UgZnVuY3Rpb24gZm9yIGBfLmZvckluYCBvciBgXy5mb3JJblJpZ2h0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBiYXNlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVCYXNlRm9yKGZyb21SaWdodCkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0LCBpdGVyYXRlZSwga2V5c0Z1bmMpIHtcbiAgICB2YXIgaXRlcmFibGUgPSB0b09iamVjdChvYmplY3QpLFxuICAgICAgICBwcm9wcyA9IGtleXNGdW5jKG9iamVjdCksXG4gICAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aCxcbiAgICAgICAgaW5kZXggPSBmcm9tUmlnaHQgPyBsZW5ndGggOiAtMTtcblxuICAgIHdoaWxlICgoZnJvbVJpZ2h0ID8gaW5kZXgtLSA6ICsraW5kZXggPCBsZW5ndGgpKSB7XG4gICAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuICAgICAgaWYgKGl0ZXJhdGVlKGl0ZXJhYmxlW2tleV0sIGtleSwgaXRlcmFibGUpID09PSBmYWxzZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVCYXNlRm9yO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2NyZWF0ZUJhc2VGb3IuanNcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vbGFuZy9pc09iamVjdCcpO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYW4gb2JqZWN0IGlmIGl0J3Mgbm90IG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gdG9PYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbHVlKSA/IHZhbHVlIDogT2JqZWN0KHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b09iamVjdDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC90b09iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBhcnJheSBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lQXJyYXkoYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IG5ldyBhcnJheS5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIC8vIEFkZCBhcnJheSBwcm9wZXJ0aWVzIGFzc2lnbmVkIGJ5IGBSZWdFeHAjZXhlY2AuXG4gIGlmIChsZW5ndGggJiYgdHlwZW9mIGFycmF5WzBdID09ICdzdHJpbmcnICYmIGhhc093blByb3BlcnR5LmNhbGwoYXJyYXksICdpbmRleCcpKSB7XG4gICAgcmVzdWx0LmluZGV4ID0gYXJyYXkuaW5kZXg7XG4gICAgcmVzdWx0LmlucHV0ID0gYXJyYXkuaW5wdXQ7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0Q2xvbmVBcnJheTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9pbml0Q2xvbmVBcnJheS5qc1xuICoqIG1vZHVsZSBpZCA9IDQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYnVmZmVyQ2xvbmUgPSByZXF1aXJlKCcuL2J1ZmZlckNsb25lJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgIGZsYWdzIGZyb20gdGhlaXIgY29lcmNlZCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlRmxhZ3MgPSAvXFx3KiQvO1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZSBiYXNlZCBvbiBpdHMgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNsb25pbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBOdW1iZXJgLCBgUmVnRXhwYCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lQnlUYWcob2JqZWN0LCB0YWcsIGlzRGVlcCkge1xuICB2YXIgQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlIGFycmF5QnVmZmVyVGFnOlxuICAgICAgcmV0dXJuIGJ1ZmZlckNsb25lKG9iamVjdCk7XG5cbiAgICBjYXNlIGJvb2xUYWc6XG4gICAgY2FzZSBkYXRlVGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yKCtvYmplY3QpO1xuXG4gICAgY2FzZSBmbG9hdDMyVGFnOiBjYXNlIGZsb2F0NjRUYWc6XG4gICAgY2FzZSBpbnQ4VGFnOiBjYXNlIGludDE2VGFnOiBjYXNlIGludDMyVGFnOlxuICAgIGNhc2UgdWludDhUYWc6IGNhc2UgdWludDhDbGFtcGVkVGFnOiBjYXNlIHVpbnQxNlRhZzogY2FzZSB1aW50MzJUYWc6XG4gICAgICB2YXIgYnVmZmVyID0gb2JqZWN0LmJ1ZmZlcjtcbiAgICAgIHJldHVybiBuZXcgQ3Rvcihpc0RlZXAgPyBidWZmZXJDbG9uZShidWZmZXIpIDogYnVmZmVyLCBvYmplY3QuYnl0ZU9mZnNldCwgb2JqZWN0Lmxlbmd0aCk7XG5cbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICBjYXNlIHN0cmluZ1RhZzpcbiAgICAgIHJldHVybiBuZXcgQ3RvcihvYmplY3QpO1xuXG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgICB2YXIgcmVzdWx0ID0gbmV3IEN0b3Iob2JqZWN0LnNvdXJjZSwgcmVGbGFncy5leGVjKG9iamVjdCkpO1xuICAgICAgcmVzdWx0Lmxhc3RJbmRleCA9IG9iamVjdC5sYXN0SW5kZXg7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0Q2xvbmVCeVRhZztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9pbml0Q2xvbmVCeVRhZy5qc1xuICoqIG1vZHVsZSBpZCA9IDQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiogTmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIEFycmF5QnVmZmVyID0gZ2xvYmFsLkFycmF5QnVmZmVyLFxuICAgIFVpbnQ4QXJyYXkgPSBnbG9iYWwuVWludDhBcnJheTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgdGhlIGdpdmVuIGFycmF5IGJ1ZmZlci5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYnVmZmVyIFRoZSBhcnJheSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBhcnJheSBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGJ1ZmZlckNsb25lKGJ1ZmZlcikge1xuICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5QnVmZmVyKGJ1ZmZlci5ieXRlTGVuZ3RoKSxcbiAgICAgIHZpZXcgPSBuZXcgVWludDhBcnJheShyZXN1bHQpO1xuXG4gIHZpZXcuc2V0KG5ldyBVaW50OEFycmF5KGJ1ZmZlcikpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ1ZmZlckNsb25lO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2J1ZmZlckNsb25lLmpzXG4gKiogbW9kdWxlIGlkID0gNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gb2JqZWN0IGNsb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lT2JqZWN0KG9iamVjdCkge1xuICB2YXIgQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgaWYgKCEodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yIGluc3RhbmNlb2YgQ3RvcikpIHtcbiAgICBDdG9yID0gT2JqZWN0O1xuICB9XG4gIHJldHVybiBuZXcgQ3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0Q2xvbmVPYmplY3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvaW5pdENsb25lT2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpZGVudGl0eSA9IHJlcXVpcmUoJy4uL3V0aWxpdHkvaWRlbnRpdHknKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VDYWxsYmFja2Agd2hpY2ggb25seSBzdXBwb3J0cyBgdGhpc2AgYmluZGluZ1xuICogYW5kIHNwZWNpZnlpbmcgdGhlIG51bWJlciBvZiBhcmd1bWVudHMgdG8gcHJvdmlkZSB0byBgZnVuY2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGJpbmQuXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbYXJnQ291bnRdIFRoZSBudW1iZXIgb2YgYXJndW1lbnRzIHRvIHByb3ZpZGUgdG8gYGZ1bmNgLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBjYWxsYmFjay5cbiAqL1xuZnVuY3Rpb24gYmluZENhbGxiYWNrKGZ1bmMsIHRoaXNBcmcsIGFyZ0NvdW50KSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGlkZW50aXR5O1xuICB9XG4gIGlmICh0aGlzQXJnID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZnVuYztcbiAgfVxuICBzd2l0Y2ggKGFyZ0NvdW50KSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgdmFsdWUpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24odmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbik7XG4gICAgfTtcbiAgICBjYXNlIDQ6IHJldHVybiBmdW5jdGlvbihhY2N1bXVsYXRvciwgdmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFjY3VtdWxhdG9yLCB2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pO1xuICAgIH07XG4gICAgY2FzZSA1OiByZXR1cm4gZnVuY3Rpb24odmFsdWUsIG90aGVyLCBrZXksIG9iamVjdCwgc291cmNlKSB7XG4gICAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIHZhbHVlLCBvdGhlciwga2V5LCBvYmplY3QsIHNvdXJjZSk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpc0FyZywgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiaW5kQ2FsbGJhY2s7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYmluZENhbGxiYWNrLmpzXG4gKiogbW9kdWxlIGlkID0gNDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgZmlyc3QgYXJndW1lbnQgcHJvdmlkZWQgdG8gaXQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsaXR5XG4gKiBAcGFyYW0geyp9IHZhbHVlIEFueSB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIGB2YWx1ZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICd1c2VyJzogJ2ZyZWQnIH07XG4gKlxuICogXy5pZGVudGl0eShvYmplY3QpID09PSBvYmplY3Q7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpZGVudGl0eTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC91dGlsaXR5L2lkZW50aXR5LmpzXG4gKiogbW9kdWxlIGlkID0gNDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBiYXNlR2V0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYmFzZUdldCcpLFxuICAgIHRvUGF0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3RvUGF0aCcpO1xuXG4vKipcbiAqIEdldHMgdGhlIHByb3BlcnR5IHZhbHVlIGF0IGBwYXRoYCBvZiBgb2JqZWN0YC4gSWYgdGhlIHJlc29sdmVkIHZhbHVlIGlzXG4gKiBgdW5kZWZpbmVkYCB0aGUgYGRlZmF1bHRWYWx1ZWAgaXMgdXNlZCBpbiBpdHMgcGxhY2UuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IFtkZWZhdWx0VmFsdWVdIFRoZSB2YWx1ZSByZXR1cm5lZCBpZiB0aGUgcmVzb2x2ZWQgdmFsdWUgaXMgYHVuZGVmaW5lZGAuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogW3sgJ2InOiB7ICdjJzogMyB9IH1dIH07XG4gKlxuICogXy5nZXQob2JqZWN0LCAnYVswXS5iLmMnKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLmdldChvYmplY3QsIFsnYScsICcwJywgJ2InLCAnYyddKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLmdldChvYmplY3QsICdhLmIuYycsICdkZWZhdWx0Jyk7XG4gKiAvLyA9PiAnZGVmYXVsdCdcbiAqL1xuZnVuY3Rpb24gZ2V0KG9iamVjdCwgcGF0aCwgZGVmYXVsdFZhbHVlKSB7XG4gIHZhciByZXN1bHQgPSBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IGJhc2VHZXQob2JqZWN0LCB0b1BhdGgocGF0aCksIChwYXRoICsgJycpKTtcbiAgcmV0dXJuIHJlc3VsdCA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdFZhbHVlIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9vYmplY3QvZ2V0LmpzXG4gKiogbW9kdWxlIGlkID0gNTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vdG9PYmplY3QnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0cmluZyBwYXRoc1xuICogYW5kIGRlZmF1bHQgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0ge3N0cmluZ30gW3BhdGhLZXldIFRoZSBrZXkgcmVwcmVzZW50YXRpb24gb2YgcGF0aC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldChvYmplY3QsIHBhdGgsIHBhdGhLZXkpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChwYXRoS2V5ICE9PSB1bmRlZmluZWQgJiYgcGF0aEtleSBpbiB0b09iamVjdChvYmplY3QpKSB7XG4gICAgcGF0aCA9IFtwYXRoS2V5XTtcbiAgfVxuICB2YXIgaW5kZXggPSAwLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG5cbiAgd2hpbGUgKG9iamVjdCAhPSBudWxsICYmIGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgb2JqZWN0ID0gb2JqZWN0W3BhdGhbaW5kZXgrK11dO1xuICB9XG4gIHJldHVybiAoaW5kZXggJiYgaW5kZXggPT0gbGVuZ3RoKSA/IG9iamVjdCA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2Jhc2VHZXQuanNcbiAqKiBtb2R1bGUgaWQgPSA1MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGJhc2VUb1N0cmluZyA9IHJlcXVpcmUoJy4vYmFzZVRvU3RyaW5nJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcnJheScpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBwcm9wZXJ0eSBuYW1lcyB3aXRoaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVQcm9wTmFtZSA9IC9bXi5bXFxdXSt8XFxbKD86KC0/XFxkKyg/OlxcLlxcZCspPyl8KFtcIiddKSgoPzooPyFcXDIpW15cXG5cXFxcXXxcXFxcLikqPylcXDIpXFxdL2c7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGJhY2tzbGFzaGVzIGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlRXNjYXBlQ2hhciA9IC9cXFxcKFxcXFwpPy9nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gcHJvcGVydHkgcGF0aCBhcnJheSBpZiBpdCdzIG5vdCBvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIHRvUGF0aCh2YWx1ZSkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBiYXNlVG9TdHJpbmcodmFsdWUpLnJlcGxhY2UocmVQcm9wTmFtZSwgZnVuY3Rpb24obWF0Y2gsIG51bWJlciwgcXVvdGUsIHN0cmluZykge1xuICAgIHJlc3VsdC5wdXNoKHF1b3RlID8gc3RyaW5nLnJlcGxhY2UocmVFc2NhcGVDaGFyLCAnJDEnKSA6IChudW1iZXIgfHwgbWF0Y2gpKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9QYXRoO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL3RvUGF0aC5qc1xuICoqIG1vZHVsZSBpZCA9IDUyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgaWYgaXQncyBub3Qgb25lLiBBbiBlbXB0eSBzdHJpbmcgaXMgcmV0dXJuZWRcbiAqIGZvciBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6ICh2YWx1ZSArICcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVG9TdHJpbmc7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZVRvU3RyaW5nLmpzXG4gKiogbW9kdWxlIGlkID0gNTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc0luZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNJbmRleCcpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNLZXknKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2xhbmcvaXNPYmplY3QnKSxcbiAgICB0b1BhdGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbC90b1BhdGgnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBwcm9wZXJ0eSB2YWx1ZSBvZiBgcGF0aGAgb24gYG9iamVjdGAuIElmIGEgcG9ydGlvbiBvZiBgcGF0aGBcbiAqIGRvZXMgbm90IGV4aXN0IGl0J3MgY3JlYXRlZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGF1Z21lbnQuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiBbeyAnYic6IHsgJ2MnOiAzIH0gfV0gfTtcbiAqXG4gKiBfLnNldChvYmplY3QsICdhWzBdLmIuYycsIDQpO1xuICogY29uc29sZS5sb2cob2JqZWN0LmFbMF0uYi5jKTtcbiAqIC8vID0+IDRcbiAqXG4gKiBfLnNldChvYmplY3QsICd4WzBdLnkueicsIDUpO1xuICogY29uc29sZS5sb2cob2JqZWN0LnhbMF0ueS56KTtcbiAqIC8vID0+IDVcbiAqL1xuZnVuY3Rpb24gc2V0KG9iamVjdCwgcGF0aCwgdmFsdWUpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuICB2YXIgcGF0aEtleSA9IChwYXRoICsgJycpO1xuICBwYXRoID0gKG9iamVjdFtwYXRoS2V5XSAhPSBudWxsIHx8IGlzS2V5KHBhdGgsIG9iamVjdCkpID8gW3BhdGhLZXldIDogdG9QYXRoKHBhdGgpO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGgsXG4gICAgICBsYXN0SW5kZXggPSBsZW5ndGggLSAxLFxuICAgICAgbmVzdGVkID0gb2JqZWN0O1xuXG4gIHdoaWxlIChuZXN0ZWQgIT0gbnVsbCAmJiArK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHBhdGhbaW5kZXhdO1xuICAgIGlmIChpc09iamVjdChuZXN0ZWQpKSB7XG4gICAgICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgICAgIG5lc3RlZFtrZXldID0gdmFsdWU7XG4gICAgICB9IGVsc2UgaWYgKG5lc3RlZFtrZXldID09IG51bGwpIHtcbiAgICAgICAgbmVzdGVkW2tleV0gPSBpc0luZGV4KHBhdGhbaW5kZXggKyAxXSkgPyBbXSA6IHt9O1xuICAgICAgfVxuICAgIH1cbiAgICBuZXN0ZWQgPSBuZXN0ZWRba2V5XTtcbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9vYmplY3Qvc2V0LmpzXG4gKiogbW9kdWxlIGlkID0gNTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FycmF5JyksXG4gICAgdG9PYmplY3QgPSByZXF1aXJlKCcuL3RvT2JqZWN0Jyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUlzRGVlcFByb3AgPSAvXFwufFxcWyg/OlteW1xcXV0qfChbXCInXSkoPzooPyFcXDEpW15cXG5cXFxcXXxcXFxcLikqP1xcMSlcXF0vLFxuICAgIHJlSXNQbGFpblByb3AgPSAvXlxcdyokLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUgYW5kIG5vdCBhIHByb3BlcnR5IHBhdGguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkga2V5cyBvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleSh2YWx1ZSwgb2JqZWN0KSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBpZiAoKHR5cGUgPT0gJ3N0cmluZycgJiYgcmVJc1BsYWluUHJvcC50ZXN0KHZhbHVlKSkgfHwgdHlwZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gIXJlSXNEZWVwUHJvcC50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIHJlc3VsdCB8fCAob2JqZWN0ICE9IG51bGwgJiYgdmFsdWUgaW4gdG9PYmplY3Qob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNLZXk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvaXNLZXkuanNcbiAqKiBtb2R1bGUgaWQgPSA1NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBAY29weXJpZ2h0IDIwMTUsIFByb21ldGhldXMgUmVzZWFyY2gsIExMQ1xuICovXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBfY3JlYXRlVmFsaWRhdG9yIGZyb20gJy4vX3NjaGVtYSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWYWxpZGF0b3Ioc2NoZW1hLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSB7XG4gICAgLi4ub3B0aW9ucyxcbiAgICBncmVlZHk6IHRydWUsXG4gICAgdW5kZWZpbmVkQXNPYmplY3Q6IHRydWUsXG4gICAgbnVsbEFzT2JqZWN0OiB0cnVlLFxuICAgIHVuZGVmaW5lZEFzQXJyYXk6IHRydWUsXG4gICAgbnVsbEFzVW5kZWZpbmVkOiB0cnVlLFxuICAgIG51bGxBc0FycmF5OiB0cnVlLFxuICAgIG51bGxBc0JvdHRvbVR5cGU6IHRydWVcbiAgfTtcbiAgcmV0dXJuIF9jcmVhdGVWYWxpZGF0b3Ioc2NoZW1hLCBvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gX2dlbmVyYXRlU2NoZW1hQnVpbGRlcih0eXBlKSB7XG4gIHJldHVybiBmdW5jdGlvbiBidWlsZGVyKHBhcmFtcykge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlLFxuICAgICAgaXNSZXF1aXJlZDogcGFyYW1zID8gISFwYXJhbXMuaXNSZXF1aXJlZCA6IGZhbHNlLFxuICAgICAgLi4ucGFyYW1zXG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdChwcm9wZXJ0aWVzLCBwYXJhbXMpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICBwcm9wZXJ0aWVzLFxuICAgIHJlcXVpcmVkOiBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKS5maWx0ZXIoayA9PiBwcm9wZXJ0aWVzW2tdLmlzUmVxdWlyZWQpLFxuICAgIGlzUmVxdWlyZWQ6IHBhcmFtcyA/ICEhcGFyYW1zLmlzUmVxdWlyZWQgOiBmYWxzZSxcbiAgICAuLi5wYXJhbXNcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5KGl0ZW1zLCBwYXJhbXMpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnYXJyYXknLFxuICAgIGl0ZW1zLFxuICAgIGlzUmVxdWlyZWQ6IHBhcmFtcyA/ICEhcGFyYW1zLmlzUmVxdWlyZWQgOiBmYWxzZSxcbiAgICAuLi5wYXJhbXNcbiAgfTtcbn1cblxuZXhwb3J0IGxldCBzdHJpbmcgPSBfZ2VuZXJhdGVTY2hlbWFCdWlsZGVyKCdzdHJpbmcnKTtcbmV4cG9ydCBsZXQgbnVtYmVyID0gX2dlbmVyYXRlU2NoZW1hQnVpbGRlcignbnVtYmVyJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3Qoc2NoZW1hLCBrZXlQYXRoKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBrZXlQYXRoLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKCFzY2hlbWEpIHtcbiAgICAgIHJldHVybiBzY2hlbWE7XG4gICAgfVxuICAgIHNjaGVtYSA9IF9zZWxlY3Qoc2NoZW1hLCBrZXlQYXRoW2ldKTtcbiAgfVxuICByZXR1cm4gc2NoZW1hO1xufVxuXG5mdW5jdGlvbiBfc2VsZWN0KHNjaGVtYSwga2V5KSB7XG4gIGlmIChzY2hlbWEpIHtcbiAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBsZXQgc3ViU2NoZW1hID0gc2NoZW1hLnByb3BlcnRpZXMgP1xuICAgICAgICBzY2hlbWEucHJvcGVydGllc1trZXldIDpcbiAgICAgICAgdW5kZWZpbmVkO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2NoZW1hLnJlcXVpcmVkKSkge1xuICAgICAgICAvLyB0cmFuc2ZlciByZXF1aXJlZCBpbmZvIG9udG8gc2NoZW1hXG4gICAgICAgIHN1YlNjaGVtYSA9IHtcbiAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICAuLi5zdWJTY2hlbWEsXG4gICAgICAgICAgaXNSZXF1aXJlZDogc2NoZW1hLnJlcXVpcmVkLmluZGV4T2Yoa2V5KSAhPT0gLTFcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdWJTY2hlbWE7XG4gICAgfSBlbHNlIGlmIChzY2hlbWEudHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgaWYgKHNjaGVtYS5pdGVtcykge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzY2hlbWEuaXRlbXMpKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWRlcHRoXG4gICAgICAgICAgcmV0dXJuIHNjaGVtYS5pdGVtc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBzY2hlbWEuaXRlbXM7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHtKU09OLnN0cmluZ2lmeShzY2hlbWEpfSAke2tleX1gKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL1NjaGVtYS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGdlbm9iaiAgICAgID0gcmVxdWlyZSgnZ2VuZXJhdGUtb2JqZWN0LXByb3BlcnR5JylcbnZhciBnZW5mdW4gICAgICA9IHJlcXVpcmUoJ2dlbmVyYXRlLWZ1bmN0aW9uJylcbnZhciBqc29ucG9pbnRlciA9IHJlcXVpcmUoJ2pzb25wb2ludGVyJylcbnZhciB4dGVuZCAgICAgICA9IHJlcXVpcmUoJ3h0ZW5kJylcbnZhciBmb3JtYXRzICAgICA9IHJlcXVpcmUoJy4vZm9ybWF0cycpXG5cbnZhciBnZXQgPSBmdW5jdGlvbihvYmosIGFkZGl0aW9uYWxTY2hlbWFzLCBwdHIpIHtcbiAgaWYgKC9eaHR0cHM/OlxcL1xcLy8udGVzdChwdHIpKSByZXR1cm4gbnVsbFxuXG4gIHZhciB2aXNpdCA9IGZ1bmN0aW9uKHN1Yikge1xuICAgIGlmIChzdWIgJiYgc3ViLmlkID09PSBwdHIpIHJldHVybiBzdWJcbiAgICBpZiAodHlwZW9mIHN1YiAhPT0gJ29iamVjdCcgfHwgIXN1YikgcmV0dXJuIG51bGxcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoc3ViKS5yZWR1Y2UoZnVuY3Rpb24ocmVzLCBrKSB7XG4gICAgICByZXR1cm4gcmVzIHx8IHZpc2l0KHN1YltrXSlcbiAgICB9LCBudWxsKVxuICB9XG5cbiAgdmFyIHJlcyA9IHZpc2l0KG9iailcbiAgaWYgKHJlcykgcmV0dXJuIHJlc1xuXG4gIHB0ciA9IHB0ci5yZXBsYWNlKC9eIy8sICcnKVxuICBwdHIgPSBwdHIucmVwbGFjZSgvXFwvJC8sICcnKVxuXG4gIHRyeSB7XG4gICAgcmV0dXJuIGpzb25wb2ludGVyLmdldChvYmosIGRlY29kZVVSSShwdHIpKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICB2YXIgb3RoZXIgPSBhZGRpdGlvbmFsU2NoZW1hc1twdHJdIHx8IGFkZGl0aW9uYWxTY2hlbWFzW3B0ci5yZXBsYWNlKC9eIy8sICcnKV1cbiAgICByZXR1cm4gb3RoZXIgfHwgbnVsbFxuICB9XG59XG5cbnZhciBzcGxpdE5hbWUgPSAvW1xcW1xcXV0vO1xuXG52YXIgZm9ybWF0TmFtZSA9IGZ1bmN0aW9uKGZpZWxkKSB7XG4gIGZpZWxkID0gZmllbGQucmVwbGFjZSgvXFxbL2csICdbXFx1MDAwMScpLnNwbGl0KHNwbGl0TmFtZSk7XG4gIHZhciBmb3JtYXR0ZWQgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWVsZC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwYXJ0ID0gZmllbGRbaV07XG4gICAgaWYgKHBhcnRbMF0gPT09ICdcXHUwMDAxJykge1xuICAgICAgZm9ybWF0dGVkLnB1c2goSlNPTi5zdHJpbmdpZnkoJy4nKSk7XG4gICAgICBmb3JtYXR0ZWQucHVzaChwYXJ0LnNsaWNlKDEpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9ybWF0dGVkLnB1c2goSlNPTi5zdHJpbmdpZnkocGFydCkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZm9ybWF0dGVkLmpvaW4oJysnKTtcbn1cblxudmFyIHR5cGVzID0ge31cblxudHlwZXMuYW55ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAndHJ1ZSdcbn1cblxudHlwZXMubnVsbCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUrJyA9PT0gbnVsbCdcbn1cblxudHlwZXMuYm9vbGVhbiA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgcmV0dXJuICd0eXBlb2YgJytuYW1lKycgPT09IFwiYm9vbGVhblwiJ1xufVxuXG50eXBlcy5hcnJheSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgcmV0dXJuICdBcnJheS5pc0FycmF5KCcrbmFtZSsnKSdcbn1cblxudHlwZXMub2JqZWN0ID0gZnVuY3Rpb24obmFtZSkge1xuICByZXR1cm4gJ3R5cGVvZiAnK25hbWUrJyA9PT0gXCJvYmplY3RcIiAmJiAnK25hbWUrJyAmJiAhQXJyYXkuaXNBcnJheSgnK25hbWUrJyknXG59XG5cbnR5cGVzLm51bWJlciA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgcmV0dXJuICd0eXBlb2YgJytuYW1lKycgPT09IFwibnVtYmVyXCInXG59XG5cbnR5cGVzLmludGVnZXIgPSBmdW5jdGlvbihuYW1lKSB7XG4gIHJldHVybiAndHlwZW9mICcrbmFtZSsnID09PSBcIm51bWJlclwiICYmIChNYXRoLmZsb29yKCcrbmFtZSsnKSA9PT0gJytuYW1lKycgfHwgJytuYW1lKycgPiA5MDA3MTk5MjU0NzQwOTkyIHx8ICcrbmFtZSsnIDwgLTkwMDcxOTkyNTQ3NDA5OTIpJ1xufVxuXG50eXBlcy5zdHJpbmcgPSBmdW5jdGlvbihuYW1lKSB7XG4gIHJldHVybiAndHlwZW9mICcrbmFtZSsnID09PSBcInN0cmluZ1wiJ1xufVxuXG52YXIgdW5pcXVlID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgdmFyIGxpc3QgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgbGlzdC5wdXNoKHR5cGVvZiBhcnJheVtpXSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShhcnJheVtpXSkgOiBhcnJheVtpXSlcbiAgfVxuICBmb3IgKHZhciBpID0gMTsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobGlzdC5pbmRleE9mKGxpc3RbaV0pICE9PSBpKSByZXR1cm4gZmFsc2VcbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG52YXIgdG9UeXBlID0gZnVuY3Rpb24obm9kZSkge1xuICByZXR1cm4gbm9kZS50eXBlXG59XG5cbnZhciBjb21waWxlID0gZnVuY3Rpb24oc2NoZW1hLCBjYWNoZSwgcm9vdCwgcmVwb3J0ZXIsIG9wdHMpIHtcbiAgdmFyIGZtdHMgPSBvcHRzID8geHRlbmQoZm9ybWF0cywgb3B0cy5mb3JtYXRzKSA6IGZvcm1hdHNcbiAgdmFyIHNjb3BlID0ge3VuaXF1ZTp1bmlxdWUsIGZvcm1hdHM6Zm10c31cbiAgdmFyIHZlcmJvc2UgPSBvcHRzID8gISFvcHRzLnZlcmJvc2UgOiBmYWxzZTtcbiAgdmFyIHVuZGVmaW5lZEFzT2JqZWN0ID0gb3B0cyA/ICEhb3B0cy51bmRlZmluZWRBc09iamVjdCA6IGZhbHNlO1xuICB2YXIgbnVsbEFzT2JqZWN0ID0gb3B0cyA/ICEhb3B0cy5udWxsQXNPYmplY3QgOiBmYWxzZTtcbiAgdmFyIG51bGxBc1VuZGVmaW5lZCA9IG9wdHMgPyAhIW9wdHMubnVsbEFzVW5kZWZpbmVkIDogZmFsc2U7XG4gIHZhciB1bmRlZmluZWRBc0FycmF5ID0gb3B0cyA/ICEhb3B0cy51bmRlZmluZWRBc0FycmF5IDogZmFsc2U7XG4gIHZhciBudWxsQXNBcnJheSA9IG9wdHMgPyAhIW9wdHMubnVsbEFzQXJyYXkgOiBmYWxzZTtcbiAgdmFyIGdyZWVkeSA9IG9wdHMgJiYgb3B0cy5ncmVlZHkgIT09IHVuZGVmaW5lZCA/XG4gICAgb3B0cy5ncmVlZHkgOiBmYWxzZTtcblxuICB2YXIgc3ltcyA9IHt9XG4gIHZhciBnZW5zeW0gPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIG5hbWUrKHN5bXNbbmFtZV0gPSAoc3ltc1tuYW1lXSB8fCAwKSsxKVxuICB9XG5cbiAgdmFyIHJldmVyc2VQYXR0ZXJucyA9IHt9XG4gIHZhciBwYXR0ZXJucyA9IGZ1bmN0aW9uKHApIHtcbiAgICBpZiAocmV2ZXJzZVBhdHRlcm5zW3BdKSByZXR1cm4gcmV2ZXJzZVBhdHRlcm5zW3BdXG4gICAgdmFyIG4gPSBnZW5zeW0oJ3BhdHRlcm4nKVxuICAgIHNjb3BlW25dID0gbmV3IFJlZ0V4cChwKVxuICAgIHJldmVyc2VQYXR0ZXJuc1twXSA9IG5cbiAgICByZXR1cm4gblxuICB9XG5cbiAgdmFyIHZhcnMgPSBbJ2knLCdqJywnaycsJ2wnLCdtJywnbicsJ28nLCdwJywncScsJ3InLCdzJywndCcsJ3UnLCd2JywneCcsJ3knLCd6J11cbiAgdmFyIGdlbmxvb3AgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdiA9IHZhcnMuc2hpZnQoKVxuICAgIHZhcnMucHVzaCh2K3ZbMF0pXG4gICAgcmV0dXJuIHZcbiAgfVxuXG4gIHZhciB2aXNpdCA9IGZ1bmN0aW9uKG5hbWUsIF9kYXRhU3ltLCBub2RlLCByZXBvcnRlciwgZmlsdGVyKSB7XG4gICAgdmFyIHByb3BlcnRpZXMgPSBub2RlLnByb3BlcnRpZXNcbiAgICB2YXIgdHlwZSA9IG5vZGUudHlwZVxuICAgIHZhciB0dXBsZSA9IGZhbHNlXG5cbiAgICB2YXIgZGF0YVN5bSA9IGdlbnN5bSgnZGF0YScpO1xuICAgIHZhbGlkYXRlKCd2YXIgJXMgPSAlcycsIGRhdGFTeW0sIF9kYXRhU3ltKTtcblxuICAgIHZhciBub2RlU3ltID0gZ2Vuc3ltKCdub2RlJylcbiAgICBzY29wZVtub2RlU3ltXSA9IG5vZGU7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShub2RlLml0ZW1zKSkgeyAvLyB0dXBsZSB0eXBlXG4gICAgICBwcm9wZXJ0aWVzID0ge31cbiAgICAgIG5vZGUuaXRlbXMuZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpKSB7XG4gICAgICAgIHByb3BlcnRpZXNbaV0gPSBpdGVtXG4gICAgICB9KVxuICAgICAgdHlwZSA9ICdhcnJheSdcbiAgICAgIHR1cGxlID0gdHJ1ZVxuICAgIH1cblxuICAgIHZhciBpbmRlbnQgPSAwXG4gICAgdmFyIGVycm9yID0gZnVuY3Rpb24obXNnLCBwcm9wLCB2YWx1ZSwgc2NoZW1hKSB7XG4gICAgICB2YWxpZGF0ZSgnZXJyb3JzKysnKVxuICAgICAgaWYgKHJlcG9ydGVyID09PSB0cnVlKSB7XG4gICAgICAgIHZhbGlkYXRlKCdpZiAodmFsaWRhdGUuZXJyb3JzID09PSBudWxsKSB2YWxpZGF0ZS5lcnJvcnMgPSBbXScpXG4gICAgICAgIGlmICh2ZXJib3NlKSB7XG4gICAgICAgICAgdmFsaWRhdGUoJ3ZhbGlkYXRlLmVycm9ycy5wdXNoKHtmaWVsZDolcyxtZXNzYWdlOiVzLHZhbHVlOiVzLHNjaGVtYTolc30pJywgZm9ybWF0TmFtZShwcm9wIHx8IG5hbWUpLCBKU09OLnN0cmluZ2lmeShtc2cpLCB2YWx1ZSB8fCBuYW1lLCBzY2hlbWEgfHwgbm9kZVN5bSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZSgndmFsaWRhdGUuZXJyb3JzLnB1c2goe2ZpZWxkOiVzLG1lc3NhZ2U6JXMsc2NoZW1hOiVzfSknLCBmb3JtYXROYW1lKHByb3AgfHwgbmFtZSksIEpTT04uc3RyaW5naWZ5KG1zZyksIHNjaGVtYSB8fCBub2RlU3ltKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBlcnJvckZyb21TeW0gPSBmdW5jdGlvbihzeW0sIHNjaGVtYSkge1xuICAgICAgdmFsaWRhdGUoJ2Vycm9ycysrJylcbiAgICAgIGlmIChyZXBvcnRlciA9PT0gdHJ1ZSkge1xuICAgICAgICB2YWxpZGF0ZSgnaWYgKHZhbGlkYXRlLmVycm9ycyA9PT0gbnVsbCkgdmFsaWRhdGUuZXJyb3JzID0gW10nKVxuICAgICAgICBpZiAodmVyYm9zZSkge1xuICAgICAgICAgIHZhbGlkYXRlKCd2YWxpZGF0ZS5lcnJvcnMucHVzaCh7ZmllbGQ6JXMsbWVzc2FnZTolcyx2YWx1ZTolcyxzY2hlbWE6JXN9KScsIGZvcm1hdE5hbWUobmFtZSksIHN5bSwgbmFtZSwgc2NoZW1hIHx8IG5vZGVTeW0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGUoJ3ZhbGlkYXRlLmVycm9ycy5wdXNoKHtmaWVsZDolcyxtZXNzYWdlOiVzLHNjaGVtYTolc30pJywgZm9ybWF0TmFtZShuYW1lKSwgc3ltLCBzY2hlbWEgfHwgbm9kZVN5bSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChub2RlLnJlcXVpcmVkID09PSB0cnVlKSB7XG4gICAgICBpbmRlbnQrK1xuICAgICAgaWYgKG51bGxBc1VuZGVmaW5lZCkge1xuICAgICAgICB2YWxpZGF0ZSgnaWYgKCVzID09IHVuZGVmaW5lZCkgeycsIGRhdGFTeW0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWxpZGF0ZSgnaWYgKCVzID09PSB1bmRlZmluZWQpIHsnLCBkYXRhU3ltKVxuICAgICAgfVxuICAgICAgZXJyb3IoJ2lzIHJlcXVpcmVkJylcbiAgICAgIHZhbGlkYXRlKCd9IGVsc2UgeycpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChub2RlLnR5cGUgPT09ICdvYmplY3QnICYmICh1bmRlZmluZWRBc09iamVjdCB8fCBudWxsQXNPYmplY3QpKSB7XG4gICAgICAgIGlmICh1bmRlZmluZWRBc09iamVjdCAmJiBudWxsQXNPYmplY3QpIHtcbiAgICAgICAgICB2YWxpZGF0ZSgnaWYgKCVzID09IG51bGwpICVzID0ge30nLCBkYXRhU3ltLCBkYXRhU3ltKTtcbiAgICAgICAgfSBlbHNlIGlmICh1bmRlZmluZWRBc09iamVjdCkge1xuICAgICAgICAgIHZhbGlkYXRlKCdpZiAoJXMgPT09IHVuZGVmaW5lZCkgJXMgPSB7fScsIGRhdGFTeW0sIGRhdGFTeW0pO1xuICAgICAgICB9IGVsc2UgaWYgKG51bGxBc09iamVjdCkge1xuICAgICAgICAgIHZhbGlkYXRlKCdpZiAoJXMgPT09IG51bGwpICVzID0ge30nLCBkYXRhU3ltLCBkYXRhU3ltKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChub2RlLnR5cGUgPT09ICdhcnJheScgJiYgKHVuZGVmaW5lZEFzQXJyYXkgfHwgbnVsbEFzQXJyYXkpKSB7XG4gICAgICAgIGlmICh1bmRlZmluZWRBc0FycmF5ICYmIG51bGxBc0FycmF5KSB7XG4gICAgICAgICAgdmFsaWRhdGUoJ2lmICglcyA9PSBudWxsKSAlcyA9IFtdJywgZGF0YVN5bSwgZGF0YVN5bSk7XG4gICAgICAgIH0gZWxzZSBpZiAodW5kZWZpbmVkQXNBcnJheSkge1xuICAgICAgICAgIHZhbGlkYXRlKCdpZiAoJXMgPT09IHVuZGVmaW5lZCkgJXMgPSBbXScsIGRhdGFTeW0sIGRhdGFTeW0pO1xuICAgICAgICB9IGVsc2UgaWYgKG51bGxBc0FycmF5KSB7XG4gICAgICAgICAgdmFsaWRhdGUoJ2lmICglcyA9PT0gbnVsbCkgJXMgPSBbXScsIGRhdGFTeW0sIGRhdGFTeW0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRlbnQrK1xuICAgICAgICBpZiAobnVsbEFzVW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFsaWRhdGUoJ2lmICglcyAhPSB1bmRlZmluZWQpIHsnLCBkYXRhU3ltKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlKCdpZiAoJXMgIT09IHVuZGVmaW5lZCkgeycsIGRhdGFTeW0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgdmFsaWQgPSBbXS5jb25jYXQodHlwZSlcbiAgICAgIC5tYXAoZnVuY3Rpb24odCkge1xuICAgICAgICByZXR1cm4gdHlwZXNbdCB8fCAnYW55J10oZGF0YVN5bSlcbiAgICAgIH0pXG4gICAgICAuam9pbignIHx8ICcpIHx8ICd0cnVlJ1xuXG4gICAgaWYgKHZhbGlkICE9PSAndHJ1ZScpIHtcbiAgICAgIGluZGVudCsrXG4gICAgICB2YWxpZGF0ZSgnaWYgKCEoJXMpKSB7JywgdmFsaWQpXG4gICAgICBlcnJvcignaXMgdGhlIHdyb25nIHR5cGUnKVxuICAgICAgdmFsaWRhdGUoJ30gZWxzZSB7JylcbiAgICB9XG5cbiAgICBpZiAodHVwbGUpIHtcbiAgICAgIGlmIChub2RlLmFkZGl0aW9uYWxJdGVtcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgdmFsaWRhdGUoJ2lmICglcy5sZW5ndGggPiAlZCkgeycsIGRhdGFTeW0sIG5vZGUuaXRlbXMubGVuZ3RoKVxuICAgICAgICBlcnJvcignaGFzIGFkZGl0aW9uYWwgaXRlbXMnKVxuICAgICAgICB2YWxpZGF0ZSgnfScpXG4gICAgICB9IGVsc2UgaWYgKG5vZGUuYWRkaXRpb25hbEl0ZW1zKSB7XG4gICAgICAgIHZhciBpID0gZ2VubG9vcCgpXG4gICAgICAgIHZhbGlkYXRlKCdmb3IgKHZhciAlcyA9ICVkOyAlcyA8ICVzLmxlbmd0aDsgJXMrKykgeycsIGksIG5vZGUuaXRlbXMubGVuZ3RoLCBpLCBkYXRhU3ltLCBpKVxuICAgICAgICB2aXNpdChuYW1lKydbJytpKyddJywgZGF0YVN5bSsnWycraSsnXScsIG5vZGUuYWRkaXRpb25hbEl0ZW1zLCByZXBvcnRlciwgZmlsdGVyKVxuICAgICAgICB2YWxpZGF0ZSgnfScpXG4gICAgICB9ICAgXG4gICAgfVxuXG4gICAgaWYgKG5vZGUuZm9ybWF0ICYmIChmbXRzW25vZGUuZm9ybWF0XSB8fCB0eXBlb2Ygbm9kZS5mb3JtYXQgPT09ICdmdW5jdGlvbicpKSB7XG4gICAgICBpZiAodHlwZSAhPT0gJ3N0cmluZycgJiYgZm9ybWF0c1tub2RlLmZvcm1hdF0pIHZhbGlkYXRlKCdpZiAoJXMpIHsnLCB0eXBlcy5zdHJpbmcoZGF0YVN5bSkpXG4gICAgICB2YXIgbiA9IGdlbnN5bSgnZm9ybWF0JylcbiAgICAgIGlmICh0eXBlb2Ygbm9kZS5mb3JtYXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgc2NvcGVbbl0gPSBub2RlLmZvcm1hdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjb3BlW25dID0gZm10c1tub2RlLmZvcm1hdF1cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBzY29wZVtuXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgciA9IGdlbnN5bSgncmVzdWx0JylcbiAgICAgICAgdmFsaWRhdGUoJ3ZhciAlcyA9ICVzKCVzLCAlcyknLCByLCBuLCBkYXRhU3ltLCBub2RlU3ltKVxuICAgICAgICB2YWxpZGF0ZSgnaWYgKCElcykgeycsIHIpXG4gICAgICAgIGVycm9yKCdtdXN0IGJlICcrbm9kZS5mb3JtYXQrJyBmb3JtYXQnKVxuICAgICAgICB2YWxpZGF0ZSgnfSBlbHNlIGlmICh0eXBlb2YgJXMgPT09IFwic3RyaW5nXCIpIHsnLCByKVxuICAgICAgICBlcnJvckZyb21TeW0ocilcbiAgICAgICAgdmFsaWRhdGUoJ30nKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsaWRhdGUoJ2lmICghJXMudGVzdCglcykpIHsnLCBuLCBkYXRhU3ltKVxuICAgICAgICBlcnJvcignbXVzdCBiZSAnK25vZGUuZm9ybWF0KycgZm9ybWF0JylcbiAgICAgICAgdmFsaWRhdGUoJ30nKVxuICAgICAgfVxuICAgICAgaWYgKHR5cGUgIT09ICdzdHJpbmcnICYmIGZvcm1hdHNbbm9kZS5mb3JtYXRdKSB2YWxpZGF0ZSgnfScpXG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobm9kZS5yZXF1aXJlZCkpIHtcbiAgICAgIHZhciBpc1VuZGVmaW5lZCA9IGZ1bmN0aW9uKHJlcSkge1xuICAgICAgICByZXR1cm4gZ2Vub2JqKGRhdGFTeW0sIHJlcSkgKyAnID09PSB1bmRlZmluZWQnXG4gICAgICB9XG5cbiAgICAgIHZhciBjaGVja1JlcXVpcmVkID0gZnVuY3Rpb24gKHJlcSkge1xuICAgICAgICBpZiAobnVsbEFzVW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFsaWRhdGUoJ2lmICglcyA9PSB1bmRlZmluZWQpIHsnLCBnZW5vYmooZGF0YVN5bSwgcmVxKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZSgnaWYgKCVzID09PSB1bmRlZmluZWQpIHsnLCBnZW5vYmooZGF0YVN5bSwgcmVxKSlcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVxU2NoZW1hID0gZ2Vub2JqKG5vZGVTeW0sICdwcm9wZXJ0aWVzJykgKyAnID8gJyArIGdlbm9iaihnZW5vYmoobm9kZVN5bSwgJ3Byb3BlcnRpZXMnKSwgcmVxKSArICcgOiB1bmRlZmluZWQnO1xuICAgICAgICBlcnJvcignaXMgcmVxdWlyZWQnLCBnZW5vYmoobmFtZSwgcmVxKSwgdW5kZWZpbmVkLCByZXFTY2hlbWEpO1xuICAgICAgICB2YWxpZGF0ZSgnbWlzc2luZysrJylcbiAgICAgICAgdmFsaWRhdGUoJ30nKVxuICAgICAgfVxuICAgICAgdmFsaWRhdGUoJ2lmICgoJXMpKSB7JywgdHlwZSAhPT0gJ29iamVjdCcgPyB0eXBlcy5vYmplY3QoZGF0YVN5bSkgOiAndHJ1ZScpXG4gICAgICB2YWxpZGF0ZSgndmFyIG1pc3NpbmcgPSAwJylcbiAgICAgIG5vZGUucmVxdWlyZWQubWFwKGNoZWNrUmVxdWlyZWQpXG4gICAgICB2YWxpZGF0ZSgnfScpO1xuICAgICAgaWYgKCFncmVlZHkpIHtcbiAgICAgICAgdmFsaWRhdGUoJ2lmIChtaXNzaW5nID09PSAwKSB7JylcbiAgICAgICAgaW5kZW50KytcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobm9kZS51bmlxdWVJdGVtcykge1xuICAgICAgaWYgKHR5cGUgIT09ICdhcnJheScpIHZhbGlkYXRlKCdpZiAoJXMpIHsnLCB0eXBlcy5hcnJheShkYXRhU3ltKSlcbiAgICAgIHZhbGlkYXRlKCdpZiAoISh1bmlxdWUoJXMpKSkgeycsIGRhdGFTeW0pXG4gICAgICBlcnJvcignbXVzdCBiZSB1bmlxdWUnKVxuICAgICAgdmFsaWRhdGUoJ30nKVxuICAgICAgaWYgKHR5cGUgIT09ICdhcnJheScpIHZhbGlkYXRlKCd9JylcbiAgICB9XG5cbiAgICBpZiAobm9kZS5lbnVtKSB7XG4gICAgICB2YXIgY29tcGxleCA9IG5vZGUuZW51bS5zb21lKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBlID09PSAnb2JqZWN0J1xuICAgICAgfSlcblxuICAgICAgdmFyIGNvbXBhcmUgPSBjb21wbGV4ID9cbiAgICAgICAgZnVuY3Rpb24oZSkge1xuICAgICAgICAgIHJldHVybiAnSlNPTi5zdHJpbmdpZnkoJytkYXRhU3ltKycpJysnICE9PSBKU09OLnN0cmluZ2lmeSgnK0pTT04uc3RyaW5naWZ5KGUpKycpJ1xuICAgICAgICB9IDpcbiAgICAgICAgZnVuY3Rpb24oZSkge1xuICAgICAgICAgIHJldHVybiBkYXRhU3ltKycgIT09ICcrSlNPTi5zdHJpbmdpZnkoZSlcbiAgICAgICAgfVxuXG4gICAgICB2YWxpZGF0ZSgnaWYgKCVzKSB7Jywgbm9kZS5lbnVtLm1hcChjb21wYXJlKS5qb2luKCcgJiYgJykgfHwgJ2ZhbHNlJylcbiAgICAgIGVycm9yKCdtdXN0IGJlIGFuIGVudW0gdmFsdWUnKVxuICAgICAgdmFsaWRhdGUoJ30nKVxuICAgIH1cblxuICAgIGlmIChub2RlLmRlcGVuZGVuY2llcykge1xuICAgICAgaWYgKHR5cGUgIT09ICdvYmplY3QnKSB2YWxpZGF0ZSgnaWYgKCVzKSB7JywgdHlwZXMub2JqZWN0KGRhdGFTeW0pKVxuXG4gICAgICBPYmplY3Qua2V5cyhub2RlLmRlcGVuZGVuY2llcykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgdmFyIGRlcHMgPSBub2RlLmRlcGVuZGVuY2llc1trZXldXG4gICAgICAgIGlmICh0eXBlb2YgZGVwcyA9PT0gJ3N0cmluZycpIGRlcHMgPSBbZGVwc11cblxuICAgICAgICB2YXIgZXhpc3RzID0gZnVuY3Rpb24oaykge1xuICAgICAgICAgIHJldHVybiBnZW5vYmooZGF0YVN5bSwgaykgKyAnICE9PSB1bmRlZmluZWQnXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkZXBzKSkge1xuICAgICAgICAgIHZhbGlkYXRlKCdpZiAoJXMgIT09IHVuZGVmaW5lZCAmJiAhKCVzKSkgeycsIGdlbm9iaihkYXRhU3ltLCBrZXkpLCBkZXBzLm1hcChleGlzdHMpLmpvaW4oJyAmJiAnKSB8fCAndHJ1ZScpXG4gICAgICAgICAgZXJyb3IoJ2RlcGVuZGVuY2llcyBub3Qgc2V0JylcbiAgICAgICAgICB2YWxpZGF0ZSgnfScpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBkZXBzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHZhbGlkYXRlKCdpZiAoJXMgIT09IHVuZGVmaW5lZCkgeycsIGdlbm9iaihkYXRhU3ltLCBrZXkpKVxuICAgICAgICAgIHZpc2l0KG5hbWUsIGRhdGFTeW0sIGRlcHMsIHJlcG9ydGVyLCBmaWx0ZXIpXG4gICAgICAgICAgdmFsaWRhdGUoJ30nKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBpZiAodHlwZSAhPT0gJ29iamVjdCcpIHZhbGlkYXRlKCd9JylcbiAgICB9XG5cbiAgICBpZiAobm9kZS5hZGRpdGlvbmFsUHJvcGVydGllcyB8fCBub2RlLmFkZGl0aW9uYWxQcm9wZXJ0aWVzID09PSBmYWxzZSkge1xuICAgICAgaWYgKHR5cGUgIT09ICdvYmplY3QnKSB2YWxpZGF0ZSgnaWYgKCVzKSB7JywgdHlwZXMub2JqZWN0KGRhdGFTeW0pKVxuXG4gICAgICB2YXIgaSA9IGdlbmxvb3AoKVxuICAgICAgdmFyIGtleXMgPSBnZW5zeW0oJ2tleXMnKVxuXG4gICAgICB2YXIgdG9Db21wYXJlID0gZnVuY3Rpb24ocCkge1xuICAgICAgICByZXR1cm4ga2V5cysnWycraSsnXSAhPT0gJytKU09OLnN0cmluZ2lmeShwKVxuICAgICAgfVxuXG4gICAgICB2YXIgdG9UZXN0ID0gZnVuY3Rpb24ocCkge1xuICAgICAgICByZXR1cm4gJyEnK3BhdHRlcm5zKHApKycudGVzdCgnK2tleXMrJ1snK2krJ10pJ1xuICAgICAgfVxuXG4gICAgICB2YXIgYWRkaXRpb25hbFByb3AgPSBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzIHx8IHt9KS5tYXAodG9Db21wYXJlKVxuICAgICAgICAuY29uY2F0KE9iamVjdC5rZXlzKG5vZGUucGF0dGVyblByb3BlcnRpZXMgfHwge30pLm1hcCh0b1Rlc3QpKVxuICAgICAgICAuam9pbignICYmICcpIHx8ICd0cnVlJ1xuXG4gICAgICB2YWxpZGF0ZSgndmFyICVzID0gT2JqZWN0LmtleXMoJXMpJywga2V5cywgZGF0YVN5bSlcbiAgICAgICAgKCdmb3IgKHZhciAlcyA9IDA7ICVzIDwgJXMubGVuZ3RoOyAlcysrKSB7JywgaSwgaSwga2V5cywgaSlcbiAgICAgICAgICAoJ2lmICglcykgeycsIGFkZGl0aW9uYWxQcm9wKVxuXG4gICAgICBpZiAobm9kZS5hZGRpdGlvbmFsUHJvcGVydGllcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGZpbHRlcikgdmFsaWRhdGUoJ2RlbGV0ZSAlcycsIGRhdGFTeW0rJ1snK2tleXMrJ1snK2krJ11dJylcbiAgICAgICAgZXJyb3IoJ2hhcyBhZGRpdGlvbmFsIHByb3BlcnRpZXMnLCBudWxsLCBKU09OLnN0cmluZ2lmeShuYW1lKycuJykgKyAnICsgJyArIGtleXMgKyAnWycraSsnXScpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2aXNpdChuYW1lKydbJytrZXlzKydbJytpKyddXScsIGRhdGFTeW0rJ1snK2tleXMrJ1snK2krJ11dJywgbm9kZS5hZGRpdGlvbmFsUHJvcGVydGllcywgcmVwb3J0ZXIsIGZpbHRlcilcbiAgICAgIH1cblxuICAgICAgdmFsaWRhdGVcbiAgICAgICAgICAoJ30nKVxuICAgICAgICAoJ30nKVxuXG4gICAgICBpZiAodHlwZSAhPT0gJ29iamVjdCcpIHZhbGlkYXRlKCd9JylcbiAgICB9XG5cbiAgICBpZiAobm9kZS4kcmVmKSB7XG4gICAgICB2YXIgc3ViID0gZ2V0KHJvb3QsIG9wdHMgJiYgb3B0cy5zY2hlbWFzIHx8IHt9LCBub2RlLiRyZWYpXG4gICAgICBpZiAoc3ViKSB7XG4gICAgICAgIHZhciBmbiA9IGNhY2hlW25vZGUuJHJlZl1cbiAgICAgICAgaWYgKCFmbikge1xuICAgICAgICAgIGNhY2hlW25vZGUuJHJlZl0gPSBmdW5jdGlvbiBwcm94eShkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gZm4oZGF0YSlcbiAgICAgICAgICB9XG4gICAgICAgICAgZm4gPSBjb21waWxlKHN1YiwgY2FjaGUsIHJvb3QsIGZhbHNlLCBvcHRzKVxuICAgICAgICB9XG4gICAgICAgIHZhciBuID0gZ2Vuc3ltKCdyZWYnKVxuICAgICAgICBzY29wZVtuXSA9IGZuXG4gICAgICAgIHZhbGlkYXRlKCdpZiAoISglcyglcykpKSB7JywgbiwgZGF0YVN5bSlcbiAgICAgICAgZXJyb3IoJ3JlZmVyZW5jZWQgc2NoZW1hIGRvZXMgbm90IG1hdGNoJylcbiAgICAgICAgdmFsaWRhdGUoJ30nKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChub2RlLm5vdCkge1xuICAgICAgdmFyIHByZXYgPSBnZW5zeW0oJ3ByZXYnKVxuICAgICAgdmFsaWRhdGUoJ3ZhciAlcyA9IGVycm9ycycsIHByZXYpXG4gICAgICB2aXNpdChuYW1lLCBkYXRhU3ltLCBub2RlLm5vdCwgZmFsc2UsIGZpbHRlcilcbiAgICAgIHZhbGlkYXRlKCdpZiAoJXMgPT09IGVycm9ycykgeycsIHByZXYpXG4gICAgICBlcnJvcignbmVnYXRpdmUgc2NoZW1hIG1hdGNoZXMnKVxuICAgICAgdmFsaWRhdGUoJ30gZWxzZSB7JylcbiAgICAgICAgKCdlcnJvcnMgPSAlcycsIHByZXYpXG4gICAgICAoJ30nKVxuICAgIH1cblxuICAgIGlmIChub2RlLml0ZW1zICYmICF0dXBsZSkge1xuICAgICAgaWYgKHR5cGUgIT09ICdhcnJheScpIHZhbGlkYXRlKCdpZiAoJXMpIHsnLCB0eXBlcy5hcnJheShkYXRhU3ltKSlcblxuICAgICAgdmFyIGkgPSBnZW5sb29wKClcbiAgICAgIHZhbGlkYXRlKCdmb3IgKHZhciAlcyA9IDA7ICVzIDwgJXMubGVuZ3RoOyAlcysrKSB7JywgaSwgaSwgZGF0YVN5bSwgaSlcbiAgICAgIHZpc2l0KG5hbWUrJ1snK2krJ10nLCBkYXRhU3ltKydbJytpKyddJywgbm9kZS5pdGVtcywgcmVwb3J0ZXIsIGZpbHRlcilcbiAgICAgIHZhbGlkYXRlKCd9JylcblxuICAgICAgaWYgKHR5cGUgIT09ICdhcnJheScpIHZhbGlkYXRlKCd9JylcbiAgICB9XG5cbiAgICBpZiAobm9kZS5wYXR0ZXJuUHJvcGVydGllcykge1xuICAgICAgaWYgKHR5cGUgIT09ICdvYmplY3QnKSB2YWxpZGF0ZSgnaWYgKCVzKSB7JywgdHlwZXMub2JqZWN0KGRhdGFTeW0pKVxuICAgICAgdmFyIGtleXMgPSBnZW5zeW0oJ2tleXMnKVxuICAgICAgdmFyIGkgPSBnZW5sb29wKClcbiAgICAgIHZhbGlkYXRlXG4gICAgICAgICgndmFyICVzID0gT2JqZWN0LmtleXMoJXMpJywga2V5cywgZGF0YVN5bSlcbiAgICAgICAgKCdmb3IgKHZhciAlcyA9IDA7ICVzIDwgJXMubGVuZ3RoOyAlcysrKSB7JywgaSwgaSwga2V5cywgaSlcblxuICAgICAgT2JqZWN0LmtleXMobm9kZS5wYXR0ZXJuUHJvcGVydGllcykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgdmFyIHAgPSBwYXR0ZXJucyhrZXkpXG4gICAgICAgIHZhbGlkYXRlKCdpZiAoJXMudGVzdCglcykpIHsnLCBwLCBrZXlzKydbJytpKyddJylcbiAgICAgICAgdmlzaXQobmFtZSsnWycra2V5cysnWycraSsnXV0nLCBkYXRhU3ltKydbJytrZXlzKydbJytpKyddXScsIG5vZGUucGF0dGVyblByb3BlcnRpZXNba2V5XSwgcmVwb3J0ZXIsIGZpbHRlcilcbiAgICAgICAgdmFsaWRhdGUoJ30nKVxuICAgICAgfSlcblxuICAgICAgdmFsaWRhdGUoJ30nKVxuICAgICAgaWYgKHR5cGUgIT09ICdvYmplY3QnKSB2YWxpZGF0ZSgnfScpXG4gICAgfVxuXG4gICAgaWYgKG5vZGUucGF0dGVybikge1xuICAgICAgdmFyIHAgPSBwYXR0ZXJucyhub2RlLnBhdHRlcm4pXG4gICAgICBpZiAodHlwZSAhPT0gJ3N0cmluZycpIHZhbGlkYXRlKCdpZiAoJXMpIHsnLCB0eXBlcy5zdHJpbmcoZGF0YVN5bSkpXG4gICAgICB2YWxpZGF0ZSgnaWYgKCEoJXMudGVzdCglcykpKSB7JywgcCwgZGF0YVN5bSlcbiAgICAgIGVycm9yKCdwYXR0ZXJuIG1pc21hdGNoJylcbiAgICAgIHZhbGlkYXRlKCd9JylcbiAgICAgIGlmICh0eXBlICE9PSAnc3RyaW5nJykgdmFsaWRhdGUoJ30nKVxuICAgIH1cblxuICAgIGlmIChub2RlLmFsbE9mKSB7XG4gICAgICBub2RlLmFsbE9mLmZvckVhY2goZnVuY3Rpb24oc2NoKSB7XG4gICAgICAgIHZpc2l0KG5hbWUsIGRhdGFTeW0sIHNjaCwgcmVwb3J0ZXIsIGZpbHRlcilcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKG5vZGUuYW55T2YgJiYgbm9kZS5hbnlPZi5sZW5ndGgpIHtcbiAgICAgIHZhciBwcmV2ID0gZ2Vuc3ltKCdwcmV2JylcblxuICAgICAgbm9kZS5hbnlPZi5mb3JFYWNoKGZ1bmN0aW9uKHNjaCwgaSkge1xuICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgIHZhbGlkYXRlKCd2YXIgJXMgPSBlcnJvcnMnLCBwcmV2KVxuICAgICAgICB9IGVsc2UgeyAgICAgICAgICBcbiAgICAgICAgICB2YWxpZGF0ZSgnaWYgKGVycm9ycyAhPT0gJXMpIHsnLCBwcmV2KVxuICAgICAgICAgICAgKCdlcnJvcnMgPSAlcycsIHByZXYpXG4gICAgICAgIH1cbiAgICAgICAgdmlzaXQobmFtZSwgZGF0YVN5bSwgc2NoLCBmYWxzZSwgZmFsc2UpXG4gICAgICB9KVxuICAgICAgbm9kZS5hbnlPZi5mb3JFYWNoKGZ1bmN0aW9uKHNjaCwgaSkge1xuICAgICAgICBpZiAoaSkgdmFsaWRhdGUoJ30nKVxuICAgICAgfSlcbiAgICAgIHZhbGlkYXRlKCdpZiAoJXMgIT09IGVycm9ycykgeycsIHByZXYpXG4gICAgICBlcnJvcignbm8gc2NoZW1hcyBtYXRjaCcpXG4gICAgICB2YWxpZGF0ZSgnfScpXG4gICAgfVxuXG4gICAgaWYgKG5vZGUub25lT2YgJiYgbm9kZS5vbmVPZi5sZW5ndGgpIHtcbiAgICAgIHZhciBwcmV2ID0gZ2Vuc3ltKCdwcmV2JylcbiAgICAgIHZhciBwYXNzZXMgPSBnZW5zeW0oJ3Bhc3NlcycpXG5cbiAgICAgIHZhbGlkYXRlXG4gICAgICAgICgndmFyICVzID0gZXJyb3JzJywgcHJldilcbiAgICAgICAgKCd2YXIgJXMgPSAwJywgcGFzc2VzKVxuXG4gICAgICBub2RlLm9uZU9mLmZvckVhY2goZnVuY3Rpb24oc2NoLCBpKSB7XG4gICAgICAgIHZpc2l0KG5hbWUsIGRhdGFTeW0sIHNjaCwgZmFsc2UsIGZhbHNlKVxuICAgICAgICB2YWxpZGF0ZSgnaWYgKCVzID09PSBlcnJvcnMpIHsnLCBwcmV2KVxuICAgICAgICAgICgnJXMrKycsIHBhc3NlcylcbiAgICAgICAgKCd9IGVsc2UgeycpXG4gICAgICAgICAgKCdlcnJvcnMgPSAlcycsIHByZXYpXG4gICAgICAgICgnfScpXG4gICAgICB9KVxuXG4gICAgICB2YWxpZGF0ZSgnaWYgKCVzICE9PSAxKSB7JywgcGFzc2VzKVxuICAgICAgZXJyb3IoJ25vIChvciBtb3JlIHRoYW4gb25lKSBzY2hlbWFzIG1hdGNoJylcbiAgICAgIHZhbGlkYXRlKCd9JylcbiAgICB9XG5cbiAgICBpZiAobm9kZS5tdWx0aXBsZU9mICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlICE9PSAnbnVtYmVyJyAmJiB0eXBlICE9PSAnaW50ZWdlcicpIHZhbGlkYXRlKCdpZiAoJXMpIHsnLCB0eXBlcy5udW1iZXIoZGF0YVN5bSkpXG5cbiAgICAgIHZhciBmYWN0b3IgPSAoKG5vZGUubXVsdGlwbGVPZiB8IDApICE9PSBub2RlLm11bHRpcGxlT2YpID8gTWF0aC5wb3coMTAsIG5vZGUubXVsdGlwbGVPZi50b1N0cmluZygpLnNwbGl0KCcuJykucG9wKCkubGVuZ3RoKSA6IDFcbiAgICAgIGlmIChmYWN0b3IgPiAxKSB2YWxpZGF0ZSgnaWYgKCglZColcykgJSAlZCkgeycsIGZhY3RvciwgZGF0YVN5bSwgZmFjdG9yKm5vZGUubXVsdGlwbGVPZilcbiAgICAgIGVsc2UgdmFsaWRhdGUoJ2lmICglcyAlICVkKSB7JywgZGF0YVN5bSwgbm9kZS5tdWx0aXBsZU9mKVxuXG4gICAgICBlcnJvcignaGFzIGEgcmVtYWluZGVyJylcbiAgICAgIHZhbGlkYXRlKCd9JylcblxuICAgICAgaWYgKHR5cGUgIT09ICdudW1iZXInICYmIHR5cGUgIT09ICdpbnRlZ2VyJykgdmFsaWRhdGUoJ30nKVxuICAgIH1cblxuICAgIGlmIChub2RlLm1heFByb3BlcnRpZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGUgIT09ICdvYmplY3QnKSB2YWxpZGF0ZSgnaWYgKCVzKSB7JywgdHlwZXMub2JqZWN0KGRhdGFTeW0pKVxuICAgICAgXG4gICAgICB2YWxpZGF0ZSgnaWYgKE9iamVjdC5rZXlzKCVzKS5sZW5ndGggPiAlZCkgeycsIGRhdGFTeW0sIG5vZGUubWF4UHJvcGVydGllcylcbiAgICAgIGVycm9yKCdoYXMgbW9yZSBwcm9wZXJ0aWVzIHRoYW4gYWxsb3dlZCcpXG4gICAgICB2YWxpZGF0ZSgnfScpXG5cbiAgICAgIGlmICh0eXBlICE9PSAnb2JqZWN0JykgdmFsaWRhdGUoJ30nKVxuICAgIH1cblxuICAgIGlmIChub2RlLm1pblByb3BlcnRpZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGUgIT09ICdvYmplY3QnKSB2YWxpZGF0ZSgnaWYgKCVzKSB7JywgdHlwZXMub2JqZWN0KGRhdGFTeW0pKVxuICAgICAgXG4gICAgICB2YWxpZGF0ZSgnaWYgKE9iamVjdC5rZXlzKCVzKS5sZW5ndGggPCAlZCkgeycsIGRhdGFTeW0sIG5vZGUubWluUHJvcGVydGllcylcbiAgICAgIGVycm9yKCdoYXMgbGVzcyBwcm9wZXJ0aWVzIHRoYW4gYWxsb3dlZCcpXG4gICAgICB2YWxpZGF0ZSgnfScpXG5cbiAgICAgIGlmICh0eXBlICE9PSAnb2JqZWN0JykgdmFsaWRhdGUoJ30nKVxuICAgIH1cblxuICAgIGlmIChub2RlLm1heEl0ZW1zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlICE9PSAnYXJyYXknKSB2YWxpZGF0ZSgnaWYgKCVzKSB7JywgdHlwZXMuYXJyYXkoZGF0YVN5bSkpXG4gICAgICBcbiAgICAgIHZhbGlkYXRlKCdpZiAoJXMubGVuZ3RoID4gJWQpIHsnLCBkYXRhU3ltLCBub2RlLm1heEl0ZW1zKVxuICAgICAgZXJyb3IoJ2hhcyBtb3JlIGl0ZW1zIHRoYW4gYWxsb3dlZCcpXG4gICAgICB2YWxpZGF0ZSgnfScpXG5cbiAgICAgIGlmICh0eXBlICE9PSAnYXJyYXknKSB2YWxpZGF0ZSgnfScpXG4gICAgfVxuXG4gICAgaWYgKG5vZGUubWluSXRlbXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGUgIT09ICdhcnJheScpIHZhbGlkYXRlKCdpZiAoJXMpIHsnLCB0eXBlcy5hcnJheShkYXRhU3ltKSlcbiAgICAgIFxuICAgICAgdmFsaWRhdGUoJ2lmICglcy5sZW5ndGggPCAlZCkgeycsIGRhdGFTeW0sIG5vZGUubWluSXRlbXMpXG4gICAgICBlcnJvcignaGFzIGxlc3MgaXRlbXMgdGhhbiBhbGxvd2VkJylcbiAgICAgIHZhbGlkYXRlKCd9JylcblxuICAgICAgaWYgKHR5cGUgIT09ICdhcnJheScpIHZhbGlkYXRlKCd9JylcbiAgICB9XG5cbiAgICBpZiAobm9kZS5tYXhMZW5ndGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGUgIT09ICdzdHJpbmcnKSB2YWxpZGF0ZSgnaWYgKCVzKSB7JywgdHlwZXMuc3RyaW5nKGRhdGFTeW0pKVxuXG4gICAgICB2YWxpZGF0ZSgnaWYgKCVzLmxlbmd0aCA+ICVkKSB7JywgZGF0YVN5bSwgbm9kZS5tYXhMZW5ndGgpXG4gICAgICBlcnJvcignaGFzIGxvbmdlciBsZW5ndGggdGhhbiBhbGxvd2VkJylcbiAgICAgIHZhbGlkYXRlKCd9JylcblxuICAgICAgaWYgKHR5cGUgIT09ICdzdHJpbmcnKSB2YWxpZGF0ZSgnfScpXG4gICAgfVxuXG4gICAgaWYgKG5vZGUubWluTGVuZ3RoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlICE9PSAnc3RyaW5nJykgdmFsaWRhdGUoJ2lmICglcykgeycsIHR5cGVzLnN0cmluZyhkYXRhU3ltKSlcblxuICAgICAgdmFsaWRhdGUoJ2lmICglcy5sZW5ndGggPCAlZCkgeycsIGRhdGFTeW0sIG5vZGUubWluTGVuZ3RoKVxuICAgICAgZXJyb3IoJ2hhcyBsZXNzIGxlbmd0aCB0aGFuIGFsbG93ZWQnKVxuICAgICAgdmFsaWRhdGUoJ30nKVxuXG4gICAgICBpZiAodHlwZSAhPT0gJ3N0cmluZycpIHZhbGlkYXRlKCd9JylcbiAgICB9XG5cbiAgICBpZiAobm9kZS5taW5pbXVtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhbGlkYXRlKCdpZiAoJXMgJXMgJWQpIHsnLCBkYXRhU3ltLCBub2RlLmV4Y2x1c2l2ZU1pbmltdW0gPyAnPD0nIDogJzwnLCBub2RlLm1pbmltdW0pXG4gICAgICBlcnJvcignaXMgbGVzcyB0aGFuIG1pbmltdW0nKVxuICAgICAgdmFsaWRhdGUoJ30nKVxuICAgIH1cblxuICAgIGlmIChub2RlLm1heGltdW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFsaWRhdGUoJ2lmICglcyAlcyAlZCkgeycsIGRhdGFTeW0sIG5vZGUuZXhjbHVzaXZlTWF4aW11bSA/ICc+PScgOiAnPicsIG5vZGUubWF4aW11bSlcbiAgICAgIGVycm9yKCdpcyBtb3JlIHRoYW4gbWF4aW11bScpXG4gICAgICB2YWxpZGF0ZSgnfScpXG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnRpZXMpIHtcbiAgICAgIE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLmZvckVhY2goZnVuY3Rpb24ocCkge1xuICAgICAgICB2aXNpdChnZW5vYmoobmFtZSwgcCksIGdlbm9iaihkYXRhU3ltLCBwKSwgcHJvcGVydGllc1twXSwgcmVwb3J0ZXIsIGZpbHRlcilcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgd2hpbGUgKGluZGVudC0tKSB2YWxpZGF0ZSgnfScpXG4gIH1cblxuICB2YXIgdmFsaWRhdGUgPSBnZW5mdW5cbiAgICAoJ2Z1bmN0aW9uIHZhbGlkYXRlKGRhdGEpIHsnKVxuICAgICAgKCd2YWxpZGF0ZS5lcnJvcnMgPSBudWxsJylcbiAgICAgICgndmFyIGVycm9ycyA9IDAnKVxuXG4gIHZpc2l0KCdkYXRhJywgJ2RhdGEnLCBzY2hlbWEsIHJlcG9ydGVyLCBvcHRzICYmIG9wdHMuZmlsdGVyKVxuXG4gIHZhbGlkYXRlXG4gICAgICAoJ3JldHVybiBlcnJvcnMgPT09IDAnKVxuICAgICgnfScpXG5cbiAgdmFsaWRhdGUgPSB2YWxpZGF0ZS50b0Z1bmN0aW9uKHNjb3BlKVxuICB2YWxpZGF0ZS5lcnJvcnMgPSBudWxsXG5cbiAgdmFsaWRhdGUuX19kZWZpbmVHZXR0ZXJfXygnZXJyb3InLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXZhbGlkYXRlLmVycm9ycykgcmV0dXJuICcnXG4gICAgcmV0dXJuIHZhbGlkYXRlLmVycm9yc1xuICAgICAgLm1hcChmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgcmV0dXJuIGVyci5maWVsZCsnICcrZXJyLm1lc3NhZ2VcbiAgICAgIH0pXG4gICAgICAuam9pbignXFxuJylcbiAgfSlcblxuICB2YWxpZGF0ZS50b0pTT04gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gc2NoZW1hXG4gIH1cblxuICByZXR1cm4gdmFsaWRhdGVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzY2hlbWEsIG9wdHMpIHtcbiAgaWYgKHR5cGVvZiBzY2hlbWEgPT09ICdzdHJpbmcnKSBzY2hlbWEgPSBKU09OLnBhcnNlKHNjaGVtYSlcbiAgcmV0dXJuIGNvbXBpbGUoc2NoZW1hLCB7fSwgc2NoZW1hLCB0cnVlLCBvcHRzKVxufVxuXG5tb2R1bGUuZXhwb3J0cy5maWx0ZXIgPSBmdW5jdGlvbihzY2hlbWEsIG9wdHMpIHtcbiAgdmFyIHZhbGlkYXRlID0gbW9kdWxlLmV4cG9ydHMoc2NoZW1hLCB4dGVuZChvcHRzLCB7ZmlsdGVyOiB0cnVlfSkpXG4gIHJldHVybiBmdW5jdGlvbihzY2gpIHtcbiAgICB2YWxpZGF0ZShzY2gpXG4gICAgcmV0dXJuIHNjaFxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9fc2NoZW1hL2luZGV4LmpzXG4gKiovIiwidmFyIGlzUHJvcGVydHkgPSByZXF1aXJlKCdpcy1wcm9wZXJ0eScpXG5cbnZhciBnZW4gPSBmdW5jdGlvbihvYmosIHByb3ApIHtcbiAgcmV0dXJuIGlzUHJvcGVydHkocHJvcCkgPyBvYmorJy4nK3Byb3AgOiBvYmorJ1snK0pTT04uc3RyaW5naWZ5KHByb3ApKyddJ1xufVxuXG5nZW4udmFsaWQgPSBpc1Byb3BlcnR5XG5nZW4ucHJvcGVydHkgPSBmdW5jdGlvbiAocHJvcCkge1xuIHJldHVybiBpc1Byb3BlcnR5KHByb3ApID8gcHJvcCA6IEpTT04uc3RyaW5naWZ5KHByb3ApXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2VuXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9nZW5lcmF0ZS1vYmplY3QtcHJvcGVydHkvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA1OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCJcbmZ1bmN0aW9uIGlzUHJvcGVydHkoc3RyKSB7XG4gIHJldHVybiAvXlskQS1aXFxfYS16XFx4YWFcXHhiNVxceGJhXFx4YzAtXFx4ZDZcXHhkOC1cXHhmNlxceGY4LVxcdTAyYzFcXHUwMmM2LVxcdTAyZDFcXHUwMmUwLVxcdTAyZTRcXHUwMmVjXFx1MDJlZVxcdTAzNzAtXFx1MDM3NFxcdTAzNzZcXHUwMzc3XFx1MDM3YS1cXHUwMzdkXFx1MDM4NlxcdTAzODgtXFx1MDM4YVxcdTAzOGNcXHUwMzhlLVxcdTAzYTFcXHUwM2EzLVxcdTAzZjVcXHUwM2Y3LVxcdTA0ODFcXHUwNDhhLVxcdTA1MjdcXHUwNTMxLVxcdTA1NTZcXHUwNTU5XFx1MDU2MS1cXHUwNTg3XFx1MDVkMC1cXHUwNWVhXFx1MDVmMC1cXHUwNWYyXFx1MDYyMC1cXHUwNjRhXFx1MDY2ZVxcdTA2NmZcXHUwNjcxLVxcdTA2ZDNcXHUwNmQ1XFx1MDZlNVxcdTA2ZTZcXHUwNmVlXFx1MDZlZlxcdTA2ZmEtXFx1MDZmY1xcdTA2ZmZcXHUwNzEwXFx1MDcxMi1cXHUwNzJmXFx1MDc0ZC1cXHUwN2E1XFx1MDdiMVxcdTA3Y2EtXFx1MDdlYVxcdTA3ZjRcXHUwN2Y1XFx1MDdmYVxcdTA4MDAtXFx1MDgxNVxcdTA4MWFcXHUwODI0XFx1MDgyOFxcdTA4NDAtXFx1MDg1OFxcdTA4YTBcXHUwOGEyLVxcdTA4YWNcXHUwOTA0LVxcdTA5MzlcXHUwOTNkXFx1MDk1MFxcdTA5NTgtXFx1MDk2MVxcdTA5NzEtXFx1MDk3N1xcdTA5NzktXFx1MDk3ZlxcdTA5ODUtXFx1MDk4Y1xcdTA5OGZcXHUwOTkwXFx1MDk5My1cXHUwOWE4XFx1MDlhYS1cXHUwOWIwXFx1MDliMlxcdTA5YjYtXFx1MDliOVxcdTA5YmRcXHUwOWNlXFx1MDlkY1xcdTA5ZGRcXHUwOWRmLVxcdTA5ZTFcXHUwOWYwXFx1MDlmMVxcdTBhMDUtXFx1MGEwYVxcdTBhMGZcXHUwYTEwXFx1MGExMy1cXHUwYTI4XFx1MGEyYS1cXHUwYTMwXFx1MGEzMlxcdTBhMzNcXHUwYTM1XFx1MGEzNlxcdTBhMzhcXHUwYTM5XFx1MGE1OS1cXHUwYTVjXFx1MGE1ZVxcdTBhNzItXFx1MGE3NFxcdTBhODUtXFx1MGE4ZFxcdTBhOGYtXFx1MGE5MVxcdTBhOTMtXFx1MGFhOFxcdTBhYWEtXFx1MGFiMFxcdTBhYjJcXHUwYWIzXFx1MGFiNS1cXHUwYWI5XFx1MGFiZFxcdTBhZDBcXHUwYWUwXFx1MGFlMVxcdTBiMDUtXFx1MGIwY1xcdTBiMGZcXHUwYjEwXFx1MGIxMy1cXHUwYjI4XFx1MGIyYS1cXHUwYjMwXFx1MGIzMlxcdTBiMzNcXHUwYjM1LVxcdTBiMzlcXHUwYjNkXFx1MGI1Y1xcdTBiNWRcXHUwYjVmLVxcdTBiNjFcXHUwYjcxXFx1MGI4M1xcdTBiODUtXFx1MGI4YVxcdTBiOGUtXFx1MGI5MFxcdTBiOTItXFx1MGI5NVxcdTBiOTlcXHUwYjlhXFx1MGI5Y1xcdTBiOWVcXHUwYjlmXFx1MGJhM1xcdTBiYTRcXHUwYmE4LVxcdTBiYWFcXHUwYmFlLVxcdTBiYjlcXHUwYmQwXFx1MGMwNS1cXHUwYzBjXFx1MGMwZS1cXHUwYzEwXFx1MGMxMi1cXHUwYzI4XFx1MGMyYS1cXHUwYzMzXFx1MGMzNS1cXHUwYzM5XFx1MGMzZFxcdTBjNThcXHUwYzU5XFx1MGM2MFxcdTBjNjFcXHUwYzg1LVxcdTBjOGNcXHUwYzhlLVxcdTBjOTBcXHUwYzkyLVxcdTBjYThcXHUwY2FhLVxcdTBjYjNcXHUwY2I1LVxcdTBjYjlcXHUwY2JkXFx1MGNkZVxcdTBjZTBcXHUwY2UxXFx1MGNmMVxcdTBjZjJcXHUwZDA1LVxcdTBkMGNcXHUwZDBlLVxcdTBkMTBcXHUwZDEyLVxcdTBkM2FcXHUwZDNkXFx1MGQ0ZVxcdTBkNjBcXHUwZDYxXFx1MGQ3YS1cXHUwZDdmXFx1MGQ4NS1cXHUwZDk2XFx1MGQ5YS1cXHUwZGIxXFx1MGRiMy1cXHUwZGJiXFx1MGRiZFxcdTBkYzAtXFx1MGRjNlxcdTBlMDEtXFx1MGUzMFxcdTBlMzJcXHUwZTMzXFx1MGU0MC1cXHUwZTQ2XFx1MGU4MVxcdTBlODJcXHUwZTg0XFx1MGU4N1xcdTBlODhcXHUwZThhXFx1MGU4ZFxcdTBlOTQtXFx1MGU5N1xcdTBlOTktXFx1MGU5ZlxcdTBlYTEtXFx1MGVhM1xcdTBlYTVcXHUwZWE3XFx1MGVhYVxcdTBlYWJcXHUwZWFkLVxcdTBlYjBcXHUwZWIyXFx1MGViM1xcdTBlYmRcXHUwZWMwLVxcdTBlYzRcXHUwZWM2XFx1MGVkYy1cXHUwZWRmXFx1MGYwMFxcdTBmNDAtXFx1MGY0N1xcdTBmNDktXFx1MGY2Y1xcdTBmODgtXFx1MGY4Y1xcdTEwMDAtXFx1MTAyYVxcdTEwM2ZcXHUxMDUwLVxcdTEwNTVcXHUxMDVhLVxcdTEwNWRcXHUxMDYxXFx1MTA2NVxcdTEwNjZcXHUxMDZlLVxcdTEwNzBcXHUxMDc1LVxcdTEwODFcXHUxMDhlXFx1MTBhMC1cXHUxMGM1XFx1MTBjN1xcdTEwY2RcXHUxMGQwLVxcdTEwZmFcXHUxMGZjLVxcdTEyNDhcXHUxMjRhLVxcdTEyNGRcXHUxMjUwLVxcdTEyNTZcXHUxMjU4XFx1MTI1YS1cXHUxMjVkXFx1MTI2MC1cXHUxMjg4XFx1MTI4YS1cXHUxMjhkXFx1MTI5MC1cXHUxMmIwXFx1MTJiMi1cXHUxMmI1XFx1MTJiOC1cXHUxMmJlXFx1MTJjMFxcdTEyYzItXFx1MTJjNVxcdTEyYzgtXFx1MTJkNlxcdTEyZDgtXFx1MTMxMFxcdTEzMTItXFx1MTMxNVxcdTEzMTgtXFx1MTM1YVxcdTEzODAtXFx1MTM4ZlxcdTEzYTAtXFx1MTNmNFxcdTE0MDEtXFx1MTY2Y1xcdTE2NmYtXFx1MTY3ZlxcdTE2ODEtXFx1MTY5YVxcdTE2YTAtXFx1MTZlYVxcdTE2ZWUtXFx1MTZmMFxcdTE3MDAtXFx1MTcwY1xcdTE3MGUtXFx1MTcxMVxcdTE3MjAtXFx1MTczMVxcdTE3NDAtXFx1MTc1MVxcdTE3NjAtXFx1MTc2Y1xcdTE3NmUtXFx1MTc3MFxcdTE3ODAtXFx1MTdiM1xcdTE3ZDdcXHUxN2RjXFx1MTgyMC1cXHUxODc3XFx1MTg4MC1cXHUxOGE4XFx1MThhYVxcdTE4YjAtXFx1MThmNVxcdTE5MDAtXFx1MTkxY1xcdTE5NTAtXFx1MTk2ZFxcdTE5NzAtXFx1MTk3NFxcdTE5ODAtXFx1MTlhYlxcdTE5YzEtXFx1MTljN1xcdTFhMDAtXFx1MWExNlxcdTFhMjAtXFx1MWE1NFxcdTFhYTdcXHUxYjA1LVxcdTFiMzNcXHUxYjQ1LVxcdTFiNGJcXHUxYjgzLVxcdTFiYTBcXHUxYmFlXFx1MWJhZlxcdTFiYmEtXFx1MWJlNVxcdTFjMDAtXFx1MWMyM1xcdTFjNGQtXFx1MWM0ZlxcdTFjNWEtXFx1MWM3ZFxcdTFjZTktXFx1MWNlY1xcdTFjZWUtXFx1MWNmMVxcdTFjZjVcXHUxY2Y2XFx1MWQwMC1cXHUxZGJmXFx1MWUwMC1cXHUxZjE1XFx1MWYxOC1cXHUxZjFkXFx1MWYyMC1cXHUxZjQ1XFx1MWY0OC1cXHUxZjRkXFx1MWY1MC1cXHUxZjU3XFx1MWY1OVxcdTFmNWJcXHUxZjVkXFx1MWY1Zi1cXHUxZjdkXFx1MWY4MC1cXHUxZmI0XFx1MWZiNi1cXHUxZmJjXFx1MWZiZVxcdTFmYzItXFx1MWZjNFxcdTFmYzYtXFx1MWZjY1xcdTFmZDAtXFx1MWZkM1xcdTFmZDYtXFx1MWZkYlxcdTFmZTAtXFx1MWZlY1xcdTFmZjItXFx1MWZmNFxcdTFmZjYtXFx1MWZmY1xcdTIwNzFcXHUyMDdmXFx1MjA5MC1cXHUyMDljXFx1MjEwMlxcdTIxMDdcXHUyMTBhLVxcdTIxMTNcXHUyMTE1XFx1MjExOS1cXHUyMTFkXFx1MjEyNFxcdTIxMjZcXHUyMTI4XFx1MjEyYS1cXHUyMTJkXFx1MjEyZi1cXHUyMTM5XFx1MjEzYy1cXHUyMTNmXFx1MjE0NS1cXHUyMTQ5XFx1MjE0ZVxcdTIxNjAtXFx1MjE4OFxcdTJjMDAtXFx1MmMyZVxcdTJjMzAtXFx1MmM1ZVxcdTJjNjAtXFx1MmNlNFxcdTJjZWItXFx1MmNlZVxcdTJjZjJcXHUyY2YzXFx1MmQwMC1cXHUyZDI1XFx1MmQyN1xcdTJkMmRcXHUyZDMwLVxcdTJkNjdcXHUyZDZmXFx1MmQ4MC1cXHUyZDk2XFx1MmRhMC1cXHUyZGE2XFx1MmRhOC1cXHUyZGFlXFx1MmRiMC1cXHUyZGI2XFx1MmRiOC1cXHUyZGJlXFx1MmRjMC1cXHUyZGM2XFx1MmRjOC1cXHUyZGNlXFx1MmRkMC1cXHUyZGQ2XFx1MmRkOC1cXHUyZGRlXFx1MmUyZlxcdTMwMDUtXFx1MzAwN1xcdTMwMjEtXFx1MzAyOVxcdTMwMzEtXFx1MzAzNVxcdTMwMzgtXFx1MzAzY1xcdTMwNDEtXFx1MzA5NlxcdTMwOWQtXFx1MzA5ZlxcdTMwYTEtXFx1MzBmYVxcdTMwZmMtXFx1MzBmZlxcdTMxMDUtXFx1MzEyZFxcdTMxMzEtXFx1MzE4ZVxcdTMxYTAtXFx1MzFiYVxcdTMxZjAtXFx1MzFmZlxcdTM0MDAtXFx1NGRiNVxcdTRlMDAtXFx1OWZjY1xcdWEwMDAtXFx1YTQ4Y1xcdWE0ZDAtXFx1YTRmZFxcdWE1MDAtXFx1YTYwY1xcdWE2MTAtXFx1YTYxZlxcdWE2MmFcXHVhNjJiXFx1YTY0MC1cXHVhNjZlXFx1YTY3Zi1cXHVhNjk3XFx1YTZhMC1cXHVhNmVmXFx1YTcxNy1cXHVhNzFmXFx1YTcyMi1cXHVhNzg4XFx1YTc4Yi1cXHVhNzhlXFx1YTc5MC1cXHVhNzkzXFx1YTdhMC1cXHVhN2FhXFx1YTdmOC1cXHVhODAxXFx1YTgwMy1cXHVhODA1XFx1YTgwNy1cXHVhODBhXFx1YTgwYy1cXHVhODIyXFx1YTg0MC1cXHVhODczXFx1YTg4Mi1cXHVhOGIzXFx1YThmMi1cXHVhOGY3XFx1YThmYlxcdWE5MGEtXFx1YTkyNVxcdWE5MzAtXFx1YTk0NlxcdWE5NjAtXFx1YTk3Y1xcdWE5ODQtXFx1YTliMlxcdWE5Y2ZcXHVhYTAwLVxcdWFhMjhcXHVhYTQwLVxcdWFhNDJcXHVhYTQ0LVxcdWFhNGJcXHVhYTYwLVxcdWFhNzZcXHVhYTdhXFx1YWE4MC1cXHVhYWFmXFx1YWFiMVxcdWFhYjVcXHVhYWI2XFx1YWFiOS1cXHVhYWJkXFx1YWFjMFxcdWFhYzJcXHVhYWRiLVxcdWFhZGRcXHVhYWUwLVxcdWFhZWFcXHVhYWYyLVxcdWFhZjRcXHVhYjAxLVxcdWFiMDZcXHVhYjA5LVxcdWFiMGVcXHVhYjExLVxcdWFiMTZcXHVhYjIwLVxcdWFiMjZcXHVhYjI4LVxcdWFiMmVcXHVhYmMwLVxcdWFiZTJcXHVhYzAwLVxcdWQ3YTNcXHVkN2IwLVxcdWQ3YzZcXHVkN2NiLVxcdWQ3ZmJcXHVmOTAwLVxcdWZhNmRcXHVmYTcwLVxcdWZhZDlcXHVmYjAwLVxcdWZiMDZcXHVmYjEzLVxcdWZiMTdcXHVmYjFkXFx1ZmIxZi1cXHVmYjI4XFx1ZmIyYS1cXHVmYjM2XFx1ZmIzOC1cXHVmYjNjXFx1ZmIzZVxcdWZiNDBcXHVmYjQxXFx1ZmI0M1xcdWZiNDRcXHVmYjQ2LVxcdWZiYjFcXHVmYmQzLVxcdWZkM2RcXHVmZDUwLVxcdWZkOGZcXHVmZDkyLVxcdWZkYzdcXHVmZGYwLVxcdWZkZmJcXHVmZTcwLVxcdWZlNzRcXHVmZTc2LVxcdWZlZmNcXHVmZjIxLVxcdWZmM2FcXHVmZjQxLVxcdWZmNWFcXHVmZjY2LVxcdWZmYmVcXHVmZmMyLVxcdWZmYzdcXHVmZmNhLVxcdWZmY2ZcXHVmZmQyLVxcdWZmZDdcXHVmZmRhLVxcdWZmZGNdWyRBLVpcXF9hLXpcXHhhYVxceGI1XFx4YmFcXHhjMC1cXHhkNlxceGQ4LVxceGY2XFx4ZjgtXFx1MDJjMVxcdTAyYzYtXFx1MDJkMVxcdTAyZTAtXFx1MDJlNFxcdTAyZWNcXHUwMmVlXFx1MDM3MC1cXHUwMzc0XFx1MDM3NlxcdTAzNzdcXHUwMzdhLVxcdTAzN2RcXHUwMzg2XFx1MDM4OC1cXHUwMzhhXFx1MDM4Y1xcdTAzOGUtXFx1MDNhMVxcdTAzYTMtXFx1MDNmNVxcdTAzZjctXFx1MDQ4MVxcdTA0OGEtXFx1MDUyN1xcdTA1MzEtXFx1MDU1NlxcdTA1NTlcXHUwNTYxLVxcdTA1ODdcXHUwNWQwLVxcdTA1ZWFcXHUwNWYwLVxcdTA1ZjJcXHUwNjIwLVxcdTA2NGFcXHUwNjZlXFx1MDY2ZlxcdTA2NzEtXFx1MDZkM1xcdTA2ZDVcXHUwNmU1XFx1MDZlNlxcdTA2ZWVcXHUwNmVmXFx1MDZmYS1cXHUwNmZjXFx1MDZmZlxcdTA3MTBcXHUwNzEyLVxcdTA3MmZcXHUwNzRkLVxcdTA3YTVcXHUwN2IxXFx1MDdjYS1cXHUwN2VhXFx1MDdmNFxcdTA3ZjVcXHUwN2ZhXFx1MDgwMC1cXHUwODE1XFx1MDgxYVxcdTA4MjRcXHUwODI4XFx1MDg0MC1cXHUwODU4XFx1MDhhMFxcdTA4YTItXFx1MDhhY1xcdTA5MDQtXFx1MDkzOVxcdTA5M2RcXHUwOTUwXFx1MDk1OC1cXHUwOTYxXFx1MDk3MS1cXHUwOTc3XFx1MDk3OS1cXHUwOTdmXFx1MDk4NS1cXHUwOThjXFx1MDk4ZlxcdTA5OTBcXHUwOTkzLVxcdTA5YThcXHUwOWFhLVxcdTA5YjBcXHUwOWIyXFx1MDliNi1cXHUwOWI5XFx1MDliZFxcdTA5Y2VcXHUwOWRjXFx1MDlkZFxcdTA5ZGYtXFx1MDllMVxcdTA5ZjBcXHUwOWYxXFx1MGEwNS1cXHUwYTBhXFx1MGEwZlxcdTBhMTBcXHUwYTEzLVxcdTBhMjhcXHUwYTJhLVxcdTBhMzBcXHUwYTMyXFx1MGEzM1xcdTBhMzVcXHUwYTM2XFx1MGEzOFxcdTBhMzlcXHUwYTU5LVxcdTBhNWNcXHUwYTVlXFx1MGE3Mi1cXHUwYTc0XFx1MGE4NS1cXHUwYThkXFx1MGE4Zi1cXHUwYTkxXFx1MGE5My1cXHUwYWE4XFx1MGFhYS1cXHUwYWIwXFx1MGFiMlxcdTBhYjNcXHUwYWI1LVxcdTBhYjlcXHUwYWJkXFx1MGFkMFxcdTBhZTBcXHUwYWUxXFx1MGIwNS1cXHUwYjBjXFx1MGIwZlxcdTBiMTBcXHUwYjEzLVxcdTBiMjhcXHUwYjJhLVxcdTBiMzBcXHUwYjMyXFx1MGIzM1xcdTBiMzUtXFx1MGIzOVxcdTBiM2RcXHUwYjVjXFx1MGI1ZFxcdTBiNWYtXFx1MGI2MVxcdTBiNzFcXHUwYjgzXFx1MGI4NS1cXHUwYjhhXFx1MGI4ZS1cXHUwYjkwXFx1MGI5Mi1cXHUwYjk1XFx1MGI5OVxcdTBiOWFcXHUwYjljXFx1MGI5ZVxcdTBiOWZcXHUwYmEzXFx1MGJhNFxcdTBiYTgtXFx1MGJhYVxcdTBiYWUtXFx1MGJiOVxcdTBiZDBcXHUwYzA1LVxcdTBjMGNcXHUwYzBlLVxcdTBjMTBcXHUwYzEyLVxcdTBjMjhcXHUwYzJhLVxcdTBjMzNcXHUwYzM1LVxcdTBjMzlcXHUwYzNkXFx1MGM1OFxcdTBjNTlcXHUwYzYwXFx1MGM2MVxcdTBjODUtXFx1MGM4Y1xcdTBjOGUtXFx1MGM5MFxcdTBjOTItXFx1MGNhOFxcdTBjYWEtXFx1MGNiM1xcdTBjYjUtXFx1MGNiOVxcdTBjYmRcXHUwY2RlXFx1MGNlMFxcdTBjZTFcXHUwY2YxXFx1MGNmMlxcdTBkMDUtXFx1MGQwY1xcdTBkMGUtXFx1MGQxMFxcdTBkMTItXFx1MGQzYVxcdTBkM2RcXHUwZDRlXFx1MGQ2MFxcdTBkNjFcXHUwZDdhLVxcdTBkN2ZcXHUwZDg1LVxcdTBkOTZcXHUwZDlhLVxcdTBkYjFcXHUwZGIzLVxcdTBkYmJcXHUwZGJkXFx1MGRjMC1cXHUwZGM2XFx1MGUwMS1cXHUwZTMwXFx1MGUzMlxcdTBlMzNcXHUwZTQwLVxcdTBlNDZcXHUwZTgxXFx1MGU4MlxcdTBlODRcXHUwZTg3XFx1MGU4OFxcdTBlOGFcXHUwZThkXFx1MGU5NC1cXHUwZTk3XFx1MGU5OS1cXHUwZTlmXFx1MGVhMS1cXHUwZWEzXFx1MGVhNVxcdTBlYTdcXHUwZWFhXFx1MGVhYlxcdTBlYWQtXFx1MGViMFxcdTBlYjJcXHUwZWIzXFx1MGViZFxcdTBlYzAtXFx1MGVjNFxcdTBlYzZcXHUwZWRjLVxcdTBlZGZcXHUwZjAwXFx1MGY0MC1cXHUwZjQ3XFx1MGY0OS1cXHUwZjZjXFx1MGY4OC1cXHUwZjhjXFx1MTAwMC1cXHUxMDJhXFx1MTAzZlxcdTEwNTAtXFx1MTA1NVxcdTEwNWEtXFx1MTA1ZFxcdTEwNjFcXHUxMDY1XFx1MTA2NlxcdTEwNmUtXFx1MTA3MFxcdTEwNzUtXFx1MTA4MVxcdTEwOGVcXHUxMGEwLVxcdTEwYzVcXHUxMGM3XFx1MTBjZFxcdTEwZDAtXFx1MTBmYVxcdTEwZmMtXFx1MTI0OFxcdTEyNGEtXFx1MTI0ZFxcdTEyNTAtXFx1MTI1NlxcdTEyNThcXHUxMjVhLVxcdTEyNWRcXHUxMjYwLVxcdTEyODhcXHUxMjhhLVxcdTEyOGRcXHUxMjkwLVxcdTEyYjBcXHUxMmIyLVxcdTEyYjVcXHUxMmI4LVxcdTEyYmVcXHUxMmMwXFx1MTJjMi1cXHUxMmM1XFx1MTJjOC1cXHUxMmQ2XFx1MTJkOC1cXHUxMzEwXFx1MTMxMi1cXHUxMzE1XFx1MTMxOC1cXHUxMzVhXFx1MTM4MC1cXHUxMzhmXFx1MTNhMC1cXHUxM2Y0XFx1MTQwMS1cXHUxNjZjXFx1MTY2Zi1cXHUxNjdmXFx1MTY4MS1cXHUxNjlhXFx1MTZhMC1cXHUxNmVhXFx1MTZlZS1cXHUxNmYwXFx1MTcwMC1cXHUxNzBjXFx1MTcwZS1cXHUxNzExXFx1MTcyMC1cXHUxNzMxXFx1MTc0MC1cXHUxNzUxXFx1MTc2MC1cXHUxNzZjXFx1MTc2ZS1cXHUxNzcwXFx1MTc4MC1cXHUxN2IzXFx1MTdkN1xcdTE3ZGNcXHUxODIwLVxcdTE4NzdcXHUxODgwLVxcdTE4YThcXHUxOGFhXFx1MThiMC1cXHUxOGY1XFx1MTkwMC1cXHUxOTFjXFx1MTk1MC1cXHUxOTZkXFx1MTk3MC1cXHUxOTc0XFx1MTk4MC1cXHUxOWFiXFx1MTljMS1cXHUxOWM3XFx1MWEwMC1cXHUxYTE2XFx1MWEyMC1cXHUxYTU0XFx1MWFhN1xcdTFiMDUtXFx1MWIzM1xcdTFiNDUtXFx1MWI0YlxcdTFiODMtXFx1MWJhMFxcdTFiYWVcXHUxYmFmXFx1MWJiYS1cXHUxYmU1XFx1MWMwMC1cXHUxYzIzXFx1MWM0ZC1cXHUxYzRmXFx1MWM1YS1cXHUxYzdkXFx1MWNlOS1cXHUxY2VjXFx1MWNlZS1cXHUxY2YxXFx1MWNmNVxcdTFjZjZcXHUxZDAwLVxcdTFkYmZcXHUxZTAwLVxcdTFmMTVcXHUxZjE4LVxcdTFmMWRcXHUxZjIwLVxcdTFmNDVcXHUxZjQ4LVxcdTFmNGRcXHUxZjUwLVxcdTFmNTdcXHUxZjU5XFx1MWY1YlxcdTFmNWRcXHUxZjVmLVxcdTFmN2RcXHUxZjgwLVxcdTFmYjRcXHUxZmI2LVxcdTFmYmNcXHUxZmJlXFx1MWZjMi1cXHUxZmM0XFx1MWZjNi1cXHUxZmNjXFx1MWZkMC1cXHUxZmQzXFx1MWZkNi1cXHUxZmRiXFx1MWZlMC1cXHUxZmVjXFx1MWZmMi1cXHUxZmY0XFx1MWZmNi1cXHUxZmZjXFx1MjA3MVxcdTIwN2ZcXHUyMDkwLVxcdTIwOWNcXHUyMTAyXFx1MjEwN1xcdTIxMGEtXFx1MjExM1xcdTIxMTVcXHUyMTE5LVxcdTIxMWRcXHUyMTI0XFx1MjEyNlxcdTIxMjhcXHUyMTJhLVxcdTIxMmRcXHUyMTJmLVxcdTIxMzlcXHUyMTNjLVxcdTIxM2ZcXHUyMTQ1LVxcdTIxNDlcXHUyMTRlXFx1MjE2MC1cXHUyMTg4XFx1MmMwMC1cXHUyYzJlXFx1MmMzMC1cXHUyYzVlXFx1MmM2MC1cXHUyY2U0XFx1MmNlYi1cXHUyY2VlXFx1MmNmMlxcdTJjZjNcXHUyZDAwLVxcdTJkMjVcXHUyZDI3XFx1MmQyZFxcdTJkMzAtXFx1MmQ2N1xcdTJkNmZcXHUyZDgwLVxcdTJkOTZcXHUyZGEwLVxcdTJkYTZcXHUyZGE4LVxcdTJkYWVcXHUyZGIwLVxcdTJkYjZcXHUyZGI4LVxcdTJkYmVcXHUyZGMwLVxcdTJkYzZcXHUyZGM4LVxcdTJkY2VcXHUyZGQwLVxcdTJkZDZcXHUyZGQ4LVxcdTJkZGVcXHUyZTJmXFx1MzAwNS1cXHUzMDA3XFx1MzAyMS1cXHUzMDI5XFx1MzAzMS1cXHUzMDM1XFx1MzAzOC1cXHUzMDNjXFx1MzA0MS1cXHUzMDk2XFx1MzA5ZC1cXHUzMDlmXFx1MzBhMS1cXHUzMGZhXFx1MzBmYy1cXHUzMGZmXFx1MzEwNS1cXHUzMTJkXFx1MzEzMS1cXHUzMThlXFx1MzFhMC1cXHUzMWJhXFx1MzFmMC1cXHUzMWZmXFx1MzQwMC1cXHU0ZGI1XFx1NGUwMC1cXHU5ZmNjXFx1YTAwMC1cXHVhNDhjXFx1YTRkMC1cXHVhNGZkXFx1YTUwMC1cXHVhNjBjXFx1YTYxMC1cXHVhNjFmXFx1YTYyYVxcdWE2MmJcXHVhNjQwLVxcdWE2NmVcXHVhNjdmLVxcdWE2OTdcXHVhNmEwLVxcdWE2ZWZcXHVhNzE3LVxcdWE3MWZcXHVhNzIyLVxcdWE3ODhcXHVhNzhiLVxcdWE3OGVcXHVhNzkwLVxcdWE3OTNcXHVhN2EwLVxcdWE3YWFcXHVhN2Y4LVxcdWE4MDFcXHVhODAzLVxcdWE4MDVcXHVhODA3LVxcdWE4MGFcXHVhODBjLVxcdWE4MjJcXHVhODQwLVxcdWE4NzNcXHVhODgyLVxcdWE4YjNcXHVhOGYyLVxcdWE4ZjdcXHVhOGZiXFx1YTkwYS1cXHVhOTI1XFx1YTkzMC1cXHVhOTQ2XFx1YTk2MC1cXHVhOTdjXFx1YTk4NC1cXHVhOWIyXFx1YTljZlxcdWFhMDAtXFx1YWEyOFxcdWFhNDAtXFx1YWE0MlxcdWFhNDQtXFx1YWE0YlxcdWFhNjAtXFx1YWE3NlxcdWFhN2FcXHVhYTgwLVxcdWFhYWZcXHVhYWIxXFx1YWFiNVxcdWFhYjZcXHVhYWI5LVxcdWFhYmRcXHVhYWMwXFx1YWFjMlxcdWFhZGItXFx1YWFkZFxcdWFhZTAtXFx1YWFlYVxcdWFhZjItXFx1YWFmNFxcdWFiMDEtXFx1YWIwNlxcdWFiMDktXFx1YWIwZVxcdWFiMTEtXFx1YWIxNlxcdWFiMjAtXFx1YWIyNlxcdWFiMjgtXFx1YWIyZVxcdWFiYzAtXFx1YWJlMlxcdWFjMDAtXFx1ZDdhM1xcdWQ3YjAtXFx1ZDdjNlxcdWQ3Y2ItXFx1ZDdmYlxcdWY5MDAtXFx1ZmE2ZFxcdWZhNzAtXFx1ZmFkOVxcdWZiMDAtXFx1ZmIwNlxcdWZiMTMtXFx1ZmIxN1xcdWZiMWRcXHVmYjFmLVxcdWZiMjhcXHVmYjJhLVxcdWZiMzZcXHVmYjM4LVxcdWZiM2NcXHVmYjNlXFx1ZmI0MFxcdWZiNDFcXHVmYjQzXFx1ZmI0NFxcdWZiNDYtXFx1ZmJiMVxcdWZiZDMtXFx1ZmQzZFxcdWZkNTAtXFx1ZmQ4ZlxcdWZkOTItXFx1ZmRjN1xcdWZkZjAtXFx1ZmRmYlxcdWZlNzAtXFx1ZmU3NFxcdWZlNzYtXFx1ZmVmY1xcdWZmMjEtXFx1ZmYzYVxcdWZmNDEtXFx1ZmY1YVxcdWZmNjYtXFx1ZmZiZVxcdWZmYzItXFx1ZmZjN1xcdWZmY2EtXFx1ZmZjZlxcdWZmZDItXFx1ZmZkN1xcdWZmZGEtXFx1ZmZkYzAtOVxcdTAzMDAtXFx1MDM2ZlxcdTA0ODMtXFx1MDQ4N1xcdTA1OTEtXFx1MDViZFxcdTA1YmZcXHUwNWMxXFx1MDVjMlxcdTA1YzRcXHUwNWM1XFx1MDVjN1xcdTA2MTAtXFx1MDYxYVxcdTA2NGItXFx1MDY2OVxcdTA2NzBcXHUwNmQ2LVxcdTA2ZGNcXHUwNmRmLVxcdTA2ZTRcXHUwNmU3XFx1MDZlOFxcdTA2ZWEtXFx1MDZlZFxcdTA2ZjAtXFx1MDZmOVxcdTA3MTFcXHUwNzMwLVxcdTA3NGFcXHUwN2E2LVxcdTA3YjBcXHUwN2MwLVxcdTA3YzlcXHUwN2ViLVxcdTA3ZjNcXHUwODE2LVxcdTA4MTlcXHUwODFiLVxcdTA4MjNcXHUwODI1LVxcdTA4MjdcXHUwODI5LVxcdTA4MmRcXHUwODU5LVxcdTA4NWJcXHUwOGU0LVxcdTA4ZmVcXHUwOTAwLVxcdTA5MDNcXHUwOTNhLVxcdTA5M2NcXHUwOTNlLVxcdTA5NGZcXHUwOTUxLVxcdTA5NTdcXHUwOTYyXFx1MDk2M1xcdTA5NjYtXFx1MDk2ZlxcdTA5ODEtXFx1MDk4M1xcdTA5YmNcXHUwOWJlLVxcdTA5YzRcXHUwOWM3XFx1MDljOFxcdTA5Y2ItXFx1MDljZFxcdTA5ZDdcXHUwOWUyXFx1MDllM1xcdTA5ZTYtXFx1MDllZlxcdTBhMDEtXFx1MGEwM1xcdTBhM2NcXHUwYTNlLVxcdTBhNDJcXHUwYTQ3XFx1MGE0OFxcdTBhNGItXFx1MGE0ZFxcdTBhNTFcXHUwYTY2LVxcdTBhNzFcXHUwYTc1XFx1MGE4MS1cXHUwYTgzXFx1MGFiY1xcdTBhYmUtXFx1MGFjNVxcdTBhYzctXFx1MGFjOVxcdTBhY2ItXFx1MGFjZFxcdTBhZTJcXHUwYWUzXFx1MGFlNi1cXHUwYWVmXFx1MGIwMS1cXHUwYjAzXFx1MGIzY1xcdTBiM2UtXFx1MGI0NFxcdTBiNDdcXHUwYjQ4XFx1MGI0Yi1cXHUwYjRkXFx1MGI1NlxcdTBiNTdcXHUwYjYyXFx1MGI2M1xcdTBiNjYtXFx1MGI2ZlxcdTBiODJcXHUwYmJlLVxcdTBiYzJcXHUwYmM2LVxcdTBiYzhcXHUwYmNhLVxcdTBiY2RcXHUwYmQ3XFx1MGJlNi1cXHUwYmVmXFx1MGMwMS1cXHUwYzAzXFx1MGMzZS1cXHUwYzQ0XFx1MGM0Ni1cXHUwYzQ4XFx1MGM0YS1cXHUwYzRkXFx1MGM1NVxcdTBjNTZcXHUwYzYyXFx1MGM2M1xcdTBjNjYtXFx1MGM2ZlxcdTBjODJcXHUwYzgzXFx1MGNiY1xcdTBjYmUtXFx1MGNjNFxcdTBjYzYtXFx1MGNjOFxcdTBjY2EtXFx1MGNjZFxcdTBjZDVcXHUwY2Q2XFx1MGNlMlxcdTBjZTNcXHUwY2U2LVxcdTBjZWZcXHUwZDAyXFx1MGQwM1xcdTBkM2UtXFx1MGQ0NFxcdTBkNDYtXFx1MGQ0OFxcdTBkNGEtXFx1MGQ0ZFxcdTBkNTdcXHUwZDYyXFx1MGQ2M1xcdTBkNjYtXFx1MGQ2ZlxcdTBkODJcXHUwZDgzXFx1MGRjYVxcdTBkY2YtXFx1MGRkNFxcdTBkZDZcXHUwZGQ4LVxcdTBkZGZcXHUwZGYyXFx1MGRmM1xcdTBlMzFcXHUwZTM0LVxcdTBlM2FcXHUwZTQ3LVxcdTBlNGVcXHUwZTUwLVxcdTBlNTlcXHUwZWIxXFx1MGViNC1cXHUwZWI5XFx1MGViYlxcdTBlYmNcXHUwZWM4LVxcdTBlY2RcXHUwZWQwLVxcdTBlZDlcXHUwZjE4XFx1MGYxOVxcdTBmMjAtXFx1MGYyOVxcdTBmMzVcXHUwZjM3XFx1MGYzOVxcdTBmM2VcXHUwZjNmXFx1MGY3MS1cXHUwZjg0XFx1MGY4NlxcdTBmODdcXHUwZjhkLVxcdTBmOTdcXHUwZjk5LVxcdTBmYmNcXHUwZmM2XFx1MTAyYi1cXHUxMDNlXFx1MTA0MC1cXHUxMDQ5XFx1MTA1Ni1cXHUxMDU5XFx1MTA1ZS1cXHUxMDYwXFx1MTA2Mi1cXHUxMDY0XFx1MTA2Ny1cXHUxMDZkXFx1MTA3MS1cXHUxMDc0XFx1MTA4Mi1cXHUxMDhkXFx1MTA4Zi1cXHUxMDlkXFx1MTM1ZC1cXHUxMzVmXFx1MTcxMi1cXHUxNzE0XFx1MTczMi1cXHUxNzM0XFx1MTc1MlxcdTE3NTNcXHUxNzcyXFx1MTc3M1xcdTE3YjQtXFx1MTdkM1xcdTE3ZGRcXHUxN2UwLVxcdTE3ZTlcXHUxODBiLVxcdTE4MGRcXHUxODEwLVxcdTE4MTlcXHUxOGE5XFx1MTkyMC1cXHUxOTJiXFx1MTkzMC1cXHUxOTNiXFx1MTk0Ni1cXHUxOTRmXFx1MTliMC1cXHUxOWMwXFx1MTljOFxcdTE5YzlcXHUxOWQwLVxcdTE5ZDlcXHUxYTE3LVxcdTFhMWJcXHUxYTU1LVxcdTFhNWVcXHUxYTYwLVxcdTFhN2NcXHUxYTdmLVxcdTFhODlcXHUxYTkwLVxcdTFhOTlcXHUxYjAwLVxcdTFiMDRcXHUxYjM0LVxcdTFiNDRcXHUxYjUwLVxcdTFiNTlcXHUxYjZiLVxcdTFiNzNcXHUxYjgwLVxcdTFiODJcXHUxYmExLVxcdTFiYWRcXHUxYmIwLVxcdTFiYjlcXHUxYmU2LVxcdTFiZjNcXHUxYzI0LVxcdTFjMzdcXHUxYzQwLVxcdTFjNDlcXHUxYzUwLVxcdTFjNTlcXHUxY2QwLVxcdTFjZDJcXHUxY2Q0LVxcdTFjZThcXHUxY2VkXFx1MWNmMi1cXHUxY2Y0XFx1MWRjMC1cXHUxZGU2XFx1MWRmYy1cXHUxZGZmXFx1MjAwY1xcdTIwMGRcXHUyMDNmXFx1MjA0MFxcdTIwNTRcXHUyMGQwLVxcdTIwZGNcXHUyMGUxXFx1MjBlNS1cXHUyMGYwXFx1MmNlZi1cXHUyY2YxXFx1MmQ3ZlxcdTJkZTAtXFx1MmRmZlxcdTMwMmEtXFx1MzAyZlxcdTMwOTlcXHUzMDlhXFx1YTYyMC1cXHVhNjI5XFx1YTY2ZlxcdWE2NzQtXFx1YTY3ZFxcdWE2OWZcXHVhNmYwXFx1YTZmMVxcdWE4MDJcXHVhODA2XFx1YTgwYlxcdWE4MjMtXFx1YTgyN1xcdWE4ODBcXHVhODgxXFx1YThiNC1cXHVhOGM0XFx1YThkMC1cXHVhOGQ5XFx1YThlMC1cXHVhOGYxXFx1YTkwMC1cXHVhOTA5XFx1YTkyNi1cXHVhOTJkXFx1YTk0Ny1cXHVhOTUzXFx1YTk4MC1cXHVhOTgzXFx1YTliMy1cXHVhOWMwXFx1YTlkMC1cXHVhOWQ5XFx1YWEyOS1cXHVhYTM2XFx1YWE0M1xcdWFhNGNcXHVhYTRkXFx1YWE1MC1cXHVhYTU5XFx1YWE3YlxcdWFhYjBcXHVhYWIyLVxcdWFhYjRcXHVhYWI3XFx1YWFiOFxcdWFhYmVcXHVhYWJmXFx1YWFjMVxcdWFhZWItXFx1YWFlZlxcdWFhZjVcXHVhYWY2XFx1YWJlMy1cXHVhYmVhXFx1YWJlY1xcdWFiZWRcXHVhYmYwLVxcdWFiZjlcXHVmYjFlXFx1ZmUwMC1cXHVmZTBmXFx1ZmUyMC1cXHVmZTI2XFx1ZmUzM1xcdWZlMzRcXHVmZTRkLVxcdWZlNGZcXHVmZjEwLVxcdWZmMTlcXHVmZjNmXSokLy50ZXN0KHN0cilcbn1cbm1vZHVsZS5leHBvcnRzID0gaXNQcm9wZXJ0eVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2lzLXByb3BlcnR5L2lzLXByb3BlcnR5LmpzXG4gKiogbW9kdWxlIGlkID0gNTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciB1dGlsID0gcmVxdWlyZSgndXRpbCcpXG5cbnZhciBJTkRFTlRfU1RBUlQgPSAvW1xce1xcW10vXG52YXIgSU5ERU5UX0VORCA9IC9bXFx9XFxdXS9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGxpbmVzID0gW11cbiAgdmFyIGluZGVudCA9IDBcblxuICB2YXIgcHVzaCA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHZhciBzcGFjZXMgPSAnJ1xuICAgIHdoaWxlIChzcGFjZXMubGVuZ3RoIDwgaW5kZW50KjIpIHNwYWNlcyArPSAnICAnXG4gICAgbGluZXMucHVzaChzcGFjZXMrc3RyKVxuICB9XG5cbiAgdmFyIGxpbmUgPSBmdW5jdGlvbihmbXQpIHtcbiAgICBpZiAoIWZtdCkgcmV0dXJuIGxpbmVcblxuICAgIGlmIChJTkRFTlRfRU5ELnRlc3QoZm10LnRyaW0oKVswXSkgJiYgSU5ERU5UX1NUQVJULnRlc3QoZm10W2ZtdC5sZW5ndGgtMV0pKSB7XG4gICAgICBpbmRlbnQtLVxuICAgICAgcHVzaCh1dGlsLmZvcm1hdC5hcHBseSh1dGlsLCBhcmd1bWVudHMpKVxuICAgICAgaW5kZW50KytcbiAgICAgIHJldHVybiBsaW5lXG4gICAgfVxuICAgIGlmIChJTkRFTlRfU1RBUlQudGVzdChmbXRbZm10Lmxlbmd0aC0xXSkpIHtcbiAgICAgIHB1c2godXRpbC5mb3JtYXQuYXBwbHkodXRpbCwgYXJndW1lbnRzKSlcbiAgICAgIGluZGVudCsrXG4gICAgICByZXR1cm4gbGluZVxuICAgIH1cbiAgICBpZiAoSU5ERU5UX0VORC50ZXN0KGZtdC50cmltKClbMF0pKSB7XG4gICAgICBpbmRlbnQtLVxuICAgICAgcHVzaCh1dGlsLmZvcm1hdC5hcHBseSh1dGlsLCBhcmd1bWVudHMpKVxuICAgICAgcmV0dXJuIGxpbmVcbiAgICB9XG5cbiAgICBwdXNoKHV0aWwuZm9ybWF0LmFwcGx5KHV0aWwsIGFyZ3VtZW50cykpXG4gICAgcmV0dXJuIGxpbmVcbiAgfVxuXG4gIGxpbmUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbGluZXMuam9pbignXFxuJylcbiAgfVxuXG4gIGxpbmUudG9GdW5jdGlvbiA9IGZ1bmN0aW9uKHNjb3BlKSB7XG4gICAgdmFyIHNyYyA9ICdyZXR1cm4gKCcrbGluZS50b1N0cmluZygpKycpJ1xuXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhzY29wZSB8fCB7fSkubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIGtleVxuICAgIH0pXG5cbiAgICB2YXIgdmFscyA9IGtleXMubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIHNjb3BlW2tleV1cbiAgICB9KVxuXG4gICAgcmV0dXJuIEZ1bmN0aW9uLmFwcGx5KG51bGwsIGtleXMuY29uY2F0KHNyYykpLmFwcGx5KG51bGwsIHZhbHMpXG4gIH1cblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCkgbGluZS5hcHBseShudWxsLCBhcmd1bWVudHMpXG5cbiAgcmV0dXJuIGxpbmVcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2dlbmVyYXRlLWZ1bmN0aW9uL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG52YXIgZm9ybWF0UmVnRXhwID0gLyVbc2RqJV0vZztcbmV4cG9ydHMuZm9ybWF0ID0gZnVuY3Rpb24oZikge1xuICBpZiAoIWlzU3RyaW5nKGYpKSB7XG4gICAgdmFyIG9iamVjdHMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgb2JqZWN0cy5wdXNoKGluc3BlY3QoYXJndW1lbnRzW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3RzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIHZhciBpID0gMTtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgdmFyIHN0ciA9IFN0cmluZyhmKS5yZXBsYWNlKGZvcm1hdFJlZ0V4cCwgZnVuY3Rpb24oeCkge1xuICAgIGlmICh4ID09PSAnJSUnKSByZXR1cm4gJyUnO1xuICAgIGlmIChpID49IGxlbikgcmV0dXJuIHg7XG4gICAgc3dpdGNoICh4KSB7XG4gICAgICBjYXNlICclcyc6IHJldHVybiBTdHJpbmcoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVkJzogcmV0dXJuIE51bWJlcihhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWonOlxuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhcmdzW2krK10pO1xuICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgcmV0dXJuICdbQ2lyY3VsYXJdJztcbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICB9KTtcbiAgZm9yICh2YXIgeCA9IGFyZ3NbaV07IGkgPCBsZW47IHggPSBhcmdzWysraV0pIHtcbiAgICBpZiAoaXNOdWxsKHgpIHx8ICFpc09iamVjdCh4KSkge1xuICAgICAgc3RyICs9ICcgJyArIHg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciArPSAnICcgKyBpbnNwZWN0KHgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RyO1xufTtcblxuXG4vLyBNYXJrIHRoYXQgYSBtZXRob2Qgc2hvdWxkIG5vdCBiZSB1c2VkLlxuLy8gUmV0dXJucyBhIG1vZGlmaWVkIGZ1bmN0aW9uIHdoaWNoIHdhcm5zIG9uY2UgYnkgZGVmYXVsdC5cbi8vIElmIC0tbm8tZGVwcmVjYXRpb24gaXMgc2V0LCB0aGVuIGl0IGlzIGEgbm8tb3AuXG5leHBvcnRzLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKGZuLCBtc2cpIHtcbiAgLy8gQWxsb3cgZm9yIGRlcHJlY2F0aW5nIHRoaW5ncyBpbiB0aGUgcHJvY2VzcyBvZiBzdGFydGluZyB1cC5cbiAgaWYgKGlzVW5kZWZpbmVkKGdsb2JhbC5wcm9jZXNzKSkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBleHBvcnRzLmRlcHJlY2F0ZShmbiwgbXNnKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICBpZiAocHJvY2Vzcy5ub0RlcHJlY2F0aW9uID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgdmFyIHdhcm5lZCA9IGZhbHNlO1xuICBmdW5jdGlvbiBkZXByZWNhdGVkKCkge1xuICAgIGlmICghd2FybmVkKSB7XG4gICAgICBpZiAocHJvY2Vzcy50aHJvd0RlcHJlY2F0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLnRyYWNlRGVwcmVjYXRpb24pIHtcbiAgICAgICAgY29uc29sZS50cmFjZShtc2cpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xuICAgICAgfVxuICAgICAgd2FybmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICByZXR1cm4gZGVwcmVjYXRlZDtcbn07XG5cblxudmFyIGRlYnVncyA9IHt9O1xudmFyIGRlYnVnRW52aXJvbjtcbmV4cG9ydHMuZGVidWdsb2cgPSBmdW5jdGlvbihzZXQpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKGRlYnVnRW52aXJvbikpXG4gICAgZGVidWdFbnZpcm9uID0gcHJvY2Vzcy5lbnYuTk9ERV9ERUJVRyB8fCAnJztcbiAgc2V0ID0gc2V0LnRvVXBwZXJDYXNlKCk7XG4gIGlmICghZGVidWdzW3NldF0pIHtcbiAgICBpZiAobmV3IFJlZ0V4cCgnXFxcXGInICsgc2V0ICsgJ1xcXFxiJywgJ2knKS50ZXN0KGRlYnVnRW52aXJvbikpIHtcbiAgICAgIHZhciBwaWQgPSBwcm9jZXNzLnBpZDtcbiAgICAgIGRlYnVnc1tzZXRdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtc2cgPSBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpO1xuICAgICAgICBjb25zb2xlLmVycm9yKCclcyAlZDogJXMnLCBzZXQsIHBpZCwgbXNnKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnc1tzZXRdID0gZnVuY3Rpb24oKSB7fTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlYnVnc1tzZXRdO1xufTtcblxuXG4vKipcbiAqIEVjaG9zIHRoZSB2YWx1ZSBvZiBhIHZhbHVlLiBUcnlzIHRvIHByaW50IHRoZSB2YWx1ZSBvdXRcbiAqIGluIHRoZSBiZXN0IHdheSBwb3NzaWJsZSBnaXZlbiB0aGUgZGlmZmVyZW50IHR5cGVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBwcmludCBvdXQuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyBPcHRpb25hbCBvcHRpb25zIG9iamVjdCB0aGF0IGFsdGVycyB0aGUgb3V0cHV0LlxuICovXG4vKiBsZWdhY3k6IG9iaiwgc2hvd0hpZGRlbiwgZGVwdGgsIGNvbG9ycyovXG5mdW5jdGlvbiBpbnNwZWN0KG9iaiwgb3B0cykge1xuICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgdmFyIGN0eCA9IHtcbiAgICBzZWVuOiBbXSxcbiAgICBzdHlsaXplOiBzdHlsaXplTm9Db2xvclxuICB9O1xuICAvLyBsZWdhY3kuLi5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gMykgY3R4LmRlcHRoID0gYXJndW1lbnRzWzJdO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSA0KSBjdHguY29sb3JzID0gYXJndW1lbnRzWzNdO1xuICBpZiAoaXNCb29sZWFuKG9wdHMpKSB7XG4gICAgLy8gbGVnYWN5Li4uXG4gICAgY3R4LnNob3dIaWRkZW4gPSBvcHRzO1xuICB9IGVsc2UgaWYgKG9wdHMpIHtcbiAgICAvLyBnb3QgYW4gXCJvcHRpb25zXCIgb2JqZWN0XG4gICAgZXhwb3J0cy5fZXh0ZW5kKGN0eCwgb3B0cyk7XG4gIH1cbiAgLy8gc2V0IGRlZmF1bHQgb3B0aW9uc1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LnNob3dIaWRkZW4pKSBjdHguc2hvd0hpZGRlbiA9IGZhbHNlO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmRlcHRoKSkgY3R4LmRlcHRoID0gMjtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jb2xvcnMpKSBjdHguY29sb3JzID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguY3VzdG9tSW5zcGVjdCkpIGN0eC5jdXN0b21JbnNwZWN0ID0gdHJ1ZTtcbiAgaWYgKGN0eC5jb2xvcnMpIGN0eC5zdHlsaXplID0gc3R5bGl6ZVdpdGhDb2xvcjtcbiAgcmV0dXJuIGZvcm1hdFZhbHVlKGN0eCwgb2JqLCBjdHguZGVwdGgpO1xufVxuZXhwb3J0cy5pbnNwZWN0ID0gaW5zcGVjdDtcblxuXG4vLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0FOU0lfZXNjYXBlX2NvZGUjZ3JhcGhpY3Ncbmluc3BlY3QuY29sb3JzID0ge1xuICAnYm9sZCcgOiBbMSwgMjJdLFxuICAnaXRhbGljJyA6IFszLCAyM10sXG4gICd1bmRlcmxpbmUnIDogWzQsIDI0XSxcbiAgJ2ludmVyc2UnIDogWzcsIDI3XSxcbiAgJ3doaXRlJyA6IFszNywgMzldLFxuICAnZ3JleScgOiBbOTAsIDM5XSxcbiAgJ2JsYWNrJyA6IFszMCwgMzldLFxuICAnYmx1ZScgOiBbMzQsIDM5XSxcbiAgJ2N5YW4nIDogWzM2LCAzOV0sXG4gICdncmVlbicgOiBbMzIsIDM5XSxcbiAgJ21hZ2VudGEnIDogWzM1LCAzOV0sXG4gICdyZWQnIDogWzMxLCAzOV0sXG4gICd5ZWxsb3cnIDogWzMzLCAzOV1cbn07XG5cbi8vIERvbid0IHVzZSAnYmx1ZScgbm90IHZpc2libGUgb24gY21kLmV4ZVxuaW5zcGVjdC5zdHlsZXMgPSB7XG4gICdzcGVjaWFsJzogJ2N5YW4nLFxuICAnbnVtYmVyJzogJ3llbGxvdycsXG4gICdib29sZWFuJzogJ3llbGxvdycsXG4gICd1bmRlZmluZWQnOiAnZ3JleScsXG4gICdudWxsJzogJ2JvbGQnLFxuICAnc3RyaW5nJzogJ2dyZWVuJyxcbiAgJ2RhdGUnOiAnbWFnZW50YScsXG4gIC8vIFwibmFtZVwiOiBpbnRlbnRpb25hbGx5IG5vdCBzdHlsaW5nXG4gICdyZWdleHAnOiAncmVkJ1xufTtcblxuXG5mdW5jdGlvbiBzdHlsaXplV2l0aENvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHZhciBzdHlsZSA9IGluc3BlY3Quc3R5bGVzW3N0eWxlVHlwZV07XG5cbiAgaWYgKHN0eWxlKSB7XG4gICAgcmV0dXJuICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMF0gKyAnbScgKyBzdHIgK1xuICAgICAgICAgICAnXFx1MDAxYlsnICsgaW5zcGVjdC5jb2xvcnNbc3R5bGVdWzFdICsgJ20nO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzdHI7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBzdHlsaXplTm9Db2xvcihzdHIsIHN0eWxlVHlwZSkge1xuICByZXR1cm4gc3RyO1xufVxuXG5cbmZ1bmN0aW9uIGFycmF5VG9IYXNoKGFycmF5KSB7XG4gIHZhciBoYXNoID0ge307XG5cbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbih2YWwsIGlkeCkge1xuICAgIGhhc2hbdmFsXSA9IHRydWU7XG4gIH0pO1xuXG4gIHJldHVybiBoYXNoO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFZhbHVlKGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcykge1xuICAvLyBQcm92aWRlIGEgaG9vayBmb3IgdXNlci1zcGVjaWZpZWQgaW5zcGVjdCBmdW5jdGlvbnMuXG4gIC8vIENoZWNrIHRoYXQgdmFsdWUgaXMgYW4gb2JqZWN0IHdpdGggYW4gaW5zcGVjdCBmdW5jdGlvbiBvbiBpdFxuICBpZiAoY3R4LmN1c3RvbUluc3BlY3QgJiZcbiAgICAgIHZhbHVlICYmXG4gICAgICBpc0Z1bmN0aW9uKHZhbHVlLmluc3BlY3QpICYmXG4gICAgICAvLyBGaWx0ZXIgb3V0IHRoZSB1dGlsIG1vZHVsZSwgaXQncyBpbnNwZWN0IGZ1bmN0aW9uIGlzIHNwZWNpYWxcbiAgICAgIHZhbHVlLmluc3BlY3QgIT09IGV4cG9ydHMuaW5zcGVjdCAmJlxuICAgICAgLy8gQWxzbyBmaWx0ZXIgb3V0IGFueSBwcm90b3R5cGUgb2JqZWN0cyB1c2luZyB0aGUgY2lyY3VsYXIgY2hlY2suXG4gICAgICAhKHZhbHVlLmNvbnN0cnVjdG9yICYmIHZhbHVlLmNvbnN0cnVjdG9yLnByb3RvdHlwZSA9PT0gdmFsdWUpKSB7XG4gICAgdmFyIHJldCA9IHZhbHVlLmluc3BlY3QocmVjdXJzZVRpbWVzLCBjdHgpO1xuICAgIGlmICghaXNTdHJpbmcocmV0KSkge1xuICAgICAgcmV0ID0gZm9ybWF0VmFsdWUoY3R4LCByZXQsIHJlY3Vyc2VUaW1lcyk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvLyBQcmltaXRpdmUgdHlwZXMgY2Fubm90IGhhdmUgcHJvcGVydGllc1xuICB2YXIgcHJpbWl0aXZlID0gZm9ybWF0UHJpbWl0aXZlKGN0eCwgdmFsdWUpO1xuICBpZiAocHJpbWl0aXZlKSB7XG4gICAgcmV0dXJuIHByaW1pdGl2ZTtcbiAgfVxuXG4gIC8vIExvb2sgdXAgdGhlIGtleXMgb2YgdGhlIG9iamVjdC5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG4gIHZhciB2aXNpYmxlS2V5cyA9IGFycmF5VG9IYXNoKGtleXMpO1xuXG4gIGlmIChjdHguc2hvd0hpZGRlbikge1xuICAgIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWx1ZSk7XG4gIH1cblxuICAvLyBJRSBkb2Vzbid0IG1ha2UgZXJyb3IgZmllbGRzIG5vbi1lbnVtZXJhYmxlXG4gIC8vIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9pZS9kd3c1MnNidCh2PXZzLjk0KS5hc3B4XG4gIGlmIChpc0Vycm9yKHZhbHVlKVxuICAgICAgJiYgKGtleXMuaW5kZXhPZignbWVzc2FnZScpID49IDAgfHwga2V5cy5pbmRleE9mKCdkZXNjcmlwdGlvbicpID49IDApKSB7XG4gICAgcmV0dXJuIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgfVxuXG4gIC8vIFNvbWUgdHlwZSBvZiBvYmplY3Qgd2l0aG91dCBwcm9wZXJ0aWVzIGNhbiBiZSBzaG9ydGN1dHRlZC5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICB2YXIgbmFtZSA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbRnVuY3Rpb24nICsgbmFtZSArICddJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9XG4gICAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ2RhdGUnKTtcbiAgICB9XG4gICAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBiYXNlID0gJycsIGFycmF5ID0gZmFsc2UsIGJyYWNlcyA9IFsneycsICd9J107XG5cbiAgLy8gTWFrZSBBcnJheSBzYXkgdGhhdCB0aGV5IGFyZSBBcnJheVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBhcnJheSA9IHRydWU7XG4gICAgYnJhY2VzID0gWydbJywgJ10nXTtcbiAgfVxuXG4gIC8vIE1ha2UgZnVuY3Rpb25zIHNheSB0aGF0IHRoZXkgYXJlIGZ1bmN0aW9uc1xuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICB2YXIgbiA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgIGJhc2UgPSAnIFtGdW5jdGlvbicgKyBuICsgJ10nO1xuICB9XG5cbiAgLy8gTWFrZSBSZWdFeHBzIHNheSB0aGF0IHRoZXkgYXJlIFJlZ0V4cHNcbiAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBkYXRlcyB3aXRoIHByb3BlcnRpZXMgZmlyc3Qgc2F5IHRoZSBkYXRlXG4gIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIERhdGUucHJvdG90eXBlLnRvVVRDU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBlcnJvciB3aXRoIG1lc3NhZ2UgZmlyc3Qgc2F5IHRoZSBlcnJvclxuICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwICYmICghYXJyYXkgfHwgdmFsdWUubGVuZ3RoID09IDApKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyBicmFjZXNbMV07XG4gIH1cblxuICBpZiAocmVjdXJzZVRpbWVzIDwgMCkge1xuICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAncmVnZXhwJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnW09iamVjdF0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuXG4gIGN0eC5zZWVuLnB1c2godmFsdWUpO1xuXG4gIHZhciBvdXRwdXQ7XG4gIGlmIChhcnJheSkge1xuICAgIG91dHB1dCA9IGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpO1xuICB9IGVsc2Uge1xuICAgIG91dHB1dCA9IGtleXMubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpO1xuICAgIH0pO1xuICB9XG5cbiAgY3R4LnNlZW4ucG9wKCk7XG5cbiAgcmV0dXJuIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSkge1xuICBpZiAoaXNVbmRlZmluZWQodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgndW5kZWZpbmVkJywgJ3VuZGVmaW5lZCcpO1xuICBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdmFyIHNpbXBsZSA9ICdcXCcnICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpLnJlcGxhY2UoL15cInxcIiQvZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpICsgJ1xcJyc7XG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKHNpbXBsZSwgJ3N0cmluZycpO1xuICB9XG4gIGlmIChpc051bWJlcih2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdudW1iZXInKTtcbiAgaWYgKGlzQm9vbGVhbih2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdib29sZWFuJyk7XG4gIC8vIEZvciBzb21lIHJlYXNvbiB0eXBlb2YgbnVsbCBpcyBcIm9iamVjdFwiLCBzbyBzcGVjaWFsIGNhc2UgaGVyZS5cbiAgaWYgKGlzTnVsbCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCdudWxsJywgJ251bGwnKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRFcnJvcih2YWx1ZSkge1xuICByZXR1cm4gJ1snICsgRXJyb3IucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpICsgJ10nO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpIHtcbiAgdmFyIG91dHB1dCA9IFtdO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eSh2YWx1ZSwgU3RyaW5nKGkpKSkge1xuICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cyxcbiAgICAgICAgICBTdHJpbmcoaSksIHRydWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0cHV0LnB1c2goJycpO1xuICAgIH1cbiAgfVxuICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKCFrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIGtleSwgdHJ1ZSkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSkge1xuICB2YXIgbmFtZSwgc3RyLCBkZXNjO1xuICBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih2YWx1ZSwga2V5KSB8fCB7IHZhbHVlOiB2YWx1ZVtrZXldIH07XG4gIGlmIChkZXNjLmdldCkge1xuICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXIvU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbR2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tTZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFoYXNPd25Qcm9wZXJ0eSh2aXNpYmxlS2V5cywga2V5KSkge1xuICAgIG5hbWUgPSAnWycgKyBrZXkgKyAnXSc7XG4gIH1cbiAgaWYgKCFzdHIpIHtcbiAgICBpZiAoY3R4LnNlZW4uaW5kZXhPZihkZXNjLnZhbHVlKSA8IDApIHtcbiAgICAgIGlmIChpc051bGwocmVjdXJzZVRpbWVzKSkge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIG51bGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RyID0gZm9ybWF0VmFsdWUoY3R4LCBkZXNjLnZhbHVlLCByZWN1cnNlVGltZXMgLSAxKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdHIuaW5kZXhPZignXFxuJykgPiAtMSkge1xuICAgICAgICBpZiAoYXJyYXkpIHtcbiAgICAgICAgICBzdHIgPSBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgJyArIGxpbmU7XG4gICAgICAgICAgfSkuam9pbignXFxuJykuc3Vic3RyKDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0ciA9ICdcXG4nICsgc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0NpcmN1bGFyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG4gIGlmIChpc1VuZGVmaW5lZChuYW1lKSkge1xuICAgIGlmIChhcnJheSAmJiBrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICBuYW1lID0gSlNPTi5zdHJpbmdpZnkoJycgKyBrZXkpO1xuICAgIGlmIChuYW1lLm1hdGNoKC9eXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcIiQvKSkge1xuICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyKDEsIG5hbWUubGVuZ3RoIC0gMik7XG4gICAgICBuYW1lID0gY3R4LnN0eWxpemUobmFtZSwgJ25hbWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJylcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyheXCJ8XCIkKS9nLCBcIidcIik7XG4gICAgICBuYW1lID0gY3R4LnN0eWxpemUobmFtZSwgJ3N0cmluZycpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuYW1lICsgJzogJyArIHN0cjtcbn1cblxuXG5mdW5jdGlvbiByZWR1Y2VUb1NpbmdsZVN0cmluZyhvdXRwdXQsIGJhc2UsIGJyYWNlcykge1xuICB2YXIgbnVtTGluZXNFc3QgPSAwO1xuICB2YXIgbGVuZ3RoID0gb3V0cHV0LnJlZHVjZShmdW5jdGlvbihwcmV2LCBjdXIpIHtcbiAgICBudW1MaW5lc0VzdCsrO1xuICAgIGlmIChjdXIuaW5kZXhPZignXFxuJykgPj0gMCkgbnVtTGluZXNFc3QrKztcbiAgICByZXR1cm4gcHJldiArIGN1ci5yZXBsYWNlKC9cXHUwMDFiXFxbXFxkXFxkP20vZywgJycpLmxlbmd0aCArIDE7XG4gIH0sIDApO1xuXG4gIGlmIChsZW5ndGggPiA2MCkge1xuICAgIHJldHVybiBicmFjZXNbMF0gK1xuICAgICAgICAgICAoYmFzZSA9PT0gJycgPyAnJyA6IGJhc2UgKyAnXFxuICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgb3V0cHV0LmpvaW4oJyxcXG4gICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgYnJhY2VzWzFdO1xuICB9XG5cbiAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyAnICcgKyBvdXRwdXQuam9pbignLCAnKSArICcgJyArIGJyYWNlc1sxXTtcbn1cblxuXG4vLyBOT1RFOiBUaGVzZSB0eXBlIGNoZWNraW5nIGZ1bmN0aW9ucyBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBgaW5zdGFuY2VvZmBcbi8vIGJlY2F1c2UgaXQgaXMgZnJhZ2lsZSBhbmQgY2FuIGJlIGVhc2lseSBmYWtlZCB3aXRoIGBPYmplY3QuY3JlYXRlKClgLlxuZnVuY3Rpb24gaXNBcnJheShhcikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcik7XG59XG5leHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuXG5mdW5jdGlvbiBpc0Jvb2xlYW4oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnYm9vbGVhbic7XG59XG5leHBvcnRzLmlzQm9vbGVhbiA9IGlzQm9vbGVhbjtcblxuZnVuY3Rpb24gaXNOdWxsKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGwgPSBpc051bGw7XG5cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbE9yVW5kZWZpbmVkID0gaXNOdWxsT3JVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5leHBvcnRzLmlzTnVtYmVyID0gaXNOdW1iZXI7XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N0cmluZyc7XG59XG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XG5cbmZ1bmN0aW9uIGlzU3ltYm9sKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCc7XG59XG5leHBvcnRzLmlzU3ltYm9sID0gaXNTeW1ib2w7XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG5leHBvcnRzLmlzVW5kZWZpbmVkID0gaXNVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKHJlKSB7XG4gIHJldHVybiBpc09iamVjdChyZSkgJiYgb2JqZWN0VG9TdHJpbmcocmUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cbmV4cG9ydHMuaXNSZWdFeHAgPSBpc1JlZ0V4cDtcblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG5cbmZ1bmN0aW9uIGlzRGF0ZShkKSB7XG4gIHJldHVybiBpc09iamVjdChkKSAmJiBvYmplY3RUb1N0cmluZyhkKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuZXhwb3J0cy5pc0RhdGUgPSBpc0RhdGU7XG5cbmZ1bmN0aW9uIGlzRXJyb3IoZSkge1xuICByZXR1cm4gaXNPYmplY3QoZSkgJiZcbiAgICAgIChvYmplY3RUb1N0cmluZyhlKSA9PT0gJ1tvYmplY3QgRXJyb3JdJyB8fCBlIGluc3RhbmNlb2YgRXJyb3IpO1xufVxuZXhwb3J0cy5pc0Vycm9yID0gaXNFcnJvcjtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZShhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbCB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnbnVtYmVyJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnIHx8ICAvLyBFUzYgc3ltYm9sXG4gICAgICAgICB0eXBlb2YgYXJnID09PSAndW5kZWZpbmVkJztcbn1cbmV4cG9ydHMuaXNQcmltaXRpdmUgPSBpc1ByaW1pdGl2ZTtcblxuZXhwb3J0cy5pc0J1ZmZlciA9IHJlcXVpcmUoJy4vc3VwcG9ydC9pc0J1ZmZlcicpO1xuXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyhvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobyk7XG59XG5cblxuZnVuY3Rpb24gcGFkKG4pIHtcbiAgcmV0dXJuIG4gPCAxMCA/ICcwJyArIG4udG9TdHJpbmcoMTApIDogbi50b1N0cmluZygxMCk7XG59XG5cblxudmFyIG1vbnRocyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLFxuICAgICAgICAgICAgICAnT2N0JywgJ05vdicsICdEZWMnXTtcblxuLy8gMjYgRmViIDE2OjE5OjM0XG5mdW5jdGlvbiB0aW1lc3RhbXAoKSB7XG4gIHZhciBkID0gbmV3IERhdGUoKTtcbiAgdmFyIHRpbWUgPSBbcGFkKGQuZ2V0SG91cnMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldE1pbnV0ZXMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldFNlY29uZHMoKSldLmpvaW4oJzonKTtcbiAgcmV0dXJuIFtkLmdldERhdGUoKSwgbW9udGhzW2QuZ2V0TW9udGgoKV0sIHRpbWVdLmpvaW4oJyAnKTtcbn1cblxuXG4vLyBsb2cgaXMganVzdCBhIHRoaW4gd3JhcHBlciB0byBjb25zb2xlLmxvZyB0aGF0IHByZXBlbmRzIGEgdGltZXN0YW1wXG5leHBvcnRzLmxvZyA9IGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZygnJXMgLSAlcycsIHRpbWVzdGFtcCgpLCBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpKTtcbn07XG5cblxuLyoqXG4gKiBJbmhlcml0IHRoZSBwcm90b3R5cGUgbWV0aG9kcyBmcm9tIG9uZSBjb25zdHJ1Y3RvciBpbnRvIGFub3RoZXIuXG4gKlxuICogVGhlIEZ1bmN0aW9uLnByb3RvdHlwZS5pbmhlcml0cyBmcm9tIGxhbmcuanMgcmV3cml0dGVuIGFzIGEgc3RhbmRhbG9uZVxuICogZnVuY3Rpb24gKG5vdCBvbiBGdW5jdGlvbi5wcm90b3R5cGUpLiBOT1RFOiBJZiB0aGlzIGZpbGUgaXMgdG8gYmUgbG9hZGVkXG4gKiBkdXJpbmcgYm9vdHN0cmFwcGluZyB0aGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIHJld3JpdHRlbiB1c2luZyBzb21lIG5hdGl2ZVxuICogZnVuY3Rpb25zIGFzIHByb3RvdHlwZSBzZXR1cCB1c2luZyBub3JtYWwgSmF2YVNjcmlwdCBkb2VzIG5vdCB3b3JrIGFzXG4gKiBleHBlY3RlZCBkdXJpbmcgYm9vdHN0cmFwcGluZyAoc2VlIG1pcnJvci5qcyBpbiByMTE0OTAzKS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHdoaWNoIG5lZWRzIHRvIGluaGVyaXQgdGhlXG4gKiAgICAgcHJvdG90eXBlLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gc3VwZXJDdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHRvIGluaGVyaXQgcHJvdG90eXBlIGZyb20uXG4gKi9cbmV4cG9ydHMuaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuXG5leHBvcnRzLl9leHRlbmQgPSBmdW5jdGlvbihvcmlnaW4sIGFkZCkge1xuICAvLyBEb24ndCBkbyBhbnl0aGluZyBpZiBhZGQgaXNuJ3QgYW4gb2JqZWN0XG4gIGlmICghYWRkIHx8ICFpc09iamVjdChhZGQpKSByZXR1cm4gb3JpZ2luO1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYWRkKTtcbiAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIG9yaWdpbltrZXlzW2ldXSA9IGFkZFtrZXlzW2ldXTtcbiAgfVxuICByZXR1cm4gb3JpZ2luO1xufTtcblxuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3V0aWwvdXRpbC5qc1xuICoqIG1vZHVsZSBpZCA9IDYxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQnVmZmVyKGFyZykge1xuICByZXR1cm4gYXJnICYmIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnXG4gICAgJiYgdHlwZW9mIGFyZy5jb3B5ID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIGFyZy5maWxsID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIGFyZy5yZWFkVUludDggPT09ICdmdW5jdGlvbic7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdXRpbC9zdXBwb3J0L2lzQnVmZmVyQnJvd3Nlci5qc1xuICoqIG1vZHVsZSBpZCA9IDYyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgLy8gaW1wbGVtZW50YXRpb24gZnJvbSBzdGFuZGFyZCBub2RlLmpzICd1dGlsJyBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckN0b3IucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogY3RvcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIG9sZCBzY2hvb2wgc2hpbSBmb3Igb2xkIGJyb3dzZXJzXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICB2YXIgVGVtcEN0b3IgPSBmdW5jdGlvbiAoKSB7fVxuICAgIFRlbXBDdG9yLnByb3RvdHlwZSA9IHN1cGVyQ3Rvci5wcm90b3R5cGVcbiAgICBjdG9yLnByb3RvdHlwZSA9IG5ldyBUZW1wQ3RvcigpXG4gICAgY3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yXG4gIH1cbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA2M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGNvbnNvbGUgPSByZXF1aXJlKFwiY29uc29sZVwiKTtcblxudmFyIHVudGlsZGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9+Li9nLCBmdW5jdGlvbihtKSB7XG4gICAgc3dpdGNoIChtKSB7XG4gICAgICBjYXNlIFwifjBcIjpcbiAgICAgICAgcmV0dXJuIFwiflwiO1xuICAgICAgY2FzZSBcIn4xXCI6XG4gICAgICAgIHJldHVybiBcIi9cIjtcbiAgICB9XG4gICAgdGhyb3coXCJJbnZhbGlkIHRpbGRlIGVzY2FwZTogXCIgKyBtKTtcbiAgfSk7XG59XG5cbnZhciB0cmF2ZXJzZSA9IGZ1bmN0aW9uKG9iaiwgcG9pbnRlciwgdmFsdWUpIHtcbiAgLy8gYXNzZXJ0KGlzQXJyYXkocG9pbnRlcikpXG4gIHZhciBwYXJ0ID0gdW50aWxkZShwb2ludGVyLnNoaWZ0KCkpO1xuICBpZih0eXBlb2Ygb2JqW3BhcnRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdGhyb3coXCJWYWx1ZSBmb3IgcG9pbnRlciAnXCIgKyBwb2ludGVyICsgXCInIG5vdCBmb3VuZC5cIik7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmKHBvaW50ZXIubGVuZ3RoICE9PSAwKSB7IC8vIGtlZXAgdHJhdmVyc2luIVxuICAgIHJldHVybiB0cmF2ZXJzZShvYmpbcGFydF0sIHBvaW50ZXIsIHZhbHVlKTtcbiAgfVxuICAvLyB3ZSdyZSBkb25lXG4gIGlmKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIC8vIGp1c3QgcmVhZGluZ1xuICAgIHJldHVybiBvYmpbcGFydF07XG4gIH1cbiAgLy8gc2V0IG5ldyB2YWx1ZSwgcmV0dXJuIG9sZCB2YWx1ZVxuICB2YXIgb2xkX3ZhbHVlID0gb2JqW3BhcnRdO1xuICBpZih2YWx1ZSA9PT0gbnVsbCkge1xuICAgIGRlbGV0ZSBvYmpbcGFydF07XG4gIH0gZWxzZSB7XG4gICAgb2JqW3BhcnRdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIG9sZF92YWx1ZTtcbn1cblxudmFyIHZhbGlkYXRlX2lucHV0ID0gZnVuY3Rpb24ob2JqLCBwb2ludGVyKSB7XG4gIGlmKHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIpIHtcbiAgICB0aHJvdyhcIkludmFsaWQgaW5wdXQgb2JqZWN0LlwiKTtcbiAgfVxuXG4gIGlmKHBvaW50ZXIgPT09IFwiXCIpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBpZighcG9pbnRlcikge1xuICAgIHRocm93KFwiSW52YWxpZCBKU09OIHBvaW50ZXIuXCIpO1xuICB9XG5cbiAgcG9pbnRlciA9IHBvaW50ZXIuc3BsaXQoXCIvXCIpO1xuICB2YXIgZmlyc3QgPSBwb2ludGVyLnNoaWZ0KCk7XG4gIGlmIChmaXJzdCAhPT0gXCJcIikge1xuICAgIHRocm93KFwiSW52YWxpZCBKU09OIHBvaW50ZXIuXCIpO1xuICB9XG5cbiAgcmV0dXJuIHBvaW50ZXI7XG59XG5cbnZhciBnZXQgPSBmdW5jdGlvbihvYmosIHBvaW50ZXIpIHtcbiAgcG9pbnRlciA9IHZhbGlkYXRlX2lucHV0KG9iaiwgcG9pbnRlcik7XG4gIGlmIChwb2ludGVyLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cbiAgcmV0dXJuIHRyYXZlcnNlKG9iaiwgcG9pbnRlcik7XG59XG5cbnZhciBzZXQgPSBmdW5jdGlvbihvYmosIHBvaW50ZXIsIHZhbHVlKSB7XG4gIHBvaW50ZXIgPSB2YWxpZGF0ZV9pbnB1dChvYmosIHBvaW50ZXIpO1xuICBpZiAocG9pbnRlci5sZW5ndGggPT09IDApIHtcbiAgICB0aHJvdyhcIkludmFsaWQgSlNPTiBwb2ludGVyIGZvciBzZXQuXCIpXG4gIH1cbiAgcmV0dXJuIHRyYXZlcnNlKG9iaiwgcG9pbnRlciwgdmFsdWUpO1xufVxuXG5leHBvcnRzLmdldCA9IGdldFxuZXhwb3J0cy5zZXQgPSBzZXRcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2pzb25wb2ludGVyL2pzb25wb2ludGVyLmpzXG4gKiogbW9kdWxlIGlkID0gNjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZXh0ZW5kXG5cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICB2YXIgdGFyZ2V0ID0ge31cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV1cblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi94dGVuZC9pbW11dGFibGUuanNcbiAqKiBtb2R1bGUgaWQgPSA2NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzWydkYXRlLXRpbWUnXSA9IC9eXFxkezR9LSg/OjBbMC05XXsxfXwxWzAtMl17MX0pLVswLTldezJ9W3RUIF1cXGR7Mn06XFxkezJ9OlxcZHsyfShcXC5cXGQrKT8oW3paXXxbKy1dXFxkezJ9OlxcZHsyfSkkL1xuZXhwb3J0c1snZGF0ZSddID0gL15cXGR7NH0tKD86MFswLTldezF9fDFbMC0yXXsxfSktWzAtOV17Mn0kL1xuZXhwb3J0c1sndGltZSddID0gL15cXGR7Mn06XFxkezJ9OlxcZHsyfSQvXG5leHBvcnRzWydlbWFpbCddID0gL15cXFMrQFxcUyskL1xuZXhwb3J0c1snaXAtYWRkcmVzcyddID0gZXhwb3J0c1snaXB2NCddID0gL14oPzooPzoyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pXFwuKXszfSg/OjI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldPykkL1xuZXhwb3J0c1snaXB2NiddID0gL15cXHMqKCgoWzAtOUEtRmEtZl17MSw0fTopezd9KFswLTlBLUZhLWZdezEsNH18OikpfCgoWzAtOUEtRmEtZl17MSw0fTopezZ9KDpbMC05QS1GYS1mXXsxLDR9fCgoMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKFxcLigyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkpezN9KXw6KSl8KChbMC05QS1GYS1mXXsxLDR9Oil7NX0oKCg6WzAtOUEtRmEtZl17MSw0fSl7MSwyfSl8OigoMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKFxcLigyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkpezN9KXw6KSl8KChbMC05QS1GYS1mXXsxLDR9Oil7NH0oKCg6WzAtOUEtRmEtZl17MSw0fSl7MSwzfSl8KCg6WzAtOUEtRmEtZl17MSw0fSk/OigoMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKFxcLigyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkpezN9KSl8OikpfCgoWzAtOUEtRmEtZl17MSw0fTopezN9KCgoOlswLTlBLUZhLWZdezEsNH0pezEsNH0pfCgoOlswLTlBLUZhLWZdezEsNH0pezAsMn06KCgyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkoXFwuKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSl7M30pKXw6KSl8KChbMC05QS1GYS1mXXsxLDR9Oil7Mn0oKCg6WzAtOUEtRmEtZl17MSw0fSl7MSw1fSl8KCg6WzAtOUEtRmEtZl17MSw0fSl7MCwzfTooKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKShcXC4oMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKXszfSkpfDopKXwoKFswLTlBLUZhLWZdezEsNH06KXsxfSgoKDpbMC05QS1GYS1mXXsxLDR9KXsxLDZ9KXwoKDpbMC05QS1GYS1mXXsxLDR9KXswLDR9OigoMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKFxcLigyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkpezN9KSl8OikpfCg6KCgoOlswLTlBLUZhLWZdezEsNH0pezEsN30pfCgoOlswLTlBLUZhLWZdezEsNH0pezAsNX06KCgyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkoXFwuKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSl7M30pKXw6KSkpKCUuKyk/XFxzKiQvXG5leHBvcnRzWyd1cmknXSA9IC9eW2EtekEtWl1bYS16QS1aMC05Ky0uXSo6W15cXHNdKiQvXG5leHBvcnRzWydjb2xvciddID0gLygjPyhbMC05QS1GYS1mXXszLDZ9KVxcYil8KGFxdWEpfChibGFjayl8KGJsdWUpfChmdWNoc2lhKXwoZ3JheSl8KGdyZWVuKXwobGltZSl8KG1hcm9vbil8KG5hdnkpfChvbGl2ZSl8KG9yYW5nZSl8KHB1cnBsZSl8KHJlZCl8KHNpbHZlcil8KHRlYWwpfCh3aGl0ZSl8KHllbGxvdyl8KHJnYlxcKFxccypcXGIoWzAtOV18WzEtOV1bMC05XXwxWzAtOV1bMC05XXwyWzAtNF1bMC05XXwyNVswLTVdKVxcYlxccyosXFxzKlxcYihbMC05XXxbMS05XVswLTldfDFbMC05XVswLTldfDJbMC00XVswLTldfDI1WzAtNV0pXFxiXFxzKixcXHMqXFxiKFswLTldfFsxLTldWzAtOV18MVswLTldWzAtOV18MlswLTRdWzAtOV18MjVbMC01XSlcXGJcXHMqXFwpKXwocmdiXFwoXFxzKihcXGQ/XFxkJXwxMDAlKStcXHMqLFxccyooXFxkP1xcZCV8MTAwJSkrXFxzKixcXHMqKFxcZD9cXGQlfDEwMCUpK1xccypcXCkpL1xuZXhwb3J0c1snaG9zdG5hbWUnXSA9IC9eKFthLXpBLVowLTldfFthLXpBLVowLTldW2EtekEtWjAtOVxcLV17MCw2MX1bYS16QS1aMC05XSkoXFwuKFthLXpBLVowLTldfFthLXpBLVowLTldW2EtekEtWjAtOVxcLV17MCw2MX1bYS16QS1aMC05XSkpKiQvXG5leHBvcnRzWydhbHBoYSddID0gL15bYS16QS1aXSskL1xuZXhwb3J0c1snYWxwaGFudW1lcmljJ10gPSAvXlthLXpBLVowLTldKyQvXG5leHBvcnRzWydzdHlsZSddID0gL1xccyooLis/KTpcXHMqKFteO10rKTs/L2dcbmV4cG9ydHNbJ3Bob25lJ10gPSAvXlxcKyg/OlswLTldID8pezYsMTR9WzAtOV0kL1xuZXhwb3J0c1sndXRjLW1pbGxpc2VjJ10gPSAvXlswLTldKyhcXC4/WzAtOV0rKT8kL1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvX3NjaGVtYS9mb3JtYXRzLmpzXG4gKiovIiwiLyoqXG4gKiBAY29weXJpZ2h0IDIwMTUsIFByb21ldGhldXMgUmVzZWFyY2gsIExMQ1xuICovXG5cbmltcG9ydCBSZWFjdCAgICAgICAgIGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb3JtQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2l0aEZvcm1WYWx1ZShDb21wb25lbnQpIHtcblxuICBsZXQgZGlzcGxheU5hbWUgPSBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWU7XG5cbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgRm9ybUNvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSBgV2l0aEZvcm1WYWx1ZSgke2Rpc3BsYXlOYW1lfSlgO1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPENvbXBvbmVudFxuICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgIGZvcm1WYWx1ZT17dGhpcy5mb3JtVmFsdWV9XG4gICAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuICB9O1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvV2l0aEZvcm1WYWx1ZS5qc1xuICoqLyIsIi8qKlxuICogQGNvcHlyaWdodCAyMDE1LCBQcm9tZXRoZXVzIFJlc2VhcmNoLCBMTENcbiAqL1xuXG5pbXBvcnQgYXV0b2JpbmQgICAgICAgICAgIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXN9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBpc0FycmF5ICAgICAgICAgICAgZnJvbSAnbG9kYXNoL2xhbmcvaXNBcnJheSc7XG5pbXBvcnQgaXNTdHJpbmcgICAgICAgICAgIGZyb20gJ2xvZGFzaC9sYW5nL2lzU3RyaW5nJztcbmltcG9ydCBtYXBFbGVtZW50ICAgICAgICAgZnJvbSAnLi9tYXBFbGVtZW50JztcbmltcG9ydCBDb21wb25lbnQgICAgICAgICAgZnJvbSAnLi9Db21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWdhY3lGaWVsZHNldCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAuLi5Db21wb25lbnQucHJvcFR5cGVzLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBjb21wb25lbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSlcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbXBvbmVudDogJ2RpdidcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjaGlsZHJlbiwgY29tcG9uZW50OiBDb21wb25lbnQsIC4uLnByb3BzfSA9IHRoaXMucHJvcHM7XG4gICAgY2hpbGRyZW4gPSBtYXBFbGVtZW50KGNoaWxkcmVuLCB0aGlzLl9wcm9wYWdhdGVGb3JtVmFsdWUpO1xuICAgIHJldHVybiA8Q29tcG9uZW50PntjaGlsZHJlbn08L0NvbXBvbmVudD47XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgX3Byb3BhZ2F0ZUZvcm1WYWx1ZShlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5wcm9wcyAmJiBlbGVtZW50LnByb3BzLnNlbGVjdEZvcm1WYWx1ZSAmJiAhZWxlbWVudC5wcm9wcy5mb3JtVmFsdWUpIHtcbiAgICAgIGxldCBmb3JtVmFsdWUgPSB0aGlzLnByb3BzLmZvcm1WYWx1ZTtcbiAgICAgIGxldCBzZWxlY3RGb3JtVmFsdWUgPSBlbGVtZW50LnByb3BzLnNlbGVjdEZvcm1WYWx1ZTtcbiAgICAgIGlmIChpc1N0cmluZyhzZWxlY3RGb3JtVmFsdWUpIHx8IGlzQXJyYXkoc2VsZWN0Rm9ybVZhbHVlKSkge1xuICAgICAgICBmb3JtVmFsdWUgPSBmb3JtVmFsdWUuc2VsZWN0KHNlbGVjdEZvcm1WYWx1ZSk7XG4gICAgICB9XG4gICAgICBlbGVtZW50ID0gUmVhY3QuY2xvbmVFbGVtZW50KGVsZW1lbnQsIHtmb3JtVmFsdWV9KTtcbiAgICAgIHJldHVybiBbZmFsc2UsIGVsZW1lbnRdO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvTGVnYWN5RmllbGRzZXQuanNcbiAqKi8iLCIvKipcbiAqIEBjb3B5cmlnaHQgMjAxNSwgUHJvbWV0aGV1cyBSZXNlYXJjaCwgTExDXG4gKi9cblxuaW1wb3J0IFJlYWN0ICAgIGZyb20gJ3JlYWN0JztcbmltcG9ydCBpc0FycmF5ICBmcm9tICdsb2Rhc2gvbGFuZy9pc0FycmF5JztcblxuLyoqXG4gKiBNYXAgUmVhY3QgYGVsZW1lbnRgIHN0cnVjdHVyZSBvdmVyIGBmdW5jYC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFwRWxlbWVudChlbGVtZW50LCBmdW5jKSB7XG4gIHJldHVybiBSZWFjdC5DaGlsZHJlbi5tYXAoZWxlbWVudCwgZnVuY3Rpb24oZWwpIHtcbiAgICBsZXQgcmVjdXJzZSA9IHRydWU7XG4gICAgZWwgPSBmdW5jKGVsKTtcbiAgICBpZiAoaXNBcnJheShlbCkpIHtcbiAgICAgIHJlY3Vyc2UgPSBlbFswXTtcbiAgICAgIGVsID0gZWxbMV07XG4gICAgfVxuICAgIGlmIChyZWN1cnNlICYmIGVsICYmIGVsLnByb3BzICYmIGVsLnByb3BzLmNoaWxkcmVuKSB7XG4gICAgICBlbCA9IFJlYWN0LmNsb25lRWxlbWVudChlbCwge1xuICAgICAgICBjaGlsZHJlbjogUmVhY3QuQ2hpbGRyZW4ubWFwKFxuICAgICAgICAgIGVsLnByb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgICAgICByZXR1cm4gbWFwRWxlbWVudChjaGlsZCwgZnVuYyk7XG4gICAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZWw7XG4gIH0pO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbWFwRWxlbWVudC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=