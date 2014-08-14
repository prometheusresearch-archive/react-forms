/**
 * @jsx React.DOM
 */
'use strict';

var assert             = require('assert');
var sinon              = require('sinon');
var React              = require('react');
var ReactTestUtils     = require('react/lib/ReactTestUtils');
var RepeatingFieldset  = require('../RepeatingFieldset');
var {List, Property}   = require('../schema');
var Value              = require('../Value');

describe('forms', () => {

  describe('RepeatingFieldset', () => {

    var component;
    var onAdd;
    var onRemove;
    var onUpdate;

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
      var value = Value({
        value: [1, 2],
        schema: <List><Property /></List>,
        onUpdate: onUpdate
      });
      component = (
        <RepeatingFieldset
          value={value}
          onAdd={onAdd}
          onRemove={onRemove}
          />
      );
      component = ReactTestUtils.renderIntoDocument(component);
    });

    describe('rendering', () => {

      it('renders a field for each element in value', () => {
        var inputs = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, 'input');
        assert.equal(inputs.length, 2);
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
          onUpdate.firstCall.args[0].value,
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
          onUpdate.firstCall.args[0].value,
          [2]
        );
        ReactTestUtils.Simulate.click(getRemoveButtons()[1]);
        sinon.assert.calledTwice(onUpdate);
        assert.deepEqual(
          onUpdate.secondCall.args[0].value,
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
