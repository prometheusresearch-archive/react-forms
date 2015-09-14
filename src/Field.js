/**
 * @copyright 2015, Prometheus Research, LLC
 */

import autobind             from 'autobind-decorator';
import React, {PropTypes}   from 'react';
import Component            from './Component';
import Input                from './Input';
import ErrorList            from './ErrorList';
import Label                from './Label';

export default class Field extends Component {

  static propTypes = {
    ...Component.propTypes,
    label: PropTypes.string,
    children: PropTypes.element,
    Input: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    Self: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    Label: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    ErrorList: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  };

  static defaultProps = {
    Input,
    Label,
    ErrorList,
    Self: 'div',
  };

  constructor(props) {
    super(props);
    this.state = {dirty: false};
  }

  render() {
    let {Self, ErrorList, Label, Input, label, children} = this.props;
    let {dirty} = this.state;
    let {schema = {}, value, params = {}} = this.formValue;
    let showErrors = dirty || params.forceShowErrors;
    if (!children) {
      children = <Input value={value} onChange={this.onChange} />;
    } else {
      children = React.cloneElement(
        React.Children.only(children),
        {value, onChange: this.onChange});
    }
    return (
      <Self onBlur={this.onBlur}>
        <Label label={label} schema={schema} />
        {children}
        {showErrors &&
          <ErrorList formValue={this.formValue} />}
      </Self>
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
    this.formValue.update(value);
  }
}
