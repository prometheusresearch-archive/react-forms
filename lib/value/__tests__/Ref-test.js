'use strict';

var sinon = require('sinon');
var assert = require('assert');
var {is, fromJS} = require('immutable');
var Ref = require('../Ref');

function assertEquals(a, b) {
  a = fromJS(a);
  b = fromJS(b);
  assert.ok(is(a, b), `expected ${a} to be equal to ${b}`);
}

function assertNotEquals(a, b) {
  a = fromJS(a);
  b = fromJS(b);
  assert.ok(!is(a, b), `expected ${a} not to be equal to ${b}`);
}

describe('Ref:', function() {

  it('allows accessing value', function() {
    var ref = new Ref(fromJS({a: 12}));
    assertEquals(ref.value, {a: 12});
  });

  it('notifies on update', function() {
    var onUpdate = sinon.spy();
    var ref = new Ref(fromJS({a: 12}), onUpdate);
    ref.update(fromJS({b: 12}));
    assertEquals(ref.value, {b: 12});
    assert.equal(onUpdate.callCount, 1);
    assertEquals(onUpdate.firstCall.args[0], {b: 12});
  });

  it('allows checking equality', function() {
    assertEquals(new Ref(1), new Ref(1));
    assertNotEquals(new Ref(1), new Ref(2));

    function onUpdate() { }
    function onUpdate2() { }

    assertEquals(new Ref(1, onUpdate), new Ref(1, onUpdate));
    assertNotEquals(new Ref(1, onUpdate), new Ref(1, onUpdate2));
  });

});
