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
  :harmony:

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
      validate(node, value) {
        if (!/.+\@.+\..+/.test(value)) {
          return new Error('should be in "user@server.domain" format');
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
  :harmony:

  var MyForm = React.createClass({

    render() {
      return (
        <form onSubmit={this.onSubmit} className="MyForm">
          <ReactForms.Form {...this.props} ref="form" component="div" />
          <button type="submit">Submit</button>
        </form>
      )
    },

    getValidation() {
      return this.refs.form.getValidation()
    },

    getValue() {
      return this.refs.form.getValue()
    },

    onSubmit(e) {
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
