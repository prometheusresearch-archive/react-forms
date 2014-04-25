---
template: markdown.js
---

# Customizations

There are several ways in which React Forms can be customized and extended:

* Form schemas can include additional metadata which can be used by custom form
  components to implement some specific functionality. For example one can
  develop a schema format which would specify conditions on which form value is
  required.

* Custom components for form, fieldset, repeating fieldset and field rendering
  can be created. Such components can be used to customize form rendering or
  even provide some custom interpretation for extended form schemas.
  
* Custom input components can be created and used for any specific form fields.
  For example date pickers, WYSIWYG editors and so on.

### Input components

React Forms allows to customize input components on per-field basis.

To use input component to render a field one should set an `input` property of the
relevant schema node. Value of the `input` property should be a configured
component instance which accepts `value` and `onChange` properties (basic
`<input />` component adheres to this).

```
<Schema>
  ...
  <Property input={RadioButtonGroup(...)} />
  ...
</Schema>
```

### Form components

`Form` component provided by the library has only the barebone functionality which
hopefully will be useful for most of the apps, especially at the first stages of
prototyping.

Usually you would want to create your own form component which would manage form
value and validation state in some custom way. For that there's `FormMixin` mixin
which makes creating new form components easy:

```
var FormFor = ReactForms.FormFor

var MyForm = React.createClass({
  mixins: [ReactForms.FormMixin],

  render: function() {
    return (
      <form>
        <FormFor />
        <button onClick={...}>Submit</button>
      </form>
    )
  }
})
```

Note that form component is not responsible for a layout of form fields inside
it. It is the duty of `Fieldset`, `RepeatingFieldset` and `Field` components which
correspond to `Schema`, `List` and `Property` schemas.

Also, take a look at `FormFor` component. It generates a component tree for a
current value of the form based on form's schema. If form schema is represented
as `Property` then just a single field will appear, if `Schema` — a fieldset.

### Fieldset components

You might want to customize how fieldsets are rendered and even make fieldset
components specifically to represent some schemas.

Such components can be programmed to display/hide specific form fields based on
value of other form fields and so on.

There's `FieldsetMixin` mixin which makes creating new fieldset components easy.

Again note the usage of `FormFor` components which makes it possible to delegate
rendering of any specific field in fieldset to a corresponding component.

```
var FormFor = ReactForms.FormFor

var SpecialFieldset = React.createClass({
  mixins: [ReactForms.FieldsetMixin],

  render: function() {
    return (
      <div>
        <FormFor name="name" />
        <FormFor name="anotherField" />
        {this.valueLens().val().age > 18 &&
          <FormFor name="specialField" />}
      </div>
    )
  }
})
```

To use `SpecialFieldset` for a schema it is designed for, you need to set
component property of the schema. Of course if your fieldset is designed to be
generic you can use it for any schema you want.

```
var SpecialSchema = (
  <Schema component={SpecialFieldset}>
    ...
  </Schema>
)
```

### Repeating fieldset components

Similar to customization of fieldset rendering you might want to customize
repeating fieldsets which renders `List` schemas.

There's `RepeatingFieldsetMixin` for that which provides `items()` method which
returns a list of form fields for each item in the value.

There are also `addItem()` and `removeItem(idx)` methods which add and remove
item by index correspondingly. You would want to use them to add controls to
repeating fieldsets.

```
var SpecialRepeatingFieldset = React.createClass({
  mixins: [ReactForms.RepeatingFieldsetMixin],

  render: function() {
    return (
      <div>
        {this.items()}
        <button onClick={this.addItem}>Add</button>
      </div>
    )
  }
})
```
