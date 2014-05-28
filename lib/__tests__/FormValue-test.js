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

      it('merges with a nested value', () => {
        var schema = (
          <Schema>
            <Schema name="n">
              <Property name="a" />
              <Property name="b" />
            </Schema>
          </Schema>
        );
        var value = FormValue(schema, {});

        assertValue(value, {});
        assertSerializedValue(value, {});
        assertSuccess(value);
  
        var merged = value.merge(value.get('n').get('a').updateSerializedValue('aa'));

        assertValue(merged, {n: {a: 'aa'}});
        assertSerializedValue(merged, {n: {a: 'aa'}});
        assertSuccess(merged);
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

    describe('adding element to value', () => {

      it('allows to add an element at the end of the list', () => {
        var schema = <List><Property /></List>;
        var value = FormValue(schema, ['first']);
        var newValue = value.add('second');
        assertValue(newValue, ['first', 'second']);
        assertSerializedValue(newValue, ['first', 'second']);
        assertSuccess(value);
      });

      it('uses default value from schema if no value is provided', () => {
        var schema = <List><Property defaultValue="item" /></List>;
        var value = FormValue(schema, ['first']);
        var newValue = value.add();
        assertValue(newValue, ['first', 'item']);
        assertSerializedValue(newValue, ['first', 'item']);
        assertSuccess(value);
      });

      it('does not destroy serialied values', () => {
        var schema = <List><Property type="date" /></List>;
        var value = FormValue(schema, [
          new Date('2012-12-12')
        ]);

        assertValue(value, [
          new Date('2012-12-12')
        ]);
        assertSerializedValue(value, [
          '2012-12-12'
        ]);
        assertSuccess(value);

        var newValue = value.add(new Date('2013-12-12'));

        assertValue(newValue, [
          new Date('2012-12-12'),
          new Date('2013-12-12')
        ]);
        assertSerializedValue(newValue, [
          '2012-12-12',
          '2013-12-12'
        ]);
        assertSuccess(value);
      });

      it('updates validation state', () => {
        var validate = (v) => v.length > 2;
        var schema = <List validate={validate}><Property type="number" /></List>;
        var value = FormValue(schema, [1, 2]);

        assertValue(value, [1, 2]);
        assertSerializedValue(value, ['1', '2']);
        assertFailure(value);

        var newValue = value.add(3);

        assertValue(newValue, [1, 2, 3]);
        assertSerializedValue(newValue, ['1', '2', '3']);
        assertSuccess(newValue);
      });

    });

    describe('removing an element from value by index', () => {

      it('removes an element by index', () => {
        var schema = <List><Property defaultValue="item" /></List>;
        var value = FormValue(schema, [1, 2, 3]);
        var newValue = value.remove(1);
        assertValue(newValue, [1, 3]);
        assertSerializedValue(newValue, [1, 3]);
        assertSuccess(value);
      });

      it('does not destroy serialied values', () => {
        var schema = <List><Property type="date" /></List>;
        var value = FormValue(schema, [
          new Date('2012-12-12'),
          new Date('2013-12-12')
        ]);

        assertValue(value, [
          new Date('2012-12-12'),
          new Date('2013-12-12')
        ]);
        assertSerializedValue(value, [
          '2012-12-12',
          '2013-12-12'
        ]);
        assertSuccess(value);

        var newValue = value.remove(1);

        assertValue(newValue, [
          new Date('2012-12-12')
        ]);
        assertSerializedValue(newValue, [
          '2012-12-12'
        ]);
        assertSuccess(value);
      });

      it('updates validation state', () => {
        var validate = (v) => v.length > 2;
        var schema = <List validate={validate}><Property type="number" /></List>;
        var value = FormValue(schema, [1, 2, 3]);

        assertValue(value, [1, 2, 3]);
        assertSerializedValue(value, ['1', '2', '3']);
        assertSuccess(value);

        var newValue = value.remove(1);

        assertValue(newValue, [1, 3]);
        assertSerializedValue(newValue, ['1', '3']);
        assertFailure(newValue);
      });

    });

  });

  describe('non-trivial interactions', function() {

    it('survives a sequence of updates', function() {
      var schema = (
        <Schema>
          <Property name="a" type="number" />
          <Property name="b" type="number" />
        </Schema>
      );
      var value = FormValue(schema, {});

      assertValue(value, {});
      assertSerializedValue(value, {});
      assertSuccess(value);

      value = value.merge(value.get('a').updateSerializedValue('c'));

      assertValue(value, {a: 'c'});
      assertSerializedValue(value, {a: 'c'});
      assertFailure(value);

      value = value.merge(value.get('b').updateSerializedValue('d'));

      assertValue(value, {a: 'c', b: 'd'});
      assertSerializedValue(value, {a: 'c', b: 'd'});
      assertFailure(value);

      value = value.merge(value.get('a').updateSerializedValue(1));
      value = value.merge(value.get('b').updateSerializedValue(2));

      assertValue(value, {a: 1, b: 2});
      assertSerializedValue(value, {a: '1', b: '2'});
      assertSuccess(value);
    });

  });

});
