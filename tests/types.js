/**
 * @jsx React.DOM
 */
'use strict';

var assert = require('assert');
var types  = require('../lib/types');

describe('forms', () => {

  describe.only('types', () => {

    var json = JSON.stringify;

    function serializes(type, cases) {
      cases.forEach((c, idx) => {
        it(`serializes ${c[0]} into ${json(c[1])}`, () => {
          assert.strictEqual(type.serialize(c[0]), c[1]);
        });
      });
    }

    function deserializes(type, cases) {
      cases.forEach((c, idx) => {
        if (c[1] instanceof Error) {
          it(`throws on deserializing from ${json(c[0])}`, () => {
            assert.throws(() => type.deserialize(c[0]), c[1].message);
          });
        } else if (typeof c[1] === 'function') {
          it(`deserializes from ${json(c[0])} correctly`, () => {
            assert.ok(c[1](type.deserialize(c[0])));
          });
        } else {
          it(`deserializes from ${json(c[0])} into ${c[1]}`, () => {
            assert.strictEqual(type.deserialize(c[0]), c[1]);
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
