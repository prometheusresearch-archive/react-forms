API reference
=============

.. contents::
  :local:
  :depth: 2

Schema
------

Schema is used to describe form structure and validation. API consist of
``Schema``, ``List`` and ``Property`` node types, each of those can contain
metadata properties.

Common schema properties
~~~~~~~~~~~~~~~~~~~~~~~~

All three node types share the same set of properties:

``label``
  used to render ``<label>`` element

``hint``
  used as a part of ``<label>`` element, usually contain detailed explanations
  of what input expected into the corresponding form element.

``component``
  used to specify which form component to use to render a
  corresponding form element.

``defaultValue``
  used as a default value for a form element.

``validate``
  a function which validates transformed input value. Should
  return true in case of success and false in case of failure.

``ReactForms.schema.Property``
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

``Property`` schema nodes are used to describe values such as strings, numbers,
dates, …::

  <Property />

In addition to common schema properties, ``Property`` supports the following
ones:

``input``
  specifies input component to use, if not provided then ``<input type="text"
  />`` will be used instead.

``type``
  Used to transform value representation from DOM domain to application domain
  and vice-versa. For example date type transforms Date objects into strings of
  *YYYY-MM-DD* format and vice-versa.

  There are built-in types are available: ``string``, ``number``, ``date``, ``bool`` and
  ``array`` which can be referenced by its string name: ``<Property type="date" />``.

  Custom types can be made by defining an object with methods ``serialize(value)`` and
  ``deserialize(value)``.

``required``
  Used as a shortcut for a validator which validates if a key is present inside
  an object (e.g. is not ``null``).


``ReactForms.schema.Schema``
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Nodes of type ``Schema`` are used to describe plain JavaScript objects (JSON
objects). Children of the schema node describe keys of the object. Each child
should have ``name`` property to define what key it describes::

  <Schema>
    <Property name="a" />
    <Property name="b" />
  </Schema>

The example above describe objects of shape ``{"a": …, "b": …}``.

``ReactForms.schema.List``
~~~~~~~~~~~~~~~~~~~~~~~~~~

``List`` schema nodes are used to describe arrays. They can have only a single
child which describes the schema of the elements of an array::

  <List>
    <Property type="number" />
  </List>

The example above describes the array of numbers ``[1, 2, 4, …]``.

In addition to common schema properties, ``List`` supports the following ones:

``nonEmpty``
  Used as a shortcut for a validator which validates an array only if it has at
  least one element.

Functions
~~~~~~~~~

``ReactForms.schema.isProperty(schema)``
  Check if ``schema`` node has type ``Property``.

``ReactForms.schema.isSchema(schema)``
  Check if ``schema`` node has type ``Schema``.

``ReactForms.schema.isList(schema)``
  Check if ``schema`` node has type ``List``.

Components
----------

``ReactForms.Form``
~~~~~~~~~~~~~~~~~~~

A component which represents an entire form: holds form value and validation
state.

props
`````

``schema``
  Schema to use.

``defaultValue``
  Value which is used to set default value of the form. This only used for first
  render of the component.

``externalValidation``
  Validation structure which represents some external validation (like
  validation from a server side).

``component``
  Component to render form as. By default ``<form />`` component is used.

``onChange(value, update)``
  Callback which fires on every change which results in a valid form value.
  ``value`` is a deserialized form value (according to schema) and ``update`` is
  an object with ``path`` (array which points to an updated field) and
  ``schema`` (schema node of an updated field) attributes.

``onUpdate(value, isValid, update)``
  Callback which fires on every change.
  ``value`` is a deserialized form value (according to schema), ``isValid`` is a
  flag if form is in valid state after an update and ``update`` is an object
  with ``path`` (array which points to an updated field) and ``schema`` (schema
  node of an updated field) attributes.

methods
```````

``value()``
  Return form value object.

``ReactForms.Field``
~~~~~~~~~~~~~~~~~~~~

A component which represents a single form field which contains a rendered input
component along with ``<label />`` element. This component is used to represent
schema nodes of type ``Property``.

``ReactForms.Fieldset``
~~~~~~~~~~~~~~~~~~~~~~~

A component which represents a fieldset. This component is used to represent
schema nodes of type ``Schema``.

``ReactForms.RepeatingFieldset``
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A component which represents a list of fields/fieldsets. This component is used
to represent schema nodes of type ``List``.

``ReactForms.FormFor``
~~~~~~~~~~~~~~~~~~~~~~

A "proxy" component which decides what component to render based on a current
schema node it receives from a current form context.

Mixins
------

Each of the form components has the corresponding mixin which is used in an
implementation. This allows to define custom form components without much
boilerplate.

``ReactForms.FormMixin``
~~~~~~~~~~~~~~~~~~~~~~~~


methods
```````

``value()``
  Return form value object.

``ReactForms.FieldMixin``
~~~~~~~~~~~~~~~~~~~~~~~~~

methods
```````

``value()``
  Return field value object.

``ReactForms.FieldsetMixin``
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

methods
```````

``value()``
  Return fieldset value object.

``ReactForms.RepeatingFieldsetMixin``
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

methods
```````

``value()``
  Return repeating fieldset value object.

Validation
----------

``ReactForms.validation.validate(schema, value)``
  Validate ``value`` against ``schema`` and return validation object which can
  be checked with ``isSuccess`` or ``isFailure`` function for validness.

``ReactForms.validation.isSuccess(validation)``
  Return ``true`` is validation successful.

``ReactForms.validation.isFailure(validation)``
  Return ``true`` is validation failed.

Input components
----------------

``ReactForms.input.CheckboxGroup``
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Should be used for schema nodes with type ``array``::

    <Property type="array" input={<CheckboxGroup options={[...]} />} />

``ReactForms.input.RadioButtonGroup``
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
