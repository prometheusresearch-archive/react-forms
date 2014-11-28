Schema
======

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
----------

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

Note that constant ``18`` is hardcoded in ``validate`` function. An alternative
would be to move this constant to node properties and make ``validate`` function
a named function outside of schema node::

  function validateAge(schema, value) {
    var minAge = schema.props.get('minAge', 18)
    if (value < minAge) {
      return new Error(`value is less than minimum of ${minAge}`)
    }
  }

  var age = Scalar({
    type: 'number',
    validate: validateAge,
    minAge: 19
  })

That allows to parametrize validation by arbitrary values. But now
``validateAge`` function and ``minAge`` property form an implicit contract.

Extending scalar schema nodes
-----------------------------

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

Custom validation
-----------------

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
