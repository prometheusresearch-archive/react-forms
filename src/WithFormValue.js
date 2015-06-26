/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React         from 'react';
import FormComponent from './Component';

export default function WithFormValue(Component) {
  return class extends FormComponent {

    static displayName = `WithFormValue(${Component.displayName || Component.name})`;

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
