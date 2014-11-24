React Forms
===========

React Forms is a library of data structures and React_ components for handling
forms.

.. contents::
  :local:
  :depth: 2

.. _React: http://facebook.github.io/react

Basic example
-------------

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

Overview
--------

There are several concepts introduced by React Forms.

Form value
~~~~~~~~~~

Form value object is a central concept of React Forms. It holds form value,
validation state and other metadata and is modeled as a cursor-like abstraction
on top of Immutable.js_ data structures.

Application can store form value object in React component's state
(``<ReactForms.Form />`` does exactly that) or in Flux store.

Form value object defines all the lifecycle tasks associated with form
value. In fact, application can process form value and validation without
rendering form at all.

By encapsulating all the data flow inside the form value object we allow form
components' implementation to be as simple as possible and only concerned
themselves with presentation.

Schema
~~~~~~

Schema is the main API of React Forms. It is a set of primitives to provide
configuration for form value object and form components.

There are three main schema types: ``Scalar``, ``Mapping`` and ``List``. But
application can define their owns by either extending existent schema types or
creating completely new ones.

By abstracting all the configuration in schemas React Forms allows the
implementation of form value objects and form components to be generic enough.

Form components
~~~~~~~~~~~~~~~

Form components are React components which receive form value objects and
renders them into DOM. They are responsible for the UI of fieldsets and fields
but they delegate user input to input components.

The example of form components is the ``<Fieldset />`` component which renders a
``<Label />`` and iterates over its fields to render each.

Input components
~~~~~~~~~~~~~~~~

Input components are concerned with user input. They are not specific to React
Forms and completely reusable. The only contract they must adhere to is
``value/onChange``: they must read their current value from ``this.props.value``
and report user input via ``this.props.onChange(newValue)`` callback.

.. _Immutable.js: http://facebook.github.io/immutable-js

Installation and usage
----------------------

React Forms is distributed as a set of CommonJS modules available through npm_
package registry. You can install both React Forms and React via ``npm`` command
line tool::

  % npm install react-forms

After that you will be able to require it:

.. jsx::

  var ReactForms = require('react-forms')

As browser currently don't support consuming CommonJS modules directly, an
application which uses React Forms must be bundled either by Browserify_ or
Webpack_ or other CommonJS module bundler.

.. _CommonJS: https://github.com/substack/browserify-handbook#require
.. _npm: http://npmjs.org
.. _Browserify: http://browserify.org
.. _Webpack: https://webpack.github.io

Form schemas
------------

Form schemas provide a way to configure form. In fact most use cases (albeit
only simple ones) will only require from an application to define a form schema.

There are three main types of schema nodes: ``Scalar``, ``Mapping`` and
``List``.  They model correspondingly values (strings, numbers, ...), JS objects
and JS arrays.

They can be combined to form schemas::

  var Mapping = ReactForms.schema.Mapping
  var Scalar = ReactForms.schema.Scalar
  var List = ReactForms.schema.List

  var person = Mapping({label: 'Person'}, {
    firstName: Scalar({label: 'First name'}),
    lastName: Scalar({label: 'Last name'}),
    age: Scalar({type: 'number', label: 'Age'})
  })

The schema above would be applicable to form value of the shape::

  {
    firstName: 'Andrey',
    lastName: 'Popp',
    age: 27
  }

.. note::

  Note that ``Mapping``, ``List`` and ``Scalar`` are not actual types but rather
  smart constructors for ``MappingNode``, ``ListNode`` and subclasses of
  ``ScalarNode`` correspondingly.

  For example ``Scalar`` constructor would instantiate a different subclass of
  ``ScalarNode`` for different value of ``type`` prop: ``NumberNode`` for
  ``"number"``, ``ArrayNode`` for ``"array"`` and so on.

Validation
~~~~~~~~~~

You can define custom validation routines for schema nodes by passing
``validate`` prop a function which returns an instance of ``Error`` in case of
validation failure::

  var age = Scalar({
    type: 'number',
    validate: function(schema, value) {
      if (value < 18) {
        return new Error('value is less than minimum of 18')
      }
    }
  })

Another way to define custom validation is to extend schema node type and define
``validate(value)`` method.

Extending scalar schema nodes
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Form schemas can be extended by subclassing one of the schema node types.

To define a new type of scalar which handles numbers we must subclass
``ReactForms.schema.ScalarNode`` and define proper serialization/deserialization
routines::

  class NumberNode extends ReactForms.schema.ScalarNode {

    serialize(value) {
      return value === null ? '' : value
    }

    deserialize(value) {
      if (value === '') {
        return null
      } else if (!isNaN(parseFloat(value)) && isFinite(value)) {
        return parseFloat(value)
      } else {
        return new Error('value is not a number')
      }
    }
  }

.. note::

  React Forms already implements ``NumberNode``, you can create instances of it
  by passing ``"number"`` to ``Scalar`` constructor.

To use ``NumberNode`` you need to create instances using the ``create(props)``
static method of the type::

  var number = NumberNode.create()

Custom validation routines
~~~~~~~~~~~~~~~~~~~~~~~~~~

Schema node types can also define custom validation routines which can be
parametrized by node's props. We need to define ``validate(value)`` method for
that::

  class RangedNumberNode extends NumberNode {

    validate(value) {
      var maybeError = super(value)
      if (maybeError instanceof Error) {
        return maybeError
      }
      var min = this.props.get('min', -Infinity)
      var max = this.props.get('max', Infinity)
      if (value < min) {
        return new Error(`value ${value} is less than the minimum of ${min}`)
      }
      if (value > max) {
        return new Error(`value ${value} is greater than the maximum of ${max}`)
      }
    }
  }

Inside ``validate(value)`` method we would want to call the base class
implementation at some point to make sure we don't skip base validation logic.

Schema node can decide on itself if it wants to fail early or override the
validation error base implementation.

.. toctree::
   :maxdepth: 3
   :hidden:

   index
   styling
   api
   examples/index
