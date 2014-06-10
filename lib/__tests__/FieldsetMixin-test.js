/**
 * @jsx React.DOM
 */
'use strict';

var React             = require('react');
var ReactTestUtils    = require('react/lib/ReactTestUtils');
var FieldsetMixin     = require('../FieldsetMixin');
var Value             = require('../Value');
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
        value: Value(
          <Schema><Property name="name" /></Schema>,
          {name: 'value'})
      }, () => ReactTestUtils.renderIntoDocument(Fieldset()));
      ReactTestUtils.findRenderedDOMComponentWithClass(fieldset, 'rf-Field');
    });
  });
});
