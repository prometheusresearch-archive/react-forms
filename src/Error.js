/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React from 'react';

export default function Error({error, label, noLabel, complete}) {
  if (!label && error.schema) {
    label = error.schema.label;
  }
  if (label && complete && !noLabel) {
    return <div>{error.schema.label}: {error.message}</div>;
  } else {
    return <div>{error.message}</div>;
  }
}

