/**
 * @jsx React.DOM
 */
'use strict';

module.exports = React.createClass({

  render: function() {
    return (
      <Demo name="Custom form rendering">
        <Section>
          <p>
            <code>Form</code> component provided by the library has only the
            barebone functionality which hopefully will be useful for most of
            the apps, especially at the first stages of prototyping.
          </p>
          <p>
            Usually you would want to create your own form component which
            would manage form value and validation state in some custom way.
            For that there's <code>FormMixin</code> mixin which makes creating
            new form components easy.
          </p>
        </Section>
        <Section>
          <Column>
            <p>
              This is the example of creating a custom form component.
            </p>
            <p>
              Note that form component is not responsible for a layout of form
              fields inside it. It is the duty of <code>Fieldset</code>, <code>
              RepeatingFieldset</code> and <code>Field</code>
              components which correspond to <code>Schema</code>,
              <code>List</code> and <code>Property</code> schemas.
            </p>
            <p>
              Also, take a look at <code>FormFor</code> component. It
              generates a component tree for a current value of the form based
              on form's schema. If form schema is represented as
              <code>Property</code> then just a single field will appear, if
              <code>Schema</code> — fieldset.
            </p>
          </Column>
          <Column>
            <Code>{`
              var FormFor = forms.FormFor

              var MyForm = React.createClass({
                mixins: [forms.FormMixin],

                render: function() {
                  return (
                    <form>
                      <FormFor />
                      <button onClick={...}>Submit</button>
                    </form>
                  )
                }
              })
            `}</Code>
          </Column>
        </Section>
        <Section>
          <Column>
            <p>
              Using <code>MyForm</code> component is easy.
            </p>
          </Column>
          <Column>
            <Code>{`
              <MyForm schema={SomeSchema} />
            `}</Code>
          </Column>
        </Section>
      </Demo>
    );
  }
});

