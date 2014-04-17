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
    var data = this.__data;
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
   * Reduce a value this lens points to.
   *
   * @param {Function} func
   * @param {Any} id
   * @param {Object} context
   */
  reduce(func, id, context) {
    var data = this.val();
    if (Array.isArray(data)) {
      if (id !== undefined) {
        return data.reduce(func, id, context);
      } else {
        return data.reduce(func.bind(context));
      }
    } else if (typeof data === 'object') {
      var keys = Object.keys(data);
      if (id !== undefined) {
        return keys.reduce(
          (a, key) => func.call(context, a, data[key], key, data), id);
      } else {
        return keys.reduce(
          (a, key, idx) =>
            func.call(
              context, (idx === 1 ? data[a] : a), data[key], key, data));
      }
    } else if (data === undefined && id !== undefined) {
      return id;
    } else if (id !== undefined) {
      return func(id, data);
    } else {
      throw new Error(
        'attemtping to reduce a collection with a single element');
    }
  }

  transform(func) {
    var value;
    if (arguments.length === 1) {
      value = func(this.val());
    } else {
      var args = Array.prototype.slice.call(arguments, 1);
      args.unshift(this.val());
      value = func.apply(null, args);
    }
    return this.mod(value);
  }

  /**
   * Make a new lens for data
   *
   * @param {Any} data
   */
  static make(data) {
    return new this(data, []);
  }
}

module.exports = Lens;
