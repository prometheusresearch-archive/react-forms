(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

  return require('./lib/');
});

},{"./lib/":18}],2:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var React           = (window.__ReactShim.React);
var cx              = (window.__ReactShim.cx);
var mergeInto       = (window.__ReactShim.mergeInto);
var FieldMixin      = require('./FieldMixin');
var Message         = require('./Message');

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
    var validation = this.validationLens().val();

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

},{"./FieldMixin":3,"./Message":11}],3:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var React             = (window.__ReactShim.React);
var cloneWithProps    = (window.__ReactShim.cloneWithProps);
var mergeInto         = (window.__ReactShim.mergeInto);
var FormElementMixin  = require('./FormElementMixin');

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
    var value = this.serializedValueLens().val();
    var schema = this.schema();

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

},{"./FormElementMixin":8}],4:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var React         = (window.__ReactShim.React);
var FieldsetMixin = require('./FieldsetMixin');

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

},{"./FieldsetMixin":5}],5:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var FormElementMixin  = require('./FormElementMixin');
var FormContextMixin  = require('./FormContextMixin');

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
    var createComponentFromSchema = require('./createComponentFromSchema');
    return createComponentFromSchema(node);
  }
};

module.exports = FieldsetMixin;

},{"./FormContextMixin":7,"./FormElementMixin":8,"./createComponentFromSchema":15}],6:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var React     = (window.__ReactShim.React);
var FormMixin = require('./FormMixin');
var FormFor   = require('./FormFor');

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

},{"./FormFor":9,"./FormMixin":10}],7:[function(require,module,exports){
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
    serializedValueLens: React.PropTypes.object,
    valueLens: React.PropTypes.object,
    validationLens: React.PropTypes.object,
    schema: React.PropTypes.object,
    onValueUpdate: React.PropTypes.func
  },

  getChildContext: function() {
    return {
      serializedValueLens: this.serializedValueLens(),
      valueLens: this.valueLens(),
      validationLens: this.validationLens(),
      schema: this.schema(),
      onValueUpdate: this.onValueUpdate
    };
  }
};

module.exports = FormContextMixin;

},{}],8:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var React                     = (window.__ReactShim.React);
var invariant                 = (window.__ReactShim.invariant);
var schema                    = require('./schema');
var ValidatedMixin            = require('./ValidatedMixin');
var getDefaultValueForSchema  = require('./getDefaultValueForSchema');
var validationM               = require('./validation');

var success = validationM.success;
var serialize = validationM.serialize;

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
    serializedValueLens: React.PropTypes.object,
    valueLens: React.PropTypes.object,
    validationLens: React.PropTypes.object,
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
  serializedValueLens: function(value) {
    var lens = this.context.serializedValueLens;
    if (this.props.name !== undefined) {
      lens = lens.get(
        this.props.name,
        serialize(this.schema(), this.valueLens(value).val())
      );
    }
    return value ? lens.for(value) : lens;
  },

  valueLens: function(value) {
    var lens = this.context.valueLens;
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
    var lens = this.context.validationLens;
    if (this.props.name !== undefined) {
      lens = lens.get('children', {}).get(this.props.name, success);
    }
    return validation ? lens.for(validation) : lens;
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
  onValueUpdate: function(value, validation, serializedValue) {
    var validationLens = this.validationLens(validation);
    var valueLens = this.valueLens(value);

    var local = this.validateOnly(
      valueLens.val(),
      validationLens.val().children
    );

    valueLens = valueLens.mod(local.value);
    validationLens = validationLens.update(local.validation);

    this.context.onValueUpdate(
      valueLens.root(),
      validationLens.root(),
      serializedValue
    );
  },

  /**
   * Update the serialized value for the current form element.
   *
   * @param {Any} serializedValue
   */
  updateValue: function(serializedValue) {
    this.onValueUpdate(
      this.valueLens().mod(serializedValue).root(),
      this.validationLens().root(),
      this.serializedValueLens().mod(serializedValue).root()
    );
  }

};

module.exports = FormElementMixin;

},{"./ValidatedMixin":14,"./getDefaultValueForSchema":16,"./schema":24,"./validation":26}],9:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var React                     = (window.__ReactShim.React);
var FormElementMixin          = require('./FormElementMixin');
var createComponentFromSchema = require('./createComponentFromSchema');

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

},{"./FormElementMixin":8,"./createComponentFromSchema":15}],10:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var React                     = (window.__ReactShim.React);
var ReactUpdates              = (window.__ReactShim.ReactUpdates);
var lens                      = require('./lens');
var ValidatedMixin            = require('./ValidatedMixin');
var FormContextMixin          = require('./FormContextMixin');
var getDefaultValueForSchema  = require('./getDefaultValueForSchema');
var validationM               = require('./validation');

var serialize = validationM.serialize;
var success = validationM.success;

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
    serializedValue: React.PropTypes.any,
    schema: React.PropTypes.object,
    onChange: React.PropTypes.func,
    onUpdate: React.PropTypes.func
  },

  getInitialState: function() {
    var value = this.props.value ||
      this.props.defaultValue ||
      getDefaultValueForSchema(this.props.schema);
    var state = this.getFormState(value);
    return state;
  },

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.value !== undefined) {
      var nextState;
      if (nextProps.validation !== undefined &&
          nextProps.serializedValue !== undefined) {
        nextState = {
          serializedValue: nextProps.serializedValue,
          validation: nextProps.validation,
          value: nextProps.value
        };
      } else {
        nextState = this.getFormState(nextProps.value);
      }
      this.setState(nextState);
    }
  },

  getFormState: function(value) {
    var validation = this.validate(value);
    return {
      value: validation.value,
      validation: validation.validation,
      serializedValue: serialize(this.schema(), validation.value)
    };
  },

  /**
   * Return lens for the form value or for the value passed as an argument.
   *
   * @param {Any?} value
   * @returns {Lens}
   */
  serializedValueLens: function(value) {
    return lens(value !== undefined ? value : this.state.serializedValue);
  },

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
   * @param {Any} convertedValue
   */
  onValueUpdate: function(value, validation, serializedValue) {
    validation = validation || success;
    ReactUpdates.batchedUpdates(function()  {
      if (this.props.onUpdate) {
        this.props.onUpdate(value, validation, serializedValue);
      }
      if (this.props.onChange && validation.isSuccess) {
        this.props.onChange(value, validation, serializedValue);
      }
      this.setState({value:value, validation:validation, serializedValue:serializedValue});
    }.bind(this));
  }
};

var FormMixin = {
  mixins: [FormStateMixin, FormContextMixin]
};

module.exports = FormMixin;

},{"./FormContextMixin":7,"./ValidatedMixin":14,"./getDefaultValueForSchema":16,"./lens":23,"./validation":26}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var React                   = (window.__ReactShim.React);
var RepeatingFieldsetMixin  = require('./RepeatingFieldsetMixin');

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

},{"./RepeatingFieldsetMixin":13}],13:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var React                     = (window.__ReactShim.React);
var cloneWithProps            = (window.__ReactShim.cloneWithProps);
var FormElementMixin          = require('./FormElementMixin');
var FormContextMixin          = require('./FormContextMixin');
var getDefaultValueForSchema  = require('./getDefaultValueForSchema');

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
    var createComponentFromSchema = require('./createComponentFromSchema');
    var schema = this.schema();
    var children = createComponentFromSchema(schema.children);
    return this.serializedValueLens().val().map(function(item, name) 
      {return cloneWithProps(children, {name:name, key: name});});
  },

  /**
   * Remove an item by index
   *
   * @param {String|Number} name
   */
  removeItem: function(name) {
    var value = this.serializedValueLens().val().slice(0);
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
    var defaultValue = getDefaultValueForSchema(schema.children);
    this.updateValue(this.valueLens().val().concat(defaultValue));
    if (this.props.onAddItem) {
      this.props.onAddItem();
    }
  }
};

module.exports = RepeatingFieldsetMixin;

},{"./FormContextMixin":7,"./FormElementMixin":8,"./createComponentFromSchema":15,"./getDefaultValueForSchema":16}],14:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var validation = require('./validation');

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
    value = value !== undefined ? value : this.serializedValueLens().val();
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

},{"./validation":26}],15:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var invariant         = (window.__ReactShim.invariant);
var schema            = require('./schema');
var Field             = require('./Field');
var Fieldset          = require('./Fieldset');
var RepeatingFieldset = require('./RepeatingFieldset');

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

},{"./Field":2,"./Fieldset":4,"./RepeatingFieldset":12,"./schema":24}],16:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var invariant = (window.__ReactShim.invariant);
var schema    = require('./schema');

/**
 * Get default value for schema node
 *
 * @param {SchemaNode} node
 * @returns {Any}
 */
function getDefaultValueForSchema(node) {
  if (node && node.props && node.props.defaultValue !== undefined) {
    return node.props.defaultValue;
  }
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

},{"./schema":24}],17:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var invariant = (window.__ReactShim.invariant);
var isString  = require('./isString');
var types     = require('./types');
var schema    = require('./schema');

/**
 * Return a type which corresponds to a given schema node.
 *
 * @param {Schema} node
 * @return {Type}
 */
function getTypeFromSchema(node) {
  if (node && node.props.type) {

    invariant(
      schema.isProperty(node),
      'only Property schema nodes can have types'
    );

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

},{"./isString":22,"./schema":24,"./types":25}],18:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var Form                    = require('./Form');
var Fieldset                = require('./Fieldset');
var RepeatingFieldset       = require('./RepeatingFieldset');
var Field                   = require('./Field');
var FormFor                 = require('./FormFor');
var Message                 = require('./Message');

var FormMixin               = require('./FormMixin');
var FormContextMixin        = require('./FormContextMixin');
var FormElementMixin        = require('./FormElementMixin');
var FieldMixin              = require('./FieldMixin');
var FieldsetMixin           = require('./FieldsetMixin');
var RepeatingFieldsetMixin  = require('./RepeatingFieldsetMixin');

var validators              = require('./validators');
var types                   = require('./types');
var schema                  = require('./schema');
var input                   = require('./input');

module.exports = {
  FormMixin:FormMixin, FormContextMixin:FormContextMixin, FormElementMixin:FormElementMixin,
  FieldMixin:FieldMixin, FieldsetMixin:FieldsetMixin, RepeatingFieldsetMixin:RepeatingFieldsetMixin,

  Form:Form, Field:Field, Fieldset:Fieldset, RepeatingFieldset:RepeatingFieldset,

  FormFor:FormFor, Message:Message,

  schema:schema, types:types, validators:validators, input:input
};

},{"./Field":2,"./FieldMixin":3,"./Fieldset":4,"./FieldsetMixin":5,"./Form":6,"./FormContextMixin":7,"./FormElementMixin":8,"./FormFor":9,"./FormMixin":10,"./Message":11,"./RepeatingFieldset":12,"./RepeatingFieldsetMixin":13,"./input":21,"./schema":24,"./types":25,"./validators":27}],19:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
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

},{}],21:[function(require,module,exports){
'use strict';
/**
 * @jsx React.DOM
 */
module.exports = {
  CheckboxGroup: require('./CheckboxGroup'),
  RadioButtonGroup: require('./RadioButtonGroup')
};

},{"./CheckboxGroup":19,"./RadioButtonGroup":20}],22:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var toString = Object.prototype.toString;

function isString(o) {
  return toString.call(o) === '[object String]';
}

module.exports = isString;

},{}],23:[function(require,module,exports){
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

},{}],24:[function(require,module,exports){
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

},{}],25:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

