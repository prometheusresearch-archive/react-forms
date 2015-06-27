/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React          from 'react';
import TestUtils      from 'react/lib/ReactTestUtils';
import WithFormValue  from '../WithFormValue';
import Fieldset       from '../Fieldset';

describe('WithFormValue', function() {

  it('injects formValue via props', function() {
    let instance;

    @WithFormValue
    class FormComponent extends React.Component {
      render() {
        instance = this;
        return null;
      }
    }

    let formValue = {};

    TestUtils.renderIntoDocument(
      <Fieldset formValue={formValue}>
        <FormComponent />
      </Fieldset>
    );

    expect(instance.props.formValue).toBe(formValue);
  });
});
