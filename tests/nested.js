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

describe('nested form integration test', function() {

  var schema = (
    <Mapping>
      <Mapping name="subschema">
        <Scalar name="text" />
        <Scalar name="num" type="number" />
      </Mapping>
    </Mapping>
  )

  var form;
  var onChange;
  var onUpdate;
  var fields;
  var inputs;

  beforeEach(function() {
    onChange = sinon.spy();
    onUpdate = sinon.spy();
    form = TestUtils.renderIntoDocument(Form({schema, onChange, onUpdate}));
    fields = {};
    inputs = {};
    TestUtils.scryRenderedComponentsWithType(form, Field).forEach(function(field) {
      fields[field.props.value.name] = field;
      inputs[field.props.value.name] = TestUtils.findRenderedDOMComponentWithTag(field, 'input');
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
    assert.deepEqual(form.value().value, {});
    assert.deepEqual(form.value().serialized, {});
    assert.ok(ReactForms.validation.isSuccess(form.value().validation));
  });

  it('updates value on user input', function() {
    TestUtils.Simulate.change(inputs.text, {target: {value: 'text!'}});
    assert.deepEqual(form.value().value, {subschema: {text: 'text!'}});
    assert.deepEqual(form.value().serialized, {subschema: {text: 'text!'}});
    assert.ok(ReactForms.validation.isSuccess(form.value().validation));

    TestUtils.Simulate.change(inputs.num, {target: {value: '42'}});
    assert.deepEqual(form.value().value, {subschema: {text: 'text!', num: 42}});
    assert.deepEqual(form.value().serialized, {subschema: {text: 'text!', num: '42'}});
    assert.ok(ReactForms.validation.isSuccess(form.value().validation));
  });

  it('updates value on invalid user input', function() {
    TestUtils.Simulate.change(inputs.num, {target: {value: 'invalid'}});
    assert.deepEqual(form.value().value, {subschema: {num: 'invalid'}});
    assert.deepEqual(form.value().serialized, {subschema: {num: 'invalid'}});
    assert.ok(ReactForms.validation.isFailure(form.value().validation));
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

