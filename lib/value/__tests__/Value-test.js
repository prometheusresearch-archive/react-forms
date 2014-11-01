'use strict';

var assert = require('assert');
var {fromJS, is} = require('immutable');
var Value = require('../Value');
var {Scalar, Mapping, List} = require('../schema');
var types = require('../../types');

describe('Value:', function() {

  function assertEquals(a, b) {
    a = fromJS(a);
    b = fromJS(b);
    assert.ok(is(a, b), `expected ${a} to be equal to ${b}`);
  }

  describe('Value.prototype.setInputValue', function() {

    var schema = Mapping({
      x: Mapping({y: Scalar({type: types.number})}),
      z: Scalar({type: types.number})
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
    });

    it('works', function() {
      var value = Value.create(schema, {x: {y: 12}});
      value.get('x');
    });
  });

});
