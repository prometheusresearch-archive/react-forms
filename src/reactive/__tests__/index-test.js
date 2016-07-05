/**
 * @copyright 2016-present, Prometheus Research, LLC
 */

import * as ReactForms from '../index';

describe('react-forms/reactive', function() {

  it('API', function() {
    assert(ReactForms.Fieldset);
    assert(ReactForms.Field);
    assert(ReactForms.createValue);
    assert(ReactForms.withFormValue);
    assert(ReactForms.reactive);
    assert(ReactForms.validate);
    assert(ReactForms.update);
    assert(ReactForms.Schema);
    assert(ReactForms.Input);
    assert(ReactForms.ErrorList);
  });

});
