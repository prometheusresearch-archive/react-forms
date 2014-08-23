Family form example
===================

This example showcases several aspects of React Forms library, most notably
defining **reusable schemas**, creating **custom fieldset components** and
custom input components for **user input formatting**.

The example form is a form for entering information about family.

.. raw:: html

  <div id="example"></div>

Implementation
--------------

First we need to bring needed components and utilities into scope:

.. jsx::

  var React            = require('react')
  var Forms            = require('react-forms')
  var RadioButtonGroup = require('react-forms/lib/RadioButtonGroup')
  var schema = Forms.schema;

Mapping
~~~~~~~

We start with defining schemas for commonly used fields.

SexField
~~~~~~~~

``SexField`` represents sex of a person. We want to use a radio button group as an
input component for this type of values:

.. jsx::

  function SexField(props) {
    props = props || {}
    var options = [
      {value: 'male', name: 'Male'},
      {value: 'female', name: 'Female'}
    ]
    return (
      <schema.Scalar
        name={props.name || 'sex'}
        label={props.label || 'Sex'}
        required={props.required}
        input={<RadioButtonGroup options={options} />}
        />
    )
  }

After that we can use this field in a different schemas ``<SexField name="sex"
/>``. Note how we provide a default values for ``name`` and ``label``.

NameField
~~~~~~~~~

Now let's define a schema for fields which represent a name of a person. We want
to autoformat name so it appears capitalized and we want to perform additional
validation on name value so it cannot contain number or any other non-letters.

First we define a validator:

.. jsx::

  function validateName(v) {
    return /^[a-z\s]+$/i.test(v) ? true : 'should contain only letters'
  }

Now we can use it in schema definition:

.. jsx::

  function NameField(props) {
    props = props || {}
    return (
      <schema.Scalar
        required={props.required}
        defaultValue={props.defaultValue}
        name={props.name || 'name'}
        label={props.label || 'Name'}
        hint="Should contain only alphanumeric characters"
        input={<NameInput />}
        validate={validateName}
        />
    )
  }

Note that we referenced the ``<NameInput />`` component. This the thin wrapper on
for ``<input type="text" />`` which autoformats user input by capitalizing it.

DateOfBirthField
~~~~~~~~~~~~~~~~

``DateOfBirthField`` is define similar to previous fields:

.. jsx::

  function DateOfBirthField(props) {
    props = props || {}
    return (
      <schema.Scalar
        name={props.name || 'dob'}
        label={props.label || 'Date of Birth'}
        hint="Should be in YYYY-MM-DD format"
        type="date"
        />
    )
  }

Adult and Child
~~~~~~~~~~~~~~~

Now we can define schemas for adults and children, both using already defined
``NameField``, ``DateOfBirthField`` and ``SexField``.

Note the ``component`` property of ``Child`` schema what defines which fieldset
component should be used to render schemas of such type. We will show how to
define ``ChildFieldset`` below:

.. jsx::

  function Adult(props) {
    props = props || {}
    return (
      <schema.Mapping label={props.label || 'Adult'} name={props.name}>
        <NameField />
        <DateOfBirthField />
      </schema.Mapping>
    )
  }

  function Child(props) {
    props = props || {}
    return (
      <schema.Mapping component={ChildFieldset} name={props.name}>
        <NameField />
        <DateOfBirthField />
        <SexField required />
        <schema.Scalar
          label="Female specific value"
          name="femaleSpecificValue" />
        <schema.Scalar
          label="Male specific value"
          name="maleSpecificValue" />
      </schema.Mapping>
    )
  }


Family
~~~~~~

Finally the schema for family would look like a composition of schema types we
defined previously.

Note how we have defined ``Children`` as a list of ``Child``. That describes that a
family can have multiple children and form would have a corresponding UI
controls to add and remove children records:

.. jsx::

  function Family(props) {
    props = props || {}
    return (
      <schema.Mapping name={props.name} label={props.label || 'Family'}>
        <Adult name="mother" label="Mother" />
        <Adult name="father" label="Father" />
        <schema.List label="Children" name="children">
          <Child />
        </schema.List>
      </schema.Mapping>
    )
  }

Custom input component for name formatting
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Now let's define ``<NameInput />`` component which is used by ``NameField`` field to
capitalize user input automatically:

.. jsx::

  var NameInput = React.createClass({

    getInitialState: function() {
      return {selection: {start: 0, end: 0}}
    },

    onChange: function(e) {
      var value = e.target.value
      var node = this.getDOMNode()
      this.setState({
        selection: {start: node.selectionStart, end: node.selectionEnd}
      })
      this.props.onChange(value)
    },

    componentDidUpdate: function() {
      var node = this.getDOMNode()
      if (document.activeElement === node) {
        node.setSelectionRange(this.state.selection.start, this.state.selection.end)
      }
    },

    format: function(value) {
      if (value) {
        return value.split(/\s+/)
          .map(function(s) { return s.charAt(0).toUpperCase() + s.slice(1) })
          .join(' ')
      } else {
        return value
      }
    },

    render: function() {
      var value = this.format(this.props.value)
      return this.transferPropsTo(
        <input
          type="text"
          value={value}
          onChange={this.onChange}
          />
      )
    }
  })

It is a little verbose because we need to take care of cursor position in input
box. But other than that it is a thin wrapper for ``<input type="text" />`` which
just capitalizes every word in a value.

Custom fieldset component for Child
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Now we define ``ChildFieldset`` component which is used to render values described
with ``Child`` schema. The reason we want to do this is that we want to show a
different set of fields based on a sex of a child.

Note that creating a fieldset component reduces down to using ``FieldsetMixin``
mixin and defining ``render()`` method.

``FieldsetMixin`` provides ``value()`` method which allows accessing a current
form value for this particular schema node via ``value().value``.

To render its fields ``ChildFieldset`` component uses a ``FormFor`` component
which automatically receives a corresponding schema and value based on its
``name`` property:

.. jsx::

  var ChildFieldset = React.createClass({

    render: function() {
      var value = this.props.value;
      var sex = this.props.value.value.get('sex');
      return this.transferPropsTo(
        <div className="react-forms-fieldset">
          <this.renderElement name="name" />
          <this.renderElement name="dob" />
          <this.renderElement name="sex" />
          {sex === 'male' &&
            <this.renderElement name="maleSpecificValue" />}
          {sex === 'female' &&
            <this.renderElement name="femaleSpecificValue" />}
        </div>
      )
    },

    renderElement: function(props) {
      return <Forms.Element value={this.props.value.child(props.name)} />
    }
  })

Rendering forms
~~~~~~~~~~~~~~~

Finally we can render our *Family form* by simply using ``Form`` component with
out ``Family`` schema:

.. jsx::

  React.renderComponent(
    <Forms.Form schema={<Family />} />,
    document.getElementById('example')
  )
