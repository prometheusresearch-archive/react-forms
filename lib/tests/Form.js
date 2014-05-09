/**
 * @jsx React.DOM
 */
'use strict';

var assert            = require('assert');
var ReactTestUtils    = require('react/lib/ReactTestUtils');
var sinon             = require('sinon');
var Form              = require('../Form');
var schema            = require('../schema');

var Schema    = schema.Schema;
var Property  = schema.Property;


describe('forms', () => {

  describe('Form component', () => {

    var schema = (
      <Schema>
        <Property name="a" />
        <Property name="b" />
      </Schema>
    );

    var form;
    var onChange;
    var onUpdate;

    function getInputs(form) {
      var inputs = ReactTestUtils.scryRenderedDOMComponentsWithTag(form, 'input');
      var result = {};
      inputs.forEach((input) => {
        result[input._owner.props.name] = input;
      });
      return result;
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
      form = render({defaultValue: {a: 'a', b: 'b'}});
      assert.deepEqual(form.valueLens().val(), {a: 'a', b: 'b'});
      var inputs = getInputs(form);
      ReactTestUtils.Simulate.change(inputs.a, {target: {value: 'hello'}});

      assert.deepEqual(form.valueLens().val(), {a: 'hello', b: 'b'});

      assert.equal(onUpdate.callCount, 1);
      assert.deepEqual(onUpdate.lastCall.args[0], {a: 'hello', b: 'b'});

      assert.equal(onChange.callCount, 1);
      assert.deepEqual(onChange.lastCall.args[0], {a: 'hello', b: 'b'});
    });

    it('allows to control the form value via value prop', () => {
      var spy = sinon.spy();
      function onUpdate(value) {
        form = render({value, onUpdate});
      }

      onUpdate({a: 'a', b: 'b'});

      assert.deepEqual(form.valueLens().val(), {a: 'a', b: 'b'});

      var inputs = getInputs(form);
      ReactTestUtils.Simulate.change(inputs.a, {target: {value: 'hello'}});

      assert.deepEqual(form.valueLens().val(), {a: 'hello', b: 'b'});
    });

  });

});
