/**
 * @jsx React.DOM
 */

(function() {
'use strict';

var Form             = ReactForms.Form;
var FormFor          = ReactForms.FormFor;
var Schema           = ReactForms.schema.Schema;
var List             = ReactForms.schema.List;
var Property         = ReactForms.schema.Property;
var RadioButtonGroup = ReactForms.input.RadioButtonGroup;

function validateName(v) {
  return /^[a-z\s]+$/i.test(v);
}

function SexField(props) {
  props = props || {};
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
}

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

function NameField(props) {
  props = props || {};
  return (
    <Property
      name={props.name || 'name'}
      label={props.label || 'Name'}
      hint="Should contain only alphanumeric characters"
      type={name}
      validate={validateName}
      />
  );
}

function DateOfBirthField(props) {
  props = props || {};
  return (
    <Property
      name={props.name || 'dob'}
      label={props.label || 'Date of Birth'}
      hint="Should be in YYYY-MM-DD format"
      type="date"
      />
  );
}

function Adult(props) {
  props = props || {};
  return (
    <Schema label={props.label || 'Adult'} name={props.name}>
      <NameField />
      <DateOfBirthField />
    </Schema>
  );
}

function Child(props) {
  props = props || {};
  return (
    <Schema component={ChildFieldset} name={props.name}>
      <NameField />
      <DateOfBirthField />
      <SexField required />
      <Property label="Female specific value" name="femaleSpecificValue" />
      <Property label="Male specific value" name="maleSpecificValue" />
    </Schema>
  );
}

function Family(props) {
  props = props || {};
  return (
    <Schema name={props.name}>
      <Adult name="mother" label="Mother" />
      <Adult name="father" label="Father" />
      <List label="Children" name="children">
        <Child />
      </List>
    </Schema>
  );
}

var ChildFieldset = React.createClass({
  mixins: [ReactForms.FieldsetMixin],

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

React.renderComponent(
  <ShowValue horizontal onUpdate>
    <Form schema={<Family />} />
  </ShowValue>,
  document.getElementById('example')
);

})();
