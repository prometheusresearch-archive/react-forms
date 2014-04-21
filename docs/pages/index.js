/**
 * @jsx React.DOM
 */
'use strict';

module.exports = React.createClass({

  render: function() {
    return (
      <Demo
        name="React Forms"
        tagline="Forms library for React">
        <Section>
          <p>
            React Forms library provides a set of tools to handle forms. It is
            designed with the intention to handle arbitraty complex data
            structures and to be customizable and extendable.
          </p>
          <h3>Getting started</h3>
          <p>
            To get started, use <code>npm</code> to install both React and React Forms:
          </p>
          <Code>
            % npm install react react-forms
          </Code>
          <p>
            Then consult the <Link href="/documentation/">documentation</Link> for the introduction.
          </p>
          <h3>Credits</h3>
          <p>
            This package is a part of the <a href="http://rexdb.org">RexDB</a>®
            platform for medical research data management. RexDB is free
            software created by <a href="http://prometheusresearch.com">Prometheus
            Research, LLC</a> and is released under the AGPLv3 license with a
            commensurate attribution clause. For more information, please visit
            <a href="http://rexdb.org/">http://rexdb.org/</a>.
          </p>
          <p>
            The development of this product was supported by the National
            Institute of Mental Health of the National Institutes of Health
            under Award Number R43MH099826.
          </p>
        </Section>
      </Demo>
    );
  }
});
