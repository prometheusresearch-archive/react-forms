/**
 * @jsx React.DOM
 */
'use strict';

var sinon   = require('sinon');
var assert  = require('assert');

var ReactForms  = require('../');
var React       = require('react');
var TestUtils   = require('react/lib/ReactTestUtils');

var {Form, Field, Fieldset} = ReactForms;
var {Mapping, Scalar}       = ReactForms.schema;

describe('simple form integration test', function() {

  var schema = (
    <Mapping>
      <Scalar name="text" />
      <Scalar name="num" type="number" />
    </Mapping>
  )

  var app;
  var form;
  var fields;
  var inputs;

  var App = React.createClass({

    render: function() {
      return (
        <div>
          <Form ref="form" schema={schema} />
        </div>
      );
    }
  });

  beforeEach(function() {
    app = TestUtils.renderIntoDocument(<App />);
    form = app.refs.form;
    fields = {};
    inputs = {};
    TestUtils.scryRenderedComponentsWithType(form, Field).forEach(function(field) {
      fields[field.props.value.name] = field;
      inputs[field.props.value.name] = TestUtils.findRenderedDOMComponentWithTag(field, 'input');
    });
  });

  it('renders', function() {
    assert.ok(fields.text);
    assert.ok(fields.num);
    assert.ok(inputs.text);
    assert.ok(inputs.num);
  });

});

