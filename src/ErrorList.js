/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React, {PropTypes} from 'react';
import Component          from './Component';
import {Value}            from './Value';

function renderError(error, index, errorList) {
  if (error.schema && error.schema.label) {
    return <li>{error.schema.label}: {error.message}</li>;
  } else {
    return <li>{error.message}</li>;
  }
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
    complete: PropTypes.bool,

    /**
     * Restrict schema types
     */
    schemaType: PropTypes.object
  };

  static defaultProps = {
    renderError,
  };

  render() {
    let {renderError, complete, schemaType, ...props} = this.props;
    let errorList = complete ?
      this.formValue.completeErrorList :
      this.formValue.errorList;
    if (schemaType !== undefined) {
      errorList = errorList.filter(error =>
        error.schema ? schemaType[error.schema.type] : schemaType.none);
    }
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
