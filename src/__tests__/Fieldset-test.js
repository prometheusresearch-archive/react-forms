/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React     from 'react';
import TestUtils from 'react-addons-test-utils';
import Fieldset  from '../Fieldset';
import Component from '../Component';

describe('<Fieldset />', function() {

  it('allows to access form value passed via props', function() {

    let formValue = {};
    let instance = TestUtils.renderIntoDocument(
      <Fieldset
        formValue={formValue}
        />
    );

    assert(instance.formValue === formValue);
  });

  it('does not select from form value passed via props', function() {

    let formValue = {
      ['a']: {},
      [1]: {},
      ['a.b']: {},

      select(keyPath) {
        keyPath = keyPath.join('.');
        return formValue[keyPath];
      }
    };

    let instance;

    instance = TestUtils.renderIntoDocument(
      <Fieldset
        formValue={formValue}
        select="a"
        />
    );

    assert(instance.formValue === formValue);
  });

  it('passes formValue via context', function() {

    let instance;

    class FormComponent extends Component {

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

    assert(instance.formValue === formValue);

  });

});
