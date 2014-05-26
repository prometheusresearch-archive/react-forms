/**
 * @jsx React.DOM
 */
'use strict';

var assert           = require('assert');
var sinon            = require('sinon');
var React            = require('react');
var ReactTestUtils   = require('react/lib/ReactTestUtils');
var FormElementMixin = require('../FormElementMixin');
var schema           = require('../schema');
var lens             = require('../lens');
var success          = require('../validation').success;

describe('forms', () => {

  describe('FormElementMixin', () => {

    var Form = React.createClass({

      childContextTypes: {
        validationLens: React.PropTypes.object,
        valueLens: React.PropTypes.object,
        serializedValueLens: React.PropTypes.object,
        schema: React.PropTypes.object,
        onValueUpdate: React.PropTypes.func
      },

      getChildContext: function() {
        return {
          validationLens: lens(this.props.validation),
          valueLens: lens(this.props.value),
          serializedValueLens: lens(this.props.value),
          schema: this.props.schema,
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

    var onValueUpdate, form, component;

    beforeEach(() => {
      onValueUpdate = sinon.spy();
      form = ReactTestUtils.renderIntoDocument(Form({
        onValueUpdate,
        validation: success,
        value: {name: 'val'},
        schema: schema.Schema(null, schema.Property({name: 'name'}))
      }));
      component = form.refs.component;
    });

    it('allows access to schema via schema()', () => {
      var s = component.schema();
      assert.equal(s.name, 'name');
    });

    it('allows access to value via valueLens()', () => {
      var v = component.valueLens().val();
      assert.equal(v, 'val');
    });

    it('allows access to validation state via validationLens()', () => {
      var v = component.validationLens().val();
      assert.deepEqual(v, {validation: {}, children: {}});
    });

    it('allows updateing value via updateValue()', () => {
      component.updateValue('string');
      assert.equal(onValueUpdate.callCount, 1);
      var args = onValueUpdate.firstCall.args;
      var value = args[0];
      var validation = args[1];
      var serializedValue = args[2];
      assert.deepEqual(value, {name: 'string'});
      assert.deepEqual(validation, 
        {
          validation: {},
          children: {
            name: {
              children: {},
              validation: {failure: undefined}
            }
          }
        }
      );
      assert.deepEqual(serializedValue, {name: 'string'});
    });

  });

});
