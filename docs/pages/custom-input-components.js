/**
 * @jsx React.DOM
 */
'use strict';

var React            = require('react');
var Link             = require('react-router-component').Link;
var Demo             = require('../lib/Demo');
var Section          = require('../lib/Section');
var Column           = require('../lib/Column');
var Code             = require('../lib/Code');

module.exports = React.createClass({

  render: function() {
    return (
      <Demo name="Custom input components">
        <Section>
          <Column>
            <p>
              Rex Component Forms allows to customize input components on
              per-field basis.
            </p>
            <p>
              To do that you just need to set the <code>input</code> property of
              the relevant field in the schema to a configured component
              instance which accepts <code>value</code> and
              <code>onChange</code> properties.
            </p>
          </Column>
          <Column>
            <Code>{`
              ...
              <Property input={RadioButtonGroup(...)} />
              ...
            `}</Code>
          </Column>
        </Section>
      </Demo>
    );
  }
});
