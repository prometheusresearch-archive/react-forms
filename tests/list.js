/**
 * @jsx React.DOM
 */
'use strict';

var sinon = require('sinon');
var assert = require('assert');

var ReactForms = require('../');
var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');

var Property = ReactForms.schema.Property;
var Schema = ReactForms.schema.Schema;
var List = ReactForms.schema.List;

var Form = ReactForms.Form;
var Field = ReactForms.Field;
var Fieldset = ReactForms.Fieldset;
var RepeatingFieldset = ReactForms.Fieldset;

describe('list form integration test', function() {

  var schema = (
    <Schema>
      <List name="numbers">
        <Property type="number" />
      </List>
    </Schema>
  )

  var form;
  var onChange;
  var onUpdate;
  var addButton;
  var fields;
  var inputs;
  var removeButtons;

  function findFieldsInputs() {
    fields = []
    inputs = []

    removeButtons = TestUtils.scryRenderedDOMComponentsWithClass(
      form,
      'rf-repeating-fieldset-remove'
    );

    TestUtils.scryRenderedComponentsWithType(form, Field).forEach(function(field) {
      fields.push(field);
      inputs.push(TestUtils.findRenderedDOMComponentWithTag(field, 'input'));
    });
  }

  beforeEach(function() {
    onChange = sinon.spy();
    onUpdate = sinon.spy();
    form = TestUtils.renderIntoDocument(Form({schema, onChange, onUpdate}));
    findFieldsInputs();
    addButton = TestUtils.findRenderedDOMComponentWithClass(form, 'rf-repeating-fieldset-add');
  });

  it('renders', function() {
    assert.equal(fields.length, 0);
    assert.equal(inputs.length, 0);
  });

  it('has empty value initially', function() {
    assert.deepEqual(form.value().value, {});
    assert.deepEqual(form.value().serialized, {});
    assert.ok(ReactForms.validation.isSuccess(form.value().validation));
  });

  it('allows adding an item', function() {
    TestUtils.Simulate.click(addButton);
    findFieldsInputs();

    assert.equal(fields.length, 1);
    assert.equal(inputs.length, 1);

    assert.equal(onUpdate.callCount, 1);
    assert.equal(onChange.callCount, 1);

    assert.deepEqual(form.value().value, {numbers: [null]});
    assert.deepEqual(form.value().serialized, {numbers: ['']});
    assert.ok(ReactForms.validation.isSuccess(form.value().validation));
  });

  it('updates value on user input', function() {
    TestUtils.Simulate.click(addButton);
    findFieldsInputs();
    TestUtils.Simulate.change(inputs[0], {target: {value: '42'}});

    assert.equal(onUpdate.callCount, 2);
    assert.equal(onChange.callCount, 2);

    assert.deepEqual(form.value().value, {numbers: [42]});
    assert.deepEqual(form.value().serialized, {numbers: ['42']});
    assert.ok(ReactForms.validation.isSuccess(form.value().validation));
  });

  it('updates value on invalid user input', function() {
    TestUtils.Simulate.click(addButton);
    findFieldsInputs();
    TestUtils.Simulate.change(inputs[0], {target: {value: 'invalid'}});

    assert.equal(onUpdate.callCount, 2);
    assert.equal(onChange.callCount, 1);

    assert.deepEqual(form.value().value, {numbers: ['invalid']});
    assert.deepEqual(form.value().serialized, {numbers: ['invalid']});
    assert.ok(ReactForms.validation.isFailure(form.value().validation));
  });

  it('allows removing an item', function() {
    TestUtils.Simulate.click(addButton);
    findFieldsInputs();
    assert.equal(fields.length, 1);
    TestUtils.Simulate.click(removeButtons[0]);
    findFieldsInputs();
    assert.equal(fields.length, 0);

    assert.equal(onUpdate.callCount, 2);
    assert.equal(onChange.callCount, 2);
  });

});
