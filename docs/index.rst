React Forms
===========

React Forms library provides a set of tools for React_ to handle form rendering
and validation. It is designed as a number of orthogonal features which fit well
together but can be used separately or replaced with alternatives.

The basic example which allows you to create pretty complex form with repeated
fieldsets looks like::

  function Person(props) {
    props = props || {}
    return (
      <Schema name={props.name} label={props.label}>
        <Property name="first" label="First name" />
        <Property name="last" label="Last name" />
      </Schema>
    )
  }

  var family = (
    <Schema>
      <Person name="mother" label="Mother" />
      <Person name="father" label="Father" />
      <List name="children">
        <Person />
      </List>
    </Schema>
  )

  React.renderComponent(
    <Form schema={family} />,
    document.getElementById('form'))

Forms are described with **form schemas** and then rendered with **form
components**. The separation allows to reduce boilerplate and to make form UI
components more general and reusable. Form schemas can be extended and custom
form components can be created for any custom needs.

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
   customizations
   api
   examples/index

.. _React: http://facebook.github.io/react
