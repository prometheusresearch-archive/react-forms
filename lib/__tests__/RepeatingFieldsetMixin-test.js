/**
 * @jsx React.DOM
 */
'use strict';

var assert                 = require('assert');
var sinon                  = require('sinon');
var React                  = require('react');
var ReactTestUtils         = require('react/lib/ReactTestUtils');
var RepeatingFieldsetMixin = require('../RepeatingFieldsetMixin');
var FormMixin              = require('../FormMixin');
var schema                 = require('../schema');

describe('forms', () => {

  describe('RepeatingFieldsetMixin', () => {

    var Form = React.createClass({
      mixins: [FormMixin],
      render: function() {
        return this.transferPropsTo(<List ref="list" />);
      }
    });

    var List = React.createClass({
      mixins: [RepeatingFieldsetMixin],

      render: function() {
        return (
          <div>
            {this.renderFields()}
          </div>
        );
      }
    });

    var c, inputs, onAdd, onRemove;

    function assertInputsLength(length) {
      inputs = ReactTestUtils.scryRenderedDOMComponentsWithTag(c, 'input');
      assert.equal(inputs.length, length);
    }

    function assertFormValue(value) {
      assert.deepEqual(c.valueLens().val(), value);
    }

    beforeEach(() => {
      onAdd = sinon.spy();
      onRemove = sinon.spy();
      c = ReactTestUtils.renderIntoDocument(
        <Form
          onAdd={onAdd}
          onRemove={onRemove}
          value={[1, 2]}
          schema={schema.List(null, schema.Property())}
          />
      );
    });

    describe('renderFields()', () => {

      it('renders a field for each element in value', () => {
        assertInputsLength(2);
        assertFormValue([1, 2]);
      });
    });

    describe('add()', () => {

      it('adds a new field with predefined value', () => {
        c.refs.list.add(3);
        assertInputsLength(3);
        assertFormValue([1, 2, 3]);
      });

      it('adds a new field with default value', () => {
        c.refs.list.add();
        assertInputsLength(3);
        assertFormValue([1, 2, null]);
      });

      it('calls onAdd callback', () => {
        c.refs.list.add(3);
        sinon.assert.calledOnce(onAdd);
        sinon.assert.calledWith(onAdd, 3);
      });

    });

    describe('remove(value)', () => {

      it('removes a field', () => {
        c.refs.list.remove(0);
        assertInputsLength(1);
        assertFormValue([2]);
      });

      it('calls onRemove callback', () => {
        c.refs.list.remove(0);
        sinon.assert.calledOnce(onRemove);
        sinon.assert.calledWith(onRemove, 1, 0);
        assertFormValue([2]);
      });

    });
  });
});
