/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React          from 'react';
import TestUtils      from 'react-addons-test-utils';

import Fieldset       from '../Fieldset';
import withFormValue  from '../withFormValue';

describe('withFormValue', function() {

  it('injects formValue via props', function() {
    let instance;

    @withFormValue
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

    assert(instance.props.formValue === formValue);
  });
});
