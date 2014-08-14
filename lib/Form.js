/**
 * @jsx React.DOM
 */
'use strict';

var React       = require('react/addons');
var cx          = React.addons.classSet;
var FormMixin   = require('./FormMixin');
var FormElement = require('./FormElement');
var v           = require('./validation');

var Form = React.createClass({
  mixins: [FormMixin],

  propTypes: {
    component: React.PropTypes.constructor,
    onChange: React.PropTypes.func,
    onUpdate: React.PropTypes.func
  },

  render() {
    var value = this.value();
    var component = this.props.component;
    var className = cx({
      'rf-Form': true,
      'rf-Form--invalid': v.isFailure(value.validation)
    });
    return this.transferPropsTo(
      <component className={className}>
        <FormElement value={value} />
      </component>
    );
  },

  getDefaultProps() {
    return {component: React.DOM.form};
  },

  valueUpdated(value, update) {
    var isSuccess = v.isSuccess(value.validation);
    if (this.props.onUpdate) {
      this.props.onUpdate(value.value, isSuccess, update);
    }
    if (this.props.onChange && isSuccess) {
      this.props.onChange(value.value, update);
    }
  }
});

module.exports = Form;
