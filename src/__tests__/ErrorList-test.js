/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React      from 'react';
import TestUtils  from 'react/lib/ReactTestUtils';
import Error      from '../Error';
import ErrorList  from '../ErrorList';

describe('<ErrorList />', function() {

  it('renders a list of errors', function() {

    let formValue = {
      errorList: [
        {field: 'data.a', message: 'error'}
      ]
    };
    let renderer = TestUtils.createRenderer();
    renderer.render(<ErrorList formValue={formValue} />);
    let tree = renderer.getRenderOutput();
    expect(tree.type).toBe('div');
    expect(tree.props.children.length).toBe(1);
    expect(tree.props.children[0].type).toBe(Error);
    expect(tree.props.children[0].props.error.message).toBe('error');
  });

  it('renders a complete list of errors', function() {

    let formValue = {
      completeErrorList: [
        {field: 'data.a', message: 'error'}
      ]
    };
    let renderer = TestUtils.createRenderer();
    renderer.render(<ErrorList complete formValue={formValue} />);
    let tree = renderer.getRenderOutput();
    expect(tree.type).toBe('div');
    expect(tree.props.children.length).toBe(1);
    expect(tree.props.children[0].type).toBe(Error);
    expect(tree.props.children[0].props.error.message).toBe('error');
  });

  it('renders a list of errors with labels fetched from schema', function() {

    let formValue = {
      completeErrorList: [
        {field: 'data.a', message: 'error', schema: {label: 'A'}}
      ]
    };
    let renderer = TestUtils.createRenderer();
    renderer.render(<ErrorList complete formValue={formValue} />);
    let tree = renderer.getRenderOutput();
    expect(tree.type).toBe('div');
    expect(tree.props.children.length).toBe(1);
    expect(tree.props.children[0].type).toBe(Error);
  });

  it('can filter errors by schema types', function() {

    let formValue = {
      completeErrorList: [
        {field: 'data.a', message: 'error', schema: {type: 'object'}},
        {field: 'data.b', message: 'error', schema: {type: 'string'}}
      ]
    };
    let renderer = TestUtils.createRenderer();
    renderer.render(<ErrorList complete schemaType={{object: true}} formValue={formValue} />);
    let tree = renderer.getRenderOutput();
    expect(tree.type).toBe('div');
    expect(tree.props.children.length).toBe(1);
    expect(tree.props.children[0].type).toBe(Error);
    expect(tree.props.children[0].props.error.message).toBe('error');
  });

});
