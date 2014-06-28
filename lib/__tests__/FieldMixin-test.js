/**
 * @jsx React.DOM
 */
'use strict';

var assert         = require('assert');
var sinon          = require('sinon');
var React          = require('react');
var ReactTestUtils = require('react/lib/ReactTestUtils');
var FieldMixin     = require('../FieldMixin');
var Value          = require('../Value');
var s              = require('../schema');

var Property = s.Property;

describe('FieldMixin', function() {

  var onValueUpdate;
  var field;

  var schema = <Property />;

  var Field = React.createClass({
    mixins: [FieldMixin],

    render: function() {
      return this.renderInputComponent();
    }
  });

  beforeEach(function() {
    onValueUpdate = sinon.spy();
    React.withContext({value: Value({schema, value: 'value'}), onValueUpdate}, function() {
      field = ReactTestUtils.renderIntoDocument(Field());
    });
  });

  it('renders input component', function() {
    var input = ReactTestUtils.findRenderedDOMComponentWithTag(field, 'input');
    assert.equal(input.getDOMNode().value, 'value');
  });

  it('rendered input components reacts on value change', function() {
    var input = ReactTestUtils.findRenderedDOMComponentWithTag(field, 'input');
    input.getDOMNode().value = 'newvalue';
    ReactTestUtils.Simulate.change(input);
    assert.strictEqual(onValueUpdate.callCount, 1);
    assert.deepEqual(onValueUpdate.firstCall.args, [
      Value({schema, value: 'newvalue'})
    ]);
  });

});
