/**
 * @jsx React.DOM
 */

(function() {
'use strict';

var Form              = ReactForms.Form;
var Schema            = ReactForms.schema.Schema;
var List              = ReactForms.schema.List;
var Property          = ReactForms.schema.Property;
var RepeatingFieldset = ReactForms.RepeatingFieldset;
var cloneWithProps    = React.addons.cloneWithProps;
var classSet          = React.addons.classSet;
var Item              = RepeatingFieldset.Item;

function merge(a, b) {
  var k;
  var r = {};
  for (k in a) {
    r[k] = a[k];
  }
  for (k in b) {
    r[k] = b[k];
  }
  return r;
}

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
        <div
          className="SortableHandle"
          onMouseDown={this.onSortStart}>
          drag to sort</div>

        {this.props.children}
      </Item>
    );
  },

  onSortStart: function(e) {
    var box = this.getDOMNode().getBoundingClientRect();
    this.props.onSortStart(e, {
      name: this.props.name,
      size: {height: box.height, width: box.width}
    });
  },

  onSortOver: function(e) {
    if (!this.props.sorting) {
      return;
    }
    this.props.onSortOver(e, this.props.name);
  }
});

var SortableRepeatingFieldset = React.createClass({

  mixins: [
    ReactForms.FormElementMixin, // we need ReactForms.FormElementMixin cause we want to update the form value
    ReactForms.FormContextMixin,
    DraggableMixin // DraggableMixin provides basic dragging functionality
  ],

  getInitialState: function() {
    return {sorting: null};
  },

  render: function() {
    var className = classSet({
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
    var sorting = this.state.sorting;
    if (sorting && sorting.name === props.name) {
      return <div
        key={props.name}
        style={sorting.size}
        className="SortablePlaceholder" />;
    } else {
      props = merge(props, {
        sorting: sorting,
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
    if (this._image) {
      document.body.removeChild(this._image);
      this._image = undefined;
    }
  },

  onDrag: function(e) {
    if (this._image) {
      setImagePositionFromEvent(this._image, e);
    }
  },

  onSortStart: function(e, info) {
    // call into DraggableMixin to start dragging
    this.onMouseDown(e);

    var node = this._image = document.createElement('div');
    var schema = this.schema().children;
    var value = this.valueLens().val()[info.name];
    React.renderComponent(Form({schema, value}), node);
    node.classList.add('SortableImage');
    node.innerHTML
    node.style.position = 'absolute';
    node.style.width = '' + info.size.width + 'px';
    node.style.height = '' + info.size.height + 'px';
    setImagePositionFromEvent(node, e);
    document.body.appendChild(node);

    this.setState({sorting: info});
  },

  onSortOver: function(e, name) {
    if (!this.state.sorting) {
      return;
    }

    // update sorting state and swap values
    this.setState({sorting: merge(this.state.sorting, {name: name})});
    this.updateValue(swap(this.valueLens().val(), name, this.state.sorting.name));
  }
});

function setImagePositionFromEvent(node, e) {
  node.style.left = '' + (e.pageX + 10) + 'px';
  node.style.top = '' + (e.pageY + 10) + 'px';
}

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


React.renderComponent(
  <ShowValue onUpdate horizontal>
    <Form schema={Persons} value={[
        {firstName: 'Jane', lastName: 'Roe'},
        {firstName: 'Richard', lastName: 'Miles'},
        {firstName: 'John', lastName: 'Doe'}
      ]} />
  </ShowValue>,
  document.getElementById('example')
);

})();
