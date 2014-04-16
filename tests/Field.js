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
        return schema.Property();
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

    it('renders into <input /> by default', () => {
      var field = Field();
      var form = Form({field});
      form = ReactTestUtils.renderIntoDocument(form);
      var input = ReactTestUtils.findRenderedDOMComponentWithTag(form, 'input');
      assert.equal(input.getDOMNode().value, 42);
    });

    it('reacts on onChange event', () => {
      var field = Field();
      var form = Form({field});
      form = ReactTestUtils.renderIntoDocument(form);
      var input = ReactTestUtils.findRenderedDOMComponentWithTag(form, 'input');
      input.getDOMNode().value = 'newvalue';
      ReactTestUtils.Simulate.change(input);
      assert.equal(onValueUpdate.callCount, 1);
      assert.deepEqual(onValueUpdate.firstCall.args, [
        'newvalue',
        {validation: {failure: undefined}, isSuccess: true, isFailure: false}
      ]);
    });
  });
});
