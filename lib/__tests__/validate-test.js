/**
 * @jsx React.DOM
 */
'use strict';

var assert                  = require('assert');
var {OrderedMap}            = require('immutable');
var {Mapping, Scalar, List} = require('../schema');
var validate                = require('../validate');
var ValidationResult        = require('../ValidationResult');

describe('React Forms', () => {

  describe('validate', () => {

    function assertValidates({validation, value}, expectedValue) {
      assert.strictEqual(validation.error, null);
      assert.ok(validation.isSuccess, 'isSuccess should be true');
      assert.ok(!validation.isFailure, 'isFailure should be false');
      if (typeof expectedValue === 'object') {
        assert.deepEqual(value, expectedValue);
      } else {
        assert.strictEqual(value, expectedValue);
      }
      assert.ok(validation.equals(ValidationResult.success));
    }

    function assertFails({validation, value}, expectedValue, expectedValidation) {
      assert.ok(validation.isFailure, 'isFailure should be true');
      assert.ok(!validation.isSuccess, 'isSuccess should be false');
      if (typeof expectedValue === 'object') {
        assert.deepEqual(value, expectedValue);
      } else {
        assert.strictEqual(value, expectedValue);
      }
      if (expectedValidation !== undefined) {
        assert.ok(
          validation.equals(expectedValidation),
          `${validation} does not equals to ${expectedValidation}`
        );
      }
    }

    describe('scalar validation', () => {

      it('deserializes and validates via built-in type', () => {
        var schema = Scalar({type: 'number'});
        assertValidates(validate(schema, '1'), 1);
        assertValidates(validate(schema, '12.1'), 12.1);
        assertFails(validate(schema, 'string'), 'string', ValidationResult.failure('invalid value'));
        assertValidates(validate(schema, ''), null);
      });

      it('deserializes and validates via built-in type + required', () => {
        var schema = Scalar({type: 'number', required: true});
        assertValidates(validate(schema, '1'), 1);
        assertValidates(validate(schema, '12.1'), 12.1);
        assertFails(validate(schema, 'string'), 'string', ValidationResult.failure('invalid value'));
        assertFails(validate(schema, ''), null, ValidationResult.failure('value is required'));
      });

      it('deserializes and validates via built-in type + validator', () => {
        var positive = (v) => {
          if (v <= 0) {
            return new Error('should be positive');
          }
        };
        var schema = Scalar({validate: positive, type: 'number'});
        assertValidates(validate(schema, '1'), 1);
        assertValidates(validate(schema, '12.1'), 12.1);
        assertFails(validate(schema, 'string'), 'string', ValidationResult.failure('invalid value'));
        assertFails(validate(schema, '-10'), -10, ValidationResult.failure('should be positive'));
        assertValidates(validate(schema, ''), null);
      });

      it('deserializes and validates via built-in type + required + validator', () => {
        var positive = (v) => {
          if (v <= 0) {
            return new Error('should be positive');
          }
        };
        var schema = Scalar({required: true, validate: positive, type: 'number'});
        assertValidates(validate(schema, '1'), 1);
        assertValidates(validate(schema, '12.1'), 12.1);
        assertFails(validate(schema, 'string'), 'string', ValidationResult.failure('invalid value'));
        assertFails(validate(schema, '-10'), -10, ValidationResult.failure('should be positive'));
        assertFails(validate(schema, ''), null, ValidationResult.failure('value is required'));
      });

      it('deserializes and validates via custom type', () => {
        var type = {deserialize: (v) => {return {v};}};
        var schema = Scalar({type: type});
        assertValidates(validate(schema, '1'), {v: '1'});
      });

    });

    describe('object validation', () => {
      var positiveCount = (v) => {
        if (v.count <= 0) {
          return new Error('count should be positive');
        }
      };
      var schema = Mapping({validate: positiveCount}, {
        count: Scalar({type: "number"})
      });

      it('deserializes and validates', () => {
        var {validation, value} = validate(schema, {count: 1});

        assert.deepEqual(value, {count: 1});
        assert.ok(validation.isSuccess);
        assert.ok(!validation.isFailure);
        assert.ok(validation.equals(ValidationResult.success));
      });

      it('deserializes and validates with children', () => {
        var {validation, value} = validate(schema, {count: 1}, {count: ValidationResult.success});

        assert.deepEqual(value, {count: 1});
        assert.ok(validation.isSuccess);
        assert.ok(!validation.isFailure);
        assert.ok(validation.equals(ValidationResult.success));
      });

      it('fails if is not valid', () => {
        var {validation, value} = validate(schema, {count: -1});

        assert.deepEqual(value, {count: -1});
        assert.ok(validation.isFailure);
        assert.ok(!validation.isSuccess);
        assert.ok(validation.equals(ValidationResult.failure('count should be positive')));
      });

      it('fails if children are not valid', () => {
        var {value, validation} = validate(
          schema,
          {count: 1},
          {count: ValidationResult.failure('error')}
        );

        assert.ok(validation.isFailure);
        assert.ok(!validation.isSuccess);
        assert.ok(validation.equals(new ValidationResult.ValidationResult({
          error: null,
          children: new OrderedMap({
            count: new ValidationResult.ValidationResult({
              error: 'error',
              children: OrderedMap.empty()
            })
          })
        })));
      });
    });

    describe('array validation', () => {
      var schema = List(Scalar({type: 'number'}));

      it('deserializes and validates', () => {
        assertValidates(validate(schema, [1]), [1]);
      });

      it('fails if children are not valid', () => {
        assertFails(validate(schema, [1], {'0': ValidationResult.failure('error')}), [1]);
      });
    });
  });
});
