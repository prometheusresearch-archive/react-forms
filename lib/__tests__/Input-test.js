'use strict';

var assert                  = require('assert');
var React                   = require('react');
var TestUtils               = require('react/lib/ReactTestUtils');
var Value                   = require('../Value');
var {Scalar, Mapping, List} = require('../schema');
var Input                   = require('../Input');

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
    var schema = Mapping({a: Scalar()});
    var value = Value.create(schema);
    var element = (
      <Input
        value={value.get('a')}
        className="someClass"
        input={<input type="password" />}
        />
    );
    var component = TestUtils.renderIntoDocument(element);
    var inputs = TestUtils.scryRenderedDOMComponentsWithTag(component, 'input');
    assert.equal(inputs.length, 1);
    var input = inputs[0];
    assert.equal(input.getDOMNode().type, 'password');
    assert.equal(input.getDOMNode().className, 'someClass');
    assert.equal(input.getDOMNode().name, 'a');
  });

  it('renders into component provided via schema node', function() {
    var schema = Mapping({a: Scalar({input: <input type="password" />})});
    var value = Value.create(schema);
    var element = <Input value={value.get('a')} className="someClass" />;
    var component = TestUtils.renderIntoDocument(element);
    var inputs = TestUtils.scryRenderedDOMComponentsWithTag(component, 'input');
    assert.equal(inputs.length, 1);
    var input = inputs[0];
    assert.equal(input.getDOMNode().type, 'password');
    assert.equal(input.getDOMNode().className, 'someClass');
    assert.equal(input.getDOMNode().name, 'a');
  });

  it('renders "name" attribute to the <input />', function() {
    var schema = Mapping({
      a: Scalar(),
      b: Mapping({
        c: Scalar()
      }),
      d: List(Scalar()),
      e: Scalar({name: 'note'})
    });
    var component;
    var input;
    var value = Value.create(schema);

    component = TestUtils.renderIntoDocument(<Input value={value.get('a')} />);
    input = TestUtils.findRenderedDOMComponentWithTag(component, 'input');
    assert.equal(input.getDOMNode().name, 'a');

    component = TestUtils.renderIntoDocument(<Input value={value.get('b').get('c')} />);
    input = TestUtils.findRenderedDOMComponentWithTag(component, 'input');
    assert.equal(input.getDOMNode().name, 'b__c');

    component = TestUtils.renderIntoDocument(<Input value={value.get('d').get(1)} />);
    input = TestUtils.findRenderedDOMComponentWithTag(component, 'input');
    assert.equal(input.getDOMNode().name, 'd__1');

    component = TestUtils.renderIntoDocument(<Input value={value.get('e')} />);
    input = TestUtils.findRenderedDOMComponentWithTag(component, 'input');
    assert.equal(input.getDOMNode().name, 'note');
  });

});
