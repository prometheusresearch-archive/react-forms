/**
 * @jsx React.DOM
 */
'use strict';

var assert                        = require('assert');
var {OrderedMap, Vector}          = require('immutable');
var ValidationResult              = require('../ValidationResult');
var Value                         = require('../Value');
var {Mapping, List, Scalar,
     isScalar, isList, isMapping} = require('../schema');

describe('Value', function() {

  describe('creating new values', function() {

    it('creates scalar value', function() {
      var schema = <Scalar />;
      var value = Value(schema, 1);
      assert.ok(Value.isScalarValue(value));
      assert.ok(isScalar(value.schema));
      assert.strictEqual(value.value, 1);
      assert.strictEqual(value.serialized, 1);
      assert.deepEqual(value.path, []);
    });

    it('creates mapping value', function() {
      var schema = (
        <Mapping>
          <Scalar name="x" />
        </Mapping>
      );
      var value = Value(schema, {x: 12});
      assert.ok(Value.isMappingValue(value));
      assert.ok(isMapping(value.schema));
      assert.ok(value.value.equals(OrderedMap({x: 12})));
      assert.ok(value.serialized.equals(OrderedMap({x: 12})));
      assert.deepEqual(value.path, []);
    });

    it('creates nested mapping value', function() {
      var schema = (
        <Mapping>
          <Mapping name="y">
            <Scalar name="x" />
          </Mapping>
        </Mapping>
      );
      var value = Value(schema, {y: {x: 12}});
      assert.ok(Value.isMappingValue(value));
      assert.ok(isMapping(value.schema));
      assert.ok(value.value.equals(OrderedMap({y: OrderedMap({x: 12})})));
      assert.ok(value.serialized.equals(OrderedMap({y: OrderedMap({x: 12})})));
      assert.deepEqual(value.path, []);
    });

    it('creates list value', function() {
      var schema = (
        <List>
          <Scalar />
        </List>
      );
      var value = Value(schema, [12]);
      assert.ok(Value.isListValue(value));
      assert.ok(isList(value.schema));
      assert.ok(value.value.equals(Vector(12)));
      assert.ok(value.serialized.equals(Vector(12)));
      assert.deepEqual(value.path, []);
    });

    it('creates nested list value', function() {
      var schema = (
        <List>
          <List>
            <Scalar />
          </List>
        </List>
      );
      var value = Value(schema, [[12]]);
      assert.ok(Value.isListValue(value));
      assert.ok(isList(value.schema));
      assert.ok(value.value.equals(Vector(Vector(12))));
      assert.ok(value.serialized.equals(Vector(Vector(12))));
      assert.deepEqual(value.path, []);
    });
  });

  describe('creating new values with defaults', function() {

    it('creates scalar value', function() {
      var schema = <Scalar defaultValue={1} />;
      var value = Value(schema);
      assert.ok(Value.isScalarValue(value));
      assert.ok(isScalar(value.schema));
      assert.strictEqual(value.value, 1);
      assert.strictEqual(value.serialized, 1);
      assert.deepEqual(value.path, []);
    });

    it('creates mapping value with default scalar', function() {
      var schema = (
        <Mapping>
          <Scalar name="x" defaultValue={42} />
        </Mapping>
      );
      var value = Value(schema);
      assert.ok(Value.isMappingValue(value));
      assert.ok(isMapping(value.schema));
      assert.ok(value.value.equals(OrderedMap({x: 42})));
      assert.ok(value.serialized.equals(OrderedMap({x: 42})));
      assert.deepEqual(value.path, []);
    });

    it('creates nested mapping value with default scalar', function() {
      var schema = (
        <Mapping>
          <Mapping name="y">
            <Scalar name="x" defaultValue={42} />
          </Mapping>
        </Mapping>
      );
      var value = Value(schema);
      assert.ok(Value.isMappingValue(value));
      assert.ok(isMapping(value.schema));
      assert.ok(value.value.equals(OrderedMap({y: OrderedMap({x: 42})})));
      assert.ok(value.serialized.equals(OrderedMap({y: OrderedMap({x: 42})})));
      assert.deepEqual(value.path, []);
    });

    it('creates mapping value', function() {
      var schema = (
        <Mapping defaultValue={{x: 42}}>
          <Scalar name="x" />
        </Mapping>
      );
      var value = Value(schema);
      assert.ok(Value.isMappingValue(value));
      assert.ok(isMapping(value.schema));
      assert.ok(value.value.equals(OrderedMap({x: 42})));
      assert.ok(value.serialized.equals(OrderedMap({x: 42})));
      assert.deepEqual(value.path, []);
    });

    it('creates nested mapping value', function() {
      var schema = (
        <Mapping defaultValue={{y: {x: 42}}}>
          <Mapping name="y">
            <Scalar name="x" />
          </Mapping>
        </Mapping>
      );
      var value = Value(schema);
      assert.ok(Value.isMappingValue(value));
      assert.ok(isMapping(value.schema));
      assert.ok(value.value.equals(OrderedMap({y: OrderedMap({x: 42})})));
      assert.ok(value.serialized.equals(OrderedMap({y: OrderedMap({x: 42})})));
      assert.deepEqual(value.path, []);
    });

    it('creates list value', function() {
      var schema = (
        <List defaultValue={[1, 2, 3]}>
          <Scalar />
        </List>
      );
      var value = Value(schema);
      assert.ok(Value.isListValue(value));
      assert.ok(isList(value.schema));
      assert.ok(value.value.equals(Vector(1, 2, 3)));
      assert.ok(value.serialized.equals(Vector(1, 2, 3)));
      assert.deepEqual(value.path, []);
    });
  });

  describe('traversing values', function() {
    var schema = (
      <Mapping>
        <List name="list">
          <Scalar />
        </List>
        <Mapping name="mapping">
          <Scalar name="x" />
        </Mapping>
        <Scalar name="scalar" />
      </Mapping>
    );

    var value = Value(schema, {
      list: [1, 2, 3],
      mapping: {x: 12},
      scalar: 1
    });

    it('traversing through scalars', function() {
      var v = value.child('scalar');
      assert.strictEqual(v.value, 1);
      assert.strictEqual(v.serialized, 1);
      assert.strictEqual(v.schema, schema.child('scalar'));
      assert.ok(v.validation.equals(ValidationResult.success));
    });

    it('traversing through mappings', function() {
      var v;

      v = value.child('mapping');
      assert.ok(v.value.equals(OrderedMap({x: 12})));
      assert.ok(v.serialized.equals(OrderedMap({x: 12})));
      assert.strictEqual(v.schema, schema.child('mapping'));
      assert.ok(v.validation.equals(ValidationResult.success));

      v = value.child('mapping').child('x');
      assert.strictEqual(v.value, 12);
      assert.strictEqual(v.serialized, 12);
      assert.strictEqual(v.schema, schema.child('mapping').child('x'));
      assert.ok(v.validation.equals(ValidationResult.success));

      v = value.child('mapping', 'x');
      assert.strictEqual(v.value, 12);
      assert.strictEqual(v.serialized, 12);
      assert.strictEqual(v.schema, schema.child('mapping').child('x'));
      assert.ok(v.validation.equals(ValidationResult.success));

      v = value.childIn(['mapping', 'x']);
      assert.strictEqual(v.value, 12);
      assert.strictEqual(v.serialized, 12);
      assert.strictEqual(v.schema, schema.child('mapping').child('x'));
      assert.ok(v.validation.equals(ValidationResult.success));
    });

    it('traversing through lists', function() {
      var v;

      v = value.child('list');
      assert.ok(v.value.equals(Vector(1, 2, 3)));
      assert.ok(v.serialized.equals(Vector(1, 2, 3)));
      assert.strictEqual(v.schema, schema.child('list'));
      assert.ok(v.validation.equals(ValidationResult.success));

      v = value.child('list').child(0);
      assert.strictEqual(v.value, 1);
      assert.strictEqual(v.serialized, 1);
      assert.strictEqual(v.schema, schema.child('list').child(0));
      assert.ok(v.validation.equals(ValidationResult.success));

      v = value.child('list', 0);
      assert.strictEqual(v.value, 1);
      assert.strictEqual(v.serialized, 1);
      assert.strictEqual(v.schema, schema.child('list').child(0));
      assert.ok(v.validation.equals(ValidationResult.success));

      v = value.childIn(['list', 0]);
      assert.strictEqual(v.value, 1);
      assert.strictEqual(v.serialized, 1);
      assert.strictEqual(v.schema, schema.child('list').child(0));
      assert.ok(v.validation.equals(ValidationResult.success));
    });

    it('allows going back to root value', function() {
      assert.ok(value.equals(value.root()));
      assert.ok(value.equals(value.child('list').root()));
      assert.ok(value.equals(value.child('list').child(0).root()));
      assert.ok(value.equals(value.child('scalar').root()));
      assert.ok(value.equals(value.child('mapping').child('x').root()));
    });
  });

  describe('updating value', function() {
    var positiveX = (v) => {
      if (v.x < 0) {
        return new Error('x is not positive');
      }
    };
    var positiveEvery = (v) => {
      if (v.some((x) => x <= 0)) {
        return new Error('some item is not positive');
      }
    };
    var schema = (
      <Mapping>
        <List name="list" validate={positiveEvery}>
          <Scalar type="number" />
        </List>
        <Mapping name="mapping" validate={positiveX}>
          <Scalar name="x" type="number" />
        </Mapping>
        <Scalar name="scalar" type="number" />
      </Mapping>
    );

    var value = Value(schema, {
      list: [1, 2, 3],
      mapping: {x: 12},
      scalar: 1
    });

    it('updates scalar', function() {
      var updated = value.child('scalar').update(2).root();
      assert.ok(updated.value.equals(new OrderedMap({
        list: new Vector(1, 2, 3),
        mapping: new OrderedMap({x: 12}),
        scalar: 2
      })));
      assert.ok(updated.serialized.equals(new OrderedMap({
        list: new Vector(1, 2, 3),
        mapping: new OrderedMap({x: 12}),
        scalar: 2
      })));
      assert.ok(updated.validation.equals(ValidationResult.success));
    });

    it('updates scalar (invalid value)', function() {
      var updated = value.child('scalar').update('x').root();
      assert.ok(updated.value.equals(new OrderedMap({
        list: new Vector(1, 2, 3),
        mapping: new OrderedMap({x: 12}),
        scalar: 'x'
      })));
      assert.ok(updated.serialized.equals(new OrderedMap({
        list: new Vector(1, 2, 3),
        mapping: new OrderedMap({x: 12}),
        scalar: 'x'
      })));
      assert.ok(updated.validation.equals(ValidationResult(
        null,
        {scalar: ValidationResult('invalid value')}
      )));
    });

    it('updates nested scalar', function() {
      var updated = value.child('mapping', 'x').update(42).root();
      assert.ok(updated.value.equals(new OrderedMap({
        list: new Vector(1, 2, 3),
        mapping: new OrderedMap({x: 42}),
        scalar: 1
      })));
      assert.ok(updated.serialized.equals(new OrderedMap({
        list: new Vector(1, 2, 3),
        mapping: new OrderedMap({x: 42}),
        scalar: 1
      })));
      assert.ok(updated.validation.equals(ValidationResult.success));
    });

    it('updates nested scalar (invalid value)', function() {
      var updated = value.child('mapping', 'x').update('x').root();
      assert.ok(updated.value.equals(new OrderedMap({
        list: new Vector(1, 2, 3),
        mapping: new OrderedMap({x: 'x'}),
        scalar: 1
      })));
      assert.ok(updated.serialized.equals(new OrderedMap({
        list: new Vector(1, 2, 3),
        mapping: new OrderedMap({x: 'x'}),
        scalar: 1
      })));
      assert.ok(updated.validation.equals(ValidationResult(
        null,
        {mapping: ValidationResult(null, {x: ValidationResult('invalid value')})}
      )));
    });

    it('updates mapping', function() {
      var updated = value.child('mapping').update({x: 42}).root();
      assert.ok(updated.value.equals(new OrderedMap({
        list: new Vector(1, 2, 3),
        mapping: new OrderedMap({x: 42}),
        scalar: 1
      })));
      assert.ok(updated.serialized.equals(new OrderedMap({
        list: new Vector(1, 2, 3),
        mapping: new OrderedMap({x: 42}),
        scalar: 1
      })));
      assert.ok(updated.validation.equals(ValidationResult.success));
    });

    it('updates mapping (invalid value)', function() {
      var updated = value.child('mapping').update({x: -1}).root();
      assert.ok(updated.value.equals(new OrderedMap({
        list: new Vector(1, 2, 3),
        mapping: new OrderedMap({x: -1}),
        scalar: 1
      })));
      assert.ok(updated.serialized.equals(new OrderedMap({
        list: new Vector(1, 2, 3),
        mapping: new OrderedMap({x: -1}),
        scalar: 1
      })));
      assert.ok(updated.validation.equals(ValidationResult(null, {
        mapping: ValidationResult('x is not positive')
      })));
    });

    it('updates mapping (invalid child value)', function() {
      var updated = value.child('mapping').update({x: 'x'}).root();
      assert.ok(updated.value.equals(new OrderedMap({
        list: new Vector(1, 2, 3),
        mapping: new OrderedMap({x: 'x'}),
        scalar: 1
      })));
      assert.ok(updated.serialized.equals(new OrderedMap({
        list: new Vector(1, 2, 3),
        mapping: new OrderedMap({x: 'x'}),
        scalar: 1
      })));
      assert.ok(updated.validation.equals(ValidationResult(null, {
        mapping: ValidationResult(null, {
          x: ValidationResult('invalid value')
        })
      })));
    });

    it('updates list', function() {
      var updated = value.child('list').update([42]).root();
      assert.ok(updated.value.equals(new OrderedMap({
        list: new Vector(42),
        mapping: new OrderedMap({x: 12}),
        scalar: 1
      })));
      assert.ok(updated.serialized.equals(new OrderedMap({
        list: new Vector(42),
        mapping: new OrderedMap({x: 12}),
        scalar: 1
      })));
      assert.ok(updated.validation.equals(ValidationResult.success));
    });

    it('updates list (invalid value)', function() {
      var updated = value.child('list').update([-1]).root();
      assert.ok(updated.value.equals(new OrderedMap({
        list: new Vector(-1),
        mapping: new OrderedMap({x: 12}),
        scalar: 1
      })));
      assert.ok(updated.serialized.equals(new OrderedMap({
        list: new Vector(-1),
        mapping: new OrderedMap({x: 12}),
        scalar: 1
      })));
      assert.ok(updated.validation.equals(ValidationResult(null, {
        list: ValidationResult('some item is not positive')
      })));
    });

    it('updates list (invalid child value)', function() {
      var updated = value.child('list').update(['x']).root();
      assert.ok(updated.value.equals(new OrderedMap({
        list: new Vector('x'),
        mapping: new OrderedMap({x: 12}),
        scalar: 1
      })));
      assert.ok(updated.serialized.equals(new OrderedMap({
        list: new Vector('x'),
        mapping: new OrderedMap({x: 12}),
        scalar: 1
      })));
      assert.ok(updated.validation.equals(ValidationResult(null, {
        list: ValidationResult(null, {'0': ValidationResult('invalid value')})
      })));
    });

  });
});
