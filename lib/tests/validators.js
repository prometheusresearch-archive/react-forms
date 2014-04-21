/**
 * @jsx React.DOM
 */
'use strict';

var assert     = require('assert');
var validators = require('../validators');
var validator  = validators.validator;

describe('forms', () => {

  describe('validators', () => {

    function assertValidates(validation) {
      assert.ok(validators.isSuccess(validation));
    }

    function assertFails(validation, message) {
      assert.ok(validators.isFailure(validation));
      if (message !== undefined) {
        assert.equal(validation.failure, message);
      }
    }

    describe('exists', () => {
      var exists = validators.exists;

      it('allows no-values for non required nodes', () => {
        var schema = {required: false};
        assertValidates(exists(null, schema));
        assertValidates(exists(undefined, schema));
      });

      it('does not allow no-values for required nodes', () => {
        var schema = {required: true};
        assertFails(exists(null, schema));
        assertFails(exists(undefined, schema));
      });

      it('can be chained with other validators', () => {
        var schema = {required: true};
        var validateNaN = validator((value) => isNaN(value));
        var validate = exists.andThen(validateNaN);
        assertValidates(validate(NaN, schema));
      });
    });

    describe('nonEmpty', () => {
      var nonEmpty = validators.nonEmpty;

      it('allows empty arrays if nonEmpty is not passed', () => {
        var schema = {nonEmpty: false};
        assertValidates(nonEmpty([], schema));
      });

      it('does not allow empty arrays if nonEmpty is passed', () => {
        var schema = {nonEmpty: true};
        assertFails(nonEmpty([], schema));
      });
    });

    describe('validator factory', () => {
      var validator = validators.validator;

      it('allows defining validators', () => {
        var validateNaN = validator((value) => isNaN(value));
        assertValidates(validateNaN(NaN));
        assertFails(validateNaN(1));
      });

      it('allows defining validators with custom failures', () => {
        var validate = validator((value) => 'fails');
        assertFails(validate(1), 'fails');
      });

      it('allows defining validators with custom failure info', () => {
        var validate = validator((value) => { return {failure: 'fails', key: 'value'}; });
        assert.deepEqual(validate(1), {failure: 'fails', key: 'value'});
      });

      it('has method to chain validators', () => {
        var validateNaN = validator((value) => isNaN(value));
        assert.ok(typeof validateNaN.andThen === 'function');
      });

      it('skips on empty values', () => {
        var validateNaN = validator((value) => isNaN(value));
        assert.ok(validateNaN(null));
        assert.ok(validateNaN(undefined));
      });
    });
  });
});
