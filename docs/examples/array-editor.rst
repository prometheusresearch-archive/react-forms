Array editor example
====================

This example implements custom repeating fieldset which adds a new item when
user focuses on a last item in a fieldset. This allows to enter array values by
simply moving focus forward using ``Tab`` key.

.. raw:: html

  <div id="example"></div>

Implementation
--------------

.. jsx::

  var React = require('react')
  var ReactForms = require('react-forms')

  var Form = ReactForms.Form
  var List = ReactForms.schema.List
  var Property = ReactForms.schema.Property

.. jsx::

  var ArrayEditor = React.createClass({

    mixins: [ReactForms.RepeatingFieldsetMixin],

    onFocus: function(idx, e) {
      var value = this.value();
      if (value.value.length - 1 === idx) {
        this.onValueUpdate(value.add());
      }
    },

    onRemoveItem: function(idx) {
      var value = this.value();
      if (idx === 0 && value.value.length === 1) {
        this.onValueUpdate(value.updateValue([null]));
      } else {
        this.onValueUpdate(value.remove(idx));
      }
    },

    decorate: function(item) {
      item = React.addons.cloneWithProps(
        item,
        {onFocus: this.onFocus.bind(null, item.props.name)}
      )
      return (
        <div key={item.props.name} className="Item">
          {item}
          <button
            onClick={this.onRemoveItem.bind(null, item.props.name)}
            tabIndex="-1"
            type="button"
            className="Remove">&times;
          </button>
        </div>
      )
    },

    render: function() {
      var fields = this.renderFields().map(this.decorate)
      return this.transferPropsTo(<div className="ArrayEditor">{fields}</div>)
    }

  })

.. jsx::

  var Values = (
    <List component={ArrayEditor}>
      <Property />
    </List>
  )

  React.renderComponent(
    <Form schema={Values} value={['focus on me!']} />,
    document.getElementById('example')
  )
