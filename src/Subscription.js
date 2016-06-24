/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React from 'react';

import {atom} from 'derivable';
import selectValue  from 'lodash/get';
import forEach from 'lodash/forEach';

import * as Schema from './Schema';
import {update as updateValue} from './update';

export function create(schema, value) {
  value = atom(value);
  let errorList = value.derive(value => Schema.validate(schema, value));
  return new Cursor(null, schema, value, errorList, []);
}

export function select(cursor, ...key) {
  let keyPath = cursor.keyPath.concat(key);
  let schema = Schema.select(cursor.schema, key);
  let value;
  if (schema && schema.select) {
    value = cursor.root.value.derive(value =>
      schema.select(value, keyPath, schema));
  } else {
    value = cursor.value.derive(value =>
      selectValue(value, key));
  }
  let errorList = cursor.errorList; // TODO: select it too!
  return new Cursor(
    cursor.root,
    schema,
    value,
    errorList,
    keyPath,
  );
}

export function update(cursor, value) {
  let nextValue;
  if (this.keyPath.length === 0) {
    nextValue = value;
  } else {
    nextValue = updateValue(
      cursor.root.value.get(),
      cursor.keyPath,
      value,
      cursor.root.schema,
    );
  }
  this.root.value.set(nextValue);
  return cursor;
}

class Cursor {

  constructor(root, schema, value, errorList, keyPath) {
    this.root = root || this;
    this.schema = schema;
    this.value = value;
    this.errorList = errorList;
    this.keyPath = keyPath;
  }

}

export class View extends React.Component {

  constructor(props) {
    super(props);
    this.subscriptions = {};
    forEach(props, (v, k) => {
      if (k === 'children' || v == null) {
        return;
      }
      if (this.props[k] == null) {
        this.subscriptions[k] = v.reactor(v => this.setState({k: v}));
      }
    });
  }

  render() {
    return this.props.children(this.state);
  }

  componentWillReceiveProps(nextProps) {
    forEach(nextProps, (v, k) => {
      if (k === 'children' || v == null) {
        return;
      }
      if (v == null) {
        return;
      } else if (this.props[k] == null) {
        this.subscriptions[k] = v.reactor(v => this.setState({k: v}));
      } else if (v !== this.props[k]) {
        this.subscriptions[k].stop();
        this.subscriptions[k] = v.reactor(v => this.setState({k: v}));
      }
    });
    forEach(this.props, (v, k) => {
      if (k === 'children') {
        return;
      }
      if (nextProps[k] == null) {
        this.subscriptions[k].stop();
        delete this.subscriptions[k];
      }
    });
  }

  componentWillUnmount() {
    forEach(this.subscriptions, s => s.stop());
    this.subscriptions = {};
  }
}
