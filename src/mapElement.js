/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React    from 'react';
import isArray  from 'lodash/lang/isArray';

function mapElement(element, func) {
  return React.Children.map(element, function(el) {
    let recurse = true;
    el = func(el);
    if (isArray(el)) {
      recurse = el[0];
      el = el[1];
    }
    if (recurse && el && el.props && el.props.children) {
      el = React.cloneElement(el, {
        children: React.Children.map(
          el.props.children,
          function(child) {
            return mapElement(child, func);
          })
      });
    }
    return el;
  });
}

module.exports = mapElement;
