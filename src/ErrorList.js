/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React, {PropTypes} from 'react';
import Component          from './Component';
import {Value}            from './Value';

function renderError(error, index, errorList) {
  return <li>{error.message}</li>;
}

export default class ErrorList extends Component {

  static propTypes = {
    ...Component.propTypes,

    /**
     * Renderer for error items.
     */
    renderError: PropTypes.func,
    
    /**
     * If component should render errors from all the subvalues.
     */
    showCompleteErrorList: PropTypes.bool
  };

  static defaultProps = {
    renderError
  };

  render() {
    let {renderError, showCompleteErrorList, ...props} = this.props;
    let errorList = showCompleteErrorList ?
      this.formValue.completeErrorList :
      this.formValue.errorList;
    let items = errorList.map(this.renderError, this);
    return (
      <ul {...props}>
        {items}
      </ul>
    );
  }

  renderError(error, index, errorList) {
    let element = this.props.renderError(error, index, errorList);
    let key = `${error.field}__${index}`;
    return React.cloneElement(element, {key});
  }
}
