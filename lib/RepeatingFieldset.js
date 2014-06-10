/**
 * @jsx React.DOM
 */
'use strict';

var React                   = require('react');
var Label                   = require('./Label');
var RepeatingFieldsetMixin  = require('./RepeatingFieldsetMixin');

var Item = React.createClass({

  render: function() {
    return this.transferPropsTo(
      <div className="rf-RepeatingFieldset__item">
        {this.props.children}
        <button
          onClick={this.onRemove}
          type="button"
          className="rf-RepeatingFieldset__remove">&times;</button>
      </div>
    );
  },

  onRemove: function() {
    if (this.props.onRemove) {
      this.props.onRemove(this.props.name);
    }
  }

});

/**
 * A component which renders values which correspond to List schema node.
 */
var RepeatingFieldset = React.createClass({

  mixins: [RepeatingFieldsetMixin],

  getDefaultProps: function() {
    return {
      item: Item
    };
  },

  render: function() {
    var Component = this.props.item;
    var fields = this.renderFields().map((item) =>
      <Component
        key={item.props.name}
        name={item.props.name}
        onRemove={this.remove}>
        {item}
      </Component>
    );
    return this.transferPropsTo(
      <div className="rf-RepeatingFieldset">
        {this.renderLabel()}
        {fields}
        <button
          type="button"
          onClick={this.onAdd}
          className="rf-RepeatingFieldset__add">Add</button>
      </div>
    );
  },

  renderLabel: function() {
    var schema = this.value().schema;
    return (
      <Label
        className="rf-RepeatingFieldset__label"
        schema={schema}
        label={this.props.label}
        hint={this.props.hint}
        />
    );
  },

  onAdd: function () {
    this.add();
  }

});

module.exports = RepeatingFieldset;
module.exports.Item = Item;
