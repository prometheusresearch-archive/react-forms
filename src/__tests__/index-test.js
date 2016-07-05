/**
 * @copyright 2016, Prometheus Research, LLC
 */

import * as ReactForms from '../index';

describe('react-forms', function() {

  it('exports stable API', function() {
    assert(ReactForms.Fieldset);
    assert(ReactForms.Field);
    assert(ReactForms.createValue);
    assert(ReactForms.WithFormValue);
    assert(ReactForms.withFormValue);
    assert(ReactForms.validate);
    assert(ReactForms.update);
    assert(ReactForms.Schema);
    assert(ReactForms.Input);
    assert(ReactForms.ErrorList);
  });

});
