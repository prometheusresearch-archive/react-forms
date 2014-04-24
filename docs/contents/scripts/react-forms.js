(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(__browserify__,module,exports){
;(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['react'], factory);
  } else {
    root.ReactForms = factory(root.React);
  }
})(window, function(React) {

  var __ReactShim = window.__ReactShim = window.__ReactShim || {};

  __ReactShim.React = React;

  __ReactShim.cloneWithProps = React.addons.cloneWithProps;

  __ReactShim.cx = React.addons.classSet;

  __ReactShim.invariant = function(check, msg) {
    if (!check) {
      throw new Error(msg);
    }
  }

  var mergeInto = __ReactShim.mergeInto = function(dst, src) {
    for (var k in src) {
      if (src.hasOwnProperty(k)) {
        dst[k] = src[k];
      }
    }
  }

  __ReactShim.merge = function(a, b) {
    var c = {};
    mergeInto(c, a);
    mergeInto(c, b);
    return c;
  }

  __ReactShim.emptyFunction = function() {
  }

  __ReactShim.emptyFunction.thatReturnsTrue = function() {
    return true;
  }

  __ReactShim.ReactUpdates = {
    batchedUpdates: function(cb) { cb(); }
  };

  return __browserify__('./lib/');
});

},{"./lib/":18}],2:[function(__browserify__,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var React           = (window.__ReactShim.React);
var cx              = (window.__ReactShim.cx);
var mergeInto       = (window.__ReactShim.mergeInto);
var FieldMixin      = __browserify__('./FieldMixin');
var Message         = __browserify__('./Message');

var Field = React.createClass({displayName: 'Field',
  mixins: [FieldMixin],

  propTypes: {
    label: React.PropTypes.string
  },

  renderLabel: function(props) {
    var schema = this.schema();
    var label = this.props.label ? this.props.label : schema.props.label;
    var hint = this.props.hint ? this.props.hint : schema.props.hint;
    var labelProps = {className: 'react-forms-label'};
    if (props) {
      mergeInto(labelProps, props);
    }
    return (label || hint) && React.DOM.label(labelProps,
      label,
      hint && React.DOM.span( {className:"react-forms-hint"}, hint));
  },

  render: function() {
    var validation = this.validation();

    var className = cx({
      'react-forms-field': true,
      'invalid': validation.isFailure
    });

    var id = this._rootNodeID;

    return (
      React.DOM.div( {className:className}, 
        this.renderLabel({htmlFor: id}),
        this.transferPropsTo(this.renderInputComponent({id:id})),
        validation.isFailure &&
          Message(null, validation.validation.failure)
      )
    );
  }
});

module.exports = Field;

},{"./FieldMixin":3,"./Message":11}],3:[function(__browserify__,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var React             = (window.__ReactShim.React);
var cloneWithProps    = (window.__ReactShim.cloneWithProps);
var mergeInto         = (window.__ReactShim.mergeInto);
var getTypeFromSchema = __browserify__('./getTypeFromSchema');
var FormElementMixin  = __browserify__('./FormElementMixin');

/**
 * Mixin for implementing fieldcomponents.
 *
 * See <Field /> component for the basic implementation example.
 */
var FieldMixin = {
  mixins: [FormElementMixin],

  propTypes: {
    input: React.PropTypes.component
  },

  onChange: function(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }

    var value = getValueFromEvent(e);

    this.updateValue(value);
  },

  /**
   * Render input component.
   *
   * @returns {ReactComponent}
   */
  renderInputComponent: function(props) {
    var value = this.value();
    var validation = this.validation();
    var schema = this.schema();

    if (validation.isSuccess) {
      value = getTypeFromSchema(schema).serialize(value);
    }

    var input = this.props.input || schema && schema.props.input;
    var inputProps = {value:value, onChange: this.onChange};

    if (props) {
      mergeInto(inputProps, props);
    }

    if (input) {
      return cloneWithProps(input, inputProps);
    } else {
      inputProps.type = 'text';
      return React.DOM.input(inputProps);
    }
  }
};

/**
 * Extract value from event
 *
 * We support both React.DOM 'change' events and custom change events
 * emitted from custom components.
 *
 * This function also normalizes empty strings to null.
 *
 * @param {Event} e
 */
function getValueFromEvent(e) {
  return e && e.target && e.target.value !== undefined ?
    e.target.value : e;
}

module.exports = FieldMixin;

},{"./FormElementMixin":8,"./getTypeFromSchema":17}],4:[function(__browserify__,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var React         = (window.__ReactShim.React);
var FieldsetMixin = __browserify__('./FieldsetMixin');

var Fieldset = React.createClass({displayName: 'Fieldset',
  mixins: [FieldsetMixin],

  render: function() {
    var schema = this.schema();
    return this.transferPropsTo(
      React.DOM.div( {className:"react-forms-fieldset"}, 
        schema.props.label && React.DOM.h4(null, schema.props.label),
        schema.map(this.renderField)
      )
    );
  }
});

module.exports = Fieldset;

},{"./FieldsetMixin":5}],5:[function(__browserify__,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var FormElementMixin  = __browserify__('./FormElementMixin');
var FormContextMixin  = __browserify__('./FormContextMixin');

/**
 * Mixin for implementing fieldcomponents.
 *
 * See <Fieldset /> component for the basic implementation example.
 */
var FieldsetMixin = {
  mixins: [FormElementMixin, FormContextMixin],

  /**
   * Render field by name
   *
   * @param {String} name
   * @returns {ReactComponent}
   */
  renderFieldByName: function(name) {
    return this.renderField(this.schema().children[name]);
  },

  /**
   * Render field given a schema node
   *
   * @param {Schema} node
   * @returns {ReactComponent}
   */
  renderField: function(node) {
    // prevent circular require
    var createComponentFromSchema = __browserify__('./createComponentFromSchema');
    return createComponentFromSchema(node);
  }
};

module.exports = FieldsetMixin;

},{"./FormContextMixin":7,"./FormElementMixin":8,"./createComponentFromSchema":15}],6:[function(__browserify__,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var React     = (window.__ReactShim.React);
var FormMixin = __browserify__('./FormMixin');
var FormFor   = __browserify__('./FormFor');

var Form = React.createClass({displayName: 'Form',
  mixins: [FormMixin],

  render: function() {
    return this.transferPropsTo(
      React.DOM.form(null, 
        FormFor(null )
      )
    );
  }
});

module.exports = Form;

},{"./FormFor":9,"./FormMixin":10}],7:[function(__browserify__,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var React = (window.__ReactShim.React);

/**
 * Mixin for components which exposes form context.
 *
 * See Form (via FormMixin), Fieldset (via FieldsetMixin) and RepeatingFieldset
 * (via RepeatingFieldsetMixin) for components which expose form context.
 */
var FormContextMixin = {

  childContextTypes: {
    value: React.PropTypes.object,
    validation: React.PropTypes.object,
    schema: React.PropTypes.object,
    onValueUpdate: React.PropTypes.func
  },

  getChildContext: function() {
    return {
      value: this.valueLens(),
      validation: this.validationLens(),
      schema: this.schema(),
      onValueUpdate: this.onValueUpdate
    };
  }
};

module.exports = FormContextMixin;

},{}],8:[function(__browserify__,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var React                     = (window.__ReactShim.React);
var invariant                 = (window.__ReactShim.invariant);
var schema                    = __browserify__('./schema');
var success                   = __browserify__('./validation').success;
var ValidatedMixin            = __browserify__('./ValidatedMixin');
var getDefaultValueForSchema  = __browserify__('./getDefaultValueForSchema');

/**
 * Mixin for the form element (form field, fieldset of repeating fieldset).
 */
var FormElementMixin = {

  mixins: [ValidatedMixin],

  propTypes: {
    name: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ])
  },

  contextTypes: {
    validation: React.PropTypes.object,
    value: React.PropTypes.object,
    schema: React.PropTypes.object,
    onValueUpdate: React.PropTypes.func
  },

  /**
   * Return lens for the form element value or for the value passed as an
   * argument.
   *
   * @param {Any?} value
   * @returns {Lens}
   */
  valueLens: function(value) {
    var lens = this.context.value;
    if (this.props.name !== undefined) {
      lens = lens.get(this.props.name, getDefaultValueForSchema(this.schema()));
    }
    return value ? lens.for(value) : lens;
  },

  /**
   * Return lens for the form element validation state or for the validation
   * state passed as an argument.
   *
   * @param {Validation?} validation
   * @returns {Lens}
   */
  validationLens: function(validation) {
    var lens = this.context.validation;
    if (this.props.name !== undefined) {
      lens = lens.get('children', {}).get(this.props.name, success);
    }
    return validation ? lens.for(validation) : lens;
  },

  /**
   * Return form element value.
   *
   * @returns {Any}
   */
  value: function() {
    return this.valueLens().val();
  },

  /**
   * Return form element validation state.
   *
   * @returns {Validation}
   */
  validation: function() {
    return this.validationLens().val();
  },

  /**
   * Return form element schema.
   *
   * @returns {Schema}
   */
  schema: function() {
    var node = this.context.schema;

    if (node && this.props.name !== undefined) {
      if (schema.isSchema(node)) {
        node = node.children[this.props.name];
      } else if (schema.isList(node)) {
        node = node.children;
      } else {
        invariant(false, 'invalid field used for schema');
      }
    }

    return node;
  },

  /**
   * Called when the form value and validation state is being updated.
   *
   * This method intercepts updated value and validation state and perform its
   * own local validation and deserialization. Then passes everything up the
   * owner.
   *
   * @param {Any} value
   * @param {Validation} validation
   */
  onValueUpdate: function(value, validation) {
    var valueLens = this.valueLens(value);
    var validationLens = this.validationLens(validation);

    var local = this.validateOnly(
        valueLens.val(),
        validationLens.val().children);

    valueLens = valueLens.mod(local.value);
    validationLens = validationLens.update(local.validation);

    this.context.onValueUpdate(valueLens.root(), validationLens.root());
  },

  /**
   * Update the value for the current form element.
   *
   * @param {Any} value
   */
  updateValue: function(value) {
    this.onValueUpdate(this.valueLens().mod(value).root(), success);
  }

};

