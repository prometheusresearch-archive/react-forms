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
        <pre className="rf-Demo__value">
          {JSON.stringify(this.state.value, null, 2)}
        </pre>
      </div>
    );
  },

  getInitialState(): {value: ?any} {
    return {value: null};
  },

  onUpdate(value: any) {
    this.setState({value: value.toJS()});
  },

  componentDidMount() {
    var value = this.refs.form.getValue().toJS();
    this.setState({value});
  }
});

module.exports = Demo;
