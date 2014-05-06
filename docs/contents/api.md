---
template: markdown.js
className: API
---

# API

  * [Schema](api.html#schema)
    * [Nodes](api.html#nodes)
    * [Metadata properties](api.html#metadata-properties)
    * [Functions](api.html#functions)
  * [Form components](api.html#form-components)
    * [Form](api.html#-reactforms-form-)
    * [Field](api.html#-reactforms-field-)
    * [Fieldset](api.html#-reactforms-fieldset-)
    * [RepeatingFieldset](api.html#-reactforms-repeatingfieldset-)
    * [FormFor](api.html#-reactforms-formfor-)
  * [Form component mixins](api.html#form-component-mixins)
    * [Common API](api.html#common-api)
    * [FormMixin](api.html#-reactforms-formmixin-)
    * [FieldMixin](api.html#-reactforms-fieldmixin-)
    * [FieldsetMixin](api.html#-reactforms-fieldsetmixin-)
    * [RepeatingFieldsetMixin](api.html#-reactforms-repeatingfieldsetmixin-)
  * [Input components](api.html#input-components)
    * [RadioButtonGroup](api.html#-reactforms-input-radiobuttongroup-)
    * [CheckboxGroup](api.html#-reactforms-input-checkboxgroup-)

* * *

## Schema

Schema is used to describe form structure and validation. API consist of
`Schema`, `List` and `Property` nodes, each of those can contain metadata
properties.

<p class="note">
The example code uses JSX syntax to define schema but one could use plain
JavaScript instead.
</p>



### Nodes

#### `ReactForms.schema.Schema`

Nodes of type `Schema` are used to describe plain JavaScript objects (JSON
objects). Children of the schema node describe keys of the object. Each child
should have `name` property to define what key it describes.

```
<Schema>
  <Property name="a" />
  <Property name="b" />
</Schema>
```

The example above describe objects of shape `{"a": …, "b": …}`.

#### `ReactForms.schema.List`

`List` schema nodes are used to describe arrays. They can have only a single
child which describes the schema of the elements of an array:

```
<List>
  <Property type="number" />
</List>
```

The example above describes the array of numbers `[1, 2, 4, …]`.

#### `ReactForms.Property`

`Property` schema nodes are used to describe values such as strings, numbers, dates, …

```
<Property />
```

### Metadata properties

###### `label`

Used to render `<label>` element by `Field`, `Fieldset` and `RepeatingFieldset`
components.

###### `hint`

Used as a part of `<label>` element, usually contain detailed explanations of
what input expected into the corresponding form element.

###### `input`

Only applicable to `Property` schema nodes. Input component to use, if not
provided then `<input type="text" />` will be used instead.

###### `component`

Form component to use. This property can be used to specify an alternative
implementation of field, fieldset of repeating fieldset component to use to
render schema node.

###### `defaultValue`

Used as a default value for a form element.

###### `type`

Used to transform value representation from DOM domain to application domain and
vice-versa. For example `date` type transforms `Date` objects into strings of
`YYYY-MM-DD` format and vice-versa.

There are built-in types are available: `string`, `number` and `date` which can
be referenced by its string name: `<Property type="date" />`.

Custom types can be made by defining an object with methods `serialize(value)`
and `deserialize(value)`.

###### `validate`

A function which validates transformed input value. Should return `true` in case
of success and `false` in case of failure.

###### `required`

Used as a shortcut for a validator which validates if a key is present inside
an object (e.g. is not `null`).

###### `nonEmpty`

Only applicable to `List` schema nodes. Used as a shortcut for a validator
which validates an array only if it has at least one element.

### Functions

###### `ReactForms.schema.isSchema`

Returns true if schema node is of type `Schema`.

###### `ReactForms.schema.isList`

Returns true if schema node is of type `List`.

###### `ReactForms.schema.isProperty`

Returns true if schema node is of type `Property`.

* * *

## Form components

#### `ReactForms.Form`

A component which represents an entire form: holds form value and validation
state.

###### prop `defaultValue`

Used to supply the initial form value when `Form` is used as an uncontrolled
component.

###### prop `value`

Used to supply the form value when form is used as a controlled component.

###### prop `validation`

Used to supply the form validation state when form is used as a controlled
component.

###### prop `serializedValue`

Used to supply the form serialized value when form is used as a controlled
component.

###### callback `onUpdate(value, validation, serializedValue)`

Called every time form value **is updated**.

###### callback `onChange(value, validation, serializedValue)`

Called every time form value **is updated and is valid**.

#### `ReactForms.Field`

A component which represents a single form field which contains a rendered input
component along with `<label />` element. This component is used to represent
schema nodes of type `Property`.

###### prop `name`

Key which is used to extract value and validation state from the current form
context.

###### prop `input`

Input component to use. It takes precedence over input component defined on
corresponding schema node. If input component is not provided nor via the
property neither via the schema then `<input type="text" />` will be used
instead.

###### prop `label`

Text used to render `<label>` element. Takes precedence over the value used in
a corresponding schema node.

###### prop `hint`

Text used to render a part of a `<label>` element. Takes precedence over the
value used in a corresponding schema node.

#### `ReactForms.Fieldset`

A component which represents a fieldset. This component is used to represent
schema nodes of type `Schema`.

###### prop `name`

Key which is used to extract value and validation state from the current form
context.

#### `ReactForms.RepeatingFieldset`

A component which represents a list of fields/fieldsets. This component is used
to represent schema nodes of type `List`.

###### prop `name`

Key which is used to extract value and validation state from the current form
context.

###### callback `onAdd(value)`

###### callback `onRemove(value, index)`

#### `ReactForms.FormFor`

A "proxy" component which decides what component to render based on a current
schema node it receives from a current form context.

###### prop `name`

Key which is used to extract value and validation state from the current form
context.

* * *

## Form component mixins

Each of the form components has the corresponding mixin which is used in an
implementation. This allows to define custom form components without much
boilerplate.

<p class="note">
The preferred way to define custom form component is via composition of the
existent ones. But in some cases this is not possible. This is there form
component mixins can be useful.
</p>

#### Common API

All form components shares the part of the API related to dataflow.

###### method `valueLens()`

Provides access to the current value which is attached to the component. To read
the current value `this.valueLens().val()` expression should be used.

###### method `validationLens()`

Provides access to the current validation state  of the form component. To read
the current value `this.validationLens().val()` expression should be used.

###### method `serializedValueLens()`

Provides access to the current serialized (DOM) value of the form component. To
read the current value `this.serializedValueLens().val()` expression should be
used.

###### method `schema()`

Returns a schema node the component is attached to.

###### method `updateValue(value)`

Notify that the value of the form component is updated.

#### `ReactForms.FormMixin`

#### `ReactForms.FieldMixin`

###### method `renderInputComponent(props)`

Return an input component.

#### `ReactForms.FieldsetMixin`

###### method `renderField(schemaNode)`

Render a field for a `schemaNode`.

#### `ReactForms.RepeatingFieldsetMixin`

###### method `renderFields()`

Return an array of components rendered for each item in a value.

###### method `add(value)`

Add new element to the value.

###### method `remove(index)`

Remove an element from value by `index`.

* * *

## Input components

While input components are out of scope of React Forms we provide some of them
for convenience.

#### `ReactForms.input.RadioButtonGroup`

An input component which is represented in DOM as a set of radio buttons.

#### `ReactForms.input.CheckboxGroup`

An input component which is represented in DOM as a set of checkboxes.
