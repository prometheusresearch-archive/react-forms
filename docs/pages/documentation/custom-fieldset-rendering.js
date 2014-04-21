/**
 * @jsx React.DOM
 */
'use strict';

module.exports = React.createClass({

  render: function() {
    return (
      <Demo name="Custom fieldset rendering">
        <Section>
          <Column>
            <p>
              You might want to customize how fieldsets are rendered and even
              make fieldset components specifically to represent some schemas.
            </p>
            <p>
              Such components can be programmed to display/hide specific form
              fields based on value of other form fields and so on.
            </p>
            <p>
              There's <code>FieldsetMixin</code> mixin which makes creating new
              fieldset components easy.
            </p>
            <p>
              Note the usage of <code>FormFor</code> which now takes a single
              property <code>name</code>. In that case, it generates a component
              tree for a specific key in schema, associated with the fieldset.
            </p>
          </Column>
          <Column>
            <Code>{`
              var FormFor = ReactForms.FormFor

              var SpecialFieldset = React.createClass({
                mixins: [ReactForms.FieldsetMixin],

                render: function() {
                  return (
                    <div>
                      <FormFor name="name" />
                      <FormFor name="anotherField" />
                      {this.value().age > 18 &&
                        <FormFor name="specialField" />}
                    </div>
                  )
                }
              })
            `}</Code>
          </Column>
        </Section>
        <Section>
          <Column>
            <p>
              To use <code>SpecialFieldset</code> for a schema it is designed
              for, you need to set <code>component</code> property of the
              schema.
            </p>
            <p>
              Of course if your fieldset is designed to be generic you can use
              it for any schema you want.
            </p>
          </Column>
          <Column>
            <Code>{`
              var SpecialSchema = (
                <Schema component={SpecialFieldset}>
                  ...
                </Schema>
              )
            `}</Code>
          </Column>
        </Section>
      </Demo>
    );
  }
});


