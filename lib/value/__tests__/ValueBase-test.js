'use strict';

var assert = require('assert');
var {Iterable, Map, Record, fromJS, is} = require('immutable');
var ValueBase = require('../ValueBase');
var {Scalar, ScalarNode, Mapping, MappingNode, List, Node, CompositeNode} = require('../schema');

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

describe('ValueBase:', function() {

  describe('ValueBase.create(schema, initial):', function() {

    function itGrows(schema, initial, expected) {
      initial = fromJS(initial);
      expected = fromJS(expected);
      var grown = ValueBase.create(schema, initial);
      assert.ok(
        is(grown.value, expected),
        `got "${grown.value}" instead of expected "${expected}"`
      );
    }

    it('schema1', function() {
      var schema = Mapping({
        x: Scalar({defaultValue: 1}),
        w: Scalar()
      });

      itGrows(
        schema,
        {},
        {x: 1}
      );

      itGrows(
        schema,
        {x: 2},
        {x: 2}
      );

      itGrows(
        schema,
        {x: 2, w: 1},
        {x: 2, w: 1}
      );

      itGrows(
        schema,
        {w: 1},
        {x: 1, w: 1}
      );
    });

    it('schema2', function() {
      var schema = Mapping({
        x: Mapping({y: Scalar({defaultValue: 1})})
      });

      itGrows(
        schema,
        {},
        {}
      );

      itGrows(
        schema,
        {x: {}},
        {x: {y: 1}}
      );

      itGrows(
        schema,
        {x: {y: 2}},
        {x: {y: 2}}
      );
    });

    it('schema3', function() {
      var schema = Mapping({
        x: Mapping({defaultValue: {}}, {y: Scalar()})
      });

      itGrows(
        schema,
        {},
        {x: {}}
      );

      itGrows(
        schema,
        {x: {y: 1}},
        {x: {y: 1}}
      );

    });

    it('schema2112', function() {
      var schema = Mapping({
        x: Mapping({defaultValue: {y: 1}}, {y: Scalar()})
      });

      itGrows(
        schema,
        {},
        {x: {y: 1}}
      );

      itGrows(
        schema,
        {x: {}},
        {x: {}}
      );

      itGrows(
        schema,
        {x: {y: 2}},
        {x: {y: 2}}
      );

    });

    it('schema3', function() {
      var schema = Mapping({
        x: Mapping({defaultValue: {}}, {
          y: Scalar({defaultValue: 1}),
          z: Scalar()
        })
      });

      itGrows(
        schema,
        {},
        {x: {y: 1}}
      );

      itGrows(
        schema,
        {x: {}},
        {x: {y: 1}}
      );

      itGrows(
        schema,
        {x: {z: 2}},
        {x: {y: 1, z: 2}}
      );

      itGrows(
        schema,
        {x: {y: 2}},
        {x: {y: 2}}
      );

      itGrows(
        schema,
        {x: {y: 2, z: 3}},
        {x: {y: 2, z: 3}}
      );

    });

    it('schema3', function() {
      var schema = Mapping({
        x: Mapping({defaultValue: {z: 2}}, {
          y: Scalar({defaultValue: 1}),
          z: Scalar()
        })
      });

      itGrows(
        schema,
        {},
        {x: {y: 1, z: 2}}
      );

      itGrows(
        schema,
        {x: {}},
        {x: {y: 1}}
      );

      itGrows(
        schema,
        {x: {z: 2}},
        {x: {y: 1, z: 2}}
      );

      itGrows(
        schema,
        {x: {y: 2}},
        {x: {y: 2}}
      );

      itGrows(
        schema,
        {x: {y: 2, z: 3}},
        {x: {y: 2, z: 3}}
      );

    });

    it('schema2xx', function() {
      var schema = Mapping({
        x: List(Mapping({y: Scalar({defaultValue: 1})}))
      });

      itGrows(
        schema,
        {},
        {}
      );

      itGrows(
        schema,
        {x: []},
        {x: []}
      );

      itGrows(
        schema,
        {x: [{}]},
        {x: [{y: 1}]}
      );

      itGrows(
        schema,
        {x: [{y: 2}]},
        {x: [{y: 2}]}
      );

      itGrows(
        schema,
        {x: [{y: 2}, {}]},
        {x: [{y: 2}, {y: 1}]}
      );
    });

    it('schema3', function() {
      var schema = Mapping({
        x: List({defaultValue: []}, Scalar())
      });

      itGrows(
        schema,
        {},
        {x: []}
      );

      itGrows(
        schema,
        {x: []},
        {x: []}
      );

      itGrows(
        schema,
        {x: [1]},
        {x: [1]}
      );

      itGrows(
        schema,
        {x: [1, 2]},
        {x: [1, 2]}
      );

    });

    it('schema3', function() {
      var schema = Mapping({
        x: List({defaultValue: [1]}, Scalar())
      });

      itGrows(
        schema,
        {},
        {x: [1]}
      );

      itGrows(
        schema,
        {x: []},
        {x: []}
      );

      itGrows(
        schema,
        {x: [1]},
        {x: [1]}
      );

      itGrows(
        schema,
        {x: [1, 2]},
        {x: [1, 2]}
      );

    });

    it('schema3', function() {
      var schema = Mapping({
        x: List({defaultValue: []}, Scalar({defaultValue: 1}))
      });

      itGrows(
        schema,
        {},
        {x: []}
      );

      itGrows(
        schema,
        {x: []},
        {x: []}
      );

      itGrows(
        schema,
        {x: [1]},
        {x: [1]}
      );

      itGrows(
        schema,
        {x: [1, 2]},
        {x: [1, 2]}
      );

    });

    it('schema3', function() {
      var schema = Mapping({
        x: List(Mapping({y: Scalar({defaultValue: 1})}))
      });

      itGrows(
        schema,
        {},
        {}
      );

      itGrows(
        schema,
        {x: []},
        {x: []}
      );

      itGrows(
        schema,
        {x: [{}]},
        {x: [{y: 1}]}
      );

    });

    it('schema3', function() {
      var schema = Mapping({
        x: List({defaultValue: []}, Mapping({y: Scalar({defaultValue: 1})}))
      });

      itGrows(
        schema,
        {},
        {x: []}
      );

      itGrows(
        schema,
        {x: []},
        {x: []}
      );

      itGrows(
        schema,
        {x: [{}]},
        {x: [{y: 1}]}
      );

    });

  });

  describe('ValueBase.prototype.get(key):', function() {

    function itGets(schema, key, initial, expected) {
      initial = fromJS(initial);
      expected = fromJS(expected);
      var value = new ValueBase(null, null, schema, schema, initial, Map());
      if (!Array.isArray(key)) {
        key = [key];
      }
      var got = value;
      for (var i = 0, len = key.length; i < len; i++) {
        got = got.get(key[i]);
      }
      assert.ok(
        is(got.value, expected),
        `expected "${expected}" got "${got.value}"`
      );
    }

    it('schema1', function() {
      var schema = Mapping({
        x: Scalar({defaultValue: 1}),
        w: Scalar()
      });

      itGets(
        schema, 'x',
        {},
        1
      );

      itGets(
        schema, 'w',
        {},
        undefined
      );
    });

    it('schema2', function() {
      var schema = Mapping({
        x: Mapping({y: Scalar({defaultValue: 1})})
      });

      itGets(
        schema, 'x',
        {},
        {}
      );

      itGets(
        schema, ['x', 'y'],
        {},
        1
      );
    });

    it('schema3', function() {
      var schema = Mapping({
        x: Mapping({defaultValue: {}}, {y: Scalar()})
      });

      itGets(
        schema, ['x'],
        {},
        {}
      );

      itGets(
        schema, ['x', 'y'],
        {},
        undefined
      );

      itGets(
        schema, ['x'],
        {x: {y: 2}},
        {y: 2}
      );

      itGets(
        schema, ['x', 'y'],
        {x: {y: 2}},
        2
      );
    });

    it('schema2', function() {
      var schema = Mapping({
        x: Mapping({defaultValue: {y: 1}}, {y: Scalar()})
      });

      itGets(
        schema, ['x'],
        {},
        {y: 1}
      );

      itGets(
        schema, ['x', 'y'],
        {},
        1
      );

      itGets(
        schema, ['x'],
        {x: {y: 2}},
        {y: 2}
      );

      itGets(
        schema, ['x', 'y'],
        {x: {y: 2}},
        2
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
        {}
      );

      itGets(
        schema, ['x', 'y'],
        {},
        1
      );

      itGets(
        schema, ['x'],
        {x: {y: 2}},
        {y: 2}
      );

      itGets(
        schema, ['x', 'y'],
        {x: {y: 2}},
        2
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
        {z: 2}
      );

      itGets(
        schema, ['x', 'z'],
        {},
        2
      );

      itGets(
        schema, ['x', 'y'],
        {},
        1
      );

      itGets(
        schema, ['x'],
        {x: {y: 2}},
        {y: 2}
      );

      itGets(
        schema, ['x', 'y'],
        {x: {y: 2}},
        2
      );

      itGets(
        schema, ['x'],
        {x: {z: 3}},
        {z: 3}
      );

      itGets(
        schema, ['x', 'z'],
        {x: {z: 3}},
        3
      );

      itGets(
        schema, ['x', 'y'],
        {x: {z: 3}},
        1
      );

    });

    it.skip('schema2', function() {
      var schema = Mapping({
        x: List(Mapping({y: Scalar({defaultValue: 1})}))
      });
    });

    it.skip('schema3', function() {
      var schema = Mapping({
        x: List({defaultValue: []}, Scalar())
      });
    });

    it.skip('schema3', function() {
      var schema = Mapping({
        x: List({defaultValue: [1]}, Scalar())
      });
    });

    it.skip('schema3', function() {
      var schema = Mapping({
        x: List({defaultValue: []}, Scalar({defaultValue: 1}))
      });
    });

    it.skip('schema3', function() {
      var schema = Mapping({
        x: List(Mapping({y: Scalar({defaultValue: 1})}))
      });
    });

    it.skip('schema3', function() {
      var schema = Mapping({
        x: List({defaultValue: []}, Mapping({y: Scalar({defaultValue: 1})}))
      });
    });

  });

  describe('ValueBase.prototype.keyPath:', function() {

    function assertKeyPath(value, keyPath) {
      assert.deepEqual(value.keyPath, keyPath);
    }

    it('reflects the path from the root to the value', function() {
      var schema = Mapping({x: Mapping({y: Mapping({z: Scalar()})})});
      var value = ValueBase.create(schema);
      assertKeyPath(value, []);
      assertKeyPath(value.get('x'), ['x']);
      assertKeyPath(value.get('x').get('y'), ['x', 'y']);
      assertKeyPath(value.get('x').get('y').get('z'), ['x', 'y', 'z']);
    });

  });

  describe('ValueBase.prototype.root:', function() {

    it('returns the root value for the value', function() {
      var schema = Mapping({x: Mapping({y: Mapping({z: Scalar()})})});
      var value = ValueBase.create(schema);
      assertEquals(value.root, value);
      assertEquals(value.get('x').root, value);
      assertEquals(value.get('x').get('y').root, value);
      assertEquals(value.get('x').get('y').get('z').root, value);
    });

  });

  describe('ValueBase.prototype.keys():', function() {

    it('returns an iterable of keys', function() {
      var schema = Mapping({
        x: List(Scalar()),
        y: Scalar(),
        z: Scalar()
      });
      var value = ValueBase.create(schema, {x: [1, 2, 3], y: 2, z: 3});
      assertEquals(Iterable(value.keys()), ['x', 'y', 'z']);
      assertEquals(Iterable(value.get('x').keys()), [0, 1, 2]);
    });

  });


  describe('ValueBase.prototype.map(func):', function() {

    it('maps value over a function to an array', function() {
      var schema = Mapping({
        x: List(Scalar()),
        y: Scalar(),
        z: Scalar()
      });
      var value = ValueBase.create(schema, {x: [1, 2, 3], y: 2, z: 3});
      assertEquals(value.map(v => v.value), [[1, 2, 3], 2, 3]);
      assertEquals(value.get('x').map(v => v.value), [1, 2, 3]);
    });

  });

  describe('ValueBase.prototype.set(value):', function() {

    function itUpdates(schema, initial, expected, updater) {
      initial = fromJS(initial);
      expected = fromJS(expected);
      var value = new ValueBase(null, null, schema, schema, initial, Map());
      var updated = updater(value).root;
      assert.ok(
        is(updated.value, expected),
        `expected "${expected}" got "${updated.value}"`
      );
    }

    it('updates nested mapping', function() {
      var schema = Mapping({
        x: Mapping({y: Scalar({defaultValue: 1})})
      });

      itUpdates(
        schema,
        {},
        {x: {y: 2}},
        (value) => value.getIn(['x', 'y']).set(2)
      );

      itUpdates(
        schema,
        {},
        {x: {y: 3}},
        (value) => value.getIn(['x']).set({y: 3})
      );

      itUpdates(
        schema,
        {},
        {x: {y: 4}},
        (value) => value.set({x: {y: 4}})
      );
    });

    it('can be updated multiple times', function() {

      var schema = Mapping({
        x: Mapping({y: Scalar({defaultValue: 1})}),
        u: Mapping({v: Scalar({defaultValue: 2})})
      });

      var value = ValueBase.create(schema);
      value = value.getIn(['x', 'y']).set(3).root;
      assertEquals(value.value, {x: {y: 3}});
      value = value.getIn(['u', 'v']).set(4).root;
      assertEquals(value.value, {x: {y: 3}, u: {v: 4}});
      value = value.getIn(['u']).set({v: 12}).root;
      assertEquals(value.value, {x: {y: 3}, u: {v: 12}});
      value = value.getIn(['x']).set({}).root;
      assertEquals(value.value, {x: {y: 1}, u: {v: 12}});
      value = value.set({u: {}}).root;
      assertEquals(value.value, {u: {v: 2}});
    });

    it('preserves structural equality across untouched areas', function() {
      var schema = Mapping({
        x: Mapping({y: Scalar({defaultValue: 1})}),
        v: Mapping({u: Scalar({defaultValue: 2})})
      });
      var value = ValueBase.create(schema);
      var updated = value.getIn(['x', 'y']).set(3).root;
      assertNotEquals(value, updated);
      assertNotEquals(value.get('x'), updated.get('x'));
      assertNotEquals(value.get('x').get('y'), updated.get('x').get('y'));
      assertEquals(value.get('v'), updated.get('v'));
      assertEquals(value.get('v').get('u'), updated.get('v').get('u'));
    });
  });

});

