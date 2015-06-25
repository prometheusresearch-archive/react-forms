/**
 * @copyright 2015, Prometheus Research, LLC
 */
'use strict';

var React = require('react');

function mapElement(element, func) {
  return React.Children.map(element, function(element) {
    var recurse = true;
    element = func(element);
    if (Array.isArray(element)) {
      recurse = element[0];
      element = element[1];
    }
    if (recurse && element && element.props && element.props.children) {
      element = React.cloneElement(element, {
        children: React.Children.map(
          element.props.children,
          function(element) {
            return mapElement(element, func);
          })
      });
    }
    return element;
  });
}

module.exports = mapElement;
