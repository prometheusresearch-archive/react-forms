/**
 * @copyright 2015, Prometheus Research, LLC
 * @flow
 */

import React, {PropTypes} from 'react';
import debounce from 'lodash/debounce';
import noop from 'lodash/noop';

type Props = {
  Component: string | Function;
  debounce: number;
  onChange: Function;
  onBlur: Function;
  value: string;
};

type State = {
  value: ?string;
};

/**
 * Input component with debounce.
 */
export default class Input extends React.Component {

  _expectedValue: ?string;
  _finalizeOnChangeDebounced: Function;

  state: State;
  props: Props;

  static propTypes = {
    Component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    debounce: PropTypes.number,
    value: PropTypes.any,
    onChange: PropTypes.func
  };

  static defaultProps = {
    Component: 'input',
    debounce: 100,
    onChange: noop,
    onBlur: noop,
  };

  constructor(props: Props) {
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

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.value !== this._expectedValue) {
      if (nextProps.value !== this.props.value) {
        this._cancelOnChange();
        this.setState({value: nextProps.value});
      }
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

  _scheduleOnChange(value: ?string) {
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

  onChange = (e: UIEvent | ?string) => {
    if (typeof e === 'string') {
      this._scheduleOnChange(e);
    } else if (e && e.target instanceof HTMLInputElement) {
      let value = e.target.value;
      if (value === '') {
        value = null;
      }
      this._scheduleOnChange(value);
    }
  };

  onBlur = (e: UIEvent) => {
    this.props.onBlur(e);
    if (this._expectedValue !== undefined) {
      this._finalizeOnChange();
      this._cancelOnChange();
    }
  };

}
