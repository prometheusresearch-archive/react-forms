/**
 * @copyright (c) 2014 Mathias Buus
 * @copyright (c) 2015 Prometheus Research
 */

import cosmic           from './fixtures/cosmic';
import validator        from '../compileValidator';

describe('JSONSchema custom test cases', function() {

  it('simple', function() {
    let schema = {
      required: true,
      type: 'object',
      properties: {
        hello: {type:'string', required:true}
      }
    };

    let validate = validator(schema);

    assert(validate({hello: 'world'}), 'should be valid')
    assert(!validate(), 'should be invalid')
    assert(!validate({}), 'should be invalid')
  })

  it('advanced', function() {
    let validate = validator(cosmic.schema)

    assert(validate(cosmic.valid), 'should be valid')
    assert(!validate(cosmic.invalid), 'should be invalid')
  })

  it('greedy/false', function() {
    let validate = validator({
      type: 'object',
      properties: {
        x: {
          type: 'number'
        }
      },
      required: ['x', 'y']
    });
    assert(!validate({}), 'should be invalid')
    assert(validate.errors.length === 2);
    assert(validate.errors[0].field === 'data.x')
    assert(validate.errors[0].message === 'is required')
    assert(validate.errors[1].field === 'data.y')
    assert(validate.errors[1].message === 'is required')
    assert(!validate({x: 'string'}), 'should be invalid')
    assert(validate.errors.length === 1);
    assert(validate.errors[0].field === 'data.y')
    assert(validate.errors[0].message === 'is required')
    assert(!validate({x: 'string', y: 'value'}), 'should be invalid')
    assert(validate.errors.length === 1);
    assert(validate.errors[0].field === 'data.x')
    assert(validate.errors[0].message === 'is the wrong type')
  });

  it('greedy/true', function() {
    let validate = validator({
      type: 'object',
      properties: {
        x: {
          type: 'number'
        }
      },
      required: ['x', 'y']
    }, {
      greedy: true
    });
    assert(!validate({}), 'should be invalid')
    assert(validate.errors.length === 2);
    assert(validate.errors[0].field === 'data.x')
    assert(validate.errors[0].message === 'is required')
    assert(validate.errors[1].field === 'data.y')
    assert(validate.errors[1].message === 'is required')
    assert(!validate({x: 'string'}), 'should be invalid')
    assert(validate.errors.length === 2);
    assert(validate.errors[0].field === 'data.y')
    assert(validate.errors[0].message === 'is required')
    assert(validate.errors[1].field === 'data.x')
    assert(validate.errors[1].message === 'is the wrong type')
    assert(!validate({x: 'string', y: 'value'}), 'should be invalid')
    assert(validate.errors.length === 1);
    assert(validate.errors[0].field === 'data.x')
    assert(validate.errors[0].message === 'is the wrong type')
    assert(validate({x: 1, y: 'value'}), 'should be invalid')
  });

  it('additional props', function() {
    let validate = validator({
      type: 'object',
      additionalProperties: false
    }, {
      verbose: true
    })

    assert(validate({}))
    assert(!validate({foo:'bar'}))
    assert(validate.errors[0].value === 'data.foo', 'should output the property not allowed in verbose mode')
  })

  it('array', function() {
    let validate = validator({
      type: 'array',
      required: true,
      items: {
        type: 'string'
      }
    })

    assert(!validate({}), 'wrong type')
    assert(!validate(), 'is required')
    assert(validate(['test']))
  })

  it('nested array', function() {
    let validate = validator({
      type: 'object',
      properties: {
        list: {
          type: 'array',
          required: true,
          items: {
            type: 'string'
          }
        }
      }
    })

    assert(!validate({}), 'is required')
    assert(validate({list:['test']}))
    assert(!validate({list:[1]}))
    assert(validate.errors[0].field === 'data.list.0');
    assert(!validate({list:['test', 2]}))
    assert(validate.errors[0].field === 'data.list.1');
  })

  it('enum', function() {
    let validate = validator({
      type: 'object',
      properties: {
        foo: {
          type: 'number',
          required: true,
          enum: [42]
        }
      }
    })

    assert(!validate({}), 'is required')
    assert(validate({foo:42}))
    assert(!validate({foo:43}))
  })

  it('minimum/maximum', function() {
    let validate = validator({
      type: 'object',
      properties: {
        foo: {
          type: 'number',
          minimum: 0,
          maximum: 0
        }
      }
    })

    assert(!validate({foo:-42}))
    assert(validate({foo:0}))
    assert(!validate({foo:42}))
  })

  it('exclusiveMinimum/exclusiveMaximum', function() {
    let validate = validator({
      type: 'object',
      properties: {
        foo: {
          type: 'number',
          minimum: 10,
          maximum: 20,
          exclusiveMinimum: true,
          exclusiveMaximum: true
        }
      }
    })

    assert(!validate({foo:10}))
    assert(validate({foo:11}))
    assert(!validate({foo:20}))
    assert(validate({foo:19}))
  })

  it('allow to validate undefined as object', function() {
    let validate = validator({
      type: 'object',
      properties: {
        foo: {
          type: 'string',
        }
      },
      required: ['foo']
    }, {undefinedAsObject: true});

    assert(!validate(undefined));
    assert(validate.errors[0].field === 'data.foo');
    assert(validate.errors[0].message === 'is required');
  });

  it('allow to validate null as object', function() {
    let validate = validator({
      type: 'object',
      properties: {
        foo: {
          type: 'string',
        }
      },
      required: ['foo']
    }, {nullAsObject: true});

    assert(!validate(null));
    assert(validate.errors[0].field === 'data.foo');
    assert(validate.errors[0].message === 'is required');
  });

  it('allow to validate null and undefined as objects', function() {
    let validate = validator({
      type: 'object',
      properties: {
        foo: {
          type: 'string',
        }
      },
      required: ['foo']
    }, {nullAsObject: true, undefinedAsObject: true});

    assert(!validate(null));
    assert(validate.errors[0].field === 'data.foo');
    assert(validate.errors[0].message === 'is required');

    assert(!validate(undefined));
    assert(validate.errors[0].field === 'data.foo');
    assert(validate.errors[0].message === 'is required');
  });

  it('allow to validate undefined as array', function() {
    let validate = validator({
      type: 'array',
      minItems: 1
    }, {undefinedAsArray: true});

    assert(!validate(undefined));
    assert(validate.errors[0].field === 'data');
    assert(validate.errors[0].message === 'has less items than allowed');
  });

  it('allow to validate null as object', function() {
    let validate = validator({
      type: 'array',
      minItems: 1
    }, {nullAsArray: true});

    assert(!validate(null));
    assert(validate.errors[0].field === 'data');
    assert(validate.errors[0].message === 'has less items than allowed');
  });

  it('allow to validate null and undefined as objects', function() {
    let validate = validator({
      type: 'array',
      minItems: 1
    }, {nullAsArray: true, undefinedAsArray: true});

    assert(!validate(null));
    assert(validate.errors[0].field === 'data');
    assert(validate.errors[0].message === 'has less items than allowed');

    assert(!validate(undefined));
    assert(validate.errors[0].field === 'data');
    assert(validate.errors[0].message === 'has less items than allowed');
  });

  it('custom format', function() {
    let validate = validator({
      type: 'object',
      properties: {
        foo: {
          type: 'string',
          format: 'as'
        }
      }
    }, {formats: {as:/^a+$/}})

    assert(!validate({foo:''}), 'not as')
    assert(!validate({foo:'b'}), 'not as')
    assert(!validate({foo:'aaab'}), 'not as')
    assert(validate({foo:'a'}), 'as')
    assert(validate({foo:'aaaaaa'}), 'as')
  })

  it('custom format function', function() {
    let validate = validator({
      type: 'object',
      properties: {
        foo: {
          type: 'string',
          format: 'as'
        }
      }
    }, {formats: {as:function(s) { return /^a+$/.test(s) } }})

    assert(!validate({foo:''}), 'not as')
    assert(!validate({foo:'b'}), 'not as')
    assert(!validate({foo:'aaab'}), 'not as')
    assert(validate({foo:'a'}), 'as')
    assert(validate({foo:'aaaaaa'}), 'as')
  })

  it('custom format function with custom error reporting', function() {
    let validate = validator({
      type: 'object',
      properties: {
        foo: {
          type: 'string',
          format: 'as'
        }
      }
    }, {
      formats: {
        as:function(s) {
          if (s !== 'as') {
            return 'custom error message'
          }
          return true;
        }
      }
    })

    assert(!validate({foo:''}), 'should be "as"')
    assert(validate.errors);
    assert(validate.errors[0]);
    assert(validate.errors[0].field === 'data.foo');
    assert(validate.errors[0].message === 'custom error message');
  })

  it('custom format function with custom error locations', function() {
    let validate = validator({
      type: 'object',
      format(value) {
        if (value.foo !== value.bar) {
          return {field: 'foo', message: 'foo should be equal to bar'};
        } else {
          return true;
        }
      },
      properties: {
        foo: {type: 'number'},
        bar: {type: 'number'}
      }
    });

    assert(!validate({foo: 1, bar: 2}));
    assert(validate.errors);
    assert(validate.errors.length === 1);
    assert(validate.errors[0]);
    assert(validate.errors[0].field === 'data.foo');
    assert(validate.errors[0].message === 'foo should be equal to bar');
  })

  it('custom format function with custom error locations', function() {
    let validate = validator({
      type: 'object',
      format(value) {
        if (value.foo !== value.bar) {
          return [{field: 'foo', message: 'foo should be equal to bar'}, 'oops'];
        } else {
          return true;
        }
      },
      properties: {
        foo: {type: 'number'},
        bar: {type: 'number'}
      }
    });

    assert(!validate({foo: 1, bar: 2}));
    assert(validate.errors);
    assert(validate.errors.length === 2);
    assert(validate.errors[0]);
    assert(validate.errors[0].field === 'data.foo');
    assert(validate.errors[0].message === 'foo should be equal to bar');
    assert(validate.errors[1]);
    assert(validate.errors[1].field === 'data');
    assert(validate.errors[1].message === 'oops');
  })

  it('custom format function accept current node as second argument', function() {
    let touchedNodes = [];
    let schema = {
      type: 'object',
      properties: {
        foo: {
          type: 'string',
          format: 'as'
        }
      }
    };
    let validate = validator(schema, {
      formats: {
        as:function(s, n) {
          touchedNodes.push(n);
          return s === 'as';
        }
      }
    })

    assert(validate({foo:'as'}), 'as')
    assert(touchedNodes[0] === schema.properties.foo);
  })

  it('custom format function can be specified inline', function() {
    let validate = validator({
      type: 'object',
      properties: {
        foo: {
          type: 'string',
          format: function(s) {
            return s === 'as';
          }
        }
      }
    });
    assert(!validate({foo:'s'}));
    assert(validate({foo:'as'}));
  })

  it('do not mutate schema', function() {
    let sch = {
      items: [
        {}
      ],
      additionalItems: {
        type: 'integer'
      }
    }

    let copy = JSON.parse(JSON.stringify(sch))

    validator(sch)

    assert.deepEqual(sch, copy, 'did not mutate')
  })

  it('#toJSON()', function() {
    let schema = {
      required: true,
      type: 'object',
      properties: {
        hello: {type:'string', required:true}
      }
    }

    let validate = validator(schema)

    assert.deepEqual(validate.toJSON(), schema, 'should return original schema')
  })

  it('external schemas', function() {
    let ext = {type: 'string'}
    let schema = {
      required: true,
      $ref: '#ext'
    }

    let validate = validator(schema, {schemas: {ext:ext}})

    assert(validate('hello string'), 'is a string')
    assert(!validate(42), 'not a string')
  })

  it('nested required array decl', function() {
    let schema = {
      properties: {
        x: {
          type: 'object',
          properties: {
            y: {
              type: 'object',
              properties: {
                z: {
                  type: 'string'
                }
              },
              required: ['z']
            }
          }
        }
      },
      required: ['x']
    }

    let validate = validator(schema)

    assert(validate({x: {}}), 'should be valid')
    assert(!validate({}), 'should not be valid')
    assert(
      validate.errors[0].field === 'data.x',
      'should output the missing field')
  })

  it('verbose mode', function() {
    let schema = {
      required: true,
      type: 'object',
      properties: {
        hello: {
          required: true,
          type: 'string'
        }
      }
    };

    let validate = validator(schema, {verbose: true})

    assert(validate({hello: 'string'}), 'should be valid')
    assert(!validate({hello: 100}), 'should not be valid')
    assert(
      validate.errors[0].value === 100,
      'error object should contain the invalid value')
  })

  it('additional props in verbose mode', function() {
    let schema = {
      type: 'object',
      required: true,
      additionalProperties: false,
      properties: {
        foo: {
          type: 'string'
        },
        'hello world': {
          type: 'object',
          required: true,
          additionalProperties: false,
          properties: {
            foo: {
              type: 'string'
            }
          }
        }
      }
    };

    let validate = validator(schema, {verbose: true})

    validate({'hello world': {bar: 'string'}});

    assert(
      validate.errors[0].value === 'data["hello world"].bar',
      'should output the path to the additional prop in the error')
  })

  it('Date.now() is an integer', function() {
    let schema = {type: 'integer'}
    let validate = validator(schema)

    assert(validate(Date.now()), 'is integer')
  })
});
