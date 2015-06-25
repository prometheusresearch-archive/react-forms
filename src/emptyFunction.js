/**
 * @jsx React.DOM
 */
'use strict';

function emptyFunction() {

}

emptyFunction.thatReturnsTrue = function() {
  return true;
};

emptyFunction.thatReturnsNull = function() {
  return null;
};

emptyFunction.thatReturnsArgument = function(arg) {
  return arg;
};

module.exports = emptyFunction;
