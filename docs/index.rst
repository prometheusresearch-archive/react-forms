React Forms
===========

React Forms is a library of data structures and React_ components for handling
forms.

.. _React: http://facebook.github.io/react

Basic example
-------------

The example code which creates a form with nested fieldsets and repeated
fieldsets looks like:

.. jsx::
  :harmony:

  var React = require('react')
  var ReactForms = require('react-forms')
  var {Mapping, Scalar, List} = ReactForms.schema
  var Demo = require('react-forms/lib/Demo')

  function Person(props) {
    return Mapping(props, {
      first: Scalar({label: 'First name'}),
      last: Scalar({label: 'Last name'})
    })
  }

  var family = Mapping({
    mother: Person({label: 'Mother'}),
    father: Person({label: 'Father'}),
    children: List({label: 'Children'}, Person())
  })

  React.render(
    <Demo>
      <ReactForms.Form schema={family} />
    </Demo>,
    document.getElementById('example'))

This code results in a form:

.. raw:: html

  <div id="example"></div>

The form is described via form schema which then rendered via form components
into DOM. The form value is consolidated into a single place (in the ``<Form />``
component but also can be stored in a Flux store) and can be fully controlled via
JavaScript code.

Installation and usage
----------------------

React Forms is distributed as a set of CommonJS modules available through npm_
package registry. You can install both React Forms and React via ``npm`` command
line tool::

  % npm install react-forms

After that you will be able to require it:

.. jsx::

  var ReactForms = require('react-forms')

As browser currently don't support consuming CommonJS modules directly, an
application which uses React Forms must be bundled either by Browserify_ or
Webpack_ or other CommonJS module bundler.

.. _CommonJS: https://github.com/substack/browserify-handbook#require
.. _npm: http://npmjs.org
.. _Browserify: http://browserify.org
.. _Webpack: https://webpack.github.io

.. toctree::
   :maxdepth: 3
   :hidden:

   self
   overview
   schema
   styling
   flux
   examples/index
   api
   tips
