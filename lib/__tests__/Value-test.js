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
      var schema = Scalar();
      var value = Value(schema, 1);
      assert.ok(Value.isScalarValue(value));
      assert.ok(isScalar(value.schema));
      assert.strictEqual(value.value, 1);
      assert.strictEqual(value.serialized, 1);
      assert.deepEqual(value.path, []);
    });

    it('creates mapping value', function() {
      var schema = Mapping({x: Scalar()});
      var value = Value(schema, {x: 12});
      assert.ok(Value.isMappingValue(value));
      assert.ok(isMapping(value.schema));
      assert.ok(value.value.equals(OrderedMap({x: 12})));
      assert.ok(value.serialized.equals(OrderedMap({x: 12})));
      assert.deepEqual(value.path, []);
    });

    it('creates nested mapping value', function() {
      var schema = Mapping({
        y: Mapping({x: Scalar()})
      });
      var value = Value(schema, {y: {x: 12}});
      assert.ok(Value.isMappingValue(value));
      assert.ok(isMapping(value.schema));
      assert.ok(value.value.equals(OrderedMap({y: OrderedMap({x: 12})})));
      assert.ok(value.serialized.equals(OrderedMap({y: OrderedMap({x: 12})})));
      assert.deepEqual(value.path, []);
    });

    it('creates list value', function() {
      var schema = List(Scalar());
      var value = Value(schema, [12]);
      assert.ok(Value.isListValue(value));
      assert.ok(isList(value.schema));
      assert.ok(value.value.equals(Vector(12)));
      assert.ok(value.serialized.equals(Vector(12)));
      assert.deepEqual(value.path, []);
    });

    it('creates nested list value', function() {
      var schema = List(List(Scalar()));
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
      var schema = Scalar({defaultValue: 1});
      var value = Value(schema);
      assert.ok(Value.isScalarValue(value));
      assert.ok(isScalar(value.schema));
      assert.strictEqual(value.value, 1);
      assert.strictEqual(value.serialized, 1);
      assert.deepEqual(value.path, []);
    });

    it('creates mapping value with default scalar', function() {
      var schema = Mapping({x: Scalar({defaultValue: 42})});
      var value = Value(schema);
      assert.ok(Value.isMappingValue(value));
      assert.ok(isMapping(value.schema));
      assert.ok(value.value.equals(OrderedMap({x: 42})));
      assert.ok(value.serialized.equals(OrderedMap({x: 42})));
      assert.deepEqual(value.path, []);
    });

    it('do not creates value if it contains default child', function() {
      var schema = Mapping({y: Mapping({x: Scalar({defaultValue: 42})})});
      var value = Value(schema);
      assert.ok(Value.isMappingValue(value));
      assert.ok(isMapping(value.schema));
      assert.ok(value.value.equals(OrderedMap()));
      assert.ok(value.serialized.equals(OrderedMap()));
      assert.deepEqual(value.path, []);
    });

    it('creates mapping value', function() {
      var schema = Mapping({
        x: Scalar({defaultValue: 42})
      });
      var value = Value(schema);
      assert.ok(Value.isMappingValue(value));
      assert.ok(isMapping(value.schema));
      assert.ok(value.value.equals(OrderedMap({x: 42})));
      assert.ok(value.serialized.equals(OrderedMap({x: 42})));
      assert.deepEqual(value.path, []);
    });

    it('creates nested mapping value', function() {
      var schema = Mapping({defaultValue: {y: {x: 42}}}, {
        y: Mapping({x: Scalar()})
      });
      var value = Value(schema);
      assert.ok(Value.isMappingValue(value));
      assert.ok(isMapping(value.schema));
      assert.ok(value.value.equals(OrderedMap({y: OrderedMap({x: 42})})));
      assert.ok(value.serialized.equals(OrderedMap({y: OrderedMap({x: 42})})));
      assert.deepEqual(value.path, []);
    });

    it('creates list value', function() {
      var schema = List({defaultValue: [1, 2, 3]}, Scalar());
      var value = Value(schema);
      assert.ok(Value.isListValue(value));
      assert.ok(isList(value.schema));
      assert.ok(value.value.equals(Vector(1, 2, 3)));
      assert.ok(value.serialized.equals(Vector(1, 2, 3)));
      assert.deepEqual(value.path, []);
    });

    it('respects default values when pushing an item to a list', function() {
      var schema = List(Mapping({x: Scalar({defaultValue: 1})}));
      var value = Value(schema);
      assert.ok(value.value.equals(Vector()));
      assert.ok(value.serialized.equals(Vector()));
      var updated = value.push({});
      assert.ok(updated.value.equals(Vector(OrderedMap({x: 1}))));
      assert.ok(updated.serialized.equals(Vector(OrderedMap({x: 1}))));
    });
  });

  describe('traversing values', function() {
    var schema = Mapping({
      list: List(Scalar()),
      mapping: Mapping({x: Scalar()}),
      scalar: Scalar()
    });

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
      assert.ok(value.equals(value.root));
      assert.ok(value.equals(value.child('list').root));
      assert.ok(value.equals(value.child('list').child(0).root));
      assert.ok(value.equals(value.child('scalar').root));
      assert.ok(value.equals(value.child('mapping').child('x').root));
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
    var schema = Mapping({
      list: List({validate: positiveEvery}, Scalar({type: 'number'})),
      mapping: Mapping({validate: positiveX}, {x: Scalar({type: 'number'})}),
      scalar: Scalar({type: 'number'}),
      listOfMappings: List(Mapping({y: Scalar()}))
    });

    var value = Value(schema, {
      list: [1, 2, 3],
      mapping: {x: 12},
      scalar: 1,
      listOfMappings: []
    });

    it('updates scalar', function() {
      var updated = value.child('scalar').update(2);
      assert.ok(updated.value.equals(new OrderedMap({
        list: new Vector(1, 2, 3),
        mapping: new OrderedMap({x: 12}),
        scalar: 2,
        listOfMappings: new Vector()
      })));
      assert.ok(updated.serialized.equals(new OrderedMap({
        list: new Vector(1, 2, 3),
        mapping: new OrderedMap({x: 12}),
        scalar: 2,
        listOfMappings: new Vector()
      })));
      assert.ok(updated.validation.equals(ValidationResult.success));
    });

    it('updates scalar (invalid value)', function() {
      var updated = value.child('scalar').update('x');
      assert.ok(updated.value.equals(new OrderedMap({
        list: new Vector(1, 2, 3),
        mapping: new OrderedMap({x: 12}),
        scalar: 'x',
        listOfMappings: new Vector()
      })));
      assert.ok(updated.serialized.equals(new OrderedMap({
        list: new Vector(1, 2, 3),
        mapping: new OrderedMap({x: 12}),
        scalar: 'x',
        listOfMappings: new Vector()
      })));
      assert.ok(updated.validation.equals(ValidationResult(
        null,
        {scalar: ValidationResult('invalid value')}
      )));
    });

    it('updates nested scalar', function() {
      var updated = value.child('mapping', 'x').update(42);
      assert.ok(updated.value.equals(new OrderedMap({
        list: new Vector(1, 2, 3),
        mapping: new OrderedMap({x: 42}),
        scalar: 1,
        listOfMappings: new Vector()
      })));
      assert.ok(updated.serialized.equals(new OrderedMap({
        list: new Vector(1, 2, 3),
        mapping: new OrderedMap({x: 42}),
        scalar: 1,
        listOfMappings: new Vector()
      })));
      assert.ok(updated.validation.equals(ValidationResult.success));
    });

    it('updates nested scalar (invalid value)', function() {
      var updated = value.child('mapping', 'x').update('x');
      assert.ok(updated.value.equals(new OrderedMap({
        list: new Vector(1, 2, 3),
        mapping: new OrderedMap({x: 'x'}),
        scalar: 1,
        listOfMappings: new Vector()
      })));
      assert.ok(updated.serialized.equals(new OrderedMap({
        list: new Vector(1, 2, 3),
        mapping: new OrderedMap({x: 'x'}),
        scalar: 1,
        listOfMappings: new Vector()
      })));
      assert.ok(updated.validation.equals(ValidationResult(
        null,
        {mapping: ValidationResult(null, {x: ValidationResult('invalid value')})}
      )));
    });

    it('updates mapping', function() {
      var updated = value.child('mapping').update({x: 42});
      assert.ok(updated.value.equals(new OrderedMap({
        list: new Vector(1, 2, 3),
        mapping: new OrderedMap({x: 42}),
        scalar: 1,
        listOfMappings: new Vector()
      })));
      assert.ok(updated.serialized.equals(new OrderedMap({
        list: new Vector(1, 2, 3),
        mapping: new OrderedMap({x: 42}),
        scalar: 1,
        listOfMappings: new Vector()
      })));
      assert.ok(updated.validation.equals(ValidationResult.success));
    });

    it('updates mapping (invalid value)', function() {
      var updated = value.child('mapping').update({x: -1});
      assert.ok(updated.value.equals(new OrderedMap({
        list: new Vector(1, 2, 3),
        mapping: new OrderedMap({x: -1}),
        scalar: 1,
        listOfMappings: new Vector()
      })));
      assert.ok(updated.serialized.equals(new OrderedMap({
        list: new Vector(1, 2, 3),
        mapping: new OrderedMap({x: -1}),
        scalar: 1,
        listOfMappings: new Vector()
      })));
      assert.ok(updated.validation.equals(ValidationResult(null, {
        mapping: ValidationResult('x is not positive')
      })));
    });

    it('updates mapping (invalid child value)', function() {
      var updated = value.child('mapping').update({x: 'x'});
      assert.ok(updated.value.equals(new OrderedMap({
        list: new Vector(1, 2, 3),
        mapping: new OrderedMap({x: 'x'}),
        scalar: 1,
        listOfMappings: new Vector()
      })));
      assert.ok(updated.serialized.equals(new OrderedMap({
        list: new Vector(1, 2, 3),
        mapping: new OrderedMap({x: 'x'}),
        scalar: 1,
        listOfMappings: new Vector()
      })));
      assert.ok(updated.validation.equals(ValidationResult(null, {
        mapping: ValidationResult(null, {
          x: ValidationResult('invalid value')
        })
      })));
    });

    it('updates list', function() {
      var updated = value.child('list').update([42]);
      assert.ok(updated.value.equals(new OrderedMap({
        list: new Vector(42),
        mapping: new OrderedMap({x: 12}),
        scalar: 1,
        listOfMappings: new Vector()
      })));
      assert.ok(updated.serialized.equals(new OrderedMap({
        list: new Vector(42),
        mapping: new OrderedMap({x: 12}),
        scalar: 1,
        listOfMappings: new Vector()
      })));
      assert.ok(updated.validation.equals(ValidationResult.success));
    });

    it('updates list (invalid value)', function() {
      var updated = value.child('list').update([-1]);
      assert.ok(updated.value.equals(new OrderedMap({
        list: new Vector(-1),
        mapping: new OrderedMap({x: 12}),
        scalar: 1,
        listOfMappings: new Vector()
      })));
      assert.ok(updated.serialized.equals(new OrderedMap({
        list: new Vector(-1),
        mapping: new OrderedMap({x: 12}),
        scalar: 1,
        listOfMappings: new Vector()
      })));
      assert.ok(updated.validation.equals(ValidationResult(null, {
        list: ValidationResult('some item is not positive')
      })));
    });

    it('updates list (invalid child value)', function() {
      var updated = value.child('list').update(['x']);
      assert.ok(updated.value.equals(new OrderedMap({
        list: new Vector('x'),
        mapping: new OrderedMap({x: 12}),
        scalar: 1,
        listOfMappings: new Vector()
      })));
      assert.ok(updated.serialized.equals(new OrderedMap({
        list: new Vector('x'),
        mapping: new OrderedMap({x: 12}),
        scalar: 1,
        listOfMappings: new Vector()
      })));
      assert.ok(updated.validation.equals(ValidationResult(null, {
        list: ValidationResult(null, {'0': ValidationResult('invalid value')})
      })));
    });

    it('updates list of mappings', function() {
      var updated = value.child('listOfMappings').update([{y: 12}]);
      assert.ok(updated.value.equals(new OrderedMap({
        list: new Vector(1, 2, 3),
        mapping: new OrderedMap({x: 12}),
        scalar: 1,
        listOfMappings: new Vector(new OrderedMap({y: 12}))
      })));
      assert.ok(updated.serialized.equals(new OrderedMap({
        list: new Vector(1, 2, 3),
        mapping: new OrderedMap({x: 12}),
        scalar: 1,
        listOfMappings: new Vector(new OrderedMap({y: 12}))
      })));
      assert.ok(updated.validation.equals(ValidationResult.success));
    });

  });

  describe('dirtyness tracking', function() {

    var schema = Mapping({
      x: Mapping({y: Scalar()}),
      z: Scalar(),
      l: List(Scalar())
    });

    function assertDirty(value) {
      assert.ok(value.isDirty, 'value should be dirty');
    }

    function assertNotDirty(value) {
      assert.ok(!value.isDirty, 'value should not be dirty');
    }

    it('is not dirty initially', function() {
      var value = Value(schema);
      assertNotDirty(value);
    });

    it('can be marked dirty', function() {
      var value = Value(schema);
      assertNotDirty(value);
      value = value.markDirty();
      assertDirty(value);
      assertDirty(value.child('z'));
      assertDirty(value.child('x'));
      assertDirty(value.child('x').child('y'));
    });

    it('can be marked dirty (including list)', function() {
      var value = Value(schema, {l: ['x', 'y']});
      assertNotDirty(value);
      value = value.markDirty();
      assertDirty(value);
      assertDirty(value.child('l'));
      assertDirty(value.child('l').child(0));
      assertDirty(value.child('l').child(1));
    });

    it('can be marked dirty via child', function() {
      var value = Value(schema);
      assertNotDirty(value);
      value = value.child('z').markDirty();
      assertDirty(value);
      assertDirty(value.child('z'));
      assertNotDirty(value.child('x'));
      assertNotDirty(value.child('x').child('y'));
      assertNotDirty(value.child('l'));
      assertNotDirty(value.child('l').child(0));
    });

  });
});
