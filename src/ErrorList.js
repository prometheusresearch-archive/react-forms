/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React, {PropTypes} from 'react';
import Component          from './Component';
import Error              from './Error';

export default class ErrorList extends Component {

  static propTypes = {
    ...Component.propTypes,

    /**
     * Component which is used to render error items.
     */
    Error: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

    /**
     * If component should render errors from all the subvalues.
     */
    complete: PropTypes.bool,

    /**
     * Restrict schema types
     */
    schemaType: PropTypes.object,

    noLabel: PropTypes.bool,

    label: PropTypes.string
  };

  static defaultProps = {
    Error,
    Self: 'div'
  };

  render() {
    let {Self, Error, noLabel, complete, schemaType, ...props} = this.props;
    let errorList = complete ?
      this.formValue.completeErrorList :
      this.formValue.errorList;
    if (schemaType !== undefined) {
      errorList = errorList.filter(error =>
        error.schema ? schemaType[error.schema.type] : schemaType.none);
    }
    if (errorList.length === 0) {
      return null;
    }
    let items = errorList.map((error, index) =>
      <Error
        key={error.field + '__' + index}
        error={error}
        noLabel={noLabel}
        complete={complete}
        />
    );
    return <Self {...props}>{items}</Self>;
  }
}
