'use strict';

var assert = require('assert');
var {fromJS, is} = require('immutable');
var Value = require('../Value');
var {Scalar, Mapping, List} = require('../schema');

describe('Value:', function() {

  function assertEquals(a, b) {
    a = fromJS(a);
    b = fromJS(b);
    assert.ok(is(a, b), `expected ${a} to be equal to ${b}`);
  }

  describe('Value.prototype.setInputValue', function() {

    var schema = Mapping({
      x: Mapping({y: Scalar({type: 'number'})}),
      z: Scalar({type: 'number'})
    });

    it('updates value by deserializing from serialized attribute', function() {
      var value = Value.create(schema);
      assertEquals(value.value, {});
      assertEquals(value.serialized, {});
      value = value.get('x').get('y').setInputValue('42').root;
      assertEquals(value.value, {x: {y: 42}});
      assertEquals(value.serialized, {x: {y: '42'}});
      value = value.get('z').setInputValue('101').root;
      assertEquals(value.value, {z: 101, x: {y: 42}});
      assertEquals(value.serialized, {z: '101', x: {y: '42'}});

      assert.ok(value.isValid);
      assert.ok(value.get('x').isValid);
      assert.ok(value.get('x').get('y').isValid);
      assert.ok(value.get('z').isValid);
    });

    it('updates validation failure due to deserialization', function() {
      var value = Value.create(schema);
      value = value.get('x').get('y').setInputValue('x').root;
      assertEquals(value.value, {x: {y: 'x'}});
      assertEquals(value.serialized, {x: {y: 'x'}});
      assert.ok(!value.isValid);
      assert.ok(!value.get('x').isValid);
      assert.ok(!value.get('x').get('y').isValid);
      assert.ok(value.get('z').isValid);
    });

  });

});
