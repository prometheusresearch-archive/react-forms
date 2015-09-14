/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React from 'react';

export default function Label({schema = {}, label = schema.label}) {
  return label ? <label>{label}</label> : <noscript />;
}

