/**
 * @jsx React.DOM
 */
'use strict';

var React             = require('react');
var Demo              = require('../../lib/Demo');
var Section           = require('../../lib/Section');
var Column            = require('../../lib/Column');
var Code              = require('../../lib/Code');
var ShowValue         = require('../../lib/ShowValue');

var forms             = require('react-forms');

var schema            = forms.schema;
var Form              = forms.Form;
var RepeatingFieldset = forms.RepeatingFieldset;
var Schema            = schema.Schema;
var List              = schema.List;
var Property          = schema.Property;

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

var Product = schema.createType((props) =>
  <Schema required={props.required} name={props.name} label={props.label}>
    <Property name="name" label="Name" />
    <Property name="price" label="Price" />
  </Schema>
);

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
          style={{visibility: this.props.hasUndo ? 'visible' : 'hidden'}}
          onClick={this.props.onUndo}
          type="button" className="btn btn-xs">
          ⟲
        </button>
        <button
          style={{visibility: this.props.hasRedo ? 'visible' : 'hidden'}}
          onClick={this.props.onRedo}
          type="button" className="btn btn-xs">
          ⟳
        </button>
      </div>
    );
  }
});

var FormWithUndo = React.createClass({
  mixins: [forms.FormMixin, UndoStack],

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

module.exports = React.createClass({

  render: function() {
    return (
      <Demo className="FormDemo UndoFormDemo" name={this.props.name}>
        <ShowValue onUpdate horizontal>
          <FormWithUndo schema={Products} />
        </ShowValue>
      </Demo>
    );
  }
});
