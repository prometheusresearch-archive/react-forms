/**
 * @copyright 2015, Prometheus Research, LLC
 */

import {createValue} from './Value';

export Fieldset       from './Fieldset';
export Field          from './Field';
export {createValue};
export WithFormValue  from './WithFormValue';
export * as Schema    from './Schema';
export Input          from './Input';
export ErrorList      from './ErrorList';

export function Value(schema, value, onChange, params, errorList) {
  console.error("`import {Value} from 'react-forms'` is deprecated, \
                 change it to 'import {createvalue} from `'react-forms'`");
  return createValue({schema, value, onChange, params, errorList});
}
