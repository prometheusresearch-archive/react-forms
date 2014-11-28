Tips
====

How to render a form field in read-only mode
--------------------------------------------

Sometimes an application would want to render some of the form fields in
read-only mode. For that you need to create a custom form component which won't
render any input but a read-only value:

.. jsx::
  :harmony:

  var React = require('react')
  var ReactForms = require('react-forms')

  var ReadOnlyField = React.createClass({

    propTypes: {
      value: React.PropTypes.instanceOf(ReactForms.Value)
    },

    render() {
      var {value} = this.props
      return (
        <div>
          <ReactForms.Label label={value.node.props.get('label')} />
          <span>{value.value}</span>
        </div>
      )
    }
  })

Then we need to assign ``<ReadOnlyField />`` component to scalar nodes in schema
which we want to render as read-only fields:

.. jsx::
  :harmony:

  var Demo = require('react-forms/lib/Demo')
  var {Mapping, List, Scalar} = ReactForms.schema

  var schema = Mapping({
    id: Scalar({label: 'ID', component: ReadOnlyField}),
    title: Scalar({label: 'Title'})
  })

  React.render(
    <Demo>
      <ReactForms.Form
        schema={schema}
        defaultValue={{id: 42, title: 'Title'}} />
    </Demo>,
    document.getElementById('example-1')
  )

.. raw:: html

  <div id="example-1"></div>
