---
template: markdown.js
className: API
---

# API

* * *

## Schema

### Metadata properties

###### `label`

Used to render `<label>` element by `Field`, `Fieldset` and `RepeatingFieldset`
components.

###### `hint`

Used as a part of `<label>` element, usually contain detailed explanations of
what input expected into the corresponding form element.

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

### Nodes

#### ReactForms.schema.`Schema`

###### attr `props`

###### attr `children`

#### ReactForms.schema.`List`

###### attr `props`

###### attr `children`

#### ReactForms.`Property`

###### attr `props`

### Functions

###### ReactForms.schema.`isSchema`

###### ReactForms.schema.`isList`

###### ReactForms.schema.`isProperty`

* * *

## Form components

#### Common API

<div class="reset">
All form components shares the part of the API related to dataflow.
</div>

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

#### ReactForms.`Form`

<div class="reset">
A component which represents an entire form: holds form value and validation
state.
</div>

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

#### ReactForms.`Field`

<div class="reset">
A component which represents a single form field which contains a rendered input
component along with `<label />` element. This component is used to represent
schema nodes of type `Property`.
</div>

###### prop `name`

###### prop `input`

###### prop `label`

###### prop `hint`

###### method `renderInputComponent(props)`


#### ReactForms.`Fieldset`

<div class="reset">
A component which represents a fieldset. This component is used to represent
schema nodes of type `Schema`.
</div>

###### prop `name`

Used to extract form valid and validation state from a form context.

###### method `renderField(schemaNode)`

Render a field for a `schemaNode`.

#### ReactForms.`RepeatingFieldset`

<div class="reset">
A component which represents a list of fields/fieldsets. This component is used
to represent schema nodes of type `List`.
</div>

###### prop `name`

Used to extract form valid and validation state from a form context.

###### method `renderFields()`

###### method `add()`

###### method `remove(index)`

#### ReactForms.`FormFor`

A "proxy" component which decides what component to render based on a current
schema node it receives from a current form context.

###### prop `name`

Used to extract form valid and validation state from a form context.

* * *

## Input components

#### ReactForms.input.`RadioButtonGroup`

#### ReactForms.input.`CheckboxGroup`
