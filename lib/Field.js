/**
 * @jsx React.DOM
 */
'use strict';

var React           = require('react');
var cx              = require('react/lib/cx');
var mergeInto       = require('react/lib/mergeInto');
var FieldMixin      = require('./FieldMixin');
var Message         = require('./Message');

var Field = React.createClass({
  mixins: [FieldMixin],

  propTypes: {
    label: React.PropTypes.string
  },

  renderLabel: function(props) {
    var schema = this.schema();
    var label = this.props.label ? this.props.label : schema.props.label;
    var hint = this.props.hint ? this.props.hint : schema.props.hint;
    var labelProps = {className: 'react-forms-label'};
    if (props) {
      mergeInto(labelProps, props);
    }
    return (label || hint) && React.DOM.label(labelProps,
      label,
      hint && <span className="react-forms-hint">{hint}</span>);
  },

  render: function() {
    var validation = this.validationLens().val();

    var className = cx({
      'react-forms-field': true,
      'invalid': validation.isFailure
    });

    var id = this._rootNodeID;

    return (
      <div className={className}>
        {this.renderLabel({htmlFor: id})}
        {this.transferPropsTo(this.renderInputComponent({id}))}
        {validation.isFailure &&
          <Message>{validation.validation.failure}</Message>}
      </div>
    );
  }
});

module.exports = Field;
