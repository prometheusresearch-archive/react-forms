'use strict';

var React         = require('react');
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

var pages = [
  {
    name: 'Documentation',
    path: '/',
    handler: require('./pages'),
    pages: [
      {
        name: 'Overview',
        path: '/pages/documentation/',
        handler: require('./pages/documentation')
      },
      NavigationBar.divider,
      NavigationBar.header('Customizations and extensions'),
      {
        name: 'Input components',
        path: '/pages/documentation/custom-input-components',
        handler: require('./pages/documentation/custom-input-components')
      },
      {
        name: 'Form rendering',
        path: '/pages/documentation/custom-form-rendering',
        handler: require('./pages/documentation/custom-form-rendering')
      },
      {
        name: 'Fieldset rendering',
        path: '/pages/documentation/custom-fieldset-rendering',
        handler: require('./pages/documentation/custom-fieldset-rendering')
      },
      {
        name: 'Repeating fieldset rendering',
        path: '/pages/documentation/custom-repeating-fieldset-rendering',
        handler: require('./pages/documentation/custom-repeating-fieldset-rendering')
      }
    ]
  },
  {
    name: 'Examples',
    pages: [
      {
        name: 'Family editor form',
        path: '/pages/examples/family-editor-example',
        handler: require('./pages/examples/family-editor-example')
      },
      {
        name: 'Array editor form',
        path: '/pages/examples/array-form',
        handler: require('./pages/examples/array-form-example')
      },
      {
        name: 'Sortable list',
        path: '/pages/examples/sortable-list',
        handler: require('./pages/examples/sortable-list-example')
      },
      {
        name: 'Form with undo stack',
        path: '/pages/examples/undo-features',
        handler: require('./pages/examples/undo-form-example')
      },
      {
        name: 'Instrument/Form demo',
        path: '/pages/examples/instrument',
        handler: require('./pages/examples/instrument')
      },
      NavigationBar.divider,
      NavigationBar.header('Input components'),
      {
        name: 'RadioButtonGroup',
        path: '/pages/examples/input/radio-button-group',
        handler: require('./pages/examples/input/radio-button-group')
      },
      {
        name: 'CheckboxGroup',
        path: '/pages/examples/input/checkbox-group',
        handler: require('./pages/examples/input/checkbox-group')
      },
    ]
  },
  {
    name: 'API Reference',
    pages: [
      {
        name: 'Components',
        path: '/pages/components-reference',
        handler: require('./pages/components-reference')
      }
    ]
  }
]
React.renderComponent(App({pages, title: 'React Forms'}), document.body);
