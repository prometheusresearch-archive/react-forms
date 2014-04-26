/**
 * @jsx React.DOM
 */

var React = require('react');
var NavigationBar = require('./NavigationBar');

var Page = React.createClass({

  render: function() {
    var base = this.props.env.config.baseUrl;
    var scripts = this.props.scripts ?
      this.props.scripts.map(function(s, idx) {
        return <script key={idx} src={base + s}></script>;
      }) : null;
    var body = this.transferPropsTo(
      <body>
        <NavigationBar
          baseUrl={base}
          repo={this.props.repo}
          title={this.props.title}
          main={this.props.pages[0]}
          pages={this.props.pages.slice(1)} />
        <div className="wrapper">
          {this.props.children}
        </div>
        <script src={base + "scripts/react.js"} />
        <script src={base + "scripts/react-forms.js"} />
        {scripts}
      </body>
    );
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href={base + "styles/index.css"} />
        </head>
        {body}
      </html>
    )
  }
});

module.exports = Page;
