/**
 * @jsx React.DOM
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var React           = require('react');
var PropTypes       = React.PropTypes;
var cloneWithProps  = React.addons.cloneWithProps;
var Label           = require('./Label');
var Element         = require('./Element');
var FormPropTypes   = require('./PropTypes');
var {List}          = require('./schema');
var emptyFunction   = require('./emptyFunction');

var Item = React.createClass({

  render() {
    return this.transferPropsTo(
      <div className="rf-RepeatingFieldset__item">
        {this.props.children}
        <button
          onClick={this.props.onRemove}
          type="button"
          className="rf-RepeatingFieldset__remove">&times;</button>
      </div>
    );
  }
});

/**
 * A component which renders values which correspond to List schema node.
 */
var RepeatingFieldset = React.createClass({

  propTypes: {
    value: FormPropTypes.ValueOfType(List),
    onAdd: PropTypes.func,
    onRemove: PropTypes.func,
    label: PropTypes.string,
    hint: PropTypes.string,
    noAddButton: PropTypes.bool
  },

  render() {
    var {item, value} = this.props;
    return this.transferPropsTo(
      <div className="rf-RepeatingFieldset" value={undefined}>
        <Label
          className="rf-RepeatingFieldset__label"
          label={this.props.label || value.schema.props.get('label')}
          hint={this.props.hint || value.schema.props.get('hint')}
          />
        {value.map((value, key) => {
          var onRemove = this.onRemove.bind(null, key);
          var children = <Element value={value} />;
          return React.isValidComponent(item) ?
            cloneWithProps(item, {key, onRemove, children, index: key, ref: key}) :
            <item key={key} ref={key} onRemove={onRemove}>{children}</item>;
        })}
        {!this.props.noAddButton &&
          <button
            type="button"
            onClick={this.onAdd}
            className="rf-RepeatingFieldset__add">
            Add
          </button>}
      </div>
    );
  },

  getDefaultProps() {
    return {
      item: Item,
      onAdd: emptyFunction,
      onRemove: emptyFunction,
      noAddButton: false
    };
  },

  onAdd() {
    var defaultValue = this.props.value.emptyChild();
    var value = this.props.value.push(defaultValue).notify();
    this.props.onAdd(value.value[value.value.length - 1]);
  },

  onRemove(index) {
    this.props.value.splice(index, 1).notify();
    this.props.onRemove(index);
  },

  getItemByIndex(index) {
    return this.refs[index];
  }

});

module.exports = RepeatingFieldset;
module.exports.Item = Item;
