'use strict';

var assert                  = require('assert');
var React                   = require('react');
var TestUtils               = require('react/lib/ReactTestUtils');
var Value                   = require('../Value');
var {Scalar, Mapping, List} = require('../schema');
var Element                 = require('../Element');
var Field                   = require('../Field');
var Fieldset                = require('../Fieldset');
var RepeatingFieldset       = require('../RepeatingFieldset');

var Component = React.createClass({

  render() {
    return <div />;
  }
});

describe('<Element />:', function() {

  it('renders element provided via schema', function() {
    var schema = Scalar({component: Component});
    var value = Value.create(schema);
    var element = <Element value={value} />;
    var component = TestUtils.renderIntoDocument(element);
    var components = TestUtils.scryRenderedComponentsWithType(component, Component);
    assert.equal(components.length, 1);
  });

  it('renders into <Field /> for scalar nodes', function() {
    var schema = Scalar();
    var value = Value.create(schema);
    var element = <Element value={value} />;
    var component = TestUtils.renderIntoDocument(element);
    var components = TestUtils.scryRenderedComponentsWithType(component, Field);
    assert.equal(components.length, 1);
  });

  it('passes all props through to the component', function() {
    var schema = Scalar();
    var value = Value.create(schema);
    var element = <Element value={value} someProp={1} />;
    var component = TestUtils.renderIntoDocument(element);
    var components = TestUtils.scryRenderedComponentsWithType(component, Field);
    assert.equal(components.length, 1);
    var field = components[0];
    assert.equal(field.props.someProp, 1);
  });

  it('renders into <Fieldset /> for mapping nodes', function() {
    var schema = Mapping({x: Scalar(), y: Scalar()});
    var value = Value.create(schema);
    var element = <Element value={value} />;
    var component = TestUtils.renderIntoDocument(element);
    var components = TestUtils.scryRenderedComponentsWithType(component, Fieldset);
    assert.equal(components.length, 1);
  });

  it('renders into <RepeatingFieldset /> for list nodes', function() {
    var schema = List(Scalar());
    var value = Value.create(schema);
    var element = <Element value={value} />;
    var component = TestUtils.renderIntoDocument(element);
    var components = TestUtils.scryRenderedComponentsWithType(component, RepeatingFieldset);
    assert.equal(components.length, 1);
  });

});
