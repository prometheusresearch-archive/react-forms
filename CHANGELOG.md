# CHANGELOG

## 0.3.5

  - Do not keep validation state when schema is updated.

## 0.3.4

  - Fix schema API to allow falsy children (useful for {condition && <... />})

## 0.3.3

  - Fix release 0.3.2

## 0.3.2

  - Fix IE8 compatibility (#17).

  - Fix schema changes weren't applied to a form (#27).

## 0.3.1

  - Remove deep freezing the value in development mode.

  - Bug fixes.

## 0.3.0

  - Use BEM syntax for CSS class names.

## 0.2.0

  - Form/form element value is now consolidated together with validation state
    and serialized value in a single data structure which is accessible via
    ``value()`` method.

  - Form value can be passed to form elements via ``value`` prop and not only
    via context as before.

  - Add support for external validation via ``externalValidation`` property of
    ``Form`` component.

  - Move documentation to Sphinx.

## 0.1.0

  - Initial release.
