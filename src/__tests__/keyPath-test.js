/**
 * @copyright 2015, Prometheus Research, LLC
 */

import keyPath from '../keyPath';

describe('keyPath', function() {

  it('converts strings to key path', function() {
    expect(keyPath('a')).toEqual(['a']);
    expect(keyPath('0')).toEqual([0]);
    expect(keyPath('a.b')).toEqual(['a', 'b']);
    expect(keyPath('a.b.c')).toEqual(['a', 'b', 'c']);
    expect(keyPath('0.b.c')).toEqual([0, 'b', 'c']);
    expect(keyPath('a.0.c')).toEqual(['a', 0, 'c']);
    expect(keyPath('a.b.0')).toEqual(['a', 'b', 0]);
  });

  it('converts numbers to key path', function() {
    expect(keyPath(0)).toEqual([0]);
    expect(keyPath(1)).toEqual([1]);
  });

  it('converts arrays to key path', function() {
    expect(keyPath([0, 2])).toEqual([0, 2]);
    expect(keyPath(['a', 'b'])).toEqual(['a', 'b']);
    expect(keyPath([0, 'b'])).toEqual([0, 'b']);
    expect(keyPath(['0', 'b'])).toEqual(['0', 'b']);
  });
});
