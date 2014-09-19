/**
 * @jsx React.DOM
 */
'use strict';

var sinon   = require('sinon');
var assert  = require('assert');

var ReactForms  = require('../');
var React       = require('react');
var TestUtils   = require('react/lib/ReactTestUtils');

var {Form, Field, Fieldset} = ReactForms;
var {Scalar, Mapping}       = ReactForms.schema;

describe('simple form integration test', function() {

  var schema = Mapping({
    text: Scalar(),
    num: Scalar({type: 'number'})
  });

  var form;
  var onChange;
  var onUpdate;
  var fields;
  var inputs;

  beforeEach(function() {
    onChange = sinon.spy();
    onUpdate = sinon.spy();
    form = <Form schema={schema} onChange={onChange} onUpdate={onUpdate} />;
    form = TestUtils.renderIntoDocument(form);
    fields = {};
    inputs = {};
    TestUtils.scryRenderedComponentsWithType(form, Field).forEach(function(field) {
      var path = field.props.value.path;
      var name = path[path.length - 1];
      fields[name] = field;
      inputs[name] = TestUtils.findRenderedDOMComponentWithTag(field, 'input');
    });
  });

  it('renders', function() {
    assert.ok(fields.text);
    assert.ok(fields.num);
    assert.ok(inputs.text);
    assert.ok(inputs.num);

    assert.equal(inputs.text.getDOMNode().value, '');
    assert.equal(inputs.num.getDOMNode().value, '');
  });

  it('has empty value initially', function() {
    assert.deepEqual(form.getValue(), {num: null, text: null});
    assert.ok(form.getValidation().isSuccess);
  });

  it('updates value on user input', function() {
    TestUtils.Simulate.change(inputs.text, {target: {value: 'text!'}});
    assert.deepEqual(form.getValue(), {text: 'text!', num: null});
    assert.ok(form.getValidation().isSuccess);

    TestUtils.Simulate.change(inputs.num, {target: {value: '42'}});
    assert.deepEqual(form.getValue(), {text: 'text!', num: 42});
    assert.ok(form.getValidation().isSuccess);
  });

  it('updates value on invalid user input', function() {
    TestUtils.Simulate.change(inputs.num, {target: {value: 'invalid'}});
    assert.deepEqual(form.getValue(), {num: 'invalid', text: null});
    assert.ok(form.getValidation().isFailure);
  });

  describe('callbacks', function() {

    it('fires callbacks on user input', function() {
      TestUtils.Simulate.change(inputs.text, {target: {value: 'text!'}});
      assert.equal(onUpdate.callCount, 1);
      assert.equal(onChange.callCount, 1);

      TestUtils.Simulate.change(inputs.num, {target: {value: '42'}});
      assert.equal(onUpdate.callCount, 2);
      assert.equal(onChange.callCount, 2);
    });

    it('provides access to an update object from onUpdate', function() {
      TestUtils.Simulate.change(inputs.text, {target: {value: 'text!'}});

      var [value, validation, path] = onUpdate.firstCall.args;
      assert.deepEqual(value, {text: 'text!', num: null});
      assert.ok(validation.isSuccess);
      assert.deepEqual(path, ['text']);
    });

    it('provides access to an update object from onUpdate', function() {
      TestUtils.Simulate.change(inputs.text, {target: {value: 'text!'}});

      var [value] = onChange.firstCall.args;
      assert.deepEqual(value, {text: 'text!', num: null});
    });

    it('fires callbacks on invalid user input', function() {
      TestUtils.Simulate.change(inputs.num, {target: {value: 'invalid!'}});
      assert.equal(onUpdate.callCount, 1);
      assert.equal(onChange.callCount, 0);
    });

  });

});
