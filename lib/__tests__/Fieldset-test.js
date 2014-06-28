/**
 * @jsx React.DOM
 */
'use strict';

var assert         = require('assert');
var React          = require('react');
var ReactTestUtils = require('react/lib/ReactTestUtils');
var Fieldset       = require('../Fieldset');
var Value          = require('../Value');
var s              = require('../schema');

var Schema    = s.Schema;
var Property  = s.Property;

function textContent(node) {
  return node.textContent || node.innerText;
}

describe('Fieldset', function() {

  var schema = (
    <Schema label="Label">
      <Property name="a" />
      <Property name="b" />
    </Schema>
  );

  var value = {a: 'a', b: 'b'};

  function renderFieldset(s, v) {
    return React.withContext({value: Value({schema: s || schema, value: v || value})}, function() {
      return ReactTestUtils.renderIntoDocument(Fieldset()); 
    });
  }

  it('renders label', function() {
    var fieldset = renderFieldset();
    var label = ReactTestUtils.findRenderedDOMComponentWithClass(fieldset, 'rf-Fieldset__label');
    assert.equal(textContent(label.getDOMNode()), 'Label');
  });

  it('renders fields', function() {
    var fieldset = renderFieldset();
    var inputs = ReactTestUtils.scryRenderedDOMComponentsWithTag(fieldset, 'input');
    assert.equal(inputs.length, 2);
  });
});

