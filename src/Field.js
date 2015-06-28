/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React, {PropTypes}   from 'react';
import WithFormValue        from './WithFormValue';
import Value                from './Value';
import Input                from './Input';
import ErrorList            from './ErrorList';

function renderLabel(label, schema) {
  return label && <label>{label}</label>;
}

function renderErrorList(formValue) {
  return <ErrorList formValue={formValue} />;
}

@WithFormValue
export default class Field extends React.Component {

  static propTypes = {
    label: PropTypes.string,
    children: PropTypes.element,
    formValue: PropTypes.instanceOf(Value),
    renderLabel: PropTypes.func,
    renderErrorList: PropTypes.func
  };

  static defaultProps = {
    children: <Input type="text" />,
    renderLabel,
    renderErrorList
  };

  constructor(props) {
    super(props);
    this.state = {dirty: false};
  }

  render() {
    let {children, renderLabel, renderErrorList, formValue} = this.props;
    let {dirty} = this.state;
    let {schema, value, errors, params} = this.props.formValue;
    let showErrors = dirty || params.forceShowErrors;
    children = React.cloneElement(
      React.Children.only(children),
      {value, onChange: this.onChange});
    let label = this.props.label || schema.label;
    return (
      <div onBlur={this.onBlur}>
        {renderLabel(label, schema)}
        {children}
        {showErrors && renderErrorList(formValue)}
      </div>
    );
  }

  onBlur = () => {
    this.setState({dirty: true});
  }

  onChange = (e) => {
    let value;
    if (e && e.target && e.target.value !== undefined) {
      e.stopPropagation();
      value = e.target.value;
      if (value === '') {
        value = undefined;
      }
    } else {
      value = e;
    }
    this.setState({dirty: true});
    this.props.formValue.set(value);
  }
}
