/**
 * @jsx React.DOM
 */
'use strict';

var React               = require('react');
var RadioButtonGroup    = require('react-forms/lib/input/RadioButtonGroup');
var Demo                = require('../../lib/Demo');
var Section             = require('../../lib/Section');
var Column              = require('../../lib/Column');
var Code                = require('../../lib/Code');
var ShowValue           = require('../../lib/ShowValue');

var options = [
  {value: 'female', name: 'Female'},
  {value: 'male', name: 'Male'} 
];

var RadioButtonGroupDemo = React.createClass({

  render: function() {
    return (
      <Demo className="RadioButtonGroupDemo" name={this.props.name}>

        <Section title="Basic usage">
          <Column>
            <p>
              We need some data:
            </p>
            <Code>{`
              var options = [
                {value: 'female', name: 'Female'},
                {value: 'male', name: 'Male'} 
              ]`}
            </Code>
            <p>
              Now let's render <code>RadioButtonGroup</code> component:
            </p>
            <Code>
              {`<RadioButtonGroup options={options} />`}
            </Code>
          </Column>
          <Column>
            <ShowValue>
              <RadioButtonGroup options={options} />
            </ShowValue>
          </Column>
        </Section>

        <Section title="Setting initial value">
          <Column>
            <p>
              You can pass initial value via <code>value</code> prop:
            </p>
            <pre>
              {`<RadioButtonGroup value="male" options={options} />`}
            </pre>
          </Column>
          <Column>
            <ShowValue>
              <RadioButtonGroup value="male" options={options} />
            </ShowValue>
          </Column>
        </Section>

        <Section title="No choice option">
          <Column>
            <p>
              We can also pass <code>allowEmpty</code> prop to allow an option
              for a no choice:
            </p>
            <pre>
              {`<RadioButtonGroup allowEmpty options={options} />`}
            </pre>
          </Column>
          <Column>
            <ShowValue>
              <RadioButtonGroup allowEmpty options={options} />
            </ShowValue>
          </Column>
        </Section>

      </Demo>
    );
  }
});

module.exports = RadioButtonGroupDemo;
