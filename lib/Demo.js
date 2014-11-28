/**
 * @flow
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var React = require('react');

var Demo = React.createClass({

  render(): ?ReactElement {
    var {children, ...props} = this.props;
    children = React.Children.only(children);
    children = React.addons.cloneWithProps(children, {
      onUpdate: this.onUpdate,
      ref: 'form'
    });
    return (
      <div {...props} className="rf-Demo">
        <div className="rf-Demo__form">
          {children}
        </div>
        <div className="rf-Demo__inspector">
          <h6 className="rf-Demo__label">Value:</h6>
          <pre className="rf-Demo__value">
            {JSON.stringify(this.state.value, null, 2)}
          </pre>
          <h6 className="rf-Demo__label">Validation State:</h6>
          <pre className="rf-Demo__value">
            {JSON.stringify(this.state.validation, null, 2)}
          </pre>
        </div>
      </div>
    );
  },

  getInitialState(): {value: ?any} {
    return {value: null, validation: null};
  },

  onUpdate(value: any, validation: any, keyPath: Array<string>) {
    this.setState({value: value.toJS(), validation: validation.toJS()});
  },

  componentDidMount() {
    var value = this.refs.form.getValue().toJS();
    var validation = this.refs.form.getValidation().toJS();
    this.setState({value, validation});
  }
});

module.exports = Demo;
