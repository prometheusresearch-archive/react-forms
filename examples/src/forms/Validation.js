import React from 'react';
import {Fieldset, Field, createValue} from 'react-forms';

export default class Validation extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.state = {
      value: {},
    };
  }

  onChange(value) {
    this.setState({value});
  }

  render() {
    const {value} = this.state;

    return (
      <div>
        <Form value={value} onChange={this.onChange}/>
        <div className="well well-sm" style={{marginTop: 20}}>
          <code>{JSON.stringify(value)}</code>
        </div>
      </div>
    );
  }
}

let schema = {
  type: 'object',
  properties: {
    firstName: {type: 'string'},
    lastName: {type: 'string'},
    age: {type: 'integer'}
  }
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    let formValue = createValue({schema, value: props.value, onChange: this.onChange});
    this.state = {formValue};
  }

  onChange = (formValue) => {
    this.setState({formValue});
    this.props.onChange(formValue.value);
  }

  render() {
    return (
      <Fieldset formValue={this.state.formValue}>
        <Field select="firstName" label="First name" />
        <Field select="lastName" label="Last name" />
        <Field select="age" label="Age" />
      </Fieldset>
    );
  }
}