describe('ValueBase with dynamic schema:', function() {

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
          return this.textType;
        case 'number':
          return this.numberType;
      }
    }
  }

  it('processes input on updates', function() {
    var schema = Mapping({
      value: Type.create()
    });
    var value = ValueBase.create(schema);
    assertEquals(value.value, {value: {type: 'text', pattern: 'x', shared: 'shared'}});
    var updated = value.get('value').get('type').set('number').root;
    assertEquals(updated.value, {value: {type: 'number', shared: 'shared'}});
  });

  it('preserves structural equality across untouched areas', function() {
    var schema = Mapping({
      value1: Type.create(),
      value2: Type.create()
    });
    var value = ValueBase.create(schema);
    assertEquals(value.value, {
      value1: {type: 'text', shared: 'shared', pattern: 'x'},
      value2: {type: 'text', shared: 'shared', pattern: 'x'}
    });
    var updated = value.get('value1').get('type').set('number').root;
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

describe('ValueBase with recursive schema:', function() {

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
    var value = ValueBase.create(treeNode);
    assertEquals(value.value, {value: 'v', children: {}});
    assertEquals(value.get('value').value, 'v');
    assertEquals(value.get('children').get('x').value, {});
    assertEquals(value.get('children').get('x').get('value').value, 'v');
    assertEquals(value.get('children').get('x').get('children').value, {});
    assertEquals(value.get('children').get('x').get('children').get('y').value, {});
    value = value.get('children').get('x').get('children').get('y').get('value').set('x').root;
    assertEquals(value.value, {value: 'v', children: {x: {children: {y: {value: 'x'}}}}});
  });

});
