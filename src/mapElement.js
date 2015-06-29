/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React    from 'react';
import isArray  from 'lodash/lang/isArray';

function mapElement(element, func) {
  return React.Children.map(element, function(element) {
    let recurse = true;
    element = func(element);
    if (isArray(element)) {
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
