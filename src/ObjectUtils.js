'use strict';

var _hasOwnProperty = Object.prototype.hasOwnProperty;

function isEmpty(value){
  if (!value) {
    return true;
  }
  if (Array.isArray(value) && value.length === 0) {
    return true;
  } else {
    for (var i in value) {
      if (_hasOwnProperty.call(value, i)) {
        return false;
      }
    }
    return true;
  }
}

function toString(type){
  return Object.prototype.toString.call(type);
}

function isNumber(value){
  return typeof value === 'number' || toString(value) === "[object Number]";
}

function isString(obj){
  return typeof obj === 'string' || toString(obj) === "[object String]";
}

function getKey(key){
  var intKey = parseInt(key);
  if (intKey.toString() === key) {
    return intKey;
  }
  return key;
}

function set(obj, path, value, doNotReplace) {
  if (isNumber(path)) {
    path = [path];
  }
  if (isEmpty(path)) {
    return obj;
  }
  if (isString(path)) {
    return set(obj, path.split('.').map(getKey), value, doNotReplace);
  }
  var currentPath = path[0];

  if (path.length === 1) {
    var oldVal = obj[currentPath];
    if (oldVal === void 0 || !doNotReplace) {
      obj[currentPath] = value;
    }
    return oldVal;
  }

  if (obj[currentPath] == void 0) {
    //check if we assume an array
    if(isNumber(path[1])) {
      obj[currentPath] = [];
    } else {
      obj[currentPath] = {};
    }
  }

  return set(obj[currentPath], path.slice(1), value, doNotReplace);
}

function get(obj, path, defaultValue) {
  if (isNumber(path)) {
    path = [path];
  }
  if (isEmpty(path)) {
    return obj;
  }
  if (isEmpty(obj)) {
    return defaultValue;
  }
  if (isString(path)) {
    return get(obj, path.split('.'), defaultValue);
  }

  var currentPath = getKey(path[0]);

  if (path.length === 1) {
    if (obj[currentPath] === void 0) {
      return defaultValue;
    }
    return obj[currentPath];
  }

  return get(obj[currentPath], path.slice(1), defaultValue);
}

module.exports = {get: get, set: set};
