/**
 * @jsx React.DOM
 */
'use strict';

var React   = require('react');
var Link    = require('react-router-component').Link;

var NavigationBar = React.createClass({

  statics: {
    divider: {__tag__: '__divider__'},
    header: function(header) {
      return {__tag__: '__header__', header};
    }
  },

  renderLinks: function(pages, parent) {
    return pages.map((page, idx) => {
      var anchor = page.path ? Link : React.DOM.a;
      var key = parent && page.path ? `${parent.path}__${page.path}` : page.path || idx;
      if (page.__tag__ === '__divider__') {
        return <li className="divider" key={key}></li>
      } else if (page.__tag__ === '__header__') {
        return <li className="dropdown-header" key={key}>{page.header}</li>;
      } else if (page.pages) {
        var sublinks = this.renderLinks(page.pages, page);
        return (
          <li className="dropdown" key={key}>
            <anchor className="dropdown-toggle" href={page.path}>
              {page.name} <b className="caret"></b>
            </anchor>
            <ul className="dropdown-menu">{sublinks}</ul>
          </li>
        );
      } else {
        return (
          <li key={key}>
            <anchor href={page.path}>{page.name}</anchor>
          </li>
        );
      }
    });
  },

  render: function() {
    return (
      <nav className="NavigationBar navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" href="/">Rex Component</Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">{this.renderLinks(this.props.pages)}</ul>
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = NavigationBar;
