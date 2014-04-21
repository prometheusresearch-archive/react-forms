/**
 * @jsx React.DOM
 */
'use strict';

var CheckboxGroup = require('react-forms/lib/input/CheckboxGroup');

var options = [
  {value: 'female', name: 'Female'},
  {value: 'male', name: 'Male'} 
];

var CheckboxGroupDemo = React.createClass({

  render: function() {
    return (
      <Demo className="CheckboxGroupDemo" name={this.props.name}>

        <Section title="Basic usage">
          <Column>
            <p>
              First some tests data:
            </p>
            <Code>{`
              var options = [
                {value: 'female', name: 'Female'},
                {value: 'male', name: 'Male'} 
              ];`}
            </Code>
            <p>
              Now let's render <code>RadioButtonGroup</code> component:
            </p>
            <Code>
              {`<CheckboxGroup options={options} />`}
            </Code>
          </Column>
          <Column>
            <ShowValue>
              <CheckboxGroup options={options} />
            </ShowValue>
          </Column>
        </Section>

        <Section title="Setting initial value">
          <Column>
            <p>
              You can pass initial value via corresponding prop:
            </p>
            <Code>{`
              <CheckboxGroup
                value={["male"]}
                options={options} />`}
            </Code>
          </Column>
          <Column>
            <ShowValue>
              <CheckboxGroup value={["male"]} options={options} />
            </ShowValue>
          </Column>
        </Section>

        <Section title="Setting multiple initial values">
          <Column>
            <p>
              You can even pass multiple values:
            </p>
            <Code>{`
              <CheckboxGroup
                value={["male", "female"]}
                options={options} />`}
            </Code>
          </Column>
          <Column>
            <ShowValue>
              <CheckboxGroup value={["male", "female"]} options={options} />
            </ShowValue>
          </Column>
        </Section>

      </Demo>
    );
  }
});

module.exports = CheckboxGroupDemo;
