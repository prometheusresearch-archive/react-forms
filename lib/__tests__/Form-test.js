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
var Message           = require('../Message');
var {Mapping, Scalar} = require('../value/schema');

describe('React Forms', () => {

  describe('<Form /> component', () => {

    describe('standard behaviour', function() {
      var schema = Mapping({
        a: Scalar(),
        b: Scalar({type: 'number'})
      });

      var form;
      var onChange;
      var onUpdate;

      function getInputs(form) {
        var result = [];
        var fields = ReactTestUtils.scryRenderedComponentsWithType(form, Field);
        fields.forEach((field) => {
          var input = ReactTestUtils.findRenderedDOMComponentWithTag(field, 'input');
          result.push(input);
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
        ReactTestUtils.Simulate.change(inputs[0], {target: {value: 'hello'}});

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

      it.skip('updates external valiation on corresponding prop change', () => {
        form = render({});
        assert.equal(ReactTestUtils.scryRenderedComponentsWithType(form, Message).length, 0);
        form.setProps({
          externalValidation: Validation.failure(null, {a: Validation.failure('error')})
        });
        assert.equal(ReactTestUtils.scryRenderedComponentsWithType(form, Message).length, 1);
        form.setProps({
          externalValidation: Validation.success
        });
        assert.equal(ReactTestUtils.scryRenderedComponentsWithType(form, Message).length, 0);
      });
    });

  });

});