module.exports = FormElementMixin;

},{"./ValidatedMixin":14,"./getDefaultValueForSchema":16,"./schema":24,"./validation":26}],9:[function(__browserify__,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var React                     = (window.__ReactShim.React);
var FormElementMixin          = __browserify__('./FormElementMixin');
var createComponentFromSchema = __browserify__('./createComponentFromSchema');

/**
 * A "proxy" component which renders into field, fieldset or repeating fieldset
 * based on a current schema node.
 */
var FormFor = React.createClass({displayName: 'FormFor',
  mixins: [FormElementMixin],

  propTypes: {
    name: React.PropTypes.string
  },

  render: function() {
    return this.transferPropsTo(createComponentFromSchema(this.schema()));
  }
});

module.exports = FormFor;

},{"./FormElementMixin":8,"./createComponentFromSchema":15}],10:[function(__browserify__,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var React                     = (window.__ReactShim.React);
var ReactUpdates              = (window.__ReactShim.ReactUpdates);
var lens                      = __browserify__('./lens');
var ValidatedMixin            = __browserify__('./ValidatedMixin');
var FormContextMixin          = __browserify__('./FormContextMixin');
var getDefaultValueForSchema  = __browserify__('./getDefaultValueForSchema');

/**
 * Mixin which handles form value and form validation state.
 *
 * @private
 */
var FormStateMixin = {
  mixins: [ValidatedMixin],

  propTypes: {
    defaultValue: React.PropTypes.any,
    value: React.PropTypes.any,
    schema: React.PropTypes.object,
    onChange: React.PropTypes.func,
    onUpdate: React.PropTypes.func
  },

  getInitialState: function() {
    var value = this.props.value ||
      this.props.defaultValue ||
      getDefaultValueForSchema(this.props.schema);
    var validation = this.validate(value);
    return validation;
  },

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.value !== undefined) {
      var nextState;
      if (nextProps.validation) {
        nextState = {
          value: nextProps.value,
          validation: nextProps.validation
        };
      } else {
        nextState = this.validate(nextProps.value);
      }
      this.setState(nextState);
    }
  },

  /**
   * Return lens for the form value or for the value passed as an argument.
   *
   * @param {Any?} value
   * @returns {Lens}
   */
  valueLens: function(value) {
    return lens(value !== undefined ? value : this.state.value);
  },

  /**
   * Return lens for the form validation state or for the validation state
   * passed as an argument.
   *
   * @param {Validation?} validation
   * @returns {Lens}
   */
  validationLens: function(validation) {
    return lens(validation !== undefined ? validation : this.state.validation);
  },

  /**
   * Return form value.
   */
  value: function() {
    return this.state.value;
  },

  /**
   * Return form validation state.
   */
  validation: function() {
    return this.state.validation;
  },

  /**
   * Form schema.
   *
   * @returns {Schema}
   */
  schema: function() {
    return this.props.schema;
  },

  /**
   * Called when the form value and validation state is being updated.
   *
   * @param {Any} value
   * @param {Validation} validation
   */
  onValueUpdate: function(value, validation) {
    ReactUpdates.batchedUpdates(function()  {
      if (this.props.onUpdate) {
        this.props.onUpdate(value);
      }
      if (this.props.onChange && validation.isSuccess) {
        this.props.onChange(value);
      }
      this.setState({value:value, validation:validation});
    }.bind(this));
  }
};

