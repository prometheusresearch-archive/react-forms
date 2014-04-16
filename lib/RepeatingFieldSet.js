/**
 * @jsx React.DOM
 */
'use strict';

var React                   = require('react');
var RepeatingFieldsetMixin  = require('./RepeatingFieldsetMixin');

var Item = React.createClass({

  render: function() {
    return this.transferPropsTo(
      <div className="react-forms-repeating-fieldset-item">
        {this.props.children}
        <button
          onClick={this.onRemove}
          type="button"
          className="react-forms-repeating-fieldset-remove">&times;</button>
      </div>
    );
  },

  onRemove: function() {
    if (this.props.onRemove) {
      this.props.onRemove(this.props.name);
    }
  }

});

var RepeatingFieldset = React.createClass({

  mixins: [RepeatingFieldsetMixin],

  getDefaultProps: function() {
    return {
      item: Item
    };
  },

  render: function() {
    var schema = this.schema();
    var Component = this.props.item;
    var items = this.items().map((item) =>
      <Component
        key={item.props.name}
        name={item.props.name}
        onRemove={this.removeItem}>
        {item}
      </Component>
    );
    return this.transferPropsTo(
      <div className="react-forms-repeating-fieldset">
        {schema.props.label && <h4>{schema.props.label}</h4>}
        {items}
        <button
          type="button"
          onClick={this.addItem}
          className="react-forms-repeating-fieldset-add">Add</button>
      </div>
    );
  }

});

module.exports = RepeatingFieldset;
module.exports.Item = Item;
