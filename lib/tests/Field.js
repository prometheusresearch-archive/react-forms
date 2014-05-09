/**
 * @jsx React.DOM
 */
'use strict';

var assert            = require('assert');
var React             = require('react');
var cloneWithProps    = require('react/lib/cloneWithProps');
var ReactTestUtils    = require('react/lib/ReactTestUtils');
var sinon             = require('sinon');
var FormContextMixin  = require('../FormContextMixin');
var Field             = require('../Field');
var validation        = require('../validation');
var schema            = require('../schema');
var lens              = require('../lens');

describe('forms', () => {

  describe('Field', () => {

    var onValueUpdate;

    var Form = React.createClass({
      mixins: [FormContextMixin],

      childContextTypes: {
        onValueUpdate: React.PropTypes.func
      },

      getChildContext: function() {
        return {onValueUpdate};
      },

      schema: function() {
        return (
          this.props.schema ||
          schema.Property()
        );
      },

      valueLens: function() {
        return lens(42);
      },

      validationLens: function() {
        return lens(validation.validate(this.schema(), this.valueLens().val()).validation);
      },

      serializedValueLens: function() {
        return lens(42);
      },

      render: function() {
        return cloneWithProps(this.props.field, {});
      }
    });

    beforeEach(() => {
      onValueUpdate = sinon.spy();
    });

    it('reacts on onChange event', () => {
      var form = Form({field: Field()});
      form = ReactTestUtils.renderIntoDocument(form);
      var input = ReactTestUtils.findRenderedDOMComponentWithTag(form, 'input');
      input.getDOMNode().value = 'newvalue';
      ReactTestUtils.Simulate.change(input);
      assert.strictEqual(onValueUpdate.callCount, 1);
      assert.deepEqual(onValueUpdate.firstCall.args, [
        'newvalue',
        {validation: {failure: undefined}},
        'newvalue'
      ]);
    });

    describe('input rendering', () => {

      it('renders into <input /> by default', () => {
        var form = Form({field: Field()});
        form = ReactTestUtils.renderIntoDocument(form);
        var input = ReactTestUtils.findRenderedDOMComponentWithTag(form, 'input');
        assert.strictEqual(input.getDOMNode().value, '42');
      });

      it('renders into component injected via schema', () => {
        var field = Field();
        var form = Form({
          field: Field(),
          schema: schema.Property({input: <textarea />})
        });
        form = ReactTestUtils.renderIntoDocument(form);
        var input = ReactTestUtils.findRenderedDOMComponentWithTag(form, 'textarea');
        assert.strictEqual(input.getDOMNode().value, '42');
      });

      it('renders into component injected via props', () => {
        var field = Field();
        var form = Form({
          field: Field({input: <textarea />})
        });
        form = ReactTestUtils.renderIntoDocument(form);
        var input = ReactTestUtils.findRenderedDOMComponentWithTag(form, 'textarea');
        assert.strictEqual(input.getDOMNode().value, '42');
      });
    });

    describe('label rendering', () => {

      function assertLabel(form, value) {
        var label = ReactTestUtils.findRenderedDOMComponentWithClass(form, 'react-forms-label');
        var node = label.getDOMNode();
        assert.strictEqual((node.textContent || node.innerText).trim(), value);
      }

      it('renders no label if no label is provided via schema or props', () => {
        var form = ReactTestUtils.renderIntoDocument(Form({
          field: Field()
        }));
        var labels = ReactTestUtils.scryRenderedDOMComponentsWithClass(form, 'react-forms-label');
        assert.strictEqual(labels.length, 0);
      });

      it('renders label via schema', () => {
        var form = ReactTestUtils.renderIntoDocument(Form({
          field: Field(),
          schema: schema.Property({label: 'label via schema'})
        }));
        assertLabel(form, 'label via schema');
      });

      it('renders label passed via props', () => {
        var form = ReactTestUtils.renderIntoDocument(Form({
          field: Field({label: 'label via props'})
        }));
        assertLabel(form, 'label via props');
      });
    });

    describe('hint rendering', () => {

      function assertHint(form, value) {
        var hint = ReactTestUtils.findRenderedDOMComponentWithClass(form, 'react-forms-hint');
        var node = hint.getDOMNode();
        assert.strictEqual((node.textContent || node.innerText).trim(), value);
      }

      it('renders no hint if no hint is provided via schema or props', () => {
        var form = ReactTestUtils.renderIntoDocument(Form({
          field: Field()
        }));
        var hints = ReactTestUtils.scryRenderedDOMComponentsWithClass(form, 'react-forms-hint');
        assert.strictEqual(hints.length, 0);
      });

      it('renders hint via schema', () => {
        var form = ReactTestUtils.renderIntoDocument(Form({
          field: Field(),
          schema: schema.Property({hint: 'hint via schema'})
        }));
        assertHint(form, 'hint via schema');
      });

      it('renders hint passed via props', () => {
        var form = ReactTestUtils.renderIntoDocument(Form({
          field: Field({hint: 'hint via props'})
        }));
        assertHint(form, 'hint via props');
      });
    });
  });
});
