'use strict';

var cloneWithProps    = require('react/addons').addons.cloneWithProps;

function cloneElement(oldElement, newProps) {
  return cloneWithProps(oldElement, newProps);
};

module.exports = cloneElement;
