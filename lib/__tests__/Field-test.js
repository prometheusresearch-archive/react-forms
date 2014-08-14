/**
 * @jsx React.DOM
 */
'use strict';

var assert          = require('assert');
var React           = require('react');
var merge           = require('react/lib/merge');
var cloneWithProps  = require('react/lib/cloneWithProps');
var ReactTestUtils  = require('react/lib/ReactTestUtils');
var sinon           = require('sinon');
var Value           = require('../Value');
var Field           = require('../Field');
var {Scalar}        = require('../schema');

describe('forms', () => {

  describe('Field', () => {

    var onUpdate;
    var component;

    beforeEach(() => {
      onUpdate = sinon.spy();
    });

    function renderComponent(props) {
      props = props || {};
      var value = Value({
        schema: props.schema || <Scalar />,
        value: props.value || 'value',
        externalValidation: props.externalValidation,
        onUpdate: onUpdate
      });
      var field = Field(merge(props, {value}));

      component = ReactTestUtils.renderIntoDocument(field);
      return component;
    }

    function getInput(component) {
    }

    it('reacts on onChange event', () => {
      renderComponent();
      var input = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'input');
      input.getDOMNode().value = 'newvalue';
      ReactTestUtils.Simulate.change(input);
      assert.strictEqual(onUpdate.callCount, 1);
      var updated = onUpdate.firstCall.args[0];
      assert.deepEqual(updated.value, 'newvalue');
    });

    describe('input rendering', () => {

      it('renders into <input /> by default', () => {
        renderComponent({
          value: 42
        });
        var input = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'input');
        assert.strictEqual(input.getDOMNode().value, '42');
      });

      it('renders into component injected via schema', () => {
        renderComponent({
          schema: <Scalar input={<textarea />} />,
          value: 42
        });
        var input = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'textarea');
        assert.strictEqual(input.getDOMNode().value, '42');
      });

      it('renders into component injected via props', () => {
        renderComponent({
          input: <textarea />,
          value: 42
        });
        var input = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'textarea');
        assert.strictEqual(input.getDOMNode().value, '42');
      });
    });

    describe('label rendering', () => {

      function assertLabel(value) {
        var label = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'rf-Label');
        var node = label.getDOMNode();
        assert.strictEqual((node.textContent || node.innerText).trim(), value);
      }

      it('renders no label if no label is provided via schema or props', () => {
        renderComponent();
        var labels = ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'rf-Label');
        assert.strictEqual(labels.length, 0);
      });

      it('renders label via schema', () => {
        renderComponent({
          schema: <Scalar label="label via schema" />
        });
        assertLabel('label via schema');
      });

      it('renders label passed via props', () => {
        renderComponent({
          label: 'label via props'
        });
        assertLabel('label via props');
      });
    });

    describe('validation rendering', () => {

      function assertMessages(values) {
        var messages = ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'rf-Message');
        assert.equal(messages.length, values.length);
        values.forEach((value, idx) => {
          var node = messages[idx].getDOMNode();
          assert.strictEqual((node.textContent || node.innerText).trim(), value);
        });
      }

      it('renders no validation errors if value is valid', () => {
        renderComponent();
        assertMessages([]);
      });

      it.skip('renders no validation error if value is invalid but not dirtied');

      it('renders a validation error if value is invalid and dirtied', () => {
        renderComponent({
          value: 'some',
          schema: <Scalar validate={(value) => 'validation.failure'} />
        });
        assertMessages(['validation.failure']);
      });

      it('renders an external validation error', () => {
        renderComponent({
          externalValidation: {
            validation: {failure: 'externalValidation.failure'}
          }
        });
        assertMessages(['externalValidation.failure']);
      });

      it.skip('renders only external validation error if value is invalid but not dirtied');

      it('renders both validation error and external validation error if value is invalid', () => {
        renderComponent({
          value: 'some',
          schema: <Scalar validate={(value) => 'validation.failure'} />,
          externalValidation: {
            validation: {failure: 'externalValidation.failure'}
          }
        });
        assertMessages(['externalValidation.failure', 'validation.failure']);
      });

      it('renders a dirty className if value is valid or invalid and dirtied', () => {
        renderComponent({
          value: 'some'
        });

        var validDirtied = ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'rf-Field--dirty');
        assert.strictEqual(validDirtied.length, 1);

        renderComponent({
          value: 'some',
          schema: <Scalar validate={(value) => false} />
        });

        var dirtied = ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'rf-Field--dirty');
        assert.strictEqual(dirtied.length, 1);
      });
    });

    describe('hint rendering', () => {

      function assertHint(form, value) {
        var hint = ReactTestUtils.findRenderedDOMComponentWithClass(form, 'rf-Hint');
        var node = hint.getDOMNode();
        assert.strictEqual((node.textContent || node.innerText).trim(), value);
      }

      it('renders no hint if no hint is provided via schema or props', () => {
        renderComponent();
        var hints = ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'rf-Hint');
        assert.strictEqual(hints.length, 0);
      });

      it('renders hint via schema', () => {
        renderComponent({
          schema: <Scalar hint="hint via schema" />
        });
        assertHint(component, 'hint via schema');
      });

      it('renders hint passed via props', () => {
        renderComponent({
          hint: 'hint via props'
        });
        assertHint(component, 'hint via props');
      });
    });
  });
});
