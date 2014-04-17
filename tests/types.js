/**
 * @jsx React.DOM
 */
'use strict';

var assert = require('assert');
var types  = require('../lib/types');

describe('forms', () => {

  describe('types', () => {

    var json = JSON.stringify;

    function serializes(type, cases) {
      cases.forEach((c, idx) => {
        var arg = c[0];
        var expectation = c[1];
        it(`serializes ${json(arg)} into ${json(expectation)}`, () => {
          assert.strictEqual(type.serialize(c[0]), c[1]);
        });
      });
    }

    function deserializes(type, cases) {
      cases.forEach((c, idx) => {
        var arg = c[0];
        var expectation = c[1];
        if (expectation instanceof Error) {
          it(`throws on deserializing from ${json(arg)}`, () => {
            assert.throws(() => type.deserialize(arg), expectation.message);
          });
        } else if (typeof expectation === 'function') {
          it(`deserializes from ${json(arg)} correctly`, () => {
            assert.ok(expectation(type.deserialize(arg)));
          });
        } else {
          it(`deserializes from ${json(arg)} into ${expectation}`, () => {
            assert.strictEqual(type.deserialize(arg), expectation);
          });
        }
      });
    }

    describe('string', () => {
      serializes(types.string, [
        [null, ''],
        ['', ''],
        ['string', 'string']
      ]);
      deserializes(types.string, [
        ['', null],
        ['string', 'string']
      ]);
    });

    describe('number', () => {
      serializes(types.number, [
        [null, ''],
        [0, '0'],
        [42, '42'],
        [-42, '-42']
      ]);
      deserializes(types.number, [
        ['', null],
        ['0', 0],
        ['10.1', 10.1],
        ['x', new Error()],
        ['10x', new Error()]
      ]);
    });

    describe('date', () => {
      serializes(types.date, [
        [null, ''],
        [new Date('2012-12-12'), '2012-12-12']
      ]);
      deserializes(types.date, [
        ['', null],
        ['2012-12-12', (v) => v instanceof Date && types.date.serialize(v) === '2012-12-12'],
        ['2012-12-12x', new Error()],
        ['x2012-12-12', new Error()],
        ['string', new Error()],
        ['2012-13-01', new Error()]
      ]);
    });

  });
});
