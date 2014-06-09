/**
 * @jsx React.DOM
 */
'use strict';

var assert                = require('assert');
var React                 = require('react');
var merge                 = require('react/lib/merge');
var ReactTestUtils        = require('react/lib/ReactTestUtils');
var FormMixin             = require('../FormMixin');
var Value                 = require('../Value');
var FormContextMixin      = require('../FormContextMixin');
var schema                = require('../schema');
var validation            = require('../validation');
var Property              = schema.Property;

describe('forms', () => {

  describe('FormMixin', () => {

    var Component = React.createClass({
      contextTypes: FormContextMixin.ContextTypes,

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

    var form;
    var renderedCount;

    function assertRenderedCount(num) {
      assert.equal(renderedCount, num);
    }

    function assertValid(form) {
      assert.ok(validation.isSuccess(form.value().validation));
    }

    function assertInvalid(form) {
      assert.ok(validation.isFailure(form.value().validation));
    }

    function makeValue(value) {
      return Value(form.props.schema, value);
    }

    function renderForm(props) {
      renderedCount = 0;
      props = merge({
        schema: <Property validate={(v) => v > 0} />
      }, props);
      form = ReactTestUtils.renderIntoDocument(Form(props));
      return form;
    }

    afterEach(() => {
      renderedCount = 0;
      form = null;
    });

    describe('value', () => {

      it('allows accessing value', () => {
        renderForm({value: 'value'});
        assert.deepEqual(form.value().value, 'value');
      });

      it('responds when updating value', () => {
        renderForm();
        form.onValueUpdate(makeValue(10));
        assert.deepEqual(form.value().value, 10);
        assertValid(form);
        assertRenderedCount(2);
      });

      it('is in invalid state if invalid value was passed', () => {
        renderForm({value: -1});
        assertInvalid(form);
      });

      it('uses default value from schema if not valid value was passed', () => {
        renderForm({schema: <Property defaultValue="125" />});
        assert.deepEqual(form.value().value, "125");
      });

      it('uses defaultValue to get value from if no value was passed', () => {
        renderForm({defaultValue: 11});
        assertValid(form);
        assert.deepEqual(form.value().value, 11);
      });
    });

    describe('receiving new value via props', () => {

      it('stores new value', () => {
        renderForm();
        form.setProps({value: 1});
        assert.deepEqual(form.value().value, 1);
      });

      it('validates new value', () => {
        renderForm({value: 'value'});
        assertInvalid(form);
        form.setProps({value: 1});
        assertValid(form);
      });

    });

    describe('updating value', () => {

      it('allows updating form value programmatically', () => {
        renderForm();
        form.updateValue(1);
        assert.deepEqual(form.value().value, 1);
      });

    });

    describe('externalValidation', () => {

      it('has externalValidation as valid by default', () => {
        renderForm();
        assert.ok(validation.isSuccess(form.externalValidation()));
      });

      it('allows passing external validation via prop', () => {
        var externalValidation = {validation: {failure: 'not ok'}};
        renderForm({externalValidation});
        assert.ok(validation.isFailure(form.externalValidation()));
        assert.deepEqual(form.externalValidation(), externalValidation);
      });

    });

    describe('context', () => {

      it('exposes onValueUpdate function via context', () => {
        renderForm();
        assert.ok(form.refs.component.context);
        assert.ok(form.refs.component.context.onValueUpdate);
      });

      it('exposes value via context', () => {
        renderForm();
        assert.ok(form.refs.component.context);
        assert.ok(form.refs.component.context.value);
      });
    });

  });
});
