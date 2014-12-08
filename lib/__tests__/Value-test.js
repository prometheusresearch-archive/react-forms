'use strict';

var assert                              = require('assert');
var sinon                               = require('sinon');
var Immutable                           = require('immutable');
var {Iterable, Map, Record, fromJS, is} = Immutable;
var Value                               = require('../Value');
var {Scalar, ScalarNode,
   Mapping, MappingNode,
   List, Node, CompositeNode}           = require('../schema');
var ValidationResult                    = require('../ValidationResult');
var emptyFunction                       = require('../emptyFunction');

function assertEquals(a, b) {
  a = fromJS(a);
  b = fromJS(b);
  assert.ok(is(a, b), `expected ${a} to be equal to ${b}`);
}

function assertNotEquals(a, b) {
  a = fromJS(a);
  b = fromJS(b);
  assert.ok(!is(a, b), 'should not be equal');
}

describe('Value:', function() {

  describe('Value.create(schema, initial):', function() {

    function itGrows(schema, initial, expected) {
      initial = fromJS(initial);
      expected = {
        value: fromJS(expected.value),
        serialized: fromJS(expected.serialized),
        validation: expected.validation
      };
      var onUpdate = emptyFunction;
      var root = () => grown;
      var grown = Value.create(schema, initial, onUpdate, root);
      assert.ok(
        is(grown.value, expected.value),
        `value equality: got "${grown.value}" instead of expected "${expected.value}"`
      );
      assert.ok(
        is(grown.serialized, expected.serialized),
        `serialized equality: got "${grown.serialized}" instead of expected "${expected.serialized}"`
      );
      if (expected.validation !== undefined) {
        assert.ok(
          is(grown.validation, expected.validation),
          `validation equality: got "${grown.validation}" instead of expected "${expected.validation}"`
        );
      }
    }

    it('basic schema', function() {
      var schema = Mapping({
        x: Scalar({type: 'number', defaultValue: 1}),
        w: Scalar(),
      });

      itGrows(
        schema,
        {},
        {
          value: {x: 1},
          serialized: {x: 1},
          validation: ValidationResult.success()
        }
      );

      itGrows(
        schema,
        {x: 2},
        {
          value: {x: 2},
          serialized: {x: 2},
          validation: ValidationResult.success()
        }
      );

      itGrows(
        schema,
        {x: 2, w: 1},
        {
          value: {x: 2, w: 1},
          serialized: {x: 2, w: 1},
          validation: ValidationResult.success()
        }
      );

      itGrows(
        schema,
        {w: 1},
        {
          value: {x: 1, w: 1},
          serialized: {x: 1, w: 1},
          validation: ValidationResult.success()
        }
      );

      itGrows(
        schema,
        {x: 'x'},
        {
          value: {x: 'x'},
          serialized: {x: 'x'},
          validation: ValidationResult.children({x: ValidationResult.error('invalid value')})
        }
      );

    });

    it('schema with invalid default', function() {
      var schema = Mapping({
        x: Scalar({type: 'number', defaultValue: 'x'})
      });

      itGrows(
        schema,
        {},
        {
          value: {x: 'x'},
          serialized: {x: 'x'},
          validation: ValidationResult.children({x: ValidationResult.error('invalid value')})
        }
      );

      itGrows(
        schema,
        {x: 'y'},
        {
          value: {x: 'y'},
          serialized: {x: 'y'},
          validation: ValidationResult.children({x: ValidationResult.error('invalid value')})
        }
      );
    });

    it('nested schema with default', function() {
      var schema = Mapping({
        x: Mapping({y: Scalar({defaultValue: 1})})
      });

      itGrows(
        schema,
        {},
        {
          value: {},
          serialized: {},
        }
      );

      itGrows(
        schema,
        {x: {}},
        {
          value: {x: {y: 1}},
          serialized: {x: {y: 1}},
        }
      );

      itGrows(
        schema,
        {x: {y: 2}},
        {
          value: {x: {y: 2}},
          serialized: {x: {y: 2}},
        }
      );
    });

    it('nested schema with default on mapping', function() {
      var schema = Mapping({
        x: Mapping({defaultValue: {}}, {y: Scalar()})
      });

      itGrows(
        schema,
        {},
        {
          value: {x: {}},
          serialized: {x: {}},
        }
      );

      itGrows(
        schema,
        {x: {y: 1}},
        {
          value: {x: {y: 1}},
          serialized: {x: {y: 1}},
        }
      );

    });

    it('nested schema with rich default on mapping', function() {
      var schema = Mapping({
        x: Mapping({defaultValue: {y: 1}}, {y: Scalar()})
      });

      itGrows(
        schema,
        {},
        {
          value: {x: {y: 1}},
          serialized: {x: {y: 1}},
        }
      );

      itGrows(
        schema,
        {x: {}},
        {
          value: {x: {}},
          serialized: {x: {}},
        }
      );

      itGrows(
        schema,
        {x: {y: 2}},
        {
          value: {x: {y: 2}},
          serialized: {x: {y: 2}},
        }
      );

    });

    it('nested schema with default on mapping and scalar', function() {
      var schema = Mapping({
        x: Mapping({defaultValue: {}}, {
          y: Scalar({defaultValue: 1}),
          z: Scalar()
        })
      });

      itGrows(
        schema,
        {},
        {
          value: {x: {y: 1}},
          serialized: {x: {y: 1}},
        }
      );

      itGrows(
        schema,
        {x: {}},
        {
          value: {x: {y: 1}},
          serialized: {x: {y: 1}},
        }
      );

      itGrows(
        schema,
        {x: {z: 2}},
        {
          value: {x: {y: 1, z: 2}},
          serialized: {x: {y: 1, z: 2}},
        }
      );

      itGrows(
        schema,
        {x: {y: 2}},
        {
          value: {x: {y: 2}},
          serialized: {x: {y: 2}},
        }
      );

      itGrows(
        schema,
        {x: {y: 2, z: 3}},
        {
          value: {x: {y: 2, z: 3}},
          serialized: {x: {y: 2, z: 3}},
        }
      );

    });

    it('schema with default on mapping and scalar (pt. 2)', function() {
      var schema = Mapping({
        x: Mapping({defaultValue: {z: 2}}, {
          y: Scalar({defaultValue: 1}),
          z: Scalar()
        })
      });

      itGrows(
        schema,
        {},
        {
          value: {x: {y: 1, z: 2}},
          serialized: {x: {y: 1, z: 2}},
        }
      );

      itGrows(
        schema,
        {x: {}},
        {
          value: {x: {y: 1}},
          serialized: {x: {y: 1}},
        }
      );

      itGrows(
        schema,
        {x: {z: 2}},
        {
          value: {x: {y: 1, z: 2}},
          serialized: {x: {y: 1, z: 2}},
        }
      );

      itGrows(
        schema,
        {x: {y: 2}},
        {
          value: {x: {y: 2}},
          serialized: {x: {y: 2}},
        }
      );

      itGrows(
        schema,
        {x: {y: 2, z: 3}},
        {
          value: {x: {y: 2, z: 3}},
          serialized: {x: {y: 2, z: 3}},
        }
      );

    });

    it('mapping of list of mappings', function() {
      var schema = Mapping({
        x: List(Mapping({y: Scalar({defaultValue: 1})}))
      });

      itGrows(
        schema,
        {},
        {
          value: {},
          serialized: {},
        }
      );

      itGrows(
        schema,
        {x: []},
        {
          value: {x: []},
          serialized: {x: {}},
        }
      );

      itGrows(
        schema,
        {x: [{}]},
        {
          value: {x: [{y: 1}]},
          serialized: Map({x: Immutable.List([Map({y: 1})]).toMap()}),
        }
      );

      itGrows(
        schema,
        {x: [{y: 2}]},
        {
          value: {x: [{y: 2}]},
          serialized: Map({x: Immutable.List([Map({y: 2})]).toMap()}),
        }
      );

      itGrows(
        schema,
        {x: [{y: 2}, {}]},
        {
          value: {x: [{y: 2}, {y: 1}]},
          serialized: Map({x: Immutable.List([Map({y: 2}), Map({y: 1})]).toMap()}),
        }
      );
    });

    it('mapping of list of scalars', function() {
      var schema = Mapping({
        x: List({defaultValue: []}, Scalar())
      });

      itGrows(
        schema,
        {},
        {
          value: {x: []},
          serialized: Map({x: Map()})
        }
      );

      itGrows(
        schema,
        {x: []},
        {
          value: {x: []},
          serialized: Map({x: Map()}),
        }
      );

      itGrows(
        schema,
        {x: [1]},
        {
          value: {x: [1]},
          serialized: Map({x: Immutable.List([1]).toMap()}),
        }
      );

      itGrows(
        schema,
        {x: [1, 2]},
        {
          value: {x: [1, 2]},
          serialized: Map({x: Immutable.List([1, 2]).toMap()}),
        }
      );

    });

    it('mapping of list of scalars with default', function() {
      var schema = Mapping({
        x: List({defaultValue: [1]}, Scalar())
      });

      itGrows(
        schema,
        {},
        {
          value: {x: [1]},
          serialized: Map({x: Immutable.List([1]).toMap()}),
        }
      );

      itGrows(
        schema,
        {x: []},
        {
          value: {x: []},
          serialized: Map({x: Map()})
        }
      );

      itGrows(
        schema,
        {x: [1]},
        {
          value: {x: [1]},
          serialized: Map({x: Immutable.List([1]).toMap()}),
        }
      );

      itGrows(
        schema,
        {x: [1, 2]},
        {
          value: {x: [1, 2]},
          serialized: Map({x: Immutable.List([1, 2]).toMap()}),
        }
      );

    });

    it('mapping of list of scalars with default value', function() {
      var schema = Mapping({
        x: List({defaultValue: []}, Scalar({defaultValue: 1}))
      });

      itGrows(
        schema,
        {},
        {
          value: {x: []},
          serialized: Map({x: Map()})
        }
      );

      itGrows(
        schema,
        {x: []},
        {
          value: {x: []},
          serialized: Map({x: Map()})
        }
      );

      itGrows(
        schema,
        {x: [1]},
        {
          value: {x: [1]},
          serialized: Map({x: Immutable.List([1]).toMap()}),
        }
      );

      itGrows(
        schema,
        {x: [1, 2]},
        {
          value: {x: [1, 2]},
          serialized: Map({x: Immutable.List([1, 2]).toMap()}),
        }
      );

    });

    it('mapping of list of mappings with default value on scalar', function() {
      var schema = Mapping({
        x: List(Mapping({y: Scalar({defaultValue: 1})}))
      });

      itGrows(
        schema,
        {},
        {
          value: {},
          serialized: {},
        }
      );

      itGrows(
        schema,
        {x: []},
        {
          value: {x: []},
          serialized: Map({x: Map()})
        }
      );

      itGrows(
        schema,
        {x: [{}]},
        {
          value: {x: [{y: 1}]},
          serialized: Map({x: Map().set(0, Map({y: 1}))})
        }
      );

    });

    it('mapping of lust of mappings with default values on list and scalars', function() {
      var schema = Mapping({
        x: List({defaultValue: []}, Mapping({y: Scalar({defaultValue: 1})}))
      });

      itGrows(
        schema,
        {},
        {
          value: {x: []},
          serialized: Map({x: Map()})
        }
      );

      itGrows(
        schema,
        {x: []},
        {
          value: {x: []},
          serialized: Map({x: Map()})
        }
      );

      itGrows(
        schema,
        {x: [{}]},
        {
          value: {x: [{y: 1}]},
          serialized: Map({x: Map().set(0, Map({y: 1}))})
        }
      );

    });

    it('preserves data which was not described by schema', function() {

      var value;
      var updated;
      var onUpdate = emptyFunction;
      var root = () => value;

      var schema = Mapping({
        x: Scalar(),
        y: Scalar()
      });

      value = Value.create(schema, {x: 1, y: 2, z: 3}, onUpdate, root);
      assertEquals(value.value, {x: 1, y: 2, z: 3});
      var updated = value.get('x').set(42);
      assertEquals(updated.value, {x: 42, y: 2, z: 3});


      value = Value.create(schema, {x: 1, y: 2, z: {a: 1}}, onUpdate, root);
      assertEquals(value.value, {x: 1, y: 2, z: {a: 1}});
      var updated = value.get('x').set(42);
      assertEquals(updated.value, {x: 42, y: 2, z: {a: 1}});

    });

  });

  describe('Value.prototype.get(key):', function() {

    function itGets(schema, key, initial, expected) {
      initial = fromJS(initial);
      expected = {
        value: fromJS(expected.value),
        serialized: fromJS(expected.serialized),
        validation: expected.validation
      };
      var onUpdate = emptyFunction;
      var root = () => root;
      var value = Value.create(schema, initial, onUpdate, root);
      if (!Array.isArray(key)) {
        key = [key];
      }
      var got = value;
      for (var i = 0, len = key.length; i < len; i++) {
        got = got.get(key[i]);
      }
      assert.ok(
        is(got.value, expected.value),
        `value equality: got "${got.value}" instead of expected "${expected.value}"`
      );
      assert.ok(
        is(got.serialized, expected.serialized),
        `serialized equality: got "${got.serialized}" instead of expected "${expected.serialized}"`
      );
      if (expected.validation !== undefined) {
        assert.ok(
          is(got.validation, expected.validation),
          `validation equality: got "${got.validation}" instead of expected "${expected.validation}"`
        );
      }
    }

    it('throws informative error on trying to access field which does not exist', function() {
      var schema = Mapping({
        x: Scalar(),
        y: Scalar()
      });
      var value = Value.create(schema);
      assert.throws(function() {
        value.get('z');
      }, /Access to key "z" which does not exist in schema/);

    });

    it('schema1', function() {
      var schema = Mapping({
        x: Scalar({defaultValue: 1}),
        w: Scalar()
      });

      itGets(
        schema, 'x',
        {},
        {
          value: 1,
          serialized: 1,
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, 'w',
        {},
        {
          value: undefined,
          serialized: undefined,
          validation: ValidationResult.success()
        }
      );
    });

    it('schema2', function() {
      var schema = Mapping({
        x: Mapping({y: Scalar({defaultValue: 1})})
      });

      itGets(
        schema, 'x',
        {},
        {
          value: {},
          serialized: {},
          validation: ValidationResult.success()
        } 
      );

      itGets(
        schema, ['x', 'y'],
        {},
        {
          value: 1,
          serialized: 1,
          validation: ValidationResult.success()
        }
      );
    });

    it('schema3', function() {
      var schema = Mapping({
        x: Mapping({defaultValue: {}}, {y: Scalar()})
      });

      itGets(
        schema, ['x'],
        {},
        {
          value: {},
          serialized: {},
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, ['x', 'y'],
        {},
        {
          value: undefined,
          serialized: undefined,
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, ['x'],
        {x: {y: 2}},
        {
          value: {y: 2},
          serialized: {y: 2},
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, ['x', 'y'],
        {x: {y: 2}},
        {
          value: 2,
          serialized: 2,
          validation: ValidationResult.success()
        }
      );
    });

    it('validates', function() {
      var schema = Mapping({
        x: Mapping({
          y: Scalar({type: 'number', defaultValue: 'x'})
        })
      });

      itGets(
        schema, ['x'],
        {},
        {
          value: {},
          serialized: {},
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, ['x', 'y'],
        {},
        {
          value: 'x',
          serialized: 'x',
          validation: ValidationResult.error('invalid value')
        }
      );

    });

    it('schema2', function() {
      var schema = Mapping({
        x: Mapping({defaultValue: {y: 1}}, {y: Scalar()})
      });

      itGets(
        schema, ['x'],
        {},
        {
          value: {y: 1},
          serialized: {y: 1},
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, ['x', 'y'],
        {},
        {
          value: 1,
          serialized: 1,
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, ['x'],
        {x: {y: 2}},
        {
          value: {y: 2},
          serialized: {y: 2},
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, ['x', 'y'],
        {x: {y: 2}},
        {
          value: 2,
          serialized: 2,
          validation: ValidationResult.success()
        }
      );
    });

    it('schema3', function() {
      var schema = Mapping({
        x: Mapping({defaultValue: {}}, {
          y: Scalar({defaultValue: 1}),
          z: Scalar()
        })
      });

      itGets(
        schema, ['x'],
        {},
        {
          value: {y: 1},
          serialized: {y: 1},
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, ['x', 'y'],
        {},
        {
          value: 1,
          serialized: 1,
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, ['x'],
        {x: {y: 2}},
        {
          value: {y: 2},
          serialized: {y: 2},
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, ['x', 'y'],
        {x: {y: 2}},
        {
          value: 2,
          serialized: 2,
          validation: ValidationResult.success()
        }
      );
    });

    it('get schema3', function() {
      var schema = Mapping({
        x: Mapping({defaultValue: {z: 2}}, {
          y: Scalar({defaultValue: 1}),
          z: Scalar()
        })
      });

      itGets(
        schema, ['x'],
        {},
        {
          value: {z: 2, y: 1},
          serialized: {z: 2, y: 1},
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, ['x', 'z'],
        {},
        {
          value: 2,
          serialized: 2,
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, ['x', 'y'],
        {},
        {
          value: 1,
          serialized: 1,
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, ['x'],
        {x: {y: 2}},
        {
          value: {y: 2},
          serialized: {y: 2},
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, ['x', 'y'],
        {x: {y: 2}},
        {
          value: 2,
          serialized: 2,
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, ['x'],
        {x: {z: 3}},
        {
          value: {z: 3, y: 1},
          serialized: {z: 3, y: 1},
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, ['x', 'z'],
        {x: {z: 3}},
        {
          value: 3,
          serialized: 3,
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, ['x', 'y'],
        {x: {z: 3}},
        {
          value: 1,
          serialized: 1,
          validation: ValidationResult.success()
        }
      );

    });

    it('mapping of list of mappings (default on scalar inside mapping)', function() {
      var schema = Mapping({
        x: List(Mapping({y: Scalar({defaultValue: 1})}))
      });

      itGets(
        schema, ['x'],
        {},
        {
          value: [],
          serialized: Map(),
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, ['x'],
        {x: [{}]},
        {
          value: [{y: 1}],
          serialized: Map().set(0, Map({y: 1})),
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, ['x', 0],
        {x: [{}]},
        {
          value: {y: 1},
          serialized: {y: 1},
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, ['x', 0],
        {x: [{}]},
        {
          value: {y: 1},
          serialized: {y: 1},
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, ['x', 0],
        {x: [{y: 2}]},
        {
          value: {y: 2},
          serialized: {y: 2},
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, ['x', '0', 'y'],
        {x: [{}]},
        {
          value: 1,
          serialized: 1,
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, ['x', '0', 'y'],
        {x: [{y: 2}]},
        {
          value: 2,
          serialized: 2,
          validation: ValidationResult.success()
        }
      );
    });

    it('schema3', function() {
      var schema = Mapping({
        x: List({defaultValue: []}, Scalar())
      });

      itGets(
        schema, ['x'],
        {},
        {
          value: [],
          serialized: Map(),
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, ['x', '0'],
        {},
        {
          value: undefined,
          serialized: undefined,
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, ['x'],
        {x: ['1']},
        {
          value: ['1'],
          serialized: Map([[0, '1']]),
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, ['x', '0'],
        {x: ['1']},
        {
          value: '1',
          serialized: '1',
          validation: ValidationResult.success()
        }
      );

    });

    it('mapping of list of scalars (defaults on list)', function() {
      var schema = Mapping({
        x: List({defaultValue: [1]}, Scalar())
      });

      itGets(
        schema, ['x'],
        {},
        {
          value: [1],
          serialized: Map([[0, 1]]),
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, ['x', 0],
        {},
        {
          value: 1,
          serialized: 1,
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, ['x'],
        {x: [2]},
        {
          value: [2],
          serialized: Map([[0, 2]]),
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, ['x', '0'],
        {x: [2]},
        {
          value: 2,
          serialized: 2,
          validation: ValidationResult.success()
        }
      );
    });

    it('mapping of list of scalars (defaults on list and scalar)', function() {
      var schema = Mapping({
        x: List({defaultValue: []}, Scalar({defaultValue: 1}))
      });

      itGets(
        schema, ['x'],
        {},
        {
          value: [],
          serialized: {},
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, ['x', '0'],
        {},
        {
          value: 1,
          serialized: 1,
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, ['x'],
        {x: [2]},
        {
          value: [2],
          serialized: Map().set(0, 2),
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, ['x', '0'],
        {x: [2]},
        {
          value: 2,
          serialized: 2,
          validation: ValidationResult.success()
        }
      );
    });

    it('mapping of list of mappings', function() {
      var schema = Mapping({
        x: List(Mapping({y: Scalar({defaultValue: 1})}))
      });

      itGets(
        schema, ['x'],
        {},
        {
          value: [],
          serialized: {},
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, ['x', '0'],
        {},
        {
          value: {},
          serialized: {},
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, ['x', '0'],
        {x: []},
        {
          value: {},
          serialized: {},
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, ['x', '0'],
        {x: [{}]},
        {
          value: {y: 1},
          serialized: {},
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, ['x', '0', 'y'],
        {x: [{}]},
        {
          value: 1,
          serialized: 1,
          validation: ValidationResult.success()
        }
      );
    });

    it('mapping of list of mappings (default on lust and scalar of mapping)', function() {
      var schema = Mapping({
        x: List({defaultValue: [{}]},
          Mapping({
            y: Scalar({defaultValue: 1})
          }))
      });

      itGets(
        schema, ['x'],
        {},
        {
          value: [{y: 1}],
          serialized: Map().set(0, Map({y: 1})),
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, ['x', 0],
        {},
        {
          value: {y: 1},
          serialized: {y: 1},
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, ['x', 0],
        {x: []},
        {
          value: {},
          serialized: {},
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, ['x', 0],
        {x: [{}]},
        {
          value: {y: 1},
          serialized: {y: 1},
          validation: ValidationResult.success()
        }
      );

      itGets(
        schema, ['x', 0, 'y'],
        {x: [{}]},
        {
          value: 1,
          serialized: 1,
          validation: ValidationResult.success()
        }
      );
    });

  });

  describe('Value.prototype.keyPath:', function() {

    function assertKeyPath(value, keyPath) {
      assert.deepEqual(value.keyPath, keyPath);
    }

    it('reflects the path from the root to the value', function() {
      var schema = Mapping({x: Mapping({y: Mapping({z: Scalar()})})});
      var onUpdate = emptyFunction;
      var root = () => value;
      var value = Value.create(schema, undefined, onUpdate, root);
      assertKeyPath(value, []);
      assertKeyPath(value.get('x'), ['x']);
      assertKeyPath(value.get('x').get('y'), ['x', 'y']);
      assertKeyPath(value.get('x').get('y').get('z'), ['x', 'y', 'z']);
    });

  });

  describe('Value.prototype.root:', function() {

    it('returns the root value for the value', function() {
      var schema = Mapping({x: Mapping({y: Mapping({z: Scalar()})})});
      var root = () => value;
      var onUpdate = emptyFunction;
      var value = Value.create(schema, undefined, onUpdate, root);
      assertEquals(value.root, value);
      assertEquals(value.get('x').root, value);
      assertEquals(value.get('x').get('y').root, value);
      assertEquals(value.get('x').get('y').get('z').root, value);
    });

  });

  describe('Value.prototype.keys():', function() {

    it('returns an iterable of keys', function() {
      var schema = Mapping({
        x: List(Scalar()),
        y: Scalar(),
        z: Scalar()
      });
      var onUpdate = emptyFunction;
      var root = () => undefined;
      var value = Value.create(schema, {x: [1, 2, 3], y: 2, z: 3}, onUpdate, root);
      assertEquals(Iterable(value.keys()), ['x', 'y', 'z']);
      assertEquals(Iterable(value.get('x').keys()), [0, 1, 2]);
    });

  });


  describe('Value.prototype.map(func):', function() {

    it('maps value over a function to an array', function() {
      var schema = Mapping({
        x: List(Scalar()),
        y: Scalar(),
        z: Scalar()
      });
      var onUpdate = emptyFunction;
      var root = () => value;
      var value = Value.create(schema, {x: [1, 2, 3], y: 2, z: 3}, onUpdate, root);
      assertEquals(value.map(v => v.value), [[1, 2, 3], 2, 3]);
      assertEquals(value.get('x').map(v => v.value), [1, 2, 3]);
    });

  });

  describe('Value.prototype.set(value):', function() {

    function itUpdates(schema, initial, expected, updater) {
      initial = fromJS(initial);
      expected = {
        value: fromJS(expected.value),
        serialized: fromJS(expected.serialized),
        validation: expected.validation
      };
      var onUpdate = emptyFunction;
      var root = () => value;
      var value = Value.create(schema, initial, onUpdate, root);
      var updated = updater(value);
      assert.ok(
        is(updated.value, expected.value),
        `value equality: expected "${expected.value}" got "${updated.value}"`
      );
      assert.ok(
        is(updated.serialized, expected.serialized),
        `serialized equality: expected "${expected.serialized}" got "${updated.serialized}"`
      );
      if (expected.validation !== undefined) {
        assert.ok(
          is(updated.validation, expected.validation),
          `validation equality: expected "${expected.validation}" got "${updated.validation}"`
        );
      }
    }

    it('fires onUpdate callback', function() {
      var schema = Mapping({
        x: Mapping({
          y: Scalar({type: 'number', defaultValue: 1})
        })
      });

      var onUpdate = sinon.spy();
      var root = () => value;
      var value = Value.create(schema, undefined, onUpdate, root);
      var updated = value.get('x').get('y').set(42);
      assert.ok(onUpdate.callCount, 1);
      assertEquals(onUpdate.firstCall.args[0], updated);
      assert.deepEqual(onUpdate.firstCall.args[1], ['x', 'y'])
      assertEquals(onUpdate.firstCall.args[2], value);
    });

    it('updates nested mapping', function() {
      var schema = Mapping({
        x: Mapping({
          y: Scalar({type: 'number', defaultValue: 1})
        })
      });

      itUpdates(
        schema,
        {},
        {
          value: {x: {y: 2}},
          serialized: {x: {y: 2}},
          validation: ValidationResult.success()
        },
        (value) => value.getIn(['x', 'y']).set(2)
      );
      return;

      itUpdates(
        schema,
        {},
        {
          value: {x: {y: 'x'}},
          serialized: {x: {y :'x'}},
          validation: ValidationResult.children({
            x: ValidationResult.children({
              y: ValidationResult.error('invalid value')
            })
          })
        },
        (value) => value.getIn(['x', 'y']).set('x')
      );

      itUpdates(
        schema,
        {},
        {
          value: {x: {y: 3}},
          serialized: {x: {y: 3}},
          validation: ValidationResult.success()
        },
        (value) => value.getIn(['x']).set({y: 3})
      );

      itUpdates(
        schema,
        {},
        {
          value: {x: {y: 'x'}},
          serialized: {x: {y: 'x'}},
          validation: ValidationResult.children({
            x: ValidationResult.children({
              y: ValidationResult.error('invalid value')
            })
          })
        },
        (value) => value.getIn(['x']).set({y: 'x'})
      );

      itUpdates(
        schema,
        {},
        {
          value: {x: {y: 4}},
          serialized: {x: {y: 4}},
          validation: ValidationResult.success()
        },
        (value) => value.set({x: {y: 4}})
      );

      itUpdates(
        schema,
        {},
        {
          value: {x: {y: 'x'}},
          serialized: {x: {y: 'x'}},
          validation: ValidationResult.children({
            x: ValidationResult.children({
              y: ValidationResult.error('invalid value')
            })
          })
        },
        (value) => value.set({x: {y: 'x'}})
      );

    });

    it('updates nested mapping (no default)', function() {
      var schema = Mapping({
        x: List(Mapping({y: Scalar()}))
      });

      itUpdates(
        schema,
        {},
        {
          value: {x: []},
          serialized: {x: {}},
          validation: ValidationResult.success()
        },
        (value) => value.getIn(['x']).set([])
      );

      itUpdates(
        schema,
        {},
        {
          value: {x: [{y: 1}]},
          serialized: Map({x: Map().set(0, Map({y: 1}))}),
          validation: ValidationResult.success()
        },
        (value) => value.getIn(['x', 0]).set({y: 1})
      );

      itUpdates(
        schema,
        {},
        {
          value: {x: [{y: 3}]},
          serialized: Map({x: Map().set(0, Map({y: 3}))}),
          validation: ValidationResult.success()
        },
        (value) => value.getIn(['x', 0, 'y']).set(3)
      );
    });

    it('can be updated multiple times', function() {

      var schema = Mapping({
        x: Mapping({y: Scalar({defaultValue: 1})}),
        u: Mapping({v: Scalar({defaultValue: 2})})
      });
      var onUpdate = emptyFunction;
      var root = () => value;

      var value = Value.create(schema, undefined, onUpdate, root);
      value = value.getIn(['x', 'y']).set(3);
      assertEquals(value.value, {x: {y: 3}});
      value = value.getIn(['u', 'v']).set(4);
      assertEquals(value.value, {x: {y: 3}, u: {v: 4}});
      value = value.getIn(['u']).set({v: 12});
      assertEquals(value.value, {x: {y: 3}, u: {v: 12}});
      value = value.getIn(['x']).set({});
      assertEquals(value.value, {x: {y: 1}, u: {v: 12}});
      value = value.set({u: {}});
      assertEquals(value.value, {u: {v: 2}});
    });

    it('preserves structural equality across untouched areas', function() {
      var schema = Mapping({
        x: Mapping({y: Scalar({defaultValue: 1})}),
        v: Mapping({u: Scalar({defaultValue: 2})})
      });
      var onUpdate = emptyFunction;
      var root = () => value;
      var value = Value.create(schema, undefined, onUpdate, root);
      var updated = value.getIn(['x', 'y']).set(3);
      assertNotEquals(value, updated);
      assertNotEquals(value.get('x'), updated.get('x'));
      assertNotEquals(value.get('x').get('y'), updated.get('x').get('y'));
      assertEquals(value.get('v'), updated.get('v'));
      assertEquals(value.get('v').get('u'), updated.get('v').get('u'));
    });
  });

});

describe('Value with dynamic schema:', function() {

  class TextType extends MappingNode {

    get defaultValue() {
      return fromJS({type: 'text', pattern: 'x'});
    }

    getChildren() {
      return Map({
        type: Scalar({defaultValue: 'text'}),
        shared: Scalar({defaultValue: 'shared'}),
        pattern: Scalar()
      });
    }
  }

  class NumberType extends MappingNode {

    get defaultValue() {
      return fromJS({type: 'number'});
    }

    getChildren() {
      return Map({
        type: Scalar({defaultValue: 'number'}),
        shared: Scalar({defaultValue: 'shared'})
      });
    }
  }

  class Type extends Node {

    constructor(props) {
      super(props);
      this.textType = TextType.create();
      this.numberType = NumberType.create();
    }

    get defaultValue() {
      return this.textType.defaultValue;
    }

    instantiate(value) {
      var type = value ? value.get('type', 'text') : 'text';
      switch (type) {
        case 'text':
          return {node: this.textType, value};
        case 'number':
          return {node: this.numberType, value};
      }
    }
  }

  it('processes input on updates', function() {
    var schema = Mapping({
      value: Type.create()
    });
    var onUpdate = emptyFunction;
    var root = () => value;
    var value = Value.create(schema, undefined, onUpdate, root);
    assertEquals(value.value, {
      value: {
        type: 'text',
        pattern: 'x',
        shared: 'shared'
      }
    });
    var updated = value.get('value').get('type').set('number');
    assertEquals(updated.value, {
      value: {type: 'number', shared: 'shared'}
    });
  });

  it('preserves structural equality across untouched areas', function() {
    var schema = Mapping({
      value1: Type.create(),
      value2: Type.create()
    });
    var onUpdate = emptyFunction;
    var root = () => value;
    var value = Value.create(schema, undefined, onUpdate, root);
    assertEquals(value.value, {
      value1: {type: 'text', shared: 'shared', pattern: 'x'},
      value2: {type: 'text', shared: 'shared', pattern: 'x'}
    });
    var updated = value.get('value1').get('type').set('number');
    assertEquals(updated.value, {
      value1: {type: 'number', shared: 'shared'},
      value2: {type: 'text', shared: 'shared', pattern: 'x'}
    });
    assertNotEquals(value, updated);
    assertNotEquals(value.get('value1'), updated.get('value1'));
    assertNotEquals(value.get('value1').get('type'), updated.get('value1').get('type'));
    assertEquals(value.get('value1').get('shared'), updated.get('value1').get('shared'));
    assertEquals(value.get('value2'), updated.get('value2'));
  });

});

describe('Value with recursive schema:', function() {

  class TreeChildren extends CompositeNode {

    get defaultValue() {
      return Map();
    }

    keys(value) {
      return value.keys();
    }

    has(key) {
      return true;
    }

    get(key) {
      return treeNode;
    }
  }

  var treeNode = Mapping({
    value: Scalar({defaultValue: 'v'}),
    children: TreeChildren.create()
  });

  it('works', function() {
    var onUpdate = emptyFunction;
    var root = () => value;
    var value = Value.create(treeNode, undefined, onUpdate, root);
    assertEquals(value.value, {value: 'v', children: {}});
    assertEquals(value.get('value').value, 'v');
    assertEquals(value.get('children').get('x').value, {});
    assertEquals(value.get('children').get('x').get('value').value, 'v');
    assertEquals(value.get('children').get('x').get('children').value, {});
    assertEquals(value.get('children').get('x').get('children').get('y').value, {});
    value = value.get('children').get('x').get('children').get('y').get('value').set('x');
    assertEquals(value.value, {value: 'v', children: {x: {children: {y: {value: 'x'}}}}});
  });

});

describe('Value.prototype.validation', function() {

  var success = ValidationResult.success();

  function assertValidation(value, expected) {
    assertNotValid(value);
    assertEquals(value.validation, expected)
  }

  function assertValid(value) {
    assert.ok(value.isValid, `value "${value.value}" is not valid`);
  }

  function assertNotValid(value) {
    assert.ok(!value.isValid, `value "${value.value}" is valid`);
  }

  function create(schema, initial, attributes) {
    if (initial === undefined) {
      initial = Map();
    }
    if (attributes === undefined) {
      attributes = Map();
    }
    var onUpdate = emptyFunction;
    var root = () => value;
    var value = Value.create(schema, initial, onUpdate, root);
    return value;
  }

  class NumericScalarNode extends ScalarNode {

    validate(value) {
      var numeric = parseInt(value, 10);
      if (isNaN(numeric)) {
        return new Error('is not a number');
      }
    }

  }

  var NOT_NUMBER = new ValidationResult('is not a number');

  it('defines getter for attribute', function() {
      var schema = Mapping({
        x: NumericScalarNode.create({defaultValue: 1}),
        w: Scalar()
      });
    var onUpdate = emptyFunction;
    var root = () => value;
    var value = Value.create(schema, {x: 'x'}, onUpdate, root);
    assertNotValid(value);
    assertEquals(value.validation, value.attributes.get('validation'));
    assertEquals(value.validation, new ValidationResult(null, {x: NOT_NUMBER}));
  });

  describe('get', function() {

    it('propagates success', function() {
      var schema = Mapping({
        x: NumericScalarNode.create({defaultValue: 1}),
        w: Scalar()
      });

      var value = create(schema);
      assertValid(value);
      assertValid(value.get('x'));
      assertValid(value.get('w'));
    });

    it('propagates failure', function() {
      var schema = Mapping({
        x: NumericScalarNode.create({defaultValue: 1}),
        w: Scalar()
      });

      var value = create(schema, {x: 's'});
      assertValidation(value, new ValidationResult(null, Map({x: NOT_NUMBER})));
      assertValidation(value.get('x'), NOT_NUMBER);
      assertValid(value.get('w'));
    });

    it('propagates failure from default value', function() {
      var schema = Mapping({
        x: NumericScalarNode.create({defaultValue: 'x'}),
        w: Scalar()
      });

      var value = create(schema);
      assertValidation(value, new ValidationResult(null, Map({x: NOT_NUMBER})));
      assertValidation(value.get('x'), NOT_NUMBER);
      assertValid(value.get('w'));
    });

    it('validates on set', function() {
      var schema = Mapping({
        x: NumericScalarNode.create({defaultValue: 1}),
        w: Scalar()
      });

      var value = create(schema);
      var updated = value.get('x').set(2);
      assertValid(updated);
      assertValid(updated.get('x'));
      assertValid(updated.get('w'));
    });

    it('validates on set (invalid value)', function() {
      var schema = Mapping({
        x: NumericScalarNode.create({defaultValue: 1}),
        w: Scalar()
      });

      var value = create(schema);
      var updated = value.get('x').set('a');
      assertValidation(updated, new ValidationResult(null, Map({x: NOT_NUMBER})));
      assertValidation(updated.get('x'), NOT_NUMBER);
      assertValid(updated.get('w'));

      var updated2 = updated.get('x').set(3);
      assertValid(updated2);
      assertValid(updated2.get('x'));
      assertValid(updated2.get('w'));
    });

    it('validates on root set (invalid value)', function() {
      var schema = Mapping({
        x: NumericScalarNode.create({defaultValue: 1}),
        w: Scalar()
      });

      var value = create(schema);
      var updated = value.set({x: 'a'});
      assertValidation(updated, new ValidationResult(null, Map({x: NOT_NUMBER})));
      assertValidation(updated.get('x'), NOT_NUMBER);
      assertValid(updated.get('w'));

      var updated2 = updated.set({x: 2});
      assertValid(updated2);
      assertValid(updated2.get('x'));
      assertValid(updated2.get('w'));
    });

    it('propagates success (nested schemas)', function() {
      var schema = Mapping({
        x: Mapping({defaultValue: {}}, {
          y: Scalar({defaultValue: 1}),
          z: Scalar()
        })
      });
      var value = create(schema);
      assertValid(value);
      assertValid(value.get('x'));
      assertValid(value.getIn(['x', 'y']));
    });

    it('propagates failure (nested schemas)', function() {
      var schema = Mapping({
        x: Mapping({defaultValue: {}}, {
          y: NumericScalarNode.create({defaultValue: 1}),
          z: Scalar()
        })
      });
      var value = create(schema, {x: {y: 'x'}});
      assertValidation(value, new ValidationResult(null, {x: new ValidationResult(null, {y: NOT_NUMBER})}));
      assertValidation(value.get('x'), new ValidationResult(null, {y: NOT_NUMBER}));
      assertValidation(value.getIn(['x', 'y']), NOT_NUMBER);
    });

    it('propagates failure from default value (nested schemas)', function() {
      var schema = Mapping({
        x: Mapping({defaultValue: {}}, {
          y: NumericScalarNode.create({defaultValue: 'x'}),
          z: Scalar()
        })
      });
      var value = create(schema);
      assertValidation(value, new ValidationResult(null, {x: new ValidationResult(null, {y: NOT_NUMBER})}));
      assertValidation(value.get('x'), new ValidationResult(null, {y: NOT_NUMBER}));
      assertValidation(value.getIn(['x', 'y']), NOT_NUMBER);
    });

    it('validates on set (nested schema)', function() {
      var schema = Mapping({
        x: Mapping({defaultValue: {}}, {
          y: Scalar({defaultValue: 1}),
          z: Scalar()
        })
      });
      var value = create(schema);
      var updated = value.getIn(['x', 'y']).set(2);
      assertValid(updated);
      assertValid(updated.get('x'));
      assertValid(updated.getIn(['x', 'y']));
    });

    it('validates on set (invalid value, nested schema)', function() {
      var schema = Mapping({
        x: Mapping({defaultValue: {}}, {
          y: NumericScalarNode.create({defaultValue: 1}),
          z: Scalar()
        })
      });
      var value = create(schema);
      var updated = value.getIn(['x', 'y']).set('x');
      assertValidation(updated, new ValidationResult(null, {x: new ValidationResult(null, {y: NOT_NUMBER})}));
      assertValidation(updated.get('x'), new ValidationResult(null, {y: NOT_NUMBER}));
      assertValidation(updated.getIn(['x', 'y']), NOT_NUMBER);

      var updated2 = updated.getIn(['x', 'y']).set(3);
      assertValid(updated2);
      assertValid(updated2.get('x'));
      assertValid(updated2.getIn(['x', 'y']));
    });

    it('validates on intermedate value set (invalid value, nested schema)', function() {
      var schema = Mapping({
        x: Mapping({defaultValue: {}}, {
          y: NumericScalarNode.create({defaultValue: 1}),
          z: Scalar()
        })
      });
      var value = create(schema);
      var updated = value.get('x').set({y: 'x'});
      assertValidation(updated, new ValidationResult(null, {x: new ValidationResult(null, {y: NOT_NUMBER})}));
      assertValidation(updated.get('x'), new ValidationResult(null, {y: NOT_NUMBER}));
      assertValidation(updated.getIn(['x', 'y']), NOT_NUMBER);

      var updated2 = updated.get('x').set({y: 3});
      assertValid(updated2);
      assertValid(updated2.get('x'));
      assertValid(updated2.getIn(['x', 'y']));
    });

    it('does not validate undefined values', function() {
      function validate(node, value) {
        if (!/^aaa$/.exec(value)) {
          return new Error('invalid value');
        }
      }
      var value;
      var schema = Mapping({x: Scalar({validate})});
      var onUpdate = emptyFunction;
      var root = () => value;

      value = Value.create(schema, undefined, onUpdate, root);
      assertValid(value);
      assertValid(value.get('x'));

      value = Value.create(schema, {}, onUpdate, root);
      assertValid(value);
      assertValid(value.get('x'));

      value = Value.create(schema, {x: null}, onUpdate, root);
      assertValid(value);
      assertValid(value.get('x'));

      value = Value.create(schema, {x: undefined}, onUpdate, root);
      assertValid(value);
      assertValid(value.get('x'));

      value = Value.create(schema, {x: ''}, onUpdate, root);
      assertValid(value);
      assertValid(value.get('x'));

      value = Value.create(schema, {x: 'bbb'}, onUpdate, root);
      assertNotValid(value);
      assertNotValid(value.get('x'));

      value = Value.create(schema, {x: 'aaa'}, onUpdate, root);
      assertValid(value);
      assertValid(value.get('x'));
    });

    it('validates mappings with required keys', function() {
      var value;
      var schema = Mapping({
        x: Scalar({required: true}),
        y: Scalar({type: 'number'})
      });
      var onUpdate = emptyFunction;
      var root = () => value;

      value = Value.create(schema, undefined, onUpdate, root);
      assertNotValid(value);
      assertNotValid(value.get('x'));
      assertValid(value.get('y'));

      value = value.get('y').set('x');
      assertNotValid(value);
      assertNotValid(value.get('x'));
      assertNotValid(value.get('y'));

      value = value.get('x').set('zzz');
      assertNotValid(value);
      assertValid(value.get('x'));
      assertNotValid(value.get('y'));

      value = value.get('y').set(123);
      assertValid(value);
      assertValid(value.get('x'));
      assertValid(value.get('y'));

      value = value.get('x').set(undefined);
      assertNotValid(value);
      assertNotValid(value.get('x'));
      assertValid(value.get('y'));
    });

  });

  it('works with scalar schema', function() {
    var schema = NumericScalarNode.create();
    var value;

    value = create(schema, 1);
    assertValid(value);

    value = create(schema, -1);
    assertValid(value);

    value = create(schema, 'a');
    assertNotValid(value);
  });

});

describe('Value.prototype.dirty', function() {

  function assertNotDirty(value) {
    assert.ok(!value.isDirty, 'value is dirty');
  }

  function assertDirty(value) {
    assert.ok(value.isDirty, 'value is not dirty');
  }

  var schema = Mapping({
    x: Mapping({y: Scalar()}),
    z: Scalar()
  });

  it('is not dirty initially', function() {
    var value = Value.create(schema);
    assertNotDirty(value);
  });

  it('can be made dirty/not-dirty', function() {
    var onUpdate = emptyFunction;
    var root = () => value;
    var value = Value.create(schema, undefined, onUpdate, root);
    value = value.makeDirty();
    assertDirty(value);
    value = value.makeNotDirty();
    assertNotDirty(value);
  });

  it('propagates dirtyness for children', function() {
    var onUpdate = emptyFunction;
    var root = () => value;
    var value = Value.create(schema, undefined, onUpdate, root);
    value = value.makeDirty();
    assertDirty(value);
    assertDirty(value.get('x'));
    assertDirty(value.get('x').get('y'));
    assertDirty(value.get('z'));
    value = value.makeNotDirty();
    assertNotDirty(value);
    assertNotDirty(value.get('x'));
    assertNotDirty(value.get('x').get('y'));
    assertNotDirty(value.get('z'));
  });

  it('can be made dirty/not-dirty for the leafs', function() {
    var onUpdate = emptyFunction;
    var root = () => value;
    var value = Value.create(schema, undefined, onUpdate, root);
    value = value.get('x').get('y').makeDirty();
    assertNotDirty(value);
    assertNotDirty(value.get('x'));
    assertDirty(value.get('x').get('y'));
    assertNotDirty(value.get('z'));
    value = value.get('x').get('y').makeNotDirty();
    assertNotDirty(value);
    assertNotDirty(value.get('x'));
    assertNotDirty(value.get('x').get('y'));
    assertNotDirty(value.get('z'));
  });

  it('can be made dirty/not-dirty for the intermediate children', function() {
    var onUpdate = emptyFunction;
    var root = () => value;
    var value = Value.create(schema, undefined, onUpdate, root);
    value = value.get('x').makeDirty();
    assertNotDirty(value);
    assertDirty(value.get('x'));
    assertDirty(value.get('x').get('y'));
    assertNotDirty(value.get('z'));
    value = value.get('x').makeNotDirty();
    assertNotDirty(value);
    assertNotDirty(value.get('x'));
    assertNotDirty(value.get('x').get('y'));
    assertNotDirty(value.get('z'));
  });

  it('merges dirty attribute on updates', function() {
    var onUpdate = emptyFunction;
    var root = () => value;
    var value = Value.create(schema, undefined, onUpdate, root);
    value = value.get('x').makeDirty();
    assertNotDirty(value);
    assertDirty(value.get('x'));
    assertDirty(value.get('x').get('y'));
    assertNotDirty(value.get('z'));
    value = value.get('z').makeDirty();
    assertNotDirty(value);
    assertDirty(value.get('x'));
    assertDirty(value.get('x').get('y'));
    assertDirty(value.get('z'));
    value = value.get('x').makeNotDirty();
    assertNotDirty(value);
    assertNotDirty(value.get('x'));
    assertNotDirty(value.get('x').get('y'));
    assertDirty(value.get('z'));
    value = value.get('z').makeNotDirty();
    assertNotDirty(value);
    assertNotDirty(value.get('x'));
    assertNotDirty(value.get('x').get('y'));
    assertNotDirty(value.get('z'));
  });

});
