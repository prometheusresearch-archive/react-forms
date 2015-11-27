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
    assert(value.parent === null);
    assert.deepEqual(value.select('a').parent, value);
    assert.deepEqual(value.select('a.b').parent, value.select('a'));
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
    assert.deepEqual(value.select('a').schema, schema.properties.a);
    assert.deepEqual(value.select('a.b').schema, schema.properties.a.properties.b);
    assert.deepEqual(value.select(['a', 'b']).schema, schema.properties.a.properties.b);
    assert.deepEqual(value.select('c').schema, schema.properties.c);
    assert.deepEqual(value.select('c.0').schema, schema.properties.c.items);
    assert.deepEqual(value.select(['c', '0']).schema, schema.properties.c.items);
    assert.deepEqual(value.select(['c', 0]).schema, schema.properties.c.items);
    assert.deepEqual(value.select('c.1').schema, schema.properties.c.items);
    assert.deepEqual(value.select('c.2').schema, schema.properties.c.items);
    assert.deepEqual(value.select('e').schema, schema.properties.e);
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

    assert.deepEqual(value.errorList, []);
    assert.deepEqual(value.completeErrorList,  [
      {field: 'data.a', message: 'is required', schema: schema.properties.a},
      {field: 'data.e', message: 'is required', schema: schema.properties.e},
      {field : 'data.a.b', message : 'is required', schema: schema.properties.a.properties.b},
      {field : 'data.c', message : 'has less items than allowed', schema: schema.properties.c}
    ]);
   
    assert.deepEqual(value.select('a').errorList, [
      {field: 'data.a', message: 'is required', schema: schema.properties.a}
    ]);
    assert.deepEqual(value.select('a').completeErrorList, [
      {field: 'data.a', message: 'is required', schema: schema.properties.a},
      {field : 'data.a.b', message : 'is required', schema: schema.properties.a.properties.b}
    ]);
   
    assert.deepEqual(value.select('a.b').errorList, [
      {field : 'data.a.b', message : 'is required', schema: schema.properties.a.properties.b}
    ]);
    assert.deepEqual(value.select('a.b').completeErrorList, [
      {field : 'data.a.b', message : 'is required', schema: schema.properties.a.properties.b}
    ]);
   
    assert.deepEqual(value.select('c').errorList, [
      {field : 'data.c', message : 'has less items than allowed', schema: schema.properties.c}
    ]);
    assert.deepEqual(value.select('c').completeErrorList, [
      {field : 'data.c', message : 'has less items than allowed', schema: schema.properties.c}
    ]);
   
    assert.deepEqual(value.select('c.0').errorList, []);
    assert.deepEqual(value.select('c.0').completeErrorList, []);
   
    assert.deepEqual(value.select('c.1').errorList, []);
    assert.deepEqual(value.select('c.1').completeErrorList, []);
   
    assert.deepEqual(value.select('e').errorList, [
      {field: 'data.e', message: 'is required', schema: schema.properties.e}
    ]);
    assert.deepEqual(value.select('e').completeErrorList, [
      {field: 'data.e', message: 'is required', schema: schema.properties.e}
    ]);
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

    assert.deepEqual(value.errorList, []);
    assert.deepEqual(value.completeErrorList, []);

    assert.deepEqual(value.select('a').errorList, []);
    assert.deepEqual(value.select('a').completeErrorList, []);

    assert.deepEqual(value.select('a.b').errorList, []);
    assert.deepEqual(value.select('a.b').completeErrorList, []);

    assert.deepEqual(value.select('c').errorList, []);
    assert.deepEqual(value.select('c').completeErrorList, []);

    assert.deepEqual(value.select('c.0').errorList, []);
    assert.deepEqual(value.select('c.0').completeErrorList, []);

    assert.deepEqual(value.select('c.1').errorList, []);
    assert.deepEqual(value.select('c.1').completeErrorList, []);

    assert.deepEqual(value.select('e').errorList, []);
    assert.deepEqual(value.select('e').completeErrorList, []);
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

    assert.deepEqual(value.errorList, []);
    assert.deepEqual(value.completeErrorList, [
      {field: 'data.c.1', message: 'is the wrong type', schema: schema.properties.c.items}
    ]);

    assert.deepEqual(value.select('a').errorList, []);
    assert.deepEqual(value.select('a').completeErrorList, []);

    assert.deepEqual(value.select('a.b').errorList, []);
    assert.deepEqual(value.select('a.b').completeErrorList, []);

    assert.deepEqual(value.select('c').errorList, []);
    assert.deepEqual(value.select('c').completeErrorList, [
      {field: 'data.c.1', message: 'is the wrong type', schema: schema.properties.c.items}
    ]);

    assert.deepEqual(value.select('c.0').errorList, []);
    assert.deepEqual(value.select('c.0').completeErrorList, []);

    assert.deepEqual(value.select('c.1').errorList, [
      {field: 'data.c.1', message: 'is the wrong type', schema: schema.properties.c.items}
    ]);
    assert.deepEqual(value.select('c.1').completeErrorList, [
      {field: 'data.c.1', message: 'is the wrong type', schema: schema.properties.c.items}
    ]);

    assert.deepEqual(value.select('e').errorList, []);
    assert.deepEqual(value.select('e').completeErrorList, []);
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

    assert.deepEqual(value.errorList, []);
    assert.deepEqual(value.completeErrorList, [
      {field: 'data.c.1', message: 'is the wrong type', schema: schema.properties.c.items}
    ]);

    assert.deepEqual(value.select('a').errorList, []);
    assert.deepEqual(value.select('a').completeErrorList, []);

    assert.deepEqual(value.select('a.b').errorList, []);
    assert.deepEqual(value.select('a.b').completeErrorList, []);

    assert.deepEqual(value.select('c').errorList, []);
    assert.deepEqual(value.select('c').completeErrorList, [
      {field: 'data.c.1', message: 'is the wrong type', schema: schema.properties.c.items}
    ]);

    assert.deepEqual(value.select('c.0').errorList, []);
    assert.deepEqual(value.select('c.0').completeErrorList, []);

    assert.deepEqual(value.select('c.1').errorList, [
      {field: 'data.c.1', message: 'is the wrong type', schema: schema.properties.c.items}
    ]);
    assert.deepEqual(value.select('c.1').completeErrorList, [
      {field: 'data.c.1', message: 'is the wrong type', schema: schema.properties.c.items}
    ]);

    assert.deepEqual(value.select('e').errorList, []);
    assert.deepEqual(value.select('e').completeErrorList, []);
  });

  describe('update()', function() {

    let schema = object({
      a: object({
        b: string({isRequired: true})
      }, {isRequired: true}),
      c: array(string(), {minItems: 1}),
      e: string({isRequired: true})
    });

    it('allows to update root value', function() {
      let value = Value(schema, {});
      let nextValue = value.update({a: 1});
      assert.deepEqual(nextValue.value, {a: 1});
    });

    it('allows to update scalar value', function() {
      let value = Value(schema, {});
      let nextValue = value.select('e').update('UPDATED');
      assert.deepEqual(nextValue.value, {e: 'UPDATED'});
    });

    it('allows to update scalar value deep inside object', function() {
      let value = Value(schema, {});
      let nextValue = value.select('a.b').update('UPDATED');
      assert.deepEqual(nextValue.value, {a: {b: 'UPDATED'}});
    });

    it('allows to update scalar value deep inside array', function() {
      let value = Value(schema, {});
      let nextValue = value.select('c.0').update('UPDATED');
      assert.deepEqual(nextValue.value, {c: ['UPDATED']});
    });

  });

});
