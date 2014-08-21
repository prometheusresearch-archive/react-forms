/**
 * @jsx React.DOM
 */
'use strict';

var assert            = require('assert');
var React             = require('react');
var ReactTestUtils    = require('react/lib/ReactTestUtils');
var Fieldset          = require('../Fieldset');
var Field             = require('../Field');
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

  function renderFieldset() {
    var value = Value(schema, value);
    var component = Fieldset({value});
    return ReactTestUtils.renderIntoDocument(component);
  }

  it('renders className', function() {
    var fieldset = renderFieldset();
    assert.ok(fieldset.getDOMNode().classList.contains('rf-Fieldset'));
  });

  it('renders label', function() {
    var fieldset = renderFieldset();
    var label = ReactTestUtils.findRenderedDOMComponentWithClass(fieldset, 'rf-Fieldset__label');
    assert.equal(textContent(label.getDOMNode()), 'Label');
  });

  it('renders fields', function() {
    var fieldset = renderFieldset();
    var fields = ReactTestUtils.scryRenderedComponentsWithType(fieldset, Field);
    assert.equal(fields.length, 2);
  });
});

