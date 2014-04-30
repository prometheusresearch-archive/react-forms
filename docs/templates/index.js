/**
 * @jsx React.DOM
 */

var React   = require('react');
var Page    = require('./page');
var Section = require('./Section');
var Column  = require('./Column');
var Code    = require('./Code');

var reactVersion = require('react/package.json').version;
var reactFormsVersion = require('react-forms/package.json').version;

var StandaloneUsage = React.createClass({

  render: function() {
    return (
      <div className="Usage container">
        <Section>
          <h3>Getting started</h3>
          <p>
            We provide a <a href="https://github.com/prometheusresearch/react-forms">standalone build</a> (also installable via bower with <code>bower install react-forms</code>) of React Forms which can be included in your application using <code>{`<script>`}</code> element or loaded using an AMD loader similar to <a href="http://requirejs.org">RequireJS</a>. Alternatively you might want to use React Forms within a CommonJS module system, see instructions below on that.
          </p>
        </Section>
        <Section>
          <Column className="Text">
            <h4>1. Include scripts</h4>
            <p>
              You need to include <code>react-with-addons.js</code> build of React as well as <code>react-forms.js</code> itself.
            </p>
          </Column>
          <Column className="Example">
            <Code>{`
              <script src="JSXTransformer.js"></script>

              <script src="react-with-addons.js"></script>
              <script src="react-forms.js"></script>
              `}
            </Code>
          </Column>
        </Section>
        <Section>
          <Column className="Text">
            <h4>2. Bring into scope</h4>
            <p>
              You probably would want to bring often used components into
              scope. Here we define shortcuts for schema directives and a
              form component.
            </p>
          </Column>
          <Column className="Example">
            <Code>{`
              <script type="text/jsx">
                var Schema    = ReactForms.schema.Schema
                var Property  = ReactForms.schema.Property
                var Form      = ReactForms.schema.Form
              </script>
              `}
            </Code>
          </Column>
        </Section>
        <Section>
          <Column className="Text">
            <h4>3. Define a schema</h4>
            <p>
              Schema is used to define form fields and describe how form data should be validated.
            </p>
          </Column>
          <Column className="Example">
            <Code>{`
              <script type="text/jsx">
                var PersonSchema = (
                  <Schema>
                    <Property name="firstName"
                      label="First name" />
                    <Property name="lastName"
                      label="Last name" />
                    <Property name="age" type="number"
                      label="Age" />
                  </Schema>
                )
              </script>
              `}
            </Code>
          </Column>
        </Section>
        <Section>
          <Column className="Text">
            <h4>4. Render a form</h4>
            <p>
              We use generic <code>Form</code> component to render form from
              schema.
            </p>
          </Column>
          <Column className="Example">
            <Code>{`
              <script type="text/jsx">
                React.renderComponent(
                  <Form
                    schema={PersonSchema}
                    onChange={...}
                    />,
                  document.getElementById('personForm'))
              </script>
              `}
            </Code>
          </Column>
        </Section>
      </div>
    );
  }
});

var CommonJSUsage = React.createClass({

  render: function() {
    return (
      <div className="Usage container">
        <Section>
          <h3>Getting started with CommonJS</h3>
          <p>
            For those who prefer working with CommonJS we provide <code>react-forms</code> npm package which exports React Forms functionality as a set of CommonJS modules.
          </p>
        </Section>
        <Section>
          <Column className="Text">
            <h4>1. Install via npm</h4>
            <p>
              You need both <code>react</code> and <code>react-forms</code> packages installed via npm. Also <code>browserify</code> and <code>reactify</code> help your code to be compiled for browser.
            </p>
          </Column>
          <Column className="Example">
            <Code>{`
              % npm install react react-forms
              % npm install browserify reactify
              `}
            </Code>
          </Column>
        </Section>
        <Section>
          <Column className="Text">
            <h4>2. Require React and React Forms</h4>
            <p>
              Both React and React Forms now can be brought into scope using CommonJS <code>require()</code> function.
            </p>
          </Column>
          <Column className="Example">
            <Code>{`
              /** @jsx React.DOM */

              var React      = require('react')
              var ReactForms = require('react-forms')
              `}
            </Code>
          </Column>
        </Section>
        <Section>
          <Column className="Text">
            <h4>3. Define schema and render form</h4>
            <p>
              These steps are identical to the above usage example.
            </p>
          </Column>
          <Column className="Example">
            <Code>{`
              var PersonSchema = <Schema>...</Schema>

              React.renderComponent(
                <Form schema={PersonSchema} />,
                ...)
              `}
            </Code>
          </Column>
        </Section>
        <Section>
          <Column className="Text">
            <h4>4. Bundle your application</h4>
            <p>
              To serve your application to browser you must bundle all modules together first.
            </p>
          </Column>
          <Column className="Example">
            <Code>{`
              % browserify -t reactify ./main.js > bundle.js
              `}
            </Code>
          </Column>
        </Section>
      </div>
    );
  }
});

var Index = React.createClass({

  render: function() {
    return this.transferPropsTo(
      <Page className="Index">
        <div className="HeaderWrapper">
          <div className="Header container">
            <h1>React Forms</h1>
            <p>
              React Forms library provides a set of tools for <a href="http://facebook.github.io/react">React</a> to handle form rendering and validation.
            </p>
          </div>
        </div>
        <div className="container">
          <h3>Features</h3>
          <p>
            React Forms provides a <strong>schema language</strong> to define form structure and validation and a set of <strong>form components</strong> to render schemas into UI.
          </p>
          <p>
            Data flow between React Forms components provides strong <strong>immutability</strong> guarantees. Form state accessible from a single location and can be snapshotted with almost no overhead.
          </p>
          <p>
            Almost every aspect of React Forms is designed to be <strong>extendable</strong>. It is easy to customize the behaviour of the existing components or create completely new ones.
          </p>
        </div>
        <StandaloneUsage />
        <CommonJSUsage />
        <div className="Development container">
          <Section>
            <h3>Development</h3>
            <p>
              Development of React Forms library takes place at <a href="https://github.com/prometheusresearch/react-forms">prometheusresearch/react-forms</a> repository. If you found a bug, please submit an <a href="https://github.com/prometheusresearch/react-forms/issues">issue</a> or better open a pull request.
            </p>
          </Section>
        </div>
        <div className="Footer container">
          <Section>
            <p>
              React Forms is free software created by <a href="http://prometheusresearch.com">Prometheus Research, LLC</a> and is released under the MIT license.
            </p>
          </Section>
        </div>
      </Page>
    );
  }
});

module.exports = Index;
