/**
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var React           = require('react/addons');
var PropTypes       = React.PropTypes;
var cloneWithProps  = React.addons.cloneWithProps;
var cx              = React.addons.classSet;
var Label           = require('./Label');
var Element         = require('./Element');
var FormPropTypes   = require('./PropTypes');
var {List}          = require('./value/schema');
var emptyFunction   = require('./emptyFunction');

var Item = React.createClass({

  render() {
    var {className, ...props} = this.props;
    return (
      <div {...props} className={cx('rf-RepeatingFieldset__item', className)}>
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
    value: FormPropTypes.Ref,
    onAdd: PropTypes.func,
    onRemove: PropTypes.func,
    label: PropTypes.string,
    hint: PropTypes.string,
    noAddButton: PropTypes.bool
  },

  render() {
    var {item: Item, value, className, ...props} = this.props;
    return (
      <div {...props} className={cx('rf-RepeatingFieldset', className)}>
        <Label
          className="rf-RepeatingFieldset__label"
          label={this.props.label || value.value.node.props.get('label')}
          hint={this.props.hint || value.value.node.props.get('hint')}
          />
        {value.map((value, key) => {
          var onRemove = this.onRemove.bind(null, key);
          var children = <Element className="rf-RepeatingFieldset__child" value={value} />;
          return React.isValidElement(Item) ?
            cloneWithProps(Item, {key, onRemove, children, index: key, ref: key}) :
            <Item key={key} ref={key} onRemove={onRemove}>{children}</Item>;
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
    var value = this.props.value.value.value;
    var defaultValue = this.props.value.value.node.defaultValue;
    value = value.push(defaultValue);
    this.props.value.set(this.props.value.value.set(value));
    this.props.onAdd();
  },

  onRemove(index) {
    var value = this.props.value.value.value;
    value = value.splice(index, 1);
    this.props.value.set(this.props.value.value.set(value));
    this.props.onRemove(index);
  },

  getItemByIndex(index) {
    return this.refs[index];
  }

});

module.exports = RepeatingFieldset;
module.exports.Item = Item;
