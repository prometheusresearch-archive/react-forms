# CHANGELOG

## 1.0.0 (to be released)

  - [BREAKING CHANGE] Value: value is now implemented as a cursor for value, serialized and
    validation data structures which are backed by [immutable][] library.

    It is now holds a callback which can be supplied at creation time. Consumers
    of a Value can notify produces by calling `notify()` method:

        value.update(newValue).notify()

  - [BREAKING CHANGE] Remove the use of React context mechanism.
  
    As all needed data is now propagated through `Value` cursor via `value` prop
    there's no need in context.

  - [BREAKING CHANGE] Remove mixins.

    All form components are now implemented as thin wrappers on top of base
    `<FormElement />` component thus rendering the need to abstract boilerplate
    needless.

[immutable]: https://github.com/facebook/immutable-js

## 0.6.1

  - Fix bower package

## 0.6.0

  - Update to React 0.11.0

## 0.5.2

  - Fix bug with Value.swap().

## 0.5.1

  - Fix bug with createComponentFromSchema (#36).

## 0.5.0

  - schema: `component` prop now can be a component instance. It will be handled
    as `input` prop.

  - Form components (Field, Fieldset, RepeatingFieldset) now can receive
    `className` prop.

  - Add "array" built-in type.

  - Add `.rf-Field--dirty` className when field has value (#33).

## 0.4.0

  - Form passes `update` object with `schema` and `path` attributes to
    `onChange` and `onUpdate` callbacks.

  - Read from pending state during `componentWillReceiveProps`.

## 0.3.6

  - Call back to parent only after state update.

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
