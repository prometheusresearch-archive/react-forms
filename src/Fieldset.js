/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React, {PropTypes} from 'react';
import * as ReactStylesheet from 'react-stylesheet';
import Component from './Component';

@ReactStylesheet.styleable
export default class Fieldset extends Component {

  static propTypes = {
    ...Component.propTypes,
    children: PropTypes.node,
  };

  static stylesheet = ReactStylesheet.createStylesheet({
    Root: 'div',
  });

  render() {
    return <this.stylesheet.Root {...this.props} />;
  }
}
