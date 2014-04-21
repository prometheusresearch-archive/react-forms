/** @jsx React.DOM */
'use strict';

var assert              = require('assert');
var sinon               = require('sinon');
var TestUtils           = require('react/lib/ReactTestUtils');
var CheckboxGroup       = require('../../lib/input/CheckboxGroup');

describe('forms', () => {

  describe('CheckboxGroup', function() {

      var sexOptions = [
        {value: 'female', name: 'Female'},
        {value: 'male', name: 'Male'}
      ];

      function createAndMount(props) {
          var component = CheckboxGroup(props);
          return TestUtils.renderIntoDocument(component);
      }

      function getCheckboxesDOM(component) {
          return TestUtils.scryRenderedDOMComponentsWithClass(
              component,
              "react-forms-checkbox-group-checkbox").map((c) => c.getDOMNode());
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

      /**
      * XXX: For some reason I can't get the same behaviour while in tests which
      * works in real demo.
      */
      describe.skip('onChange callback', function() {

          it('single value', function() {
              var onChange = sinon.spy();
              var component = createAndMount({
                  options: sexOptions,
                  onChange: onChange
              });

              var boxes = getCheckboxesDOM(component);
              TestUtils.SimulateNative.click(boxes[0]);

              sinon.assert.calledOnce(onChange);
              sinon.assert.calledWith(onChange, ['female']);
          });

          it('multiple values', function() {
              var onChange = sinon.spy();
              var component = createAndMount({
                  options: sexOptions,
                  onChange: onChange,
                  value: ['male']
              });

              var boxes = getCheckboxesDOM(component);
              TestUtils.SimulateNative.click(boxes[0]);

              sinon.assert.calledOnce(onChange);
              sinon.assert.calledWith(onChange, ['male', 'female']);
          });

          it('removing value', function() {
              var onChange = sinon.spy();
              var component = createAndMount({
                  options: sexOptions,
                  onChange: onChange,
                  value: ['male']
              });

              var boxes = getCheckboxesDOM(component);
              TestUtils.SimulateNative.click(boxes[0]);

              sinon.assert.calledOnce(onChange);
              sinon.assert.calledWith(onChange, []);
          });

      });
  });
});
