/**
 * @jsx React.DOM
 */
'use strict';

module.exports = React.createClass({

  render: function() {
    return (
      <Demo name="Custom input components">
        <Section>
          <p>
            React Forms allows to customize input components on
            per-field basis.
          </p>
        </Section>
        <Section>
          <Column>
            <p>
              To use input component to render a field one should set an
              <code>input</code> property of the relevant schema node.
            </p>
            <p>
              Value of the <code>input</code> property should be a configured
              component instance which accepts <code>value</code> and
              <code>onChange</code> properties.
            </p>
          </Column>
          <Column>
            <Code>{`
              <Schema>
                ...
                <Property input={RadioButtonGroup(...)} />
                ...
              </Schema>
            `}</Code>
          </Column>
        </Section>
      </Demo>
    );
  }
});
