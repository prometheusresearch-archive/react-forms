/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React      from 'react';
import TestUtils  from 'react/lib/ReactTestUtils';
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
    expect(tree.type).toBe('ul');
    expect(tree.props.children.length).toBe(1);
    expect(tree.props.children[0].type).toBe('li');
    expect(tree.props.children[0].props.children).toBe('error');
  });

});
