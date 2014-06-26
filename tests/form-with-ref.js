/**
 * @jsx React.DOM
 */
'use strict';

var sinon = require('sinon');
var assert = require('assert');

var ReactForms = require('../');
var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');

var Property = ReactForms.schema.Property;
var Schema = ReactForms.schema.Schema;

var Form = ReactForms.Form;
var Field = ReactForms.Field;
var Fieldset = ReactForms.Fieldset;

describe('simple form integration test', function() {

  var schema = (
    <Schema>
      <Property name="text" />
      <Property name="num" type="number" />
    </Schema>
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
      fields[field.value().name] = field;
      inputs[field.value().name] = TestUtils.findRenderedDOMComponentWithTag(field, 'input');
    });
  });

  it('renders', function() {
    assert.ok(fields.text);
    assert.ok(fields.num);
    assert.ok(inputs.text);
    assert.ok(inputs.num);
  });

});

