/**
 * @jsx React.DOM
 */
'use strict';

var assert  = require('assert');
var V       = require('../ValidationResult');

describe('React Forms', function() {

  describe('child access', function() {

    it('returns success in case no child validation is defined', function() {
      var v = V();
      assert.ok(v.child('key').equals(V.success));
    });

    it('returns success in case no child validation is defined (deeply nested)', function() {
      var v = V();
      assert.ok(v.childIn(['key', 'x']).equals(V.success));
    });

  });

  describe('updating children', function() {

    it('updates child with success', function() {
      var v = V(null, {x: V('error')});
      var v2 = v.updateChild('x', V.success);
      assert.ok(v2.equals(V.success));
    });

    it('updates child with success (presence of another error)', function() {
      var v = V(null, {y: V('error')});
      var v2 = v.updateChild('x', V.success);
      assert.ok(v2.equals(v));
    });

    it('updates neested child with success', function() {
      var v = V(null, {x: V('error', {y: V('error')})});
      var v2 = v.updateChildIn(['x', 'y'], V.success);
      assert.ok(v2.equals(V.success));
    });

    it('updates neested child with success (presence of another error)', function() {
      var v = V(null, {x: V('error', {y: V('error'), z: V('error')})});
      var v2 = v.updateChildIn(['x', 'y'], V.success);
      assert.ok(v2.equals(V(null, {x: V('error', {z: V('error')})})));
    });

    it('updates neested child with success (presence of another error up in the hierarchy)', function() {
      var v = V(null, {x: V('error', {y: V('error')}), z: V('error')});
      var v2 = v.updateChildIn(['x', 'y'], V.success);
      assert.ok(v2.equals(V(null, {z: V('error')})));
    });

  });

});
