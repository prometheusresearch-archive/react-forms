/**
 * @jsx React.DOM
 */
'use strict';

var assert            = require('assert');
var React             = require('react');
var ReactTestUtils    = require('react/lib/ReactTestUtils');
var Fieldset          = require('../Fieldset');
var Value             = require('../Value');
var {Mapping, Scalar} = require('../schema');

function textContent(node) {
  return node.textContent || node.innerText;
}

describe('Fieldset', function() {

  var schema = (
    <Mapping label="Label">
      <Scalar name="a" />
      <Scalar name="b" />
    </Mapping>
  );

  var value = {a: 'a', b: 'b'};

  function renderFieldset(s, v) {
    var component = Fieldset({value: Value({schema: s || schema, value: v || value})});;
    return ReactTestUtils.renderIntoDocument(component); 
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

