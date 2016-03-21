import React from 'react';
import {Field, Fieldset, createValue} from 'react-forms';

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
    let {label, ...props} = this.props;
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
    );
  }
}

let schema = {
  type: 'object',
  properties: {
    mother: IndividualFieldset.schema,
    father: IndividualFieldset.schema
  }
};

class FamilyForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {formValue: createValue({schema, value: props.value, onChange: this.onChange})};
  }

  onChange = (nextFormValue) => {
    this.setState({formValue: nextFormValue});
    this.props.onChange(nextFormValue.value);
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
    );
  }
}

// https://github.com/prometheusresearch/react-forms/issues/99
// https://github.com/prometheusresearch/react-forms/issues/100
// let value = {
//   mother: IndividualFieldset.value,
//   father: IndividualFieldset.value
// }

let value = {};

export default class Reusable extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.state = {
      value: value
    };
  }

  onChange(value) {
    this.setState({value});
  }

  render() {
    const {value} = this.state;

    return (
      <div>
        <FamilyForm value={value} onChange={this.onChange}/>
        <p>{JSON.stringify(value)}</p>
      </div>
    );
  }
}
