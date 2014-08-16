/**
 * @jsx React.DOM
 */
'use strict';

var React                   = require('react/addons');
var PropTypes               = React.PropTypes;
var cx                      = React.addons.classSet;
var Label                   = require('./Label');
var FormElement             = require('./FormElement');
var FormPropTypes           = require('./PropTypes');
var {List}                  = require('./schema');
var emptyFunction           = require('./emptyFunction');

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
    onRemove: PropTypes.func
  },

  render() {
    var {item, value} = this.props;
    return this.transferPropsTo(
      <div className="rf-RepeatingFieldset">
        <Label
          className="rf-RepeatingFieldset__label"
          label={this.props.label || value.schema.props.label}
          hint={this.props.hint || value.schema.props.hint}
          />
        {value.map((value, key) =>
          <item key={key} onRemove={this.onRemove.bind(null, key)}>
            <FormElement value={value} />
          </item>
        )}
        <button
          type="button"
          onClick={this.onAdd}
          className="rf-RepeatingFieldset__add">Add</button>
      </div>
    );
  },

  getDefaultProps() {
    return {
      item: Item,
      onAdd: emptyFunction,
      onRemove: emptyFunction
    };
  },

  onAdd() {
    var value = this.props.value.add().notify();
    this.props.onAdd(value.value[value.value.length - 1]);
  },

  onRemove(index) {
    this.props.value.remove(index).notify();
    this.props.onRemove(index);
  }

});

module.exports = RepeatingFieldset;
module.exports.Item = Item;
