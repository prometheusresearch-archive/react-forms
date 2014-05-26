/**
 * @jsx React.DOM
 */
'use strict';

var assert            = require('assert');
var React             = require('react');
var ReactTestUtils    = require('react/lib/ReactTestUtils');
var FormContextMixin  = require('../FormContextMixin');

describe('forms', () => {

  describe('FormContextMixin', () => {

    var Parent = React.createClass({
      mixins: [FormContextMixin],

      valueLens: function() {
        return {valueLens: 'valueLens'};
      },

      validationLens: function() {
        return {validationLens: 'validationLens'};
      },

      externalValidation: function() {
        return {externalValidation: 'externalValidation'};
      },

      serializedValueLens: function() {
        return {serializedValueLens: 'serializedValueLens'};
      },

      schema: function() {
        return {schema: 'schema'};
      },

      render: function() {
        return Child({ref: 'child'});
      }
    });

    var Child = React.createClass({
      contextTypes: {
        validationLens: React.PropTypes.object,
        valueLens: React.PropTypes.object,
        schema: React.PropTypes.object,
        externalValidation: React.PropTypes.object
      },

      render: function() {
        return React.DOM.div();
      }
    });

    var parent, child;

    beforeEach(() => {
      parent = ReactTestUtils.renderIntoDocument(Parent());
      child = parent.refs.child;
    });


    it('exposes validation via context', () => {
      assert.ok(child.context);
      assert.deepEqual(child.context.validationLens, {validationLens: 'validationLens'});
    });

    it('exposes externalValidation via context', () => {
      assert.ok(child.context);
      assert.deepEqual(child.context.externalValidation, {externalValidation: 'externalValidation'});
    });

    it('exposes value via context', () => {
      assert.ok(child.context);
      assert.deepEqual(child.context.valueLens, {valueLens: 'valueLens'});
    });

    it('exposes schema via context', () => {
      assert.ok(child.context);
      assert.deepEqual(child.context.schema, {schema: 'schema'});
    });

  });
});
