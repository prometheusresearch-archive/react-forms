React Forms
===========

React Forms library provides a set of tools for React_ to handle form rendering
and validation.

The basic example which allows you to create pretty complex form with repeated
fieldsets looks like:

.. jsx::
  :hidesource:

  var React = window.React = require('react')
  var ReactForms = require('react-forms')

  var Mapping = ReactForms.schema.Mapping
  var Scalar = ReactForms.schema.Scalar
  var List = ReactForms.schema.List
  var Form = ReactForms.Form

.. jsx::

  function Person(props) {
    return Mapping(props, {
      first: Scalar({label: 'First name'}),
      last: Scalar({label: 'Last name'})
    })
  }

  var family = Mapping({
    mother: Person({label: 'Mother'}),
    father: Person({label: 'Father'}),
    children: List({label: 'Children'}, Person())
  })

  React.render(
    <Form schema={family} />,
    document.getElementById('example'))

Which results in a form:

.. raw:: html

  <div id="example"></div>

Forms are described with **schemas** and then rendered with **form components**.
The separation allows to reduce boilerplate and to make form UI components more
general and reusable.

Form schemas can be extended and custom form components can be created for any
custom needs.

React Forms sets up a **unidirectional data flow** between form components. This
makes reasoning about form values easy and allows to hook into any aspect of
form value lifecycle.

Besides that React Forms provides strong **immutability** guarantees so that
such complex features like undo/redo are easy to implement.

Now if you are ready to try, there's a :doc:`getting-started` page.

.. toctree::
   :maxdepth: 3
   :hidden:

   self
   getting-started
   overview
   schema
   styling
   api
   examples/index
   updating-to-1.0.0

.. _React: http://facebook.github.io/react
