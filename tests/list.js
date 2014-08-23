/**
 * @jsx React.DOM
 */
'use strict';

var sinon   = require('sinon');
var assert  = require('assert');

var ReactForms  = require('../');
var React       = require('react');
var TestUtils   = require('react/lib/ReactTestUtils');

var {Scalar, Mapping, List} = ReactForms.schema;
var {Form, Field}           = ReactForms;

describe('Form with <List /> schema', function() {

  describe('<List /> of <Scalar />', function() {
    var schema = (
      <Mapping>
        <List name="numbers">
          <Scalar type="number" />
        </List>
      </Mapping>
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
      form = TestUtils.renderIntoDocument(Form({schema, onChange, onUpdate}));
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
      assert.deepEqual(form.getValue(), {numbers: []});
      assert.ok(form.getValidation().isSuccess);
    });

    it('allows adding an item', function() {
      TestUtils.Simulate.click(addButton);
      findFieldsInputs();

      assert.equal(fields.length, 1);
      assert.equal(inputs.length, 1);

      assert.equal(onUpdate.callCount, 1);
      assert.equal(onChange.callCount, 1);

      assert.deepEqual(form.getValue(), {numbers: [null]});
      assert.ok(form.getValidation().isSuccess);
    });

    it('updates value on user input', function() {
      TestUtils.Simulate.click(addButton);
      findFieldsInputs();
      TestUtils.Simulate.change(inputs[0], {target: {value: '42'}});

      assert.equal(onUpdate.callCount, 2);
      assert.equal(onChange.callCount, 2);

      assert.deepEqual(form.getValue(), {numbers: [42]});
      assert.ok(form.getValidation().isSuccess);
    });

    it('updates value on invalid user input', function() {
      TestUtils.Simulate.click(addButton);
      findFieldsInputs();
      TestUtils.Simulate.change(inputs[0], {target: {value: 'invalid'}});

      assert.equal(onUpdate.callCount, 2);
      assert.equal(onChange.callCount, 1);

      assert.deepEqual(form.getValue(), {numbers: ['invalid']});
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
    var schema = (
      <Mapping>
        <List name="numbers">
          <Mapping>
            <Scalar name="a" type="number" />
            <Scalar name="b" type="number" />
          </Mapping>
        </List>
      </Mapping>
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
      form = TestUtils.renderIntoDocument(Form({schema, onChange, onUpdate}));
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
      assert.deepEqual(form.getValue(), {numbers: []});
      assert.ok(form.getValidation().isSuccess);
    });

    it('allows adding an item', function() {
      TestUtils.Simulate.click(addButton);
      findFieldsInputs();

      assert.equal(fields.length, 2);
      assert.equal(inputs.length, 2);

      assert.equal(onUpdate.callCount, 1);
      assert.equal(onChange.callCount, 1);

      assert.deepEqual(form.getValue(), {numbers: [{a: null, b: null}]});
      assert.ok(form.getValidation().isSuccess);
    });

    it('updates value on user input', function() {
      TestUtils.Simulate.click(addButton);
      findFieldsInputs();
      TestUtils.Simulate.change(inputs[0], {target: {value: '42'}});

      assert.equal(onUpdate.callCount, 2);
      assert.equal(onChange.callCount, 2);

      assert.deepEqual(form.getValue(), {numbers: [{a: 42, b: null}]});
      assert.ok(form.getValidation().isSuccess);
    });

    it('updates value on invalid user input', function() {
      TestUtils.Simulate.click(addButton);
      findFieldsInputs();
      TestUtils.Simulate.change(inputs[0], {target: {value: 'invalid'}});

      assert.equal(onUpdate.callCount, 2);
      assert.equal(onChange.callCount, 1);

      assert.deepEqual(form.getValue(), {numbers: [{a: 'invalid', b: null}]});
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
