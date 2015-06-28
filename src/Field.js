/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React, {PropTypes}   from 'react';
import Value                from './Value';
import Input                from './Input';
import ErrorList            from './ErrorList';
import Component            from './Component';

function renderLabel(label, schema) {
  return label && <label>{label}</label>;
}

function renderErrorList(formValue) {
  return <ErrorList formValue={formValue} />;
}

export default class Field extends Component {

  static propTypes = {
    ...Component.propTypes,
    label: PropTypes.string,
    children: PropTypes.element,
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
    let {children, renderLabel, renderErrorList} = this.props;
    let {dirty} = this.state;
    let {schema, value, errors, params} = this.formValue;
    let showErrors = dirty || params.forceShowErrors;
    children = React.cloneElement(
      React.Children.only(children),
      {value, onChange: this.onChange});
    let label = this.props.label || schema.label;
    return (
      <div onBlur={this.onBlur}>
        {renderLabel(label, schema)}
        {children}
        {showErrors && renderErrorList(this.formValue)}
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
    this.props.formValue.update(value);
  }
}
