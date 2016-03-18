/**
 * @copyright 2016, Prometheus Research, LLC
 */

import React from 'react';
import Input from '../Input';

describe('<Input/>', function() {

  let renderer;

  beforeEach(function() {
    renderer = TestUtils.createRenderer();
  });

  it('renders into "input" DOM component by default', function() {
    renderer.render(
      <Input value="hello" />
    );
    let result = renderer.getRenderOutput();
    assert(result.type === 'input');
    assert(result.props.value === 'hello');
  });

  it('can be configured to fire onChange without debounce', function() {
    let onChange = sinon.spy();
    renderer.render(
      <Input value="hello" onChange={onChange} debounce={0} />
    );
    let result;
    result = renderer.getRenderOutput();
    result.props.onChange({target: {value: 'x'}});
    assert(onChange.calledOnce);
    assert(onChange.firstCall.args[0] === 'x');
  });

  it('it normalizes empty string to null for DOM events', function() {
    let onChange = sinon.spy();
    renderer.render(
      <Input value="hello" onChange={onChange} debounce={0} />
    );
    let result;
    result = renderer.getRenderOutput();
    result.props.onChange({target: {value: ''}});
    assert(onChange.calledOnce);
    assert(onChange.firstCall.args[0] === null);
  });

  it('it propagates onChange value (which is not a DOM event)', function() {
    let onChange = sinon.spy();
    renderer.render(
      <Input value="hello" onChange={onChange} debounce={0} />
    );
    let result;
    result = renderer.getRenderOutput();
    result.props.onChange('value');
    assert(onChange.calledOnce);
    assert(onChange.firstCall.args[0] === 'value');
  });

  it('it can be parametrized with custom input components', function() {
    function CustomComponent(props) {
      return <input {...props} />;
    }
    renderer.render(
      <Input value="hello" Component={CustomComponent} />
    );
    let result;
    result = renderer.getRenderOutput();
    assert(result.type === CustomComponent);
  });

  it('debounces on onChange event', function(done) {
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

