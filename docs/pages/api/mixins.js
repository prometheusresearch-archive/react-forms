/**
 * @jsx React.DOM
 */
'use strict';

module.exports = React.createClass({

  render: function() {
    return (
      <Demo name="Mixins API reference">
        <Section>
          <p>
            This page documents all available mixins exposed by React Forms library.
          </p>
        </Section>
        <Section title="FormElementMixin">
          <p>
            Mixin for components which are meant to be a part of a form data
            flow.
          </p>
        </Section>
        <API>
          <Prop sig="name">
            Name of the form element, will be used to get schema, value and
            validation state from the current form context.
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
          <Method sig=".updateValue(newValue)">
            Update value for the current form element (field or fieldset).
          </Method>
        </API>
        <Section title="FormContextMixin">
          <p>
            <code>FormContextMixin</code> creates a form context (value,
            validation state and schema).
          </p>
        </Section>
        <API>
          <Context sig="value">
          </Context>
          <Context sig="validation">
          </Context>
          <Context sig="schema">
          </Context>
          <Context sig="onValueUpdate(value, validation)">
          </Context>
        </API>
        <Section title="FormMixin">
          <p>
          </p>
        </Section>
        <API>
          <Mixin sig="FormContextMixin" />
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
        <Section title="FieldMixin">
          <p>
          </p>
        </Section>
        <API>
          <Mixin sig="FormElementMixin" />
          <Prop sig="input">
            Configured input component instance to be used.
          </Prop>
          <Method sig=".renderInputComponent(props)">
            Render input component.
          </Method>
        </API>
        <Section title="FieldsetMixin">
          <p>
          </p>
        </Section>
        <API>
          <Mixin sig="FormElementMixin" />
          <Mixin sig="FormContextMixin" />
          <Method sig=".renderField(schema)">
            Render field for a schema.
          </Method>
          <Method sig=".renderFieldByName(name)">
            Render field for schema node by name.
          </Method>
        </API>
        <Section title="RepeatingFieldsetMixin">
          <p>
          </p>
        </Section>
        <API>
          <Mixin sig="FormElementMixin" />
          <Mixin sig="FormContextMixin" />
          <Prop sig="onAddItem()">
            Called when a new item is added.
          </Prop>
          <Prop sig="onRemoveItem(name)">
            Called when an item with index <code>name</code> is removed.
          </Prop>
          <Method sig=".items()">
            Render a list of items.
          </Method>
          <Method sig=".removeItem(name)">
            Remove item by index.
          </Method>
          <Method sig=".addItem()">
            Add new item.
          </Method>
        </API>
      </Demo>
    );
  }
});




