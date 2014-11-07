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

var {Scalar, Mapping, List} = ReactForms.schema;
var {Form, Field}           = ReactForms;

function assertEquals(a, b) {
  a = fromJS(a);
  b = fromJS(b);
  assert.ok(is(a, b), `expected ${a} to be equal to ${b}`);
}

describe('Form with list schema', function() {

  describe('List of scalars', function() {
    var schema = Mapping({
      numbers: List(Scalar({type: 'number'}))
    });

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
        'rf-RepeatingFieldset__remove'
      );

      TestUtils.scryRenderedComponentsWithType(form, Field).forEach(function(field) {
        fields.push(field);
        inputs.push(TestUtils.findRenderedDOMComponentWithTag(field, 'input'));
      });
    }

    beforeEach(function() {
      onChange = sinon.spy();
      onUpdate = sinon.spy();
      form = TestUtils.renderIntoDocument(
        <Form
          schema={schema}
          onChange={onChange}
          onUpdate={onUpdate}
          />
      );
      findFieldsInputs();
      addButton = TestUtils.findRenderedDOMComponentWithClass(
        form,
        'rf-RepeatingFieldset__add'
      );
    });

    it('renders', function() {
      assert.equal(fields.length, 0);
      assert.equal(inputs.length, 0);
    });

    it('has empty value initially', function() {
      assertEquals(form.getValue(), {});
      assert.ok(form.getValidation().isSuccess);
    });

    it('allows adding an item', function() {
      TestUtils.Simulate.click(addButton);
      findFieldsInputs();

      assert.equal(fields.length, 1);
      assert.equal(inputs.length, 1);

      assert.equal(onUpdate.callCount, 1);
      assert.equal(onChange.callCount, 1);

      assertEquals(form.getValue(), {numbers: [undefined]});
      assert.ok(form.getValidation().isSuccess);
    });

    it('updates value on user input', function() {
      TestUtils.Simulate.click(addButton);
      findFieldsInputs();
      TestUtils.Simulate.change(inputs[0], {target: {value: '42'}});

      assert.equal(onUpdate.callCount, 2);
      assert.equal(onChange.callCount, 2);

      assertEquals(form.getValue(), {numbers: [42]});
      assert.ok(form.getValidation().isSuccess);
    });

    it('updates value on invalid user input', function() {
      TestUtils.Simulate.click(addButton);
      findFieldsInputs();
      TestUtils.Simulate.change(inputs[0], {target: {value: 'invalid'}});

      assert.equal(onUpdate.callCount, 2);
      assert.equal(onChange.callCount, 1);

      assertEquals(form.getValue(), {numbers: ['invalid']});
      assert.ok(form.getValidation().isFailure);
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

  describe('<List /> of <Mapping />', function() {
    var schema = Mapping({
      numbers: List(Mapping({
        a: Scalar({type: 'number'}),
        b: Scalar({type: 'number'})
      }))
    });

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
        'rf-RepeatingFieldset__remove'
      );

      TestUtils.scryRenderedComponentsWithType(form, Field).forEach(function(field) {
        fields.push(field);
        inputs.push(TestUtils.findRenderedDOMComponentWithTag(field, 'input'));
      });
    }

    beforeEach(function() {
      onChange = sinon.spy();
      onUpdate = sinon.spy();
      form = TestUtils.renderIntoDocument(
        <Form 
          schema={schema}
          onChange={onChange}
          onUpdate={onUpdate}
          />
      );
      findFieldsInputs();
      addButton = TestUtils.findRenderedDOMComponentWithClass(
        form,
        'rf-RepeatingFieldset__add'
      );
    });

    it('renders', function() {
      assert.equal(fields.length, 0);
      assert.equal(inputs.length, 0);
    });

    it('has empty value initially', function() {
      assertEquals(form.getValue(), {});
      assert.ok(form.getValidation().isSuccess);
    });

    it('allows adding an item', function() {
      TestUtils.Simulate.click(addButton);
      findFieldsInputs();

      assert.equal(fields.length, 2);
      assert.equal(inputs.length, 2);

      assert.equal(onUpdate.callCount, 1);
      assert.equal(onChange.callCount, 1);

      assertEquals(form.getValue(), {numbers: [{}]});
      assert.ok(form.getValidation().isSuccess);
    });

    it('updates value on user input', function() {
      TestUtils.Simulate.click(addButton);
      findFieldsInputs();
      TestUtils.Simulate.change(inputs[0], {target: {value: '42'}});

      assert.equal(onUpdate.callCount, 2);
      assert.equal(onChange.callCount, 2);

      assertEquals(form.getValue(), {numbers: [{a: 42}]});
      assert.ok(form.getValidation().isSuccess);
    });

    it('updates value on invalid user input', function() {
      TestUtils.Simulate.click(addButton);
      findFieldsInputs();
      TestUtils.Simulate.change(inputs[0], {target: {value: 'invalid'}});

      assert.equal(onUpdate.callCount, 2);
      assert.equal(onChange.callCount, 1);

      assertEquals(form.getValue(), {numbers: [{a: 'invalid'}]});
      assert.ok(form.getValidation().isFailure);
    });

    it('allows removing an item', function() {
      TestUtils.Simulate.click(addButton);
      findFieldsInputs();
      assert.equal(fields.length, 2);
      TestUtils.Simulate.click(removeButtons[0]);
      findFieldsInputs();
      assert.equal(fields.length, 0);

      assert.equal(onUpdate.callCount, 2);
      assert.equal(onChange.callCount, 2);
    });

  });

});
