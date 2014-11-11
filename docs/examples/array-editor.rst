Array editor example
====================

This example implements custom repeating fieldset which adds a new item when
user focuses on a last item in a fieldset. This allows to enter array values by
simply moving focus forward using ``Tab`` key.

.. raw:: html

  <style>
    .rf-repeating-fieldset-remove {
      top: 0 !important;
    }
  </style>
  <div id="example"></div>

Implementation
--------------

.. jsx::

  var React = require('react/addons')
  var cloneWithProps = React.addons.cloneWithProps
  var Forms = require('react-forms')
  var schema = Forms.schema

.. jsx::

  var ArrayItem = React.createClass({

    render: function() {
      return (
        <div className="rf-RepeatingFieldset__item">
          {cloneWithProps(this.props.children, {onFocus: this.onFocus})}
          <button
            onClick={this.props.onRemove}
            type="button"
            className="rf-RepeatingFieldset__remove">&times;</button>
        </div>
      )
    },

    onFocus: function() {
      this.props.onFocus(this.props.key)
    }
  })

  var ArrayEditor = React.createClass({

    render: function() {
      return this.transferPropsTo(
        <Forms.RepeatingFieldset
          className="ArrayEditor"
          onRemove={this.onRemove}
          item={<ArrayItem onFocus={this.onFocus} />}
          />
      )
    },

    onFocus: function(idx) {
      var value = this.props.value
      if (value.value.size - 1 === idx) {
        value.set(value.value.push(value.schema.children.defaultValue)).notify()
      }
    },

    onRemove: function(idx) {
      var nextValue;
      var value = this.props.value
      if (idx === 0 && value.value.size === 1) {
        nextValue = [value.node.children.defaultValue];
      } else {
        nextValue = value.value.splice(idx, 1);
      }
      value.set(nextValue).notify()
    }
  })

.. jsx::

  var Values = schema.List({component: ArrayEditor},
    schema.Scalar());

  React.renderComponent(
    <Forms.Form schema={Values} defaultValue={['focus on me!']} />,
    document.getElementById('example')
  )
