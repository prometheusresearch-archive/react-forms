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
          return Mapping(
            Scalar({name: 'address_1', required: true}),
            city === 'OTHER' ? Scalar({name: 'city', required: true}) : null
          )
        }

        assert.doesNotThrow(function() {
          var s = getMapping('LON');
          assert.equal(s.children.keys().length, 1);
        });

        assert.doesNotThrow(function() {
          var s = getMapping('OTHER');
          assert.equal(s.children.keys().length, 2);
        });
      });

      it('constructs with children as arguments', () => {
        var s = Mapping(
          Scalar({name: 'name'}),
          Scalar({name: 'name2'})
        );
        assert.ok(s.children);
        assert.ok(s.children.get('name'));
        assert.ok(s.children.get('name2'));
      });

      it('constructs with children as an array', () => {
        var props = [
          Scalar({name: 'name'}),
          Scalar({name: 'name2'})
        ];
        var s = Mapping(props);
        assert.ok(s.children);
        assert.ok(s.children.get('name'));
        assert.ok(s.children.get('name2'));
      });

      it('constructs with children as a deeply nested array', () => {
        var props = [
          Scalar({name: 'name'}),
          [Scalar({name: 'name2'})],
          [[Scalar({name: 'name3'})]]
        ];
        var s = Mapping(props);
        assert.ok(s.children);
        assert.ok(s.children.get('name'));
        assert.ok(s.children.get('name2'));
        assert.ok(s.children.get('name3'));
      });

      it('throws when one of the properties does not have name', () => {
        assert.throws(() => {
          return Mapping(Scalar());
        });
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

      it('throws when more than one child is defined', () => {
        assert.throws(() => {
          return List(Scalar(), Scalar());
        });
      });

    });
  });
});
