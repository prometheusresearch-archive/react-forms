/**
 * @copyright 2015, Prometheus Research, LLC
 */

import {update} from '../update';

describe('react-forms', function() {

  describe('update', function() {

    it('updates values', function() {

      assert.deepEqual(update({}, [], 1), 1);

      assert.deepEqual(update({}, ['a'], 1), {a: 1});
      assert.deepEqual(update({a: 2}, ['a'], 1), {a: 1});
      assert.deepEqual(update({b: 2}, ['a'], 1), {a: 1, b: 2});
      assert.deepEqual(update(undefined, ['a'], 1), {a: 1});
      assert.deepEqual(update(null, ['a'], 1), {a: 1});

      assert.deepEqual(update({}, ['a', 'b'], 1), {a: {b: 1}});
      assert.deepEqual(update({a: {b: 2}}, ['a', 'b'], 1), {a: {b: 1}});
      assert.deepEqual(update({a: {a: 2}}, ['a', 'b'], 1), {a: {a: 2, b: 1}});
      assert.deepEqual(update(undefined, ['a', 'b'], 1), {a: {b: 1}});
      assert.deepEqual(update(null, ['a', 'b'], 1), {a: {b: 1}});

      assert.deepEqual(update({}, ['a', 0], 1), {a: [1]});
      assert.deepEqual(update(null, ['a', 0], 1), {a: [1]});
      assert.deepEqual(update(undefined, ['a', 0], 1), {a: [1]});
      assert.deepEqual(update({a: []}, ['a', 0], 1), {a: [1]});
      assert.deepEqual(update({a: [2]}, ['a', 0], 1), {a: [1]});
      assert.deepEqual(update({a: [2]}, ['a', 1], 1), {a: [2, 1]});

      assert.deepEqual(update({}, ['a', 0, 'b'], 1), {a: [{b: 1}]});
      assert.deepEqual(update(null, ['a', 0, 'b'], 1), {a: [{b: 1}]});
      assert.deepEqual(update(undefined, ['a', 0, 'b'], 1), {a: [{b: 1}]});
      assert.deepEqual(update({a: null}, ['a', 0, 'b'], 1), {a: [{b: 1}]});
      assert.deepEqual(update({a: undefined}, ['a', 0, 'b'], 1), {a: [{b: 1}]});
      assert.deepEqual(update({a: []}, ['a', 0, 'b'], 1), {a: [{b: 1}]});
      assert.deepEqual(update({a: [{b: null}]}, ['a', 0, 'b'], 1), {a: [{b: 1}]});
      assert.deepEqual(update({a: [{b: undefined}]}, ['a', 0, 'b'], 1), {a: [{b: 1}]});
      assert.deepEqual(update({a: [2]}, ['a', 0], 1), {a: [1]});
      assert.deepEqual(update({a: [2]}, ['a', 1], 1), {a: [2, 1]});

      assert.deepEqual(update([], [0], 1), [1]);
      assert.deepEqual(update(null, [0], 1), [1]);
      assert.deepEqual(update(undefined, [0], 1), [1]);
      assert.deepEqual(update([0], [0], 1), [1]);
      assert.deepEqual(update([0], [1], 1), [0, 1]);

    });

    it('executes onUpdate hooks', function() {
      let schema = {
        onUpdate(value, {key, schema}) {
          return {...value, tag: 'data', key};
        },
        properties: {
          a: {
            onUpdate(value, {key, schema}) {
              return {...value, tag: 'a', key};
            },
            properties: {
              b: {
                onUpdate(value, {key, schema}) {
                  assert(key === undefined);
                  return value + '!';
                }
              }
            }
          }
        }
      };

      assert.deepEqual(
        update({}, ['a', 'b'], 'ok', schema),
        {
          a: {
            b: 'ok!',
            key: 'b',
            tag: 'a'
          },
          key: 'a',
          tag: 'data',
        }
      );
    });

  });

});
