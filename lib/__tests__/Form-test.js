/**
 * @jsx React.DOM
 */
'use strict';

var assert            = require('assert');
var React             = require('react');
var ReactTestUtils    = require('react/lib/ReactTestUtils');
var sinon             = require('sinon');
var Form              = require('../Form');
var Field             = require('../Field');
var schema            = require('../schema');

var Schema    = schema.Schema;
var Property  = schema.Property;


describe('forms', () => {

  describe('Form component', () => {

    var schema = (
      <Schema>
        <Property name="a" />
        <Property name="b" type="number" />
      </Schema>
    );

    var form;
    var onChange;
    var onUpdate;

    function getInputs(form) {
      var result = {};
      var fields = ReactTestUtils.scryRenderedComponentsWithType(form, Field);
      fields.forEach((field) => {
        var input = ReactTestUtils.findRenderedDOMComponentWithTag(field, 'input')
        result[field.props.value.name] = input;
      });
      return result;
    }

    function assertFormValue(form, value) {
      assert.deepEqual(form.value().value, value);
    }

    function render(props) {
      if (!props.onChange) {
        onChange = props.onChange = sinon.spy();
      }
      if (!props.onUpdate) {
        onUpdate = props.onUpdate = sinon.spy();
      }
      props.schema = schema;
      return ReactTestUtils.renderIntoDocument(Form(props));
    }

    it('allows to specify default value via defaultValue prop', () => {
      form = render({defaultValue: {a: 'a', b: 1}});
      assertFormValue(form, {a: 'a', b: 1});
      var inputs = getInputs(form);
      ReactTestUtils.Simulate.change(inputs.a, {target: {value: 'hello'}});

      assertFormValue(form, {a: 'hello', b: 1});

      assert.equal(onUpdate.callCount, 1);
      assert.deepEqual(onUpdate.lastCall.args[0], {a: 'hello', b: 1});

      assert.equal(onChange.callCount, 1);
      assert.deepEqual(onChange.lastCall.args[0], {a: 'hello', b: 1});
    });

    it('allows to control the form value via value prop', () => {
      var spy = sinon.spy();
      function onUpdate(value) {
        form = render({value, onUpdate});
      }

      onUpdate({a: 'a', b: 'b'});

      assertFormValue(form, {a: 'a', b: 'b'});

      var inputs = getInputs(form);
      ReactTestUtils.Simulate.change(inputs.a, {target: {value: 'hello'}});

      assertFormValue(form, {a: 'hello', b: 'b'});
    });

    it('renders into <form/> by default', () => {
      form = render({});
      assert.equal(form.getDOMNode().tagName, 'FORM');
    });

    it('has .rf-Form className', () => {
      form = render({});
      assert.ok(form.getDOMNode().classList.contains('rf-Form'));
      assert.ok(!form.getDOMNode().classList.contains('rf-Form--invalid'));
    });

    it('has .rf-Form--invalid className when contains invalid value', () => {
      form = render({defaultValue: {a: 'a', b: 'b'}});
      assert.ok(form.getDOMNode().classList.contains('rf-Form'));
      assert.ok(form.getDOMNode().classList.contains('rf-Form--invalid'));
    });

    it('can render into DOM component specified via component prop', () => {
      form = render({component: React.DOM.div});
      assert.equal(form.getDOMNode().tagName, 'DIV');
    });

  });

});
