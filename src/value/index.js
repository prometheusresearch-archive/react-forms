/**
 * @copyright 2016-present, Prometheus Research, LLC
 */

export {validate} from '../Schema';
export Fieldset from '../Fieldset';
export * as Schema from '../Schema';
export Input from '../Input';

export ErrorList from './ErrorList';
export withFormValue from '../withFormValue';
export {createValue, suppressUpdate} from './Value';
export Field from './Field';

export function WithFormValue(...args) {
  console.error('WithFormValue(..) is renamed to withFormValue(..)');
  return withFormValue(...args);
}
