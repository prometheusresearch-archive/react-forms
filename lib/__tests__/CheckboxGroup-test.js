'use strict';

var assert = require('assert');
var sinon = require('sinon');
var React = require('react');
var Immutable = require('immutable');
var TestUtils = require('react/lib/ReactTestUtils');
var CheckboxGroup = require('../CheckboxGroup');

describe('forms', () => {

  describe('CheckboxGroup', function() {

    var sexOptions = [
      {value: 'female', name: 'Female'},
      {value: 'male', name: 'Male'}
    ];

    function createAndMount(props) {
      var element = <CheckboxGroup {...props} />;
      return TestUtils.renderIntoDocument(element);
    }

    function getCheckboxesDOM(component) {
      return TestUtils.scryRenderedDOMComponentsWithClass(
        component,
        "rf-CheckboxGroup__checkbox").map((c) => c.getDOMNode());
    }

    function assertChecked(boxes, values) {
      assert.equal(
        boxes.filter((b) =>
          b.checked && values.indexOf(b.value) > -1).length,
        values.length);
    }

    it('renders checkbox for each option', function() {
      var component = createAndMount({options: sexOptions});
      var boxes = getCheckboxesDOM(component);
      assert.equal(boxes.length, 2);
      assertChecked(boxes, []);
    });

    describe('setting initial value', function() {

        it('single value', function() {
          var component = createAndMount({
            options: sexOptions,
            value: ['male']
          });
          var boxes = getCheckboxesDOM(component);
          assert.equal(boxes.length, 2);
          assertChecked(boxes, ['male']);
        });

        it('multiple values', function() {
          var component = createAndMount({
            options: sexOptions,
            value: ['male', 'female']
          });
          var boxes = getCheckboxesDOM(component);
          assert.equal(boxes.length, 2);
          assertChecked(boxes, ['male', 'female']);
        });
    });

    describe('onChange callback', function() {

      it('single value', function() {
        var onChange = sinon.spy();
        var component = createAndMount({
          options: sexOptions,
          onChange: onChange
        });

        var boxes = getCheckboxesDOM(component);
        TestUtils.Simulate.change(boxes[0], {target: {checked: true, value: 'female'}});

        assert.ok(Immutable.is(onChange.firstCall.args.length, 1));
        assert.ok(Immutable.is(onChange.firstCall.args[0], Immutable.List(['female'])));
      });

      it('multiple values', function() {
        var onChange = sinon.spy();
        var component = createAndMount({
          options: sexOptions,
          onChange: onChange,
          value: Immutable.List(['male'])
        });

        var boxes = getCheckboxesDOM(component);
        TestUtils.Simulate.change(boxes[0], {target: {checked: true, value: 'female'}});

        sinon.assert.calledOnce(onChange);
        assert.ok(Immutable.is(onChange.firstCall.args.length, 1));
        assert.ok(Immutable.is(onChange.firstCall.args[0], Immutable.List(['male', 'female'])));
      });

      it('removing value', function() {
        var onChange = sinon.spy();
        var component = createAndMount({
          options: sexOptions,
          onChange: onChange,
          value: Immutable.List(['male'])
        });

        var boxes = getCheckboxesDOM(component);
        TestUtils.Simulate.change(boxes[0], {target: {checked: false, value: 'male'}});

        sinon.assert.calledOnce(onChange);
        assert.ok(Immutable.is(onChange.firstCall.args[0], Immutable.List()));
      });

    });
  });
});
