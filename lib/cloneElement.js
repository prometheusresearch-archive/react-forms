/**
 * @flow
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var cloneWithProps = require('react/addons').addons.cloneWithProps;

function cloneElement<P>(oldElement: ReactElement<any, any, any>, newProps: P) {
  return cloneWithProps(oldElement, newProps);
};

module.exports = cloneElement;
