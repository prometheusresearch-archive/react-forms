---
template: example.js
---

# Form with undo/redo stack

This examples demonstrates how to implement undo/redo functionality with React
Forms. Because React Forms keeps its state (value and validation info) immutable
it is possible to make a state snapshot at any time with almost no overhead.

This particular examples only make a snapshot before destructive operations such
as adding/removing a fieldset in repeating fieldset.

<div id="example"></div>

## Implementation

Due to the [dataflow][] provided by React Forms the implementation is quite
compact.

#### UndoStack

First we define a reusable `UndoStack` mixin:

```
var UndoStack = {

  getInitialState: function() {
    return {undo: [], redo: []}
  },

  snapshot: function() {
    var undo = this.state.undo.concat(this.getStateSnapshot())
    this.setState({undo, redo: []})
  },

  hasUndo: function() {
    return this.state.undo.length > 0
  },

  hasRedo: function() {
    return this.state.redo.length > 0
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
    this.setState({undo, redo})
  }
}
```

This mixin is completely reusable outside of React Forms, it expects a component
which uses it to define `getStateSnapshot()` and `setStateSnapshot(snapshot)`
methods which returns and installs state snapshots.

#### UndoControls

Next we define a simple undo controls component which renders two buttons for
"undo" and "redo" actions and fire corresponding callbacks:

```
var UndoControls = React.createClass({
  render: function() {
    return (
      <div className="UndoControls">
        <button
          disabled={!this.props.hasUndo}
          onClick={this.props.onUndo}
          type="button" className="btn btn-info btn-xs">
          ⟲ Undo
        </button>
        <button
          disabled={!this.props.hasRedo}
          onClick={this.props.onRedo}
          type="button" className="btn btn-info btn-xs">
          ⟳ Redo
        </button>
      </div>
    )
  }
})
```

#### FormWithUndo

The final part is to define a custom `Form` component which renders
`UndoControls` and mixes in `UndoStack` mixin:

```
var FormWithUndo = React.createClass({
  mixins: [ReactForms.FormMixin, UndoStack],

  getStateSnapshot: function() {
    return {value: this.valueLens().val()}
  },

  setStateSnapshot: function(snapshot) {
    this.onValueUpdate(snapshot.value)
  },

  render: function() {
    return this.transferPropsTo(
      <form className="Form">
        <UndoControls
          hasUndo={this.hasUndo()}
          hasRedo={this.hasRedo()}
          onUndo={this.undo}
          onRedo={this.redo}
          />
        <RepeatingFieldset
          onRemove={this.snapshot}
          onAdd={this.snapshot} />
      </form>
    )
  }
})
```

The `FormWithUndo` usage is no different than using an original `Form`
component:

```
var Products = (
  <List label="Products">
    <Schema>
      <Property name="name" label="Name" />
      <Property type="number" name="price" label="Price" />
    </Schema>
  </List>
)

React.renderComponent(
  <FormWithUndo schema={Products} value={[{name: 'TV', price: 1000}]} />
  document.getElementById('example')
)
```

[dataflow]: /react-forms/documentation/#dataflow
