/**
 * @jsx React.DOM
 */
'use strict';

var isValue = require('./Value').isValue;

function Value(props, name, component) {
  if (props[name] !== undefined && !isValue(props[name])) {
    console.warn(
      'Invalid Value object passed as prop "' + name + '"',
      'to component "' + component + '"'
    );
  }
}

module.exports = {Value};
