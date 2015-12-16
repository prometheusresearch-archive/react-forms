/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React     from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Component from '../Component';

const ReactHasContextSupport = !!/^0\.14\.\d/.exec(React.version);

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

    assert(instance.formValue === formValue);
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
        select="a"
        />
    );

    assert(instance.formValue === formValue);
  });

  it('allows to access form value passed via context', function() {
    if (!ReactHasContextSupport) {
      return;
    }

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

    assert(parent.formValue === formValue);
    assert(child.formValue === formValue);
  });

  it('allows to access form value passed via context (parent path)', function() {
    if (!ReactHasContextSupport) {
      return;
    }

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

    assert(parent.formValue === formValue);
    assert(child.formValue === formValue);
  });

  it('allows to select from form value passed via context', function() {
    if (!ReactHasContextSupport) {
      return;
    }

    class FormComponentChild extends Component {

      render() {
        return <div />;
      }
    }

    class FormComponentParent extends Component {

      render() {
        let {childSelectFormValue} = this.props;
        return <FormComponentChild ref="child" select={childSelectFormValue} />;
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

    assert(child.formValue === formValue.a);

    parent = TestUtils.renderIntoDocument(
      <FormComponentParent
        formValue={formValue}
        childSelectFormValue={1}
        />
    );
    child = parent.refs.child;

    assert(child.formValue === formValue[1]);

    parent = TestUtils.renderIntoDocument(
      <FormComponentParent
        formValue={formValue}
        childSelectFormValue={['a', 'b']}
        />
    );
    child = parent.refs.child;

    assert(child.formValue === formValue['a.b']);

    parent = TestUtils.renderIntoDocument(
      <FormComponentParent
        formValue={formValue}
        childSelectFormValue={['a.b']}
        />
    );
    child = parent.refs.child;

    assert(child.formValue === formValue['a.b']);
  });

});
