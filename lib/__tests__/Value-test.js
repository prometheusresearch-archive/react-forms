/**
 * @jsx React.DOM
 */
'use strict';

var assert                  = require('assert');
var Value                   = require('../Value');
var {Mapping, List, Scalar} = require('../schema');
var v                       = require('../validation');

function makeValueFromSchema(schema, value) {
  return Value({schema, value});
}

describe('Value', function() {

  describe('get()', function() {

    describe('objects', function() {

      it('allows accessing subvalues', function() {
        var value = makeValueFromSchema(
          <Mapping>
            <Scalar name="a" />
            <Scalar name="b" />
          </Mapping>,
          {a: 'a'}
        );
        var subvalue = value.get('a');

        assert.strictEqual(value.value.a, subvalue.value);
        assert.strictEqual(value.serialized.a, subvalue.serialized);
      });

      it('creates default values', function() {
        var value = makeValueFromSchema(
          <Mapping>
            <Mapping name="x">
              <Scalar name="a" />
              <Scalar name="b" defaultValue="12" />
            </Mapping>
          </Mapping>,
          {}
        );
        assert.deepEqual(value.get('x').value, {});
        assert.deepEqual(value.get('x').get('a').value, null);
        assert.deepEqual(value.get('x').get('b').value, '12');
      });

    });

    describe('arrays', function() {

      it('allows accessing subvalues', function() {
        var value = makeValueFromSchema(
          <List>
            <Scalar />
          </List>,
          ['a']
        );
        var subvalue = value.get(0);

        assert.strictEqual(value.value[0], subvalue.value);
        assert.strictEqual(value.serialized[0], subvalue.serialized);
      });

      it('creates default values', function() {
        var value = makeValueFromSchema(
          <List>
            <List>
              <Scalar defaultValue={0} type="number" />
            </List>
          </List>,
          []
        );
        assert.deepEqual(value.get(0).value, []);
        assert.strictEqual(value.get(0).get(0).value, 0);
      });

    });

  });

  describe('swap()', function() {

    it('swaps elements in values by indecies', function() {
      var value = makeValueFromSchema(
        <List><Scalar /></List>,
        [1, 2, 3, 4]
      );

      var updated  = value.swap(1, 2);

      assert.deepEqual(updated.value, [1, 3, 2, 4]);
      assert.deepEqual(updated.serialized, [1, 3, 2, 4]);

      assert.deepEqual(value.value, [1, 2, 3, 4]);
      assert.deepEqual(value.serialized, [1, 2, 3, 4]);
    });

  });

  describe('updating value', function() {

    describe('scalars', function() {
      it('updates scalars', function() {
        var value = makeValueFromSchema(
          <Scalar type="number" />,
          'a'
        );
        var updated = value.update({value: 42});

        assert.strictEqual(updated.value, 42);
        assert.strictEqual(updated.root().value, 42);

        assert.ok(v.isSuccess(updated.validation));
        assert.ok(v.isSuccess(updated.root().validation));
      });

      it('updates scalars with invalid values', function() {
        var value = makeValueFromSchema(
          <Scalar type="number" validate={(v) => v > 0} />,
          'a'
        );
        var updated = value.update({value: -1});

        assert.strictEqual(updated.value, -1);
        assert.strictEqual(updated.root().value, -1);

        assert.ok(v.isFailure(updated.validation));
        assert.ok(v.isFailure(updated.root().validation));
      });
    });

    describe('objects', function() {
      it('updates objects', function() {
        var value = makeValueFromSchema(
          <Mapping>
            <Scalar name="a" />
            <Scalar name="b" />
          </Mapping>,
          {}
        );
        var updated = value.get('a').update({value: 'a'});

        assert.deepEqual(updated.value, 'a');
        assert.deepEqual(updated.root().value, {a: 'a'});

        assert.ok(v.isSuccess(updated.validation));
        assert.ok(v.isSuccess(updated.root().validation));
      });

      it('updates objects with invalid values', function() {
        var value = makeValueFromSchema(
          <Mapping>
            <Scalar name="a" type="number" />
            <Scalar name="b" />
          </Mapping>,
          {}
        );
        var updated = value.get('a').update({value: 'a'});

        assert.deepEqual(updated.value, 'a');
        assert.deepEqual(updated.root().value, {a: 'a'});

        assert.ok(v.isFailure(updated.validation));
        assert.ok(v.isFailure(updated.root().validation));
      });

      it('does not destroy values for other subfields', function() {
        var value = makeValueFromSchema(
          <Mapping>
            <Scalar name="a" />
            <Scalar name="b" />
          </Mapping>,
          {}
        );
        var updated = value.get('a').update({value: 'a'});

        assert.deepEqual(updated.value, 'a');
        assert.deepEqual(updated.root().value, {a: 'a'});

        var updated2 = updated.root().get('b').update({value: 'b'});

        assert.deepEqual(updated2.value, 'b');
        assert.deepEqual(updated2.root().value, {a: 'a', b: 'b'});
      });

      it('does not destroy serialized values for other subfields', function() {
        var value = makeValueFromSchema(
          <Mapping>
            <Scalar name="a" />
            <Scalar name="b" />
          </Mapping>,
          {}
        );
        var updated = value.get('a').update({value: 'a'});

        assert.deepEqual(updated.serialized, 'a');
        assert.deepEqual(updated.root().serialized, {a: 'a'});

        var updated2 = updated.root().get('b').update({value: 'b'});

        assert.deepEqual(updated2.serialized, 'b');
        assert.deepEqual(updated2.root().serialized, {a: 'a', b: 'b'});
      });

      it('does not destroy validation state for other subfields', function() {
        var value = makeValueFromSchema(
          <Mapping>
            <Scalar name="a" type="number" />
            <Scalar name="b" type="number" />
          </Mapping>,
          {}
        );
        var updated = value.get('a').update({value: 'a'});

        assert.ok(v.isFailure(updated.validation));
        assert.ok(v.isFailure(updated.root().validation));
        assert.ok(v.isSuccess(updated.root().get('b').validation));

        var updated2 = updated.root().get('b').update({value: 'b'});

        assert.ok(v.isFailure(updated2.validation));
        assert.ok(v.isFailure(updated2.root().validation));
        assert.ok(v.isFailure(updated2.root().get('a').validation));
      });

      it('updates objects by providing structural sharing between updates', function() {
        var value = makeValueFromSchema(
          <Mapping>
            <Scalar name="a" type="number" />
            <Mapping name="b">
              <Scalar name="c" />
            </Mapping>
          </Mapping>,
          {a: 12, b: {c: 'c'}}
        );
        var updated = value.get('a').update({value: 12});

        assert.strictEqual(value.value.b, updated.root().value.b);
        assert.strictEqual(value.serialized.b, updated.root().serialized.b);
        assert.strictEqual(value.validation.children.b, updated.root().validation.children.b);
      });
    });

    describe('arrays', function() {

      it('updates arrays', function() {
        var value = makeValueFromSchema(
          <List>
            <Scalar />
          </List>,
          []
        );
        var updated = value.get(0).update({value: 'a'});

        assert.deepEqual(updated.value, 'a');
        assert.deepEqual(updated.root().value, ['a']);

        assert.ok(v.isSuccess(updated.validation));
        assert.ok(v.isSuccess(updated.root().validation));
      });

      it('updates arrays with invalid value', function() {
        var value = makeValueFromSchema(
          <List>
            <Scalar type="number" />
          </List>,
          []
        );
        var updated = value.get(0).update({value: 'a'});

        assert.deepEqual(updated.value, 'a');
        assert.deepEqual(updated.root().value, ['a']);

        assert.ok(v.isFailure(updated.validation));
        assert.ok(v.isFailure(updated.root().validation));
      });

      it('does not destroy value of other subfields', function() {
        var value = makeValueFromSchema(
          <List>
            <Scalar />
          </List>,
          []
        );
        var updated = value.get(0).update({value: 'a'});

        assert.deepEqual(updated.value, 'a');
        assert.deepEqual(updated.root().value, ['a']);

        var updated2 = updated.root().get(1).update({value: 'b'});

        assert.deepEqual(updated2.value, 'b');
        assert.deepEqual(updated2.root().value, ['a', 'b']);
      });

      it('does not destroy serialized value of other subfields', function() {
        var value = makeValueFromSchema(
          <List>
            <Scalar />
          </List>,
          []
        );
        var updated = value.get(0).update({value: 'a'});

        assert.deepEqual(updated.serialized, 'a');
        assert.deepEqual(updated.root().serialized, ['a']);

        var updated2 = updated.root().get(1).update({value: 'b'});

        assert.deepEqual(updated2.serialized, 'b');
        assert.deepEqual(updated2.root().serialized, ['a', 'b']);
      });

      it('does not destroy validation state of other subfields', function() {
        var value = makeValueFromSchema(
          <List>
            <Scalar type="number" />
          </List>,
          []
        );
        var updated = value.get(0).update({value: 'a'});

        assert.ok(v.isFailure(updated.validation));
        assert.ok(v.isFailure(updated.root().validation));

        var updated2 = updated.root().get(1).update({value: 'b'});

        assert.ok(v.isFailure(updated2.validation));
        assert.ok(v.isFailure(updated2.root().validation));
        assert.ok(v.isFailure(updated2.root().get(0).validation));
      });

      it('updates arrays by providing structural sharing between updates', function() {
        var value = makeValueFromSchema(
          <List>
            <Mapping>
              <Scalar name="a" />
            </Mapping>
          </List>,
          [{a: 'a'}]
        );
        var updated = value.get(1).update({value: {a: 'b'}});
        assert.strictEqual(value.value[0], updated.root().value[0]);
      });
    });

  });

  describe('updating serialized value', function() {

    describe('scalars', function() {
      it('updates scalars', function() {
        var value = makeValueFromSchema(
          <Scalar type="number" />,
          'a'
        );
        var updated = value.update({serialized: '42'});

        assert.strictEqual(updated.value, 42);
        assert.strictEqual(updated.root().value, 42);

        assert.strictEqual(updated.serialized, '42');
        assert.strictEqual(updated.root().serialized, '42');

        assert.ok(v.isSuccess(updated.validation));
        assert.ok(v.isSuccess(updated.root().validation));
      });

      it('updates scalars with invalid value', function() {
        var value = makeValueFromSchema(
          <Scalar type="number" validate={(v) => v > 0}/>,
          'a'
        );
        var updated = value.update({serialized: '-1'});

        assert.strictEqual(updated.value, -1);
        assert.strictEqual(updated.root().value, -1);

        assert.strictEqual(updated.serialized, '-1');
        assert.strictEqual(updated.root().serialized, '-1');

        assert.ok(v.isFailure(updated.validation));
        assert.ok(v.isFailure(updated.root().validation));
      });
    });

    describe('objects', function() {
      it('updates objects', function() {
        var value = makeValueFromSchema(
          <Mapping>
            <Scalar name="a" type="number" />
            <Scalar name="b" />
          </Mapping>,
          {}
        );
        var updated = value.get('a').update({serialized: '42'});

        assert.strictEqual(updated.value, 42);
        assert.deepEqual(updated.root().value, {a: 42});

        assert.strictEqual(updated.serialized, '42');
        assert.deepEqual(updated.root().serialized, {a: '42'});

        assert.ok(v.isSuccess(updated.validation));
        assert.ok(v.isSuccess(updated.root().validation));
      });

      it('updates objects with invalid value', function() {
        var value = makeValueFromSchema(
          <Mapping>
            <Scalar name="a" type="number" />
            <Scalar name="b" />
          </Mapping>,
          {}
        );
        var updated = value.get('a').update({serialized: 'a'});

        assert.strictEqual(updated.value, 'a');
        assert.deepEqual(updated.root().value, {a: 'a'});

        assert.strictEqual(updated.serialized, 'a');
        assert.deepEqual(updated.root().serialized, {a: 'a'});

        assert.ok(v.isFailure(updated.validation));
        assert.ok(v.isFailure(updated.root().validation));
      });
    });

    describe('arrays', function() {
      it('updates arrays', function() {
        var value = makeValueFromSchema(
          <List>
            <Scalar type="number" />
          </List>,
          []
        );
        var updated = value.get(0).update({serialized: '42'});

        assert.strictEqual(updated.value, 42);
        assert.deepEqual(updated.root().value, [42]);

        assert.strictEqual(updated.serialized, '42');
        assert.deepEqual(updated.root().serialized, ['42']);

        assert.ok(v.isSuccess(updated.validation));
        assert.ok(v.isSuccess(updated.root().validation));
      });

      it('updates arrays with invalid value', function() {
        var value = makeValueFromSchema(
          <List>
            <Scalar type="number" />
          </List>,
          []
        );
        var updated = value.get(0).update({serialized: 'a'});

        assert.strictEqual(updated.value, 'a');
        assert.deepEqual(updated.root().value, ['a']);

        assert.strictEqual(updated.serialized, 'a');
        assert.deepEqual(updated.root().serialized, ['a']);

        assert.ok(v.isFailure(updated.validation));
        assert.ok(v.isFailure(updated.root().validation));
      });
    });

  });

});
