/**
 * @jsx React.DOM
 */
'use strict';

var assert            = require('assert');
var React             = require('react');
var cloneWithProps    = require('react/lib/cloneWithProps');
var ReactTestUtils    = require('react/lib/ReactTestUtils');
var sinon             = require('sinon');
var FormContextMixin  = require('../lib/FormContextMixin');
var Field             = require('../lib/Field');
var validation        = require('../lib/validation');
var schema            = require('../lib/schema');
var Lens              = require('../lib/Lens');

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
        return Lens.make(42);
      },

      validationLens: function() {
        return Lens.make(validation.validate(this.schema(), this.valueLens().val()));
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
        {validation: {failure: undefined}, isSuccess: true, isFailure: false, children: {}}
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
        var label = ReactTestUtils.findRenderedDOMComponentWithTag(form, 'label');
        assert.strictEqual(label.getDOMNode().innerHTML, value);
      }

      it('renders no label if no label is provided via schema or props', () => {
        var form = ReactTestUtils.renderIntoDocument(Form({
          field: Field()
        }));
        var labels = ReactTestUtils.scryRenderedDOMComponentsWithTag(form, 'label');
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
  });
});