function idSerialize(value) {
  return value === null ? '' : value;
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

},{}],26:[function(require,module,exports){
/**
 * Schema validation
 *
 * @jsx React.DOM
 */
'use strict';

var invariant         = (window.__ReactShim.invariant);
var schema            = require('./schema');
var getTypeFromSchema = require('./getTypeFromSchema');
var validators        = require('./validators');

var exists     = validators.exists;
var nonEmpty   = validators.nonEmpty;

function serialize(node, value) {
  var result;

  if (schema.isProperty(node)) {
    result = getTypeFromSchema(node).serialize(value);
  } else if (schema.isSchema(node)) {
    result = {};
    for (var k in value) {
      if (node.children[k]) {
        result[k] = serialize(node.children[k], value[k]);
      } else {
        result[k] = value[k];
      }
    }
  } else if (schema.isList(node)) {
    result = new Array(value.length);
    for (var i = 0, len = value.length; i < len; i++) {
      result[i] = serialize(node.children, value[i]);
    }
  } else {
    invariant(false, 'unknown schema passed');
  }

  return result;
}

function deserializeOnly(node, value) {
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

  var deserialized = deserializeOnly(node, value);

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

  var deserialized = deserializeOnly(node, value);

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

  var deserialized = deserializeOnly(node, value);

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
  success:success, failure:failure,
  deserializeOnly:deserializeOnly, serialize:serialize
};

},{"./getTypeFromSchema":17,"./schema":24,"./validators":27}],27:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var emptyFunction = (window.__ReactShim.emptyFunction);
var isString      = require('./isString');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvYW5kcmV5cG9wcC8udmlydHVhbGVudnMvZGVmYXVsdC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvaW5kZXguanMiLCIvVXNlcnMvYW5kcmV5cG9wcC9Xb3Jrc3BhY2UvcHJvbWV0aGV1cy9yZWFjdC1mb3Jtcy9zdGFuZGFsb25lL2xpYi9GaWVsZC5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvbGliL0ZpZWxkTWl4aW4uanMiLCIvVXNlcnMvYW5kcmV5cG9wcC9Xb3Jrc3BhY2UvcHJvbWV0aGV1cy9yZWFjdC1mb3Jtcy9zdGFuZGFsb25lL2xpYi9GaWVsZHNldC5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvbGliL0ZpZWxkc2V0TWl4aW4uanMiLCIvVXNlcnMvYW5kcmV5cG9wcC9Xb3Jrc3BhY2UvcHJvbWV0aGV1cy9yZWFjdC1mb3Jtcy9zdGFuZGFsb25lL2xpYi9Gb3JtLmpzIiwiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL3Byb21ldGhldXMvcmVhY3QtZm9ybXMvc3RhbmRhbG9uZS9saWIvRm9ybUNvbnRleHRNaXhpbi5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvbGliL0Zvcm1FbGVtZW50TWl4aW4uanMiLCIvVXNlcnMvYW5kcmV5cG9wcC9Xb3Jrc3BhY2UvcHJvbWV0aGV1cy9yZWFjdC1mb3Jtcy9zdGFuZGFsb25lL2xpYi9Gb3JtRm9yLmpzIiwiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL3Byb21ldGhldXMvcmVhY3QtZm9ybXMvc3RhbmRhbG9uZS9saWIvRm9ybU1peGluLmpzIiwiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL3Byb21ldGhldXMvcmVhY3QtZm9ybXMvc3RhbmRhbG9uZS9saWIvTWVzc2FnZS5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvbGliL1JlcGVhdGluZ0ZpZWxkc2V0LmpzIiwiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL3Byb21ldGhldXMvcmVhY3QtZm9ybXMvc3RhbmRhbG9uZS9saWIvUmVwZWF0aW5nRmllbGRzZXRNaXhpbi5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvbGliL1ZhbGlkYXRlZE1peGluLmpzIiwiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL3Byb21ldGhldXMvcmVhY3QtZm9ybXMvc3RhbmRhbG9uZS9saWIvY3JlYXRlQ29tcG9uZW50RnJvbVNjaGVtYS5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvbGliL2dldERlZmF1bHRWYWx1ZUZvclNjaGVtYS5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvbGliL2dldFR5cGVGcm9tU2NoZW1hLmpzIiwiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL3Byb21ldGhldXMvcmVhY3QtZm9ybXMvc3RhbmRhbG9uZS9saWIvaW5kZXguanMiLCIvVXNlcnMvYW5kcmV5cG9wcC9Xb3Jrc3BhY2UvcHJvbWV0aGV1cy9yZWFjdC1mb3Jtcy9zdGFuZGFsb25lL2xpYi9pbnB1dC9DaGVja2JveEdyb3VwLmpzIiwiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL3Byb21ldGhldXMvcmVhY3QtZm9ybXMvc3RhbmRhbG9uZS9saWIvaW5wdXQvUmFkaW9CdXR0b25Hcm91cC5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvbGliL2lucHV0L2luZGV4LmpzIiwiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL3Byb21ldGhldXMvcmVhY3QtZm9ybXMvc3RhbmRhbG9uZS9saWIvaXNTdHJpbmcuanMiLCIvVXNlcnMvYW5kcmV5cG9wcC9Xb3Jrc3BhY2UvcHJvbWV0aGV1cy9yZWFjdC1mb3Jtcy9zdGFuZGFsb25lL2xpYi9sZW5zLmpzIiwiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL3Byb21ldGhldXMvcmVhY3QtZm9ybXMvc3RhbmRhbG9uZS9saWIvc2NoZW1hLmpzIiwiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL3Byb21ldGhldXMvcmVhY3QtZm9ybXMvc3RhbmRhbG9uZS9saWIvdHlwZXMuanMiLCIvVXNlcnMvYW5kcmV5cG9wcC9Xb3Jrc3BhY2UvcHJvbWV0aGV1cy9yZWFjdC1mb3Jtcy9zdGFuZGFsb25lL2xpYi92YWxpZGF0aW9uLmpzIiwiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL3Byb21ldGhldXMvcmVhY3QtZm9ybXMvc3RhbmRhbG9uZS9saWIvdmFsaWRhdG9ycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoWydyZWFjdCddLCBmYWN0b3J5KTtcbiAgfSBlbHNlIHtcbiAgICByb290LlJlYWN0Rm9ybXMgPSBmYWN0b3J5KHJvb3QuUmVhY3QpO1xuICB9XG59KSh3aW5kb3csIGZ1bmN0aW9uKFJlYWN0KSB7XG5cbiAgdmFyIF9fUmVhY3RTaGltID0gd2luZG93Ll9fUmVhY3RTaGltID0gd2luZG93Ll9fUmVhY3RTaGltIHx8IHt9O1xuXG4gIF9fUmVhY3RTaGltLlJlYWN0ID0gUmVhY3Q7XG5cbiAgX19SZWFjdFNoaW0uY2xvbmVXaXRoUHJvcHMgPSBSZWFjdC5hZGRvbnMuY2xvbmVXaXRoUHJvcHM7XG5cbiAgX19SZWFjdFNoaW0uY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXQ7XG5cbiAgX19SZWFjdFNoaW0uaW52YXJpYW50ID0gZnVuY3Rpb24oY2hlY2ssIG1zZykge1xuICAgIGlmICghY2hlY2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBtZXJnZUludG8gPSBfX1JlYWN0U2hpbS5tZXJnZUludG8gPSBmdW5jdGlvbihkc3QsIHNyYykge1xuICAgIGZvciAodmFyIGsgaW4gc3JjKSB7XG4gICAgICBpZiAoc3JjLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgIGRzdFtrXSA9IHNyY1trXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfX1JlYWN0U2hpbS5tZXJnZSA9IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICB2YXIgYyA9IHt9O1xuICAgIG1lcmdlSW50byhjLCBhKTtcbiAgICBtZXJnZUludG8oYywgYik7XG4gICAgcmV0dXJuIGM7XG4gIH1cblxuICBfX1JlYWN0U2hpbS5lbXB0eUZ1bmN0aW9uID0gZnVuY3Rpb24oKSB7XG4gIH1cblxuICBfX1JlYWN0U2hpbS5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgX19SZWFjdFNoaW0uUmVhY3RVcGRhdGVzID0ge1xuICAgIGJhdGNoZWRVcGRhdGVzOiBmdW5jdGlvbihjYikgeyBjYigpOyB9XG4gIH07XG5cbiAgcmV0dXJuIHJlcXVpcmUoJy4vbGliLycpO1xufSk7XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ICAgICAgICAgICA9ICh3aW5kb3cuX19SZWFjdFNoaW0uUmVhY3QpO1xudmFyIGN4ICAgICAgICAgICAgICA9ICh3aW5kb3cuX19SZWFjdFNoaW0uY3gpO1xudmFyIG1lcmdlSW50byAgICAgICA9ICh3aW5kb3cuX19SZWFjdFNoaW0ubWVyZ2VJbnRvKTtcbnZhciBGaWVsZE1peGluICAgICAgPSByZXF1aXJlKCcuL0ZpZWxkTWl4aW4nKTtcbnZhciBNZXNzYWdlICAgICAgICAgPSByZXF1aXJlKCcuL01lc3NhZ2UnKTtcblxudmFyIEZpZWxkID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiAnRmllbGQnLFxuICBtaXhpbnM6IFtGaWVsZE1peGluXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBsYWJlbDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xuICB9LFxuXG4gIHJlbmRlckxhYmVsOiBmdW5jdGlvbihwcm9wcykge1xuICAgIHZhciBzY2hlbWEgPSB0aGlzLnNjaGVtYSgpO1xuICAgIHZhciBsYWJlbCA9IHRoaXMucHJvcHMubGFiZWwgPyB0aGlzLnByb3BzLmxhYmVsIDogc2NoZW1hLnByb3BzLmxhYmVsO1xuICAgIHZhciBoaW50ID0gdGhpcy5wcm9wcy5oaW50ID8gdGhpcy5wcm9wcy5oaW50IDogc2NoZW1hLnByb3BzLmhpbnQ7XG4gICAgdmFyIGxhYmVsUHJvcHMgPSB7Y2xhc3NOYW1lOiAncmVhY3QtZm9ybXMtbGFiZWwnfTtcbiAgICBpZiAocHJvcHMpIHtcbiAgICAgIG1lcmdlSW50byhsYWJlbFByb3BzLCBwcm9wcyk7XG4gICAgfVxuICAgIHJldHVybiAobGFiZWwgfHwgaGludCkgJiYgUmVhY3QuRE9NLmxhYmVsKGxhYmVsUHJvcHMsXG4gICAgICBsYWJlbCxcbiAgICAgIGhpbnQgJiYgUmVhY3QuRE9NLnNwYW4oIHtjbGFzc05hbWU6XCJyZWFjdC1mb3Jtcy1oaW50XCJ9LCBoaW50KSk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdmFsaWRhdGlvbiA9IHRoaXMudmFsaWRhdGlvbkxlbnMoKS52YWwoKTtcblxuICAgIHZhciBjbGFzc05hbWUgPSBjeCh7XG4gICAgICAncmVhY3QtZm9ybXMtZmllbGQnOiB0cnVlLFxuICAgICAgJ2ludmFsaWQnOiB2YWxpZGF0aW9uLmlzRmFpbHVyZVxuICAgIH0pO1xuXG4gICAgdmFyIGlkID0gdGhpcy5fcm9vdE5vZGVJRDtcblxuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5ET00uZGl2KCB7Y2xhc3NOYW1lOmNsYXNzTmFtZX0sIFxuICAgICAgICB0aGlzLnJlbmRlckxhYmVsKHtodG1sRm9yOiBpZH0pLFxuICAgICAgICB0aGlzLnRyYW5zZmVyUHJvcHNUbyh0aGlzLnJlbmRlcklucHV0Q29tcG9uZW50KHtpZDppZH0pKSxcbiAgICAgICAgdmFsaWRhdGlvbi5pc0ZhaWx1cmUgJiZcbiAgICAgICAgICBNZXNzYWdlKG51bGwsIHZhbGlkYXRpb24udmFsaWRhdGlvbi5mYWlsdXJlKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZpZWxkO1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCAgICAgICAgICAgICA9ICh3aW5kb3cuX19SZWFjdFNoaW0uUmVhY3QpO1xudmFyIGNsb25lV2l0aFByb3BzICAgID0gKHdpbmRvdy5fX1JlYWN0U2hpbS5jbG9uZVdpdGhQcm9wcyk7XG52YXIgbWVyZ2VJbnRvICAgICAgICAgPSAod2luZG93Ll9fUmVhY3RTaGltLm1lcmdlSW50byk7XG52YXIgRm9ybUVsZW1lbnRNaXhpbiAgPSByZXF1aXJlKCcuL0Zvcm1FbGVtZW50TWl4aW4nKTtcblxuLyoqXG4gKiBNaXhpbiBmb3IgaW1wbGVtZW50aW5nIGZpZWxkY29tcG9uZW50cy5cbiAqXG4gKiBTZWUgPEZpZWxkIC8+IGNvbXBvbmVudCBmb3IgdGhlIGJhc2ljIGltcGxlbWVudGF0aW9uIGV4YW1wbGUuXG4gKi9cbnZhciBGaWVsZE1peGluID0ge1xuICBtaXhpbnM6IFtGb3JtRWxlbWVudE1peGluXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBpbnB1dDogUmVhY3QuUHJvcFR5cGVzLmNvbXBvbmVudFxuICB9LFxuXG4gIG9uQ2hhbmdlOiBmdW5jdGlvbihlKSB7XG4gICAgaWYgKGUuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZSA9IGdldFZhbHVlRnJvbUV2ZW50KGUpO1xuXG4gICAgdGhpcy51cGRhdGVWYWx1ZSh2YWx1ZSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlbmRlciBpbnB1dCBjb21wb25lbnQuXG4gICAqXG4gICAqIEByZXR1cm5zIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIHJlbmRlcklucHV0Q29tcG9uZW50OiBmdW5jdGlvbihwcm9wcykge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuc2VyaWFsaXplZFZhbHVlTGVucygpLnZhbCgpO1xuICAgIHZhciBzY2hlbWEgPSB0aGlzLnNjaGVtYSgpO1xuXG4gICAgdmFyIGlucHV0ID0gdGhpcy5wcm9wcy5pbnB1dCB8fCBzY2hlbWEgJiYgc2NoZW1hLnByb3BzLmlucHV0O1xuICAgIHZhciBpbnB1dFByb3BzID0ge3ZhbHVlOnZhbHVlLCBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZX07XG5cbiAgICBpZiAocHJvcHMpIHtcbiAgICAgIG1lcmdlSW50byhpbnB1dFByb3BzLCBwcm9wcyk7XG4gICAgfVxuXG4gICAgaWYgKGlucHV0KSB7XG4gICAgICByZXR1cm4gY2xvbmVXaXRoUHJvcHMoaW5wdXQsIGlucHV0UHJvcHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dFByb3BzLnR5cGUgPSAndGV4dCc7XG4gICAgICByZXR1cm4gUmVhY3QuRE9NLmlucHV0KGlucHV0UHJvcHMpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBFeHRyYWN0IHZhbHVlIGZyb20gZXZlbnRcbiAqXG4gKiBXZSBzdXBwb3J0IGJvdGggUmVhY3QuRE9NICdjaGFuZ2UnIGV2ZW50cyBhbmQgY3VzdG9tIGNoYW5nZSBldmVudHNcbiAqIGVtaXR0ZWQgZnJvbSBjdXN0b20gY29tcG9uZW50cy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGFsc28gbm9ybWFsaXplcyBlbXB0eSBzdHJpbmdzIHRvIG51bGwuXG4gKlxuICogQHBhcmFtIHtFdmVudH0gZVxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZUZyb21FdmVudChlKSB7XG4gIHJldHVybiBlICYmIGUudGFyZ2V0ICYmIGUudGFyZ2V0LnZhbHVlICE9PSB1bmRlZmluZWQgP1xuICAgIGUudGFyZ2V0LnZhbHVlIDogZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGaWVsZE1peGluO1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCAgICAgICAgID0gKHdpbmRvdy5fX1JlYWN0U2hpbS5SZWFjdCk7XG52YXIgRmllbGRzZXRNaXhpbiA9IHJlcXVpcmUoJy4vRmllbGRzZXRNaXhpbicpO1xuXG52YXIgRmllbGRzZXQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdGaWVsZHNldCcsXG4gIG1peGluczogW0ZpZWxkc2V0TWl4aW5dLFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjaGVtYSA9IHRoaXMuc2NoZW1hKCk7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmZXJQcm9wc1RvKFxuICAgICAgUmVhY3QuRE9NLmRpdigge2NsYXNzTmFtZTpcInJlYWN0LWZvcm1zLWZpZWxkc2V0XCJ9LCBcbiAgICAgICAgc2NoZW1hLnByb3BzLmxhYmVsICYmIFJlYWN0LkRPTS5oNChudWxsLCBzY2hlbWEucHJvcHMubGFiZWwpLFxuICAgICAgICBzY2hlbWEubWFwKHRoaXMucmVuZGVyRmllbGQpXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRmllbGRzZXQ7XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIEZvcm1FbGVtZW50TWl4aW4gID0gcmVxdWlyZSgnLi9Gb3JtRWxlbWVudE1peGluJyk7XG52YXIgRm9ybUNvbnRleHRNaXhpbiAgPSByZXF1aXJlKCcuL0Zvcm1Db250ZXh0TWl4aW4nKTtcblxuLyoqXG4gKiBNaXhpbiBmb3IgaW1wbGVtZW50aW5nIGZpZWxkY29tcG9uZW50cy5cbiAqXG4gKiBTZWUgPEZpZWxkc2V0IC8+IGNvbXBvbmVudCBmb3IgdGhlIGJhc2ljIGltcGxlbWVudGF0aW9uIGV4YW1wbGUuXG4gKi9cbnZhciBGaWVsZHNldE1peGluID0ge1xuICBtaXhpbnM6IFtGb3JtRWxlbWVudE1peGluLCBGb3JtQ29udGV4dE1peGluXSxcblxuICAvKipcbiAgICogUmVuZGVyIGZpZWxkIGJ5IG5hbWVcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICogQHJldHVybnMge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgcmVuZGVyRmllbGRCeU5hbWU6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJGaWVsZCh0aGlzLnNjaGVtYSgpLmNoaWxkcmVuW25hbWVdKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVuZGVyIGZpZWxkIGdpdmVuIGEgc2NoZW1hIG5vZGVcbiAgICpcbiAgICogQHBhcmFtIHtTY2hlbWF9IG5vZGVcbiAgICogQHJldHVybnMge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgcmVuZGVyRmllbGQ6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAvLyBwcmV2ZW50IGNpcmN1bGFyIHJlcXVpcmVcbiAgICB2YXIgY3JlYXRlQ29tcG9uZW50RnJvbVNjaGVtYSA9IHJlcXVpcmUoJy4vY3JlYXRlQ29tcG9uZW50RnJvbVNjaGVtYScpO1xuICAgIHJldHVybiBjcmVhdGVDb21wb25lbnRGcm9tU2NoZW1hKG5vZGUpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZpZWxkc2V0TWl4aW47XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ICAgICA9ICh3aW5kb3cuX19SZWFjdFNoaW0uUmVhY3QpO1xudmFyIEZvcm1NaXhpbiA9IHJlcXVpcmUoJy4vRm9ybU1peGluJyk7XG52YXIgRm9ybUZvciAgID0gcmVxdWlyZSgnLi9Gb3JtRm9yJyk7XG5cbnZhciBGb3JtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiAnRm9ybScsXG4gIG1peGluczogW0Zvcm1NaXhpbl0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2ZlclByb3BzVG8oXG4gICAgICBSZWFjdC5ET00uZm9ybShudWxsLCBcbiAgICAgICAgRm9ybUZvcihudWxsIClcbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtO1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9ICh3aW5kb3cuX19SZWFjdFNoaW0uUmVhY3QpO1xuXG4vKipcbiAqIE1peGluIGZvciBjb21wb25lbnRzIHdoaWNoIGV4cG9zZXMgZm9ybSBjb250ZXh0LlxuICpcbiAqIFNlZSBGb3JtICh2aWEgRm9ybU1peGluKSwgRmllbGRzZXQgKHZpYSBGaWVsZHNldE1peGluKSBhbmQgUmVwZWF0aW5nRmllbGRzZXRcbiAqICh2aWEgUmVwZWF0aW5nRmllbGRzZXRNaXhpbikgZm9yIGNvbXBvbmVudHMgd2hpY2ggZXhwb3NlIGZvcm0gY29udGV4dC5cbiAqL1xudmFyIEZvcm1Db250ZXh0TWl4aW4gPSB7XG5cbiAgY2hpbGRDb250ZXh0VHlwZXM6IHtcbiAgICBzZXJpYWxpemVkVmFsdWVMZW5zOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIHZhbHVlTGVuczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICB2YWxpZGF0aW9uTGVuczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBzY2hlbWE6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgb25WYWx1ZVVwZGF0ZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbiAgfSxcblxuICBnZXRDaGlsZENvbnRleHQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzZXJpYWxpemVkVmFsdWVMZW5zOiB0aGlzLnNlcmlhbGl6ZWRWYWx1ZUxlbnMoKSxcbiAgICAgIHZhbHVlTGVuczogdGhpcy52YWx1ZUxlbnMoKSxcbiAgICAgIHZhbGlkYXRpb25MZW5zOiB0aGlzLnZhbGlkYXRpb25MZW5zKCksXG4gICAgICBzY2hlbWE6IHRoaXMuc2NoZW1hKCksXG4gICAgICBvblZhbHVlVXBkYXRlOiB0aGlzLm9uVmFsdWVVcGRhdGVcbiAgICB9O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZvcm1Db250ZXh0TWl4aW47XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ICAgICAgICAgICAgICAgICAgICAgPSAod2luZG93Ll9fUmVhY3RTaGltLlJlYWN0KTtcbnZhciBpbnZhcmlhbnQgICAgICAgICAgICAgICAgID0gKHdpbmRvdy5fX1JlYWN0U2hpbS5pbnZhcmlhbnQpO1xudmFyIHNjaGVtYSAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3NjaGVtYScpO1xudmFyIFZhbGlkYXRlZE1peGluICAgICAgICAgICAgPSByZXF1aXJlKCcuL1ZhbGlkYXRlZE1peGluJyk7XG52YXIgZ2V0RGVmYXVsdFZhbHVlRm9yU2NoZW1hICA9IHJlcXVpcmUoJy4vZ2V0RGVmYXVsdFZhbHVlRm9yU2NoZW1hJyk7XG52YXIgdmFsaWRhdGlvbk0gICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdmFsaWRhdGlvbicpO1xuXG52YXIgc3VjY2VzcyA9IHZhbGlkYXRpb25NLnN1Y2Nlc3M7XG52YXIgc2VyaWFsaXplID0gdmFsaWRhdGlvbk0uc2VyaWFsaXplO1xuXG4vKipcbiAqIE1peGluIGZvciB0aGUgZm9ybSBlbGVtZW50IChmb3JtIGZpZWxkLCBmaWVsZHNldCBvZiByZXBlYXRpbmcgZmllbGRzZXQpLlxuICovXG52YXIgRm9ybUVsZW1lbnRNaXhpbiA9IHtcblxuICBtaXhpbnM6IFtWYWxpZGF0ZWRNaXhpbl0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgbmFtZTogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm51bWJlclxuICAgIF0pXG4gIH0sXG5cbiAgY29udGV4dFR5cGVzOiB7XG4gICAgc2VyaWFsaXplZFZhbHVlTGVuczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICB2YWx1ZUxlbnM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgdmFsaWRhdGlvbkxlbnM6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgc2NoZW1hOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIG9uVmFsdWVVcGRhdGU6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybiBsZW5zIGZvciB0aGUgZm9ybSBlbGVtZW50IHZhbHVlIG9yIGZvciB0aGUgdmFsdWUgcGFzc2VkIGFzIGFuXG4gICAqIGFyZ3VtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0FueT99IHZhbHVlXG4gICAqIEByZXR1cm5zIHtMZW5zfVxuICAgKi9cbiAgc2VyaWFsaXplZFZhbHVlTGVuczogZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgbGVucyA9IHRoaXMuY29udGV4dC5zZXJpYWxpemVkVmFsdWVMZW5zO1xuICAgIGlmICh0aGlzLnByb3BzLm5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbGVucyA9IGxlbnMuZ2V0KFxuICAgICAgICB0aGlzLnByb3BzLm5hbWUsXG4gICAgICAgIHNlcmlhbGl6ZSh0aGlzLnNjaGVtYSgpLCB0aGlzLnZhbHVlTGVucyh2YWx1ZSkudmFsKCkpXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWUgPyBsZW5zLmZvcih2YWx1ZSkgOiBsZW5zO1xuICB9LFxuXG4gIHZhbHVlTGVuczogZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgbGVucyA9IHRoaXMuY29udGV4dC52YWx1ZUxlbnM7XG4gICAgaWYgKHRoaXMucHJvcHMubmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBsZW5zID0gbGVucy5nZXQodGhpcy5wcm9wcy5uYW1lLCBnZXREZWZhdWx0VmFsdWVGb3JTY2hlbWEodGhpcy5zY2hlbWEoKSkpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWUgPyBsZW5zLmZvcih2YWx1ZSkgOiBsZW5zO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm4gbGVucyBmb3IgdGhlIGZvcm0gZWxlbWVudCB2YWxpZGF0aW9uIHN0YXRlIG9yIGZvciB0aGUgdmFsaWRhdGlvblxuICAgKiBzdGF0ZSBwYXNzZWQgYXMgYW4gYXJndW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7VmFsaWRhdGlvbj99IHZhbGlkYXRpb25cbiAgICogQHJldHVybnMge0xlbnN9XG4gICAqL1xuICB2YWxpZGF0aW9uTGVuczogZnVuY3Rpb24odmFsaWRhdGlvbikge1xuICAgIHZhciBsZW5zID0gdGhpcy5jb250ZXh0LnZhbGlkYXRpb25MZW5zO1xuICAgIGlmICh0aGlzLnByb3BzLm5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbGVucyA9IGxlbnMuZ2V0KCdjaGlsZHJlbicsIHt9KS5nZXQodGhpcy5wcm9wcy5uYW1lLCBzdWNjZXNzKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbGlkYXRpb24gPyBsZW5zLmZvcih2YWxpZGF0aW9uKSA6IGxlbnM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybiBmb3JtIGVsZW1lbnQgc2NoZW1hLlxuICAgKlxuICAgKiBAcmV0dXJucyB7U2NoZW1hfVxuICAgKi9cbiAgc2NoZW1hOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMuY29udGV4dC5zY2hlbWE7XG5cbiAgICBpZiAobm9kZSAmJiB0aGlzLnByb3BzLm5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHNjaGVtYS5pc1NjaGVtYShub2RlKSkge1xuICAgICAgICBub2RlID0gbm9kZS5jaGlsZHJlblt0aGlzLnByb3BzLm5hbWVdO1xuICAgICAgfSBlbHNlIGlmIChzY2hlbWEuaXNMaXN0KG5vZGUpKSB7XG4gICAgICAgIG5vZGUgPSBub2RlLmNoaWxkcmVuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW52YXJpYW50KGZhbHNlLCAnaW52YWxpZCBmaWVsZCB1c2VkIGZvciBzY2hlbWEnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfSxcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIGZvcm0gdmFsdWUgYW5kIHZhbGlkYXRpb24gc3RhdGUgaXMgYmVpbmcgdXBkYXRlZC5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgaW50ZXJjZXB0cyB1cGRhdGVkIHZhbHVlIGFuZCB2YWxpZGF0aW9uIHN0YXRlIGFuZCBwZXJmb3JtIGl0c1xuICAgKiBvd24gbG9jYWwgdmFsaWRhdGlvbiBhbmQgZGVzZXJpYWxpemF0aW9uLiBUaGVuIHBhc3NlcyBldmVyeXRoaW5nIHVwIHRoZVxuICAgKiBvd25lci5cbiAgICpcbiAgICogQHBhcmFtIHtBbnl9IHZhbHVlXG4gICAqIEBwYXJhbSB7VmFsaWRhdGlvbn0gdmFsaWRhdGlvblxuICAgKi9cbiAgb25WYWx1ZVVwZGF0ZTogZnVuY3Rpb24odmFsdWUsIHZhbGlkYXRpb24sIHNlcmlhbGl6ZWRWYWx1ZSkge1xuICAgIHZhciB2YWxpZGF0aW9uTGVucyA9IHRoaXMudmFsaWRhdGlvbkxlbnModmFsaWRhdGlvbik7XG4gICAgdmFyIHZhbHVlTGVucyA9IHRoaXMudmFsdWVMZW5zKHZhbHVlKTtcblxuICAgIHZhciBsb2NhbCA9IHRoaXMudmFsaWRhdGVPbmx5KFxuICAgICAgdmFsdWVMZW5zLnZhbCgpLFxuICAgICAgdmFsaWRhdGlvbkxlbnMudmFsKCkuY2hpbGRyZW5cbiAgICApO1xuXG4gICAgdmFsdWVMZW5zID0gdmFsdWVMZW5zLm1vZChsb2NhbC52YWx1ZSk7XG4gICAgdmFsaWRhdGlvbkxlbnMgPSB2YWxpZGF0aW9uTGVucy51cGRhdGUobG9jYWwudmFsaWRhdGlvbik7XG5cbiAgICB0aGlzLmNvbnRleHQub25WYWx1ZVVwZGF0ZShcbiAgICAgIHZhbHVlTGVucy5yb290KCksXG4gICAgICB2YWxpZGF0aW9uTGVucy5yb290KCksXG4gICAgICBzZXJpYWxpemVkVmFsdWVcbiAgICApO1xuICB9LFxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIHNlcmlhbGl6ZWQgdmFsdWUgZm9yIHRoZSBjdXJyZW50IGZvcm0gZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtBbnl9IHNlcmlhbGl6ZWRWYWx1ZVxuICAgKi9cbiAgdXBkYXRlVmFsdWU6IGZ1bmN0aW9uKHNlcmlhbGl6ZWRWYWx1ZSkge1xuICAgIHRoaXMub25WYWx1ZVVwZGF0ZShcbiAgICAgIHRoaXMudmFsdWVMZW5zKCkubW9kKHNlcmlhbGl6ZWRWYWx1ZSkucm9vdCgpLFxuICAgICAgdGhpcy52YWxpZGF0aW9uTGVucygpLnJvb3QoKSxcbiAgICAgIHRoaXMuc2VyaWFsaXplZFZhbHVlTGVucygpLm1vZChzZXJpYWxpemVkVmFsdWUpLnJvb3QoKVxuICAgICk7XG4gIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtRWxlbWVudE1peGluO1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCAgICAgICAgICAgICAgICAgICAgID0gKHdpbmRvdy5fX1JlYWN0U2hpbS5SZWFjdCk7XG52YXIgRm9ybUVsZW1lbnRNaXhpbiAgICAgICAgICA9IHJlcXVpcmUoJy4vRm9ybUVsZW1lbnRNaXhpbicpO1xudmFyIGNyZWF0ZUNvbXBvbmVudEZyb21TY2hlbWEgPSByZXF1aXJlKCcuL2NyZWF0ZUNvbXBvbmVudEZyb21TY2hlbWEnKTtcblxuLyoqXG4gKiBBIFwicHJveHlcIiBjb21wb25lbnQgd2hpY2ggcmVuZGVycyBpbnRvIGZpZWxkLCBmaWVsZHNldCBvciByZXBlYXRpbmcgZmllbGRzZXRcbiAqIGJhc2VkIG9uIGEgY3VycmVudCBzY2hlbWEgbm9kZS5cbiAqL1xudmFyIEZvcm1Gb3IgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdGb3JtRm9yJyxcbiAgbWl4aW5zOiBbRm9ybUVsZW1lbnRNaXhpbl0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgbmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmZXJQcm9wc1RvKGNyZWF0ZUNvbXBvbmVudEZyb21TY2hlbWEodGhpcy5zY2hlbWEoKSkpO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtRm9yO1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCAgICAgICAgICAgICAgICAgICAgID0gKHdpbmRvdy5fX1JlYWN0U2hpbS5SZWFjdCk7XG52YXIgUmVhY3RVcGRhdGVzICAgICAgICAgICAgICA9ICh3aW5kb3cuX19SZWFjdFNoaW0uUmVhY3RVcGRhdGVzKTtcbnZhciBsZW5zICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9sZW5zJyk7XG52YXIgVmFsaWRhdGVkTWl4aW4gICAgICAgICAgICA9IHJlcXVpcmUoJy4vVmFsaWRhdGVkTWl4aW4nKTtcbnZhciBGb3JtQ29udGV4dE1peGluICAgICAgICAgID0gcmVxdWlyZSgnLi9Gb3JtQ29udGV4dE1peGluJyk7XG52YXIgZ2V0RGVmYXVsdFZhbHVlRm9yU2NoZW1hICA9IHJlcXVpcmUoJy4vZ2V0RGVmYXVsdFZhbHVlRm9yU2NoZW1hJyk7XG52YXIgdmFsaWRhdGlvbk0gICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdmFsaWRhdGlvbicpO1xuXG52YXIgc2VyaWFsaXplID0gdmFsaWRhdGlvbk0uc2VyaWFsaXplO1xudmFyIHN1Y2Nlc3MgPSB2YWxpZGF0aW9uTS5zdWNjZXNzO1xuXG4vKipcbiAqIE1peGluIHdoaWNoIGhhbmRsZXMgZm9ybSB2YWx1ZSBhbmQgZm9ybSB2YWxpZGF0aW9uIHN0YXRlLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbnZhciBGb3JtU3RhdGVNaXhpbiA9IHtcbiAgbWl4aW5zOiBbVmFsaWRhdGVkTWl4aW5dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGRlZmF1bHRWYWx1ZTogUmVhY3QuUHJvcFR5cGVzLmFueSxcbiAgICB2YWx1ZTogUmVhY3QuUHJvcFR5cGVzLmFueSxcbiAgICBzZXJpYWxpemVkVmFsdWU6IFJlYWN0LlByb3BUeXBlcy5hbnksXG4gICAgc2NoZW1hOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIG9uQ2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvblVwZGF0ZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvcHMudmFsdWUgfHxcbiAgICAgIHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlIHx8XG4gICAgICBnZXREZWZhdWx0VmFsdWVGb3JTY2hlbWEodGhpcy5wcm9wcy5zY2hlbWEpO1xuICAgIHZhciBzdGF0ZSA9IHRoaXMuZ2V0Rm9ybVN0YXRlKHZhbHVlKTtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24obmV4dFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgbmV4dFN0YXRlO1xuICAgICAgaWYgKG5leHRQcm9wcy52YWxpZGF0aW9uICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICBuZXh0UHJvcHMuc2VyaWFsaXplZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbmV4dFN0YXRlID0ge1xuICAgICAgICAgIHNlcmlhbGl6ZWRWYWx1ZTogbmV4dFByb3BzLnNlcmlhbGl6ZWRWYWx1ZSxcbiAgICAgICAgICB2YWxpZGF0aW9uOiBuZXh0UHJvcHMudmFsaWRhdGlvbixcbiAgICAgICAgICB2YWx1ZTogbmV4dFByb3BzLnZhbHVlXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0U3RhdGUgPSB0aGlzLmdldEZvcm1TdGF0ZShuZXh0UHJvcHMudmFsdWUpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUpO1xuICAgIH1cbiAgfSxcblxuICBnZXRGb3JtU3RhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHZhbGlkYXRpb24gPSB0aGlzLnZhbGlkYXRlKHZhbHVlKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbGlkYXRpb24udmFsdWUsXG4gICAgICB2YWxpZGF0aW9uOiB2YWxpZGF0aW9uLnZhbGlkYXRpb24sXG4gICAgICBzZXJpYWxpemVkVmFsdWU6IHNlcmlhbGl6ZSh0aGlzLnNjaGVtYSgpLCB2YWxpZGF0aW9uLnZhbHVlKVxuICAgIH07XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybiBsZW5zIGZvciB0aGUgZm9ybSB2YWx1ZSBvciBmb3IgdGhlIHZhbHVlIHBhc3NlZCBhcyBhbiBhcmd1bWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtBbnk/fSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7TGVuc31cbiAgICovXG4gIHNlcmlhbGl6ZWRWYWx1ZUxlbnM6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGxlbnModmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDogdGhpcy5zdGF0ZS5zZXJpYWxpemVkVmFsdWUpO1xuICB9LFxuXG4gIHZhbHVlTGVuczogZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gbGVucyh2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB0aGlzLnN0YXRlLnZhbHVlKTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJuIGxlbnMgZm9yIHRoZSBmb3JtIHZhbGlkYXRpb24gc3RhdGUgb3IgZm9yIHRoZSB2YWxpZGF0aW9uIHN0YXRlXG4gICAqIHBhc3NlZCBhcyBhbiBhcmd1bWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtWYWxpZGF0aW9uP30gdmFsaWRhdGlvblxuICAgKiBAcmV0dXJucyB7TGVuc31cbiAgICovXG4gIHZhbGlkYXRpb25MZW5zOiBmdW5jdGlvbih2YWxpZGF0aW9uKSB7XG4gICAgcmV0dXJuIGxlbnModmFsaWRhdGlvbiAhPT0gdW5kZWZpbmVkID8gdmFsaWRhdGlvbiA6IHRoaXMuc3RhdGUudmFsaWRhdGlvbik7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZvcm0gc2NoZW1hLlxuICAgKlxuICAgKiBAcmV0dXJucyB7U2NoZW1hfVxuICAgKi9cbiAgc2NoZW1hOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5zY2hlbWE7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSBmb3JtIHZhbHVlIGFuZCB2YWxpZGF0aW9uIHN0YXRlIGlzIGJlaW5nIHVwZGF0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7QW55fSB2YWx1ZVxuICAgKiBAcGFyYW0ge1ZhbGlkYXRpb259IHZhbGlkYXRpb25cbiAgICogQHBhcmFtIHtBbnl9IGNvbnZlcnRlZFZhbHVlXG4gICAqL1xuICBvblZhbHVlVXBkYXRlOiBmdW5jdGlvbih2YWx1ZSwgdmFsaWRhdGlvbiwgc2VyaWFsaXplZFZhbHVlKSB7XG4gICAgdmFsaWRhdGlvbiA9IHZhbGlkYXRpb24gfHwgc3VjY2VzcztcbiAgICBSZWFjdFVwZGF0ZXMuYmF0Y2hlZFVwZGF0ZXMoZnVuY3Rpb24oKSAge1xuICAgICAgaWYgKHRoaXMucHJvcHMub25VcGRhdGUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblVwZGF0ZSh2YWx1ZSwgdmFsaWRhdGlvbiwgc2VyaWFsaXplZFZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHZhbGlkYXRpb24uaXNTdWNjZXNzKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUsIHZhbGlkYXRpb24sIHNlcmlhbGl6ZWRWYWx1ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTp2YWx1ZSwgdmFsaWRhdGlvbjp2YWxpZGF0aW9uLCBzZXJpYWxpemVkVmFsdWU6c2VyaWFsaXplZFZhbHVlfSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxufTtcblxudmFyIEZvcm1NaXhpbiA9IHtcbiAgbWl4aW5zOiBbRm9ybVN0YXRlTWl4aW4sIEZvcm1Db250ZXh0TWl4aW5dXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZvcm1NaXhpbjtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSAod2luZG93Ll9fUmVhY3RTaGltLlJlYWN0KTtcblxudmFyIE1lc3NhZ2UgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdNZXNzYWdlJyxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZmVyUHJvcHNUbyhcbiAgICAgIFJlYWN0LkRPTS5zcGFuKCB7Y2xhc3NOYW1lOlwicmVhY3QtZm9ybXMtbWVzc2FnZVwifSwgXG4gICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBNZXNzYWdlO1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCAgICAgICAgICAgICAgICAgICA9ICh3aW5kb3cuX19SZWFjdFNoaW0uUmVhY3QpO1xudmFyIFJlcGVhdGluZ0ZpZWxkc2V0TWl4aW4gID0gcmVxdWlyZSgnLi9SZXBlYXRpbmdGaWVsZHNldE1peGluJyk7XG5cbnZhciBJdGVtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiAnSXRlbScsXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2ZlclByb3BzVG8oXG4gICAgICBSZWFjdC5ET00uZGl2KCB7Y2xhc3NOYW1lOlwicmVhY3QtZm9ybXMtcmVwZWF0aW5nLWZpZWxkc2V0LWl0ZW1cIn0sIFxuICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuLFxuICAgICAgICBSZWFjdC5ET00uYnV0dG9uKFxuICAgICAgICAgIHtvbkNsaWNrOnRoaXMub25SZW1vdmUsXG4gICAgICAgICAgdHlwZTpcImJ1dHRvblwiLFxuICAgICAgICAgIGNsYXNzTmFtZTpcInJlYWN0LWZvcm1zLXJlcGVhdGluZy1maWVsZHNldC1yZW1vdmVcIn0sIFwiw5dcIilcbiAgICAgIClcbiAgICApO1xuICB9LFxuXG4gIG9uUmVtb3ZlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblJlbW92ZSkge1xuICAgICAgdGhpcy5wcm9wcy5vblJlbW92ZSh0aGlzLnByb3BzLm5hbWUpO1xuICAgIH1cbiAgfVxuXG59KTtcblxudmFyIFJlcGVhdGluZ0ZpZWxkc2V0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiAnUmVwZWF0aW5nRmllbGRzZXQnLFxuXG4gIG1peGluczogW1JlcGVhdGluZ0ZpZWxkc2V0TWl4aW5dLFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW06IEl0ZW1cbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjaGVtYSA9IHRoaXMuc2NoZW1hKCk7XG4gICAgdmFyIENvbXBvbmVudCA9IHRoaXMucHJvcHMuaXRlbTtcbiAgICB2YXIgaXRlbXMgPSB0aGlzLml0ZW1zKCkubWFwKGZ1bmN0aW9uKGl0ZW0pIFxuICAgICAge3JldHVybiBDb21wb25lbnQoXG4gICAgICAgIHtrZXk6aXRlbS5wcm9wcy5uYW1lLFxuICAgICAgICBuYW1lOml0ZW0ucHJvcHMubmFtZSxcbiAgICAgICAgb25SZW1vdmU6dGhpcy5yZW1vdmVJdGVtfSwgXG4gICAgICAgIGl0ZW1cbiAgICAgICk7fS5iaW5kKHRoaXMpXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy50cmFuc2ZlclByb3BzVG8oXG4gICAgICBSZWFjdC5ET00uZGl2KCB7Y2xhc3NOYW1lOlwicmVhY3QtZm9ybXMtcmVwZWF0aW5nLWZpZWxkc2V0XCJ9LCBcbiAgICAgICAgc2NoZW1hLnByb3BzLmxhYmVsICYmIFJlYWN0LkRPTS5oNChudWxsLCBzY2hlbWEucHJvcHMubGFiZWwpLFxuICAgICAgICBpdGVtcyxcbiAgICAgICAgUmVhY3QuRE9NLmJ1dHRvbihcbiAgICAgICAgICB7dHlwZTpcImJ1dHRvblwiLFxuICAgICAgICAgIG9uQ2xpY2s6dGhpcy5hZGRJdGVtLFxuICAgICAgICAgIGNsYXNzTmFtZTpcInJlYWN0LWZvcm1zLXJlcGVhdGluZy1maWVsZHNldC1hZGRcIn0sIFwiQWRkXCIpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZXBlYXRpbmdGaWVsZHNldDtcbm1vZHVsZS5leHBvcnRzLkl0ZW0gPSBJdGVtO1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCAgICAgICAgICAgICAgICAgICAgID0gKHdpbmRvdy5fX1JlYWN0U2hpbS5SZWFjdCk7XG52YXIgY2xvbmVXaXRoUHJvcHMgICAgICAgICAgICA9ICh3aW5kb3cuX19SZWFjdFNoaW0uY2xvbmVXaXRoUHJvcHMpO1xudmFyIEZvcm1FbGVtZW50TWl4aW4gICAgICAgICAgPSByZXF1aXJlKCcuL0Zvcm1FbGVtZW50TWl4aW4nKTtcbnZhciBGb3JtQ29udGV4dE1peGluICAgICAgICAgID0gcmVxdWlyZSgnLi9Gb3JtQ29udGV4dE1peGluJyk7XG52YXIgZ2V0RGVmYXVsdFZhbHVlRm9yU2NoZW1hICA9IHJlcXVpcmUoJy4vZ2V0RGVmYXVsdFZhbHVlRm9yU2NoZW1hJyk7XG5cbi8qKlxuICogTWl4aW4gZm9yIGltcGxlbWVudGluZyByZXBlYXRpbmcgZmllbGRzZXRzLlxuICpcbiAqIFNlZSA8UmVwZWF0aW5nRmllbGRzZXQgLz4gY29tcG9uZW50IGZvciB0aGUgYmFzaWMgaW1wbGVtZW50YXRpb24gZXhhbXBsZS5cbiAqL1xudmFyIFJlcGVhdGluZ0ZpZWxkc2V0TWl4aW4gPSB7XG4gIG1peGluczogW0Zvcm1FbGVtZW50TWl4aW4sIEZvcm1Db250ZXh0TWl4aW5dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIG9uUmVtb3ZlSXRlbTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25BZGRJdGVtOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgUmVhY3QgY29tcG9uZW50cyByZW5kZXJlZCBmb3IgYWxsIHRoZSB2YWx1ZXMgaW4gYW4gYXJyYXlcbiAgICogdGhpcyBmaWVsZHNldCBvd25zLlxuICAgKlxuICAgKiBAcmV0dXJucyB7QXJyYXkuPFJlYWN0Q29tcG9uZW50Pn1cbiAgICovXG4gIGl0ZW1zOiBmdW5jdGlvbigpIHtcbiAgICAvLyBwcmV2ZW50IGNpcmN1bGFyIHJlcXVpcmVcbiAgICB2YXIgY3JlYXRlQ29tcG9uZW50RnJvbVNjaGVtYSA9IHJlcXVpcmUoJy4vY3JlYXRlQ29tcG9uZW50RnJvbVNjaGVtYScpO1xuICAgIHZhciBzY2hlbWEgPSB0aGlzLnNjaGVtYSgpO1xuICAgIHZhciBjaGlsZHJlbiA9IGNyZWF0ZUNvbXBvbmVudEZyb21TY2hlbWEoc2NoZW1hLmNoaWxkcmVuKTtcbiAgICByZXR1cm4gdGhpcy5zZXJpYWxpemVkVmFsdWVMZW5zKCkudmFsKCkubWFwKGZ1bmN0aW9uKGl0ZW0sIG5hbWUpIFxuICAgICAge3JldHVybiBjbG9uZVdpdGhQcm9wcyhjaGlsZHJlbiwge25hbWU6bmFtZSwga2V5OiBuYW1lfSk7fSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbiBpdGVtIGJ5IGluZGV4XG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gbmFtZVxuICAgKi9cbiAgcmVtb3ZlSXRlbTogZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuc2VyaWFsaXplZFZhbHVlTGVucygpLnZhbCgpLnNsaWNlKDApO1xuICAgIHZhbHVlLnNwbGljZShuYW1lLCAxKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlKHZhbHVlKTtcbiAgICBpZiAodGhpcy5wcm9wcy5vblJlbW92ZUl0ZW0pIHtcbiAgICAgIHRoaXMucHJvcHMub25SZW1vdmVJdGVtKG5hbWUpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQWRkIG5ldyBpdGVtLlxuICAgKi9cbiAgYWRkSXRlbTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjaGVtYSA9IHRoaXMuc2NoZW1hKCk7XG4gICAgdmFyIGRlZmF1bHRWYWx1ZSA9IGdldERlZmF1bHRWYWx1ZUZvclNjaGVtYShzY2hlbWEuY2hpbGRyZW4pO1xuICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy52YWx1ZUxlbnMoKS52YWwoKS5jb25jYXQoZGVmYXVsdFZhbHVlKSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25BZGRJdGVtKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQWRkSXRlbSgpO1xuICAgIH1cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZXBlYXRpbmdGaWVsZHNldE1peGluO1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciB2YWxpZGF0aW9uID0gcmVxdWlyZSgnLi92YWxpZGF0aW9uJyk7XG5cbi8qKlxuICogQ29tbW9uIHZhbGlkYXRpb24gcm91dGluZXMuXG4gKlxuICogQHByaXZhdGVcbiAqL1xudmFyIFZhbGlkYXRlZE1peGluID0ge1xuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZSB2YWx1ZSBpbmNyZW1lbnRhbGx5XG4gICAqXG4gICAqIEBwYXJhbSB7QW55fSB2YWx1ZVxuICAgKiBAcGFyYW0ge09iamVjdC48ezxuYW1lPjogVmFsaWRhdGlvbn0+fSBjaGlsZHJlblxuICAgKiBAcmV0dXJucyB7T2JqZWN0Ljx7dmFsdWU6IEFueSwgdmFsaWRhdGlvbjogVmFsaWRhdGlvbn0+fVxuICAgKi9cbiAgdmFsaWRhdGVPbmx5OiBmdW5jdGlvbih2YWx1ZSwgY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGVXaXRoKHZhbGlkYXRpb24udmFsaWRhdGVPbmx5LCB2YWx1ZSwgY2hpbGRyZW4pO1xuICB9LFxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZSB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtBbnl9IHZhbHVlXG4gICAqIEByZXR1cm5zIHtPYmplY3QuPHt2YWx1ZTogQW55LCB2YWxpZGF0aW9uOiBWYWxpZGF0aW9ufT59XG4gICAqL1xuICB2YWxpZGF0ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGVXaXRoKHZhbGlkYXRpb24udmFsaWRhdGUsIHZhbHVlKTtcbiAgfSxcblxuICBfdmFsaWRhdGVXaXRoOiBmdW5jdGlvbih2YWxpZGF0ZSwgdmFsdWUsIGNoaWxkcmVuKSB7XG4gICAgdmFsdWUgPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB0aGlzLnNlcmlhbGl6ZWRWYWx1ZUxlbnMoKS52YWwoKTtcbiAgICB2YXIgc2NoZW1hID0gdGhpcy5zY2hlbWEoKTtcbiAgICByZXR1cm4gc2NoZW1hID9cbiAgICAgIHZhbGlkYXRlKHNjaGVtYSwgdmFsdWUsIGNoaWxkcmVuKSA6XG4gICAgICB7dmFsaWRhdGlvbjogdmFsaWRhdGlvbi5zdWNjZXNzLCB2YWx1ZTp2YWx1ZX07XG4gIH0sXG5cbiAgLyoqXG4gICAqIElmIGZvcm0gdmFsdWUgaXMgdmFsaWQuXG4gICAqXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgaXNWYWxpZDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdGUoKS5pc1N1Y2Nlc3M7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVmFsaWRhdGVkTWl4aW47XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIGludmFyaWFudCAgICAgICAgID0gKHdpbmRvdy5fX1JlYWN0U2hpbS5pbnZhcmlhbnQpO1xudmFyIHNjaGVtYSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9zY2hlbWEnKTtcbnZhciBGaWVsZCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vRmllbGQnKTtcbnZhciBGaWVsZHNldCAgICAgICAgICA9IHJlcXVpcmUoJy4vRmllbGRzZXQnKTtcbnZhciBSZXBlYXRpbmdGaWVsZHNldCA9IHJlcXVpcmUoJy4vUmVwZWF0aW5nRmllbGRzZXQnKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBjb21wb25lbnQgd2hpY2ggcmVwcmVzZW50cyBwcm92aWRlZCBzY2hlbWEgbm9kZVxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1NjaGVtYU5vZGV9IG5vZGVcbiAqIEByZXR1cm5zIHtSZWFjdENvbXBvbmVudH1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50RnJvbVNjaGVtYShub2RlKSB7XG4gIGlmIChub2RlLnByb3BzLmNvbXBvbmVudCkge1xuICAgIHJldHVybiBub2RlLnByb3BzLmNvbXBvbmVudCh7a2V5OiBub2RlLm5hbWUsIG5hbWU6IG5vZGUubmFtZX0pO1xuICB9XG5cbiAgaWYgKHNjaGVtYS5pc0xpc3Qobm9kZSkpIHtcbiAgICByZXR1cm4gUmVwZWF0aW5nRmllbGRzZXQoIHtrZXk6bm9kZS5uYW1lLCBuYW1lOm5vZGUubmFtZX0gKTtcbiAgfSBlbHNlIGlmIChzY2hlbWEuaXNTY2hlbWEobm9kZSkpIHtcbiAgICByZXR1cm4gRmllbGRzZXQoIHtrZXk6bm9kZS5uYW1lLCBuYW1lOm5vZGUubmFtZX0gKTtcbiAgfSBlbHNlIGlmIChzY2hlbWEuaXNQcm9wZXJ0eShub2RlKSkge1xuICAgIHJldHVybiBGaWVsZCgge2tleTpub2RlLm5hbWUsIG5hbWU6bm9kZS5uYW1lfSApO1xuICB9IGVsc2Uge1xuICAgIGludmFyaWFudChmYWxzZSwgJ2ludmFsaWQgc2NoZW1hIG5vZGU6ICVzJywgbm9kZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVDb21wb25lbnRGcm9tU2NoZW1hO1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBpbnZhcmlhbnQgPSAod2luZG93Ll9fUmVhY3RTaGltLmludmFyaWFudCk7XG52YXIgc2NoZW1hICAgID0gcmVxdWlyZSgnLi9zY2hlbWEnKTtcblxuLyoqXG4gKiBHZXQgZGVmYXVsdCB2YWx1ZSBmb3Igc2NoZW1hIG5vZGVcbiAqXG4gKiBAcGFyYW0ge1NjaGVtYU5vZGV9IG5vZGVcbiAqIEByZXR1cm5zIHtBbnl9XG4gKi9cbmZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZUZvclNjaGVtYShub2RlKSB7XG4gIGlmIChub2RlICYmIG5vZGUucHJvcHMgJiYgbm9kZS5wcm9wcy5kZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBub2RlLnByb3BzLmRlZmF1bHRWYWx1ZTtcbiAgfVxuICBpZiAoc2NoZW1hLmlzU2NoZW1hKG5vZGUpKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9IGVsc2UgaWYgKHNjaGVtYS5pc0xpc3Qobm9kZSkpIHtcbiAgICByZXR1cm4gW107XG4gIH0gZWxzZSBpZiAoc2NoZW1hLmlzUHJvcGVydHkobm9kZSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICBpbnZhcmlhbnQoXG4gICAgICBmYWxzZSxcbiAgICAgICdkbyBub3Qga25vdyBob3cgdG8gaW5mZXIgZGVmYXVsdCB2YWx1ZSBmb3IgJXMnLCBub2RlXG4gICAgKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldERlZmF1bHRWYWx1ZUZvclNjaGVtYTtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW52YXJpYW50ID0gKHdpbmRvdy5fX1JlYWN0U2hpbS5pbnZhcmlhbnQpO1xudmFyIGlzU3RyaW5nICA9IHJlcXVpcmUoJy4vaXNTdHJpbmcnKTtcbnZhciB0eXBlcyAgICAgPSByZXF1aXJlKCcuL3R5cGVzJyk7XG52YXIgc2NoZW1hICAgID0gcmVxdWlyZSgnLi9zY2hlbWEnKTtcblxuLyoqXG4gKiBSZXR1cm4gYSB0eXBlIHdoaWNoIGNvcnJlc3BvbmRzIHRvIGEgZ2l2ZW4gc2NoZW1hIG5vZGUuXG4gKlxuICogQHBhcmFtIHtTY2hlbWF9IG5vZGVcbiAqIEByZXR1cm4ge1R5cGV9XG4gKi9cbmZ1bmN0aW9uIGdldFR5cGVGcm9tU2NoZW1hKG5vZGUpIHtcbiAgaWYgKG5vZGUgJiYgbm9kZS5wcm9wcy50eXBlKSB7XG5cbiAgICBpbnZhcmlhbnQoXG4gICAgICBzY2hlbWEuaXNQcm9wZXJ0eShub2RlKSxcbiAgICAgICdvbmx5IFByb3BlcnR5IHNjaGVtYSBub2RlcyBjYW4gaGF2ZSB0eXBlcydcbiAgICApO1xuXG4gICAgaWYgKGlzU3RyaW5nKG5vZGUucHJvcHMudHlwZSkpIHtcbiAgICAgIHZhciB0eXBlID0gdHlwZXNbbm9kZS5wcm9wcy50eXBlXTtcbiAgICAgIGludmFyaWFudCh0eXBlLCAndW5rbm93biB0eXBlICVzJywgbm9kZS5wcm9wcy50eXBlKTtcbiAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlLnByb3BzLnR5cGU7XG4gIH1cblxuICByZXR1cm4gdHlwZXMuYW55O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFR5cGVGcm9tU2NoZW1hO1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBGb3JtICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vRm9ybScpO1xudmFyIEZpZWxkc2V0ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9GaWVsZHNldCcpO1xudmFyIFJlcGVhdGluZ0ZpZWxkc2V0ICAgICAgID0gcmVxdWlyZSgnLi9SZXBlYXRpbmdGaWVsZHNldCcpO1xudmFyIEZpZWxkICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9GaWVsZCcpO1xudmFyIEZvcm1Gb3IgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9Gb3JtRm9yJyk7XG52YXIgTWVzc2FnZSAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL01lc3NhZ2UnKTtcblxudmFyIEZvcm1NaXhpbiAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9Gb3JtTWl4aW4nKTtcbnZhciBGb3JtQ29udGV4dE1peGluICAgICAgICA9IHJlcXVpcmUoJy4vRm9ybUNvbnRleHRNaXhpbicpO1xudmFyIEZvcm1FbGVtZW50TWl4aW4gICAgICAgID0gcmVxdWlyZSgnLi9Gb3JtRWxlbWVudE1peGluJyk7XG52YXIgRmllbGRNaXhpbiAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL0ZpZWxkTWl4aW4nKTtcbnZhciBGaWVsZHNldE1peGluICAgICAgICAgICA9IHJlcXVpcmUoJy4vRmllbGRzZXRNaXhpbicpO1xudmFyIFJlcGVhdGluZ0ZpZWxkc2V0TWl4aW4gID0gcmVxdWlyZSgnLi9SZXBlYXRpbmdGaWVsZHNldE1peGluJyk7XG5cbnZhciB2YWxpZGF0b3JzICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdmFsaWRhdG9ycycpO1xudmFyIHR5cGVzICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi90eXBlcycpO1xudmFyIHNjaGVtYSAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9zY2hlbWEnKTtcbnZhciBpbnB1dCAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vaW5wdXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEZvcm1NaXhpbjpGb3JtTWl4aW4sIEZvcm1Db250ZXh0TWl4aW46Rm9ybUNvbnRleHRNaXhpbiwgRm9ybUVsZW1lbnRNaXhpbjpGb3JtRWxlbWVudE1peGluLFxuICBGaWVsZE1peGluOkZpZWxkTWl4aW4sIEZpZWxkc2V0TWl4aW46RmllbGRzZXRNaXhpbiwgUmVwZWF0aW5nRmllbGRzZXRNaXhpbjpSZXBlYXRpbmdGaWVsZHNldE1peGluLFxuXG4gIEZvcm06Rm9ybSwgRmllbGQ6RmllbGQsIEZpZWxkc2V0OkZpZWxkc2V0LCBSZXBlYXRpbmdGaWVsZHNldDpSZXBlYXRpbmdGaWVsZHNldCxcblxuICBGb3JtRm9yOkZvcm1Gb3IsIE1lc3NhZ2U6TWVzc2FnZSxcblxuICBzY2hlbWE6c2NoZW1hLCB0eXBlczp0eXBlcywgdmFsaWRhdG9yczp2YWxpZGF0b3JzLCBpbnB1dDppbnB1dFxufTtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSAod2luZG93Ll9fUmVhY3RTaGltLlJlYWN0KTtcblxudmFyIENoZWNrYm94R3JvdXAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdDaGVja2JveEdyb3VwJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBvcHRpb25zOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICB2YWx1ZTogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuICAgIG9uQ2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHt2YWx1ZTogW119O1xuICB9LFxuXG4gIG9uQ2hhbmdlOiBmdW5jdGlvbihlKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRWYWx1ZSA9IHRoaXMucHJvcHMudmFsdWUuc2xpY2UoMCk7XG5cbiAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgbmV4dFZhbHVlLnB1c2goZS50YXJnZXQudmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgaWR4ID0gbmV4dFZhbHVlLmluZGV4T2YoZS50YXJnZXQudmFsdWUpO1xuICAgICAgaWYgKGlkeCA+IC0xKSB7XG4gICAgICAgIG5leHRWYWx1ZS5zcGxpY2UoaWR4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgdmFsdWVzID0gdGhpcy5wcm9wcy5vcHRpb25zLm1hcChmdW5jdGlvbihvKSAge3JldHVybiBvLnZhbHVlO30pO1xuICAgIG5leHRWYWx1ZS5zb3J0KGZ1bmN0aW9uKGEsIGIpICB7cmV0dXJuIHZhbHVlcy5pbmRleE9mKGEpIC0gdmFsdWVzLmluZGV4T2YoYik7fSk7XG5cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5leHRWYWx1ZSk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgbmFtZSA9IHRoaXMuX3Jvb3ROb2RlSUQ7XG4gICAgdmFyIHZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZTtcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMucHJvcHMub3B0aW9ucy5tYXAoZnVuY3Rpb24ob3B0aW9uKSAge1xuICAgICAgdmFyIGNoZWNrZWQgPSB2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKG9wdGlvbi52YWx1ZSkgPiAtMTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIFJlYWN0LkRPTS5kaXYoXG4gICAgICAgICAge2NsYXNzTmFtZTpcInJlYWN0LWZvcm1zLWNoZWNrYm94LWdyb3VwLWJ1dHRvblwiLFxuICAgICAgICAgIGtleTpvcHRpb24udmFsdWV9LCBcbiAgICAgICAgICBSZWFjdC5ET00ubGFiZWwoIHtjbGFzc05hbWU6XCJyZWFjdC1mb3Jtcy1jaGVja2JveC1ncm91cC1sYWJlbFwifSwgXG4gICAgICAgICAgICBSZWFjdC5ET00uaW5wdXQoXG4gICAgICAgICAgICAgIHtvbkNoYW5nZTp0aGlzLm9uQ2hhbmdlLFxuICAgICAgICAgICAgICBjaGVja2VkOmNoZWNrZWQsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTpcInJlYWN0LWZvcm1zLWNoZWNrYm94LWdyb3VwLWNoZWNrYm94XCIsXG4gICAgICAgICAgICAgIHR5cGU6XCJjaGVja2JveFwiLFxuICAgICAgICAgICAgICBuYW1lOm5hbWUsXG4gICAgICAgICAgICAgIHZhbHVlOm9wdGlvbi52YWx1ZX0gKSxcbiAgICAgICAgICAgIFJlYWN0LkRPTS5zcGFuKCB7Y2xhc3NOYW1lOlwicmVhY3QtZm9ybXMtY2hlY2tib3gtZ3JvdXAtY2FwdGlvblwifSwgXG4gICAgICAgICAgICAgIG9wdGlvbi5uYW1lXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuRE9NLmRpdigge2NsYXNzTmFtZTpcInJlYWN0LWZvcm1zLWNoZWNrYm94LWdyb3VwXCJ9LCBcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENoZWNrYm94R3JvdXA7XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gKHdpbmRvdy5fX1JlYWN0U2hpbS5SZWFjdCk7XG5cbmZ1bmN0aW9uIHJlbmRlckVtcHR5T3B0aW9uKHByb3BzLCBvbkNoYW5nZSkge1xuICByZXR1cm4gKFxuICAgIFJlYWN0LkRPTS5kaXYoXG4gICAgICAgIHtjbGFzc05hbWU6XCJyZWFjdC1mb3Jtcy1yYWRpby1idXR0b24tZ3JvdXAtYnV0dG9uXCIsXG4gICAgICAgIGtleTpcIlwifSwgXG4gICAgICBSZWFjdC5ET00ubGFiZWwoXG4gICAgICAgIHtjbGFzc05hbWU6XCJyZWFjdC1mb3Jtcy1yYWRpby1idXR0b24tZ3JvdXAtbGFiZWxcIn0sIFxuICAgICAgICBSZWFjdC5ET00uaW5wdXQoXG4gICAgICAgICAge2NoZWNrZWQ6cHJvcHMuY2hlY2tlZCxcbiAgICAgICAgICBjbGFzc05hbWU6XCJyZWFjdC1mb3Jtcy1yYWRpby1idXR0b24tZ3JvdXAtcmFkaW9cIixcbiAgICAgICAgICB0eXBlOlwicmFkaW9cIixcbiAgICAgICAgICBuYW1lOnByb3BzLm5hbWUsXG4gICAgICAgICAgb25DaGFuZ2U6b25DaGFuZ2UuYmluZChudWxsLCBudWxsKSxcbiAgICAgICAgICB2YWx1ZTpcIlwifSApLFxuICAgICAgICBSZWFjdC5ET00uc3Bhbigge2NsYXNzTmFtZTpcInJlYWN0LWZvcm1zLXJhZGlvLWJ1dHRvbi1ncm91cC1jYXB0aW9uXCJ9LCBcbiAgICAgICAgICBcIm5vbmVcIlxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xufVxuXG52YXIgUmFkaW9CdXR0b25Hcm91cCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogJ1JhZGlvQnV0dG9uR3JvdXAnLFxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICBvcHRpb25zOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICAgIGFsbG93RW1wdHk6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgICAgdmFsdWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBvbkNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5wcm9wcy5vcHRpb25zLm1hcCh0aGlzLnJlbmRlck9wdGlvbik7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmFsbG93RW1wdHkpIHtcbiAgICAgICAgb3B0aW9ucy51bnNoaWZ0KHJlbmRlckVtcHR5T3B0aW9uKHtcbiAgICAgICAgICAgIG5hbWU6IHRoaXMuX3Jvb3ROb2RlSUQsXG4gICAgICAgICAgICBjaGVja2VkOiAhdGhpcy5wcm9wcy52YWx1ZVxuICAgICAgICB9LCB0aGlzLm9uQ2hhbmdlKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIFJlYWN0LkRPTS5kaXYoIHtjbGFzc05hbWU6XCJyZWFjdC1mb3Jtcy1yYWRpby1idXR0b24tZ3JvdXBcIn0sIFxuICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyT3B0aW9uOiBmdW5jdGlvbihvcHRpb24pIHtcbiAgICAgIHZhciBuYW1lID0gdGhpcy5fcm9vdE5vZGVJRDtcbiAgICAgIHZhciBjaGVja2VkID0gdGhpcy5wcm9wcy52YWx1ZSA/XG4gICAgICAgICAgdGhpcy5wcm9wcy52YWx1ZSA9PT0gb3B0aW9uLnZhbHVlIDpcbiAgICAgICAgICBmYWxzZTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIFJlYWN0LkRPTS5kaXYoXG4gICAgICAgICAge2NsYXNzTmFtZTpcInJlYWN0LWZvcm1zLXJhZGlvLWJ1dHRvbi1ncm91cC1idXR0b25cIixcbiAgICAgICAgICBrZXk6b3B0aW9uLnZhbHVlfSwgXG4gICAgICAgICAgUmVhY3QuRE9NLmxhYmVsKFxuICAgICAgICAgICAge2NsYXNzTmFtZTpcInJlYWN0LWZvcm1zLXJhZGlvLWJ1dHRvbi1ncm91cC1sYWJlbFwifSwgXG4gICAgICAgICAgICBSZWFjdC5ET00uaW5wdXQoXG4gICAgICAgICAgICAgIHtjaGVja2VkOmNoZWNrZWQsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTpcInJlYWN0LWZvcm1zLXJhZGlvLWJ1dHRvbi1ncm91cC1yYWRpb1wiLFxuICAgICAgICAgICAgICB0eXBlOlwicmFkaW9cIixcbiAgICAgICAgICAgICAgbmFtZTpuYW1lLFxuICAgICAgICAgICAgICBvbkNoYW5nZTp0aGlzLm9uQ2hhbmdlLmJpbmQobnVsbCwgb3B0aW9uLnZhbHVlKSxcbiAgICAgICAgICAgICAgdmFsdWU6b3B0aW9uLnZhbHVlfSApLFxuICAgICAgICAgICAgUmVhY3QuRE9NLnNwYW4oIHtjbGFzc05hbWU6XCJyZWFjdC1mb3Jtcy1yYWRpby1idXR0b24tZ3JvdXAtY2FwdGlvblwifSwgXG4gICAgICAgICAgICAgIG9wdGlvbi5uYW1lXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0sXG5cbiAgICBvbkNoYW5nZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpO1xuICAgICAgfVxuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJhZGlvQnV0dG9uR3JvdXA7XG4iLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbm1vZHVsZS5leHBvcnRzID0ge1xuICBDaGVja2JveEdyb3VwOiByZXF1aXJlKCcuL0NoZWNrYm94R3JvdXAnKSxcbiAgUmFkaW9CdXR0b25Hcm91cDogcmVxdWlyZSgnLi9SYWRpb0J1dHRvbkdyb3VwJylcbn07XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuZnVuY3Rpb24gaXNTdHJpbmcobykge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChvKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTdHJpbmc7XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuXG5cbiAgZnVuY3Rpb24gTGVucyhkYXRhLCBwYXRoKSB7XG4gICAgdGhpcy5fX2RhdGEgPSBkYXRhO1xuICAgIHRoaXMuX19wYXRoID0gcGF0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSB2YWx1ZSB0aGlzIGxlbnNlIHBvaW50cyB0b1xuICAgKi9cbiAgTGVucy5wcm90b3R5cGUudmFsPWZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuX19kYXRhO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLl9fcGF0aC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgdmFyIGtleSA9IHRoaXMuX19wYXRoW2ldO1xuICAgICAgdmFsdWUgPSB2YWx1ZVtrZXkua2V5XTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmIGtleS5kZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YWx1ZSA9IGtleS5kZWZhdWx0VmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICBMZW5zLnByb3RvdHlwZS5yb290PWZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9fZGF0YTtcbiAgfTtcblxuICBMZW5zLnByb3RvdHlwZS5wYXJlbnQ9ZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX19wYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhdGggPSB0aGlzLl9fcGF0aC5zbGljZSgwLCB0aGlzLl9fcGF0aC5sZW5ndGggLSAxKTtcbiAgICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih0aGlzLl9fZGF0YSwgcGF0aCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgYSBsZW5zIGJ5IGEgc3BlY2lmaWVkIGtleVxuICAgKlxuICAgKiBAcGFyYW0ge0tleX0ga2V5XG4gICAqIEBwYXJhbSB7QW55fSBkZWZhdWx0VmFsdWVcbiAgICovXG4gIExlbnMucHJvdG90eXBlLmdldD1mdW5jdGlvbihrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3RvcihcbiAgICAgIHRoaXMuX19kYXRhLCB0aGlzLl9fcGF0aC5jb25jYXQoe2tleTprZXksIGRlZmF1bHRWYWx1ZTpkZWZhdWx0VmFsdWV9KSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNob3J0Y3V0IGZvciBsZW5zLmdldChrZXkpLm1vZCh2YWx1ZSlcbiAgICpcbiAgICogQHBhcmFtIHtLZXl9IGtleVxuICAgKiBAcGFyYW0ge0FueX0gdmFsdWVcbiAgICovXG4gIExlbnMucHJvdG90eXBlLnNldD1mdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGtleSkubW9kKHZhbHVlKTtcbiAgfTtcblxuICBMZW5zLnByb3RvdHlwZS51cGRhdGU9ZnVuY3Rpb24odmFsdWVzKSB7XG4gICAgdmFyIGRhdGEgPSB0aGlzLnZhbCgpO1xuICAgIHZhciBjb3B5ID0ge307XG4gICAgdmFyIGs7XG4gICAgZm9yIChrIGluIGRhdGEpIHtcbiAgICAgIGNvcHlba10gPSBkYXRhW2tdO1xuICAgIH1cbiAgICBmb3IgKGsgaW4gdmFsdWVzKSB7XG4gICAgICBjb3B5W2tdID0gdmFsdWVzW2tdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5tb2QoY29weSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybiBsZW5zIGZvciBhIG5ldyBkYXRhIHdoaWNoIHBvaW50cyB0byB0aGUgc2FtZSBsb2NhdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtBbnl9IGRhdGFcbiAgICovXG4gIExlbnMucHJvdG90eXBlLmZvcj1mdW5jdGlvbihkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKGRhdGEsIHRoaXMuX19wYXRoKTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJuIGEgbmV3IGNvcHkgb2YgZGF0YSBieSByZXBsYWNpbmcgYSB2YWx1ZSB0aGlzIGxlbnMgcG9pbnRzIHRvIHdpdGggYVxuICAgKiBuZXcgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7QW55fSB2YWx1ZVxuICAgKi9cbiAgTGVucy5wcm90b3R5cGUubW9kPWZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHVwZGF0ZWQsIG5ld0RhdGEsIHByZXZEYXRhO1xuICAgIHZhciBkYXRhID0gdGhpcy5fX2RhdGE7XG4gICAgdmFyIHBhdGggPSB0aGlzLl9fcGF0aDtcblxuICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuZm9yKHZhbHVlKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gcGF0aC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgdmFyIGtleSA9IHBhdGhbaV07XG5cbiAgICAgIC8vIGNvcHkgdGhyb3VnaCBjaGFuZ2VkIHBhdGhcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgIHVwZGF0ZWQgPSBkYXRhLnNsaWNlKDApO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdXBkYXRlZCA9IHt9O1xuICAgICAgICBmb3IgKHZhciBrIGluIGRhdGEpIHtcbiAgICAgICAgICB1cGRhdGVkW2tdID0gZGF0YVtrXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBzdG9yZSByZWZlcmVuY2UgdG8gbmV3bHkgY3JlYXRlZCByb290IGRhdGFcbiAgICAgIGlmIChuZXdEYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbmV3RGF0YSA9IHVwZGF0ZWQ7XG4gICAgICB9XG5cbiAgICAgIC8vIG11dGF0ZSBwcmV2aW91c2x5IGNvcGllZCBkYXRhIHdpdGggdXBkYXRlZCB2YWx1ZVxuICAgICAgaWYgKHByZXZEYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJldkRhdGFbcGF0aFtpIC0gMV0ua2V5XSA9IHVwZGF0ZWQ7XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIHdlIGFyZSBhdCB0aGUgbGFzdCBwYXRoIGtleSB1cGRhdGUgZGF0YSB3aXRoIGEgbmV3IHZhbHVlXG4gICAgICBpZiAoaSA9PT0gbGVuIC0gMSkge1xuICAgICAgICB1cGRhdGVkW2tleS5rZXldID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhID0gdXBkYXRlZFtrZXkua2V5XTtcbiAgICAgICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCAmJiBrZXkuZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBkYXRhID0ga2V5LmRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwcmV2RGF0YSA9IHVwZGF0ZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZm9yKG5ld0RhdGEpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBNYWtlIGEgbmV3IGxlbnMgZm9yIGRhdGFcbiAgICpcbiAgICogQHBhcmFtIHtBbnl9IGRhdGFcbiAgICovXG4gIExlbnMubWFrZT1mdW5jdGlvbihkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyB0aGlzKGRhdGEsIFtdKTtcbiAgfTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IExlbnMubWFrZS5iaW5kKExlbnMpO1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBtZXJnZSAgICAgICA9ICh3aW5kb3cuX19SZWFjdFNoaW0ubWVyZ2UpO1xudmFyIGludmFyaWFudCAgID0gKHdpbmRvdy5fX1JlYWN0U2hpbS5pbnZhcmlhbnQpO1xuXG5mdW5jdGlvbiBOb2RlKCl7fVxuXG5cblxuZm9yKHZhciBOb2RlX19fX0tleSBpbiBOb2RlKXtpZihOb2RlLmhhc093blByb3BlcnR5KE5vZGVfX19fS2V5KSl7UHJvcGVydHlOb2RlW05vZGVfX19fS2V5XT1Ob2RlW05vZGVfX19fS2V5XTt9fXZhciBfX19fU3VwZXJQcm90b09mTm9kZT1Ob2RlPT09bnVsbD9udWxsOk5vZGUucHJvdG90eXBlO1Byb3BlcnR5Tm9kZS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShfX19fU3VwZXJQcm90b09mTm9kZSk7UHJvcGVydHlOb2RlLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1Qcm9wZXJ0eU5vZGU7UHJvcGVydHlOb2RlLl9fc3VwZXJDb25zdHJ1Y3Rvcl9fPU5vZGU7XG5cbiAgZnVuY3Rpb24gUHJvcGVydHlOb2RlKHByb3BzKSB7XG4gICAgcHJvcHMgPSBwcm9wcyA/IG1lcmdlKHt9LCBwcm9wcykgOiB7fTtcblxuICAgIHRoaXMubmFtZSA9IHByb3BzLm5hbWU7XG4gICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB9XG5cblxuZm9yKE5vZGVfX19fS2V5IGluIE5vZGUpe2lmKE5vZGUuaGFzT3duUHJvcGVydHkoTm9kZV9fX19LZXkpKXtTY2hlbWFOb2RlW05vZGVfX19fS2V5XT1Ob2RlW05vZGVfX19fS2V5XTt9fVNjaGVtYU5vZGUucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoX19fX1N1cGVyUHJvdG9PZk5vZGUpO1NjaGVtYU5vZGUucHJvdG90eXBlLmNvbnN0cnVjdG9yPVNjaGVtYU5vZGU7U2NoZW1hTm9kZS5fX3N1cGVyQ29uc3RydWN0b3JfXz1Ob2RlO1xuXG4gIGZ1bmN0aW9uIFNjaGVtYU5vZGUocHJvcHMpIHtcbiAgICBwcm9wcyA9IHByb3BzID8gbWVyZ2Uoe30sIHByb3BzKSA6IHt9O1xuXG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIHZhciBjaGlsZHJlbiA9IHt9O1xuXG4gICAgaWYgKGFyZ3MubGVuZ3RoICE9PSAwKSB7XG4gICAgICBmb3JFYWNoTmVzdGVkKGFyZ3MsIGZ1bmN0aW9uKGFyZykgIHtcbiAgICAgICAgaW52YXJpYW50KFxuICAgICAgICAgIGFyZy5uYW1lLFxuICAgICAgICAgICdwcm9wcyBmaWVsZHMgc2hvdWxkIHNwZWNpZnkgbmFtZSBwcm9wZXJ0eSdcbiAgICAgICAgKTtcbiAgICAgICAgY2hpbGRyZW5bYXJnLm5hbWVdID0gYXJnO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5uYW1lID0gcHJvcHMubmFtZTtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9XG5cbiAgU2NoZW1hTm9kZS5wcm90b3R5cGUubWFwPWZ1bmN0aW9uKGZ1bmMsIGNvbnRleHQpIHtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcy5jaGlsZHJlbikge1xuICAgICAgcmVzdWx0cy5wdXNoKGZ1bmMuY2FsbChjb250ZXh0LCB0aGlzLmNoaWxkcmVuW25hbWVdLCBuYW1lLCB0aGlzKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG5cbmZvcihOb2RlX19fX0tleSBpbiBOb2RlKXtpZihOb2RlLmhhc093blByb3BlcnR5KE5vZGVfX19fS2V5KSl7TGlzdE5vZGVbTm9kZV9fX19LZXldPU5vZGVbTm9kZV9fX19LZXldO319TGlzdE5vZGUucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoX19fX1N1cGVyUHJvdG9PZk5vZGUpO0xpc3ROb2RlLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1MaXN0Tm9kZTtMaXN0Tm9kZS5fX3N1cGVyQ29uc3RydWN0b3JfXz1Ob2RlO1xuXG4gIGZ1bmN0aW9uIExpc3ROb2RlKHByb3BzKSB7XG4gICAgcHJvcHMgPSBwcm9wcyA/IG1lcmdlKHt9LCBwcm9wcykgOiB7fTtcblxuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICAgIGludmFyaWFudChcbiAgICAgIGFyZ3MubGVuZ3RoID09PSAxLFxuICAgICAgJ3Byb3BzIGZvciBhcnJheSBtdXN0IGNvbnRhaW4gZXhhY3RseSBvbmUgY2hpbGQgcHJvcHMgcHJvcHMnXG4gICAgKTtcblxuICAgIHRoaXMubmFtZSA9IHByb3BzLm5hbWU7XG4gICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBhcmdzWzBdO1xuICB9XG5cblxuZnVuY3Rpb24gZm9yRWFjaE5lc3RlZChjb2xsZWN0aW9uLCBmdW5jLCBjb250ZXh0KSB7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjb2xsZWN0aW9uLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY29sbGVjdGlvbltpXSkpIHtcbiAgICAgIGZvckVhY2hOZXN0ZWQoY29sbGVjdGlvbltpXSwgZnVuYywgY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZ1bmMuY2FsbChjb250ZXh0LCBjb2xsZWN0aW9uW2ldLCBpLCBjb2xsZWN0aW9uKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFrZUZhY3RvcnkoY29uc3RydWN0b3IpIHtcbiAgZnVuY3Rpb24gZmFjdG9yeSgpIHtcbiAgICB2YXIgbm9kZSA9IE9iamVjdC5jcmVhdGUoY29uc3RydWN0b3IucHJvdG90eXBlKTtcbiAgICBjb25zdHJ1Y3Rvci5hcHBseShub2RlLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiBub2RlO1xuICB9XG4gIC8vIHdlIGRvIHRoaXMgdG8gc3VwcG9ydCBpbnN0YW5jZW9mIGNoZWNrXG4gIGZhY3RvcnkucHJvdG90eXBlID0gY29uc3RydWN0b3IucHJvdG90eXBlO1xuICByZXR1cm4gZmFjdG9yeTtcbn1cblxudmFyIFByb3BlcnR5ICA9IG1ha2VGYWN0b3J5KFByb3BlcnR5Tm9kZSk7XG52YXIgTGlzdCAgICAgID0gbWFrZUZhY3RvcnkoTGlzdE5vZGUpO1xudmFyIFNjaGVtYSAgICA9IG1ha2VGYWN0b3J5KFNjaGVtYU5vZGUpO1xuXG5mdW5jdGlvbiBjcmVhdGVUeXBlKHNwZWMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgcHJvcHMgPSBwcm9wcyB8fCB7fTtcbiAgICByZXR1cm4gc3BlYyhwcm9wcyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzU2NoZW1hKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBTY2hlbWFOb2RlO1xufVxuXG5mdW5jdGlvbiBpc0xpc3Qobm9kZSkge1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIExpc3ROb2RlO1xufVxuXG5mdW5jdGlvbiBpc1Byb3BlcnR5KG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBQcm9wZXJ0eU5vZGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBOb2RlOk5vZGUsXG4gIFByb3BlcnR5OlByb3BlcnR5LCBpc1Byb3BlcnR5OmlzUHJvcGVydHksXG4gIFNjaGVtYTpTY2hlbWEsIGlzU2NoZW1hOmlzU2NoZW1hLFxuICBMaXN0Okxpc3QsIGlzTGlzdDppc0xpc3QsXG4gIGNyZWF0ZVR5cGU6Y3JlYXRlVHlwZVxufTtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBpZFNlcmlhbGl6ZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGwgPyAnJyA6IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBpZERlc2VyaWFsaXplKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gJycgPyBudWxsIDogdmFsdWU7XG59XG5cbnZhciBhbnkgPSB7XG4gIHNlcmlhbGl6ZTogaWRTZXJpYWxpemUsXG4gIGRlc2VyaWFsaXplOiBpZERlc2VyaWFsaXplXG59O1xuXG52YXIgc3RyaW5nID0gYW55O1xuXG52YXIgbnVtYmVyID0ge1xuICBzZXJpYWxpemU6IGlkU2VyaWFsaXplLFxuICBkZXNlcmlhbGl6ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09ICcnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICAvLyBiYXNlZCBvbiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xODMwODQ0LzE4Mjk1NFxuICAgIH0gZWxzZSBpZiAoIWlzTmFOKHBhcnNlRmxvYXQodmFsdWUpKSAmJiBpc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIHZhbHVlJyk7XG4gICAgfVxuICB9XG59O1xuXG52YXIgaXNEYXRlUmUgPSAvXlxcZFxcZFxcZFxcZC1cXGRcXGQtXFxkXFxkJC87XG5cbnZhciBkYXRlID0ge1xuICBzZXJpYWxpemU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciB5ZWFyID0gdmFsdWUuZ2V0RnVsbFllYXIoKTtcbiAgICB2YXIgbW9udGggPSB2YWx1ZS5nZXRNb250aCgpICsgMTtcbiAgICB2YXIgZGF5ID0gdmFsdWUuZ2V0RGF0ZSgpO1xuICAgIHJldHVybiAoeWVhciArIFwiLVwiICsgcGFkKG1vbnRoLCAyKSArIFwiLVwiICsgcGFkKGRheSwgMikpO1xuICB9LFxuICBkZXNlcmlhbGl6ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09ICcnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKCFpc0RhdGVSZS5leGVjKHZhbHVlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdzaG91bGQgYmUgYSBkYXRlIGluIFlZWVktTU0tREQgZm9ybWF0Jyk7XG4gICAgfVxuXG4gICAgdmFsdWUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG5cbiAgICBpZiAoaXNOYU4odmFsdWUuZ2V0VGltZSgpKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGRhdGUnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHBhZChudW0sIHNpemUpIHtcbiAgcmV0dXJuICgnMDAwMCcgKyBudW0pLnN1YnN0cigtc2l6ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge2FueTphbnksIHN0cmluZzpzdHJpbmcsIG51bWJlcjpudW1iZXIsIGRhdGU6ZGF0ZX07XG4iLCIvKipcbiAqIFNjaGVtYSB2YWxpZGF0aW9uXG4gKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW52YXJpYW50ICAgICAgICAgPSAod2luZG93Ll9fUmVhY3RTaGltLmludmFyaWFudCk7XG52YXIgc2NoZW1hICAgICAgICAgICAgPSByZXF1aXJlKCcuL3NjaGVtYScpO1xudmFyIGdldFR5cGVGcm9tU2NoZW1hID0gcmVxdWlyZSgnLi9nZXRUeXBlRnJvbVNjaGVtYScpO1xudmFyIHZhbGlkYXRvcnMgICAgICAgID0gcmVxdWlyZSgnLi92YWxpZGF0b3JzJyk7XG5cbnZhciBleGlzdHMgICAgID0gdmFsaWRhdG9ycy5leGlzdHM7XG52YXIgbm9uRW1wdHkgICA9IHZhbGlkYXRvcnMubm9uRW1wdHk7XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZShub2RlLCB2YWx1ZSkge1xuICB2YXIgcmVzdWx0O1xuXG4gIGlmIChzY2hlbWEuaXNQcm9wZXJ0eShub2RlKSkge1xuICAgIHJlc3VsdCA9IGdldFR5cGVGcm9tU2NoZW1hKG5vZGUpLnNlcmlhbGl6ZSh2YWx1ZSk7XG4gIH0gZWxzZSBpZiAoc2NoZW1hLmlzU2NoZW1hKG5vZGUpKSB7XG4gICAgcmVzdWx0ID0ge307XG4gICAgZm9yICh2YXIgayBpbiB2YWx1ZSkge1xuICAgICAgaWYgKG5vZGUuY2hpbGRyZW5ba10pIHtcbiAgICAgICAgcmVzdWx0W2tdID0gc2VyaWFsaXplKG5vZGUuY2hpbGRyZW5ba10sIHZhbHVlW2tdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdFtrXSA9IHZhbHVlW2tdO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChzY2hlbWEuaXNMaXN0KG5vZGUpKSB7XG4gICAgcmVzdWx0ID0gbmV3IEFycmF5KHZhbHVlLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHZhbHVlLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICByZXN1bHRbaV0gPSBzZXJpYWxpemUobm9kZS5jaGlsZHJlbiwgdmFsdWVbaV0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpbnZhcmlhbnQoZmFsc2UsICd1bmtub3duIHNjaGVtYSBwYXNzZWQnKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGRlc2VyaWFsaXplT25seShub2RlLCB2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiB7dmFsdWU6dmFsdWUsIHZhbGlkYXRpb246IHN1Y2Nlc3N9O1xuICB9XG4gIHZhciB0eXBlID0gZ2V0VHlwZUZyb21TY2hlbWEobm9kZSk7XG4gIHRyeSB7XG4gICAgdmFsdWUgPSB0eXBlLmRlc2VyaWFsaXplKHZhbHVlKTtcbiAgfSBjYXRjaChlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbGlkYXRpb246IGZhaWx1cmUoZS5tZXNzYWdlKSxcbiAgICAgIHZhbHVlOnZhbHVlXG4gICAgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHZhbGlkYXRpb246IHN1Y2Nlc3MsXG4gICAgdmFsdWU6dmFsdWVcbiAgfTtcbn1cblxuLyoqXG4gKiBWYWxpZGF0ZSB2YWx1ZSBhZ2FpbnN0IHNjaGVtYVxuICpcbiAqIEBwYXJhbSB7U2NoZW1hfSBub2RlXG4gKiBAcGFyYW0ge0FueX0gdmFsdWVcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9ufVxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZShub2RlLCB2YWx1ZSkge1xuICBpZiAoc2NoZW1hLmlzU2NoZW1hKG5vZGUpKSB7XG4gICAgcmV0dXJuIHZhbGlkYXRlU2NoZW1hKG5vZGUsIHZhbHVlKTtcbiAgfSBlbHNlIGlmIChzY2hlbWEuaXNMaXN0KG5vZGUpKSB7XG4gICAgcmV0dXJuIHZhbGlkYXRlTGlzdChub2RlLCB2YWx1ZSk7XG4gIH0gZWxzZSBpZiAoc2NoZW1hLmlzUHJvcGVydHkobm9kZSkpIHtcbiAgICByZXR1cm4gdmFsaWRhdGVQcm9wZXJ0eShub2RlLCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgaW52YXJpYW50KFxuICAgICAgZmFsc2UsXG4gICAgICAnZG8gbm90IGtub3cgaG93IHRvIHZhbGlkYXRlICVzIG9mIHR5cGUgJXMnLCBub2RlLCBub2RlLmNvbnN0cnVjdG9yXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIFZhbGlkYXRlIHZhbHVlIGFnYWluc3Qgc2NoZW1hIGJ1dCBvbmx5IHVzaW5nIHRoZSByb290IHNjaGVtYSBub2RlLlxuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHVzZWZ1bCB3aGVuIGRvaW5nIGFuIGluY3JlbWVudGFsIHZhbGlkYXRpb24uXG4gKlxuICogQHBhcmFtIHtTY2hlbWF9IG5vZGVcbiAqIEBwYXJhbSB7QW55fSB2YWx1ZVxuICogQHJldHVybnMge1ZhbGlkYXRpb259XG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlT25seShub2RlLCB2YWx1ZSwgY2hpbGRyZW4pIHtcbiAgaWYgKHNjaGVtYS5pc1NjaGVtYShub2RlKSkge1xuICAgIHJldHVybiB2YWxpZGF0ZVNjaGVtYU9ubHkobm9kZSwgdmFsdWUsIGNoaWxkcmVuKTtcbiAgfSBlbHNlIGlmIChzY2hlbWEuaXNMaXN0KG5vZGUpKSB7XG4gICAgcmV0dXJuIHZhbGlkYXRlTGlzdE9ubHkobm9kZSwgdmFsdWUsIGNoaWxkcmVuKTtcbiAgfSBlbHNlIGlmIChzY2hlbWEuaXNQcm9wZXJ0eShub2RlKSkge1xuICAgIHJldHVybiB2YWxpZGF0ZVByb3BlcnR5KG5vZGUsIHZhbHVlLCBjaGlsZHJlbik7XG4gIH0gZWxzZSB7XG4gICAgaW52YXJpYW50KFxuICAgICAgZmFsc2UsXG4gICAgICAnZG8gbm90IGtub3cgaG93IHRvIHZhbGlkYXRlICVzIG9mIHR5cGUgJXMnLCBub2RlLCBub2RlLmNvbnN0cnVjdG9yXG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVNjaGVtYShub2RlLCB2YWx1ZSkge1xuICB2YXIgY2hpbGRyZW5WYWxpZGF0aW9uID0gdmFsaWRhdGVTY2hlbWFDaGlsZHJlbihub2RlLCB2YWx1ZSk7XG5cbiAgdmFyIGNvbnZlcnRlZFZhbHVlID0gdmFsdWU7XG5cbiAgaWYgKE9iamVjdC5rZXlzKGNoaWxkcmVuVmFsaWRhdGlvbi5jaGlsZHJlbikubGVuZ3RoID4gMCkge1xuICAgIGNvbnZlcnRlZFZhbHVlID0ge307XG4gICAgZm9yICh2YXIgayBpbiB2YWx1ZSkge1xuICAgICAgY29udmVydGVkVmFsdWVba10gPSBjaGlsZHJlblZhbGlkYXRpb24uY2hpbGRyZW5ba10gIT09IHVuZGVmaW5lZCA/XG4gICAgICAgIGNoaWxkcmVuVmFsaWRhdGlvbi5jaGlsZHJlbltrXSA6XG4gICAgICAgIHZhbHVlW2tdO1xuICAgIH1cbiAgfVxuXG4gIHZhciB2YWxpZGF0aW9uID0gdmFsaWRhdGVTY2hlbWFPbmx5KFxuICAgICAgbm9kZSxcbiAgICAgIGNvbnZlcnRlZFZhbHVlLFxuICAgICAgY2hpbGRyZW5WYWxpZGF0aW9uLnZhbGlkYXRpb25cbiAgKTtcblxuICByZXR1cm4gdmFsaWRhdGlvbjtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVTY2hlbWFPbmx5KG5vZGUsIHZhbHVlLCBjaGlsZHJlbikge1xuXG4gIGlmICghYXJlQ2hpbGRyZW5WYWxpZChjaGlsZHJlbikpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6dmFsdWUsXG4gICAgICB2YWxpZGF0aW9uOiB7XG4gICAgICAgIGlzU3VjY2VzczogZmFsc2UsXG4gICAgICAgIGlzRmFpbHVyZTogdHJ1ZSxcbiAgICAgICAgdmFsaWRhdGlvbjoge2ZhaWx1cmU6IHVuZGVmaW5lZH0sXG4gICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICB2YXIgZGVzZXJpYWxpemVkID0gZGVzZXJpYWxpemVPbmx5KG5vZGUsIHZhbHVlKTtcblxuICBpZiAoZGVzZXJpYWxpemVkLnZhbGlkYXRpb24uaXNGYWlsdXJlKSB7XG4gICAgcmV0dXJuIGRlc2VyaWFsaXplZDtcbiAgfVxuXG4gIHZhciB2YWxpZGF0b3IgPSBleGlzdHMuYW5kVGhlbihub2RlLnByb3BzLnZhbGlkYXRlKTtcbiAgdmFyIHZhbGlkYXRpb24gPSB2YWxpZGF0b3IodmFsdWUsIG5vZGUucHJvcHMpO1xuXG4gIHZhciBpc1N1Y2Nlc3MgPSB2YWxpZGF0b3JzLmlzU3VjY2Vzcyh2YWxpZGF0aW9uKTtcblxuICByZXR1cm4ge1xuICAgIHZhbHVlOiBkZXNlcmlhbGl6ZWQudmFsdWUsXG4gICAgdmFsaWRhdGlvbjoge1xuICAgICAgdmFsaWRhdGlvbjp2YWxpZGF0aW9uLFxuICAgICAgaXNTdWNjZXNzOmlzU3VjY2VzcyxcbiAgICAgIGlzRmFpbHVyZTogIWlzU3VjY2Vzc1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVTY2hlbWFDaGlsZHJlbihub2RlLCB2YWx1ZSkge1xuICB2YXIgdmFsaWRhdGlvbiA9IHt9O1xuICB2YXIgY2hpbGRyZW4gPSB7fTtcblxuICBpZiAodmFsdWUgJiYgbm9kZS5jaGlsZHJlbikge1xuICAgIGZvciAodmFyIG5hbWUgaW4gbm9kZS5jaGlsZHJlbikge1xuICAgICAgdmFyIGNoaWxkVmFsaWRhdGlvbiA9IHZhbGlkYXRlKG5vZGUuY2hpbGRyZW5bbmFtZV0sIHZhbHVlW25hbWVdKTtcblxuICAgICAgaWYgKGNoaWxkVmFsaWRhdGlvbi52YWxpZGF0aW9uLmlzRmFpbHVyZSkge1xuICAgICAgICB2YWxpZGF0aW9uW25hbWVdID0gY2hpbGRWYWxpZGF0aW9uLnZhbGlkYXRpb247XG4gICAgICB9XG5cbiAgICAgIGNoaWxkcmVuW25hbWVdID0gY2hpbGRWYWxpZGF0aW9uLnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7dmFsaWRhdGlvbjp2YWxpZGF0aW9uLCBjaGlsZHJlbjpjaGlsZHJlbn07XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlTGlzdChub2RlLCB2YWx1ZSkge1xuICB2YXIgY2hpbGRyZW5WYWxpZGF0aW9uID0gdmFsaWRhdGVMaXN0Q2hpbGRyZW4obm9kZSwgdmFsdWUpO1xuXG4gIHZhciB2YWxpZGF0aW9uID0gdmFsaWRhdGVMaXN0T25seShcbiAgICAgIG5vZGUsXG4gICAgICBjaGlsZHJlblZhbGlkYXRpb24uY2hpbGRyZW4sXG4gICAgICBjaGlsZHJlblZhbGlkYXRpb24udmFsaWRhdGlvblxuICApO1xuICByZXR1cm4gdmFsaWRhdGlvbjtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVMaXN0T25seShub2RlLCB2YWx1ZSwgY2hpbGRyZW4pIHtcblxuICBpZiAoIWFyZUNoaWxkcmVuVmFsaWQoY2hpbGRyZW4pKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOnZhbHVlLFxuICAgICAgdmFsaWRhdGlvbjoge1xuICAgICAgICBpc1N1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBpc0ZhaWx1cmU6IHRydWUsXG4gICAgICAgIHZhbGlkYXRpb246IHtmYWlsdXJlOiB1bmRlZmluZWR9LFxuICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgdmFyIGRlc2VyaWFsaXplZCA9IGRlc2VyaWFsaXplT25seShub2RlLCB2YWx1ZSk7XG5cbiAgaWYgKGRlc2VyaWFsaXplZC52YWxpZGF0aW9uLmlzRmFpbHVyZSkge1xuICAgIHJldHVybiBkZXNlcmlhbGl6ZWQ7XG4gIH1cblxuICB2YXIgdmFsaWRhdG9yID0gbm9uRW1wdHkuYW5kVGhlbihub2RlLnByb3BzLnZhbGlkYXRlKTtcbiAgdmFyIHZhbGlkYXRpb24gPSB2YWxpZGF0b3IoZGVzZXJpYWxpemVkLnZhbHVlLCBub2RlLnByb3BzKTtcbiAgdmFyIGlzU3VjY2VzcyA9IHZhbGlkYXRvcnMuaXNTdWNjZXNzKHZhbGlkYXRpb24pO1xuXG4gIHJldHVybiB7XG4gICAgdmFsdWU6IGRlc2VyaWFsaXplZC52YWx1ZSxcbiAgICB2YWxpZGF0aW9uOiB7XG4gICAgICB2YWxpZGF0aW9uOnZhbGlkYXRpb24sXG4gICAgICBpc1N1Y2Nlc3M6aXNTdWNjZXNzLFxuICAgICAgaXNGYWlsdXJlOiAhaXNTdWNjZXNzXG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUxpc3RDaGlsZHJlbihub2RlLCB2YWx1ZSkge1xuICB2YXIgdmFsaWRhdGlvbiA9IHt9O1xuICB2YXIgY2hpbGRyZW4gPSBbXTtcblxuICBpZiAodmFsdWUgJiYgbm9kZS5jaGlsZHJlbikge1xuICAgIGZvciAodmFyIGlkeCA9IDAsIGxlbiA9IHZhbHVlLmxlbmd0aDsgaWR4IDwgbGVuOyBpZHgrKykge1xuICAgICAgdmFyIGNoaWxkVmFsaWRhdGlvbiA9IHZhbGlkYXRlKG5vZGUuY2hpbGRyZW4sIHZhbHVlW2lkeF0pO1xuICAgICAgaWYgKGNoaWxkVmFsaWRhdGlvbi52YWxpZGF0aW9uLmlzRmFpbHVyZSkge1xuICAgICAgICB2YWxpZGF0aW9uW2lkeF0gPSBjaGlsZFZhbGlkYXRpb24udmFsaWRhdGlvbjtcbiAgICAgIH1cbiAgICAgIGNoaWxkcmVuW2lkeF0gPSBjaGlsZFZhbGlkYXRpb24udmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHt2YWxpZGF0aW9uOnZhbGlkYXRpb24sIGNoaWxkcmVuOmNoaWxkcmVufTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wZXJ0eShub2RlLCB2YWx1ZSkge1xuXG4gIHZhciBkZXNlcmlhbGl6ZWQgPSBkZXNlcmlhbGl6ZU9ubHkobm9kZSwgdmFsdWUpO1xuXG4gIGlmIChkZXNlcmlhbGl6ZWQudmFsaWRhdGlvbi5pc0ZhaWx1cmUpIHtcbiAgICByZXR1cm4gZGVzZXJpYWxpemVkO1xuICB9XG5cbiAgdmFyIHZhbGlkYXRvciA9IGV4aXN0cy5hbmRUaGVuKG5vZGUucHJvcHMudmFsaWRhdGUpO1xuICB2YXIgdmFsaWRhdGlvbiA9IHZhbGlkYXRvcihkZXNlcmlhbGl6ZWQudmFsdWUsIG5vZGUucHJvcHMpO1xuICB2YXIgaXNTdWNjZXNzID0gdmFsaWRhdG9ycy5pc1N1Y2Nlc3ModmFsaWRhdGlvbik7XG5cbiAgcmV0dXJuIHtcbiAgICB2YWx1ZTogZGVzZXJpYWxpemVkLnZhbHVlLFxuICAgIHZhbGlkYXRpb246IHtcbiAgICAgIHZhbGlkYXRpb246dmFsaWRhdGlvbixcbiAgICAgIGlzU3VjY2Vzczppc1N1Y2Nlc3MsXG4gICAgICBpc0ZhaWx1cmU6ICFpc1N1Y2Nlc3NcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGFyZUNoaWxkcmVuVmFsaWQoY2hpbGRyZW4pIHtcbiAgZm9yICh2YXIgayBpbiBjaGlsZHJlbikge1xuICAgIGlmIChjaGlsZHJlbltrXS5pc0ZhaWx1cmUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbnZhciBzdWNjZXNzID0ge1xuICBpc1N1Y2Nlc3M6IHRydWUsXG4gIGlzRmFpbHVyZTogZmFsc2UsXG4gIGNoaWxkcmVuOiB7fVxufTtcblxuZnVuY3Rpb24gZmFpbHVyZShmYWlsdXJlKSB7XG4gIHJldHVybiB7XG4gICAgdmFsaWRhdGlvbjoge2ZhaWx1cmU6ZmFpbHVyZX0sXG4gICAgaXNTdWNjZXNzOiBmYWxzZSxcbiAgICBpc0ZhaWx1cmU6IHRydWVcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHZhbGlkYXRlOnZhbGlkYXRlLCB2YWxpZGF0ZU9ubHk6dmFsaWRhdGVPbmx5LFxuICBzdWNjZXNzOnN1Y2Nlc3MsIGZhaWx1cmU6ZmFpbHVyZSxcbiAgZGVzZXJpYWxpemVPbmx5OmRlc2VyaWFsaXplT25seSwgc2VyaWFsaXplOnNlcmlhbGl6ZVxufTtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9ICh3aW5kb3cuX19SZWFjdFNoaW0uZW1wdHlGdW5jdGlvbik7XG52YXIgaXNTdHJpbmcgICAgICA9IHJlcXVpcmUoJy4vaXNTdHJpbmcnKTtcblxudmFyIHN1Y2Nlc3MgPSB7ZmFpbHVyZTogdW5kZWZpbmVkfTtcbnZhciBjb21tb25GYWlsdXJlID0ge2ZhaWx1cmU6ICdpbnZhbGlkIHZhbHVlJ307XG5cbmZ1bmN0aW9uIGlzU3VjY2Vzcyh2YWxpZGF0aW9uKSB7XG4gIHJldHVybiB2YWxpZGF0aW9uLmZhaWx1cmUgPT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaXNGYWlsdXJlKHZhbGlkYXRpb24pIHtcbiAgcmV0dXJuIHZhbGlkYXRpb24uZmFpbHVyZSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBtYWtlKGZ1bmMpIHtcbiAgdmFyIHdyYXBwZXIgPSBmdW5jdGlvbih2YWx1ZSwgc2NoZW1hKSAge1xuICAgIHZhciBtYXliZUZhaWx1cmUgPSBmdW5jKHZhbHVlLCBzY2hlbWEpO1xuICAgIGlmIChtYXliZUZhaWx1cmUgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgIH1cbiAgICBpZiAobWF5YmVGYWlsdXJlID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGNvbW1vbkZhaWx1cmU7XG4gICAgfVxuICAgIGlmIChpc1N0cmluZyhtYXliZUZhaWx1cmUpKSB7XG4gICAgICByZXR1cm4ge2ZhaWx1cmU6IG1heWJlRmFpbHVyZX07XG4gICAgfVxuICAgIHJldHVybiBtYXliZUZhaWx1cmU7XG4gIH07XG4gIHdyYXBwZXIuYW5kVGhlbiA9IGFuZFRoZW4uYmluZChudWxsLCB3cmFwcGVyKTtcbiAgd3JhcHBlci5pc1ZhbGlkYXRvciA9IHRydWU7XG4gIHJldHVybiB3cmFwcGVyO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0b3JFbXB0eShmdW5jKSB7XG4gIGlmICghZnVuYykge1xuICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZTtcbiAgfVxuICBpZiAoZnVuYy5pc1ZhbGlkYXRvcikge1xuICAgIHJldHVybiBmdW5jO1xuICB9XG5cbiAgcmV0dXJuIG1ha2UoZnVuYyk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRvcihmdW5jKSB7XG4gIGlmICghZnVuYykge1xuICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZTtcbiAgfVxuICBpZiAoZnVuYy5pc1ZhbGlkYXRvcikge1xuICAgIHJldHVybiBmdW5jO1xuICB9XG5cbiAgdmFyIHdyYXBwZXIgPSBmdW5jdGlvbih2YWx1ZSwgc2NoZW1hKSBcbiAgICB7cmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgP1xuICAgICAgdHJ1ZSA6XG4gICAgICBmdW5jKHZhbHVlLCBzY2hlbWEpO307XG5cbiAgcmV0dXJuIG1ha2Uod3JhcHBlcik7XG59XG5cbmZ1bmN0aW9uIGFuZFRoZW4oZmlyc3QsIHNlY29uZCkge1xuICBpZiAoIXNlY29uZCkge1xuICAgIHJldHVybiBmaXJzdDtcbiAgfVxuXG4gIHNlY29uZCA9IHZhbGlkYXRvcihzZWNvbmQpO1xuXG4gIHZhciB3cmFwcGVyID0gZnVuY3Rpb24odmFsdWUsIHNjaGVtYSkgIHtcbiAgICB2YXIgdmFsaWRhdGlvbiA9IGZpcnN0KHZhbHVlLCBzY2hlbWEpO1xuICAgIHJldHVybiBpc0ZhaWx1cmUodmFsaWRhdGlvbikgP1xuICAgICAgdmFsaWRhdGlvbiA6XG4gICAgICBzZWNvbmQodmFsdWUsIHNjaGVtYSk7XG4gIH07XG5cbiAgcmV0dXJuIG1ha2Uod3JhcHBlcik7XG59XG5cbnZhciBleGlzdHMgPSB2YWxpZGF0b3JFbXB0eShmdW5jdGlvbih2YWx1ZSwgc2NoZW1hKSBcbiAge3JldHVybiBzY2hlbWEucmVxdWlyZWQgJiYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpID9cbiAgICAndmFsdWUgaXMgcmVxdWlyZWQnIDpcbiAgICB0cnVlO30pO1xuXG52YXIgbm9uRW1wdHkgPSB2YWxpZGF0b3IoZnVuY3Rpb24odmFsdWUsIHNjaGVtYSkgXG4gIHtyZXR1cm4gc2NoZW1hLm5vbkVtcHR5ICYmIHZhbHVlLmxlbmd0aCA9PT0gMCA/XG4gICAgJ2F0IGxlYXN0IG9uZSBpdGVtIGlzIHJlcXVpcmVkJyA6XG4gICAgdHJ1ZTt9KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHZhbGlkYXRvckVtcHR5OnZhbGlkYXRvckVtcHR5LFxuICB2YWxpZGF0b3I6dmFsaWRhdG9yLFxuXG4gIGlzU3VjY2Vzczppc1N1Y2Nlc3MsXG4gIGlzRmFpbHVyZTppc0ZhaWx1cmUsXG5cbiAgc3VjY2VzczpzdWNjZXNzLFxuICBleGlzdHM6ZXhpc3RzLFxuICBub25FbXB0eTpub25FbXB0eVxufTtcbiJdfQ==
