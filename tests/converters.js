/**
 * @jsx React.DOM
 */
'use strict';

var assert      = require('assert');
var equal       = assert.equal;
var deepEqual   = assert.deepEqual;
var converters  = require('../lib/converters');

describe('forms', () => {

  describe('converters', () => {

    it('toNumber()', () => {
      var toNumber = converters.toNumber;
      equal(toNumber(1), 1);
      equal(toNumber('1'), 1);
    });

    it('toDate()', () => {
      var toDate = converters.toDate;

      deepEqual(toDate('1982-08-12'), new Date('1982-08-12'));
      deepEqual(toDate(new Date('1982-08-12')),
                       new Date('1982-08-12'));
    });

  });

});
