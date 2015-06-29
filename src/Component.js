/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React, {PropTypes} from 'react';
import invariant          from './invariant';
import keyPath            from './keyPath';

const hasParentContext = !!/0\.14\.[0-9]+/.exec(React.version);

export const ContextTypes = {
  formValue: PropTypes.object
};

/**
 * Base class for form components.
 *
 * It exposes form value via `this.formValue` which is provided either via
 * `this.props.formValue` or via context.
 */
export default class Component extends React.Component {

  static contextTypes = ContextTypes;
  static childContextTypes = ContextTypes;

  static propTypes = {
    formValue: PropTypes.object,
    select: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.number, PropTypes.bool])
  };

  getChildContext() {
    return {formValue: this.formValue};
  }

  get _parentContext() {
    if (hasParentContext) {
      return this.context;
    } else {
      return this._reactInternalInstance._context;
    }
  }

  get formValue() {
    let formValue = this.props.formValue || this._parentContext.formValue;

    invariant(
      formValue,
      'A form component <%s /> should receive form value via props ' +
      'or be used as a part of element hierarchy which ' +
      'includes <Form /> component in its ancestors',
      this.constructor.displayName || this.constructor.name
    );

    let select = this.props.select;
    // We check for select === true to keep compatability we eariler
    // versions of React Forms where we needed to rebuild element tree to
    // propagate values to form.
    if (select) {
      select = keyPath(select);
      formValue = formValue.select(select);
    }

    return formValue;
  }
}
