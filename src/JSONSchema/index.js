/**
 * @copyright 2015, Prometheus Research, LLC
 */

import compileValidator from './compileValidator';

/**
 * Create a JSON schema validator which returns a list of errors for invalid
 * objects and an empty list of errors for valid objects.
 */
export default function JSONSchema(schema, options) {
  let validate = compileValidator(schema, options);
  return function JSONSchema__validate(obj) {
    let result = validate(obj);
    let errors = validate.errors;
    return result ? [] : errors;
  };
}
