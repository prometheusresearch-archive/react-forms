/**
 * @jsx React.DOM
 */
'use strict';

var React            = require('react');
var cx               = require('react/lib/cx');
var Demo             = require('../lib/Demo');
var Section          = require('../lib/Section');
var Column           = require('../lib/Column');
var Code             = require('../lib/Code');
var ShowValue        = require('../lib/ShowValue');

var forms            = require('react-forms');
var RadioButtonGroup = require('react-forms/lib/input/RadioButtonGroup');

var schema           = forms.schema;
var Form             = forms.Form;
var FormFor          = forms.FormFor;
var Schema           = schema.Schema;
var List             = schema.List;
var Property         = schema.Property;

var validateName        = (s) => /^[a-z\s]+$/i.test(s);

var SexField = schema.createType((props) => {
  var options = [
    {value: 'male', name: 'Male'},
    {value: 'female', name: 'Female'}
  ];
  return (
    <Property
      name={props.name || 'sex'}
      label={props.label || 'Sex'}
      required={props.required}
      input={<RadioButtonGroup options={options} />}
      />
  );
});

var name = {
  deserialize: function(s) {
    if (s === '') {
      return null;
    }
    return s.split(/\s+/)
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join(' ');
  },
  serialize: function(s) {
    return s === null ? '' : s;
  }
};

var NameField = schema.createType((props) =>
  <Property
    name={props.name || 'name'}
    label={props.label || 'Name'}
    type={name}
    validate={validateName}
    />
);

var DateOfBirthField = schema.createType((props) => 
  <Property
    name={props.name || 'dob'}
    label={props.label || 'Date of Birth'}
    type="date"
    />
);

var Adult = schema.createType((props) =>
  <Schema label={props.label || 'Adult'} name={props.name}>
    <NameField />
    <DateOfBirthField />
  </Schema>
);

var Child = schema.createType((props) =>
  <Schema component={ChildFieldset} name={props.name}>
    <NameField />
    <DateOfBirthField />
    <SexField required />
    <Property label="Female specific value" name="femaleSpecificValue" />
    <Property label="Male specific value" name="maleSpecificValue" />
  </Schema>
);

var Family = schema.createType((props) =>
  <Schema name={props.name}>
    <Adult name="mother" label="Mother" />
    <Adult name="father" label="Father" />
    <List label="Children" name="children">
      <Child />
    </List>
  </Schema>
);

var ChildFieldset = React.createClass({
  mixins: [forms.FieldsetMixin],

  render: function() {
    var sex = this.value().sex;
    return this.transferPropsTo(
      <div className="react-forms-fieldset">
        <FormFor name="name" />
        <FormFor name="dob" />
        <FormFor name="sex" />
        {sex === 'male' ?
         <FormFor name="maleSpecificValue" /> :
         sex === 'female' ?
         <FormFor name="femaleSpecificValue" /> :
         null}
      </div>
    );
  }
});

var MasterDetailFormDemo = React.createClass({

  render: function() {
    return (
      <Demo className="FormDemo" name={this.props.name}>
        <Section>
          <p>
            This example showcases several aspects of React Forms library, most
            notably defining reusable schema pieces, creating custom fieldset
            component and repeating fieldset usage.
          </p>
        </Section>
        <Section title="Schema to model family">
          <Column>
            <p>
              We start with defining fields for family data structure which will
              be used across several parts.
            </p>
            <p>
              This snippet defines <code>NameField</code> property which is
              validated with a custom validator and have default values
              <code>name</code> and <code>label</code> properties (which can be
              overriden if needed).
            </p>
          </Column>
          <Column>
            <Code>{`
              var validateName = (s) =>
                /^[a-z\\s]+$/i.test(s)

              var NameField = schema.createType((props) =>
                <Property
                  name={props.name || 'name'}
                  label={props.label || 'Name'}
                  validate={validateName}
                  />
              )
              `}
            </Code>
          </Column>
        </Section>
        <Section>
          <Column>
            <p>
              Now we can define schemas for adults and children, both using
              already defined <code>NameField</code>,
              <code>DateOfBirthField</code> and <code>SexField</code>
              (the latter two are defined similarly to <code>NameField</code>).
            </p>
            <p>
              Note the <code>component</code> property of <code>Child</code>
              schema what defines which fieldset component should be used to
              render schemas of such type. We will show how to define
              <code>ChildFieldset</code> below.
            </p>
          </Column>
          <Column>
            <Code>{`
              var Adult = schema.createType((props) =>
                <Schema label={props.label} name={props.name}>
                  <NameField />
                  <DateOfBirthField />
                </Schema>
              )

              var Child = schema.createType((props) =>
                <Schema component={ChildFieldset} name={props.name}>
                  <NameField />
                  <DateOfBirthField />
                  <SexField required />
                  <Property
                    label="Female specific value"
                    name="femaleSpecificValue" />
                  <Property
                    label="Male specific value"
                    name="maleSpecificValue" />
                </Schema>
              )
              `}
            </Code>
          </Column>
        </Section>
        <Section>
          <Column>
            <p>
              Finally the schema for family would look like a composition of
              schema types we defined previously.
            </p>
            <p>
              Note how we have defined <code>Children</code> as a list of
              <code>Child</code>. That describes that a family can have multiple
              children and form would have a corresponding UI controls to add
              and remove children records.
            </p>
          </Column>
          <Column>
            <Code>{`
              var Family = schema.createType((props) =>
                <Schema name={props.name}>
                  <Adult name="mother" label="Mother" />
                  <Adult name="father" label="Father" />
                  <List label="Children" name="children">
                    <Child />
                  </List>
                </Schema>
              )
              `}
            </Code>
          </Column>
        </Section>
        <Section title="Custom fieldset component for Child">
          <Column>
            <p>
              Now we define <code>ChildFieldset</code> component which is used
              to render values described with <code>Child</code> schema. The
              reason we want to do this is that we want to show a different set
              of fields based on a sex of a child.
            </p>
            <p>
              Note that creating a fieldset component reduces down to using
              <code>FieldsetMixin</code> mixin and defining
              <code>render()</code> method.
            </p>
            <p>
              <code>FieldsetMixin</code> provides <code>value()</code> method
              which allows accessing a current form value for this particular
              schema node.
            </p>
            <p>
              To render its fields <code>ChildFieldset</code> component uses a
              <code>FormFor</code> component which automatically receives a
              corresponding schema and value based on its <code>name</code>
              property.
            </p>
          </Column>
          <Column>
            <Code>{`
              var ChildFieldset = React.createClass({
                mixins: [forms.FieldsetMixin],

                render: function() {
                  var sex = this.value().sex;
                  return this.transferPropsTo(
                    <div className="react-forms-fieldset">
                      <FormFor name="name" />
                      <FormFor name="dob" />
                      <FormFor name="sex" />
                      {sex === 'male' ?
                      <FormFor name="maleSpecificValue" /> :
                      sex === 'female' ?
                      <FormFor name="femaleSpecificValue" /> :
                      null}
                    </div>
                  )
                }
              })
              `}
            </Code>
          </Column>
        </Section>
        <Section title="Rendering family">
          <Column>
            <p>
              Finally we can render our <em>Family form</em> by simply using
              <code>Form</code> component with out <code>Family</code> schema.
            </p>
          </Column>
          <Column>
            <Code>{`
              <Form schema={<Family />} />
              `}
            </Code>
          </Column>
        </Section>
        <Section>
          <ShowValue onUpdate horizontal>
            <Form schema={<Family />} />
          </ShowValue>
        </Section>
      </Demo>
    );
  }
});

module.exports = MasterDetailFormDemo;
