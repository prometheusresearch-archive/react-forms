/**
 * @copyright 2016-present, Prometheus Research, LLC
 */

export {update} from '../update';
export {validate} from '../Schema';
export * as Schema from '../Schema';
export Fieldset from '../Fieldset';
export Input from '../Input';

export {create as createValue} from './Value';
export {reactive} from 'react-derivable';

import {reactive} from 'react-derivable';
import withFormValueBase from '../withFormValue';
import ErrorListBase from '../ErrorList';
import FieldBase from '../Field';

export function withFormValue(Component) {
  return withFormValueBase(reactive(Component));
}

export let Field = reactive(FieldBase);
export let ErrorList = reactive(ErrorListBase);
