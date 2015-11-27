class Form extends React.Component {

  constructor(props) {
    super(props)
    let formValue = Value(null, props.value, this.onChange)
    this.state = {formValue}
  }

  onChange = (formValue) => {
    this.setState({formValue})
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
