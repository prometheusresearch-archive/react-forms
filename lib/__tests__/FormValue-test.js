/**
 * @jsx React.DOM
 */
'use strict';

var assert      = require('assert');
var FormValue   = require('../FormValue');
var s           = require('../schema');
var v           = require('../validation');

var Property = s.Property;
var Schema = s.Schema;
var List = s.List;

function pp(v) {
  return JSON.stringify(v, null, 2);
}

function assertValue(value, expected) {
  assert.deepEqual(
    value.value, expected,
    `value ${JSON.stringify(value.value)} does not match ${JSON.stringify(expected)}`
  );
}

function assertSerializedValue(value, expected) {
  assert.deepEqual(
    value.serializedValue, expected,
    `serializedValue ${JSON.stringify(value.serializedValue)} does not match ${JSON.stringify(expected)}`
  );
}

function assertSuccess(value) {
  assert.ok(value.validation, 'no validation');
  assert.ok(
    v.isSuccess(value.validation),
    `value should validate:\n${pp(value.validation)}`
  );
}

function assertFailure(value) {
  assert.ok(value.validation, 'no validation');
  assert.ok(
    v.isFailure(value.validation),
    `value should not validate:\n${pp(value.validation)}`
  );
}

describe('forms', () => {

  describe('FormValue', () => {

    describe('creating form value', () => {

      it('creates value with Property schema', () => {
        var schema = <Property />;
        var value = FormValue(schema, 'value');
        assert.equal(value.schema, schema);
        assertValue(value, 'value');
        assertSerializedValue(value, 'value');
        assertSuccess(value);
      });

      it('creates value with Schema schema', () => {
        var schema = <Schema><Property name="name" /></Schema>;
        var value = FormValue(schema, {name: 'name'});

        assert.equal(value.schema, schema);
        assertValue(value, {name: 'name'});
        assertSerializedValue(value, {name: 'name'});
        assertSuccess(value);
      });

      it('creates value with List schema', () => {
        var schema = <List><Property /></List>;
        var value = FormValue(schema, ['name']);

        assert.equal(value.schema, schema);
        assertValue(value, ['name']);
        assertSerializedValue(value, ['name']);
        assertSuccess(value);
      });

    });

    describe('PropetyValue', () => {

      describe('updatting serializedValue', () => {

        it('updates value with serialized representation', () => {
          var schema = <Property />;
          var value = FormValue(schema, 'value');
          var updated = value.updateSerializedValue('value2');

          assert.equal(updated.schema, value.schema);
          assertValue(updated, 'value2');
          assertSerializedValue(updated, 'value2');
          assertSuccess(value);

          assertValue(value, 'value');
          assertSerializedValue(value, 'value');
        });

        it('does not modifies deserialized value if serialized value is invalid', () => {
          var schema = <Property type="number" />;
          var value = FormValue(schema, 42);
          var updated = value.updateSerializedValue('invalid');

          assert.equal(updated.schema, value.schema);
          assertValue(updated, 42);
          assertSerializedValue(updated, 'invalid');
          assertFailure(updated);

          assertValue(value, 42);
          assertSerializedValue(value, '42');
        });

      });

    });

    describe('SchemaValue', () => {

      describe('getting a subvalue', () => {

        it('allows getting a subvalue', () => {
          var schema = <Schema><Property name="name" /></Schema>;
          var value = FormValue(schema, {name: 'name'});
          var subValue = value.get('name');

          assert.equal(subValue.schema, schema.children.name);
          assertValue(subValue, 'name');
          assertSerializedValue(subValue, 'name');
          assertSuccess(value);
        });

        it('throws if we try to get a subvalue for which we have no schema', () => {
          var schema = <Schema><Property name="name" /></Schema>;
          var value = FormValue(schema, {name: 'name'});
          assert.throws(() => {
            value.get('oops');
          }, "Error: trying to get a key from a form value which doesn't have schema");
        });

        it('uses default value from schema if no value is provided', () => {
          var schema = <Schema><Property defaultValue="name" name="name" /></Schema>;
          var value = FormValue(schema, {});
          var subValue = value.get('name');

          assert.equal(subValue.schema, schema.children.name);
          assertValue(subValue, 'name');
          assertSerializedValue(subValue, 'name');
          assertSuccess(value);
        });
      });

      describe('merging with values', () => {

        it('merges with a value', () => {
          var schema = (
            <Schema>
              <Property name="a" />
              <Property name="b" />
            </Schema>
          );
          var value = FormValue(schema, {a: 'a', b: 'b'});

          assertValue(value, {a: 'a', b: 'b'});
          assertSerializedValue(value, {a: 'a', b: 'b'});
          assertSuccess(value);
    
          var merged = value.merge(value.get('a').updateSerializedValue('aa'));

          assertValue(merged, {a: 'aa', b: 'b'});
          assertSerializedValue(merged, {a: 'aa', b: 'b'});
          assertSuccess(merged);
        });

        it('does not modifies deserialized value if serialized value is invalid', () => {
          var schema = (
            <Schema>
              <Property name="a" type="number" />
              <Property name="b" />
            </Schema>
          );
          var value = FormValue(schema, {a: 1, b: 'b'});

          assertValue(value, {a: 1, b: 'b'});
          assertSerializedValue(value, {a: '1', b: 'b'});
          assertSuccess(value);
    
          var merged = value.merge(value.get('a').updateSerializedValue('invalid'));

          assertValue(merged, {a: 1, b: 'b'});
          assertSerializedValue(merged, {a: 'invalid', b: 'b'});
          assertFailure(merged);
        });

      });

    });

    describe('ListValue', () => {

      describe('getting a subvalue', () => {

        it('allows getting a subvalue', () => {
          var schema = <List><Property /></List>;
          var value = FormValue(schema, ['first']);
          var subValue = value.get(0);

          assert.equal(subValue.schema, schema.children);
          assertValue(subValue, 'first');
          assertSerializedValue(subValue, 'first');
          assertSuccess(value);
        });

        it('uses default value from schema if no value is provided', () => {
          var schema = <List><Property defaultValue="elem" /></List>;
          var value = FormValue(schema, ['first']);
          var subValue = value.get(1);

          assert.equal(subValue.schema, schema.children);
          assertValue(subValue, 'elem');
          assertSerializedValue(subValue, 'elem');
          assertSuccess(value);
        });
      });

    });

  });
});
