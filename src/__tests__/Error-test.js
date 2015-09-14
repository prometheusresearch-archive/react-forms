/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React from 'react';
import Error from '../Error';

describe('<Error />', function() {

  it('renders into null if no error is provided', function() {
    let renderer = TestUtils.createRenderer();
    renderer.render(<Error />);
    let result = renderer.getRenderOutput();
    assert(result.type === 'noscript');
  });

  it('renders an error message', function() {
    let renderer = TestUtils.createRenderer();
    renderer.render(<Error error={{message: 'oops'}} />);
    let result = renderer.getRenderOutput();
    assert(result.type === 'div');
    assert(result.props.children === 'oops');
  });

  it('renders an error message with label from schema if complete flag is set', function() {
    let renderer = TestUtils.createRenderer();
    renderer.render(<Error error={{message: 'oops', schema: {label: 'Label'}}} complete />);
    let result = renderer.getRenderOutput();
    assert(result.type === 'div');
    assert(result.props.children[0] === 'Label');
    assert(result.props.children[1] === ': ');
    assert(result.props.children[2] === 'oops');
  });

  it('renders an error message with label if complete flag is set', function() {
    let renderer = TestUtils.createRenderer();
    renderer.render(<Error label="Label" error={{message: 'oops'}} complete />);
    let result = renderer.getRenderOutput();
    assert(result.type === 'div');
    assert(result.props.children[0] === 'Label');
    assert(result.props.children[1] === ': ');
    assert(result.props.children[2] === 'oops');
  });

  it('renders an error message with label (overrides schema label) if complete flag is set', function() {
    let renderer = TestUtils.createRenderer();
    renderer.render(<Error label="Label" error={{message: 'oops', schema: {label: 'Invalid'}}} complete />);
    let result = renderer.getRenderOutput();
    assert(result.type === 'div');
    assert(result.props.children[0] === 'Label');
    assert(result.props.children[1] === ': ');
    assert(result.props.children[2] === 'oops');
  });

  it('ignores label if noLabel flag is passed', function() {
    let renderer = TestUtils.createRenderer();
    renderer.render(<Error label="Label" error={{message: 'oops', schema: {label: 'Invalid'}}} complete noLabel />);
    let result = renderer.getRenderOutput();
    assert(result.type === 'div');
    assert(result.props.children === 'oops');
  });

});
