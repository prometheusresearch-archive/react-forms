'use strict';

var {is, fromJS}      = require('immutable');
var assert            = require('assert');
var React             = require('react');
var ReactTestUtils    = require('react/lib/ReactTestUtils');
var sinon             = require('sinon');
var Form              = require('../Form');
var Field             = require('../Field');
var Message           = require('../Message');
var {Mapping, Scalar} = require('../schema');
var ValidationResult  = require('../ValidationResult');

function assertEquals(a, b) {
  a = fromJS(a);
  b = fromJS(b);
  assert.ok(is(a, b), `expected ${a} to be equal to ${b}`);
}

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
        return ReactTestUtils.renderIntoDocument(<Form {...props} />);
      }

      it('allows to specify default value via defaultValue prop', () => {
        form = render({defaultValue: {a: 'a', b: 1}});
        assert.deepEqual(form.getValue(), fromJS({a: 'a', b: 1}));
        var inputs = getInputs(form);
        ReactTestUtils.Simulate.change(inputs[0], {target: {value: 'hello'}});

        assertEquals(form.getValue(), {a: 'hello', b: 1});

        assert.equal(onUpdate.callCount, 1);
        assertEquals(onUpdate.lastCall.args[0], {a: 'hello', b: 1});

        assert.equal(onChange.callCount, 1);
        assertEquals(onChange.lastCall.args[0], {a: 'hello', b: 1});
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
        form = render({component: 'div'});
        assert.equal(form.getDOMNode().tagName, 'DIV');
      });

      it('updates external valiation on corresponding prop change', () => {
        form = render({});
        assert.equal(ReactTestUtils.scryRenderedComponentsWithType(form, Message).length, 0);
        form.setProps({
          externalValidation: ValidationResult.children({a: ValidationResult.error('error')})
        });
        assert.equal(ReactTestUtils.scryRenderedComponentsWithType(form, Message).length, 1);
        form.setProps({
          externalValidation: ValidationResult.success()
        });
        assert.equal(ReactTestUtils.scryRenderedComponentsWithType(form, Message).length, 0);
      });
    });

  });

});
