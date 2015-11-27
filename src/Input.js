/**
 * @copyright 2015, Prometheus Research, LLC
 */

import autobind           from 'autobind-decorator';
import React, {PropTypes} from 'react';
import debounce           from 'lodash/function/debounce';
import emptyFunction      from 'empty/function';

/**
 * Input component with debounce.
 */
export default class Input extends React.Component {

  static propTypes = {
    Component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    debounce: PropTypes.number,
    value: PropTypes.any,
    onChange: PropTypes.func
  };

  static defaultProps = {
    Component: 'input',
    debounce: 100,
    onChange: emptyFunction
  };

  constructor(props) {
    super(props);
    this.state = {value: props.value};
    this._expectedValue = undefined;
    this._finalizeOnChangeDebounced = props.debounce ?
      debounce(this._finalizeOnChange.bind(this), props.debounce) :
      this._finalizeOnChange.bind(this);
  }

  render() {
    let {Component, debounce: debounceEnabled, value, ...props} = this.props;
    if (debounceEnabled) {
      value = this.state.value;
    }
    return (
      <Component
        {...props}
        value={value}
        onChange={this.onChange}
        onBlur={this.onBlur} />
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this._expectedValue) {
      this._cancelOnChange();
      this.setState({value: nextProps.value});
    }
    if (nextProps.debounce !== this.props.debounce) {
      this._finalizeOnChange();
      this._cancelOnChange();
      this._finalizeOnChangeDebounced = nextProps.debounce ?
        debounce(this._finalizeOnChange.bind(this), nextProps.debounce) :
        this._finalizeOnChange.bind(this);
    }
  }

  componentWillUnmount() {
    this._finalizeOnChange();
    this._cancelOnChange();
  }

  _scheduleOnChange(value) {
    this.setState({value});
    this._expectedValue = value;
    this._finalizeOnChangeDebounced();
  }

  _finalizeOnChange() {
    if (this._expectedValue !== undefined) {
      let value = this._expectedValue;
      this._expectedValue = undefined;
      this.props.onChange(value);
    }
  }

  _cancelOnChange() {
    if (this._finalizeOnChangeDebounced.cancel) {
      this._expectedValue = undefined;
      this._finalizeOnChangeDebounced.cancel();
    }
  }

  @autobind
  onChange(e) {
    let value = e && e.target && 'value' in e.target ?
      e.target.value :
      e;
    this._scheduleOnChange(value);
  }

  @autobind
  onBlur() {
    if (this._expectedValue !== undefined) {
      this._finalizeOnChange();
      this._cancelOnChange();
    }
  }

}
