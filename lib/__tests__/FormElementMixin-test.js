/**
 * @jsx React.DOM
 */
'use strict';

var assert           = require('assert');
var sinon            = require('sinon');
var React            = require('react');
var ReactTestUtils   = require('react/lib/ReactTestUtils');
var FormElementMixin = require('../FormElementMixin');
var Value            = require('../Value');
var s                = require('../schema');

var Schema = s.Schema;
var Property = s.Property;

describe('forms', () => {

  describe('FormElementMixin', () => {

    var Form = React.createClass({

      childContextTypes: FormElementMixin.contextTypes,

      getChildContext: function() {
        return {
          value: this.props.value,
          onValueUpdate: this.props.onValueUpdate
        };
      },

      render: function() {
        return <Component name="name" ref="component" />;
      }

    });

    var Component = React.createClass({
      mixins: [FormElementMixin],

      render: function() {
        return <div />;
      }
    });

    var onValueUpdate, form, component, schema;

    beforeEach(() => {
      onValueUpdate = sinon.spy();
      schema = <Schema><Property name="name" /></Schema>;
      form = ReactTestUtils.renderIntoDocument(Form({
        onValueUpdate,
        value: Value({schema, value: {name: 'val'}})
      }));
      component = form.refs.component;
    });

    it('allows access to value via value()', () => {
      var value = component.value();
      assert.equal(value.value, 'val');
      assert.equal(value.schema, schema.children.name);
      assert.deepEqual(value.path, ['name']);
    });

    it('notifies controller component via onValueUpdate()', () => {
      var value = component.value();
      var updated = value.updateSerialized('val2');
      component.onValueUpdate(updated);
      sinon.assert.calledOnce(onValueUpdate);
      var notified = onValueUpdate.firstCall.args[0];
      assert.deepEqual(notified.value, updated.value);
      assert.deepEqual(notified.serializedValue, updated.serializedValue);
    });

  });

});
