/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var Link  = require('react-router-component').Link;
var Page  = require('./Page');

var MainPage = React.createClass({

  render: function() {
    return (
      <Page
        title="Rex Component"
        tagline="UI architecture for the Rex Platform">
        <p>
          Rex Component is an umbrella project for a set of libraries which
          implements UI architecture for the Rex Platform. Currently the
          libraries provided by Rex Components are:
        </p>
        <ul>
          <li>
            <p>
              <strong><Link href="/pages/grid">Grid</Link></strong> &mdash; a
              customizable grid component which features virtualized canvas
              which renders only a visible part of a dataset.
            </p>
          </li>
          <li>
            <p>
              <strong><Link href="/pages/forms">Forms</Link></strong> &mdash; a
              library to define a manage forms for arbitrary data structures.
              Also provides a set of input components such as radio buttons,
                   checkbox groups.
            </p>
          </li>
          <li>
            <p>
              <strong><Link 
              href="/pages/autocomplete">Autocomplete</Link></strong> &mdash; a
              customizable autocomplete component.
            </p>
          </li>
          <li>
            <p>
              <strong><Link href="/pages/schema">Schema</Link></strong> &mdash;
    a set of primitives to describe data structures. Used by Forms to attach
      validation to data and to build generic form components.
            </p>
          </li>
          <li>
            <p>
              <strong><Link href="/pages/lens">Lens</Link></strong> &mdash; an
              utility to project a part of a data structure and to allow an easy
              way to modify only projected part and yield a new data structure.
            </p>
          </li>
        </ul>
        <p>
          This package is a part of the <a href="http://rexdb.com/">RexDB</a> ®
          platform for medical research data management. RexDB is free software
          created by <a href="http://prometheusresearch.com">Prometheus
          Research, LLC</a>. For more information, please visit <a
          href="http://rexdb.org/">http://rexdb.org/</a>.  </p>
        <p>
          The development of this product was supported by the National
          Institute of Mental Health of the National Institutes of Health under
          Award Number R43MH099826.
        </p>
      </Page>
    );
  }
});

module.exports = MainPage;
