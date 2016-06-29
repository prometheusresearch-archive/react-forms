/**
 * @copyright 2016-present, Prometheus Research, LLC
 */

import {object, array, string, number} from '../../Schema';
import {create, select, update} from '../Value';

describe('react-forms/reactive', function() {

  describe('Value', function() {
    describe('create()', function() {

      it('initializes value with {} if no init value is provided', function() {
        let formValue = create();
        assert.deepEqual(formValue.value, {});
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
        let formValue = create({
          schema,
          value: {
            scalar: 'scalar',
            object: {scalar: 'object.scalar'},
            array: ['array.0', 'array.1'],
          }
        });

        assert.deepEqual(
          select(formValue, 'scalar').value,
          'scalar'
        );
        assert.deepEqual(
          select(formValue, 'object').value,
          {scalar: 'object.scalar'}
        );
        assert.deepEqual(
          select(formValue, 'object', 'scalar').value,
          'object.scalar'
        );
        assert.deepEqual(
          select(select(formValue, 'object'), 'scalar').value,
          'object.scalar'
        );
        assert.deepEqual(
          select(formValue, 'array').value,
          ['array.0', 'array.1'],
        );
        assert.deepEqual(
          select(formValue, 'array', 0).value,
          'array.0'
        );
        assert.deepEqual(
          select(formValue, 'array', 1).value,
          'array.1'
        );
        assert.deepEqual(
          select(select(formValue, 'array'), 0).value,
          'array.0'
        );
      });

      it('propagates error list', function() {
        let schema = object({
          object: object({
            number: number()
          }),
        });

        let value = create({schema, value: {object: {number: 'oops'}}});

        assert(value.completeErrorList.length === 1);
        assert(value.completeErrorList[0].field === 'data.object.number');
        assert(value.completeErrorList[0].message === 'is the wrong type');

        assert(value.errorList.length === 0);

        let valueObject = value.select('object');

        assert(valueObject.completeErrorList.length === 1);
        assert(valueObject.completeErrorList[0].field === 'data.object.number');
        assert(valueObject.completeErrorList[0].message === 'is the wrong type');

        assert(valueObject.errorList.length === 0);

        let valueObjectNumber = valueObject.select('number');

        assert(valueObjectNumber.completeErrorList.length === 1);
        assert(valueObjectNumber.completeErrorList[0].field === 'data.object.number');
        assert(valueObjectNumber.completeErrorList[0].message === 'is the wrong type');

        assert(valueObjectNumber.errorList.length === 1);
        assert(valueObjectNumber.errorList[0].field === 'data.object.number');
        assert(valueObjectNumber.errorList[0].message === 'is the wrong type');

      });


      it('propagates external error list', function() {
        let schema = object({
          object: object({
            number: number()
          }),
        });

        let value = create({
          schema,
          value: {object: {number: 42}},
          externalErrorList: [
            {field: 'data.object.number', message: 'not ok'}
          ]
        });

        assert(value.completeErrorList.length === 1);
        assert(value.completeErrorList[0].field === 'data.object.number');
        assert(value.completeErrorList[0].message === 'not ok');

        assert(value.errorList.length === 0);

        let valueObject = value.select('object');

        assert(valueObject.completeErrorList.length === 1);
        assert(valueObject.completeErrorList[0].field === 'data.object.number');
        assert(valueObject.completeErrorList[0].message === 'not ok');

        assert(valueObject.errorList.length === 0);

        let valueObjectNumber = valueObject.select('number');

        assert(valueObjectNumber.completeErrorList.length === 1);
        assert(valueObjectNumber.completeErrorList[0].field === 'data.object.number');
        assert(valueObjectNumber.completeErrorList[0].message === 'not ok');

        assert(valueObjectNumber.errorList.length === 1);
        assert(valueObjectNumber.errorList[0].field === 'data.object.number');
        assert(valueObjectNumber.errorList[0].message === 'not ok');

      });

      it('reacts on error lists changes', function() {
        let schema = object({
          object: object({
            number: number(),
            string: string(),
          }),
        });

        let value = create({
          schema,
          value: {
            object: {
              number: 'oops',
              string: 'ok',
            }
          }
        });
        let valueObject = value.select('object');
        let valueObjectNumber = valueObject.select('number');
        let valueObjectString = valueObject.select('string');

        let effects = [];

        value._completeErrorList.react(completeErrorList => {
          effects.push({keyPath: value.keyPath, completeErrorList});
        }, {skipFirst: true});
        value._errorList.react(errorList => {
          effects.push({keyPath: value.keyPath, errorList});
        }, {skipFirst: true});

        valueObject._completeErrorList.react(completeErrorList => {
          effects.push({keyPath: valueObject.keyPath, completeErrorList});
        }, {skipFirst: true});
        valueObject._errorList.react(errorList => {
          effects.push({keyPath: valueObject.keyPath, errorList});
        }, {skipFirst: true});

        valueObjectNumber._completeErrorList.react(completeErrorList => {
          effects.push({keyPath: valueObjectNumber.keyPath, completeErrorList});
        }, {skipFirst: true});
        valueObjectNumber._errorList.react(errorList => {
          effects.push({keyPath: valueObjectNumber.keyPath, errorList});
        }, {skipFirst: true});

        valueObjectString._completeErrorList.react(completeErrorList => {
          effects.push({keyPath: valueObjectString.keyPath, completeErrorList});
        }, {skipFirst: true});
        valueObjectString._errorList.react(errorList => {
          effects.push({keyPath: valueObjectString.keyPath, errorList});
        }, {skipFirst: true});

        assert(effects.length === 0);

        assert(valueObjectNumber.completeErrorList.length === 1);
        assert(valueObjectString.completeErrorList.length === 0);

        value.update({object: {number: 42}});

        assert(effects.length === 4);

        assert(valueObjectNumber.completeErrorList.length === 0);
        assert(valueObjectString.completeErrorList.length === 0);

        assert.deepEqual(effects[0].keyPath, []);
        assert.deepEqual(effects[0].completeErrorList, []);
        assert.deepEqual(effects[0].errorList, undefined);

        assert.deepEqual(effects[1].keyPath, ['object']);
        assert.deepEqual(effects[1].completeErrorList, []);
        assert.deepEqual(effects[1].errorList, undefined);

        assert.deepEqual(effects[2].keyPath, ['object', 'number']);
        assert.deepEqual(effects[2].completeErrorList, []);
        assert.deepEqual(effects[2].errorList, undefined);

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
        let formValue = create({
          schema,
          value: {
            scalar: 'scalar',
            object: {scalar: 'object.scalar'},
            array: ['array.0', 'array.1'],
          }
        });

        let scalar = select(formValue, 'scalar');
        let object = select(formValue, 'object');
        let objectScalar = select(formValue, 'object', 'scalar');
        let array = select(formValue, 'array');
        let arrayFirst = select(formValue, 'array', 0);

        let effects;

        formValue._value.react(value => {
          effects.push({value, tag: 'root'});
        }, {skipFirst: true});

        scalar._value.react(value => {
          effects.push({value, tag: 'scalar'});
        }, {skipFirst: true});

        object._value.react(value => {
          effects.push({value, tag: 'object'});
        }, {skipFirst: true});

        objectScalar._value.react(value => {
          effects.push({value, tag: 'objectScalar'});
        }, {skipFirst: true});

        array._value.react(value => {
          effects.push({value, tag: 'array'});
        }, {skipFirst: true});

        arrayFirst._value.react(value => {
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

});

