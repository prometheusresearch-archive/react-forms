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

      value: function() {
        return {value: 'value'};
      },

      onValueUpdate: function() {
        return {onValueUpdate: 'onValueUpdate'};
      },

      render: function() {
        return Child({ref: 'child'});
      }
    });

    var Child = React.createClass({
      contextTypes: FormContextMixin.ContextTypes,

      render: function() {
        return React.DOM.div();
      }
    });

    var parent, child;

    beforeEach(() => {
      parent = ReactTestUtils.renderIntoDocument(Parent());
      child = parent.refs.child;
    });

    it('exposes value via context', () => {
      assert.ok(child.context);
      assert.deepEqual(child.context.value, {value: 'value'});
    });

    it('exposes onValueUpdate via context', () => {
      assert.ok(child.context);
      assert.ok(child.context.onValueUpdate);
    });

  });
});
