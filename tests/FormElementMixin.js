/**
 * @jsx React.DOM
 */
'use strict';

var assert           = require('assert');
var sinon            = require('sinon');
var React            = require('react');
var ReactTestUtils   = require('react/lib/ReactTestUtils');
var FormElementMixin = require('../lib/FormElementMixin');
var validation       = require('../lib/validation');
var schema           = require('../lib/schema');
var Lens             = require('../lib/Lens');

describe('forms', () => {

  describe('FormElementMixin', () => {

    var Form = React.createClass({

      childContextTypes: {
        validation: React.PropTypes.object,
        value: React.PropTypes.object,
        schema: React.PropTypes.object,
        onValueUpdate: React.PropTypes.func
      },

      getChildContext: function() {
        return {
          validation: Lens.make(this.props.validation),
          value: Lens.make(this.props.value),
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
        validation: {},
        value: {name: 'val'},
        schema: schema.Schema(null, schema.Property({name: 'name'}))
      }));
      component = form.refs.component;
    });

    it('allows access to schema via schema()', () => {
      var s = component.schema();
      assert.equal(s.name, 'name');
    });

    it('allows access to schema via value()', () => {
      var v = component.value();
      assert.equal(v, 'val');
    });

    it('allows access to validation state via validation()', () => {
      var v = component.validation();
      assert.deepEqual(v, {});
    });

    it('allows updateing value via updateValue()', () => {
      component.updateValue('string');
      assert.equal(onValueUpdate.callCount, 1);
      var args = onValueUpdate.firstCall.args;
      var value = args[0];
      var validation = args[1];
      assert.deepEqual(value, {name: 'string'});
      assert.deepEqual(validation, 
        {
          isSuccess: true,
          isFailure: false,
          children: {
            name: {
              isSuccess: true,
              isFailure: false,
              children: {},
              validation: {failure: undefined}
            }
          }
        }
      );
    });

  });

});
