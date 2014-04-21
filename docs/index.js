'use strict';

var React         = require('react');
var App           = require('./lib/App');
var NavigationBar = require('./lib/NavigationBar');

var pages = [
  {
    name: 'Overview',
    path: '/',
    handler: require('./pages')
  },
  {
    name: 'Customizations and extensions',
    pages: [
      {
        name: 'Input components',
        path: '/pages/custom-input-components',
        handler: require('./pages/custom-input-components')
      },
      {
        name: 'Form rendering',
        path: '/pages/custom-form-rendering',
        handler: require('./pages/custom-form-rendering')
      },
      {
        name: 'Fieldset rendering',
        path: '/pages/custom-fieldset-rendering',
        handler: require('./pages/custom-fieldset-rendering')
      },
      {
        name: 'Repeating fieldset rendering',
        path: '/pages/custom-repeating-fieldset-rendering',
        handler: require('./pages/custom-repeating-fieldset-rendering')
      }
    ]
  },
  {
    name: 'Examples',
    pages: [
      {
        name: 'Family editor form',
        path: '/pages/family-editor-example',
        handler: require('./pages/family-editor-example')
      },
      {
        name: 'Array editor form',
        path: '/pages/array-form',
        handler: require('./pages/array-form-example')
      },
      {
        name: 'Sortable list',
        path: '/pages/sortable-list',
        handler: require('./pages/sortable-list-example')
      },
      {
        name: 'Form with undo stack',
        path: '/pages/undo-features',
        handler: require('./pages/undo-form-example')
      },
      {
        name: 'Instrument/Form demo',
        path: '/pages/instrument',
        handler: require('./pages/instrument')
      },
    ]
  },
  {
    name: 'Reference',
    pages: [
      {
        name: 'Components',
        path: '/pages/components-reference',
        handler: require('./pages/components-reference')
      }
    ]
  }
]
React.renderComponent(App({pages}), document.body);
