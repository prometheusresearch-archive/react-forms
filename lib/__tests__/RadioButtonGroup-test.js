'use strict';

var React               = require('react');
var assert              = require('assert');
var sinon               = require('sinon');
var TestUtils           = require('react/lib/ReactTestUtils');
var RadioButtonGroup    = require('../RadioButtonGroup');

describe('forms', () => {

  describe('RadioButtonGroup', function() {

      function createAndMount(props) {
          var component = <RadioButtonGroup {...props} />;
          return TestUtils.renderIntoDocument(component);
      }

      function getButtonsDOM(component) {
          return TestUtils.scryRenderedDOMComponentsWithClass(
              component,
              "rf-RadioButtonGroup__radio")
              .map((c) => c.getDOMNode());
      }

      function assertSelected(buttons, value) {
          assert.equal(
              buttons.filter((b) => b.checked && b.value === value).length,
              1);
      }

      function assertNoSelected(buttons) {
          assert.equal(buttons.filter((b) => b.checked).length, 0);
      }

      var sexOptions = [
        {value: 'female', name: 'Female'},
        {value: 'male', name: 'Male'}
      ];

      it('renders a checkbox for each option', function() {
          var component = createAndMount({options: sexOptions});
          var buttons = getButtonsDOM(component);
          assert.equal(buttons.length, 2);
          assertNoSelected(buttons);
      });

      it('renders a checkbox for each option +1 for empty choice', function() {
          var component = createAndMount({options: sexOptions, allowEmpty: true});
          var buttons = getButtonsDOM(component);
          assert.equal(buttons.length, 3);
          assertSelected(buttons, '');
      });

      it('allows setting value via corresponding prop', function() {
          var component = createAndMount({options: sexOptions, value: 'male'});
          var buttons = getButtonsDOM(component);
          assertSelected(buttons, 'male');
      });

      it('triggers onChange when user clicks on value', function() {
          var onChange = sinon.spy();
          var component = createAndMount({options: sexOptions, onChange});

          var buttons = getButtonsDOM(component);
          assertNoSelected(buttons);

          TestUtils.SimulateNative.click(buttons[0]);

          sinon.assert.calledOnce(onChange);
          sinon.assert.calledWith(onChange, 'female');
      });
  });
});
