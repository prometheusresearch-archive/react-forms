/**
 * @jsx React.DOM
 */
'use strict';

module.exports = React.createClass({

  render: function() {
    return (
      <Demo name="Components API reference">
        <Section>
          <p>
            This page documents all available components of React Forms which
            are part of the public API.
          </p>
        </Section>
        <Section title="Form">
          <p>
            This is the only stateful component in React Forms. The default
            implmentation does nothing but extends <code>FormMixin</code>.
          </p>
          <p>
            Applications would probably want to replace this component with a
            custom one. They can do that by extending <code>Form</code>
            component via composition or by mixing in <code>FormMixin</code>
            directly.
          </p>
          <p>
            <code>Form</code> component provides the following API:
          </p>
        </Section>
        <API>
          <Prop sig="schema">
            Set form schema.
          </Prop>
          <Prop sig="prop">
            Set initial form value.
          </Prop>
          <Prop sig="onChange(value)">
            Called when form values changes and validates.
          </Prop>
          <Prop sig="onUpdate(value, validation)">
            Called when form values changes.
          </Prop>
          <Method sig=".value()">
            Returns a current form value, this can be valid or invalid.
          </Method>
          <Method sig=".schema()">
            Returns a schema form is bound to.
          </Method>
          <Method sig=".validation()">
            Returns a current validation state.
          </Method>
        </API>
        <Section title="Field">
          <p>
            <code>Field</code> component renders values described with schema of
            type <code>Property</code>, scalar values such as strings, numbers, dates.
          </p>
        </Section>
        <API>
          <Method sig=".value()">
            Returns a current field value, this can be valid or invalid.
          </Method>
          <Method sig=".schema()">
            Returns a schema field is bound to.
          </Method>
          <Method sig=".validation()">
            Returns a current validation state.
          </Method>
          <Method sig=".updateValue(value)">
            Update form with a new value corresponding to a field.
          </Method>
        </API>
        <Section title="Fieldset">
          <p>
            <code>Fieldset</code> component renders values described with schema
            nodes of type <code>Schema</code>.
          </p>
        </Section>
        <API>
          <Method sig=".value()">
            Returns a current fieldset value, this can be valid or invalid.
          </Method>
          <Method sig=".schema()">
            Returns a schema fieldset is bound to.
          </Method>
          <Method sig=".validation()">
            Returns a current validation state.
          </Method>
          <Method sig=".updateValue(value)">
            Update form with a new value corresponding to a fieldset.
          </Method>
        </API>
        <Section title="RepeatingFieldset">
          <p>
            <code>RepeatingFieldset</code> component renders values described
            with schema nodes of type <code>List</code>.
          </p>
        </Section>
        <API>
          <Prop sig="defaultValue">
            Default value which is used to create new items in a list.
          </Prop>
          <Method sig=".addItem()">
            Add new item at the end of the list.
          </Method>
          <Method sig=".removeItem(index)">
            Remove an item by <code>index</code>.
          </Method>
          <Method sig=".value()">
            Returns a current fieldset value, this can be valid or invalid.
          </Method>
          <Method sig=".schema()">
            Returns a schema fieldset is bound to.
          </Method>
          <Method sig=".validation()">
            Returns a current validation state.
          </Method>
          <Method sig=".updateValue(value)">
            Update form with a new value corresponding to a fieldset.
          </Method>
        </API>
        <Section title="Message">
          <p>
            <code>Message</code> component is used to render validation messages.
          </p>
        </Section>
        <API>
          <Prop sig="children">
            The body of the message.
          </Prop>
        </API>
        <Section title="FormFor">
          <p>
            <code>FormFor</code> is not a typical React component but a "proxy"
            component which renders into <code>Field</code>,
            <code>Fieldset</code> or <code>RepeatingFieldset</code>
            based on the type of the schema node it is bound to.
          </p>
        </Section>
        <API>
          <Prop sig="name">
            Key name which is used to extract data from a form/fieldset value.
            If no <code>name</code> prop is passed then entire value will be
            used.
          </Prop>
        </API>
      </Demo>
    );
  }
});



