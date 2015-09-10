/**
 * @copyright 2015, Prometheus Research, LLC
 */

import autobind             from 'autobind-decorator';
import React, {PropTypes}   from 'react';
import Input                from './Input';
import ErrorList            from './ErrorList';
import Component            from './Component';

function Label({label}) {
  return label && <label>{label}</label>;
}

export default class Field extends Component {

  static propTypes = {
    ...Component.propTypes,
    label: PropTypes.string,
    children: PropTypes.element,
    Label: PropTypes.component,
    ErrorList: PropTypes.component,
  };

  static defaultProps = {
    children: <Input type="text" />,
    Label,
    ErrorList,
  };

  constructor(props) {
    super(props);
    this.state = {dirty: false};
  }

  render() {
    let {children, renderLabel, ErrorList, Label} = this.props;
    let {dirty} = this.state;
    let {schema, value, errors, params} = this.formValue;
    let showErrors = dirty || params.forceShowErrors;
    children = React.cloneElement(
      React.Children.only(children),
      {value, onChange: this.onChange});
    let label = this.props.label || schema.label;
    return (
      <div onBlur={this.onBlur}>
        <Label label={label} schema={schema} />
        {children}
        {showErrors &&
          <ErrorList formValue={this.formValue} />}
      </div>
    );
  }

  @autobind
  onBlur() {
    this.setState({dirty: true});
  }

  @autobind
  onChange(e) {
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
