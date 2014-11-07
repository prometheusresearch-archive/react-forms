/**
 * @jsx React.DOM
 */
'use strict';

var sinon   = require('sinon');
var assert  = require('assert');

var ReactForms    = require('../');
var {fromJS, is}  = require('immutable');
var React         = require('react');
var TestUtils     = require('react/lib/ReactTestUtils');

var {Form, Field, Fieldset} = ReactForms;
var {Scalar, Mapping}       = ReactForms.schema;

function assertEquals(a, b) {
  a = fromJS(a);
  b = fromJS(b);
  assert.ok(is(a, b), `expected ${a} to be equal to ${b}`);
}

describe('nested form integration test', function() {

  var schema = Mapping({
    subschema: Mapping({
      text: Scalar(),
      num: Scalar({type: 'number'})
    })
  });

  var form;
  var onChange;
  var onUpdate;
  var fields;
  var inputs;

  beforeEach(function() {
    onChange = sinon.spy();
    onUpdate = sinon.spy();
    form = TestUtils.renderIntoDocument(
      <Form schema={schema} onChange={onChange} onUpdate={onUpdate} />
    );
    fields = {};
    inputs = {};
    TestUtils.scryRenderedComponentsWithType(form, Field).forEach(function(field) {
      var path = field.props.value.keyPath;
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
    assertEquals(form.getValue(), {});
    assert.ok(form.getValidation().isSuccess);
  });

  it('updates value on user input', function() {
    TestUtils.Simulate.change(inputs.text, {target: {value: 'text!'}});
    assertEquals(form.getValue(), {subschema: {text: 'text!'}});
    assert.ok(form.getValidation().isSuccess);

    TestUtils.Simulate.change(inputs.num, {target: {value: '42'}});
    assertEquals(form.getValue(), {subschema: {text: 'text!', num: 42}});
    assert.ok(form.getValidation().isSuccess);
  });

  it('updates value on invalid user input', function() {
    TestUtils.Simulate.change(inputs.num, {target: {value: 'invalid'}});
    assertEquals(form.getValue(), {subschema: {num: 'invalid'}});
    assert.ok(form.getValidation().isFailure);
  });

  it('fires callbacks on user input', function() {
    TestUtils.Simulate.change(inputs.text, {target: {value: 'text!'}});
    assert.equal(onUpdate.callCount, 1);
    assert.equal(onChange.callCount, 1);

    TestUtils.Simulate.change(inputs.num, {target: {value: '42'}});
    assert.equal(onUpdate.callCount, 2);
    assert.equal(onChange.callCount, 2);
  });

  it('fires callbacks on invalid user input', function() {
    TestUtils.Simulate.change(inputs.num, {target: {value: 'invalid!'}});
    assert.equal(onUpdate.callCount, 1);
    assert.equal(onChange.callCount, 0);
  });

});

