/**
 * @jsx React.DOM
 */
'use strict';

class Lens {

  constructor(data, path) {
    this.__data = data;
    this.__path = path;
  }

  /**
   * Return a value this lense points to
   */
  val() {
    var value = this.__data;
    for (var i = 0, len = this.__path.length; i < len; i++) {
      var key = this.__path[i];
      value = value[key.key];
      if (value === undefined && key.defaultValue !== undefined) {
        value = key.defaultValue;
      }
    }
    return value;
  }

  isUndefined() {
    var value = this.__data;

    if (value === undefined) {
      return true;
    }

    for (var i = 0, len = this.__path.length; i < len; i++) {
      var key = this.__path[i];
      value = value[key.key];
      if (value === undefined) {
        return true;
      }
    }

    return false;
  }

  rootLens() {
    return new this.constructor(this.__data, []);
  }

  root() {
    return this.__data;
  }

  parent() {
    if (this.__path.length === 0) {
      return undefined;
    } else {
      var path = this.__path.slice(0, this.__path.length - 1);
      return new this.constructor(this.__data, path);
    }
  }

  /**
   * Get a lens by a specified key
   *
   * @param {Key} key
   * @param {Any} defaultValue
   */
  get(key, defaultValue) {
    return new this.constructor(
      this.__data, this.__path.concat({key, defaultValue}));
  }

  /**
   * Shortcut for lens.get(key).mod(value)
   *
   * @param {Key} key
   * @param {Any} value
   */
  set(key, value) {
    return this.get(key).mod(value);
  }

  update(values) {
    var data = this.val();
    var copy = {};
    var k;
    for (k in data) {
      copy[k] = data[k];
    }
    for (k in values) {
      copy[k] = values[k];
    }
    return this.mod(copy);
  }

  /**
   * Return lens for a new data which points to the same location.
   *
   * @param {Any} data
   */
  for(data) {
    return new this.constructor(data, this.__path);
  }

  /**
   * Return a new copy of data by replacing a value this lens points to with a
   * new value.
   *
   * @param {Any} value
   */
  mod(value) {
    var updated, newData, prevData;
    var data = this.__data;
    var path = this.__path;

    if (path.length === 0) {
      return this.for(value);
    }

    for (var i = 0, len = path.length; i < len; i++) {
      var key = path[i];

      // copy through changed path
      if (Array.isArray(data)) {
        updated = data.slice(0);
      } else if (typeof data === 'object') {
        updated = {};
        for (var k in data) {
          updated[k] = data[k];
        }
      }

      // store reference to newly created root data
      if (newData === undefined) {
        newData = updated;
      }

      // mutate previously copied data with updated value
      if (prevData !== undefined) {
        prevData[path[i - 1].key] = updated;
      }

      // if we are at the last path key update data with a new value
      if (i === len - 1) {
        updated[key.key] = value;
      } else {
        data = updated[key.key];
        if (data === undefined && key.defaultValue !== undefined) {
          data = key.defaultValue;
        }
      }

      prevData = updated;
    }

    return this.for(newData);
  }

  /**
   * Make a new lens for data
   *
   * @param {Any} data
   */
  static make(data) {
    if (this.isLens(data)) {
      return data;
    }
    return new this(data, []);
  }

  static isLens(o) {
    return o instanceof Lens;
  }
}

module.exports = Lens.make.bind(Lens);
