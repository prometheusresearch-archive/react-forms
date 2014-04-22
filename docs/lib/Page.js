/**
 * @jsx React.DOM
 */
'use strict';

var React  = require('react');
var Link   = require('react-router-component').Link;
var GitHubRibbon = require('../lib/GitHubRibbon');

var Page = React.createClass({

  render: function() {
    return this.transferPropsTo(
      <div className="Page">
        <div className="PageHeader">
          <div className="container">
            <h1 className="title">
              {this.props.title}
            </h1>
            {this.props.tagline ?
              <p className="tagline">
                {this.props.tagline}
              </p> :
              null}
          </div>
        </div>
        <div className="PageContent container-fluid">
          {this.props.children}
        </div>
        <GitHubRibbon project="prometheusresearch/react-forms" />
      </div>
    );
  }
});

module.exports = Page;
