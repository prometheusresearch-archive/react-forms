Sortable list example
=====================

This example demonstrates how to implement a custom component on top of
``<RepeatingFieldset />`` which allows to sort items via drag'n'drop.

Add a few items and try to drag them with the handle to sort items in a list.

.. raw:: html

  <style>
    .SortableHandle {
      font-size: 80%;
      color: #aaa;
      cursor: move;
      padding: 10px;
    }
  </style>
  <div id="example"></div>

Implementation
--------------


First we need to bring some names into scope:

.. jsx::

  var React = require('react/addons')
  var cloneWithProps = React.addons.cloneWithProps
  var classSet = React.addons.classSet
  var ReactForms = require('react-forms')
  var Demo = require('react-forms/lib/Demo')
  var schema = ReactForms.schema

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

Now we implement a ``DraggableMixin`` which provides some basic drag'n'drop
functionality:

.. jsx::
  :harmony:

  var DraggableMixin = {

    componentWillMount() {
      this.dragging = null
    },

    onMouseDown(e) {
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

    onMouseMove(e) {
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

    onMouseUp(e) {
      this.dragging = null

      window.removeEventListener('mousemove', this.onMouseMove)
      window.removeEventListener('mouseup', this.onMouseUp)

      if (this.onDragEnd) {
        this.onDragEnd(e)
      }
    }
  }

.. jsx::
  :harmony:

  /**
   * Custom RepeatingFieldset item component which adds sortable handle and
   * callbacks onSortStart and onSortOver
   */
  var SortableItem = React.createClass({

    render() {
      var {children, onSortStart, onSortOver, sorting, ...props} = this.props
      return (
        <ReactForms.RepeatingFieldset.Item {...props} className="SortableItem" onMouseMove={this.onSortOver}>
          <div
            className="SortableHandle"
            onMouseDown={this.onSortStart}>
            drag to sort
          </div>
          {children}
        </ReactForms.RepeatingFieldset.Item>
      )
    },

    onSortStart(e) {
      var box = this.getDOMNode().getBoundingClientRect()
      this.props.onSortStart(e, {
        name: this.props.index,
        size: {height: box.height, width: box.width}
      })
    },

    onSortOver(e) {
      if (!this.props.sorting) {
        return
      }
      this.props.onSortOver(e, this.props.index)
    }
  })

.. jsx::
  :harmony:

  var SortableRepeatingFieldset = React.createClass({

    mixins: [DraggableMixin],

    getInitialState() {
      return {sorting: null}
    },

    render() {
      var className = classSet({
        SortableRepeatingFieldset: true,
        SortableActive: this.state.sorting !== null
      })
      return (
        <ReactForms.RepeatingFieldset
          {...this.props}
          className={className}
          item={this.renderItem}
          />
      )
    },

    /**
     * Render a single item in a fieldset
     *
     * It returns a placeholder for the currently sorted item if repeating
     * fieldset is in sortable state.
     */
    renderItem(props, child) {
      var sorting = this.state.sorting
      if (sorting && sorting.name === props.key) {
        return <div
          key={props.key}
          style={sorting.size}
          className="SortablePlaceholder" />
      } else {
        props = merge(props, {
          key: props.key,
          sorting: sorting,
          onSortStart: this.onSortStart,
          onSortOver: this.onSortOver,
        })
        return <SortableItem {...props}>{child}</SortableItem>
      }
    },

    /**
     * Called by DraggableMixin on drag end
     */
    onDragEnd() {
      this.setState({sorting: null})
      if (this._image) {
        document.body.removeChild(this._image)
        this._image = undefined
      }
    },

    onDrag(e) {
      if (this._image) {
        setImagePositionFromEvent(this._image, e)
      }
    },

    onSortStart(e, info) {
      // call into DraggableMixin to start dragging
      this.onMouseDown(e)

      var node = this._image = document.createElement('div')
      var val = this.props.value
      var schema = val.node.children
      var value = val.value.get(info.name)

      React.render(
        <ReactForms.Form schema={schema} defaultValue={value} />,
        node
      )

      node.classList.add('SortableImage')
      node.style.position = 'absolute'
      node.style.width = '' + info.size.width + 'px'
      node.style.height = '' + info.size.height + 'px'
      setImagePositionFromEvent(node, e)
      document.body.appendChild(node)

      this.setState({sorting: info})
    },

    onSortOver(e, name) {
      if (!this.state.sorting) {
        return
      }

      // update sorting state and swap values
      this.setState({sorting: merge(this.state.sorting, {name: name})})
      var value = this.props.value
      var a = value.value.get(name)
      var b = value.value.get(this.state.sorting.name)
      value.transform(function(value) {
        return value
          .splice(name, 1, b)
          .splice(this.state.sorting.name, 1, a)
      }.bind(this)).notify()
    }
  })

.. jsx::
  :harmony:

  var Persons = schema.List({component: SortableRepeatingFieldset},
    schema.Mapping({
      firstName: schema.Scalar({label: 'First name'}),
      lastName: schema.Scalar({label: 'Last name'})
    })
  )

  React.render(
    <Demo>
      <ReactForms.Form schema={Persons} defaultValue={[
          {firstName: 'Jane', lastName: 'Roe'},
          {firstName: 'Richard', lastName: 'Miles'},
          {firstName: 'John', lastName: 'Doe'}
        ]} />
    </Demo>,
    document.getElementById('example')
  )
