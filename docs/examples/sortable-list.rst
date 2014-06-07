Sortable list example
=====================

This example demonstrates how to implement a custom component on top of
``RepeatingFieldset`` which allows to sort items via drag'n'drop.

Add a few items and try to drag them with the handle to sort items in a list.

.. raw:: html

  <div id="example"></div>

Implementation
--------------


First we need to bring some names into scope:

.. jsx::

  var React = require('react')
  var ReactForms = require('react-forms')

  var Form = ReactForms.Form
  var Schema = ReactForms.schema.Schema
  var List = ReactForms.schema.List
  var Property = ReactForms.schema.Property
  var RepeatingFieldset = ReactForms.RepeatingFieldset
  var cloneWithProps = React.addons.cloneWithProps
  var classSet = React.addons.classSet
  var Item = RepeatingFieldset.Item

A little utility which will be used in implementation:

.. jsx::

  function merge(a, b) {
    var k
    var r = {}
    for (k in a) {
      r[k] = a[k]
    }
    for (k in b) {
      r[k] = b[k]
    }
    return r
  }

  function setImagePositionFromEvent(node, e) {
    node.style.left = '' + (e.pageX + 10) + 'px'
    node.style.top = '' + (e.pageY + 10) + 'px'
  }

  /**
   * Swap values in an array
   */
  function swap(array, a, b) {
    array = array.slice(0)
    var aVal = array[a]
    var bVal = array[b]
    array[a] = bVal
    array[b] = aVal
    return array
  }

Now we implement a ``DraggableMixin`` which provides some basic drag'n'drop
functionality:

.. jsx::

  var DraggableMixin = {

    componentWillMount: function() {
      this.dragging = null
    },

    onMouseDown: function(e) {
      if (!((!this.onDragStart || this.onDragStart(e) !== false) &&
            e.button === 0)) {
        return
      }

      window.addEventListener('mouseup', this.onMouseUp)
      window.addEventListener('mousemove', this.onMouseMove)

      this.dragging = this.getDraggingInfo ?
        this.getDraggingInfo.apply(null, arguments) :
        true
    },

    onMouseMove: function(e) {
      if (this.dragging === null) {
        return
      }

      if (e.stopPropagation) {
        e.stopPropagation()
      }

      if (e.preventDefault) {
        e.preventDefault()
      }

      if (this.onDrag) {
        this.onDrag(e)
      }

    },

    onMouseUp: function(e) {
      this.dragging = null

      window.removeEventListener('mousemove', this.onMouseMove)
      window.removeEventListener('mouseup', this.onMouseUp)

      if (this.onDragEnd) {
        this.onDragEnd(e)
      }
    }
  }

.. jsx::

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
      )
    },

    onSortStart: function(e) {
      var box = this.getDOMNode().getBoundingClientRect()
      this.props.onSortStart(e, {
        name: this.props.name,
        size: {height: box.height, width: box.width}
      })
    },

    onSortOver: function(e) {
      if (!this.props.sorting) {
        return
      }
      this.props.onSortOver(e, this.props.name)
    }
  })

.. jsx::

  var SortableRepeatingFieldset = React.createClass({

    mixins: [
      ReactForms.FormElementMixin, // we need ReactForms.FormElementMixin cause we want to update the form value
      ReactForms.FormContextMixin,
      DraggableMixin // DraggableMixin provides basic dragging functionality
    ],

    getInitialState: function() {
      return {sorting: null}
    },

    render: function() {
      var className = classSet({
        SortableRepeatingFieldset: true,
        SortableActive: this.state.sorting !== null
      })
      return this.transferPropsTo(
        <RepeatingFieldset className={className} item={this.renderItem} />
      )
    },

    /**
    * Render a single item in a fieldset
    *
    * It returns a placeholder for the currently sorted item if repeating
    * fieldset is in sortable state.
    */
    renderItem: function(props, child) {
      var sorting = this.state.sorting
      if (sorting && sorting.name === props.name) {
        return <div
          key={props.name}
          style={sorting.size}
          className="SortablePlaceholder" />
      } else {
        props = merge(props, {
          sorting: sorting,
          onSortStart: this.onSortStart,
          onSortOver: this.onSortOver,
        })
        return SortableItem(props, child)
      }
    },

    /**
    * Called by DraggableMixin on drag end
    */
    onDragEnd: function() {
      this.setState({sorting: null})
      if (this._image) {
        document.body.removeChild(this._image)
        this._image = undefined
      }
    },

    onDrag: function(e) {
      if (this._image) {
        setImagePositionFromEvent(this._image, e)
      }
    },

    onSortStart: function(e, info) {
      // call into DraggableMixin to start dragging
      this.onMouseDown(e)

      var node = this._image = document.createElement('div')
      var val = this.value()
      var schema = val.schema.children
      var value = val.value[info.name]

      React.renderComponent(Form({schema: schema, value: value}), node)

      node.classList.add('SortableImage')
      node.style.position = 'absolute'
      node.style.width = '' + info.size.width + 'px'
      node.style.height = '' + info.size.height + 'px'
      setImagePositionFromEvent(node, e)
      document.body.appendChild(node)

      this.setState({sorting: info})
    },

    onSortOver: function(e, name) {
      if (!this.state.sorting) {
        return
      }

      // update sorting state and swap values
      this.setState({sorting: merge(this.state.sorting, {name: name})})
      this.onValueUpdate(this.value().swap(name, this.state.sorting.name))
    }
  })

.. jsx::

  var Persons = (
    <List component={SortableRepeatingFieldset}>
      <Schema>
        <Property label="First name" name="firstName" />
        <Property label="Last name" name="lastName" />
      </Schema>
    </List>
  )


  React.renderComponent(
    <Form schema={Persons} value={[
        {firstName: 'Jane', lastName: 'Roe'},
        {firstName: 'Richard', lastName: 'Miles'},
        {firstName: 'John', lastName: 'Doe'}
      ]} />,
    document.getElementById('example')
  )
