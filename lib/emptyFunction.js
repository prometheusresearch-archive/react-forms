/**
 * @flow
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

function emptyFunction() {

}

emptyFunction.toString = function() {
  return '<empty function>';
};

emptyFunction.thatReturnsTrue = function(): bool {
  return true;
};

emptyFunction.thatReturnsTrue.toString = function() {
  return '<empty function that returns true>';
};

emptyFunction.thatReturnsArgument = function<A>(arg: A): A {
  return arg;
};

emptyFunction.thatReturnsArgument.toString = function() {
  return '<empty function that returns argument>';
};

module.exports = emptyFunction;
