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
    var ref = Ref.create(fromJS({a: 12}));
    assertEquals(ref.value, {a: 12});
  });

  it('allows traversing the value', function() {
    var ref = Ref.create(fromJS({a: {b: {c: 42}}}));
    assertEquals(ref.value, {a: {b: {c: 42}}});
    assertEquals(ref.get('a').value, {b: {c: 42}});
    assertEquals(ref.get('a').get('b').value, {c: 42});
    assertEquals(ref.get('a').get('b').get('c').value, 42);
    assertEquals(ref.getIn(['a', 'b', 'c']).value, 42);
  });

  it('allows mapping over the value', function() {
    var value = fromJS({a: 1, b: 2, c: [1, 2, 3]});
    var ref = Ref.create(value);
    assertEquals(
      ref.map(v => v),
      [
        ref.get('a'),
        ref.get('b'),
        ref.get('c')
      ]
    );
    assertEquals(
      ref.get('c').map(v => v),
      [
        ref.getIn(['c', 0]),
        ref.getIn(['c', 1]),
        ref.getIn(['c', 2])
      ]
    );
  });

  it('notifies on set', function() {
    var onUpdate = sinon.spy();
    var ref = Ref.create(fromJS({a: 12}), onUpdate);
    ref.set(fromJS({b: 12}));
    assert.equal(onUpdate.callCount, 1);
    assertEquals(onUpdate.firstCall.args[0], {b: 12});
  });

  it('all subrefs see updated data', function() {
    var ref = Ref.create(fromJS({a: {b: {c: 42}}}));
    var refC = ref.getIn(['a', 'b', 'c']);
    var refB = ref.getIn(['a', 'b']);
    assertEquals(refC.value, 42);
    assertEquals(refB.value, {c: 42});
    ref.set(fromJS({a: {b: {c: 43}}}));
    assertEquals(refC.value, 43);
    assertEquals(refB.value, {c: 43});
    assertEquals(ref.value, fromJS({a: {b: {c: 43}}}));
  });

  it('allows checking equality', function() {
    assertEquals(Ref.create(fromJS({a: 12})), Ref.create(fromJS({a: 12})));
    assertNotEquals(Ref.create(fromJS({a: 12})), Ref.create(fromJS({b: 14})));

    function onUpdate() { }
    function onUpdate2() { }

    assertEquals(Ref.create(fromJS({a: 12}), onUpdate), Ref.create(fromJS({a: 12}), onUpdate));
    assertNotEquals(Ref.create(fromJS({a: 12}), onUpdate), Ref.create(fromJS({a: 12}), onUpdate2));
  });

});
