/**
 * @jsx React.DOM
 */

var React = require('react');
var Page  = require('./page');

var Example = React.createClass({

  render: function() {
    var page = this.props.page;
    var base = this.props.env.config.baseUrl;
    var name = page.filepath.relative.replace(/\.md$/, '');

    var scripts = page.metadata.scripts || [];
    scripts.unshift(`scripts/${name}.js`);
    scripts.unshift('scripts/ShowValue.js');

    return this.transferPropsTo(
      <Page scripts={scripts}>
        <div className="ExampleDownload container">
          <a href={base + `scripts/${name}.js`}>Download example code</a>
        </div>
        <div 
          className="Content container" 
          dangerouslySetInnerHTML={{__html: page.html}}
          />
      </Page>
    );
  }
});

module.exports = Example;
