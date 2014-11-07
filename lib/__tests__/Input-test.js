'use strict';

var assert      = require('assert');
var React       = require('react');
var TestUtils   = require('react/lib/ReactTestUtils');
var Value       = require('../Value');
var {Scalar}    = require('../schema');
var Input       = require('../Input');

describe('<Input />:', function() {

  it('renders into <input type="text" /> by default', function() {
    var schema = Scalar();
    var value = Value.create(schema);
    var element = <Input value={value} className="someClass" />;
    var component = TestUtils.renderIntoDocument(element);
    var inputs = TestUtils.scryRenderedDOMComponentsWithTag(component, 'input');
    assert.equal(inputs.length, 1);
    var input = inputs[0];
    assert.equal(input.getDOMNode().type, 'text');
    assert.equal(input.getDOMNode().className, 'someClass');
  });

  it('renders into component provided via props', function() {
    var schema = Scalar();
    var value = Value.create(schema);
    var element = <Input value={value} className="someClass" input={<input type="password" />} />;
    var component = TestUtils.renderIntoDocument(element);
    var inputs = TestUtils.scryRenderedDOMComponentsWithTag(component, 'input');
    assert.equal(inputs.length, 1);
    var input = inputs[0];
    assert.equal(input.getDOMNode().type, 'password');
    assert.equal(input.getDOMNode().className, 'someClass');
  });

  it('renders into component provided via schema node', function() {
    var schema = Scalar({input: <input type="password" />});
    var value = Value.create(schema);
    var element = <Input value={value} className="someClass" />;
    var component = TestUtils.renderIntoDocument(element);
    var inputs = TestUtils.scryRenderedDOMComponentsWithTag(component, 'input');
    assert.equal(inputs.length, 1);
    var input = inputs[0];
    assert.equal(input.getDOMNode().type, 'password');
    assert.equal(input.getDOMNode().className, 'someClass');
  });

});
