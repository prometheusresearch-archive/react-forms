'use strict';

var assert = require('assert');
var sinon = require('sinon');
var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var Checkbox = require('../Checkbox');

describe('ReactForms', function() {

  describe('<Checkbox />', function() {

    function render(props) {
      var element = <Checkbox {...props} />;
      return TestUtils.renderIntoDocument(element);
    }

    function getInput(component) {
      return TestUtils.findRenderedDOMComponentWithTag(component, 'input');
    }

    it('renders into checkbox', function() {
      var onChange = sinon.spy();
      var component = render({value: false, onChange});
      var inputs = TestUtils.scryRenderedDOMComponentsWithTag(component, 'input');
      assert.equal(inputs.length, 1);
      var input = getInput(component);
      assert.equal(input.getDOMNode().type, 'checkbox');
    });

    it('renders correct "checked" property based on value', function() {
      var onChange = sinon.spy();
      var component;
      var input;

      component = render({value: false, onChange});
      input = getInput(component);
      assert.ok(!input.getDOMNode().checked);

      component = render({value: true, onChange});
      input = getInput(component);
      assert.ok(input.getDOMNode().checked);
    });

    it('call this.props.onChange on change', function() {
      var onChange = sinon.spy();
      var component;
      var input;

      component = render({value: false, onChange});
      input = getInput(component);

      TestUtils.Simulate.change(input, {target: {checked: true}});
      assert.equal(onChange.callCount, 1);
      assert.equal(onChange.lastCall.args[0], true);

      TestUtils.Simulate.change(input, {target: {checked: false}});
      assert.equal(onChange.callCount, 2);
      assert.equal(onChange.lastCall.args[0], false);
    });

  });

});
