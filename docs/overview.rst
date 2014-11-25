Overview
========

Form value object
-----------------

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
------

Schema is the main API of React Forms. It is a set of primitives to provide
configuration for form value object and form components.

There are three main schema types: ``Scalar``, ``Mapping`` and ``List``. But
application can define their owns by either extending existent schema types or
creating completely new ones.

By abstracting all the configuration in schemas React Forms allows the
implementation of form value objects and form components to be generic enough.

Form components
---------------

Form components are React components which receive form value objects and
renders them into DOM. They are responsible for the UI of fieldsets and fields
but they delegate user input to input components.

The example of form components is the ``<Fieldset />`` component which renders a
``<Label />`` and iterates over its fields to render each.

Input components
----------------

Input components are concerned with user input. They are not specific to React
Forms and completely reusable. The only contract they must adhere to is
``value/onChange``: they must read their current value from ``this.props.value``
and report user input via ``this.props.onChange(newValue)`` callback.

.. _Immutable.js: http://facebook.github.io/immutable-js
