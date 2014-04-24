---
template: markdown.js
---

# Overview

There are three central concepts — form schemas, form components and
input components.

### Form Schemas

Form schemas are high level declarative descriptions of how forms should
operate: what's shape of the data form should handle, how to render any specific
field, how to validate user input and so on.

Form schemas doesn't do anything by themselves they are just metadata and are
subject to interpretation by form components of React Forms library.

A basic example of form schema would look like:

```
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
```

Note that this example uses JSX syntax to define schema (similar to how React
uses JSX to describe UI) but it's not required. You can read more about schemas
on <a href="/documentation/schema">Schemas and validation</a> documentation
page.

### Form Components

Form components are React components which interpret form schemas to render
form UI and handle validation and data flow. They are designed to be as generic
as possible and so to be reusable across as many form schemas as possible.

There are four types of form components, each for different schema type and on
for form itself:

  * `Form` (and corresponding `FormMixin`) is the only stateful component, which
    holds form value and manages its validation.
  * `Field` (and corresponding `FieldMixin`) is used to render values which
    corresponds to `<Property />` schema nodes, scalars such as strings, numbers
    and so on.
  * `Fieldset` (and corresponding `FieldsetMixin`) is used to render values which
    corresponds to `<Schema />` schema nodes.
  * `RepeatingFieldset` (and corresponding `RepeatingFieldsetMixin`) is used to
    render values which corresponds to `<List />` schema nodes.


The functional scope of form components is to decide where to render `<label />`
elements, when to show hide any specific field, how to handle array values and
so on. What falls outside of this is how users enter form values, this is
handled by input components instead.

### Input Components

Input components are React components which handle user input of form values.
At a basic level these are `<input />` components. But one can develop
custom ones as datepickers, WYSIWYG editors and so on. Technically input
components are reusable outside of React Forms context and are typical
components which conform to "value/onChange" contract.
