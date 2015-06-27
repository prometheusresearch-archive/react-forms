/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React, {PropTypes} from 'react';
import Component          from './Component';
import {Value}            from './Value';

function renderError(error) {
  return <li>{error}</li>;
}

export default class ErrorList extends Component {

  static propTypes = {
    ...Component.propTypes,
    showAllErrors: PropTypes.bool,
    renderError: PropTypes.func
  };

  static defaultProps = {
    renderError
  };

  render() {
    let {renderError, ...props} = this.props;
    let items = this.formValue.errors.map(renderError);
    return (
      <ul {...props}>
        {items}
      </ul>
    );
  }
}
