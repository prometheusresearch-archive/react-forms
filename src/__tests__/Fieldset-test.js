/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React     from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
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

  it('allows to select from form value passed via props', function() {

    let formValue = {
      ['a']: {},
      [1]: {},
      ['a.b']: {},

      select(keyPath) {
        keyPath = keyPath.join('.');
        switch(keyPath) {
          case 'a':
            return formValue.a;
          case '1':
            return formValue[1];
          case 'a.b':
            return formValue['a.b'];
        }
      }
    };

    let instance;

    instance = TestUtils.renderIntoDocument(
      <Fieldset
        formValue={formValue}
        select="a"
        />
    );

    assert(instance.formValue === formValue.a);

    instance = TestUtils.renderIntoDocument(
      <Fieldset
        formValue={formValue}
        select={1}
        />
    );

    assert(instance.formValue === formValue[1]);

    instance = TestUtils.renderIntoDocument(
      <Fieldset
        formValue={formValue}
        select={['a', 'b']}
        />
    );

    assert(instance.formValue === formValue['a.b']);

    instance = TestUtils.renderIntoDocument(
      <Fieldset
        formValue={formValue}
        select={['a.b']}
        />
    );

    assert(instance.formValue === formValue['a.b']);
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
