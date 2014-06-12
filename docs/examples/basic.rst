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

  var React = require('react')
  var ReactForms = require('react-forms')

  var Schema = ReactForms.schema.Schema
  var Property = ReactForms.schema.Property
  var Form = ReactForms.Form

.. jsx::

  var schema = (
    <Schema>
      <Property
        name="description"
        required
        label="Message"
        input={<textarea placeholder="Give us details here..." />}
      />
      <Property
        name="email"
        label="Email"
        required
        input={<input type="email" />}
        validate={function(v) { return /.+\@.+\..+/.test(v) }}
      />
    </Schema>
  )

Now we define a form component which wraps React Forms ``Form`` component and
provides a button to submit a form:

.. jsx::

  var MyForm = React.createClass({

    render: function() {

      // render Form as <div /> and transfer all props to it
      var form = this.transferPropsTo(
        <Form ref="form" component={React.DOM.div} />
      )

      // return <form /> component with rendered form and a submit button
      return (
          <form onSubmit={this.onSubmit} className="MyForm">
            {form}
            <button type="submit">Submit</button>
          </form>
      )
    },

    onSubmit: function(e) {
      e.preventDefault()

      // check if form is valid
      var validation = this.refs.form.value().validation
      if (ReactForms.validation.isFailure(validation)) {
        console.log('invalid form')
        return
      }

      alert('form submitted!')
    }
  })

And finally we render ``MyForm`` into DOM:

.. jsx::

  React.renderComponent(
    <MyForm schema={schema} />,
    document.getElementById('example'))
