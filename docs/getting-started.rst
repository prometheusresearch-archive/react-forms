Getting started
===============

This page provides the usage instructions to get started with React Forms in
different environments. We recommend using CommonJS_ module format, but we are
also providing support for AMD and a standalone builds of React Forms.

Installation
------------

React Forms is distributed as a set of CommonJS modules available through npm_
package registry. You can install both React Forms and React via ``npm`` command
line tool.

.. note::
  :class: inline

  ``npm`` command-line utility comes bundled with a Node.js installation.

::

  % npm install react-forms react

This will create a ``node_modules`` directory in the current working directory
with ``react`` and ``react-forms`` packages installed.

Now create a file called ``index.js``. First we need to bring React Forms and
React into scope using ``require()`` function. We also alias some definitions
to make them look better and more descriptive.

.. note::
  :class: inline

  For the sake of simplicity we will assume that all application code lives in a
  single file ``index.js``. But in the real-world scenariou CommonJS module
  format makes it easy to factor out application into separate modules.

.. jsx::

  var React = require('react')
  var Forms = require('react-forms')

Defining form schema
--------------------

The first step is to define a schema for our form. Form schemas are used to
describe what's the shape of the data form represents, how it should validate it
and how to present form fields to a user:

.. jsx::

  var Scalar = Forms.schema.Scalar
  var Mapping = Forms.schema.Mapping

  var schema = Mapping(
    Scalar({name: 'firstName', label: 'First name'}),
    Scalar({name: 'lastName', label: 'Last name'}),
    Scalar({name: 'age', type: 'number', label: 'Age'}))

Rendering form
--------------

Now the final step is to render a ``Form`` component with this schema:

.. jsx::

  React.renderComponent(
    <Forms.Form
      schema={schema}
      defaultValue={{firstName: 'John', lastName: 'Doe', age: 27}}
      />,
    document.getElementById('form'))

That's a complete example of using React Forms to create a simple form:

.. raw:: html

  <div id="form"></div>

Bundling CommonJS
-----------------

Now that we have completed our minimal React Forms application using CommonJS
module format we should make things work in browser. For that we can use any
CommonJS bundler which understands how to get React and React Forms installed
via npm and bundle them into a single (or multiple) files.

There are tow main players on this field: Browserify_ and Webpack_. Both have
their strengths and weaknesses.

Bundling CommonJS with Browserify
`````````````````````````````````

Browserify can be installed via npm. We also need a ``reactify`` package which
provides a transform for Browserify which compiles JSX syntax to standard
JavaScript. Install both with the following commands:

.. note::
  :class: inline

  ``npm install -g`` will install browserify so it's available as a "global"
  ``browserify`` command. This can require sudo on Unix/Linux/Mac OS X.
  Alternatively you can install without ``-g`` flag and refer to
  ``./node_modules/.bin/browserify`` executable.

::

  % npm install -g browserify
  % npm install reactify

Now we have ``browserify`` command available and can use it like::

  % browserify ./index.js > bundle.js

This will create a file named ``bundle.js`` which can be included into an HTML
file via ``<script>`` element.

Bundling CommonJS with Webpack
``````````````````````````````

Webpack is another CommonJS bundler. It is very flexible and can produce bundles
which consist of several chunks. You can read more on using Webpack in the
`official documentation <Webpack>`_.

As React Forms is written using JSX and ES6 syntax, you would also need to install
``jsx-loader`` and use it with ``harmony`` flag. The relevant piece of Webpack
configuration::

  module.exports = {
    ...
    loaders: [
      {include: /.*\.js/, loader: 'jsx-loader?harmony'}
    ],
    ...
  }

.. _CommonJS: https://github.com/substack/browserify-handbook#require
.. _npm: http://npmjs.org
.. _Browserify: http://browserify.org
.. _Webpack: https://webpack.github.io
