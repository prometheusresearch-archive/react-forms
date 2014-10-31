'use strict';

var assert = require('assert');
var {Map, fromJS, is} = require('immutable');
var {ScalarNode, Scalar, Mapping, List} = require('../schema');
var {ValidationAttribute, ValidationResult} = require('../ValidationAttribute');
var defineValue = require('../defineValue');

function assertEquals(a, b) {
  a = fromJS(a);
  b = fromJS(b);
  assert.ok(is(a, b), `expected ${a} to be equal to ${b}`);
}

function assertValidation(value, expected) {
  assertNotValid(value);
  assertEquals(value.validation, expected)
}
function assertValid(value) {
  assert.ok(value.isValid, 'value is not valid');
}

function assertNotValid(value) {
  assert.ok(!value.isValid, 'value is valid');
}

describe('Value with ValidationAttribute', function() {

  var success = ValidationResult.success();

  class Value extends defineValue(new ValidationAttribute('validation')) {

    get isValid() {
      return is(this.validation, success);
    }
  }

  function create(schema, initial, attributes) {
    if (initial === undefined) {
      initial = Map();
    }
    if (attributes === undefined) {
      attributes = Map();
    }
    return Value.create(schema, initial, attributes);
  }

  class NumericScalarNode extends ScalarNode {

    validate(value) {
      var numeric = parseInt(value, 10);
      if (isNaN(numeric)) {
        return new Error('is not a number');
      }
    }

  }

  var NOT_NUMBER = new ValidationResult('is not a number');

  it('defines getter for attribute', function() {
      var schema = Mapping({
        x: NumericScalarNode.create({defaultValue: 1}),
        w: Scalar()
      });
    var value = Value.create(schema, {x: 'x'});
    assertNotValid(value);
    assertEquals(value.validation, value.attributes.get('validation'));
    assertEquals(value.validation, new ValidationResult(null, {x: NOT_NUMBER}));
  });

  describe('get', function() {

    it('propagates success', function() {
      var schema = Mapping({
        x: NumericScalarNode.create({defaultValue: 1}),
        w: Scalar()
      });

      var value = create(schema);
      assertValid(value);
      assertValid(value.get('x'));
      assertValid(value.get('w'));
    });

    it('propagates failure', function() {
      var schema = Mapping({
        x: NumericScalarNode.create({defaultValue: 1}),
        w: Scalar()
      });

      var value = create(schema, {x: 's'});
      assertValidation(value, new ValidationResult(null, Map({x: NOT_NUMBER})));
      assertValidation(value.get('x'), NOT_NUMBER);
      assertValid(value.get('w'));
    });
  
    it('propagates failure from default value', function() {
      var schema = Mapping({
        x: NumericScalarNode.create({defaultValue: 'x'}),
        w: Scalar()
      });

      var value = create(schema);
      assertValidation(value, new ValidationResult(null, Map({x: NOT_NUMBER})));
      assertValidation(value.get('x'), NOT_NUMBER);
      assertValid(value.get('w'));
    });

    it('validates on set', function() {
      var schema = Mapping({
        x: NumericScalarNode.create({defaultValue: 1}),
        w: Scalar()
      });

      var value = create(schema);
      var updated = value.get('x').set(2).root;
      assertValid(updated);
      assertValid(updated.get('x'));
      assertValid(updated.get('w'));
    });

    it('validates on set (invalid value)', function() {
      var schema = Mapping({
        x: NumericScalarNode.create({defaultValue: 1}),
        w: Scalar()
      });

      var value = create(schema);
      var updated = value.get('x').set('a').root;
      assertValidation(updated, new ValidationResult(null, Map({x: NOT_NUMBER})));
      assertValidation(updated.get('x'), NOT_NUMBER);
      assertValid(updated.get('w'));

      var updated2 = updated.get('x').set(3).root;
      assertValid(updated2);
      assertValid(updated2.get('x'));
      assertValid(updated2.get('w'));
    });

    it('validates on root set (invalid value)', function() {
      var schema = Mapping({
        x: NumericScalarNode.create({defaultValue: 1}),
        w: Scalar()
      });

      var value = create(schema);
      var updated = value.set({x: 'a'}).root;
      assertValidation(updated, new ValidationResult(null, Map({x: NOT_NUMBER})));
      assertValidation(updated.get('x'), NOT_NUMBER);
      assertValid(updated.get('w'));

      var updated2 = updated.set({x: 2}).root;
      assertValid(updated2);
      assertValid(updated2.get('x'));
      assertValid(updated2.get('w'));
    });

    it('propagates success (nested schemas)', function() {
      var schema = Mapping({
        x: Mapping({defaultValue: {}}, {
          y: Scalar({defaultValue: 1}),
          z: Scalar()
        })
      });
      var value = create(schema);
      assertValid(value);
      assertValid(value.get('x'));
      assertValid(value.getIn(['x', 'y']));
    });

    it('propagates failure (nested schemas)', function() {
      var schema = Mapping({
        x: Mapping({defaultValue: {}}, {
          y: NumericScalarNode.create({defaultValue: 1}),
          z: Scalar()
        })
      });
      var value = create(schema, {x: {y: 'x'}});
      assertValidation(value, new ValidationResult(null, {x: new ValidationResult(null, {y: NOT_NUMBER})}));
      assertValidation(value.get('x'), new ValidationResult(null, {y: NOT_NUMBER}));
      assertValidation(value.getIn(['x', 'y']), NOT_NUMBER);
    });

    it('propagates failure from default value (nested schemas)', function() {
      var schema = Mapping({
        x: Mapping({defaultValue: {}}, {
          y: NumericScalarNode.create({defaultValue: 'x'}),
          z: Scalar()
        })
      });
      var value = create(schema);
      assertValidation(value, new ValidationResult(null, {x: new ValidationResult(null, {y: NOT_NUMBER})}));
      assertValidation(value.get('x'), new ValidationResult(null, {y: NOT_NUMBER}));
      assertValidation(value.getIn(['x', 'y']), NOT_NUMBER);
    });
  
    it('validates on set (nested schema)', function() {
      var schema = Mapping({
        x: Mapping({defaultValue: {}}, {
          y: Scalar({defaultValue: 1}),
          z: Scalar()
        })
      });
      var value = create(schema);
      var updated = value.getIn(['x', 'y']).set(2).root;
      assertValid(updated);
      assertValid(updated.get('x'));
      assertValid(updated.getIn(['x', 'y']));
    });

    it('validates on set (invalid value, nested schema)', function() {
      var schema = Mapping({
        x: Mapping({defaultValue: {}}, {
          y: NumericScalarNode.create({defaultValue: 1}),
          z: Scalar()
        })
      });
      var value = create(schema);
      var updated = value.getIn(['x', 'y']).set('x').root;
      assertValidation(updated, new ValidationResult(null, {x: new ValidationResult(null, {y: NOT_NUMBER})}));
      assertValidation(updated.get('x'), new ValidationResult(null, {y: NOT_NUMBER}));
      assertValidation(updated.getIn(['x', 'y']), NOT_NUMBER);

      var updated2 = updated.getIn(['x', 'y']).set(3).root;
      assertValid(updated2);
      assertValid(updated2.get('x'));
      assertValid(updated2.getIn(['x', 'y']));
    });

    it('validates on intermedate value set (invalid value, nested schema)', function() {
      var schema = Mapping({
        x: Mapping({defaultValue: {}}, {
          y: NumericScalarNode.create({defaultValue: 1}),
          z: Scalar()
        })
      });
      var value = create(schema);
      var updated = value.get('x').set({y: 'x'}).root;
      assertValidation(updated, new ValidationResult(null, {x: new ValidationResult(null, {y: NOT_NUMBER})}));
      assertValidation(updated.get('x'), new ValidationResult(null, {y: NOT_NUMBER}));
      assertValidation(updated.getIn(['x', 'y']), NOT_NUMBER);

      var updated2 = updated.get('x').set({y: 3}).root;
      assertValid(updated2);
      assertValid(updated2.get('x'));
      assertValid(updated2.getIn(['x', 'y']));
    });

  });

});

