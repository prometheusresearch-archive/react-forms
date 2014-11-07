'use strict';

var assert = require('assert');
var index  = require('../index');

describe('Tests for public API', function() {

  it('exposes symbols', function() {
    var NAMES = [
      'Form',
      'Field',
      'Fieldset',
      'RepeatingFieldset',
      'Element',
      'Input',
      'Message',
      'Label',
      'PropTypes',
      'schema',
      'messages'
    ];
    NAMES.forEach(name =>
      assert.ok(index[name] !== undefined, `ReactForms.${name} is undefined`));
  });
});
