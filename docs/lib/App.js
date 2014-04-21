/**
 * @jsx React.DOM
 */
'use strict';

var React         = require('react');
var Router        = require('react-router-component');
var NavigationBar = require('./NavigationBar');

var Locations = Router.Locations;
var Location  = Router.Location;

var App = React.createClass({

  render: function() {
    return (
      <div>
        <NavigationBar main={this.props.pages[0]} pages={this.props.pages.slice(1)} />
        <Locations onNavigation={this.onNavigation} className="wrapper">
          {this.renderRoutes(this.props.pages)}
        </Locations>
      </div>
    );
  },

  renderRoutes: function(pages, routes) {
    var routes = [];
    pages.forEach((page) => {
      if (page.handler) {
        routes.push(Location(page));
      }
      if (page.pages) {
        routes = routes.concat(this.renderRoutes(page.pages, routes));
      }
    });
    return routes;
  },

  onNavigation: function() {
    document.body.scrollTop = 0;
  }

});

module.exports = App;
