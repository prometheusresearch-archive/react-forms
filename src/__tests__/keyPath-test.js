/**
 * @copyright 2015, Prometheus Research, LLC
 */

import keyPath from '../keyPath';

describe('keyPath()', function() {

  it('converts strings to key path', function() {
    assert.deepEqual(keyPath('a'), ['a']);
    assert.deepEqual(keyPath('0'), [0]);
    assert.deepEqual(keyPath('a.b'), ['a', 'b']);
    assert.deepEqual(keyPath('a.b.c'), ['a', 'b', 'c']);
    assert.deepEqual(keyPath('0.b.c'), [0, 'b', 'c']);
    assert.deepEqual(keyPath('a.0.c'), ['a', 0, 'c']);
    assert.deepEqual(keyPath('a.b.0'), ['a', 'b', 0]);
  });

  it('converts numbers to key path', function() {
    assert.deepEqual(keyPath(0), [0]);
    assert.deepEqual(keyPath(1), [1]);
  });

  it('converts arrays to key path', function() {
    assert.deepEqual(keyPath([0, 2]), [0, 2]);
    assert.deepEqual(keyPath(['a', 'b']), ['a', 'b']);
    assert.deepEqual(keyPath([0, 'b']), [0, 'b']);
    assert.deepEqual(keyPath(['0', 'b']), ['0', 'b']);
  });

});
