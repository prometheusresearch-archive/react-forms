/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React     from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Component from '../Component';

describe('<Component />', function() {

  it('allows to access form value passed via props', function() {

    class FormComponent extends Component {

      render() {
        return <div />;
      }
    }

    let formValue = {};
    let instance = TestUtils.renderIntoDocument(
      <FormComponent
        formValue={formValue}
        />
    );

    expect(instance.formValue).toBe(formValue);
  });

  it('allows to select from form value passed via props', function() {

    class FormComponent extends Component {

      render() {
        return <div />;
      }
    }

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
      <FormComponent
        formValue={formValue}
        selectFormValue="a"
        />
    );

    expect(instance.formValue).toBe(formValue.a);

    instance = TestUtils.renderIntoDocument(
      <FormComponent
        formValue={formValue}
        selectFormValue={1}
        />
    );

    expect(instance.formValue).toBe(formValue[1]);

    instance = TestUtils.renderIntoDocument(
      <FormComponent
        formValue={formValue}
        selectFormValue={['a', 'b']}
        />
    );

    expect(instance.formValue).toBe(formValue['a.b']);

    instance = TestUtils.renderIntoDocument(
      <FormComponent
        formValue={formValue}
        selectFormValue={['a.b']}
        />
    );

    expect(instance.formValue).toBe(formValue['a.b']);
  });

  it('handles selectFormValue being a boolean true', function() {

    class FormComponent extends Component {

      render() {
        return <div />;
      }
    }

    let formValue = {};
    let instance = TestUtils.renderIntoDocument(
      <FormComponent
        selectFormValue
        formValue={formValue}
        />
    );

    expect(instance.formValue).toBe(formValue);
  });

  it('allows to access form value passed via context', function() {

    class FormComponentChild extends Component {

      render() {
        return <div />;
      }
    }

    class FormComponentParent extends Component {

      render() {
        return <FormComponentChild ref="child" />;
      }
    }

    let formValue = {};
    let parent = TestUtils.renderIntoDocument(
      <FormComponentParent
        formValue={formValue}
        />
    );
    let child = parent.refs.child;

    expect(parent.formValue).toBe(formValue);
    expect(child.formValue).toBe(formValue);
  });

  it('allows to access form value passed via context (parent path)', function() {

    let child;

    class FormComponentChild extends Component {

      render() {
        child = this;
        return <div />;
      }
    }

    class FormComponentParent extends Component {

      render() {
        return this.props.children;
      }
    }

    let formValue = {};
    let parent = TestUtils.renderIntoDocument(
      <FormComponentParent formValue={formValue}>
        <FormComponentChild />
      </FormComponentParent>
    );

    expect(parent.formValue).toBe(formValue);
    expect(child.formValue).toBe(formValue);
  });

  it('allows to select from form value passed via context', function() {

    class FormComponentChild extends Component {

      render() {
        return <div />;
      }
    }

    class FormComponentParent extends Component {

      render() {
        let {childSelectFormValue} = this.props;
        return <FormComponentChild ref="child" selectFormValue={childSelectFormValue} />;
      }
    }

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

    let parent;
    let child;

    parent = TestUtils.renderIntoDocument(
      <FormComponentParent
        formValue={formValue}
        childSelectFormValue="a"
        />
    );
    child = parent.refs.child;

    expect(child.formValue).toBe(formValue.a);

    parent = TestUtils.renderIntoDocument(
      <FormComponentParent
        formValue={formValue}
        childSelectFormValue={1}
        />
    );
    child = parent.refs.child;

    expect(child.formValue).toBe(formValue[1]);

    parent = TestUtils.renderIntoDocument(
      <FormComponentParent
        formValue={formValue}
        childSelectFormValue={['a', 'b']}
        />
    );
    child = parent.refs.child;

    expect(child.formValue).toBe(formValue['a.b']);

    parent = TestUtils.renderIntoDocument(
      <FormComponentParent
        formValue={formValue}
        childSelectFormValue={['a.b']}
        />
    );
    child = parent.refs.child;

    expect(child.formValue).toBe(formValue['a.b']);
  });

});
