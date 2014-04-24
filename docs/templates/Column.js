/**
 * @jsx React.DOM
 */
'use strict';

var React  = require('react');

var Column = React.createClass({

  render: function() {
    return this.transferPropsTo(
      <div className={`Column col-md-${this.props.w || 6}`}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Column;
