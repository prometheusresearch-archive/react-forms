/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React      from 'react';
import Input      from '../Input';

describe('<Input/>', function() {

  it('renders into "input" DOM component by default', function() {
    let renderer = TestUtils.createRenderer();
    renderer.render(
      <Input value="hello" />
    );
    let result = renderer.getRenderOutput();
    assert(result.type === 'input');
    assert(result.props.value === 'hello');
  });

  it('debounces on onChange event', function(done) {
    let renderer = TestUtils.createRenderer();
    let onChange = sinon.spy();
    renderer.render(
      <Input debounce={50} value="hello" onChange={onChange} />
    );
    let result;
    result = renderer.getRenderOutput();
    assert(result.props.value === 'hello');

    result.props.onChange({target: {value: 'x'}});
    result = renderer.getRenderOutput();
    assert(result.props.value === 'x');

    result.props.onChange({target: {value: 'x2'}});
    result = renderer.getRenderOutput();
    assert(result.props.value === 'x2');

    setTimeout(function() {
      assert(onChange.calledOnce);
      assert(onChange.firstCall.args[0] === 'x2');
      renderer.unmount();
      done();
    }, 100);
  });

  it('finalizes onChange debounce on blur', function(done) {
    let renderer = TestUtils.createRenderer();
    let onChange = sinon.spy();
    renderer.render(
      <Input debounce={50} value="hello" onChange={onChange} />
    );
    let result;
    result = renderer.getRenderOutput();
    assert(result.props.value === 'hello');

    result.props.onChange({target: {value: 'x'}});
    result = renderer.getRenderOutput();
    assert(result.props.value === 'x');

    result.props.onBlur();
    assert(onChange.calledOnce);
    assert(onChange.firstCall.args[0] === 'x');

    setTimeout(function() {
      assert(onChange.calledOnce);
      renderer.unmount();
      done();
    }, 100);
  });

  it('finalizes onChange debounce on unmount', function(done) {
    let renderer = TestUtils.createRenderer();
    let onChange = sinon.spy();
    renderer.render(
      <Input debounce={50} value="hello" onChange={onChange} />
    );
    let result;
    result = renderer.getRenderOutput();
    assert(result.props.value === 'hello');

    result.props.onChange({target: {value: 'x'}});
    result = renderer.getRenderOutput();
    assert(result.props.value === 'x');

    renderer.unmount();
    assert(onChange.calledOnce);
    assert(onChange.firstCall.args[0] === 'x');

    setTimeout(function() {
      assert(onChange.calledOnce);
      done();
    }, 100);
  });

  it('cancels debounce if new value is set via props', function(done) {
    let renderer = TestUtils.createRenderer();
    let onChange = sinon.spy();
    renderer.render(
      <Input debounce={50} value="hello" onChange={onChange} />
    );
    let result;
    result = renderer.getRenderOutput();
    assert(result.props.value === 'hello');

    result.props.onChange({target: {value: 'x'}});
    result = renderer.getRenderOutput();
    assert(result.props.value === 'x');

    renderer.render(
      <Input debounce={50} value="hello!" onChange={onChange} />
    );
    result = renderer.getRenderOutput();
    assert(result.props.value === 'hello!');

    setTimeout(function() {
      assert(!onChange.calledOnce);
      done();
    }, 100);
  });

});

