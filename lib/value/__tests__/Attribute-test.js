'use strict';

var assert = require('assert');
var {Map, fromJS, is} = require('immutable');
var {Scalar, Mapping, List} = require('../schema');
var Attribute = require('../Attribute');
var defineValue = require('../defineValue');

function assertEquals(a, b) {
  a = fromJS(a);
  b = fromJS(b);
  assert.ok(is(a, b), `expected ${a} to be equal to ${b}`);
}

class Value extends defineValue(new Attribute('attr')) {

}

var schema = Mapping({
  x: Mapping({y: Scalar()}),
  z: Scalar()
});

describe('Value with Attribute:', function() {

  it('computes value on get(key)', function() {
    var value = Value.create(schema);
    assertEquals(value.attr, {});
    assertEquals(value.get('x').attr, {});
    assertEquals(value.get('x').get('y').attr, {});
    assertEquals(value.get('z').attr, {});
  });

  it('sets value with and mirrors value structure on setAttr(value)', function() {
    var value = Value.create(schema);
    assertEquals(value.attr, {});
    value = value.get('z').setAttr('zattr').root;
    assertEquals(value.attr, {z: 'zattr'});
    value = value.get('x').get('y').setAttr('yattr').root;
    assertEquals(value.attr, {z: 'zattr', x: {y: 'yattr'}});
  });

});
