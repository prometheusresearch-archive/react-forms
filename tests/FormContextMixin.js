/**
 * @jsx React.DOM
 */
'use strict';

var assert            = require('assert');
var React             = require('react');
var ReactTestUtils    = require('react/lib/ReactTestUtils');
var FormContextMixin  = require('../lib/FormContextMixin');

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

      schema: function() {
        return {schema: 'schema'};
      },

      render: function() {
        return Child({ref: 'child'});
      }
    });

    var Child = React.createClass({
      contextTypes: {
        validation: React.PropTypes.object,
        value: React.PropTypes.object,
        schema: React.PropTypes.object,
        setValue: React.PropTypes.func
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
      assert.deepEqual(child.context.validation, {validationLens: 'validationLens'});
    });

    it('exposes value via context', () => {
      assert.ok(child.context);
      assert.deepEqual(child.context.value, {valueLens: 'valueLens'});
    });

    it('exposes schema via context', () => {
      assert.ok(child.context);
      assert.deepEqual(child.context.schema, {schema: 'schema'});
    });

  });
});
