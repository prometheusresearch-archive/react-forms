Form with undo/redo stack
=========================

This examples demonstrates how to implement undo/redo functionality with React
Forms. Because React Forms keeps its state (value and validation info) immutable
it is possible to make a state snapshot at any time with almost no overhead.

.. raw:: html

  <style>
    .UndoControls {
      margin: 10px 0;
      text-align: center;
      font-size: 80%;
    }
  </style>
  <div id="example"></div>

Implementation
--------------

UndoStack
~~~~~~~~~

.. jsx::
  :hidesource:

  var React = require('react')
  var ReactForms = require('react-forms')
  var Demo = require('react-forms/lib/Demo')
  var schema = ReactForms.schema

First we define a reusable ``UndoStack`` mixin which keeps undo/redo stacks in
state:

.. jsx::

  var UndoStack = {

    getInitialState: function() {
      return {undo: [], redo: []}
    },

    snapshot: function() {
      var undo = this.state.undo.concat([this.getStateSnapshot()])
      if (undo.length > (this.maximumUndoLength || 80)) {
        undo.shift()
      }
      this.setState({undo: undo, redo: []})
    },

    hasUndo: function() {
      return this.state.undo.length > 0
    },

    hasRedo: function() {
      return this.state.redo.length > 0
    },

    peekUndo: function() {
      return this.state.undo[this.state.undo.length - 1]
    },

    redo: function() {
      this._undoImpl(true)
    },

    undo: function() {
      this._undoImpl()
    },

    _undoImpl: function(isRedo) {
      var undo = this.state.undo.slice(0)
      var redo = this.state.redo.slice(0)
      var snapshot

      if (isRedo) {
        if (redo.length === 0) {
          return
        }
        snapshot = redo.pop()
        undo.push(this.getStateSnapshot())
      } else {
        if (undo.length === 0) {
          return
        }
        snapshot = undo.pop()
        redo.push(this.getStateSnapshot())
      }

      this.setStateSnapshot(snapshot)
      this.setState({undo: undo, redo: redo})
    }
  }

This mixin is completely reusable outside of React Forms, it expects a component
which uses it to define ``getStateSnapshot()`` and
``setStateSnapshot(snapshot)`` methods which returns and installs state
snapshots.

Now, we define another reusable mixin which builds up on top of ``UndoStack``
mixin and does snapshots periodically with configurable interval:

.. jsx::

  var UndoIntervalStrategy = {

    componentDidMount: function() {
      this.__undoInterval = setInterval(
        this._snapshotOnInterval,
        this.undoInterval || 2000
      )
    },

    componentWillUnmount: function() {
      clearInterval(this.__undoInterval)
      this.__undoInterval = undefined
    },

    _snapshotOnInterval: function() {
      if (this.hasChanges()) {
        this.snapshot()
      }
    }
  }

UndoControls
~~~~~~~~~~~~

Next we define a simple undo controls component which renders two buttons for
"undo" and "redo" actions and fire corresponding callbacks:

.. jsx::

  var UndoControls = React.createClass({
    render: function() {
      return (
        <div className="UndoControls">
          <button
            disabled={!this.props.hasUndo}
            onClick={this.props.onUndo}
            type="button" className="button">
            ⟲ Undo
          </button>
          <button
            disabled={!this.props.hasRedo}
            onClick={this.props.onRedo}
            type="button" className="button">
            ⟳ Redo
          </button>
        </div>
      )
    }
  })

FormWithUndo
~~~~~~~~~~~~

The final part is to define a custom ``<Form />`` component which renders
``UndoControls`` and mixes in ``UndoStack`` and ``UndoIntervalStrategy`` mixins:

.. jsx::

  var FormWithUndo = React.createClass({
    mixins: [UndoStack, UndoIntervalStrategy],

    render: function() {
      return this.transferPropsTo(
        <form className="Form">
          <UndoControls
            hasUndo={this.hasUndo()}
            hasRedo={this.hasRedo()}
            onUndo={this.undo}
            onRedo={this.redo}
            />
          <ReactForms.Form ref="form"
            component={React.DOM.div}
            schema={this.props.schema}
            defaultValue={this.props.defaultValue}
            onUpdate={this.onUpdate}
            />
        </form>
      )
    },

    getValue: function() {
      return this.refs.form.getValue()
    },

    /** UndoStack */
    getStateSnapshot: function() {
      this.__hasChanges = false
      return this.refs.form.getValue()
    },

    /** UndoStack */
    setStateSnapshot: function(value) {
      this.refs.form.setValue(value)
    },

    /** UndoIntervalStrategy */
    hasChanges: function() {
      return this.__hasChanges
    },

    onUpdate: function(value, validation, path) {
      this.__hasChanges = true
      var updatedSchema = this.props.schema.getIn(path)
      if (schema.isList(updatedSchema) || !this.hasUndo()) {
        this.snapshot()
      }
      this.props.onUpdate(value, validation, path);
    }

  })

The ``FormWithUndo`` usage is no different than using an original ``Form``
component:

.. jsx::

  function Product(props) {
    props = props || {}
    return schema.Mapping({
      required: props.required,
      name: props.name,
      label: props.label
    }, {
      name: schema.Scalar({label: "Name"}),
      price: schema.Scalar({type: "number", label: "Price"})
    })
  }

  var Products = schema.List({label: 'Products'},
    Product())

.. jsx::

  React.render(
    <Demo>
      <FormWithUndo
        schema={Products}
        defaultValue={[{name: 'TV', price: 1000}]}
        />
    </Demo>,
    document.getElementById('example')
  )

.. _dataflow: /react-forms/documentation/#dataflow
