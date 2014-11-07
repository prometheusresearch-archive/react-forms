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

var RadioButtonGroup = require('../lib/RadioButtonGroup');

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

    function getMapping(options) {
      return Mapping({
        cities: Scalar({
          name: 'cities',
          input: <RadioButtonGroup options={options} />,
          required: true
        })
      });
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
    var schema1 = Mapping({
      name: Scalar({type: 'string'})
    });
    var schema2 = Mapping({
      name: Scalar({type: 'number'})
    });

    var form = TestUtils.renderIntoDocument(
      <Form schema={schema1} defaultValue={{name: 'hello'}} />
    );

    assert.ok(form.getValidation().isSuccess);
    assert.equal(form.getValue().get('name'), 'hello');

    form.setProps({schema: schema2});

    assert.ok(form.getValidation().isFailure);
    assert.equal(form.getValue().get('name'), 'hello');
  });

  it('preserves value on input', function() {

    var schema1 = Mapping({
      age: Scalar({type: 'number'})
    });
    var schema2 = Mapping({
      age: Scalar({type: 'number'}),
      name: Scalar({type: 'string'})
    });

    var FormWithDynamicSchema = React.createClass({

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

      onUpdate(value) {
        var schema = value.get('age') > 18 ? schema2 : schema1;
        this.setState({schema});
      }
    });

    function assertFormFieldsPresent(names) {
      var fields = TestUtils.scryRenderedComponentsWithType(form, Field);
      var fieldNames = fields.map(f => f.props.value.key);
      assert.ok(
        fieldNames.length === names.length,
        `${fieldNames} is not the same as ${names}`
      );
      fields.forEach((field) => {
        var path = field.props.value.keyPath;
        var name = path[path.length - 1];
        assert.ok(
          names.indexOf(name) > -1,
          `name ${name} is not present in ${names}`
        );
      });
    }

    var form = TestUtils.renderIntoDocument(<FormWithDynamicSchema />).refs.form;

    assertFormFieldsPresent(['age']);
    assert.equal(form.getValue().get('age'), 17);

    var ageInput = TestUtils.findRenderedDOMComponentWithTag(form, 'input');
    TestUtils.Simulate.change(ageInput, {target: {value: '19'}});

    assertFormFieldsPresent(['age', 'name']);
    assert.equal(form.getValue().get('age'), 19);

    TestUtils.Simulate.change(ageInput, {target: {value: '10'}});

    assertFormFieldsPresent(['age']);
    assert.equal(form.getValue().get('age'), 10);
  });

});
