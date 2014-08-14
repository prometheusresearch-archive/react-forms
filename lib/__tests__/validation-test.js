/**
 * @jsx React.DOM
 */
'use strict';

var assert      = require('assert');

var {Mapping, Scalar, List} = require('../schema');
var validators              = require('../validators');
var validation              = require('../validation');

var validate      = validation.validate;
var validateOnly  = validation.validateOnly;
var failure       = validation.failure;
var isSuccess     = validation.isSuccess;
var isFailure     = validation.isFailure;

describe('forms', () => {

  describe('validation', () => {

    describe('validation', () => {

      function assertValidates(validation) {
        assert.strictEqual(isSuccess(validation), true, 'isSuccess() should return true');
        assert.strictEqual(isFailure(validation), false, 'isFailure() should return false');
      }

      function assertFails(validation) {
        assert.strictEqual(isFailure(validation), true, 'isFailure() should return true');
        assert.strictEqual(isSuccess(validation), false, 'isSuccess() should return false');
      }

      function assertSelfFails(validation, message) {
        assertFails(validation);
        assert.strictEqual(validation.validation.failure, message);
      }

      function assertChildrenFail(validation) {
        var keys = Array.prototype.slice.call(arguments, 1);
        assertFails(validation);
        assert.ok(validation.children);
        keys.forEach((key) =>
          assert.ok(validation.children[key] !== undefined));
        Object.keys(validation.children).forEach((key) =>
          assert.ok(keys.indexOf(key) > -1));
      }

      describe('scalar validation', () => {

        var number = validators.validator((val) => val > 0 && val < 42);

        it('validates scalars', () => {
          var schema = <Scalar validate={number} />;

          assertValidates(validate(schema, 1).validation);
          assertValidates(validate(schema, '1').validation);
          assertValidates(validate(schema, null).validation);
          assertValidates(validate(schema, undefined).validation);
        });

        it('validates required scalars', () => {
          var schema = <Scalar required validate={number} />;

          assertValidates(validate(schema, 1).validation);
          assertValidates(validate(schema, '1').validation);
          assertSelfFails(validate(schema, null).validation, 'value is required');
          assertSelfFails(validate(schema, undefined).validation, 'value is required');
        });

      });

      describe('object validation', () => {

        var number = validators.validator((val) => val > 0 && val < 42);

        it('validates object', () => {

          var schema = (
            <Mapping>
              <Scalar name="name" />
              <Scalar name="count" validate={number} />
            </Mapping>
          );

          var validation;

          assertValidates(validate(schema, {}).validation);
          assertValidates(validate(schema, {name: 'name'}).validation);
          assertValidates(validate(schema, {name: 'name', count: 1}).validation);

          validation = validate(schema, {name: 'name', count: 'x'}).validation;
          assertFails(validation);
          assertChildrenFail(validation, 'count');
          assertFails(validation.children.count);

          validation = validate(schema, {name: 'name', count: 1}).validation;
          assertValidates(validation);
        });

        it('validates object w/ required fields', () => {

          var schema = (
            <Mapping required>
              <Scalar name="name" required />
              <Scalar name="count" validate={number} />
            </Mapping>
          );

          var validation;

          assertValidates(validate(schema, {name: 'name'}).validation);

          validation = validate(schema, {}).validation;
          assertChildrenFail(validation, 'name');
          assertFails(validation);
          assertFails(validation.children.name);
        });

        it('validates nested objects', () => {

          var schema = (
            <Mapping>
              <Scalar name="name" required />
              <Scalar name="count" validate={number} />
              <Mapping name="subschema" required>
                <Scalar name="sname" required />
                <Scalar name="scount" validate={number} />
              </Mapping>
              <Mapping name="subschema2">
                <Scalar name="sname2" required />
              </Mapping>
            </Mapping>
          );

          var validation;

          validation = validate(schema, {}).validation;
          assertFails(validation);
          assertChildrenFail(validation, 'name', 'subschema', 'subschema2');
          assertFails(validation.children.name);
          assertFails(validation.children.subschema);
          assertFails(validation.children.subschema2);

          validation = validate(schema, {subschema: {}}).validation;
          assertFails(validation);
          assertChildrenFail(validation, 'name', 'subschema', 'subschema2');
          assertFails(validation.children.name);
          assertFails(validation.children.subschema);
          assertChildrenFail(validation.children.subschema, 'sname');
          assertFails(validation.children.subschema.children.sname);
          assertFails(validation.children.subschema2.children.sname2);

          validation = validate(
              schema,
              {subschema: {}, subschema2: {}}).validation;
          assertFails(validation);
          assertChildrenFail(validation, 'name', 'subschema', 'subschema2');

          validation = validate(
              schema,
              {subschema: {}, subschema2: {sname2: 'value'}}).validation;
          assertFails(validation);
          assertChildrenFail(validation, 'name', 'subschema');

          validation = validate(
              schema,
              {
                name: 'value',
                subschema: {'sname': 'value'},
                subschema2: {sname2: 'value'}
              }).validation;
          assertValidates(validation);
        });
      });

      describe('array validation', () => {

        var number = validators.validator((val) => val > 0 && val < 42);

        it('validates array', () => {

          var schema = (
            <List>
              <Scalar validate={number} />
            </List>
          );

          var validation;

          assertValidates(validate(schema, []).validation);

          validation = validate(schema, ['x']).validation;
          assertFails(validation);
          assertFails(validation.children[0]);

          assertValidates(validate(schema, [1]).validation);

          assertValidates(validate(schema, [1, 2]).validation);

          validation = validate(schema, [1, 'x']).validation;
          assertFails(validation);
          assertFails(validation.children[1]);
        });

      });

    });

    describe('incremental validation', () => {

      function assertValidates(validation, expectation) {
        assert.strictEqual(isSuccess(validation.validation), true, 'isSuccess() should return true');
        assert.strictEqual(isFailure(validation.validation), false, 'isFailure() should return false');
        if (typeof expectation === 'object') {
          assert.deepEqual(validation.value, expectation);
        } else {
          assert.strictEqual(validation.value, expectation);
        }
      }

      function assertFails(validation, expectation) {
        assert.strictEqual(isFailure(validation.validation), true, 'isFailure() should return true');
        assert.strictEqual(isSuccess(validation.validation), false, 'isSuccess() should return false');
        if (typeof expectation === 'object') {
          assert.deepEqual(validation.value, expectation);
        } else {
          assert.strictEqual(validation.value, expectation);
        }
      }

      describe('scalar validation', () => {

        it('deserializes and validates via built-in type', () => {
          var schema = <Scalar type="number" />;
          assertValidates(validateOnly(schema, '1'), 1);
          assertValidates(validateOnly(schema, '12.1'), 12.1);
          assertFails(validateOnly(schema, 'string'), 'string');
          assertValidates(validateOnly(schema, ''), null);
        });

        it('deserializes and validates via built-in type + required', () => {
          var schema = <Scalar required type="number" />;
          assertValidates(validateOnly(schema, '1'), 1);
          assertValidates(validateOnly(schema, '12.1'), 12.1);
          assertFails(validateOnly(schema, 'string'), 'string');
          assertFails(validateOnly(schema, ''), null);
        });

        it('deserializes and validates via built-in type + validator', () => {
          var positive = (v) => v > 0;
          var schema = <Scalar validate={positive} type="number" />;
          assertValidates(validateOnly(schema, '1'), 1);
          assertValidates(validateOnly(schema, '12.1'), 12.1);
          assertFails(validateOnly(schema, 'string'), 'string');
          assertFails(validateOnly(schema, '-10'), -10);
          assertValidates(validateOnly(schema, ''), null);
        });

        it('deserializes and validates via built-in type + required + validator', () => {
          var positive = (v) => v > 0;
          var schema = <Scalar required validate={positive} type="number" />;
          assertValidates(validateOnly(schema, '1'), 1);
          assertValidates(validateOnly(schema, '12.1'), 12.1);
          assertFails(validateOnly(schema, 'string'), 'string');
          assertFails(validateOnly(schema, '-10'), -10);
          assertFails(validateOnly(schema, ''), null);
        });

        it('deserializes and validates via custom type', () => {
          var type = {deserialize: (v) => {return {v};}};
          var schema = <Scalar type={type} />;
          assertValidates(validateOnly(schema, '1'), {v: '1'});
        });

      });

      describe('object validation', () => {
        var schema = (
          <Mapping>
            <Scalar type="number" name="count" />
          </Mapping>
        );

        it('deserializes and validates', () => {
          assertValidates(validateOnly(schema, {count: 1}), {count: 1});
        });

        it('fails if children are not valid', () => {
          assertFails(validateOnly(schema, {count: 1}, {count: failure('error')}), {count: 1});
        });
      });

      describe('array validation', () => {
        var schema = (
          <List>
            <Scalar type="number" />
          </List>
        );

        it('deserializes and validates', () => {
          assertValidates(validateOnly(schema, [1]), [1]);
        });

        it('fails if children are not valid', () => {
          assertFails(validateOnly(schema, [1], {'0': failure('error')}), [1]);
        });
      });
    });

  });
});
