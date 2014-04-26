/**
 * @jsx React.DOM
 */

var React = require('react');
var cx    = require('react/lib/cx');
var Page  = require('./page');

var Markdown = React.createClass({

  render: function() {
    var page = this.props.page;
    var className = cx('Content', 'container', page.metadata.className);
    return this.transferPropsTo(
      <Page scripts={this.props.scripts || page.metadata.scripts}>
        <div 
          className={className}
          dangerouslySetInnerHTML={{__html: page.html}}
          />
      </Page>
    );
  }
});

module.exports = Markdown;
