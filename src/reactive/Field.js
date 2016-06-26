/**
 * @copyright 2015, Prometheus Research, LLC
 */

import autobind from 'autobind-decorator';
import React, {PropTypes} from 'react';
import * as Stylesheet from 'react-stylesheet';
import Component from '../Component';
import Input from '../Input';
import Label from '../Label';
import ErrorList from './ErrorList';
import reactive from './reactive';

export class FieldBase extends Component {

  static displayName = 'Field';

  static propTypes = {
    ...Component.propTypes,
    label: PropTypes.string,
    children: PropTypes.element,
    Input: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  };

  static defaultProps = {
    Input,
  };

  static stylesheet = Stylesheet.create({
    Root: 'div',
    ErrorList: ErrorList,
    Label: Label,
    InputWrapper: 'div',
  });

  constructor(props) {
    super(props);
    this.state = {dirty: false};
  }

  render() {
    let {Input, label, children} = this.props;
    let {Root, ErrorList, Label, InputWrapper} = this.props.stylesheet || this.constructor.stylesheet;
    let {dirty} = this.state;
    let {schema = {}, value, params} = this.formValue;
    let showErrors = dirty || params.get().forceShowErrors;
    if (!children) {
      children = <Input value={value.get()} onChange={this.onChange} />;
    } else {
      children = React.cloneElement(
        React.Children.only(children),
        {value, onChange: this.onChange});
    }
    return (
      <Root onBlur={this.onBlur}>
        <Label label={label} schema={schema} />
        <InputWrapper>
          {children}
        </InputWrapper>
        {showErrors &&
          <ErrorList formValue={this.formValue} />}
      </Root>
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
        value = null;
      }
    } else {
      value = e;
    }
    this.formValue.update(value);
    this.setState({dirty: true});
  }
}

let Field = reactive(FieldBase);

export default Field;
