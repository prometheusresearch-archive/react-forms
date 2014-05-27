/**
 * @jsx React.DOM
 */
'use strict';

var isFormValue = require('./FormValue').isFormValue;

function FormValue(props, name, component) {
  if (props[name] !== undefined && !isFormValue(props[name])) {
    console.warn(
      'Invalid FormValue object passed as prop "' + name + '"',
      'to component "' + component + '"'
    );
  }
}

module.exports = {FormValue};
