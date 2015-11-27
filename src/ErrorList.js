/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React, {PropTypes} from 'react';
import * as ReactStylesheet from 'react-stylesheet';
import Component from './Component';
import Error from './Error';

@ReactStylesheet.styleable
export default class ErrorList extends Component {

  static propTypes = {
    ...Component.propTypes,

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

  static stylesheet = ReactStylesheet.createStylesheet({
    Error: Error,
    Root: 'div',
  });

  render() {
    let {noLabel, complete, schemaType, ...props} = this.props;
    let {Root, Error} = this.stylesheet;
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
    return <Root {...props}>{items}</Root>;
  }
}
