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
    let {Root} = this.props.stylesheet || this.constructor.stylesheet;
    // eslint-disable-next-line no-unused-vars
    let {stylesheet, formValue, select, selectFormValue, ...props} = this.props;
    return <Root {...props} />;
  }
}
