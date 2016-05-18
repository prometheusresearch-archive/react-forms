import React from 'react';
import {style} from 'react-stylesheet';
import {Field as BaseField, ErrorList as BaseErrorList, Fieldset, createValue} from 'react-forms';

export default class CustomField extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onChangeCustomErr = this.onChangeCustomErr.bind(this);
    this.state = {
      value: {},
      valueErr: {},
    };
  }

  onChange(value) {
    this.setState({value});
  }

  onChangeCustomErr(value) {
    this.setState({valueErr: value});
  }

  render() {
    const {value, valueErr} = this.state;

    return (
      <div>
        <h2>Customizing label rendering:</h2>
        <CustomFieldForm value={value} onChange={this.onChange}/>
        <div className="well well-sm" style={{marginTop: 20}}>
          <code>{JSON.stringify(value)}</code>
        </div>

        <h2>Customizing error list rendering:</h2>
        <CustomErrorList value={valueErr} onChange={this.onChangeCustomErr}/>
        <div className="well well-sm" style={{marginTop: 20}}>
          <code>{JSON.stringify(valueErr)}</code>
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

function Label({label = schema.label}) {
  return <label className="my-label">{label}</label>;
}

let Field = style(BaseField, {
  Label: Label
});

class CustomFieldForm extends React.Component {
  constructor(props) {
    super(props);
    let formValue = createValue({value: props.value, onChange: this.onChange});
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
      </Fieldset>
    );
  }
}

// Customizing error list rendering:

function ErrorList({formValue}) {
  return <BaseErrorList className="my-error-list" formValue={formValue} />;
}

let CustomErrField = style(BaseField, {
  ErrorList: ErrorList
});

class CustomErrorList extends React.Component {
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
        <CustomErrField select="firstName" label="First name" />
        <CustomErrField select="lastName" label="Last name" />
        <CustomErrField select="age" label="Age" />
      </Fieldset>
    );
  }
}
