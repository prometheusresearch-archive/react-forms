/**
 * @copyright 2016-present, Prometheus Research, LLC
 */

import {object, array, string} from '../Schema';
import {create, select, update} from '../Subscription';

describe('Subscription', function() {

  describe('create()', function() {

    it('initializes value with {} if no init value is provided', function() {
      let formValue = create(null);
      assert.deepEqual(formValue.value.get(), {});
    });

  });
  describe('select()', function() {

    let schema = object({
      scalar: string(),
      object: object({
        scalar: string(),
      }),
      array: array(string()),
    });

    it('allows to select parts of the value', function() {
      let formValue = create(schema, {
        scalar: 'scalar',
        object: {scalar: 'object.scalar'},
        array: ['array.0', 'array.1'],
      });

      assert.deepEqual(
        select(formValue, 'scalar').value.get(),
        'scalar'
      );
      assert.deepEqual(
        select(formValue, 'object').value.get(),
        {scalar: 'object.scalar'}
      );
      assert.deepEqual(
        select(formValue, 'object', 'scalar').value.get(),
        'object.scalar'
      );
      assert.deepEqual(
        select(select(formValue, 'object'), 'scalar').value.get(),
        'object.scalar'
      );
      assert.deepEqual(
        select(formValue, 'array').value.get(),
        ['array.0', 'array.1'],
      );
      assert.deepEqual(
        select(formValue, 'array', 0).value.get(),
        'array.0'
      );
      assert.deepEqual(
        select(formValue, 'array', 1).value.get(),
        'array.1'
      );
      assert.deepEqual(
        select(select(formValue, 'array'), 0).value.get(),
        'array.0'
      );
    });
  });

  describe('update()', function() {

    let schema = object({
      scalar: string(),
      object: object({
        scalar: string(),
      }),
      array: array(string()),
    });

    it('updates value', function() {
      let formValue = create(schema, {
        scalar: 'scalar',
        object: {scalar: 'object.scalar'},
        array: ['array.0', 'array.1'],
      });


      let scalar = select(formValue, 'scalar');
      let object = select(formValue, 'object');
      let objectScalar = select(formValue, 'object', 'scalar');
      let array = select(formValue, 'array');
      let arrayFirst = select(formValue, 'array', 0);

      let effects;

      formValue.value.react(value => {
        effects.push({value, tag: 'root'});
      }, {skipFirst: true});

      scalar.value.react(value => {
        effects.push({value, tag: 'scalar'});
      }, {skipFirst: true});

      object.value.react(value => {
        effects.push({value, tag: 'object'});
      }, {skipFirst: true});

      objectScalar.value.react(value => {
        effects.push({value, tag: 'objectScalar'});
      }, {skipFirst: true});

      array.value.react(value => {
        effects.push({value, tag: 'array'});
      }, {skipFirst: true});

      arrayFirst.value.react(value => {
        effects.push({value, tag: 'arrayFirst'});
      }, {skipFirst: true});

      effects = [];
      update(scalar, 'UPDATED');

      assert.deepEqual(effects.length, 2);
      assert.deepEqual(effects.map(e => e.tag), ['root', 'scalar']);
      assert.deepEqual(effects.map(e => e.value), [
        {
          scalar: 'UPDATED',
          object: {scalar: 'object.scalar'},
          array: ['array.0', 'array.1']
        },
        'UPDATED'
      ]);

      effects = [];
      update(objectScalar, 'UPDATED');

      assert.deepEqual(effects.length, 3);
      assert.deepEqual(effects.map(e => e.tag), ['root', 'object', 'objectScalar']);
      assert.deepEqual(effects.map(e => e.value), [
        {
          scalar: 'UPDATED',
          object: {scalar: 'UPDATED'},
          array: ['array.0', 'array.1']
        },
        {scalar: 'UPDATED'},
        'UPDATED'
      ]);

      effects = [];
      update(arrayFirst, 'UPDATED');

      assert.deepEqual(effects.length, 3);
      assert.deepEqual(effects.map(e => e.tag), ['root', 'array', 'arrayFirst']);
      assert.deepEqual(effects.map(e => e.value), [
        {
          scalar: 'UPDATED',
          object: {scalar: 'UPDATED'},
          array: ['UPDATED', 'array.1']
        },
        ['UPDATED', 'array.1'],
        'UPDATED'
      ]);

    });

  });

});

