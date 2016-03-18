/**
 * @copyright 2016, Prometheus Research, LLC
 */

import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Error from '../Error';
import ErrorList from '../ErrorList';

describe('<ErrorList />', function() {

  let renderer;

  beforeEach(function() {
    renderer = TestUtils.createRenderer();
  });

  it('renders into null', function() {
    let formValue = {
      errorList: []
    };

    renderer.render(<ErrorList formValue={formValue} />);
    assert(renderer.getRenderOutput() === null);
  });

  it('renders a list of errors', function() {

    let formValue = {
      errorList: [
        {field: 'data.a', message: 'error'}
      ]
    };
    renderer.render(<ErrorList formValue={formValue} />);
    let tree = renderer.getRenderOutput();
    assert(tree.type === 'div');
    assert(tree.props.children.length === 1);
    assert(tree.props.children[0].type === Error);
    assert(tree.props.children[0].props.error.message === 'error');
  });

  it('renders a complete list of errors', function() {

    let formValue = {
      completeErrorList: [
        {field: 'data.a', message: 'error'}
      ]
    };
    renderer.render(<ErrorList complete formValue={formValue} />);
    let tree = renderer.getRenderOutput();
    assert(tree.type === 'div');
    assert(tree.props.children.length === 1);
    assert(tree.props.children[0].type === Error);
    assert(tree.props.children[0].props.error.message === 'error');
  });

  it('renders a list of errors with labels fetched from schema', function() {

    let formValue = {
      completeErrorList: [
        {field: 'data.a', message: 'error', schema: {label: 'A'}}
      ]
    };
    renderer.render(<ErrorList complete formValue={formValue} />);
    let tree = renderer.getRenderOutput();
    assert(tree.type === 'div');
    assert(tree.props.children.length === 1);
    assert(tree.props.children[0].type === Error);
  });

  it('can filter errors by schema types', function() {

    let formValue = {
      completeErrorList: [
        {field: 'data.a', message: 'error', schema: {type: 'object'}},
        {field: 'data.b', message: 'error', schema: {type: 'string'}}
      ]
    };
    renderer.render(<ErrorList complete schemaType={{object: true}} formValue={formValue} />);
    let tree = renderer.getRenderOutput();
    assert(tree.type === 'div');
    assert(tree.props.children.length === 1);
    assert(tree.props.children[0].type === Error);
    assert(tree.props.children[0].props.error.message === 'error');
  });

});
