/**
 * @jsx React.DOM
 */
'use strict';

var assert                  = require('assert');
var {Mapping, Scalar, List} = require('../schema');

describe('forms', () => {

  describe('schema', () => {

    describe('Mapping construction', () => {

      it('constructs Mapping with no children', () => {
        var s = <Mapping></Mapping>;
        assert.deepEqual(s.children, {});
      });

      it('constructs Mapping ignoring falsy children', function() {

        function getMapping(city) {
          return (
            <Mapping>
              <Scalar name="address_1" required />
              {city === 'OTHER' ? <Scalar name="city" required /> : null}
            </Mapping>
          );
        }

        assert.doesNotThrow(function() {
          var s = getMapping('LON');
          assert.equal(Object.keys(s.children).length, 1);
        });

        assert.doesNotThrow(function() {
          var s = getMapping('OTHER');
          assert.equal(Object.keys(s.children).length, 2);
        });
      });

      it('constructs with children as arguments', () => {
        var s = (
          <Mapping>
            <Scalar name="name" />
            <Scalar name="name2" />
          </Mapping>
        );
        assert.ok(s.children);
        assert.ok(s.children.name);
        assert.ok(s.children.name2);
      });

      it('constructs with children as an array', () => {
        var props = [
          <Scalar name="name" />,
          <Scalar name="name2" />
        ];
        var s = <Mapping>{props}</Mapping>;
        assert.ok(s.children);
        assert.ok(s.children.name);
        assert.ok(s.children.name2);
      });

      it('constructs with children as a deeply nested array', () => {
        var props = [
          <Scalar name="name" />,
          [<Scalar name="name2" />],
          [[<Scalar name="name3" />]]
        ];
        var s = <Mapping>{props}</Mapping>;
        assert.ok(s.children);
        assert.ok(s.children.name);
        assert.ok(s.children.name2);
        assert.ok(s.children.name3);
      });

      it('throws when one of the properties does not have name', () => {
        assert.throws(() => {
          return <Mapping><Scalar /></Mapping>;
        });
      });
    });

    describe('List construction', () => {

      it('constructs with children schema as argument', () => {
        var s = <List><Scalar /></List>;
        assert.ok(s.children);
      });

      it('throws when no children is defined', () => {
        assert.throws(() => {
          return <List></List>;
        });
      });

      it('throws when more than one child is defined', () => {
        assert.throws(() => {
          return (
            <List>
              <Scalar />
              <Scalar />
            </List>
          );
        });
      });

    });

  });
});
