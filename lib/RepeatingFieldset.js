/**
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var React           = require('react/addons');
var PropTypes       = React.PropTypes;
var cx              = React.addons.classSet;
var cloneWithProps  = React.addons.cloneWithProps;
var Label           = require('./Label');
var Element         = require('./Element');
var FormPropTypes   = require('./PropTypes');
var emptyFunction   = require('./emptyFunction');
var defaultValue    = require('./defaultValue');

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
    value: FormPropTypes.Value,
    onAdd: PropTypes.func,
    onRemove: PropTypes.func,
    label: PropTypes.string,
    noLabel: PropTypes.bool,
    hint: PropTypes.string,
    noAddButton: PropTypes.bool
  },

  render() {
    var {
      item: Item, value, className, noAddButton,
      onAdd, onRemove, noLabel, label, hint, ...props
    } = this.props;
    return (
      <div {...props} className={cx('rf-RepeatingFieldset', className)}>
        {!noLabel &&
          <Label
            className="rf-RepeatingFieldset__label"
            label={label || value.node.props.get('label')}
            hint={hint || value.node.props.get('hint')}
            />}
        <div className="rf-RepeatingFieldset__items">
          {value.map((value, key) => {
            var onRemove = this.onRemove.bind(null, key);
            var children = <Element className="rf-RepeatingFieldset__child" value={value} />;
            return React.isValidElement(Item) ?
              cloneWithProps(
                Item,
                {key, onRemove, children, index: key, ref: key}) :
              <Item
                key={key}
                ref={key}
                index={key}
                onRemove={onRemove}>
                {children}
              </Item>;
          })}
        </div>
        {!noAddButton &&
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
    var newIdx = this.props.value.size;
    var valueToAdd = defaultValue(this.props.value.node.get(newIdx));
    this.props.value.transform(value => value.push(valueToAdd)).notify();
    this.props.onAdd();
  },

  onRemove(index) {
    this.props.value.transform(value => value.splice(index, 1)).notify();
    this.props.onRemove(index);
  },

  getItemByIndex(index) {
    return this.refs[index];
  }

});

module.exports = RepeatingFieldset;
module.exports.Item = Item;
