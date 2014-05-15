(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
;(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['react'], factory);
  } else {
    root.ReactForms = factory(root.React);
  }
})(window, function(React) {
  return require('./lib/');
});

},{"./lib/":18}],2:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var React           = (window.React);
var cx              = React.addons.classSet;
var mergeInto       = require('./utils').mergeInto;
var FieldMixin      = require('./FieldMixin');
var Message         = require('./Message');
var isFailure       = require('./validation').isFailure;

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

  onBlur: function() {
    var serializedValueLens = this.serializedValueLens();
    if (serializedValueLens.isUndefined()) {
      this.updateValue(serializedValueLens.val());
    }
  },

  render: function() {
    var serializedValueLens = this.serializedValueLens();
    var validation = this.validationLens().val();
    var externalValidation = this.externalValidation();

    var className = cx({
      'react-forms-field': true,
      'invalid': isFailure(validation)
    });

    var id = this._rootNodeID;

    var input = this.renderInputComponent({id:id, onBlur: this.onBlur});

    return (
      React.DOM.div( {className:className}, 
        this.renderLabel({htmlFor: id}),
        this.transferPropsTo(input),
        isFailure(externalValidation) &&
          Message(null, externalValidation.validation.failure),
        isFailure(validation) && !serializedValueLens.isUndefined() &&
          Message(null, validation.validation.failure)
      )
    );
  }
});

module.exports = Field;

},{"./FieldMixin":3,"./Message":11,"./utils":26,"./validation":27}],3:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var React             = (window.React);
var cloneWithProps    = React.addons.cloneWithProps;
var mergeInto         = require('./utils').mergeInto;
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

},{"./FormElementMixin":8,"./utils":26}],4:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var React         = (window.React);
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

var React     = (window.React);
var FormMixin = require('./FormMixin');
var FormFor   = require('./FormFor');

var Form = React.createClass({displayName: 'Form',
  mixins: [FormMixin],

  propTypes: {
    component: React.PropTypes.component
  },

  getDefaultProps: function() {
    return {component: React.DOM.form};
  },

  render: function() {
    var component = this.props.component;
    return this.transferPropsTo(
      component(null, 
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

var React = (window.React);

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
    externalValidation: React.PropTypes.any,
    schema: React.PropTypes.object,
    onValueUpdate: React.PropTypes.func
  },

  getChildContext: function() {
    return {
      serializedValueLens: this.serializedValueLens(),
      valueLens: this.valueLens(),
      validationLens: this.validationLens(),
      externalValidation: this.externalValidation(),
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

var React                     = (window.React);
var utils                     = require('./utils');
var schema                    = require('./schema');
var ValidatedMixin            = require('./ValidatedMixin');
var getDefaultValueForSchema  = require('./getDefaultValueForSchema');
var validationM               = require('./validation');

var success = validationM.success;
var serialize = validationM.serialize;
var isFailure = validationM.isFailure;

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
    externalValidation: React.PropTypes.object,
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
        serialize(this.schema(), this.valueLens().val())
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

  externalValidation: function() {
    var externalValidation = this.context.externalValidation;
    if (this.props.name !== undefined &&
        externalValidation &&
        externalValidation.children) {
      return externalValidation.children[this.props.name] || success;
    }
    return externalValidation || success;
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
        utils.invariant(false, 'invalid field used for schema');
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

    validationLens = validationLens.update(local.validation);

    if (isFailure(validationLens.val())) {
      // revert to the previous value
      valueLens = this.valueLens();
    } else {
      valueLens = valueLens.mod(local.value);
    }

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
  updateValue: function(serializedValue, value) {
    if (value === undefined) {
      value = serializedValue;
    }
    this.onValueUpdate(
      this.valueLens().mod(value).root(),
      this.validationLens().root(),
      this.serializedValueLens().mod(serializedValue).root()
    );
  }
};

module.exports = FormElementMixin;

},{"./ValidatedMixin":14,"./getDefaultValueForSchema":16,"./schema":24,"./utils":26,"./validation":27}],9:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var React                     = (window.React);
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

var React                     = (window.React);
var lens                      = require('./lens');
var ValidatedMixin            = require('./ValidatedMixin');
var FormContextMixin          = require('./FormContextMixin');
var getDefaultValueForSchema  = require('./getDefaultValueForSchema');
var validationM               = require('./validation');

var serialize = validationM.serialize;
var success = validationM.success;
var isSuccess = validationM.isSuccess;

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
    validation: React.PropTypes.any,
    externalValidation: React.PropTypes.any,
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

  externalValidation: function() {
    return this.props.externalValidation || success;
  },

  /**
   * Form schema.
   *
   * @returns {Schema}
   */
  schema: function() {
    return this.props.schema;
  },

  updateValue: function(value) {
    this.setState(this.getFormState(value));
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
    if (this.props.onUpdate) {
      this.props.onUpdate(value, validation, serializedValue);
    }
    if (this.props.onChange && isSuccess(validation)) {
      this.props.onChange(value, validation, serializedValue);
    }
    this.setState({value:value, validation:validation, serializedValue:serializedValue});
  }
};

var FormMixin = {
  mixins: [FormStateMixin, FormContextMixin]
};

module.exports = FormMixin;

},{"./FormContextMixin":7,"./ValidatedMixin":14,"./getDefaultValueForSchema":16,"./lens":22,"./validation":27}],11:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var React = (window.React);

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

var React                   = (window.React);
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
    var fields = this.renderFields().map(function(item) 
      {return Component(
        {key:item.props.name,
        name:item.props.name,
        onRemove:this.remove}, 
        item
      );}.bind(this)
    );
    return this.transferPropsTo(
      React.DOM.div( {className:"react-forms-repeating-fieldset"}, 
        schema.props.label && React.DOM.h4(null, schema.props.label),
        fields,
        React.DOM.button(
          {type:"button",
          onClick:this.onAdd,
          className:"react-forms-repeating-fieldset-add"}, "Add")
      )
    );
  },

  onAdd: function () {
    this.add();
  }

});

module.exports = RepeatingFieldset;
module.exports.Item = Item;

},{"./RepeatingFieldsetMixin":13}],13:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var React                     = (window.React);
var cloneWithProps            = React.addons.cloneWithProps;
var FormElementMixin          = require('./FormElementMixin');
var FormContextMixin          = require('./FormContextMixin');
var getDefaultValueForSchema  = require('./getDefaultValueForSchema');
var serialize                 = require('./validation').serialize;

/**
 * Mixin for implementing repeating fieldsets.
 *
 * See <RepeatingFieldset /> component for the basic implementation example.
 */
var RepeatingFieldsetMixin = {
  mixins: [FormElementMixin, FormContextMixin],

  propTypes: {
    onRemove: React.PropTypes.func,
    onAdd: React.PropTypes.func
  },

  /**
   * Return an array of React components rendered for all the values in an array
   * this fieldset owns.
   *
   * @returns {Array.<ReactComponent>}
   */
  renderFields: function() {
    // prevent circular require
    var createComponentFromSchema = require('./createComponentFromSchema');
    var schema = this.schema();
    var children = createComponentFromSchema(schema.children);
    return this.serializedValueLens().val().map(function(item, name) 
      {return cloneWithProps(children, {name:name, key: name});});
  },

  /**
   * Remove a value from fieldset's value by index
   *
   * @param {Number} index
   */
  remove: function(index) {
    var serializedValue = this.serializedValueLens().val().slice(0);
    var value = this.valueLens().val().slice(0);

    serializedValue.splice(index, 1);
    var removed = value.splice(index, 1)[0];

    this.updateValue(serializedValue, value);

    if (this.props.onRemove) {
      this.props.onRemove(removed, index);
    }
  },

  /**
   * Add new value to fieldset's value.
   */
  add: function(value) {
    var schema = this.schema();
    if (value === undefined) {
      value = getDefaultValueForSchema(schema.children);
    }

    var serializedValue = serialize(schema.children, value);

    this.updateValue(
      this.serializedValueLens().val().concat(serializedValue),
      this.valueLens().val().concat(value)
    );

    if (this.props.onAdd) {
      this.props.onAdd(value);
    }
  }
};

module.exports = RepeatingFieldsetMixin;

},{"./FormContextMixin":7,"./FormElementMixin":8,"./createComponentFromSchema":15,"./getDefaultValueForSchema":16,"./validation":27}],14:[function(require,module,exports){
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
  }
};

module.exports = ValidatedMixin;

},{"./validation":27}],15:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var utils             = require('./utils');
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
    utils.invariant(false, 'invalid schema node: ' + node);
  }
}

module.exports = createComponentFromSchema;

},{"./Field":2,"./Fieldset":4,"./RepeatingFieldset":12,"./schema":24,"./utils":26}],16:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var utils     = require('./utils');
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
    utils.invariant(
      false,
      'do not know how to infer default value for ' + node
    );
  }
}

module.exports = getDefaultValueForSchema;

},{"./schema":24,"./utils":26}],17:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var utils     = require('./utils');
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

    utils.invariant(
      schema.isProperty(node),
      'only Property schema nodes can have types'
    );

    if (utils.isString(node.props.type)) {
      var type = types[node.props.type];
      utils.invariant(type, 'unknown type ' + node.props.type);
      return type;
    }

    return node.props.type;
  }

  return types.any;
}

module.exports = getTypeFromSchema;

},{"./schema":24,"./types":25,"./utils":26}],18:[function(require,module,exports){
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
var messages                = require('./messages');
var validation              = require('./validation');
var types                   = require('./types');
var schema                  = require('./schema');
var input                   = require('./input');

module.exports = {
  FormMixin:FormMixin, FormContextMixin:FormContextMixin, FormElementMixin:FormElementMixin,
  FieldMixin:FieldMixin, FieldsetMixin:FieldsetMixin, RepeatingFieldsetMixin:RepeatingFieldsetMixin,

  Form:Form, Field:Field, Fieldset:Fieldset, RepeatingFieldset:RepeatingFieldset,

  FormFor:FormFor, Message:Message,

  schema:schema, types:types, validators:validators, validation:validation, messages:messages, input:input
};

},{"./Field":2,"./FieldMixin":3,"./Fieldset":4,"./FieldsetMixin":5,"./Form":6,"./FormContextMixin":7,"./FormElementMixin":8,"./FormFor":9,"./FormMixin":10,"./Message":11,"./RepeatingFieldset":12,"./RepeatingFieldsetMixin":13,"./input":21,"./messages":23,"./schema":24,"./types":25,"./validation":27,"./validators":28}],19:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var React = (window.React);

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

var React = (window.React);

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

  Lens.prototype.isUndefined=function() {
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

},{}],23:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

module.exports = {
  INVALID_VALUE: 'invalid value',
  VALUE_IS_REQUIRED: 'value is required',
  AT_LEAST_ONE_ITEM_IS_REQUIRED: 'at least one item is required',
  IS_NOT_A_DATE: 'should be a date in YYYY-MM-DD format'
};

},{}],24:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var utils     = require('./utils');

function Node(){}



for(var Node____Key in Node){if(Node.hasOwnProperty(Node____Key)){PropertyNode[Node____Key]=Node[Node____Key];}}var ____SuperProtoOfNode=Node===null?null:Node.prototype;PropertyNode.prototype=Object.create(____SuperProtoOfNode);PropertyNode.prototype.constructor=PropertyNode;PropertyNode.__superConstructor__=Node;

  function PropertyNode(props) {
    props = props ? utils.merge({}, props) : {};

    this.name = props.name;
    this.props = props;
  }


for(Node____Key in Node){if(Node.hasOwnProperty(Node____Key)){SchemaNode[Node____Key]=Node[Node____Key];}}SchemaNode.prototype=Object.create(____SuperProtoOfNode);SchemaNode.prototype.constructor=SchemaNode;SchemaNode.__superConstructor__=Node;

  function SchemaNode(props) {
    props = props ? utils.merge({}, props) : {};

    var args = Array.prototype.slice.call(arguments, 1);
    var children = {};

    if (args.length !== 0) {
      forEachNested(args, function(arg)  {
        utils.invariant(
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
    props = props ? utils.merge({}, props) : {};

    var args = Array.prototype.slice.call(arguments, 1);

    utils.invariant(
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

},{"./utils":26}],25:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var messages = require('./messages');

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
      throw new Error(messages.INVALID_VALUE);
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
      throw new Error(messages.IS_NOT_A_DATE);
    }

    value = new Date(value);

    if (isNaN(value.getTime())) {
      throw new Error(messages.INVALID_VALUE);
    }

    return value;
  }
};

function pad(num, size) {
  return ('0000' + num).substr(-size);
}

module.exports = {any:any, string:string, number:number, date:date};

},{"./messages":23}],26:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

function mergeInto(dst, src) {
  if (src != null) {
    for (var k in src) {
      if (!src.hasOwnProperty(k)) {
        continue;
      }
      dst[k] = src[k];
    }
  }
}

function merge(a, b) {
  var result = {};
  mergeInto(result, a);
  mergeInto(result, b);
  return result;
}

function invariant(condition, message) {
  if (!condition) {

    throw new Error(message || 'invariant violation');
  }
}

function emptyFunction() {

}

emptyFunction.thatReturnsTrue = function() {
  return true;
};

var toString = Object.prototype.toString;

function isString(o) {
  return toString.call(o) === '[object String]';
}

module.exports = {mergeInto:mergeInto, merge:merge, invariant:invariant, emptyFunction:emptyFunction, isString:isString};

},{}],27:[function(require,module,exports){
/**
 * Schema validation
 *
 * @jsx React.DOM
 */
'use strict';

var utils                     = require('./utils');
var schema                    = require('./schema');
var getTypeFromSchema         = require('./getTypeFromSchema');
var getDefaultValueForSchema  = require('./getDefaultValueForSchema');
var validators                = require('./validators');

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
    utils.invariant(false, 'unknown schema passed');
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
    utils.invariant(
      false,
      'do not know how to validate ' + node + ' of type ' + node.constructor
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
    utils.invariant(
      false,
      'do not know how to validate ' + node + ' of type ' + node.constructor
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
        validation: {failure: undefined},
        children: children
      }
    };
  }

  var deserialized = deserializeOnly(node, value);

  if (isFailure(deserialized.validation)) {
    return deserialized;
  }

  var validation = node.props.validate ?
    validators.validator(node.props.validate)(value, node.props) :
    validators.success;

  return {
    value: deserialized.value,
    validation: {validation:validation}
  };
}

function validateSchemaChildren(node, value) {
  var validation = {};
  var children = {};

  if (value && node.children) {
    for (var name in node.children) {
      var childValue = value[name] !== undefined ?
        value[name] :
        getDefaultValueForSchema(node.children[name]);
      var childValidation = validate(node.children[name], childValue);

      if (isFailure(childValidation.validation)) {
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
        validation: {failure: undefined},
        children: children
      }
    };
  }

  var deserialized = deserializeOnly(node, value);

  if (isFailure(deserialized.validation)) {
    return deserialized;
  }

  var validator = nonEmpty.andThen(node.props.validate);
  var validation = validator(deserialized.value, node.props);

  return {
    value: deserialized.value,
    validation: {validation:validation}
  };
}

function validateListChildren(node, value) {
  var validation = {};
  var children = [];

  if (value && node.children) {
    for (var idx = 0, len = value.length; idx < len; idx++) {
      var childValidation = validate(node.children, value[idx]);
      if (isFailure(childValidation.validation)) {
        validation[idx] = childValidation.validation;
      }
      children[idx] = childValidation.value;
    }
  }

  return {validation:validation, children:children};
}

function validateProperty(node, value) {

  var deserialized = deserializeOnly(node, value);

  if (isFailure(deserialized.validation)) {
    return deserialized;
  }

  var validator = exists.andThen(node.props.validate);
  var validation = validator(deserialized.value, node.props);

  return {
    value: deserialized.value,
    validation: {validation:validation}
  };
}

var success = {
  validation: {},
  children: {}
};

function failure(failure) {
  return {validation: {failure:failure}};
}

function isSuccess(validation) {
  return !isFailure(validation);
}

function isFailure(validation) {
  return (
    (validation.validation && validation.validation.failure !== undefined)
    || (validation.children !== undefined && !areChildrenValid(validation.children))
  );
}


function areChildrenValid(children) {
  for (var k in children) {
    if (isFailure(children[k])) {
      return false;
    }
  }

  return true;
}

