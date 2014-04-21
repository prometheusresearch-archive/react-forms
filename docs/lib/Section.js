/**
 * @jsx React.DOM
 */
'use strict';

var React  = require('react');

var Section = React.createClass({

  render: function() {
    return this.transferPropsTo(
      <div className="Section row">
        {this.props.title ?
          <h2 className="SectionTitle">{this.props.title}</h2> :
          null}
        <div className="SectionRow">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = Section;
