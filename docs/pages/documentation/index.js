/**
 * @jsx React.DOM
 */
'use strict';

module.exports = React.createClass({

  render: function() {
    return (
      <Demo name="Overview">
        <Section title="Concepts">
          <p>
            There are three central concepts — form schemas, form components and
            input components.
          </p>
          <h4>Form Schemas</h4>
          <p>
            <em>Form schemas</em> are high level declarative descriptions of how
            forms should operate: what's shape of the data form should handle,
            how to render any specific field, how to validate user input and so
            on. Form schemas doesn't do anything by themselves they are just
            metadata and are subject to interpretation by form components of
            React Forms library.
          </p>
          <h4>Form Components</h4>
          <p>
            <em>Form components</em> are React components which interpret form
            schemas to render form UI and handle validation and data flow. They
            are designed to be as generic as possible and so to be reusable
            across as many form schemas as possible.
          </p>
          <p>
            The functional scope of form components is to decide where to render
            <code>{"<label />"}</code> elements, when to show hide any specific
            field, how to handle array values and so on. What falls outside of
            this is how users enter form values, this is handled by input
            components instead.
          </p>
          <h4>Input Components</h4>
          <p>
            <em>Input components</em> are React components which handle user
            input of form values. At a basic level these are <code>{"<input />"}
            </code> components. But one can develop custom ones as datepickers, WYSIWYG
            editors and so on. Technically input components are reusable outside of
            React Forms context and are typical components which conform to
            "value/onChange" contract.
          </p>
        </Section>
        <Section title="Workflow">
          <p>
            A typical workflow for an application which wishes to use React Forms library is:
          </p>
          <ul>
            <li>
              Define form schemas for data structures
            </li>
            <li>
              Use standard form components provided by React Forms
            </li>
            <li>
              Extend form schemas with custom metadata which is specific to the
              application
            </li>
            <li>
              Create application specific form components which handle extended form schemas
            </li>
            <li>
              Create application specific input components
            </li>
          </ul>
          <p>
            Such workflow allows to start quickly with a working prototype and
            then iterate smoothly to a greater user experience.
          </p>
        </Section>
        <Section title="Customizations and extensions">
          <p>
            There are several ways in which React Forms can be customized and
            extended:
          </p>
          <ul>
            <li>
              Form schemas can include additional metadata which can be used by
              form components to implement functionality as show/hide specific
              form fields, focus control, advanced validation, ...
            </li>
            <li>
              Custom components for form, fieldset, repeating fieldset and field
              rendering can be created which can be specific to a form schema or
              can be generic and handle any form schema and can leverage
              additional metadata provided via form schema.
            </li>
            <li>
              Custom input components can be created and used for any specific
              form fields. For example date pickers, WYSIWYG editors and so on.
            </li>
          </ul>
          <p>
            Those scenarious are describes in <em>Customizations and
            extensions</em> section in the documentation.
          </p>
        </Section>
        <Section title="Basic usage">
          <Column>
            <p>
              First we need to bring needed API into scope. Currently React
              Forms library exposes its API via a set of CommonJS modules.
            </p>
            <p>
              A CommonJS utility like <a
              href="http://browserify.org">browserify</a> or <a
              href="http://webpack.github.io">webpack</a> can be used to consume
              CommonJS modules.
            </p>
          </Column>
          <Column>
            <Code>{`
              var ReactForms = require('react-forms')

              var Schema   = ReactForms.schema.Schema
              var Property = ReactForms.schema.Property
              var Form     = ReactForms.Form
            `}</Code>
          </Column>
        </Section>
        <Section>
          <Column>
            <p>
              React Forms uses a <Link href="/pages/schema">React Forms Schema
              </Link> API to define form schemas.
            </p>
            <p>
              Schema accepts (among a required <code>name</code> property)
              <code>label</code> and <code>validate</code> properties which
              specify how to generate labels for input widgets and how to
              validate user input.
            </p>
          </Column>
          <Column>
            <Code>{`
              var Person = (
                <Schema label="Person">
                  <Property
                    name="name"
                    label="Name"
                    required
                    validate={validateName} />
                  <Property
                    name="dob"
                    label="Date Of Birth" />
                </Schema>
              )
            `}</Code>
          </Column>
        </Section>
        <Section>
          <Column>
            <p>
              The next step is to simply use <code>Form</code> component to
              render form using previously defined <code>Person</code> schema.
            </p>
            <p>
              This way data description and data presentation are separated
              between schema and form components.
            </p>
          </Column>
          <Column>
            <Code>{`
              <Form schema={Person} />
            `}</Code>
          </Column>
        </Section>
      </Demo>
    );
  }
});
