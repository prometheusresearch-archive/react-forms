/**
 * @copyright 2015, Prometheus Research
 */

import './index.css';

import React from 'react'
import * as ReactForms from '../src/index';
import {Fieldset, Field, Value} from '../src/index'

import BasicFormExample from '!!raw!./example/basic-form';

class Form extends React.Component {

  constructor(props) {
    super(props)
    let formValue = Value(null, props.value, this.onChange)
    this.state = {formValue}
  }

  onChange = (formValue) => {
    this.setState({formValue})
    this.props.onChange(formValue.value);
  }

  render() {
    return (
      <Fieldset formValue={this.state.formValue}>
        <Field select="firstName" label="First name" />
        <Field select="lastName" label="Last name" />
      </Fieldset>
    )
  }
}

class ShowValue extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: props.value};
  }

  render() {
    let {children, value} = this.props;
    return (
      <div>
        <div>
          {React.cloneElement(children, {value, onChange: this.onChange})}
        </div>
        <CodeValue value={this.state.value} />
      </div>
    );
  }

  onChange = (value) => {
    this.setState({value});
  }
}

function Code({children}) {
  return <pre style={{fontSize: '9pt'}}>{children}</pre>;
}

function CodeValue({value}) {
  return <Code>{JSON.stringify(value, null, 2)}</Code>
}

function Example({children, ...props}) {
  return (
    <div>
      {children}
    </div>
  );
}

function ContentWrapper({style, ...props}) {
  return <div style={{margin: 'auto', width: 800, ...style}} {...props} />;
}

function Sidebar() {
  return (
    <div>
    </div>
  );
}

function Header() {
  return (
    <div>
      <ContentWrapper>
        <h1>React Forms</h1>
      </ContentWrapper>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <ContentWrapper style={{textAlign: 'center', fontSize: '10pt'}}>
        <p>Built by Prometheus Research</p>
      </ContentWrapper>
    </div>
  );
}

function Chrome({children}) {
  return (
    <div>
      <Header />
      <ContentWrapper>
        <Sidebar />
        <div>
          {children}
        </div>
      </ContentWrapper>
      <Footer />
    </div>
  );
}

export class component extends React.Component {

  render() {
    return (
      <Chrome>
        <Example title="Basic form">
          <p>
            Basic form:
          </p>
          <Code>{BasicFormExample}</Code>
          <ShowValue value={{}}>
            <Form />
          </ShowValue>
        </Example>
      </Chrome>
    );
  }
}
