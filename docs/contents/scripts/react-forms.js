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

},{"./FieldMixin":3,"./Message":11,"./utils":25,"./validation":26}],3:[function(require,module,exports){
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

},{"./FormElementMixin":8,"./utils":25}],4:[function(require,module,exports){
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
  updateValue: function(serializedValue) {
    this.onValueUpdate(
      this.valueLens().mod(serializedValue).root(),
      this.validationLens().root(),
      this.serializedValueLens().mod(serializedValue).root()
    );
  }

};

module.exports = FormElementMixin;

},{"./ValidatedMixin":14,"./getDefaultValueForSchema":16,"./schema":23,"./utils":25,"./validation":26}],9:[function(require,module,exports){
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

},{"./FormContextMixin":7,"./ValidatedMixin":14,"./getDefaultValueForSchema":16,"./lens":22,"./validation":26}],11:[function(require,module,exports){
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
    var value = this.serializedValueLens().val().slice(0);
    var removed = value.splice(index, 1)[0];

    this.updateValue(value);

    if (this.props.onRemove) {
      this.props.onRemove(removed, index);
    }
  },

  /**
   * Add new value to fieldset's value.
   */
  add: function(value) {
    if (value === undefined) {
      var schema = this.schema();
      value = getDefaultValueForSchema(schema.children);
    }

    this.updateValue(this.valueLens().val().concat(value));

    if (this.props.onAdd) {
      this.props.onAdd(value);
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
  }
};

module.exports = ValidatedMixin;

},{"./validation":26}],15:[function(require,module,exports){
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

},{"./Field":2,"./Fieldset":4,"./RepeatingFieldset":12,"./schema":23,"./utils":25}],16:[function(require,module,exports){
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

},{"./schema":23,"./utils":25}],17:[function(require,module,exports){
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

},{"./schema":23,"./types":24,"./utils":25}],18:[function(require,module,exports){
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
var validation              = require('./validation');
var types                   = require('./types');
var schema                  = require('./schema');
var input                   = require('./input');

module.exports = {
  FormMixin:FormMixin, FormContextMixin:FormContextMixin, FormElementMixin:FormElementMixin,
  FieldMixin:FieldMixin, FieldsetMixin:FieldsetMixin, RepeatingFieldsetMixin:RepeatingFieldsetMixin,

  Form:Form, Field:Field, Fieldset:Fieldset, RepeatingFieldset:RepeatingFieldset,

  FormFor:FormFor, Message:Message,

  schema:schema, types:types, validators:validators, validation:validation, input:input
};

},{"./Field":2,"./FieldMixin":3,"./Fieldset":4,"./FieldsetMixin":5,"./Form":6,"./FormContextMixin":7,"./FormElementMixin":8,"./FormFor":9,"./FormMixin":10,"./Message":11,"./RepeatingFieldset":12,"./RepeatingFieldsetMixin":13,"./input":21,"./schema":23,"./types":24,"./validation":26,"./validators":27}],19:[function(require,module,exports){
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

},{"./utils":25}],24:[function(require,module,exports){
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

},{}],25:[function(require,module,exports){
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

},{}],26:[function(require,module,exports){
/**
 * Schema validation
 *
 * @jsx React.DOM
 */
'use strict';

var utils             = require('./utils');
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

  var validator = exists.andThen(node.props.validate);
  var validation = validator(value, node.props);

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
      var childValidation = validate(node.children[name], value[name]);

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

},{"./getTypeFromSchema":17,"./schema":23,"./utils":25,"./validators":27}],27:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var utils         = require('./utils');

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

},{"./utils":25}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvYW5kcmV5cG9wcC8udmlydHVhbGVudnMvZGVmYXVsdC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYW5kcmV5cG9wcC9Xb3Jrc3BhY2UvcHJvbWV0aGV1cy9yZWFjdC1mb3Jtcy9zdGFuZGFsb25lL2luZGV4LmpzIiwiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL3Byb21ldGhldXMvcmVhY3QtZm9ybXMvc3RhbmRhbG9uZS9saWIvRmllbGQuanMiLCIvVXNlcnMvYW5kcmV5cG9wcC9Xb3Jrc3BhY2UvcHJvbWV0aGV1cy9yZWFjdC1mb3Jtcy9zdGFuZGFsb25lL2xpYi9GaWVsZE1peGluLmpzIiwiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL3Byb21ldGhldXMvcmVhY3QtZm9ybXMvc3RhbmRhbG9uZS9saWIvRmllbGRzZXQuanMiLCIvVXNlcnMvYW5kcmV5cG9wcC9Xb3Jrc3BhY2UvcHJvbWV0aGV1cy9yZWFjdC1mb3Jtcy9zdGFuZGFsb25lL2xpYi9GaWVsZHNldE1peGluLmpzIiwiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL3Byb21ldGhldXMvcmVhY3QtZm9ybXMvc3RhbmRhbG9uZS9saWIvRm9ybS5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvbGliL0Zvcm1Db250ZXh0TWl4aW4uanMiLCIvVXNlcnMvYW5kcmV5cG9wcC9Xb3Jrc3BhY2UvcHJvbWV0aGV1cy9yZWFjdC1mb3Jtcy9zdGFuZGFsb25lL2xpYi9Gb3JtRWxlbWVudE1peGluLmpzIiwiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL3Byb21ldGhldXMvcmVhY3QtZm9ybXMvc3RhbmRhbG9uZS9saWIvRm9ybUZvci5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvbGliL0Zvcm1NaXhpbi5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvbGliL01lc3NhZ2UuanMiLCIvVXNlcnMvYW5kcmV5cG9wcC9Xb3Jrc3BhY2UvcHJvbWV0aGV1cy9yZWFjdC1mb3Jtcy9zdGFuZGFsb25lL2xpYi9SZXBlYXRpbmdGaWVsZHNldC5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvbGliL1JlcGVhdGluZ0ZpZWxkc2V0TWl4aW4uanMiLCIvVXNlcnMvYW5kcmV5cG9wcC9Xb3Jrc3BhY2UvcHJvbWV0aGV1cy9yZWFjdC1mb3Jtcy9zdGFuZGFsb25lL2xpYi9WYWxpZGF0ZWRNaXhpbi5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvbGliL2NyZWF0ZUNvbXBvbmVudEZyb21TY2hlbWEuanMiLCIvVXNlcnMvYW5kcmV5cG9wcC9Xb3Jrc3BhY2UvcHJvbWV0aGV1cy9yZWFjdC1mb3Jtcy9zdGFuZGFsb25lL2xpYi9nZXREZWZhdWx0VmFsdWVGb3JTY2hlbWEuanMiLCIvVXNlcnMvYW5kcmV5cG9wcC9Xb3Jrc3BhY2UvcHJvbWV0aGV1cy9yZWFjdC1mb3Jtcy9zdGFuZGFsb25lL2xpYi9nZXRUeXBlRnJvbVNjaGVtYS5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvbGliL2luZGV4LmpzIiwiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL3Byb21ldGhldXMvcmVhY3QtZm9ybXMvc3RhbmRhbG9uZS9saWIvaW5wdXQvQ2hlY2tib3hHcm91cC5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvbGliL2lucHV0L1JhZGlvQnV0dG9uR3JvdXAuanMiLCIvVXNlcnMvYW5kcmV5cG9wcC9Xb3Jrc3BhY2UvcHJvbWV0aGV1cy9yZWFjdC1mb3Jtcy9zdGFuZGFsb25lL2xpYi9pbnB1dC9pbmRleC5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvbGliL2xlbnMuanMiLCIvVXNlcnMvYW5kcmV5cG9wcC9Xb3Jrc3BhY2UvcHJvbWV0aGV1cy9yZWFjdC1mb3Jtcy9zdGFuZGFsb25lL2xpYi9zY2hlbWEuanMiLCIvVXNlcnMvYW5kcmV5cG9wcC9Xb3Jrc3BhY2UvcHJvbWV0aGV1cy9yZWFjdC1mb3Jtcy9zdGFuZGFsb25lL2xpYi90eXBlcy5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvbGliL3V0aWxzLmpzIiwiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL3Byb21ldGhldXMvcmVhY3QtZm9ybXMvc3RhbmRhbG9uZS9saWIvdmFsaWRhdGlvbi5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvbGliL3ZhbGlkYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFsncmVhY3QnXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSB7XG4gICAgcm9vdC5SZWFjdEZvcm1zID0gZmFjdG9yeShyb290LlJlYWN0KTtcbiAgfVxufSkod2luZG93LCBmdW5jdGlvbihSZWFjdCkge1xuICByZXR1cm4gcmVxdWlyZSgnLi9saWIvJyk7XG59KTtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgICAgICAgICAgID0gKHdpbmRvdy5SZWFjdCk7XG52YXIgY3ggICAgICAgICAgICAgID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0O1xudmFyIG1lcmdlSW50byAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMnKS5tZXJnZUludG87XG52YXIgRmllbGRNaXhpbiAgICAgID0gcmVxdWlyZSgnLi9GaWVsZE1peGluJyk7XG52YXIgTWVzc2FnZSAgICAgICAgID0gcmVxdWlyZSgnLi9NZXNzYWdlJyk7XG52YXIgaXNGYWlsdXJlICAgICAgID0gcmVxdWlyZSgnLi92YWxpZGF0aW9uJykuaXNGYWlsdXJlO1xuXG52YXIgRmllbGQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdGaWVsZCcsXG4gIG1peGluczogW0ZpZWxkTWl4aW5dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGxhYmVsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG4gIH0sXG5cbiAgcmVuZGVyTGFiZWw6IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgdmFyIHNjaGVtYSA9IHRoaXMuc2NoZW1hKCk7XG4gICAgdmFyIGxhYmVsID0gdGhpcy5wcm9wcy5sYWJlbCA/IHRoaXMucHJvcHMubGFiZWwgOiBzY2hlbWEucHJvcHMubGFiZWw7XG4gICAgdmFyIGhpbnQgPSB0aGlzLnByb3BzLmhpbnQgPyB0aGlzLnByb3BzLmhpbnQgOiBzY2hlbWEucHJvcHMuaGludDtcbiAgICB2YXIgbGFiZWxQcm9wcyA9IHtjbGFzc05hbWU6ICdyZWFjdC1mb3Jtcy1sYWJlbCd9O1xuICAgIGlmIChwcm9wcykge1xuICAgICAgbWVyZ2VJbnRvKGxhYmVsUHJvcHMsIHByb3BzKTtcbiAgICB9XG4gICAgcmV0dXJuIChsYWJlbCB8fCBoaW50KSAmJiBSZWFjdC5ET00ubGFiZWwobGFiZWxQcm9wcyxcbiAgICAgIGxhYmVsLFxuICAgICAgaGludCAmJiBSZWFjdC5ET00uc3Bhbigge2NsYXNzTmFtZTpcInJlYWN0LWZvcm1zLWhpbnRcIn0sIGhpbnQpKTtcbiAgfSxcblxuICBvbkJsdXI6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzZXJpYWxpemVkVmFsdWVMZW5zID0gdGhpcy5zZXJpYWxpemVkVmFsdWVMZW5zKCk7XG4gICAgaWYgKHNlcmlhbGl6ZWRWYWx1ZUxlbnMuaXNVbmRlZmluZWQoKSkge1xuICAgICAgdGhpcy51cGRhdGVWYWx1ZShzZXJpYWxpemVkVmFsdWVMZW5zLnZhbCgpKTtcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2VyaWFsaXplZFZhbHVlTGVucyA9IHRoaXMuc2VyaWFsaXplZFZhbHVlTGVucygpO1xuICAgIHZhciB2YWxpZGF0aW9uID0gdGhpcy52YWxpZGF0aW9uTGVucygpLnZhbCgpO1xuICAgIHZhciBleHRlcm5hbFZhbGlkYXRpb24gPSB0aGlzLmV4dGVybmFsVmFsaWRhdGlvbigpO1xuXG4gICAgdmFyIGNsYXNzTmFtZSA9IGN4KHtcbiAgICAgICdyZWFjdC1mb3Jtcy1maWVsZCc6IHRydWUsXG4gICAgICAnaW52YWxpZCc6IGlzRmFpbHVyZSh2YWxpZGF0aW9uKVxuICAgIH0pO1xuXG4gICAgdmFyIGlkID0gdGhpcy5fcm9vdE5vZGVJRDtcblxuICAgIHZhciBpbnB1dCA9IHRoaXMucmVuZGVySW5wdXRDb21wb25lbnQoe2lkOmlkLCBvbkJsdXI6IHRoaXMub25CbHVyfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuRE9NLmRpdigge2NsYXNzTmFtZTpjbGFzc05hbWV9LCBcbiAgICAgICAgdGhpcy5yZW5kZXJMYWJlbCh7aHRtbEZvcjogaWR9KSxcbiAgICAgICAgdGhpcy50cmFuc2ZlclByb3BzVG8oaW5wdXQpLFxuICAgICAgICBpc0ZhaWx1cmUoZXh0ZXJuYWxWYWxpZGF0aW9uKSAmJlxuICAgICAgICAgIE1lc3NhZ2UobnVsbCwgZXh0ZXJuYWxWYWxpZGF0aW9uLnZhbGlkYXRpb24uZmFpbHVyZSksXG4gICAgICAgIGlzRmFpbHVyZSh2YWxpZGF0aW9uKSAmJiAhc2VyaWFsaXplZFZhbHVlTGVucy5pc1VuZGVmaW5lZCgpICYmXG4gICAgICAgICAgTWVzc2FnZShudWxsLCB2YWxpZGF0aW9uLnZhbGlkYXRpb24uZmFpbHVyZSlcbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGaWVsZDtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgICAgICAgICAgICAgPSAod2luZG93LlJlYWN0KTtcbnZhciBjbG9uZVdpdGhQcm9wcyAgICA9IFJlYWN0LmFkZG9ucy5jbG9uZVdpdGhQcm9wcztcbnZhciBtZXJnZUludG8gICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMnKS5tZXJnZUludG87XG52YXIgRm9ybUVsZW1lbnRNaXhpbiAgPSByZXF1aXJlKCcuL0Zvcm1FbGVtZW50TWl4aW4nKTtcblxuLyoqXG4gKiBNaXhpbiBmb3IgaW1wbGVtZW50aW5nIGZpZWxkY29tcG9uZW50cy5cbiAqXG4gKiBTZWUgPEZpZWxkIC8+IGNvbXBvbmVudCBmb3IgdGhlIGJhc2ljIGltcGxlbWVudGF0aW9uIGV4YW1wbGUuXG4gKi9cbnZhciBGaWVsZE1peGluID0ge1xuICBtaXhpbnM6IFtGb3JtRWxlbWVudE1peGluXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBpbnB1dDogUmVhY3QuUHJvcFR5cGVzLmNvbXBvbmVudFxuICB9LFxuXG4gIG9uQ2hhbmdlOiBmdW5jdGlvbihlKSB7XG4gICAgaWYgKGUuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZSA9IGdldFZhbHVlRnJvbUV2ZW50KGUpO1xuXG4gICAgdGhpcy51cGRhdGVWYWx1ZSh2YWx1ZSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlbmRlciBpbnB1dCBjb21wb25lbnQuXG4gICAqXG4gICAqIEByZXR1cm5zIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIHJlbmRlcklucHV0Q29tcG9uZW50OiBmdW5jdGlvbihwcm9wcykge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuc2VyaWFsaXplZFZhbHVlTGVucygpLnZhbCgpO1xuICAgIHZhciBzY2hlbWEgPSB0aGlzLnNjaGVtYSgpO1xuXG4gICAgdmFyIGlucHV0ID0gdGhpcy5wcm9wcy5pbnB1dCB8fCBzY2hlbWEgJiYgc2NoZW1hLnByb3BzLmlucHV0O1xuICAgIHZhciBpbnB1dFByb3BzID0ge3ZhbHVlOnZhbHVlLCBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZX07XG5cbiAgICBpZiAocHJvcHMpIHtcbiAgICAgIG1lcmdlSW50byhpbnB1dFByb3BzLCBwcm9wcyk7XG4gICAgfVxuXG4gICAgaWYgKGlucHV0KSB7XG4gICAgICByZXR1cm4gY2xvbmVXaXRoUHJvcHMoaW5wdXQsIGlucHV0UHJvcHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dFByb3BzLnR5cGUgPSAndGV4dCc7XG4gICAgICByZXR1cm4gUmVhY3QuRE9NLmlucHV0KGlucHV0UHJvcHMpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBFeHRyYWN0IHZhbHVlIGZyb20gZXZlbnRcbiAqXG4gKiBXZSBzdXBwb3J0IGJvdGggUmVhY3QuRE9NICdjaGFuZ2UnIGV2ZW50cyBhbmQgY3VzdG9tIGNoYW5nZSBldmVudHNcbiAqIGVtaXR0ZWQgZnJvbSBjdXN0b20gY29tcG9uZW50cy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGFsc28gbm9ybWFsaXplcyBlbXB0eSBzdHJpbmdzIHRvIG51bGwuXG4gKlxuICogQHBhcmFtIHtFdmVudH0gZVxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZUZyb21FdmVudChlKSB7XG4gIHJldHVybiBlICYmIGUudGFyZ2V0ICYmIGUudGFyZ2V0LnZhbHVlICE9PSB1bmRlZmluZWQgP1xuICAgIGUudGFyZ2V0LnZhbHVlIDogZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGaWVsZE1peGluO1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCAgICAgICAgID0gKHdpbmRvdy5SZWFjdCk7XG52YXIgRmllbGRzZXRNaXhpbiA9IHJlcXVpcmUoJy4vRmllbGRzZXRNaXhpbicpO1xuXG52YXIgRmllbGRzZXQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdGaWVsZHNldCcsXG4gIG1peGluczogW0ZpZWxkc2V0TWl4aW5dLFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjaGVtYSA9IHRoaXMuc2NoZW1hKCk7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmZXJQcm9wc1RvKFxuICAgICAgUmVhY3QuRE9NLmRpdigge2NsYXNzTmFtZTpcInJlYWN0LWZvcm1zLWZpZWxkc2V0XCJ9LCBcbiAgICAgICAgc2NoZW1hLnByb3BzLmxhYmVsICYmIFJlYWN0LkRPTS5oNChudWxsLCBzY2hlbWEucHJvcHMubGFiZWwpLFxuICAgICAgICBzY2hlbWEubWFwKHRoaXMucmVuZGVyRmllbGQpXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRmllbGRzZXQ7XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIEZvcm1FbGVtZW50TWl4aW4gID0gcmVxdWlyZSgnLi9Gb3JtRWxlbWVudE1peGluJyk7XG52YXIgRm9ybUNvbnRleHRNaXhpbiAgPSByZXF1aXJlKCcuL0Zvcm1Db250ZXh0TWl4aW4nKTtcblxuLyoqXG4gKiBNaXhpbiBmb3IgaW1wbGVtZW50aW5nIGZpZWxkY29tcG9uZW50cy5cbiAqXG4gKiBTZWUgPEZpZWxkc2V0IC8+IGNvbXBvbmVudCBmb3IgdGhlIGJhc2ljIGltcGxlbWVudGF0aW9uIGV4YW1wbGUuXG4gKi9cbnZhciBGaWVsZHNldE1peGluID0ge1xuICBtaXhpbnM6IFtGb3JtRWxlbWVudE1peGluLCBGb3JtQ29udGV4dE1peGluXSxcblxuICAvKipcbiAgICogUmVuZGVyIGZpZWxkIGdpdmVuIGEgc2NoZW1hIG5vZGVcbiAgICpcbiAgICogQHBhcmFtIHtTY2hlbWF9IG5vZGVcbiAgICogQHJldHVybnMge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgcmVuZGVyRmllbGQ6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAvLyBwcmV2ZW50IGNpcmN1bGFyIHJlcXVpcmVcbiAgICB2YXIgY3JlYXRlQ29tcG9uZW50RnJvbVNjaGVtYSA9IHJlcXVpcmUoJy4vY3JlYXRlQ29tcG9uZW50RnJvbVNjaGVtYScpO1xuICAgIHJldHVybiBjcmVhdGVDb21wb25lbnRGcm9tU2NoZW1hKG5vZGUpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZpZWxkc2V0TWl4aW47XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ICAgICA9ICh3aW5kb3cuUmVhY3QpO1xudmFyIEZvcm1NaXhpbiA9IHJlcXVpcmUoJy4vRm9ybU1peGluJyk7XG52YXIgRm9ybUZvciAgID0gcmVxdWlyZSgnLi9Gb3JtRm9yJyk7XG5cbnZhciBGb3JtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiAnRm9ybScsXG4gIG1peGluczogW0Zvcm1NaXhpbl0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2ZlclByb3BzVG8oXG4gICAgICBSZWFjdC5ET00uZm9ybShudWxsLCBcbiAgICAgICAgRm9ybUZvcihudWxsIClcbiAgICAgIClcbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtO1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9ICh3aW5kb3cuUmVhY3QpO1xuXG4vKipcbiAqIE1peGluIGZvciBjb21wb25lbnRzIHdoaWNoIGV4cG9zZXMgZm9ybSBjb250ZXh0LlxuICpcbiAqIFNlZSBGb3JtICh2aWEgRm9ybU1peGluKSwgRmllbGRzZXQgKHZpYSBGaWVsZHNldE1peGluKSBhbmQgUmVwZWF0aW5nRmllbGRzZXRcbiAqICh2aWEgUmVwZWF0aW5nRmllbGRzZXRNaXhpbikgZm9yIGNvbXBvbmVudHMgd2hpY2ggZXhwb3NlIGZvcm0gY29udGV4dC5cbiAqL1xudmFyIEZvcm1Db250ZXh0TWl4aW4gPSB7XG5cbiAgY2hpbGRDb250ZXh0VHlwZXM6IHtcbiAgICBzZXJpYWxpemVkVmFsdWVMZW5zOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIHZhbHVlTGVuczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICB2YWxpZGF0aW9uTGVuczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBleHRlcm5hbFZhbGlkYXRpb246IFJlYWN0LlByb3BUeXBlcy5hbnksXG4gICAgc2NoZW1hOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIG9uVmFsdWVVcGRhdGU6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG4gIH0sXG5cbiAgZ2V0Q2hpbGRDb250ZXh0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2VyaWFsaXplZFZhbHVlTGVuczogdGhpcy5zZXJpYWxpemVkVmFsdWVMZW5zKCksXG4gICAgICB2YWx1ZUxlbnM6IHRoaXMudmFsdWVMZW5zKCksXG4gICAgICB2YWxpZGF0aW9uTGVuczogdGhpcy52YWxpZGF0aW9uTGVucygpLFxuICAgICAgZXh0ZXJuYWxWYWxpZGF0aW9uOiB0aGlzLmV4dGVybmFsVmFsaWRhdGlvbigpLFxuICAgICAgc2NoZW1hOiB0aGlzLnNjaGVtYSgpLFxuICAgICAgb25WYWx1ZVVwZGF0ZTogdGhpcy5vblZhbHVlVXBkYXRlXG4gICAgfTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtQ29udGV4dE1peGluO1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCAgICAgICAgICAgICAgICAgICAgID0gKHdpbmRvdy5SZWFjdCk7XG52YXIgdXRpbHMgICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBzY2hlbWEgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9zY2hlbWEnKTtcbnZhciBWYWxpZGF0ZWRNaXhpbiAgICAgICAgICAgID0gcmVxdWlyZSgnLi9WYWxpZGF0ZWRNaXhpbicpO1xudmFyIGdldERlZmF1bHRWYWx1ZUZvclNjaGVtYSAgPSByZXF1aXJlKCcuL2dldERlZmF1bHRWYWx1ZUZvclNjaGVtYScpO1xudmFyIHZhbGlkYXRpb25NICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3ZhbGlkYXRpb24nKTtcblxudmFyIHN1Y2Nlc3MgPSB2YWxpZGF0aW9uTS5zdWNjZXNzO1xudmFyIHNlcmlhbGl6ZSA9IHZhbGlkYXRpb25NLnNlcmlhbGl6ZTtcbnZhciBpc0ZhaWx1cmUgPSB2YWxpZGF0aW9uTS5pc0ZhaWx1cmU7XG5cbi8qKlxuICogTWl4aW4gZm9yIHRoZSBmb3JtIGVsZW1lbnQgKGZvcm0gZmllbGQsIGZpZWxkc2V0IG9mIHJlcGVhdGluZyBmaWVsZHNldCkuXG4gKi9cbnZhciBGb3JtRWxlbWVudE1peGluID0ge1xuXG4gIG1peGluczogW1ZhbGlkYXRlZE1peGluXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBuYW1lOiBSZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyXG4gICAgXSlcbiAgfSxcblxuICBjb250ZXh0VHlwZXM6IHtcbiAgICBzZXJpYWxpemVkVmFsdWVMZW5zOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIHZhbHVlTGVuczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICB2YWxpZGF0aW9uTGVuczogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBleHRlcm5hbFZhbGlkYXRpb246IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgc2NoZW1hOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIG9uVmFsdWVVcGRhdGU6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybiBsZW5zIGZvciB0aGUgZm9ybSBlbGVtZW50IHZhbHVlIG9yIGZvciB0aGUgdmFsdWUgcGFzc2VkIGFzIGFuXG4gICAqIGFyZ3VtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0FueT99IHZhbHVlXG4gICAqIEByZXR1cm5zIHtMZW5zfVxuICAgKi9cbiAgc2VyaWFsaXplZFZhbHVlTGVuczogZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgbGVucyA9IHRoaXMuY29udGV4dC5zZXJpYWxpemVkVmFsdWVMZW5zO1xuICAgIGlmICh0aGlzLnByb3BzLm5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbGVucyA9IGxlbnMuZ2V0KFxuICAgICAgICB0aGlzLnByb3BzLm5hbWUsXG4gICAgICAgIHNlcmlhbGl6ZSh0aGlzLnNjaGVtYSgpLCB0aGlzLnZhbHVlTGVucygpLnZhbCgpKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlID8gbGVucy5mb3IodmFsdWUpIDogbGVucztcbiAgfSxcblxuICB2YWx1ZUxlbnM6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIGxlbnMgPSB0aGlzLmNvbnRleHQudmFsdWVMZW5zO1xuICAgIGlmICh0aGlzLnByb3BzLm5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbGVucyA9IGxlbnMuZ2V0KHRoaXMucHJvcHMubmFtZSwgZ2V0RGVmYXVsdFZhbHVlRm9yU2NoZW1hKHRoaXMuc2NoZW1hKCkpKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlID8gbGVucy5mb3IodmFsdWUpIDogbGVucztcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJuIGxlbnMgZm9yIHRoZSBmb3JtIGVsZW1lbnQgdmFsaWRhdGlvbiBzdGF0ZSBvciBmb3IgdGhlIHZhbGlkYXRpb25cbiAgICogc3RhdGUgcGFzc2VkIGFzIGFuIGFyZ3VtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge1ZhbGlkYXRpb24/fSB2YWxpZGF0aW9uXG4gICAqIEByZXR1cm5zIHtMZW5zfVxuICAgKi9cbiAgdmFsaWRhdGlvbkxlbnM6IGZ1bmN0aW9uKHZhbGlkYXRpb24pIHtcbiAgICB2YXIgbGVucyA9IHRoaXMuY29udGV4dC52YWxpZGF0aW9uTGVucztcbiAgICBpZiAodGhpcy5wcm9wcy5uYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGxlbnMgPSBsZW5zLmdldCgnY2hpbGRyZW4nLCB7fSkuZ2V0KHRoaXMucHJvcHMubmFtZSwgc3VjY2Vzcyk7XG4gICAgfVxuICAgIHJldHVybiB2YWxpZGF0aW9uID8gbGVucy5mb3IodmFsaWRhdGlvbikgOiBsZW5zO1xuICB9LFxuXG4gIGV4dGVybmFsVmFsaWRhdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGV4dGVybmFsVmFsaWRhdGlvbiA9IHRoaXMuY29udGV4dC5leHRlcm5hbFZhbGlkYXRpb247XG4gICAgaWYgKHRoaXMucHJvcHMubmFtZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgIGV4dGVybmFsVmFsaWRhdGlvbiAmJlxuICAgICAgICBleHRlcm5hbFZhbGlkYXRpb24uY2hpbGRyZW4pIHtcbiAgICAgIHJldHVybiBleHRlcm5hbFZhbGlkYXRpb24uY2hpbGRyZW5bdGhpcy5wcm9wcy5uYW1lXSB8fCBzdWNjZXNzO1xuICAgIH1cbiAgICByZXR1cm4gZXh0ZXJuYWxWYWxpZGF0aW9uIHx8IHN1Y2Nlc3M7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybiBmb3JtIGVsZW1lbnQgc2NoZW1hLlxuICAgKlxuICAgKiBAcmV0dXJucyB7U2NoZW1hfVxuICAgKi9cbiAgc2NoZW1hOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMuY29udGV4dC5zY2hlbWE7XG5cbiAgICBpZiAobm9kZSAmJiB0aGlzLnByb3BzLm5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHNjaGVtYS5pc1NjaGVtYShub2RlKSkge1xuICAgICAgICBub2RlID0gbm9kZS5jaGlsZHJlblt0aGlzLnByb3BzLm5hbWVdO1xuICAgICAgfSBlbHNlIGlmIChzY2hlbWEuaXNMaXN0KG5vZGUpKSB7XG4gICAgICAgIG5vZGUgPSBub2RlLmNoaWxkcmVuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXRpbHMuaW52YXJpYW50KGZhbHNlLCAnaW52YWxpZCBmaWVsZCB1c2VkIGZvciBzY2hlbWEnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfSxcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIGZvcm0gdmFsdWUgYW5kIHZhbGlkYXRpb24gc3RhdGUgaXMgYmVpbmcgdXBkYXRlZC5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgaW50ZXJjZXB0cyB1cGRhdGVkIHZhbHVlIGFuZCB2YWxpZGF0aW9uIHN0YXRlIGFuZCBwZXJmb3JtIGl0c1xuICAgKiBvd24gbG9jYWwgdmFsaWRhdGlvbiBhbmQgZGVzZXJpYWxpemF0aW9uLiBUaGVuIHBhc3NlcyBldmVyeXRoaW5nIHVwIHRoZVxuICAgKiBvd25lci5cbiAgICpcbiAgICogQHBhcmFtIHtBbnl9IHZhbHVlXG4gICAqIEBwYXJhbSB7VmFsaWRhdGlvbn0gdmFsaWRhdGlvblxuICAgKi9cbiAgb25WYWx1ZVVwZGF0ZTogZnVuY3Rpb24odmFsdWUsIHZhbGlkYXRpb24sIHNlcmlhbGl6ZWRWYWx1ZSkge1xuICAgIHZhciB2YWxpZGF0aW9uTGVucyA9IHRoaXMudmFsaWRhdGlvbkxlbnModmFsaWRhdGlvbik7XG4gICAgdmFyIHZhbHVlTGVucyA9IHRoaXMudmFsdWVMZW5zKHZhbHVlKTtcblxuICAgIHZhciBsb2NhbCA9IHRoaXMudmFsaWRhdGVPbmx5KFxuICAgICAgdmFsdWVMZW5zLnZhbCgpLFxuICAgICAgdmFsaWRhdGlvbkxlbnMudmFsKCkuY2hpbGRyZW5cbiAgICApO1xuXG4gICAgdmFsaWRhdGlvbkxlbnMgPSB2YWxpZGF0aW9uTGVucy51cGRhdGUobG9jYWwudmFsaWRhdGlvbik7XG5cbiAgICBpZiAoaXNGYWlsdXJlKHZhbGlkYXRpb25MZW5zLnZhbCgpKSkge1xuICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBwcmV2aW91cyB2YWx1ZVxuICAgICAgdmFsdWVMZW5zID0gdGhpcy52YWx1ZUxlbnMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWVMZW5zID0gdmFsdWVMZW5zLm1vZChsb2NhbC52YWx1ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5jb250ZXh0Lm9uVmFsdWVVcGRhdGUoXG4gICAgICB2YWx1ZUxlbnMucm9vdCgpLFxuICAgICAgdmFsaWRhdGlvbkxlbnMucm9vdCgpLFxuICAgICAgc2VyaWFsaXplZFZhbHVlXG4gICAgKTtcbiAgfSxcblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBzZXJpYWxpemVkIHZhbHVlIGZvciB0aGUgY3VycmVudCBmb3JtIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7QW55fSBzZXJpYWxpemVkVmFsdWVcbiAgICovXG4gIHVwZGF0ZVZhbHVlOiBmdW5jdGlvbihzZXJpYWxpemVkVmFsdWUpIHtcbiAgICB0aGlzLm9uVmFsdWVVcGRhdGUoXG4gICAgICB0aGlzLnZhbHVlTGVucygpLm1vZChzZXJpYWxpemVkVmFsdWUpLnJvb3QoKSxcbiAgICAgIHRoaXMudmFsaWRhdGlvbkxlbnMoKS5yb290KCksXG4gICAgICB0aGlzLnNlcmlhbGl6ZWRWYWx1ZUxlbnMoKS5tb2Qoc2VyaWFsaXplZFZhbHVlKS5yb290KClcbiAgICApO1xuICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRm9ybUVsZW1lbnRNaXhpbjtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgICAgICAgICAgICAgICAgICAgICA9ICh3aW5kb3cuUmVhY3QpO1xudmFyIEZvcm1FbGVtZW50TWl4aW4gICAgICAgICAgPSByZXF1aXJlKCcuL0Zvcm1FbGVtZW50TWl4aW4nKTtcbnZhciBjcmVhdGVDb21wb25lbnRGcm9tU2NoZW1hID0gcmVxdWlyZSgnLi9jcmVhdGVDb21wb25lbnRGcm9tU2NoZW1hJyk7XG5cbi8qKlxuICogQSBcInByb3h5XCIgY29tcG9uZW50IHdoaWNoIHJlbmRlcnMgaW50byBmaWVsZCwgZmllbGRzZXQgb3IgcmVwZWF0aW5nIGZpZWxkc2V0XG4gKiBiYXNlZCBvbiBhIGN1cnJlbnQgc2NoZW1hIG5vZGUuXG4gKi9cbnZhciBGb3JtRm9yID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiAnRm9ybUZvcicsXG4gIG1peGluczogW0Zvcm1FbGVtZW50TWl4aW5dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIG5hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZmVyUHJvcHNUbyhjcmVhdGVDb21wb25lbnRGcm9tU2NoZW1hKHRoaXMuc2NoZW1hKCkpKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRm9ybUZvcjtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgICAgICAgICAgICAgICAgICAgICA9ICh3aW5kb3cuUmVhY3QpO1xudmFyIGxlbnMgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL2xlbnMnKTtcbnZhciBWYWxpZGF0ZWRNaXhpbiAgICAgICAgICAgID0gcmVxdWlyZSgnLi9WYWxpZGF0ZWRNaXhpbicpO1xudmFyIEZvcm1Db250ZXh0TWl4aW4gICAgICAgICAgPSByZXF1aXJlKCcuL0Zvcm1Db250ZXh0TWl4aW4nKTtcbnZhciBnZXREZWZhdWx0VmFsdWVGb3JTY2hlbWEgID0gcmVxdWlyZSgnLi9nZXREZWZhdWx0VmFsdWVGb3JTY2hlbWEnKTtcbnZhciB2YWxpZGF0aW9uTSAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi92YWxpZGF0aW9uJyk7XG5cbnZhciBzZXJpYWxpemUgPSB2YWxpZGF0aW9uTS5zZXJpYWxpemU7XG52YXIgc3VjY2VzcyA9IHZhbGlkYXRpb25NLnN1Y2Nlc3M7XG52YXIgaXNTdWNjZXNzID0gdmFsaWRhdGlvbk0uaXNTdWNjZXNzO1xuXG4vKipcbiAqIE1peGluIHdoaWNoIGhhbmRsZXMgZm9ybSB2YWx1ZSBhbmQgZm9ybSB2YWxpZGF0aW9uIHN0YXRlLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbnZhciBGb3JtU3RhdGVNaXhpbiA9IHtcbiAgbWl4aW5zOiBbVmFsaWRhdGVkTWl4aW5dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGRlZmF1bHRWYWx1ZTogUmVhY3QuUHJvcFR5cGVzLmFueSxcbiAgICB2YWx1ZTogUmVhY3QuUHJvcFR5cGVzLmFueSxcbiAgICBzZXJpYWxpemVkVmFsdWU6IFJlYWN0LlByb3BUeXBlcy5hbnksXG4gICAgdmFsaWRhdGlvbjogUmVhY3QuUHJvcFR5cGVzLmFueSxcbiAgICBleHRlcm5hbFZhbGlkYXRpb246IFJlYWN0LlByb3BUeXBlcy5hbnksXG4gICAgc2NoZW1hOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIG9uQ2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvblVwZGF0ZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvcHMudmFsdWUgfHxcbiAgICAgIHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlIHx8XG4gICAgICBnZXREZWZhdWx0VmFsdWVGb3JTY2hlbWEodGhpcy5wcm9wcy5zY2hlbWEpO1xuICAgIHZhciBzdGF0ZSA9IHRoaXMuZ2V0Rm9ybVN0YXRlKHZhbHVlKTtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24obmV4dFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgbmV4dFN0YXRlO1xuICAgICAgaWYgKG5leHRQcm9wcy52YWxpZGF0aW9uICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICBuZXh0UHJvcHMuc2VyaWFsaXplZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbmV4dFN0YXRlID0ge1xuICAgICAgICAgIHNlcmlhbGl6ZWRWYWx1ZTogbmV4dFByb3BzLnNlcmlhbGl6ZWRWYWx1ZSxcbiAgICAgICAgICB2YWxpZGF0aW9uOiBuZXh0UHJvcHMudmFsaWRhdGlvbixcbiAgICAgICAgICB2YWx1ZTogbmV4dFByb3BzLnZhbHVlXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0U3RhdGUgPSB0aGlzLmdldEZvcm1TdGF0ZShuZXh0UHJvcHMudmFsdWUpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUpO1xuICAgIH1cbiAgfSxcblxuICBnZXRGb3JtU3RhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHZhbGlkYXRpb24gPSB0aGlzLnZhbGlkYXRlKHZhbHVlKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbGlkYXRpb24udmFsdWUsXG4gICAgICB2YWxpZGF0aW9uOiB2YWxpZGF0aW9uLnZhbGlkYXRpb24sXG4gICAgICBzZXJpYWxpemVkVmFsdWU6IHNlcmlhbGl6ZSh0aGlzLnNjaGVtYSgpLCB2YWxpZGF0aW9uLnZhbHVlKVxuICAgIH07XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybiBsZW5zIGZvciB0aGUgZm9ybSB2YWx1ZSBvciBmb3IgdGhlIHZhbHVlIHBhc3NlZCBhcyBhbiBhcmd1bWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtBbnk/fSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7TGVuc31cbiAgICovXG4gIHNlcmlhbGl6ZWRWYWx1ZUxlbnM6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGxlbnModmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDogdGhpcy5zdGF0ZS5zZXJpYWxpemVkVmFsdWUpO1xuICB9LFxuXG4gIHZhbHVlTGVuczogZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gbGVucyh2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB0aGlzLnN0YXRlLnZhbHVlKTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJuIGxlbnMgZm9yIHRoZSBmb3JtIHZhbGlkYXRpb24gc3RhdGUgb3IgZm9yIHRoZSB2YWxpZGF0aW9uIHN0YXRlXG4gICAqIHBhc3NlZCBhcyBhbiBhcmd1bWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtWYWxpZGF0aW9uP30gdmFsaWRhdGlvblxuICAgKiBAcmV0dXJucyB7TGVuc31cbiAgICovXG4gIHZhbGlkYXRpb25MZW5zOiBmdW5jdGlvbih2YWxpZGF0aW9uKSB7XG4gICAgcmV0dXJuIGxlbnModmFsaWRhdGlvbiAhPT0gdW5kZWZpbmVkID8gdmFsaWRhdGlvbiA6IHRoaXMuc3RhdGUudmFsaWRhdGlvbik7XG4gIH0sXG5cbiAgZXh0ZXJuYWxWYWxpZGF0aW9uOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5leHRlcm5hbFZhbGlkYXRpb24gfHwgc3VjY2VzcztcbiAgfSxcblxuICAvKipcbiAgICogRm9ybSBzY2hlbWEuXG4gICAqXG4gICAqIEByZXR1cm5zIHtTY2hlbWF9XG4gICAqL1xuICBzY2hlbWE6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnNjaGVtYTtcbiAgfSxcblxuICB1cGRhdGVWYWx1ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHRoaXMuZ2V0Rm9ybVN0YXRlKHZhbHVlKSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSBmb3JtIHZhbHVlIGFuZCB2YWxpZGF0aW9uIHN0YXRlIGlzIGJlaW5nIHVwZGF0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7QW55fSB2YWx1ZVxuICAgKiBAcGFyYW0ge1ZhbGlkYXRpb259IHZhbGlkYXRpb25cbiAgICogQHBhcmFtIHtBbnl9IGNvbnZlcnRlZFZhbHVlXG4gICAqL1xuICBvblZhbHVlVXBkYXRlOiBmdW5jdGlvbih2YWx1ZSwgdmFsaWRhdGlvbiwgc2VyaWFsaXplZFZhbHVlKSB7XG4gICAgdmFsaWRhdGlvbiA9IHZhbGlkYXRpb24gfHwgc3VjY2VzcztcbiAgICBpZiAodGhpcy5wcm9wcy5vblVwZGF0ZSkge1xuICAgICAgdGhpcy5wcm9wcy5vblVwZGF0ZSh2YWx1ZSwgdmFsaWRhdGlvbiwgc2VyaWFsaXplZFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UgJiYgaXNTdWNjZXNzKHZhbGlkYXRpb24pKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlLCB2YWxpZGF0aW9uLCBzZXJpYWxpemVkVmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTp2YWx1ZSwgdmFsaWRhdGlvbjp2YWxpZGF0aW9uLCBzZXJpYWxpemVkVmFsdWU6c2VyaWFsaXplZFZhbHVlfSk7XG4gIH1cbn07XG5cbnZhciBGb3JtTWl4aW4gPSB7XG4gIG1peGluczogW0Zvcm1TdGF0ZU1peGluLCBGb3JtQ29udGV4dE1peGluXVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtTWl4aW47XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gKHdpbmRvdy5SZWFjdCk7XG5cbnZhciBNZXNzYWdlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiAnTWVzc2FnZScsXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2ZlclByb3BzVG8oXG4gICAgICBSZWFjdC5ET00uc3Bhbigge2NsYXNzTmFtZTpcInJlYWN0LWZvcm1zLW1lc3NhZ2VcIn0sIFxuICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWVzc2FnZTtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgICAgICAgICAgICAgICAgICAgPSAod2luZG93LlJlYWN0KTtcbnZhciBSZXBlYXRpbmdGaWVsZHNldE1peGluICA9IHJlcXVpcmUoJy4vUmVwZWF0aW5nRmllbGRzZXRNaXhpbicpO1xuXG52YXIgSXRlbSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogJ0l0ZW0nLFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmZXJQcm9wc1RvKFxuICAgICAgUmVhY3QuRE9NLmRpdigge2NsYXNzTmFtZTpcInJlYWN0LWZvcm1zLXJlcGVhdGluZy1maWVsZHNldC1pdGVtXCJ9LCBcbiAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgUmVhY3QuRE9NLmJ1dHRvbihcbiAgICAgICAgICB7b25DbGljazp0aGlzLm9uUmVtb3ZlLFxuICAgICAgICAgIHR5cGU6XCJidXR0b25cIixcbiAgICAgICAgICBjbGFzc05hbWU6XCJyZWFjdC1mb3Jtcy1yZXBlYXRpbmctZmllbGRzZXQtcmVtb3ZlXCJ9LCBcIsOXXCIpXG4gICAgICApXG4gICAgKTtcbiAgfSxcblxuICBvblJlbW92ZTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25SZW1vdmUpIHtcbiAgICAgIHRoaXMucHJvcHMub25SZW1vdmUodGhpcy5wcm9wcy5uYW1lKTtcbiAgICB9XG4gIH1cblxufSk7XG5cbnZhciBSZXBlYXRpbmdGaWVsZHNldCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogJ1JlcGVhdGluZ0ZpZWxkc2V0JyxcblxuICBtaXhpbnM6IFtSZXBlYXRpbmdGaWVsZHNldE1peGluXSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtOiBJdGVtXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY2hlbWEgPSB0aGlzLnNjaGVtYSgpO1xuICAgIHZhciBDb21wb25lbnQgPSB0aGlzLnByb3BzLml0ZW07XG4gICAgdmFyIGZpZWxkcyA9IHRoaXMucmVuZGVyRmllbGRzKCkubWFwKGZ1bmN0aW9uKGl0ZW0pIFxuICAgICAge3JldHVybiBDb21wb25lbnQoXG4gICAgICAgIHtrZXk6aXRlbS5wcm9wcy5uYW1lLFxuICAgICAgICBuYW1lOml0ZW0ucHJvcHMubmFtZSxcbiAgICAgICAgb25SZW1vdmU6dGhpcy5yZW1vdmV9LCBcbiAgICAgICAgaXRlbVxuICAgICAgKTt9LmJpbmQodGhpcylcbiAgICApO1xuICAgIHJldHVybiB0aGlzLnRyYW5zZmVyUHJvcHNUbyhcbiAgICAgIFJlYWN0LkRPTS5kaXYoIHtjbGFzc05hbWU6XCJyZWFjdC1mb3Jtcy1yZXBlYXRpbmctZmllbGRzZXRcIn0sIFxuICAgICAgICBzY2hlbWEucHJvcHMubGFiZWwgJiYgUmVhY3QuRE9NLmg0KG51bGwsIHNjaGVtYS5wcm9wcy5sYWJlbCksXG4gICAgICAgIGZpZWxkcyxcbiAgICAgICAgUmVhY3QuRE9NLmJ1dHRvbihcbiAgICAgICAgICB7dHlwZTpcImJ1dHRvblwiLFxuICAgICAgICAgIG9uQ2xpY2s6dGhpcy5vbkFkZCxcbiAgICAgICAgICBjbGFzc05hbWU6XCJyZWFjdC1mb3Jtcy1yZXBlYXRpbmctZmllbGRzZXQtYWRkXCJ9LCBcIkFkZFwiKVxuICAgICAgKVxuICAgICk7XG4gIH0sXG5cbiAgb25BZGQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmFkZCgpO1xuICB9XG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlcGVhdGluZ0ZpZWxkc2V0O1xubW9kdWxlLmV4cG9ydHMuSXRlbSA9IEl0ZW07XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ICAgICAgICAgICAgICAgICAgICAgPSAod2luZG93LlJlYWN0KTtcbnZhciBjbG9uZVdpdGhQcm9wcyAgICAgICAgICAgID0gUmVhY3QuYWRkb25zLmNsb25lV2l0aFByb3BzO1xudmFyIEZvcm1FbGVtZW50TWl4aW4gICAgICAgICAgPSByZXF1aXJlKCcuL0Zvcm1FbGVtZW50TWl4aW4nKTtcbnZhciBGb3JtQ29udGV4dE1peGluICAgICAgICAgID0gcmVxdWlyZSgnLi9Gb3JtQ29udGV4dE1peGluJyk7XG52YXIgZ2V0RGVmYXVsdFZhbHVlRm9yU2NoZW1hICA9IHJlcXVpcmUoJy4vZ2V0RGVmYXVsdFZhbHVlRm9yU2NoZW1hJyk7XG5cbi8qKlxuICogTWl4aW4gZm9yIGltcGxlbWVudGluZyByZXBlYXRpbmcgZmllbGRzZXRzLlxuICpcbiAqIFNlZSA8UmVwZWF0aW5nRmllbGRzZXQgLz4gY29tcG9uZW50IGZvciB0aGUgYmFzaWMgaW1wbGVtZW50YXRpb24gZXhhbXBsZS5cbiAqL1xudmFyIFJlcGVhdGluZ0ZpZWxkc2V0TWl4aW4gPSB7XG4gIG1peGluczogW0Zvcm1FbGVtZW50TWl4aW4sIEZvcm1Db250ZXh0TWl4aW5dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIG9uUmVtb3ZlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvbkFkZDogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIFJlYWN0IGNvbXBvbmVudHMgcmVuZGVyZWQgZm9yIGFsbCB0aGUgdmFsdWVzIGluIGFuIGFycmF5XG4gICAqIHRoaXMgZmllbGRzZXQgb3ducy5cbiAgICpcbiAgICogQHJldHVybnMge0FycmF5LjxSZWFjdENvbXBvbmVudD59XG4gICAqL1xuICByZW5kZXJGaWVsZHM6IGZ1bmN0aW9uKCkge1xuICAgIC8vIHByZXZlbnQgY2lyY3VsYXIgcmVxdWlyZVxuICAgIHZhciBjcmVhdGVDb21wb25lbnRGcm9tU2NoZW1hID0gcmVxdWlyZSgnLi9jcmVhdGVDb21wb25lbnRGcm9tU2NoZW1hJyk7XG4gICAgdmFyIHNjaGVtYSA9IHRoaXMuc2NoZW1hKCk7XG4gICAgdmFyIGNoaWxkcmVuID0gY3JlYXRlQ29tcG9uZW50RnJvbVNjaGVtYShzY2hlbWEuY2hpbGRyZW4pO1xuICAgIHJldHVybiB0aGlzLnNlcmlhbGl6ZWRWYWx1ZUxlbnMoKS52YWwoKS5tYXAoZnVuY3Rpb24oaXRlbSwgbmFtZSkgXG4gICAgICB7cmV0dXJuIGNsb25lV2l0aFByb3BzKGNoaWxkcmVuLCB7bmFtZTpuYW1lLCBrZXk6IG5hbWV9KTt9KTtcbiAgfSxcblxuICAvKipcbiAgICogUmVtb3ZlIGEgdmFsdWUgZnJvbSBmaWVsZHNldCdzIHZhbHVlIGJ5IGluZGV4XG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgKi9cbiAgcmVtb3ZlOiBmdW5jdGlvbihpbmRleCkge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuc2VyaWFsaXplZFZhbHVlTGVucygpLnZhbCgpLnNsaWNlKDApO1xuICAgIHZhciByZW1vdmVkID0gdmFsdWUuc3BsaWNlKGluZGV4LCAxKVswXTtcblxuICAgIHRoaXMudXBkYXRlVmFsdWUodmFsdWUpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMub25SZW1vdmUpIHtcbiAgICAgIHRoaXMucHJvcHMub25SZW1vdmUocmVtb3ZlZCwgaW5kZXgpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQWRkIG5ldyB2YWx1ZSB0byBmaWVsZHNldCdzIHZhbHVlLlxuICAgKi9cbiAgYWRkOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgc2NoZW1hID0gdGhpcy5zY2hlbWEoKTtcbiAgICAgIHZhbHVlID0gZ2V0RGVmYXVsdFZhbHVlRm9yU2NoZW1hKHNjaGVtYS5jaGlsZHJlbik7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVWYWx1ZSh0aGlzLnZhbHVlTGVucygpLnZhbCgpLmNvbmNhdCh2YWx1ZSkpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMub25BZGQpIHtcbiAgICAgIHRoaXMucHJvcHMub25BZGQodmFsdWUpO1xuICAgIH1cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZXBlYXRpbmdGaWVsZHNldE1peGluO1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciB2YWxpZGF0aW9uID0gcmVxdWlyZSgnLi92YWxpZGF0aW9uJyk7XG5cbi8qKlxuICogQ29tbW9uIHZhbGlkYXRpb24gcm91dGluZXMuXG4gKlxuICogQHByaXZhdGVcbiAqL1xudmFyIFZhbGlkYXRlZE1peGluID0ge1xuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZSB2YWx1ZSBpbmNyZW1lbnRhbGx5XG4gICAqXG4gICAqIEBwYXJhbSB7QW55fSB2YWx1ZVxuICAgKiBAcGFyYW0ge09iamVjdC48ezxuYW1lPjogVmFsaWRhdGlvbn0+fSBjaGlsZHJlblxuICAgKiBAcmV0dXJucyB7T2JqZWN0Ljx7dmFsdWU6IEFueSwgdmFsaWRhdGlvbjogVmFsaWRhdGlvbn0+fVxuICAgKi9cbiAgdmFsaWRhdGVPbmx5OiBmdW5jdGlvbih2YWx1ZSwgY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGVXaXRoKHZhbGlkYXRpb24udmFsaWRhdGVPbmx5LCB2YWx1ZSwgY2hpbGRyZW4pO1xuICB9LFxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZSB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtBbnl9IHZhbHVlXG4gICAqIEByZXR1cm5zIHtPYmplY3QuPHt2YWx1ZTogQW55LCB2YWxpZGF0aW9uOiBWYWxpZGF0aW9ufT59XG4gICAqL1xuICB2YWxpZGF0ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGVXaXRoKHZhbGlkYXRpb24udmFsaWRhdGUsIHZhbHVlKTtcbiAgfSxcblxuICBfdmFsaWRhdGVXaXRoOiBmdW5jdGlvbih2YWxpZGF0ZSwgdmFsdWUsIGNoaWxkcmVuKSB7XG4gICAgdmFsdWUgPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB0aGlzLnNlcmlhbGl6ZWRWYWx1ZUxlbnMoKS52YWwoKTtcbiAgICB2YXIgc2NoZW1hID0gdGhpcy5zY2hlbWEoKTtcbiAgICByZXR1cm4gc2NoZW1hID9cbiAgICAgIHZhbGlkYXRlKHNjaGVtYSwgdmFsdWUsIGNoaWxkcmVuKSA6XG4gICAgICB7dmFsaWRhdGlvbjogdmFsaWRhdGlvbi5zdWNjZXNzLCB2YWx1ZTp2YWx1ZX07XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVmFsaWRhdGVkTWl4aW47XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzICAgICAgICAgICAgID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIHNjaGVtYSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9zY2hlbWEnKTtcbnZhciBGaWVsZCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vRmllbGQnKTtcbnZhciBGaWVsZHNldCAgICAgICAgICA9IHJlcXVpcmUoJy4vRmllbGRzZXQnKTtcbnZhciBSZXBlYXRpbmdGaWVsZHNldCA9IHJlcXVpcmUoJy4vUmVwZWF0aW5nRmllbGRzZXQnKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBjb21wb25lbnQgd2hpY2ggcmVwcmVzZW50cyBwcm92aWRlZCBzY2hlbWEgbm9kZVxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge1NjaGVtYU5vZGV9IG5vZGVcbiAqIEByZXR1cm5zIHtSZWFjdENvbXBvbmVudH1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50RnJvbVNjaGVtYShub2RlKSB7XG4gIGlmIChub2RlLnByb3BzLmNvbXBvbmVudCkge1xuICAgIHJldHVybiBub2RlLnByb3BzLmNvbXBvbmVudCh7a2V5OiBub2RlLm5hbWUsIG5hbWU6IG5vZGUubmFtZX0pO1xuICB9XG5cbiAgaWYgKHNjaGVtYS5pc0xpc3Qobm9kZSkpIHtcbiAgICByZXR1cm4gUmVwZWF0aW5nRmllbGRzZXQoIHtrZXk6bm9kZS5uYW1lLCBuYW1lOm5vZGUubmFtZX0gKTtcbiAgfSBlbHNlIGlmIChzY2hlbWEuaXNTY2hlbWEobm9kZSkpIHtcbiAgICByZXR1cm4gRmllbGRzZXQoIHtrZXk6bm9kZS5uYW1lLCBuYW1lOm5vZGUubmFtZX0gKTtcbiAgfSBlbHNlIGlmIChzY2hlbWEuaXNQcm9wZXJ0eShub2RlKSkge1xuICAgIHJldHVybiBGaWVsZCgge2tleTpub2RlLm5hbWUsIG5hbWU6bm9kZS5uYW1lfSApO1xuICB9IGVsc2Uge1xuICAgIHV0aWxzLmludmFyaWFudChmYWxzZSwgJ2ludmFsaWQgc2NoZW1hIG5vZGU6ICcgKyBub2RlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUNvbXBvbmVudEZyb21TY2hlbWE7XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzICAgICA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBzY2hlbWEgICAgPSByZXF1aXJlKCcuL3NjaGVtYScpO1xuXG4vKipcbiAqIEdldCBkZWZhdWx0IHZhbHVlIGZvciBzY2hlbWEgbm9kZVxuICpcbiAqIEBwYXJhbSB7U2NoZW1hTm9kZX0gbm9kZVxuICogQHJldHVybnMge0FueX1cbiAqL1xuZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlRm9yU2NoZW1hKG5vZGUpIHtcbiAgaWYgKG5vZGUgJiYgbm9kZS5wcm9wcyAmJiBub2RlLnByb3BzLmRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG5vZGUucHJvcHMuZGVmYXVsdFZhbHVlO1xuICB9XG4gIGlmIChzY2hlbWEuaXNTY2hlbWEobm9kZSkpIHtcbiAgICByZXR1cm4ge307XG4gIH0gZWxzZSBpZiAoc2NoZW1hLmlzTGlzdChub2RlKSkge1xuICAgIHJldHVybiBbXTtcbiAgfSBlbHNlIGlmIChzY2hlbWEuaXNQcm9wZXJ0eShub2RlKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2Uge1xuICAgIHV0aWxzLmludmFyaWFudChcbiAgICAgIGZhbHNlLFxuICAgICAgJ2RvIG5vdCBrbm93IGhvdyB0byBpbmZlciBkZWZhdWx0IHZhbHVlIGZvciAnICsgbm9kZVxuICAgICk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXREZWZhdWx0VmFsdWVGb3JTY2hlbWE7XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzICAgICA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciB0eXBlcyAgICAgPSByZXF1aXJlKCcuL3R5cGVzJyk7XG52YXIgc2NoZW1hICAgID0gcmVxdWlyZSgnLi9zY2hlbWEnKTtcblxuLyoqXG4gKiBSZXR1cm4gYSB0eXBlIHdoaWNoIGNvcnJlc3BvbmRzIHRvIGEgZ2l2ZW4gc2NoZW1hIG5vZGUuXG4gKlxuICogQHBhcmFtIHtTY2hlbWF9IG5vZGVcbiAqIEByZXR1cm4ge1R5cGV9XG4gKi9cbmZ1bmN0aW9uIGdldFR5cGVGcm9tU2NoZW1hKG5vZGUpIHtcbiAgaWYgKG5vZGUgJiYgbm9kZS5wcm9wcy50eXBlKSB7XG5cbiAgICB1dGlscy5pbnZhcmlhbnQoXG4gICAgICBzY2hlbWEuaXNQcm9wZXJ0eShub2RlKSxcbiAgICAgICdvbmx5IFByb3BlcnR5IHNjaGVtYSBub2RlcyBjYW4gaGF2ZSB0eXBlcydcbiAgICApO1xuXG4gICAgaWYgKHV0aWxzLmlzU3RyaW5nKG5vZGUucHJvcHMudHlwZSkpIHtcbiAgICAgIHZhciB0eXBlID0gdHlwZXNbbm9kZS5wcm9wcy50eXBlXTtcbiAgICAgIHV0aWxzLmludmFyaWFudCh0eXBlLCAndW5rbm93biB0eXBlICcgKyBub2RlLnByb3BzLnR5cGUpO1xuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGUucHJvcHMudHlwZTtcbiAgfVxuXG4gIHJldHVybiB0eXBlcy5hbnk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VHlwZUZyb21TY2hlbWE7XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIEZvcm0gICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9Gb3JtJyk7XG52YXIgRmllbGRzZXQgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL0ZpZWxkc2V0Jyk7XG52YXIgUmVwZWF0aW5nRmllbGRzZXQgICAgICAgPSByZXF1aXJlKCcuL1JlcGVhdGluZ0ZpZWxkc2V0Jyk7XG52YXIgRmllbGQgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL0ZpZWxkJyk7XG52YXIgRm9ybUZvciAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL0Zvcm1Gb3InKTtcbnZhciBNZXNzYWdlICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vTWVzc2FnZScpO1xuXG52YXIgRm9ybU1peGluICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL0Zvcm1NaXhpbicpO1xudmFyIEZvcm1Db250ZXh0TWl4aW4gICAgICAgID0gcmVxdWlyZSgnLi9Gb3JtQ29udGV4dE1peGluJyk7XG52YXIgRm9ybUVsZW1lbnRNaXhpbiAgICAgICAgPSByZXF1aXJlKCcuL0Zvcm1FbGVtZW50TWl4aW4nKTtcbnZhciBGaWVsZE1peGluICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vRmllbGRNaXhpbicpO1xudmFyIEZpZWxkc2V0TWl4aW4gICAgICAgICAgID0gcmVxdWlyZSgnLi9GaWVsZHNldE1peGluJyk7XG52YXIgUmVwZWF0aW5nRmllbGRzZXRNaXhpbiAgPSByZXF1aXJlKCcuL1JlcGVhdGluZ0ZpZWxkc2V0TWl4aW4nKTtcblxudmFyIHZhbGlkYXRvcnMgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi92YWxpZGF0b3JzJyk7XG52YXIgdmFsaWRhdGlvbiAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3ZhbGlkYXRpb24nKTtcbnZhciB0eXBlcyAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdHlwZXMnKTtcbnZhciBzY2hlbWEgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vc2NoZW1hJyk7XG52YXIgaW5wdXQgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL2lucHV0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBGb3JtTWl4aW46Rm9ybU1peGluLCBGb3JtQ29udGV4dE1peGluOkZvcm1Db250ZXh0TWl4aW4sIEZvcm1FbGVtZW50TWl4aW46Rm9ybUVsZW1lbnRNaXhpbixcbiAgRmllbGRNaXhpbjpGaWVsZE1peGluLCBGaWVsZHNldE1peGluOkZpZWxkc2V0TWl4aW4sIFJlcGVhdGluZ0ZpZWxkc2V0TWl4aW46UmVwZWF0aW5nRmllbGRzZXRNaXhpbixcblxuICBGb3JtOkZvcm0sIEZpZWxkOkZpZWxkLCBGaWVsZHNldDpGaWVsZHNldCwgUmVwZWF0aW5nRmllbGRzZXQ6UmVwZWF0aW5nRmllbGRzZXQsXG5cbiAgRm9ybUZvcjpGb3JtRm9yLCBNZXNzYWdlOk1lc3NhZ2UsXG5cbiAgc2NoZW1hOnNjaGVtYSwgdHlwZXM6dHlwZXMsIHZhbGlkYXRvcnM6dmFsaWRhdG9ycywgdmFsaWRhdGlvbjp2YWxpZGF0aW9uLCBpbnB1dDppbnB1dFxufTtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSAod2luZG93LlJlYWN0KTtcblxudmFyIENoZWNrYm94R3JvdXAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdDaGVja2JveEdyb3VwJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBvcHRpb25zOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICB2YWx1ZTogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuICAgIG9uQ2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHt2YWx1ZTogW119O1xuICB9LFxuXG4gIG9uQ2hhbmdlOiBmdW5jdGlvbihlKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRWYWx1ZSA9IHRoaXMucHJvcHMudmFsdWUuc2xpY2UoMCk7XG5cbiAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgbmV4dFZhbHVlLnB1c2goZS50YXJnZXQudmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgaWR4ID0gbmV4dFZhbHVlLmluZGV4T2YoZS50YXJnZXQudmFsdWUpO1xuICAgICAgaWYgKGlkeCA+IC0xKSB7XG4gICAgICAgIG5leHRWYWx1ZS5zcGxpY2UoaWR4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgdmFsdWVzID0gdGhpcy5wcm9wcy5vcHRpb25zLm1hcChmdW5jdGlvbihvKSAge3JldHVybiBvLnZhbHVlO30pO1xuICAgIG5leHRWYWx1ZS5zb3J0KGZ1bmN0aW9uKGEsIGIpICB7cmV0dXJuIHZhbHVlcy5pbmRleE9mKGEpIC0gdmFsdWVzLmluZGV4T2YoYik7fSk7XG5cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5leHRWYWx1ZSk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgbmFtZSA9IHRoaXMuX3Jvb3ROb2RlSUQ7XG4gICAgdmFyIHZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZTtcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMucHJvcHMub3B0aW9ucy5tYXAoZnVuY3Rpb24ob3B0aW9uKSAge1xuICAgICAgdmFyIGNoZWNrZWQgPSB2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKG9wdGlvbi52YWx1ZSkgPiAtMTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIFJlYWN0LkRPTS5kaXYoXG4gICAgICAgICAge2NsYXNzTmFtZTpcInJlYWN0LWZvcm1zLWNoZWNrYm94LWdyb3VwLWJ1dHRvblwiLFxuICAgICAgICAgIGtleTpvcHRpb24udmFsdWV9LCBcbiAgICAgICAgICBSZWFjdC5ET00ubGFiZWwoIHtjbGFzc05hbWU6XCJyZWFjdC1mb3Jtcy1jaGVja2JveC1ncm91cC1sYWJlbFwifSwgXG4gICAgICAgICAgICBSZWFjdC5ET00uaW5wdXQoXG4gICAgICAgICAgICAgIHtvbkNoYW5nZTp0aGlzLm9uQ2hhbmdlLFxuICAgICAgICAgICAgICBjaGVja2VkOmNoZWNrZWQsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTpcInJlYWN0LWZvcm1zLWNoZWNrYm94LWdyb3VwLWNoZWNrYm94XCIsXG4gICAgICAgICAgICAgIHR5cGU6XCJjaGVja2JveFwiLFxuICAgICAgICAgICAgICBuYW1lOm5hbWUsXG4gICAgICAgICAgICAgIHZhbHVlOm9wdGlvbi52YWx1ZX0gKSxcbiAgICAgICAgICAgIFJlYWN0LkRPTS5zcGFuKCB7Y2xhc3NOYW1lOlwicmVhY3QtZm9ybXMtY2hlY2tib3gtZ3JvdXAtY2FwdGlvblwifSwgXG4gICAgICAgICAgICAgIG9wdGlvbi5uYW1lXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuRE9NLmRpdigge2NsYXNzTmFtZTpcInJlYWN0LWZvcm1zLWNoZWNrYm94LWdyb3VwXCJ9LCBcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENoZWNrYm94R3JvdXA7XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gKHdpbmRvdy5SZWFjdCk7XG5cbmZ1bmN0aW9uIHJlbmRlckVtcHR5T3B0aW9uKHByb3BzLCBvbkNoYW5nZSkge1xuICByZXR1cm4gKFxuICAgIFJlYWN0LkRPTS5kaXYoXG4gICAgICAgIHtjbGFzc05hbWU6XCJyZWFjdC1mb3Jtcy1yYWRpby1idXR0b24tZ3JvdXAtYnV0dG9uXCIsXG4gICAgICAgIGtleTpcIlwifSwgXG4gICAgICBSZWFjdC5ET00ubGFiZWwoXG4gICAgICAgIHtjbGFzc05hbWU6XCJyZWFjdC1mb3Jtcy1yYWRpby1idXR0b24tZ3JvdXAtbGFiZWxcIn0sIFxuICAgICAgICBSZWFjdC5ET00uaW5wdXQoXG4gICAgICAgICAge2NoZWNrZWQ6cHJvcHMuY2hlY2tlZCxcbiAgICAgICAgICBjbGFzc05hbWU6XCJyZWFjdC1mb3Jtcy1yYWRpby1idXR0b24tZ3JvdXAtcmFkaW9cIixcbiAgICAgICAgICB0eXBlOlwicmFkaW9cIixcbiAgICAgICAgICBuYW1lOnByb3BzLm5hbWUsXG4gICAgICAgICAgb25DaGFuZ2U6b25DaGFuZ2UuYmluZChudWxsLCBudWxsKSxcbiAgICAgICAgICB2YWx1ZTpcIlwifSApLFxuICAgICAgICBSZWFjdC5ET00uc3Bhbigge2NsYXNzTmFtZTpcInJlYWN0LWZvcm1zLXJhZGlvLWJ1dHRvbi1ncm91cC1jYXB0aW9uXCJ9LCBcbiAgICAgICAgICBcIm5vbmVcIlxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xufVxuXG52YXIgUmFkaW9CdXR0b25Hcm91cCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogJ1JhZGlvQnV0dG9uR3JvdXAnLFxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICBvcHRpb25zOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICAgIGFsbG93RW1wdHk6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgICAgdmFsdWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBvbkNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5wcm9wcy5vcHRpb25zLm1hcCh0aGlzLnJlbmRlck9wdGlvbik7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmFsbG93RW1wdHkpIHtcbiAgICAgICAgb3B0aW9ucy51bnNoaWZ0KHJlbmRlckVtcHR5T3B0aW9uKHtcbiAgICAgICAgICAgIG5hbWU6IHRoaXMuX3Jvb3ROb2RlSUQsXG4gICAgICAgICAgICBjaGVja2VkOiAhdGhpcy5wcm9wcy52YWx1ZVxuICAgICAgICB9LCB0aGlzLm9uQ2hhbmdlKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIFJlYWN0LkRPTS5kaXYoIHtjbGFzc05hbWU6XCJyZWFjdC1mb3Jtcy1yYWRpby1idXR0b24tZ3JvdXBcIn0sIFxuICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyT3B0aW9uOiBmdW5jdGlvbihvcHRpb24pIHtcbiAgICAgIHZhciBuYW1lID0gdGhpcy5fcm9vdE5vZGVJRDtcbiAgICAgIHZhciBjaGVja2VkID0gdGhpcy5wcm9wcy52YWx1ZSA/XG4gICAgICAgICAgdGhpcy5wcm9wcy52YWx1ZSA9PT0gb3B0aW9uLnZhbHVlIDpcbiAgICAgICAgICBmYWxzZTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIFJlYWN0LkRPTS5kaXYoXG4gICAgICAgICAge2NsYXNzTmFtZTpcInJlYWN0LWZvcm1zLXJhZGlvLWJ1dHRvbi1ncm91cC1idXR0b25cIixcbiAgICAgICAgICBrZXk6b3B0aW9uLnZhbHVlfSwgXG4gICAgICAgICAgUmVhY3QuRE9NLmxhYmVsKFxuICAgICAgICAgICAge2NsYXNzTmFtZTpcInJlYWN0LWZvcm1zLXJhZGlvLWJ1dHRvbi1ncm91cC1sYWJlbFwifSwgXG4gICAgICAgICAgICBSZWFjdC5ET00uaW5wdXQoXG4gICAgICAgICAgICAgIHtjaGVja2VkOmNoZWNrZWQsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTpcInJlYWN0LWZvcm1zLXJhZGlvLWJ1dHRvbi1ncm91cC1yYWRpb1wiLFxuICAgICAgICAgICAgICB0eXBlOlwicmFkaW9cIixcbiAgICAgICAgICAgICAgbmFtZTpuYW1lLFxuICAgICAgICAgICAgICBvbkNoYW5nZTp0aGlzLm9uQ2hhbmdlLmJpbmQobnVsbCwgb3B0aW9uLnZhbHVlKSxcbiAgICAgICAgICAgICAgdmFsdWU6b3B0aW9uLnZhbHVlfSApLFxuICAgICAgICAgICAgUmVhY3QuRE9NLnNwYW4oIHtjbGFzc05hbWU6XCJyZWFjdC1mb3Jtcy1yYWRpby1idXR0b24tZ3JvdXAtY2FwdGlvblwifSwgXG4gICAgICAgICAgICAgIG9wdGlvbi5uYW1lXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0sXG5cbiAgICBvbkNoYW5nZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpO1xuICAgICAgfVxuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJhZGlvQnV0dG9uR3JvdXA7XG4iLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbm1vZHVsZS5leHBvcnRzID0ge1xuICBDaGVja2JveEdyb3VwOiByZXF1aXJlKCcuL0NoZWNrYm94R3JvdXAnKSxcbiAgUmFkaW9CdXR0b25Hcm91cDogcmVxdWlyZSgnLi9SYWRpb0J1dHRvbkdyb3VwJylcbn07XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuXG5cbiAgZnVuY3Rpb24gTGVucyhkYXRhLCBwYXRoKSB7XG4gICAgdGhpcy5fX2RhdGEgPSBkYXRhO1xuICAgIHRoaXMuX19wYXRoID0gcGF0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSB2YWx1ZSB0aGlzIGxlbnNlIHBvaW50cyB0b1xuICAgKi9cbiAgTGVucy5wcm90b3R5cGUudmFsPWZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuX19kYXRhO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLl9fcGF0aC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgdmFyIGtleSA9IHRoaXMuX19wYXRoW2ldO1xuICAgICAgdmFsdWUgPSB2YWx1ZVtrZXkua2V5XTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmIGtleS5kZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YWx1ZSA9IGtleS5kZWZhdWx0VmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICBMZW5zLnByb3RvdHlwZS5pc1VuZGVmaW5lZD1mdW5jdGlvbigpIHtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLl9fZGF0YTtcblxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5fX3BhdGgubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSB0aGlzLl9fcGF0aFtpXTtcbiAgICAgIHZhbHVlID0gdmFsdWVba2V5LmtleV07XG4gICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgTGVucy5wcm90b3R5cGUucm9vdD1mdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fX2RhdGE7XG4gIH07XG5cbiAgTGVucy5wcm90b3R5cGUucGFyZW50PWZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9fcGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXRoID0gdGhpcy5fX3BhdGguc2xpY2UoMCwgdGhpcy5fX3BhdGgubGVuZ3RoIC0gMSk7XG4gICAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IodGhpcy5fX2RhdGEsIHBhdGgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogR2V0IGEgbGVucyBieSBhIHNwZWNpZmllZCBrZXlcbiAgICpcbiAgICogQHBhcmFtIHtLZXl9IGtleVxuICAgKiBAcGFyYW0ge0FueX0gZGVmYXVsdFZhbHVlXG4gICAqL1xuICBMZW5zLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24oa2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IoXG4gICAgICB0aGlzLl9fZGF0YSwgdGhpcy5fX3BhdGguY29uY2F0KHtrZXk6a2V5LCBkZWZhdWx0VmFsdWU6ZGVmYXVsdFZhbHVlfSkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTaG9ydGN1dCBmb3IgbGVucy5nZXQoa2V5KS5tb2QodmFsdWUpXG4gICAqXG4gICAqIEBwYXJhbSB7S2V5fSBrZXlcbiAgICogQHBhcmFtIHtBbnl9IHZhbHVlXG4gICAqL1xuICBMZW5zLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmdldChrZXkpLm1vZCh2YWx1ZSk7XG4gIH07XG5cbiAgTGVucy5wcm90b3R5cGUudXBkYXRlPWZ1bmN0aW9uKHZhbHVlcykge1xuICAgIHZhciBkYXRhID0gdGhpcy52YWwoKTtcbiAgICB2YXIgY29weSA9IHt9O1xuICAgIHZhciBrO1xuICAgIGZvciAoayBpbiBkYXRhKSB7XG4gICAgICBjb3B5W2tdID0gZGF0YVtrXTtcbiAgICB9XG4gICAgZm9yIChrIGluIHZhbHVlcykge1xuICAgICAgY29weVtrXSA9IHZhbHVlc1trXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubW9kKGNvcHkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm4gbGVucyBmb3IgYSBuZXcgZGF0YSB3aGljaCBwb2ludHMgdG8gdGhlIHNhbWUgbG9jYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7QW55fSBkYXRhXG4gICAqL1xuICBMZW5zLnByb3RvdHlwZS5mb3I9ZnVuY3Rpb24oZGF0YSkge1xuICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3RvcihkYXRhLCB0aGlzLl9fcGF0aCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIG5ldyBjb3B5IG9mIGRhdGEgYnkgcmVwbGFjaW5nIGEgdmFsdWUgdGhpcyBsZW5zIHBvaW50cyB0byB3aXRoIGFcbiAgICogbmV3IHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge0FueX0gdmFsdWVcbiAgICovXG4gIExlbnMucHJvdG90eXBlLm1vZD1mdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciB1cGRhdGVkLCBuZXdEYXRhLCBwcmV2RGF0YTtcbiAgICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhO1xuICAgIHZhciBwYXRoID0gdGhpcy5fX3BhdGg7XG5cbiAgICBpZiAocGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmZvcih2YWx1ZSk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHBhdGgubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBwYXRoW2ldO1xuXG4gICAgICAvLyBjb3B5IHRocm91Z2ggY2hhbmdlZCBwYXRoXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICB1cGRhdGVkID0gZGF0YS5zbGljZSgwKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHVwZGF0ZWQgPSB7fTtcbiAgICAgICAgZm9yICh2YXIgayBpbiBkYXRhKSB7XG4gICAgICAgICAgdXBkYXRlZFtrXSA9IGRhdGFba107XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gc3RvcmUgcmVmZXJlbmNlIHRvIG5ld2x5IGNyZWF0ZWQgcm9vdCBkYXRhXG4gICAgICBpZiAobmV3RGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG5ld0RhdGEgPSB1cGRhdGVkO1xuICAgICAgfVxuXG4gICAgICAvLyBtdXRhdGUgcHJldmlvdXNseSBjb3BpZWQgZGF0YSB3aXRoIHVwZGF0ZWQgdmFsdWVcbiAgICAgIGlmIChwcmV2RGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByZXZEYXRhW3BhdGhbaSAtIDFdLmtleV0gPSB1cGRhdGVkO1xuICAgICAgfVxuXG4gICAgICAvLyBpZiB3ZSBhcmUgYXQgdGhlIGxhc3QgcGF0aCBrZXkgdXBkYXRlIGRhdGEgd2l0aCBhIG5ldyB2YWx1ZVxuICAgICAgaWYgKGkgPT09IGxlbiAtIDEpIHtcbiAgICAgICAgdXBkYXRlZFtrZXkua2V5XSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YSA9IHVwZGF0ZWRba2V5LmtleV07XG4gICAgICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQgJiYga2V5LmRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZGF0YSA9IGtleS5kZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJldkRhdGEgPSB1cGRhdGVkO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmZvcihuZXdEYXRhKTtcbiAgfTtcblxuICAvKipcbiAgICogTWFrZSBhIG5ldyBsZW5zIGZvciBkYXRhXG4gICAqXG4gICAqIEBwYXJhbSB7QW55fSBkYXRhXG4gICAqL1xuICBMZW5zLm1ha2U9ZnVuY3Rpb24oZGF0YSkge1xuICAgIHJldHVybiBuZXcgdGhpcyhkYXRhLCBbXSk7XG4gIH07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBMZW5zLm1ha2UuYmluZChMZW5zKTtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgICAgID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG5mdW5jdGlvbiBOb2RlKCl7fVxuXG5cblxuZm9yKHZhciBOb2RlX19fX0tleSBpbiBOb2RlKXtpZihOb2RlLmhhc093blByb3BlcnR5KE5vZGVfX19fS2V5KSl7UHJvcGVydHlOb2RlW05vZGVfX19fS2V5XT1Ob2RlW05vZGVfX19fS2V5XTt9fXZhciBfX19fU3VwZXJQcm90b09mTm9kZT1Ob2RlPT09bnVsbD9udWxsOk5vZGUucHJvdG90eXBlO1Byb3BlcnR5Tm9kZS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShfX19fU3VwZXJQcm90b09mTm9kZSk7UHJvcGVydHlOb2RlLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1Qcm9wZXJ0eU5vZGU7UHJvcGVydHlOb2RlLl9fc3VwZXJDb25zdHJ1Y3Rvcl9fPU5vZGU7XG5cbiAgZnVuY3Rpb24gUHJvcGVydHlOb2RlKHByb3BzKSB7XG4gICAgcHJvcHMgPSBwcm9wcyA/IHV0aWxzLm1lcmdlKHt9LCBwcm9wcykgOiB7fTtcblxuICAgIHRoaXMubmFtZSA9IHByb3BzLm5hbWU7XG4gICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB9XG5cblxuZm9yKE5vZGVfX19fS2V5IGluIE5vZGUpe2lmKE5vZGUuaGFzT3duUHJvcGVydHkoTm9kZV9fX19LZXkpKXtTY2hlbWFOb2RlW05vZGVfX19fS2V5XT1Ob2RlW05vZGVfX19fS2V5XTt9fVNjaGVtYU5vZGUucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoX19fX1N1cGVyUHJvdG9PZk5vZGUpO1NjaGVtYU5vZGUucHJvdG90eXBlLmNvbnN0cnVjdG9yPVNjaGVtYU5vZGU7U2NoZW1hTm9kZS5fX3N1cGVyQ29uc3RydWN0b3JfXz1Ob2RlO1xuXG4gIGZ1bmN0aW9uIFNjaGVtYU5vZGUocHJvcHMpIHtcbiAgICBwcm9wcyA9IHByb3BzID8gdXRpbHMubWVyZ2Uoe30sIHByb3BzKSA6IHt9O1xuXG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIHZhciBjaGlsZHJlbiA9IHt9O1xuXG4gICAgaWYgKGFyZ3MubGVuZ3RoICE9PSAwKSB7XG4gICAgICBmb3JFYWNoTmVzdGVkKGFyZ3MsIGZ1bmN0aW9uKGFyZykgIHtcbiAgICAgICAgdXRpbHMuaW52YXJpYW50KFxuICAgICAgICAgIGFyZy5uYW1lLFxuICAgICAgICAgICdwcm9wcyBmaWVsZHMgc2hvdWxkIHNwZWNpZnkgbmFtZSBwcm9wZXJ0eSdcbiAgICAgICAgKTtcbiAgICAgICAgY2hpbGRyZW5bYXJnLm5hbWVdID0gYXJnO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5uYW1lID0gcHJvcHMubmFtZTtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9XG5cbiAgU2NoZW1hTm9kZS5wcm90b3R5cGUubWFwPWZ1bmN0aW9uKGZ1bmMsIGNvbnRleHQpIHtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcy5jaGlsZHJlbikge1xuICAgICAgcmVzdWx0cy5wdXNoKGZ1bmMuY2FsbChjb250ZXh0LCB0aGlzLmNoaWxkcmVuW25hbWVdLCBuYW1lLCB0aGlzKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG5cbmZvcihOb2RlX19fX0tleSBpbiBOb2RlKXtpZihOb2RlLmhhc093blByb3BlcnR5KE5vZGVfX19fS2V5KSl7TGlzdE5vZGVbTm9kZV9fX19LZXldPU5vZGVbTm9kZV9fX19LZXldO319TGlzdE5vZGUucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoX19fX1N1cGVyUHJvdG9PZk5vZGUpO0xpc3ROb2RlLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1MaXN0Tm9kZTtMaXN0Tm9kZS5fX3N1cGVyQ29uc3RydWN0b3JfXz1Ob2RlO1xuXG4gIGZ1bmN0aW9uIExpc3ROb2RlKHByb3BzKSB7XG4gICAgcHJvcHMgPSBwcm9wcyA/IHV0aWxzLm1lcmdlKHt9LCBwcm9wcykgOiB7fTtcblxuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICAgIHV0aWxzLmludmFyaWFudChcbiAgICAgIGFyZ3MubGVuZ3RoID09PSAxLFxuICAgICAgJ3Byb3BzIGZvciBhcnJheSBtdXN0IGNvbnRhaW4gZXhhY3RseSBvbmUgY2hpbGQgcHJvcHMgcHJvcHMnXG4gICAgKTtcblxuICAgIHRoaXMubmFtZSA9IHByb3BzLm5hbWU7XG4gICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBhcmdzWzBdO1xuICB9XG5cblxuZnVuY3Rpb24gZm9yRWFjaE5lc3RlZChjb2xsZWN0aW9uLCBmdW5jLCBjb250ZXh0KSB7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjb2xsZWN0aW9uLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY29sbGVjdGlvbltpXSkpIHtcbiAgICAgIGZvckVhY2hOZXN0ZWQoY29sbGVjdGlvbltpXSwgZnVuYywgY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZ1bmMuY2FsbChjb250ZXh0LCBjb2xsZWN0aW9uW2ldLCBpLCBjb2xsZWN0aW9uKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFrZUZhY3RvcnkoY29uc3RydWN0b3IpIHtcbiAgZnVuY3Rpb24gZmFjdG9yeSgpIHtcbiAgICB2YXIgbm9kZSA9IE9iamVjdC5jcmVhdGUoY29uc3RydWN0b3IucHJvdG90eXBlKTtcbiAgICBjb25zdHJ1Y3Rvci5hcHBseShub2RlLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiBub2RlO1xuICB9XG4gIC8vIHdlIGRvIHRoaXMgdG8gc3VwcG9ydCBpbnN0YW5jZW9mIGNoZWNrXG4gIGZhY3RvcnkucHJvdG90eXBlID0gY29uc3RydWN0b3IucHJvdG90eXBlO1xuICByZXR1cm4gZmFjdG9yeTtcbn1cblxudmFyIFByb3BlcnR5ICA9IG1ha2VGYWN0b3J5KFByb3BlcnR5Tm9kZSk7XG52YXIgTGlzdCAgICAgID0gbWFrZUZhY3RvcnkoTGlzdE5vZGUpO1xudmFyIFNjaGVtYSAgICA9IG1ha2VGYWN0b3J5KFNjaGVtYU5vZGUpO1xuXG5mdW5jdGlvbiBjcmVhdGVUeXBlKHNwZWMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgcHJvcHMgPSBwcm9wcyB8fCB7fTtcbiAgICByZXR1cm4gc3BlYyhwcm9wcyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzU2NoZW1hKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBTY2hlbWFOb2RlO1xufVxuXG5mdW5jdGlvbiBpc0xpc3Qobm9kZSkge1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIExpc3ROb2RlO1xufVxuXG5mdW5jdGlvbiBpc1Byb3BlcnR5KG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBQcm9wZXJ0eU5vZGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBOb2RlOk5vZGUsXG4gIFByb3BlcnR5OlByb3BlcnR5LCBpc1Byb3BlcnR5OmlzUHJvcGVydHksXG4gIFNjaGVtYTpTY2hlbWEsIGlzU2NoZW1hOmlzU2NoZW1hLFxuICBMaXN0Okxpc3QsIGlzTGlzdDppc0xpc3QsXG4gIGNyZWF0ZVR5cGU6Y3JlYXRlVHlwZVxufTtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBpZFNlcmlhbGl6ZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGwgPyAnJyA6IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBpZERlc2VyaWFsaXplKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gJycgPyBudWxsIDogdmFsdWU7XG59XG5cbnZhciBhbnkgPSB7XG4gIHNlcmlhbGl6ZTogaWRTZXJpYWxpemUsXG4gIGRlc2VyaWFsaXplOiBpZERlc2VyaWFsaXplXG59O1xuXG52YXIgc3RyaW5nID0gYW55O1xuXG52YXIgbnVtYmVyID0ge1xuICBzZXJpYWxpemU6IGlkU2VyaWFsaXplLFxuICBkZXNlcmlhbGl6ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09ICcnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICAvLyBiYXNlZCBvbiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xODMwODQ0LzE4Mjk1NFxuICAgIH0gZWxzZSBpZiAoIWlzTmFOKHBhcnNlRmxvYXQodmFsdWUpKSAmJiBpc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIHZhbHVlJyk7XG4gICAgfVxuICB9XG59O1xuXG52YXIgaXNEYXRlUmUgPSAvXlxcZFxcZFxcZFxcZC1cXGRcXGQtXFxkXFxkJC87XG5cbnZhciBkYXRlID0ge1xuICBzZXJpYWxpemU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciB5ZWFyID0gdmFsdWUuZ2V0RnVsbFllYXIoKTtcbiAgICB2YXIgbW9udGggPSB2YWx1ZS5nZXRNb250aCgpICsgMTtcbiAgICB2YXIgZGF5ID0gdmFsdWUuZ2V0RGF0ZSgpO1xuICAgIHJldHVybiAoeWVhciArIFwiLVwiICsgcGFkKG1vbnRoLCAyKSArIFwiLVwiICsgcGFkKGRheSwgMikpO1xuICB9LFxuICBkZXNlcmlhbGl6ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09ICcnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKCFpc0RhdGVSZS5leGVjKHZhbHVlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdzaG91bGQgYmUgYSBkYXRlIGluIFlZWVktTU0tREQgZm9ybWF0Jyk7XG4gICAgfVxuXG4gICAgdmFsdWUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG5cbiAgICBpZiAoaXNOYU4odmFsdWUuZ2V0VGltZSgpKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIGRhdGUnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHBhZChudW0sIHNpemUpIHtcbiAgcmV0dXJuICgnMDAwMCcgKyBudW0pLnN1YnN0cigtc2l6ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge2FueTphbnksIHN0cmluZzpzdHJpbmcsIG51bWJlcjpudW1iZXIsIGRhdGU6ZGF0ZX07XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gbWVyZ2VJbnRvKGRzdCwgc3JjKSB7XG4gIGlmIChzcmMgIT0gbnVsbCkge1xuICAgIGZvciAodmFyIGsgaW4gc3JjKSB7XG4gICAgICBpZiAoIXNyYy5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGRzdFtrXSA9IHNyY1trXTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2UoYSwgYikge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIG1lcmdlSW50byhyZXN1bHQsIGEpO1xuICBtZXJnZUludG8ocmVzdWx0LCBiKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICBpZiAoIWNvbmRpdGlvbikge1xuXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UgfHwgJ2ludmFyaWFudCB2aW9sYXRpb24nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge1xuXG59XG5cbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0cnVlO1xufTtcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuZnVuY3Rpb24gaXNTdHJpbmcobykge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChvKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge21lcmdlSW50bzptZXJnZUludG8sIG1lcmdlOm1lcmdlLCBpbnZhcmlhbnQ6aW52YXJpYW50LCBlbXB0eUZ1bmN0aW9uOmVtcHR5RnVuY3Rpb24sIGlzU3RyaW5nOmlzU3RyaW5nfTtcbiIsIi8qKlxuICogU2NoZW1hIHZhbGlkYXRpb25cbiAqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBzY2hlbWEgICAgICAgICAgICA9IHJlcXVpcmUoJy4vc2NoZW1hJyk7XG52YXIgZ2V0VHlwZUZyb21TY2hlbWEgPSByZXF1aXJlKCcuL2dldFR5cGVGcm9tU2NoZW1hJyk7XG52YXIgdmFsaWRhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuL3ZhbGlkYXRvcnMnKTtcblxudmFyIGV4aXN0cyAgICAgPSB2YWxpZGF0b3JzLmV4aXN0cztcbnZhciBub25FbXB0eSAgID0gdmFsaWRhdG9ycy5ub25FbXB0eTtcblxuZnVuY3Rpb24gc2VyaWFsaXplKG5vZGUsIHZhbHVlKSB7XG4gIHZhciByZXN1bHQ7XG5cbiAgaWYgKHNjaGVtYS5pc1Byb3BlcnR5KG5vZGUpKSB7XG4gICAgcmVzdWx0ID0gZ2V0VHlwZUZyb21TY2hlbWEobm9kZSkuc2VyaWFsaXplKHZhbHVlKTtcbiAgfSBlbHNlIGlmIChzY2hlbWEuaXNTY2hlbWEobm9kZSkpIHtcbiAgICByZXN1bHQgPSB7fTtcbiAgICBmb3IgKHZhciBrIGluIHZhbHVlKSB7XG4gICAgICBpZiAobm9kZS5jaGlsZHJlbltrXSkge1xuICAgICAgICByZXN1bHRba10gPSBzZXJpYWxpemUobm9kZS5jaGlsZHJlbltrXSwgdmFsdWVba10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0W2tdID0gdmFsdWVba107XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKHNjaGVtYS5pc0xpc3Qobm9kZSkpIHtcbiAgICByZXN1bHQgPSBuZXcgQXJyYXkodmFsdWUubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdmFsdWUubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHJlc3VsdFtpXSA9IHNlcmlhbGl6ZShub2RlLmNoaWxkcmVuLCB2YWx1ZVtpXSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHV0aWxzLmludmFyaWFudChmYWxzZSwgJ3Vua25vd24gc2NoZW1hIHBhc3NlZCcpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZGVzZXJpYWxpemVPbmx5KG5vZGUsIHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHt2YWx1ZTp2YWx1ZSwgdmFsaWRhdGlvbjogc3VjY2Vzc307XG4gIH1cbiAgdmFyIHR5cGUgPSBnZXRUeXBlRnJvbVNjaGVtYShub2RlKTtcbiAgdHJ5IHtcbiAgICB2YWx1ZSA9IHR5cGUuZGVzZXJpYWxpemUodmFsdWUpO1xuICB9IGNhdGNoKGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsaWRhdGlvbjogZmFpbHVyZShlLm1lc3NhZ2UpLFxuICAgICAgdmFsdWU6dmFsdWVcbiAgICB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgdmFsaWRhdGlvbjogc3VjY2VzcyxcbiAgICB2YWx1ZTp2YWx1ZVxuICB9O1xufVxuXG4vKipcbiAqIFZhbGlkYXRlIHZhbHVlIGFnYWluc3Qgc2NoZW1hXG4gKlxuICogQHBhcmFtIHtTY2hlbWF9IG5vZGVcbiAqIEBwYXJhbSB7QW55fSB2YWx1ZVxuICogQHJldHVybnMge1ZhbGlkYXRpb259XG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlKG5vZGUsIHZhbHVlKSB7XG4gIGlmIChzY2hlbWEuaXNTY2hlbWEobm9kZSkpIHtcbiAgICByZXR1cm4gdmFsaWRhdGVTY2hlbWEobm9kZSwgdmFsdWUpO1xuICB9IGVsc2UgaWYgKHNjaGVtYS5pc0xpc3Qobm9kZSkpIHtcbiAgICByZXR1cm4gdmFsaWRhdGVMaXN0KG5vZGUsIHZhbHVlKTtcbiAgfSBlbHNlIGlmIChzY2hlbWEuaXNQcm9wZXJ0eShub2RlKSkge1xuICAgIHJldHVybiB2YWxpZGF0ZVByb3BlcnR5KG5vZGUsIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB1dGlscy5pbnZhcmlhbnQoXG4gICAgICBmYWxzZSxcbiAgICAgICdkbyBub3Qga25vdyBob3cgdG8gdmFsaWRhdGUgJyArIG5vZGUgKyAnIG9mIHR5cGUgJyArIG5vZGUuY29uc3RydWN0b3JcbiAgICApO1xuICB9XG59XG5cbi8qKlxuICogVmFsaWRhdGUgdmFsdWUgYWdhaW5zdCBzY2hlbWEgYnV0IG9ubHkgdXNpbmcgdGhlIHJvb3Qgc2NoZW1hIG5vZGUuXG4gKlxuICogVGhpcyBtZXRob2QgaXMgdXNlZnVsIHdoZW4gZG9pbmcgYW4gaW5jcmVtZW50YWwgdmFsaWRhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1NjaGVtYX0gbm9kZVxuICogQHBhcmFtIHtBbnl9IHZhbHVlXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbn1cbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVPbmx5KG5vZGUsIHZhbHVlLCBjaGlsZHJlbikge1xuICBpZiAoc2NoZW1hLmlzU2NoZW1hKG5vZGUpKSB7XG4gICAgcmV0dXJuIHZhbGlkYXRlU2NoZW1hT25seShub2RlLCB2YWx1ZSwgY2hpbGRyZW4pO1xuICB9IGVsc2UgaWYgKHNjaGVtYS5pc0xpc3Qobm9kZSkpIHtcbiAgICByZXR1cm4gdmFsaWRhdGVMaXN0T25seShub2RlLCB2YWx1ZSwgY2hpbGRyZW4pO1xuICB9IGVsc2UgaWYgKHNjaGVtYS5pc1Byb3BlcnR5KG5vZGUpKSB7XG4gICAgcmV0dXJuIHZhbGlkYXRlUHJvcGVydHkobm9kZSwgdmFsdWUsIGNoaWxkcmVuKTtcbiAgfSBlbHNlIHtcbiAgICB1dGlscy5pbnZhcmlhbnQoXG4gICAgICBmYWxzZSxcbiAgICAgICdkbyBub3Qga25vdyBob3cgdG8gdmFsaWRhdGUgJyArIG5vZGUgKyAnIG9mIHR5cGUgJyArIG5vZGUuY29uc3RydWN0b3JcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlU2NoZW1hKG5vZGUsIHZhbHVlKSB7XG4gIHZhciBjaGlsZHJlblZhbGlkYXRpb24gPSB2YWxpZGF0ZVNjaGVtYUNoaWxkcmVuKG5vZGUsIHZhbHVlKTtcblxuICB2YXIgY29udmVydGVkVmFsdWUgPSB2YWx1ZTtcblxuICBpZiAoT2JqZWN0LmtleXMoY2hpbGRyZW5WYWxpZGF0aW9uLmNoaWxkcmVuKS5sZW5ndGggPiAwKSB7XG4gICAgY29udmVydGVkVmFsdWUgPSB7fTtcbiAgICBmb3IgKHZhciBrIGluIHZhbHVlKSB7XG4gICAgICBjb252ZXJ0ZWRWYWx1ZVtrXSA9IGNoaWxkcmVuVmFsaWRhdGlvbi5jaGlsZHJlbltrXSAhPT0gdW5kZWZpbmVkID9cbiAgICAgICAgY2hpbGRyZW5WYWxpZGF0aW9uLmNoaWxkcmVuW2tdIDpcbiAgICAgICAgdmFsdWVba107XG4gICAgfVxuICB9XG5cbiAgdmFyIHZhbGlkYXRpb24gPSB2YWxpZGF0ZVNjaGVtYU9ubHkoXG4gICAgICBub2RlLFxuICAgICAgY29udmVydGVkVmFsdWUsXG4gICAgICBjaGlsZHJlblZhbGlkYXRpb24udmFsaWRhdGlvblxuICApO1xuXG4gIHJldHVybiB2YWxpZGF0aW9uO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVNjaGVtYU9ubHkobm9kZSwgdmFsdWUsIGNoaWxkcmVuKSB7XG5cbiAgaWYgKCFhcmVDaGlsZHJlblZhbGlkKGNoaWxkcmVuKSkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTp2YWx1ZSxcbiAgICAgIHZhbGlkYXRpb246IHtcbiAgICAgICAgdmFsaWRhdGlvbjoge2ZhaWx1cmU6IHVuZGVmaW5lZH0sXG4gICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICB2YXIgZGVzZXJpYWxpemVkID0gZGVzZXJpYWxpemVPbmx5KG5vZGUsIHZhbHVlKTtcblxuICBpZiAoaXNGYWlsdXJlKGRlc2VyaWFsaXplZC52YWxpZGF0aW9uKSkge1xuICAgIHJldHVybiBkZXNlcmlhbGl6ZWQ7XG4gIH1cblxuICB2YXIgdmFsaWRhdG9yID0gZXhpc3RzLmFuZFRoZW4obm9kZS5wcm9wcy52YWxpZGF0ZSk7XG4gIHZhciB2YWxpZGF0aW9uID0gdmFsaWRhdG9yKHZhbHVlLCBub2RlLnByb3BzKTtcblxuICByZXR1cm4ge1xuICAgIHZhbHVlOiBkZXNlcmlhbGl6ZWQudmFsdWUsXG4gICAgdmFsaWRhdGlvbjoge3ZhbGlkYXRpb246dmFsaWRhdGlvbn1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVTY2hlbWFDaGlsZHJlbihub2RlLCB2YWx1ZSkge1xuICB2YXIgdmFsaWRhdGlvbiA9IHt9O1xuICB2YXIgY2hpbGRyZW4gPSB7fTtcblxuICBpZiAodmFsdWUgJiYgbm9kZS5jaGlsZHJlbikge1xuICAgIGZvciAodmFyIG5hbWUgaW4gbm9kZS5jaGlsZHJlbikge1xuICAgICAgdmFyIGNoaWxkVmFsaWRhdGlvbiA9IHZhbGlkYXRlKG5vZGUuY2hpbGRyZW5bbmFtZV0sIHZhbHVlW25hbWVdKTtcblxuICAgICAgaWYgKGlzRmFpbHVyZShjaGlsZFZhbGlkYXRpb24udmFsaWRhdGlvbikpIHtcbiAgICAgICAgdmFsaWRhdGlvbltuYW1lXSA9IGNoaWxkVmFsaWRhdGlvbi52YWxpZGF0aW9uO1xuICAgICAgfVxuXG4gICAgICBjaGlsZHJlbltuYW1lXSA9IGNoaWxkVmFsaWRhdGlvbi52YWx1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge3ZhbGlkYXRpb246dmFsaWRhdGlvbiwgY2hpbGRyZW46Y2hpbGRyZW59O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUxpc3Qobm9kZSwgdmFsdWUpIHtcbiAgdmFyIGNoaWxkcmVuVmFsaWRhdGlvbiA9IHZhbGlkYXRlTGlzdENoaWxkcmVuKG5vZGUsIHZhbHVlKTtcblxuICB2YXIgdmFsaWRhdGlvbiA9IHZhbGlkYXRlTGlzdE9ubHkoXG4gICAgICBub2RlLFxuICAgICAgY2hpbGRyZW5WYWxpZGF0aW9uLmNoaWxkcmVuLFxuICAgICAgY2hpbGRyZW5WYWxpZGF0aW9uLnZhbGlkYXRpb25cbiAgKTtcbiAgcmV0dXJuIHZhbGlkYXRpb247XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlTGlzdE9ubHkobm9kZSwgdmFsdWUsIGNoaWxkcmVuKSB7XG5cbiAgaWYgKCFhcmVDaGlsZHJlblZhbGlkKGNoaWxkcmVuKSkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTp2YWx1ZSxcbiAgICAgIHZhbGlkYXRpb246IHtcbiAgICAgICAgdmFsaWRhdGlvbjoge2ZhaWx1cmU6IHVuZGVmaW5lZH0sXG4gICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICB2YXIgZGVzZXJpYWxpemVkID0gZGVzZXJpYWxpemVPbmx5KG5vZGUsIHZhbHVlKTtcblxuICBpZiAoaXNGYWlsdXJlKGRlc2VyaWFsaXplZC52YWxpZGF0aW9uKSkge1xuICAgIHJldHVybiBkZXNlcmlhbGl6ZWQ7XG4gIH1cblxuICB2YXIgdmFsaWRhdG9yID0gbm9uRW1wdHkuYW5kVGhlbihub2RlLnByb3BzLnZhbGlkYXRlKTtcbiAgdmFyIHZhbGlkYXRpb24gPSB2YWxpZGF0b3IoZGVzZXJpYWxpemVkLnZhbHVlLCBub2RlLnByb3BzKTtcblxuICByZXR1cm4ge1xuICAgIHZhbHVlOiBkZXNlcmlhbGl6ZWQudmFsdWUsXG4gICAgdmFsaWRhdGlvbjoge3ZhbGlkYXRpb246dmFsaWRhdGlvbn1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVMaXN0Q2hpbGRyZW4obm9kZSwgdmFsdWUpIHtcbiAgdmFyIHZhbGlkYXRpb24gPSB7fTtcbiAgdmFyIGNoaWxkcmVuID0gW107XG5cbiAgaWYgKHZhbHVlICYmIG5vZGUuY2hpbGRyZW4pIHtcbiAgICBmb3IgKHZhciBpZHggPSAwLCBsZW4gPSB2YWx1ZS5sZW5ndGg7IGlkeCA8IGxlbjsgaWR4KyspIHtcbiAgICAgIHZhciBjaGlsZFZhbGlkYXRpb24gPSB2YWxpZGF0ZShub2RlLmNoaWxkcmVuLCB2YWx1ZVtpZHhdKTtcbiAgICAgIGlmIChpc0ZhaWx1cmUoY2hpbGRWYWxpZGF0aW9uLnZhbGlkYXRpb24pKSB7XG4gICAgICAgIHZhbGlkYXRpb25baWR4XSA9IGNoaWxkVmFsaWRhdGlvbi52YWxpZGF0aW9uO1xuICAgICAgfVxuICAgICAgY2hpbGRyZW5baWR4XSA9IGNoaWxkVmFsaWRhdGlvbi52YWx1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge3ZhbGlkYXRpb246dmFsaWRhdGlvbiwgY2hpbGRyZW46Y2hpbGRyZW59O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BlcnR5KG5vZGUsIHZhbHVlKSB7XG5cbiAgdmFyIGRlc2VyaWFsaXplZCA9IGRlc2VyaWFsaXplT25seShub2RlLCB2YWx1ZSk7XG5cbiAgaWYgKGlzRmFpbHVyZShkZXNlcmlhbGl6ZWQudmFsaWRhdGlvbikpIHtcbiAgICByZXR1cm4gZGVzZXJpYWxpemVkO1xuICB9XG5cbiAgdmFyIHZhbGlkYXRvciA9IGV4aXN0cy5hbmRUaGVuKG5vZGUucHJvcHMudmFsaWRhdGUpO1xuICB2YXIgdmFsaWRhdGlvbiA9IHZhbGlkYXRvcihkZXNlcmlhbGl6ZWQudmFsdWUsIG5vZGUucHJvcHMpO1xuXG4gIHJldHVybiB7XG4gICAgdmFsdWU6IGRlc2VyaWFsaXplZC52YWx1ZSxcbiAgICB2YWxpZGF0aW9uOiB7dmFsaWRhdGlvbjp2YWxpZGF0aW9ufVxuICB9O1xufVxuXG52YXIgc3VjY2VzcyA9IHtcbiAgdmFsaWRhdGlvbjoge30sXG4gIGNoaWxkcmVuOiB7fVxufTtcblxuZnVuY3Rpb24gZmFpbHVyZShmYWlsdXJlKSB7XG4gIHJldHVybiB7dmFsaWRhdGlvbjoge2ZhaWx1cmU6ZmFpbHVyZX19O1xufVxuXG5mdW5jdGlvbiBpc1N1Y2Nlc3ModmFsaWRhdGlvbikge1xuICByZXR1cm4gIWlzRmFpbHVyZSh2YWxpZGF0aW9uKTtcbn1cblxuZnVuY3Rpb24gaXNGYWlsdXJlKHZhbGlkYXRpb24pIHtcbiAgcmV0dXJuIChcbiAgICAodmFsaWRhdGlvbi52YWxpZGF0aW9uICYmIHZhbGlkYXRpb24udmFsaWRhdGlvbi5mYWlsdXJlICE9PSB1bmRlZmluZWQpXG4gICAgfHwgKHZhbGlkYXRpb24uY2hpbGRyZW4gIT09IHVuZGVmaW5lZCAmJiAhYXJlQ2hpbGRyZW5WYWxpZCh2YWxpZGF0aW9uLmNoaWxkcmVuKSlcbiAgKTtcbn1cblxuXG5mdW5jdGlvbiBhcmVDaGlsZHJlblZhbGlkKGNoaWxkcmVuKSB7XG4gIGZvciAodmFyIGsgaW4gY2hpbGRyZW4pIHtcbiAgICBpZiAoaXNGYWlsdXJlKGNoaWxkcmVuW2tdKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdmFsaWRhdGU6dmFsaWRhdGUsIHZhbGlkYXRlT25seTp2YWxpZGF0ZU9ubHksXG4gIHN1Y2Nlc3M6c3VjY2VzcywgZmFpbHVyZTpmYWlsdXJlLFxuICBkZXNlcmlhbGl6ZU9ubHk6ZGVzZXJpYWxpemVPbmx5LCBzZXJpYWxpemU6c2VyaWFsaXplLFxuICBpc1N1Y2Nlc3M6aXNTdWNjZXNzLCBpc0ZhaWx1cmU6aXNGYWlsdXJlXG59O1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyAgICAgICAgID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgc3VjY2VzcyA9IHtmYWlsdXJlOiB1bmRlZmluZWR9O1xudmFyIGNvbW1vbkZhaWx1cmUgPSB7ZmFpbHVyZTogJ2ludmFsaWQgdmFsdWUnfTtcblxuZnVuY3Rpb24gaXNTdWNjZXNzKHZhbGlkYXRpb24pIHtcbiAgcmV0dXJuIHZhbGlkYXRpb24uZmFpbHVyZSA9PT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBpc0ZhaWx1cmUodmFsaWRhdGlvbikge1xuICByZXR1cm4gdmFsaWRhdGlvbi5mYWlsdXJlICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIG1ha2UoZnVuYykge1xuICB2YXIgd3JhcHBlciA9IGZ1bmN0aW9uKHZhbHVlLCBzY2hlbWEpICB7XG4gICAgdmFyIG1heWJlRmFpbHVyZSA9IGZ1bmModmFsdWUsIHNjaGVtYSk7XG4gICAgaWYgKG1heWJlRmFpbHVyZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgfVxuICAgIGlmIChtYXliZUZhaWx1cmUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gY29tbW9uRmFpbHVyZTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzU3RyaW5nKG1heWJlRmFpbHVyZSkpIHtcbiAgICAgIHJldHVybiB7ZmFpbHVyZTogbWF5YmVGYWlsdXJlfTtcbiAgICB9XG4gICAgcmV0dXJuIG1heWJlRmFpbHVyZTtcbiAgfTtcbiAgd3JhcHBlci5hbmRUaGVuID0gYW5kVGhlbi5iaW5kKG51bGwsIHdyYXBwZXIpO1xuICB3cmFwcGVyLmlzVmFsaWRhdG9yID0gdHJ1ZTtcbiAgcmV0dXJuIHdyYXBwZXI7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRvckVtcHR5KGZ1bmMpIHtcbiAgaWYgKCFmdW5jKSB7XG4gICAgcmV0dXJuIHV0aWxzLmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlO1xuICB9XG4gIGlmIChmdW5jLmlzVmFsaWRhdG9yKSB7XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH1cblxuICByZXR1cm4gbWFrZShmdW5jKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdG9yKGZ1bmMpIHtcbiAgaWYgKCFmdW5jKSB7XG4gICAgcmV0dXJuIHV0aWxzLmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlO1xuICB9XG4gIGlmIChmdW5jLmlzVmFsaWRhdG9yKSB7XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH1cblxuICB2YXIgd3JhcHBlciA9IGZ1bmN0aW9uKHZhbHVlLCBzY2hlbWEpIFxuICAgIHtyZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCA/XG4gICAgICB0cnVlIDpcbiAgICAgIGZ1bmModmFsdWUsIHNjaGVtYSk7fTtcblxuICByZXR1cm4gbWFrZSh3cmFwcGVyKTtcbn1cblxuZnVuY3Rpb24gYW5kVGhlbihmaXJzdCwgc2Vjb25kKSB7XG4gIGlmICghc2Vjb25kKSB7XG4gICAgcmV0dXJuIGZpcnN0O1xuICB9XG5cbiAgc2Vjb25kID0gdmFsaWRhdG9yKHNlY29uZCk7XG5cbiAgdmFyIHdyYXBwZXIgPSBmdW5jdGlvbih2YWx1ZSwgc2NoZW1hKSAge1xuICAgIHZhciB2YWxpZGF0aW9uID0gZmlyc3QodmFsdWUsIHNjaGVtYSk7XG4gICAgcmV0dXJuIGlzRmFpbHVyZSh2YWxpZGF0aW9uKSA/XG4gICAgICB2YWxpZGF0aW9uIDpcbiAgICAgIHNlY29uZCh2YWx1ZSwgc2NoZW1hKTtcbiAgfTtcblxuICByZXR1cm4gbWFrZSh3cmFwcGVyKTtcbn1cblxudmFyIGV4aXN0cyA9IHZhbGlkYXRvckVtcHR5KGZ1bmN0aW9uKHZhbHVlLCBzY2hlbWEpIFxuICB7cmV0dXJuIHNjaGVtYS5yZXF1aXJlZCAmJiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkgP1xuICAgICd2YWx1ZSBpcyByZXF1aXJlZCcgOlxuICAgIHRydWU7fSk7XG5cbnZhciBub25FbXB0eSA9IHZhbGlkYXRvcihmdW5jdGlvbih2YWx1ZSwgc2NoZW1hKSBcbiAge3JldHVybiBzY2hlbWEubm9uRW1wdHkgJiYgdmFsdWUubGVuZ3RoID09PSAwID9cbiAgICAnYXQgbGVhc3Qgb25lIGl0ZW0gaXMgcmVxdWlyZWQnIDpcbiAgICB0cnVlO30pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdmFsaWRhdG9yRW1wdHk6dmFsaWRhdG9yRW1wdHksXG4gIHZhbGlkYXRvcjp2YWxpZGF0b3IsXG5cbiAgaXNTdWNjZXNzOmlzU3VjY2VzcyxcbiAgaXNGYWlsdXJlOmlzRmFpbHVyZSxcblxuICBzdWNjZXNzOnN1Y2Nlc3MsXG4gIGV4aXN0czpleGlzdHMsXG4gIG5vbkVtcHR5Om5vbkVtcHR5XG59O1xuIl19
