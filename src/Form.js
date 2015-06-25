/**
 * @copyright 2015, Prometheus Research, LLC
 */
'use strict';

var React           = require('react');
var Value           = require('./Value');
var Fieldset        = require('./Fieldset');

var DEFAULT_SCHEMA = {
  id: 'emptyschema',
  type: 'object'
};

function emptyFunction() {
}

var Form = React.createClass({

  render() {
    var {schema, value, children, forceShowErrors, ...props} = this.props;
    if (!Value.isValue(value)) {
      value = Value(schema, value, this.props.onChange, {forceShowErrors});
    }
    return (
      <Fieldset component="form" formValue={value}>
        {children}
      </Fieldset>
    );
  },

  getDefaultProps() {
    return {
      schema: DEFAULT_SCHEMA,
      value: {},
      onChange: emptyFunction
    };
  }
});

module.exports = Form;
