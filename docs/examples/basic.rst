Basic form example
==================

This example demonstrates basic usage of React Forms library.

.. raw:: html

  <style>
    .MyForm {
      margin-bottom: 1.5em;
    }
  </style>
  <div id="example"></div>

Implementation
--------------

We start with a schema for our form:

.. jsx::
  :hidesource:

  var React = window.React = require('react/addons')
  var ReactForms = require('react-forms')
  var Demo = require('react-forms/lib/Demo')

  var Mapping = ReactForms.schema.Mapping
  var Scalar = ReactForms.schema.Scalar

.. jsx::

  var schema = Mapping({
    description: Scalar({
      required: true,
      label: 'Message',
      input: <textarea placeholder="Give us details here..." />
    }),
    email: Scalar({
      label: 'Email',
      required: true,
      input: <input type="email" />,
      validate: function(v) {
        if (!/.+\@.+\..+/.test(v)) {
          return new Error('should be in "user@server" format');
        }
      }
    })
  })

Note how we use ``required`` property on schema nodes to tell React Forms we
want the form to be valid only if values for those schema nodes are present.

We also provide a custom validator to ``email`` field.

Now we define a form component which wraps React Forms ``Form`` component and
provides a button to submit a form:

.. jsx::

  var MyForm = React.createClass({

    render: function() {

      // render Form as <div /> and transfer all props to it
      var form = this.transferPropsTo(
        <ReactForms.Form ref="form" component="div" />
      )

      // return <form /> component with rendered form and a submit button
      return (
        <form onSubmit={this.onSubmit} className="MyForm">
          {form}
          <button type="submit">Submit</button>
        </form>
      )
    },

    getValue: function() {
      return this.refs.form.getValue()
    },

    onSubmit: function(e) {
      e.preventDefault()
      var form = this.refs.form
      // check if form is valid
      if (form.getValidation().isFailure)  {
        // force rendering all validation errors
        form.makeDirty();
      } else {
        alert('form submitted with value:\n' + JSON.stringify(form.getValue()))
      }
    }
  })

And finally we render ``MyForm`` into DOM:

.. jsx::

  React.render(
    <Demo>
      <MyForm schema={schema} />
    </Demo>,
    document.getElementById('example'))
