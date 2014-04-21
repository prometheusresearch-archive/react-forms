'use strict';

var React         = require('react');
var mergeInto     = require('react/lib/mergeInto');
var App           = require('./lib/App');
var NavigationBar = require('./lib/NavigationBar');

var g = typeof window !== 'undefined' ? window : global;

// bring common components into scope
g.React      = require('react');
g.cx         = require('react/lib/cx');
g.Link       = require('react-router-component').Link;
g.Demo       = require('./lib/Demo');
g.Section    = require('./lib/Section');
g.Column     = require('./lib/Column');
g.Code       = require('./lib/Code');
g.ShowValue  = require('./lib/ShowValue');
mergeInto(g, require('./lib/API'));

var pages = [
  {
    name: 'React Forms',
    path: '/',
    handler: require('./pages'),
  },
  {
    name: 'Documentation',
    path: '/documentation/',
    handler: require('./pages/documentation'),
    pages: [
      {
        name: 'Overview',
        path: '/documentation/',
        handler: require('./pages/documentation')
      },
      NavigationBar.divider,
      NavigationBar.header('Customizations and extensions'),
      {
        name: 'Input components',
        path: '/documentation/custom-input-components',
        handler: require('./pages/documentation/custom-input-components')
      },
      {
        name: 'Form rendering',
        path: '/documentation/custom-form-rendering',
        handler: require('./pages/documentation/custom-form-rendering')
      },
      {
        name: 'Fieldset rendering',
        path: '/documentation/custom-fieldset-rendering',
        handler: require('./pages/documentation/custom-fieldset-rendering')
      },
      {
        name: 'Repeating fieldset rendering',
        path: '/documentation/custom-repeating-fieldset-rendering',
        handler: require('./pages/documentation/custom-repeating-fieldset-rendering')
      }
    ]
  },
  {
    name: 'Examples',
    pages: [
      {
        name: 'Family editor form',
        path: '/examples/family-editor-example',
        handler: require('./pages/examples/family-editor-example')
      },
      {
        name: 'Array editor form',
        path: '/examples/array-form',
        handler: require('./pages/examples/array-form-example')
      },
      {
        name: 'Sortable list',
        path: '/examples/sortable-list',
        handler: require('./pages/examples/sortable-list-example')
      },
      {
        name: 'Form with undo stack',
        path: '/examples/undo-features',
        handler: require('./pages/examples/undo-form-example')
      },
      {
        name: 'Instrument/Form demo',
        path: '/examples/instrument',
        handler: require('./pages/examples/instrument')
      },
      NavigationBar.divider,
      NavigationBar.header('Input components'),
      {
        name: 'RadioButtonGroup',
        path: '/examples/input/radio-button-group',
        handler: require('./pages/examples/input/radio-button-group')
      },
      {
        name: 'CheckboxGroup',
        path: '/examples/input/checkbox-group',
        handler: require('./pages/examples/input/checkbox-group')
      },
    ]
  },
  {
    name: 'API Reference',
    pages: [
      {
        name: 'Components',
        path: '/api/components',
        handler: require('./pages/api/components')
      },
      {
        name: 'Mixins',
        path: '/api/mixins',
        handler: require('./pages/api/mixins')
      }
    ]
  }
]
React.renderComponent(App({pages}), document.body);
