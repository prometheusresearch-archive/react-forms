/**
 * @jsx React.DOM
 */
'use strict';

var assert  = require('assert');
var make    = require('../lens');

function assertLensPointsTo(lens, data) {
  assert.deepEqual(lens.val(), data);
  assert.strictEqual(lens.val(), data);
}

describe('forms', () => {

  describe('lens', () => {

    describe('creating lenses', () => {

      it('creates a lens for an object', () => {
        var data = {a: 12};
        var lens = make(data);
        assertLensPointsTo(lens, data);
      });

      it('creates a lens for an array', () => {
        var data = [1, 2, 3];
        var lens = make(data);
        assertLensPointsTo(lens, data);
      });

      it('creates a lens for a scalar', () => {
        var data = 42;
        var lens = make(data);
        assertLensPointsTo(lens, data);
      });
    });

    describe('get()', () => {

      it('traverses an object lens', () => {
        var data = {a: {b: {c: 42}}};
        var lens = make(data);
        assertLensPointsTo(lens, data);
        assertLensPointsTo(lens.get('a'), data.a);
        assertLensPointsTo(lens.get('a').get('b'), data.a.b);
        assertLensPointsTo(lens.get('a').get('b').get('c'), data.a.b.c);
      });

      it('traverses an array lens', () => {
        var data = [[[1]]];
        var lens = make(data);
        assertLensPointsTo(lens, data);
        assertLensPointsTo(lens.get(0), data[0]);
        assertLensPointsTo(lens.get(0).get(0), data[0][0]);
        assertLensPointsTo(lens.get(0).get(0).get(0), data[0][0][0]);
      });

      it('traverses unexistent objects with default values', () => {
        var data = {};
        var lens = make(data);
        assert.deepEqual(lens.get('a', 1).val(), 1);
        assert.deepEqual(lens.get('a', {}).get('b', 2).val(), 2);
        assert.deepEqual(lens.get('a', []).get(0, 2).val(), 2);
      });

      it('allows getting root value from a lens', () => {
        var data = {a: 12, b: 13};
        var lens = make(data);
        assert.deepEqual(lens.root(), data);
        assert.deepEqual(lens.get('a').root(), data);
      });
    });

    describe('mod()', () => {

      var data, lens, originalDataCopy, updated, updatedExpectation;

      function checkOriginalDataIsImmutable() {
        assert.deepEqual(data, originalDataCopy);
      }

      function checkUpdate() {
        assert.deepEqual(updated, updatedExpectation);
      }

      function checkOriginalLensIsImmutable() {
        assertLensPointsTo(lens, data);
      }

      describe('updating root', () => {

        it('updates root value', () => {
          var data = {a: 42};
          var lens = make(data);
          var updatedLens = lens.mod({b: 43});
          assertLensPointsTo(lens, data);
          assert.deepEqual(updatedLens.root(), {b: 43});
        });

      });

      describe('updating object values', () => {

        function checkStructuralSharing() {
          assert.strictEqual(data.c, updated.c);
          assert.strictEqual(data.e, updated.e);
        }

        describe('plain update', () => {
          beforeEach(() => {
            data = {a: {b: 42}, c: 11, e: {f: 12}};
            originalDataCopy = JSON.parse(JSON.stringify(data));
            updatedExpectation = {a: {update: 'yes'}, c: 11, e: {f: 12}};
            lens = make(data);
            updated = lens.get('a').mod({update: 'yes'}).root();
          });

          it('does not mutate original data', checkOriginalDataIsImmutable);
          it('does not mutate original lens', checkOriginalLensIsImmutable);
          it('creates a correctly updated data', checkUpdate);
          it('maintains structural sharing between updates', checkStructuralSharing);
        });

        describe('nested update', () => {
          beforeEach(() => {
            data = {a: {b: 42}, c: 11, e: {f: 12}};
            originalDataCopy = JSON.parse(JSON.stringify(data));
            updatedExpectation = {a: {b: 'yes'}, c: 11, e: {f: 12}};
            lens = make(data);
            updated = lens.get('a').get('b').mod('yes').root();
          });

          it('does not mutate original data', checkOriginalDataIsImmutable);
          it('does not mutate original lens', checkOriginalLensIsImmutable);
          it('creates a correctly updated data', checkUpdate);
          it('maintains structural sharing between updates', checkStructuralSharing);
        });
      });

      describe('updating array values', () => {

        function checkStructuralSharing() {
          assert.strictEqual(data[2], updated[2]);
          assert.strictEqual(data[3], updated[3]);
        }

        describe('plain update', () => {
          beforeEach(() => {
            data = [1, [2, [3]], 4, [5]];
            originalDataCopy = JSON.parse(JSON.stringify(data));
            updatedExpectation = [12, [2, [3]], 4, [5]];
            lens = make(data);
            updated = lens.get(0).mod(12).root();
          });

          it('does not mutate original data', checkOriginalDataIsImmutable);
          it('does not mutate original lens', checkOriginalLensIsImmutable);
          it('creates a correctly updated data', checkUpdate);
          it('maintains structural sharing between updates', checkStructuralSharing);
        });

        describe('nested update', () => {
          beforeEach(() => {
            data = [1, [2, [3]], 4, [5]];
            originalDataCopy = JSON.parse(JSON.stringify(data));
            updatedExpectation = [1, [2, [12]], 4, [5]];
            lens = make(data);
            updated = lens.get(1).get(1).mod([12]).root();
          });

          it('does not mutate original data', checkOriginalDataIsImmutable);
          it('does not mutate original lens', checkOriginalLensIsImmutable);
          it('creates a correctly updated data', checkUpdate);
          it('maintains structural sharing between updates', checkStructuralSharing);
        });
      });

      describe('updating mixed values', () => {

        function checkStructuralSharing() {
          assert.strictEqual(data.a, updated.a);
          assert.strictEqual(data.c[1], updated.c[1]);
        }

        beforeEach(() => {
          data = {a: {b: 1}, c: [{d: 2}, {e: 3}]};
          originalDataCopy = JSON.parse(JSON.stringify(data));
          updatedExpectation = {a: {b: 1}, c: [{d: 'update'}, {e: 3}]};
          lens = make(data);
          updated = lens.get('c').get(0).get('d').mod('update').root();
        });

        it('does not mutate original data', checkOriginalDataIsImmutable);
        it('does not mutate original lens', checkOriginalLensIsImmutable);
        it('creates a correctly updated data', checkUpdate);
        it('maintains structural sharing between updates', checkStructuralSharing);
      });

      describe('creating values', () => {

        it('can create nested values', () => {
          var lens = make({});
          assert.deepEqual(
            make({}).get('a', {}).get('b', []).get(0).mod(42).root(),
            {a: {b: [42]}});
        });
      });

    });

    describe('for()', () => {

      it('allows creating a lens for a different value with the same path', () => {
        var data1 = {a: 1};
        var data2 = {a: 2};
        var lens1 = make(data1).get('a');
        var lens2 = lens1.for(data2);
        assert.deepEqual(lens1.val(), 1);
        assert.deepEqual(lens2.val(), 2);
      });
    });

    describe('parent()', () => {

      it('traverses to a parent', () => {
        var data = {a: 12, b: 13};
        var lens = make(data);
        assert.deepEqual(lens.get('a').parent().val(), data);
        assert.deepEqual(lens.get('a').parent().get('b').val(), data.b);
      });

      it('returns undefined if parent is undefined', () => {
        var data = {};
        var lens = make(data);
        assert.deepEqual(lens.parent(), undefined);
      });
    });

    describe('reduce()', () => {

      it('reduces arrays', () => {
        assert.equal(make([1, 2, 3]).reduce((a, b) => a + b), 6);
        assert.equal(make([1, 2, 3]).reduce((a, b) => a + b, 1), 7);
        assert.equal(make([1]).reduce((a, b) => a + b, 0), 1);
        assert.equal(make([]).reduce((a, b) => a + b, 0), 0);
        assert.throws(() => make([]).reduce((a, b) => a + b));
      });

      it('reduces objects', () => {
        assert.equal(make({a: 1, b: 2, c: 3}).reduce((a, b) => a + b), 6);
        assert.equal(make({a: 1, b: 2, c: 3}).reduce((a, b) => a + b, 1), 7);
        assert.equal(make([1]).reduce((a, b) => a + b, 0), 1);
        assert.equal(make([]).reduce((a, b) => a + b, 0), 0);
        assert.throws(() => make([]).reduce((a, b) => a + b));
      });

      it('reduces scalars', () => {
        assert.equal(make(1).reduce((a, b) => a + b, 0), 1);
        assert.throws(() => make(1).reduce((a, b) => a + b));
      });

      it('reduces undefined', () => {
        assert.equal(make().reduce((a, b) => a + b, 0), 0);
        assert.throws(() => make().reduce((a, b) => a + b));
      });

    });

    describe('transform()', () => {

      it('transforms the value via a function', () => {
        var addOne = (x) => x + 1;
        assert.equal(make(1).transform(addOne).val(), 2);
      });

    });

  });
});
