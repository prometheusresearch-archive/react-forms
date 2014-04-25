/**
 * @jsx React.DOM
 */
'use strict';

var assert                = require('assert');
var sinon                 = require('sinon');
var React                 = require('react');
var ReactTestUtils        = require('react/lib/ReactTestUtils');
var FormMixin             = require('../FormMixin');
var schema                = require('../schema');
var validation            = require('../validation');
var Property              = schema.Property;

describe('forms', () => {

  describe('FormMixin', () => {

    var Component = React.createClass({
      contextTypes: {
        onValueUpdate: React.PropTypes.func
      },

      render: function() {
        return React.DOM.div();
      }
    });

    var Form = React.createClass({
      mixins: [FormMixin],
      render: function() {
        renderedCount += 1;
        return Component({ref: 'component'});
      }
    });

    var form, onChange, onUpdate;
    var renderedCount;

    function assertRenderedCount(num) {
      assert.equal(renderedCount, num);
    }

    function assertValid(form) {
      assert.ok(form.state.validation.isSuccess);
    }

    function assertInvalid(form) {
      assert.ok(form.state.validation.isFailure);
    }

    beforeEach(() => {
      renderedCount = 0;
      onChange = sinon.spy();
      onUpdate = sinon.spy();
      form = ReactTestUtils.renderIntoDocument(Form({
        value: 'value',
        schema: <Property validate={(v) => v > 0} />,
        onChange, onUpdate
      }));
    });

    describe('validation', () => {

      it('has validation', () => {
        assert.ok(form.validation());
        assertInvalid(form);
      });
    });

    describe('value', () => {

      it('has value', () => {
        assert.deepEqual(form.value(), 'value');
      });

      it('has valueLens', () => {
        assert.deepEqual(form.valueLens().val(), 'value');
      });

      it('responds when updating value', () => {
        form.onValueUpdate(1, validation.success);
        assert.deepEqual(form.value(), 1);
        assertValid(form);
        assertRenderedCount(2);
      });
    });

    describe('receiving new value via props', () => {

      it('stores new value', () => {
        form.setProps({value: 1});
        assert.deepEqual(form.value(), 1);
      });

      it('validates new value', () => {
        assertInvalid(form);
        form.setProps({value: 1});
        assertValid(form);
      });

    });

    describe('callbacks', () => {

      it('calls onUpdate on new value', () => {
        form.onValueUpdate(1, validation.success);
        assertValid(form);
        assert.equal(onUpdate.callCount, 1);
        assert.deepEqual(
          onUpdate.firstCall.args,
          [1, {isSuccess: true, isFailure: false, children: {}}]
        );
      });

      it('calls onUpdate on new invalid value', () => {
        form.onValueUpdate(-1, validation.failure('invalid value'));
        assertInvalid(form);
        assert.equal(onUpdate.callCount, 1);
        assert.deepEqual(
          onUpdate.firstCall.args,
          [-1, {validation: {failure: 'invalid value'}, isSuccess: false, isFailure: true}]
        );
      });

      it('calls onChange on new value', () => {
        form.onValueUpdate(1, validation.success);
        assertValid(form);
        assert.equal(onChange.callCount, 1);
        assert.deepEqual(
          onChange.firstCall.args,
          [1, {isSuccess: true, isFailure: false, children: {}}]
        );
      });

      it('does not call onChange on new invalid value', () => {
        form.onValueUpdate(-1, validation.failure('invalid value'));
        assertInvalid(form);
        assert.equal(onChange.callCount, 0);
      });
    });

    describe('context', () => {

      it('exposes onValueUpdate function via context', () => {
        assert.ok(form.refs.component.context);
        assert.ok(form.refs.component.context.onValueUpdate);
      });
    });

  });
});
