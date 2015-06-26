/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React, {PropTypes} from 'react';
import debounce           from 'lodash/function/debounce';
import emptyFunction      from './emptyFunction';

/**
 * Input component with debounce.
 */
export default class Input extends React.Component {

  static propTypes = {
    element: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    debounce: PropTypes.number,
    value: PropTypes.string,
    onChange: PropTypes.func
  };

  static defaultProps = {
    element: 'input',
    debounce: 100,
    onChange: emptyFunction
  };

  constructor(props) {
    super(props);
    this.state = {value: props.value};
    this._expectedValue = undefined;
    this._scheduleOnChange = props.debounce ?
      debounce(Input.prototype._scheduleOnChange.bind(this), props.debounce) :
      Input.prototype._scheduleOnChange.bind(this);
  }

  render() {
    let {element: Element, debounce: debounceEnabled, value, ...props} = this.props;
    if (debounceEnabled) {
      value = this.state.value;
    }
    return <Element {...props} value={value} onChange={this.onChange} />;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this._expectedValue) {
      this.cancelOnChange();
    }
    if (nextProps.debounce !== this.props.debounce) {
      this.cancelOnChange();
      this._scheduleOnChange = nextProps.debounce ?
        debounce(Input.prototype._scheduleOnChange.bind(this), nextProps.debounce) :
        Input.prototype._scheduleOnChange.bind(this);
    }
  }

  componentWillUnmount() {
    this.cancelOnChange();
  }

  _scheduleOnChange() {
    let value = this._expectedValue;
    this._expectedValue = undefined;
    this.props.onChange(value);
  }

  scheduleOnChange(value) {
    this.setState({value});
    this._expectedValue = value;
    this._scheduleOnChange();
  }

  cancelOnChange() {
    if (this._scheduleOnChange.cancel) {
      this._expectedValue = undefined;
      this._scheduleOnChange.cancel();
    }
  }

  onChange = (e) => {
    let value = e && e.target && 'value' in e.target ?
      e.target.value :
      e;
    this.scheduleOnChange(value);
  }

}
