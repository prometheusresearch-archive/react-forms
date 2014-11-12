/**
 * @copyright Prometheus Research, LLC 2014
 */
'use strict';

var Immutable = require('immutable');

var state = Immutable.Map();

function getComponentFingerprint(component) {
  return `${component._rootNodeID}__${component._mountDepth}`;
}

var ScopeMixin = {

  componentWillMount() {
    FocusStore.registerScope(this);
  },

  componentWillUnmount() {
    FocusStore.unregisterScope(this);
  },

  focusElement(keyPath) {
    FocusStore.focusElement(this, keyPath);
  }
  
};

var FocusableMixin = {

  componentDidMount() {
    var scope = this.getFocusScope();
    var keyPath = this.getKeyPath();
    FocusStore.registerFocusable(scope, keyPath, this);
  },

  componentWillUnmount() {
    var scope = this.getFocusScope();
    var keyPath = this.getKeyPath();
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
    console.log(scopeID, key);
    console.log(state.toJS())
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

window.FocusStore = module.exports = FocusStore;
