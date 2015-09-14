/**
 * @copyright (c) 2014 Mathias Buus
 * @copyright (c) 2015 Prometheus Research
 */

import fs         from 'fs';
import path       from 'path';
import validator  from '../compileValidator';

let files = fs
  .readdirSync(path.join(__dirname, '/json-schema-draft4'))
  .map(function(file) {
    return (file === 'definitions.json' || file === 'refRemote.json') ?
      null :
      require('./json-schema-draft4/' + file)
  })
  .filter(Boolean)

describe('JSONSchema validation', function() {
  files.forEach(file =>
    file.forEach(test =>
      it(test.description, function() {
        let validate = validator(test.schema);
        test.tests.forEach(test =>
          assert.deepEqual(validate(test.data), test.valid, test.description));
      })));
});
