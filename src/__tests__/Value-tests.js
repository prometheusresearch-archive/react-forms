/**
 * @copyright 2015, Prometheus Research, LLC
 */
'use strict';

var Value                   = require('../Value');
var {object, array, string} = require('../Schema');

describe('Value', function() {

  describe('selecting subvalues', function() {

    it('propagates complex schemas', function() {
      var schema = object({
        a: object({
          b: string()
        }),
        c: array({
          d: string()
        }),
        e: string()
      });
      var value = Value(schema);
      expect(value.select('a').schema).toEqual(schema.properties.a);
      expect(value.select('a.b').schema).toEqual(schema.properties.a.properties.b);
      expect(value.select('c').schema).toEqual(schema.properties.c);
      expect(value.select('c.0').schema).toEqual(schema.properties.c.items);
      expect(value.select('c.1').schema).toEqual(schema.properties.c.items);
      expect(value.select('c.2').schema).toEqual(schema.properties.c.items);
      expect(value.select('e').schema).toEqual(schema.properties.e);
    });

    describe('error propagation', function() {

      var schema = object({
        a: object({
          b: string({isRequired: true})
        }, {isRequired: true}),
        c: array(string(), {minItems: 1}),
        e: string({isRequired: true})
      });

      it('propagates errors through objects', function() {
        var value = Value(schema);
        expect(value.select('a').errors).toEqual([{field: 'data.a', message: 'is required'}]);
        expect(value.select('a.b').errors).toEqual([{field : 'data.a.b', message : 'is required'}]);
        expect(value.select('c').errors).toEqual([{field : 'data.c', message : 'has less items than allowed'}]);
        expect(value.select('c.0').errors).toEqual([]);
        expect(value.select('c.1').errors).toEqual([]);
        expect(value.select('e').errors).toEqual([{field: 'data.e', message: 'is required'}]);
      });

      it('propagates no errors if no errors are present', function() {
        var value = Value(schema, {a: {b: 'b'}, c: ['s'], e: 'e'});
        expect(value.select('a').errors).toEqual([]);
        expect(value.select('a.b').errors).toEqual([]);
        expect(value.select('c').errors).toEqual([]);
        expect(value.select('c.0').errors).toEqual([]);
        expect(value.select('c.1').errors).toEqual([]);
        expect(value.select('e').errors).toEqual([]);
      });

      it('propagates errors in array items', function() {
        var value = Value(schema, {a: {b: 'b'}, c: ['s', 1], e: 'e'});
        expect(value.select('a').errors).toEqual([]);
        expect(value.select('a.b').errors).toEqual([]);
        expect(value.select('c').errors).toEqual([]);
        expect(value.select('c.0').errors).toEqual([]);
        expect(value.select('c.1').errors).toEqual([{field: 'data.c.1', message: 'is the wrong type'}]);
        expect(value.select('e').errors).toEqual([]);
      });

      it('propagates errors in array items', function() {
        var value = Value(schema, {a: {b: 'b'}, c: ['s', 1], e: 'e'});
        expect(value.select('a').errors).toEqual([]);
        expect(value.select('a.b').errors).toEqual([]);
        expect(value.select('c').errors).toEqual([]);
        expect(value.select('c.0').errors).toEqual([]);
        expect(value.select('c.1').errors).toEqual([{field: 'data.c.1', message: 'is the wrong type'}]);
        expect(value.select('e').errors).toEqual([]);
      });

    });

  });

});
