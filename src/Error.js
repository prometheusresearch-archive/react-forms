/**
 * @copyright 2015, Prometheus Research, LLC
 * @flow
 */

import React from 'react';

type Props = {
  error: {
    schema: {
      label?: string;
    };
    message: string;
  };
  label?: string;
  noLabel?: boolean;
  complete?: boolean;
};

export default function Error({error, label, noLabel, complete}: Props) {
  if (!error) {
    return <noscript />;
  }
  if (!label && error.schema) {
    label = error.schema.label;
  }
  if (label && complete && !noLabel) {
    return <div>{label}: {error.message}</div>;
  } else {
    return <div>{error.message}</div>;
  }
}
