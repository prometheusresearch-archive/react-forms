/**
 * @jsx React.DOM
 */
'use strict';

var assert            = require('assert');
var sinon             = require('sinon');
var React             = require('react');
var ReactTestUtils    = require('react/lib/ReactTestUtils');
var Fieldset          = require('../Fieldset');
var Field             = require('../Field');
var Ref               = require('../value/Ref');
var Value             = require('../value/Value');
var {Mapping, Scalar} = require('../value/schema');

function textContent(node) {
  return node.textContent || node.innerText;
}

describe('Fieldset', function() {

  var schema = Mapping({label: 'Label'}, {
    a: Scalar(),
    b: Scalar()
  });

  var defaultValue = {a: 'a', b: 'b'};
  var onUpdate;

  function renderFieldset() {
    var onUpdate = sinon.spy();
    var value = Value.create(schema, defaultValue);
    var ref = Ref.create(value, onUpdate);
    var element = <Fieldset value={ref} />;
    return ReactTestUtils.renderIntoDocument(element);
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

