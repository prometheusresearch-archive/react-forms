/**
 * @jsx React.DOM
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

function emptyFunction() {

}

emptyFunction.toString = function() {
  return '<empty function>';
};

emptyFunction.thatReturnsTrue = function() {
  return true;
};

emptyFunction.thatReturnsTrue.toString = function() {
  return '<empty function that returns true>';
};

emptyFunction.thatReturnsArgument = function(arg) {
  return arg;
};

emptyFunction.thatReturnsArgument.toString = function() {
  return '<empty function that returns argument>';
};

module.exports = emptyFunction;
