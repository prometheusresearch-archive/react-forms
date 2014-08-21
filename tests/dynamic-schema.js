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
var {Scalar, Mapping}       = ReactForms.schema;

var RadioButtonGroup = require('../lib/input/RadioButtonGroup');

describe.skip('form with dynamic schema', function() {

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

    function getMapping(options) {
      return (
        <Mapping>
          <Scalar
            name="cities"
            input={<RadioButtonGroup options={options} />}
            required />
        </Mapping>
      );
    }

    var schema = getMapping(cityOptions);
    var schema2 = getMapping(cityOptions2);

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
      <Mapping>
        <Scalar name="name" type="string" />
      </Mapping>
    );
    var schema2 = (
      <Mapping>
        <Scalar name="name" type="number" />
      </Mapping>
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

  it('preserves value on input', function() {

    var schema1 = (
      <Mapping>
        <Scalar name="age" type="number" />
      </Mapping>
    );
    var schema2 = (
      <Mapping>
        <Scalar name="age" type="number" />
        <Scalar name="name" type="string" />
      </Mapping>
    );

    var MyForm = React.createClass({

      render: function() {
        return (
          <Form
            ref="form"
            schema={this.state.schema}
            onUpdate={this.onUpdate}
            defaultValue={{age: 17}}
            />
        );
      },

      getInitialState: function() {
        return {schema: schema1};
      },

      onUpdate: function(value) {
        if (value.age > 18) {
          this.setState({schema: schema2});
        } else {
          this.setState({schema: schema1});
        }
      }
    });

    function assertFormValue(name, value, serialized) {
      assert.equal(form.value().value[name], value);
      if (serialized !== undefined) {
        assert.equal(form.value().serialized[name], serialized);
        TestUtils.scryRenderedDOMComponentsWithTag(form, 'input').forEach((input) => {
          if (input.props.name === name) {
            assert.equal(input.getDOMNode().value, serialized)
          }
        });
      }
    }

    function assertFormFieldsPresent(names) {
      var fields = TestUtils.scryRenderedComponentsWithType(form, ReactForms.Field);
      assert.equal(fields.length, names.length);
      fields.forEach((field) => {
        var name = field.props.value.name;
        assert.ok(names.indexOf(name) > -1)
      });
    }

    var form = TestUtils.renderIntoDocument(<MyForm />).refs.form;

    assertFormFieldsPresent(['age']);
    assertFormValue('age', 17, '17');

    var ageInput = TestUtils.findRenderedDOMComponentWithTag(form, 'input');
    TestUtils.Simulate.change(ageInput, {target: {value: '19'}});

    assertFormFieldsPresent(['age', 'name']);
    assertFormValue('age', 19, '19');

    TestUtils.Simulate.change(ageInput, {target: {value: '10'}});

    assertFormFieldsPresent(['age']);
    assertFormValue('age', 10, '10');
  });

});
