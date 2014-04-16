/**
 * @jsx React.DOM
 */
'use strict';

var React                     = require('react');
var FormElementMixin          = require('./FormElementMixin');
var createComponentFromSchema = require('./createComponentFromSchema');

/**
 * A "proxy" component which renders into field, fieldset or repeating fieldset
 * based on a current schema node.
 */
var FormFor = React.createClass({
  mixins: [FormElementMixin],

  propTypes: {
    name: React.PropTypes.string
  },

  render: function() {
    return this.transferPropsTo(createComponentFromSchema(this.schema()));
  }
});

module.exports = FormFor;
