/**
 * @copyright 2015, Prometheus Research, LLC
 */

import Value                   from '../Value';
import {object, array, string} from '../Schema';

describe('Value', function() {

  it('allows to access parent value', function() {
    let schema = object({
      a: object({
        b: string()
      })
    });
    let value = Value(schema);
    expect(value.parent).toBe(null);
    expect(value.select('a').parent).toEqual(value);
    expect(value.select('a.b').parent).toEqual(value.select('a'));
  });

  it('propagates schema when selecting subvalues', function() {
    let schema = object({
      a: object({
        b: string()
      }),
      c: array({
        d: string()
      }),
      e: string()
    });
    let value = Value(schema);
    expect(value.select('a').schema).toEqual(schema.properties.a);
    expect(value.select('a.b').schema).toEqual(schema.properties.a.properties.b);
    expect(value.select('c').schema).toEqual(schema.properties.c);
    expect(value.select('c.0').schema).toEqual(schema.properties.c.items);
    expect(value.select('c.1').schema).toEqual(schema.properties.c.items);
    expect(value.select('c.2').schema).toEqual(schema.properties.c.items);
    expect(value.select('e').schema).toEqual(schema.properties.e);
  });

  it('propagates errors when selecting subvalues (through objects)', function() {
    let schema = object({
      a: object({
        b: string({isRequired: true})
      }, {isRequired: true}),
      c: array(string(), {minItems: 1}),
      e: string({isRequired: true})
    });
    let value = Value(schema);
    expect(value.select('a').errorList).toEqual([{field: 'data.a', message: 'is required'}]);
    expect(value.select('a.b').errorList).toEqual([{field : 'data.a.b', message : 'is required'}]);
    expect(value.select('c').errorList).toEqual([{field : 'data.c', message : 'has less items than allowed'}]);
    expect(value.select('c.0').errorList).toEqual([]);
    expect(value.select('c.1').errorList).toEqual([]);
    expect(value.select('e').errorList).toEqual([{field: 'data.e', message: 'is required'}]);
  });

  it('propagates no errors if no errors are present', function() {
    let schema = object({
      a: object({
        b: string({isRequired: true})
      }, {isRequired: true}),
      c: array(string(), {minItems: 1}),
      e: string({isRequired: true})
    });
    let value = Value(schema, {a: {b: 'b'}, c: ['s'], e: 'e'});
    expect(value.select('a').errorList).toEqual([]);
    expect(value.select('a.b').errorList).toEqual([]);
    expect(value.select('c').errorList).toEqual([]);
    expect(value.select('c.0').errorList).toEqual([]);
    expect(value.select('c.1').errorList).toEqual([]);
    expect(value.select('e').errorList).toEqual([]);
  });

  it('propagates errors in array items', function() {
    let schema = object({
      a: object({
        b: string({isRequired: true})
      }, {isRequired: true}),
      c: array(string(), {minItems: 1}),
      e: string({isRequired: true})
    });
    let value = Value(schema, {a: {b: 'b'}, c: ['s', 1], e: 'e'});
    expect(value.select('a').errorList).toEqual([]);
    expect(value.select('a.b').errorList).toEqual([]);
    expect(value.select('c').errorList).toEqual([]);
    expect(value.select('c.0').errorList).toEqual([]);
    expect(value.select('c.1').errorList).toEqual([{field: 'data.c.1', message: 'is the wrong type'}]);
    expect(value.select('e').errorList).toEqual([]);
  });

  it('propagates errors in array items', function() {
    let schema = object({
      a: object({
        b: string({isRequired: true})
      }, {isRequired: true}),
      c: array(string(), {minItems: 1}),
      e: string({isRequired: true})
    });
    let value = Value(schema, {a: {b: 'b'}, c: ['s', 1], e: 'e'});
    expect(value.select('a').errorList).toEqual([]);
    expect(value.select('a.b').errorList).toEqual([]);
    expect(value.select('c').errorList).toEqual([]);
    expect(value.select('c.0').errorList).toEqual([]);
    expect(value.select('c.1').errorList).toEqual([{field: 'data.c.1', message: 'is the wrong type'}]);
    expect(value.select('e').errorList).toEqual([]);
  });

});
