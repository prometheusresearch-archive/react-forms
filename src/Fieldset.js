/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React, {PropTypes} from 'react';
import * as Stylesheet from 'react-stylesheet';
import Component from './Component';

export default class Fieldset extends Component {
  static propTypes = {
    ...Component.propTypes,
    children: PropTypes.node,
  };

  static stylesheet = Stylesheet.create({
    Root: 'div',
  });

  render() {
    const {
      stylesheet = this.constructor.stylesheet,
      // just destructure those props away so they don't end up in DOM
      formValue: _formValue,
      select: _select,
      selectFormValue: _selectFormValue,
      ...props
    } = this.props;
    const {Root} = stylesheet;
    return <Root {...props} />;
  }
}
