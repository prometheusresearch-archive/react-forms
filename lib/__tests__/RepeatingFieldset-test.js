'use strict';

var assert            = require('assert');
var sinon             = require('sinon');
var React             = require('react');
var ReactTestUtils    = require('react/lib/ReactTestUtils');
var RepeatingFieldset = require('../RepeatingFieldset');
var Field             = require('../Field');
var {List, Scalar}    = require('../schema');
var Value             = require('../Value');

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
      var buttons = ReactTestUtils.scryRenderedDOMComponentsWithClass(
        component,
        'rf-RepeatingFieldset__add'
      );
      return buttons[0];
    }

    function getRemoveButtons() {
      return ReactTestUtils.scryRenderedDOMComponentsWithClass(
        component,
        'rf-RepeatingFieldset__remove'
      );
    }

    function render(props) {
      props = props || {};
      onAdd = sinon.spy();
      onRemove = sinon.spy();
      onUpdate = sinon.spy();
      function _onUpdate(value) {
        onUpdate.apply(this, arguments);
        component.setProps({value});
      }
      var root = () => value;
      var value = Value.create(
        schema,
        [1, 2],
        _onUpdate,
        root
      );
      component = (
        <RepeatingFieldset {...props}
          value={value}
          onAdd={onAdd}
          onRemove={onRemove}
          />
      );
      component = ReactTestUtils.renderIntoDocument(component);
      return component;
    }

    describe('rendering', () => {

      it('renders className', function() {
        render();
        assert.ok(component.getDOMNode().classList.contains('rf-RepeatingFieldset'));
      });

      it('renders label', function() {
        render();
        var label = ReactTestUtils.findRenderedDOMComponentWithClass(component, 'rf-RepeatingFieldset__label');
        assert.equal(textContent(label.getDOMNode()), 'Label');
      });

      it('renders a field for each element in value', () => {
        render();
        var fields = ReactTestUtils.scryRenderedComponentsWithType(component, Field);
        assert.equal(fields.length, 2);
      });

      it('renders "Add" button', () => {
        render();
        var button = getAddButton();
        assert.ok(button);
      });

      it('renders "Remove" button for each item', () => {
        render();
        var buttons = getRemoveButtons();
        assert.equal(buttons.length, 2);
      });

      it('does not render "Add" button if noAddButton prop is passed', () => {
        render({noAddButton: true});
        var button = getAddButton();
        assert.ok(!button);
      });

      it('does not render "Remove" buttons if noRemoveButton prop is passed', () => {
        render({noRemoveButton: true});
        var buttons = getRemoveButtons();
        assert.equal(buttons.length, 0);
      });


    });

    describe('getItemByIndex', function() {

      it('allows getting a reference to rendered item by index', () => {
        render();
        var item0 = component.getItemByIndex(0);
        var item1 = component.getItemByIndex(1);
        var items = ReactTestUtils.scryRenderedComponentsWithType(component, RepeatingFieldset.Item);
        assert.equal(item0, items[0]);
        assert.equal(item1, items[1]);
      });

    });

    describe('clicking on "Add" button', () => {

      it('updates value', () => {
        render();
        ReactTestUtils.Simulate.click(getAddButton());
        sinon.assert.calledOnce(onUpdate);
        assert.deepEqual(
          onUpdate.firstCall.args[0].value.toJS(),
          [1, 2, null]
        );
      });

      it('calls props.onAdd callback', () => {
        render();
        ReactTestUtils.Simulate.click(getAddButton());
        sinon.assert.calledOnce(onAdd);
      });

    });

    describe('click on "Remove" button', () => {

      it('updates value', () => {
        render();
        ReactTestUtils.Simulate.click(getRemoveButtons()[1]);
        sinon.assert.calledOnce(onUpdate);
        assert.deepEqual(
          onUpdate.firstCall.args[0].value.toJS(),
          [1]
        );
        ReactTestUtils.Simulate.click(getRemoveButtons()[0]);
        sinon.assert.calledTwice(onUpdate);
        assert.deepEqual(
          onUpdate.secondCall.args[0].value.toJS(),
          []
        );
      });

      it('calls onRemove callback', () => {
        render();
        ReactTestUtils.Simulate.click(getRemoveButtons()[1]);
        sinon.assert.calledOnce(onRemove);
        sinon.assert.calledWith(onRemove, 1);
      });

    });
  });
});
