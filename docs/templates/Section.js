/**
 * @jsx React.DOM
 */
'use strict';

var React  = require('react');
var Column = require('./Column');

var Section = React.createClass({

  render: function() {
    var children = this.props.children;

    return this.transferPropsTo(
      <div className="Section row">
        <div className="SectionRow">
          {children}
        </div>
      </div>
    );
  }
});

module.exports = Section;
