/**
 * @copyright 2015, Prometheus Research, LLC
 */

import withFormValueImpl from '../withFormValue';
import reactive from './reactive';

export default function withFormValue(Component) {
  return withFormValueImpl(reactive(Component));
}
