/**
 * @jsx React.DOM
 */

(function() {
'use strict';

var Form              = ReactForms.Form;
var FormFor           = ReactForms.FormFor;
var Schema            = ReactForms.schema.Schema;
var List              = ReactForms.schema.List;
var Property          = ReactForms.schema.Property;
var RepeatingFieldset = ReactForms.RepeatingFieldset;

var UndoStack = {

  getInitialState: function() {
    return {undo: [], redo: []};
  },

  snapshot: function() {
    var undo = this.state.undo.concat(this.getStateSnapshot());
    this.setState({undo, redo: []});
  },

  hasUndo: function() {
    return this.state.undo.length > 0;
  },

  hasRedo: function() {
    return this.state.redo.length > 0;
  },

  redo: function() {
    this._undoImpl(true);
  },

  undo: function() {
    this._undoImpl();
  },

  _undoImpl: function(isRedo) {
    var undo = this.state.undo.slice(0);
    var redo = this.state.redo.slice(0);
    var snapshot;

    if (isRedo) {
      if (redo.length === 0) {
        return
      }
      snapshot = redo.pop();
      undo.push(this.getStateSnapshot());
    } else {
      if (undo.length === 0) {
        return
      }
      snapshot = undo.pop();
      redo.push(this.getStateSnapshot());
    }

    this.setStateSnapshot(snapshot);
    this.setState({undo, redo});
  }
};

function Product(props) {
  props = props || {};
  return (
    <Schema required={props.required} name={props.name} label={props.label}>
      <Property name="name" label="Name" />
      <Property name="price" label="Price" />
    </Schema>
  );
}

var Products = (
  <List label="Products">
    <Product />
  </List>
);

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
    );
  }
});

var FormWithUndo = React.createClass({
  mixins: [ReactForms.FormMixin, UndoStack],

  getDefaultProps: function() {
    return {value: []};
  },

  getStateSnapshot: function() {
    return {value: this.value(), validation: this.validation()};
  },

  setStateSnapshot: function(snapshot) {
    this.onValueUpdate(snapshot.value, snapshot.validation);
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
          onRemoveItem={this.snapshot}
          onAddItem={this.snapshot} />
      </form>
    );
  }
});

React.renderComponent(
  <ShowValue onUpdate horizontal>
    <FormWithUndo schema={Products} />
  </ShowValue>,
  document.getElementById('example')
);

})();
