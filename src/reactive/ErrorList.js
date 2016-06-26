/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React, {PropTypes} from 'react';
import * as Stylesheet from 'react-stylesheet';
import Component from '../Component';
import Error from '../Error';
import reactive from './reactive';

export class ErrorListBase extends Component {

  static displayName = 'ErrorList';

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

  static stylesheet = Stylesheet.create({
    Error: Error,
    Root: 'div',
  });

  render() {
    let {noLabel, complete, schemaType, stylesheet, ...props} = this.props;
    let {Root, Error} = stylesheet || this.constructor.stylesheet;
    let errorList = complete ?
      this.formValue.completeErrorList.get() :
      this.formValue.errorList.get();
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

let ErrorList = reactive(ErrorListBase);

export default ErrorList;
