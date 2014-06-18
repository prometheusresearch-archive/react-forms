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

var RadioButtonGroup = ReactForms.input.RadioButtonGroup;

describe('form with dynamic schema', function() {

  it('re-renders form if schema changes', function() {

    var cityOptions = [
      {value: 'LAX', name: 'Los Angeles'},
      {value: 'LON', name: 'London'},
      {value: 'N/A', name: 'Other'}
    ];

    var cityOptions2 = [
      {value: 'LAX', name: 'Los Angeles'},
      {value: 'LON', name: 'London'},
      {value: 'NYC', name: 'New York'},
      {value: 'PAR', name: 'Paris'},
      {value: 'N/A', name: 'Other'}
    ];

    function getSchema(options) {
      return (
        <Schema>
          <Property
            name="cities"
            input={<RadioButtonGroup options={options} />}
            required />
        </Schema>
      );
    }

    var schema = getSchema(cityOptions);
    var schema2 = getSchema(cityOptions2);

    var form = TestUtils.renderIntoDocument(<Form schema={schema} />);

    assert.equal(
      TestUtils.scryRenderedDOMComponentsWithClass(form, 'rf-RadioButtonGroup__button').length,
      3
    );

    form.setProps({schema: schema2});

    assert.equal(
      TestUtils.scryRenderedDOMComponentsWithClass(form, 'rf-RadioButtonGroup__button').length,
      5
    );

  });

  it('re-validates entire form', function() {
    var schema1 = (
      <Schema>
        <Property name="name" type="string" />
      </Schema>
    );
    var schema2 = (
      <Schema>
        <Property name="name" type="number" />
      </Schema>
    );

    var form = TestUtils.renderIntoDocument(
      <Form schema={schema1} defaultValue={{name: 'hello'}} />
    );

    assert.ok(ReactForms.validation.isSuccess(form.value().validation));
    assert.equal(form.value().value.name, 'hello');
    assert.equal(form.value().serialized.name, 'hello');

    form.setProps({schema: schema2});

    assert.ok(ReactForms.validation.isFailure(form.value().validation));
    assert.equal(form.value().value.name, 'hello');
    assert.equal(form.value().serialized.name, 'hello');
  });

});
