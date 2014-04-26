/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');

var NavigationBar = React.createClass({

  statics: {
    divider: {__tag__: '__divider__'},
    header: function(header) {
      return {__tag__: '__header__', header};
    }
  },

  renderLinks: function(pages, parent) {
    var baseUrl = this.props.baseUrl || '/';
    return pages.map((page, idx) => {
      var key = parent && page.path ? `${parent.path}__${page.path}` : page.path || idx;
      if (page.__tag__ === '__divider__') {
        return <li className="divider" key={key}></li>
      } else if (page.__tag__ === '__header__') {
        return <li className="dropdown-header" key={key}>{page.header}</li>;
      } else if (page.pages) {
        var sublinks = this.renderLinks(page.pages, page);
        return (
          <li className="dropdown" key={key}>
            <a className="dropdown-toggle" href={page.path ? baseUrl + page.path : null}>
              {page.name} <b className="caret"></b>
            </a>
            <ul className="dropdown-menu">{sublinks}</ul>
          </li>
        );
      } else {
        return (
          <li key={key}>
            <a href={baseUrl + page.path}>{page.name}</a>
          </li>
        );
      }
    });
  },

  render: function() {
    var baseUrl = this.props.baseUrl || '/';
    return (
      <nav className="NavigationBar navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href={baseUrl + this.props.main.path}>{this.props.main.name}</a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">{this.renderLinks(this.props.pages)}</ul>
            {this.props.repo &&
              <div className="navbar-repo">
                <a href={this.props.repo}>{this.props.title} on GitHub &rarr;</a>
              </div>}
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = NavigationBar;
