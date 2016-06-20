/**
 * @copyright 2016, Prometheus Research, LLC
 */

import {createValue, isValue, suppressUpdate} from '../Value';
import {object, array, string} from '../Schema';

describe('Value', function() {

  describe('isValue(maybeValue)', function() {

    it('returns true if value is passed and false otherwise', function() {
      assert(isValue(createValue()));
      assert(!isValue({}));
    });

  });

  describe('createValue(spec)', function() {

    it('works without schema', function() {
      let value = createValue();
      assert.deepEqual(value.select('a').parent, value);
      assert.deepEqual(value.select('a.b').parent, value.select('a'));
    });

  });

  describe('.parent', function() {

    it('allows to access parent value', function() {
      let schema = object({
        a: object({
          b: string()
        })
      });
      let value = createValue({schema});
      assert(value.parent === null);
      assert.deepEqual(value.select('a').parent, value);
      assert.deepEqual(value.select('a.b').parent, value.select('a'));
    });

  });

  describe('.select()', function() {

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
      let value = createValue({schema});
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
      let value = createValue({schema});

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

    it('propagates value', function() {
      let v = {a: {b: 'b'}, c: ['s'], e: 'e'};
      let value = createValue({value: v});

      assert.deepEqual(value.value, v);
      assert.deepEqual(value.select('a').value, v.a);
      assert.deepEqual(value.select('a.b').value, v.a.b);
      assert.deepEqual(value.select('c').value, v.c);
      assert.deepEqual(value.select('c.0').value, v.c[0]);
      assert.deepEqual(value.select('c.1').value, v.c[1]);
      assert.deepEqual(value.select('e').value, v.e);
    });

    it('propagates params', function() {
      let params = {a: 1};
      let value = createValue({params});

      assert.deepEqual(value.params, params);
      assert.deepEqual(value.select('a').params, params);
      assert.deepEqual(value.select('a.b').params, params);
    });

    it('propagates no errors if no errors are present', function() {
      let schema = object({
        a: object({
          b: string({isRequired: true})
        }, {isRequired: true}),
        c: array(string(), {minItems: 1}),
        e: string({isRequired: true})
      });
      let value = createValue({schema, value: {a: {b: 'b'}, c: ['s'], e: 'e'}});

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
      let value = createValue({schema, value: {a: {b: 'b'}, c: ['s', 1], e: 'e'}});

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
      let value = createValue({schema, value: {a: {b: 'b'}, c: ['s', 1], e: 'e'}});

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

  });

  describe('.update()', function() {

    it('works without schema', function() {
      let value = createValue();
      let nextValue = value.select('a.0.b').update(42).root;
      assert.deepEqual(nextValue.value, {a: [{b: 42}]});
    });

    let schema = object({
      a: object({
        b: string({isRequired: true})
      }, {isRequired: true}),
      c: array(string(), {minItems: 1}),
      e: string({isRequired: true})
    });

    it('allows to update root value', function() {
      let value = createValue({schema, value: {}});
      let nextValue = value.update({a: 1}).root;
      assert.deepEqual(nextValue.value, {a: 1});
    });

    it('allows to update scalar value', function() {
      let value = createValue({schema, value: {}});
      let nextValue = value.select('e').update('UPDATED').root;
      assert.deepEqual(nextValue.value, {e: 'UPDATED'});
    });

    it('allows to update scalar value deep inside object', function() {
      let value = createValue({schema, value: {}});
      let nextValue = value.select('a.b').update('UPDATED').root;
      assert.deepEqual(nextValue.value, {a: {b: 'UPDATED'}});
    });

    it('allows to update scalar value deep inside array', function() {
      let value = createValue({schema, value: {}});
      let nextValue = value.select('c.0').update('UPDATED').root;
      assert(Array.isArray(nextValue.value.c));
      assert.deepEqual(nextValue.value, {c: ['UPDATED']});
    });

  });

  describe('.setSchema()', function() {

    it('updates schema at the root', function() {
      let schema1 = {type: 'object', properties: {a: {type: 'number'}}};
      let schema2 = {type: 'object', properties: {a: {type: 'string'}}};

      let value = createValue({schema: schema1, value: {a: 'string!'}});
      assert.deepEqual(value.schema, schema1);
      assert.deepEqual(value.value, {a: 'string!'});
      assert(value.completeErrorList.length === 1);

      value = value.setSchema(schema2);
      assert.deepEqual(value.schema, schema2);
      assert.deepEqual(value.value, {a: 'string!'});
      assert(value.completeErrorList.length === 0);
    });

  });

  describe('.addError()', function() {

    it('adds a new error at root', function() {
      let onChange = sinon.spy();
      let value = createValue({onChange});
      assert(value.completeErrorList.length === 0);
      value = value.addError({message: 'message'});
      assert(value.completeErrorList.length === 1);
      assert(value.errorList.length === 1);
      let error = value.errorList[0];
      assert(error.message === 'message');
      assert(onChange.calledOnce);
    });

    it('adds a new error at branch', function() {
      let onChange = sinon.spy();
      let value = createValue({onChange}).select('a.b');
      assert(value.completeErrorList.length === 0);
      value = value.addError({message: 'message'});
      assert.deepEqual(value.keyPath, ['a', 'b']);
      assert(value.completeErrorList.length === 1);
      assert(value.errorList.length === 1);
      assert(value.root.completeErrorList.length === 1);
      assert(value.root.errorList.length === 0);
      let error = value.errorList[0];
      assert(error.message === 'message');
      assert(onChange.calledOnce);
    });

    it('adds a new error (quiet)', function() {
      let onChange = sinon.spy();
      let value = createValue({onChange});
      value = value.addError({message: 'message'}, true);
      assert(value.completeErrorList.length === 1);
      assert(value.errorList.length === 1);
      assert(onChange.callCount === 0);
    });

  });

  describe('.removeError()', function() {

    it('removes an error from root', function() {
      let onChange = sinon.spy();
      let value = createValue({onChange});
      assert(value.completeErrorList.length === 0);
      value = value.addError({message: 'message'});
      assert(value.completeErrorList.length === 1);
      assert(value.errorList.length === 1);
      let error = value.errorList[0];
      value = value.removeError(error);
      assert(value.completeErrorList.length === 0);
      assert(value.errorList.length === 0);
      assert(onChange.calledTwice);
    });

    it('returns self if no error is found to remove', function() {
      let onChange = sinon.spy();
      let value = createValue({onChange});
      assert(value === value.removeError({}));
      assert(onChange.callCount === 0);
    });

    it('removes an error from branch', function() {
      let onChange = sinon.spy();
      let value = createValue({onChange}).select('a.b');
      assert(value.completeErrorList.length === 0);
      value = value.addError({message: 'message'});
      assert.deepEqual(value.keyPath, ['a', 'b']);
      assert(value.completeErrorList.length === 1);
      assert(value.errorList.length === 1);
      assert(value.root.completeErrorList.length === 1);
      assert(value.root.errorList.length === 0);
      let error = value.errorList[0];
      value = value.removeError(error);
      assert.deepEqual(value.keyPath, ['a', 'b']);
      assert(onChange.calledTwice);
      assert(value.completeErrorList.length === 0);
      assert(value.errorList.length === 0);
      assert(value.root.completeErrorList.length === 0);
      assert(value.root.errorList.length === 0);
    });

    it('removes an error (quiet)', function() {
      let onChange = sinon.spy();
      let value = createValue({onChange});
      value = value.addError({message: 'message'}, true);
      let error = value.errorList[0];
      value = value.removeError(error, true);
      assert(onChange.callCount === 0);
    });

  });

  describe('.updateError()', function() {

    it('updates a list of errors', function() {
      let onChange = sinon.spy();
      let value = createValue({onChange});
      assert(value.completeErrorList.length === 0);
      value = value.updateError({message: 'message'});
      assert(value.completeErrorList.length === 1);
      assert(value.errorList.length === 1);
      let error = value.errorList[0];
      assert(error.message === 'message');
      assert(onChange.calledOnce);

      value = value.updateError({message: 'message'});
      assert(value.completeErrorList.length === 1);
    });

    it('updates a lisr of errors at branch', function() {
      let onChange = sinon.spy();
      let value = createValue({onChange}).select('a.b');
      assert(value.completeErrorList.length === 0);
      value = value.updateError({message: 'message'});
      assert.deepEqual(value.keyPath, ['a', 'b']);
      assert(value.completeErrorList.length === 1);
      assert(value.errorList.length === 1);
      assert(value.root.completeErrorList.length === 1);
      assert(value.root.errorList.length === 0);
      let error = value.errorList[0];
      assert(error.message === 'message');
      assert(onChange.calledOnce);
    });

    it('updates a list of errors (quiet)', function() {
      let onChange = sinon.spy();
      let value = createValue({onChange});
      value = value.updateError({message: 'message'}, true);
      assert(value.completeErrorList.length === 1);
      assert(value.errorList.length === 1);
      assert(onChange.callCount === 0);
    });

  });

  describe('.updateParams()', function() {

    it('updates params', function() {
      let onChange = sinon.spy();
      let value = createValue({onChange}).select('a.b');
      assert.deepEqual(value.params, {});
      value = value.updateParams({a: 1});
      assert.deepEqual(value.keyPath, ['a', 'b']);
      assert.deepEqual(value.params, {a: 1});
      assert(onChange.calledOnce);
      value = value.updateParams({b: 2});
      assert.deepEqual(value.params, {a: 1, b: 2});
    });

    it('updates params (quiet)', function() {
      let onChange = sinon.spy();
      let value = createValue({onChange}).select('a.b');
      value = value.updateParams({a: 1}, true);
      assert(onChange.callCount === 0);
    });

  });

  describe('suppressing updates', function() {

    it('suppresses updates during updating value', function() {
      let onChange = sinon.spy();
      let value = createValue({onChange});
      let nextValue = suppressUpdate(() =>
        value.select('a.0.b').update(42).root)
      assert.deepEqual(nextValue.value, {a: [{b: 42}]});
      assert(onChange.callCount === 0);
    });
  });

});
