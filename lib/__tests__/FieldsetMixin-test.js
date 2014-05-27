/**
 * @jsx React.DOM
 */
'use strict';

var assert            = require('assert');
var React             = require('react');
var ReactTestUtils    = require('react/lib/ReactTestUtils');
var sinon             = require('sinon');
var FieldsetMixin     = require('../FieldsetMixin');
var FormValue         = require('../FormValue');
var schema            = require('../schema');

var Schema    = schema.Schema;
var Property  = schema.Property;

describe('FieldsetMixin', function() {

  describe('renderField()', function() {

    var Fieldset = React.createClass({
      mixins: [FieldsetMixin],

      render: function() {
        return this.renderField(this.value().schema.children.name);
      }

    });

    it('allows to render a form component for a field', function() {
      var fieldset = React.withContext({
        value: FormValue(
          <Schema><Property name="name" /></Schema>,
          {name: 'value'})
      }, () => ReactTestUtils.renderIntoDocument(Fieldset()));
      var node = fieldset.getDOMNode().firstChild;
      assert.equal(node.tagName, 'INPUT');
      assert.equal(node.value, 'value');
      assert.equal(node.name, 'name');
    });
  });
});
