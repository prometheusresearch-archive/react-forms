React Forms
===========

React Forms library provides a set of tools for [React][] to handle form
rendering and validation.

## Installation

While the version described in this document is not yet released on npm, you can
install it directly from GitHub repository:

    % npm install prometheusresearch/react-forms

## Usage

React Forms doesn't provide any `<Form />` component implementation, instead it
provides utilities which makes implementing form components a joy.

This is the example where form value is managed as a part of local component
state. Some might put form value in a Flux store instead.

    import React from 'react'
    import {Fieldset, Field, Value} from 'react-forms'

    let schema = {
      type: 'object',
      properties: {
        firstName: {type: 'string'},
        lastName: {type: 'string'}
      }
    })

    class Form extends React.Component {

      constructor(props) {
        super(props)
        this.state = {formValue: Value(schema, props.value, this.onChange)}
      }

      onChange = (nextFormValue) => {
        this.setState({formValue: nextFormValue})
      }

      render() {
        return (
          <Fieldset formValue={this.state.formValue}>
            <Field
              select="firstName"
              label="First name"
              />
            <Field
              select="lastName"
              label="Last name"
              />
          </Fieldset>
        )
      }
    }

### Customizing form fields

Customizing label rendering:

    import {Field as BaseField} from 'react-forms'

    function renderLabel(label, schema) {
      return <label className="my-label">{label}</label>
    }

    function Field(props) {
      return (
        <BaseField {...props} renderLabel={renderLabel} />
      )
    }

Customizing error list rendering:

    import {Field as BaseField, ErrorList} from 'react-forms'

    function renderErrorList(formValue) {
      return <ErrorList className="my-error-list" formValue={formValue} />
    }

    function Field(props) {
      return (
        <BaseField {...props} renderErrorList={renderErrorList} />
      )
    }

Form field with custom input component:

    import {Field} from 'react-forms'
    import Datepicker from 'datepicker'

    function DateField(props) {
      return (
        <Field {...props}>
          <Datepicker />
        </Field>
      )
    }

Implementing form field component from scratch:

    import React from 'react'
    import {WithFormValue} from 'react-forms'

    @WithFormValue
    class Field extends React.Component {

      render() {
        let {formValue} = this.props
        return (
          <div>
            <label>{formValue.schema.label}</label>
            <input value={formValue.value} onChange={this.onChange} />
          </div>
        )
      }

      onChange = (e) => this.props.formValue.update(e.target.value)
    }

## Pattern for reusable forms

    import React from 'react'
    import {Fieldset} from 'react-forms'

    class IndividualFieldset extends Fieldset {

      static schema = {
        type: 'object',
        properties: {
          firstName: {type: 'string'},
          lastName: {type: 'string'}
        }
      }

      static value = {
        firstName: 'John',
        lastName: 'Doe'
      }

      render() {
        let {label, ...props} = this.props
        return (
          <Fieldset {...props}>
            <label>{label}</label>
            <Field
              select="firstName"
              label="First name"
              />
            <Field
              select="lastName"
              label="Last name"
              />
          </Fieldset>
        )
      }
    }

Later you can compose schema and initial form value using `IndividualFieldset.schema`
and `IndividualFieldset.value` static properties and use `<IndividualFieldset />` component
itself for rendering.

    let schema = {
      mother: IndividualFieldset.schema,
      father: IndividualFieldset.schema
    }

    let value = {
      mother: IndividualFieldset.value,
      father: IndividualFieldset.value
    }

    class FamilyForm extends React.Component {

      constructor(props) {
        super(props)
        this.state = {formValue: Value(schema, value, this.onChange)}
      }

      onChange = (nextFormValue) => {
        this.setState({formValue: nextFormValue})
      }

      render() {
        return (
          <Fieldset formValue={this.state.formValue}>
            <IndividualFieldset
              select="mother"
              label="Mother"
              />
            <IndividualFieldset
              select="father"
              label="Father"
              />
          </Fieldset>
        )
      }
    }

## Credits

React Forms is free software created by [Prometheus Research, LLC][] and is
released under the MIT license.

[React]: http://facebook.github.io/react/
[Prometheus Research, LLC]: http://prometheusresearch.com
