/**
 * @jsx React.DOM
 */
'use strict';

var assert                  = require('assert');
var {OrderedMap}            = require('immutable');
var {Mapping, Scalar, List} = require('../schema');

describe('forms', () => {

  describe('schema', () => {

    describe('Mapping construction', () => {

      it('constructs Mapping with no children', () => {
        var s = Mapping();
        assert.ok(s.children.equals(OrderedMap.empty()));
      });

      it('constructs Mapping ignoring falsy children', function() {

        function getMapping(city) {
          return Mapping({
            address_1: Scalar({required: true}),
            city: city === 'OTHER' && Scalar({required: true})
          });
        }

        assert.doesNotThrow(function() {
          var s = getMapping('LON');
          assert.ok(s.children.has('address_1'));
          assert.ok(!s.children.has('city'));
        });

        assert.doesNotThrow(function() {
          var s = getMapping('OTHER');
          assert.ok(s.children.has('address_1'));
          assert.ok(s.children.has('city'));
        });
      });

      it('constructs with children as arguments', () => {
        var s = Mapping({
          name: Scalar(),
          name2: Scalar()
        });
        assert.ok(s.children);
        assert.ok(s.children.get('name'));
        assert.ok(s.children.get('name2'));
      });
    });

    describe('List construction', () => {

      it('constructs with children schema as argument', () => {
        var s = List(Scalar());
        assert.ok(s.children);
      });

      it('throws when no children is defined', () => {
        assert.throws(() => {
          return List()
        });
      });

    });
  });
});
