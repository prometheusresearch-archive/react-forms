Updating code to React Forms 1.0.0
==================================

React Forms 1.0.0 is a major API overhaul which contains quite a few breaking
changes.

This document describes breaking changes, motivation behind them and provides
examples on how to update application code from 0.6.0 to 1.0.0.

Explicit data flow
------------------

The biggest change introduced in 1.0.0 is how data propagated from ``<Form />``
component down to form elements such as ``<Field />``, ``<Fieldset />`` and
``<RepeatingFieldset />``.

Previously ``<Form />`` exposed its value, serialized value and validation state
via React context mechanism. Form components such as ``<Fieldset />`` and
``<RepeatingFieldset />`` were projecting relevant parts of the data further and
finally ``<Field />`` components just grabbed what's needed for them to render
form input and error messages (if any).

It was a poor design decision.

First, because the usage of context mechanism results in an implicit data flow
where consumer needs to decide what data it needs from the parent component. It
is harder to understand how data flows, its behaviour is harder to debug.

Second, React's context mechanism is undocumented and is subject to change.

Instead of using ``context`` mechanism, entire form value along with serialized
value and validation state and ``onUpdate`` callback is now encapsulated within
a single cursor-like abstraction, a ``Value`` object.

That makes possible to propagate form value down to form components explicitly
via ``props`` without introducing boilerplate code.

Getting form value
``````````````````

As value is passed through props, there's no need in a helper method ``value()``
(which was previously provided by mixins).

0.6.0::

  this.value()

1.0.0::

  this.props.value

Updating form value
```````````````````

As ``onUpdate`` callback is a part of the value itself, there's no need in
helper method ``updateValue()`` (which was previously provided by mixins).

0.6.0::

  this.updateValue(newValue)

1.0.0::

  this.props.value.update(newValue).notify()


Propagating form value down the form components
```````````````````````````````````````````````

As value is now propagated through props, you should do it explicitly, rather
than relying on a component to get the data from React's context.

0.6.0::

  <FormFor name="formField" />

1.0.0::

  <FormElement value={this.props.value.child('formField')} />

Removal of Form Component Mixins
--------------------------------

Because of data flow machinery is now isolated in a ``Value`` object and being
explicit (via ``props`` instead of ``context``), the mixins for ``<Form />``,
``<Fieldset />`` and other form components are rendered unnecessary.

Now if one decides to extend one of the form components they either extend an
existing component via composition or reimplement needed functionality manually
(which is a more rare case).

Schema syntax
-------------

JSX syntax for defining form schemas is deprecated. Following the React core
team deprecating JSX use case for plain function calls React Forms drops JSX
syntax for schemas.

0.6.0::

  var schema = (
    <Mapping>
      <Scalar name="firstName" />
      <Scalar name="lastName" />
    <Mapping>
  )

1.0.0::

  var schema = Mapping(
    Scalar({name: 'firstName'}),
    Scalar({name: 'lastName'})
  )

Usage of Immutable library for schema and form value
----------------------------------------------------

Form schema and form value (including serialized value and validation state) is
now modelled with the usage of immutable_ library.

Accessing schema properties
```````````````````````````

0.6.0::

  schema.props.field

1.0.0::

  schema.props.get('field')

.. _immutable: https://github.com/facebook/immutable-js
