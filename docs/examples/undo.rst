Form with undo/redo stack
=========================

This examples demonstrates how to implement undo/redo functionality with React
Forms. Because React Forms keeps its state (value and validation info) immutable
it is possible to make a state snapshot at any time with almost no overhead.

This particular examples only make a snapshot before destructive operations such
as adding/removing a fieldset in repeating fieldset.

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

Due to the dataflow_ provided by React Forms the implementation is quite
compact.

UndoStack
~~~~~~~~~

.. jsx::

  var React = require('react')
  var Forms = require('react-forms')
  var schema = Forms.schema

First we define a reusable ``UndoStack`` mixin:

.. jsx::

  var UndoStack = {

    getInitialState: function() {
      return {undo: [], redo: []}
    },

    snapshot: function() {
      console.log('snapshot')
      var undo = this.state.undo.concat(this.getStateSnapshot())
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
    },

    _snapshotOnInterval: function() {
      if (!this.hasUndo() || this.peekUndo() !== this.getStateSnapshot()) {
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
``UndoControls`` and mixes in ``UndoStack`` mixin:

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
          <Forms.Form ref="form"
            component={React.DOM.div}
            schema={this.props.schema}
            defaultValue={this.props.defaultValue}
            onUpdate={this.onUpdate}
            />
        </form>
      )
    },

    getStateSnapshot: function() {
      return this.refs.form.getValue()
    },

    setStateSnapshot: function(value) {
      this.refs.form.setValue(value)
    },

    onUpdate: function(value, validation, path) {
      var updatedSchema = this.props.schema.childIn(path)
      if (schema.isList(updatedSchema) || !this.hasUndo()) {
        this.snapshot()
      }
    }
  })

The ``FormWithUndo`` usage is no different than using an original ``Form``
component:

.. jsx::

  function Product(props) {
    props = props || {}
    return (
      <schema.Mapping required={props.required} name={props.name} label={props.label}>
        <schema.Scalar name="name" label="Name" />
        <schema.Scalar type="number" name="price" label="Price" />
      </schema.Mapping>
    )
  }

  var Products = (
    <schema.List label="Products">
      <Product />
    </schema.List>
  )

.. jsx::

  React.renderComponent(
    <FormWithUndo
      schema={Products}
      defaultValue={[{name: 'TV', price: 1000}]}
      />,
    document.getElementById('example')
  )

.. _dataflow: /react-forms/documentation/#dataflow
