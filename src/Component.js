/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React, {PropTypes} from 'react';
import invariant          from 'invariant';
import keyPath            from './keyPath';

export const ContextTypes = {
  formValue: PropTypes.object
};

let selectPropType = PropTypes.oneOfType([
  PropTypes.array,
  PropTypes.string,
  PropTypes.number,
  PropTypes.bool
]);

/**
 * Base class for form components.
 *
 * It exposes form value via `this.formValue` which is provided either via
 * `this.props.formValue` or via context.
 */
export default class Component extends React.Component {

  static propTypes = {
    /**
     * Form value passed as a prop.
     */
    formValue: PropTypes.object,

    /**
     * Selector for form value.
     *
     * Used to select a part from a form value passed via context.
     */
    select: selectPropType,

    /**
     * Same as `select`.
     *
     * Deprecated.
     */
    selectFormValue: selectPropType
  };

  static contextTypes = ContextTypes;
  static childContextTypes = ContextTypes;

  getChildContext() {
    return {formValue: this.formValue};
  }

  get formValue() {
    invariant(
      this.props.formValue || this.context.formValue,
      'A form component <%s /> should receive form value via props ' +
      'or be used as a part of element hierarchy which ' +
      'provides form value via context.',
      this.constructor.displayName || this.constructor.name
    );

    if (this.props.formValue) {
      return this.props.formValue;
    }

    let formValue = this.context.formValue;

    let select = this.props.select || this.props.selectFormValue;
    // We check for select !== true to keep compatability we eariler
    // versions of React Forms where we needed to rebuild element tree to
    // propagate values to form.
    if (select && select !== true) {
      select = keyPath(select);
      formValue = formValue.select(select);
    }

    return formValue;
  }
}
