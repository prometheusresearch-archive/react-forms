/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React from 'react';

export default class Error extends React.Component {

  render() {
    let {error, label, noLabel, complete} = this.props;
    if (!label && error.schema) {
      label = error.schema.label;
    }
    if (label && complete && !noLabel) {
      return <div>{error.schema.label}: {error.message}</div>;
    } else {
      return <div>{error.message}</div>;
    }
  }
}

