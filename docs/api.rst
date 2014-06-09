API reference
=============

.. contents::

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

  There are built-in types are available: ``string``, ``number`` and ``date``
  which can be referenced by its string name: ``<Property type="date" />``.

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

Components
----------

``ReactForms.Form``
~~~~~~~~~~~~~~~~~~~

A component which represents an entire form: holds form value and validation
state.

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

``ReactForms.FieldMixin``
~~~~~~~~~~~~~~~~~~~~~~~~~

``ReactForms.FieldsetMixin``
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

``ReactForms.RepeatingFieldsetMixin``
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
