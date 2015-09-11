/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React, {PropTypes} from 'react';
import Component          from './Component';

export default class Fieldset extends Component {

  static propTypes = {
    ...Component.propTypes,
    children: PropTypes.node,
    Self: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  };

  static defaultProps = {
    Self: 'div'
  };

  render() {
    let {Self, ...props} = this.props;
    return <Self {...props} />;
  }
}
