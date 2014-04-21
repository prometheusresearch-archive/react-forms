/**
 * @jsx React.DOM
 */
'use strict';

var cloneWithProps    = require('react/lib/cloneWithProps');
var merge             = require('react/lib/merge');
var forms             = require('react-forms');

var schema            = forms.schema;
var Form              = forms.Form;
var RepeatingFieldset = forms.RepeatingFieldset;
var Item              = forms.RepeatingFieldset.Item;
var Schema            = schema.Schema;
var List              = schema.List;
var Property          = schema.Property;

var DraggableMixin = {

  componentWillMount: function() {
    this.dragging = null;
  },

  onMouseDown: function(e) {
    if (!((!this.onDragStart || this.onDragStart(e) !== false) &&
          e.button === 0)) {
      return;
    }

    window.addEventListener('mouseup', this.onMouseUp);
    window.addEventListener('mousemove', this.onMouseMove);

    this.dragging = this.getDraggingInfo ?
      this.getDraggingInfo.apply(null, arguments) :
      true;
  },

  onMouseMove: function(e) {
    if (this.dragging === null) {
      return;
    }

    if (e.stopPropagation) {
      e.stopPropagation();
    }

    if (e.preventDefault) {
      e.preventDefault();
    }

    if (this.onDrag) {
      this.onDrag(e);
    }

  },

  onMouseUp: function(e) {
    this.dragging = null;

    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('mouseup', this.onMouseUp);

    if (this.onDragEnd) {
      this.onDragEnd(e);
    }
  }
};

/**
 * Custom RepeatingFieldset item component which adds sortable handle and
 * callbacks onSortStart and onSortOver
 */
var SortableItem = React.createClass({

  render: function() {
    return this.transferPropsTo(
      <Item className="SortableItem" onMouseMove={this.onSortOver}>
        {this.props.children}
        <div
          className="SortableHandle"
          onMouseDown={this.onSortStart}
          />
      </Item>
    );
  },

  onSortStart: function(e) {
    this.props.onSortStart(e, this.props.name);
  },

  onSortOver: function(e) {
    if (!this.props.sorting) {
      return;
    }
    var box = this.getDOMNode().getBoundingClientRect();
    var sortUp = e.clientY - box.top < box.height / 2;
    this.props.onSortOver(e, this.props.name, sortUp);
  }
});

var SortableRepeatingFieldset = React.createClass({

  mixins: [
    forms.FormElementMixin, // we need forms.FormElementMixin cause we want to update the form value
    forms.FormContextMixin,
    DraggableMixin // DraggableMixin provides basic dragging functionality
  ],

  getInitialState: function() {
    return {sorting: null};
  },

  render: function() {
    var className = cx({
      SortableRepeatingFieldset: true,
      SortableActive: this.state.sorting !== null
    });
    return this.transferPropsTo(
      <RepeatingFieldset className={className} item={this.renderItem} />
    );
  },

  /**
   * Render a single item in a fieldset
   *
   * It returns a placeholder for the currently sorted item if repeating
   * fieldset is in sortable state.
   */
  renderItem: function(props, child) {
    if (this.state.sorting && this.state.sorting.name === props.name) {
      return <div key={props.name} className="SortablePlaceholder" />
    } else {
      props = merge(props, {
        sorting: this.state.sorting,
        onSortStart: this.onSortStart,
        onSortOver: this.onSortOver,
      });
      return SortableItem(props, child);
    }
  },

  /**
   * Called by DraggableMixin on drag end
   */
  onDragEnd: function() {
    this.setState({sorting: null});
  },

  onSortStart: function(e, name) {
    // call into DraggableMixin to start dragging
    this.onMouseDown(e, name);
    this.setState({sorting: {name}});
  },

  onSortOver: function(e, name, sortUp) {
    if (!this.state.sorting) {
      return;
    }

    if (sortUp && this.state.sorting.name > name ||
        !sortUp && this.state.sorting.name < name) {
      
      // update sorting state and swap values
      this.setState({sorting: {name}});
      this.updateValue(swap(this.value(), name, this.state.sorting.name));
    }
  }
});

/**
 * Swap values in an array
 */
function swap(array, a, b) {
  array = array.slice(0);
  var aVal = array[a];
  var bVal = array[b];
  array[a] = bVal;
  array[b] = aVal;
  return array;
}

var Persons = (
  <List component={SortableRepeatingFieldset}>
    <Schema>
      <Property label="First name" name="firstName" />
      <Property label="Last name" name="lastName" />
    </Schema>
  </List>
);

module.exports = React.createClass({

  render: function() {
    return (
      <Demo name={this.props.name}>
        <Section>
          <p>
            This example demonstrates how to implement a custom component on top
            of <code>RepeatingFieldset</code> which allows to sort items via
            drag'n'drop. Add a few items and try to drag them with the handle to
            sort items in a list.
          </p>
        </Section>
        <ShowValue onUpdate horizontal>
          <Form schema={Persons} value={[
              {firstName: 'Jane', lastName: 'Roe'},
              {firstName: 'Richard', lastName: 'Miles'},
              {firstName: 'John', lastName: 'Doe'}
            ]} />
        </ShowValue>
      </Demo>
    );
  }
});
