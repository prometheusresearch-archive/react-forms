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

  it('allows traversing the value', function() {
    var ref = new Ref(fromJS({a: {b: {c: 42}}}));
    assertEquals(ref.value, {a: {b: {c: 42}}});
    assertEquals(ref.get('a').value, {b: {c: 42}});
    assertEquals(ref.get('a').get('b').value, {c: 42});
    assertEquals(ref.get('a').get('b').get('c').value, 42);
    assertEquals(ref.getIn(['a', 'b', 'c']).value, 42);
  });

  it('allows mapping over the value', function() {
    var value = fromJS({a: 1, b: 2, c: [1, 2, 3]});
    var ref = new Ref(value);
    assertEquals(
      ref.map(v => v),
      [
        new Ref(value, undefined, ['a']),
        new Ref(value, undefined, ['b']),
        new Ref(value, undefined, ['c'])
      ]
    );
    assertEquals(
      ref.get('c').map(v => v),
      [
        new Ref(value, undefined, ['c', 0]),
        new Ref(value, undefined, ['c', 1]),
        new Ref(value, undefined, ['c', 2])
      ]
    );
  });

  it('notifies on update', function() {
    var onUpdate = sinon.spy();
    var ref = new Ref(fromJS({a: 12}), onUpdate);
    ref.update(fromJS({b: 12}));
    assert.equal(onUpdate.callCount, 1);
    assertEquals(onUpdate.firstCall.args[0], {b: 12});
  });

  it('allows checking equality', function() {
    assertEquals(new Ref(fromJS({a: 12})), new Ref(fromJS({a: 12})));
    assertNotEquals(new Ref(fromJS({a: 12})), new Ref(fromJS({b: 14})));

    function onUpdate() { }
    function onUpdate2() { }

    assertEquals(new Ref(fromJS({a: 12}), onUpdate), new Ref(fromJS({a: 12}), onUpdate));
    assertNotEquals(new Ref(fromJS({a: 12}), onUpdate), new Ref(fromJS({a: 12}), onUpdate2));
  });

});
