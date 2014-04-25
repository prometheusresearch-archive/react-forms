---
template: example.js
---

# Family editor form example

This example showcases several aspects of React Forms library, most notably
defining reusable schema pieces, creating custom fieldset component and
repeating fieldset usage.

<div id="example"></div>

## Implementation

### Schema to model family

We start with defining fields for family data structure which will be used
across several parts.

This snippet defines `NameField` property which is validated with a custom
validator and have default values `name` and `label` properties (which can be
overriden if needed).

```
function validateName(v) {
  return /^[a-z\\s]+$/i.test(v)
}

function NameField(props) {
  props = props || {}
  return (
    <Property
      name={props.name || 'name'}
      label={props.label || 'Name'}
      validate={validateName}
      />
  )
}
```

Now we can define schemas for adults and children, both using already defined
`NameField`, `DateOfBirthField` and `SexField` (the latter two are defined
similarly to `NameField`).

Note the `component` property of `Child` schema what defines which fieldset
component should be used to render schemas of such type. We will show how to
define `ChildFieldset` below.

```
function Adult(props) {
  props = props || {}
  return (
    <Schema label={props.label} name={props.name}>
      <NameField />
      <DateOfBirthField />
    </Schema>
  )
}

function Child(props) {
  props = props || {}
  return (
    <Schema component={ChildFieldset} name={props.name}>
      <NameField />
      <DateOfBirthField />
      <SexField required />
      <Property
        label="Female specific value"
        name="femaleSpecificValue" />
      <Property
        label="Male specific value"
        name="maleSpecificValue" />
    </Schema>
  )
}
```

Finally the schema for family would look like a composition of schema types we
defined previously.

Note how we have defined `Children` as a list of `Child`. That describes that a
family can have multiple children and form would have a corresponding UI
controls to add and remove children records.

```
function Family(props) {
  return (
    <Schema name={props.name}>
      <Adult name="mother" label="Mother" />
      <Adult name="father" label="Father" />
      <List label="Children" name="children">
        <Child />
      </List>
    </Schema>
  )
}
```

### Custom fieldset component for Child

Now we define `ChildFieldset` component which is used to render values described
with `Child` schema. The reason we want to do this is that we want to show a
different set of fields based on a sex of a child.

Note that creating a fieldset component reduces down to using `FieldsetMixin`
mixin and defining `render()` method.

`FieldsetMixin` provides `value()` method which allows accessing a current form
value for this particular schema node.

To render its fields `ChildFieldset` component uses a `FormFor` component which
automatically receives a corresponding schema and value based on its `name`
property.

```
var ChildFieldset = React.createClass({
  mixins: [ReactForms.FieldsetMixin],

  render: function() {
    var sex = this.valueLens().val().sex;
    return this.transferPropsTo(
      <div className="react-forms-fieldset">
        <FormFor name="name" />
        <FormFor name="dob" />
        <FormFor name="sex" />
        {sex === 'male' &&
          <FormFor name="maleSpecificValue" />}
        {sex === 'female' &&
          <FormFor name="femaleSpecificValue" />}
      </div>
    )
  }
})
```

### Rendering family

Finally we can render our *Family form* by simply using `Form` component with
out `Family` schema.

```
<Form schema={<Family />} />
```
