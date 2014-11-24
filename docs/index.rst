React Forms
===========

React Forms is a library of data structures and React_ components for handling
forms.

The example code which creates a form with nested fieldsets and repeated
fieldsets looks like:

.. jsx::
  :hidesource:

  var React = window.React = require('react')
  var ReactForms = require('react-forms')

  var Mapping = ReactForms.schema.Mapping
  var Scalar = ReactForms.schema.Scalar
  var List = ReactForms.schema.List


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
    <ReactForms.Form schema={family} />,
    document.getElementById('example'))

This code results in a form:

.. raw:: html

  <div id="example"></div>

Forms are described with **schemas** and then rendered with **form components**.

Form schemas can be extended and custom form components can be created for any
custom needs.

React Forms sets up a **unidirectional data flow** between form components. This
makes reasoning about form values easy and allows to hook into any aspect of
form value lifecycle.

Besides that React Forms provides strong **immutability** guarantees (through
the usage of Immutable.js_ library) so that such complex features like undo/redo
are easy to implement.

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
.. _Immutable.js: http://facebook.github.io/immutable-js
