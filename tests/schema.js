/**
 * @jsx React.DOM
 */
'use strict';

var assert = require('assert');
var schema = require('../lib/schema');

var Property = schema.Property;
var List = schema.List;
var Schema = schema.Schema;

describe('forms', () => {
  describe('schema', () => {

    describe('Schema construction', () => {

      it('constructs Schema with no children', () => {
        var s = <Schema></Schema>;
        assert.deepEqual(s.children, {});
      });

      it('constructs with children as arguments', () => {
        var s = (
          <Schema>
            <Property name="name" />
            <Property name="name2" />
          </Schema>
        );
        assert.ok(s.children);
        assert.ok(s.children.name);
        assert.ok(s.children.name2);
      });

      it('constructs with children as an array', () => {
        var props = [
          <Property name="name" />,
          <Property name="name2" />
        ];
        var s = <Schema>{props}</Schema>;
        assert.ok(s.children);
        assert.ok(s.children.name);
        assert.ok(s.children.name2);
      });

      it('constructs with children as a deeply nested array', () => {
        var props = [
          <Property name="name" />,
          [<Property name="name2" />],
          [[<Property name="name3" />]]
        ];
        var s = <Schema>{props}</Schema>;
        assert.ok(s.children);
        assert.ok(s.children.name);
        assert.ok(s.children.name2);
        assert.ok(s.children.name3);
      });

      it('throws when one of the properties does not have name', () => {
        assert.throws(() => {
          <Schema><Property /></Schema>
        });
      });
    });

    describe('List construction', () => {

      it('constructs with children schema as argument', () => {
        var s = <List><Property /></List>;
        assert.ok(s.children);
      });

      it('throws when no children is defined', () => {
        assert.throws(() => {
          <List></List>;
        });
      });

      it('throws when more than one child is defined', () => {
        assert.throws(() => {
          <List>
            <Property />
            <Property />
          </List>
        });
      });

    });

  });
});
