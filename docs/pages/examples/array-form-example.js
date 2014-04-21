/**
 * @jsx React.DOM
 */
'use strict';

var cloneWithProps   = require('react/lib/cloneWithProps');
var forms            = require('react-forms');

var schema           = forms.schema;
var Form             = forms.Form;
var Schema           = schema.Schema;
var List             = schema.List;
var Property         = schema.Property;

var Values = (
  <List>
    <Property />
  </List>
);

var ArrayEditor = React.createClass({

  mixins: [forms.RepeatingFieldsetMixin],

  onFocus: function(idx, e) {
    if (this.value().length - 1 === idx) {
      this.addItem();
    }
  },

  onRemoveItem: function(idx) {
    if (idx === 0 && this.value().length === 1) {
      this.updateValue([null]);
    } else {
      this.removeItem(idx);
    }
  },

  render: function() {
    var items = this.items().map((item) =>
      <div key={item.props.name} className="Item">
        {cloneWithProps(item, {onFocus: this.onFocus.bind(null, item.props.name)})}
        <button
          onClick={this.onRemoveItem.bind(null, item.props.name)}
          tabIndex="-1"
          type="button"
          className="Remove">&times;</button>
      </div>
    );
    return this.transferPropsTo(<div className="ArrayEditor">{items}</div>);
  }

});

var ArrayForm = React.createClass({
  mixins: [forms.FormMixin],

  getDefaultProps: function() {
    return {value: []};
  },

  render: function() {
    return (
      <form>
        <ArrayEditor defaultValue={null} />
      </form>
    );
  }
});

var ArrayFormDemo = React.createClass({

  render: function() {
    return (
      <Demo className="FormDemo ArrayFormDemo" name={this.props.name}>
        <ShowValue horizontal>
          <ArrayForm schema={Values} value={['focus on me!']} />
        </ShowValue>
      </Demo>
    );
  }
});

module.exports = ArrayFormDemo;