module.exports = {
  validate:validate, validateOnly:validateOnly,
  success:success, failure:failure,
  deserializeOnly:deserializeOnly, serialize:serialize,
  isSuccess:isSuccess, isFailure:isFailure
};

},{"./getDefaultValueForSchema":16,"./getTypeFromSchema":17,"./schema":24,"./utils":26,"./validators":28}],28:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var utils         = require('./utils');
var messages      = require('./messages');

var success = {failure: undefined};
var commonFailure = {failure: messages.INVALID_VALUE};

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
    if (utils.isString(maybeFailure)) {
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
    return utils.emptyFunction.thatReturnsTrue;
  }
  if (func.isValidator) {
    return func;
  }

  return make(func);
}

function validator(func) {
  if (!func) {
    return utils.emptyFunction.thatReturnsTrue;
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
    messages.VALUE_IS_REQUIRED :
    true;});

var nonEmpty = validator(function(value, schema) 
  {return schema.nonEmpty && value.length === 0 ?
    messages.AT_LEAST_ONE_ITEM_IS_REQUIRED :
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

},{"./messages":23,"./utils":26}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvd2F0Y2hpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvaW5kZXguanMiLCIvVXNlcnMvYW5kcmV5cG9wcC9Xb3Jrc3BhY2UvcHJvbWV0aGV1cy9yZWFjdC1mb3Jtcy9zdGFuZGFsb25lL2xpYi9GaWVsZC5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvbGliL0ZpZWxkTWl4aW4uanMiLCIvVXNlcnMvYW5kcmV5cG9wcC9Xb3Jrc3BhY2UvcHJvbWV0aGV1cy9yZWFjdC1mb3Jtcy9zdGFuZGFsb25lL2xpYi9GaWVsZHNldC5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvbGliL0ZpZWxkc2V0TWl4aW4uanMiLCIvVXNlcnMvYW5kcmV5cG9wcC9Xb3Jrc3BhY2UvcHJvbWV0aGV1cy9yZWFjdC1mb3Jtcy9zdGFuZGFsb25lL2xpYi9Gb3JtLmpzIiwiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL3Byb21ldGhldXMvcmVhY3QtZm9ybXMvc3RhbmRhbG9uZS9saWIvRm9ybUNvbnRleHRNaXhpbi5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvbGliL0Zvcm1FbGVtZW50TWl4aW4uanMiLCIvVXNlcnMvYW5kcmV5cG9wcC9Xb3Jrc3BhY2UvcHJvbWV0aGV1cy9yZWFjdC1mb3Jtcy9zdGFuZGFsb25lL2xpYi9Gb3JtRm9yLmpzIiwiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL3Byb21ldGhldXMvcmVhY3QtZm9ybXMvc3RhbmRhbG9uZS9saWIvRm9ybU1peGluLmpzIiwiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL3Byb21ldGhldXMvcmVhY3QtZm9ybXMvc3RhbmRhbG9uZS9saWIvTWVzc2FnZS5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvbGliL1JlcGVhdGluZ0ZpZWxkc2V0LmpzIiwiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL3Byb21ldGhldXMvcmVhY3QtZm9ybXMvc3RhbmRhbG9uZS9saWIvUmVwZWF0aW5nRmllbGRzZXRNaXhpbi5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvbGliL1ZhbGlkYXRlZE1peGluLmpzIiwiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL3Byb21ldGhldXMvcmVhY3QtZm9ybXMvc3RhbmRhbG9uZS9saWIvY3JlYXRlQ29tcG9uZW50RnJvbVNjaGVtYS5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvbGliL2dldERlZmF1bHRWYWx1ZUZvclNjaGVtYS5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvbGliL2dldFR5cGVGcm9tU2NoZW1hLmpzIiwiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL3Byb21ldGhldXMvcmVhY3QtZm9ybXMvc3RhbmRhbG9uZS9saWIvaW5kZXguanMiLCIvVXNlcnMvYW5kcmV5cG9wcC9Xb3Jrc3BhY2UvcHJvbWV0aGV1cy9yZWFjdC1mb3Jtcy9zdGFuZGFsb25lL2xpYi9pbnB1dC9DaGVja2JveEdyb3VwLmpzIiwiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL3Byb21ldGhldXMvcmVhY3QtZm9ybXMvc3RhbmRhbG9uZS9saWIvaW5wdXQvUmFkaW9CdXR0b25Hcm91cC5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvbGliL2lucHV0L2luZGV4LmpzIiwiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL3Byb21ldGhldXMvcmVhY3QtZm9ybXMvc3RhbmRhbG9uZS9saWIvbGVucy5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvbGliL21lc3NhZ2VzLmpzIiwiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL3Byb21ldGhldXMvcmVhY3QtZm9ybXMvc3RhbmRhbG9uZS9saWIvc2NoZW1hLmpzIiwiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL3Byb21ldGhldXMvcmVhY3QtZm9ybXMvc3RhbmRhbG9uZS9saWIvdHlwZXMuanMiLCIvVXNlcnMvYW5kcmV5cG9wcC9Xb3Jrc3BhY2UvcHJvbWV0aGV1cy9yZWFjdC1mb3Jtcy9zdGFuZGFsb25lL2xpYi91dGlscy5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvbGliL3ZhbGlkYXRpb24uanMiLCIvVXNlcnMvYW5kcmV5cG9wcC9Xb3Jrc3BhY2UvcHJvbWV0aGV1cy9yZWFjdC1mb3Jtcy9zdGFuZGFsb25lL2xpYi92YWxpZGF0b3JzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFsncmVhY3QnXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSB7XG4gICAgcm9vdC5SZWFjdEZvcm1zID0gZmFjdG9yeShyb290LlJlYWN0KTtcbiAgfVxufSkod2luZG93LCBmdW5jdGlvbihSZWFjdCkge1xuICByZXR1cm4gcmVxdWlyZSgnLi9saWIvJyk7XG59KTtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgICAgICAgICAgID0gKHdpbmRvdy5SZWFjdCk7XG52YXIgY3ggICAgICAgICAgICAgID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0O1xudmFyIG1lcmdlSW50byAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMnKS5tZXJnZUludG87XG52YXIgRmllbGRNaXhpbiAgICAgID0gcmVxdWlyZSgnLi9GaWVsZE1peGluJyk7XG52YXIgTWVzc2FnZSAgICAgICAgID0gcmVxdWlyZSgnLi9NZXNzYWdlJyk7XG52YXIgaXNGYWlsdXJlICAgICAgID0gcmVxdWlyZSgnLi92YWxpZGF0aW9uJykuaXNGYWlsdXJlO1xuXG52YXIgRmllbGQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdGaWVsZCcsXG4gIG1peGluczogW0ZpZWxkTWl4aW5dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGxhYmVsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG4gIH0sXG5cbiAgcmVuZGVyTGFiZWw6IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgdmFyIHNjaGVtYSA9IHRoaXMuc2NoZW1hKCk7XG4gICAgdmFyIGxhYmVsID0gdGhpcy5wcm9wcy5sYWJlbCA/IHRoaXMucHJvcHMubGFiZWwgOiBzY2hlbWEucHJvcHMubGFiZWw7XG4gICAgdmFyIGhpbnQgPSB0aGlzLnByb3BzLmhpbnQgPyB0aGlzLnByb3BzLmhpbnQgOiBzY2hlbWEucHJvcHMuaGludDtcbiAgICB2YXIgbGFiZWxQcm9wcyA9IHtjbGFzc05hbWU6ICdyZWFjdC1mb3Jtcy1sYWJlbCd9O1xuICAgIGlmIChwcm9wcykge1xuICAgICAgbWVyZ2VJbnRvKGxhYmVsUHJvcHMsIHByb3BzKTtcbiAgICB9XG4gICAgcmV0dXJuIChsYWJlbCB8fCBoaW50KSAmJiBSZWFjdC5ET00ubGFiZWwobGFiZWxQcm9wcyxcbiAgICAgIGxhYmVsLFxuICAgICAgaGludCAmJiBSZWFjdC5ET00uc3Bhbigge2NsYXNzTmFtZTpcInJlYWN0LWZvcm1zLWhpbnRcIn0sIGhpbnQpKTtcbiAgfSxcblxuICBvbkJsdXI6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzZXJpYWxpemVkVmFsdWVMZW5zID0gdGhpcy5zZXJpYWxpemVkVmFsdWVMZW5zKCk7XG4gICAgaWYgKHNlcmlhbGl6ZWRWYWx1ZUxlbnMuaXNVbmRlZmluZWQoKSkge1xuICAgICAgdGhpcy51cGRhdGVWYWx1ZShzZXJpYWxpemVkVmFsdWVMZW5zLnZhbCgpKTtcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2VyaWFsaXplZFZhbHVlTGVucyA9IHRoaXMuc2VyaWFsaXplZFZhbHVlTGVucygpO1xuICAgIHZhciB2YWxpZGF0aW9uID0gdGhpcy52YWxpZGF0aW9uTGVucygpLnZhbCgpO1xuICAgIHZhciBleHRlcm5hbFZhbGlkYXRpb24gPSB0aGlzLmV4dGVybmFsVmFsaWRhdGlvbigpO1xuXG4gICAgdmFyIGNsYXNzTmFtZSA9IGN4KHtcbiAgICAgICdyZWFjdC1mb3Jtcy1maWVsZCc6IHRydWUsXG4gICAgICAnaW52YWxpZCc6IGlzRmFpbHVyZSh2YWxpZGF0aW9uKVxuICAgIH0pO1xuXG4gICAgdmFyIGlkID0gdGhpcy5fcm9vdE5vZGVJRDtcblxuICAgIHZhciBpbnB1dCA9IHRoaXMucmVuZGVySW5wdXRDb21wb25lbnQoe2lkOmlkLCBvbkJsdXI6IHRoaXMub25CbHVyfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuRE9NLmRpdigge2NsYXNzTmFtZTpjbGFzc05hbWV9LCBcbiAgICAgICAgdGhpcy5yZW5kZXJMYWJlbCh7aHRtbEZvcjogaWR9KSxcbiAgICAgICAgdGhpcy50cmFuc2ZlclByb3BzVG8oaW5wdXQpLFxuICAgICAgICBpc0ZhaWx1cmUoZXh0ZXJuYWxWYWxpZGF0aW9uKSAmJlxuICAgICAgICAgIE1lc3NhZ2UobnVsbCwgZXh0ZXJuYWxWYWxpZGF0aW9uLnZhbGlkYXRpb24uZmFpbHVyZSksXG4gICAgICAgIGlzRmFpbHVyZSh2YWxpZGF0aW9uKSAmJiAhc2VyaWFsaXplZFZhbHVlTGVucy5pc1VuZGVmaW5lZCgpICYmXG4gICAgICAgICAgTWVzc2FnZShudWxsLCB2YWxpZGF0aW9uLnZhbGlkYXRpb24uZmFpbHVyZSlcbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGaWVsZDtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgICAgICAgICAgICAgPSAod2luZG93LlJlYWN0KTtcbnZhciBjbG9uZVdpdGhQcm9wcyAgICA9IFJlYWN0LmFkZG9ucy5jbG9uZVdpdGhQcm9wcztcbnZhciBtZXJnZUludG8gICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMnKS5tZXJnZUludG87XG52YXIgRm9ybUVsZW1lbnRNaXhpbiAgPSByZXF1aXJlKCcuL0Zvcm1FbGVtZW50TWl4aW4nKTtcblxuLyoqXG4gKiBNaXhpbiBmb3IgaW1wbGVtZW50aW5nIGZpZWxkY29tcG9uZW50cy5cbiAqXG4gKiBTZWUgPEZpZWxkIC8+IGNvbXBvbmVudCBmb3IgdGhlIGJhc2ljIGltcGxlbWVudGF0aW9uIGV4YW1wbGUuXG4gKi9cbnZhciBGaWVsZE1peGluID0ge1xuICBtaXhpbnM6IFtGb3JtRWxlbWVudE1peGluXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBpbnB1dDogUmVhY3QuUHJvcFR5cGVzLmNvbXBvbmVudFxuICB9LFxuXG4gIG9uQ2hhbmdlOiBmdW5jdGlvbihlKSB7XG4gICAgaWYgKGUuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZSA9IGdldFZhbHVlRnJvbUV2ZW50KGUpO1xuXG4gICAgdGhpcy51cGRhdGVWYWx1ZSh2YWx1ZSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlbmRlciBpbnB1dCBjb21wb25lbnQuXG4gICAqXG4gICAqIEByZXR1cm5zIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIHJlbmRlcklucHV0Q29tcG9uZW50OiBmdW5jdGlvbihwcm9wcykge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuc2VyaWFsaXplZFZhbHVlTGVucygpLnZhbCgpO1xuICAgIHZhciBzY2hlbWEgPSB0aGlzLnNjaGVtYSgpO1xuXG4gICAgdmFyIGlucHV0ID0gdGhpcy5wcm9wcy5pbnB1dCB8fCBzY2hlbWEgJiYgc2NoZW1hLnByb3BzLmlucHV0O1xuICAgIHZhciBpbnB1dFByb3BzID0ge3ZhbHVlOnZhbHVlLCBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZX07XG5cbiAgICBpZiAocHJvcHMpIHtcbiAgICAgIG1lcmdlSW50byhpbnB1dFByb3BzLCBwcm9wcyk7XG4gICAgfVxuXG4gICAgaWYgKGlucHV0KSB7XG4gICAgICByZXR1cm4gY2xvbmVXaXRoUHJvcHMoaW5wdXQsIGlucHV0UHJvcHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dFByb3BzLnR5cGUgPSAndGV4dCc7XG4gICAgICByZXR1cm4gUmVhY3QuRE9NLmlucHV0KGlucHV0UHJvcHMpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBFeHRyYWN0IHZhbHVlIGZyb20gZXZlbnRcbiAqXG4gKiBXZSBzdXBwb3J0IGJvdGggUmVhY3QuRE9NICdjaGFuZ2UnIGV2ZW50cyBhbmQgY3VzdG9tIGNoYW5nZSBldmVudHNcbiAqIGVtaXR0ZWQgZnJvbSBjdXN0b20gY29tcG9uZW50cy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGFsc28gbm9ybWFsaXplcyBlbXB0eSBzdHJpbmdzIHRvIG51bGwuXG4gKlxuICogQHBhcmFtIHtFdmVudH0gZVxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZUZyb21FdmVudChlKSB7XG4gIHJldHVybiBlICYmIGUudGFyZ2V0ICYmIGUudGFyZ2V0LnZhbHVlICE9PSB1bmRlZmluZWQgP1xuICAgIGUudGFyZ2V0LnZhbHVlIDogZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGaWVsZE1peGluO1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCAgICAgICAgID0gKHdpbmRvdy5SZWFjdCk7XG52YXIgRmllbGRzZXRNaXhpbiA9IHJlcXVpcmUoJy4vRmllbGRzZXRNaXhpbicpO1xuXG52YXIgRmllbGRzZXQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdGaWVsZHNldCcsXG4gIG1peGluczogW0ZpZWxkc2V0TWl4aW5dLFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjaGVtYSA9IHRoaXMuc2NoZW1hKCk7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmZXJQcm9wc1RvKFxuICAgICAgUmVhY3QuRE9NLmRpdigge2NsYXNzTmFtZTpcInJlYWN0LWZvcm1zLWZpZWxkc2V0XCJ9LCBcbiAgICAgICAgc2NoZW1hLnByb3BzLmxhYmVsICYmIFJlYWN0LkRPTS5oNChudWxsLCBzY2hlbWEucHJvcHMubGFiZWwpLFxuICAgICAgICBzY2hlbWEubWFwKHRoaXMucmVuZGVyRmllbGQpXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRmllbGRzZXQ7XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIEZvcm1FbGVtZW50TWl4aW4gID0gcmVxdWlyZSgnLi9Gb3JtRWxlbWVudE1peGluJyk7XG52YXIgRm9ybUNvbnRleHRNaXhpbiAgPSByZXF1aXJlKCcuL0Zvcm1Db250ZXh0TWl4aW4nKTtcblxuLyoqXG4gKiBNaXhpbiBmb3IgaW1wbGVtZW50aW5nIGZpZWxkY29tcG9uZW50cy5cbiAqXG4gKiBTZWUgPEZpZWxkc2V0IC8+IGNvbXBvbmVudCBmb3IgdGhlIGJhc2ljIGltcGxlbWVudGF0aW9uIGV4YW1wbGUuXG4gKi9cbnZhciBGaWVsZHNldE1peGluID0ge1xuICBtaXhpbnM6IFtGb3JtRWxlbWVudE1peGluLCBGb3JtQ29udGV4dE1peGluXSxcblxuICAvKipcbiAgICogUmVuZGVyIGZpZWxkIGdpdmVuIGEgc2NoZW1hIG5vZGVcbiAgICpcbiAgICogQHBhcmFtIHtTY2hlbWF9IG5vZGVcbiAgICogQHJldHVybnMge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgcmVuZGVyRmllbGQ6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAvLyBwcmV2ZW50IGNpcmN1bGFyIHJlcXVpcmVcbiAgICB2YXIgY3JlYXRlQ29tcG9uZW50RnJvbVNjaGVtYSA9IHJlcXVpcmUoJy4vY3JlYXRlQ29tcG9uZW50RnJvbVNjaGVtYScpO1xuICAgIHJldHVybiBjcmVhdGVDb21wb25lbnRGcm9tU2NoZW1hKG5vZGUpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZpZWxkc2V0TWl4aW47XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ICAgICA9ICh3aW5kb3cuUmVhY3QpO1xudmFyIEZvcm1NaXhpbiA9IHJlcXVpcmUoJy4vRm9ybU1peGluJyk7XG52YXIgRm9ybUZvciAgID0gcmVxdWlyZSgnLi9Gb3JtRm9yJyk7XG5cbnZhciBGb3JtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiAnRm9ybScsXG4gIG1peGluczogW0Zvcm1NaXhpbl0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgY29tcG9uZW50OiBSZWFjdC5Qcm9wVHlwZXMuY29tcG9uZW50XG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge2NvbXBvbmVudDogUmVhY3QuRE9NLmZvcm19O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNvbXBvbmVudCA9IHRoaXMucHJvcHMuY29tcG9uZW50O1xuICAgIHJldHVybiB0aGlzLnRyYW5zZmVyUHJvcHNUbyhcbiAgICAgIGNvbXBvbmVudChudWxsLCBcbiAgICAgICAgRm9ybUZvcihudWxsIClcbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtO1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9ICh3aW5kb3cuUmVhY3QpO1xuXG4vKipcbiAqIE1peGluIGZvciBjb21wb25lbnRzIHdoaWNoIGV4cG9zZXMgZm9ybSBjb250ZXh0LlxuICpcbiAqIFNlZSBGb3JtICh2aWEgRm9ybU1peGluKSwgRmllbGRzZXQgKHZpYSBGaWVsZHNldE1peGluKSBhbmQgUmVwZWF0aW5nRmllbGRzZXRcbiAqICh2aWEgUmVwZWF0aW5nRmllbGRzZXRNaXhpbikgZm9yIGNvbXBvbmVudHMgd2hpY2ggZXhwb3NlIGZvcm0gY29udGV4dC5cbiAqL1xudmFyIEZvcm1Db250ZXh0TWl4aW4gPSB7XG5cbiAgY2hpbGRDb250ZXh0VHlwZXM6IHtcbiAgICBzZXJpYWxpemVkVmFsdWVMZW5zOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIHZhbHVlTGVuczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICB2YWxpZGF0aW9uTGVuczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBleHRlcm5hbFZhbGlkYXRpb246IFJlYWN0LlByb3BUeXBlcy5hbnksXG4gICAgc2NoZW1hOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIG9uVmFsdWVVcGRhdGU6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG4gIH0sXG5cbiAgZ2V0Q2hpbGRDb250ZXh0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2VyaWFsaXplZFZhbHVlTGVuczogdGhpcy5zZXJpYWxpemVkVmFsdWVMZW5zKCksXG4gICAgICB2YWx1ZUxlbnM6IHRoaXMudmFsdWVMZW5zKCksXG4gICAgICB2YWxpZGF0aW9uTGVuczogdGhpcy52YWxpZGF0aW9uTGVucygpLFxuICAgICAgZXh0ZXJuYWxWYWxpZGF0aW9uOiB0aGlzLmV4dGVybmFsVmFsaWRhdGlvbigpLFxuICAgICAgc2NoZW1hOiB0aGlzLnNjaGVtYSgpLFxuICAgICAgb25WYWx1ZVVwZGF0ZTogdGhpcy5vblZhbHVlVXBkYXRlXG4gICAgfTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtQ29udGV4dE1peGluO1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCAgICAgICAgICAgICAgICAgICAgID0gKHdpbmRvdy5SZWFjdCk7XG52YXIgdXRpbHMgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBzY2hlbWEgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9zY2hlbWEnKTtcbnZhciBWYWxpZGF0ZWRNaXhpbiAgICAgICAgICAgID0gcmVxdWlyZSgnLi9WYWxpZGF0ZWRNaXhpbicpO1xudmFyIGdldERlZmF1bHRWYWx1ZUZvclNjaGVtYSAgPSByZXF1aXJlKCcuL2dldERlZmF1bHRWYWx1ZUZvclNjaGVtYScpO1xudmFyIHZhbGlkYXRpb25NICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3ZhbGlkYXRpb24nKTtcblxudmFyIHN1Y2Nlc3MgPSB2YWxpZGF0aW9uTS5zdWNjZXNzO1xudmFyIHNlcmlhbGl6ZSA9IHZhbGlkYXRpb25NLnNlcmlhbGl6ZTtcbnZhciBpc0ZhaWx1cmUgPSB2YWxpZGF0aW9uTS5pc0ZhaWx1cmU7XG5cbi8qKlxuICogTWl4aW4gZm9yIHRoZSBmb3JtIGVsZW1lbnQgKGZvcm0gZmllbGQsIGZpZWxkc2V0IG9mIHJlcGVhdGluZyBmaWVsZHNldCkuXG4gKi9cbnZhciBGb3JtRWxlbWVudE1peGluID0ge1xuXG4gIG1peGluczogW1ZhbGlkYXRlZE1peGluXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBuYW1lOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyXG4gICAgXSlcbiAgfSxcblxuICBjb250ZXh0VHlwZXM6IHtcbiAgICBzZXJpYWxpemVkVmFsdWVMZW5zOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIHZhbHVlTGVuczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICB2YWxpZGF0aW9uTGVuczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBleHRlcm5hbFZhbGlkYXRpb246IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgc2NoZW1hOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIG9uVmFsdWVVcGRhdGU6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybiBsZW5zIGZvciB0aGUgZm9ybSBlbGVtZW50IHZhbHVlIG9yIGZvciB0aGUgdmFsdWUgcGFzc2VkIGFzIGFuXG4gICAqIGFyZ3VtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0FueT99IHZhbHVlXG4gICAqIEByZXR1cm5zIHtMZW5zfVxuICAgKi9cbiAgc2VyaWFsaXplZFZhbHVlTGVuczogZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgbGVucyA9IHRoaXMuY29udGV4dC5zZXJpYWxpemVkVmFsdWVMZW5zO1xuICAgIGlmICh0aGlzLnByb3BzLm5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbGVucyA9IGxlbnMuZ2V0KFxuICAgICAgICB0aGlzLnByb3BzLm5hbWUsXG4gICAgICAgIHNlcmlhbGl6ZSh0aGlzLnNjaGVtYSgpLCB0aGlzLnZhbHVlTGVucygpLnZhbCgpKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlID8gbGVucy5mb3IodmFsdWUpIDogbGVucztcbiAgfSxcblxuICB2YWx1ZUxlbnM6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIGxlbnMgPSB0aGlzLmNvbnRleHQudmFsdWVMZW5zO1xuICAgIGlmICh0aGlzLnByb3BzLm5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbGVucyA9IGxlbnMuZ2V0KHRoaXMucHJvcHMubmFtZSwgZ2V0RGVmYXVsdFZhbHVlRm9yU2NoZW1hKHRoaXMuc2NoZW1hKCkpKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlID8gbGVucy5mb3IodmFsdWUpIDogbGVucztcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJuIGxlbnMgZm9yIHRoZSBmb3JtIGVsZW1lbnQgdmFsaWRhdGlvbiBzdGF0ZSBvciBmb3IgdGhlIHZhbGlkYXRpb25cbiAgICogc3RhdGUgcGFzc2VkIGFzIGFuIGFyZ3VtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge1ZhbGlkYXRpb24/fSB2YWxpZGF0aW9uXG4gICAqIEByZXR1cm5zIHtMZW5zfVxuICAgKi9cbiAgdmFsaWRhdGlvbkxlbnM6IGZ1bmN0aW9uKHZhbGlkYXRpb24pIHtcbiAgICB2YXIgbGVucyA9IHRoaXMuY29udGV4dC52YWxpZGF0aW9uTGVucztcbiAgICBpZiAodGhpcy5wcm9wcy5uYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGxlbnMgPSBsZW5zLmdldCgnY2hpbGRyZW4nLCB7fSkuZ2V0KHRoaXMucHJvcHMubmFtZSwgc3VjY2Vzcyk7XG4gICAgfVxuICAgIHJldHVybiB2YWxpZGF0aW9uID8gbGVucy5mb3IodmFsaWRhdGlvbikgOiBsZW5zO1xuICB9LFxuXG4gIGV4dGVybmFsVmFsaWRhdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGV4dGVybmFsVmFsaWRhdGlvbiA9IHRoaXMuY29udGV4dC5leHRlcm5hbFZhbGlkYXRpb247XG4gICAgaWYgKHRoaXMucHJvcHMubmFtZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgIGV4dGVybmFsVmFsaWRhdGlvbiAmJlxuICAgICAgICBleHRlcm5hbFZhbGlkYXRpb24uY2hpbGRyZW4pIHtcbiAgICAgIHJldHVybiBleHRlcm5hbFZhbGlkYXRpb24uY2hpbGRyZW5bdGhpcy5wcm9wcy5uYW1lXSB8fCBzdWNjZXNzO1xuICAgIH1cbiAgICByZXR1cm4gZXh0ZXJuYWxWYWxpZGF0aW9uIHx8IHN1Y2Nlc3M7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybiBmb3JtIGVsZW1lbnQgc2NoZW1hLlxuICAgKlxuICAgKiBAcmV0dXJucyB7U2NoZW1hfVxuICAgKi9cbiAgc2NoZW1hOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMuY29udGV4dC5zY2hlbWE7XG5cbiAgICBpZiAobm9kZSAmJiB0aGlzLnByb3BzLm5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHNjaGVtYS5pc1NjaGVtYShub2RlKSkge1xuICAgICAgICBub2RlID0gbm9kZS5jaGlsZHJlblt0aGlzLnByb3BzLm5hbWVdO1xuICAgICAgfSBlbHNlIGlmIChzY2hlbWEuaXNMaXN0KG5vZGUpKSB7XG4gICAgICAgIG5vZGUgPSBub2RlLmNoaWxkcmVuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXRpbHMuaW52YXJpYW50KGZhbHNlLCAnaW52YWxpZCBmaWVsZCB1c2VkIGZvciBzY2hlbWEnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfSxcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIGZvcm0gdmFsdWUgYW5kIHZhbGlkYXRpb24gc3RhdGUgaXMgYmVpbmcgdXBkYXRlZC5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgaW50ZXJjZXB0cyB1cGRhdGVkIHZhbHVlIGFuZCB2YWxpZGF0aW9uIHN0YXRlIGFuZCBwZXJmb3JtIGl0c1xuICAgKiBvd24gbG9jYWwgdmFsaWRhdGlvbiBhbmQgZGVzZXJpYWxpemF0aW9uLiBUaGVuIHBhc3NlcyBldmVyeXRoaW5nIHVwIHRoZVxuICAgKiBvd25lci5cbiAgICpcbiAgICogQHBhcmFtIHtBbnl9IHZhbHVlXG4gICAqIEBwYXJhbSB7VmFsaWRhdGlvbn0gdmFsaWRhdGlvblxuICAgKi9cbiAgb25WYWx1ZVVwZGF0ZTogZnVuY3Rpb24odmFsdWUsIHZhbGlkYXRpb24sIHNlcmlhbGl6ZWRWYWx1ZSkge1xuICAgIHZhciB2YWxpZGF0aW9uTGVucyA9IHRoaXMudmFsaWRhdGlvbkxlbnModmFsaWRhdGlvbik7XG4gICAgdmFyIHZhbHVlTGVucyA9IHRoaXMudmFsdWVMZW5zKHZhbHVlKTtcblxuICAgIHZhciBsb2NhbCA9IHRoaXMudmFsaWRhdGVPbmx5KFxuICAgICAgdmFsdWVMZW5zLnZhbCgpLFxuICAgICAgdmFsaWRhdGlvbkxlbnMudmFsKCkuY2hpbGRyZW5cbiAgICApO1xuXG4gICAgdmFsaWRhdGlvbkxlbnMgPSB2YWxpZGF0aW9uTGVucy51cGRhdGUobG9jYWwudmFsaWRhdGlvbik7XG5cbiAgICBpZiAoaXNGYWlsdXJlKHZhbGlkYXRpb25MZW5zLnZhbCgpKSkge1xuICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBwcmV2aW91cyB2YWx1ZVxuICAgICAgdmFsdWVMZW5zID0gdGhpcy52YWx1ZUxlbnMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWVMZW5zID0gdmFsdWVMZW5zLm1vZChsb2NhbC52YWx1ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5jb250ZXh0Lm9uVmFsdWVVcGRhdGUoXG4gICAgICB2YWx1ZUxlbnMucm9vdCgpLFxuICAgICAgdmFsaWRhdGlvbkxlbnMucm9vdCgpLFxuICAgICAgc2VyaWFsaXplZFZhbHVlXG4gICAgKTtcbiAgfSxcblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBzZXJpYWxpemVkIHZhbHVlIGZvciB0aGUgY3VycmVudCBmb3JtIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7QW55fSBzZXJpYWxpemVkVmFsdWVcbiAgICovXG4gIHVwZGF0ZVZhbHVlOiBmdW5jdGlvbihzZXJpYWxpemVkVmFsdWUsIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhbHVlID0gc2VyaWFsaXplZFZhbHVlO1xuICAgIH1cbiAgICB0aGlzLm9uVmFsdWVVcGRhdGUoXG4gICAgICB0aGlzLnZhbHVlTGVucygpLm1vZCh2YWx1ZSkucm9vdCgpLFxuICAgICAgdGhpcy52YWxpZGF0aW9uTGVucygpLnJvb3QoKSxcbiAgICAgIHRoaXMuc2VyaWFsaXplZFZhbHVlTGVucygpLm1vZChzZXJpYWxpemVkVmFsdWUpLnJvb3QoKVxuICAgICk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRm9ybUVsZW1lbnRNaXhpbjtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgICAgICAgICAgICAgICAgICAgICA9ICh3aW5kb3cuUmVhY3QpO1xudmFyIEZvcm1FbGVtZW50TWl4aW4gICAgICAgICAgPSByZXF1aXJlKCcuL0Zvcm1FbGVtZW50TWl4aW4nKTtcbnZhciBjcmVhdGVDb21wb25lbnRGcm9tU2NoZW1hID0gcmVxdWlyZSgnLi9jcmVhdGVDb21wb25lbnRGcm9tU2NoZW1hJyk7XG5cbi8qKlxuICogQSBcInByb3h5XCIgY29tcG9uZW50IHdoaWNoIHJlbmRlcnMgaW50byBmaWVsZCwgZmllbGRzZXQgb3IgcmVwZWF0aW5nIGZpZWxkc2V0XG4gKiBiYXNlZCBvbiBhIGN1cnJlbnQgc2NoZW1hIG5vZGUuXG4gKi9cbnZhciBGb3JtRm9yID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiAnRm9ybUZvcicsXG4gIG1peGluczogW0Zvcm1FbGVtZW50TWl4aW5dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIG5hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZmVyUHJvcHNUbyhjcmVhdGVDb21wb25lbnRGcm9tU2NoZW1hKHRoaXMuc2NoZW1hKCkpKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRm9ybUZvcjtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgICAgICAgICAgICAgICAgICAgICA9ICh3aW5kb3cuUmVhY3QpO1xudmFyIGxlbnMgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL2xlbnMnKTtcbnZhciBWYWxpZGF0ZWRNaXhpbiAgICAgICAgICAgID0gcmVxdWlyZSgnLi9WYWxpZGF0ZWRNaXhpbicpO1xudmFyIEZvcm1Db250ZXh0TWl4aW4gICAgICAgICAgPSByZXF1aXJlKCcuL0Zvcm1Db250ZXh0TWl4aW4nKTtcbnZhciBnZXREZWZhdWx0VmFsdWVGb3JTY2hlbWEgID0gcmVxdWlyZSgnLi9nZXREZWZhdWx0VmFsdWVGb3JTY2hlbWEnKTtcbnZhciB2YWxpZGF0aW9uTSAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi92YWxpZGF0aW9uJyk7XG5cbnZhciBzZXJpYWxpemUgPSB2YWxpZGF0aW9uTS5zZXJpYWxpemU7XG52YXIgc3VjY2VzcyA9IHZhbGlkYXRpb25NLnN1Y2Nlc3M7XG52YXIgaXNTdWNjZXNzID0gdmFsaWRhdGlvbk0uaXNTdWNjZXNzO1xuXG4vKipcbiAqIE1peGluIHdoaWNoIGhhbmRsZXMgZm9ybSB2YWx1ZSBhbmQgZm9ybSB2YWxpZGF0aW9uIHN0YXRlLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbnZhciBGb3JtU3RhdGVNaXhpbiA9IHtcbiAgbWl4aW5zOiBbVmFsaWRhdGVkTWl4aW5dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGRlZmF1bHRWYWx1ZTogUmVhY3QuUHJvcFR5cGVzLmFueSxcbiAgICB2YWx1ZTogUmVhY3QuUHJvcFR5cGVzLmFueSxcbiAgICBzZXJpYWxpemVkVmFsdWU6IFJlYWN0LlByb3BUeXBlcy5hbnksXG4gICAgdmFsaWRhdGlvbjogUmVhY3QuUHJvcFR5cGVzLmFueSxcbiAgICBleHRlcm5hbFZhbGlkYXRpb246IFJlYWN0LlByb3BUeXBlcy5hbnksXG4gICAgc2NoZW1hOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIG9uQ2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvblVwZGF0ZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvcHMudmFsdWUgfHxcbiAgICAgIHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlIHx8XG4gICAgICBnZXREZWZhdWx0VmFsdWVGb3JTY2hlbWEodGhpcy5wcm9wcy5zY2hlbWEpO1xuICAgIHZhciBzdGF0ZSA9IHRoaXMuZ2V0Rm9ybVN0YXRlKHZhbHVlKTtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24obmV4dFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgbmV4dFN0YXRlO1xuICAgICAgaWYgKG5leHRQcm9wcy52YWxpZGF0aW9uICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICBuZXh0UHJvcHMuc2VyaWFsaXplZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbmV4dFN0YXRlID0ge1xuICAgICAgICAgIHNlcmlhbGl6ZWRWYWx1ZTogbmV4dFByb3BzLnNlcmlhbGl6ZWRWYWx1ZSxcbiAgICAgICAgICB2YWxpZGF0aW9uOiBuZXh0UHJvcHMudmFsaWRhdGlvbixcbiAgICAgICAgICB2YWx1ZTogbmV4dFByb3BzLnZhbHVlXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0U3RhdGUgPSB0aGlzLmdldEZvcm1TdGF0ZShuZXh0UHJvcHMudmFsdWUpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUpO1xuICAgIH1cbiAgfSxcblxuICBnZXRGb3JtU3RhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHZhbGlkYXRpb24gPSB0aGlzLnZhbGlkYXRlKHZhbHVlKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbGlkYXRpb24udmFsdWUsXG4gICAgICB2YWxpZGF0aW9uOiB2YWxpZGF0aW9uLnZhbGlkYXRpb24sXG4gICAgICBzZXJpYWxpemVkVmFsdWU6IHNlcmlhbGl6ZSh0aGlzLnNjaGVtYSgpLCB2YWxpZGF0aW9uLnZhbHVlKVxuICAgIH07XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybiBsZW5zIGZvciB0aGUgZm9ybSB2YWx1ZSBvciBmb3IgdGhlIHZhbHVlIHBhc3NlZCBhcyBhbiBhcmd1bWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtBbnk/fSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7TGVuc31cbiAgICovXG4gIHNlcmlhbGl6ZWRWYWx1ZUxlbnM6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGxlbnModmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDogdGhpcy5zdGF0ZS5zZXJpYWxpemVkVmFsdWUpO1xuICB9LFxuXG4gIHZhbHVlTGVuczogZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gbGVucyh2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB0aGlzLnN0YXRlLnZhbHVlKTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJuIGxlbnMgZm9yIHRoZSBmb3JtIHZhbGlkYXRpb24gc3RhdGUgb3IgZm9yIHRoZSB2YWxpZGF0aW9uIHN0YXRlXG4gICAqIHBhc3NlZCBhcyBhbiBhcmd1bWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtWYWxpZGF0aW9uP30gdmFsaWRhdGlvblxuICAgKiBAcmV0dXJucyB7TGVuc31cbiAgICovXG4gIHZhbGlkYXRpb25MZW5zOiBmdW5jdGlvbih2YWxpZGF0aW9uKSB7XG4gICAgcmV0dXJuIGxlbnModmFsaWRhdGlvbiAhPT0gdW5kZWZpbmVkID8gdmFsaWRhdGlvbiA6IHRoaXMuc3RhdGUudmFsaWRhdGlvbik7XG4gIH0sXG5cbiAgZXh0ZXJuYWxWYWxpZGF0aW9uOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5leHRlcm5hbFZhbGlkYXRpb24gfHwgc3VjY2VzcztcbiAgfSxcblxuICAvKipcbiAgICogRm9ybSBzY2hlbWEuXG4gICAqXG4gICAqIEByZXR1cm5zIHtTY2hlbWF9XG4gICAqL1xuICBzY2hlbWE6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnNjaGVtYTtcbiAgfSxcblxuICB1cGRhdGVWYWx1ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHRoaXMuZ2V0Rm9ybVN0YXRlKHZhbHVlKSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSBmb3JtIHZhbHVlIGFuZCB2YWxpZGF0aW9uIHN0YXRlIGlzIGJlaW5nIHVwZGF0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7QW55fSB2YWx1ZVxuICAgKiBAcGFyYW0ge1ZhbGlkYXRpb259IHZhbGlkYXRpb25cbiAgICogQHBhcmFtIHtBbnl9IGNvbnZlcnRlZFZhbHVlXG4gICAqL1xuICBvblZhbHVlVXBkYXRlOiBmdW5jdGlvbih2YWx1ZSwgdmFsaWRhdGlvbiwgc2VyaWFsaXplZFZhbHVlKSB7XG4gICAgdmFsaWRhdGlvbiA9IHZhbGlkYXRpb24gfHwgc3VjY2VzcztcbiAgICBpZiAodGhpcy5wcm9wcy5vblVwZGF0ZSkge1xuICAgICAgdGhpcy5wcm9wcy5vblVwZGF0ZSh2YWx1ZSwgdmFsaWRhdGlvbiwgc2VyaWFsaXplZFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UgJiYgaXNTdWNjZXNzKHZhbGlkYXRpb24pKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlLCB2YWxpZGF0aW9uLCBzZXJpYWxpemVkVmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTp2YWx1ZSwgdmFsaWRhdGlvbjp2YWxpZGF0aW9uLCBzZXJpYWxpemVkVmFsdWU6c2VyaWFsaXplZFZhbHVlfSk7XG4gIH1cbn07XG5cbnZhciBGb3JtTWl4aW4gPSB7XG4gIG1peGluczogW0Zvcm1TdGF0ZU1peGluLCBGb3JtQ29udGV4dE1peGluXVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtTWl4aW47XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gKHdpbmRvdy5SZWFjdCk7XG5cbnZhciBNZXNzYWdlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiAnTWVzc2FnZScsXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2ZlclByb3BzVG8oXG4gICAgICBSZWFjdC5ET00uc3Bhbigge2NsYXNzTmFtZTpcInJlYWN0LWZvcm1zLW1lc3NhZ2VcIn0sIFxuICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWVzc2FnZTtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgICAgICAgICAgICAgICAgICAgPSAod2luZG93LlJlYWN0KTtcbnZhciBSZXBlYXRpbmdGaWVsZHNldE1peGluICA9IHJlcXVpcmUoJy4vUmVwZWF0aW5nRmllbGRzZXRNaXhpbicpO1xuXG52YXIgSXRlbSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogJ0l0ZW0nLFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmZXJQcm9wc1RvKFxuICAgICAgUmVhY3QuRE9NLmRpdigge2NsYXNzTmFtZTpcInJlYWN0LWZvcm1zLXJlcGVhdGluZy1maWVsZHNldC1pdGVtXCJ9LCBcbiAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgUmVhY3QuRE9NLmJ1dHRvbihcbiAgICAgICAgICB7b25DbGljazp0aGlzLm9uUmVtb3ZlLFxuICAgICAgICAgIHR5cGU6XCJidXR0b25cIixcbiAgICAgICAgICBjbGFzc05hbWU6XCJyZWFjdC1mb3Jtcy1yZXBlYXRpbmctZmllbGRzZXQtcmVtb3ZlXCJ9LCBcIsOXXCIpXG4gICAgICApXG4gICAgKTtcbiAgfSxcblxuICBvblJlbW92ZTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25SZW1vdmUpIHtcbiAgICAgIHRoaXMucHJvcHMub25SZW1vdmUodGhpcy5wcm9wcy5uYW1lKTtcbiAgICB9XG4gIH1cblxufSk7XG5cbnZhciBSZXBlYXRpbmdGaWVsZHNldCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogJ1JlcGVhdGluZ0ZpZWxkc2V0JyxcblxuICBtaXhpbnM6IFtSZXBlYXRpbmdGaWVsZHNldE1peGluXSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtOiBJdGVtXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY2hlbWEgPSB0aGlzLnNjaGVtYSgpO1xuICAgIHZhciBDb21wb25lbnQgPSB0aGlzLnByb3BzLml0ZW07XG4gICAgdmFyIGZpZWxkcyA9IHRoaXMucmVuZGVyRmllbGRzKCkubWFwKGZ1bmN0aW9uKGl0ZW0pIFxuICAgICAge3JldHVybiBDb21wb25lbnQoXG4gICAgICAgIHtrZXk6aXRlbS5wcm9wcy5uYW1lLFxuICAgICAgICBuYW1lOml0ZW0ucHJvcHMubmFtZSxcbiAgICAgICAgb25SZW1vdmU6dGhpcy5yZW1vdmV9LCBcbiAgICAgICAgaXRlbVxuICAgICAgKTt9LmJpbmQodGhpcylcbiAgICApO1xuICAgIHJldHVybiB0aGlzLnRyYW5zZmVyUHJvcHNUbyhcbiAgICAgIFJlYWN0LkRPTS5kaXYoIHtjbGFzc05hbWU6XCJyZWFjdC1mb3Jtcy1yZXBlYXRpbmctZmllbGRzZXRcIn0sIFxuICAgICAgICBzY2hlbWEucHJvcHMubGFiZWwgJiYgUmVhY3QuRE9NLmg0KG51bGwsIHNjaGVtYS5wcm9wcy5sYWJlbCksXG4gICAgICAgIGZpZWxkcyxcbiAgICAgICAgUmVhY3QuRE9NLmJ1dHRvbihcbiAgICAgICAgICB7dHlwZTpcImJ1dHRvblwiLFxuICAgICAgICAgIG9uQ2xpY2s6dGhpcy5vbkFkZCxcbiAgICAgICAgICBjbGFzc05hbWU6XCJyZWFjdC1mb3Jtcy1yZXBlYXRpbmctZmllbGRzZXQtYWRkXCJ9LCBcIkFkZFwiKVxuICAgICAgKVxuICAgICk7XG4gIH0sXG5cbiAgb25BZGQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmFkZCgpO1xuICB9XG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlcGVhdGluZ0ZpZWxkc2V0O1xubW9kdWxlLmV4cG9ydHMuSXRlbSA9IEl0ZW07XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ICAgICAgICAgICAgICAgICAgICAgPSAod2luZG93LlJlYWN0KTtcbnZhciBjbG9uZVdpdGhQcm9wcyAgICAgICAgICAgID0gUmVhY3QuYWRkb25zLmNsb25lV2l0aFByb3BzO1xudmFyIEZvcm1FbGVtZW50TWl4aW4gICAgICAgICAgPSByZXF1aXJlKCcuL0Zvcm1FbGVtZW50TWl4aW4nKTtcbnZhciBGb3JtQ29udGV4dE1peGluICAgICAgICAgID0gcmVxdWlyZSgnLi9Gb3JtQ29udGV4dE1peGluJyk7XG52YXIgZ2V0RGVmYXVsdFZhbHVlRm9yU2NoZW1hICA9IHJlcXVpcmUoJy4vZ2V0RGVmYXVsdFZhbHVlRm9yU2NoZW1hJyk7XG52YXIgc2VyaWFsaXplICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdmFsaWRhdGlvbicpLnNlcmlhbGl6ZTtcblxuLyoqXG4gKiBNaXhpbiBmb3IgaW1wbGVtZW50aW5nIHJlcGVhdGluZyBmaWVsZHNldHMuXG4gKlxuICogU2VlIDxSZXBlYXRpbmdGaWVsZHNldCAvPiBjb21wb25lbnQgZm9yIHRoZSBiYXNpYyBpbXBsZW1lbnRhdGlvbiBleGFtcGxlLlxuICovXG52YXIgUmVwZWF0aW5nRmllbGRzZXRNaXhpbiA9IHtcbiAgbWl4aW5zOiBbRm9ybUVsZW1lbnRNaXhpbiwgRm9ybUNvbnRleHRNaXhpbl0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgb25SZW1vdmU6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uQWRkOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgUmVhY3QgY29tcG9uZW50cyByZW5kZXJlZCBmb3IgYWxsIHRoZSB2YWx1ZXMgaW4gYW4gYXJyYXlcbiAgICogdGhpcyBmaWVsZHNldCBvd25zLlxuICAgKlxuICAgKiBAcmV0dXJucyB7QXJyYXkuPFJlYWN0Q29tcG9uZW50Pn1cbiAgICovXG4gIHJlbmRlckZpZWxkczogZnVuY3Rpb24oKSB7XG4gICAgLy8gcHJldmVudCBjaXJjdWxhciByZXF1aXJlXG4gICAgdmFyIGNyZWF0ZUNvbXBvbmVudEZyb21TY2hlbWEgPSByZXF1aXJlKCcuL2NyZWF0ZUNvbXBvbmVudEZyb21TY2hlbWEnKTtcbiAgICB2YXIgc2NoZW1hID0gdGhpcy5zY2hlbWEoKTtcbiAgICB2YXIgY2hpbGRyZW4gPSBjcmVhdGVDb21wb25lbnRGcm9tU2NoZW1hKHNjaGVtYS5jaGlsZHJlbik7XG4gICAgcmV0dXJuIHRoaXMuc2VyaWFsaXplZFZhbHVlTGVucygpLnZhbCgpLm1hcChmdW5jdGlvbihpdGVtLCBuYW1lKSBcbiAgICAgIHtyZXR1cm4gY2xvbmVXaXRoUHJvcHMoY2hpbGRyZW4sIHtuYW1lOm5hbWUsIGtleTogbmFtZX0pO30pO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSB2YWx1ZSBmcm9tIGZpZWxkc2V0J3MgdmFsdWUgYnkgaW5kZXhcbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAqL1xuICByZW1vdmU6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgdmFyIHNlcmlhbGl6ZWRWYWx1ZSA9IHRoaXMuc2VyaWFsaXplZFZhbHVlTGVucygpLnZhbCgpLnNsaWNlKDApO1xuICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVMZW5zKCkudmFsKCkuc2xpY2UoMCk7XG5cbiAgICBzZXJpYWxpemVkVmFsdWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB2YXIgcmVtb3ZlZCA9IHZhbHVlLnNwbGljZShpbmRleCwgMSlbMF07XG5cbiAgICB0aGlzLnVwZGF0ZVZhbHVlKHNlcmlhbGl6ZWRWYWx1ZSwgdmFsdWUpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMub25SZW1vdmUpIHtcbiAgICAgIHRoaXMucHJvcHMub25SZW1vdmUocmVtb3ZlZCwgaW5kZXgpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQWRkIG5ldyB2YWx1ZSB0byBmaWVsZHNldCdzIHZhbHVlLlxuICAgKi9cbiAgYWRkOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciBzY2hlbWEgPSB0aGlzLnNjaGVtYSgpO1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YWx1ZSA9IGdldERlZmF1bHRWYWx1ZUZvclNjaGVtYShzY2hlbWEuY2hpbGRyZW4pO1xuICAgIH1cblxuICAgIHZhciBzZXJpYWxpemVkVmFsdWUgPSBzZXJpYWxpemUoc2NoZW1hLmNoaWxkcmVuLCB2YWx1ZSk7XG5cbiAgICB0aGlzLnVwZGF0ZVZhbHVlKFxuICAgICAgdGhpcy5zZXJpYWxpemVkVmFsdWVMZW5zKCkudmFsKCkuY29uY2F0KHNlcmlhbGl6ZWRWYWx1ZSksXG4gICAgICB0aGlzLnZhbHVlTGVucygpLnZhbCgpLmNvbmNhdCh2YWx1ZSlcbiAgICApO1xuXG4gICAgaWYgKHRoaXMucHJvcHMub25BZGQpIHtcbiAgICAgIHRoaXMucHJvcHMub25BZGQodmFsdWUpO1xuICAgIH1cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZXBlYXRpbmdGaWVsZHNldE1peGluO1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciB2YWxpZGF0aW9uID0gcmVxdWlyZSgnLi92YWxpZGF0aW9uJyk7XG5cbi8qKlxuICogQ29tbW9uIHZhbGlkYXRpb24gcm91dGluZXMuXG4gKlxuICogQHByaXZhdGVcbiAqL1xudmFyIFZhbGlkYXRlZE1peGluID0ge1xuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZSB2YWx1ZSBpbmNyZW1lbnRhbGx5XG4gICAqXG4gICAqIEBwYXJhbSB7QW55fSB2YWx1ZVxuICAgKiBAcGFyYW0ge09iamVjdC48ezxuYW1lPjogVmFsaWRhdGlvbn0+fSBjaGlsZHJlblxuICAgKiBAcmV0dXJucyB7T2JqZWN0Ljx7dmFsdWU6IEFueSwgdmFsaWRhdGlvbjogVmFsaWRhdGlvbn0+fVxuICAgKi9cbiAgdmFsaWRhdGVPbmx5OiBmdW5jdGlvbih2YWx1ZSwgY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGVXaXRoKHZhbGlkYXRpb24udmFsaWRhdGVPbmx5LCB2YWx1ZSwgY2hpbGRyZW4pO1xuICB9LFxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZSB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtBbnl9IHZhbHVlXG4gICAqIEByZXR1cm5zIHtPYmplY3QuPHt2YWx1ZTogQW55LCB2YWxpZGF0aW9uOiBWYWxpZGF0aW9ufT59XG4gICAqL1xuICB2YWxpZGF0ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGVXaXRoKHZhbGlkYXRpb24udmFsaWRhdGUsIHZhbHVlKTtcbiAgfSxcblxuICBfdmFsaWRhdGVXaXRoOiBmdW5jdGlvbih2YWxpZGF0ZSwgdmFsdWUsIGNoaWxkcmVuKSB7XG4gICAgdmFsdWUgPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB0aGlzLnNlcmlhbGl6ZWRWYWx1ZUxlbnMoKS52YWwoKTtcbiAgICB2YXIgc2NoZW1hID0gdGhpcy5zY2hlbWEoKTtcbiAgICByZXR1cm4gc2NoZW1hID9cbiAgICAgIHZhbGlkYXRlKHNjaGVtYSwgdmFsdWUsIGNoaWxkcmVuKSA6XG4gICAgICB7dmFsaWRhdGlvbjogdmFsaWRhdGlvbi5zdWNjZXNzLCB2YWx1ZTp2YWx1ZX07XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVmFsaWRhdGVkTWl4aW47XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzICAgICAgICAgICAgID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIHNjaGVtYSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9zY2hlbWEnKTtcbnZhciBGaWVsZCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vRmllbGQnKTtcbnZhciBGaWVsZHNldCAgICAgICAgICA9IHJlcXVpcmUoJy4vRmllbGRzZXQnKTtcbnZhciBSZXBlYXRpbmdGaWVsZHNldCA9IHJlcXVpcmUoJy4vUmVwZWF0aW5nRmllbGRzZXQnKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBjb21wb25lbnQgd2hpY2ggcmVwcmVzZW50cyBwcm92aWRlZCBzY2hlbWEgbm9kZVxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1NjaGVtYU5vZGV9IG5vZGVcbiAqIEByZXR1cm5zIHtSZWFjdENvbXBvbmVudH1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50RnJvbVNjaGVtYShub2RlKSB7XG4gIGlmIChub2RlLnByb3BzLmNvbXBvbmVudCkge1xuICAgIHJldHVybiBub2RlLnByb3BzLmNvbXBvbmVudCh7a2V5OiBub2RlLm5hbWUsIG5hbWU6IG5vZGUubmFtZX0pO1xuICB9XG5cbiAgaWYgKHNjaGVtYS5pc0xpc3Qobm9kZSkpIHtcbiAgICByZXR1cm4gUmVwZWF0aW5nRmllbGRzZXQoIHtrZXk6bm9kZS5uYW1lLCBuYW1lOm5vZGUubmFtZX0gKTtcbiAgfSBlbHNlIGlmIChzY2hlbWEuaXNTY2hlbWEobm9kZSkpIHtcbiAgICByZXR1cm4gRmllbGRzZXQoIHtrZXk6bm9kZS5uYW1lLCBuYW1lOm5vZGUubmFtZX0gKTtcbiAgfSBlbHNlIGlmIChzY2hlbWEuaXNQcm9wZXJ0eShub2RlKSkge1xuICAgIHJldHVybiBGaWVsZCgge2tleTpub2RlLm5hbWUsIG5hbWU6bm9kZS5uYW1lfSApO1xuICB9IGVsc2Uge1xuICAgIHV0aWxzLmludmFyaWFudChmYWxzZSwgJ2ludmFsaWQgc2NoZW1hIG5vZGU6ICcgKyBub2RlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUNvbXBvbmVudEZyb21TY2hlbWE7XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzICAgICA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBzY2hlbWEgICAgPSByZXF1aXJlKCcuL3NjaGVtYScpO1xuXG4vKipcbiAqIEdldCBkZWZhdWx0IHZhbHVlIGZvciBzY2hlbWEgbm9kZVxuICpcbiAqIEBwYXJhbSB7U2NoZW1hTm9kZX0gbm9kZVxuICogQHJldHVybnMge0FueX1cbiAqL1xuZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlRm9yU2NoZW1hKG5vZGUpIHtcbiAgaWYgKG5vZGUgJiYgbm9kZS5wcm9wcyAmJiBub2RlLnByb3BzLmRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG5vZGUucHJvcHMuZGVmYXVsdFZhbHVlO1xuICB9XG4gIGlmIChzY2hlbWEuaXNTY2hlbWEobm9kZSkpIHtcbiAgICByZXR1cm4ge307XG4gIH0gZWxzZSBpZiAoc2NoZW1hLmlzTGlzdChub2RlKSkge1xuICAgIHJldHVybiBbXTtcbiAgfSBlbHNlIGlmIChzY2hlbWEuaXNQcm9wZXJ0eShub2RlKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2Uge1xuICAgIHV0aWxzLmludmFyaWFudChcbiAgICAgIGZhbHNlLFxuICAgICAgJ2RvIG5vdCBrbm93IGhvdyB0byBpbmZlciBkZWZhdWx0IHZhbHVlIGZvciAnICsgbm9kZVxuICAgICk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXREZWZhdWx0VmFsdWVGb3JTY2hlbWE7XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzICAgICA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciB0eXBlcyAgICAgPSByZXF1aXJlKCcuL3R5cGVzJyk7XG52YXIgc2NoZW1hICAgID0gcmVxdWlyZSgnLi9zY2hlbWEnKTtcblxuLyoqXG4gKiBSZXR1cm4gYSB0eXBlIHdoaWNoIGNvcnJlc3BvbmRzIHRvIGEgZ2l2ZW4gc2NoZW1hIG5vZGUuXG4gKlxuICogQHBhcmFtIHtTY2hlbWF9IG5vZGVcbiAqIEByZXR1cm4ge1R5cGV9XG4gKi9cbmZ1bmN0aW9uIGdldFR5cGVGcm9tU2NoZW1hKG5vZGUpIHtcbiAgaWYgKG5vZGUgJiYgbm9kZS5wcm9wcy50eXBlKSB7XG5cbiAgICB1dGlscy5pbnZhcmlhbnQoXG4gICAgICBzY2hlbWEuaXNQcm9wZXJ0eShub2RlKSxcbiAgICAgICdvbmx5IFByb3BlcnR5IHNjaGVtYSBub2RlcyBjYW4gaGF2ZSB0eXBlcydcbiAgICApO1xuXG4gICAgaWYgKHV0aWxzLmlzU3RyaW5nKG5vZGUucHJvcHMudHlwZSkpIHtcbiAgICAgIHZhciB0eXBlID0gdHlwZXNbbm9kZS5wcm9wcy50eXBlXTtcbiAgICAgIHV0aWxzLmludmFyaWFudCh0eXBlLCAndW5rbm93biB0eXBlICcgKyBub2RlLnByb3BzLnR5cGUpO1xuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGUucHJvcHMudHlwZTtcbiAgfVxuXG4gIHJldHVybiB0eXBlcy5hbnk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VHlwZUZyb21TY2hlbWE7XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIEZvcm0gICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9Gb3JtJyk7XG52YXIgRmllbGRzZXQgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL0ZpZWxkc2V0Jyk7XG52YXIgUmVwZWF0aW5nRmllbGRzZXQgICAgICAgPSByZXF1aXJlKCcuL1JlcGVhdGluZ0ZpZWxkc2V0Jyk7XG52YXIgRmllbGQgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL0ZpZWxkJyk7XG52YXIgRm9ybUZvciAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL0Zvcm1Gb3InKTtcbnZhciBNZXNzYWdlICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vTWVzc2FnZScpO1xuXG52YXIgRm9ybU1peGluICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL0Zvcm1NaXhpbicpO1xudmFyIEZvcm1Db250ZXh0TWl4aW4gICAgICAgID0gcmVxdWlyZSgnLi9Gb3JtQ29udGV4dE1peGluJyk7XG52YXIgRm9ybUVsZW1lbnRNaXhpbiAgICAgICAgPSByZXF1aXJlKCcuL0Zvcm1FbGVtZW50TWl4aW4nKTtcbnZhciBGaWVsZE1peGluICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vRmllbGRNaXhpbicpO1xudmFyIEZpZWxkc2V0TWl4aW4gICAgICAgICAgID0gcmVxdWlyZSgnLi9GaWVsZHNldE1peGluJyk7XG52YXIgUmVwZWF0aW5nRmllbGRzZXRNaXhpbiAgPSByZXF1aXJlKCcuL1JlcGVhdGluZ0ZpZWxkc2V0TWl4aW4nKTtcblxudmFyIHZhbGlkYXRvcnMgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi92YWxpZGF0b3JzJyk7XG52YXIgbWVzc2FnZXMgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL21lc3NhZ2VzJyk7XG52YXIgdmFsaWRhdGlvbiAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3ZhbGlkYXRpb24nKTtcbnZhciB0eXBlcyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdHlwZXMnKTtcbnZhciBzY2hlbWEgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vc2NoZW1hJyk7XG52YXIgaW5wdXQgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL2lucHV0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBGb3JtTWl4aW46Rm9ybU1peGluLCBGb3JtQ29udGV4dE1peGluOkZvcm1Db250ZXh0TWl4aW4sIEZvcm1FbGVtZW50TWl4aW46Rm9ybUVsZW1lbnRNaXhpbixcbiAgRmllbGRNaXhpbjpGaWVsZE1peGluLCBGaWVsZHNldE1peGluOkZpZWxkc2V0TWl4aW4sIFJlcGVhdGluZ0ZpZWxkc2V0TWl4aW46UmVwZWF0aW5nRmllbGRzZXRNaXhpbixcblxuICBGb3JtOkZvcm0sIEZpZWxkOkZpZWxkLCBGaWVsZHNldDpGaWVsZHNldCwgUmVwZWF0aW5nRmllbGRzZXQ6UmVwZWF0aW5nRmllbGRzZXQsXG5cbiAgRm9ybUZvcjpGb3JtRm9yLCBNZXNzYWdlOk1lc3NhZ2UsXG5cbiAgc2NoZW1hOnNjaGVtYSwgdHlwZXM6dHlwZXMsIHZhbGlkYXRvcnM6dmFsaWRhdG9ycywgdmFsaWRhdGlvbjp2YWxpZGF0aW9uLCBtZXNzYWdlczptZXNzYWdlcywgaW5wdXQ6aW5wdXRcbn07XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gKHdpbmRvdy5SZWFjdCk7XG5cbnZhciBDaGVja2JveEdyb3VwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiAnQ2hlY2tib3hHcm91cCcsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgb3B0aW9uczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgdmFsdWU6IFJlYWN0LlByb3BUeXBlcy5hcnJheSxcbiAgICBvbkNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7dmFsdWU6IFtdfTtcbiAgfSxcblxuICBvbkNoYW5nZTogZnVuY3Rpb24oZSkge1xuICAgIGlmICghdGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0VmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlLnNsaWNlKDApO1xuXG4gICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgIG5leHRWYWx1ZS5wdXNoKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGlkeCA9IG5leHRWYWx1ZS5pbmRleE9mKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgIGlmIChpZHggPiAtMSkge1xuICAgICAgICBuZXh0VmFsdWUuc3BsaWNlKGlkeCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlcyA9IHRoaXMucHJvcHMub3B0aW9ucy5tYXAoZnVuY3Rpb24obykgIHtyZXR1cm4gby52YWx1ZTt9KTtcbiAgICBuZXh0VmFsdWUuc29ydChmdW5jdGlvbihhLCBiKSAge3JldHVybiB2YWx1ZXMuaW5kZXhPZihhKSAtIHZhbHVlcy5pbmRleE9mKGIpO30pO1xuXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShuZXh0VmFsdWUpO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIG5hbWUgPSB0aGlzLl9yb290Tm9kZUlEO1xuICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLnByb3BzLm9wdGlvbnMubWFwKGZ1bmN0aW9uKG9wdGlvbikgIHtcbiAgICAgIHZhciBjaGVja2VkID0gdmFsdWUgJiYgdmFsdWUuaW5kZXhPZihvcHRpb24udmFsdWUpID4gLTE7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBSZWFjdC5ET00uZGl2KFxuICAgICAgICAgIHtjbGFzc05hbWU6XCJyZWFjdC1mb3Jtcy1jaGVja2JveC1ncm91cC1idXR0b25cIixcbiAgICAgICAgICBrZXk6b3B0aW9uLnZhbHVlfSwgXG4gICAgICAgICAgUmVhY3QuRE9NLmxhYmVsKCB7Y2xhc3NOYW1lOlwicmVhY3QtZm9ybXMtY2hlY2tib3gtZ3JvdXAtbGFiZWxcIn0sIFxuICAgICAgICAgICAgUmVhY3QuRE9NLmlucHV0KFxuICAgICAgICAgICAgICB7b25DaGFuZ2U6dGhpcy5vbkNoYW5nZSxcbiAgICAgICAgICAgICAgY2hlY2tlZDpjaGVja2VkLFxuICAgICAgICAgICAgICBjbGFzc05hbWU6XCJyZWFjdC1mb3Jtcy1jaGVja2JveC1ncm91cC1jaGVja2JveFwiLFxuICAgICAgICAgICAgICB0eXBlOlwiY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgbmFtZTpuYW1lLFxuICAgICAgICAgICAgICB2YWx1ZTpvcHRpb24udmFsdWV9ICksXG4gICAgICAgICAgICBSZWFjdC5ET00uc3Bhbigge2NsYXNzTmFtZTpcInJlYWN0LWZvcm1zLWNoZWNrYm94LWdyb3VwLWNhcHRpb25cIn0sIFxuICAgICAgICAgICAgICBvcHRpb24ubmFtZVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LkRPTS5kaXYoIHtjbGFzc05hbWU6XCJyZWFjdC1mb3Jtcy1jaGVja2JveC1ncm91cFwifSwgXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDaGVja2JveEdyb3VwO1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9ICh3aW5kb3cuUmVhY3QpO1xuXG5mdW5jdGlvbiByZW5kZXJFbXB0eU9wdGlvbihwcm9wcywgb25DaGFuZ2UpIHtcbiAgcmV0dXJuIChcbiAgICBSZWFjdC5ET00uZGl2KFxuICAgICAgICB7Y2xhc3NOYW1lOlwicmVhY3QtZm9ybXMtcmFkaW8tYnV0dG9uLWdyb3VwLWJ1dHRvblwiLFxuICAgICAgICBrZXk6XCJcIn0sIFxuICAgICAgUmVhY3QuRE9NLmxhYmVsKFxuICAgICAgICB7Y2xhc3NOYW1lOlwicmVhY3QtZm9ybXMtcmFkaW8tYnV0dG9uLWdyb3VwLWxhYmVsXCJ9LCBcbiAgICAgICAgUmVhY3QuRE9NLmlucHV0KFxuICAgICAgICAgIHtjaGVja2VkOnByb3BzLmNoZWNrZWQsXG4gICAgICAgICAgY2xhc3NOYW1lOlwicmVhY3QtZm9ybXMtcmFkaW8tYnV0dG9uLWdyb3VwLXJhZGlvXCIsXG4gICAgICAgICAgdHlwZTpcInJhZGlvXCIsXG4gICAgICAgICAgbmFtZTpwcm9wcy5uYW1lLFxuICAgICAgICAgIG9uQ2hhbmdlOm9uQ2hhbmdlLmJpbmQobnVsbCwgbnVsbCksXG4gICAgICAgICAgdmFsdWU6XCJcIn0gKSxcbiAgICAgICAgUmVhY3QuRE9NLnNwYW4oIHtjbGFzc05hbWU6XCJyZWFjdC1mb3Jtcy1yYWRpby1idXR0b24tZ3JvdXAtY2FwdGlvblwifSwgXG4gICAgICAgICAgXCJub25lXCJcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcbn1cblxudmFyIFJhZGlvQnV0dG9uR3JvdXAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdSYWRpb0J1dHRvbkdyb3VwJyxcblxuICAgIHByb3BUeXBlczoge1xuICAgICAgb3B0aW9uczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgICBhbGxvd0VtcHR5OiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICAgIHZhbHVlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgb25DaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMucHJvcHMub3B0aW9ucy5tYXAodGhpcy5yZW5kZXJPcHRpb24pO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5hbGxvd0VtcHR5KSB7XG4gICAgICAgIG9wdGlvbnMudW5zaGlmdChyZW5kZXJFbXB0eU9wdGlvbih7XG4gICAgICAgICAgICBuYW1lOiB0aGlzLl9yb290Tm9kZUlELFxuICAgICAgICAgICAgY2hlY2tlZDogIXRoaXMucHJvcHMudmFsdWVcbiAgICAgICAgfSwgdGhpcy5vbkNoYW5nZSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICBSZWFjdC5ET00uZGl2KCB7Y2xhc3NOYW1lOlwicmVhY3QtZm9ybXMtcmFkaW8tYnV0dG9uLWdyb3VwXCJ9LCBcbiAgICAgICAgICBvcHRpb25zXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSxcblxuICAgIHJlbmRlck9wdGlvbjogZnVuY3Rpb24ob3B0aW9uKSB7XG4gICAgICB2YXIgbmFtZSA9IHRoaXMuX3Jvb3ROb2RlSUQ7XG4gICAgICB2YXIgY2hlY2tlZCA9IHRoaXMucHJvcHMudmFsdWUgP1xuICAgICAgICAgIHRoaXMucHJvcHMudmFsdWUgPT09IG9wdGlvbi52YWx1ZSA6XG4gICAgICAgICAgZmFsc2U7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBSZWFjdC5ET00uZGl2KFxuICAgICAgICAgIHtjbGFzc05hbWU6XCJyZWFjdC1mb3Jtcy1yYWRpby1idXR0b24tZ3JvdXAtYnV0dG9uXCIsXG4gICAgICAgICAga2V5Om9wdGlvbi52YWx1ZX0sIFxuICAgICAgICAgIFJlYWN0LkRPTS5sYWJlbChcbiAgICAgICAgICAgIHtjbGFzc05hbWU6XCJyZWFjdC1mb3Jtcy1yYWRpby1idXR0b24tZ3JvdXAtbGFiZWxcIn0sIFxuICAgICAgICAgICAgUmVhY3QuRE9NLmlucHV0KFxuICAgICAgICAgICAgICB7Y2hlY2tlZDpjaGVja2VkLFxuICAgICAgICAgICAgICBjbGFzc05hbWU6XCJyZWFjdC1mb3Jtcy1yYWRpby1idXR0b24tZ3JvdXAtcmFkaW9cIixcbiAgICAgICAgICAgICAgdHlwZTpcInJhZGlvXCIsXG4gICAgICAgICAgICAgIG5hbWU6bmFtZSxcbiAgICAgICAgICAgICAgb25DaGFuZ2U6dGhpcy5vbkNoYW5nZS5iaW5kKG51bGwsIG9wdGlvbi52YWx1ZSksXG4gICAgICAgICAgICAgIHZhbHVlOm9wdGlvbi52YWx1ZX0gKSxcbiAgICAgICAgICAgIFJlYWN0LkRPTS5zcGFuKCB7Y2xhc3NOYW1lOlwicmVhY3QtZm9ybXMtcmFkaW8tYnV0dG9uLWdyb3VwLWNhcHRpb25cIn0sIFxuICAgICAgICAgICAgICBvcHRpb24ubmFtZVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgb25DaGFuZ2U6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBSYWRpb0J1dHRvbkdyb3VwO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQ2hlY2tib3hHcm91cDogcmVxdWlyZSgnLi9DaGVja2JveEdyb3VwJyksXG4gIFJhZGlvQnV0dG9uR3JvdXA6IHJlcXVpcmUoJy4vUmFkaW9CdXR0b25Hcm91cCcpXG59O1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG4ndXNlIHN0cmljdCc7XG5cblxuXG4gIGZ1bmN0aW9uIExlbnMoZGF0YSwgcGF0aCkge1xuICAgIHRoaXMuX19kYXRhID0gZGF0YTtcbiAgICB0aGlzLl9fcGF0aCA9IHBhdGg7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgdmFsdWUgdGhpcyBsZW5zZSBwb2ludHMgdG9cbiAgICovXG4gIExlbnMucHJvdG90eXBlLnZhbD1mdW5jdGlvbigpIHtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLl9fZGF0YTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5fX3BhdGgubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSB0aGlzLl9fcGF0aFtpXTtcbiAgICAgIHZhbHVlID0gdmFsdWVba2V5LmtleV07XG4gICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiBrZXkuZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFsdWUgPSBrZXkuZGVmYXVsdFZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgTGVucy5wcm90b3R5cGUuaXNVbmRlZmluZWQ9ZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZhbHVlID0gdGhpcy5fX2RhdGE7XG5cbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMuX19wYXRoLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0gdGhpcy5fX3BhdGhbaV07XG4gICAgICB2YWx1ZSA9IHZhbHVlW2tleS5rZXldO1xuICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIExlbnMucHJvdG90eXBlLnJvb3Q9ZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX19kYXRhO1xuICB9O1xuXG4gIExlbnMucHJvdG90eXBlLnBhcmVudD1mdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fX3BhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGF0aCA9IHRoaXMuX19wYXRoLnNsaWNlKDAsIHRoaXMuX19wYXRoLmxlbmd0aCAtIDEpO1xuICAgICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKHRoaXMuX19kYXRhLCBwYXRoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBhIGxlbnMgYnkgYSBzcGVjaWZpZWQga2V5XG4gICAqXG4gICAqIEBwYXJhbSB7S2V5fSBrZXlcbiAgICogQHBhcmFtIHtBbnl9IGRlZmF1bHRWYWx1ZVxuICAgKi9cbiAgTGVucy5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKFxuICAgICAgdGhpcy5fX2RhdGEsIHRoaXMuX19wYXRoLmNvbmNhdCh7a2V5OmtleSwgZGVmYXVsdFZhbHVlOmRlZmF1bHRWYWx1ZX0pKTtcbiAgfTtcblxuICAvKipcbiAgICogU2hvcnRjdXQgZm9yIGxlbnMuZ2V0KGtleSkubW9kKHZhbHVlKVxuICAgKlxuICAgKiBAcGFyYW0ge0tleX0ga2V5XG4gICAqIEBwYXJhbSB7QW55fSB2YWx1ZVxuICAgKi9cbiAgTGVucy5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoa2V5KS5tb2QodmFsdWUpO1xuICB9O1xuXG4gIExlbnMucHJvdG90eXBlLnVwZGF0ZT1mdW5jdGlvbih2YWx1ZXMpIHtcbiAgICB2YXIgZGF0YSA9IHRoaXMudmFsKCk7XG4gICAgdmFyIGNvcHkgPSB7fTtcbiAgICB2YXIgaztcbiAgICBmb3IgKGsgaW4gZGF0YSkge1xuICAgICAgY29weVtrXSA9IGRhdGFba107XG4gICAgfVxuICAgIGZvciAoayBpbiB2YWx1ZXMpIHtcbiAgICAgIGNvcHlba10gPSB2YWx1ZXNba107XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm1vZChjb3B5KTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJuIGxlbnMgZm9yIGEgbmV3IGRhdGEgd2hpY2ggcG9pbnRzIHRvIHRoZSBzYW1lIGxvY2F0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge0FueX0gZGF0YVxuICAgKi9cbiAgTGVucy5wcm90b3R5cGUuZm9yPWZ1bmN0aW9uKGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IoZGF0YSwgdGhpcy5fX3BhdGgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBuZXcgY29weSBvZiBkYXRhIGJ5IHJlcGxhY2luZyBhIHZhbHVlIHRoaXMgbGVucyBwb2ludHMgdG8gd2l0aCBhXG4gICAqIG5ldyB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtBbnl9IHZhbHVlXG4gICAqL1xuICBMZW5zLnByb3RvdHlwZS5tb2Q9ZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgdXBkYXRlZCwgbmV3RGF0YSwgcHJldkRhdGE7XG4gICAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YTtcbiAgICB2YXIgcGF0aCA9IHRoaXMuX19wYXRoO1xuXG4gICAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5mb3IodmFsdWUpO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwYXRoLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0gcGF0aFtpXTtcblxuICAgICAgLy8gY29weSB0aHJvdWdoIGNoYW5nZWQgcGF0aFxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgdXBkYXRlZCA9IGRhdGEuc2xpY2UoMCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICB1cGRhdGVkID0ge307XG4gICAgICAgIGZvciAodmFyIGsgaW4gZGF0YSkge1xuICAgICAgICAgIHVwZGF0ZWRba10gPSBkYXRhW2tdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHN0b3JlIHJlZmVyZW5jZSB0byBuZXdseSBjcmVhdGVkIHJvb3QgZGF0YVxuICAgICAgaWYgKG5ld0RhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBuZXdEYXRhID0gdXBkYXRlZDtcbiAgICAgIH1cblxuICAgICAgLy8gbXV0YXRlIHByZXZpb3VzbHkgY29waWVkIGRhdGEgd2l0aCB1cGRhdGVkIHZhbHVlXG4gICAgICBpZiAocHJldkRhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcmV2RGF0YVtwYXRoW2kgLSAxXS5rZXldID0gdXBkYXRlZDtcbiAgICAgIH1cblxuICAgICAgLy8gaWYgd2UgYXJlIGF0IHRoZSBsYXN0IHBhdGgga2V5IHVwZGF0ZSBkYXRhIHdpdGggYSBuZXcgdmFsdWVcbiAgICAgIGlmIChpID09PSBsZW4gLSAxKSB7XG4gICAgICAgIHVwZGF0ZWRba2V5LmtleV0gPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGEgPSB1cGRhdGVkW2tleS5rZXldO1xuICAgICAgICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkICYmIGtleS5kZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGRhdGEgPSBrZXkuZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHByZXZEYXRhID0gdXBkYXRlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5mb3IobmV3RGF0YSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBuZXcgbGVucyBmb3IgZGF0YVxuICAgKlxuICAgKiBAcGFyYW0ge0FueX0gZGF0YVxuICAgKi9cbiAgTGVucy5tYWtlPWZ1bmN0aW9uKGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IHRoaXMoZGF0YSwgW10pO1xuICB9O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gTGVucy5tYWtlLmJpbmQoTGVucyk7XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIElOVkFMSURfVkFMVUU6ICdpbnZhbGlkIHZhbHVlJyxcbiAgVkFMVUVfSVNfUkVRVUlSRUQ6ICd2YWx1ZSBpcyByZXF1aXJlZCcsXG4gIEFUX0xFQVNUX09ORV9JVEVNX0lTX1JFUVVJUkVEOiAnYXQgbGVhc3Qgb25lIGl0ZW0gaXMgcmVxdWlyZWQnLFxuICBJU19OT1RfQV9EQVRFOiAnc2hvdWxkIGJlIGEgZGF0ZSBpbiBZWVlZLU1NLUREIGZvcm1hdCdcbn07XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzICAgICA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuZnVuY3Rpb24gTm9kZSgpe31cblxuXG5cbmZvcih2YXIgTm9kZV9fX19LZXkgaW4gTm9kZSl7aWYoTm9kZS5oYXNPd25Qcm9wZXJ0eShOb2RlX19fX0tleSkpe1Byb3BlcnR5Tm9kZVtOb2RlX19fX0tleV09Tm9kZVtOb2RlX19fX0tleV07fX12YXIgX19fX1N1cGVyUHJvdG9PZk5vZGU9Tm9kZT09PW51bGw/bnVsbDpOb2RlLnByb3RvdHlwZTtQcm9wZXJ0eU5vZGUucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoX19fX1N1cGVyUHJvdG9PZk5vZGUpO1Byb3BlcnR5Tm9kZS5wcm90b3R5cGUuY29uc3RydWN0b3I9UHJvcGVydHlOb2RlO1Byb3BlcnR5Tm9kZS5fX3N1cGVyQ29uc3RydWN0b3JfXz1Ob2RlO1xuXG4gIGZ1bmN0aW9uIFByb3BlcnR5Tm9kZShwcm9wcykge1xuICAgIHByb3BzID0gcHJvcHMgPyB1dGlscy5tZXJnZSh7fSwgcHJvcHMpIDoge307XG5cbiAgICB0aGlzLm5hbWUgPSBwcm9wcy5uYW1lO1xuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgfVxuXG5cbmZvcihOb2RlX19fX0tleSBpbiBOb2RlKXtpZihOb2RlLmhhc093blByb3BlcnR5KE5vZGVfX19fS2V5KSl7U2NoZW1hTm9kZVtOb2RlX19fX0tleV09Tm9kZVtOb2RlX19fX0tleV07fX1TY2hlbWFOb2RlLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKF9fX19TdXBlclByb3RvT2ZOb2RlKTtTY2hlbWFOb2RlLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1TY2hlbWFOb2RlO1NjaGVtYU5vZGUuX19zdXBlckNvbnN0cnVjdG9yX189Tm9kZTtcblxuICBmdW5jdGlvbiBTY2hlbWFOb2RlKHByb3BzKSB7XG4gICAgcHJvcHMgPSBwcm9wcyA/IHV0aWxzLm1lcmdlKHt9LCBwcm9wcykgOiB7fTtcblxuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICB2YXIgY2hpbGRyZW4gPSB7fTtcblxuICAgIGlmIChhcmdzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgZm9yRWFjaE5lc3RlZChhcmdzLCBmdW5jdGlvbihhcmcpICB7XG4gICAgICAgIHV0aWxzLmludmFyaWFudChcbiAgICAgICAgICBhcmcubmFtZSxcbiAgICAgICAgICAncHJvcHMgZmllbGRzIHNob3VsZCBzcGVjaWZ5IG5hbWUgcHJvcGVydHknXG4gICAgICAgICk7XG4gICAgICAgIGNoaWxkcmVuW2FyZy5uYW1lXSA9IGFyZztcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMubmFtZSA9IHByb3BzLm5hbWU7XG4gICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfVxuXG4gIFNjaGVtYU5vZGUucHJvdG90eXBlLm1hcD1mdW5jdGlvbihmdW5jLCBjb250ZXh0KSB7XG4gICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMuY2hpbGRyZW4pIHtcbiAgICAgIHJlc3VsdHMucHVzaChmdW5jLmNhbGwoY29udGV4dCwgdGhpcy5jaGlsZHJlbltuYW1lXSwgbmFtZSwgdGhpcykpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuXG5mb3IoTm9kZV9fX19LZXkgaW4gTm9kZSl7aWYoTm9kZS5oYXNPd25Qcm9wZXJ0eShOb2RlX19fX0tleSkpe0xpc3ROb2RlW05vZGVfX19fS2V5XT1Ob2RlW05vZGVfX19fS2V5XTt9fUxpc3ROb2RlLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKF9fX19TdXBlclByb3RvT2ZOb2RlKTtMaXN0Tm9kZS5wcm90b3R5cGUuY29uc3RydWN0b3I9TGlzdE5vZGU7TGlzdE5vZGUuX19zdXBlckNvbnN0cnVjdG9yX189Tm9kZTtcblxuICBmdW5jdGlvbiBMaXN0Tm9kZShwcm9wcykge1xuICAgIHByb3BzID0gcHJvcHMgPyB1dGlscy5tZXJnZSh7fSwgcHJvcHMpIDoge307XG5cbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgICB1dGlscy5pbnZhcmlhbnQoXG4gICAgICBhcmdzLmxlbmd0aCA9PT0gMSxcbiAgICAgICdwcm9wcyBmb3IgYXJyYXkgbXVzdCBjb250YWluIGV4YWN0bHkgb25lIGNoaWxkIHByb3BzIHByb3BzJ1xuICAgICk7XG5cbiAgICB0aGlzLm5hbWUgPSBwcm9wcy5uYW1lO1xuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICB0aGlzLmNoaWxkcmVuID0gYXJnc1swXTtcbiAgfVxuXG5cbmZ1bmN0aW9uIGZvckVhY2hOZXN0ZWQoY29sbGVjdGlvbiwgZnVuYywgY29udGV4dCkge1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gY29sbGVjdGlvbi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGNvbGxlY3Rpb25baV0pKSB7XG4gICAgICBmb3JFYWNoTmVzdGVkKGNvbGxlY3Rpb25baV0sIGZ1bmMsIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmdW5jLmNhbGwoY29udGV4dCwgY29sbGVjdGlvbltpXSwgaSwgY29sbGVjdGlvbik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VGYWN0b3J5KGNvbnN0cnVjdG9yKSB7XG4gIGZ1bmN0aW9uIGZhY3RvcnkoKSB7XG4gICAgdmFyIG5vZGUgPSBPYmplY3QuY3JlYXRlKGNvbnN0cnVjdG9yLnByb3RvdHlwZSk7XG4gICAgY29uc3RydWN0b3IuYXBwbHkobm9kZSwgYXJndW1lbnRzKTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuICAvLyB3ZSBkbyB0aGlzIHRvIHN1cHBvcnQgaW5zdGFuY2VvZiBjaGVja1xuICBmYWN0b3J5LnByb3RvdHlwZSA9IGNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgcmV0dXJuIGZhY3Rvcnk7XG59XG5cbnZhciBQcm9wZXJ0eSAgPSBtYWtlRmFjdG9yeShQcm9wZXJ0eU5vZGUpO1xudmFyIExpc3QgICAgICA9IG1ha2VGYWN0b3J5KExpc3ROb2RlKTtcbnZhciBTY2hlbWEgICAgPSBtYWtlRmFjdG9yeShTY2hlbWFOb2RlKTtcblxuZnVuY3Rpb24gY3JlYXRlVHlwZShzcGVjKSB7XG4gIHJldHVybiBmdW5jdGlvbihwcm9wcykge1xuICAgIHByb3BzID0gcHJvcHMgfHwge307XG4gICAgcmV0dXJuIHNwZWMocHJvcHMpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBpc1NjaGVtYShub2RlKSB7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgU2NoZW1hTm9kZTtcbn1cblxuZnVuY3Rpb24gaXNMaXN0KG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBMaXN0Tm9kZTtcbn1cblxuZnVuY3Rpb24gaXNQcm9wZXJ0eShub2RlKSB7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgUHJvcGVydHlOb2RlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgTm9kZTpOb2RlLFxuICBQcm9wZXJ0eTpQcm9wZXJ0eSwgaXNQcm9wZXJ0eTppc1Byb3BlcnR5LFxuICBTY2hlbWE6U2NoZW1hLCBpc1NjaGVtYTppc1NjaGVtYSxcbiAgTGlzdDpMaXN0LCBpc0xpc3Q6aXNMaXN0LFxuICBjcmVhdGVUeXBlOmNyZWF0ZVR5cGVcbn07XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIG1lc3NhZ2VzID0gcmVxdWlyZSgnLi9tZXNzYWdlcycpO1xuXG5mdW5jdGlvbiBpZFNlcmlhbGl6ZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGwgPyAnJyA6IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBpZERlc2VyaWFsaXplKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gJycgPyBudWxsIDogdmFsdWU7XG59XG5cbnZhciBhbnkgPSB7XG4gIHNlcmlhbGl6ZTogaWRTZXJpYWxpemUsXG4gIGRlc2VyaWFsaXplOiBpZERlc2VyaWFsaXplXG59O1xuXG52YXIgc3RyaW5nID0gYW55O1xuXG52YXIgbnVtYmVyID0ge1xuICBzZXJpYWxpemU6IGlkU2VyaWFsaXplLFxuICBkZXNlcmlhbGl6ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09ICcnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICAvLyBiYXNlZCBvbiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xODMwODQ0LzE4Mjk1NFxuICAgIH0gZWxzZSBpZiAoIWlzTmFOKHBhcnNlRmxvYXQodmFsdWUpKSAmJiBpc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2VzLklOVkFMSURfVkFMVUUpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIGlzRGF0ZVJlID0gL15cXGRcXGRcXGRcXGQtXFxkXFxkLVxcZFxcZCQvO1xuXG52YXIgZGF0ZSA9IHtcbiAgc2VyaWFsaXplOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB2YXIgeWVhciA9IHZhbHVlLmdldEZ1bGxZZWFyKCk7XG4gICAgdmFyIG1vbnRoID0gdmFsdWUuZ2V0TW9udGgoKSArIDE7XG4gICAgdmFyIGRheSA9IHZhbHVlLmdldERhdGUoKTtcbiAgICByZXR1cm4gKHllYXIgKyBcIi1cIiArIHBhZChtb250aCwgMikgKyBcIi1cIiArIHBhZChkYXksIDIpKTtcbiAgfSxcbiAgZGVzZXJpYWxpemU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSAnJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIGlmICghaXNEYXRlUmUuZXhlYyh2YWx1ZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlcy5JU19OT1RfQV9EQVRFKTtcbiAgICB9XG5cbiAgICB2YWx1ZSA9IG5ldyBEYXRlKHZhbHVlKTtcblxuICAgIGlmIChpc05hTih2YWx1ZS5nZXRUaW1lKCkpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZXMuSU5WQUxJRF9WQUxVRSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59O1xuXG5mdW5jdGlvbiBwYWQobnVtLCBzaXplKSB7XG4gIHJldHVybiAoJzAwMDAnICsgbnVtKS5zdWJzdHIoLXNpemUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHthbnk6YW55LCBzdHJpbmc6c3RyaW5nLCBudW1iZXI6bnVtYmVyLCBkYXRlOmRhdGV9O1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIG1lcmdlSW50byhkc3QsIHNyYykge1xuICBpZiAoc3JjICE9IG51bGwpIHtcbiAgICBmb3IgKHZhciBrIGluIHNyYykge1xuICAgICAgaWYgKCFzcmMuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBkc3Rba10gPSBzcmNba107XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG1lcmdlKGEsIGIpIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBtZXJnZUludG8ocmVzdWx0LCBhKTtcbiAgbWVyZ2VJbnRvKHJlc3VsdCwgYik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgaWYgKCFjb25kaXRpb24pIHtcblxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlIHx8ICdpbnZhcmlhbnQgdmlvbGF0aW9uJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHtcblxufVxuXG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKG8pIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwobykgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHttZXJnZUludG86bWVyZ2VJbnRvLCBtZXJnZTptZXJnZSwgaW52YXJpYW50OmludmFyaWFudCwgZW1wdHlGdW5jdGlvbjplbXB0eUZ1bmN0aW9uLCBpc1N0cmluZzppc1N0cmluZ307XG4iLCIvKipcbiAqIFNjaGVtYSB2YWxpZGF0aW9uXG4gKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBzY2hlbWEgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9zY2hlbWEnKTtcbnZhciBnZXRUeXBlRnJvbVNjaGVtYSAgICAgICAgID0gcmVxdWlyZSgnLi9nZXRUeXBlRnJvbVNjaGVtYScpO1xudmFyIGdldERlZmF1bHRWYWx1ZUZvclNjaGVtYSAgPSByZXF1aXJlKCcuL2dldERlZmF1bHRWYWx1ZUZvclNjaGVtYScpO1xudmFyIHZhbGlkYXRvcnMgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3ZhbGlkYXRvcnMnKTtcblxudmFyIGV4aXN0cyAgICAgPSB2YWxpZGF0b3JzLmV4aXN0cztcbnZhciBub25FbXB0eSAgID0gdmFsaWRhdG9ycy5ub25FbXB0eTtcblxuZnVuY3Rpb24gc2VyaWFsaXplKG5vZGUsIHZhbHVlKSB7XG4gIHZhciByZXN1bHQ7XG5cbiAgaWYgKHNjaGVtYS5pc1Byb3BlcnR5KG5vZGUpKSB7XG4gICAgcmVzdWx0ID0gZ2V0VHlwZUZyb21TY2hlbWEobm9kZSkuc2VyaWFsaXplKHZhbHVlKTtcbiAgfSBlbHNlIGlmIChzY2hlbWEuaXNTY2hlbWEobm9kZSkpIHtcbiAgICByZXN1bHQgPSB7fTtcbiAgICBmb3IgKHZhciBrIGluIHZhbHVlKSB7XG4gICAgICBpZiAobm9kZS5jaGlsZHJlbltrXSkge1xuICAgICAgICByZXN1bHRba10gPSBzZXJpYWxpemUobm9kZS5jaGlsZHJlbltrXSwgdmFsdWVba10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0W2tdID0gdmFsdWVba107XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKHNjaGVtYS5pc0xpc3Qobm9kZSkpIHtcbiAgICByZXN1bHQgPSBuZXcgQXJyYXkodmFsdWUubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdmFsdWUubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHJlc3VsdFtpXSA9IHNlcmlhbGl6ZShub2RlLmNoaWxkcmVuLCB2YWx1ZVtpXSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHV0aWxzLmludmFyaWFudChmYWxzZSwgJ3Vua25vd24gc2NoZW1hIHBhc3NlZCcpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZGVzZXJpYWxpemVPbmx5KG5vZGUsIHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHt2YWx1ZTp2YWx1ZSwgdmFsaWRhdGlvbjogc3VjY2Vzc307XG4gIH1cbiAgdmFyIHR5cGUgPSBnZXRUeXBlRnJvbVNjaGVtYShub2RlKTtcbiAgdHJ5IHtcbiAgICB2YWx1ZSA9IHR5cGUuZGVzZXJpYWxpemUodmFsdWUpO1xuICB9IGNhdGNoKGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsaWRhdGlvbjogZmFpbHVyZShlLm1lc3NhZ2UpLFxuICAgICAgdmFsdWU6dmFsdWVcbiAgICB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgdmFsaWRhdGlvbjogc3VjY2VzcyxcbiAgICB2YWx1ZTp2YWx1ZVxuICB9O1xufVxuXG4vKipcbiAqIFZhbGlkYXRlIHZhbHVlIGFnYWluc3Qgc2NoZW1hXG4gKlxuICogQHBhcmFtIHtTY2hlbWF9IG5vZGVcbiAqIEBwYXJhbSB7QW55fSB2YWx1ZVxuICogQHJldHVybnMge1ZhbGlkYXRpb259XG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlKG5vZGUsIHZhbHVlKSB7XG4gIGlmIChzY2hlbWEuaXNTY2hlbWEobm9kZSkpIHtcbiAgICByZXR1cm4gdmFsaWRhdGVTY2hlbWEobm9kZSwgdmFsdWUpO1xuICB9IGVsc2UgaWYgKHNjaGVtYS5pc0xpc3Qobm9kZSkpIHtcbiAgICByZXR1cm4gdmFsaWRhdGVMaXN0KG5vZGUsIHZhbHVlKTtcbiAgfSBlbHNlIGlmIChzY2hlbWEuaXNQcm9wZXJ0eShub2RlKSkge1xuICAgIHJldHVybiB2YWxpZGF0ZVByb3BlcnR5KG5vZGUsIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB1dGlscy5pbnZhcmlhbnQoXG4gICAgICBmYWxzZSxcbiAgICAgICdkbyBub3Qga25vdyBob3cgdG8gdmFsaWRhdGUgJyArIG5vZGUgKyAnIG9mIHR5cGUgJyArIG5vZGUuY29uc3RydWN0b3JcbiAgICApO1xuICB9XG59XG5cbi8qKlxuICogVmFsaWRhdGUgdmFsdWUgYWdhaW5zdCBzY2hlbWEgYnV0IG9ubHkgdXNpbmcgdGhlIHJvb3Qgc2NoZW1hIG5vZGUuXG4gKlxuICogVGhpcyBtZXRob2QgaXMgdXNlZnVsIHdoZW4gZG9pbmcgYW4gaW5jcmVtZW50YWwgdmFsaWRhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1NjaGVtYX0gbm9kZVxuICogQHBhcmFtIHtBbnl9IHZhbHVlXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbn1cbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVPbmx5KG5vZGUsIHZhbHVlLCBjaGlsZHJlbikge1xuICBpZiAoc2NoZW1hLmlzU2NoZW1hKG5vZGUpKSB7XG4gICAgcmV0dXJuIHZhbGlkYXRlU2NoZW1hT25seShub2RlLCB2YWx1ZSwgY2hpbGRyZW4pO1xuICB9IGVsc2UgaWYgKHNjaGVtYS5pc0xpc3Qobm9kZSkpIHtcbiAgICByZXR1cm4gdmFsaWRhdGVMaXN0T25seShub2RlLCB2YWx1ZSwgY2hpbGRyZW4pO1xuICB9IGVsc2UgaWYgKHNjaGVtYS5pc1Byb3BlcnR5KG5vZGUpKSB7XG4gICAgcmV0dXJuIHZhbGlkYXRlUHJvcGVydHkobm9kZSwgdmFsdWUsIGNoaWxkcmVuKTtcbiAgfSBlbHNlIHtcbiAgICB1dGlscy5pbnZhcmlhbnQoXG4gICAgICBmYWxzZSxcbiAgICAgICdkbyBub3Qga25vdyBob3cgdG8gdmFsaWRhdGUgJyArIG5vZGUgKyAnIG9mIHR5cGUgJyArIG5vZGUuY29uc3RydWN0b3JcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlU2NoZW1hKG5vZGUsIHZhbHVlKSB7XG4gIHZhciBjaGlsZHJlblZhbGlkYXRpb24gPSB2YWxpZGF0ZVNjaGVtYUNoaWxkcmVuKG5vZGUsIHZhbHVlKTtcblxuICB2YXIgY29udmVydGVkVmFsdWUgPSB2YWx1ZTtcblxuICBpZiAoT2JqZWN0LmtleXMoY2hpbGRyZW5WYWxpZGF0aW9uLmNoaWxkcmVuKS5sZW5ndGggPiAwKSB7XG4gICAgY29udmVydGVkVmFsdWUgPSB7fTtcbiAgICBmb3IgKHZhciBrIGluIHZhbHVlKSB7XG4gICAgICBjb252ZXJ0ZWRWYWx1ZVtrXSA9IGNoaWxkcmVuVmFsaWRhdGlvbi5jaGlsZHJlbltrXSAhPT0gdW5kZWZpbmVkID9cbiAgICAgICAgY2hpbGRyZW5WYWxpZGF0aW9uLmNoaWxkcmVuW2tdIDpcbiAgICAgICAgdmFsdWVba107XG4gICAgfVxuICB9XG5cbiAgdmFyIHZhbGlkYXRpb24gPSB2YWxpZGF0ZVNjaGVtYU9ubHkoXG4gICAgICBub2RlLFxuICAgICAgY29udmVydGVkVmFsdWUsXG4gICAgICBjaGlsZHJlblZhbGlkYXRpb24udmFsaWRhdGlvblxuICApO1xuXG4gIHJldHVybiB2YWxpZGF0aW9uO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVNjaGVtYU9ubHkobm9kZSwgdmFsdWUsIGNoaWxkcmVuKSB7XG5cbiAgaWYgKCFhcmVDaGlsZHJlblZhbGlkKGNoaWxkcmVuKSkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTp2YWx1ZSxcbiAgICAgIHZhbGlkYXRpb246IHtcbiAgICAgICAgdmFsaWRhdGlvbjoge2ZhaWx1cmU6IHVuZGVmaW5lZH0sXG4gICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICB2YXIgZGVzZXJpYWxpemVkID0gZGVzZXJpYWxpemVPbmx5KG5vZGUsIHZhbHVlKTtcblxuICBpZiAoaXNGYWlsdXJlKGRlc2VyaWFsaXplZC52YWxpZGF0aW9uKSkge1xuICAgIHJldHVybiBkZXNlcmlhbGl6ZWQ7XG4gIH1cblxuICB2YXIgdmFsaWRhdGlvbiA9IG5vZGUucHJvcHMudmFsaWRhdGUgP1xuICAgIHZhbGlkYXRvcnMudmFsaWRhdG9yKG5vZGUucHJvcHMudmFsaWRhdGUpKHZhbHVlLCBub2RlLnByb3BzKSA6XG4gICAgdmFsaWRhdG9ycy5zdWNjZXNzO1xuXG4gIHJldHVybiB7XG4gICAgdmFsdWU6IGRlc2VyaWFsaXplZC52YWx1ZSxcbiAgICB2YWxpZGF0aW9uOiB7dmFsaWRhdGlvbjp2YWxpZGF0aW9ufVxuICB9O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVNjaGVtYUNoaWxkcmVuKG5vZGUsIHZhbHVlKSB7XG4gIHZhciB2YWxpZGF0aW9uID0ge307XG4gIHZhciBjaGlsZHJlbiA9IHt9O1xuXG4gIGlmICh2YWx1ZSAmJiBub2RlLmNoaWxkcmVuKSB7XG4gICAgZm9yICh2YXIgbmFtZSBpbiBub2RlLmNoaWxkcmVuKSB7XG4gICAgICB2YXIgY2hpbGRWYWx1ZSA9IHZhbHVlW25hbWVdICE9PSB1bmRlZmluZWQgP1xuICAgICAgICB2YWx1ZVtuYW1lXSA6XG4gICAgICAgIGdldERlZmF1bHRWYWx1ZUZvclNjaGVtYShub2RlLmNoaWxkcmVuW25hbWVdKTtcbiAgICAgIHZhciBjaGlsZFZhbGlkYXRpb24gPSB2YWxpZGF0ZShub2RlLmNoaWxkcmVuW25hbWVdLCBjaGlsZFZhbHVlKTtcblxuICAgICAgaWYgKGlzRmFpbHVyZShjaGlsZFZhbGlkYXRpb24udmFsaWRhdGlvbikpIHtcbiAgICAgICAgdmFsaWRhdGlvbltuYW1lXSA9IGNoaWxkVmFsaWRhdGlvbi52YWxpZGF0aW9uO1xuICAgICAgfVxuXG4gICAgICBjaGlsZHJlbltuYW1lXSA9IGNoaWxkVmFsaWRhdGlvbi52YWx1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge3ZhbGlkYXRpb246dmFsaWRhdGlvbiwgY2hpbGRyZW46Y2hpbGRyZW59O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUxpc3Qobm9kZSwgdmFsdWUpIHtcbiAgdmFyIGNoaWxkcmVuVmFsaWRhdGlvbiA9IHZhbGlkYXRlTGlzdENoaWxkcmVuKG5vZGUsIHZhbHVlKTtcblxuICB2YXIgdmFsaWRhdGlvbiA9IHZhbGlkYXRlTGlzdE9ubHkoXG4gICAgICBub2RlLFxuICAgICAgY2hpbGRyZW5WYWxpZGF0aW9uLmNoaWxkcmVuLFxuICAgICAgY2hpbGRyZW5WYWxpZGF0aW9uLnZhbGlkYXRpb25cbiAgKTtcbiAgcmV0dXJuIHZhbGlkYXRpb247XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlTGlzdE9ubHkobm9kZSwgdmFsdWUsIGNoaWxkcmVuKSB7XG5cbiAgaWYgKCFhcmVDaGlsZHJlblZhbGlkKGNoaWxkcmVuKSkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTp2YWx1ZSxcbiAgICAgIHZhbGlkYXRpb246IHtcbiAgICAgICAgdmFsaWRhdGlvbjoge2ZhaWx1cmU6IHVuZGVmaW5lZH0sXG4gICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICB2YXIgZGVzZXJpYWxpemVkID0gZGVzZXJpYWxpemVPbmx5KG5vZGUsIHZhbHVlKTtcblxuICBpZiAoaXNGYWlsdXJlKGRlc2VyaWFsaXplZC52YWxpZGF0aW9uKSkge1xuICAgIHJldHVybiBkZXNlcmlhbGl6ZWQ7XG4gIH1cblxuICB2YXIgdmFsaWRhdG9yID0gbm9uRW1wdHkuYW5kVGhlbihub2RlLnByb3BzLnZhbGlkYXRlKTtcbiAgdmFyIHZhbGlkYXRpb24gPSB2YWxpZGF0b3IoZGVzZXJpYWxpemVkLnZhbHVlLCBub2RlLnByb3BzKTtcblxuICByZXR1cm4ge1xuICAgIHZhbHVlOiBkZXNlcmlhbGl6ZWQudmFsdWUsXG4gICAgdmFsaWRhdGlvbjoge3ZhbGlkYXRpb246dmFsaWRhdGlvbn1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVMaXN0Q2hpbGRyZW4obm9kZSwgdmFsdWUpIHtcbiAgdmFyIHZhbGlkYXRpb24gPSB7fTtcbiAgdmFyIGNoaWxkcmVuID0gW107XG5cbiAgaWYgKHZhbHVlICYmIG5vZGUuY2hpbGRyZW4pIHtcbiAgICBmb3IgKHZhciBpZHggPSAwLCBsZW4gPSB2YWx1ZS5sZW5ndGg7IGlkeCA8IGxlbjsgaWR4KyspIHtcbiAgICAgIHZhciBjaGlsZFZhbGlkYXRpb24gPSB2YWxpZGF0ZShub2RlLmNoaWxkcmVuLCB2YWx1ZVtpZHhdKTtcbiAgICAgIGlmIChpc0ZhaWx1cmUoY2hpbGRWYWxpZGF0aW9uLnZhbGlkYXRpb24pKSB7XG4gICAgICAgIHZhbGlkYXRpb25baWR4XSA9IGNoaWxkVmFsaWRhdGlvbi52YWxpZGF0aW9uO1xuICAgICAgfVxuICAgICAgY2hpbGRyZW5baWR4XSA9IGNoaWxkVmFsaWRhdGlvbi52YWx1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge3ZhbGlkYXRpb246dmFsaWRhdGlvbiwgY2hpbGRyZW46Y2hpbGRyZW59O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BlcnR5KG5vZGUsIHZhbHVlKSB7XG5cbiAgdmFyIGRlc2VyaWFsaXplZCA9IGRlc2VyaWFsaXplT25seShub2RlLCB2YWx1ZSk7XG5cbiAgaWYgKGlzRmFpbHVyZShkZXNlcmlhbGl6ZWQudmFsaWRhdGlvbikpIHtcbiAgICByZXR1cm4gZGVzZXJpYWxpemVkO1xuICB9XG5cbiAgdmFyIHZhbGlkYXRvciA9IGV4aXN0cy5hbmRUaGVuKG5vZGUucHJvcHMudmFsaWRhdGUpO1xuICB2YXIgdmFsaWRhdGlvbiA9IHZhbGlkYXRvcihkZXNlcmlhbGl6ZWQudmFsdWUsIG5vZGUucHJvcHMpO1xuXG4gIHJldHVybiB7XG4gICAgdmFsdWU6IGRlc2VyaWFsaXplZC52YWx1ZSxcbiAgICB2YWxpZGF0aW9uOiB7dmFsaWRhdGlvbjp2YWxpZGF0aW9ufVxuICB9O1xufVxuXG52YXIgc3VjY2VzcyA9IHtcbiAgdmFsaWRhdGlvbjoge30sXG4gIGNoaWxkcmVuOiB7fVxufTtcblxuZnVuY3Rpb24gZmFpbHVyZShmYWlsdXJlKSB7XG4gIHJldHVybiB7dmFsaWRhdGlvbjoge2ZhaWx1cmU6ZmFpbHVyZX19O1xufVxuXG5mdW5jdGlvbiBpc1N1Y2Nlc3ModmFsaWRhdGlvbikge1xuICByZXR1cm4gIWlzRmFpbHVyZSh2YWxpZGF0aW9uKTtcbn1cblxuZnVuY3Rpb24gaXNGYWlsdXJlKHZhbGlkYXRpb24pIHtcbiAgcmV0dXJuIChcbiAgICAodmFsaWRhdGlvbi52YWxpZGF0aW9uICYmIHZhbGlkYXRpb24udmFsaWRhdGlvbi5mYWlsdXJlICE9PSB1bmRlZmluZWQpXG4gICAgfHwgKHZhbGlkYXRpb24uY2hpbGRyZW4gIT09IHVuZGVmaW5lZCAmJiAhYXJlQ2hpbGRyZW5WYWxpZCh2YWxpZGF0aW9uLmNoaWxkcmVuKSlcbiAgKTtcbn1cblxuXG5mdW5jdGlvbiBhcmVDaGlsZHJlblZhbGlkKGNoaWxkcmVuKSB7XG4gIGZvciAodmFyIGsgaW4gY2hpbGRyZW4pIHtcbiAgICBpZiAoaXNGYWlsdXJlKGNoaWxkcmVuW2tdKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdmFsaWRhdGU6dmFsaWRhdGUsIHZhbGlkYXRlT25seTp2YWxpZGF0ZU9ubHksXG4gIHN1Y2Nlc3M6c3VjY2VzcywgZmFpbHVyZTpmYWlsdXJlLFxuICBkZXNlcmlhbGl6ZU9ubHk6ZGVzZXJpYWxpemVPbmx5LCBzZXJpYWxpemU6c2VyaWFsaXplLFxuICBpc1N1Y2Nlc3M6aXNTdWNjZXNzLCBpc0ZhaWx1cmU6aXNGYWlsdXJlXG59O1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyAgICAgICAgID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIG1lc3NhZ2VzICAgICAgPSByZXF1aXJlKCcuL21lc3NhZ2VzJyk7XG5cbnZhciBzdWNjZXNzID0ge2ZhaWx1cmU6IHVuZGVmaW5lZH07XG52YXIgY29tbW9uRmFpbHVyZSA9IHtmYWlsdXJlOiBtZXNzYWdlcy5JTlZBTElEX1ZBTFVFfTtcblxuZnVuY3Rpb24gaXNTdWNjZXNzKHZhbGlkYXRpb24pIHtcbiAgcmV0dXJuIHZhbGlkYXRpb24uZmFpbHVyZSA9PT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBpc0ZhaWx1cmUodmFsaWRhdGlvbikge1xuICByZXR1cm4gdmFsaWRhdGlvbi5mYWlsdXJlICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIG1ha2UoZnVuYykge1xuICB2YXIgd3JhcHBlciA9IGZ1bmN0aW9uKHZhbHVlLCBzY2hlbWEpICB7XG4gICAgdmFyIG1heWJlRmFpbHVyZSA9IGZ1bmModmFsdWUsIHNjaGVtYSk7XG4gICAgaWYgKG1heWJlRmFpbHVyZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgfVxuICAgIGlmIChtYXliZUZhaWx1cmUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gY29tbW9uRmFpbHVyZTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzU3RyaW5nKG1heWJlRmFpbHVyZSkpIHtcbiAgICAgIHJldHVybiB7ZmFpbHVyZTogbWF5YmVGYWlsdXJlfTtcbiAgICB9XG4gICAgcmV0dXJuIG1heWJlRmFpbHVyZTtcbiAgfTtcbiAgd3JhcHBlci5hbmRUaGVuID0gYW5kVGhlbi5iaW5kKG51bGwsIHdyYXBwZXIpO1xuICB3cmFwcGVyLmlzVmFsaWRhdG9yID0gdHJ1ZTtcbiAgcmV0dXJuIHdyYXBwZXI7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRvckVtcHR5KGZ1bmMpIHtcbiAgaWYgKCFmdW5jKSB7XG4gICAgcmV0dXJuIHV0aWxzLmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlO1xuICB9XG4gIGlmIChmdW5jLmlzVmFsaWRhdG9yKSB7XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH1cblxuICByZXR1cm4gbWFrZShmdW5jKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdG9yKGZ1bmMpIHtcbiAgaWYgKCFmdW5jKSB7XG4gICAgcmV0dXJuIHV0aWxzLmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlO1xuICB9XG4gIGlmIChmdW5jLmlzVmFsaWRhdG9yKSB7XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH1cblxuICB2YXIgd3JhcHBlciA9IGZ1bmN0aW9uKHZhbHVlLCBzY2hlbWEpIFxuICAgIHtyZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCA/XG4gICAgICB0cnVlIDpcbiAgICAgIGZ1bmModmFsdWUsIHNjaGVtYSk7fTtcblxuICByZXR1cm4gbWFrZSh3cmFwcGVyKTtcbn1cblxuZnVuY3Rpb24gYW5kVGhlbihmaXJzdCwgc2Vjb25kKSB7XG4gIGlmICghc2Vjb25kKSB7XG4gICAgcmV0dXJuIGZpcnN0O1xuICB9XG5cbiAgc2Vjb25kID0gdmFsaWRhdG9yKHNlY29uZCk7XG5cbiAgdmFyIHdyYXBwZXIgPSBmdW5jdGlvbih2YWx1ZSwgc2NoZW1hKSAge1xuICAgIHZhciB2YWxpZGF0aW9uID0gZmlyc3QodmFsdWUsIHNjaGVtYSk7XG4gICAgcmV0dXJuIGlzRmFpbHVyZSh2YWxpZGF0aW9uKSA/XG4gICAgICB2YWxpZGF0aW9uIDpcbiAgICAgIHNlY29uZCh2YWx1ZSwgc2NoZW1hKTtcbiAgfTtcblxuICByZXR1cm4gbWFrZSh3cmFwcGVyKTtcbn1cblxudmFyIGV4aXN0cyA9IHZhbGlkYXRvckVtcHR5KGZ1bmN0aW9uKHZhbHVlLCBzY2hlbWEpIFxuICB7cmV0dXJuIHNjaGVtYS5yZXF1aXJlZCAmJiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkgP1xuICAgIG1lc3NhZ2VzLlZBTFVFX0lTX1JFUVVJUkVEIDpcbiAgICB0cnVlO30pO1xuXG52YXIgbm9uRW1wdHkgPSB2YWxpZGF0b3IoZnVuY3Rpb24odmFsdWUsIHNjaGVtYSkgXG4gIHtyZXR1cm4gc2NoZW1hLm5vbkVtcHR5ICYmIHZhbHVlLmxlbmd0aCA9PT0gMCA/XG4gICAgbWVzc2FnZXMuQVRfTEVBU1RfT05FX0lURU1fSVNfUkVRVUlSRUQgOlxuICAgIHRydWU7fSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB2YWxpZGF0b3JFbXB0eTp2YWxpZGF0b3JFbXB0eSxcbiAgdmFsaWRhdG9yOnZhbGlkYXRvcixcblxuICBpc1N1Y2Nlc3M6aXNTdWNjZXNzLFxuICBpc0ZhaWx1cmU6aXNGYWlsdXJlLFxuXG4gIHN1Y2Nlc3M6c3VjY2VzcyxcbiAgZXhpc3RzOmV4aXN0cyxcbiAgbm9uRW1wdHk6bm9uRW1wdHlcbn07XG4iXX0=
