/**
 * @jsx React.DOM
 */
'use strict';

var assert            = require('assert');
var React             = require('react');
var merge             = require('react/lib/merge');
var ReactTestUtils    = require('react/lib/ReactTestUtils');
var sinon             = require('sinon');
var Fieldset          = require('../Fieldset');
var FormValue         = require('../FormValue');
var schema            = require('../schema');

var Schema    = schema.Schema;
var Property  = schema.Property;

describe('Fieldset', function() {

  var schema = (
    <Schema label="Label">
      <Property name="a" />
      <Property name="b" />
    </Schema>
  );

  var value = {a: 'a', b: 'b'};

  function renderFieldset(s, v) {
    return React.withContext({value: FormValue(s || schema, v || value)}, function() {
      return ReactTestUtils.renderIntoDocument(Fieldset()); 
    });
  }

  it('renders label', function() {
    var fieldset = renderFieldset();
    var label = ReactTestUtils.findRenderedDOMComponentWithTag(fieldset, 'h4');
    assert.equal(label.getDOMNode().innerHTML, 'Label');
  });

  it('renders fields', function() {
    var fieldset = renderFieldset();
    var inputs = ReactTestUtils.scryRenderedDOMComponentsWithTag(fieldset, 'input');
    assert.equal(inputs.length, 2);
  });
});

