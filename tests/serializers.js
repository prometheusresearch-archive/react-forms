/**
 * @jsx React.DOM
 */
'use strict';

var equal       = require('assert').equal;
var serializers = require('../lib/serializers');

describe('forms', () => {

  describe('serializers', () => {

    it('any()', () => {
      var any = serializers.any;

      equal(any(null), '');
      equal(any('string'), 'string');
      equal(any(1000), '1000');
      equal(any(true), 'true');
    });

    it('date()', () => {
      var date = serializers.date;

      equal(date(null), '');
      equal(date('string'), 'string');
      equal(date(1000), '1000');
      equal(date(new Date('1982-08-12')), '1982-08-12');
    });

  });
});
