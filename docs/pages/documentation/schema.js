/**
 * @jsx React.DOM
 */
'use strict';

module.exports = React.createClass({

  render: function() {
    return (
      <Demo name={this.props.name}>
        <Section>
          <p>
            Form schemas provide a way to descibe a hierarchical data structures
            and their validation rules.
          </p>
        </Section>
        <Section title="Basic usage">
          <Column>
            <p>
              React Forms schema exports <code>Schema</code>, <code>List</code>
              and <code>Property</code> symbols to describe mapping, list and
              scalar values correspondingly.
            </p>
          </Column>
          <Column>
            <Code>{`
              var ReactForms = require('react-forms')

              var Schema    = ReactForms.schema.Schema
              var List      = ReactForms.schema.List
              var Property  = ReactForms.schema.Property
              `}
            </Code>
          </Column>
        </Section>
        <Section>
          <Column>
            <p>
              Attribute <code>name</code> is required for schema nodes which are
              defined as a part of <code>Schema</code> declarations.
            </p>
          </Column>
          <Column>
            <Code>{`
              var Person = Schema(null,
                Property({name: 'name', label: 'Name'}),
                Property({name: 'dob', label: 'Date Of Birth'})
              )
              `}
            </Code>
          </Column>
        </Section>
        <Section title="Usage with JSX">
          <Column>
            <p>
              React Forms schema API is designed to be compatible with JSX. The
              schema above can be specified using JSX syntax.
            </p>
          </Column>
          <Column>
            <Code>{`
              var Person = (
                <Schema>
                  <Property name="name" label="Name" />
                  <Property name="dob" label="Date Of Birth" />
                </Schema>
              )`}
            </Code>
          </Column>
        </Section>
        <Section title="Schema metadata supported by React Forms">
          <Column>
            <p>
              There are a couple of schema properties supported by form
              components provided by React Forms:
            </p>
            <ul>
              <li>
                <code>type</code> property is for value
                serialization/deserialization to/from DOM
              </li>
              <li>
                <code>validate</code> property is used to specify validators for
                values corresponding to schema
              </li>
              <li>
                <code>label</code> property is used to render <code>{"<label />"}</code>
                elements for form fields
              </li>
              <li>
                <code>hint</code> property is also handled by <code>Field</code> component
              </li>
            </ul>
          </Column>
          <Column>
            <Code>{`
              <Property
                name="name"
                type="string"
                validate={(v) => v > 0}
                label="Name"
                hint="First and last name"
                />
              `}
            </Code>
          </Column>
        </Section>
        <Section title="Schema types">
          <Column>
            <p>
              Schema types are simply objects with <code>serialize</code> and
              <code>deserialize</code> methods:
            </p>
            <p>
              Method <code>serialize</code> is called before passing value to
              input component.
            </p>
            <p>
              Method <code>deserialize</code> is called before validation. It
              could throw an exception in case it cannot deserialize passed value.
            </p>
          </Column>
          <Column>
            <Code>{`
              var MyType = {
                serialize: function(value) {
                  // return a value which will be passed
                  // to input component, probably a string
                },

                deserialize: function(value) {
                  // return a value which will be passed
                  // through validators and stored as a part
                  // of the form value
                }
              }
              `}
            </Code>
          </Column>
        </Section>
      </Demo>
    );
  }
});
