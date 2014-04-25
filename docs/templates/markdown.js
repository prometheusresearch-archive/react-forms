/**
 * @jsx React.DOM
 */

var React = require('react');
var Page  = require('./page');

var Markdown = React.createClass({

  render: function() {
    var page = this.props.page;
    return this.transferPropsTo(
      <Page scripts={this.props.scripts || page.metadata.scripts}>
        <div 
          className="Content container" 
          dangerouslySetInnerHTML={{__html: page.html}}
          />
      </Page>
    );
  }
});

module.exports = Markdown;
