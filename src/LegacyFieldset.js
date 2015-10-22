/**
 * @copyright 2015, Prometheus Research, LLC
 */

import autobind           from 'autobind-decorator';
import React, {PropTypes} from 'react';
import isArray            from 'lodash/lang/isArray';
import isString           from 'lodash/lang/isString';
import mapElement         from './mapElement';
import Component          from './Component';

export default class LegacyFieldset extends React.Component {

  static propTypes = {
    children: PropTypes.node,
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    formValue: PropTypes.object,
  };

  static defaultProps = {
    component: 'div'
  };

  render() {
    let {children, component: Component, ...props} = this.props;
    children = mapElement(children, this._propagateFormValue);
    return <Component>{children}</Component>;
  }

  @autobind
  _propagateFormValue(element) {
    if (element && element.props && element.props.selectFormValue && !element.props.formValue) {
      let formValue = this.props.formValue;
      let selectFormValue = element.props.selectFormValue;
      if (isString(selectFormValue) || isArray(selectFormValue)) {
        formValue = formValue.select(selectFormValue);
      }
      element = React.cloneElement(element, {formValue});
      return [false, element];
    }
    return element;
  }
}
