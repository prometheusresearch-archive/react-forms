'use strict';

var React         = require('react');
var mergeInto     = require('react/lib/mergeInto');
var App           = require('./lib/App');
var NavigationBar = require('./lib/NavigationBar');

var g = typeof window !== 'undefined' ? window : GLOBAL;

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
    path: '/react-forms/',
    handler: require('./pages'),
  },
  {
    name: 'Documentation',
    path: '/react-forms/documentation/',
    handler: require('./pages/documentation'),
    pages: [
      {
        name: 'Overview',
        path: '/react-forms/documentation/',
        handler: require('./pages/documentation')
      },
      {
        name: 'Form Schema',
        path: '/react-forms/documentation/schema/',
        handler: require('./pages/documentation/schema')
      },
      NavigationBar.divider,
      NavigationBar.header('Customizations and extensions'),
      {
        name: 'Input components',
        path: '/react-forms/documentation/custom-input-components/',
        handler: require('./pages/documentation/custom-input-components')
      },
      {
        name: 'Form rendering',
        path: '/react-forms/documentation/custom-form-rendering/',
        handler: require('./pages/documentation/custom-form-rendering')
      },
      {
        name: 'Fieldset rendering',
        path: '/react-forms/documentation/custom-fieldset-rendering/',
        handler: require('./pages/documentation/custom-fieldset-rendering')
      },
      {
        name: 'Repeating fieldset rendering',
        path: '/react-forms/documentation/custom-repeating-fieldset-rendering/',
        handler: require('./pages/documentation/custom-repeating-fieldset-rendering')
      }
    ]
  },
  {
    name: 'Examples',
    pages: [
      {
        name: 'Family editor form',
        path: '/react-forms/examples/family-editor-example/',
        handler: require('./pages/examples/family-editor-example')
      },
      {
        name: 'Array editor form',
        path: '/react-forms/examples/array-form/',
        handler: require('./pages/examples/array-form-example')
      },
      {
        name: 'Sortable list',
        path: '/react-forms/examples/sortable-list/',
        handler: require('./pages/examples/sortable-list-example')
      },
      {
        name: 'Form with undo stack',
        path: '/react-forms/examples/undo-features/',
        handler: require('./pages/examples/undo-form-example')
      },
      {
        name: 'Instrument/Form demo',
        path: '/react-forms/examples/instrument/',
        handler: require('./pages/examples/instrument')
      },
      NavigationBar.divider,
      NavigationBar.header('Input components'),
      {
        name: 'RadioButtonGroup',
        path: '/react-forms/examples/input/radio-button-group/',
        handler: require('./pages/examples/input/radio-button-group')
      },
      {
        name: 'CheckboxGroup',
        path: '/react-forms/examples/input/checkbox-group/',
        handler: require('./pages/examples/input/checkbox-group')
      },
    ]
  },
  {
    name: 'API Reference',
    pages: [
      {
        name: 'Components',
        path: '/react-forms/api/components/',
        handler: require('./pages/api/components')
      },
      {
        name: 'Mixins',
        path: '/react-forms/api/mixins/',
        handler: require('./pages/api/mixins')
      }
    ]
  }
]

function renderMarkup(path) {
  var markup = React.renderComponentToString(App({pages, path}));
  return markup;
}

function printPages(pages) {
  pages.forEach((p) => {
    if (p.pages) {
      printPages(p.pages);
    } else if (p.path) {
      console.log(p.path);
    }
  });
}

if (typeof window !== 'undefined') {
  React.renderComponent(App({pages}), document.body);
} else {
  var p = GLOBAL.process; // not to confuse browserify
  if (p.argv[2] === '--pages') {
    printPages(pages);
  } else {
    console.log(renderMarkup(p.argv[2] || '/'));
  }
}

module.exports = {pages};
