'use strict';

var assert            = require('assert');
var sinon             = require('sinon');
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

  var schema = Mapping({label: 'Label'}, {
    a: Scalar(),
    b: Scalar()
  });

  var defaultValue = {a: 'a', b: 'b'};
  var onUpdate;
  var _onUpdate;
  var component;

  function renderFieldset(props) {
    var onUpdate = sinon.spy();
    _onUpdate = function(value) {
      component.setProps({value});
      onUpdate.apply(this, arguments);
    }
    var value = Value.create(schema, defaultValue, onUpdate);
    var element = <Fieldset {...props} value={value} />;
    component = ReactTestUtils.renderIntoDocument(element);
  }

  it('renders className', function() {
    renderFieldset();
    assert.ok(component.getDOMNode().classList.contains('rf-Fieldset'));
  });

  it('renders label', function() {
    renderFieldset();
    var label = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'rf-Fieldset__label');
    assert.equal(textContent(label.getDOMNode()), 'Label');
  });

  it('renders no label if noLabel prop is sey', function() {
    renderFieldset({noLabel: true});
    var label = ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'rf-Fieldset__label');
    assert.equal(label.length, 0);
  });

  it('renders fields', function() {
    renderFieldset();
    var fields = ReactTestUtils.scryRenderedComponentsWithType(component, Field);
    assert.equal(fields.length, 2);
  });
});

