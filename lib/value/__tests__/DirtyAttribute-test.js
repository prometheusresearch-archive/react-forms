'use strict';

var assert = require('assert');
var {Map, fromJS, is} = require('immutable');
var {Scalar, Mapping, List} = require('../schema');
var DirtyAttribute = require('../DirtyAttribute');
var defineValue = require('../defineValue');

function assertNotDirty(value) {
  assert.ok(!value.isDirty, 'value is dirty');
}

function assertDirty(value) {
  assert.ok(value.isDirty, 'value is not dirty');
}

class Value extends defineValue(new DirtyAttribute('dirty')) {

  makeDirty() {
    var dirty = this.attributes.get('dirty') || Map();
    return this.setDirty(dirty.merge({__dirty__: true}));
  }

  makeNotDirty() {
    var dirty = this.attributes.get('dirty', Map());
    return this.setDirty(dirty.remove('__dirty__'));
  }

  get isDirty() {
    return DirtyAttribute.isDirty(this);
  }
}

var schema = Mapping({
  x: Mapping({y: Scalar()}),
  z: Scalar()
});

describe('Value with DirtyAttribute', function() {

  it('is not dirty initially', function() {
    var value = Value.create(schema);
    assertNotDirty(value);
  });

  it('can be made dirty/not-dirty', function() {
    var value = Value.create(schema);
    value = value.makeDirty();
    assertDirty(value);
    value = value.makeNotDirty();
    assertNotDirty(value);
  });

  it('propagates dirtyness for children', function() {
    var value = Value.create(schema);
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
    var value = Value.create(schema);
    value = value.get('x').get('y').makeDirty().root;
    assertNotDirty(value);
    assertNotDirty(value.get('x'));
    assertDirty(value.get('x').get('y'));
    assertNotDirty(value.get('z'));
    value = value.get('x').get('y').makeNotDirty().root;
    assertNotDirty(value);
    assertNotDirty(value.get('x'));
    assertNotDirty(value.get('x').get('y'));
    assertNotDirty(value.get('z'));
  });

  it('can be made dirty/not-dirty for the intermediate children', function() {
    var value = Value.create(schema);
    value = value.get('x').makeDirty().root;
    assertNotDirty(value);
    assertDirty(value.get('x'));
    assertDirty(value.get('x').get('y'));
    assertNotDirty(value.get('z'));
    value = value.get('x').makeNotDirty().root;
    assertNotDirty(value);
    assertNotDirty(value.get('x'));
    assertNotDirty(value.get('x').get('y'));
    assertNotDirty(value.get('z'));
  });

  it('merges dirty attribute on updates', function() {
    var value = Value.create(schema);
    value = value.get('x').makeDirty().root;
    assertNotDirty(value);
    assertDirty(value.get('x'));
    assertDirty(value.get('x').get('y'));
    assertNotDirty(value.get('z'));
    value = value.get('z').makeDirty().root;
    assertNotDirty(value);
    assertDirty(value.get('x'));
    assertDirty(value.get('x').get('y'));
    assertDirty(value.get('z'));
    value = value.get('x').makeNotDirty().root;
    assertNotDirty(value);
    assertNotDirty(value.get('x'));
    assertNotDirty(value.get('x').get('y'));
    assertDirty(value.get('z'));
    value = value.get('z').makeNotDirty().root;
    assertNotDirty(value);
    assertNotDirty(value.get('x'));
    assertNotDirty(value.get('x').get('y'));
    assertNotDirty(value.get('z'));
  });

});
