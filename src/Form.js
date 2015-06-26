/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React          from 'react';
import Fieldset       from './Fieldset';
import Value          from './Value';
import emptyFunction  from './emptyFunction';

const DEFAULT_SCHEMA = {
  id: 'emptyschema',
  type: 'object'
};

export default class Form extends React.Component {

  static defaultProps = {
    schema: DEFAULT_SCHEMA,
    value: {},
    onChange: emptyFunction
  };

  render() {
    let {schema, value, children, forceShowErrors, ...props} = this.props;
    let formValue = Value.isValue(value) ?
      value :
      Value(schema, value, this.props.onChange, {forceShowErrors});
    return (
      <Fieldset component="form" formValue={value}>
        {children}
      </Fieldset>
    );
  }
}
