/**
 * @copyright 2016, Prometheus Research, LLC
 */

import React from 'react';
import {style} from 'react-stylesheet';

import Input from '../Input';
import Label from '../Label';
import Field from '../Field';
import ErrorList from '../ErrorList';

describe('<Field />', function() {

  function assertLabel(renderer, Component = Label) {
    let result = renderer.getRenderOutput();
    let label = result.props.children[0];
    assert(label);
    assert(label.type === Component);
    return label
  }

  function assertInput(renderer, Component = Input) {
    let result = renderer.getRenderOutput();
    let input = result.props.children[1].props.children;
    assert(input);
    assert(input.type === Component);
    return input
  }

  function assertErrorList(renderer, Component = ErrorList) {
    let result = renderer.getRenderOutput();
    let errorList = result.props.children[2];
    assert(errorList);
    assert(errorList.type === Component);
    return errorList
  }

  let renderer;

  beforeEach(function() {
    renderer = TestUtils.createRenderer();
  });

  it('renders an input with value', function() {
    let formValue = {value: 'hello', params: {}};
    renderer.render(
      <Field formValue={formValue} />
    );
    let input = assertInput(renderer);
    assert(input.props.value === 'hello');
  });

  it('reacts on onChange (DOM event passed) from input by updating the formValue', function() {
    let formValue = {value: 'hello', params: {}, update: sinon.spy()};
    renderer.render(
      <Field formValue={formValue} />
    );
    let input;
    input = assertInput(renderer);
    assert(input.props.value === 'hello');
    let event = {target: {value: 'changed!'}, stopPropagation: sinon.spy()};
    input.props.onChange(event);
    assert(event.stopPropagation.calledOnce);
    assert(formValue.update.calledOnce);
    assert(formValue.update.firstCall.args[0] === 'changed!');
  });


  it('normalizes an empty string from DOM event to null', function() {
    let formValue = {value: 'hello', params: {}, update: sinon.spy()};
    renderer.render(
      <Field formValue={formValue} />
    );
    let input;
    input = assertInput(renderer);
    assert(input.props.value === 'hello');
    let event = {target: {value: ''}, stopPropagation: sinon.spy()};
    input.props.onChange(event);
    assert(event.stopPropagation.calledOnce);
    assert(formValue.update.calledOnce);
    assert(formValue.update.firstCall.args[0] === null);
  });

  it('reacts on onChange (value passed) from input by updating the formValue', function() {
    let formValue = {value: 'hello', params: {}, update: sinon.spy()};
    renderer.render(
      <Field formValue={formValue} />
    );
    let input;
    input = assertInput(renderer);
    assert(input.props.value === 'hello');
    let value = 'changed!';
    input.props.onChange(value);
    assert(formValue.update.calledOnce);
    assert(formValue.update.firstCall.args[0] === 'changed!');
  });

  it('renders a label', function() {
    let formValue = {value: 'hello', params: {}, schema: {}};
    renderer.render(
      <Field formValue={formValue} label="Label" />
    );
    let label = assertLabel(renderer);
    assert(label.props.label === 'Label');
    assert(label.props.schema === formValue.schema);
  });

  it('does not show error list if not dirty', function() {
    let formValue = {};
    renderer.render(
      <Field formValue={formValue} label="Label" />
    );
    let errorList = assertErrorList(renderer);
    assert(errorList.props.formValue === formValue);
    assert(errorList.props.hideNonForced);
  });

  it('renders an error list if it becomes dirty', function() {
    let formValue = {};
    renderer.render(
      <Field formValue={formValue} label="Label" />
    );
    let self;
    let errorList;
    errorList = assertErrorList(renderer);
    assert(errorList.props.formValue === formValue);
    assert(errorList.props.hideNonForced);
    self = renderer.getRenderOutput();
    assert(self.props.onBlur);
    self.props.onBlur();
    errorList = assertErrorList(renderer);
    assert(errorList.props.formValue === formValue);
    assert(!errorList.props.hideNonForced);
  });

  it('renders an error list if forced', function() {
    let formValue = {params: {forceShowErrors: true}};
    renderer.render(
      <Field formValue={formValue} label="Label" />
    );
    let errorList = assertErrorList(renderer);
    assert(errorList.props.formValue === formValue);
    assert(!errorList.props.hideNonForced);
  });

  it('virtualizes rendering of self component', function() {
    let formValue = {};
    function Custom(props) {
      return <div />;
    }
    let CustomField = style(Field, {
      Root: Custom
    });
    renderer.render(
      <CustomField formValue={formValue} />
    );
    let self = renderer.getRenderOutput();
    assert(self);
    assert(self.type === Custom);
  });

  it('virtualizes rendering of input component', function() {
    let formValue = {};
    function Custom(props) {
      return <div />;
    }
    renderer.render(
      <Field Input={Custom} formValue={formValue} />
    );
    assertInput(renderer, Custom);
  });

  it('virtualizes rendering of input component (via children element)', function() {
    let formValue = {};
    function Custom(props) {
      return <div />;
    }
    renderer.render(
      <Field formValue={formValue}>
        <Custom x="1" />
      </Field>
    );
    let input = assertInput(renderer, Custom);
    assert(input.props.x === '1');
  });

});
