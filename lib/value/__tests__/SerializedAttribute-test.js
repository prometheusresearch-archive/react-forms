'use strict';

var assert = require('assert');
var {Map, fromJS, is} = require('immutable');
var {Scalar, Mapping, List} = require('../schema');
var SerializedAttribute = require('../SerializedAttribute');
var defineValue = require('../defineValue');

function assertEquals(a, b) {
  a = fromJS(a);
  b = fromJS(b);
  assert.ok(is(a, b), `expected ${a} to be equal to ${b}`);
}

class Value extends defineValue(new SerializedAttribute('serialized')) {

}

var schema = Mapping({
  x: Mapping({
    y: Scalar()
  }),
  z: Scalar()
});

describe('Value with SerializedAttribute:', function() {

  it('computes value on get(key)', function() {
    var value = Value.create(schema);
    assertEquals(value.serialized, {});
    assertEquals(value.get('x').serialized, {});
    assertEquals(value.get('x').get('y').serialized, '');
    assertEquals(value.get('z').serialized, '');
  });

  it('sets value with and mirrors value structure on setSerialized(value)', function() {
    var value = Value.create(schema);
    assertEquals(value.serialized, {});
    value = value.get('z').setSerialized('zattr').root;
    assertEquals(value.serialized, {z: 'zattr'});
    value = value.get('x').get('y').setSerialized('yattr').root;
    assertEquals(value.serialized, {z: 'zattr', x: {y: 'yattr'}});
  });

});

