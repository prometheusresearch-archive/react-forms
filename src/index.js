/**
 * @copyright 2016-present, Prometheus Research, LLC
 */

import withFormValue from './withFormValue';

export {validate} from './Schema';
export Fieldset from './Fieldset';
export * as Schema from './Schema';
export Input from './Input';
export ErrorList from './ErrorList';
export {create as createValue, suppressUpdate} from './Value';
export withFormValue from './withFormValue';
export Field from './Field';

export function WithFormValue(...args) {
  console.error('WithFormValue(..) is renamed to withFormValue(..)'); // eslint-disable-line no-console
  return withFormValue(...args);
}
