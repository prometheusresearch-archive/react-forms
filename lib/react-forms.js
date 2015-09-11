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
	
	var _Value2 = __webpack_require__(24);
	
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
	
	var _ErrorList2 = __webpack_require__(22);
	
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
	
	var _ErrorList = __webpack_require__(22);
	
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

	/* WEBPACK VAR INJECTION */(function(console) {/**
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
	
	var _lodashFunctionDebounce = __webpack_require__(19);
	
	var _lodashFunctionDebounce2 = _interopRequireDefault(_lodashFunctionDebounce);
	
	var _emptyFunction = __webpack_require__(21);
	
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
	      console.log('_finalizeOnChange');
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ },
/* 18 */
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13),
	    now = __webpack_require__(20);
	
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
/* 20 */
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	module.exports = function () {};
	
	if ('production' != process.env.NODE_ENV) {
	  Object.freeze(module.exports);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

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
	
	var _Error = __webpack_require__(23);
	
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
/* 23 */
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
/* 24 */
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
	
	var _emptyFunction = __webpack_require__(21);
	
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

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
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(5), __webpack_require__(18)))

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

	var console = __webpack_require__(18);
	
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmI2OWIzNTVkZTg1MGM1Nzk2ZWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9GaWVsZHNldC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL34vaW52YXJpYW50L2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tleVBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvbGFuZy9pc1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvbGFuZy9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2dldE5hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9sYW5nL2lzTmF0aXZlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2xhbmcvaXNGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9sYW5nL2lzT2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2lzTGVuZ3RoLmpzIiwid2VicGFjazovLy8uL3NyYy9GaWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2F1dG9iaW5kLWRlY29yYXRvci9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0lucHV0LmpzIiwid2VicGFjazovLy8uL34vbm9kZS1saWJzLWJyb3dzZXIvbW9jay9jb25zb2xlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2Z1bmN0aW9uL2RlYm91bmNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2RhdGUvbm93LmpzIiwid2VicGFjazovLy8uL34vZW1wdHkvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Vycm9yTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ZhbHVlLmpzIiwid2VicGFjazovLy8uL34vbWVtb2l6ZS1kZWNvcmF0b3IvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2xhbmcvY2xvbmVEZWVwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2Jhc2VDbG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9hcnJheUNvcHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYXJyYXlFYWNoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2Jhc2VBc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUNvcHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvaXNBcnJheUxpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvZ2V0TGVuZ3RoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2Jhc2VQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9zaGltS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9sYW5nL2lzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2lzSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvb2JqZWN0L2tleXNJbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlRm9yT3duLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2Jhc2VGb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvY3JlYXRlQmFzZUZvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC90b09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9pbml0Q2xvbmVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9pbml0Q2xvbmVCeVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9idWZmZXJDbG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9pbml0Q2xvbmVPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYmluZENhbGxiYWNrLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3V0aWxpdHkvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvb2JqZWN0L2dldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL3RvUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvb2JqZWN0L3NldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9pc0tleS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2NoZW1hLmpzIiwid2VicGFjazovLy8uL3NyYy9fc2NoZW1hL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZ2VuZXJhdGUtb2JqZWN0LXByb3BlcnR5L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vaXMtcHJvcGVydHkvaXMtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9nZW5lcmF0ZS1mdW5jdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3V0aWwvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9+L3V0aWwvc3VwcG9ydC9pc0J1ZmZlckJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vanNvbnBvaW50ZXIvanNvbnBvaW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi94dGVuZC9pbW11dGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19zY2hlbWEvZm9ybWF0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvV2l0aEZvcm1WYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGVnYWN5RmllbGRzZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NDbEMyQixDQUFZOzs7O1NBQWhDLFFBQVE7O21DQUNZLEVBQVM7Ozs7U0FBN0IsS0FBSzs7bUNBQ2UsRUFBUzs7OztTQUE3QixLQUFLOzsyQ0FDZSxFQUFpQjs7OztTQUFyQyxhQUFhOztvQ0FDTyxFQUFVOzs7O1NBQXpCLE1BQU07O21DQUNTLEVBQVM7Ozs7U0FBN0IsS0FBSzs7dUNBQ2UsRUFBYTs7OztTQUFqQyxTQUFTOzs0Q0FFVyxFQUFrQjs7OztTQUF0QyxjQUFjLCtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDUlUsQ0FBTzs7Ozt1Q0FDUCxDQUFhOzs7O0tBRXZCLFFBQVE7YUFBUixRQUFROztZQUFSLFFBQVE7MkJBQVIsUUFBUTs7Z0NBQVIsUUFBUTs7O2dCQUFSLFFBQVE7O1lBWXJCLGtCQUFHO29CQUNnQixJQUFJLENBQUMsS0FBSztXQUE1QixJQUFJLFVBQUosSUFBSTs7V0FBSyxLQUFLOztBQUNuQixjQUFPLGlDQUFDLElBQUksRUFBSyxLQUFLLENBQUksQ0FBQztNQUM1Qjs7O3lCQVpJLHVCQUFVLFNBQVM7QUFDdEIsZUFBUSxFQUFFLGlCQUFVLElBQUk7QUFDeEIsV0FBSSxFQUFFLGlCQUFVLFNBQVMsQ0FBQyxDQUFDLGlCQUFVLE1BQU0sRUFBRSxpQkFBVSxJQUFJLENBQUMsQ0FBQzs7Ozs7WUFHekM7QUFDcEIsV0FBSSxFQUFFLEtBQUs7TUFDWjs7OztVQVZrQixRQUFROzs7c0JBQVIsUUFBUTs7Ozs7OztBQ1A3QixtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NDSStCLENBQU87Ozs7c0NBQ1AsQ0FBVzs7OztvQ0FDWCxDQUFXOzs7O0FBRW5DLEtBQU0sWUFBWSxHQUFHO0FBQzFCLFlBQVMsRUFBRSxpQkFBVSxNQUFNO0VBQzVCLENBQUM7OztBQUVGLEtBQUksY0FBYyxHQUFHLGlCQUFVLFNBQVMsQ0FBQyxDQUN2QyxpQkFBVSxLQUFLLEVBQ2YsaUJBQVUsTUFBTSxFQUNoQixpQkFBVSxNQUFNLEVBQ2hCLGlCQUFVLElBQUksQ0FDZixDQUFDLENBQUM7Ozs7Ozs7OztLQVFrQixTQUFTO2FBQVQsU0FBUzs7WUFBVCxTQUFTOzJCQUFULFNBQVM7O2dDQUFULFNBQVM7OztnQkFBVCxTQUFTOztZQTBCYiwyQkFBRztBQUNoQixjQUFPLEVBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQztNQUNwQzs7O1VBRVksZUFBRztBQUNkLFdBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDOztBQUUvRCxtQ0FDRSxTQUFTLEVBQ1QsOERBQThELEdBQzlELGtEQUFrRCxHQUNsRCw4Q0FBOEMsRUFDOUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQ3RELENBQUM7O0FBRUYsV0FBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7Ozs7QUFJN0QsV0FBSSxNQUFNLElBQUksTUFBTSxLQUFLLElBQUksRUFBRTtBQUM3QixlQUFNLEdBQUcsMEJBQVEsTUFBTSxDQUFDLENBQUM7QUFDekIsa0JBQVMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDOztBQUVELGNBQU8sU0FBUyxDQUFDO01BQ2xCOzs7WUFqRGtCOzs7O0FBSWpCLGdCQUFTLEVBQUUsaUJBQVUsTUFBTTs7Ozs7OztBQU8zQixhQUFNLEVBQUUsY0FBYzs7Ozs7OztBQU90QixzQkFBZSxFQUFFLGNBQWM7TUFDaEM7Ozs7WUFFcUIsWUFBWTs7OztZQUNQLFlBQVk7Ozs7VUF4QnBCLFNBQVM7SUFBUyxtQkFBTSxTQUFTOztzQkFBakMsU0FBUyxDOzs7Ozs7QUN6QjlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFxQztBQUNyQztBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTBDLHlCQUF5QixFQUFFO0FBQ3JFO0FBQ0E7O0FBRUEsMkJBQTBCO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNwREE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDRCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw2QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7Ozs7OztzQkN6RWQsT0FBTzs7OzsrQ0FiVCxDQUFzQjs7Ozs4Q0FDdEIsQ0FBcUI7Ozs7c0NBQ3JCLENBQVc7Ozs7QUFFakMsS0FBTSxTQUFTLEdBQUcsUUFBUSxDQUFDOztBQUUzQixVQUFTLFdBQVcsQ0FBQyxDQUFDLEVBQUU7QUFDdEIsT0FBSSxPQUFPLENBQUMsS0FBSyxRQUFRLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUM5QyxNQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNyQjtBQUNELFVBQU8sQ0FBQyxDQUFDO0VBQ1Y7O0FBRWMsVUFBUyxPQUFPLENBQUMsS0FBSyxFQUFFO0FBQ3JDLE9BQUksb0NBQVEsS0FBSyxDQUFDLEVBQUU7QUFDbEIsWUFBTyxLQUFLLENBQUM7SUFDZCxNQUFNLElBQUkscUNBQVMsS0FBSyxDQUFDLEVBQUU7QUFDMUIsU0FBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO0FBQzdCLFlBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7TUFDM0QsTUFBTTtBQUNMLFlBQUssR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO01BQzlCO0FBQ0QsWUFBTyxLQUFLLENBQUM7SUFDZCxNQUFNLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO0FBQ3BDLFlBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQixNQUFNO0FBQ0wsaUNBQ0UsS0FBSyxFQUNMLCtEQUErRCxFQUMvRCxLQUFLLENBQ04sQ0FBQztJQUNIO0VBQ0Y7Ozs7Ozs7O0FDcENEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLGNBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDWEE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUIsa0JBQWtCLEVBQUU7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3ZDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLE9BQU87QUFDbEIsY0FBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNERBQTJEO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUMvQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLEVBQUU7QUFDYixjQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQ2ZpQyxFQUFvQjs7OztrQ0FDcEIsQ0FBTzs7OztrQ0FDUCxFQUFTOzs7O3NDQUNULEVBQWE7Ozs7dUNBQ2IsQ0FBYTs7OztBQUU5QyxVQUFTLEtBQUssQ0FBQyxJQUFPLEVBQUU7T0FBUixLQUFLLEdBQU4sSUFBTyxDQUFOLEtBQUs7O0FBQ25CLFVBQU8sS0FBSyxJQUFJOzs7S0FBUSxLQUFLO0lBQVMsQ0FBQztFQUN4Qzs7S0FFb0IsS0FBSzthQUFMLEtBQUs7O2dCQUFMLEtBQUs7O3lCQUduQix1QkFBVSxTQUFTO0FBQ3RCLFlBQUssRUFBRSxpQkFBVSxNQUFNO0FBQ3ZCLGVBQVEsRUFBRSxpQkFBVSxPQUFPO0FBQzNCLFdBQUksRUFBRSxpQkFBVSxTQUFTLENBQUMsQ0FBQyxpQkFBVSxNQUFNLEVBQUUsaUJBQVUsSUFBSSxDQUFDLENBQUM7QUFDN0QsWUFBSyxFQUFFLGlCQUFVLFNBQVMsQ0FBQyxDQUFDLGlCQUFVLE1BQU0sRUFBRSxpQkFBVSxJQUFJLENBQUMsQ0FBQztBQUM5RCxnQkFBUyxFQUFFLGlCQUFVLFNBQVMsQ0FBQyxDQUFDLGlCQUFVLE1BQU0sRUFBRSxpQkFBVSxJQUFJLENBQUMsQ0FBQzs7Ozs7WUFHOUM7QUFDcEIsZUFBUSxFQUFFLHVEQUFPLElBQUksRUFBQyxNQUFNLEdBQUc7QUFDL0IsWUFBSyxFQUFMLEtBQUs7QUFDTCxnQkFBUztBQUNULFdBQUksRUFBRSxLQUFLO01BQ1o7Ozs7QUFFVSxZQWxCUSxLQUFLLENBa0JaLEtBQUssRUFBRTsyQkFsQkEsS0FBSzs7QUFtQnRCLGdDQW5CaUIsS0FBSyw2Q0FtQmhCLEtBQUssRUFBRTtBQUNiLFNBQUksQ0FBQyxLQUFLLEdBQUcsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUM7SUFDN0I7O3lCQXJCa0IsS0FBSzs7WUF1QmxCLGtCQUFHO29CQUNrQyxJQUFJLENBQUMsS0FBSztXQUE5QyxJQUFJLFVBQUosSUFBSTtXQUFFLFNBQVMsVUFBVCxTQUFTO1dBQUUsS0FBSyxVQUFMLEtBQUs7V0FBRSxRQUFRLFVBQVIsUUFBUTtXQUNoQyxLQUFLLEdBQUksSUFBSSxDQUFDLEtBQUssQ0FBbkIsS0FBSzt3QkFDb0IsSUFBSSxDQUFDLFNBQVM7V0FBdkMsTUFBTSxjQUFOLE1BQU07V0FBRSxLQUFLLGNBQUwsS0FBSztXQUFFLE1BQU0sY0FBTixNQUFNOztBQUMxQixXQUFJLFVBQVUsR0FBRyxLQUFLLElBQUksTUFBTSxDQUFDLGVBQWUsQ0FBQztBQUNqRCxlQUFRLEdBQUcsbUJBQU0sWUFBWSxDQUMzQixtQkFBTSxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUM3QixFQUFDLEtBQUssRUFBTCxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDO0FBQ3BDLFdBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDN0MsY0FDRTtBQUFDLGFBQUk7V0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU87U0FDeEIsaUNBQUMsS0FBSyxJQUFDLEtBQUssRUFBRSxLQUFNLEVBQUMsTUFBTSxFQUFFLE1BQU8sR0FBRztTQUN0QyxRQUFRO1NBQ1IsVUFBVSxJQUNULGlDQUFDLFNBQVMsSUFBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVUsR0FBRztRQUNyQyxDQUNQO01BQ0g7Ozs7WUFHSyxrQkFBRztBQUNQLFdBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztNQUM5Qjs7OztZQUdPLGtCQUFDLENBQUMsRUFBRTtBQUNWLFdBQUksS0FBSyxhQUFDO0FBQ1YsV0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7QUFDakQsVUFBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO0FBQ3BCLGNBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUN2QixhQUFJLEtBQUssS0FBSyxFQUFFLEVBQUU7QUFDaEIsZ0JBQUssR0FBRyxTQUFTLENBQUM7VUFDbkI7UUFDRixNQUFNO0FBQ0wsY0FBSyxHQUFHLENBQUMsQ0FBQztRQUNYO0FBQ0QsV0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO0FBQzdCLFdBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO01BQzlCOzs7VUE3RGtCLEtBQUs7OztzQkFBTCxLQUFLOzs7Ozs7O0FDZDFCOztBQUVBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0VBQWlFLGFBQWE7QUFDOUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQzNGK0IsRUFBb0I7Ozs7a0NBQ3BCLENBQU87Ozs7bURBQ1AsRUFBMEI7Ozs7MENBQzFCLEVBQWdCOzs7Ozs7OztLQUsxQixLQUFLO2FBQUwsS0FBSzs7Z0JBQUwsS0FBSzs7WUFFTDtBQUNqQixXQUFJLEVBQUUsaUJBQVUsU0FBUyxDQUFDLENBQUMsaUJBQVUsTUFBTSxFQUFFLGlCQUFVLElBQUksQ0FBQyxDQUFDO0FBQzdELGVBQVEsRUFBRSxpQkFBVSxNQUFNO0FBQzFCLFlBQUssRUFBRSxpQkFBVSxHQUFHO0FBQ3BCLGVBQVEsRUFBRSxpQkFBVSxJQUFJO01BQ3pCOzs7O1lBRXFCO0FBQ3BCLFdBQUksRUFBRSxPQUFPO0FBQ2IsZUFBUSxFQUFFLEdBQUc7QUFDYixlQUFRLDRCQUFlO01BQ3hCOzs7O0FBRVUsWUFmUSxLQUFLLENBZVosS0FBSyxFQUFFOzJCQWZBLEtBQUs7O0FBZ0J0QixnQ0FoQmlCLEtBQUssNkNBZ0JoQixLQUFLLEVBQUU7QUFDYixTQUFJLENBQUMsS0FBSyxHQUFHLEVBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUMsQ0FBQztBQUNsQyxTQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztBQUNoQyxTQUFJLENBQUMsMEJBQTBCLEdBQUcsS0FBSyxDQUFDLFFBQVEsR0FDOUMseUNBQVMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQzNELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckM7O3lCQXRCa0IsS0FBSzs7WUF3QmxCLGtCQUFHO29CQUNrRCxJQUFJLENBQUMsS0FBSztXQUE5RCxJQUFJLFVBQUosSUFBSTtXQUFZLGVBQWUsVUFBekIsUUFBUTtXQUFtQixLQUFLLFVBQUwsS0FBSzs7V0FBSyxLQUFLOztBQUNyRCxXQUFJLGVBQWUsRUFBRTtBQUNuQixjQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDMUI7QUFDRCxjQUNFLGlDQUFDLElBQUksZUFDQyxLQUFLO0FBQ1QsY0FBSyxFQUFFLEtBQU07QUFDYixpQkFBUSxFQUFFLElBQUksQ0FBQyxRQUFTO0FBQ3hCLGVBQU0sRUFBRSxJQUFJLENBQUMsTUFBTyxJQUFHLENBQ3pCO01BQ0g7OztZQUV3QixtQ0FBQyxTQUFTLEVBQUU7QUFDbkMsV0FBSSxTQUFTLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxjQUFjLEVBQUU7QUFDM0MsYUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCO0FBQ0QsV0FBSSxTQUFTLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO0FBQzlDLGFBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0FBQ3pCLGFBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUN2QixhQUFJLENBQUMsMEJBQTBCLEdBQUcsU0FBUyxDQUFDLFFBQVEsR0FDbEQseUNBQVMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQy9ELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckM7TUFDRjs7O1lBRW1CLGdDQUFHO0FBQ3JCLFdBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0FBQ3pCLFdBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztNQUN4Qjs7O1lBRWdCLDJCQUFDLEtBQUssRUFBRTtBQUN2QixXQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsS0FBSyxFQUFMLEtBQUssRUFBQyxDQUFDLENBQUM7QUFDdkIsV0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7QUFDNUIsV0FBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7TUFDbkM7OztZQUVnQiw2QkFBRztBQUNsQixjQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDakMsV0FBSSxJQUFJLENBQUMsY0FBYyxLQUFLLFNBQVMsRUFBRTtBQUNyQyxhQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO0FBQ2hDLGFBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO0FBQ2hDLGFBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCO01BQ0Y7OztZQUVjLDJCQUFHO0FBQ2hCLFdBQUksSUFBSSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sRUFBRTtBQUMxQyxhQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztBQUNoQyxhQUFJLENBQUMsMEJBQTBCLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDMUM7TUFDRjs7OztZQUdPLGtCQUFDLENBQUMsRUFBRTtBQUNWLFdBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLE9BQU8sSUFBSSxDQUFDLENBQUMsTUFBTSxHQUM5QyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssR0FDZCxDQUFDLENBQUM7QUFDSixXQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7TUFDL0I7Ozs7WUFHSyxrQkFBRztBQUNQLFdBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxTQUFTLEVBQUU7QUFDckMsYUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7QUFDekIsYUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCO01BQ0Y7OztVQTVGa0IsS0FBSztJQUFTLG1CQUFNLFNBQVM7O3NCQUE3QixLQUFLOzs7Ozs7OztBQ1oxQjtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCLDZFQUE2RTtBQUM5RjtBQUNBOzs7Ozs7OztBQ1hBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxTQUFTO0FBQ3BCLFlBQVcsT0FBTztBQUNsQixZQUFXLE9BQU87QUFDbEIsWUFBVyxRQUFRO0FBQ25CO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCO0FBQ0EsWUFBVyxRQUFRO0FBQ25CO0FBQ0EsY0FBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEwQixrQ0FBa0M7QUFDNUQ7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNwTEE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUN2QkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0NGK0IsQ0FBTzs7Ozt1Q0FDUCxDQUFhOzs7O2tDQUNiLEVBQVM7Ozs7S0FFbkIsU0FBUzthQUFULFNBQVM7O1lBQVQsU0FBUzsyQkFBVCxTQUFTOztnQ0FBVCxTQUFTOzs7Z0JBQVQsU0FBUzs7WUE4QnRCLGtCQUFHO29CQUNzRCxJQUFJLENBQUMsS0FBSztXQUFsRSxJQUFJLFVBQUosSUFBSTtXQUFFLEtBQUssVUFBTCxLQUFLO1dBQUUsT0FBTyxVQUFQLE9BQU87V0FBRSxRQUFRLFVBQVIsUUFBUTtXQUFFLFVBQVUsVUFBVixVQUFVOztXQUFLLEtBQUs7O0FBQ3pELFdBQUksU0FBUyxHQUFHLFFBQVEsR0FDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsR0FDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7QUFDM0IsV0FBSSxVQUFVLEtBQUssU0FBUyxFQUFFO0FBQzVCLGtCQUFTLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxlQUFLO2tCQUNoQyxLQUFLLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxJQUFJO1VBQUEsQ0FBQyxDQUFDO1FBQ25FO0FBQ0QsV0FBSSxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtBQUMxQixnQkFBTyxJQUFJLENBQUM7UUFDYjtBQUNELFdBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBQyxLQUFLLEVBQUUsS0FBSztnQkFDckMsaUNBQUMsS0FBSztBQUNKLGNBQUcsRUFBRSxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksR0FBRyxLQUFNO0FBQ2hDLGdCQUFLLEVBQUUsS0FBTTtBQUNiLGtCQUFPLEVBQUUsT0FBUTtBQUNqQixtQkFBUSxFQUFFLFFBQVM7V0FDakI7UUFBQSxDQUNMLENBQUM7QUFDRixjQUFPO0FBQUMsYUFBSTtTQUFLLEtBQUs7U0FBRyxLQUFLO1FBQVEsQ0FBQztNQUN4Qzs7O3lCQWhESSx1QkFBVSxTQUFTOzs7OztBQUt0QixZQUFLLEVBQUUsaUJBQVUsU0FBUyxDQUFDLENBQUMsaUJBQVUsTUFBTSxFQUFFLGlCQUFVLElBQUksQ0FBQyxDQUFDOzs7OztBQUs5RCxlQUFRLEVBQUUsaUJBQVUsSUFBSTs7Ozs7QUFLeEIsaUJBQVUsRUFBRSxpQkFBVSxNQUFNOztBQUU1QixjQUFPLEVBQUUsaUJBQVUsSUFBSTs7QUFFdkIsWUFBSyxFQUFFLGlCQUFVLE1BQU07Ozs7O1lBR0g7QUFDcEIsWUFBSztBQUNMLFdBQUksRUFBRSxLQUFLO01BQ1o7Ozs7VUE1QmtCLFNBQVM7OztzQkFBVCxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O3NCQ0ZOLEtBQUs7Ozs7a0NBRlgsQ0FBTzs7OztBQUVWLFVBQVMsS0FBSyxDQUFDLElBQWlDLEVBQUU7T0FBbEMsS0FBSyxHQUFOLElBQWlDLENBQWhDLEtBQUs7T0FBRSxLQUFLLEdBQWIsSUFBaUMsQ0FBekIsS0FBSztPQUFFLE9BQU8sR0FBdEIsSUFBaUMsQ0FBbEIsT0FBTztPQUFFLFFBQVEsR0FBaEMsSUFBaUMsQ0FBVCxRQUFROztBQUM1RCxPQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7QUFDMUIsVUFBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQzVCO0FBQ0QsT0FBSSxLQUFLLElBQUksUUFBUSxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQ2pDLFlBQU87OztPQUFNLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSzs7T0FBSSxLQUFLLENBQUMsT0FBTztNQUFPLENBQUM7SUFDekQsTUFBTTtBQUNMLFlBQU87OztPQUFNLEtBQUssQ0FBQyxPQUFPO01BQU8sQ0FBQztJQUNuQztFQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0JDbUl1QixXQUFXOzs7Ozs7Ozs2Q0E5SUksRUFBbUI7Ozs7Z0RBQ25CLEVBQXVCOzs7OzRDQUN2QixFQUFtQjs7Ozs0Q0FDbkIsRUFBbUI7Ozs7MENBQ25CLEVBQWdCOzs7O29DQUNoQixDQUFXOzs7O21DQUVYLEVBQVU7O0tBRXBDLEtBQUs7WUFBTCxLQUFLOzJCQUFMLEtBQUs7OztnQkFBTCxLQUFLOztZQUVWLGdCQUFDLEdBQUcsRUFBRTtBQUNWLFdBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLDBCQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDcEQsY0FBTyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO01BQzNDOzs7WUFFRSxhQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDaEIsY0FBTyxDQUFDLElBQUk7QUFDVixtREFBNEMsR0FDNUMsMkNBQTJDLENBQzVDLENBQUM7QUFDRixjQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO01BQ2xDOzs7WUFFSyxnQkFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQ25CLFdBQUksU0FBUyxHQUFHLHNDQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDeEMsV0FBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7QUFDN0Isa0JBQVMsR0FBRyxLQUFLLENBQUM7UUFDbkIsTUFBTTtBQUNMLGtCQUFTLEdBQUcsa0NBQUksU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDakQ7QUFDRCxXQUFJLFFBQVEsR0FBRyxXQUFXLENBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUNqQixTQUFTLEVBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDckIsV0FBSSxDQUFDLEtBQUssRUFBRTtBQUNWLGFBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CO0FBQ0QsY0FBTyxRQUFRLENBQUM7TUFDakI7OztVQS9CVSxLQUFLOzs7OztLQWtDWixTQUFTO2FBQVQsU0FBUzs7QUFLRixZQUxQLFNBQVMsQ0FLRCxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFOzJCQUxwRCxTQUFTOztBQU1YLGdDQU5FLFNBQVMsNkNBTUg7VUFKVixPQUFPLEdBQUcsRUFBRTtVQUNaLE1BQU0sR0FBRyxJQUFJO0FBSVgsU0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDbEIsU0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7QUFDbEIsU0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsU0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsU0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7QUFDekIsU0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsU0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLGVBQUs7Y0FBSSxLQUFLLENBQUMsS0FBSyxLQUFLLE1BQU07TUFBQSxDQUFDLENBQUM7QUFDbkUsU0FBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztJQUNwQzs7VUFmRyxTQUFTO0lBQVMsS0FBSzs7S0FrQnZCLFNBQVM7YUFBVCxTQUFTOztBQUVGLFlBRlAsU0FBUyxDQUVELElBQUksRUFBRSxPQUFPLEVBQUU7MkJBRnZCLFNBQVM7O0FBR1gsZ0NBSEUsU0FBUyw2Q0FHSDtBQUNSLFNBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLFNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLFNBQUksQ0FBQyxNQUFNLEdBQUcsb0JBQWEsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNqRCxTQUFJLENBQUMsS0FBSyxHQUFHLGtDQUFZLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0M7O3lCQVJHLFNBQVM7O1VBVUgsZUFBRztBQUNYLGNBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7TUFDMUI7Ozs7VUFHWSxlQUFHO0FBQ2QsV0FBSSxZQUFZLGFBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFHLENBQUM7QUFDcEQsY0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxlQUFLO2dCQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssWUFBWTtRQUFBLENBQUMsQ0FBQztNQUNuRjs7OztVQUdvQixlQUFHO0FBQ3RCLFdBQUksWUFBWSxhQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBRyxDQUFDO0FBQ3BELFdBQUksTUFBTSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUM7QUFDakMsY0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUNoQyxNQUFNLENBQUMsZUFBSztnQkFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssWUFBWTtRQUFBLENBQUMsQ0FBQztNQUNuRTs7O1VBRVMsZUFBRztBQUNYLFdBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO0FBQzdCLGdCQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDbkIsTUFBTTtBQUNMLGFBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDbkMsZ0JBQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNkLGdCQUFPLElBQUksU0FBUyxDQUNsQixJQUFJLENBQUMsS0FBSyxFQUNWLE9BQU8sQ0FDUixDQUFDO1FBQ0g7TUFDRjs7O1VBdkNHLFNBQVM7SUFBUyxLQUFLOztBQTJDN0IsS0FBTSxtQkFBbUIsR0FBRztBQUMxQixhQUFVLEVBQUUsS0FBSztBQUNqQixXQUFRLEVBQUUsSUFBSTtBQUNkLGVBQVksRUFBRSxJQUFJO0VBQ25CLENBQUM7O0FBRUYsVUFBUyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDOUIsU0FBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxlQUFNLG1CQUFtQixJQUFFLEtBQUssRUFBTCxLQUFLLElBQUUsQ0FBQztFQUNsRTs7QUFFRCxVQUFTLFFBQVEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQy9CLE9BQUksQ0FBQyxNQUFNLEVBQUU7QUFDWCxZQUFPLEVBQUUsQ0FBQztJQUNYO0FBQ0QsT0FBSSxLQUFLLENBQUMsUUFBUSxLQUFLLE1BQU0sSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFO0FBQ2xELFlBQU8sS0FBSyxDQUFDLFdBQVcsQ0FBQztJQUMxQixNQUFNO0FBQ0wsU0FBSSxNQUFNLENBQUMsV0FBVyxLQUFLLFNBQVMsRUFBRTtBQUNwQyxZQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsRUFBRSw2QkFBZ0IsTUFBTSxFQUFFLEVBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDLENBQUM7TUFDbEY7QUFDRCxXQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzFCLFNBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQztBQUNoRCxVQUFLLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNqQyxVQUFLLENBQUMsS0FBSyxFQUFFLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUN2QyxZQUFPLFNBQVMsQ0FBQztJQUNsQjtFQUNGOzs7Ozs7QUFLTSxVQUFTLE9BQU8sQ0FBQyxVQUFVLEVBQUU7QUFDbEMsVUFBTyxVQUFVLFlBQVksS0FBSyxDQUFDO0VBQ3BDOzs7Ozs7QUFLYyxVQUFTLFdBQVcsQ0FDL0IsTUFBTSxFQUlZO09BSGxCLEtBQUsseURBQUcsRUFBRTtPQUNWLFFBQVE7T0FDUixNQUFNLHlEQUFHLEVBQUU7T0FDWCxTQUFTLHlEQUFHLElBQUk7O0FBQ2xCLE9BQUksU0FBUyxLQUFLLElBQUksRUFBRTtBQUN0QixjQUFTLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyQztBQUNELFVBQU8sSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDOzs7Ozs7OztBQzNKbkU7O0FBRUEsb0RBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVA7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSDtBQUNBOzs7Ozs7O0FDMUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLFlBQVcsU0FBUztBQUNwQixZQUFXLEVBQUU7QUFDYixjQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxPQUFNLG1CQUFtQjtBQUN6QixPQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsWUFBVyxRQUFRO0FBQ25CLFlBQVcsU0FBUztBQUNwQixZQUFXLE9BQU87QUFDbEIsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsTUFBTTtBQUNqQixZQUFXLE1BQU07QUFDakIsY0FBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSwyQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSwrQkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7Ozs7Ozs7QUMvSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsWUFBVyxNQUFNO0FBQ2pCLGNBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixZQUFXLFNBQVM7QUFDcEIsY0FBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDckJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLE9BQU87QUFDbEIsY0FBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLE1BQU07QUFDakIsWUFBVyxPQUFPLFdBQVc7QUFDN0IsY0FBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQSx5QkFBd0I7O0FBRXhCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsY0FBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUM1Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLGNBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2RBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLGNBQWEsRUFBRTtBQUNmO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixjQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixjQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3hDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLGNBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EsOEJBQTZCLGtCQUFrQixFQUFFO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2pDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLEVBQUU7QUFDYixZQUFXLE9BQU87QUFDbEIsY0FBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLGNBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUMvREE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsU0FBUztBQUNwQixjQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNoQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsWUFBVyxTQUFTO0FBQ3BCLFlBQVcsU0FBUztBQUNwQixjQUFhLE9BQU87QUFDcEI7QUFDQTs7QUFFQTs7Ozs7OztBQ2hCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsUUFBUTtBQUNuQixjQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDMUJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDYkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGNBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3pCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLE9BQU87QUFDbEIsWUFBVyxRQUFRO0FBQ25CLGNBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzlEQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLFlBQVk7QUFDdkIsY0FBYSxZQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsY0FBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNmQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxTQUFTO0FBQ3BCLFlBQVcsRUFBRTtBQUNiLFlBQVcsT0FBTztBQUNsQixjQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLEVBQUU7QUFDYixjQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDbkJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsWUFBVyxhQUFhO0FBQ3hCLFlBQVcsRUFBRTtBQUNiLGNBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQSxrQkFBaUIsUUFBUSxPQUFPLFNBQVMsRUFBRTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDaENBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsWUFBVyxNQUFNO0FBQ2pCLFlBQVcsT0FBTztBQUNsQixjQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDNUJBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsWUFBVyxhQUFhO0FBQ3hCLFlBQVcsRUFBRTtBQUNiLGNBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0Esa0JBQWlCLFFBQVEsT0FBTyxTQUFTLEVBQUU7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUN0REE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLEVBQUU7QUFDYixZQUFXLE9BQU87QUFDbEIsY0FBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3hCQSxhQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7OzttQ0FFZ0IsRUFBVzs7OztBQUVqQyxVQUFTLGVBQWUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFO0FBQy9DLFVBQU8sZ0JBQ0YsT0FBTztBQUNWLFdBQU0sRUFBRSxJQUFJO0FBQ1osc0JBQWlCLEVBQUUsSUFBSTtBQUN2QixpQkFBWSxFQUFFLElBQUk7QUFDbEIscUJBQWdCLEVBQUUsSUFBSTtBQUN0QixvQkFBZSxFQUFFLElBQUk7QUFDckIsZ0JBQVcsRUFBRSxJQUFJO0FBQ2pCLHFCQUFnQixFQUFFLElBQUk7S0FDdkIsQ0FBQztBQUNGLFVBQU8seUJBQWlCLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztFQUMxQzs7QUFFRCxVQUFTLHNCQUFzQixDQUFDLElBQUksRUFBRTtBQUNwQyxVQUFPLFNBQVMsT0FBTyxDQUFDLE1BQU0sRUFBRTtBQUM5QjtBQUNFLFdBQUksRUFBSixJQUFJO0FBQ0osaUJBQVUsRUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsS0FBSztRQUM3QyxNQUFNLEVBQ1Q7SUFDSCxDQUFDO0VBQ0g7O0FBRU0sVUFBUyxNQUFNLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRTtBQUN6QztBQUNFLFNBQUksRUFBRSxRQUFRO0FBQ2QsZUFBVSxFQUFWLFVBQVU7QUFDVixhQUFRLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBQztjQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVO01BQUEsQ0FBQztBQUN2RSxlQUFVLEVBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLEtBQUs7TUFDN0MsTUFBTSxFQUNUO0VBQ0g7O0FBRU0sVUFBUyxLQUFLLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRTtBQUNuQztBQUNFLFNBQUksRUFBRSxPQUFPO0FBQ2IsVUFBSyxFQUFMLEtBQUs7QUFDTCxlQUFVLEVBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLEtBQUs7TUFDN0MsTUFBTSxFQUNUO0VBQ0g7O0FBRU0sS0FBSSxNQUFNLEdBQUcsc0JBQXNCLENBQUMsUUFBUSxDQUFDLENBQUM7O0FBQzlDLEtBQUksTUFBTSxHQUFHLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7O0FBRTlDLFVBQVMsTUFBTSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUU7QUFDdEMsUUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNsRCxTQUFJLENBQUMsTUFBTSxFQUFFO0FBQ1gsY0FBTyxNQUFNLENBQUM7TUFDZjtBQUNELFdBQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RDO0FBQ0QsVUFBTyxNQUFNLENBQUM7RUFDZjs7QUFFRCxVQUFTLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO0FBQzVCLE9BQUksTUFBTSxFQUFFO0FBQ1YsU0FBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtBQUM1QixXQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsVUFBVSxHQUMvQixNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUN0QixTQUFTLENBQUM7QUFDWixXQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFOztBQUVsQyxrQkFBUztBQUNQLGVBQUksRUFBRSxRQUFRO1lBQ1gsU0FBUztBQUNaLHFCQUFVLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1dBQ2hELENBQUM7UUFDSDtBQUNELGNBQU8sU0FBUyxDQUFDO01BQ2xCLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtBQUNsQyxXQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUU7QUFDaEIsYUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTs7QUFDL0Isa0JBQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztVQUMxQixNQUFNO0FBQ0wsa0JBQU8sTUFBTSxDQUFDLEtBQUssQ0FBQztVQUNyQjtRQUNGLE1BQU07QUFDTCxnQkFBTyxTQUFTLENBQUM7UUFDbEI7TUFDRixNQUFNO0FBQ0wsYUFBTSxJQUFJLEtBQUssQ0FBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFJLEdBQUcsQ0FBRyxDQUFDO01BQ3JEO0lBQ0Y7Ozs7Ozs7QUMzRkgsYUFBWSxDQUFDOztBQUViLEtBQUksTUFBTSxHQUFRLG1CQUFPLENBQUMsRUFBMEIsQ0FBQztBQUNyRCxLQUFJLE1BQU0sR0FBUSxtQkFBTyxDQUFDLEVBQW1CLENBQUM7QUFDOUMsS0FBSSxXQUFXLEdBQUcsbUJBQU8sQ0FBQyxFQUFhLENBQUM7QUFDeEMsS0FBSSxLQUFLLEdBQVMsbUJBQU8sQ0FBQyxFQUFPLENBQUM7QUFDbEMsS0FBSSxPQUFPLEdBQU8sbUJBQU8sQ0FBQyxFQUFXLENBQUM7O0FBRXRDLEtBQUksR0FBRyxHQUFHLFNBQU4sR0FBRyxDQUFZLEdBQUcsRUFBRSxpQkFBaUIsRUFBRSxHQUFHLEVBQUU7QUFDOUMsT0FBSSxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE9BQU8sSUFBSTs7QUFFekMsT0FBSSxLQUFLLEdBQUcsU0FBUixLQUFLLENBQVksR0FBRyxFQUFFO0FBQ3hCLFNBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxFQUFFLE9BQU8sR0FBRztBQUNyQyxTQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLElBQUk7QUFDaEQsWUFBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFTLEdBQUcsRUFBRSxDQUFDLEVBQUU7QUFDOUMsY0FBTyxHQUFHLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUM1QixFQUFFLElBQUksQ0FBQztJQUNUOztBQUVELE9BQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7QUFDcEIsT0FBSSxHQUFHLEVBQUUsT0FBTyxHQUFHOztBQUVuQixNQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO0FBQzNCLE1BQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUM7O0FBRTVCLE9BQUk7QUFDRixZQUFPLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QyxDQUFDLE9BQU8sR0FBRyxFQUFFO0FBQ1osU0FBSSxLQUFLLEdBQUcsaUJBQWlCLENBQUMsR0FBRyxDQUFDLElBQUksaUJBQWlCLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDOUUsWUFBTyxLQUFLLElBQUksSUFBSTtJQUNyQjtFQUNGOztBQUVELEtBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQzs7QUFFekIsS0FBSSxVQUFVLEdBQUcsU0FBYixVQUFVLENBQVksS0FBSyxFQUFFO0FBQy9CLFFBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDekQsT0FBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQ25CLFFBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3JDLFNBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwQixTQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQUU7QUFDeEIsZ0JBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3BDLGdCQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUMvQixNQUFNO0FBQ0wsZ0JBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO01BQ3RDO0lBQ0Y7QUFDRCxVQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDNUI7O0FBRUQsS0FBSSxLQUFLLEdBQUcsRUFBRTs7QUFFZCxNQUFLLENBQUMsR0FBRyxHQUFHLFlBQVc7QUFDckIsVUFBTyxNQUFNO0VBQ2Q7O0FBRUQsTUFBSyxRQUFLLEdBQUcsVUFBUyxJQUFJLEVBQUU7QUFDMUIsVUFBTyxJQUFJLEdBQUMsV0FBVztFQUN4Qjs7QUFFRCxNQUFLLENBQUMsT0FBTyxHQUFHLFVBQVMsSUFBSSxFQUFFO0FBQzdCLFVBQU8sU0FBUyxHQUFDLElBQUksR0FBQyxnQkFBZ0I7RUFDdkM7O0FBRUQsTUFBSyxDQUFDLEtBQUssR0FBRyxVQUFTLElBQUksRUFBRTtBQUMzQixVQUFPLGdCQUFnQixHQUFDLElBQUksR0FBQyxHQUFHO0VBQ2pDOztBQUVELE1BQUssQ0FBQyxNQUFNLEdBQUcsVUFBUyxJQUFJLEVBQUU7QUFDNUIsVUFBTyxTQUFTLEdBQUMsSUFBSSxHQUFDLG1CQUFtQixHQUFDLElBQUksR0FBQyxxQkFBcUIsR0FBQyxJQUFJLEdBQUMsR0FBRztFQUM5RTs7QUFFRCxNQUFLLENBQUMsTUFBTSxHQUFHLFVBQVMsSUFBSSxFQUFFO0FBQzVCLFVBQU8sU0FBUyxHQUFDLElBQUksR0FBQyxlQUFlO0VBQ3RDOztBQUVELE1BQUssQ0FBQyxPQUFPLEdBQUcsVUFBUyxJQUFJLEVBQUU7QUFDN0IsVUFBTyxTQUFTLEdBQUMsSUFBSSxHQUFDLCtCQUErQixHQUFDLElBQUksR0FBQyxRQUFRLEdBQUMsSUFBSSxHQUFDLE1BQU0sR0FBQyxJQUFJLEdBQUMseUJBQXlCLEdBQUMsSUFBSSxHQUFDLHVCQUF1QjtFQUM1STs7QUFFRCxNQUFLLENBQUMsTUFBTSxHQUFHLFVBQVMsSUFBSSxFQUFFO0FBQzVCLFVBQU8sU0FBUyxHQUFDLElBQUksR0FBQyxlQUFlO0VBQ3RDOztBQUVELEtBQUksTUFBTSxHQUFHLFNBQVQsTUFBTSxDQUFZLEtBQUssRUFBRTtBQUMzQixPQUFJLElBQUksR0FBRyxFQUFFO0FBQ2IsUUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDckMsU0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUU7QUFDRCxRQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNwQyxTQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sS0FBSztJQUM5QztBQUNELFVBQU8sSUFBSTtFQUNaOztBQUVELEtBQUksTUFBTSxHQUFHLFNBQVQsTUFBTSxDQUFZLElBQUksRUFBRTtBQUMxQixVQUFPLElBQUksQ0FBQyxJQUFJO0VBQ2pCOztBQUVELEtBQUksT0FBTyxHQUFHLFNBQVYsT0FBTyxDQUFZLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7QUFDMUQsT0FBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE9BQU87QUFDeEQsT0FBSSxLQUFLLEdBQUcsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFFLE9BQU8sRUFBQyxJQUFJLEVBQUM7QUFDekMsT0FBSSxPQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztBQUM1QyxPQUFJLGlCQUFpQixHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztBQUNoRSxPQUFJLFlBQVksR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0FBQ3RELE9BQUksZUFBZSxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7QUFDNUQsT0FBSSxnQkFBZ0IsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7QUFDOUQsT0FBSSxXQUFXLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztBQUNwRCxPQUFJLE1BQU0sR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLEdBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDOztBQUV0QixPQUFJLElBQUksR0FBRyxFQUFFO0FBQ2IsT0FBSSxNQUFNLEdBQUcsU0FBVCxNQUFNLENBQVksSUFBSSxFQUFFO0FBQzFCLFlBQU8sSUFBSSxJQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUUsQ0FBQyxDQUFDO0lBQy9DOztBQUVELE9BQUksZUFBZSxHQUFHLEVBQUU7QUFDeEIsT0FBSSxRQUFRLEdBQUcsU0FBWCxRQUFRLENBQVksQ0FBQyxFQUFFO0FBQ3pCLFNBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sZUFBZSxDQUFDLENBQUMsQ0FBQztBQUNqRCxTQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO0FBQ3pCLFVBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDeEIsb0JBQWUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQ3RCLFlBQU8sQ0FBQztJQUNUOztBQUVELE9BQUksSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQztBQUNoRixPQUFJLE9BQU8sR0FBRyxTQUFWLE9BQU8sR0FBYztBQUN2QixTQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ3BCLFNBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqQixZQUFPLENBQUM7SUFDVDs7QUFFRCxPQUFJLEtBQUssR0FBRyxTQUFSLEtBQUssQ0FBWSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO0FBQzNELFNBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVO0FBQ2hDLFNBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJO0FBQ3BCLFNBQUksS0FBSyxHQUFHLEtBQUs7O0FBRWpCLFNBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QixhQUFRLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQzs7QUFFM0MsU0FBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUM1QixVQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDOztBQUV0QixTQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFOztBQUM3QixpQkFBVSxHQUFHLEVBQUU7QUFDZixXQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFTLElBQUksRUFBRSxDQUFDLEVBQUU7QUFDbkMsbUJBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJO1FBQ3JCLENBQUM7QUFDRixXQUFJLEdBQUcsT0FBTztBQUNkLFlBQUssR0FBRyxJQUFJO01BQ2I7O0FBRUQsU0FBSSxNQUFNLEdBQUcsQ0FBQztBQUNkLFNBQUksS0FBSyxHQUFHLFNBQVIsS0FBSyxDQUFZLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtBQUM3QyxlQUFRLENBQUMsVUFBVSxDQUFDO0FBQ3BCLFdBQUksUUFBUSxLQUFLLElBQUksRUFBRTtBQUNyQixpQkFBUSxDQUFDLG9EQUFvRCxDQUFDO0FBQzlELGFBQUksT0FBTyxFQUFFO0FBQ1gsbUJBQVEsQ0FBQyxnRUFBZ0UsRUFBRSxVQUFVLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxJQUFJLElBQUksRUFBRSxNQUFNLElBQUksT0FBTyxDQUFDO1VBQzVKLE1BQU07QUFDTCxtQkFBUSxDQUFDLHVEQUF1RCxFQUFFLFVBQVUsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLElBQUksT0FBTyxDQUFDO1VBQ3BJO1FBQ0Y7TUFDRjtBQUNELFNBQUksWUFBWSxHQUFHLFNBQWYsWUFBWSxDQUFZLEdBQUcsRUFBRSxNQUFNLEVBQUU7QUFDdkMsZUFBUSxDQUFDLFVBQVUsQ0FBQztBQUNwQixXQUFJLFFBQVEsS0FBSyxJQUFJLEVBQUU7QUFDckIsaUJBQVEsQ0FBQyxvREFBb0QsQ0FBQztBQUM5RCxhQUFJLE9BQU8sRUFBRTtBQUNYLG1CQUFRLENBQUMsZ0VBQWdFLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxJQUFJLE9BQU8sQ0FBQztVQUMzSCxNQUFNO0FBQ0wsbUJBQVEsQ0FBQyx1REFBdUQsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sSUFBSSxPQUFPLENBQUM7VUFDNUc7UUFDRjtNQUNGOztBQUVELFNBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7QUFDMUIsYUFBTSxFQUFFO0FBQ1IsV0FBSSxlQUFlLEVBQUU7QUFDbkIsaUJBQVEsQ0FBQyx3QkFBd0IsRUFBRSxPQUFPLENBQUM7UUFDNUMsTUFBTTtBQUNMLGlCQUFRLENBQUMseUJBQXlCLEVBQUUsT0FBTyxDQUFDO1FBQzdDO0FBQ0QsWUFBSyxDQUFDLGFBQWEsQ0FBQztBQUNwQixlQUFRLENBQUMsVUFBVSxDQUFDO01BQ3JCLE1BQU07QUFDTCxXQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxLQUFLLGlCQUFpQixJQUFJLFlBQVksQ0FBQyxFQUFFO0FBQ2pFLGFBQUksaUJBQWlCLElBQUksWUFBWSxFQUFFO0FBQ3JDLG1CQUFRLENBQUMseUJBQXlCLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1VBQ3ZELE1BQU0sSUFBSSxpQkFBaUIsRUFBRTtBQUM1QixtQkFBUSxDQUFDLCtCQUErQixFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztVQUM3RCxNQUFNLElBQUksWUFBWSxFQUFFO0FBQ3ZCLG1CQUFRLENBQUMsMEJBQTBCLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1VBQ3hEO1FBQ0YsTUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxLQUFLLGdCQUFnQixJQUFJLFdBQVcsQ0FBQyxFQUFFO0FBQ3JFLGFBQUksZ0JBQWdCLElBQUksV0FBVyxFQUFFO0FBQ25DLG1CQUFRLENBQUMseUJBQXlCLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1VBQ3ZELE1BQU0sSUFBSSxnQkFBZ0IsRUFBRTtBQUMzQixtQkFBUSxDQUFDLCtCQUErQixFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztVQUM3RCxNQUFNLElBQUksV0FBVyxFQUFFO0FBQ3RCLG1CQUFRLENBQUMsMEJBQTBCLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1VBQ3hEO1FBQ0YsTUFBTTtBQUNMLGVBQU0sRUFBRTtBQUNSLGFBQUksZUFBZSxFQUFFO0FBQ25CLG1CQUFRLENBQUMsd0JBQXdCLEVBQUUsT0FBTyxDQUFDO1VBQzVDLE1BQU07QUFDTCxtQkFBUSxDQUFDLHlCQUF5QixFQUFFLE9BQU8sQ0FBQztVQUM3QztRQUNGO01BQ0Y7O0FBRUQsU0FBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FDeEIsR0FBRyxDQUFDLFVBQVMsQ0FBQyxFQUFFO0FBQ2YsY0FBTyxLQUFLLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQztNQUNsQyxDQUFDLENBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU07O0FBRXpCLFNBQUksS0FBSyxLQUFLLE1BQU0sRUFBRTtBQUNwQixhQUFNLEVBQUU7QUFDUixlQUFRLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQztBQUMvQixZQUFLLENBQUMsbUJBQW1CLENBQUM7QUFDMUIsZUFBUSxDQUFDLFVBQVUsQ0FBQztNQUNyQjs7QUFFRCxTQUFJLEtBQUssRUFBRTtBQUNULFdBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxLQUFLLEVBQUU7QUFDbEMsaUJBQVEsQ0FBQyx1QkFBdUIsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDN0QsY0FBSyxDQUFDLHNCQUFzQixDQUFDO0FBQzdCLGlCQUFRLENBQUMsR0FBRyxDQUFDO1FBQ2QsTUFBTSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7QUFDL0IsYUFBSSxDQUFDLEdBQUcsT0FBTyxFQUFFO0FBQ2pCLGlCQUFRLENBQUMsMkNBQTJDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0FBQzFGLGNBQUssQ0FBQyxJQUFJLEdBQUMsR0FBRyxHQUFDLENBQUMsR0FBQyxHQUFHLEVBQUUsT0FBTyxHQUFDLEdBQUcsR0FBQyxDQUFDLEdBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQztBQUNoRixpQkFBUSxDQUFDLEdBQUcsQ0FBQztRQUNkO01BQ0Y7O0FBRUQsU0FBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFVBQVUsQ0FBQyxFQUFFO0FBQzNFLFdBQUksSUFBSSxLQUFLLFFBQVEsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMzRixXQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO0FBQ3hCLFdBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFVBQVUsRUFBRTtBQUNyQyxjQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN4QixNQUFNO0FBQ0wsY0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzdCOztBQUVELFdBQUksT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssVUFBVSxFQUFFO0FBQ2xDLGFBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7QUFDeEIsaUJBQVEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUM7QUFDdkQsaUJBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0FBQ3pCLGNBQUssQ0FBQyxVQUFVLEdBQUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxTQUFTLENBQUM7QUFDdkMsaUJBQVEsQ0FBQyxzQ0FBc0MsRUFBRSxDQUFDLENBQUM7QUFDbkQscUJBQVksQ0FBQyxDQUFDLENBQUM7QUFDZixpQkFBUSxDQUFDLEdBQUcsQ0FBQztRQUNkLE1BQU07QUFDTCxpQkFBUSxDQUFDLHFCQUFxQixFQUFFLENBQUMsRUFBRSxPQUFPLENBQUM7QUFDM0MsY0FBSyxDQUFDLFVBQVUsR0FBQyxJQUFJLENBQUMsTUFBTSxHQUFDLFNBQVMsQ0FBQztBQUN2QyxpQkFBUSxDQUFDLEdBQUcsQ0FBQztRQUNkO0FBQ0QsV0FBSSxJQUFJLEtBQUssUUFBUSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQztNQUM3RDs7QUFFRCxTQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQ2hDLFdBQUksV0FBVyxHQUFHLFNBQWQsV0FBVyxDQUFZLEdBQUcsRUFBRTtBQUM5QixnQkFBTyxNQUFNLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxHQUFHLGdCQUFnQjtRQUMvQzs7QUFFRCxXQUFJLGFBQWEsR0FBRyxTQUFoQixhQUFhLENBQWEsR0FBRyxFQUFFO0FBQ2pDLGFBQUksZUFBZSxFQUFFO0FBQ25CLG1CQUFRLENBQUMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztVQUN6RCxNQUFNO0FBQ0wsbUJBQVEsQ0FBQyx5QkFBeUIsRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1VBQzFEO0FBQ0QsYUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsY0FBYyxDQUFDO0FBQ3BILGNBQUssQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDOUQsaUJBQVEsQ0FBQyxXQUFXLENBQUM7QUFDckIsaUJBQVEsQ0FBQyxHQUFHLENBQUM7UUFDZDtBQUNELGVBQVEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxLQUFLLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE1BQU0sQ0FBQztBQUMzRSxlQUFRLENBQUMsaUJBQWlCLENBQUM7QUFDM0IsV0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO0FBQ2hDLGVBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNkLFdBQUksQ0FBQyxNQUFNLEVBQUU7QUFDWCxpQkFBUSxDQUFDLHNCQUFzQixDQUFDO0FBQ2hDLGVBQU0sRUFBRTtRQUNUO01BQ0Y7O0FBRUQsU0FBSSxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQ3BCLFdBQUksSUFBSSxLQUFLLE9BQU8sRUFBRSxRQUFRLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDakUsZUFBUSxDQUFDLHNCQUFzQixFQUFFLE9BQU8sQ0FBQztBQUN6QyxZQUFLLENBQUMsZ0JBQWdCLENBQUM7QUFDdkIsZUFBUSxDQUFDLEdBQUcsQ0FBQztBQUNiLFdBQUksSUFBSSxLQUFLLE9BQU8sRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDO01BQ3BDOztBQUVELFNBQUksSUFBSSxRQUFLLEVBQUU7QUFDYixXQUFJLE9BQU8sR0FBRyxJQUFJLFFBQUssQ0FBQyxJQUFJLENBQUMsVUFBUyxDQUFDLEVBQUU7QUFDdkMsZ0JBQU8sT0FBTyxDQUFDLEtBQUssUUFBUTtRQUM3QixDQUFDOztBQUVGLFdBQUksT0FBTyxHQUFHLE9BQU8sR0FDbkIsVUFBUyxDQUFDLEVBQUU7QUFDVixnQkFBTyxpQkFBaUIsR0FBQyxPQUFPLEdBQUMsR0FBRyxHQUFDLHNCQUFzQixHQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUMsR0FBRztRQUNsRixHQUNELFVBQVMsQ0FBQyxFQUFFO0FBQ1YsZ0JBQU8sT0FBTyxHQUFDLE9BQU8sR0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN6Qzs7QUFFSCxlQUFRLENBQUMsV0FBVyxFQUFFLElBQUksUUFBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDO0FBQ3JFLFlBQUssQ0FBQyx1QkFBdUIsQ0FBQztBQUM5QixlQUFRLENBQUMsR0FBRyxDQUFDO01BQ2Q7O0FBRUQsU0FBSSxJQUFJLENBQUMsWUFBWSxFQUFFO0FBQ3JCLFdBQUksSUFBSSxLQUFLLFFBQVEsRUFBRSxRQUFRLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRW5FLGFBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFTLEdBQUcsRUFBRTtBQUNuRCxhQUFJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQztBQUNqQyxhQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUM7O0FBRTNDLGFBQUksTUFBTSxHQUFHLFNBQVQsTUFBTSxDQUFZLENBQUMsRUFBRTtBQUN2QixrQkFBTyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxHQUFHLGdCQUFnQjtVQUM3Qzs7QUFFRCxhQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDdkIsbUJBQVEsQ0FBQyxrQ0FBa0MsRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQztBQUMzRyxnQkFBSyxDQUFDLHNCQUFzQixDQUFDO0FBQzdCLG1CQUFRLENBQUMsR0FBRyxDQUFDO1VBQ2Q7QUFDRCxhQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtBQUM1QixtQkFBUSxDQUFDLHlCQUF5QixFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDekQsZ0JBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDO0FBQzVDLG1CQUFRLENBQUMsR0FBRyxDQUFDO1VBQ2Q7UUFDRixDQUFDOztBQUVGLFdBQUksSUFBSSxLQUFLLFFBQVEsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDO01BQ3JDOztBQUVELFNBQUksSUFBSSxDQUFDLG9CQUFvQixJQUFJLElBQUksQ0FBQyxvQkFBb0IsS0FBSyxLQUFLLEVBQUU7QUFDcEUsV0FBSSxJQUFJLEtBQUssUUFBUSxFQUFFLFFBQVEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFbkUsV0FBSSxDQUFDLEdBQUcsT0FBTyxFQUFFO0FBQ2pCLFdBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7O0FBRXpCLFdBQUksU0FBUyxHQUFHLFNBQVosU0FBUyxDQUFZLENBQUMsRUFBRTtBQUMxQixnQkFBTyxJQUFJLEdBQUMsR0FBRyxHQUFDLENBQUMsR0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDN0M7O0FBRUQsV0FBSSxNQUFNLEdBQUcsU0FBVCxNQUFNLENBQVksQ0FBQyxFQUFFO0FBQ3ZCLGdCQUFPLEdBQUcsR0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUMsUUFBUSxHQUFDLElBQUksR0FBQyxHQUFHLEdBQUMsQ0FBQyxHQUFDLElBQUk7UUFDaEQ7O0FBRUQsV0FBSSxjQUFjLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUM5RCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQzdELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNOztBQUV6QixlQUFRLENBQUMsMEJBQTBCLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUNoRCwwQ0FBMEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FDeEQsV0FBVyxFQUFFLGNBQWMsQ0FBQzs7QUFFakMsV0FBSSxJQUFJLENBQUMsb0JBQW9CLEtBQUssS0FBSyxFQUFFO0FBQ3ZDLGFBQUksTUFBTSxFQUFFLFFBQVEsQ0FBQyxXQUFXLEVBQUUsT0FBTyxHQUFDLEdBQUcsR0FBQyxJQUFJLEdBQUMsR0FBRyxHQUFDLENBQUMsR0FBQyxJQUFJLENBQUM7QUFDOUQsY0FBSyxDQUFDLDJCQUEyQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksR0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBQyxDQUFDLEdBQUMsR0FBRyxDQUFDO1FBQzlGLE1BQU07QUFDTCxjQUFLLENBQUMsSUFBSSxHQUFDLEdBQUcsR0FBQyxJQUFJLEdBQUMsR0FBRyxHQUFDLENBQUMsR0FBQyxJQUFJLEVBQUUsT0FBTyxHQUFDLEdBQUcsR0FBQyxJQUFJLEdBQUMsR0FBRyxHQUFDLENBQUMsR0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUM7UUFDMUc7O0FBRUQsZUFBUSxDQUNILEdBQUcsQ0FBQyxDQUNOLEdBQUcsQ0FBQzs7QUFFUCxXQUFJLElBQUksS0FBSyxRQUFRLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQztNQUNyQzs7QUFFRCxTQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFDYixXQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQzFELFdBQUksR0FBRyxFQUFFO0FBQ1AsYUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDekIsYUFBSSxDQUFDLEVBQUUsRUFBRTtBQUNQLGdCQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsS0FBSyxDQUFDLElBQUksRUFBRTtBQUN0QyxvQkFBTyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2hCO0FBQ0QsYUFBRSxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDO1VBQzVDO0FBQ0QsYUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUNyQixjQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRTtBQUNiLGlCQUFRLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQztBQUN4QyxjQUFLLENBQUMsa0NBQWtDLENBQUM7QUFDekMsaUJBQVEsQ0FBQyxHQUFHLENBQUM7UUFDZDtNQUNGOztBQUVELFNBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtBQUNaLFdBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDekIsZUFBUSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQztBQUNqQyxZQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUM7QUFDN0MsZUFBUSxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQztBQUN0QyxZQUFLLENBQUMseUJBQXlCLENBQUM7QUFDaEMsZUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUNqQixhQUFhLEVBQUUsSUFBSSxDQUFDLENBQ3RCLEdBQUcsQ0FBQztNQUNOOztBQUVELFNBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtBQUN4QixXQUFJLElBQUksS0FBSyxPQUFPLEVBQUUsUUFBUSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUVqRSxXQUFJLENBQUMsR0FBRyxPQUFPLEVBQUU7QUFDakIsZUFBUSxDQUFDLDBDQUEwQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUN0RSxZQUFLLENBQUMsSUFBSSxHQUFDLEdBQUcsR0FBQyxDQUFDLEdBQUMsR0FBRyxFQUFFLE9BQU8sR0FBQyxHQUFHLEdBQUMsQ0FBQyxHQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUM7QUFDdEUsZUFBUSxDQUFDLEdBQUcsQ0FBQzs7QUFFYixXQUFJLElBQUksS0FBSyxPQUFPLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQztNQUNwQzs7QUFFRCxTQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtBQUMxQixXQUFJLElBQUksS0FBSyxRQUFRLEVBQUUsUUFBUSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ25FLFdBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDekIsV0FBSSxDQUFDLEdBQUcsT0FBTyxFQUFFO0FBQ2pCLGVBQVEsQ0FDTCwwQkFBMEIsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQzFDLDBDQUEwQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQzs7QUFFN0QsYUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBUyxHQUFHLEVBQUU7QUFDeEQsYUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQztBQUNyQixpQkFBUSxDQUFDLG9CQUFvQixFQUFFLENBQUMsRUFBRSxJQUFJLEdBQUMsR0FBRyxHQUFDLENBQUMsR0FBQyxHQUFHLENBQUM7QUFDakQsY0FBSyxDQUFDLElBQUksR0FBQyxHQUFHLEdBQUMsSUFBSSxHQUFDLEdBQUcsR0FBQyxDQUFDLEdBQUMsSUFBSSxFQUFFLE9BQU8sR0FBQyxHQUFHLEdBQUMsSUFBSSxHQUFDLEdBQUcsR0FBQyxDQUFDLEdBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDO0FBQzNHLGlCQUFRLENBQUMsR0FBRyxDQUFDO1FBQ2QsQ0FBQzs7QUFFRixlQUFRLENBQUMsR0FBRyxDQUFDO0FBQ2IsV0FBSSxJQUFJLEtBQUssUUFBUSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUM7TUFDckM7O0FBRUQsU0FBSSxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQ2hCLFdBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQzlCLFdBQUksSUFBSSxLQUFLLFFBQVEsRUFBRSxRQUFRLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDbkUsZUFBUSxDQUFDLHVCQUF1QixFQUFFLENBQUMsRUFBRSxPQUFPLENBQUM7QUFDN0MsWUFBSyxDQUFDLGtCQUFrQixDQUFDO0FBQ3pCLGVBQVEsQ0FBQyxHQUFHLENBQUM7QUFDYixXQUFJLElBQUksS0FBSyxRQUFRLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQztNQUNyQzs7QUFFRCxTQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDZCxXQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFTLEdBQUcsRUFBRTtBQUMvQixjQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQztRQUM1QyxDQUFDO01BQ0g7O0FBRUQsU0FBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO0FBQ25DLFdBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7O0FBRXpCLFdBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVMsR0FBRyxFQUFFLENBQUMsRUFBRTtBQUNsQyxhQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDWCxtQkFBUSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQztVQUNsQyxNQUFNO0FBQ0wsbUJBQVEsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsQ0FDbkMsYUFBYSxFQUFFLElBQUksQ0FBQztVQUN4QjtBQUNELGNBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO1FBQ3hDLENBQUM7QUFDRixXQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFTLEdBQUcsRUFBRSxDQUFDLEVBQUU7QUFDbEMsYUFBSSxDQUFDLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUNyQixDQUFDO0FBQ0YsZUFBUSxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQztBQUN0QyxZQUFLLENBQUMsa0JBQWtCLENBQUM7QUFDekIsZUFBUSxDQUFDLEdBQUcsQ0FBQztNQUNkOztBQUVELFNBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtBQUNuQyxXQUFJLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ3pCLFdBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7O0FBRTdCLGVBQVEsQ0FDTCxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FDeEIsWUFBWSxFQUFFLE1BQU0sQ0FBQzs7QUFFeEIsV0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBUyxHQUFHLEVBQUUsQ0FBQyxFQUFFO0FBQ2xDLGNBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO0FBQ3ZDLGlCQUFRLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLENBQ25DLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FDakIsVUFBVSxDQUFDLENBQ1QsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUN0QixHQUFHLENBQUM7UUFDTixDQUFDOztBQUVGLGVBQVEsQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLENBQUM7QUFDbkMsWUFBSyxDQUFDLHFDQUFxQyxDQUFDO0FBQzVDLGVBQVEsQ0FBQyxHQUFHLENBQUM7TUFDZDs7QUFFRCxTQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUFFO0FBQ2pDLFdBQUksSUFBSSxLQUFLLFFBQVEsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFLFFBQVEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFekYsV0FBSSxNQUFNLEdBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsVUFBVSxHQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7QUFDL0gsV0FBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sR0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQ25GLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQzs7QUFFekQsWUFBSyxDQUFDLGlCQUFpQixDQUFDO0FBQ3hCLGVBQVEsQ0FBQyxHQUFHLENBQUM7O0FBRWIsV0FBSSxJQUFJLEtBQUssUUFBUSxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQztNQUMzRDs7QUFFRCxTQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssU0FBUyxFQUFFO0FBQ3BDLFdBQUksSUFBSSxLQUFLLFFBQVEsRUFBRSxRQUFRLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRW5FLGVBQVEsQ0FBQyxvQ0FBb0MsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQztBQUMzRSxZQUFLLENBQUMsa0NBQWtDLENBQUM7QUFDekMsZUFBUSxDQUFDLEdBQUcsQ0FBQzs7QUFFYixXQUFJLElBQUksS0FBSyxRQUFRLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQztNQUNyQzs7QUFFRCxTQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssU0FBUyxFQUFFO0FBQ3BDLFdBQUksSUFBSSxLQUFLLFFBQVEsRUFBRSxRQUFRLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRW5FLGVBQVEsQ0FBQyxvQ0FBb0MsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQztBQUMzRSxZQUFLLENBQUMsa0NBQWtDLENBQUM7QUFDekMsZUFBUSxDQUFDLEdBQUcsQ0FBQzs7QUFFYixXQUFJLElBQUksS0FBSyxRQUFRLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQztNQUNyQzs7QUFFRCxTQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUyxFQUFFO0FBQy9CLFdBQUksSUFBSSxLQUFLLE9BQU8sRUFBRSxRQUFRLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRWpFLGVBQVEsQ0FBQyx1QkFBdUIsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUN6RCxZQUFLLENBQUMsNkJBQTZCLENBQUM7QUFDcEMsZUFBUSxDQUFDLEdBQUcsQ0FBQzs7QUFFYixXQUFJLElBQUksS0FBSyxPQUFPLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQztNQUNwQzs7QUFFRCxTQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUyxFQUFFO0FBQy9CLFdBQUksSUFBSSxLQUFLLE9BQU8sRUFBRSxRQUFRLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRWpFLGVBQVEsQ0FBQyx1QkFBdUIsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUN6RCxZQUFLLENBQUMsNkJBQTZCLENBQUM7QUFDcEMsZUFBUSxDQUFDLEdBQUcsQ0FBQzs7QUFFYixXQUFJLElBQUksS0FBSyxPQUFPLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQztNQUNwQzs7QUFFRCxTQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxFQUFFO0FBQ2hDLFdBQUksSUFBSSxLQUFLLFFBQVEsRUFBRSxRQUFRLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRW5FLGVBQVEsQ0FBQyx1QkFBdUIsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUMxRCxZQUFLLENBQUMsZ0NBQWdDLENBQUM7QUFDdkMsZUFBUSxDQUFDLEdBQUcsQ0FBQzs7QUFFYixXQUFJLElBQUksS0FBSyxRQUFRLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQztNQUNyQzs7QUFFRCxTQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxFQUFFO0FBQ2hDLFdBQUksSUFBSSxLQUFLLFFBQVEsRUFBRSxRQUFRLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRW5FLGVBQVEsQ0FBQyx1QkFBdUIsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUMxRCxZQUFLLENBQUMsOEJBQThCLENBQUM7QUFDckMsZUFBUSxDQUFDLEdBQUcsQ0FBQzs7QUFFYixXQUFJLElBQUksS0FBSyxRQUFRLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQztNQUNyQzs7QUFFRCxTQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO0FBQzlCLGVBQVEsQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUN0RixZQUFLLENBQUMsc0JBQXNCLENBQUM7QUFDN0IsZUFBUSxDQUFDLEdBQUcsQ0FBQztNQUNkOztBQUVELFNBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7QUFDOUIsZUFBUSxDQUFDLGlCQUFpQixFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ3RGLFlBQUssQ0FBQyxzQkFBc0IsQ0FBQztBQUM3QixlQUFRLENBQUMsR0FBRyxDQUFDO01BQ2Q7O0FBRUQsU0FBSSxVQUFVLEVBQUU7QUFDZCxhQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFTLENBQUMsRUFBRTtBQUMxQyxjQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDO1FBQzVFLENBQUM7TUFDSDs7QUFFRCxZQUFPLE1BQU0sRUFBRSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUM7SUFDL0I7O0FBRUQsT0FBSSxRQUFRLEdBQUcsTUFBTSxDQUNsQiwyQkFBMkIsQ0FBQyxDQUMxQix3QkFBd0IsQ0FBQyxDQUN6QixnQkFBZ0IsQ0FBQzs7QUFFdEIsUUFBSyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQzs7QUFFNUQsV0FBUSxDQUNILHFCQUFxQixDQUFDLENBQ3hCLEdBQUcsQ0FBQzs7QUFFUCxXQUFRLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7QUFDckMsV0FBUSxDQUFDLE1BQU0sR0FBRyxJQUFJOztBQUV0QixXQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVc7QUFDNUMsU0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFO0FBQy9CLFlBQU8sUUFBUSxDQUFDLE1BQU0sQ0FDbkIsR0FBRyxDQUFDLFVBQVMsR0FBRyxFQUFFO0FBQ2pCLGNBQU8sR0FBRyxDQUFDLEtBQUssR0FBQyxHQUFHLEdBQUMsR0FBRyxDQUFDLE9BQU87TUFDakMsQ0FBQyxDQUNELElBQUksQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDOztBQUVGLFdBQVEsQ0FBQyxNQUFNLEdBQUcsWUFBVztBQUMzQixZQUFPLE1BQU07SUFDZDs7QUFFRCxVQUFPLFFBQVE7RUFDaEI7O0FBRUQsT0FBTSxDQUFDLE9BQU8sR0FBRyxVQUFTLE1BQU0sRUFBRSxJQUFJLEVBQUU7QUFDdEMsT0FBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO0FBQzNELFVBQU8sT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7RUFDL0M7O0FBRUQsT0FBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsVUFBUyxNQUFNLEVBQUUsSUFBSSxFQUFFO0FBQzdDLE9BQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztBQUNsRSxVQUFPLFVBQVMsR0FBRyxFQUFFO0FBQ25CLGFBQVEsQ0FBQyxHQUFHLENBQUM7QUFDYixZQUFPLEdBQUc7SUFDWDtFQUNGLEM7Ozs7OztBQ3BuQkQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Qjs7Ozs7O0FDSkE7O0FBRUEsd0JBQXVCO0FBQ3ZCLHNCQUFxQjs7QUFFckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdUNBQXNDO0FBQ3RDO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsd0JBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsWUFBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkNBQTRDLEtBQUs7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxvQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsMERBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYLFVBQVM7QUFDVDtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxTQUFTO0FBQ3BCO0FBQ0EsWUFBVyxT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Ozs7Ozs7Ozs7Ozs7Ozs7c0JDRFgsVUFBVTs7OztrQ0FOYixDQUFPOzs7OzhDQUNQLENBQXFCOzs7Ozs7OztBQUszQixVQUFTLFVBQVUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQ2hELFVBQU8sbUJBQU0sUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsVUFBUyxFQUFFLEVBQUU7QUFDOUMsU0FBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ25CLE9BQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDZCxTQUFJLG9DQUFRLEVBQUUsQ0FBQyxFQUFFO0FBQ2YsY0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoQixTQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ1o7QUFDRCxTQUFJLE9BQU8sSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtBQUNsRCxTQUFFLEdBQUcsbUJBQU0sWUFBWSxDQUFDLEVBQUUsRUFBRTtBQUMxQixpQkFBUSxFQUFFLG1CQUFNLFFBQVEsQ0FBQyxHQUFHLENBQzFCLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUNqQixVQUFTLEtBQUssRUFBRTtBQUNkLGtCQUFPLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7VUFDaEMsQ0FBQztRQUNMLENBQUMsQ0FBQztNQUNKO0FBQ0QsWUFBTyxFQUFFLENBQUM7SUFDWCxDQUFDLENBQUM7RUFDSiIsImZpbGUiOiJyZWFjdC1mb3Jtcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZmI2OWIzNTVkZTg1MGM1Nzk2ZWJcbiAqKi8iLCIvKipcbiAqIEBjb3B5cmlnaHQgMjAxNSwgUHJvbWV0aGV1cyBSZXNlYXJjaCwgTExDXG4gKi9cblxuZXhwb3J0IEZpZWxkc2V0ICAgICAgIGZyb20gJy4vRmllbGRzZXQnO1xuZXhwb3J0IEZpZWxkICAgICAgICAgIGZyb20gJy4vRmllbGQnO1xuZXhwb3J0IFZhbHVlICAgICAgICAgIGZyb20gJy4vVmFsdWUnO1xuZXhwb3J0IFdpdGhGb3JtVmFsdWUgIGZyb20gJy4vV2l0aEZvcm1WYWx1ZSc7XG5leHBvcnQgKiBhcyBTY2hlbWEgICAgZnJvbSAnLi9TY2hlbWEnO1xuZXhwb3J0IElucHV0ICAgICAgICAgIGZyb20gJy4vSW5wdXQnO1xuZXhwb3J0IEVycm9yTGlzdCAgICAgIGZyb20gJy4vRXJyb3JMaXN0JztcblxuZXhwb3J0IExlZ2FjeUZpZWxkc2V0IGZyb20gJy4vTGVnYWN5RmllbGRzZXQnO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCIvKipcbiAqIEBjb3B5cmlnaHQgMjAxNSwgUHJvbWV0aGV1cyBSZXNlYXJjaCwgTExDXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tcG9uZW50ICAgICAgICAgIGZyb20gJy4vQ29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmllbGRzZXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLi4uQ29tcG9uZW50LnByb3BUeXBlcyxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgU2VsZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIFNlbGY6ICdkaXYnXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7U2VsZiwgLi4ucHJvcHN9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gPFNlbGYgey4uLnByb3BzfSAvPjtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvRmllbGRzZXQuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImFtZFwiOlwicmVhY3RcIn1cbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEBjb3B5cmlnaHQgMjAxNSwgUHJvbWV0aGV1cyBSZXNlYXJjaCwgTExDXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaW52YXJpYW50ICAgICAgICAgIGZyb20gJ2ludmFyaWFudCc7XG5pbXBvcnQga2V5UGF0aCAgICAgICAgICAgIGZyb20gJy4va2V5UGF0aCc7XG5cbmV4cG9ydCBjb25zdCBDb250ZXh0VHlwZXMgPSB7XG4gIGZvcm1WYWx1ZTogUHJvcFR5cGVzLm9iamVjdFxufTtcblxubGV0IHNlbGVjdFByb3BUeXBlID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gIFByb3BUeXBlcy5hcnJheSxcbiAgUHJvcFR5cGVzLnN0cmluZyxcbiAgUHJvcFR5cGVzLm51bWJlcixcbiAgUHJvcFR5cGVzLmJvb2xcbl0pO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIGZvcm0gY29tcG9uZW50cy5cbiAqXG4gKiBJdCBleHBvc2VzIGZvcm0gdmFsdWUgdmlhIGB0aGlzLmZvcm1WYWx1ZWAgd2hpY2ggaXMgcHJvdmlkZWQgZWl0aGVyIHZpYVxuICogYHRoaXMucHJvcHMuZm9ybVZhbHVlYCBvciB2aWEgY29udGV4dC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIEZvcm0gdmFsdWUgcGFzc2VkIGFzIGEgcHJvcC5cbiAgICAgKi9cbiAgICBmb3JtVmFsdWU6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3RvciBmb3IgZm9ybSB2YWx1ZS5cbiAgICAgKlxuICAgICAqIFVzZWQgdG8gc2VsZWN0IGEgcGFydCBmcm9tIGEgZm9ybSB2YWx1ZSBwYXNzZWQgdmlhIGNvbnRleHQuXG4gICAgICovXG4gICAgc2VsZWN0OiBzZWxlY3RQcm9wVHlwZSxcblxuICAgIC8qKlxuICAgICAqIFNhbWUgYXMgYHNlbGVjdGAuXG4gICAgICpcbiAgICAgKiBEZXByZWNhdGVkLlxuICAgICAqL1xuICAgIHNlbGVjdEZvcm1WYWx1ZTogc2VsZWN0UHJvcFR5cGVcbiAgfTtcblxuICBzdGF0aWMgY29udGV4dFR5cGVzID0gQ29udGV4dFR5cGVzO1xuICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSBDb250ZXh0VHlwZXM7XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB7Zm9ybVZhbHVlOiB0aGlzLmZvcm1WYWx1ZX07XG4gIH1cblxuICBnZXQgZm9ybVZhbHVlKCkge1xuICAgIGxldCBmb3JtVmFsdWUgPSB0aGlzLnByb3BzLmZvcm1WYWx1ZSB8fCB0aGlzLmNvbnRleHQuZm9ybVZhbHVlO1xuXG4gICAgaW52YXJpYW50KFxuICAgICAgZm9ybVZhbHVlLFxuICAgICAgJ0EgZm9ybSBjb21wb25lbnQgPCVzIC8+IHNob3VsZCByZWNlaXZlIGZvcm0gdmFsdWUgdmlhIHByb3BzICcgK1xuICAgICAgJ29yIGJlIHVzZWQgYXMgYSBwYXJ0IG9mIGVsZW1lbnQgaGllcmFyY2h5IHdoaWNoICcgK1xuICAgICAgJ2luY2x1ZGVzIDxGb3JtIC8+IGNvbXBvbmVudCBpbiBpdHMgYW5jZXN0b3JzJyxcbiAgICAgIHRoaXMuY29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lXG4gICAgKTtcblxuICAgIGxldCBzZWxlY3QgPSB0aGlzLnByb3BzLnNlbGVjdCB8fCB0aGlzLnByb3BzLnNlbGVjdEZvcm1WYWx1ZTtcbiAgICAvLyBXZSBjaGVjayBmb3Igc2VsZWN0ICE9PSB0cnVlIHRvIGtlZXAgY29tcGF0YWJpbGl0eSB3ZSBlYXJpbGVyXG4gICAgLy8gdmVyc2lvbnMgb2YgUmVhY3QgRm9ybXMgd2hlcmUgd2UgbmVlZGVkIHRvIHJlYnVpbGQgZWxlbWVudCB0cmVlIHRvXG4gICAgLy8gcHJvcGFnYXRlIHZhbHVlcyB0byBmb3JtLlxuICAgIGlmIChzZWxlY3QgJiYgc2VsZWN0ICE9PSB0cnVlKSB7XG4gICAgICBzZWxlY3QgPSBrZXlQYXRoKHNlbGVjdCk7XG4gICAgICBmb3JtVmFsdWUgPSBmb3JtVmFsdWUuc2VsZWN0KHNlbGVjdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1WYWx1ZTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvQ29tcG9uZW50LmpzXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGludmFyaWFudFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgK1xuICAgICAgICAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ0ludmFyaWFudCBWaW9sYXRpb246ICcgK1xuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7IHJldHVybiBhcmdzW2FyZ0luZGV4KytdOyB9KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaW52YXJpYW50L2Jyb3dzZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgc2V0VGltZW91dChkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQGNvcHlyaWdodCAyMDE1LCBQcm9tZXRoZXVzIFJlc2VhcmNoLCBMTENcbiAqL1xuXG5pbXBvcnQgaXNTdHJpbmcgIGZyb20gJ2xvZGFzaC9sYW5nL2lzU3RyaW5nJztcbmltcG9ydCBpc0FycmF5ICAgZnJvbSAnbG9kYXNoL2xhbmcvaXNBcnJheSc7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gJ2ludmFyaWFudCc7XG5cbmNvbnN0IElTX05VTUJFUiA9IC9bMC05XSsvO1xuXG5mdW5jdGlvbiB0cnlQYXJzZUludCh2KSB7XG4gIGlmICh0eXBlb2YgdiA9PT0gJ3N0cmluZycgJiYgSVNfTlVNQkVSLmV4ZWModikpIHtcbiAgICB2ID0gcGFyc2VJbnQodiwgMTApO1xuICB9XG4gIHJldHVybiB2O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBrZXlQYXRoKHZhbHVlKSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfSBlbHNlIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICBpZiAodmFsdWUuaW5kZXhPZignLicpICE9PSAtMSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnLicpLmZpbHRlcihCb29sZWFuKS5tYXAodHJ5UGFyc2VJbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IFt0cnlQYXJzZUludCh2YWx1ZSldO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBbdmFsdWVdO1xuICB9IGVsc2Uge1xuICAgIGludmFyaWFudChcbiAgICAgIGZhbHNlLFxuICAgICAgJ2tleVBhdGggY2FuIGJlIGVpdGhlciBhbiBhcnJheSwgYSBzdHJpbmcgb3IgYSBudW1iZXIsIGdvdDogJXMnLFxuICAgICAgdmFsdWVcbiAgICApO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9rZXlQYXRoLmpzXG4gKiovIiwidmFyIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXSc7XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmpUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3RyaW5nYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3RyaW5nKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3RyaW5nKDEpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyB8fCAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBvYmpUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBzdHJpbmdUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3RyaW5nO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2xhbmcvaXNTdHJpbmcuanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2lzT2JqZWN0TGlrZS5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9nZXROYXRpdmUnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzTGVuZ3RoJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XSc7XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmpUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiBOYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQXJyYXkgPSBnZXROYXRpdmUoQXJyYXksICdpc0FycmF5Jyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgY29ycmVjdGx5IGNsYXNzaWZpZWQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBuYXRpdmVJc0FycmF5IHx8IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgb2JqVG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gYXJyYXlUYWc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvbGFuZy9pc0FycmF5LmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzTmF0aXZlID0gcmVxdWlyZSgnLi4vbGFuZy9pc05hdGl2ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgcmV0dXJuIGlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9nZXROYXRpdmUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc09iamVjdExpa2UnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkgPiA1KS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZuVG9TdHJpbmcgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmblRvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UoL1tcXFxcXiQuKis/KClbXFxde318XS9nLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTmF0aXZlKEFycmF5LnByb3RvdHlwZS5wdXNoKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTmF0aXZlKF8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgcmV0dXJuIHJlSXNOYXRpdmUudGVzdChmblRvU3RyaW5nLmNhbGwodmFsdWUpKTtcbiAgfVxuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiByZUlzSG9zdEN0b3IudGVzdCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNOYXRpdmU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvbGFuZy9pc05hdGl2ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZSBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9ialRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIG9sZGVyIHZlcnNpb25zIG9mIENocm9tZSBhbmQgU2FmYXJpIHdoaWNoIHJldHVybiAnZnVuY3Rpb24nIGZvciByZWdleGVzXG4gIC8vIGFuZCBTYWZhcmkgOCB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheSBjb25zdHJ1Y3RvcnMuXG4gIHJldHVybiBpc09iamVjdCh2YWx1ZSkgJiYgb2JqVG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gZnVuY1RhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2xhbmcvaXNGdW5jdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZSBbbGFuZ3VhZ2UgdHlwZV0oaHR0cHM6Ly9lczUuZ2l0aHViLmlvLyN4OCkgb2YgYE9iamVjdGAuXG4gKiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KDEpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgLy8gQXZvaWQgYSBWOCBKSVQgYnVnIGluIENocm9tZSAxOS0yMC5cbiAgLy8gU2VlIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0yMjkxIGZvciBtb3JlIGRldGFpbHMuXG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2xhbmcvaXNPYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBVc2VkIGFzIHRoZSBbbWF4aW11bSBsZW5ndGhdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW51bWJlci5tYXhfc2FmZV9pbnRlZ2VyKVxuICogb2YgYW4gYXJyYXktbGlrZSB2YWx1ZS5cbiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gaXMgYmFzZWQgb24gW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0xlbmd0aDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9pc0xlbmd0aC5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEBjb3B5cmlnaHQgMjAxNSwgUHJvbWV0aGV1cyBSZXNlYXJjaCwgTExDXG4gKi9cblxuaW1wb3J0IGF1dG9iaW5kICAgICAgICAgICAgIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXN9ICAgZnJvbSAncmVhY3QnO1xuaW1wb3J0IElucHV0ICAgICAgICAgICAgICAgIGZyb20gJy4vSW5wdXQnO1xuaW1wb3J0IEVycm9yTGlzdCAgICAgICAgICAgIGZyb20gJy4vRXJyb3JMaXN0JztcbmltcG9ydCBDb21wb25lbnQgICAgICAgICAgICBmcm9tICcuL0NvbXBvbmVudCc7XG5cbmZ1bmN0aW9uIExhYmVsKHtsYWJlbH0pIHtcbiAgcmV0dXJuIGxhYmVsICYmIDxsYWJlbD57bGFiZWx9PC9sYWJlbD47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZWxkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC4uLkNvbXBvbmVudC5wcm9wVHlwZXMsXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LFxuICAgIFNlbGY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgTGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgRXJyb3JMaXN0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2hpbGRyZW46IDxJbnB1dCB0eXBlPVwidGV4dFwiIC8+LFxuICAgIExhYmVsLFxuICAgIEVycm9yTGlzdCxcbiAgICBTZWxmOiAnZGl2JyxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge2RpcnR5OiBmYWxzZX07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtTZWxmLCBFcnJvckxpc3QsIExhYmVsLCBjaGlsZHJlbn0gPSB0aGlzLnByb3BzO1xuICAgIGxldCB7ZGlydHl9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQge3NjaGVtYSwgdmFsdWUsIHBhcmFtc30gPSB0aGlzLmZvcm1WYWx1ZTtcbiAgICBsZXQgc2hvd0Vycm9ycyA9IGRpcnR5IHx8IHBhcmFtcy5mb3JjZVNob3dFcnJvcnM7XG4gICAgY2hpbGRyZW4gPSBSZWFjdC5jbG9uZUVsZW1lbnQoXG4gICAgICBSZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKSxcbiAgICAgIHt2YWx1ZSwgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2V9KTtcbiAgICBsZXQgbGFiZWwgPSB0aGlzLnByb3BzLmxhYmVsIHx8IHNjaGVtYS5sYWJlbDtcbiAgICByZXR1cm4gKFxuICAgICAgPFNlbGYgb25CbHVyPXt0aGlzLm9uQmx1cn0+XG4gICAgICAgIDxMYWJlbCBsYWJlbD17bGFiZWx9IHNjaGVtYT17c2NoZW1hfSAvPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHtzaG93RXJyb3JzICYmXG4gICAgICAgICAgPEVycm9yTGlzdCBmb3JtVmFsdWU9e3RoaXMuZm9ybVZhbHVlfSAvPn1cbiAgICAgIDwvU2VsZj5cbiAgICApO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIG9uQmx1cigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtkaXJ0eTogdHJ1ZX0pO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIG9uQ2hhbmdlKGUpIHtcbiAgICBsZXQgdmFsdWU7XG4gICAgaWYgKGUgJiYgZS50YXJnZXQgJiYgZS50YXJnZXQudmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICBpZiAodmFsdWUgPT09ICcnKSB7XG4gICAgICAgIHZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IGU7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe2RpcnR5OiB0cnVlfSk7XG4gICAgdGhpcy5mb3JtVmFsdWUudXBkYXRlKHZhbHVlKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvRmllbGQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuLyoqXG4gKiBAY29weXJpZ2h0IDIwMTUsIEFuZHJleSBQb3BwIDw4bWF5ZGF5QGdtYWlsLmNvbT5cbiAqXG4gKiBUaGUgZGVjb3JhdG9yIG1heSBiZSB1c2VkIG9uIGNsYXNzZXMgb3IgbWV0aG9kc1xuICogYGBgXG4gKiBAYXV0b2JpbmRcbiAqIGNsYXNzIEZ1bGxCb3VuZCB7fVxuICpcbiAqIGNsYXNzIFBhcnRCb3VuZCB7XG4gKiAgIEBhdXRvYmluZFxuICogICBtZXRob2QgKCkge31cbiAqIH1cbiAqIGBgYFxuICovXG5leHBvcnRzWydkZWZhdWx0J10gPSBhdXRvYmluZDtcblxuZnVuY3Rpb24gYXV0b2JpbmQoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBib3VuZENsYXNzLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJvdW5kTWV0aG9kLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gIH1cbn1cblxuLyoqXG4gKiBVc2UgYm91bmRNZXRob2QgdG8gYmluZCBhbGwgbWV0aG9kcyBvbiB0aGUgdGFyZ2V0LnByb3RvdHlwZVxuICovXG5mdW5jdGlvbiBib3VuZENsYXNzKHRhcmdldCkge1xuICAvLyAoVXNpbmcgcmVmbGVjdCB0byBnZXQgYWxsIGtleXMgaW5jbHVkaW5nIHN5bWJvbHMpXG4gIHZhciBrZXlzID0gdW5kZWZpbmVkO1xuICAvLyBVc2UgUmVmbGVjdCBpZiBleGlzdHNcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGtleXMgPSBSZWZsZWN0Lm93bktleXModGFyZ2V0LnByb3RvdHlwZSk7XG4gIH0gZWxzZSB7XG4gICAga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldC5wcm90b3R5cGUpO1xuICAgIC8vIHVzZSBzeW1ib2xzIGlmIHN1cHBvcnQgaXMgcHJvdmlkZWRcbiAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldC5wcm90b3R5cGUpKTtcbiAgICB9XG4gIH1cblxuICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIC8vIElnbm9yZSBzcGVjaWFsIGNhc2UgdGFyZ2V0IG1ldGhvZFxuICAgIGlmIChrZXkgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LnByb3RvdHlwZSwga2V5KTtcblxuICAgIC8vIE9ubHkgbWV0aG9kcyBuZWVkIGJpbmRpbmdcbiAgICBpZiAodHlwZW9mIGRlc2NyaXB0b3IudmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQucHJvdG90eXBlLCBrZXksIGJvdW5kTWV0aG9kKHRhcmdldCwga2V5LCBkZXNjcmlwdG9yKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYSBkZXNjcmlwdG9yIHJlbW92aW5nIHRoZSB2YWx1ZSBhbmQgcmV0dXJuaW5nIGEgZ2V0dGVyXG4gKiBUaGUgZ2V0dGVyIHdpbGwgcmV0dXJuIGEgLmJpbmQgdmVyc2lvbiBvZiB0aGUgZnVuY3Rpb25cbiAqIGFuZCBtZW1vaXplIHRoZSByZXN1bHQgYWdhaW5zdCBhIHN5bWJvbCBvbiB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gYm91bmRNZXRob2QodGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpIHtcbiAgdmFyIGZuID0gZGVzY3JpcHRvci52YWx1ZTtcblxuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdAYXV0b2JpbmQgZGVjb3JhdG9yIGNhbiBvbmx5IGJlIGFwcGxpZWQgdG8gbWV0aG9kcyBub3Q6ICcgKyB0eXBlb2YgZm4pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAodGhpcyA9PT0gdGFyZ2V0LnByb3RvdHlwZSkge1xuICAgICAgICByZXR1cm4gZm47XG4gICAgICB9XG5cbiAgICAgIHZhciBib3VuZEZuID0gZm4uYmluZCh0aGlzKTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBrZXksIHtcbiAgICAgICAgdmFsdWU6IGJvdW5kRm4sXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGJvdW5kRm47XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9hdXRvYmluZC1kZWNvcmF0b3IvbGliL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQGNvcHlyaWdodCAyMDE1LCBQcm9tZXRoZXVzIFJlc2VhcmNoLCBMTENcbiAqL1xuXG5pbXBvcnQgYXV0b2JpbmQgICAgICAgICAgIGZyb20gJ2F1dG9iaW5kLWRlY29yYXRvcic7XG5pbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXN9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkZWJvdW5jZSAgICAgICAgICAgZnJvbSAnbG9kYXNoL2Z1bmN0aW9uL2RlYm91bmNlJztcbmltcG9ydCBlbXB0eUZ1bmN0aW9uICAgICAgZnJvbSAnZW1wdHkvZnVuY3Rpb24nO1xuXG4vKipcbiAqIElucHV0IGNvbXBvbmVudCB3aXRoIGRlYm91bmNlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBTZWxmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGRlYm91bmNlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuY1xuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgU2VsZjogJ2lucHV0JyxcbiAgICBkZWJvdW5jZTogMTAwLFxuICAgIG9uQ2hhbmdlOiBlbXB0eUZ1bmN0aW9uXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt2YWx1ZTogcHJvcHMudmFsdWV9O1xuICAgIHRoaXMuX2V4cGVjdGVkVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fZmluYWxpemVPbkNoYW5nZURlYm91bmNlZCA9IHByb3BzLmRlYm91bmNlID9cbiAgICAgIGRlYm91bmNlKHRoaXMuX2ZpbmFsaXplT25DaGFuZ2UuYmluZCh0aGlzKSwgcHJvcHMuZGVib3VuY2UpIDpcbiAgICAgIHRoaXMuX2ZpbmFsaXplT25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge1NlbGYsIGRlYm91bmNlOiBkZWJvdW5jZUVuYWJsZWQsIHZhbHVlLCAuLi5wcm9wc30gPSB0aGlzLnByb3BzO1xuICAgIGlmIChkZWJvdW5jZUVuYWJsZWQpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWxmXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgb25CbHVyPXt0aGlzLm9uQmx1cn0gLz5cbiAgICApO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLnZhbHVlICE9PSB0aGlzLl9leHBlY3RlZFZhbHVlKSB7XG4gICAgICB0aGlzLl9jYW5jZWxPbkNoYW5nZSgpO1xuICAgIH1cbiAgICBpZiAobmV4dFByb3BzLmRlYm91bmNlICE9PSB0aGlzLnByb3BzLmRlYm91bmNlKSB7XG4gICAgICB0aGlzLl9maW5hbGl6ZU9uQ2hhbmdlKCk7XG4gICAgICB0aGlzLl9jYW5jZWxPbkNoYW5nZSgpO1xuICAgICAgdGhpcy5fZmluYWxpemVPbkNoYW5nZURlYm91bmNlZCA9IG5leHRQcm9wcy5kZWJvdW5jZSA/XG4gICAgICAgIGRlYm91bmNlKHRoaXMuX2ZpbmFsaXplT25DaGFuZ2UuYmluZCh0aGlzKSwgbmV4dFByb3BzLmRlYm91bmNlKSA6XG4gICAgICAgIHRoaXMuX2ZpbmFsaXplT25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLl9maW5hbGl6ZU9uQ2hhbmdlKCk7XG4gICAgdGhpcy5fY2FuY2VsT25DaGFuZ2UoKTtcbiAgfVxuXG4gIF9zY2hlZHVsZU9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWV9KTtcbiAgICB0aGlzLl9leHBlY3RlZFZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5fZmluYWxpemVPbkNoYW5nZURlYm91bmNlZCgpO1xuICB9XG5cbiAgX2ZpbmFsaXplT25DaGFuZ2UoKSB7XG4gICAgY29uc29sZS5sb2coJ19maW5hbGl6ZU9uQ2hhbmdlJyk7XG4gICAgaWYgKHRoaXMuX2V4cGVjdGVkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbGV0IHZhbHVlID0gdGhpcy5fZXhwZWN0ZWRWYWx1ZTtcbiAgICAgIHRoaXMuX2V4cGVjdGVkVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBfY2FuY2VsT25DaGFuZ2UoKSB7XG4gICAgaWYgKHRoaXMuX2ZpbmFsaXplT25DaGFuZ2VEZWJvdW5jZWQuY2FuY2VsKSB7XG4gICAgICB0aGlzLl9leHBlY3RlZFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZmluYWxpemVPbkNoYW5nZURlYm91bmNlZC5jYW5jZWwoKTtcbiAgICB9XG4gIH1cblxuICBAYXV0b2JpbmRcbiAgb25DaGFuZ2UoZSkge1xuICAgIGxldCB2YWx1ZSA9IGUgJiYgZS50YXJnZXQgJiYgJ3ZhbHVlJyBpbiBlLnRhcmdldCA/XG4gICAgICBlLnRhcmdldC52YWx1ZSA6XG4gICAgICBlO1xuICAgIHRoaXMuX3NjaGVkdWxlT25DaGFuZ2UodmFsdWUpO1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIG9uQmx1cigpIHtcbiAgICBpZiAodGhpcy5fZXhwZWN0ZWRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9maW5hbGl6ZU9uQ2hhbmdlKCk7XG4gICAgICB0aGlzLl9jYW5jZWxPbkNoYW5nZSgpO1xuICAgIH1cbiAgfVxuXG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9JbnB1dC5qc1xuICoqLyIsInZhciBjb25zb2xlO1xyXG5pZiAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuY29uc29sZSkge1xyXG4gICAgY29uc29sZSA9IGdsb2JhbC5jb25zb2xlXHJcbn0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cuY29uc29sZSkge1xyXG4gICAgY29uc29sZSA9IHdpbmRvdy5jb25zb2xlXHJcbn0gZWxzZSB7XHJcbiAgICBjb25zb2xlID0gd2luZG93LmNvbnNvbGUgPSB7fVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gY29uc29sZTtcclxuZm9yKHZhciBuYW1lIGluIHtsb2c6MSwgaW5mbzoxLCBlcnJvcjoxLCB3YXJuOjEsIGRpcjoxLCB0cmFjZToxLCBhc3NlcnQ6MSwgdGltZToxLCB0aW1lRW5kOiAxfSlcclxuXHRpZighY29uc29sZVtuYW1lXSlcclxuXHRcdGNvbnNvbGVbbmFtZV0gPSBmdW5jdGlvbigpIHt9O1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9ub2RlLWxpYnMtYnJvd3Nlci9tb2NrL2NvbnNvbGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vbGFuZy9pc09iamVjdCcpLFxuICAgIG5vdyA9IHJlcXVpcmUoJy4uL2RhdGUvbm93Jyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiBOYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGludm9jYXRpb25zLiBQcm92aWRlIGFuIG9wdGlvbnMgb2JqZWN0IHRvIGluZGljYXRlIHRoYXQgYGZ1bmNgXG4gKiBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGUgbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKiBTdWJzZXF1ZW50IGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3RcbiAqIGBmdW5jYCBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXMgaW52b2tlZFxuICogb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiBpc1xuICogaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwOi8vZHJ1cGFsbW90aW9uLmNvbS9hcnRpY2xlL2RlYm91bmNlLWFuZC10aHJvdHRsZS12aXN1YWwtZXhwbGFuYXRpb24pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmdcbiAqICBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmVcbiAqICBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nXG4gKiAgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gYXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eFxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZScsIF8uZGVib3VuY2UoY2FsY3VsYXRlTGF5b3V0LCAxNTApKTtcbiAqXG4gKiAvLyBpbnZva2UgYHNlbmRNYWlsYCB3aGVuIHRoZSBjbGljayBldmVudCBpcyBmaXJlZCwgZGVib3VuY2luZyBzdWJzZXF1ZW50IGNhbGxzXG4gKiBqUXVlcnkoJyNwb3N0Ym94Jykub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBlbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzXG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwge1xuICogICAnbWF4V2FpdCc6IDEwMDBcbiAqIH0pKTtcbiAqXG4gKiAvLyBjYW5jZWwgYSBkZWJvdW5jZWQgY2FsbFxuICogdmFyIHRvZG9DaGFuZ2VzID0gXy5kZWJvdW5jZShiYXRjaExvZywgMTAwMCk7XG4gKiBPYmplY3Qub2JzZXJ2ZShtb2RlbHMudG9kbywgdG9kb0NoYW5nZXMpO1xuICpcbiAqIE9iamVjdC5vYnNlcnZlKG1vZGVscywgZnVuY3Rpb24oY2hhbmdlcykge1xuICogICBpZiAoXy5maW5kKGNoYW5nZXMsIHsgJ3VzZXInOiAndG9kbycsICd0eXBlJzogJ2RlbGV0ZSd9KSkge1xuICogICAgIHRvZG9DaGFuZ2VzLmNhbmNlbCgpO1xuICogICB9XG4gKiB9LCBbJ2RlbGV0ZSddKTtcbiAqXG4gKiAvLyAuLi5hdCBzb21lIHBvaW50IGBtb2RlbHMudG9kb2AgaXMgY2hhbmdlZFxuICogbW9kZWxzLnRvZG8uY29tcGxldGVkID0gdHJ1ZTtcbiAqXG4gKiAvLyAuLi5iZWZvcmUgMSBzZWNvbmQgaGFzIHBhc3NlZCBgbW9kZWxzLnRvZG9gIGlzIGRlbGV0ZWRcbiAqIC8vIHdoaWNoIGNhbmNlbHMgdGhlIGRlYm91bmNlZCBgdG9kb0NoYW5nZXNgIGNhbGxcbiAqIGRlbGV0ZSBtb2RlbHMudG9kbztcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgYXJncyxcbiAgICAgIG1heFRpbWVvdXRJZCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHN0YW1wLFxuICAgICAgdGhpc0FyZyxcbiAgICAgIHRpbWVvdXRJZCxcbiAgICAgIHRyYWlsaW5nQ2FsbCxcbiAgICAgIGxhc3RDYWxsZWQgPSAwLFxuICAgICAgbWF4V2FpdCA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHdhaXQgPSB3YWl0IDwgMCA/IDAgOiAoK3dhaXQgfHwgMCk7XG4gIGlmIChvcHRpb25zID09PSB0cnVlKSB7XG4gICAgdmFyIGxlYWRpbmcgPSB0cnVlO1xuICAgIHRyYWlsaW5nID0gZmFsc2U7XG4gIH0gZWxzZSBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gISFvcHRpb25zLmxlYWRpbmc7XG4gICAgbWF4V2FpdCA9ICdtYXhXYWl0JyBpbiBvcHRpb25zICYmIG5hdGl2ZU1heCgrb3B0aW9ucy5tYXhXYWl0IHx8IDAsIHdhaXQpO1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVvdXRJZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgfVxuICAgIGlmIChtYXhUaW1lb3V0SWQpIHtcbiAgICAgIGNsZWFyVGltZW91dChtYXhUaW1lb3V0SWQpO1xuICAgIH1cbiAgICBsYXN0Q2FsbGVkID0gMDtcbiAgICBtYXhUaW1lb3V0SWQgPSB0aW1lb3V0SWQgPSB0cmFpbGluZ0NhbGwgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBjb21wbGV0ZShpc0NhbGxlZCwgaWQpIHtcbiAgICBpZiAoaWQpIHtcbiAgICAgIGNsZWFyVGltZW91dChpZCk7XG4gICAgfVxuICAgIG1heFRpbWVvdXRJZCA9IHRpbWVvdXRJZCA9IHRyYWlsaW5nQ2FsbCA9IHVuZGVmaW5lZDtcbiAgICBpZiAoaXNDYWxsZWQpIHtcbiAgICAgIGxhc3RDYWxsZWQgPSBub3coKTtcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgICBpZiAoIXRpbWVvdXRJZCAmJiAhbWF4VGltZW91dElkKSB7XG4gICAgICAgIGFyZ3MgPSB0aGlzQXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGF5ZWQoKSB7XG4gICAgdmFyIHJlbWFpbmluZyA9IHdhaXQgLSAobm93KCkgLSBzdGFtcCk7XG4gICAgaWYgKHJlbWFpbmluZyA8PSAwIHx8IHJlbWFpbmluZyA+IHdhaXQpIHtcbiAgICAgIGNvbXBsZXRlKHRyYWlsaW5nQ2FsbCwgbWF4VGltZW91dElkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGltZW91dElkID0gc2V0VGltZW91dChkZWxheWVkLCByZW1haW5pbmcpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1heERlbGF5ZWQoKSB7XG4gICAgY29tcGxldGUodHJhaWxpbmcsIHRpbWVvdXRJZCk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICBzdGFtcCA9IG5vdygpO1xuICAgIHRoaXNBcmcgPSB0aGlzO1xuICAgIHRyYWlsaW5nQ2FsbCA9IHRyYWlsaW5nICYmICh0aW1lb3V0SWQgfHwgIWxlYWRpbmcpO1xuXG4gICAgaWYgKG1heFdhaXQgPT09IGZhbHNlKSB7XG4gICAgICB2YXIgbGVhZGluZ0NhbGwgPSBsZWFkaW5nICYmICF0aW1lb3V0SWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghbWF4VGltZW91dElkICYmICFsZWFkaW5nKSB7XG4gICAgICAgIGxhc3RDYWxsZWQgPSBzdGFtcDtcbiAgICAgIH1cbiAgICAgIHZhciByZW1haW5pbmcgPSBtYXhXYWl0IC0gKHN0YW1wIC0gbGFzdENhbGxlZCksXG4gICAgICAgICAgaXNDYWxsZWQgPSByZW1haW5pbmcgPD0gMCB8fCByZW1haW5pbmcgPiBtYXhXYWl0O1xuXG4gICAgICBpZiAoaXNDYWxsZWQpIHtcbiAgICAgICAgaWYgKG1heFRpbWVvdXRJZCkge1xuICAgICAgICAgIG1heFRpbWVvdXRJZCA9IGNsZWFyVGltZW91dChtYXhUaW1lb3V0SWQpO1xuICAgICAgICB9XG4gICAgICAgIGxhc3RDYWxsZWQgPSBzdGFtcDtcbiAgICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCFtYXhUaW1lb3V0SWQpIHtcbiAgICAgICAgbWF4VGltZW91dElkID0gc2V0VGltZW91dChtYXhEZWxheWVkLCByZW1haW5pbmcpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNDYWxsZWQgJiYgdGltZW91dElkKSB7XG4gICAgICB0aW1lb3V0SWQgPSBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoIXRpbWVvdXRJZCAmJiB3YWl0ICE9PSBtYXhXYWl0KSB7XG4gICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGRlbGF5ZWQsIHdhaXQpO1xuICAgIH1cbiAgICBpZiAobGVhZGluZ0NhbGwpIHtcbiAgICAgIGlzQ2FsbGVkID0gdHJ1ZTtcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgfVxuICAgIGlmIChpc0NhbGxlZCAmJiAhdGltZW91dElkICYmICFtYXhUaW1lb3V0SWQpIHtcbiAgICAgIGFyZ3MgPSB0aGlzQXJnID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGRlYm91bmNlZC5jYW5jZWwgPSBjYW5jZWw7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVib3VuY2U7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvZnVuY3Rpb24vZGVib3VuY2UuanNcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2dldE5hdGl2ZScpO1xuXG4vKiBOYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU5vdyA9IGdldE5hdGl2ZShEYXRlLCAnbm93Jyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgVW5peCBlcG9jaFxuICogKDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBEYXRlXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmZXIoZnVuY3Rpb24oc3RhbXApIHtcbiAqICAgY29uc29sZS5sb2coXy5ub3coKSAtIHN0YW1wKTtcbiAqIH0sIF8ubm93KCkpO1xuICogLy8gPT4gbG9ncyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0b29rIGZvciB0aGUgZGVmZXJyZWQgZnVuY3Rpb24gdG8gYmUgaW52b2tlZFxuICovXG52YXIgbm93ID0gbmF0aXZlTm93IHx8IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vdztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9kYXRlL25vdy5qc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge307XG5cbmlmICgncHJvZHVjdGlvbicgIT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYpIHtcbiAgT2JqZWN0LmZyZWV6ZShtb2R1bGUuZXhwb3J0cyk7XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9lbXB0eS9mdW5jdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEBjb3B5cmlnaHQgMjAxNSwgUHJvbWV0aGV1cyBSZXNlYXJjaCwgTExDXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tcG9uZW50ICAgICAgICAgIGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBFcnJvciAgICAgICAgICAgICAgZnJvbSAnLi9FcnJvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAuLi5Db21wb25lbnQucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogQ29tcG9uZW50IHdoaWNoIGlzIHVzZWQgdG8gcmVuZGVyIGVycm9yIGl0ZW1zLlxuICAgICAqL1xuICAgIEVycm9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuXG4gICAgLyoqXG4gICAgICogSWYgY29tcG9uZW50IHNob3VsZCByZW5kZXIgZXJyb3JzIGZyb20gYWxsIHRoZSBzdWJ2YWx1ZXMuXG4gICAgICovXG4gICAgY29tcGxldGU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogUmVzdHJpY3Qgc2NoZW1hIHR5cGVzXG4gICAgICovXG4gICAgc2NoZW1hVHlwZTogUHJvcFR5cGVzLm9iamVjdCxcblxuICAgIG5vTGFiZWw6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmdcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIEVycm9yLFxuICAgIFNlbGY6ICdkaXYnXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7U2VsZiwgRXJyb3IsIG5vTGFiZWwsIGNvbXBsZXRlLCBzY2hlbWFUeXBlLCAuLi5wcm9wc30gPSB0aGlzLnByb3BzO1xuICAgIGxldCBlcnJvckxpc3QgPSBjb21wbGV0ZSA/XG4gICAgICB0aGlzLmZvcm1WYWx1ZS5jb21wbGV0ZUVycm9yTGlzdCA6XG4gICAgICB0aGlzLmZvcm1WYWx1ZS5lcnJvckxpc3Q7XG4gICAgaWYgKHNjaGVtYVR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3JMaXN0ID0gZXJyb3JMaXN0LmZpbHRlcihlcnJvciA9PlxuICAgICAgICBlcnJvci5zY2hlbWEgPyBzY2hlbWFUeXBlW2Vycm9yLnNjaGVtYS50eXBlXSA6IHNjaGVtYVR5cGUubm9uZSk7XG4gICAgfVxuICAgIGlmIChlcnJvckxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgbGV0IGl0ZW1zID0gZXJyb3JMaXN0Lm1hcCgoZXJyb3IsIGluZGV4KSA9PlxuICAgICAgPEVycm9yXG4gICAgICAgIGtleT17ZXJyb3IuZmllbGQgKyAnX18nICsgaW5kZXh9XG4gICAgICAgIGVycm9yPXtlcnJvcn1cbiAgICAgICAgbm9MYWJlbD17bm9MYWJlbH1cbiAgICAgICAgY29tcGxldGU9e2NvbXBsZXRlfVxuICAgICAgICAvPlxuICAgICk7XG4gICAgcmV0dXJuIDxTZWxmIHsuLi5wcm9wc30+e2l0ZW1zfTwvU2VsZj47XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL0Vycm9yTGlzdC5qc1xuICoqLyIsIi8qKlxuICogQGNvcHlyaWdodCAyMDE1LCBQcm9tZXRoZXVzIFJlc2VhcmNoLCBMTENcbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFcnJvcih7ZXJyb3IsIGxhYmVsLCBub0xhYmVsLCBjb21wbGV0ZX0pIHtcbiAgaWYgKCFsYWJlbCAmJiBlcnJvci5zY2hlbWEpIHtcbiAgICBsYWJlbCA9IGVycm9yLnNjaGVtYS5sYWJlbDtcbiAgfVxuICBpZiAobGFiZWwgJiYgY29tcGxldGUgJiYgIW5vTGFiZWwpIHtcbiAgICByZXR1cm4gPGRpdj57ZXJyb3Iuc2NoZW1hLmxhYmVsfToge2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2PjtcbiAgfVxufVxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9FcnJvci5qc1xuICoqLyIsIi8qKlxuICogQGNvcHlyaWdodCAyMDE1LCBQcm9tZXRoZXVzIFJlc2VhcmNoLCBMTENcbiAqL1xuXG5pbXBvcnQgbWVtb2l6ZSAgICAgICAgICAgICAgICAgICAgZnJvbSAnbWVtb2l6ZS1kZWNvcmF0b3InO1xuaW1wb3J0IGNsb25lICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ2xvZGFzaC9sYW5nL2Nsb25lRGVlcCc7XG5pbXBvcnQgc2VsZWN0VmFsdWUgICAgICAgICAgICAgICAgZnJvbSAnbG9kYXNoL29iamVjdC9nZXQnO1xuaW1wb3J0IHNldCAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ2xvZGFzaC9vYmplY3Qvc2V0JztcbmltcG9ydCBlbXB0eUZ1bmN0aW9uICAgICAgICAgICAgICBmcm9tICdlbXB0eS9mdW5jdGlvbic7XG5pbXBvcnQgbWFrZUtleVBhdGggICAgICAgICAgICAgICAgZnJvbSAnLi9rZXlQYXRoJztcbmltcG9ydCB7Y3JlYXRlVmFsaWRhdG9yLFxuICAgICAgICBzZWxlY3QgYXMgc2VsZWN0U2NoZW1hfSAgIGZyb20gJy4vU2NoZW1hJztcblxuZXhwb3J0IGNsYXNzIFZhbHVlIHtcblxuICBzZWxlY3Qoa2V5KSB7XG4gICAgbGV0IGtleVBhdGggPSB0aGlzLmtleVBhdGguY29uY2F0KG1ha2VLZXlQYXRoKGtleSkpO1xuICAgIHJldHVybiBuZXcgVmFsdWVMZWFmKHRoaXMuX3Jvb3QsIGtleVBhdGgpO1xuICB9XG5cbiAgc2V0KHZhbHVlLCBxdWlldCkge1xuICAgIGNvbnNvbGUud2FybigvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICdWYWx1ZS5wcm90b3R5cGUuc2V0KHZhbHVlKSBpcyBkZXByZWNhdGVkLCAnICtcbiAgICAgICd1c2UgVmFsdWUucHJvdG90eXBlLnVwZGF0ZSh2YWx1ZSkgaW5zdGVhZCdcbiAgICApO1xuICAgIHJldHVybiB0aGlzLnVwZGF0ZSh2YWx1ZSwgcXVpZXQpO1xuICB9XG5cbiAgdXBkYXRlKHZhbHVlLCBxdWlldCkge1xuICAgIGxldCByb290VmFsdWUgPSBjbG9uZSh0aGlzLl9yb290LnZhbHVlKTtcbiAgICBpZiAodGhpcy5rZXlQYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcm9vdFZhbHVlID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvb3RWYWx1ZSA9IHNldChyb290VmFsdWUsIHRoaXMua2V5UGF0aCwgdmFsdWUpO1xuICAgIH1cbiAgICBsZXQgbmV4dFJvb3QgPSBjcmVhdGVWYWx1ZShcbiAgICAgIHRoaXMuX3Jvb3Quc2NoZW1hLFxuICAgICAgcm9vdFZhbHVlLFxuICAgICAgdGhpcy5fcm9vdC5vbkNoYW5nZSxcbiAgICAgIHRoaXMuX3Jvb3QucGFyYW1zKTtcbiAgICBpZiAoIXF1aWV0KSB7XG4gICAgICB0aGlzLl9yb290Lm9uQ2hhbmdlKG5leHRSb290KTtcbiAgICB9XG4gICAgcmV0dXJuIG5leHRSb290O1xuICB9XG59XG5cbmNsYXNzIFZhbHVlUm9vdCBleHRlbmRzIFZhbHVlIHtcblxuICBrZXlQYXRoID0gW107XG4gIHBhcmVudCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3Ioc2NoZW1hLCB2YWx1ZSwgb25DaGFuZ2UsIHBhcmFtcywgZXJyb3JMaXN0KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9yb290ID0gdGhpcztcbiAgICB0aGlzLmtleVBhdGggPSBbXTtcbiAgICB0aGlzLnNjaGVtYSA9IHNjaGVtYTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5vbkNoYW5nZSA9IG9uQ2hhbmdlO1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICAgIHRoaXMuZXJyb3JMaXN0ID0gZXJyb3JMaXN0LmZpbHRlcihlcnJvciA9PiBlcnJvci5maWVsZCA9PT0gJ2RhdGEnKTtcbiAgICB0aGlzLmNvbXBsZXRlRXJyb3JMaXN0ID0gZXJyb3JMaXN0O1xuICB9XG59XG5cbmNsYXNzIFZhbHVlTGVhZiBleHRlbmRzIFZhbHVlIHtcblxuICBjb25zdHJ1Y3Rvcihyb290LCBrZXlQYXRoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9yb290ID0gcm9vdDtcbiAgICB0aGlzLmtleVBhdGggPSBrZXlQYXRoO1xuICAgIHRoaXMuc2NoZW1hID0gc2VsZWN0U2NoZW1hKHJvb3Quc2NoZW1hLCBrZXlQYXRoKTtcbiAgICB0aGlzLnZhbHVlID0gc2VsZWN0VmFsdWUocm9vdC52YWx1ZSwga2V5UGF0aCk7XG4gIH1cblxuICBnZXQgcGFyYW1zKCkge1xuICAgIHJldHVybiB0aGlzLl9yb290LnBhcmFtcztcbiAgfVxuXG4gIEBtZW1vaXplXG4gIGdldCBlcnJvckxpc3QoKSB7XG4gICAgbGV0IGVycm9yS2V5UGF0aCA9IGBkYXRhLiR7dGhpcy5rZXlQYXRoLmpvaW4oJy4nKX1gO1xuICAgIHJldHVybiB0aGlzLl9yb290LmNvbXBsZXRlRXJyb3JMaXN0LmZpbHRlcihlcnJvciA9PiBlcnJvci5maWVsZCA9PT0gZXJyb3JLZXlQYXRoKTtcbiAgfVxuXG4gIEBtZW1vaXplXG4gIGdldCBjb21wbGV0ZUVycm9yTGlzdCgpIHtcbiAgICBsZXQgZXJyb3JLZXlQYXRoID0gYGRhdGEuJHt0aGlzLmtleVBhdGguam9pbignLicpfWA7XG4gICAgbGV0IGxlbmd0aCA9IGVycm9yS2V5UGF0aC5sZW5ndGg7XG4gICAgcmV0dXJuIHRoaXMuX3Jvb3QuY29tcGxldGVFcnJvckxpc3RcbiAgICAgIC5maWx0ZXIoZXJyb3IgPT4gZXJyb3IuZmllbGQuc2xpY2UoMCwgbGVuZ3RoKSA9PT0gZXJyb3JLZXlQYXRoKTtcbiAgfVxuXG4gIGdldCBwYXJlbnQoKSB7XG4gICAgaWYgKHRoaXMua2V5UGF0aC5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yb290O1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQga2V5UGF0aCA9IHRoaXMua2V5UGF0aC5zbGljZSgpO1xuICAgICAga2V5UGF0aC5wb3AoKTtcbiAgICAgIHJldHVybiBuZXcgVmFsdWVMZWFmKFxuICAgICAgICB0aGlzLl9yb290LFxuICAgICAgICBrZXlQYXRoXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG59XG5cbmNvbnN0IE5PTl9FTlVNRVJBQkxFX1BST1AgPSB7XG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICB3cml0YWJsZTogdHJ1ZSxcbiAgY29uZmlndXJhYmxlOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBjYWNoZShvYmosIGtleSwgdmFsdWUpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7Li4uTk9OX0VOVU1FUkFCTEVfUFJPUCwgdmFsdWV9KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGUoc2NoZW1hLCB2YWx1ZSkge1xuICBpZiAoIXNjaGVtYSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBpZiAodmFsdWUuX19zY2hlbWEgPT09IHNjaGVtYSAmJiB2YWx1ZS5fX2Vycm9yTGlzdCkge1xuICAgIHJldHVybiB2YWx1ZS5fX2Vycm9yTGlzdDtcbiAgfSBlbHNlIHtcbiAgICBpZiAoc2NoZW1hLl9fdmFsaWRhdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNhY2hlKHNjaGVtYSwgJ19fdmFsaWRhdG9yJywgY3JlYXRlVmFsaWRhdG9yKHNjaGVtYSwge2Zvcm1hdHM6IHNjaGVtYS5mb3JtYXRzfSkpO1xuICAgIH1cbiAgICBzY2hlbWEuX192YWxpZGF0b3IodmFsdWUpO1xuICAgIGxldCBlcnJvckxpc3QgPSBzY2hlbWEuX192YWxpZGF0b3IuZXJyb3JzIHx8IFtdO1xuICAgIGNhY2hlKHZhbHVlLCAnX19zY2hlbWEnLCBzY2hlbWEpO1xuICAgIGNhY2hlKHZhbHVlLCAnX19lcnJvckxpc3QnLCBlcnJvckxpc3QpO1xuICAgIHJldHVybiBlcnJvckxpc3Q7XG4gIH1cbn1cblxuLyoqXG4gKiBDaGVjayBpZiB2YWx1ZSBpcyBhIGZvcm0gdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbHVlKG1heWJlVmFsdWUpIHtcbiAgcmV0dXJuIG1heWJlVmFsdWUgaW5zdGFuY2VvZiBWYWx1ZTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgcm9vdCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVmFsdWUoXG4gICAgc2NoZW1hLFxuICAgIHZhbHVlID0ge30sXG4gICAgb25DaGFuZ2UgPSBlbXB0eUZ1bmN0aW9uLFxuICAgIHBhcmFtcyA9IHt9LFxuICAgIGVycm9yTGlzdCA9IG51bGwpIHtcbiAgaWYgKGVycm9yTGlzdCA9PT0gbnVsbCkge1xuICAgIGVycm9yTGlzdCA9IHZhbGlkYXRlKHNjaGVtYSwgdmFsdWUpO1xuICB9XG4gIHJldHVybiBuZXcgVmFsdWVSb290KHNjaGVtYSwgdmFsdWUsIG9uQ2hhbmdlLCBwYXJhbXMsIGVycm9yTGlzdCk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9WYWx1ZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzWydkZWZhdWx0J10gPSBtZW1vaXplO1xuLyoqXG4gKiBAY29weXJpZ2h0IDIwMTUsIEFuZHJleSBQb3BwIDw4bWF5ZGF5QGdtYWlsLmNvbT5cbiAqL1xuXG52YXIgU0VOVElORUwgPSB7fTtcblxuZnVuY3Rpb24gbWVtb2l6ZSh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpIHtcbiAgaWYgKHR5cGVvZiBkZXNjcmlwdG9yLnZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIF9tZW1vaXplTWV0aG9kKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcik7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGRlc2NyaXB0b3IuZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIF9tZW1vaXplR2V0dGVyKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcik7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdAbWVtb2l6ZSBkZWNvcmF0b3IgY2FuIGJlIGFwcGxpZWQgdG8gbWV0aG9kcyBvciBnZXR0ZXJzLCBnb3QgJyArIFN0cmluZyhkZXNjcmlwdG9yLnZhbHVlKSArICcgaW5zdGVhZCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9tZW1vaXplR2V0dGVyKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcikge1xuICB2YXIgbWVtb2l6ZWROYW1lID0gJ19tZW1vaXplZF8nICsgbmFtZTtcbiAgdmFyIGdldCA9IGRlc2NyaXB0b3IuZ2V0O1xuICB0YXJnZXRbbWVtb2l6ZWROYW1lXSA9IFNFTlRJTkVMO1xuICByZXR1cm4gX2V4dGVuZHMoe30sIGRlc2NyaXB0b3IsIHtcbiAgICBnZXQ6IChmdW5jdGlvbiAoX2dldCkge1xuICAgICAgZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gX2dldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICBnZXQudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfZ2V0LnRvU3RyaW5nKCk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gZ2V0O1xuICAgIH0pKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzW21lbW9pemVkTmFtZV0gPT09IFNFTlRJTkVMKSB7XG4gICAgICAgIHRoaXNbbWVtb2l6ZWROYW1lXSA9IGdldC5jYWxsKHRoaXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXNbbWVtb2l6ZWROYW1lXTtcbiAgICB9KVxuICB9KTtcbn1cblxuZnVuY3Rpb24gX21lbW9pemVNZXRob2QodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XG4gIGlmIChkZXNjcmlwdG9yLnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0BtZW1vaXplIGRlY29yYXRvciBjYW4gb25seSBiZSBhcHBsaWVkIHRvIG1ldGhvZHMgb2YgemVybyBhcmd1bWVudHMnKTtcbiAgfVxuICB2YXIgbWVtb2l6ZWROYW1lID0gJ19tZW1vaXplZF8nICsgbmFtZTtcbiAgdmFyIHZhbHVlID0gZGVzY3JpcHRvci52YWx1ZTtcbiAgdGFyZ2V0W21lbW9pemVkTmFtZV0gPSBTRU5USU5FTDtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBkZXNjcmlwdG9yLCB7XG4gICAgdmFsdWU6IChmdW5jdGlvbiAoX3ZhbHVlKSB7XG4gICAgICBmdW5jdGlvbiB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIF92YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICB2YWx1ZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF92YWx1ZS50b1N0cmluZygpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0pKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzW21lbW9pemVkTmFtZV0gPT09IFNFTlRJTkVMKSB7XG4gICAgICAgIHRoaXNbbWVtb2l6ZWROYW1lXSA9IHZhbHVlLmNhbGwodGhpcyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpc1ttZW1vaXplZE5hbWVdO1xuICAgIH0pXG4gIH0pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9tZW1vaXplLWRlY29yYXRvci9saWIvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGJhc2VDbG9uZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2Jhc2VDbG9uZScpLFxuICAgIGJpbmRDYWxsYmFjayA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2JpbmRDYWxsYmFjaycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWVwIGNsb25lIG9mIGB2YWx1ZWAuIElmIGBjdXN0b21pemVyYCBpcyBwcm92aWRlZCBpdCdzIGludm9rZWRcbiAqIHRvIHByb2R1Y2UgdGhlIGNsb25lZCB2YWx1ZXMuIElmIGBjdXN0b21pemVyYCByZXR1cm5zIGB1bmRlZmluZWRgIGNsb25pbmdcbiAqIGlzIGhhbmRsZWQgYnkgdGhlIG1ldGhvZCBpbnN0ZWFkLiBUaGUgYGN1c3RvbWl6ZXJgIGlzIGJvdW5kIHRvIGB0aGlzQXJnYFxuICogYW5kIGludm9rZWQgd2l0aCB1cCB0byB0aHJlZSBhcmd1bWVudDsgKHZhbHVlIFssIGluZGV4fGtleSwgb2JqZWN0XSkuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb24gdGhlXG4gKiBbc3RydWN0dXJlZCBjbG9uZSBhbGdvcml0aG1dKGh0dHA6Ly93d3cudzMub3JnL1RSL2h0bWw1L2luZnJhc3RydWN0dXJlLmh0bWwjaW50ZXJuYWwtc3RydWN0dXJlZC1jbG9uaW5nLWFsZ29yaXRobSkuXG4gKiBUaGUgZW51bWVyYWJsZSBwcm9wZXJ0aWVzIG9mIGBhcmd1bWVudHNgIG9iamVjdHMgYW5kIG9iamVjdHMgY3JlYXRlZCBieVxuICogY29uc3RydWN0b3JzIG90aGVyIHRoYW4gYE9iamVjdGAgYXJlIGNsb25lZCB0byBwbGFpbiBgT2JqZWN0YCBvYmplY3RzLiBBblxuICogZW1wdHkgb2JqZWN0IGlzIHJldHVybmVkIGZvciB1bmNsb25lYWJsZSB2YWx1ZXMgc3VjaCBhcyBmdW5jdGlvbnMsIERPTSBub2RlcyxcbiAqIE1hcHMsIFNldHMsIGFuZCBXZWFrTWFwcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGRlZXAgY2xvbmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjbG9uaW5nIHZhbHVlcy5cbiAqIEBwYXJhbSB7Kn0gW3RoaXNBcmddIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgY3VzdG9taXplcmAuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZGVlcCBjbG9uZWQgdmFsdWUuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciB1c2VycyA9IFtcbiAqICAgeyAndXNlcic6ICdiYXJuZXknIH0sXG4gKiAgIHsgJ3VzZXInOiAnZnJlZCcgfVxuICogXTtcbiAqXG4gKiB2YXIgZGVlcCA9IF8uY2xvbmVEZWVwKHVzZXJzKTtcbiAqIGRlZXBbMF0gPT09IHVzZXJzWzBdO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiAvLyB1c2luZyBhIGN1c3RvbWl6ZXIgY2FsbGJhY2tcbiAqIHZhciBlbCA9IF8uY2xvbmVEZWVwKGRvY3VtZW50LmJvZHksIGZ1bmN0aW9uKHZhbHVlKSB7XG4gKiAgIGlmIChfLmlzRWxlbWVudCh2YWx1ZSkpIHtcbiAqICAgICByZXR1cm4gdmFsdWUuY2xvbmVOb2RlKHRydWUpO1xuICogICB9XG4gKiB9KTtcbiAqXG4gKiBlbCA9PT0gZG9jdW1lbnQuYm9keVxuICogLy8gPT4gZmFsc2VcbiAqIGVsLm5vZGVOYW1lXG4gKiAvLyA9PiBCT0RZXG4gKiBlbC5jaGlsZE5vZGVzLmxlbmd0aDtcbiAqIC8vID0+IDIwXG4gKi9cbmZ1bmN0aW9uIGNsb25lRGVlcCh2YWx1ZSwgY3VzdG9taXplciwgdGhpc0FyZykge1xuICByZXR1cm4gdHlwZW9mIGN1c3RvbWl6ZXIgPT0gJ2Z1bmN0aW9uJ1xuICAgID8gYmFzZUNsb25lKHZhbHVlLCB0cnVlLCBiaW5kQ2FsbGJhY2soY3VzdG9taXplciwgdGhpc0FyZywgMykpXG4gICAgOiBiYXNlQ2xvbmUodmFsdWUsIHRydWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lRGVlcDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9sYW5nL2Nsb25lRGVlcC5qc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYXJyYXlDb3B5ID0gcmVxdWlyZSgnLi9hcnJheUNvcHknKSxcbiAgICBhcnJheUVhY2ggPSByZXF1aXJlKCcuL2FycmF5RWFjaCcpLFxuICAgIGJhc2VBc3NpZ24gPSByZXF1aXJlKCcuL2Jhc2VBc3NpZ24nKSxcbiAgICBiYXNlRm9yT3duID0gcmVxdWlyZSgnLi9iYXNlRm9yT3duJyksXG4gICAgaW5pdENsb25lQXJyYXkgPSByZXF1aXJlKCcuL2luaXRDbG9uZUFycmF5JyksXG4gICAgaW5pdENsb25lQnlUYWcgPSByZXF1aXJlKCcuL2luaXRDbG9uZUJ5VGFnJyksXG4gICAgaW5pdENsb25lT2JqZWN0ID0gcmVxdWlyZSgnLi9pbml0Q2xvbmVPYmplY3QnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FycmF5JyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9sYW5nL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgc3VwcG9ydGVkIGJ5IGBfLmNsb25lYC4gKi9cbnZhciBjbG9uZWFibGVUYWdzID0ge307XG5jbG9uZWFibGVUYWdzW2FyZ3NUYWddID0gY2xvbmVhYmxlVGFnc1thcnJheVRhZ10gPVxuY2xvbmVhYmxlVGFnc1thcnJheUJ1ZmZlclRhZ10gPSBjbG9uZWFibGVUYWdzW2Jvb2xUYWddID1cbmNsb25lYWJsZVRhZ3NbZGF0ZVRhZ10gPSBjbG9uZWFibGVUYWdzW2Zsb2F0MzJUYWddID1cbmNsb25lYWJsZVRhZ3NbZmxvYXQ2NFRhZ10gPSBjbG9uZWFibGVUYWdzW2ludDhUYWddID1cbmNsb25lYWJsZVRhZ3NbaW50MTZUYWddID0gY2xvbmVhYmxlVGFnc1tpbnQzMlRhZ10gPVxuY2xvbmVhYmxlVGFnc1tudW1iZXJUYWddID0gY2xvbmVhYmxlVGFnc1tvYmplY3RUYWddID1cbmNsb25lYWJsZVRhZ3NbcmVnZXhwVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc3RyaW5nVGFnXSA9XG5jbG9uZWFibGVUYWdzW3VpbnQ4VGFnXSA9IGNsb25lYWJsZVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9XG5jbG9uZWFibGVUYWdzW3VpbnQxNlRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xuY2xvbmVhYmxlVGFnc1tlcnJvclRhZ10gPSBjbG9uZWFibGVUYWdzW2Z1bmNUYWddID1cbmNsb25lYWJsZVRhZ3NbbWFwVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc2V0VGFnXSA9XG5jbG9uZWFibGVUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmpUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNsb25lYCB3aXRob3V0IHN1cHBvcnQgZm9yIGFyZ3VtZW50IGp1Z2dsaW5nXG4gKiBhbmQgYHRoaXNgIGJpbmRpbmcgYGN1c3RvbWl6ZXJgIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY2xvbmluZyB2YWx1ZXMuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2tleV0gVGhlIGtleSBvZiBgdmFsdWVgLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgYHZhbHVlYCBiZWxvbmdzIHRvLlxuICogQHBhcmFtIHtBcnJheX0gW3N0YWNrQT1bXV0gVHJhY2tzIHRyYXZlcnNlZCBzb3VyY2Ugb2JqZWN0cy5cbiAqIEBwYXJhbSB7QXJyYXl9IFtzdGFja0I9W11dIEFzc29jaWF0ZXMgY2xvbmVzIHdpdGggc291cmNlIGNvdW50ZXJwYXJ0cy5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBjbG9uZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VDbG9uZSh2YWx1ZSwgaXNEZWVwLCBjdXN0b21pemVyLCBrZXksIG9iamVjdCwgc3RhY2tBLCBzdGFja0IpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICByZXN1bHQgPSBvYmplY3QgPyBjdXN0b21pemVyKHZhbHVlLCBrZXksIG9iamVjdCkgOiBjdXN0b21pemVyKHZhbHVlKTtcbiAgfVxuICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpO1xuICBpZiAoaXNBcnIpIHtcbiAgICByZXN1bHQgPSBpbml0Q2xvbmVBcnJheSh2YWx1ZSk7XG4gICAgaWYgKCFpc0RlZXApIHtcbiAgICAgIHJldHVybiBhcnJheUNvcHkodmFsdWUsIHJlc3VsdCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciB0YWcgPSBvYmpUb1N0cmluZy5jYWxsKHZhbHVlKSxcbiAgICAgICAgaXNGdW5jID0gdGFnID09IGZ1bmNUYWc7XG5cbiAgICBpZiAodGFnID09IG9iamVjdFRhZyB8fCB0YWcgPT0gYXJnc1RhZyB8fCAoaXNGdW5jICYmICFvYmplY3QpKSB7XG4gICAgICByZXN1bHQgPSBpbml0Q2xvbmVPYmplY3QoaXNGdW5jID8ge30gOiB2YWx1ZSk7XG4gICAgICBpZiAoIWlzRGVlcCkge1xuICAgICAgICByZXR1cm4gYmFzZUFzc2lnbihyZXN1bHQsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNsb25lYWJsZVRhZ3NbdGFnXVxuICAgICAgICA/IGluaXRDbG9uZUJ5VGFnKHZhbHVlLCB0YWcsIGlzRGVlcClcbiAgICAgICAgOiAob2JqZWN0ID8gdmFsdWUgOiB7fSk7XG4gICAgfVxuICB9XG4gIC8vIENoZWNrIGZvciBjaXJjdWxhciByZWZlcmVuY2VzIGFuZCByZXR1cm4gaXRzIGNvcnJlc3BvbmRpbmcgY2xvbmUuXG4gIHN0YWNrQSB8fCAoc3RhY2tBID0gW10pO1xuICBzdGFja0IgfHwgKHN0YWNrQiA9IFtdKTtcblxuICB2YXIgbGVuZ3RoID0gc3RhY2tBLmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKHN0YWNrQVtsZW5ndGhdID09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gc3RhY2tCW2xlbmd0aF07XG4gICAgfVxuICB9XG4gIC8vIEFkZCB0aGUgc291cmNlIHZhbHVlIHRvIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cyBhbmQgYXNzb2NpYXRlIGl0IHdpdGggaXRzIGNsb25lLlxuICBzdGFja0EucHVzaCh2YWx1ZSk7XG4gIHN0YWNrQi5wdXNoKHJlc3VsdCk7XG5cbiAgLy8gUmVjdXJzaXZlbHkgcG9wdWxhdGUgY2xvbmUgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgKGlzQXJyID8gYXJyYXlFYWNoIDogYmFzZUZvck93bikodmFsdWUsIGZ1bmN0aW9uKHN1YlZhbHVlLCBrZXkpIHtcbiAgICByZXN1bHRba2V5XSA9IGJhc2VDbG9uZShzdWJWYWx1ZSwgaXNEZWVwLCBjdXN0b21pemVyLCBrZXksIHZhbHVlLCBzdGFja0EsIHN0YWNrQik7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VDbG9uZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlQ2xvbmUuanNcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3BpZXMgdGhlIHZhbHVlcyBvZiBgc291cmNlYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBzb3VyY2UgVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXk9W11dIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyB0by5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheUNvcHkoc291cmNlLCBhcnJheSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHNvdXJjZS5sZW5ndGg7XG5cbiAgYXJyYXkgfHwgKGFycmF5ID0gQXJyYXkobGVuZ3RoKSk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbaW5kZXhdID0gc291cmNlW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlDb3B5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2FycmF5Q29weS5qc1xuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5mb3JFYWNoYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgY2FsbGJhY2tcbiAqIHNob3J0aGFuZHMgYW5kIGB0aGlzYCBiaW5kaW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheUVhY2goYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSA9PT0gZmFsc2UpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlFYWNoO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2FycmF5RWFjaC5qc1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYmFzZUNvcHkgPSByZXF1aXJlKCcuL2Jhc2VDb3B5JyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4uL29iamVjdC9rZXlzJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uYXNzaWduYCB3aXRob3V0IHN1cHBvcnQgZm9yIGFyZ3VtZW50IGp1Z2dsaW5nLFxuICogbXVsdGlwbGUgc291cmNlcywgYW5kIGBjdXN0b21pemVyYCBmdW5jdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduKG9iamVjdCwgc291cmNlKSB7XG4gIHJldHVybiBzb3VyY2UgPT0gbnVsbFxuICAgID8gb2JqZWN0XG4gICAgOiBiYXNlQ29weShzb3VyY2UsIGtleXMoc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQXNzaWduO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2Jhc2VBc3NpZ24uanNcbiAqKiBtb2R1bGUgaWQgPSAzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3BpZXMgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IG5hbWVzIHRvIGNvcHkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlQ29weShzb3VyY2UsIHByb3BzLCBvYmplY3QpIHtcbiAgb2JqZWN0IHx8IChvYmplY3QgPSB7fSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuICAgIG9iamVjdFtrZXldID0gc291cmNlW2tleV07XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQ29weTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlQ29weS5qc1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvZ2V0TmF0aXZlJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc0FycmF5TGlrZScpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vbGFuZy9pc09iamVjdCcpLFxuICAgIHNoaW1LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvc2hpbUtleXMnKTtcblxuLyogTmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2tleXMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xudmFyIGtleXMgPSAhbmF0aXZlS2V5cyA/IHNoaW1LZXlzIDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIHZhciBDdG9yID0gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3QuY29uc3RydWN0b3I7XG4gIGlmICgodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSA9PT0gb2JqZWN0KSB8fFxuICAgICAgKHR5cGVvZiBvYmplY3QgIT0gJ2Z1bmN0aW9uJyAmJiBpc0FycmF5TGlrZShvYmplY3QpKSkge1xuICAgIHJldHVybiBzaGltS2V5cyhvYmplY3QpO1xuICB9XG4gIHJldHVybiBpc09iamVjdChvYmplY3QpID8gbmF0aXZlS2V5cyhvYmplY3QpIDogW107XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvb2JqZWN0L2tleXMuanNcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdldExlbmd0aCA9IHJlcXVpcmUoJy4vZ2V0TGVuZ3RoJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKGdldExlbmd0aCh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2lzQXJyYXlMaWtlLmpzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBiYXNlUHJvcGVydHkgPSByZXF1aXJlKCcuL2Jhc2VQcm9wZXJ0eScpO1xuXG4vKipcbiAqIEdldHMgdGhlIFwibGVuZ3RoXCIgcHJvcGVydHkgdmFsdWUgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBhdm9pZCBhIFtKSVQgYnVnXShodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTQyNzkyKVxuICogdGhhdCBhZmZlY3RzIFNhZmFyaSBvbiBhdCBsZWFzdCBpT1MgOC4xLTguMyBBUk02NC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIFwibGVuZ3RoXCIgdmFsdWUuXG4gKi9cbnZhciBnZXRMZW5ndGggPSBiYXNlUHJvcGVydHkoJ2xlbmd0aCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldExlbmd0aDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9nZXRMZW5ndGguanNcbiAqKiBtb2R1bGUgaWQgPSAzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5wcm9wZXJ0eWAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHkoa2V5KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUHJvcGVydHk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZVByb3BlcnR5LmpzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FycmF5JyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vaXNJbmRleCcpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIGtleXNJbiA9IHJlcXVpcmUoJy4uL29iamVjdC9rZXlzSW4nKTtcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQSBmYWxsYmFjayBpbXBsZW1lbnRhdGlvbiBvZiBgT2JqZWN0LmtleXNgIHdoaWNoIGNyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlXG4gKiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gc2hpbUtleXMob2JqZWN0KSB7XG4gIHZhciBwcm9wcyA9IGtleXNJbihvYmplY3QpLFxuICAgICAgcHJvcHNMZW5ndGggPSBwcm9wcy5sZW5ndGgsXG4gICAgICBsZW5ndGggPSBwcm9wc0xlbmd0aCAmJiBvYmplY3QubGVuZ3RoO1xuXG4gIHZhciBhbGxvd0luZGV4ZXMgPSAhIWxlbmd0aCAmJiBpc0xlbmd0aChsZW5ndGgpICYmXG4gICAgKGlzQXJyYXkob2JqZWN0KSB8fCBpc0FyZ3VtZW50cyhvYmplY3QpKTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgcHJvcHNMZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuICAgIGlmICgoYWxsb3dJbmRleGVzICYmIGlzSW5kZXgoa2V5LCBsZW5ndGgpKSB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaGltS2V5cztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9zaGltS2V5cy5qc1xuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc0FycmF5TGlrZScpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIE5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzQXJyYXlMaWtlKHZhbHVlKSAmJlxuICAgIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJiAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJndW1lbnRzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2xhbmcvaXNBcmd1bWVudHMuanNcbiAqKiBtb2R1bGUgaWQgPSAzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL15cXGQrJC87XG5cbi8qKlxuICogVXNlZCBhcyB0aGUgW21heGltdW0gbGVuZ3RoXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1udW1iZXIubWF4X3NhZmVfaW50ZWdlcilcbiAqIG9mIGFuIGFycmF5LWxpa2UgdmFsdWUuXG4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgdmFsdWUgPSAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSA/ICt2YWx1ZSA6IC0xO1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG4gIHJldHVybiB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSW5kZXg7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvaXNJbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuLi9sYW5nL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcnJheScpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc0luZGV4JyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc0xlbmd0aCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vbGFuZy9pc09iamVjdCcpO1xuXG4vKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXNJbihuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJywgJ2MnXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICovXG5mdW5jdGlvbiBrZXlzSW4ob2JqZWN0KSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgfVxuICB2YXIgbGVuZ3RoID0gb2JqZWN0Lmxlbmd0aDtcbiAgbGVuZ3RoID0gKGxlbmd0aCAmJiBpc0xlbmd0aChsZW5ndGgpICYmXG4gICAgKGlzQXJyYXkob2JqZWN0KSB8fCBpc0FyZ3VtZW50cyhvYmplY3QpKSAmJiBsZW5ndGgpIHx8IDA7XG5cbiAgdmFyIEN0b3IgPSBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICBpbmRleCA9IC0xLFxuICAgICAgaXNQcm90byA9IHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUgPT09IG9iamVjdCxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCksXG4gICAgICBza2lwSW5kZXhlcyA9IGxlbmd0aCA+IDA7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gKGluZGV4ICsgJycpO1xuICB9XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAoIShza2lwSW5kZXhlcyAmJiBpc0luZGV4KGtleSwgbGVuZ3RoKSkgJiZcbiAgICAgICAgIShrZXkgPT0gJ2NvbnN0cnVjdG9yJyAmJiAoaXNQcm90byB8fCAhaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzSW47XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvb2JqZWN0L2tleXNJbi5qc1xuICoqIG1vZHVsZSBpZCA9IDM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYmFzZUZvciA9IHJlcXVpcmUoJy4vYmFzZUZvcicpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuLi9vYmplY3Qva2V5cycpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZvck93bmAgd2l0aG91dCBzdXBwb3J0IGZvciBjYWxsYmFja1xuICogc2hvcnRoYW5kcyBhbmQgYHRoaXNgIGJpbmRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUZvck93bihvYmplY3QsIGl0ZXJhdGVlKSB7XG4gIHJldHVybiBiYXNlRm9yKG9iamVjdCwgaXRlcmF0ZWUsIGtleXMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGb3JPd247XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUZvck93bi5qc1xuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgY3JlYXRlQmFzZUZvciA9IHJlcXVpcmUoJy4vY3JlYXRlQmFzZUZvcicpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBiYXNlRm9ySW5gIGFuZCBgYmFzZUZvck93bmAgd2hpY2ggaXRlcmF0ZXNcbiAqIG92ZXIgYG9iamVjdGAgcHJvcGVydGllcyByZXR1cm5lZCBieSBga2V5c0Z1bmNgIGludm9raW5nIGBpdGVyYXRlZWAgZm9yXG4gKiBlYWNoIHByb3BlcnR5LiBJdGVyYXRlZSBmdW5jdGlvbnMgbWF5IGV4aXQgaXRlcmF0aW9uIGVhcmx5IGJ5IGV4cGxpY2l0bHlcbiAqIHJldHVybmluZyBgZmFsc2VgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG52YXIgYmFzZUZvciA9IGNyZWF0ZUJhc2VGb3IoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRm9yO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2Jhc2VGb3IuanNcbiAqKiBtb2R1bGUgaWQgPSA0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi90b09iamVjdCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBiYXNlIGZ1bmN0aW9uIGZvciBgXy5mb3JJbmAgb3IgYF8uZm9ySW5SaWdodGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYmFzZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQmFzZUZvcihmcm9tUmlnaHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCwgaXRlcmF0ZWUsIGtleXNGdW5jKSB7XG4gICAgdmFyIGl0ZXJhYmxlID0gdG9PYmplY3Qob2JqZWN0KSxcbiAgICAgICAgcHJvcHMgPSBrZXlzRnVuYyhvYmplY3QpLFxuICAgICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGgsXG4gICAgICAgIGluZGV4ID0gZnJvbVJpZ2h0ID8gbGVuZ3RoIDogLTE7XG5cbiAgICB3aGlsZSAoKGZyb21SaWdodCA/IGluZGV4LS0gOiArK2luZGV4IDwgbGVuZ3RoKSkge1xuICAgICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcbiAgICAgIGlmIChpdGVyYXRlZShpdGVyYWJsZVtrZXldLCBrZXksIGl0ZXJhYmxlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQmFzZUZvcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9jcmVhdGVCYXNlRm9yLmpzXG4gKiogbW9kdWxlIGlkID0gNDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2xhbmcvaXNPYmplY3QnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGFuIG9iamVjdCBpZiBpdCdzIG5vdCBvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWx1ZSkgPyB2YWx1ZSA6IE9iamVjdCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9PYmplY3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvdG9PYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSA0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gYXJyYXkgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZUFycmF5KGFycmF5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBuZXcgYXJyYXkuY29uc3RydWN0b3IobGVuZ3RoKTtcblxuICAvLyBBZGQgYXJyYXkgcHJvcGVydGllcyBhc3NpZ25lZCBieSBgUmVnRXhwI2V4ZWNgLlxuICBpZiAobGVuZ3RoICYmIHR5cGVvZiBhcnJheVswXSA9PSAnc3RyaW5nJyAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGFycmF5LCAnaW5kZXgnKSkge1xuICAgIHJlc3VsdC5pbmRleCA9IGFycmF5LmluZGV4O1xuICAgIHJlc3VsdC5pbnB1dCA9IGFycmF5LmlucHV0O1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdENsb25lQXJyYXk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvaW5pdENsb25lQXJyYXkuanNcbiAqKiBtb2R1bGUgaWQgPSA0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGJ1ZmZlckNsb25lID0gcmVxdWlyZSgnLi9idWZmZXJDbG9uZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBgUmVnRXhwYCBmbGFncyBmcm9tIHRoZWlyIGNvZXJjZWQgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUZsYWdzID0gL1xcdyokLztcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUgYmFzZWQgb24gaXRzIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjbG9uaW5nIHZhbHVlcyB3aXRoIHRhZ3Mgb2ZcbiAqIGBCb29sZWFuYCwgYERhdGVgLCBgRXJyb3JgLCBgTnVtYmVyYCwgYFJlZ0V4cGAsIG9yIGBTdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnIFRoZSBgdG9TdHJpbmdUYWdgIG9mIHRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZUJ5VGFnKG9iamVjdCwgdGFnLCBpc0RlZXApIHtcbiAgdmFyIEN0b3IgPSBvYmplY3QuY29uc3RydWN0b3I7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBhcnJheUJ1ZmZlclRhZzpcbiAgICAgIHJldHVybiBidWZmZXJDbG9uZShvYmplY3QpO1xuXG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICAgIHJldHVybiBuZXcgQ3Rvcigrb2JqZWN0KTtcblxuICAgIGNhc2UgZmxvYXQzMlRhZzogY2FzZSBmbG9hdDY0VGFnOlxuICAgIGNhc2UgaW50OFRhZzogY2FzZSBpbnQxNlRhZzogY2FzZSBpbnQzMlRhZzpcbiAgICBjYXNlIHVpbnQ4VGFnOiBjYXNlIHVpbnQ4Q2xhbXBlZFRhZzogY2FzZSB1aW50MTZUYWc6IGNhc2UgdWludDMyVGFnOlxuICAgICAgdmFyIGJ1ZmZlciA9IG9iamVjdC5idWZmZXI7XG4gICAgICByZXR1cm4gbmV3IEN0b3IoaXNEZWVwID8gYnVmZmVyQ2xvbmUoYnVmZmVyKSA6IGJ1ZmZlciwgb2JqZWN0LmJ5dGVPZmZzZXQsIG9iamVjdC5sZW5ndGgpO1xuXG4gICAgY2FzZSBudW1iZXJUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3Iob2JqZWN0KTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgICAgdmFyIHJlc3VsdCA9IG5ldyBDdG9yKG9iamVjdC5zb3VyY2UsIHJlRmxhZ3MuZXhlYyhvYmplY3QpKTtcbiAgICAgIHJlc3VsdC5sYXN0SW5kZXggPSBvYmplY3QubGFzdEluZGV4O1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdENsb25lQnlUYWc7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvaW5pdENsb25lQnlUYWcuanNcbiAqKiBtb2R1bGUgaWQgPSA0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqIE5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBBcnJheUJ1ZmZlciA9IGdsb2JhbC5BcnJheUJ1ZmZlcixcbiAgICBVaW50OEFycmF5ID0gZ2xvYmFsLlVpbnQ4QXJyYXk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIHRoZSBnaXZlbiBhcnJheSBidWZmZXIuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGJ1ZmZlciBUaGUgYXJyYXkgYnVmZmVyIHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYXJyYXkgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBidWZmZXJDbG9uZShidWZmZXIpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheUJ1ZmZlcihidWZmZXIuYnl0ZUxlbmd0aCksXG4gICAgICB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkocmVzdWx0KTtcblxuICB2aWV3LnNldChuZXcgVWludDhBcnJheShidWZmZXIpKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBidWZmZXJDbG9uZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9idWZmZXJDbG9uZS5qc1xuICoqIG1vZHVsZSBpZCA9IDQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZU9iamVjdChvYmplY3QpIHtcbiAgdmFyIEN0b3IgPSBvYmplY3QuY29uc3RydWN0b3I7XG4gIGlmICghKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3RvciBpbnN0YW5jZW9mIEN0b3IpKSB7XG4gICAgQ3RvciA9IE9iamVjdDtcbiAgfVxuICByZXR1cm4gbmV3IEN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdENsb25lT2JqZWN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2luaXRDbG9uZU9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaWRlbnRpdHkgPSByZXF1aXJlKCcuLi91dGlsaXR5L2lkZW50aXR5Jyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlQ2FsbGJhY2tgIHdoaWNoIG9ubHkgc3VwcG9ydHMgYHRoaXNgIGJpbmRpbmdcbiAqIGFuZCBzcGVjaWZ5aW5nIHRoZSBudW1iZXIgb2YgYXJndW1lbnRzIHRvIHByb3ZpZGUgdG8gYGZ1bmNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBiaW5kLlxuICogQHBhcmFtIHsqfSB0aGlzQXJnIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgZnVuY2AuXG4gKiBAcGFyYW0ge251bWJlcn0gW2FyZ0NvdW50XSBUaGUgbnVtYmVyIG9mIGFyZ3VtZW50cyB0byBwcm92aWRlIHRvIGBmdW5jYC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgY2FsbGJhY2suXG4gKi9cbmZ1bmN0aW9uIGJpbmRDYWxsYmFjayhmdW5jLCB0aGlzQXJnLCBhcmdDb3VudCkge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBpZGVudGl0eTtcbiAgfVxuICBpZiAodGhpc0FyZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH1cbiAgc3dpdGNoIChhcmdDb3VudCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIHZhbHVlKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbikge1xuICAgICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCB2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pO1xuICAgIH07XG4gICAgY2FzZSA0OiByZXR1cm4gZnVuY3Rpb24oYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbikge1xuICAgICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhY2N1bXVsYXRvciwgdmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKTtcbiAgICB9O1xuICAgIGNhc2UgNTogcmV0dXJuIGZ1bmN0aW9uKHZhbHVlLCBvdGhlciwga2V5LCBvYmplY3QsIHNvdXJjZSkge1xuICAgICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCB2YWx1ZSwgb3RoZXIsIGtleSwgb2JqZWN0LCBzb3VyY2UpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmluZENhbGxiYWNrO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2JpbmRDYWxsYmFjay5qc1xuICoqIG1vZHVsZSBpZCA9IDQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGZpcnN0IGFyZ3VtZW50IHByb3ZpZGVkIHRvIGl0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgVXRpbGl0eVxuICogQHBhcmFtIHsqfSB2YWx1ZSBBbnkgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyBgdmFsdWVgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAndXNlcic6ICdmcmVkJyB9O1xuICpcbiAqIF8uaWRlbnRpdHkob2JqZWN0KSA9PT0gb2JqZWN0O1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaWRlbnRpdHk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvdXRpbGl0eS9pZGVudGl0eS5qc1xuICoqIG1vZHVsZSBpZCA9IDQ5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYmFzZUdldCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2Jhc2VHZXQnKSxcbiAgICB0b1BhdGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbC90b1BhdGgnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBwcm9wZXJ0eSB2YWx1ZSBhdCBgcGF0aGAgb2YgYG9iamVjdGAuIElmIHRoZSByZXNvbHZlZCB2YWx1ZSBpc1xuICogYHVuZGVmaW5lZGAgdGhlIGBkZWZhdWx0VmFsdWVgIGlzIHVzZWQgaW4gaXRzIHBsYWNlLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBbZGVmYXVsdFZhbHVlXSBUaGUgdmFsdWUgcmV0dXJuZWQgaWYgdGhlIHJlc29sdmVkIHZhbHVlIGlzIGB1bmRlZmluZWRgLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc29sdmVkIHZhbHVlLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IFt7ICdiJzogeyAnYyc6IDMgfSB9XSB9O1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgJ2FbMF0uYi5jJyk7XG4gKiAvLyA9PiAzXG4gKlxuICogXy5nZXQob2JqZWN0LCBbJ2EnLCAnMCcsICdiJywgJ2MnXSk7XG4gKiAvLyA9PiAzXG4gKlxuICogXy5nZXQob2JqZWN0LCAnYS5iLmMnLCAnZGVmYXVsdCcpO1xuICogLy8gPT4gJ2RlZmF1bHQnXG4gKi9cbmZ1bmN0aW9uIGdldChvYmplY3QsIHBhdGgsIGRlZmF1bHRWYWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBiYXNlR2V0KG9iamVjdCwgdG9QYXRoKHBhdGgpLCAocGF0aCArICcnKSk7XG4gIHJldHVybiByZXN1bHQgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRWYWx1ZSA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvb2JqZWN0L2dldC5qc1xuICoqIG1vZHVsZSBpZCA9IDUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL3RvT2JqZWN0Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldGAgd2l0aG91dCBzdXBwb3J0IGZvciBzdHJpbmcgcGF0aHNcbiAqIGFuZCBkZWZhdWx0IHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheX0gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHtzdHJpbmd9IFtwYXRoS2V5XSBUaGUga2V5IHJlcHJlc2VudGF0aW9uIG9mIHBhdGguXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXQob2JqZWN0LCBwYXRoLCBwYXRoS2V5KSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAocGF0aEtleSAhPT0gdW5kZWZpbmVkICYmIHBhdGhLZXkgaW4gdG9PYmplY3Qob2JqZWN0KSkge1xuICAgIHBhdGggPSBbcGF0aEtleV07XG4gIH1cbiAgdmFyIGluZGV4ID0gMCxcbiAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuXG4gIHdoaWxlIChvYmplY3QgIT0gbnVsbCAmJiBpbmRleCA8IGxlbmd0aCkge1xuICAgIG9iamVjdCA9IG9iamVjdFtwYXRoW2luZGV4KytdXTtcbiAgfVxuICByZXR1cm4gKGluZGV4ICYmIGluZGV4ID09IGxlbmd0aCkgPyBvYmplY3QgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlR2V0LmpzXG4gKiogbW9kdWxlIGlkID0gNTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBiYXNlVG9TdHJpbmcgPSByZXF1aXJlKCcuL2Jhc2VUb1N0cmluZycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9sYW5nL2lzQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlUHJvcE5hbWUgPSAvW14uW1xcXV0rfFxcWyg/OigtP1xcZCsoPzpcXC5cXGQrKT8pfChbXCInXSkoKD86KD8hXFwyKVteXFxuXFxcXF18XFxcXC4pKj8pXFwyKVxcXS9nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBiYWNrc2xhc2hlcyBpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUVzY2FwZUNoYXIgPSAvXFxcXChcXFxcKT8vZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIHByb3BlcnR5IHBhdGggYXJyYXkgaWYgaXQncyBub3Qgb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICovXG5mdW5jdGlvbiB0b1BhdGgodmFsdWUpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgYmFzZVRvU3RyaW5nKHZhbHVlKS5yZXBsYWNlKHJlUHJvcE5hbWUsIGZ1bmN0aW9uKG1hdGNoLCBudW1iZXIsIHF1b3RlLCBzdHJpbmcpIHtcbiAgICByZXN1bHQucHVzaChxdW90ZSA/IHN0cmluZy5yZXBsYWNlKHJlRXNjYXBlQ2hhciwgJyQxJykgOiAobnVtYmVyIHx8IG1hdGNoKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvUGF0aDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC90b1BhdGguanNcbiAqKiBtb2R1bGUgaWQgPSA1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIGlmIGl0J3Mgbm90IG9uZS4gQW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkXG4gKiBmb3IgYG51bGxgIG9yIGB1bmRlZmluZWRgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiAodmFsdWUgKyAnJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRvU3RyaW5nO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2Jhc2VUb1N0cmluZy5qc1xuICoqIG1vZHVsZSBpZCA9IDUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzSW5kZXgnKSxcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzS2V5JyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9sYW5nL2lzT2JqZWN0JyksXG4gICAgdG9QYXRoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvdG9QYXRoJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgcHJvcGVydHkgdmFsdWUgb2YgYHBhdGhgIG9uIGBvYmplY3RgLiBJZiBhIHBvcnRpb24gb2YgYHBhdGhgXG4gKiBkb2VzIG5vdCBleGlzdCBpdCdzIGNyZWF0ZWQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBhdWdtZW50LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogW3sgJ2InOiB7ICdjJzogMyB9IH1dIH07XG4gKlxuICogXy5zZXQob2JqZWN0LCAnYVswXS5iLmMnLCA0KTtcbiAqIGNvbnNvbGUubG9nKG9iamVjdC5hWzBdLmIuYyk7XG4gKiAvLyA9PiA0XG4gKlxuICogXy5zZXQob2JqZWN0LCAneFswXS55LnonLCA1KTtcbiAqIGNvbnNvbGUubG9nKG9iamVjdC54WzBdLnkueik7XG4gKiAvLyA9PiA1XG4gKi9cbmZ1bmN0aW9uIHNldChvYmplY3QsIHBhdGgsIHZhbHVlKSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiBvYmplY3Q7XG4gIH1cbiAgdmFyIHBhdGhLZXkgPSAocGF0aCArICcnKTtcbiAgcGF0aCA9IChvYmplY3RbcGF0aEtleV0gIT0gbnVsbCB8fCBpc0tleShwYXRoLCBvYmplY3QpKSA/IFtwYXRoS2V5XSA6IHRvUGF0aChwYXRoKTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoLFxuICAgICAgbGFzdEluZGV4ID0gbGVuZ3RoIC0gMSxcbiAgICAgIG5lc3RlZCA9IG9iamVjdDtcblxuICB3aGlsZSAobmVzdGVkICE9IG51bGwgJiYgKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwYXRoW2luZGV4XTtcbiAgICBpZiAoaXNPYmplY3QobmVzdGVkKSkge1xuICAgICAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgICAgICBuZXN0ZWRba2V5XSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIGlmIChuZXN0ZWRba2V5XSA9PSBudWxsKSB7XG4gICAgICAgIG5lc3RlZFtrZXldID0gaXNJbmRleChwYXRoW2luZGV4ICsgMV0pID8gW10gOiB7fTtcbiAgICAgIH1cbiAgICB9XG4gICAgbmVzdGVkID0gbmVzdGVkW2tleV07XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvb2JqZWN0L3NldC5qc1xuICoqIG1vZHVsZSBpZCA9IDU0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcnJheScpLFxuICAgIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi90b09iamVjdCcpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBwcm9wZXJ0eSBuYW1lcyB3aXRoaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVJc0RlZXBQcm9wID0gL1xcLnxcXFsoPzpbXltcXF1dKnwoW1wiJ10pKD86KD8hXFwxKVteXFxuXFxcXF18XFxcXC4pKj9cXDEpXFxdLyxcbiAgICByZUlzUGxhaW5Qcm9wID0gL15cXHcqJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lIGFuZCBub3QgYSBwcm9wZXJ0eSBwYXRoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5IGtleXMgb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXkodmFsdWUsIG9iamVjdCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgaWYgKCh0eXBlID09ICdzdHJpbmcnICYmIHJlSXNQbGFpblByb3AudGVzdCh2YWx1ZSkpIHx8IHR5cGUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICFyZUlzRGVlcFByb3AudGVzdCh2YWx1ZSk7XG4gIHJldHVybiByZXN1bHQgfHwgKG9iamVjdCAhPSBudWxsICYmIHZhbHVlIGluIHRvT2JqZWN0KG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2lzS2V5LmpzXG4gKiogbW9kdWxlIGlkID0gNTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQGNvcHlyaWdodCAyMDE1LCBQcm9tZXRoZXVzIFJlc2VhcmNoLCBMTENcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgX2NyZWF0ZVZhbGlkYXRvciBmcm9tICcuL19zY2hlbWEnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVmFsaWRhdG9yKHNjaGVtYSwgb3B0aW9ucykge1xuICBvcHRpb25zID0ge1xuICAgIC4uLm9wdGlvbnMsXG4gICAgZ3JlZWR5OiB0cnVlLFxuICAgIHVuZGVmaW5lZEFzT2JqZWN0OiB0cnVlLFxuICAgIG51bGxBc09iamVjdDogdHJ1ZSxcbiAgICB1bmRlZmluZWRBc0FycmF5OiB0cnVlLFxuICAgIG51bGxBc1VuZGVmaW5lZDogdHJ1ZSxcbiAgICBudWxsQXNBcnJheTogdHJ1ZSxcbiAgICBudWxsQXNCb3R0b21UeXBlOiB0cnVlXG4gIH07XG4gIHJldHVybiBfY3JlYXRlVmFsaWRhdG9yKHNjaGVtYSwgb3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIF9nZW5lcmF0ZVNjaGVtYUJ1aWxkZXIodHlwZSkge1xuICByZXR1cm4gZnVuY3Rpb24gYnVpbGRlcihwYXJhbXMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZSxcbiAgICAgIGlzUmVxdWlyZWQ6IHBhcmFtcyA/ICEhcGFyYW1zLmlzUmVxdWlyZWQgOiBmYWxzZSxcbiAgICAgIC4uLnBhcmFtc1xuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3QocHJvcGVydGllcywgcGFyYW1zKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ29iamVjdCcsXG4gICAgcHJvcGVydGllcyxcbiAgICByZXF1aXJlZDogT2JqZWN0LmtleXMocHJvcGVydGllcykuZmlsdGVyKGsgPT4gcHJvcGVydGllc1trXS5pc1JlcXVpcmVkKSxcbiAgICBpc1JlcXVpcmVkOiBwYXJhbXMgPyAhIXBhcmFtcy5pc1JlcXVpcmVkIDogZmFsc2UsXG4gICAgLi4ucGFyYW1zXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJheShpdGVtcywgcGFyYW1zKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ2FycmF5JyxcbiAgICBpdGVtcyxcbiAgICBpc1JlcXVpcmVkOiBwYXJhbXMgPyAhIXBhcmFtcy5pc1JlcXVpcmVkIDogZmFsc2UsXG4gICAgLi4ucGFyYW1zXG4gIH07XG59XG5cbmV4cG9ydCBsZXQgc3RyaW5nID0gX2dlbmVyYXRlU2NoZW1hQnVpbGRlcignc3RyaW5nJyk7XG5leHBvcnQgbGV0IG51bWJlciA9IF9nZW5lcmF0ZVNjaGVtYUJ1aWxkZXIoJ251bWJlcicpO1xuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0KHNjaGVtYSwga2V5UGF0aCkge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0ga2V5UGF0aC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmICghc2NoZW1hKSB7XG4gICAgICByZXR1cm4gc2NoZW1hO1xuICAgIH1cbiAgICBzY2hlbWEgPSBfc2VsZWN0KHNjaGVtYSwga2V5UGF0aFtpXSk7XG4gIH1cbiAgcmV0dXJuIHNjaGVtYTtcbn1cblxuZnVuY3Rpb24gX3NlbGVjdChzY2hlbWEsIGtleSkge1xuICBpZiAoc2NoZW1hKSB7XG4gICAgaWYgKHNjaGVtYS50eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgbGV0IHN1YlNjaGVtYSA9IHNjaGVtYS5wcm9wZXJ0aWVzID9cbiAgICAgICAgc2NoZW1hLnByb3BlcnRpZXNba2V5XSA6XG4gICAgICAgIHVuZGVmaW5lZDtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHNjaGVtYS5yZXF1aXJlZCkpIHtcbiAgICAgICAgLy8gdHJhbnNmZXIgcmVxdWlyZWQgaW5mbyBvbnRvIHNjaGVtYVxuICAgICAgICBzdWJTY2hlbWEgPSB7XG4gICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgLi4uc3ViU2NoZW1hLFxuICAgICAgICAgIGlzUmVxdWlyZWQ6IHNjaGVtYS5yZXF1aXJlZC5pbmRleE9mKGtleSkgIT09IC0xXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gc3ViU2NoZW1hO1xuICAgIH0gZWxzZSBpZiAoc2NoZW1hLnR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgIGlmIChzY2hlbWEuaXRlbXMpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2NoZW1hLml0ZW1zKSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1kZXB0aFxuICAgICAgICAgIHJldHVybiBzY2hlbWEuaXRlbXNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gc2NoZW1hLml0ZW1zO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7SlNPTi5zdHJpbmdpZnkoc2NoZW1hKX0gJHtrZXl9YCk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9TY2hlbWEuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBnZW5vYmogICAgICA9IHJlcXVpcmUoJ2dlbmVyYXRlLW9iamVjdC1wcm9wZXJ0eScpXG52YXIgZ2VuZnVuICAgICAgPSByZXF1aXJlKCdnZW5lcmF0ZS1mdW5jdGlvbicpXG52YXIganNvbnBvaW50ZXIgPSByZXF1aXJlKCdqc29ucG9pbnRlcicpXG52YXIgeHRlbmQgICAgICAgPSByZXF1aXJlKCd4dGVuZCcpXG52YXIgZm9ybWF0cyAgICAgPSByZXF1aXJlKCcuL2Zvcm1hdHMnKVxuXG52YXIgZ2V0ID0gZnVuY3Rpb24ob2JqLCBhZGRpdGlvbmFsU2NoZW1hcywgcHRyKSB7XG4gIGlmICgvXmh0dHBzPzpcXC9cXC8vLnRlc3QocHRyKSkgcmV0dXJuIG51bGxcblxuICB2YXIgdmlzaXQgPSBmdW5jdGlvbihzdWIpIHtcbiAgICBpZiAoc3ViICYmIHN1Yi5pZCA9PT0gcHRyKSByZXR1cm4gc3ViXG4gICAgaWYgKHR5cGVvZiBzdWIgIT09ICdvYmplY3QnIHx8ICFzdWIpIHJldHVybiBudWxsXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHN1YikucmVkdWNlKGZ1bmN0aW9uKHJlcywgaykge1xuICAgICAgcmV0dXJuIHJlcyB8fCB2aXNpdChzdWJba10pXG4gICAgfSwgbnVsbClcbiAgfVxuXG4gIHZhciByZXMgPSB2aXNpdChvYmopXG4gIGlmIChyZXMpIHJldHVybiByZXNcblxuICBwdHIgPSBwdHIucmVwbGFjZSgvXiMvLCAnJylcbiAgcHRyID0gcHRyLnJlcGxhY2UoL1xcLyQvLCAnJylcblxuICB0cnkge1xuICAgIHJldHVybiBqc29ucG9pbnRlci5nZXQob2JqLCBkZWNvZGVVUkkocHRyKSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgdmFyIG90aGVyID0gYWRkaXRpb25hbFNjaGVtYXNbcHRyXSB8fCBhZGRpdGlvbmFsU2NoZW1hc1twdHIucmVwbGFjZSgvXiMvLCAnJyldXG4gICAgcmV0dXJuIG90aGVyIHx8IG51bGxcbiAgfVxufVxuXG52YXIgc3BsaXROYW1lID0gL1tcXFtcXF1dLztcblxudmFyIGZvcm1hdE5hbWUgPSBmdW5jdGlvbihmaWVsZCkge1xuICBmaWVsZCA9IGZpZWxkLnJlcGxhY2UoL1xcWy9nLCAnW1xcdTAwMDEnKS5zcGxpdChzcGxpdE5hbWUpO1xuICB2YXIgZm9ybWF0dGVkID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZmllbGQubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcGFydCA9IGZpZWxkW2ldO1xuICAgIGlmIChwYXJ0WzBdID09PSAnXFx1MDAwMScpIHtcbiAgICAgIGZvcm1hdHRlZC5wdXNoKEpTT04uc3RyaW5naWZ5KCcuJykpO1xuICAgICAgZm9ybWF0dGVkLnB1c2gocGFydC5zbGljZSgxKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1hdHRlZC5wdXNoKEpTT04uc3RyaW5naWZ5KHBhcnQpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZvcm1hdHRlZC5qb2luKCcrJyk7XG59XG5cbnZhciB0eXBlcyA9IHt9XG5cbnR5cGVzLmFueSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gJ3RydWUnXG59XG5cbnR5cGVzLm51bGwgPSBmdW5jdGlvbihuYW1lKSB7XG4gIHJldHVybiBuYW1lKycgPT09IG51bGwnXG59XG5cbnR5cGVzLmJvb2xlYW4gPSBmdW5jdGlvbihuYW1lKSB7XG4gIHJldHVybiAndHlwZW9mICcrbmFtZSsnID09PSBcImJvb2xlYW5cIidcbn1cblxudHlwZXMuYXJyYXkgPSBmdW5jdGlvbihuYW1lKSB7XG4gIHJldHVybiAnQXJyYXkuaXNBcnJheSgnK25hbWUrJyknXG59XG5cbnR5cGVzLm9iamVjdCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgcmV0dXJuICd0eXBlb2YgJytuYW1lKycgPT09IFwib2JqZWN0XCIgJiYgJytuYW1lKycgJiYgIUFycmF5LmlzQXJyYXkoJytuYW1lKycpJ1xufVxuXG50eXBlcy5udW1iZXIgPSBmdW5jdGlvbihuYW1lKSB7XG4gIHJldHVybiAndHlwZW9mICcrbmFtZSsnID09PSBcIm51bWJlclwiJ1xufVxuXG50eXBlcy5pbnRlZ2VyID0gZnVuY3Rpb24obmFtZSkge1xuICByZXR1cm4gJ3R5cGVvZiAnK25hbWUrJyA9PT0gXCJudW1iZXJcIiAmJiAoTWF0aC5mbG9vcignK25hbWUrJykgPT09ICcrbmFtZSsnIHx8ICcrbmFtZSsnID4gOTAwNzE5OTI1NDc0MDk5MiB8fCAnK25hbWUrJyA8IC05MDA3MTk5MjU0NzQwOTkyKSdcbn1cblxudHlwZXMuc3RyaW5nID0gZnVuY3Rpb24obmFtZSkge1xuICByZXR1cm4gJ3R5cGVvZiAnK25hbWUrJyA9PT0gXCJzdHJpbmdcIidcbn1cblxudmFyIHVuaXF1ZSA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gIHZhciBsaXN0ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGxpc3QucHVzaCh0eXBlb2YgYXJyYXlbaV0gPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYXJyYXlbaV0pIDogYXJyYXlbaV0pXG4gIH1cbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGxpc3QuaW5kZXhPZihsaXN0W2ldKSAhPT0gaSkgcmV0dXJuIGZhbHNlXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxudmFyIHRvVHlwZSA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUudHlwZVxufVxuXG52YXIgY29tcGlsZSA9IGZ1bmN0aW9uKHNjaGVtYSwgY2FjaGUsIHJvb3QsIHJlcG9ydGVyLCBvcHRzKSB7XG4gIHZhciBmbXRzID0gb3B0cyA/IHh0ZW5kKGZvcm1hdHMsIG9wdHMuZm9ybWF0cykgOiBmb3JtYXRzXG4gIHZhciBzY29wZSA9IHt1bmlxdWU6dW5pcXVlLCBmb3JtYXRzOmZtdHN9XG4gIHZhciB2ZXJib3NlID0gb3B0cyA/ICEhb3B0cy52ZXJib3NlIDogZmFsc2U7XG4gIHZhciB1bmRlZmluZWRBc09iamVjdCA9IG9wdHMgPyAhIW9wdHMudW5kZWZpbmVkQXNPYmplY3QgOiBmYWxzZTtcbiAgdmFyIG51bGxBc09iamVjdCA9IG9wdHMgPyAhIW9wdHMubnVsbEFzT2JqZWN0IDogZmFsc2U7XG4gIHZhciBudWxsQXNVbmRlZmluZWQgPSBvcHRzID8gISFvcHRzLm51bGxBc1VuZGVmaW5lZCA6IGZhbHNlO1xuICB2YXIgdW5kZWZpbmVkQXNBcnJheSA9IG9wdHMgPyAhIW9wdHMudW5kZWZpbmVkQXNBcnJheSA6IGZhbHNlO1xuICB2YXIgbnVsbEFzQXJyYXkgPSBvcHRzID8gISFvcHRzLm51bGxBc0FycmF5IDogZmFsc2U7XG4gIHZhciBncmVlZHkgPSBvcHRzICYmIG9wdHMuZ3JlZWR5ICE9PSB1bmRlZmluZWQgP1xuICAgIG9wdHMuZ3JlZWR5IDogZmFsc2U7XG5cbiAgdmFyIHN5bXMgPSB7fVxuICB2YXIgZ2Vuc3ltID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiBuYW1lKyhzeW1zW25hbWVdID0gKHN5bXNbbmFtZV0gfHwgMCkrMSlcbiAgfVxuXG4gIHZhciByZXZlcnNlUGF0dGVybnMgPSB7fVxuICB2YXIgcGF0dGVybnMgPSBmdW5jdGlvbihwKSB7XG4gICAgaWYgKHJldmVyc2VQYXR0ZXJuc1twXSkgcmV0dXJuIHJldmVyc2VQYXR0ZXJuc1twXVxuICAgIHZhciBuID0gZ2Vuc3ltKCdwYXR0ZXJuJylcbiAgICBzY29wZVtuXSA9IG5ldyBSZWdFeHAocClcbiAgICByZXZlcnNlUGF0dGVybnNbcF0gPSBuXG4gICAgcmV0dXJuIG5cbiAgfVxuXG4gIHZhciB2YXJzID0gWydpJywnaicsJ2snLCdsJywnbScsJ24nLCdvJywncCcsJ3EnLCdyJywncycsJ3QnLCd1JywndicsJ3gnLCd5JywneiddXG4gIHZhciBnZW5sb29wID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHYgPSB2YXJzLnNoaWZ0KClcbiAgICB2YXJzLnB1c2godit2WzBdKVxuICAgIHJldHVybiB2XG4gIH1cblxuICB2YXIgdmlzaXQgPSBmdW5jdGlvbihuYW1lLCBfZGF0YVN5bSwgbm9kZSwgcmVwb3J0ZXIsIGZpbHRlcikge1xuICAgIHZhciBwcm9wZXJ0aWVzID0gbm9kZS5wcm9wZXJ0aWVzXG4gICAgdmFyIHR5cGUgPSBub2RlLnR5cGVcbiAgICB2YXIgdHVwbGUgPSBmYWxzZVxuXG4gICAgdmFyIGRhdGFTeW0gPSBnZW5zeW0oJ2RhdGEnKTtcbiAgICB2YWxpZGF0ZSgndmFyICVzID0gJXMnLCBkYXRhU3ltLCBfZGF0YVN5bSk7XG5cbiAgICB2YXIgbm9kZVN5bSA9IGdlbnN5bSgnbm9kZScpXG4gICAgc2NvcGVbbm9kZVN5bV0gPSBub2RlO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobm9kZS5pdGVtcykpIHsgLy8gdHVwbGUgdHlwZVxuICAgICAgcHJvcGVydGllcyA9IHt9XG4gICAgICBub2RlLml0ZW1zLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaSkge1xuICAgICAgICBwcm9wZXJ0aWVzW2ldID0gaXRlbVxuICAgICAgfSlcbiAgICAgIHR5cGUgPSAnYXJyYXknXG4gICAgICB0dXBsZSA9IHRydWVcbiAgICB9XG5cbiAgICB2YXIgaW5kZW50ID0gMFxuICAgIHZhciBlcnJvciA9IGZ1bmN0aW9uKG1zZywgcHJvcCwgdmFsdWUsIHNjaGVtYSkge1xuICAgICAgdmFsaWRhdGUoJ2Vycm9ycysrJylcbiAgICAgIGlmIChyZXBvcnRlciA9PT0gdHJ1ZSkge1xuICAgICAgICB2YWxpZGF0ZSgnaWYgKHZhbGlkYXRlLmVycm9ycyA9PT0gbnVsbCkgdmFsaWRhdGUuZXJyb3JzID0gW10nKVxuICAgICAgICBpZiAodmVyYm9zZSkge1xuICAgICAgICAgIHZhbGlkYXRlKCd2YWxpZGF0ZS5lcnJvcnMucHVzaCh7ZmllbGQ6JXMsbWVzc2FnZTolcyx2YWx1ZTolcyxzY2hlbWE6JXN9KScsIGZvcm1hdE5hbWUocHJvcCB8fCBuYW1lKSwgSlNPTi5zdHJpbmdpZnkobXNnKSwgdmFsdWUgfHwgbmFtZSwgc2NoZW1hIHx8IG5vZGVTeW0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGUoJ3ZhbGlkYXRlLmVycm9ycy5wdXNoKHtmaWVsZDolcyxtZXNzYWdlOiVzLHNjaGVtYTolc30pJywgZm9ybWF0TmFtZShwcm9wIHx8IG5hbWUpLCBKU09OLnN0cmluZ2lmeShtc2cpLCBzY2hlbWEgfHwgbm9kZVN5bSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB2YXIgZXJyb3JGcm9tU3ltID0gZnVuY3Rpb24oc3ltLCBzY2hlbWEpIHtcbiAgICAgIHZhbGlkYXRlKCdlcnJvcnMrKycpXG4gICAgICBpZiAocmVwb3J0ZXIgPT09IHRydWUpIHtcbiAgICAgICAgdmFsaWRhdGUoJ2lmICh2YWxpZGF0ZS5lcnJvcnMgPT09IG51bGwpIHZhbGlkYXRlLmVycm9ycyA9IFtdJylcbiAgICAgICAgaWYgKHZlcmJvc2UpIHtcbiAgICAgICAgICB2YWxpZGF0ZSgndmFsaWRhdGUuZXJyb3JzLnB1c2goe2ZpZWxkOiVzLG1lc3NhZ2U6JXMsdmFsdWU6JXMsc2NoZW1hOiVzfSknLCBmb3JtYXROYW1lKG5hbWUpLCBzeW0sIG5hbWUsIHNjaGVtYSB8fCBub2RlU3ltKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlKCd2YWxpZGF0ZS5lcnJvcnMucHVzaCh7ZmllbGQ6JXMsbWVzc2FnZTolcyxzY2hlbWE6JXN9KScsIGZvcm1hdE5hbWUobmFtZSksIHN5bSwgc2NoZW1hIHx8IG5vZGVTeW0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobm9kZS5yZXF1aXJlZCA9PT0gdHJ1ZSkge1xuICAgICAgaW5kZW50KytcbiAgICAgIGlmIChudWxsQXNVbmRlZmluZWQpIHtcbiAgICAgICAgdmFsaWRhdGUoJ2lmICglcyA9PSB1bmRlZmluZWQpIHsnLCBkYXRhU3ltKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsaWRhdGUoJ2lmICglcyA9PT0gdW5kZWZpbmVkKSB7JywgZGF0YVN5bSlcbiAgICAgIH1cbiAgICAgIGVycm9yKCdpcyByZXF1aXJlZCcpXG4gICAgICB2YWxpZGF0ZSgnfSBlbHNlIHsnKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobm9kZS50eXBlID09PSAnb2JqZWN0JyAmJiAodW5kZWZpbmVkQXNPYmplY3QgfHwgbnVsbEFzT2JqZWN0KSkge1xuICAgICAgICBpZiAodW5kZWZpbmVkQXNPYmplY3QgJiYgbnVsbEFzT2JqZWN0KSB7XG4gICAgICAgICAgdmFsaWRhdGUoJ2lmICglcyA9PSBudWxsKSAlcyA9IHt9JywgZGF0YVN5bSwgZGF0YVN5bSk7XG4gICAgICAgIH0gZWxzZSBpZiAodW5kZWZpbmVkQXNPYmplY3QpIHtcbiAgICAgICAgICB2YWxpZGF0ZSgnaWYgKCVzID09PSB1bmRlZmluZWQpICVzID0ge30nLCBkYXRhU3ltLCBkYXRhU3ltKTtcbiAgICAgICAgfSBlbHNlIGlmIChudWxsQXNPYmplY3QpIHtcbiAgICAgICAgICB2YWxpZGF0ZSgnaWYgKCVzID09PSBudWxsKSAlcyA9IHt9JywgZGF0YVN5bSwgZGF0YVN5bSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobm9kZS50eXBlID09PSAnYXJyYXknICYmICh1bmRlZmluZWRBc0FycmF5IHx8IG51bGxBc0FycmF5KSkge1xuICAgICAgICBpZiAodW5kZWZpbmVkQXNBcnJheSAmJiBudWxsQXNBcnJheSkge1xuICAgICAgICAgIHZhbGlkYXRlKCdpZiAoJXMgPT0gbnVsbCkgJXMgPSBbXScsIGRhdGFTeW0sIGRhdGFTeW0pO1xuICAgICAgICB9IGVsc2UgaWYgKHVuZGVmaW5lZEFzQXJyYXkpIHtcbiAgICAgICAgICB2YWxpZGF0ZSgnaWYgKCVzID09PSB1bmRlZmluZWQpICVzID0gW10nLCBkYXRhU3ltLCBkYXRhU3ltKTtcbiAgICAgICAgfSBlbHNlIGlmIChudWxsQXNBcnJheSkge1xuICAgICAgICAgIHZhbGlkYXRlKCdpZiAoJXMgPT09IG51bGwpICVzID0gW10nLCBkYXRhU3ltLCBkYXRhU3ltKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZW50KytcbiAgICAgICAgaWYgKG51bGxBc1VuZGVmaW5lZCkge1xuICAgICAgICAgIHZhbGlkYXRlKCdpZiAoJXMgIT0gdW5kZWZpbmVkKSB7JywgZGF0YVN5bSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZSgnaWYgKCVzICE9PSB1bmRlZmluZWQpIHsnLCBkYXRhU3ltKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHZhbGlkID0gW10uY29uY2F0KHR5cGUpXG4gICAgICAubWFwKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVzW3QgfHwgJ2FueSddKGRhdGFTeW0pXG4gICAgICB9KVxuICAgICAgLmpvaW4oJyB8fCAnKSB8fCAndHJ1ZSdcblxuICAgIGlmICh2YWxpZCAhPT0gJ3RydWUnKSB7XG4gICAgICBpbmRlbnQrK1xuICAgICAgdmFsaWRhdGUoJ2lmICghKCVzKSkgeycsIHZhbGlkKVxuICAgICAgZXJyb3IoJ2lzIHRoZSB3cm9uZyB0eXBlJylcbiAgICAgIHZhbGlkYXRlKCd9IGVsc2UgeycpXG4gICAgfVxuXG4gICAgaWYgKHR1cGxlKSB7XG4gICAgICBpZiAobm9kZS5hZGRpdGlvbmFsSXRlbXMgPT09IGZhbHNlKSB7XG4gICAgICAgIHZhbGlkYXRlKCdpZiAoJXMubGVuZ3RoID4gJWQpIHsnLCBkYXRhU3ltLCBub2RlLml0ZW1zLmxlbmd0aClcbiAgICAgICAgZXJyb3IoJ2hhcyBhZGRpdGlvbmFsIGl0ZW1zJylcbiAgICAgICAgdmFsaWRhdGUoJ30nKVxuICAgICAgfSBlbHNlIGlmIChub2RlLmFkZGl0aW9uYWxJdGVtcykge1xuICAgICAgICB2YXIgaSA9IGdlbmxvb3AoKVxuICAgICAgICB2YWxpZGF0ZSgnZm9yICh2YXIgJXMgPSAlZDsgJXMgPCAlcy5sZW5ndGg7ICVzKyspIHsnLCBpLCBub2RlLml0ZW1zLmxlbmd0aCwgaSwgZGF0YVN5bSwgaSlcbiAgICAgICAgdmlzaXQobmFtZSsnWycraSsnXScsIGRhdGFTeW0rJ1snK2krJ10nLCBub2RlLmFkZGl0aW9uYWxJdGVtcywgcmVwb3J0ZXIsIGZpbHRlcilcbiAgICAgICAgdmFsaWRhdGUoJ30nKVxuICAgICAgfSAgIFxuICAgIH1cblxuICAgIGlmIChub2RlLmZvcm1hdCAmJiAoZm10c1tub2RlLmZvcm1hdF0gfHwgdHlwZW9mIG5vZGUuZm9ybWF0ID09PSAnZnVuY3Rpb24nKSkge1xuICAgICAgaWYgKHR5cGUgIT09ICdzdHJpbmcnICYmIGZvcm1hdHNbbm9kZS5mb3JtYXRdKSB2YWxpZGF0ZSgnaWYgKCVzKSB7JywgdHlwZXMuc3RyaW5nKGRhdGFTeW0pKVxuICAgICAgdmFyIG4gPSBnZW5zeW0oJ2Zvcm1hdCcpXG4gICAgICBpZiAodHlwZW9mIG5vZGUuZm9ybWF0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHNjb3BlW25dID0gbm9kZS5mb3JtYXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY29wZVtuXSA9IGZtdHNbbm9kZS5mb3JtYXRdXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygc2NvcGVbbl0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFyIHIgPSBnZW5zeW0oJ3Jlc3VsdCcpXG4gICAgICAgIHZhbGlkYXRlKCd2YXIgJXMgPSAlcyglcywgJXMpJywgciwgbiwgZGF0YVN5bSwgbm9kZVN5bSlcbiAgICAgICAgdmFsaWRhdGUoJ2lmICghJXMpIHsnLCByKVxuICAgICAgICBlcnJvcignbXVzdCBiZSAnK25vZGUuZm9ybWF0KycgZm9ybWF0JylcbiAgICAgICAgdmFsaWRhdGUoJ30gZWxzZSBpZiAodHlwZW9mICVzID09PSBcInN0cmluZ1wiKSB7JywgcilcbiAgICAgICAgZXJyb3JGcm9tU3ltKHIpXG4gICAgICAgIHZhbGlkYXRlKCd9JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbGlkYXRlKCdpZiAoISVzLnRlc3QoJXMpKSB7JywgbiwgZGF0YVN5bSlcbiAgICAgICAgZXJyb3IoJ211c3QgYmUgJytub2RlLmZvcm1hdCsnIGZvcm1hdCcpXG4gICAgICAgIHZhbGlkYXRlKCd9JylcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlICE9PSAnc3RyaW5nJyAmJiBmb3JtYXRzW25vZGUuZm9ybWF0XSkgdmFsaWRhdGUoJ30nKVxuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KG5vZGUucmVxdWlyZWQpKSB7XG4gICAgICB2YXIgaXNVbmRlZmluZWQgPSBmdW5jdGlvbihyZXEpIHtcbiAgICAgICAgcmV0dXJuIGdlbm9iaihkYXRhU3ltLCByZXEpICsgJyA9PT0gdW5kZWZpbmVkJ1xuICAgICAgfVxuXG4gICAgICB2YXIgY2hlY2tSZXF1aXJlZCA9IGZ1bmN0aW9uIChyZXEpIHtcbiAgICAgICAgaWYgKG51bGxBc1VuZGVmaW5lZCkge1xuICAgICAgICAgIHZhbGlkYXRlKCdpZiAoJXMgPT0gdW5kZWZpbmVkKSB7JywgZ2Vub2JqKGRhdGFTeW0sIHJlcSkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGUoJ2lmICglcyA9PT0gdW5kZWZpbmVkKSB7JywgZ2Vub2JqKGRhdGFTeW0sIHJlcSkpXG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlcVNjaGVtYSA9IGdlbm9iaihub2RlU3ltLCAncHJvcGVydGllcycpICsgJyA/ICcgKyBnZW5vYmooZ2Vub2JqKG5vZGVTeW0sICdwcm9wZXJ0aWVzJyksIHJlcSkgKyAnIDogdW5kZWZpbmVkJztcbiAgICAgICAgZXJyb3IoJ2lzIHJlcXVpcmVkJywgZ2Vub2JqKG5hbWUsIHJlcSksIHVuZGVmaW5lZCwgcmVxU2NoZW1hKTtcbiAgICAgICAgdmFsaWRhdGUoJ21pc3NpbmcrKycpXG4gICAgICAgIHZhbGlkYXRlKCd9JylcbiAgICAgIH1cbiAgICAgIHZhbGlkYXRlKCdpZiAoKCVzKSkgeycsIHR5cGUgIT09ICdvYmplY3QnID8gdHlwZXMub2JqZWN0KGRhdGFTeW0pIDogJ3RydWUnKVxuICAgICAgdmFsaWRhdGUoJ3ZhciBtaXNzaW5nID0gMCcpXG4gICAgICBub2RlLnJlcXVpcmVkLm1hcChjaGVja1JlcXVpcmVkKVxuICAgICAgdmFsaWRhdGUoJ30nKTtcbiAgICAgIGlmICghZ3JlZWR5KSB7XG4gICAgICAgIHZhbGlkYXRlKCdpZiAobWlzc2luZyA9PT0gMCkgeycpXG4gICAgICAgIGluZGVudCsrXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5vZGUudW5pcXVlSXRlbXMpIHtcbiAgICAgIGlmICh0eXBlICE9PSAnYXJyYXknKSB2YWxpZGF0ZSgnaWYgKCVzKSB7JywgdHlwZXMuYXJyYXkoZGF0YVN5bSkpXG4gICAgICB2YWxpZGF0ZSgnaWYgKCEodW5pcXVlKCVzKSkpIHsnLCBkYXRhU3ltKVxuICAgICAgZXJyb3IoJ211c3QgYmUgdW5pcXVlJylcbiAgICAgIHZhbGlkYXRlKCd9JylcbiAgICAgIGlmICh0eXBlICE9PSAnYXJyYXknKSB2YWxpZGF0ZSgnfScpXG4gICAgfVxuXG4gICAgaWYgKG5vZGUuZW51bSkge1xuICAgICAgdmFyIGNvbXBsZXggPSBub2RlLmVudW0uc29tZShmdW5jdGlvbihlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgZSA9PT0gJ29iamVjdCdcbiAgICAgIH0pXG5cbiAgICAgIHZhciBjb21wYXJlID0gY29tcGxleCA/XG4gICAgICAgIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICByZXR1cm4gJ0pTT04uc3RyaW5naWZ5KCcrZGF0YVN5bSsnKScrJyAhPT0gSlNPTi5zdHJpbmdpZnkoJytKU09OLnN0cmluZ2lmeShlKSsnKSdcbiAgICAgICAgfSA6XG4gICAgICAgIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICByZXR1cm4gZGF0YVN5bSsnICE9PSAnK0pTT04uc3RyaW5naWZ5KGUpXG4gICAgICAgIH1cblxuICAgICAgdmFsaWRhdGUoJ2lmICglcykgeycsIG5vZGUuZW51bS5tYXAoY29tcGFyZSkuam9pbignICYmICcpIHx8ICdmYWxzZScpXG4gICAgICBlcnJvcignbXVzdCBiZSBhbiBlbnVtIHZhbHVlJylcbiAgICAgIHZhbGlkYXRlKCd9JylcbiAgICB9XG5cbiAgICBpZiAobm9kZS5kZXBlbmRlbmNpZXMpIHtcbiAgICAgIGlmICh0eXBlICE9PSAnb2JqZWN0JykgdmFsaWRhdGUoJ2lmICglcykgeycsIHR5cGVzLm9iamVjdChkYXRhU3ltKSlcblxuICAgICAgT2JqZWN0LmtleXMobm9kZS5kZXBlbmRlbmNpZXMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHZhciBkZXBzID0gbm9kZS5kZXBlbmRlbmNpZXNba2V5XVxuICAgICAgICBpZiAodHlwZW9mIGRlcHMgPT09ICdzdHJpbmcnKSBkZXBzID0gW2RlcHNdXG5cbiAgICAgICAgdmFyIGV4aXN0cyA9IGZ1bmN0aW9uKGspIHtcbiAgICAgICAgICByZXR1cm4gZ2Vub2JqKGRhdGFTeW0sIGspICsgJyAhPT0gdW5kZWZpbmVkJ1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGVwcykpIHtcbiAgICAgICAgICB2YWxpZGF0ZSgnaWYgKCVzICE9PSB1bmRlZmluZWQgJiYgISglcykpIHsnLCBnZW5vYmooZGF0YVN5bSwga2V5KSwgZGVwcy5tYXAoZXhpc3RzKS5qb2luKCcgJiYgJykgfHwgJ3RydWUnKVxuICAgICAgICAgIGVycm9yKCdkZXBlbmRlbmNpZXMgbm90IHNldCcpXG4gICAgICAgICAgdmFsaWRhdGUoJ30nKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgZGVwcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB2YWxpZGF0ZSgnaWYgKCVzICE9PSB1bmRlZmluZWQpIHsnLCBnZW5vYmooZGF0YVN5bSwga2V5KSlcbiAgICAgICAgICB2aXNpdChuYW1lLCBkYXRhU3ltLCBkZXBzLCByZXBvcnRlciwgZmlsdGVyKVxuICAgICAgICAgIHZhbGlkYXRlKCd9JylcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgaWYgKHR5cGUgIT09ICdvYmplY3QnKSB2YWxpZGF0ZSgnfScpXG4gICAgfVxuXG4gICAgaWYgKG5vZGUuYWRkaXRpb25hbFByb3BlcnRpZXMgfHwgbm9kZS5hZGRpdGlvbmFsUHJvcGVydGllcyA9PT0gZmFsc2UpIHtcbiAgICAgIGlmICh0eXBlICE9PSAnb2JqZWN0JykgdmFsaWRhdGUoJ2lmICglcykgeycsIHR5cGVzLm9iamVjdChkYXRhU3ltKSlcblxuICAgICAgdmFyIGkgPSBnZW5sb29wKClcbiAgICAgIHZhciBrZXlzID0gZ2Vuc3ltKCdrZXlzJylcblxuICAgICAgdmFyIHRvQ29tcGFyZSA9IGZ1bmN0aW9uKHApIHtcbiAgICAgICAgcmV0dXJuIGtleXMrJ1snK2krJ10gIT09ICcrSlNPTi5zdHJpbmdpZnkocClcbiAgICAgIH1cblxuICAgICAgdmFyIHRvVGVzdCA9IGZ1bmN0aW9uKHApIHtcbiAgICAgICAgcmV0dXJuICchJytwYXR0ZXJucyhwKSsnLnRlc3QoJytrZXlzKydbJytpKyddKSdcbiAgICAgIH1cblxuICAgICAgdmFyIGFkZGl0aW9uYWxQcm9wID0gT2JqZWN0LmtleXMocHJvcGVydGllcyB8fCB7fSkubWFwKHRvQ29tcGFyZSlcbiAgICAgICAgLmNvbmNhdChPYmplY3Qua2V5cyhub2RlLnBhdHRlcm5Qcm9wZXJ0aWVzIHx8IHt9KS5tYXAodG9UZXN0KSlcbiAgICAgICAgLmpvaW4oJyAmJiAnKSB8fCAndHJ1ZSdcblxuICAgICAgdmFsaWRhdGUoJ3ZhciAlcyA9IE9iamVjdC5rZXlzKCVzKScsIGtleXMsIGRhdGFTeW0pXG4gICAgICAgICgnZm9yICh2YXIgJXMgPSAwOyAlcyA8ICVzLmxlbmd0aDsgJXMrKykgeycsIGksIGksIGtleXMsIGkpXG4gICAgICAgICAgKCdpZiAoJXMpIHsnLCBhZGRpdGlvbmFsUHJvcClcblxuICAgICAgaWYgKG5vZGUuYWRkaXRpb25hbFByb3BlcnRpZXMgPT09IGZhbHNlKSB7XG4gICAgICAgIGlmIChmaWx0ZXIpIHZhbGlkYXRlKCdkZWxldGUgJXMnLCBkYXRhU3ltKydbJytrZXlzKydbJytpKyddXScpXG4gICAgICAgIGVycm9yKCdoYXMgYWRkaXRpb25hbCBwcm9wZXJ0aWVzJywgbnVsbCwgSlNPTi5zdHJpbmdpZnkobmFtZSsnLicpICsgJyArICcgKyBrZXlzICsgJ1snK2krJ10nKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmlzaXQobmFtZSsnWycra2V5cysnWycraSsnXV0nLCBkYXRhU3ltKydbJytrZXlzKydbJytpKyddXScsIG5vZGUuYWRkaXRpb25hbFByb3BlcnRpZXMsIHJlcG9ydGVyLCBmaWx0ZXIpXG4gICAgICB9XG5cbiAgICAgIHZhbGlkYXRlXG4gICAgICAgICAgKCd9JylcbiAgICAgICAgKCd9JylcblxuICAgICAgaWYgKHR5cGUgIT09ICdvYmplY3QnKSB2YWxpZGF0ZSgnfScpXG4gICAgfVxuXG4gICAgaWYgKG5vZGUuJHJlZikge1xuICAgICAgdmFyIHN1YiA9IGdldChyb290LCBvcHRzICYmIG9wdHMuc2NoZW1hcyB8fCB7fSwgbm9kZS4kcmVmKVxuICAgICAgaWYgKHN1Yikge1xuICAgICAgICB2YXIgZm4gPSBjYWNoZVtub2RlLiRyZWZdXG4gICAgICAgIGlmICghZm4pIHtcbiAgICAgICAgICBjYWNoZVtub2RlLiRyZWZdID0gZnVuY3Rpb24gcHJveHkoZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIGZuKGRhdGEpXG4gICAgICAgICAgfVxuICAgICAgICAgIGZuID0gY29tcGlsZShzdWIsIGNhY2hlLCByb290LCBmYWxzZSwgb3B0cylcbiAgICAgICAgfVxuICAgICAgICB2YXIgbiA9IGdlbnN5bSgncmVmJylcbiAgICAgICAgc2NvcGVbbl0gPSBmblxuICAgICAgICB2YWxpZGF0ZSgnaWYgKCEoJXMoJXMpKSkgeycsIG4sIGRhdGFTeW0pXG4gICAgICAgIGVycm9yKCdyZWZlcmVuY2VkIHNjaGVtYSBkb2VzIG5vdCBtYXRjaCcpXG4gICAgICAgIHZhbGlkYXRlKCd9JylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobm9kZS5ub3QpIHtcbiAgICAgIHZhciBwcmV2ID0gZ2Vuc3ltKCdwcmV2JylcbiAgICAgIHZhbGlkYXRlKCd2YXIgJXMgPSBlcnJvcnMnLCBwcmV2KVxuICAgICAgdmlzaXQobmFtZSwgZGF0YVN5bSwgbm9kZS5ub3QsIGZhbHNlLCBmaWx0ZXIpXG4gICAgICB2YWxpZGF0ZSgnaWYgKCVzID09PSBlcnJvcnMpIHsnLCBwcmV2KVxuICAgICAgZXJyb3IoJ25lZ2F0aXZlIHNjaGVtYSBtYXRjaGVzJylcbiAgICAgIHZhbGlkYXRlKCd9IGVsc2UgeycpXG4gICAgICAgICgnZXJyb3JzID0gJXMnLCBwcmV2KVxuICAgICAgKCd9JylcbiAgICB9XG5cbiAgICBpZiAobm9kZS5pdGVtcyAmJiAhdHVwbGUpIHtcbiAgICAgIGlmICh0eXBlICE9PSAnYXJyYXknKSB2YWxpZGF0ZSgnaWYgKCVzKSB7JywgdHlwZXMuYXJyYXkoZGF0YVN5bSkpXG5cbiAgICAgIHZhciBpID0gZ2VubG9vcCgpXG4gICAgICB2YWxpZGF0ZSgnZm9yICh2YXIgJXMgPSAwOyAlcyA8ICVzLmxlbmd0aDsgJXMrKykgeycsIGksIGksIGRhdGFTeW0sIGkpXG4gICAgICB2aXNpdChuYW1lKydbJytpKyddJywgZGF0YVN5bSsnWycraSsnXScsIG5vZGUuaXRlbXMsIHJlcG9ydGVyLCBmaWx0ZXIpXG4gICAgICB2YWxpZGF0ZSgnfScpXG5cbiAgICAgIGlmICh0eXBlICE9PSAnYXJyYXknKSB2YWxpZGF0ZSgnfScpXG4gICAgfVxuXG4gICAgaWYgKG5vZGUucGF0dGVyblByb3BlcnRpZXMpIHtcbiAgICAgIGlmICh0eXBlICE9PSAnb2JqZWN0JykgdmFsaWRhdGUoJ2lmICglcykgeycsIHR5cGVzLm9iamVjdChkYXRhU3ltKSlcbiAgICAgIHZhciBrZXlzID0gZ2Vuc3ltKCdrZXlzJylcbiAgICAgIHZhciBpID0gZ2VubG9vcCgpXG4gICAgICB2YWxpZGF0ZVxuICAgICAgICAoJ3ZhciAlcyA9IE9iamVjdC5rZXlzKCVzKScsIGtleXMsIGRhdGFTeW0pXG4gICAgICAgICgnZm9yICh2YXIgJXMgPSAwOyAlcyA8ICVzLmxlbmd0aDsgJXMrKykgeycsIGksIGksIGtleXMsIGkpXG5cbiAgICAgIE9iamVjdC5rZXlzKG5vZGUucGF0dGVyblByb3BlcnRpZXMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHZhciBwID0gcGF0dGVybnMoa2V5KVxuICAgICAgICB2YWxpZGF0ZSgnaWYgKCVzLnRlc3QoJXMpKSB7JywgcCwga2V5cysnWycraSsnXScpXG4gICAgICAgIHZpc2l0KG5hbWUrJ1snK2tleXMrJ1snK2krJ11dJywgZGF0YVN5bSsnWycra2V5cysnWycraSsnXV0nLCBub2RlLnBhdHRlcm5Qcm9wZXJ0aWVzW2tleV0sIHJlcG9ydGVyLCBmaWx0ZXIpXG4gICAgICAgIHZhbGlkYXRlKCd9JylcbiAgICAgIH0pXG5cbiAgICAgIHZhbGlkYXRlKCd9JylcbiAgICAgIGlmICh0eXBlICE9PSAnb2JqZWN0JykgdmFsaWRhdGUoJ30nKVxuICAgIH1cblxuICAgIGlmIChub2RlLnBhdHRlcm4pIHtcbiAgICAgIHZhciBwID0gcGF0dGVybnMobm9kZS5wYXR0ZXJuKVxuICAgICAgaWYgKHR5cGUgIT09ICdzdHJpbmcnKSB2YWxpZGF0ZSgnaWYgKCVzKSB7JywgdHlwZXMuc3RyaW5nKGRhdGFTeW0pKVxuICAgICAgdmFsaWRhdGUoJ2lmICghKCVzLnRlc3QoJXMpKSkgeycsIHAsIGRhdGFTeW0pXG4gICAgICBlcnJvcigncGF0dGVybiBtaXNtYXRjaCcpXG4gICAgICB2YWxpZGF0ZSgnfScpXG4gICAgICBpZiAodHlwZSAhPT0gJ3N0cmluZycpIHZhbGlkYXRlKCd9JylcbiAgICB9XG5cbiAgICBpZiAobm9kZS5hbGxPZikge1xuICAgICAgbm9kZS5hbGxPZi5mb3JFYWNoKGZ1bmN0aW9uKHNjaCkge1xuICAgICAgICB2aXNpdChuYW1lLCBkYXRhU3ltLCBzY2gsIHJlcG9ydGVyLCBmaWx0ZXIpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChub2RlLmFueU9mICYmIG5vZGUuYW55T2YubGVuZ3RoKSB7XG4gICAgICB2YXIgcHJldiA9IGdlbnN5bSgncHJldicpXG5cbiAgICAgIG5vZGUuYW55T2YuZm9yRWFjaChmdW5jdGlvbihzY2gsIGkpIHtcbiAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICB2YWxpZGF0ZSgndmFyICVzID0gZXJyb3JzJywgcHJldilcbiAgICAgICAgfSBlbHNlIHsgICAgICAgICAgXG4gICAgICAgICAgdmFsaWRhdGUoJ2lmIChlcnJvcnMgIT09ICVzKSB7JywgcHJldilcbiAgICAgICAgICAgICgnZXJyb3JzID0gJXMnLCBwcmV2KVxuICAgICAgICB9XG4gICAgICAgIHZpc2l0KG5hbWUsIGRhdGFTeW0sIHNjaCwgZmFsc2UsIGZhbHNlKVxuICAgICAgfSlcbiAgICAgIG5vZGUuYW55T2YuZm9yRWFjaChmdW5jdGlvbihzY2gsIGkpIHtcbiAgICAgICAgaWYgKGkpIHZhbGlkYXRlKCd9JylcbiAgICAgIH0pXG4gICAgICB2YWxpZGF0ZSgnaWYgKCVzICE9PSBlcnJvcnMpIHsnLCBwcmV2KVxuICAgICAgZXJyb3IoJ25vIHNjaGVtYXMgbWF0Y2gnKVxuICAgICAgdmFsaWRhdGUoJ30nKVxuICAgIH1cblxuICAgIGlmIChub2RlLm9uZU9mICYmIG5vZGUub25lT2YubGVuZ3RoKSB7XG4gICAgICB2YXIgcHJldiA9IGdlbnN5bSgncHJldicpXG4gICAgICB2YXIgcGFzc2VzID0gZ2Vuc3ltKCdwYXNzZXMnKVxuXG4gICAgICB2YWxpZGF0ZVxuICAgICAgICAoJ3ZhciAlcyA9IGVycm9ycycsIHByZXYpXG4gICAgICAgICgndmFyICVzID0gMCcsIHBhc3NlcylcblxuICAgICAgbm9kZS5vbmVPZi5mb3JFYWNoKGZ1bmN0aW9uKHNjaCwgaSkge1xuICAgICAgICB2aXNpdChuYW1lLCBkYXRhU3ltLCBzY2gsIGZhbHNlLCBmYWxzZSlcbiAgICAgICAgdmFsaWRhdGUoJ2lmICglcyA9PT0gZXJyb3JzKSB7JywgcHJldilcbiAgICAgICAgICAoJyVzKysnLCBwYXNzZXMpXG4gICAgICAgICgnfSBlbHNlIHsnKVxuICAgICAgICAgICgnZXJyb3JzID0gJXMnLCBwcmV2KVxuICAgICAgICAoJ30nKVxuICAgICAgfSlcblxuICAgICAgdmFsaWRhdGUoJ2lmICglcyAhPT0gMSkgeycsIHBhc3NlcylcbiAgICAgIGVycm9yKCdubyAob3IgbW9yZSB0aGFuIG9uZSkgc2NoZW1hcyBtYXRjaCcpXG4gICAgICB2YWxpZGF0ZSgnfScpXG4gICAgfVxuXG4gICAgaWYgKG5vZGUubXVsdGlwbGVPZiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZSAhPT0gJ251bWJlcicgJiYgdHlwZSAhPT0gJ2ludGVnZXInKSB2YWxpZGF0ZSgnaWYgKCVzKSB7JywgdHlwZXMubnVtYmVyKGRhdGFTeW0pKVxuXG4gICAgICB2YXIgZmFjdG9yID0gKChub2RlLm11bHRpcGxlT2YgfCAwKSAhPT0gbm9kZS5tdWx0aXBsZU9mKSA/IE1hdGgucG93KDEwLCBub2RlLm11bHRpcGxlT2YudG9TdHJpbmcoKS5zcGxpdCgnLicpLnBvcCgpLmxlbmd0aCkgOiAxXG4gICAgICBpZiAoZmFjdG9yID4gMSkgdmFsaWRhdGUoJ2lmICgoJWQqJXMpICUgJWQpIHsnLCBmYWN0b3IsIGRhdGFTeW0sIGZhY3Rvcipub2RlLm11bHRpcGxlT2YpXG4gICAgICBlbHNlIHZhbGlkYXRlKCdpZiAoJXMgJSAlZCkgeycsIGRhdGFTeW0sIG5vZGUubXVsdGlwbGVPZilcblxuICAgICAgZXJyb3IoJ2hhcyBhIHJlbWFpbmRlcicpXG4gICAgICB2YWxpZGF0ZSgnfScpXG5cbiAgICAgIGlmICh0eXBlICE9PSAnbnVtYmVyJyAmJiB0eXBlICE9PSAnaW50ZWdlcicpIHZhbGlkYXRlKCd9JylcbiAgICB9XG5cbiAgICBpZiAobm9kZS5tYXhQcm9wZXJ0aWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlICE9PSAnb2JqZWN0JykgdmFsaWRhdGUoJ2lmICglcykgeycsIHR5cGVzLm9iamVjdChkYXRhU3ltKSlcbiAgICAgIFxuICAgICAgdmFsaWRhdGUoJ2lmIChPYmplY3Qua2V5cyglcykubGVuZ3RoID4gJWQpIHsnLCBkYXRhU3ltLCBub2RlLm1heFByb3BlcnRpZXMpXG4gICAgICBlcnJvcignaGFzIG1vcmUgcHJvcGVydGllcyB0aGFuIGFsbG93ZWQnKVxuICAgICAgdmFsaWRhdGUoJ30nKVxuXG4gICAgICBpZiAodHlwZSAhPT0gJ29iamVjdCcpIHZhbGlkYXRlKCd9JylcbiAgICB9XG5cbiAgICBpZiAobm9kZS5taW5Qcm9wZXJ0aWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlICE9PSAnb2JqZWN0JykgdmFsaWRhdGUoJ2lmICglcykgeycsIHR5cGVzLm9iamVjdChkYXRhU3ltKSlcbiAgICAgIFxuICAgICAgdmFsaWRhdGUoJ2lmIChPYmplY3Qua2V5cyglcykubGVuZ3RoIDwgJWQpIHsnLCBkYXRhU3ltLCBub2RlLm1pblByb3BlcnRpZXMpXG4gICAgICBlcnJvcignaGFzIGxlc3MgcHJvcGVydGllcyB0aGFuIGFsbG93ZWQnKVxuICAgICAgdmFsaWRhdGUoJ30nKVxuXG4gICAgICBpZiAodHlwZSAhPT0gJ29iamVjdCcpIHZhbGlkYXRlKCd9JylcbiAgICB9XG5cbiAgICBpZiAobm9kZS5tYXhJdGVtcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZSAhPT0gJ2FycmF5JykgdmFsaWRhdGUoJ2lmICglcykgeycsIHR5cGVzLmFycmF5KGRhdGFTeW0pKVxuICAgICAgXG4gICAgICB2YWxpZGF0ZSgnaWYgKCVzLmxlbmd0aCA+ICVkKSB7JywgZGF0YVN5bSwgbm9kZS5tYXhJdGVtcylcbiAgICAgIGVycm9yKCdoYXMgbW9yZSBpdGVtcyB0aGFuIGFsbG93ZWQnKVxuICAgICAgdmFsaWRhdGUoJ30nKVxuXG4gICAgICBpZiAodHlwZSAhPT0gJ2FycmF5JykgdmFsaWRhdGUoJ30nKVxuICAgIH1cblxuICAgIGlmIChub2RlLm1pbkl0ZW1zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlICE9PSAnYXJyYXknKSB2YWxpZGF0ZSgnaWYgKCVzKSB7JywgdHlwZXMuYXJyYXkoZGF0YVN5bSkpXG4gICAgICBcbiAgICAgIHZhbGlkYXRlKCdpZiAoJXMubGVuZ3RoIDwgJWQpIHsnLCBkYXRhU3ltLCBub2RlLm1pbkl0ZW1zKVxuICAgICAgZXJyb3IoJ2hhcyBsZXNzIGl0ZW1zIHRoYW4gYWxsb3dlZCcpXG4gICAgICB2YWxpZGF0ZSgnfScpXG5cbiAgICAgIGlmICh0eXBlICE9PSAnYXJyYXknKSB2YWxpZGF0ZSgnfScpXG4gICAgfVxuXG4gICAgaWYgKG5vZGUubWF4TGVuZ3RoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlICE9PSAnc3RyaW5nJykgdmFsaWRhdGUoJ2lmICglcykgeycsIHR5cGVzLnN0cmluZyhkYXRhU3ltKSlcblxuICAgICAgdmFsaWRhdGUoJ2lmICglcy5sZW5ndGggPiAlZCkgeycsIGRhdGFTeW0sIG5vZGUubWF4TGVuZ3RoKVxuICAgICAgZXJyb3IoJ2hhcyBsb25nZXIgbGVuZ3RoIHRoYW4gYWxsb3dlZCcpXG4gICAgICB2YWxpZGF0ZSgnfScpXG5cbiAgICAgIGlmICh0eXBlICE9PSAnc3RyaW5nJykgdmFsaWRhdGUoJ30nKVxuICAgIH1cblxuICAgIGlmIChub2RlLm1pbkxlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZSAhPT0gJ3N0cmluZycpIHZhbGlkYXRlKCdpZiAoJXMpIHsnLCB0eXBlcy5zdHJpbmcoZGF0YVN5bSkpXG5cbiAgICAgIHZhbGlkYXRlKCdpZiAoJXMubGVuZ3RoIDwgJWQpIHsnLCBkYXRhU3ltLCBub2RlLm1pbkxlbmd0aClcbiAgICAgIGVycm9yKCdoYXMgbGVzcyBsZW5ndGggdGhhbiBhbGxvd2VkJylcbiAgICAgIHZhbGlkYXRlKCd9JylcblxuICAgICAgaWYgKHR5cGUgIT09ICdzdHJpbmcnKSB2YWxpZGF0ZSgnfScpXG4gICAgfVxuXG4gICAgaWYgKG5vZGUubWluaW11bSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YWxpZGF0ZSgnaWYgKCVzICVzICVkKSB7JywgZGF0YVN5bSwgbm9kZS5leGNsdXNpdmVNaW5pbXVtID8gJzw9JyA6ICc8Jywgbm9kZS5taW5pbXVtKVxuICAgICAgZXJyb3IoJ2lzIGxlc3MgdGhhbiBtaW5pbXVtJylcbiAgICAgIHZhbGlkYXRlKCd9JylcbiAgICB9XG5cbiAgICBpZiAobm9kZS5tYXhpbXVtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhbGlkYXRlKCdpZiAoJXMgJXMgJWQpIHsnLCBkYXRhU3ltLCBub2RlLmV4Y2x1c2l2ZU1heGltdW0gPyAnPj0nIDogJz4nLCBub2RlLm1heGltdW0pXG4gICAgICBlcnJvcignaXMgbW9yZSB0aGFuIG1heGltdW0nKVxuICAgICAgdmFsaWRhdGUoJ30nKVxuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0aWVzKSB7XG4gICAgICBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKS5mb3JFYWNoKGZ1bmN0aW9uKHApIHtcbiAgICAgICAgdmlzaXQoZ2Vub2JqKG5hbWUsIHApLCBnZW5vYmooZGF0YVN5bSwgcCksIHByb3BlcnRpZXNbcF0sIHJlcG9ydGVyLCBmaWx0ZXIpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHdoaWxlIChpbmRlbnQtLSkgdmFsaWRhdGUoJ30nKVxuICB9XG5cbiAgdmFyIHZhbGlkYXRlID0gZ2VuZnVuXG4gICAgKCdmdW5jdGlvbiB2YWxpZGF0ZShkYXRhKSB7JylcbiAgICAgICgndmFsaWRhdGUuZXJyb3JzID0gbnVsbCcpXG4gICAgICAoJ3ZhciBlcnJvcnMgPSAwJylcblxuICB2aXNpdCgnZGF0YScsICdkYXRhJywgc2NoZW1hLCByZXBvcnRlciwgb3B0cyAmJiBvcHRzLmZpbHRlcilcblxuICB2YWxpZGF0ZVxuICAgICAgKCdyZXR1cm4gZXJyb3JzID09PSAwJylcbiAgICAoJ30nKVxuXG4gIHZhbGlkYXRlID0gdmFsaWRhdGUudG9GdW5jdGlvbihzY29wZSlcbiAgdmFsaWRhdGUuZXJyb3JzID0gbnVsbFxuXG4gIHZhbGlkYXRlLl9fZGVmaW5lR2V0dGVyX18oJ2Vycm9yJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF2YWxpZGF0ZS5lcnJvcnMpIHJldHVybiAnJ1xuICAgIHJldHVybiB2YWxpZGF0ZS5lcnJvcnNcbiAgICAgIC5tYXAoZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIHJldHVybiBlcnIuZmllbGQrJyAnK2Vyci5tZXNzYWdlXG4gICAgICB9KVxuICAgICAgLmpvaW4oJ1xcbicpXG4gIH0pXG5cbiAgdmFsaWRhdGUudG9KU09OID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHNjaGVtYVxuICB9XG5cbiAgcmV0dXJuIHZhbGlkYXRlXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc2NoZW1hLCBvcHRzKSB7XG4gIGlmICh0eXBlb2Ygc2NoZW1hID09PSAnc3RyaW5nJykgc2NoZW1hID0gSlNPTi5wYXJzZShzY2hlbWEpXG4gIHJldHVybiBjb21waWxlKHNjaGVtYSwge30sIHNjaGVtYSwgdHJ1ZSwgb3B0cylcbn1cblxubW9kdWxlLmV4cG9ydHMuZmlsdGVyID0gZnVuY3Rpb24oc2NoZW1hLCBvcHRzKSB7XG4gIHZhciB2YWxpZGF0ZSA9IG1vZHVsZS5leHBvcnRzKHNjaGVtYSwgeHRlbmQob3B0cywge2ZpbHRlcjogdHJ1ZX0pKVxuICByZXR1cm4gZnVuY3Rpb24oc2NoKSB7XG4gICAgdmFsaWRhdGUoc2NoKVxuICAgIHJldHVybiBzY2hcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvX3NjaGVtYS9pbmRleC5qc1xuICoqLyIsInZhciBpc1Byb3BlcnR5ID0gcmVxdWlyZSgnaXMtcHJvcGVydHknKVxuXG52YXIgZ2VuID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7XG4gIHJldHVybiBpc1Byb3BlcnR5KHByb3ApID8gb2JqKycuJytwcm9wIDogb2JqKydbJytKU09OLnN0cmluZ2lmeShwcm9wKSsnXSdcbn1cblxuZ2VuLnZhbGlkID0gaXNQcm9wZXJ0eVxuZ2VuLnByb3BlcnR5ID0gZnVuY3Rpb24gKHByb3ApIHtcbiByZXR1cm4gaXNQcm9wZXJ0eShwcm9wKSA/IHByb3AgOiBKU09OLnN0cmluZ2lmeShwcm9wKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdlblxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZ2VuZXJhdGUtb2JqZWN0LXByb3BlcnR5L2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiXG5mdW5jdGlvbiBpc1Byb3BlcnR5KHN0cikge1xuICByZXR1cm4gL15bJEEtWlxcX2EtelxceGFhXFx4YjVcXHhiYVxceGMwLVxceGQ2XFx4ZDgtXFx4ZjZcXHhmOC1cXHUwMmMxXFx1MDJjNi1cXHUwMmQxXFx1MDJlMC1cXHUwMmU0XFx1MDJlY1xcdTAyZWVcXHUwMzcwLVxcdTAzNzRcXHUwMzc2XFx1MDM3N1xcdTAzN2EtXFx1MDM3ZFxcdTAzODZcXHUwMzg4LVxcdTAzOGFcXHUwMzhjXFx1MDM4ZS1cXHUwM2ExXFx1MDNhMy1cXHUwM2Y1XFx1MDNmNy1cXHUwNDgxXFx1MDQ4YS1cXHUwNTI3XFx1MDUzMS1cXHUwNTU2XFx1MDU1OVxcdTA1NjEtXFx1MDU4N1xcdTA1ZDAtXFx1MDVlYVxcdTA1ZjAtXFx1MDVmMlxcdTA2MjAtXFx1MDY0YVxcdTA2NmVcXHUwNjZmXFx1MDY3MS1cXHUwNmQzXFx1MDZkNVxcdTA2ZTVcXHUwNmU2XFx1MDZlZVxcdTA2ZWZcXHUwNmZhLVxcdTA2ZmNcXHUwNmZmXFx1MDcxMFxcdTA3MTItXFx1MDcyZlxcdTA3NGQtXFx1MDdhNVxcdTA3YjFcXHUwN2NhLVxcdTA3ZWFcXHUwN2Y0XFx1MDdmNVxcdTA3ZmFcXHUwODAwLVxcdTA4MTVcXHUwODFhXFx1MDgyNFxcdTA4MjhcXHUwODQwLVxcdTA4NThcXHUwOGEwXFx1MDhhMi1cXHUwOGFjXFx1MDkwNC1cXHUwOTM5XFx1MDkzZFxcdTA5NTBcXHUwOTU4LVxcdTA5NjFcXHUwOTcxLVxcdTA5NzdcXHUwOTc5LVxcdTA5N2ZcXHUwOTg1LVxcdTA5OGNcXHUwOThmXFx1MDk5MFxcdTA5OTMtXFx1MDlhOFxcdTA5YWEtXFx1MDliMFxcdTA5YjJcXHUwOWI2LVxcdTA5YjlcXHUwOWJkXFx1MDljZVxcdTA5ZGNcXHUwOWRkXFx1MDlkZi1cXHUwOWUxXFx1MDlmMFxcdTA5ZjFcXHUwYTA1LVxcdTBhMGFcXHUwYTBmXFx1MGExMFxcdTBhMTMtXFx1MGEyOFxcdTBhMmEtXFx1MGEzMFxcdTBhMzJcXHUwYTMzXFx1MGEzNVxcdTBhMzZcXHUwYTM4XFx1MGEzOVxcdTBhNTktXFx1MGE1Y1xcdTBhNWVcXHUwYTcyLVxcdTBhNzRcXHUwYTg1LVxcdTBhOGRcXHUwYThmLVxcdTBhOTFcXHUwYTkzLVxcdTBhYThcXHUwYWFhLVxcdTBhYjBcXHUwYWIyXFx1MGFiM1xcdTBhYjUtXFx1MGFiOVxcdTBhYmRcXHUwYWQwXFx1MGFlMFxcdTBhZTFcXHUwYjA1LVxcdTBiMGNcXHUwYjBmXFx1MGIxMFxcdTBiMTMtXFx1MGIyOFxcdTBiMmEtXFx1MGIzMFxcdTBiMzJcXHUwYjMzXFx1MGIzNS1cXHUwYjM5XFx1MGIzZFxcdTBiNWNcXHUwYjVkXFx1MGI1Zi1cXHUwYjYxXFx1MGI3MVxcdTBiODNcXHUwYjg1LVxcdTBiOGFcXHUwYjhlLVxcdTBiOTBcXHUwYjkyLVxcdTBiOTVcXHUwYjk5XFx1MGI5YVxcdTBiOWNcXHUwYjllXFx1MGI5ZlxcdTBiYTNcXHUwYmE0XFx1MGJhOC1cXHUwYmFhXFx1MGJhZS1cXHUwYmI5XFx1MGJkMFxcdTBjMDUtXFx1MGMwY1xcdTBjMGUtXFx1MGMxMFxcdTBjMTItXFx1MGMyOFxcdTBjMmEtXFx1MGMzM1xcdTBjMzUtXFx1MGMzOVxcdTBjM2RcXHUwYzU4XFx1MGM1OVxcdTBjNjBcXHUwYzYxXFx1MGM4NS1cXHUwYzhjXFx1MGM4ZS1cXHUwYzkwXFx1MGM5Mi1cXHUwY2E4XFx1MGNhYS1cXHUwY2IzXFx1MGNiNS1cXHUwY2I5XFx1MGNiZFxcdTBjZGVcXHUwY2UwXFx1MGNlMVxcdTBjZjFcXHUwY2YyXFx1MGQwNS1cXHUwZDBjXFx1MGQwZS1cXHUwZDEwXFx1MGQxMi1cXHUwZDNhXFx1MGQzZFxcdTBkNGVcXHUwZDYwXFx1MGQ2MVxcdTBkN2EtXFx1MGQ3ZlxcdTBkODUtXFx1MGQ5NlxcdTBkOWEtXFx1MGRiMVxcdTBkYjMtXFx1MGRiYlxcdTBkYmRcXHUwZGMwLVxcdTBkYzZcXHUwZTAxLVxcdTBlMzBcXHUwZTMyXFx1MGUzM1xcdTBlNDAtXFx1MGU0NlxcdTBlODFcXHUwZTgyXFx1MGU4NFxcdTBlODdcXHUwZTg4XFx1MGU4YVxcdTBlOGRcXHUwZTk0LVxcdTBlOTdcXHUwZTk5LVxcdTBlOWZcXHUwZWExLVxcdTBlYTNcXHUwZWE1XFx1MGVhN1xcdTBlYWFcXHUwZWFiXFx1MGVhZC1cXHUwZWIwXFx1MGViMlxcdTBlYjNcXHUwZWJkXFx1MGVjMC1cXHUwZWM0XFx1MGVjNlxcdTBlZGMtXFx1MGVkZlxcdTBmMDBcXHUwZjQwLVxcdTBmNDdcXHUwZjQ5LVxcdTBmNmNcXHUwZjg4LVxcdTBmOGNcXHUxMDAwLVxcdTEwMmFcXHUxMDNmXFx1MTA1MC1cXHUxMDU1XFx1MTA1YS1cXHUxMDVkXFx1MTA2MVxcdTEwNjVcXHUxMDY2XFx1MTA2ZS1cXHUxMDcwXFx1MTA3NS1cXHUxMDgxXFx1MTA4ZVxcdTEwYTAtXFx1MTBjNVxcdTEwYzdcXHUxMGNkXFx1MTBkMC1cXHUxMGZhXFx1MTBmYy1cXHUxMjQ4XFx1MTI0YS1cXHUxMjRkXFx1MTI1MC1cXHUxMjU2XFx1MTI1OFxcdTEyNWEtXFx1MTI1ZFxcdTEyNjAtXFx1MTI4OFxcdTEyOGEtXFx1MTI4ZFxcdTEyOTAtXFx1MTJiMFxcdTEyYjItXFx1MTJiNVxcdTEyYjgtXFx1MTJiZVxcdTEyYzBcXHUxMmMyLVxcdTEyYzVcXHUxMmM4LVxcdTEyZDZcXHUxMmQ4LVxcdTEzMTBcXHUxMzEyLVxcdTEzMTVcXHUxMzE4LVxcdTEzNWFcXHUxMzgwLVxcdTEzOGZcXHUxM2EwLVxcdTEzZjRcXHUxNDAxLVxcdTE2NmNcXHUxNjZmLVxcdTE2N2ZcXHUxNjgxLVxcdTE2OWFcXHUxNmEwLVxcdTE2ZWFcXHUxNmVlLVxcdTE2ZjBcXHUxNzAwLVxcdTE3MGNcXHUxNzBlLVxcdTE3MTFcXHUxNzIwLVxcdTE3MzFcXHUxNzQwLVxcdTE3NTFcXHUxNzYwLVxcdTE3NmNcXHUxNzZlLVxcdTE3NzBcXHUxNzgwLVxcdTE3YjNcXHUxN2Q3XFx1MTdkY1xcdTE4MjAtXFx1MTg3N1xcdTE4ODAtXFx1MThhOFxcdTE4YWFcXHUxOGIwLVxcdTE4ZjVcXHUxOTAwLVxcdTE5MWNcXHUxOTUwLVxcdTE5NmRcXHUxOTcwLVxcdTE5NzRcXHUxOTgwLVxcdTE5YWJcXHUxOWMxLVxcdTE5YzdcXHUxYTAwLVxcdTFhMTZcXHUxYTIwLVxcdTFhNTRcXHUxYWE3XFx1MWIwNS1cXHUxYjMzXFx1MWI0NS1cXHUxYjRiXFx1MWI4My1cXHUxYmEwXFx1MWJhZVxcdTFiYWZcXHUxYmJhLVxcdTFiZTVcXHUxYzAwLVxcdTFjMjNcXHUxYzRkLVxcdTFjNGZcXHUxYzVhLVxcdTFjN2RcXHUxY2U5LVxcdTFjZWNcXHUxY2VlLVxcdTFjZjFcXHUxY2Y1XFx1MWNmNlxcdTFkMDAtXFx1MWRiZlxcdTFlMDAtXFx1MWYxNVxcdTFmMTgtXFx1MWYxZFxcdTFmMjAtXFx1MWY0NVxcdTFmNDgtXFx1MWY0ZFxcdTFmNTAtXFx1MWY1N1xcdTFmNTlcXHUxZjViXFx1MWY1ZFxcdTFmNWYtXFx1MWY3ZFxcdTFmODAtXFx1MWZiNFxcdTFmYjYtXFx1MWZiY1xcdTFmYmVcXHUxZmMyLVxcdTFmYzRcXHUxZmM2LVxcdTFmY2NcXHUxZmQwLVxcdTFmZDNcXHUxZmQ2LVxcdTFmZGJcXHUxZmUwLVxcdTFmZWNcXHUxZmYyLVxcdTFmZjRcXHUxZmY2LVxcdTFmZmNcXHUyMDcxXFx1MjA3ZlxcdTIwOTAtXFx1MjA5Y1xcdTIxMDJcXHUyMTA3XFx1MjEwYS1cXHUyMTEzXFx1MjExNVxcdTIxMTktXFx1MjExZFxcdTIxMjRcXHUyMTI2XFx1MjEyOFxcdTIxMmEtXFx1MjEyZFxcdTIxMmYtXFx1MjEzOVxcdTIxM2MtXFx1MjEzZlxcdTIxNDUtXFx1MjE0OVxcdTIxNGVcXHUyMTYwLVxcdTIxODhcXHUyYzAwLVxcdTJjMmVcXHUyYzMwLVxcdTJjNWVcXHUyYzYwLVxcdTJjZTRcXHUyY2ViLVxcdTJjZWVcXHUyY2YyXFx1MmNmM1xcdTJkMDAtXFx1MmQyNVxcdTJkMjdcXHUyZDJkXFx1MmQzMC1cXHUyZDY3XFx1MmQ2ZlxcdTJkODAtXFx1MmQ5NlxcdTJkYTAtXFx1MmRhNlxcdTJkYTgtXFx1MmRhZVxcdTJkYjAtXFx1MmRiNlxcdTJkYjgtXFx1MmRiZVxcdTJkYzAtXFx1MmRjNlxcdTJkYzgtXFx1MmRjZVxcdTJkZDAtXFx1MmRkNlxcdTJkZDgtXFx1MmRkZVxcdTJlMmZcXHUzMDA1LVxcdTMwMDdcXHUzMDIxLVxcdTMwMjlcXHUzMDMxLVxcdTMwMzVcXHUzMDM4LVxcdTMwM2NcXHUzMDQxLVxcdTMwOTZcXHUzMDlkLVxcdTMwOWZcXHUzMGExLVxcdTMwZmFcXHUzMGZjLVxcdTMwZmZcXHUzMTA1LVxcdTMxMmRcXHUzMTMxLVxcdTMxOGVcXHUzMWEwLVxcdTMxYmFcXHUzMWYwLVxcdTMxZmZcXHUzNDAwLVxcdTRkYjVcXHU0ZTAwLVxcdTlmY2NcXHVhMDAwLVxcdWE0OGNcXHVhNGQwLVxcdWE0ZmRcXHVhNTAwLVxcdWE2MGNcXHVhNjEwLVxcdWE2MWZcXHVhNjJhXFx1YTYyYlxcdWE2NDAtXFx1YTY2ZVxcdWE2N2YtXFx1YTY5N1xcdWE2YTAtXFx1YTZlZlxcdWE3MTctXFx1YTcxZlxcdWE3MjItXFx1YTc4OFxcdWE3OGItXFx1YTc4ZVxcdWE3OTAtXFx1YTc5M1xcdWE3YTAtXFx1YTdhYVxcdWE3ZjgtXFx1YTgwMVxcdWE4MDMtXFx1YTgwNVxcdWE4MDctXFx1YTgwYVxcdWE4MGMtXFx1YTgyMlxcdWE4NDAtXFx1YTg3M1xcdWE4ODItXFx1YThiM1xcdWE4ZjItXFx1YThmN1xcdWE4ZmJcXHVhOTBhLVxcdWE5MjVcXHVhOTMwLVxcdWE5NDZcXHVhOTYwLVxcdWE5N2NcXHVhOTg0LVxcdWE5YjJcXHVhOWNmXFx1YWEwMC1cXHVhYTI4XFx1YWE0MC1cXHVhYTQyXFx1YWE0NC1cXHVhYTRiXFx1YWE2MC1cXHVhYTc2XFx1YWE3YVxcdWFhODAtXFx1YWFhZlxcdWFhYjFcXHVhYWI1XFx1YWFiNlxcdWFhYjktXFx1YWFiZFxcdWFhYzBcXHVhYWMyXFx1YWFkYi1cXHVhYWRkXFx1YWFlMC1cXHVhYWVhXFx1YWFmMi1cXHVhYWY0XFx1YWIwMS1cXHVhYjA2XFx1YWIwOS1cXHVhYjBlXFx1YWIxMS1cXHVhYjE2XFx1YWIyMC1cXHVhYjI2XFx1YWIyOC1cXHVhYjJlXFx1YWJjMC1cXHVhYmUyXFx1YWMwMC1cXHVkN2EzXFx1ZDdiMC1cXHVkN2M2XFx1ZDdjYi1cXHVkN2ZiXFx1ZjkwMC1cXHVmYTZkXFx1ZmE3MC1cXHVmYWQ5XFx1ZmIwMC1cXHVmYjA2XFx1ZmIxMy1cXHVmYjE3XFx1ZmIxZFxcdWZiMWYtXFx1ZmIyOFxcdWZiMmEtXFx1ZmIzNlxcdWZiMzgtXFx1ZmIzY1xcdWZiM2VcXHVmYjQwXFx1ZmI0MVxcdWZiNDNcXHVmYjQ0XFx1ZmI0Ni1cXHVmYmIxXFx1ZmJkMy1cXHVmZDNkXFx1ZmQ1MC1cXHVmZDhmXFx1ZmQ5Mi1cXHVmZGM3XFx1ZmRmMC1cXHVmZGZiXFx1ZmU3MC1cXHVmZTc0XFx1ZmU3Ni1cXHVmZWZjXFx1ZmYyMS1cXHVmZjNhXFx1ZmY0MS1cXHVmZjVhXFx1ZmY2Ni1cXHVmZmJlXFx1ZmZjMi1cXHVmZmM3XFx1ZmZjYS1cXHVmZmNmXFx1ZmZkMi1cXHVmZmQ3XFx1ZmZkYS1cXHVmZmRjXVskQS1aXFxfYS16XFx4YWFcXHhiNVxceGJhXFx4YzAtXFx4ZDZcXHhkOC1cXHhmNlxceGY4LVxcdTAyYzFcXHUwMmM2LVxcdTAyZDFcXHUwMmUwLVxcdTAyZTRcXHUwMmVjXFx1MDJlZVxcdTAzNzAtXFx1MDM3NFxcdTAzNzZcXHUwMzc3XFx1MDM3YS1cXHUwMzdkXFx1MDM4NlxcdTAzODgtXFx1MDM4YVxcdTAzOGNcXHUwMzhlLVxcdTAzYTFcXHUwM2EzLVxcdTAzZjVcXHUwM2Y3LVxcdTA0ODFcXHUwNDhhLVxcdTA1MjdcXHUwNTMxLVxcdTA1NTZcXHUwNTU5XFx1MDU2MS1cXHUwNTg3XFx1MDVkMC1cXHUwNWVhXFx1MDVmMC1cXHUwNWYyXFx1MDYyMC1cXHUwNjRhXFx1MDY2ZVxcdTA2NmZcXHUwNjcxLVxcdTA2ZDNcXHUwNmQ1XFx1MDZlNVxcdTA2ZTZcXHUwNmVlXFx1MDZlZlxcdTA2ZmEtXFx1MDZmY1xcdTA2ZmZcXHUwNzEwXFx1MDcxMi1cXHUwNzJmXFx1MDc0ZC1cXHUwN2E1XFx1MDdiMVxcdTA3Y2EtXFx1MDdlYVxcdTA3ZjRcXHUwN2Y1XFx1MDdmYVxcdTA4MDAtXFx1MDgxNVxcdTA4MWFcXHUwODI0XFx1MDgyOFxcdTA4NDAtXFx1MDg1OFxcdTA4YTBcXHUwOGEyLVxcdTA4YWNcXHUwOTA0LVxcdTA5MzlcXHUwOTNkXFx1MDk1MFxcdTA5NTgtXFx1MDk2MVxcdTA5NzEtXFx1MDk3N1xcdTA5NzktXFx1MDk3ZlxcdTA5ODUtXFx1MDk4Y1xcdTA5OGZcXHUwOTkwXFx1MDk5My1cXHUwOWE4XFx1MDlhYS1cXHUwOWIwXFx1MDliMlxcdTA5YjYtXFx1MDliOVxcdTA5YmRcXHUwOWNlXFx1MDlkY1xcdTA5ZGRcXHUwOWRmLVxcdTA5ZTFcXHUwOWYwXFx1MDlmMVxcdTBhMDUtXFx1MGEwYVxcdTBhMGZcXHUwYTEwXFx1MGExMy1cXHUwYTI4XFx1MGEyYS1cXHUwYTMwXFx1MGEzMlxcdTBhMzNcXHUwYTM1XFx1MGEzNlxcdTBhMzhcXHUwYTM5XFx1MGE1OS1cXHUwYTVjXFx1MGE1ZVxcdTBhNzItXFx1MGE3NFxcdTBhODUtXFx1MGE4ZFxcdTBhOGYtXFx1MGE5MVxcdTBhOTMtXFx1MGFhOFxcdTBhYWEtXFx1MGFiMFxcdTBhYjJcXHUwYWIzXFx1MGFiNS1cXHUwYWI5XFx1MGFiZFxcdTBhZDBcXHUwYWUwXFx1MGFlMVxcdTBiMDUtXFx1MGIwY1xcdTBiMGZcXHUwYjEwXFx1MGIxMy1cXHUwYjI4XFx1MGIyYS1cXHUwYjMwXFx1MGIzMlxcdTBiMzNcXHUwYjM1LVxcdTBiMzlcXHUwYjNkXFx1MGI1Y1xcdTBiNWRcXHUwYjVmLVxcdTBiNjFcXHUwYjcxXFx1MGI4M1xcdTBiODUtXFx1MGI4YVxcdTBiOGUtXFx1MGI5MFxcdTBiOTItXFx1MGI5NVxcdTBiOTlcXHUwYjlhXFx1MGI5Y1xcdTBiOWVcXHUwYjlmXFx1MGJhM1xcdTBiYTRcXHUwYmE4LVxcdTBiYWFcXHUwYmFlLVxcdTBiYjlcXHUwYmQwXFx1MGMwNS1cXHUwYzBjXFx1MGMwZS1cXHUwYzEwXFx1MGMxMi1cXHUwYzI4XFx1MGMyYS1cXHUwYzMzXFx1MGMzNS1cXHUwYzM5XFx1MGMzZFxcdTBjNThcXHUwYzU5XFx1MGM2MFxcdTBjNjFcXHUwYzg1LVxcdTBjOGNcXHUwYzhlLVxcdTBjOTBcXHUwYzkyLVxcdTBjYThcXHUwY2FhLVxcdTBjYjNcXHUwY2I1LVxcdTBjYjlcXHUwY2JkXFx1MGNkZVxcdTBjZTBcXHUwY2UxXFx1MGNmMVxcdTBjZjJcXHUwZDA1LVxcdTBkMGNcXHUwZDBlLVxcdTBkMTBcXHUwZDEyLVxcdTBkM2FcXHUwZDNkXFx1MGQ0ZVxcdTBkNjBcXHUwZDYxXFx1MGQ3YS1cXHUwZDdmXFx1MGQ4NS1cXHUwZDk2XFx1MGQ5YS1cXHUwZGIxXFx1MGRiMy1cXHUwZGJiXFx1MGRiZFxcdTBkYzAtXFx1MGRjNlxcdTBlMDEtXFx1MGUzMFxcdTBlMzJcXHUwZTMzXFx1MGU0MC1cXHUwZTQ2XFx1MGU4MVxcdTBlODJcXHUwZTg0XFx1MGU4N1xcdTBlODhcXHUwZThhXFx1MGU4ZFxcdTBlOTQtXFx1MGU5N1xcdTBlOTktXFx1MGU5ZlxcdTBlYTEtXFx1MGVhM1xcdTBlYTVcXHUwZWE3XFx1MGVhYVxcdTBlYWJcXHUwZWFkLVxcdTBlYjBcXHUwZWIyXFx1MGViM1xcdTBlYmRcXHUwZWMwLVxcdTBlYzRcXHUwZWM2XFx1MGVkYy1cXHUwZWRmXFx1MGYwMFxcdTBmNDAtXFx1MGY0N1xcdTBmNDktXFx1MGY2Y1xcdTBmODgtXFx1MGY4Y1xcdTEwMDAtXFx1MTAyYVxcdTEwM2ZcXHUxMDUwLVxcdTEwNTVcXHUxMDVhLVxcdTEwNWRcXHUxMDYxXFx1MTA2NVxcdTEwNjZcXHUxMDZlLVxcdTEwNzBcXHUxMDc1LVxcdTEwODFcXHUxMDhlXFx1MTBhMC1cXHUxMGM1XFx1MTBjN1xcdTEwY2RcXHUxMGQwLVxcdTEwZmFcXHUxMGZjLVxcdTEyNDhcXHUxMjRhLVxcdTEyNGRcXHUxMjUwLVxcdTEyNTZcXHUxMjU4XFx1MTI1YS1cXHUxMjVkXFx1MTI2MC1cXHUxMjg4XFx1MTI4YS1cXHUxMjhkXFx1MTI5MC1cXHUxMmIwXFx1MTJiMi1cXHUxMmI1XFx1MTJiOC1cXHUxMmJlXFx1MTJjMFxcdTEyYzItXFx1MTJjNVxcdTEyYzgtXFx1MTJkNlxcdTEyZDgtXFx1MTMxMFxcdTEzMTItXFx1MTMxNVxcdTEzMTgtXFx1MTM1YVxcdTEzODAtXFx1MTM4ZlxcdTEzYTAtXFx1MTNmNFxcdTE0MDEtXFx1MTY2Y1xcdTE2NmYtXFx1MTY3ZlxcdTE2ODEtXFx1MTY5YVxcdTE2YTAtXFx1MTZlYVxcdTE2ZWUtXFx1MTZmMFxcdTE3MDAtXFx1MTcwY1xcdTE3MGUtXFx1MTcxMVxcdTE3MjAtXFx1MTczMVxcdTE3NDAtXFx1MTc1MVxcdTE3NjAtXFx1MTc2Y1xcdTE3NmUtXFx1MTc3MFxcdTE3ODAtXFx1MTdiM1xcdTE3ZDdcXHUxN2RjXFx1MTgyMC1cXHUxODc3XFx1MTg4MC1cXHUxOGE4XFx1MThhYVxcdTE4YjAtXFx1MThmNVxcdTE5MDAtXFx1MTkxY1xcdTE5NTAtXFx1MTk2ZFxcdTE5NzAtXFx1MTk3NFxcdTE5ODAtXFx1MTlhYlxcdTE5YzEtXFx1MTljN1xcdTFhMDAtXFx1MWExNlxcdTFhMjAtXFx1MWE1NFxcdTFhYTdcXHUxYjA1LVxcdTFiMzNcXHUxYjQ1LVxcdTFiNGJcXHUxYjgzLVxcdTFiYTBcXHUxYmFlXFx1MWJhZlxcdTFiYmEtXFx1MWJlNVxcdTFjMDAtXFx1MWMyM1xcdTFjNGQtXFx1MWM0ZlxcdTFjNWEtXFx1MWM3ZFxcdTFjZTktXFx1MWNlY1xcdTFjZWUtXFx1MWNmMVxcdTFjZjVcXHUxY2Y2XFx1MWQwMC1cXHUxZGJmXFx1MWUwMC1cXHUxZjE1XFx1MWYxOC1cXHUxZjFkXFx1MWYyMC1cXHUxZjQ1XFx1MWY0OC1cXHUxZjRkXFx1MWY1MC1cXHUxZjU3XFx1MWY1OVxcdTFmNWJcXHUxZjVkXFx1MWY1Zi1cXHUxZjdkXFx1MWY4MC1cXHUxZmI0XFx1MWZiNi1cXHUxZmJjXFx1MWZiZVxcdTFmYzItXFx1MWZjNFxcdTFmYzYtXFx1MWZjY1xcdTFmZDAtXFx1MWZkM1xcdTFmZDYtXFx1MWZkYlxcdTFmZTAtXFx1MWZlY1xcdTFmZjItXFx1MWZmNFxcdTFmZjYtXFx1MWZmY1xcdTIwNzFcXHUyMDdmXFx1MjA5MC1cXHUyMDljXFx1MjEwMlxcdTIxMDdcXHUyMTBhLVxcdTIxMTNcXHUyMTE1XFx1MjExOS1cXHUyMTFkXFx1MjEyNFxcdTIxMjZcXHUyMTI4XFx1MjEyYS1cXHUyMTJkXFx1MjEyZi1cXHUyMTM5XFx1MjEzYy1cXHUyMTNmXFx1MjE0NS1cXHUyMTQ5XFx1MjE0ZVxcdTIxNjAtXFx1MjE4OFxcdTJjMDAtXFx1MmMyZVxcdTJjMzAtXFx1MmM1ZVxcdTJjNjAtXFx1MmNlNFxcdTJjZWItXFx1MmNlZVxcdTJjZjJcXHUyY2YzXFx1MmQwMC1cXHUyZDI1XFx1MmQyN1xcdTJkMmRcXHUyZDMwLVxcdTJkNjdcXHUyZDZmXFx1MmQ4MC1cXHUyZDk2XFx1MmRhMC1cXHUyZGE2XFx1MmRhOC1cXHUyZGFlXFx1MmRiMC1cXHUyZGI2XFx1MmRiOC1cXHUyZGJlXFx1MmRjMC1cXHUyZGM2XFx1MmRjOC1cXHUyZGNlXFx1MmRkMC1cXHUyZGQ2XFx1MmRkOC1cXHUyZGRlXFx1MmUyZlxcdTMwMDUtXFx1MzAwN1xcdTMwMjEtXFx1MzAyOVxcdTMwMzEtXFx1MzAzNVxcdTMwMzgtXFx1MzAzY1xcdTMwNDEtXFx1MzA5NlxcdTMwOWQtXFx1MzA5ZlxcdTMwYTEtXFx1MzBmYVxcdTMwZmMtXFx1MzBmZlxcdTMxMDUtXFx1MzEyZFxcdTMxMzEtXFx1MzE4ZVxcdTMxYTAtXFx1MzFiYVxcdTMxZjAtXFx1MzFmZlxcdTM0MDAtXFx1NGRiNVxcdTRlMDAtXFx1OWZjY1xcdWEwMDAtXFx1YTQ4Y1xcdWE0ZDAtXFx1YTRmZFxcdWE1MDAtXFx1YTYwY1xcdWE2MTAtXFx1YTYxZlxcdWE2MmFcXHVhNjJiXFx1YTY0MC1cXHVhNjZlXFx1YTY3Zi1cXHVhNjk3XFx1YTZhMC1cXHVhNmVmXFx1YTcxNy1cXHVhNzFmXFx1YTcyMi1cXHVhNzg4XFx1YTc4Yi1cXHVhNzhlXFx1YTc5MC1cXHVhNzkzXFx1YTdhMC1cXHVhN2FhXFx1YTdmOC1cXHVhODAxXFx1YTgwMy1cXHVhODA1XFx1YTgwNy1cXHVhODBhXFx1YTgwYy1cXHVhODIyXFx1YTg0MC1cXHVhODczXFx1YTg4Mi1cXHVhOGIzXFx1YThmMi1cXHVhOGY3XFx1YThmYlxcdWE5MGEtXFx1YTkyNVxcdWE5MzAtXFx1YTk0NlxcdWE5NjAtXFx1YTk3Y1xcdWE5ODQtXFx1YTliMlxcdWE5Y2ZcXHVhYTAwLVxcdWFhMjhcXHVhYTQwLVxcdWFhNDJcXHVhYTQ0LVxcdWFhNGJcXHVhYTYwLVxcdWFhNzZcXHVhYTdhXFx1YWE4MC1cXHVhYWFmXFx1YWFiMVxcdWFhYjVcXHVhYWI2XFx1YWFiOS1cXHVhYWJkXFx1YWFjMFxcdWFhYzJcXHVhYWRiLVxcdWFhZGRcXHVhYWUwLVxcdWFhZWFcXHVhYWYyLVxcdWFhZjRcXHVhYjAxLVxcdWFiMDZcXHVhYjA5LVxcdWFiMGVcXHVhYjExLVxcdWFiMTZcXHVhYjIwLVxcdWFiMjZcXHVhYjI4LVxcdWFiMmVcXHVhYmMwLVxcdWFiZTJcXHVhYzAwLVxcdWQ3YTNcXHVkN2IwLVxcdWQ3YzZcXHVkN2NiLVxcdWQ3ZmJcXHVmOTAwLVxcdWZhNmRcXHVmYTcwLVxcdWZhZDlcXHVmYjAwLVxcdWZiMDZcXHVmYjEzLVxcdWZiMTdcXHVmYjFkXFx1ZmIxZi1cXHVmYjI4XFx1ZmIyYS1cXHVmYjM2XFx1ZmIzOC1cXHVmYjNjXFx1ZmIzZVxcdWZiNDBcXHVmYjQxXFx1ZmI0M1xcdWZiNDRcXHVmYjQ2LVxcdWZiYjFcXHVmYmQzLVxcdWZkM2RcXHVmZDUwLVxcdWZkOGZcXHVmZDkyLVxcdWZkYzdcXHVmZGYwLVxcdWZkZmJcXHVmZTcwLVxcdWZlNzRcXHVmZTc2LVxcdWZlZmNcXHVmZjIxLVxcdWZmM2FcXHVmZjQxLVxcdWZmNWFcXHVmZjY2LVxcdWZmYmVcXHVmZmMyLVxcdWZmYzdcXHVmZmNhLVxcdWZmY2ZcXHVmZmQyLVxcdWZmZDdcXHVmZmRhLVxcdWZmZGMwLTlcXHUwMzAwLVxcdTAzNmZcXHUwNDgzLVxcdTA0ODdcXHUwNTkxLVxcdTA1YmRcXHUwNWJmXFx1MDVjMVxcdTA1YzJcXHUwNWM0XFx1MDVjNVxcdTA1YzdcXHUwNjEwLVxcdTA2MWFcXHUwNjRiLVxcdTA2NjlcXHUwNjcwXFx1MDZkNi1cXHUwNmRjXFx1MDZkZi1cXHUwNmU0XFx1MDZlN1xcdTA2ZThcXHUwNmVhLVxcdTA2ZWRcXHUwNmYwLVxcdTA2ZjlcXHUwNzExXFx1MDczMC1cXHUwNzRhXFx1MDdhNi1cXHUwN2IwXFx1MDdjMC1cXHUwN2M5XFx1MDdlYi1cXHUwN2YzXFx1MDgxNi1cXHUwODE5XFx1MDgxYi1cXHUwODIzXFx1MDgyNS1cXHUwODI3XFx1MDgyOS1cXHUwODJkXFx1MDg1OS1cXHUwODViXFx1MDhlNC1cXHUwOGZlXFx1MDkwMC1cXHUwOTAzXFx1MDkzYS1cXHUwOTNjXFx1MDkzZS1cXHUwOTRmXFx1MDk1MS1cXHUwOTU3XFx1MDk2MlxcdTA5NjNcXHUwOTY2LVxcdTA5NmZcXHUwOTgxLVxcdTA5ODNcXHUwOWJjXFx1MDliZS1cXHUwOWM0XFx1MDljN1xcdTA5YzhcXHUwOWNiLVxcdTA5Y2RcXHUwOWQ3XFx1MDllMlxcdTA5ZTNcXHUwOWU2LVxcdTA5ZWZcXHUwYTAxLVxcdTBhMDNcXHUwYTNjXFx1MGEzZS1cXHUwYTQyXFx1MGE0N1xcdTBhNDhcXHUwYTRiLVxcdTBhNGRcXHUwYTUxXFx1MGE2Ni1cXHUwYTcxXFx1MGE3NVxcdTBhODEtXFx1MGE4M1xcdTBhYmNcXHUwYWJlLVxcdTBhYzVcXHUwYWM3LVxcdTBhYzlcXHUwYWNiLVxcdTBhY2RcXHUwYWUyXFx1MGFlM1xcdTBhZTYtXFx1MGFlZlxcdTBiMDEtXFx1MGIwM1xcdTBiM2NcXHUwYjNlLVxcdTBiNDRcXHUwYjQ3XFx1MGI0OFxcdTBiNGItXFx1MGI0ZFxcdTBiNTZcXHUwYjU3XFx1MGI2MlxcdTBiNjNcXHUwYjY2LVxcdTBiNmZcXHUwYjgyXFx1MGJiZS1cXHUwYmMyXFx1MGJjNi1cXHUwYmM4XFx1MGJjYS1cXHUwYmNkXFx1MGJkN1xcdTBiZTYtXFx1MGJlZlxcdTBjMDEtXFx1MGMwM1xcdTBjM2UtXFx1MGM0NFxcdTBjNDYtXFx1MGM0OFxcdTBjNGEtXFx1MGM0ZFxcdTBjNTVcXHUwYzU2XFx1MGM2MlxcdTBjNjNcXHUwYzY2LVxcdTBjNmZcXHUwYzgyXFx1MGM4M1xcdTBjYmNcXHUwY2JlLVxcdTBjYzRcXHUwY2M2LVxcdTBjYzhcXHUwY2NhLVxcdTBjY2RcXHUwY2Q1XFx1MGNkNlxcdTBjZTJcXHUwY2UzXFx1MGNlNi1cXHUwY2VmXFx1MGQwMlxcdTBkMDNcXHUwZDNlLVxcdTBkNDRcXHUwZDQ2LVxcdTBkNDhcXHUwZDRhLVxcdTBkNGRcXHUwZDU3XFx1MGQ2MlxcdTBkNjNcXHUwZDY2LVxcdTBkNmZcXHUwZDgyXFx1MGQ4M1xcdTBkY2FcXHUwZGNmLVxcdTBkZDRcXHUwZGQ2XFx1MGRkOC1cXHUwZGRmXFx1MGRmMlxcdTBkZjNcXHUwZTMxXFx1MGUzNC1cXHUwZTNhXFx1MGU0Ny1cXHUwZTRlXFx1MGU1MC1cXHUwZTU5XFx1MGViMVxcdTBlYjQtXFx1MGViOVxcdTBlYmJcXHUwZWJjXFx1MGVjOC1cXHUwZWNkXFx1MGVkMC1cXHUwZWQ5XFx1MGYxOFxcdTBmMTlcXHUwZjIwLVxcdTBmMjlcXHUwZjM1XFx1MGYzN1xcdTBmMzlcXHUwZjNlXFx1MGYzZlxcdTBmNzEtXFx1MGY4NFxcdTBmODZcXHUwZjg3XFx1MGY4ZC1cXHUwZjk3XFx1MGY5OS1cXHUwZmJjXFx1MGZjNlxcdTEwMmItXFx1MTAzZVxcdTEwNDAtXFx1MTA0OVxcdTEwNTYtXFx1MTA1OVxcdTEwNWUtXFx1MTA2MFxcdTEwNjItXFx1MTA2NFxcdTEwNjctXFx1MTA2ZFxcdTEwNzEtXFx1MTA3NFxcdTEwODItXFx1MTA4ZFxcdTEwOGYtXFx1MTA5ZFxcdTEzNWQtXFx1MTM1ZlxcdTE3MTItXFx1MTcxNFxcdTE3MzItXFx1MTczNFxcdTE3NTJcXHUxNzUzXFx1MTc3MlxcdTE3NzNcXHUxN2I0LVxcdTE3ZDNcXHUxN2RkXFx1MTdlMC1cXHUxN2U5XFx1MTgwYi1cXHUxODBkXFx1MTgxMC1cXHUxODE5XFx1MThhOVxcdTE5MjAtXFx1MTkyYlxcdTE5MzAtXFx1MTkzYlxcdTE5NDYtXFx1MTk0ZlxcdTE5YjAtXFx1MTljMFxcdTE5YzhcXHUxOWM5XFx1MTlkMC1cXHUxOWQ5XFx1MWExNy1cXHUxYTFiXFx1MWE1NS1cXHUxYTVlXFx1MWE2MC1cXHUxYTdjXFx1MWE3Zi1cXHUxYTg5XFx1MWE5MC1cXHUxYTk5XFx1MWIwMC1cXHUxYjA0XFx1MWIzNC1cXHUxYjQ0XFx1MWI1MC1cXHUxYjU5XFx1MWI2Yi1cXHUxYjczXFx1MWI4MC1cXHUxYjgyXFx1MWJhMS1cXHUxYmFkXFx1MWJiMC1cXHUxYmI5XFx1MWJlNi1cXHUxYmYzXFx1MWMyNC1cXHUxYzM3XFx1MWM0MC1cXHUxYzQ5XFx1MWM1MC1cXHUxYzU5XFx1MWNkMC1cXHUxY2QyXFx1MWNkNC1cXHUxY2U4XFx1MWNlZFxcdTFjZjItXFx1MWNmNFxcdTFkYzAtXFx1MWRlNlxcdTFkZmMtXFx1MWRmZlxcdTIwMGNcXHUyMDBkXFx1MjAzZlxcdTIwNDBcXHUyMDU0XFx1MjBkMC1cXHUyMGRjXFx1MjBlMVxcdTIwZTUtXFx1MjBmMFxcdTJjZWYtXFx1MmNmMVxcdTJkN2ZcXHUyZGUwLVxcdTJkZmZcXHUzMDJhLVxcdTMwMmZcXHUzMDk5XFx1MzA5YVxcdWE2MjAtXFx1YTYyOVxcdWE2NmZcXHVhNjc0LVxcdWE2N2RcXHVhNjlmXFx1YTZmMFxcdWE2ZjFcXHVhODAyXFx1YTgwNlxcdWE4MGJcXHVhODIzLVxcdWE4MjdcXHVhODgwXFx1YTg4MVxcdWE4YjQtXFx1YThjNFxcdWE4ZDAtXFx1YThkOVxcdWE4ZTAtXFx1YThmMVxcdWE5MDAtXFx1YTkwOVxcdWE5MjYtXFx1YTkyZFxcdWE5NDctXFx1YTk1M1xcdWE5ODAtXFx1YTk4M1xcdWE5YjMtXFx1YTljMFxcdWE5ZDAtXFx1YTlkOVxcdWFhMjktXFx1YWEzNlxcdWFhNDNcXHVhYTRjXFx1YWE0ZFxcdWFhNTAtXFx1YWE1OVxcdWFhN2JcXHVhYWIwXFx1YWFiMi1cXHVhYWI0XFx1YWFiN1xcdWFhYjhcXHVhYWJlXFx1YWFiZlxcdWFhYzFcXHVhYWViLVxcdWFhZWZcXHVhYWY1XFx1YWFmNlxcdWFiZTMtXFx1YWJlYVxcdWFiZWNcXHVhYmVkXFx1YWJmMC1cXHVhYmY5XFx1ZmIxZVxcdWZlMDAtXFx1ZmUwZlxcdWZlMjAtXFx1ZmUyNlxcdWZlMzNcXHVmZTM0XFx1ZmU0ZC1cXHVmZTRmXFx1ZmYxMC1cXHVmZjE5XFx1ZmYzZl0qJC8udGVzdChzdHIpXG59XG5tb2R1bGUuZXhwb3J0cyA9IGlzUHJvcGVydHlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9pcy1wcm9wZXJ0eS9pcy1wcm9wZXJ0eS5qc1xuICoqIG1vZHVsZSBpZCA9IDU5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKVxuXG52YXIgSU5ERU5UX1NUQVJUID0gL1tcXHtcXFtdL1xudmFyIElOREVOVF9FTkQgPSAvW1xcfVxcXV0vXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBsaW5lcyA9IFtdXG4gIHZhciBpbmRlbnQgPSAwXG5cbiAgdmFyIHB1c2ggPSBmdW5jdGlvbihzdHIpIHtcbiAgICB2YXIgc3BhY2VzID0gJydcbiAgICB3aGlsZSAoc3BhY2VzLmxlbmd0aCA8IGluZGVudCoyKSBzcGFjZXMgKz0gJyAgJ1xuICAgIGxpbmVzLnB1c2goc3BhY2VzK3N0cilcbiAgfVxuXG4gIHZhciBsaW5lID0gZnVuY3Rpb24oZm10KSB7XG4gICAgaWYgKCFmbXQpIHJldHVybiBsaW5lXG5cbiAgICBpZiAoSU5ERU5UX0VORC50ZXN0KGZtdC50cmltKClbMF0pICYmIElOREVOVF9TVEFSVC50ZXN0KGZtdFtmbXQubGVuZ3RoLTFdKSkge1xuICAgICAgaW5kZW50LS1cbiAgICAgIHB1c2godXRpbC5mb3JtYXQuYXBwbHkodXRpbCwgYXJndW1lbnRzKSlcbiAgICAgIGluZGVudCsrXG4gICAgICByZXR1cm4gbGluZVxuICAgIH1cbiAgICBpZiAoSU5ERU5UX1NUQVJULnRlc3QoZm10W2ZtdC5sZW5ndGgtMV0pKSB7XG4gICAgICBwdXNoKHV0aWwuZm9ybWF0LmFwcGx5KHV0aWwsIGFyZ3VtZW50cykpXG4gICAgICBpbmRlbnQrK1xuICAgICAgcmV0dXJuIGxpbmVcbiAgICB9XG4gICAgaWYgKElOREVOVF9FTkQudGVzdChmbXQudHJpbSgpWzBdKSkge1xuICAgICAgaW5kZW50LS1cbiAgICAgIHB1c2godXRpbC5mb3JtYXQuYXBwbHkodXRpbCwgYXJndW1lbnRzKSlcbiAgICAgIHJldHVybiBsaW5lXG4gICAgfVxuXG4gICAgcHVzaCh1dGlsLmZvcm1hdC5hcHBseSh1dGlsLCBhcmd1bWVudHMpKVxuICAgIHJldHVybiBsaW5lXG4gIH1cblxuICBsaW5lLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGxpbmVzLmpvaW4oJ1xcbicpXG4gIH1cblxuICBsaW5lLnRvRnVuY3Rpb24gPSBmdW5jdGlvbihzY29wZSkge1xuICAgIHZhciBzcmMgPSAncmV0dXJuICgnK2xpbmUudG9TdHJpbmcoKSsnKSdcblxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoc2NvcGUgfHwge30pLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHJldHVybiBrZXlcbiAgICB9KVxuXG4gICAgdmFyIHZhbHMgPSBrZXlzLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHJldHVybiBzY29wZVtrZXldXG4gICAgfSlcblxuICAgIHJldHVybiBGdW5jdGlvbi5hcHBseShudWxsLCBrZXlzLmNvbmNhdChzcmMpKS5hcHBseShudWxsLCB2YWxzKVxuICB9XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIGxpbmUuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuXG4gIHJldHVybiBsaW5lXG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9nZW5lcmF0ZS1mdW5jdGlvbi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDYwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxudmFyIGZvcm1hdFJlZ0V4cCA9IC8lW3NkaiVdL2c7XG5leHBvcnRzLmZvcm1hdCA9IGZ1bmN0aW9uKGYpIHtcbiAgaWYgKCFpc1N0cmluZyhmKSkge1xuICAgIHZhciBvYmplY3RzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG9iamVjdHMucHVzaChpbnNwZWN0KGFyZ3VtZW50c1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0cy5qb2luKCcgJyk7XG4gIH1cblxuICB2YXIgaSA9IDE7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gIHZhciBzdHIgPSBTdHJpbmcoZikucmVwbGFjZShmb3JtYXRSZWdFeHAsIGZ1bmN0aW9uKHgpIHtcbiAgICBpZiAoeCA9PT0gJyUlJykgcmV0dXJuICclJztcbiAgICBpZiAoaSA+PSBsZW4pIHJldHVybiB4O1xuICAgIHN3aXRjaCAoeCkge1xuICAgICAgY2FzZSAnJXMnOiByZXR1cm4gU3RyaW5nKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclZCc6IHJldHVybiBOdW1iZXIoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVqJzpcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYXJnc1tpKytdKTtcbiAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgIHJldHVybiAnW0NpcmN1bGFyXSc7XG4gICAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgfSk7XG4gIGZvciAodmFyIHggPSBhcmdzW2ldOyBpIDwgbGVuOyB4ID0gYXJnc1srK2ldKSB7XG4gICAgaWYgKGlzTnVsbCh4KSB8fCAhaXNPYmplY3QoeCkpIHtcbiAgICAgIHN0ciArPSAnICcgKyB4O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgKz0gJyAnICsgaW5zcGVjdCh4KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn07XG5cblxuLy8gTWFyayB0aGF0IGEgbWV0aG9kIHNob3VsZCBub3QgYmUgdXNlZC5cbi8vIFJldHVybnMgYSBtb2RpZmllZCBmdW5jdGlvbiB3aGljaCB3YXJucyBvbmNlIGJ5IGRlZmF1bHQuXG4vLyBJZiAtLW5vLWRlcHJlY2F0aW9uIGlzIHNldCwgdGhlbiBpdCBpcyBhIG5vLW9wLlxuZXhwb3J0cy5kZXByZWNhdGUgPSBmdW5jdGlvbihmbiwgbXNnKSB7XG4gIC8vIEFsbG93IGZvciBkZXByZWNhdGluZyB0aGluZ3MgaW4gdGhlIHByb2Nlc3Mgb2Ygc3RhcnRpbmcgdXAuXG4gIGlmIChpc1VuZGVmaW5lZChnbG9iYWwucHJvY2VzcykpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZXhwb3J0cy5kZXByZWNhdGUoZm4sIG1zZykuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKHByb2Nlc3Mubm9EZXByZWNhdGlvbiA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIHZhciB3YXJuZWQgPSBmYWxzZTtcbiAgZnVuY3Rpb24gZGVwcmVjYXRlZCgpIHtcbiAgICBpZiAoIXdhcm5lZCkge1xuICAgICAgaWYgKHByb2Nlc3MudGhyb3dEZXByZWNhdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy50cmFjZURlcHJlY2F0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUudHJhY2UobXNnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobXNnKTtcbiAgICAgIH1cbiAgICAgIHdhcm5lZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGRlcHJlY2F0ZWQ7XG59O1xuXG5cbnZhciBkZWJ1Z3MgPSB7fTtcbnZhciBkZWJ1Z0Vudmlyb247XG5leHBvcnRzLmRlYnVnbG9nID0gZnVuY3Rpb24oc2V0KSB7XG4gIGlmIChpc1VuZGVmaW5lZChkZWJ1Z0Vudmlyb24pKVxuICAgIGRlYnVnRW52aXJvbiA9IHByb2Nlc3MuZW52Lk5PREVfREVCVUcgfHwgJyc7XG4gIHNldCA9IHNldC50b1VwcGVyQ2FzZSgpO1xuICBpZiAoIWRlYnVnc1tzZXRdKSB7XG4gICAgaWYgKG5ldyBSZWdFeHAoJ1xcXFxiJyArIHNldCArICdcXFxcYicsICdpJykudGVzdChkZWJ1Z0Vudmlyb24pKSB7XG4gICAgICB2YXIgcGlkID0gcHJvY2Vzcy5waWQ7XG4gICAgICBkZWJ1Z3Nbc2V0XSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbXNnID0gZXhwb3J0cy5mb3JtYXQuYXBwbHkoZXhwb3J0cywgYXJndW1lbnRzKTtcbiAgICAgICAgY29uc29sZS5lcnJvcignJXMgJWQ6ICVzJywgc2V0LCBwaWQsIG1zZyk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1Z3Nbc2V0XSA9IGZ1bmN0aW9uKCkge307XG4gICAgfVxuICB9XG4gIHJldHVybiBkZWJ1Z3Nbc2V0XTtcbn07XG5cblxuLyoqXG4gKiBFY2hvcyB0aGUgdmFsdWUgb2YgYSB2YWx1ZS4gVHJ5cyB0byBwcmludCB0aGUgdmFsdWUgb3V0XG4gKiBpbiB0aGUgYmVzdCB3YXkgcG9zc2libGUgZ2l2ZW4gdGhlIGRpZmZlcmVudCB0eXBlcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gcHJpbnQgb3V0LlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHMgT3B0aW9uYWwgb3B0aW9ucyBvYmplY3QgdGhhdCBhbHRlcnMgdGhlIG91dHB1dC5cbiAqL1xuLyogbGVnYWN5OiBvYmosIHNob3dIaWRkZW4sIGRlcHRoLCBjb2xvcnMqL1xuZnVuY3Rpb24gaW5zcGVjdChvYmosIG9wdHMpIHtcbiAgLy8gZGVmYXVsdCBvcHRpb25zXG4gIHZhciBjdHggPSB7XG4gICAgc2VlbjogW10sXG4gICAgc3R5bGl6ZTogc3R5bGl6ZU5vQ29sb3JcbiAgfTtcbiAgLy8gbGVnYWN5Li4uXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDMpIGN0eC5kZXB0aCA9IGFyZ3VtZW50c1syXTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gNCkgY3R4LmNvbG9ycyA9IGFyZ3VtZW50c1szXTtcbiAgaWYgKGlzQm9vbGVhbihvcHRzKSkge1xuICAgIC8vIGxlZ2FjeS4uLlxuICAgIGN0eC5zaG93SGlkZGVuID0gb3B0cztcbiAgfSBlbHNlIGlmIChvcHRzKSB7XG4gICAgLy8gZ290IGFuIFwib3B0aW9uc1wiIG9iamVjdFxuICAgIGV4cG9ydHMuX2V4dGVuZChjdHgsIG9wdHMpO1xuICB9XG4gIC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5zaG93SGlkZGVuKSkgY3R4LnNob3dIaWRkZW4gPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5kZXB0aCkpIGN0eC5kZXB0aCA9IDI7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguY29sb3JzKSkgY3R4LmNvbG9ycyA9IGZhbHNlO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmN1c3RvbUluc3BlY3QpKSBjdHguY3VzdG9tSW5zcGVjdCA9IHRydWU7XG4gIGlmIChjdHguY29sb3JzKSBjdHguc3R5bGl6ZSA9IHN0eWxpemVXaXRoQ29sb3I7XG4gIHJldHVybiBmb3JtYXRWYWx1ZShjdHgsIG9iaiwgY3R4LmRlcHRoKTtcbn1cbmV4cG9ydHMuaW5zcGVjdCA9IGluc3BlY3Q7XG5cblxuLy8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9BTlNJX2VzY2FwZV9jb2RlI2dyYXBoaWNzXG5pbnNwZWN0LmNvbG9ycyA9IHtcbiAgJ2JvbGQnIDogWzEsIDIyXSxcbiAgJ2l0YWxpYycgOiBbMywgMjNdLFxuICAndW5kZXJsaW5lJyA6IFs0LCAyNF0sXG4gICdpbnZlcnNlJyA6IFs3LCAyN10sXG4gICd3aGl0ZScgOiBbMzcsIDM5XSxcbiAgJ2dyZXknIDogWzkwLCAzOV0sXG4gICdibGFjaycgOiBbMzAsIDM5XSxcbiAgJ2JsdWUnIDogWzM0LCAzOV0sXG4gICdjeWFuJyA6IFszNiwgMzldLFxuICAnZ3JlZW4nIDogWzMyLCAzOV0sXG4gICdtYWdlbnRhJyA6IFszNSwgMzldLFxuICAncmVkJyA6IFszMSwgMzldLFxuICAneWVsbG93JyA6IFszMywgMzldXG59O1xuXG4vLyBEb24ndCB1c2UgJ2JsdWUnIG5vdCB2aXNpYmxlIG9uIGNtZC5leGVcbmluc3BlY3Quc3R5bGVzID0ge1xuICAnc3BlY2lhbCc6ICdjeWFuJyxcbiAgJ251bWJlcic6ICd5ZWxsb3cnLFxuICAnYm9vbGVhbic6ICd5ZWxsb3cnLFxuICAndW5kZWZpbmVkJzogJ2dyZXknLFxuICAnbnVsbCc6ICdib2xkJyxcbiAgJ3N0cmluZyc6ICdncmVlbicsXG4gICdkYXRlJzogJ21hZ2VudGEnLFxuICAvLyBcIm5hbWVcIjogaW50ZW50aW9uYWxseSBub3Qgc3R5bGluZ1xuICAncmVnZXhwJzogJ3JlZCdcbn07XG5cblxuZnVuY3Rpb24gc3R5bGl6ZVdpdGhDb2xvcihzdHIsIHN0eWxlVHlwZSkge1xuICB2YXIgc3R5bGUgPSBpbnNwZWN0LnN0eWxlc1tzdHlsZVR5cGVdO1xuXG4gIGlmIChzdHlsZSkge1xuICAgIHJldHVybiAnXFx1MDAxYlsnICsgaW5zcGVjdC5jb2xvcnNbc3R5bGVdWzBdICsgJ20nICsgc3RyICtcbiAgICAgICAgICAgJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVsxXSArICdtJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG5cblxuZnVuY3Rpb24gc3R5bGl6ZU5vQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgcmV0dXJuIHN0cjtcbn1cblxuXG5mdW5jdGlvbiBhcnJheVRvSGFzaChhcnJheSkge1xuICB2YXIgaGFzaCA9IHt9O1xuXG4gIGFycmF5LmZvckVhY2goZnVuY3Rpb24odmFsLCBpZHgpIHtcbiAgICBoYXNoW3ZhbF0gPSB0cnVlO1xuICB9KTtcblxuICByZXR1cm4gaGFzaDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRWYWx1ZShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMpIHtcbiAgLy8gUHJvdmlkZSBhIGhvb2sgZm9yIHVzZXItc3BlY2lmaWVkIGluc3BlY3QgZnVuY3Rpb25zLlxuICAvLyBDaGVjayB0aGF0IHZhbHVlIGlzIGFuIG9iamVjdCB3aXRoIGFuIGluc3BlY3QgZnVuY3Rpb24gb24gaXRcbiAgaWYgKGN0eC5jdXN0b21JbnNwZWN0ICYmXG4gICAgICB2YWx1ZSAmJlxuICAgICAgaXNGdW5jdGlvbih2YWx1ZS5pbnNwZWN0KSAmJlxuICAgICAgLy8gRmlsdGVyIG91dCB0aGUgdXRpbCBtb2R1bGUsIGl0J3MgaW5zcGVjdCBmdW5jdGlvbiBpcyBzcGVjaWFsXG4gICAgICB2YWx1ZS5pbnNwZWN0ICE9PSBleHBvcnRzLmluc3BlY3QgJiZcbiAgICAgIC8vIEFsc28gZmlsdGVyIG91dCBhbnkgcHJvdG90eXBlIG9iamVjdHMgdXNpbmcgdGhlIGNpcmN1bGFyIGNoZWNrLlxuICAgICAgISh2YWx1ZS5jb25zdHJ1Y3RvciAmJiB2YWx1ZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgPT09IHZhbHVlKSkge1xuICAgIHZhciByZXQgPSB2YWx1ZS5pbnNwZWN0KHJlY3Vyc2VUaW1lcywgY3R4KTtcbiAgICBpZiAoIWlzU3RyaW5nKHJldCkpIHtcbiAgICAgIHJldCA9IGZvcm1hdFZhbHVlKGN0eCwgcmV0LCByZWN1cnNlVGltZXMpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8gUHJpbWl0aXZlIHR5cGVzIGNhbm5vdCBoYXZlIHByb3BlcnRpZXNcbiAgdmFyIHByaW1pdGl2ZSA9IGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKTtcbiAgaWYgKHByaW1pdGl2ZSkge1xuICAgIHJldHVybiBwcmltaXRpdmU7XG4gIH1cblxuICAvLyBMb29rIHVwIHRoZSBrZXlzIG9mIHRoZSBvYmplY3QuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuICB2YXIgdmlzaWJsZUtleXMgPSBhcnJheVRvSGFzaChrZXlzKTtcblxuICBpZiAoY3R4LnNob3dIaWRkZW4pIHtcbiAgICBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModmFsdWUpO1xuICB9XG5cbiAgLy8gSUUgZG9lc24ndCBtYWtlIGVycm9yIGZpZWxkcyBub24tZW51bWVyYWJsZVxuICAvLyBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaWUvZHd3NTJzYnQodj12cy45NCkuYXNweFxuICBpZiAoaXNFcnJvcih2YWx1ZSlcbiAgICAgICYmIChrZXlzLmluZGV4T2YoJ21lc3NhZ2UnKSA+PSAwIHx8IGtleXMuaW5kZXhPZignZGVzY3JpcHRpb24nKSA+PSAwKSkge1xuICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICAvLyBTb21lIHR5cGUgb2Ygb2JqZWN0IHdpdGhvdXQgcHJvcGVydGllcyBjYW4gYmUgc2hvcnRjdXR0ZWQuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgdmFyIG5hbWUgPSB2YWx1ZS5uYW1lID8gJzogJyArIHZhbHVlLm5hbWUgOiAnJztcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnW0Z1bmN0aW9uJyArIG5hbWUgKyAnXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAncmVnZXhwJyk7XG4gICAgfVxuICAgIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdkYXRlJyk7XG4gICAgfVxuICAgIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgYmFzZSA9ICcnLCBhcnJheSA9IGZhbHNlLCBicmFjZXMgPSBbJ3snLCAnfSddO1xuXG4gIC8vIE1ha2UgQXJyYXkgc2F5IHRoYXQgdGhleSBhcmUgQXJyYXlcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgYXJyYXkgPSB0cnVlO1xuICAgIGJyYWNlcyA9IFsnWycsICddJ107XG4gIH1cblxuICAvLyBNYWtlIGZ1bmN0aW9ucyBzYXkgdGhhdCB0aGV5IGFyZSBmdW5jdGlvbnNcbiAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgdmFyIG4gPSB2YWx1ZS5uYW1lID8gJzogJyArIHZhbHVlLm5hbWUgOiAnJztcbiAgICBiYXNlID0gJyBbRnVuY3Rpb24nICsgbiArICddJztcbiAgfVxuXG4gIC8vIE1ha2UgUmVnRXhwcyBzYXkgdGhhdCB0aGV5IGFyZSBSZWdFeHBzXG4gIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIC8vIE1ha2UgZGF0ZXMgd2l0aCBwcm9wZXJ0aWVzIGZpcnN0IHNheSB0aGUgZGF0ZVxuICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBEYXRlLnByb3RvdHlwZS50b1VUQ1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIC8vIE1ha2UgZXJyb3Igd2l0aCBtZXNzYWdlIGZpcnN0IHNheSB0aGUgZXJyb3JcbiAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgfVxuXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCAmJiAoIWFycmF5IHx8IHZhbHVlLmxlbmd0aCA9PSAwKSkge1xuICAgIHJldHVybiBicmFjZXNbMF0gKyBiYXNlICsgYnJhY2VzWzFdO1xuICB9XG5cbiAgaWYgKHJlY3Vyc2VUaW1lcyA8IDApIHtcbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tPYmplY3RdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cblxuICBjdHguc2Vlbi5wdXNoKHZhbHVlKTtcblxuICB2YXIgb3V0cHV0O1xuICBpZiAoYXJyYXkpIHtcbiAgICBvdXRwdXQgPSBmb3JtYXRBcnJheShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXlzKTtcbiAgfSBlbHNlIHtcbiAgICBvdXRwdXQgPSBrZXlzLm1hcChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KTtcbiAgICB9KTtcbiAgfVxuXG4gIGN0eC5zZWVuLnBvcCgpO1xuXG4gIHJldHVybiByZWR1Y2VUb1NpbmdsZVN0cmluZyhvdXRwdXQsIGJhc2UsIGJyYWNlcyk7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0UHJpbWl0aXZlKGN0eCwgdmFsdWUpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ3VuZGVmaW5lZCcsICd1bmRlZmluZWQnKTtcbiAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHZhciBzaW1wbGUgPSAnXFwnJyArIEpTT04uc3RyaW5naWZ5KHZhbHVlKS5yZXBsYWNlKC9eXCJ8XCIkL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKSArICdcXCcnO1xuICAgIHJldHVybiBjdHguc3R5bGl6ZShzaW1wbGUsICdzdHJpbmcnKTtcbiAgfVxuICBpZiAoaXNOdW1iZXIodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnJyArIHZhbHVlLCAnbnVtYmVyJyk7XG4gIGlmIChpc0Jvb2xlYW4odmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnJyArIHZhbHVlLCAnYm9vbGVhbicpO1xuICAvLyBGb3Igc29tZSByZWFzb24gdHlwZW9mIG51bGwgaXMgXCJvYmplY3RcIiwgc28gc3BlY2lhbCBjYXNlIGhlcmUuXG4gIGlmIChpc051bGwodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgnbnVsbCcsICdudWxsJyk7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0RXJyb3IodmFsdWUpIHtcbiAgcmV0dXJuICdbJyArIEVycm9yLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSArICddJztcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRBcnJheShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXlzKSB7XG4gIHZhciBvdXRwdXQgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkodmFsdWUsIFN0cmluZyhpKSkpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAgU3RyaW5nKGkpLCB0cnVlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dHB1dC5wdXNoKCcnKTtcbiAgICB9XG4gIH1cbiAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgIGlmICgha2V5Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cyxcbiAgICAgICAgICBrZXksIHRydWUpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpIHtcbiAgdmFyIG5hbWUsIHN0ciwgZGVzYztcbiAgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodmFsdWUsIGtleSkgfHwgeyB2YWx1ZTogdmFsdWVba2V5XSB9O1xuICBpZiAoZGVzYy5nZXQpIHtcbiAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbR2V0dGVyL1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoZGVzYy5zZXQpIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG4gIGlmICghaGFzT3duUHJvcGVydHkodmlzaWJsZUtleXMsIGtleSkpIHtcbiAgICBuYW1lID0gJ1snICsga2V5ICsgJ10nO1xuICB9XG4gIGlmICghc3RyKSB7XG4gICAgaWYgKGN0eC5zZWVuLmluZGV4T2YoZGVzYy52YWx1ZSkgPCAwKSB7XG4gICAgICBpZiAoaXNOdWxsKHJlY3Vyc2VUaW1lcykpIHtcbiAgICAgICAgc3RyID0gZm9ybWF0VmFsdWUoY3R4LCBkZXNjLnZhbHVlLCBudWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgcmVjdXJzZVRpbWVzIC0gMSk7XG4gICAgICB9XG4gICAgICBpZiAoc3RyLmluZGV4T2YoJ1xcbicpID4gLTEpIHtcbiAgICAgICAgaWYgKGFycmF5KSB7XG4gICAgICAgICAgc3RyID0gc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpLnN1YnN0cigyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHIgPSAnXFxuJyArIHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAgJyArIGxpbmU7XG4gICAgICAgICAgfSkuam9pbignXFxuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tDaXJjdWxhcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoaXNVbmRlZmluZWQobmFtZSkpIHtcbiAgICBpZiAoYXJyYXkgJiYga2V5Lm1hdGNoKC9eXFxkKyQvKSkge1xuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgbmFtZSA9IEpTT04uc3RyaW5naWZ5KCcnICsga2V5KTtcbiAgICBpZiAobmFtZS5tYXRjaCgvXlwiKFthLXpBLVpfXVthLXpBLVpfMC05XSopXCIkLykpIHtcbiAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cigxLCBuYW1lLmxlbmd0aCAtIDIpO1xuICAgICAgbmFtZSA9IGN0eC5zdHlsaXplKG5hbWUsICduYW1lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8oXlwifFwiJCkvZywgXCInXCIpO1xuICAgICAgbmFtZSA9IGN0eC5zdHlsaXplKG5hbWUsICdzdHJpbmcnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmFtZSArICc6ICcgKyBzdHI7XG59XG5cblxuZnVuY3Rpb24gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpIHtcbiAgdmFyIG51bUxpbmVzRXN0ID0gMDtcbiAgdmFyIGxlbmd0aCA9IG91dHB1dC5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY3VyKSB7XG4gICAgbnVtTGluZXNFc3QrKztcbiAgICBpZiAoY3VyLmluZGV4T2YoJ1xcbicpID49IDApIG51bUxpbmVzRXN0Kys7XG4gICAgcmV0dXJuIHByZXYgKyBjdXIucmVwbGFjZSgvXFx1MDAxYlxcW1xcZFxcZD9tL2csICcnKS5sZW5ndGggKyAxO1xuICB9LCAwKTtcblxuICBpZiAobGVuZ3RoID4gNjApIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICtcbiAgICAgICAgICAgKGJhc2UgPT09ICcnID8gJycgOiBiYXNlICsgJ1xcbiAnKSArXG4gICAgICAgICAgICcgJyArXG4gICAgICAgICAgIG91dHB1dC5qb2luKCcsXFxuICAnKSArXG4gICAgICAgICAgICcgJyArXG4gICAgICAgICAgIGJyYWNlc1sxXTtcbiAgfVxuXG4gIHJldHVybiBicmFjZXNbMF0gKyBiYXNlICsgJyAnICsgb3V0cHV0LmpvaW4oJywgJykgKyAnICcgKyBicmFjZXNbMV07XG59XG5cblxuLy8gTk9URTogVGhlc2UgdHlwZSBjaGVja2luZyBmdW5jdGlvbnMgaW50ZW50aW9uYWxseSBkb24ndCB1c2UgYGluc3RhbmNlb2ZgXG4vLyBiZWNhdXNlIGl0IGlzIGZyYWdpbGUgYW5kIGNhbiBiZSBlYXNpbHkgZmFrZWQgd2l0aCBgT2JqZWN0LmNyZWF0ZSgpYC5cbmZ1bmN0aW9uIGlzQXJyYXkoYXIpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXIpO1xufVxuZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcblxuZnVuY3Rpb24gaXNCb29sZWFuKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nO1xufVxuZXhwb3J0cy5pc0Jvb2xlYW4gPSBpc0Jvb2xlYW47XG5cbmZ1bmN0aW9uIGlzTnVsbChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsID0gaXNOdWxsO1xuXG5mdW5jdGlvbiBpc051bGxPclVuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGxPclVuZGVmaW5lZCA9IGlzTnVsbE9yVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuZXhwb3J0cy5pc051bWJlciA9IGlzTnVtYmVyO1xuXG5mdW5jdGlvbiBpc1N0cmluZyhhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnO1xufVxuZXhwb3J0cy5pc1N0cmluZyA9IGlzU3RyaW5nO1xuXG5mdW5jdGlvbiBpc1N5bWJvbChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnO1xufVxuZXhwb3J0cy5pc1N5bWJvbCA9IGlzU3ltYm9sO1xuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuZXhwb3J0cy5pc1VuZGVmaW5lZCA9IGlzVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc1JlZ0V4cChyZSkge1xuICByZXR1cm4gaXNPYmplY3QocmUpICYmIG9iamVjdFRvU3RyaW5nKHJlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59XG5leHBvcnRzLmlzUmVnRXhwID0gaXNSZWdFeHA7XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xuXG5mdW5jdGlvbiBpc0RhdGUoZCkge1xuICByZXR1cm4gaXNPYmplY3QoZCkgJiYgb2JqZWN0VG9TdHJpbmcoZCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cbmV4cG9ydHMuaXNEYXRlID0gaXNEYXRlO1xuXG5mdW5jdGlvbiBpc0Vycm9yKGUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGUpICYmXG4gICAgICAob2JqZWN0VG9TdHJpbmcoZSkgPT09ICdbb2JqZWN0IEVycm9yXScgfHwgZSBpbnN0YW5jZW9mIEVycm9yKTtcbn1cbmV4cG9ydHMuaXNFcnJvciA9IGlzRXJyb3I7XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcblxuZnVuY3Rpb24gaXNQcmltaXRpdmUoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGwgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ251bWJlcicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3ltYm9sJyB8fCAgLy8gRVM2IHN5bWJvbFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3VuZGVmaW5lZCc7XG59XG5leHBvcnRzLmlzUHJpbWl0aXZlID0gaXNQcmltaXRpdmU7XG5cbmV4cG9ydHMuaXNCdWZmZXIgPSByZXF1aXJlKCcuL3N1cHBvcnQvaXNCdWZmZXInKTtcblxuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pO1xufVxuXG5cbmZ1bmN0aW9uIHBhZChuKSB7XG4gIHJldHVybiBuIDwgMTAgPyAnMCcgKyBuLnRvU3RyaW5nKDEwKSA6IG4udG9TdHJpbmcoMTApO1xufVxuXG5cbnZhciBtb250aHMgPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJyxcbiAgICAgICAgICAgICAgJ09jdCcsICdOb3YnLCAnRGVjJ107XG5cbi8vIDI2IEZlYiAxNjoxOTozNFxuZnVuY3Rpb24gdGltZXN0YW1wKCkge1xuICB2YXIgZCA9IG5ldyBEYXRlKCk7XG4gIHZhciB0aW1lID0gW3BhZChkLmdldEhvdXJzKCkpLFxuICAgICAgICAgICAgICBwYWQoZC5nZXRNaW51dGVzKCkpLFxuICAgICAgICAgICAgICBwYWQoZC5nZXRTZWNvbmRzKCkpXS5qb2luKCc6Jyk7XG4gIHJldHVybiBbZC5nZXREYXRlKCksIG1vbnRoc1tkLmdldE1vbnRoKCldLCB0aW1lXS5qb2luKCcgJyk7XG59XG5cblxuLy8gbG9nIGlzIGp1c3QgYSB0aGluIHdyYXBwZXIgdG8gY29uc29sZS5sb2cgdGhhdCBwcmVwZW5kcyBhIHRpbWVzdGFtcFxuZXhwb3J0cy5sb2cgPSBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coJyVzIC0gJXMnLCB0aW1lc3RhbXAoKSwgZXhwb3J0cy5mb3JtYXQuYXBwbHkoZXhwb3J0cywgYXJndW1lbnRzKSk7XG59O1xuXG5cbi8qKlxuICogSW5oZXJpdCB0aGUgcHJvdG90eXBlIG1ldGhvZHMgZnJvbSBvbmUgY29uc3RydWN0b3IgaW50byBhbm90aGVyLlxuICpcbiAqIFRoZSBGdW5jdGlvbi5wcm90b3R5cGUuaW5oZXJpdHMgZnJvbSBsYW5nLmpzIHJld3JpdHRlbiBhcyBhIHN0YW5kYWxvbmVcbiAqIGZ1bmN0aW9uIChub3Qgb24gRnVuY3Rpb24ucHJvdG90eXBlKS4gTk9URTogSWYgdGhpcyBmaWxlIGlzIHRvIGJlIGxvYWRlZFxuICogZHVyaW5nIGJvb3RzdHJhcHBpbmcgdGhpcyBmdW5jdGlvbiBuZWVkcyB0byBiZSByZXdyaXR0ZW4gdXNpbmcgc29tZSBuYXRpdmVcbiAqIGZ1bmN0aW9ucyBhcyBwcm90b3R5cGUgc2V0dXAgdXNpbmcgbm9ybWFsIEphdmFTY3JpcHQgZG9lcyBub3Qgd29yayBhc1xuICogZXhwZWN0ZWQgZHVyaW5nIGJvb3RzdHJhcHBpbmcgKHNlZSBtaXJyb3IuanMgaW4gcjExNDkwMykuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY3RvciBDb25zdHJ1Y3RvciBmdW5jdGlvbiB3aGljaCBuZWVkcyB0byBpbmhlcml0IHRoZVxuICogICAgIHByb3RvdHlwZS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHN1cGVyQ3RvciBDb25zdHJ1Y3RvciBmdW5jdGlvbiB0byBpbmhlcml0IHByb3RvdHlwZSBmcm9tLlxuICovXG5leHBvcnRzLmluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKTtcblxuZXhwb3J0cy5fZXh0ZW5kID0gZnVuY3Rpb24ob3JpZ2luLCBhZGQpIHtcbiAgLy8gRG9uJ3QgZG8gYW55dGhpbmcgaWYgYWRkIGlzbid0IGFuIG9iamVjdFxuICBpZiAoIWFkZCB8fCAhaXNPYmplY3QoYWRkKSkgcmV0dXJuIG9yaWdpbjtcblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGFkZCk7XG4gIHZhciBpID0ga2V5cy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICBvcmlnaW5ba2V5c1tpXV0gPSBhZGRba2V5c1tpXV07XG4gIH1cbiAgcmV0dXJuIG9yaWdpbjtcbn07XG5cbmZ1bmN0aW9uIGhhc093blByb3BlcnR5KG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi91dGlsL3V0aWwuanNcbiAqKiBtb2R1bGUgaWQgPSA2MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0J1ZmZlcihhcmcpIHtcbiAgcmV0dXJuIGFyZyAmJiB0eXBlb2YgYXJnID09PSAnb2JqZWN0J1xuICAgICYmIHR5cGVvZiBhcmcuY29weSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcuZmlsbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcucmVhZFVJbnQ4ID09PSAnZnVuY3Rpb24nO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3V0aWwvc3VwcG9ydC9pc0J1ZmZlckJyb3dzZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA2MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaWYgKHR5cGVvZiBPYmplY3QuY3JlYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gIC8vIGltcGxlbWVudGF0aW9uIGZyb20gc3RhbmRhcmQgbm9kZS5qcyAndXRpbCcgbW9kdWxlXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICBjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDdG9yLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IGN0b3IsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59IGVsc2Uge1xuICAvLyBvbGQgc2Nob29sIHNoaW0gZm9yIG9sZCBicm93c2Vyc1xuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgdmFyIFRlbXBDdG9yID0gZnVuY3Rpb24gKCkge31cbiAgICBUZW1wQ3Rvci5wcm90b3R5cGUgPSBzdXBlckN0b3IucHJvdG90eXBlXG4gICAgY3Rvci5wcm90b3R5cGUgPSBuZXcgVGVtcEN0b3IoKVxuICAgIGN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY3RvclxuICB9XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzXG4gKiogbW9kdWxlIGlkID0gNjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBjb25zb2xlID0gcmVxdWlyZShcImNvbnNvbGVcIik7XG5cbnZhciB1bnRpbGRlID0gZnVuY3Rpb24oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvfi4vZywgZnVuY3Rpb24obSkge1xuICAgIHN3aXRjaCAobSkge1xuICAgICAgY2FzZSBcIn4wXCI6XG4gICAgICAgIHJldHVybiBcIn5cIjtcbiAgICAgIGNhc2UgXCJ+MVwiOlxuICAgICAgICByZXR1cm4gXCIvXCI7XG4gICAgfVxuICAgIHRocm93KFwiSW52YWxpZCB0aWxkZSBlc2NhcGU6IFwiICsgbSk7XG4gIH0pO1xufVxuXG52YXIgdHJhdmVyc2UgPSBmdW5jdGlvbihvYmosIHBvaW50ZXIsIHZhbHVlKSB7XG4gIC8vIGFzc2VydChpc0FycmF5KHBvaW50ZXIpKVxuICB2YXIgcGFydCA9IHVudGlsZGUocG9pbnRlci5zaGlmdCgpKTtcbiAgaWYodHlwZW9mIG9ialtwYXJ0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHRocm93KFwiVmFsdWUgZm9yIHBvaW50ZXIgJ1wiICsgcG9pbnRlciArIFwiJyBub3QgZm91bmQuXCIpO1xuICAgIHJldHVybjtcbiAgfVxuICBpZihwb2ludGVyLmxlbmd0aCAhPT0gMCkgeyAvLyBrZWVwIHRyYXZlcnNpbiFcbiAgICByZXR1cm4gdHJhdmVyc2Uob2JqW3BhcnRdLCBwb2ludGVyLCB2YWx1ZSk7XG4gIH1cbiAgLy8gd2UncmUgZG9uZVxuICBpZih0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAvLyBqdXN0IHJlYWRpbmdcbiAgICByZXR1cm4gb2JqW3BhcnRdO1xuICB9XG4gIC8vIHNldCBuZXcgdmFsdWUsIHJldHVybiBvbGQgdmFsdWVcbiAgdmFyIG9sZF92YWx1ZSA9IG9ialtwYXJ0XTtcbiAgaWYodmFsdWUgPT09IG51bGwpIHtcbiAgICBkZWxldGUgb2JqW3BhcnRdO1xuICB9IGVsc2Uge1xuICAgIG9ialtwYXJ0XSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiBvbGRfdmFsdWU7XG59XG5cbnZhciB2YWxpZGF0ZV9pbnB1dCA9IGZ1bmN0aW9uKG9iaiwgcG9pbnRlcikge1xuICBpZih0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiKSB7XG4gICAgdGhyb3coXCJJbnZhbGlkIGlucHV0IG9iamVjdC5cIik7XG4gIH1cblxuICBpZihwb2ludGVyID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgaWYoIXBvaW50ZXIpIHtcbiAgICB0aHJvdyhcIkludmFsaWQgSlNPTiBwb2ludGVyLlwiKTtcbiAgfVxuXG4gIHBvaW50ZXIgPSBwb2ludGVyLnNwbGl0KFwiL1wiKTtcbiAgdmFyIGZpcnN0ID0gcG9pbnRlci5zaGlmdCgpO1xuICBpZiAoZmlyc3QgIT09IFwiXCIpIHtcbiAgICB0aHJvdyhcIkludmFsaWQgSlNPTiBwb2ludGVyLlwiKTtcbiAgfVxuXG4gIHJldHVybiBwb2ludGVyO1xufVxuXG52YXIgZ2V0ID0gZnVuY3Rpb24ob2JqLCBwb2ludGVyKSB7XG4gIHBvaW50ZXIgPSB2YWxpZGF0ZV9pbnB1dChvYmosIHBvaW50ZXIpO1xuICBpZiAocG9pbnRlci5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG4gIHJldHVybiB0cmF2ZXJzZShvYmosIHBvaW50ZXIpO1xufVxuXG52YXIgc2V0ID0gZnVuY3Rpb24ob2JqLCBwb2ludGVyLCB2YWx1ZSkge1xuICBwb2ludGVyID0gdmFsaWRhdGVfaW5wdXQob2JqLCBwb2ludGVyKTtcbiAgaWYgKHBvaW50ZXIubGVuZ3RoID09PSAwKSB7XG4gICAgdGhyb3coXCJJbnZhbGlkIEpTT04gcG9pbnRlciBmb3Igc2V0LlwiKVxuICB9XG4gIHJldHVybiB0cmF2ZXJzZShvYmosIHBvaW50ZXIsIHZhbHVlKTtcbn1cblxuZXhwb3J0cy5nZXQgPSBnZXRcbmV4cG9ydHMuc2V0ID0gc2V0XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9qc29ucG9pbnRlci9qc29ucG9pbnRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDY0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGV4dGVuZFxuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgdmFyIHRhcmdldCA9IHt9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldXG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34veHRlbmQvaW1tdXRhYmxlLmpzXG4gKiogbW9kdWxlIGlkID0gNjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0c1snZGF0ZS10aW1lJ10gPSAvXlxcZHs0fS0oPzowWzAtOV17MX18MVswLTJdezF9KS1bMC05XXsyfVt0VCBdXFxkezJ9OlxcZHsyfTpcXGR7Mn0oXFwuXFxkKyk/KFt6Wl18WystXVxcZHsyfTpcXGR7Mn0pJC9cbmV4cG9ydHNbJ2RhdGUnXSA9IC9eXFxkezR9LSg/OjBbMC05XXsxfXwxWzAtMl17MX0pLVswLTldezJ9JC9cbmV4cG9ydHNbJ3RpbWUnXSA9IC9eXFxkezJ9OlxcZHsyfTpcXGR7Mn0kL1xuZXhwb3J0c1snZW1haWwnXSA9IC9eXFxTK0BcXFMrJC9cbmV4cG9ydHNbJ2lwLWFkZHJlc3MnXSA9IGV4cG9ydHNbJ2lwdjQnXSA9IC9eKD86KD86MjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/KVxcLil7M30oPzoyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pJC9cbmV4cG9ydHNbJ2lwdjYnXSA9IC9eXFxzKigoKFswLTlBLUZhLWZdezEsNH06KXs3fShbMC05QS1GYS1mXXsxLDR9fDopKXwoKFswLTlBLUZhLWZdezEsNH06KXs2fSg6WzAtOUEtRmEtZl17MSw0fXwoKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKShcXC4oMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKXszfSl8OikpfCgoWzAtOUEtRmEtZl17MSw0fTopezV9KCgoOlswLTlBLUZhLWZdezEsNH0pezEsMn0pfDooKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKShcXC4oMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKXszfSl8OikpfCgoWzAtOUEtRmEtZl17MSw0fTopezR9KCgoOlswLTlBLUZhLWZdezEsNH0pezEsM30pfCgoOlswLTlBLUZhLWZdezEsNH0pPzooKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKShcXC4oMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKXszfSkpfDopKXwoKFswLTlBLUZhLWZdezEsNH06KXszfSgoKDpbMC05QS1GYS1mXXsxLDR9KXsxLDR9KXwoKDpbMC05QS1GYS1mXXsxLDR9KXswLDJ9OigoMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKFxcLigyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkpezN9KSl8OikpfCgoWzAtOUEtRmEtZl17MSw0fTopezJ9KCgoOlswLTlBLUZhLWZdezEsNH0pezEsNX0pfCgoOlswLTlBLUZhLWZdezEsNH0pezAsM306KCgyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkoXFwuKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSl7M30pKXw6KSl8KChbMC05QS1GYS1mXXsxLDR9Oil7MX0oKCg6WzAtOUEtRmEtZl17MSw0fSl7MSw2fSl8KCg6WzAtOUEtRmEtZl17MSw0fSl7MCw0fTooKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKShcXC4oMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKXszfSkpfDopKXwoOigoKDpbMC05QS1GYS1mXXsxLDR9KXsxLDd9KXwoKDpbMC05QS1GYS1mXXsxLDR9KXswLDV9OigoMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKFxcLigyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkpezN9KSl8OikpKSglLispP1xccyokL1xuZXhwb3J0c1sndXJpJ10gPSAvXlthLXpBLVpdW2EtekEtWjAtOSstLl0qOlteXFxzXSokL1xuZXhwb3J0c1snY29sb3InXSA9IC8oIz8oWzAtOUEtRmEtZl17Myw2fSlcXGIpfChhcXVhKXwoYmxhY2spfChibHVlKXwoZnVjaHNpYSl8KGdyYXkpfChncmVlbil8KGxpbWUpfChtYXJvb24pfChuYXZ5KXwob2xpdmUpfChvcmFuZ2UpfChwdXJwbGUpfChyZWQpfChzaWx2ZXIpfCh0ZWFsKXwod2hpdGUpfCh5ZWxsb3cpfChyZ2JcXChcXHMqXFxiKFswLTldfFsxLTldWzAtOV18MVswLTldWzAtOV18MlswLTRdWzAtOV18MjVbMC01XSlcXGJcXHMqLFxccypcXGIoWzAtOV18WzEtOV1bMC05XXwxWzAtOV1bMC05XXwyWzAtNF1bMC05XXwyNVswLTVdKVxcYlxccyosXFxzKlxcYihbMC05XXxbMS05XVswLTldfDFbMC05XVswLTldfDJbMC00XVswLTldfDI1WzAtNV0pXFxiXFxzKlxcKSl8KHJnYlxcKFxccyooXFxkP1xcZCV8MTAwJSkrXFxzKixcXHMqKFxcZD9cXGQlfDEwMCUpK1xccyosXFxzKihcXGQ/XFxkJXwxMDAlKStcXHMqXFwpKS9cbmV4cG9ydHNbJ2hvc3RuYW1lJ10gPSAvXihbYS16QS1aMC05XXxbYS16QS1aMC05XVthLXpBLVowLTlcXC1dezAsNjF9W2EtekEtWjAtOV0pKFxcLihbYS16QS1aMC05XXxbYS16QS1aMC05XVthLXpBLVowLTlcXC1dezAsNjF9W2EtekEtWjAtOV0pKSokL1xuZXhwb3J0c1snYWxwaGEnXSA9IC9eW2EtekEtWl0rJC9cbmV4cG9ydHNbJ2FscGhhbnVtZXJpYyddID0gL15bYS16QS1aMC05XSskL1xuZXhwb3J0c1snc3R5bGUnXSA9IC9cXHMqKC4rPyk6XFxzKihbXjtdKyk7Py9nXG5leHBvcnRzWydwaG9uZSddID0gL15cXCsoPzpbMC05XSA/KXs2LDE0fVswLTldJC9cbmV4cG9ydHNbJ3V0Yy1taWxsaXNlYyddID0gL15bMC05XSsoXFwuP1swLTldKyk/JC9cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL19zY2hlbWEvZm9ybWF0cy5qc1xuICoqLyIsIi8qKlxuICogQGNvcHlyaWdodCAyMDE1LCBQcm9tZXRoZXVzIFJlc2VhcmNoLCBMTENcbiAqL1xuXG5pbXBvcnQgUmVhY3QgICAgICAgICBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybUNvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpdGhGb3JtVmFsdWUoQ29tcG9uZW50KSB7XG5cbiAgbGV0IGRpc3BsYXlOYW1lID0gQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lO1xuXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIEZvcm1Db21wb25lbnQge1xuXG4gICAgc3RhdGljIGRpc3BsYXlOYW1lID0gYFdpdGhGb3JtVmFsdWUoJHtkaXNwbGF5TmFtZX0pYDtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxDb21wb25lbnRcbiAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICBmb3JtVmFsdWU9e3RoaXMuZm9ybVZhbHVlfVxuICAgICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cbiAgfTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL1dpdGhGb3JtVmFsdWUuanNcbiAqKi8iLCIvKipcbiAqIEBjb3B5cmlnaHQgMjAxNSwgUHJvbWV0aGV1cyBSZXNlYXJjaCwgTExDXG4gKi9cblxuaW1wb3J0IGF1dG9iaW5kICAgICAgICAgICBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InO1xuaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaXNBcnJheSAgICAgICAgICAgIGZyb20gJ2xvZGFzaC9sYW5nL2lzQXJyYXknO1xuaW1wb3J0IGlzU3RyaW5nICAgICAgICAgICBmcm9tICdsb2Rhc2gvbGFuZy9pc1N0cmluZyc7XG5pbXBvcnQgbWFwRWxlbWVudCAgICAgICAgIGZyb20gJy4vbWFwRWxlbWVudCc7XG5pbXBvcnQgQ29tcG9uZW50ICAgICAgICAgIGZyb20gJy4vQ29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVnYWN5RmllbGRzZXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLi4uQ29tcG9uZW50LnByb3BUeXBlcyxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgY29tcG9uZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb21wb25lbnQ6ICdkaXYnXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7Y2hpbGRyZW4sIGNvbXBvbmVudDogQ29tcG9uZW50LCAuLi5wcm9wc30gPSB0aGlzLnByb3BzO1xuICAgIGNoaWxkcmVuID0gbWFwRWxlbWVudChjaGlsZHJlbiwgdGhpcy5fcHJvcGFnYXRlRm9ybVZhbHVlKTtcbiAgICByZXR1cm4gPENvbXBvbmVudD57Y2hpbGRyZW59PC9Db21wb25lbnQ+O1xuICB9XG5cbiAgQGF1dG9iaW5kXG4gIF9wcm9wYWdhdGVGb3JtVmFsdWUoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQucHJvcHMgJiYgZWxlbWVudC5wcm9wcy5zZWxlY3RGb3JtVmFsdWUgJiYgIWVsZW1lbnQucHJvcHMuZm9ybVZhbHVlKSB7XG4gICAgICBsZXQgZm9ybVZhbHVlID0gdGhpcy5wcm9wcy5mb3JtVmFsdWU7XG4gICAgICBsZXQgc2VsZWN0Rm9ybVZhbHVlID0gZWxlbWVudC5wcm9wcy5zZWxlY3RGb3JtVmFsdWU7XG4gICAgICBpZiAoaXNTdHJpbmcoc2VsZWN0Rm9ybVZhbHVlKSB8fCBpc0FycmF5KHNlbGVjdEZvcm1WYWx1ZSkpIHtcbiAgICAgICAgZm9ybVZhbHVlID0gZm9ybVZhbHVlLnNlbGVjdChzZWxlY3RGb3JtVmFsdWUpO1xuICAgICAgfVxuICAgICAgZWxlbWVudCA9IFJlYWN0LmNsb25lRWxlbWVudChlbGVtZW50LCB7Zm9ybVZhbHVlfSk7XG4gICAgICByZXR1cm4gW2ZhbHNlLCBlbGVtZW50XTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL0xlZ2FjeUZpZWxkc2V0LmpzXG4gKiovIiwiLyoqXG4gKiBAY29weXJpZ2h0IDIwMTUsIFByb21ldGhldXMgUmVzZWFyY2gsIExMQ1xuICovXG5cbmltcG9ydCBSZWFjdCAgICBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaXNBcnJheSAgZnJvbSAnbG9kYXNoL2xhbmcvaXNBcnJheSc7XG5cbi8qKlxuICogTWFwIFJlYWN0IGBlbGVtZW50YCBzdHJ1Y3R1cmUgb3ZlciBgZnVuY2AuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1hcEVsZW1lbnQoZWxlbWVudCwgZnVuYykge1xuICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4ubWFwKGVsZW1lbnQsIGZ1bmN0aW9uKGVsKSB7XG4gICAgbGV0IHJlY3Vyc2UgPSB0cnVlO1xuICAgIGVsID0gZnVuYyhlbCk7XG4gICAgaWYgKGlzQXJyYXkoZWwpKSB7XG4gICAgICByZWN1cnNlID0gZWxbMF07XG4gICAgICBlbCA9IGVsWzFdO1xuICAgIH1cbiAgICBpZiAocmVjdXJzZSAmJiBlbCAmJiBlbC5wcm9wcyAmJiBlbC5wcm9wcy5jaGlsZHJlbikge1xuICAgICAgZWwgPSBSZWFjdC5jbG9uZUVsZW1lbnQoZWwsIHtcbiAgICAgICAgY2hpbGRyZW46IFJlYWN0LkNoaWxkcmVuLm1hcChcbiAgICAgICAgICBlbC5wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBmdW5jdGlvbihjaGlsZCkge1xuICAgICAgICAgICAgcmV0dXJuIG1hcEVsZW1lbnQoY2hpbGQsIGZ1bmMpO1xuICAgICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGVsO1xuICB9KTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21hcEVsZW1lbnQuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9