/**
 * @jsx React.DOM
 */
'use strict';

var assert            = require('assert');
var sinon             = require('sinon');
var React             = require('react');
var ReactTestUtils    = require('react/lib/ReactTestUtils');
var RepeatingFieldset = require('../RepeatingFieldset');
var Field             = require('../Field');
var {List, Scalar}    = require('../value/schema');
var Value             = require('../value/Value');
var Ref               = require('../value/Ref');

function textContent(node) {
  return node.textContent || node.innerText;
}

describe('forms', () => {

  describe('RepeatingFieldset', () => {

    var component;
    var onAdd;
    var onRemove;
    var onUpdate;

    var schema = List({label: 'Label'}, Scalar());

    function getAddButton() {
      return ReactTestUtils.findRenderedDOMComponentWithClass(
        component,
        'rf-RepeatingFieldset__add'
      );
    }

    function getRemoveButtons() {
      return ReactTestUtils.scryRenderedDOMComponentsWithClass(
        component,
        'rf-RepeatingFieldset__remove'
      );
    }

    beforeEach(() => {
      onAdd = sinon.spy();
      onRemove = sinon.spy();
      onUpdate = sinon.spy();
      var value = Value.create(
        schema,
        [1, 2]
      );
      var ref = Ref.create(value, onUpdate);
      component = (
        <RepeatingFieldset
          value={ref}
          onAdd={onAdd}
          onRemove={onRemove}
          />
      );
      component = ReactTestUtils.renderIntoDocument(component);
    });

    describe('rendering', () => {

      it('renders className', function() {
        assert.ok(component.getDOMNode().classList.contains('rf-RepeatingFieldset'));
      });

      it('renders label', function() {
        var label = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'rf-RepeatingFieldset__label');
        assert.equal(textContent(label.getDOMNode()), 'Label');
      });

      it('renders a field for each element in value', () => {
        var fields = ReactTestUtils.scryRenderedComponentsWithType(component, Field);
        assert.equal(fields.length, 2);
      });

      it('renders "Add" button', () => {
        var button = getAddButton();
        assert.ok(true);
      });

      it('renders "Remove" button for each item', () => {
        var buttons = getRemoveButtons();
        assert.equal(buttons.length, 2);
      });
    });

    describe('clicking on "Add" button', () => {

      it('updates value', () => {
        ReactTestUtils.Simulate.click(getAddButton());
        sinon.assert.calledOnce(onUpdate);
        assert.deepEqual(
          onUpdate.firstCall.args[0].value.toJS(),
          [1, 2, null]
        );
      });

      it('calls props.onAdd callback', () => {
        ReactTestUtils.Simulate.click(getAddButton());
        sinon.assert.calledOnce(onAdd);
      });

    });

    describe('click on "Remove" button', () => {

      it('updates value', () => {
        ReactTestUtils.Simulate.click(getRemoveButtons()[0]);
        sinon.assert.calledOnce(onUpdate);
        assert.deepEqual(
          onUpdate.firstCall.args[0].value.toJS(),
          [2]
        );
        ReactTestUtils.Simulate.click(getRemoveButtons()[1]);
        sinon.assert.calledTwice(onUpdate);
        assert.deepEqual(
          onUpdate.secondCall.args[0].value.toJS(),
          [1]
        );
      });

      it('calls onRemove callback', () => {
        ReactTestUtils.Simulate.click(getRemoveButtons()[1]);
        sinon.assert.calledOnce(onRemove);
        sinon.assert.calledWith(onRemove, 1);
      });

    });
  });
});
