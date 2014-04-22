/**
 * @jsx React.DOM
 */
'use strict';

var reactVersion = require('react/package.json').version;
var reactFormsVersion = require('react-forms/package.json').version;

module.exports = React.createClass({

  render: function() {
    return (
      <div className="Page">
        <div className="PageHeader">
          <div className="container">
            <h1 className="title">
              React Forms
            </h1>
            <p>
              React Forms library provides a set of tools to handle forms.
              It is designed with the intention to handle arbitraty complex data
              structures and to be customizable and extendable.
            </p>
            <Section className="Quickstart">
              <Section>
                <Column>
                  <h4>1. Install via npm</h4>
                </Column>
                <Column>
                  <Code>{`
                    % npm install react react-forms
                    react@${reactVersion} node_modules/react
                    react-forms@${reactFormsVersion} node_modules/react-forms
                    `}
                  </Code>
                </Column>
              </Section>
              <Section>
                <Column>
                  <h4>2. Bring into scope</h4>
                  <p>
                    You would need to use <a
                    href="http://browserify.org">browserify</a> or <a
                    href="http://webpack.github.io">webpack</a> to bundle
                    CommonJS modules for a browser
                  </p>
                </Column>
                <Column>
                  <Code>{`
                    var ReactForms = require('react-forms')

                    var Schema    = ReactForms.schema.Schema
                    var Property  = ReactForms.schema.Property

                    var Form = ReactForms.schema.Form
                    `}
                  </Code>
                </Column>
              </Section>
              <Section>
                <Column>
                  <h4>3. Define a schema</h4>
                  <p>
                    To describe a data structure you want to build a form for
                  </p>
                </Column>
                <Column>
                  <Code>{`
                    var PersonSchema = (
                      <Schema>
                        <Property
                          name="firstName"
                          label="First name" />
                        <Property
                          name="lastName"
                          label="Last name" />
                      </Schema>
                    )
                    `}
                  </Code>
                </Column>
              </Section>
              <Section>
                <Column>
                  <h4>4. Render a form</h4>
                  <p>
                    Using a generic form component or build a custom one
                    specifically for your application
                  </p>
                </Column>
                <Column>
                  <Code>{`
                    React.renderComponent(
                      <Form
                        schema={PersonSchema}
                        onChange={...}
                        />,
                      document.getElementById('personForm'))
                    `}
                  </Code>
                </Column>
              </Section>
            </Section>
            <Section>
              <p>
                Consult the <Link
                href="/react-forms/documentation/">documentation</Link> and see
                the <Link
                href="/react-forms/examples/family-editor-example/">examples</Link>.
              </p>
            </Section>
          </div>
        </div>
        <div className="PageContent container-fluid">
          <Section>
            <p>
              This package is a part of the <a href="http://rexdb.org">RexDB</a>®
              platform for medical research data management. RexDB is free
              software created by <a href="http://prometheusresearch.com">Prometheus
              Research, LLC</a> and is released under the AGPLv3 license with a
              commensurate attribution clause. For more information, please visit
              <a href="http://rexdb.org/">http://rexdb.org/</a>.
            </p>
            <p>
              The development of this product was supported by the National
              Institute of Mental Health of the National Institutes of Health
              under Award Number R43MH099826.
            </p>
          </Section>
        </div>
      </div>
    );
  }
});
