/**
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var React     = require('react');
var Immutable = require('immutable');
var invariant = require('./invariant');

var state = Immutable.Map();

function getComponentFingerprint(component) {
  return `${component._rootNodeID}__${component._mountDepth}`;
}

var ContextTypes = {
  focusScope: React.PropTypes.object
};

var ScopeMixin = {

  childContextTypes: ContextTypes,

  getChildContext() {
    return {focusScope: this};
  },

  componentWillMount() {
    FocusStore.registerScope(this);
  },

  componentWillUnmount() {
    FocusStore.unregisterScope(this);
  },

  /**
   * Put focus on an element.
   *
   * @param {Array<String>} keyPath
   */
  focusElement(keyPath) {
    FocusStore.focusElement(this, keyPath);
  }

};

var FocusableMixin = {

  contextTypes: ContextTypes,

  _getFocusScope() {
    var focusScope = this.context.focusScope;
    if (focusScope === undefined && typeof this.getFocusScope === 'function') {
      focusScope = this.getFocusScope();
    }
    return focusScope;
  },

  _getKeyPath() {
    if (typeof this.getKeyPath === 'function') {
      return this.getKeyPath();
    } else {
      return this.props.value.keyPath;
    }
  },

  componentDidMount() {
    var scope = this._getFocusScope();
    if (!scope) {
      return;
    }
    var keyPath = this._getKeyPath();
    FocusStore.registerFocusable(scope, keyPath, this);
  },

  componentWillUnmount() {
    var scope = this._getFocusScope();
    if (!scope) {
      return;
    }
    var keyPath = this._getKeyPath();
    FocusStore.unregisterFocusable(scope, keyPath, this);
  }
};

var FocusStore = {

  ScopeMixin,
  FocusableMixin,

  registerScope(scopeComponent) {
    var scopeID = getComponentFingerprint(scopeComponent);
    state = state.set(scopeID, Immutable.Map());
  },

  unregisterScope(scopeComponent) {
    var scopeID = getComponentFingerprint(scopeComponent);
    state = state.remove(scopeID);
  },

  registerFocusable(scopeComponent, keyPath, focusableComponent) {
    var key = keyPath.join('.');
    var scopeID = getComponentFingerprint(scopeComponent);
    state = state.update(scopeID, scope => scope.set(key, focusableComponent));
  },

  unregisterFocusable(scopeComponent, keyPath, focusableComponent) {
    var key = keyPath.join('.');
    var scopeID = getComponentFingerprint(scopeComponent);
    state = state.updateIn(scopeID, scope => scope && scope.remove(key));
  },

  focusElement(scopeComponent, keyPath) {
    var key = keyPath.join('.');
    var scopeID = getComponentFingerprint(scopeComponent);
    var component = state.getIn([scopeID, key]);
    if (typeof component.focus === 'function') {
      component.focus();
    } else {
      var node = component.getDOMNode();
      if (node) {
        node.focus();
      }
    }
  },

  _getState() {
    return state;
  }

};

module.exports = FocusStore;
