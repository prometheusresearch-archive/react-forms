/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React, {PropTypes} from 'react';
import Fieldset           from './Fieldset';
import Value              from './Value';
import emptyFunction      from './emptyFunction';

const DEFAULT_SCHEMA = {
  id: 'emptyschema',
  type: 'object'
};

export default class Form extends React.Component {

  static propTypes = {
    /**
     * JSON Schema used for form value validation.
     */
    schema: PropTypes.object,

    /**
     * Form value.
     */
    value: PropTypes.object,

    /**
     * Form elements.
     */
    children: PropTypes.node,

    /**
     * If form should force error rendering.
     */
    forceShowErrors: PropTypes.bool,

    /**
     * Callback which is executed every time form value changes.
     */
    onChange: PropTypes.func
  };

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
      <Fieldset component="form" formValue={formValue}>
        {children}
      </Fieldset>
    );
  }
}
