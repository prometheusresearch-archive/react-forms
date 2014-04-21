/**
 * @jsx React.DOM
 */
'use strict';

var assert      = require('assert');

var schema      = require('../lib/schema');
var validators  = require('../lib/validators');
var validation  = require('../lib/validation');

var validate      = validation.validate;
var validateOnly  = validation.validateOnly;
var failure       = validation.failure;

var Schema      = schema.Schema;
var Property    = schema.Property;
var List        = schema.List;

describe('forms', () => {

  describe.only('validation', () => {

    describe('validation', () => {

      function assertValidates(validation) {
        assert.strictEqual(validation.isSuccess, true, 'isSuccess should be true');
        assert.strictEqual(validation.isFailure, false, 'isFailure should be false');
      }

      function assertFails(validation) {
        assert.strictEqual(validation.isSuccess, false, 'isSuccess should be false');
        assert.strictEqual(validation.isFailure, true, 'isFailure should be true');
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
          var schema = <Property validate={number} />;

          assertValidates(validate(schema, 1).validation);
          assertValidates(validate(schema, '1').validation);
          assertValidates(validate(schema, null).validation);
          assertValidates(validate(schema, undefined).validation);
        });

        it('validates required scalars', () => {
          var schema = <Property required validate={number} />;

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
            <Schema>
              <Property name="name" />
              <Property name="count" validate={number} />
            </Schema>
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
            <Schema required>
              <Property name="name" required />
              <Property name="count" validate={number} />
            </Schema>
          );

          var validation;

          assertValidates(validate(schema, {name: 'name'}).validation);

          validation = validate(schema, {}).validation;
          assertChildrenFail(validation, 'name');
          assertFails(validation);
          assertFails(validation.children.name);

          assertSelfFails(validate(schema, null).validation, 'value is required');
          assertSelfFails(validate(schema, undefined).validation, 'value is required');
        });

        it('validates nested objects', () => {

          var schema = (
            <Schema>
              <Property name="name" required />
              <Property name="count" validate={number} />
              <Schema name="subschema" required>
                <Property name="name" required />
                <Property name="count" validate={number} />
              </Schema>
            </Schema>
          );

          var validation;

          validation = validate(schema, {}).validation;
          assertFails(validation);
          assertChildrenFail(validation, 'name', 'subschema');
          assertFails(validation.children.name);
          assertFails(validation.children.subschema);

          validation = validate(schema, {subschema: {}}).validation;
          assertFails(validation);
          assertChildrenFail(validation, 'name', 'subschema');
          assertFails(validation.children.name);
          assertFails(validation.children.subschema);
          assertChildrenFail(validation.children.subschema, 'name');
          assertFails(validation.children.subschema.children.name);
        });
      });

      describe('array validation', () => {

        var number = validators.validator((val) => val > 0 && val < 42);

        it('validates array', () => {

          var schema = (
            <List>
              <Property validate={number} />
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
        assert.strictEqual(validation.validation.isSuccess, true);
        assert.strictEqual(validation.validation.isFailure, false);
        if (typeof expectation === 'object') {
          assert.deepEqual(validation.value, expectation);
        } else {
          assert.strictEqual(validation.value, expectation);
        }
      }

      function assertFails(validation, expectation) {
        assert.strictEqual(validation.validation.isSuccess, false);
        assert.strictEqual(validation.validation.isFailure, true);
        if (typeof expectation === 'object') {
          assert.deepEqual(validation.value, expectation);
        } else {
          assert.strictEqual(validation.value, expectation);
        }
      }

      describe('scalar validation', () => {

        it('deserializes and validates via built-in type', () => {
          var schema = <Property type="number" />;
          assertValidates(validateOnly(schema, '1'), 1);
          assertValidates(validateOnly(schema, '12.1'), 12.1);
          assertFails(validateOnly(schema, 'string'), 'string');
          assertValidates(validateOnly(schema, ''), null);
        });

        it('deserializes and validates via built-in type + required', () => {
          var schema = <Property required type="number" />;
          assertValidates(validateOnly(schema, '1'), 1);
          assertValidates(validateOnly(schema, '12.1'), 12.1);
          assertFails(validateOnly(schema, 'string'), 'string');
          assertFails(validateOnly(schema, ''), null);
        });

        it('deserializes and validates via built-in type + validator', () => {
          var positive = (v) => v > 0;
          var schema = <Property validate={positive} type="number" />;
          assertValidates(validateOnly(schema, '1'), 1);
          assertValidates(validateOnly(schema, '12.1'), 12.1);
          assertFails(validateOnly(schema, 'string'), 'string');
          assertFails(validateOnly(schema, '-10'), -10);
          assertValidates(validateOnly(schema, ''), null);
        });

        it('deserializes and validates via built-in type + required + validator', () => {
          var positive = (v) => v > 0;
          var schema = <Property required validate={positive} type="number" />;
          assertValidates(validateOnly(schema, '1'), 1);
          assertValidates(validateOnly(schema, '12.1'), 12.1);
          assertFails(validateOnly(schema, 'string'), 'string');
          assertFails(validateOnly(schema, '-10'), -10);
          assertFails(validateOnly(schema, ''), null);
        });

        it('deserializes and validates via custom type', () => {
          var type = {deserialize: (v) => {return {v}}};
          var schema = <Property type={type} />;
          assertValidates(validateOnly(schema, '1'), {v: '1'});
        });

      });

      describe('object validation', () => {
        var type = {
          deserialize: (v) => {
            return {wrap: v};
          }
        };

        var schema = (
          <Schema type={type}>
            <Property type="number" name="count" />
          </Schema>
        );

        it('deserializes and validates', () => {
          assertValidates(validateOnly(schema, {count: 1}), {wrap: {count: 1}});
        });

        it('fails if children are not valid', () => {
          assertFails(validateOnly(schema, {count: 1}, {count: failure('error')}), {count: 1});
        });
      });

      describe('array validation', () => {
        var type = {
          deserialize: (v) => {
            return {wrap: v};
          }
        };

        var schema = (
          <List type={type}>
            <Property type="number" />
          </List>
        );

        it('deserializes and validates', () => {
          assertValidates(validateOnly(schema, [1]), {wrap: [1]});
        });

        it('fails if children are not valid', () => {
          assertFails(validateOnly(schema, [1], {'0': failure('error')}), [1]);
        });
      });
    });

  });
});
