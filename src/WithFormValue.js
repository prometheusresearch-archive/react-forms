/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React         from 'react';
import FormComponent from './Component';

export default function WithFormValue(Component) {

  let displayName = Component.displayName || Component.name;

  return class extends FormComponent {

    static displayName = `WithFormValue(${displayName})`;

    render() {
      return (
        <Component
          {...this.props}
          formValue={this.formValue}
          />
      );
    }
  };
}
