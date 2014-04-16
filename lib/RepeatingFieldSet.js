/**
 * @jsx React.DOM
 */
'use strict';

var React                   = require('react');
var RepeatingFieldSetMixin  = require('./RepeatingFieldSetMixin');

var Item = React.createClass({

  render: function() {
    return this.transferPropsTo(
      <div className="rex-component-repeating-fieldset-item">
        {this.props.children}
        <button
          onClick={this.onRemove}
          type="button"
          className="rex-component-repeating-fieldset-remove">&times;</button>
      </div>
    );
  },

  onRemove: function() {
    if (this.props.onRemove) {
      this.props.onRemove(this.props.name);
    }
  }

});

var RepeatingFieldSet = React.createClass({

  mixins: [RepeatingFieldSetMixin],

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
      <div className="rex-component-repeating-fieldset">
        {schema.props.label && <h4>{schema.props.label}</h4>}
        {items}
        <button
          type="button"
          onClick={this.addItem}
          className="rex-component-repeating-fieldset-add">Add</button>
      </div>
    );
  }

});

module.exports = RepeatingFieldSet;
module.exports.Item = Item;
