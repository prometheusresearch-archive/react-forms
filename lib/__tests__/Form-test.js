/**
 * @jsx React.DOM
 */
'use strict';

var {OrderedMap}      = require('immutable');
var assert            = require('assert');
var React             = require('react');
var ReactTestUtils    = require('react/lib/ReactTestUtils');
var sinon             = require('sinon');
var Form              = require('../Form');
var Field             = require('../Field');
var {Mapping, Scalar} = require('../schema');

describe('React Forms', () => {

  describe('<Form /> component', () => {

    var schema = (
      <Mapping>
        <Scalar name="a" />
        <Scalar name="b" type="number" />
      </Mapping>
    );

    var form;
    var onChange;
    var onUpdate;

    function getInputs(form) {
      var result = {};
      var fields = ReactTestUtils.scryRenderedComponentsWithType(form, Field);
      fields.forEach((field) => {
        var input = ReactTestUtils.findRenderedDOMComponentWithTag(field, 'input');
        result[field.props.value.schema.name] = input;
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
      form = render({defaultValue: {a: 'a', b: 1}});
      assert.deepEqual(form.getValue(), {a: 'a', b: 1});
      var inputs = getInputs(form);
      ReactTestUtils.Simulate.change(inputs.a, {target: {value: 'hello'}});

      assert.deepEqual(form.getValue(), {a: 'hello', b: 1});

      assert.equal(onUpdate.callCount, 1);
      assert.deepEqual(onUpdate.lastCall.args[0], {a: 'hello', b: 1});

      assert.equal(onChange.callCount, 1);
      assert.deepEqual(onChange.lastCall.args[0], {a: 'hello', b: 1});
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
