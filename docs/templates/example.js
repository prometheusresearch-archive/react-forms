/**
 * @jsx React.DOM
 */

var React = require('react');
var Markdown = require('./markdown');

var Example = React.createClass({

  render: function() {
    var page = this.props.page;
    var name = page.filepath.relative.replace(/\.md$/, '');

    var scripts = page.metadata.scripts || [];
    scripts.unshift(`scripts/${name}.js`);
    scripts.unshift('scripts/ShowValue.js');

    return this.transferPropsTo(
      <Markdown scripts={scripts} page={page} />
    );
  }
});

module.exports = Example;