var FormMixin = {
  mixins: [FormStateMixin, FormContextMixin]
};

module.exports = FormMixin;

},{"./FormContextMixin":7,"./ValidatedMixin":14,"./getDefaultValueForSchema":16,"./lens":23}],11:[function(__browserify__,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var React = (window.__ReactShim.React);

var Message = React.createClass({displayName: 'Message',

  render: function() {
    return this.transferPropsTo(
      React.DOM.span( {className:"react-forms-message"}, 
        this.props.children
      )
    );
  }
});

module.exports = Message;

},{}],12:[function(__browserify__,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var React                   = (window.__ReactShim.React);
var RepeatingFieldsetMixin  = __browserify__('./RepeatingFieldsetMixin');

var Item = React.createClass({displayName: 'Item',

  render: function() {
    return this.transferPropsTo(
      React.DOM.div( {className:"react-forms-repeating-fieldset-item"}, 
        this.props.children,
        React.DOM.button(
          {onClick:this.onRemove,
          type:"button",
          className:"react-forms-repeating-fieldset-remove"}, "×")
      )
    );
  },

  onRemove: function() {
    if (this.props.onRemove) {
      this.props.onRemove(this.props.name);
    }
  }

});

var RepeatingFieldset = React.createClass({displayName: 'RepeatingFieldset',

  mixins: [RepeatingFieldsetMixin],

  getDefaultProps: function() {
    return {
      item: Item
    };
  },

  render: function() {
    var schema = this.schema();
    var Component = this.props.item;
    var items = this.items().map(function(item) 
      {return Component(
        {key:item.props.name,
        name:item.props.name,
        onRemove:this.removeItem}, 
        item
      );}.bind(this)
    );
    return this.transferPropsTo(
      React.DOM.div( {className:"react-forms-repeating-fieldset"}, 
        schema.props.label && React.DOM.h4(null, schema.props.label),
        items,
        React.DOM.button(
          {type:"button",
          onClick:this.addItem,
          className:"react-forms-repeating-fieldset-add"}, "Add")
      )
    );
  }

});

module.exports = RepeatingFieldset;
module.exports.Item = Item;

},{"./RepeatingFieldsetMixin":13}],13:[function(__browserify__,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var React                     = (window.__ReactShim.React);
var cloneWithProps            = (window.__ReactShim.cloneWithProps);
var FormElementMixin          = __browserify__('./FormElementMixin');
var FormContextMixin          = __browserify__('./FormContextMixin');
var getDefaultValueForSchema  = __browserify__('./getDefaultValueForSchema');

/**
 * Mixin for implementing repeating fieldsets.
 *
 * See <RepeatingFieldset /> component for the basic implementation example.
 */
var RepeatingFieldsetMixin = {
  mixins: [FormElementMixin, FormContextMixin],

  propTypes: {
    onRemoveItem: React.PropTypes.func,
    onAddItem: React.PropTypes.func
  },

  /**
   * Return an array of React components rendered for all the values in an array
   * this fieldset owns.
   *
   * @returns {Array.<ReactComponent>}
   */
  items: function() {
    // prevent circular require
    var createComponentFromSchema = __browserify__('./createComponentFromSchema');
    var schema = this.schema();
    var children = createComponentFromSchema(schema.children);
    return this.value().map(function(item, name) 
      {return cloneWithProps(children, {name:name, key: name});});
  },

  /**
   * Remove an item by index
   *
   * @param {String|Number} name
   */
  removeItem: function(name) {
    var value = this.value().slice(0);
    value.splice(name, 1);
    this.updateValue(value);
    if (this.props.onRemoveItem) {
      this.props.onRemoveItem(name);
    }
  },

  /**
   * Add new item.
   */
  addItem: function() {
    var schema = this.schema();
    var defaultValue = schema.props.defaultValue !== undefined ?
      schema.props.defaultValue :
      getDefaultValueForSchema(schema.children);
    this.updateValue(this.value().concat(defaultValue));
    if (this.props.onAddItem) {
      this.props.onAddItem();
    }
  }
};

module.exports = RepeatingFieldsetMixin;

},{"./FormContextMixin":7,"./FormElementMixin":8,"./createComponentFromSchema":15,"./getDefaultValueForSchema":16}],14:[function(__browserify__,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var validation = __browserify__('./validation');

/**
 * Common validation routines.
 *
 * @private
 */
var ValidatedMixin = {

  /**
   * Validate value incrementally
   *
   * @param {Any} value
   * @param {Object.<{<name>: Validation}>} children
   * @returns {Object.<{value: Any, validation: Validation}>}
   */
  validateOnly: function(value, children) {
    return this._validateWith(validation.validateOnly, value, children);
  },

  /**
   * Validate value.
   *
   * @param {Any} value
   * @returns {Object.<{value: Any, validation: Validation}>}
   */
  validate: function(value) {
    return this._validateWith(validation.validate, value);
  },

  _validateWith: function(validate, value, children) {
    value = value !== undefined ? value : this.value();
    var schema = this.schema();
    return schema ?
      validate(schema, value, children) :
      {validation: validation.success, value:value};
  },

  /**
   * If form value is valid.
   *
   * @returns {Boolean}
   */
  isValid: function() {
    return this.validate().isSuccess;
  }
};

module.exports = ValidatedMixin;

},{"./validation":26}],15:[function(__browserify__,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var invariant         = (window.__ReactShim.invariant);
var schema            = __browserify__('./schema');
var Field             = __browserify__('./Field');
var Fieldset          = __browserify__('./Fieldset');
var RepeatingFieldset = __browserify__('./RepeatingFieldset');

/**
 * Create a component which represents provided schema node
 *
 * @private
 * @param {SchemaNode} node
 * @returns {ReactComponent}
 */
function createComponentFromSchema(node) {
  if (node.props.component) {
    return node.props.component({key: node.name, name: node.name});
  }

  if (schema.isList(node)) {
    return RepeatingFieldset( {key:node.name, name:node.name} );
  } else if (schema.isSchema(node)) {
    return Fieldset( {key:node.name, name:node.name} );
  } else if (schema.isProperty(node)) {
    return Field( {key:node.name, name:node.name} );
  } else {
    invariant(false, 'invalid schema node: %s', node);
  }
}

module.exports = createComponentFromSchema;

},{"./Field":2,"./Fieldset":4,"./RepeatingFieldset":12,"./schema":24}],16:[function(__browserify__,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var invariant = (window.__ReactShim.invariant);
var schema    = __browserify__('./schema');

/**
 * Get default value for schema node
 *
 * @param {SchemaNode} node
 * @returns {Any}
 */
function getDefaultValueForSchema(node) {
  if (schema.isSchema(node)) {
    return {};
  } else if (schema.isList(node)) {
    return [];
  } else if (schema.isProperty(node)) {
    return null;
  } else {
    invariant(
      false,
      'do not know how to infer default value for %s', node
    );
  }
}

module.exports = getDefaultValueForSchema;

},{"./schema":24}],17:[function(__browserify__,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var invariant = (window.__ReactShim.invariant);
var isString  = __browserify__('./isString');
var types     = __browserify__('./types');

/**
 * Return a type which corresponds to a given schema node.
 *
 * @param {Schema} node
 * @return {Type}
 */
function getTypeFromSchema(node) {
  if (node && node.props.type) {
    if (isString(node.props.type)) {
      var type = types[node.props.type];
      invariant(type, 'unknown type %s', node.props.type);
      return type;
    }

    return node.props.type;
  }

  return types.any;
}

module.exports = getTypeFromSchema;

},{"./isString":22,"./types":25}],18:[function(__browserify__,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var Form                    = __browserify__('./Form');
var Fieldset                = __browserify__('./Fieldset');
var RepeatingFieldset       = __browserify__('./RepeatingFieldset');
var Field                   = __browserify__('./Field');
var FormFor                 = __browserify__('./FormFor');
var Message                 = __browserify__('./Message');

var FormMixin               = __browserify__('./FormMixin');
var FormContextMixin        = __browserify__('./FormContextMixin');
var FormElementMixin        = __browserify__('./FormElementMixin');
var FieldMixin              = __browserify__('./FieldMixin');
var FieldsetMixin           = __browserify__('./FieldsetMixin');
var RepeatingFieldsetMixin  = __browserify__('./RepeatingFieldsetMixin');

var validators              = __browserify__('./validators');
var types                   = __browserify__('./types');
var schema                  = __browserify__('./schema');
var input                   = __browserify__('./input');

module.exports = {
  FormMixin:FormMixin, FormContextMixin:FormContextMixin, FormElementMixin:FormElementMixin,
  FieldMixin:FieldMixin, FieldsetMixin:FieldsetMixin, RepeatingFieldsetMixin:RepeatingFieldsetMixin,

  Form:Form, Field:Field, Fieldset:Fieldset, RepeatingFieldset:RepeatingFieldset,

  FormFor:FormFor, Message:Message,

  schema:schema, types:types, validators:validators, input:input
};

},{"./Field":2,"./FieldMixin":3,"./Fieldset":4,"./FieldsetMixin":5,"./Form":6,"./FormContextMixin":7,"./FormElementMixin":8,"./FormFor":9,"./FormMixin":10,"./Message":11,"./RepeatingFieldset":12,"./RepeatingFieldsetMixin":13,"./input":21,"./schema":24,"./types":25,"./validators":27}],19:[function(__browserify__,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var React = (window.__ReactShim.React);

var CheckboxGroup = React.createClass({displayName: 'CheckboxGroup',

  propTypes: {
    options: React.PropTypes.array.isRequired,
    value: React.PropTypes.array,
    onChange: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {value: []};
  },

  onChange: function(e) {
    if (!this.props.onChange) {
      return;
    }

    var nextValue = this.props.value.slice(0);

    if (e.target.checked) {
      nextValue.push(e.target.value);
    } else {
      var idx = nextValue.indexOf(e.target.value);
      if (idx > -1) {
        nextValue.splice(idx, 1);
      }
    }

    var values = this.props.options.map(function(o)  {return o.value;});
    nextValue.sort(function(a, b)  {return values.indexOf(a) - values.indexOf(b);});

    this.props.onChange(nextValue);
  },

  render: function() {
    var name = this._rootNodeID;
    var value = this.props.value;
    var options = this.props.options.map(function(option)  {
      var checked = value && value.indexOf(option.value) > -1;
      return (
        React.DOM.div(
          {className:"react-forms-checkbox-group-button",
          key:option.value}, 
          React.DOM.label( {className:"react-forms-checkbox-group-label"}, 
            React.DOM.input(
              {onChange:this.onChange,
              checked:checked,
              className:"react-forms-checkbox-group-checkbox",
              type:"checkbox",
              name:name,
              value:option.value} ),
            React.DOM.span( {className:"react-forms-checkbox-group-caption"}, 
              option.name
            )
          )
        )
      );
    }.bind(this));

    return (
      React.DOM.div( {className:"react-forms-checkbox-group"}, 
        options
      )
    );
  }
});

module.exports = CheckboxGroup;

},{}],20:[function(__browserify__,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var React = (window.__ReactShim.React);

function renderEmptyOption(props, onChange) {
  return (
    React.DOM.div(
        {className:"react-forms-radio-button-group-button",
        key:""}, 
      React.DOM.label(
        {className:"react-forms-radio-button-group-label"}, 
        React.DOM.input(
          {checked:props.checked,
          className:"react-forms-radio-button-group-radio",
          type:"radio",
          name:props.name,
          onChange:onChange.bind(null, null),
          value:""} ),
        React.DOM.span( {className:"react-forms-radio-button-group-caption"}, 
          "none"
        )
      )
    )
  );
}

var RadioButtonGroup = React.createClass({displayName: 'RadioButtonGroup',

    propTypes: {
      options: React.PropTypes.array.isRequired,
      allowEmpty: React.PropTypes.bool,
      value: React.PropTypes.string,
      onChange: React.PropTypes.func
    },

    render: function() {
      var options = this.props.options.map(this.renderOption);

      if (this.props.allowEmpty) {
        options.unshift(renderEmptyOption({
            name: this._rootNodeID,
            checked: !this.props.value
        }, this.onChange));
      }

      return (
        React.DOM.div( {className:"react-forms-radio-button-group"}, 
          options
        )
      );
    },

    renderOption: function(option) {
      var name = this._rootNodeID;
      var checked = this.props.value ?
          this.props.value === option.value :
          false;
      return (
        React.DOM.div(
          {className:"react-forms-radio-button-group-button",
          key:option.value}, 
          React.DOM.label(
            {className:"react-forms-radio-button-group-label"}, 
            React.DOM.input(
              {checked:checked,
              className:"react-forms-radio-button-group-radio",
              type:"radio",
              name:name,
              onChange:this.onChange.bind(null, option.value),
              value:option.value} ),
            React.DOM.span( {className:"react-forms-radio-button-group-caption"}, 
              option.name
            )
          )
        )
      );
    },

    onChange: function(value) {
      if (this.props.onChange) {
        this.props.onChange(value);
      }
    }
});

module.exports = RadioButtonGroup;

},{}],21:[function(__browserify__,module,exports){
'use strict';
/**
 * @jsx React.DOM
 */
module.exports = {
  CheckboxGroup: __browserify__('./CheckboxGroup'),
  RadioButtonGroup: __browserify__('./RadioButtonGroup')
};

},{"./CheckboxGroup":19,"./RadioButtonGroup":20}],22:[function(__browserify__,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var toString = Object.prototype.toString;

function isString(o) {
  return toString.call(o) === '[object String]';
}

module.exports = isString;

},{}],23:[function(__browserify__,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';



  function Lens(data, path) {
    this.__data = data;
    this.__path = path;
  }

  /**
   * Return a value this lense points to
   */
  Lens.prototype.val=function() {
    var value = this.__data;
    for (var i = 0, len = this.__path.length; i < len; i++) {
      var key = this.__path[i];
      value = value[key.key];
      if (value === undefined && key.defaultValue !== undefined) {
        value = key.defaultValue;
      }
    }
    return value;
  };

  Lens.prototype.root=function() {
    return this.__data;
  };

  Lens.prototype.parent=function() {
    if (this.__path.length === 0) {
      return undefined;
    } else {
      var path = this.__path.slice(0, this.__path.length - 1);
      return new this.constructor(this.__data, path);
    }
  };

  /**
   * Get a lens by a specified key
   *
   * @param {Key} key
   * @param {Any} defaultValue
   */
  Lens.prototype.get=function(key, defaultValue) {
    return new this.constructor(
      this.__data, this.__path.concat({key:key, defaultValue:defaultValue}));
  };

  /**
   * Shortcut for lens.get(key).mod(value)
   *
   * @param {Key} key
   * @param {Any} value
   */
  Lens.prototype.set=function(key, value) {
    return this.get(key).mod(value);
  };

  Lens.prototype.update=function(values) {
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
  };

  /**
   * Return lens for a new data which points to the same location.
   *
   * @param {Any} data
   */
  Lens.prototype.for=function(data) {
    return new this.constructor(data, this.__path);
  };

  /**
   * Return a new copy of data by replacing a value this lens points to with a
   * new value.
   *
   * @param {Any} value
   */
  Lens.prototype.mod=function(value) {
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
  };

  /**
   * Make a new lens for data
   *
   * @param {Any} data
   */
  Lens.make=function(data) {
    return new this(data, []);
  };


module.exports = Lens.make.bind(Lens);

},{}],24:[function(__browserify__,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var merge       = (window.__ReactShim.merge);
var invariant   = (window.__ReactShim.invariant);

function Node(){}



for(var Node____Key in Node){if(Node.hasOwnProperty(Node____Key)){PropertyNode[Node____Key]=Node[Node____Key];}}var ____SuperProtoOfNode=Node===null?null:Node.prototype;PropertyNode.prototype=Object.create(____SuperProtoOfNode);PropertyNode.prototype.constructor=PropertyNode;PropertyNode.__superConstructor__=Node;

  function PropertyNode(props) {
    props = props ? merge({}, props) : {};

    this.name = props.name;
    this.props = props;
  }


for(Node____Key in Node){if(Node.hasOwnProperty(Node____Key)){SchemaNode[Node____Key]=Node[Node____Key];}}SchemaNode.prototype=Object.create(____SuperProtoOfNode);SchemaNode.prototype.constructor=SchemaNode;SchemaNode.__superConstructor__=Node;

  function SchemaNode(props) {
    props = props ? merge({}, props) : {};

    var args = Array.prototype.slice.call(arguments, 1);
    var children = {};

    if (args.length !== 0) {
      forEachNested(args, function(arg)  {
        invariant(
          arg.name,
          'props fields should specify name property'
        );
        children[arg.name] = arg;
      });
    }

    this.name = props.name;
    this.props = props;
    this.children = children;
  }

  SchemaNode.prototype.map=function(func, context) {
    var results = [];
    for (var name in this.children) {
      results.push(func.call(context, this.children[name], name, this));
    }
    return results;
  };


for(Node____Key in Node){if(Node.hasOwnProperty(Node____Key)){ListNode[Node____Key]=Node[Node____Key];}}ListNode.prototype=Object.create(____SuperProtoOfNode);ListNode.prototype.constructor=ListNode;ListNode.__superConstructor__=Node;

  function ListNode(props) {
    props = props ? merge({}, props) : {};

    var args = Array.prototype.slice.call(arguments, 1);

    invariant(
      args.length === 1,
      'props for array must contain exactly one child props props'
    );

    this.name = props.name;
    this.props = props;
    this.children = args[0];
  }


function forEachNested(collection, func, context) {
  for (var i = 0, len = collection.length; i < len; i++) {
    if (Array.isArray(collection[i])) {
      forEachNested(collection[i], func, context);
    } else {
      func.call(context, collection[i], i, collection);
    }
  }
}

function makeFactory(constructor) {
  function factory() {
    var node = Object.create(constructor.prototype);
    constructor.apply(node, arguments);
    return node;
  }
  // we do this to support instanceof check
  factory.prototype = constructor.prototype;
  return factory;
}

var Property  = makeFactory(PropertyNode);
var List      = makeFactory(ListNode);
var Schema    = makeFactory(SchemaNode);

function createType(spec) {
  return function(props) {
    props = props || {};
    return spec(props);
  };
}

function isSchema(node) {
  return node instanceof SchemaNode;
}

function isList(node) {
  return node instanceof ListNode;
}

function isProperty(node) {
  return node instanceof PropertyNode;
}

module.exports = {
  Node:Node,
  Property:Property, isProperty:isProperty,
  Schema:Schema, isSchema:isSchema,
  List:List, isList:isList,
  createType:createType
};

},{}],25:[function(__browserify__,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

function idSerialize(value) {
  return value === null ? '' : '' + value;
}

function idDeserialize(value) {
  return value === '' ? null : value;
}

var any = {
  serialize: idSerialize,
  deserialize: idDeserialize
};

var string = any;

var number = {
  serialize: idSerialize,
  deserialize: function(value) {
    if (value === '') {
      return null;
    // based on http://stackoverflow.com/a/1830844/182954
    } else if (!isNaN(parseFloat(value)) && isFinite(value)) {
      return parseFloat(value);
    } else {
      throw new Error('invalid value');
    }
  }
};

var isDateRe = /^\d\d\d\d-\d\d-\d\d$/;

var date = {
  serialize: function(value) {
    if (value === null) {
      return '';
    }
    var year = value.getFullYear();
    var month = value.getMonth() + 1;
    var day = value.getDate();
    return (year + "-" + pad(month, 2) + "-" + pad(day, 2));
  },
  deserialize: function(value) {
    if (value === '') {
      return null;
    }

    if (value instanceof Date) {
      return value;
    }

    if (!isDateRe.exec(value)) {
      throw new Error('should be a date in YYYY-MM-DD format');
    }

    value = new Date(value);

    if (isNaN(value.getTime())) {
      throw new Error('invalid date');
    }

    return value;
  }
};

function pad(num, size) {
  return ('0000' + num).substr(-size);
}

module.exports = {any:any, string:string, number:number, date:date};

},{}],26:[function(__browserify__,module,exports){
/**
 * Schema validation
 *
 * @jsx React.DOM
 */
'use strict';

var invariant         = (window.__ReactShim.invariant);
var schema            = __browserify__('./schema');
var getTypeFromSchema = __browserify__('./getTypeFromSchema');
var validators        = __browserify__('./validators');

var exists     = validators.exists;
var nonEmpty   = validators.nonEmpty;

function deserialize(node, value) {
  if (value === undefined || value === null) {
    return {value:value, validation: success};
  }
  var type = getTypeFromSchema(node);
  try {
    value = type.deserialize(value);
  } catch(e) {
    return {
      validation: failure(e.message),
      value:value
    };
  }
  return {
    validation: success,
    value:value
  };
}

/**
 * Validate value against schema
 *
 * @param {Schema} node
 * @param {Any} value
 * @returns {Validation}
 */
function validate(node, value) {
  if (schema.isSchema(node)) {
    return validateSchema(node, value);
  } else if (schema.isList(node)) {
    return validateList(node, value);
  } else if (schema.isProperty(node)) {
    return validateProperty(node, value);
  } else {
    invariant(
      false,
      'do not know how to validate %s of type %s', node, node.constructor
    );
  }
}

/**
 * Validate value against schema but only using the root schema node.
 *
 * This method is useful when doing an incremental validation.
 *
 * @param {Schema} node
 * @param {Any} value
 * @returns {Validation}
 */
function validateOnly(node, value, children) {
  if (schema.isSchema(node)) {
    return validateSchemaOnly(node, value, children);
  } else if (schema.isList(node)) {
    return validateListOnly(node, value, children);
  } else if (schema.isProperty(node)) {
    return validateProperty(node, value, children);
  } else {
    invariant(
      false,
      'do not know how to validate %s of type %s', node, node.constructor
    );
  }
}

function validateSchema(node, value) {
  var childrenValidation = validateSchemaChildren(node, value);

  var convertedValue = value;

  if (Object.keys(childrenValidation.children).length > 0) {
    convertedValue = {};
    for (var k in value) {
      convertedValue[k] = childrenValidation.children[k] !== undefined ?
        childrenValidation.children[k] :
        value[k];
    }
  }

  var validation = validateSchemaOnly(
      node,
      convertedValue,
      childrenValidation.validation
  );

  return validation;
}

function validateSchemaOnly(node, value, children) {

  if (!areChildrenValid(children)) {
    return {
      value:value,
      validation: {
        isSuccess: false,
        isFailure: true,
        validation: {failure: undefined},
        children: children
      }
    };
  }

  var deserialized = deserialize(node, value);

  if (deserialized.validation.isFailure) {
    return deserialized;
  }

  var validator = exists.andThen(node.props.validate);
  var validation = validator(value, node.props);

  var isSuccess = validators.isSuccess(validation);

  return {
    value: deserialized.value,
    validation: {
      validation:validation,
      isSuccess:isSuccess,
      isFailure: !isSuccess
    }
  };
}

function validateSchemaChildren(node, value) {
  var validation = {};
  var children = {};

  if (value && node.children) {
    for (var name in node.children) {
      var childValidation = validate(node.children[name], value[name]);

      if (childValidation.validation.isFailure) {
        validation[name] = childValidation.validation;
      }

      children[name] = childValidation.value;
    }
  }

  return {validation:validation, children:children};
}

function validateList(node, value) {
  var childrenValidation = validateListChildren(node, value);

  var validation = validateListOnly(
      node,
      childrenValidation.children,
      childrenValidation.validation
  );
  return validation;
}

function validateListOnly(node, value, children) {

  if (!areChildrenValid(children)) {
    return {
      value:value,
      validation: {
        isSuccess: false,
        isFailure: true,
        validation: {failure: undefined},
        children: children
      }
    };
  }

  var deserialized = deserialize(node, value);

  if (deserialized.validation.isFailure) {
    return deserialized;
  }

  var validator = nonEmpty.andThen(node.props.validate);
  var validation = validator(deserialized.value, node.props);
  var isSuccess = validators.isSuccess(validation);

  return {
    value: deserialized.value,
    validation: {
      validation:validation,
      isSuccess:isSuccess,
      isFailure: !isSuccess
    }
  };
}

function validateListChildren(node, value) {
  var validation = {};
  var children = [];

  if (value && node.children) {
    for (var idx = 0, len = value.length; idx < len; idx++) {
      var childValidation = validate(node.children, value[idx]);
      if (childValidation.validation.isFailure) {
        validation[idx] = childValidation.validation;
      }
      children[idx] = childValidation.value;
    }
  }

  return {validation:validation, children:children};
}

function validateProperty(node, value) {

  var deserialized = deserialize(node, value);

  if (deserialized.validation.isFailure) {
    return deserialized;
  }

  var validator = exists.andThen(node.props.validate);
  var validation = validator(deserialized.value, node.props);
  var isSuccess = validators.isSuccess(validation);

  return {
    value: deserialized.value,
    validation: {
      validation:validation,
      isSuccess:isSuccess,
      isFailure: !isSuccess
    }
  };
}

function areChildrenValid(children) {
  for (var k in children) {
    if (children[k].isFailure) {
      return false;
    }
  }
  return true;
}

var success = {
  isSuccess: true,
  isFailure: false,
  children: {}
};

function failure(failure) {
  return {
    validation: {failure:failure},
    isSuccess: false,
    isFailure: true
  };
}

module.exports = {
  validate:validate, validateOnly:validateOnly,
  success:success, failure:failure
};

},{"./getTypeFromSchema":17,"./schema":24,"./validators":27}],27:[function(__browserify__,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var emptyFunction = (window.__ReactShim.emptyFunction);
var isString      = __browserify__('./isString');

var success = {failure: undefined};
var commonFailure = {failure: 'invalid value'};

function isSuccess(validation) {
  return validation.failure === undefined;
}

function isFailure(validation) {
  return validation.failure !== undefined;
}

function make(func) {
  var wrapper = function(value, schema)  {
    var maybeFailure = func(value, schema);
    if (maybeFailure === true) {
      return success;
    }
    if (maybeFailure === false) {
      return commonFailure;
    }
    if (isString(maybeFailure)) {
      return {failure: maybeFailure};
    }
    return maybeFailure;
  };
  wrapper.andThen = andThen.bind(null, wrapper);
  wrapper.isValidator = true;
  return wrapper;
}

function validatorEmpty(func) {
  if (!func) {
    return emptyFunction.thatReturnsTrue;
  }
  if (func.isValidator) {
    return func;
  }

  return make(func);
}

function validator(func) {
  if (!func) {
    return emptyFunction.thatReturnsTrue;
  }
  if (func.isValidator) {
    return func;
  }

  var wrapper = function(value, schema) 
    {return value === null || value === undefined ?
      true :
      func(value, schema);};

  return make(wrapper);
}

function andThen(first, second) {
  if (!second) {
    return first;
  }

  second = validator(second);

  var wrapper = function(value, schema)  {
    var validation = first(value, schema);
    return isFailure(validation) ?
      validation :
      second(value, schema);
  };

  return make(wrapper);
}

var exists = validatorEmpty(function(value, schema) 
  {return schema.required && (value === null || value === undefined) ?
    'value is required' :
    true;});

var nonEmpty = validator(function(value, schema) 
  {return schema.nonEmpty && value.length === 0 ?
    'at least one item is required' :
    true;});

module.exports = {
  validatorEmpty:validatorEmpty,
  validator:validator,

  isSuccess:isSuccess,
  isFailure:isFailure,

  success:success,
  exists:exists,
  nonEmpty:nonEmpty
};

},{"./isString":22}]},{},[1])
