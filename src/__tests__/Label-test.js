/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React      from 'react';
import Label      from '../Label';

describe('<Label/>', function() {

  it('renders label', function() {
    let renderer = TestUtils.createRenderer();
    renderer.render(
      <Label label="Label" />
    );
    let result = renderer.getRenderOutput();
    assert(result.props.children === 'Label');
  });

  it('renders label from schema', function() {
    let renderer = TestUtils.createRenderer();
    renderer.render(
      <Label schema={{label: 'Label'}} />
    );
    let result = renderer.getRenderOutput();
    assert(result.props.children === 'Label');
  });

  it('renders label (overrides label from schema)', function() {
    let renderer = TestUtils.createRenderer();
    renderer.render(
      <Label label="Label" schema={{label: 'Invalid'}} />
    );
    let result = renderer.getRenderOutput();
    assert(result.props.children === 'Label');
  });

});
