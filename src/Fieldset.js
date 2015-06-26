/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React      from 'react';
import Component  from './Component';

export default class Fieldset extends Component {

  static defaultProps = {
    component: 'div'
  };

  render() {
    let {children, component: Component, ...props} = this.props;
    return <Component {...props}>{children}</Component>;
  }
}
