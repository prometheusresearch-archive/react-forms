---
title: Home
---

React Forms library provides a set of tools for [React][] to handle form
rendering and validation.

## Installation

To use version documented here you need to install `beta` tag from npm:

    % npm install react-forms@beta

..note CommonJS

  You would probably also need a module bundler such as [Browserify][] or
  [Webpack][] as React Forms is distributed as a set of CommonJS modules.

## Usage

React Forms doesn't provide any `<Form />` component.

Instead it makes implementing form components an easy task by providing dataflow
primitives.

..note ES2015

  Note that examples are written using ES2015 syntax. You would probably use
  [Babel][] with `es2015` and `react` presets enabled to compile code to ES5 which
  is compatible with most of the current runtimes.

### Form component / data flow

This is the example where form value is managed as a part of local component
state. Some might put form value in a Flux/Redux store instead.

```js
import React from 'react'
import {Fieldset, Field, createValue} from 'react-forms'

class Form extends React.Component {

  constructor(props) {
    super(props)
    let formValue = createValue({
      value: props.value,
      onChange: this.onChange.bind(this)
    })
    this.state = {formValue}
  }

  onChange(formValue) {
    this.setState({formValue})
  }

  render() {
    return (
      <Fieldset formValue={this.state.formValue}>
        <Field select="firstName" label="First name" />
        <Field select="lastName" label="Last name" />
      </Fieldset>
    )
  }
}
```

Then you can use `<Form />` component like any regular React component:

```js
import {render} from 'react-dom'

render(
  <Form value={{firstName: 'Michael', lastName: 'Jackson'}} />,
  document.getElementById('form')
)
```
### Validation

React Forms can validate form value using [JSON schema][]:

```js
let schema = {
  type: 'object',
  properties: {
    firstName: {type: 'string'},
    lastName: {type: 'string'}
  }
}
```

Simply pass it to a `createValue(..)` function:

```js
let formValue = createValue({value, onChange, schema})
```

### Dataflow

### Custom input components

### Custom fieldset components

### Pattern for reusable forms

### Reactive dataflow

[React]: https://reactjs.org
