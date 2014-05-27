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
    var schema = this.value().schema;
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
    var serializedValueLens = this.value().serializedValueLens;
    if (serializedValueLens.isUndefined()) {
      var value = this.value().updateSerializedValue(serializedValueLens.val());
      this.onValueUpdate(value);
    }
  },

  render: function() {
    var value = this.value();
    var externalValidation = this.externalValidation();

    var className = cx({
      'react-forms-field': true,
      'invalid': isFailure(value.validation)
    });

    var id = this._rootNodeID;

    var input = this.renderInputComponent({id:id, onBlur: this.onBlur});

    return (
      React.DOM.div( {className:className}, 
        this.renderLabel({htmlFor: id}),
        this.transferPropsTo(input),
        isFailure(externalValidation) &&
          Message(null, externalValidation.validation.failure),
        isFailure(value.validation) && !value.serializedValueLens.isUndefined() &&
          Message(null, value.validation.validation.failure)
      )
    );
  }
});

module.exports = Field;

},{"./FieldMixin":3,"./Message":12,"./utils":26,"./validation":27}],3:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var React            = (window.React);
var cloneWithProps   = React.addons.cloneWithProps;
var mergeInto        = require('./utils').mergeInto;
var FormElementMixin = require('./FormElementMixin');

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

    var serializedValue = getValueFromEvent(e);
    var value = this.value().updateSerializedValue(serializedValue);
    this.onValueUpdate(value);
  },

  /**
   * Render input component.
   *
   * @returns {ReactComponent}
   */
  renderInputComponent: function(props) {
    var value = this.value();
    var serializedValue = value.serializedValue;
    var schema = value.schema;

    var input = this.props.input || schema && schema.props.input;
    var inputProps = {value: serializedValue, onChange: this.onChange};

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
    var schema = this.value().schema;
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

var FormElementMixin = require('./FormElementMixin');
var FormContextMixin = require('./FormContextMixin');

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

var ContextTypes = {
  value: React.PropTypes.object,
  externalValidation: React.PropTypes.any,
  onValueUpdate: React.PropTypes.func
};

/**
 * Mixin for components which exposes form context.
 *
 * See Form (via FormMixin), Fieldset (via FieldsetMixin) and RepeatingFieldset
 * (via RepeatingFieldsetMixin) for components which expose form context.
 */
var FormContextMixin = {

  childContextTypes: ContextTypes,

  getChildContext: function() {
    return {
      value: this.value(),
      externalValidation: this.externalValidation(),
      onValueUpdate: this.onValueUpdate
    };
  }
};

module.exports = FormContextMixin;
module.exports.ContextTypes = ContextTypes;

},{}],8:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var React            = (window.React);
var FormContextMixin = require('./FormContextMixin');
var v                = require('./validation');

/**
 * Mixin for the form element (form field, fieldset of repeating fieldset).
 */
var FormElementMixin = {

  propTypes: {
    name: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ])
  },

  contextTypes: FormContextMixin.ContextTypes,

  value: function() {
    var value = this.context.value;
    if (this.props.name) {
      value = value.get(this.props.name);
    }
    return value;
  },

  externalValidation: function() {
    var externalValidation = this.context.externalValidation;
    if (this.props.name !== undefined &&
        externalValidation &&
        externalValidation.children) {
      return externalValidation.children[this.props.name] || v.success;
    }
    return externalValidation || v.success;
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
  onValueUpdate: function(value) {
    value = this.value().merge(value);
    this.context.onValueUpdate(value);
  }
};

module.exports = FormElementMixin;

},{"./FormContextMixin":7,"./validation":27}],9:[function(require,module,exports){
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
    var component = createComponentFromSchema(this.value().schema);
    return this.transferPropsTo(component);
  }
});

module.exports = FormFor;

},{"./FormElementMixin":8,"./createComponentFromSchema":15}],10:[function(require,module,exports){
/**
 * @jsx React.DOM
 */
'use strict';

var React                     = (window.React);
var FormContextMixin          = require('./FormContextMixin');
var getDefaultValueForSchema  = require('./getDefaultValueForSchema');
var FormValue                 = require('./FormValue');
var v                         = require('./validation');

/**
 * Mixin which handles form value and form validation state.
 *
 * @private
 */
var FormStateMixin = {

  propTypes: {
    defaultValue: React.PropTypes.any,
    value: React.PropTypes.any,
    externalValidation: React.PropTypes.any,
    schema: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func,
    onUpdate: React.PropTypes.func
  },

  getInitialState: function() {
    var value = (
      this.props.value
      || this.props.defaultValue
      || getDefaultValueForSchema(this.props.schema)
    );
    return this._getFormState(value);
  },

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.value !== undefined) {
      this._setFormState(this._getFormState(nextProps.value));
    }
  },

  value: function() {
    return this.state.value;
  },

  externalValidation: function() {
    return this.props.externalValidation || v.success;
  },

  updateValue: function(value) {
    this._setFormState(this._getFormState(value));
  },

  /**
   * Called when the form value and validation state is being updated.
   *
   * @param {Any} value
   * @param {Validation} validation
   * @param {Any} convertedValue
   */
  onValueUpdate: function(value) {
    if (this.props.onUpdate) {
      this.props.onUpdate(value.value, value);
    }
    if (this.props.onChange && v.isSuccess(value.validation)) {
      this.props.onChange(value.value, value);
    }
    this._setFormState({value:value});
  },

  _getFormState: function(value) {
    if (!FormValue.isFormValue(value)) {
      value = FormValue(this.props.schema, value);
    }
    return {value:value};
  },

  _setFormState: function(formState) {
    if (typeof this.setFormState === 'function') {
      this.setFormState(formState);
    } else {
      this.setState(formState);
    }
  }
};

var FormMixin = {
  mixins: [FormStateMixin, FormContextMixin]
};

module.exports = FormMixin;

},{"./FormContextMixin":7,"./FormValue":11,"./getDefaultValueForSchema":16,"./validation":27}],11:[function(require,module,exports){
/**
 * FormValue is a set of classes which incapsulate form value along with schema
 * and validation state.
 *
 * @jsx React.DOM
 */
'use strict';

var lens                     = require('./lens');
var invariant                = require('./utils').invariant;
var v                        = require('./validation');
var s                        = require('./schema');
var getDefaultValueForSchema = require('./getDefaultValueForSchema');

var str = JSON.stringify.bind(JSON);

/**
 * Abstract base class for form values.
 */


  function Value(
      schemaLens,
      valueLens,
      serializedValueLens,
      validationLens,
      path) {

    this.schemaLens = schemaLens;
    this.valueLens = valueLens;
    this.serializedValueLens = serializedValueLens;
    this.validationLens = validationLens;

    this.path = path;

    this.schema = schemaLens.val();
    this.value = valueLens.val();
    this.serializedValue = serializedValueLens.val();
    this.validation = validationLens.val();
  }

  Value.prototype.merge=function(value) {
    invariant(
      value.schemaLens.root() === this.schemaLens.root(),
      'trying to merge with a value which have different schema'
    );

    return value;
  };


for(var Value____Key in Value){if(Value.hasOwnProperty(Value____Key)){PropetyValue[Value____Key]=Value[Value____Key];}}var ____SuperProtoOfValue=Value===null?null:Value.prototype;PropetyValue.prototype=Object.create(____SuperProtoOfValue);PropetyValue.prototype.constructor=PropetyValue;PropetyValue.__superConstructor__=Value;function PropetyValue(){if(Value!==null){Value.apply(this,arguments);}}

  PropetyValue.prototype.updateSerializedValue=function(serializedValue) {
    var serializedValueLens = this.serializedValueLens.mod(serializedValue);
    var validation = v.validate(this.schema, serializedValue);
    var validationLens = this.validationLens.update(validation.validation);
    var valueLens = this.valueLens;

    if (v.isSuccess(validation.validation)) {
      valueLens = this.valueLens.mod(validation.value);
    }

    return new this.constructor(
      this.schemaLens,
      valueLens,
      serializedValueLens,
      validationLens,
      this.path
    );
  };


/**
 * Abstract base class for composite form values.
 */
for(Value____Key in Value){if(Value.hasOwnProperty(Value____Key)){CompositeValue[Value____Key]=Value[Value____Key];}}CompositeValue.prototype=Object.create(____SuperProtoOfValue);CompositeValue.prototype.constructor=CompositeValue;CompositeValue.__superConstructor__=Value;function CompositeValue(){if(Value!==null){Value.apply(this,arguments);}}

  /**
   * Get a sub-value of a composite value.
   *
   * @param {String} name
   * @returns {Value}
   */
  CompositeValue.prototype.get=function(name) {
    var schemaLens = this.getSchemaLens(name);
    var schema = schemaLens.val();

    invariant(
      !schemaLens.isUndefined(),
      ("trying to get a value for an invalid key " + str(name))
    );

    var valueLens = this.valueLens.get(name, getDefaultValueForSchema(schema));
    var value = valueLens.val();

    return _make(
      schemaLens,
      valueLens,
      this.serializedValueLens.get(name, v.serialize(schema, value)),
      this.validationLens.get('children', {}).get(name, v.success),
      this.path.concat(name)
    );
  };

  /**
   * Produce a new value by merging with another value.
   *
   * @param {Value} value
   * @returns {Value}
   */
  CompositeValue.prototype.merge=function(value) {
    invariant(
      value.schemaLens.root() === this.schemaLens.root(),
      'trying to merge with a value which have different schema'
    );

    var valueLens = this.valueLens
      .for(value.valueLens.root());
    var serializedValueLens = this.serializedValueLens
      .for(value.serializedValueLens.root());
    var validationLens = this.validationLens
      .for(value.validationLens.root());

    var local = v.validateOnly(
      this.schema,
      valueLens.val(),
      validationLens.val().children
    );

    validationLens = validationLens.update(local.validation);

    if (v.isFailure(validationLens.val())) {
      // revert to the previous value
      valueLens = this.valueLens;
    } else {
      valueLens = valueLens.mod(local.value);
    }

    return new this.constructor(
      this.schemaLens,
      valueLens,
      serializedValueLens,
      validationLens,
      this.path
    );
  };



for(var CompositeValue____Key in CompositeValue){if(CompositeValue.hasOwnProperty(CompositeValue____Key)){ListValue[CompositeValue____Key]=CompositeValue[CompositeValue____Key];}}var ____SuperProtoOfCompositeValue=CompositeValue===null?null:CompositeValue.prototype;ListValue.prototype=Object.create(____SuperProtoOfCompositeValue);ListValue.prototype.constructor=ListValue;ListValue.__superConstructor__=CompositeValue;function ListValue(){if(CompositeValue!==null){CompositeValue.apply(this,arguments);}}

  ListValue.prototype.getSchemaLens=function() {
    return this.schemaLens.get('children');
  };

  /**
   * Produce a new ListValue by adding a value
   *
   * @param {Any} value
   * @returns {FormValue}
   */
  ListValue.prototype.add=function(value) {
    if (value === undefined) {
      value = getDefaultValueForSchema(this.schema.children);
    }

    var serializedValue = v.serialize(this.schema.children, value);

    return new this.constructor(
      this.schemaLens,
      this.valueLens.mod(this.value.concat(value)),
      this.serializedValueLens.mod(this.serializedValue.concat(serializedValue)),
      this.validationLens,
      this.path
    );
  };

  /**
   * Produce a new ListValue by removing an element by index.
   *
   * @param {Number} index
   * @returns {FormValue}
   */
  ListValue.prototype.remove=function(index) {
    var value = this.value.slice(0);
    var serializedValue = this.serializedValue.slice(0);

    value.splice(index, 1);
    serializedValue.splice(index, 1);

    return new this.constructor(
      this.schemaLens,
      this.valueLens.mod(value),
      this.serializedValueLens.mod(serializedValue),
      this.validationLens,
      this.path
    );
  };


for(CompositeValue____Key in CompositeValue){if(CompositeValue.hasOwnProperty(CompositeValue____Key)){SchemaValue[CompositeValue____Key]=CompositeValue[CompositeValue____Key];}}SchemaValue.prototype=Object.create(____SuperProtoOfCompositeValue);SchemaValue.prototype.constructor=SchemaValue;SchemaValue.__superConstructor__=CompositeValue;function SchemaValue(){if(CompositeValue!==null){CompositeValue.apply(this,arguments);}}

  SchemaValue.prototype.getSchemaLens=function(name) {
    return this.schemaLens.get('children').get(name);
  };


/**
 * Make a form value.
 */
function _make(
    schemaLens,
    valueLens,
    serializedValueLens,
    validationLens,
    path) {
  path = path || [];

  var schema = schemaLens.val();

  var constructor;

  if (s.isSchema(schema)) {
    constructor = SchemaValue;
  } else if (s.isList(schema)) {
    constructor = ListValue;
  } else if (s.isProperty(schema)) {
    constructor = PropetyValue;
  } else {
    invariant(
      false,
      "do not know how to construct value"
    );
  }

  return new constructor(
    schemaLens,
    valueLens,
    serializedValueLens,
    validationLens,
    path
  );
}

function make(schema, value, serializedValue, validation, path) {
  if (validation === undefined) {
    validation = v.validate(schema, value).validation;
  }

  if (serializedValue === undefined) {
    serializedValue = v.serialize(schema, value);
  }

  var schemaLens = lens(schema);
  var valueLens = lens(value);
  var serializedValueLens = lens(serializedValue);
  var validationLens = lens(validation);

  return _make(
    schemaLens,
    valueLens,
    serializedValueLens,
    validationLens,
    path
  );
}

function isFormValue(value) {
  return value instanceof Value;
}

module.exports = make;
module.exports.isFormValue = isFormValue;

},{"./getDefaultValueForSchema":16,"./lens":22,"./schema":24,"./utils":26,"./validation":27}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
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
    var schema = this.value().schema;
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

},{"./RepeatingFieldsetMixin":14}],14:[function(require,module,exports){
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
    var value = this.value();
    var children = createComponentFromSchema(value.schema.children);
    return value.serializedValue.map(function(item, name) 
      {return cloneWithProps(children, {name:name, key: name});});
  },

  /**
   * Remove a value from fieldset's value by index
   *
   * @param {Number} index
   */
  remove: function(index) {
    var value = this.value().remove(index);
    this.onValueUpdate(value);
    if (this.props.onRemove) {
      this.props.onRemove(index);
    }
  },

  /**
   * Add new value to fieldset's value.
   */
  add: function(itemValue) {
    var value = this.value().add(itemValue);
    this.onValueUpdate(value);
    if (this.props.onAdd) {
      this.props.onAdd(value.value[value.value.length - 1]);
    }
  }
};

module.exports = RepeatingFieldsetMixin;

},{"./FormContextMixin":7,"./FormElementMixin":8,"./createComponentFromSchema":15,"./getDefaultValueForSchema":16,"./validation":27}],15:[function(require,module,exports){
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

},{"./Field":2,"./Fieldset":4,"./RepeatingFieldset":13,"./schema":24,"./utils":26}],16:[function(require,module,exports){
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

},{"./Field":2,"./FieldMixin":3,"./Fieldset":4,"./FieldsetMixin":5,"./Form":6,"./FormContextMixin":7,"./FormElementMixin":8,"./FormFor":9,"./FormMixin":10,"./Message":12,"./RepeatingFieldset":13,"./RepeatingFieldsetMixin":14,"./input":21,"./messages":23,"./schema":24,"./types":25,"./validation":27,"./validators":28}],19:[function(require,module,exports){
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

  Lens.prototype.rootLens=function() {
    return new this.constructor(this.__data, []);
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
    if (this.isLens(data)) {
      return data;
    }
    return new this(data, []);
  };

  Lens.isLens=function(o) {
    return o instanceof Lens;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvd2F0Y2hpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvaW5kZXguanMiLCIvVXNlcnMvYW5kcmV5cG9wcC9Xb3Jrc3BhY2UvcHJvbWV0aGV1cy9yZWFjdC1mb3Jtcy9zdGFuZGFsb25lL2xpYi9GaWVsZC5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvbGliL0ZpZWxkTWl4aW4uanMiLCIvVXNlcnMvYW5kcmV5cG9wcC9Xb3Jrc3BhY2UvcHJvbWV0aGV1cy9yZWFjdC1mb3Jtcy9zdGFuZGFsb25lL2xpYi9GaWVsZHNldC5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvbGliL0ZpZWxkc2V0TWl4aW4uanMiLCIvVXNlcnMvYW5kcmV5cG9wcC9Xb3Jrc3BhY2UvcHJvbWV0aGV1cy9yZWFjdC1mb3Jtcy9zdGFuZGFsb25lL2xpYi9Gb3JtLmpzIiwiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL3Byb21ldGhldXMvcmVhY3QtZm9ybXMvc3RhbmRhbG9uZS9saWIvRm9ybUNvbnRleHRNaXhpbi5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvbGliL0Zvcm1FbGVtZW50TWl4aW4uanMiLCIvVXNlcnMvYW5kcmV5cG9wcC9Xb3Jrc3BhY2UvcHJvbWV0aGV1cy9yZWFjdC1mb3Jtcy9zdGFuZGFsb25lL2xpYi9Gb3JtRm9yLmpzIiwiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL3Byb21ldGhldXMvcmVhY3QtZm9ybXMvc3RhbmRhbG9uZS9saWIvRm9ybU1peGluLmpzIiwiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL3Byb21ldGhldXMvcmVhY3QtZm9ybXMvc3RhbmRhbG9uZS9saWIvRm9ybVZhbHVlLmpzIiwiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL3Byb21ldGhldXMvcmVhY3QtZm9ybXMvc3RhbmRhbG9uZS9saWIvTWVzc2FnZS5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvbGliL1JlcGVhdGluZ0ZpZWxkc2V0LmpzIiwiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL3Byb21ldGhldXMvcmVhY3QtZm9ybXMvc3RhbmRhbG9uZS9saWIvUmVwZWF0aW5nRmllbGRzZXRNaXhpbi5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvbGliL2NyZWF0ZUNvbXBvbmVudEZyb21TY2hlbWEuanMiLCIvVXNlcnMvYW5kcmV5cG9wcC9Xb3Jrc3BhY2UvcHJvbWV0aGV1cy9yZWFjdC1mb3Jtcy9zdGFuZGFsb25lL2xpYi9nZXREZWZhdWx0VmFsdWVGb3JTY2hlbWEuanMiLCIvVXNlcnMvYW5kcmV5cG9wcC9Xb3Jrc3BhY2UvcHJvbWV0aGV1cy9yZWFjdC1mb3Jtcy9zdGFuZGFsb25lL2xpYi9nZXRUeXBlRnJvbVNjaGVtYS5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvbGliL2luZGV4LmpzIiwiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL3Byb21ldGhldXMvcmVhY3QtZm9ybXMvc3RhbmRhbG9uZS9saWIvaW5wdXQvQ2hlY2tib3hHcm91cC5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvbGliL2lucHV0L1JhZGlvQnV0dG9uR3JvdXAuanMiLCIvVXNlcnMvYW5kcmV5cG9wcC9Xb3Jrc3BhY2UvcHJvbWV0aGV1cy9yZWFjdC1mb3Jtcy9zdGFuZGFsb25lL2xpYi9pbnB1dC9pbmRleC5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvbGliL2xlbnMuanMiLCIvVXNlcnMvYW5kcmV5cG9wcC9Xb3Jrc3BhY2UvcHJvbWV0aGV1cy9yZWFjdC1mb3Jtcy9zdGFuZGFsb25lL2xpYi9tZXNzYWdlcy5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvbGliL3NjaGVtYS5qcyIsIi9Vc2Vycy9hbmRyZXlwb3BwL1dvcmtzcGFjZS9wcm9tZXRoZXVzL3JlYWN0LWZvcm1zL3N0YW5kYWxvbmUvbGliL3R5cGVzLmpzIiwiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL3Byb21ldGhldXMvcmVhY3QtZm9ybXMvc3RhbmRhbG9uZS9saWIvdXRpbHMuanMiLCIvVXNlcnMvYW5kcmV5cG9wcC9Xb3Jrc3BhY2UvcHJvbWV0aGV1cy9yZWFjdC1mb3Jtcy9zdGFuZGFsb25lL2xpYi92YWxpZGF0aW9uLmpzIiwiL1VzZXJzL2FuZHJleXBvcHAvV29ya3NwYWNlL3Byb21ldGhldXMvcmVhY3QtZm9ybXMvc3RhbmRhbG9uZS9saWIvdmFsaWRhdG9ycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoWydyZWFjdCddLCBmYWN0b3J5KTtcbiAgfSBlbHNlIHtcbiAgICByb290LlJlYWN0Rm9ybXMgPSBmYWN0b3J5KHJvb3QuUmVhY3QpO1xuICB9XG59KSh3aW5kb3csIGZ1bmN0aW9uKFJlYWN0KSB7XG4gIHJldHVybiByZXF1aXJlKCcuL2xpYi8nKTtcbn0pO1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCAgICAgICAgICAgPSAod2luZG93LlJlYWN0KTtcbnZhciBjeCAgICAgICAgICAgICAgPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXQ7XG52YXIgbWVyZ2VJbnRvICAgICAgID0gcmVxdWlyZSgnLi91dGlscycpLm1lcmdlSW50bztcbnZhciBGaWVsZE1peGluICAgICAgPSByZXF1aXJlKCcuL0ZpZWxkTWl4aW4nKTtcbnZhciBNZXNzYWdlICAgICAgICAgPSByZXF1aXJlKCcuL01lc3NhZ2UnKTtcbnZhciBpc0ZhaWx1cmUgICAgICAgPSByZXF1aXJlKCcuL3ZhbGlkYXRpb24nKS5pc0ZhaWx1cmU7XG5cbnZhciBGaWVsZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogJ0ZpZWxkJyxcbiAgbWl4aW5zOiBbRmllbGRNaXhpbl0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgbGFiZWw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbiAgfSxcblxuICByZW5kZXJMYWJlbDogZnVuY3Rpb24ocHJvcHMpIHtcbiAgICB2YXIgc2NoZW1hID0gdGhpcy52YWx1ZSgpLnNjaGVtYTtcbiAgICB2YXIgbGFiZWwgPSB0aGlzLnByb3BzLmxhYmVsID8gdGhpcy5wcm9wcy5sYWJlbCA6IHNjaGVtYS5wcm9wcy5sYWJlbDtcbiAgICB2YXIgaGludCA9IHRoaXMucHJvcHMuaGludCA/IHRoaXMucHJvcHMuaGludCA6IHNjaGVtYS5wcm9wcy5oaW50O1xuICAgIHZhciBsYWJlbFByb3BzID0ge2NsYXNzTmFtZTogJ3JlYWN0LWZvcm1zLWxhYmVsJ307XG4gICAgaWYgKHByb3BzKSB7XG4gICAgICBtZXJnZUludG8obGFiZWxQcm9wcywgcHJvcHMpO1xuICAgIH1cbiAgICByZXR1cm4gKGxhYmVsIHx8IGhpbnQpICYmIFJlYWN0LkRPTS5sYWJlbChsYWJlbFByb3BzLFxuICAgICAgbGFiZWwsXG4gICAgICBoaW50ICYmIFJlYWN0LkRPTS5zcGFuKCB7Y2xhc3NOYW1lOlwicmVhY3QtZm9ybXMtaGludFwifSwgaGludCkpO1xuICB9LFxuXG4gIG9uQmx1cjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNlcmlhbGl6ZWRWYWx1ZUxlbnMgPSB0aGlzLnZhbHVlKCkuc2VyaWFsaXplZFZhbHVlTGVucztcbiAgICBpZiAoc2VyaWFsaXplZFZhbHVlTGVucy5pc1VuZGVmaW5lZCgpKSB7XG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlKCkudXBkYXRlU2VyaWFsaXplZFZhbHVlKHNlcmlhbGl6ZWRWYWx1ZUxlbnMudmFsKCkpO1xuICAgICAgdGhpcy5vblZhbHVlVXBkYXRlKHZhbHVlKTtcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlKCk7XG4gICAgdmFyIGV4dGVybmFsVmFsaWRhdGlvbiA9IHRoaXMuZXh0ZXJuYWxWYWxpZGF0aW9uKCk7XG5cbiAgICB2YXIgY2xhc3NOYW1lID0gY3goe1xuICAgICAgJ3JlYWN0LWZvcm1zLWZpZWxkJzogdHJ1ZSxcbiAgICAgICdpbnZhbGlkJzogaXNGYWlsdXJlKHZhbHVlLnZhbGlkYXRpb24pXG4gICAgfSk7XG5cbiAgICB2YXIgaWQgPSB0aGlzLl9yb290Tm9kZUlEO1xuXG4gICAgdmFyIGlucHV0ID0gdGhpcy5yZW5kZXJJbnB1dENvbXBvbmVudCh7aWQ6aWQsIG9uQmx1cjogdGhpcy5vbkJsdXJ9KTtcblxuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5ET00uZGl2KCB7Y2xhc3NOYW1lOmNsYXNzTmFtZX0sIFxuICAgICAgICB0aGlzLnJlbmRlckxhYmVsKHtodG1sRm9yOiBpZH0pLFxuICAgICAgICB0aGlzLnRyYW5zZmVyUHJvcHNUbyhpbnB1dCksXG4gICAgICAgIGlzRmFpbHVyZShleHRlcm5hbFZhbGlkYXRpb24pICYmXG4gICAgICAgICAgTWVzc2FnZShudWxsLCBleHRlcm5hbFZhbGlkYXRpb24udmFsaWRhdGlvbi5mYWlsdXJlKSxcbiAgICAgICAgaXNGYWlsdXJlKHZhbHVlLnZhbGlkYXRpb24pICYmICF2YWx1ZS5zZXJpYWxpemVkVmFsdWVMZW5zLmlzVW5kZWZpbmVkKCkgJiZcbiAgICAgICAgICBNZXNzYWdlKG51bGwsIHZhbHVlLnZhbGlkYXRpb24udmFsaWRhdGlvbi5mYWlsdXJlKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZpZWxkO1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCAgICAgICAgICAgID0gKHdpbmRvdy5SZWFjdCk7XG52YXIgY2xvbmVXaXRoUHJvcHMgICA9IFJlYWN0LmFkZG9ucy5jbG9uZVdpdGhQcm9wcztcbnZhciBtZXJnZUludG8gICAgICAgID0gcmVxdWlyZSgnLi91dGlscycpLm1lcmdlSW50bztcbnZhciBGb3JtRWxlbWVudE1peGluID0gcmVxdWlyZSgnLi9Gb3JtRWxlbWVudE1peGluJyk7XG5cbi8qKlxuICogTWl4aW4gZm9yIGltcGxlbWVudGluZyBmaWVsZGNvbXBvbmVudHMuXG4gKlxuICogU2VlIDxGaWVsZCAvPiBjb21wb25lbnQgZm9yIHRoZSBiYXNpYyBpbXBsZW1lbnRhdGlvbiBleGFtcGxlLlxuICovXG52YXIgRmllbGRNaXhpbiA9IHtcbiAgbWl4aW5zOiBbRm9ybUVsZW1lbnRNaXhpbl0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgaW5wdXQ6IFJlYWN0LlByb3BUeXBlcy5jb21wb25lbnRcbiAgfSxcblxuICBvbkNoYW5nZTogZnVuY3Rpb24oZSkge1xuICAgIGlmIChlLnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICB2YXIgc2VyaWFsaXplZFZhbHVlID0gZ2V0VmFsdWVGcm9tRXZlbnQoZSk7XG4gICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZSgpLnVwZGF0ZVNlcmlhbGl6ZWRWYWx1ZShzZXJpYWxpemVkVmFsdWUpO1xuICAgIHRoaXMub25WYWx1ZVVwZGF0ZSh2YWx1ZSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlbmRlciBpbnB1dCBjb21wb25lbnQuXG4gICAqXG4gICAqIEByZXR1cm5zIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIHJlbmRlcklucHV0Q29tcG9uZW50OiBmdW5jdGlvbihwcm9wcykge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWUoKTtcbiAgICB2YXIgc2VyaWFsaXplZFZhbHVlID0gdmFsdWUuc2VyaWFsaXplZFZhbHVlO1xuICAgIHZhciBzY2hlbWEgPSB2YWx1ZS5zY2hlbWE7XG5cbiAgICB2YXIgaW5wdXQgPSB0aGlzLnByb3BzLmlucHV0IHx8IHNjaGVtYSAmJiBzY2hlbWEucHJvcHMuaW5wdXQ7XG4gICAgdmFyIGlucHV0UHJvcHMgPSB7dmFsdWU6IHNlcmlhbGl6ZWRWYWx1ZSwgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2V9O1xuXG4gICAgaWYgKHByb3BzKSB7XG4gICAgICBtZXJnZUludG8oaW5wdXRQcm9wcywgcHJvcHMpO1xuICAgIH1cblxuICAgIGlmIChpbnB1dCkge1xuICAgICAgcmV0dXJuIGNsb25lV2l0aFByb3BzKGlucHV0LCBpbnB1dFByb3BzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXRQcm9wcy50eXBlID0gJ3RleHQnO1xuICAgICAgcmV0dXJuIFJlYWN0LkRPTS5pbnB1dChpbnB1dFByb3BzKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogRXh0cmFjdCB2YWx1ZSBmcm9tIGV2ZW50XG4gKlxuICogV2Ugc3VwcG9ydCBib3RoIFJlYWN0LkRPTSAnY2hhbmdlJyBldmVudHMgYW5kIGN1c3RvbSBjaGFuZ2UgZXZlbnRzXG4gKiBlbWl0dGVkIGZyb20gY3VzdG9tIGNvbXBvbmVudHMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBhbHNvIG5vcm1hbGl6ZXMgZW1wdHkgc3RyaW5ncyB0byBudWxsLlxuICpcbiAqIEBwYXJhbSB7RXZlbnR9IGVcbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWVGcm9tRXZlbnQoZSkge1xuICByZXR1cm4gZSAmJiBlLnRhcmdldCAmJiBlLnRhcmdldC52YWx1ZSAhPT0gdW5kZWZpbmVkID9cbiAgICBlLnRhcmdldC52YWx1ZSA6IGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmllbGRNaXhpbjtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgICAgICAgICA9ICh3aW5kb3cuUmVhY3QpO1xudmFyIEZpZWxkc2V0TWl4aW4gPSByZXF1aXJlKCcuL0ZpZWxkc2V0TWl4aW4nKTtcblxudmFyIEZpZWxkc2V0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiAnRmllbGRzZXQnLFxuICBtaXhpbnM6IFtGaWVsZHNldE1peGluXSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY2hlbWEgPSB0aGlzLnZhbHVlKCkuc2NoZW1hO1xuICAgIHJldHVybiB0aGlzLnRyYW5zZmVyUHJvcHNUbyhcbiAgICAgIFJlYWN0LkRPTS5kaXYoIHtjbGFzc05hbWU6XCJyZWFjdC1mb3Jtcy1maWVsZHNldFwifSwgXG4gICAgICAgIHNjaGVtYS5wcm9wcy5sYWJlbCAmJiBSZWFjdC5ET00uaDQobnVsbCwgc2NoZW1hLnByb3BzLmxhYmVsKSxcbiAgICAgICAgc2NoZW1hLm1hcCh0aGlzLnJlbmRlckZpZWxkKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZpZWxkc2V0O1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBGb3JtRWxlbWVudE1peGluID0gcmVxdWlyZSgnLi9Gb3JtRWxlbWVudE1peGluJyk7XG52YXIgRm9ybUNvbnRleHRNaXhpbiA9IHJlcXVpcmUoJy4vRm9ybUNvbnRleHRNaXhpbicpO1xuXG4vKipcbiAqIE1peGluIGZvciBpbXBsZW1lbnRpbmcgZmllbGRjb21wb25lbnRzLlxuICpcbiAqIFNlZSA8RmllbGRzZXQgLz4gY29tcG9uZW50IGZvciB0aGUgYmFzaWMgaW1wbGVtZW50YXRpb24gZXhhbXBsZS5cbiAqL1xudmFyIEZpZWxkc2V0TWl4aW4gPSB7XG4gIG1peGluczogW0Zvcm1FbGVtZW50TWl4aW4sIEZvcm1Db250ZXh0TWl4aW5dLFxuXG4gIC8qKlxuICAgKiBSZW5kZXIgZmllbGQgZ2l2ZW4gYSBzY2hlbWEgbm9kZVxuICAgKlxuICAgKiBAcGFyYW0ge1NjaGVtYX0gbm9kZVxuICAgKiBAcmV0dXJucyB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICByZW5kZXJGaWVsZDogZnVuY3Rpb24obm9kZSkge1xuICAgIC8vIHByZXZlbnQgY2lyY3VsYXIgcmVxdWlyZVxuICAgIHZhciBjcmVhdGVDb21wb25lbnRGcm9tU2NoZW1hID0gcmVxdWlyZSgnLi9jcmVhdGVDb21wb25lbnRGcm9tU2NoZW1hJyk7XG4gICAgcmV0dXJuIGNyZWF0ZUNvbXBvbmVudEZyb21TY2hlbWEobm9kZSk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRmllbGRzZXRNaXhpbjtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgICAgID0gKHdpbmRvdy5SZWFjdCk7XG52YXIgRm9ybU1peGluID0gcmVxdWlyZSgnLi9Gb3JtTWl4aW4nKTtcbnZhciBGb3JtRm9yICAgPSByZXF1aXJlKCcuL0Zvcm1Gb3InKTtcblxudmFyIEZvcm0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdGb3JtJyxcbiAgbWl4aW5zOiBbRm9ybU1peGluXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBjb21wb25lbnQ6IFJlYWN0LlByb3BUeXBlcy5jb21wb25lbnRcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7Y29tcG9uZW50OiBSZWFjdC5ET00uZm9ybX07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgY29tcG9uZW50ID0gdGhpcy5wcm9wcy5jb21wb25lbnQ7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmZXJQcm9wc1RvKFxuICAgICAgY29tcG9uZW50KG51bGwsIFxuICAgICAgICBGb3JtRm9yKG51bGwgKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZvcm07XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gKHdpbmRvdy5SZWFjdCk7XG5cbnZhciBDb250ZXh0VHlwZXMgPSB7XG4gIHZhbHVlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICBleHRlcm5hbFZhbGlkYXRpb246IFJlYWN0LlByb3BUeXBlcy5hbnksXG4gIG9uVmFsdWVVcGRhdGU6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG59O1xuXG4vKipcbiAqIE1peGluIGZvciBjb21wb25lbnRzIHdoaWNoIGV4cG9zZXMgZm9ybSBjb250ZXh0LlxuICpcbiAqIFNlZSBGb3JtICh2aWEgRm9ybU1peGluKSwgRmllbGRzZXQgKHZpYSBGaWVsZHNldE1peGluKSBhbmQgUmVwZWF0aW5nRmllbGRzZXRcbiAqICh2aWEgUmVwZWF0aW5nRmllbGRzZXRNaXhpbikgZm9yIGNvbXBvbmVudHMgd2hpY2ggZXhwb3NlIGZvcm0gY29udGV4dC5cbiAqL1xudmFyIEZvcm1Db250ZXh0TWl4aW4gPSB7XG5cbiAgY2hpbGRDb250ZXh0VHlwZXM6IENvbnRleHRUeXBlcyxcblxuICBnZXRDaGlsZENvbnRleHQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZSgpLFxuICAgICAgZXh0ZXJuYWxWYWxpZGF0aW9uOiB0aGlzLmV4dGVybmFsVmFsaWRhdGlvbigpLFxuICAgICAgb25WYWx1ZVVwZGF0ZTogdGhpcy5vblZhbHVlVXBkYXRlXG4gICAgfTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtQ29udGV4dE1peGluO1xubW9kdWxlLmV4cG9ydHMuQ29udGV4dFR5cGVzID0gQ29udGV4dFR5cGVzO1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCAgICAgICAgICAgID0gKHdpbmRvdy5SZWFjdCk7XG52YXIgRm9ybUNvbnRleHRNaXhpbiA9IHJlcXVpcmUoJy4vRm9ybUNvbnRleHRNaXhpbicpO1xudmFyIHYgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3ZhbGlkYXRpb24nKTtcblxuLyoqXG4gKiBNaXhpbiBmb3IgdGhlIGZvcm0gZWxlbWVudCAoZm9ybSBmaWVsZCwgZmllbGRzZXQgb2YgcmVwZWF0aW5nIGZpZWxkc2V0KS5cbiAqL1xudmFyIEZvcm1FbGVtZW50TWl4aW4gPSB7XG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgbmFtZTogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgUmVhY3QuUHJvcFR5cGVzLm51bWJlclxuICAgIF0pXG4gIH0sXG5cbiAgY29udGV4dFR5cGVzOiBGb3JtQ29udGV4dE1peGluLkNvbnRleHRUeXBlcyxcblxuICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZhbHVlID0gdGhpcy5jb250ZXh0LnZhbHVlO1xuICAgIGlmICh0aGlzLnByb3BzLm5hbWUpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUuZ2V0KHRoaXMucHJvcHMubmFtZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcblxuICBleHRlcm5hbFZhbGlkYXRpb246IGZ1bmN0aW9uKCkge1xuICAgIHZhciBleHRlcm5hbFZhbGlkYXRpb24gPSB0aGlzLmNvbnRleHQuZXh0ZXJuYWxWYWxpZGF0aW9uO1xuICAgIGlmICh0aGlzLnByb3BzLm5hbWUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICBleHRlcm5hbFZhbGlkYXRpb24gJiZcbiAgICAgICAgZXh0ZXJuYWxWYWxpZGF0aW9uLmNoaWxkcmVuKSB7XG4gICAgICByZXR1cm4gZXh0ZXJuYWxWYWxpZGF0aW9uLmNoaWxkcmVuW3RoaXMucHJvcHMubmFtZV0gfHwgdi5zdWNjZXNzO1xuICAgIH1cbiAgICByZXR1cm4gZXh0ZXJuYWxWYWxpZGF0aW9uIHx8IHYuc3VjY2VzcztcbiAgfSxcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIGZvcm0gdmFsdWUgYW5kIHZhbGlkYXRpb24gc3RhdGUgaXMgYmVpbmcgdXBkYXRlZC5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgaW50ZXJjZXB0cyB1cGRhdGVkIHZhbHVlIGFuZCB2YWxpZGF0aW9uIHN0YXRlIGFuZCBwZXJmb3JtIGl0c1xuICAgKiBvd24gbG9jYWwgdmFsaWRhdGlvbiBhbmQgZGVzZXJpYWxpemF0aW9uLiBUaGVuIHBhc3NlcyBldmVyeXRoaW5nIHVwIHRoZVxuICAgKiBvd25lci5cbiAgICpcbiAgICogQHBhcmFtIHtBbnl9IHZhbHVlXG4gICAqIEBwYXJhbSB7VmFsaWRhdGlvbn0gdmFsaWRhdGlvblxuICAgKi9cbiAgb25WYWx1ZVVwZGF0ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YWx1ZSA9IHRoaXMudmFsdWUoKS5tZXJnZSh2YWx1ZSk7XG4gICAgdGhpcy5jb250ZXh0Lm9uVmFsdWVVcGRhdGUodmFsdWUpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZvcm1FbGVtZW50TWl4aW47XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ICAgICAgICAgICAgICAgICAgICAgPSAod2luZG93LlJlYWN0KTtcbnZhciBGb3JtRWxlbWVudE1peGluICAgICAgICAgID0gcmVxdWlyZSgnLi9Gb3JtRWxlbWVudE1peGluJyk7XG52YXIgY3JlYXRlQ29tcG9uZW50RnJvbVNjaGVtYSA9IHJlcXVpcmUoJy4vY3JlYXRlQ29tcG9uZW50RnJvbVNjaGVtYScpO1xuXG4vKipcbiAqIEEgXCJwcm94eVwiIGNvbXBvbmVudCB3aGljaCByZW5kZXJzIGludG8gZmllbGQsIGZpZWxkc2V0IG9yIHJlcGVhdGluZyBmaWVsZHNldFxuICogYmFzZWQgb24gYSBjdXJyZW50IHNjaGVtYSBub2RlLlxuICovXG52YXIgRm9ybUZvciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogJ0Zvcm1Gb3InLFxuICBtaXhpbnM6IFtGb3JtRWxlbWVudE1peGluXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBuYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgY29tcG9uZW50ID0gY3JlYXRlQ29tcG9uZW50RnJvbVNjaGVtYSh0aGlzLnZhbHVlKCkuc2NoZW1hKTtcbiAgICByZXR1cm4gdGhpcy50cmFuc2ZlclByb3BzVG8oY29tcG9uZW50KTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRm9ybUZvcjtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgICAgICAgICAgICAgICAgICAgICA9ICh3aW5kb3cuUmVhY3QpO1xudmFyIEZvcm1Db250ZXh0TWl4aW4gICAgICAgICAgPSByZXF1aXJlKCcuL0Zvcm1Db250ZXh0TWl4aW4nKTtcbnZhciBnZXREZWZhdWx0VmFsdWVGb3JTY2hlbWEgID0gcmVxdWlyZSgnLi9nZXREZWZhdWx0VmFsdWVGb3JTY2hlbWEnKTtcbnZhciBGb3JtVmFsdWUgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9Gb3JtVmFsdWUnKTtcbnZhciB2ICAgICAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi92YWxpZGF0aW9uJyk7XG5cbi8qKlxuICogTWl4aW4gd2hpY2ggaGFuZGxlcyBmb3JtIHZhbHVlIGFuZCBmb3JtIHZhbGlkYXRpb24gc3RhdGUuXG4gKlxuICogQHByaXZhdGVcbiAqL1xudmFyIEZvcm1TdGF0ZU1peGluID0ge1xuXG4gIHByb3BUeXBlczoge1xuICAgIGRlZmF1bHRWYWx1ZTogUmVhY3QuUHJvcFR5cGVzLmFueSxcbiAgICB2YWx1ZTogUmVhY3QuUHJvcFR5cGVzLmFueSxcbiAgICBleHRlcm5hbFZhbGlkYXRpb246IFJlYWN0LlByb3BUeXBlcy5hbnksXG4gICAgc2NoZW1hOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgb25DaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uVXBkYXRlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZhbHVlID0gKFxuICAgICAgdGhpcy5wcm9wcy52YWx1ZVxuICAgICAgfHwgdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWVcbiAgICAgIHx8IGdldERlZmF1bHRWYWx1ZUZvclNjaGVtYSh0aGlzLnByb3BzLnNjaGVtYSlcbiAgICApO1xuICAgIHJldHVybiB0aGlzLl9nZXRGb3JtU3RhdGUodmFsdWUpO1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM6IGZ1bmN0aW9uKG5leHRQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMudmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fc2V0Rm9ybVN0YXRlKHRoaXMuX2dldEZvcm1TdGF0ZShuZXh0UHJvcHMudmFsdWUpKTtcbiAgICB9XG4gIH0sXG5cbiAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLnZhbHVlO1xuICB9LFxuXG4gIGV4dGVybmFsVmFsaWRhdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZXh0ZXJuYWxWYWxpZGF0aW9uIHx8IHYuc3VjY2VzcztcbiAgfSxcblxuICB1cGRhdGVWYWx1ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICB0aGlzLl9zZXRGb3JtU3RhdGUodGhpcy5fZ2V0Rm9ybVN0YXRlKHZhbHVlKSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSBmb3JtIHZhbHVlIGFuZCB2YWxpZGF0aW9uIHN0YXRlIGlzIGJlaW5nIHVwZGF0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7QW55fSB2YWx1ZVxuICAgKiBAcGFyYW0ge1ZhbGlkYXRpb259IHZhbGlkYXRpb25cbiAgICogQHBhcmFtIHtBbnl9IGNvbnZlcnRlZFZhbHVlXG4gICAqL1xuICBvblZhbHVlVXBkYXRlOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uVXBkYXRlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uVXBkYXRlKHZhbHVlLnZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlICYmIHYuaXNTdWNjZXNzKHZhbHVlLnZhbGlkYXRpb24pKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlLnZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICAgIHRoaXMuX3NldEZvcm1TdGF0ZSh7dmFsdWU6dmFsdWV9KTtcbiAgfSxcblxuICBfZ2V0Rm9ybVN0YXRlOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmICghRm9ybVZhbHVlLmlzRm9ybVZhbHVlKHZhbHVlKSkge1xuICAgICAgdmFsdWUgPSBGb3JtVmFsdWUodGhpcy5wcm9wcy5zY2hlbWEsIHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHt2YWx1ZTp2YWx1ZX07XG4gIH0sXG5cbiAgX3NldEZvcm1TdGF0ZTogZnVuY3Rpb24oZm9ybVN0YXRlKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnNldEZvcm1TdGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5zZXRGb3JtU3RhdGUoZm9ybVN0YXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZShmb3JtU3RhdGUpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIEZvcm1NaXhpbiA9IHtcbiAgbWl4aW5zOiBbRm9ybVN0YXRlTWl4aW4sIEZvcm1Db250ZXh0TWl4aW5dXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZvcm1NaXhpbjtcbiIsIi8qKlxuICogRm9ybVZhbHVlIGlzIGEgc2V0IG9mIGNsYXNzZXMgd2hpY2ggaW5jYXBzdWxhdGUgZm9ybSB2YWx1ZSBhbG9uZyB3aXRoIHNjaGVtYVxuICogYW5kIHZhbGlkYXRpb24gc3RhdGUuXG4gKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgbGVucyAgICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9sZW5zJyk7XG52YXIgaW52YXJpYW50ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi91dGlscycpLmludmFyaWFudDtcbnZhciB2ICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3ZhbGlkYXRpb24nKTtcbnZhciBzICAgICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3NjaGVtYScpO1xudmFyIGdldERlZmF1bHRWYWx1ZUZvclNjaGVtYSA9IHJlcXVpcmUoJy4vZ2V0RGVmYXVsdFZhbHVlRm9yU2NoZW1hJyk7XG5cbnZhciBzdHIgPSBKU09OLnN0cmluZ2lmeS5iaW5kKEpTT04pO1xuXG4vKipcbiAqIEFic3RyYWN0IGJhc2UgY2xhc3MgZm9yIGZvcm0gdmFsdWVzLlxuICovXG5cblxuICBmdW5jdGlvbiBWYWx1ZShcbiAgICAgIHNjaGVtYUxlbnMsXG4gICAgICB2YWx1ZUxlbnMsXG4gICAgICBzZXJpYWxpemVkVmFsdWVMZW5zLFxuICAgICAgdmFsaWRhdGlvbkxlbnMsXG4gICAgICBwYXRoKSB7XG5cbiAgICB0aGlzLnNjaGVtYUxlbnMgPSBzY2hlbWFMZW5zO1xuICAgIHRoaXMudmFsdWVMZW5zID0gdmFsdWVMZW5zO1xuICAgIHRoaXMuc2VyaWFsaXplZFZhbHVlTGVucyA9IHNlcmlhbGl6ZWRWYWx1ZUxlbnM7XG4gICAgdGhpcy52YWxpZGF0aW9uTGVucyA9IHZhbGlkYXRpb25MZW5zO1xuXG4gICAgdGhpcy5wYXRoID0gcGF0aDtcblxuICAgIHRoaXMuc2NoZW1hID0gc2NoZW1hTGVucy52YWwoKTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWVMZW5zLnZhbCgpO1xuICAgIHRoaXMuc2VyaWFsaXplZFZhbHVlID0gc2VyaWFsaXplZFZhbHVlTGVucy52YWwoKTtcbiAgICB0aGlzLnZhbGlkYXRpb24gPSB2YWxpZGF0aW9uTGVucy52YWwoKTtcbiAgfVxuXG4gIFZhbHVlLnByb3RvdHlwZS5tZXJnZT1mdW5jdGlvbih2YWx1ZSkge1xuICAgIGludmFyaWFudChcbiAgICAgIHZhbHVlLnNjaGVtYUxlbnMucm9vdCgpID09PSB0aGlzLnNjaGVtYUxlbnMucm9vdCgpLFxuICAgICAgJ3RyeWluZyB0byBtZXJnZSB3aXRoIGEgdmFsdWUgd2hpY2ggaGF2ZSBkaWZmZXJlbnQgc2NoZW1hJ1xuICAgICk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cblxuZm9yKHZhciBWYWx1ZV9fX19LZXkgaW4gVmFsdWUpe2lmKFZhbHVlLmhhc093blByb3BlcnR5KFZhbHVlX19fX0tleSkpe1Byb3BldHlWYWx1ZVtWYWx1ZV9fX19LZXldPVZhbHVlW1ZhbHVlX19fX0tleV07fX12YXIgX19fX1N1cGVyUHJvdG9PZlZhbHVlPVZhbHVlPT09bnVsbD9udWxsOlZhbHVlLnByb3RvdHlwZTtQcm9wZXR5VmFsdWUucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoX19fX1N1cGVyUHJvdG9PZlZhbHVlKTtQcm9wZXR5VmFsdWUucHJvdG90eXBlLmNvbnN0cnVjdG9yPVByb3BldHlWYWx1ZTtQcm9wZXR5VmFsdWUuX19zdXBlckNvbnN0cnVjdG9yX189VmFsdWU7ZnVuY3Rpb24gUHJvcGV0eVZhbHVlKCl7aWYoVmFsdWUhPT1udWxsKXtWYWx1ZS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7fX1cblxuICBQcm9wZXR5VmFsdWUucHJvdG90eXBlLnVwZGF0ZVNlcmlhbGl6ZWRWYWx1ZT1mdW5jdGlvbihzZXJpYWxpemVkVmFsdWUpIHtcbiAgICB2YXIgc2VyaWFsaXplZFZhbHVlTGVucyA9IHRoaXMuc2VyaWFsaXplZFZhbHVlTGVucy5tb2Qoc2VyaWFsaXplZFZhbHVlKTtcbiAgICB2YXIgdmFsaWRhdGlvbiA9IHYudmFsaWRhdGUodGhpcy5zY2hlbWEsIHNlcmlhbGl6ZWRWYWx1ZSk7XG4gICAgdmFyIHZhbGlkYXRpb25MZW5zID0gdGhpcy52YWxpZGF0aW9uTGVucy51cGRhdGUodmFsaWRhdGlvbi52YWxpZGF0aW9uKTtcbiAgICB2YXIgdmFsdWVMZW5zID0gdGhpcy52YWx1ZUxlbnM7XG5cbiAgICBpZiAodi5pc1N1Y2Nlc3ModmFsaWRhdGlvbi52YWxpZGF0aW9uKSkge1xuICAgICAgdmFsdWVMZW5zID0gdGhpcy52YWx1ZUxlbnMubW9kKHZhbGlkYXRpb24udmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3RvcihcbiAgICAgIHRoaXMuc2NoZW1hTGVucyxcbiAgICAgIHZhbHVlTGVucyxcbiAgICAgIHNlcmlhbGl6ZWRWYWx1ZUxlbnMsXG4gICAgICB2YWxpZGF0aW9uTGVucyxcbiAgICAgIHRoaXMucGF0aFxuICAgICk7XG4gIH07XG5cblxuLyoqXG4gKiBBYnN0cmFjdCBiYXNlIGNsYXNzIGZvciBjb21wb3NpdGUgZm9ybSB2YWx1ZXMuXG4gKi9cbmZvcihWYWx1ZV9fX19LZXkgaW4gVmFsdWUpe2lmKFZhbHVlLmhhc093blByb3BlcnR5KFZhbHVlX19fX0tleSkpe0NvbXBvc2l0ZVZhbHVlW1ZhbHVlX19fX0tleV09VmFsdWVbVmFsdWVfX19fS2V5XTt9fUNvbXBvc2l0ZVZhbHVlLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKF9fX19TdXBlclByb3RvT2ZWYWx1ZSk7Q29tcG9zaXRlVmFsdWUucHJvdG90eXBlLmNvbnN0cnVjdG9yPUNvbXBvc2l0ZVZhbHVlO0NvbXBvc2l0ZVZhbHVlLl9fc3VwZXJDb25zdHJ1Y3Rvcl9fPVZhbHVlO2Z1bmN0aW9uIENvbXBvc2l0ZVZhbHVlKCl7aWYoVmFsdWUhPT1udWxsKXtWYWx1ZS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7fX1cblxuICAvKipcbiAgICogR2V0IGEgc3ViLXZhbHVlIG9mIGEgY29tcG9zaXRlIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgKiBAcmV0dXJucyB7VmFsdWV9XG4gICAqL1xuICBDb21wb3NpdGVWYWx1ZS5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgc2NoZW1hTGVucyA9IHRoaXMuZ2V0U2NoZW1hTGVucyhuYW1lKTtcbiAgICB2YXIgc2NoZW1hID0gc2NoZW1hTGVucy52YWwoKTtcblxuICAgIGludmFyaWFudChcbiAgICAgICFzY2hlbWFMZW5zLmlzVW5kZWZpbmVkKCksXG4gICAgICAoXCJ0cnlpbmcgdG8gZ2V0IGEgdmFsdWUgZm9yIGFuIGludmFsaWQga2V5IFwiICsgc3RyKG5hbWUpKVxuICAgICk7XG5cbiAgICB2YXIgdmFsdWVMZW5zID0gdGhpcy52YWx1ZUxlbnMuZ2V0KG5hbWUsIGdldERlZmF1bHRWYWx1ZUZvclNjaGVtYShzY2hlbWEpKTtcbiAgICB2YXIgdmFsdWUgPSB2YWx1ZUxlbnMudmFsKCk7XG5cbiAgICByZXR1cm4gX21ha2UoXG4gICAgICBzY2hlbWFMZW5zLFxuICAgICAgdmFsdWVMZW5zLFxuICAgICAgdGhpcy5zZXJpYWxpemVkVmFsdWVMZW5zLmdldChuYW1lLCB2LnNlcmlhbGl6ZShzY2hlbWEsIHZhbHVlKSksXG4gICAgICB0aGlzLnZhbGlkYXRpb25MZW5zLmdldCgnY2hpbGRyZW4nLCB7fSkuZ2V0KG5hbWUsIHYuc3VjY2VzcyksXG4gICAgICB0aGlzLnBhdGguY29uY2F0KG5hbWUpXG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogUHJvZHVjZSBhIG5ldyB2YWx1ZSBieSBtZXJnaW5nIHdpdGggYW5vdGhlciB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtWYWx1ZX0gdmFsdWVcbiAgICogQHJldHVybnMge1ZhbHVlfVxuICAgKi9cbiAgQ29tcG9zaXRlVmFsdWUucHJvdG90eXBlLm1lcmdlPWZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaW52YXJpYW50KFxuICAgICAgdmFsdWUuc2NoZW1hTGVucy5yb290KCkgPT09IHRoaXMuc2NoZW1hTGVucy5yb290KCksXG4gICAgICAndHJ5aW5nIHRvIG1lcmdlIHdpdGggYSB2YWx1ZSB3aGljaCBoYXZlIGRpZmZlcmVudCBzY2hlbWEnXG4gICAgKTtcblxuICAgIHZhciB2YWx1ZUxlbnMgPSB0aGlzLnZhbHVlTGVuc1xuICAgICAgLmZvcih2YWx1ZS52YWx1ZUxlbnMucm9vdCgpKTtcbiAgICB2YXIgc2VyaWFsaXplZFZhbHVlTGVucyA9IHRoaXMuc2VyaWFsaXplZFZhbHVlTGVuc1xuICAgICAgLmZvcih2YWx1ZS5zZXJpYWxpemVkVmFsdWVMZW5zLnJvb3QoKSk7XG4gICAgdmFyIHZhbGlkYXRpb25MZW5zID0gdGhpcy52YWxpZGF0aW9uTGVuc1xuICAgICAgLmZvcih2YWx1ZS52YWxpZGF0aW9uTGVucy5yb290KCkpO1xuXG4gICAgdmFyIGxvY2FsID0gdi52YWxpZGF0ZU9ubHkoXG4gICAgICB0aGlzLnNjaGVtYSxcbiAgICAgIHZhbHVlTGVucy52YWwoKSxcbiAgICAgIHZhbGlkYXRpb25MZW5zLnZhbCgpLmNoaWxkcmVuXG4gICAgKTtcblxuICAgIHZhbGlkYXRpb25MZW5zID0gdmFsaWRhdGlvbkxlbnMudXBkYXRlKGxvY2FsLnZhbGlkYXRpb24pO1xuXG4gICAgaWYgKHYuaXNGYWlsdXJlKHZhbGlkYXRpb25MZW5zLnZhbCgpKSkge1xuICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBwcmV2aW91cyB2YWx1ZVxuICAgICAgdmFsdWVMZW5zID0gdGhpcy52YWx1ZUxlbnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlTGVucyA9IHZhbHVlTGVucy5tb2QobG9jYWwudmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3RvcihcbiAgICAgIHRoaXMuc2NoZW1hTGVucyxcbiAgICAgIHZhbHVlTGVucyxcbiAgICAgIHNlcmlhbGl6ZWRWYWx1ZUxlbnMsXG4gICAgICB2YWxpZGF0aW9uTGVucyxcbiAgICAgIHRoaXMucGF0aFxuICAgICk7XG4gIH07XG5cblxuXG5mb3IodmFyIENvbXBvc2l0ZVZhbHVlX19fX0tleSBpbiBDb21wb3NpdGVWYWx1ZSl7aWYoQ29tcG9zaXRlVmFsdWUuaGFzT3duUHJvcGVydHkoQ29tcG9zaXRlVmFsdWVfX19fS2V5KSl7TGlzdFZhbHVlW0NvbXBvc2l0ZVZhbHVlX19fX0tleV09Q29tcG9zaXRlVmFsdWVbQ29tcG9zaXRlVmFsdWVfX19fS2V5XTt9fXZhciBfX19fU3VwZXJQcm90b09mQ29tcG9zaXRlVmFsdWU9Q29tcG9zaXRlVmFsdWU9PT1udWxsP251bGw6Q29tcG9zaXRlVmFsdWUucHJvdG90eXBlO0xpc3RWYWx1ZS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShfX19fU3VwZXJQcm90b09mQ29tcG9zaXRlVmFsdWUpO0xpc3RWYWx1ZS5wcm90b3R5cGUuY29uc3RydWN0b3I9TGlzdFZhbHVlO0xpc3RWYWx1ZS5fX3N1cGVyQ29uc3RydWN0b3JfXz1Db21wb3NpdGVWYWx1ZTtmdW5jdGlvbiBMaXN0VmFsdWUoKXtpZihDb21wb3NpdGVWYWx1ZSE9PW51bGwpe0NvbXBvc2l0ZVZhbHVlLmFwcGx5KHRoaXMsYXJndW1lbnRzKTt9fVxuXG4gIExpc3RWYWx1ZS5wcm90b3R5cGUuZ2V0U2NoZW1hTGVucz1mdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWFMZW5zLmdldCgnY2hpbGRyZW4nKTtcbiAgfTtcblxuICAvKipcbiAgICogUHJvZHVjZSBhIG5ldyBMaXN0VmFsdWUgYnkgYWRkaW5nIGEgdmFsdWVcbiAgICpcbiAgICogQHBhcmFtIHtBbnl9IHZhbHVlXG4gICAqIEByZXR1cm5zIHtGb3JtVmFsdWV9XG4gICAqL1xuICBMaXN0VmFsdWUucHJvdG90eXBlLmFkZD1mdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YWx1ZSA9IGdldERlZmF1bHRWYWx1ZUZvclNjaGVtYSh0aGlzLnNjaGVtYS5jaGlsZHJlbik7XG4gICAgfVxuXG4gICAgdmFyIHNlcmlhbGl6ZWRWYWx1ZSA9IHYuc2VyaWFsaXplKHRoaXMuc2NoZW1hLmNoaWxkcmVuLCB2YWx1ZSk7XG5cbiAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IoXG4gICAgICB0aGlzLnNjaGVtYUxlbnMsXG4gICAgICB0aGlzLnZhbHVlTGVucy5tb2QodGhpcy52YWx1ZS5jb25jYXQodmFsdWUpKSxcbiAgICAgIHRoaXMuc2VyaWFsaXplZFZhbHVlTGVucy5tb2QodGhpcy5zZXJpYWxpemVkVmFsdWUuY29uY2F0KHNlcmlhbGl6ZWRWYWx1ZSkpLFxuICAgICAgdGhpcy52YWxpZGF0aW9uTGVucyxcbiAgICAgIHRoaXMucGF0aFxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByb2R1Y2UgYSBuZXcgTGlzdFZhbHVlIGJ5IHJlbW92aW5nIGFuIGVsZW1lbnQgYnkgaW5kZXguXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgKiBAcmV0dXJucyB7Rm9ybVZhbHVlfVxuICAgKi9cbiAgTGlzdFZhbHVlLnByb3RvdHlwZS5yZW1vdmU9ZnVuY3Rpb24oaW5kZXgpIHtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlLnNsaWNlKDApO1xuICAgIHZhciBzZXJpYWxpemVkVmFsdWUgPSB0aGlzLnNlcmlhbGl6ZWRWYWx1ZS5zbGljZSgwKTtcblxuICAgIHZhbHVlLnNwbGljZShpbmRleCwgMSk7XG4gICAgc2VyaWFsaXplZFZhbHVlLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IoXG4gICAgICB0aGlzLnNjaGVtYUxlbnMsXG4gICAgICB0aGlzLnZhbHVlTGVucy5tb2QodmFsdWUpLFxuICAgICAgdGhpcy5zZXJpYWxpemVkVmFsdWVMZW5zLm1vZChzZXJpYWxpemVkVmFsdWUpLFxuICAgICAgdGhpcy52YWxpZGF0aW9uTGVucyxcbiAgICAgIHRoaXMucGF0aFxuICAgICk7XG4gIH07XG5cblxuZm9yKENvbXBvc2l0ZVZhbHVlX19fX0tleSBpbiBDb21wb3NpdGVWYWx1ZSl7aWYoQ29tcG9zaXRlVmFsdWUuaGFzT3duUHJvcGVydHkoQ29tcG9zaXRlVmFsdWVfX19fS2V5KSl7U2NoZW1hVmFsdWVbQ29tcG9zaXRlVmFsdWVfX19fS2V5XT1Db21wb3NpdGVWYWx1ZVtDb21wb3NpdGVWYWx1ZV9fX19LZXldO319U2NoZW1hVmFsdWUucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoX19fX1N1cGVyUHJvdG9PZkNvbXBvc2l0ZVZhbHVlKTtTY2hlbWFWYWx1ZS5wcm90b3R5cGUuY29uc3RydWN0b3I9U2NoZW1hVmFsdWU7U2NoZW1hVmFsdWUuX19zdXBlckNvbnN0cnVjdG9yX189Q29tcG9zaXRlVmFsdWU7ZnVuY3Rpb24gU2NoZW1hVmFsdWUoKXtpZihDb21wb3NpdGVWYWx1ZSE9PW51bGwpe0NvbXBvc2l0ZVZhbHVlLmFwcGx5KHRoaXMsYXJndW1lbnRzKTt9fVxuXG4gIFNjaGVtYVZhbHVlLnByb3RvdHlwZS5nZXRTY2hlbWFMZW5zPWZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWFMZW5zLmdldCgnY2hpbGRyZW4nKS5nZXQobmFtZSk7XG4gIH07XG5cblxuLyoqXG4gKiBNYWtlIGEgZm9ybSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gX21ha2UoXG4gICAgc2NoZW1hTGVucyxcbiAgICB2YWx1ZUxlbnMsXG4gICAgc2VyaWFsaXplZFZhbHVlTGVucyxcbiAgICB2YWxpZGF0aW9uTGVucyxcbiAgICBwYXRoKSB7XG4gIHBhdGggPSBwYXRoIHx8IFtdO1xuXG4gIHZhciBzY2hlbWEgPSBzY2hlbWFMZW5zLnZhbCgpO1xuXG4gIHZhciBjb25zdHJ1Y3RvcjtcblxuICBpZiAocy5pc1NjaGVtYShzY2hlbWEpKSB7XG4gICAgY29uc3RydWN0b3IgPSBTY2hlbWFWYWx1ZTtcbiAgfSBlbHNlIGlmIChzLmlzTGlzdChzY2hlbWEpKSB7XG4gICAgY29uc3RydWN0b3IgPSBMaXN0VmFsdWU7XG4gIH0gZWxzZSBpZiAocy5pc1Byb3BlcnR5KHNjaGVtYSkpIHtcbiAgICBjb25zdHJ1Y3RvciA9IFByb3BldHlWYWx1ZTtcbiAgfSBlbHNlIHtcbiAgICBpbnZhcmlhbnQoXG4gICAgICBmYWxzZSxcbiAgICAgIFwiZG8gbm90IGtub3cgaG93IHRvIGNvbnN0cnVjdCB2YWx1ZVwiXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgY29uc3RydWN0b3IoXG4gICAgc2NoZW1hTGVucyxcbiAgICB2YWx1ZUxlbnMsXG4gICAgc2VyaWFsaXplZFZhbHVlTGVucyxcbiAgICB2YWxpZGF0aW9uTGVucyxcbiAgICBwYXRoXG4gICk7XG59XG5cbmZ1bmN0aW9uIG1ha2Uoc2NoZW1hLCB2YWx1ZSwgc2VyaWFsaXplZFZhbHVlLCB2YWxpZGF0aW9uLCBwYXRoKSB7XG4gIGlmICh2YWxpZGF0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICB2YWxpZGF0aW9uID0gdi52YWxpZGF0ZShzY2hlbWEsIHZhbHVlKS52YWxpZGF0aW9uO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc2VyaWFsaXplZFZhbHVlID0gdi5zZXJpYWxpemUoc2NoZW1hLCB2YWx1ZSk7XG4gIH1cblxuICB2YXIgc2NoZW1hTGVucyA9IGxlbnMoc2NoZW1hKTtcbiAgdmFyIHZhbHVlTGVucyA9IGxlbnModmFsdWUpO1xuICB2YXIgc2VyaWFsaXplZFZhbHVlTGVucyA9IGxlbnMoc2VyaWFsaXplZFZhbHVlKTtcbiAgdmFyIHZhbGlkYXRpb25MZW5zID0gbGVucyh2YWxpZGF0aW9uKTtcblxuICByZXR1cm4gX21ha2UoXG4gICAgc2NoZW1hTGVucyxcbiAgICB2YWx1ZUxlbnMsXG4gICAgc2VyaWFsaXplZFZhbHVlTGVucyxcbiAgICB2YWxpZGF0aW9uTGVucyxcbiAgICBwYXRoXG4gICk7XG59XG5cbmZ1bmN0aW9uIGlzRm9ybVZhbHVlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1ha2U7XG5tb2R1bGUuZXhwb3J0cy5pc0Zvcm1WYWx1ZSA9IGlzRm9ybVZhbHVlO1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9ICh3aW5kb3cuUmVhY3QpO1xuXG52YXIgTWVzc2FnZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogJ01lc3NhZ2UnLFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmZXJQcm9wc1RvKFxuICAgICAgUmVhY3QuRE9NLnNwYW4oIHtjbGFzc05hbWU6XCJyZWFjdC1mb3Jtcy1tZXNzYWdlXCJ9LCBcbiAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1lc3NhZ2U7XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ICAgICAgICAgICAgICAgICAgID0gKHdpbmRvdy5SZWFjdCk7XG52YXIgUmVwZWF0aW5nRmllbGRzZXRNaXhpbiAgPSByZXF1aXJlKCcuL1JlcGVhdGluZ0ZpZWxkc2V0TWl4aW4nKTtcblxudmFyIEl0ZW0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdJdGVtJyxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZmVyUHJvcHNUbyhcbiAgICAgIFJlYWN0LkRPTS5kaXYoIHtjbGFzc05hbWU6XCJyZWFjdC1mb3Jtcy1yZXBlYXRpbmctZmllbGRzZXQtaXRlbVwifSwgXG4gICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIFJlYWN0LkRPTS5idXR0b24oXG4gICAgICAgICAge29uQ2xpY2s6dGhpcy5vblJlbW92ZSxcbiAgICAgICAgICB0eXBlOlwiYnV0dG9uXCIsXG4gICAgICAgICAgY2xhc3NOYW1lOlwicmVhY3QtZm9ybXMtcmVwZWF0aW5nLWZpZWxkc2V0LXJlbW92ZVwifSwgXCLDl1wiKVxuICAgICAgKVxuICAgICk7XG4gIH0sXG5cbiAgb25SZW1vdmU6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uUmVtb3ZlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uUmVtb3ZlKHRoaXMucHJvcHMubmFtZSk7XG4gICAgfVxuICB9XG5cbn0pO1xuXG52YXIgUmVwZWF0aW5nRmllbGRzZXQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdSZXBlYXRpbmdGaWVsZHNldCcsXG5cbiAgbWl4aW5zOiBbUmVwZWF0aW5nRmllbGRzZXRNaXhpbl0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXRlbTogSXRlbVxuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2NoZW1hID0gdGhpcy52YWx1ZSgpLnNjaGVtYTtcbiAgICB2YXIgQ29tcG9uZW50ID0gdGhpcy5wcm9wcy5pdGVtO1xuICAgIHZhciBmaWVsZHMgPSB0aGlzLnJlbmRlckZpZWxkcygpLm1hcChmdW5jdGlvbihpdGVtKSBcbiAgICAgIHtyZXR1cm4gQ29tcG9uZW50KFxuICAgICAgICB7a2V5Oml0ZW0ucHJvcHMubmFtZSxcbiAgICAgICAgbmFtZTppdGVtLnByb3BzLm5hbWUsXG4gICAgICAgIG9uUmVtb3ZlOnRoaXMucmVtb3ZlfSwgXG4gICAgICAgIGl0ZW1cbiAgICAgICk7fS5iaW5kKHRoaXMpXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy50cmFuc2ZlclByb3BzVG8oXG4gICAgICBSZWFjdC5ET00uZGl2KCB7Y2xhc3NOYW1lOlwicmVhY3QtZm9ybXMtcmVwZWF0aW5nLWZpZWxkc2V0XCJ9LCBcbiAgICAgICAgc2NoZW1hLnByb3BzLmxhYmVsICYmIFJlYWN0LkRPTS5oNChudWxsLCBzY2hlbWEucHJvcHMubGFiZWwpLFxuICAgICAgICBmaWVsZHMsXG4gICAgICAgIFJlYWN0LkRPTS5idXR0b24oXG4gICAgICAgICAge3R5cGU6XCJidXR0b25cIixcbiAgICAgICAgICBvbkNsaWNrOnRoaXMub25BZGQsXG4gICAgICAgICAgY2xhc3NOYW1lOlwicmVhY3QtZm9ybXMtcmVwZWF0aW5nLWZpZWxkc2V0LWFkZFwifSwgXCJBZGRcIilcbiAgICAgIClcbiAgICApO1xuICB9LFxuXG4gIG9uQWRkOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5hZGQoKTtcbiAgfVxuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZXBlYXRpbmdGaWVsZHNldDtcbm1vZHVsZS5leHBvcnRzLkl0ZW0gPSBJdGVtO1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCAgICAgICAgICAgICAgICAgICAgID0gKHdpbmRvdy5SZWFjdCk7XG52YXIgY2xvbmVXaXRoUHJvcHMgICAgICAgICAgICA9IFJlYWN0LmFkZG9ucy5jbG9uZVdpdGhQcm9wcztcbnZhciBGb3JtRWxlbWVudE1peGluICAgICAgICAgID0gcmVxdWlyZSgnLi9Gb3JtRWxlbWVudE1peGluJyk7XG52YXIgRm9ybUNvbnRleHRNaXhpbiAgICAgICAgICA9IHJlcXVpcmUoJy4vRm9ybUNvbnRleHRNaXhpbicpO1xudmFyIGdldERlZmF1bHRWYWx1ZUZvclNjaGVtYSAgPSByZXF1aXJlKCcuL2dldERlZmF1bHRWYWx1ZUZvclNjaGVtYScpO1xudmFyIHNlcmlhbGl6ZSAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3ZhbGlkYXRpb24nKS5zZXJpYWxpemU7XG5cbi8qKlxuICogTWl4aW4gZm9yIGltcGxlbWVudGluZyByZXBlYXRpbmcgZmllbGRzZXRzLlxuICpcbiAqIFNlZSA8UmVwZWF0aW5nRmllbGRzZXQgLz4gY29tcG9uZW50IGZvciB0aGUgYmFzaWMgaW1wbGVtZW50YXRpb24gZXhhbXBsZS5cbiAqL1xudmFyIFJlcGVhdGluZ0ZpZWxkc2V0TWl4aW4gPSB7XG4gIG1peGluczogW0Zvcm1FbGVtZW50TWl4aW4sIEZvcm1Db250ZXh0TWl4aW5dLFxuXG4gIHByb3BUeXBlczoge1xuICAgIG9uUmVtb3ZlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvbkFkZDogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIFJlYWN0IGNvbXBvbmVudHMgcmVuZGVyZWQgZm9yIGFsbCB0aGUgdmFsdWVzIGluIGFuIGFycmF5XG4gICAqIHRoaXMgZmllbGRzZXQgb3ducy5cbiAgICpcbiAgICogQHJldHVybnMge0FycmF5LjxSZWFjdENvbXBvbmVudD59XG4gICAqL1xuICByZW5kZXJGaWVsZHM6IGZ1bmN0aW9uKCkge1xuICAgIC8vIHByZXZlbnQgY2lyY3VsYXIgcmVxdWlyZVxuICAgIHZhciBjcmVhdGVDb21wb25lbnRGcm9tU2NoZW1hID0gcmVxdWlyZSgnLi9jcmVhdGVDb21wb25lbnRGcm9tU2NoZW1hJyk7XG4gICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZSgpO1xuICAgIHZhciBjaGlsZHJlbiA9IGNyZWF0ZUNvbXBvbmVudEZyb21TY2hlbWEodmFsdWUuc2NoZW1hLmNoaWxkcmVuKTtcbiAgICByZXR1cm4gdmFsdWUuc2VyaWFsaXplZFZhbHVlLm1hcChmdW5jdGlvbihpdGVtLCBuYW1lKSBcbiAgICAgIHtyZXR1cm4gY2xvbmVXaXRoUHJvcHMoY2hpbGRyZW4sIHtuYW1lOm5hbWUsIGtleTogbmFtZX0pO30pO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSB2YWx1ZSBmcm9tIGZpZWxkc2V0J3MgdmFsdWUgYnkgaW5kZXhcbiAgICpcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAqL1xuICByZW1vdmU6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZSgpLnJlbW92ZShpbmRleCk7XG4gICAgdGhpcy5vblZhbHVlVXBkYXRlKHZhbHVlKTtcbiAgICBpZiAodGhpcy5wcm9wcy5vblJlbW92ZSkge1xuICAgICAgdGhpcy5wcm9wcy5vblJlbW92ZShpbmRleCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBBZGQgbmV3IHZhbHVlIHRvIGZpZWxkc2V0J3MgdmFsdWUuXG4gICAqL1xuICBhZGQ6IGZ1bmN0aW9uKGl0ZW1WYWx1ZSkge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWUoKS5hZGQoaXRlbVZhbHVlKTtcbiAgICB0aGlzLm9uVmFsdWVVcGRhdGUodmFsdWUpO1xuICAgIGlmICh0aGlzLnByb3BzLm9uQWRkKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQWRkKHZhbHVlLnZhbHVlW3ZhbHVlLnZhbHVlLmxlbmd0aCAtIDFdKTtcbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVwZWF0aW5nRmllbGRzZXRNaXhpbjtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgc2NoZW1hICAgICAgICAgICAgPSByZXF1aXJlKCcuL3NjaGVtYScpO1xudmFyIEZpZWxkICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9GaWVsZCcpO1xudmFyIEZpZWxkc2V0ICAgICAgICAgID0gcmVxdWlyZSgnLi9GaWVsZHNldCcpO1xudmFyIFJlcGVhdGluZ0ZpZWxkc2V0ID0gcmVxdWlyZSgnLi9SZXBlYXRpbmdGaWVsZHNldCcpO1xuXG4vKipcbiAqIENyZWF0ZSBhIGNvbXBvbmVudCB3aGljaCByZXByZXNlbnRzIHByb3ZpZGVkIHNjaGVtYSBub2RlXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7U2NoZW1hTm9kZX0gbm9kZVxuICogQHJldHVybnMge1JlYWN0Q29tcG9uZW50fVxuICovXG5mdW5jdGlvbiBjcmVhdGVDb21wb25lbnRGcm9tU2NoZW1hKG5vZGUpIHtcbiAgaWYgKG5vZGUucHJvcHMuY29tcG9uZW50KSB7XG4gICAgcmV0dXJuIG5vZGUucHJvcHMuY29tcG9uZW50KHtrZXk6IG5vZGUubmFtZSwgbmFtZTogbm9kZS5uYW1lfSk7XG4gIH1cblxuICBpZiAoc2NoZW1hLmlzTGlzdChub2RlKSkge1xuICAgIHJldHVybiBSZXBlYXRpbmdGaWVsZHNldCgge2tleTpub2RlLm5hbWUsIG5hbWU6bm9kZS5uYW1lfSApO1xuICB9IGVsc2UgaWYgKHNjaGVtYS5pc1NjaGVtYShub2RlKSkge1xuICAgIHJldHVybiBGaWVsZHNldCgge2tleTpub2RlLm5hbWUsIG5hbWU6bm9kZS5uYW1lfSApO1xuICB9IGVsc2UgaWYgKHNjaGVtYS5pc1Byb3BlcnR5KG5vZGUpKSB7XG4gICAgcmV0dXJuIEZpZWxkKCB7a2V5Om5vZGUubmFtZSwgbmFtZTpub2RlLm5hbWV9ICk7XG4gIH0gZWxzZSB7XG4gICAgdXRpbHMuaW52YXJpYW50KGZhbHNlLCAnaW52YWxpZCBzY2hlbWEgbm9kZTogJyArIG5vZGUpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQ29tcG9uZW50RnJvbVNjaGVtYTtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgICAgID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIHNjaGVtYSAgICA9IHJlcXVpcmUoJy4vc2NoZW1hJyk7XG5cbi8qKlxuICogR2V0IGRlZmF1bHQgdmFsdWUgZm9yIHNjaGVtYSBub2RlXG4gKlxuICogQHBhcmFtIHtTY2hlbWFOb2RlfSBub2RlXG4gKiBAcmV0dXJucyB7QW55fVxuICovXG5mdW5jdGlvbiBnZXREZWZhdWx0VmFsdWVGb3JTY2hlbWEobm9kZSkge1xuICBpZiAobm9kZSAmJiBub2RlLnByb3BzICYmIG5vZGUucHJvcHMuZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gbm9kZS5wcm9wcy5kZWZhdWx0VmFsdWU7XG4gIH1cbiAgaWYgKHNjaGVtYS5pc1NjaGVtYShub2RlKSkge1xuICAgIHJldHVybiB7fTtcbiAgfSBlbHNlIGlmIChzY2hlbWEuaXNMaXN0KG5vZGUpKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9IGVsc2UgaWYgKHNjaGVtYS5pc1Byb3BlcnR5KG5vZGUpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSB7XG4gICAgdXRpbHMuaW52YXJpYW50KFxuICAgICAgZmFsc2UsXG4gICAgICAnZG8gbm90IGtub3cgaG93IHRvIGluZmVyIGRlZmF1bHQgdmFsdWUgZm9yICcgKyBub2RlXG4gICAgKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldERlZmF1bHRWYWx1ZUZvclNjaGVtYTtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgICAgID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIHR5cGVzICAgICA9IHJlcXVpcmUoJy4vdHlwZXMnKTtcbnZhciBzY2hlbWEgICAgPSByZXF1aXJlKCcuL3NjaGVtYScpO1xuXG4vKipcbiAqIFJldHVybiBhIHR5cGUgd2hpY2ggY29ycmVzcG9uZHMgdG8gYSBnaXZlbiBzY2hlbWEgbm9kZS5cbiAqXG4gKiBAcGFyYW0ge1NjaGVtYX0gbm9kZVxuICogQHJldHVybiB7VHlwZX1cbiAqL1xuZnVuY3Rpb24gZ2V0VHlwZUZyb21TY2hlbWEobm9kZSkge1xuICBpZiAobm9kZSAmJiBub2RlLnByb3BzLnR5cGUpIHtcblxuICAgIHV0aWxzLmludmFyaWFudChcbiAgICAgIHNjaGVtYS5pc1Byb3BlcnR5KG5vZGUpLFxuICAgICAgJ29ubHkgUHJvcGVydHkgc2NoZW1hIG5vZGVzIGNhbiBoYXZlIHR5cGVzJ1xuICAgICk7XG5cbiAgICBpZiAodXRpbHMuaXNTdHJpbmcobm9kZS5wcm9wcy50eXBlKSkge1xuICAgICAgdmFyIHR5cGUgPSB0eXBlc1tub2RlLnByb3BzLnR5cGVdO1xuICAgICAgdXRpbHMuaW52YXJpYW50KHR5cGUsICd1bmtub3duIHR5cGUgJyArIG5vZGUucHJvcHMudHlwZSk7XG4gICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZS5wcm9wcy50eXBlO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVzLmFueTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUeXBlRnJvbVNjaGVtYTtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgRm9ybSAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL0Zvcm0nKTtcbnZhciBGaWVsZHNldCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vRmllbGRzZXQnKTtcbnZhciBSZXBlYXRpbmdGaWVsZHNldCAgICAgICA9IHJlcXVpcmUoJy4vUmVwZWF0aW5nRmllbGRzZXQnKTtcbnZhciBGaWVsZCAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vRmllbGQnKTtcbnZhciBGb3JtRm9yICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vRm9ybUZvcicpO1xudmFyIE1lc3NhZ2UgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9NZXNzYWdlJyk7XG5cbnZhciBGb3JtTWl4aW4gICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vRm9ybU1peGluJyk7XG52YXIgRm9ybUNvbnRleHRNaXhpbiAgICAgICAgPSByZXF1aXJlKCcuL0Zvcm1Db250ZXh0TWl4aW4nKTtcbnZhciBGb3JtRWxlbWVudE1peGluICAgICAgICA9IHJlcXVpcmUoJy4vRm9ybUVsZW1lbnRNaXhpbicpO1xudmFyIEZpZWxkTWl4aW4gICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9GaWVsZE1peGluJyk7XG52YXIgRmllbGRzZXRNaXhpbiAgICAgICAgICAgPSByZXF1aXJlKCcuL0ZpZWxkc2V0TWl4aW4nKTtcbnZhciBSZXBlYXRpbmdGaWVsZHNldE1peGluICA9IHJlcXVpcmUoJy4vUmVwZWF0aW5nRmllbGRzZXRNaXhpbicpO1xuXG52YXIgdmFsaWRhdG9ycyAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3ZhbGlkYXRvcnMnKTtcbnZhciBtZXNzYWdlcyAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vbWVzc2FnZXMnKTtcbnZhciB2YWxpZGF0aW9uICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vdmFsaWRhdGlvbicpO1xudmFyIHR5cGVzICAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi90eXBlcycpO1xudmFyIHNjaGVtYSAgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9zY2hlbWEnKTtcbnZhciBpbnB1dCAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vaW5wdXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEZvcm1NaXhpbjpGb3JtTWl4aW4sIEZvcm1Db250ZXh0TWl4aW46Rm9ybUNvbnRleHRNaXhpbiwgRm9ybUVsZW1lbnRNaXhpbjpGb3JtRWxlbWVudE1peGluLFxuICBGaWVsZE1peGluOkZpZWxkTWl4aW4sIEZpZWxkc2V0TWl4aW46RmllbGRzZXRNaXhpbiwgUmVwZWF0aW5nRmllbGRzZXRNaXhpbjpSZXBlYXRpbmdGaWVsZHNldE1peGluLFxuXG4gIEZvcm06Rm9ybSwgRmllbGQ6RmllbGQsIEZpZWxkc2V0OkZpZWxkc2V0LCBSZXBlYXRpbmdGaWVsZHNldDpSZXBlYXRpbmdGaWVsZHNldCxcblxuICBGb3JtRm9yOkZvcm1Gb3IsIE1lc3NhZ2U6TWVzc2FnZSxcblxuICBzY2hlbWE6c2NoZW1hLCB0eXBlczp0eXBlcywgdmFsaWRhdG9yczp2YWxpZGF0b3JzLCB2YWxpZGF0aW9uOnZhbGlkYXRpb24sIG1lc3NhZ2VzOm1lc3NhZ2VzLCBpbnB1dDppbnB1dFxufTtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSAod2luZG93LlJlYWN0KTtcblxudmFyIENoZWNrYm94R3JvdXAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdDaGVja2JveEdyb3VwJyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBvcHRpb25zOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICB2YWx1ZTogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuICAgIG9uQ2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHt2YWx1ZTogW119O1xuICB9LFxuXG4gIG9uQ2hhbmdlOiBmdW5jdGlvbihlKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRWYWx1ZSA9IHRoaXMucHJvcHMudmFsdWUuc2xpY2UoMCk7XG5cbiAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgbmV4dFZhbHVlLnB1c2goZS50YXJnZXQudmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgaWR4ID0gbmV4dFZhbHVlLmluZGV4T2YoZS50YXJnZXQudmFsdWUpO1xuICAgICAgaWYgKGlkeCA+IC0xKSB7XG4gICAgICAgIG5leHRWYWx1ZS5zcGxpY2UoaWR4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgdmFsdWVzID0gdGhpcy5wcm9wcy5vcHRpb25zLm1hcChmdW5jdGlvbihvKSAge3JldHVybiBvLnZhbHVlO30pO1xuICAgIG5leHRWYWx1ZS5zb3J0KGZ1bmN0aW9uKGEsIGIpICB7cmV0dXJuIHZhbHVlcy5pbmRleE9mKGEpIC0gdmFsdWVzLmluZGV4T2YoYik7fSk7XG5cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5leHRWYWx1ZSk7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgbmFtZSA9IHRoaXMuX3Jvb3ROb2RlSUQ7XG4gICAgdmFyIHZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZTtcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMucHJvcHMub3B0aW9ucy5tYXAoZnVuY3Rpb24ob3B0aW9uKSAge1xuICAgICAgdmFyIGNoZWNrZWQgPSB2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKG9wdGlvbi52YWx1ZSkgPiAtMTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIFJlYWN0LkRPTS5kaXYoXG4gICAgICAgICAge2NsYXNzTmFtZTpcInJlYWN0LWZvcm1zLWNoZWNrYm94LWdyb3VwLWJ1dHRvblwiLFxuICAgICAgICAgIGtleTpvcHRpb24udmFsdWV9LCBcbiAgICAgICAgICBSZWFjdC5ET00ubGFiZWwoIHtjbGFzc05hbWU6XCJyZWFjdC1mb3Jtcy1jaGVja2JveC1ncm91cC1sYWJlbFwifSwgXG4gICAgICAgICAgICBSZWFjdC5ET00uaW5wdXQoXG4gICAgICAgICAgICAgIHtvbkNoYW5nZTp0aGlzLm9uQ2hhbmdlLFxuICAgICAgICAgICAgICBjaGVja2VkOmNoZWNrZWQsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTpcInJlYWN0LWZvcm1zLWNoZWNrYm94LWdyb3VwLWNoZWNrYm94XCIsXG4gICAgICAgICAgICAgIHR5cGU6XCJjaGVja2JveFwiLFxuICAgICAgICAgICAgICBuYW1lOm5hbWUsXG4gICAgICAgICAgICAgIHZhbHVlOm9wdGlvbi52YWx1ZX0gKSxcbiAgICAgICAgICAgIFJlYWN0LkRPTS5zcGFuKCB7Y2xhc3NOYW1lOlwicmVhY3QtZm9ybXMtY2hlY2tib3gtZ3JvdXAtY2FwdGlvblwifSwgXG4gICAgICAgICAgICAgIG9wdGlvbi5uYW1lXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuRE9NLmRpdigge2NsYXNzTmFtZTpcInJlYWN0LWZvcm1zLWNoZWNrYm94LWdyb3VwXCJ9LCBcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENoZWNrYm94R3JvdXA7XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gKHdpbmRvdy5SZWFjdCk7XG5cbmZ1bmN0aW9uIHJlbmRlckVtcHR5T3B0aW9uKHByb3BzLCBvbkNoYW5nZSkge1xuICByZXR1cm4gKFxuICAgIFJlYWN0LkRPTS5kaXYoXG4gICAgICAgIHtjbGFzc05hbWU6XCJyZWFjdC1mb3Jtcy1yYWRpby1idXR0b24tZ3JvdXAtYnV0dG9uXCIsXG4gICAgICAgIGtleTpcIlwifSwgXG4gICAgICBSZWFjdC5ET00ubGFiZWwoXG4gICAgICAgIHtjbGFzc05hbWU6XCJyZWFjdC1mb3Jtcy1yYWRpby1idXR0b24tZ3JvdXAtbGFiZWxcIn0sIFxuICAgICAgICBSZWFjdC5ET00uaW5wdXQoXG4gICAgICAgICAge2NoZWNrZWQ6cHJvcHMuY2hlY2tlZCxcbiAgICAgICAgICBjbGFzc05hbWU6XCJyZWFjdC1mb3Jtcy1yYWRpby1idXR0b24tZ3JvdXAtcmFkaW9cIixcbiAgICAgICAgICB0eXBlOlwicmFkaW9cIixcbiAgICAgICAgICBuYW1lOnByb3BzLm5hbWUsXG4gICAgICAgICAgb25DaGFuZ2U6b25DaGFuZ2UuYmluZChudWxsLCBudWxsKSxcbiAgICAgICAgICB2YWx1ZTpcIlwifSApLFxuICAgICAgICBSZWFjdC5ET00uc3Bhbigge2NsYXNzTmFtZTpcInJlYWN0LWZvcm1zLXJhZGlvLWJ1dHRvbi1ncm91cC1jYXB0aW9uXCJ9LCBcbiAgICAgICAgICBcIm5vbmVcIlxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xufVxuXG52YXIgUmFkaW9CdXR0b25Hcm91cCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogJ1JhZGlvQnV0dG9uR3JvdXAnLFxuXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICBvcHRpb25zOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgICAgIGFsbG93RW1wdHk6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgICAgdmFsdWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBvbkNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5wcm9wcy5vcHRpb25zLm1hcCh0aGlzLnJlbmRlck9wdGlvbik7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmFsbG93RW1wdHkpIHtcbiAgICAgICAgb3B0aW9ucy51bnNoaWZ0KHJlbmRlckVtcHR5T3B0aW9uKHtcbiAgICAgICAgICAgIG5hbWU6IHRoaXMuX3Jvb3ROb2RlSUQsXG4gICAgICAgICAgICBjaGVja2VkOiAhdGhpcy5wcm9wcy52YWx1ZVxuICAgICAgICB9LCB0aGlzLm9uQ2hhbmdlKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIFJlYWN0LkRPTS5kaXYoIHtjbGFzc05hbWU6XCJyZWFjdC1mb3Jtcy1yYWRpby1idXR0b24tZ3JvdXBcIn0sIFxuICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyT3B0aW9uOiBmdW5jdGlvbihvcHRpb24pIHtcbiAgICAgIHZhciBuYW1lID0gdGhpcy5fcm9vdE5vZGVJRDtcbiAgICAgIHZhciBjaGVja2VkID0gdGhpcy5wcm9wcy52YWx1ZSA/XG4gICAgICAgICAgdGhpcy5wcm9wcy52YWx1ZSA9PT0gb3B0aW9uLnZhbHVlIDpcbiAgICAgICAgICBmYWxzZTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIFJlYWN0LkRPTS5kaXYoXG4gICAgICAgICAge2NsYXNzTmFtZTpcInJlYWN0LWZvcm1zLXJhZGlvLWJ1dHRvbi1ncm91cC1idXR0b25cIixcbiAgICAgICAgICBrZXk6b3B0aW9uLnZhbHVlfSwgXG4gICAgICAgICAgUmVhY3QuRE9NLmxhYmVsKFxuICAgICAgICAgICAge2NsYXNzTmFtZTpcInJlYWN0LWZvcm1zLXJhZGlvLWJ1dHRvbi1ncm91cC1sYWJlbFwifSwgXG4gICAgICAgICAgICBSZWFjdC5ET00uaW5wdXQoXG4gICAgICAgICAgICAgIHtjaGVja2VkOmNoZWNrZWQsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTpcInJlYWN0LWZvcm1zLXJhZGlvLWJ1dHRvbi1ncm91cC1yYWRpb1wiLFxuICAgICAgICAgICAgICB0eXBlOlwicmFkaW9cIixcbiAgICAgICAgICAgICAgbmFtZTpuYW1lLFxuICAgICAgICAgICAgICBvbkNoYW5nZTp0aGlzLm9uQ2hhbmdlLmJpbmQobnVsbCwgb3B0aW9uLnZhbHVlKSxcbiAgICAgICAgICAgICAgdmFsdWU6b3B0aW9uLnZhbHVlfSApLFxuICAgICAgICAgICAgUmVhY3QuRE9NLnNwYW4oIHtjbGFzc05hbWU6XCJyZWFjdC1mb3Jtcy1yYWRpby1idXR0b24tZ3JvdXAtY2FwdGlvblwifSwgXG4gICAgICAgICAgICAgIG9wdGlvbi5uYW1lXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0sXG5cbiAgICBvbkNoYW5nZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpO1xuICAgICAgfVxuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJhZGlvQnV0dG9uR3JvdXA7XG4iLCIndXNlIHN0cmljdCc7XG4vKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbm1vZHVsZS5leHBvcnRzID0ge1xuICBDaGVja2JveEdyb3VwOiByZXF1aXJlKCcuL0NoZWNrYm94R3JvdXAnKSxcbiAgUmFkaW9CdXR0b25Hcm91cDogcmVxdWlyZSgnLi9SYWRpb0J1dHRvbkdyb3VwJylcbn07XG4iLCIvKipcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuXG5cbiAgZnVuY3Rpb24gTGVucyhkYXRhLCBwYXRoKSB7XG4gICAgdGhpcy5fX2RhdGEgPSBkYXRhO1xuICAgIHRoaXMuX19wYXRoID0gcGF0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSB2YWx1ZSB0aGlzIGxlbnNlIHBvaW50cyB0b1xuICAgKi9cbiAgTGVucy5wcm90b3R5cGUudmFsPWZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuX19kYXRhO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLl9fcGF0aC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgdmFyIGtleSA9IHRoaXMuX19wYXRoW2ldO1xuICAgICAgdmFsdWUgPSB2YWx1ZVtrZXkua2V5XTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmIGtleS5kZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YWx1ZSA9IGtleS5kZWZhdWx0VmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICBMZW5zLnByb3RvdHlwZS5pc1VuZGVmaW5lZD1mdW5jdGlvbigpIHtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLl9fZGF0YTtcblxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5fX3BhdGgubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSB0aGlzLl9fcGF0aFtpXTtcbiAgICAgIHZhbHVlID0gdmFsdWVba2V5LmtleV07XG4gICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgTGVucy5wcm90b3R5cGUucm9vdExlbnM9ZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKHRoaXMuX19kYXRhLCBbXSk7XG4gIH07XG5cbiAgTGVucy5wcm90b3R5cGUucm9vdD1mdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fX2RhdGE7XG4gIH07XG5cbiAgTGVucy5wcm90b3R5cGUucGFyZW50PWZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9fcGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXRoID0gdGhpcy5fX3BhdGguc2xpY2UoMCwgdGhpcy5fX3BhdGgubGVuZ3RoIC0gMSk7XG4gICAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IodGhpcy5fX2RhdGEsIHBhdGgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogR2V0IGEgbGVucyBieSBhIHNwZWNpZmllZCBrZXlcbiAgICpcbiAgICogQHBhcmFtIHtLZXl9IGtleVxuICAgKiBAcGFyYW0ge0FueX0gZGVmYXVsdFZhbHVlXG4gICAqL1xuICBMZW5zLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24oa2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IoXG4gICAgICB0aGlzLl9fZGF0YSwgdGhpcy5fX3BhdGguY29uY2F0KHtrZXk6a2V5LCBkZWZhdWx0VmFsdWU6ZGVmYXVsdFZhbHVlfSkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTaG9ydGN1dCBmb3IgbGVucy5nZXQoa2V5KS5tb2QodmFsdWUpXG4gICAqXG4gICAqIEBwYXJhbSB7S2V5fSBrZXlcbiAgICogQHBhcmFtIHtBbnl9IHZhbHVlXG4gICAqL1xuICBMZW5zLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmdldChrZXkpLm1vZCh2YWx1ZSk7XG4gIH07XG5cbiAgTGVucy5wcm90b3R5cGUudXBkYXRlPWZ1bmN0aW9uKHZhbHVlcykge1xuICAgIHZhciBkYXRhID0gdGhpcy52YWwoKTtcbiAgICB2YXIgY29weSA9IHt9O1xuICAgIHZhciBrO1xuICAgIGZvciAoayBpbiBkYXRhKSB7XG4gICAgICBjb3B5W2tdID0gZGF0YVtrXTtcbiAgICB9XG4gICAgZm9yIChrIGluIHZhbHVlcykge1xuICAgICAgY29weVtrXSA9IHZhbHVlc1trXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubW9kKGNvcHkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm4gbGVucyBmb3IgYSBuZXcgZGF0YSB3aGljaCBwb2ludHMgdG8gdGhlIHNhbWUgbG9jYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7QW55fSBkYXRhXG4gICAqL1xuICBMZW5zLnByb3RvdHlwZS5mb3I9ZnVuY3Rpb24oZGF0YSkge1xuICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3RvcihkYXRhLCB0aGlzLl9fcGF0aCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIG5ldyBjb3B5IG9mIGRhdGEgYnkgcmVwbGFjaW5nIGEgdmFsdWUgdGhpcyBsZW5zIHBvaW50cyB0byB3aXRoIGFcbiAgICogbmV3IHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge0FueX0gdmFsdWVcbiAgICovXG4gIExlbnMucHJvdG90eXBlLm1vZD1mdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciB1cGRhdGVkLCBuZXdEYXRhLCBwcmV2RGF0YTtcbiAgICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhO1xuICAgIHZhciBwYXRoID0gdGhpcy5fX3BhdGg7XG5cbiAgICBpZiAocGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmZvcih2YWx1ZSk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHBhdGgubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBwYXRoW2ldO1xuXG4gICAgICAvLyBjb3B5IHRocm91Z2ggY2hhbmdlZCBwYXRoXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICB1cGRhdGVkID0gZGF0YS5zbGljZSgwKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHVwZGF0ZWQgPSB7fTtcbiAgICAgICAgZm9yICh2YXIgayBpbiBkYXRhKSB7XG4gICAgICAgICAgdXBkYXRlZFtrXSA9IGRhdGFba107XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gc3RvcmUgcmVmZXJlbmNlIHRvIG5ld2x5IGNyZWF0ZWQgcm9vdCBkYXRhXG4gICAgICBpZiAobmV3RGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG5ld0RhdGEgPSB1cGRhdGVkO1xuICAgICAgfVxuXG4gICAgICAvLyBtdXRhdGUgcHJldmlvdXNseSBjb3BpZWQgZGF0YSB3aXRoIHVwZGF0ZWQgdmFsdWVcbiAgICAgIGlmIChwcmV2RGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByZXZEYXRhW3BhdGhbaSAtIDFdLmtleV0gPSB1cGRhdGVkO1xuICAgICAgfVxuXG4gICAgICAvLyBpZiB3ZSBhcmUgYXQgdGhlIGxhc3QgcGF0aCBrZXkgdXBkYXRlIGRhdGEgd2l0aCBhIG5ldyB2YWx1ZVxuICAgICAgaWYgKGkgPT09IGxlbiAtIDEpIHtcbiAgICAgICAgdXBkYXRlZFtrZXkua2V5XSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YSA9IHVwZGF0ZWRba2V5LmtleV07XG4gICAgICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQgJiYga2V5LmRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZGF0YSA9IGtleS5kZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJldkRhdGEgPSB1cGRhdGVkO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmZvcihuZXdEYXRhKTtcbiAgfTtcblxuICAvKipcbiAgICogTWFrZSBhIG5ldyBsZW5zIGZvciBkYXRhXG4gICAqXG4gICAqIEBwYXJhbSB7QW55fSBkYXRhXG4gICAqL1xuICBMZW5zLm1ha2U9ZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmICh0aGlzLmlzTGVucyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIHJldHVybiBuZXcgdGhpcyhkYXRhLCBbXSk7XG4gIH07XG5cbiAgTGVucy5pc0xlbnM9ZnVuY3Rpb24obykge1xuICAgIHJldHVybiBvIGluc3RhbmNlb2YgTGVucztcbiAgfTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IExlbnMubWFrZS5iaW5kKExlbnMpO1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBJTlZBTElEX1ZBTFVFOiAnaW52YWxpZCB2YWx1ZScsXG4gIFZBTFVFX0lTX1JFUVVJUkVEOiAndmFsdWUgaXMgcmVxdWlyZWQnLFxuICBBVF9MRUFTVF9PTkVfSVRFTV9JU19SRVFVSVJFRDogJ2F0IGxlYXN0IG9uZSBpdGVtIGlzIHJlcXVpcmVkJyxcbiAgSVNfTk9UX0FfREFURTogJ3Nob3VsZCBiZSBhIGRhdGUgaW4gWVlZWS1NTS1ERCBmb3JtYXQnXG59O1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyAgICAgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIE5vZGUoKXt9XG5cblxuXG5mb3IodmFyIE5vZGVfX19fS2V5IGluIE5vZGUpe2lmKE5vZGUuaGFzT3duUHJvcGVydHkoTm9kZV9fX19LZXkpKXtQcm9wZXJ0eU5vZGVbTm9kZV9fX19LZXldPU5vZGVbTm9kZV9fX19LZXldO319dmFyIF9fX19TdXBlclByb3RvT2ZOb2RlPU5vZGU9PT1udWxsP251bGw6Tm9kZS5wcm90b3R5cGU7UHJvcGVydHlOb2RlLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKF9fX19TdXBlclByb3RvT2ZOb2RlKTtQcm9wZXJ0eU5vZGUucHJvdG90eXBlLmNvbnN0cnVjdG9yPVByb3BlcnR5Tm9kZTtQcm9wZXJ0eU5vZGUuX19zdXBlckNvbnN0cnVjdG9yX189Tm9kZTtcblxuICBmdW5jdGlvbiBQcm9wZXJ0eU5vZGUocHJvcHMpIHtcbiAgICBwcm9wcyA9IHByb3BzID8gdXRpbHMubWVyZ2Uoe30sIHByb3BzKSA6IHt9O1xuXG4gICAgdGhpcy5uYW1lID0gcHJvcHMubmFtZTtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIH1cblxuXG5mb3IoTm9kZV9fX19LZXkgaW4gTm9kZSl7aWYoTm9kZS5oYXNPd25Qcm9wZXJ0eShOb2RlX19fX0tleSkpe1NjaGVtYU5vZGVbTm9kZV9fX19LZXldPU5vZGVbTm9kZV9fX19LZXldO319U2NoZW1hTm9kZS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShfX19fU3VwZXJQcm90b09mTm9kZSk7U2NoZW1hTm9kZS5wcm90b3R5cGUuY29uc3RydWN0b3I9U2NoZW1hTm9kZTtTY2hlbWFOb2RlLl9fc3VwZXJDb25zdHJ1Y3Rvcl9fPU5vZGU7XG5cbiAgZnVuY3Rpb24gU2NoZW1hTm9kZShwcm9wcykge1xuICAgIHByb3BzID0gcHJvcHMgPyB1dGlscy5tZXJnZSh7fSwgcHJvcHMpIDoge307XG5cbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgdmFyIGNoaWxkcmVuID0ge307XG5cbiAgICBpZiAoYXJncy5sZW5ndGggIT09IDApIHtcbiAgICAgIGZvckVhY2hOZXN0ZWQoYXJncywgZnVuY3Rpb24oYXJnKSAge1xuICAgICAgICB1dGlscy5pbnZhcmlhbnQoXG4gICAgICAgICAgYXJnLm5hbWUsXG4gICAgICAgICAgJ3Byb3BzIGZpZWxkcyBzaG91bGQgc3BlY2lmeSBuYW1lIHByb3BlcnR5J1xuICAgICAgICApO1xuICAgICAgICBjaGlsZHJlblthcmcubmFtZV0gPSBhcmc7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLm5hbWUgPSBwcm9wcy5uYW1lO1xuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH1cblxuICBTY2hlbWFOb2RlLnByb3RvdHlwZS5tYXA9ZnVuY3Rpb24oZnVuYywgY29udGV4dCkge1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLmNoaWxkcmVuKSB7XG4gICAgICByZXN1bHRzLnB1c2goZnVuYy5jYWxsKGNvbnRleHQsIHRoaXMuY2hpbGRyZW5bbmFtZV0sIG5hbWUsIHRoaXMpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cblxuZm9yKE5vZGVfX19fS2V5IGluIE5vZGUpe2lmKE5vZGUuaGFzT3duUHJvcGVydHkoTm9kZV9fX19LZXkpKXtMaXN0Tm9kZVtOb2RlX19fX0tleV09Tm9kZVtOb2RlX19fX0tleV07fX1MaXN0Tm9kZS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShfX19fU3VwZXJQcm90b09mTm9kZSk7TGlzdE5vZGUucHJvdG90eXBlLmNvbnN0cnVjdG9yPUxpc3ROb2RlO0xpc3ROb2RlLl9fc3VwZXJDb25zdHJ1Y3Rvcl9fPU5vZGU7XG5cbiAgZnVuY3Rpb24gTGlzdE5vZGUocHJvcHMpIHtcbiAgICBwcm9wcyA9IHByb3BzID8gdXRpbHMubWVyZ2Uoe30sIHByb3BzKSA6IHt9O1xuXG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgdXRpbHMuaW52YXJpYW50KFxuICAgICAgYXJncy5sZW5ndGggPT09IDEsXG4gICAgICAncHJvcHMgZm9yIGFycmF5IG11c3QgY29udGFpbiBleGFjdGx5IG9uZSBjaGlsZCBwcm9wcyBwcm9wcydcbiAgICApO1xuXG4gICAgdGhpcy5uYW1lID0gcHJvcHMubmFtZTtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgdGhpcy5jaGlsZHJlbiA9IGFyZ3NbMF07XG4gIH1cblxuXG5mdW5jdGlvbiBmb3JFYWNoTmVzdGVkKGNvbGxlY3Rpb24sIGZ1bmMsIGNvbnRleHQpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNvbGxlY3Rpb24ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjb2xsZWN0aW9uW2ldKSkge1xuICAgICAgZm9yRWFjaE5lc3RlZChjb2xsZWN0aW9uW2ldLCBmdW5jLCBjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZnVuYy5jYWxsKGNvbnRleHQsIGNvbGxlY3Rpb25baV0sIGksIGNvbGxlY3Rpb24pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtYWtlRmFjdG9yeShjb25zdHJ1Y3Rvcikge1xuICBmdW5jdGlvbiBmYWN0b3J5KCkge1xuICAgIHZhciBub2RlID0gT2JqZWN0LmNyZWF0ZShjb25zdHJ1Y3Rvci5wcm90b3R5cGUpO1xuICAgIGNvbnN0cnVjdG9yLmFwcGx5KG5vZGUsIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbiAgLy8gd2UgZG8gdGhpcyB0byBzdXBwb3J0IGluc3RhbmNlb2YgY2hlY2tcbiAgZmFjdG9yeS5wcm90b3R5cGUgPSBjb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIHJldHVybiBmYWN0b3J5O1xufVxuXG52YXIgUHJvcGVydHkgID0gbWFrZUZhY3RvcnkoUHJvcGVydHlOb2RlKTtcbnZhciBMaXN0ICAgICAgPSBtYWtlRmFjdG9yeShMaXN0Tm9kZSk7XG52YXIgU2NoZW1hICAgID0gbWFrZUZhY3RvcnkoU2NoZW1hTm9kZSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVR5cGUoc3BlYykge1xuICByZXR1cm4gZnVuY3Rpb24ocHJvcHMpIHtcbiAgICBwcm9wcyA9IHByb3BzIHx8IHt9O1xuICAgIHJldHVybiBzcGVjKHByb3BzKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNTY2hlbWEobm9kZSkge1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIFNjaGVtYU5vZGU7XG59XG5cbmZ1bmN0aW9uIGlzTGlzdChub2RlKSB7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgTGlzdE5vZGU7XG59XG5cbmZ1bmN0aW9uIGlzUHJvcGVydHkobm9kZSkge1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIFByb3BlcnR5Tm9kZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIE5vZGU6Tm9kZSxcbiAgUHJvcGVydHk6UHJvcGVydHksIGlzUHJvcGVydHk6aXNQcm9wZXJ0eSxcbiAgU2NoZW1hOlNjaGVtYSwgaXNTY2hlbWE6aXNTY2hlbWEsXG4gIExpc3Q6TGlzdCwgaXNMaXN0OmlzTGlzdCxcbiAgY3JlYXRlVHlwZTpjcmVhdGVUeXBlXG59O1xuIiwiLyoqXG4gKiBAanN4IFJlYWN0LkRPTVxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBtZXNzYWdlcyA9IHJlcXVpcmUoJy4vbWVzc2FnZXMnKTtcblxuZnVuY3Rpb24gaWRTZXJpYWxpemUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsID8gJycgOiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gaWREZXNlcmlhbGl6ZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09ICcnID8gbnVsbCA6IHZhbHVlO1xufVxuXG52YXIgYW55ID0ge1xuICBzZXJpYWxpemU6IGlkU2VyaWFsaXplLFxuICBkZXNlcmlhbGl6ZTogaWREZXNlcmlhbGl6ZVxufTtcblxudmFyIHN0cmluZyA9IGFueTtcblxudmFyIG51bWJlciA9IHtcbiAgc2VyaWFsaXplOiBpZFNlcmlhbGl6ZSxcbiAgZGVzZXJpYWxpemU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSAnJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgLy8gYmFzZWQgb24gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTgzMDg0NC8xODI5NTRcbiAgICB9IGVsc2UgaWYgKCFpc05hTihwYXJzZUZsb2F0KHZhbHVlKSkgJiYgaXNGaW5pdGUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlcy5JTlZBTElEX1ZBTFVFKTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBpc0RhdGVSZSA9IC9eXFxkXFxkXFxkXFxkLVxcZFxcZC1cXGRcXGQkLztcblxudmFyIGRhdGUgPSB7XG4gIHNlcmlhbGl6ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgdmFyIHllYXIgPSB2YWx1ZS5nZXRGdWxsWWVhcigpO1xuICAgIHZhciBtb250aCA9IHZhbHVlLmdldE1vbnRoKCkgKyAxO1xuICAgIHZhciBkYXkgPSB2YWx1ZS5nZXREYXRlKCk7XG4gICAgcmV0dXJuICh5ZWFyICsgXCItXCIgKyBwYWQobW9udGgsIDIpICsgXCItXCIgKyBwYWQoZGF5LCAyKSk7XG4gIH0sXG4gIGRlc2VyaWFsaXplOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gJycpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAoIWlzRGF0ZVJlLmV4ZWModmFsdWUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZXMuSVNfTk9UX0FfREFURSk7XG4gICAgfVxuXG4gICAgdmFsdWUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG5cbiAgICBpZiAoaXNOYU4odmFsdWUuZ2V0VGltZSgpKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2VzLklOVkFMSURfVkFMVUUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufTtcblxuZnVuY3Rpb24gcGFkKG51bSwgc2l6ZSkge1xuICByZXR1cm4gKCcwMDAwJyArIG51bSkuc3Vic3RyKC1zaXplKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7YW55OmFueSwgc3RyaW5nOnN0cmluZywgbnVtYmVyOm51bWJlciwgZGF0ZTpkYXRlfTtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBtZXJnZUludG8oZHN0LCBzcmMpIHtcbiAgaWYgKHNyYyAhPSBudWxsKSB7XG4gICAgZm9yICh2YXIgayBpbiBzcmMpIHtcbiAgICAgIGlmICghc3JjLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgZHN0W2tdID0gc3JjW2tdO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZShhLCBiKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgbWVyZ2VJbnRvKHJlc3VsdCwgYSk7XG4gIG1lcmdlSW50byhyZXN1bHQsIGIpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIGlmICghY29uZGl0aW9uKSB7XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSB8fCAnaW52YXJpYW50IHZpb2xhdGlvbicpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7XG5cbn1cblxuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5mdW5jdGlvbiBpc1N0cmluZyhvKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKG8pID09PSAnW29iamVjdCBTdHJpbmddJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7bWVyZ2VJbnRvOm1lcmdlSW50bywgbWVyZ2U6bWVyZ2UsIGludmFyaWFudDppbnZhcmlhbnQsIGVtcHR5RnVuY3Rpb246ZW1wdHlGdW5jdGlvbiwgaXNTdHJpbmc6aXNTdHJpbmd9O1xuIiwiLyoqXG4gKiBTY2hlbWEgdmFsaWRhdGlvblxuICpcbiAqIEBqc3ggUmVhY3QuRE9NXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzICAgICAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgc2NoZW1hICAgICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vc2NoZW1hJyk7XG52YXIgZ2V0VHlwZUZyb21TY2hlbWEgICAgICAgICA9IHJlcXVpcmUoJy4vZ2V0VHlwZUZyb21TY2hlbWEnKTtcbnZhciBnZXREZWZhdWx0VmFsdWVGb3JTY2hlbWEgID0gcmVxdWlyZSgnLi9nZXREZWZhdWx0VmFsdWVGb3JTY2hlbWEnKTtcbnZhciB2YWxpZGF0b3JzICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi92YWxpZGF0b3JzJyk7XG5cbnZhciBleGlzdHMgICAgID0gdmFsaWRhdG9ycy5leGlzdHM7XG52YXIgbm9uRW1wdHkgICA9IHZhbGlkYXRvcnMubm9uRW1wdHk7XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZShub2RlLCB2YWx1ZSkge1xuICB2YXIgcmVzdWx0O1xuXG4gIGlmIChzY2hlbWEuaXNQcm9wZXJ0eShub2RlKSkge1xuICAgIHJlc3VsdCA9IGdldFR5cGVGcm9tU2NoZW1hKG5vZGUpLnNlcmlhbGl6ZSh2YWx1ZSk7XG4gIH0gZWxzZSBpZiAoc2NoZW1hLmlzU2NoZW1hKG5vZGUpKSB7XG4gICAgcmVzdWx0ID0ge307XG4gICAgZm9yICh2YXIgayBpbiB2YWx1ZSkge1xuICAgICAgaWYgKG5vZGUuY2hpbGRyZW5ba10pIHtcbiAgICAgICAgcmVzdWx0W2tdID0gc2VyaWFsaXplKG5vZGUuY2hpbGRyZW5ba10sIHZhbHVlW2tdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdFtrXSA9IHZhbHVlW2tdO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChzY2hlbWEuaXNMaXN0KG5vZGUpKSB7XG4gICAgcmVzdWx0ID0gbmV3IEFycmF5KHZhbHVlLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHZhbHVlLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICByZXN1bHRbaV0gPSBzZXJpYWxpemUobm9kZS5jaGlsZHJlbiwgdmFsdWVbaV0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB1dGlscy5pbnZhcmlhbnQoZmFsc2UsICd1bmtub3duIHNjaGVtYSBwYXNzZWQnKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGRlc2VyaWFsaXplT25seShub2RlLCB2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiB7dmFsdWU6dmFsdWUsIHZhbGlkYXRpb246IHN1Y2Nlc3N9O1xuICB9XG4gIHZhciB0eXBlID0gZ2V0VHlwZUZyb21TY2hlbWEobm9kZSk7XG4gIHRyeSB7XG4gICAgdmFsdWUgPSB0eXBlLmRlc2VyaWFsaXplKHZhbHVlKTtcbiAgfSBjYXRjaChlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbGlkYXRpb246IGZhaWx1cmUoZS5tZXNzYWdlKSxcbiAgICAgIHZhbHVlOnZhbHVlXG4gICAgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHZhbGlkYXRpb246IHN1Y2Nlc3MsXG4gICAgdmFsdWU6dmFsdWVcbiAgfTtcbn1cblxuLyoqXG4gKiBWYWxpZGF0ZSB2YWx1ZSBhZ2FpbnN0IHNjaGVtYVxuICpcbiAqIEBwYXJhbSB7U2NoZW1hfSBub2RlXG4gKiBAcGFyYW0ge0FueX0gdmFsdWVcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9ufVxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZShub2RlLCB2YWx1ZSkge1xuICBpZiAoc2NoZW1hLmlzU2NoZW1hKG5vZGUpKSB7XG4gICAgcmV0dXJuIHZhbGlkYXRlU2NoZW1hKG5vZGUsIHZhbHVlKTtcbiAgfSBlbHNlIGlmIChzY2hlbWEuaXNMaXN0KG5vZGUpKSB7XG4gICAgcmV0dXJuIHZhbGlkYXRlTGlzdChub2RlLCB2YWx1ZSk7XG4gIH0gZWxzZSBpZiAoc2NoZW1hLmlzUHJvcGVydHkobm9kZSkpIHtcbiAgICByZXR1cm4gdmFsaWRhdGVQcm9wZXJ0eShub2RlLCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdXRpbHMuaW52YXJpYW50KFxuICAgICAgZmFsc2UsXG4gICAgICAnZG8gbm90IGtub3cgaG93IHRvIHZhbGlkYXRlICcgKyBub2RlICsgJyBvZiB0eXBlICcgKyBub2RlLmNvbnN0cnVjdG9yXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIFZhbGlkYXRlIHZhbHVlIGFnYWluc3Qgc2NoZW1hIGJ1dCBvbmx5IHVzaW5nIHRoZSByb290IHNjaGVtYSBub2RlLlxuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHVzZWZ1bCB3aGVuIGRvaW5nIGFuIGluY3JlbWVudGFsIHZhbGlkYXRpb24uXG4gKlxuICogQHBhcmFtIHtTY2hlbWF9IG5vZGVcbiAqIEBwYXJhbSB7QW55fSB2YWx1ZVxuICogQHJldHVybnMge1ZhbGlkYXRpb259XG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlT25seShub2RlLCB2YWx1ZSwgY2hpbGRyZW4pIHtcbiAgaWYgKHNjaGVtYS5pc1NjaGVtYShub2RlKSkge1xuICAgIHJldHVybiB2YWxpZGF0ZVNjaGVtYU9ubHkobm9kZSwgdmFsdWUsIGNoaWxkcmVuKTtcbiAgfSBlbHNlIGlmIChzY2hlbWEuaXNMaXN0KG5vZGUpKSB7XG4gICAgcmV0dXJuIHZhbGlkYXRlTGlzdE9ubHkobm9kZSwgdmFsdWUsIGNoaWxkcmVuKTtcbiAgfSBlbHNlIGlmIChzY2hlbWEuaXNQcm9wZXJ0eShub2RlKSkge1xuICAgIHJldHVybiB2YWxpZGF0ZVByb3BlcnR5KG5vZGUsIHZhbHVlLCBjaGlsZHJlbik7XG4gIH0gZWxzZSB7XG4gICAgdXRpbHMuaW52YXJpYW50KFxuICAgICAgZmFsc2UsXG4gICAgICAnZG8gbm90IGtub3cgaG93IHRvIHZhbGlkYXRlICcgKyBub2RlICsgJyBvZiB0eXBlICcgKyBub2RlLmNvbnN0cnVjdG9yXG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVNjaGVtYShub2RlLCB2YWx1ZSkge1xuICB2YXIgY2hpbGRyZW5WYWxpZGF0aW9uID0gdmFsaWRhdGVTY2hlbWFDaGlsZHJlbihub2RlLCB2YWx1ZSk7XG5cbiAgdmFyIGNvbnZlcnRlZFZhbHVlID0gdmFsdWU7XG5cbiAgaWYgKE9iamVjdC5rZXlzKGNoaWxkcmVuVmFsaWRhdGlvbi5jaGlsZHJlbikubGVuZ3RoID4gMCkge1xuICAgIGNvbnZlcnRlZFZhbHVlID0ge307XG4gICAgZm9yICh2YXIgayBpbiB2YWx1ZSkge1xuICAgICAgY29udmVydGVkVmFsdWVba10gPSBjaGlsZHJlblZhbGlkYXRpb24uY2hpbGRyZW5ba10gIT09IHVuZGVmaW5lZCA/XG4gICAgICAgIGNoaWxkcmVuVmFsaWRhdGlvbi5jaGlsZHJlbltrXSA6XG4gICAgICAgIHZhbHVlW2tdO1xuICAgIH1cbiAgfVxuXG4gIHZhciB2YWxpZGF0aW9uID0gdmFsaWRhdGVTY2hlbWFPbmx5KFxuICAgICAgbm9kZSxcbiAgICAgIGNvbnZlcnRlZFZhbHVlLFxuICAgICAgY2hpbGRyZW5WYWxpZGF0aW9uLnZhbGlkYXRpb25cbiAgKTtcblxuICByZXR1cm4gdmFsaWRhdGlvbjtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVTY2hlbWFPbmx5KG5vZGUsIHZhbHVlLCBjaGlsZHJlbikge1xuXG4gIGlmICghYXJlQ2hpbGRyZW5WYWxpZChjaGlsZHJlbikpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6dmFsdWUsXG4gICAgICB2YWxpZGF0aW9uOiB7XG4gICAgICAgIHZhbGlkYXRpb246IHtmYWlsdXJlOiB1bmRlZmluZWR9LFxuICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgdmFyIGRlc2VyaWFsaXplZCA9IGRlc2VyaWFsaXplT25seShub2RlLCB2YWx1ZSk7XG5cbiAgaWYgKGlzRmFpbHVyZShkZXNlcmlhbGl6ZWQudmFsaWRhdGlvbikpIHtcbiAgICByZXR1cm4gZGVzZXJpYWxpemVkO1xuICB9XG5cbiAgdmFyIHZhbGlkYXRpb24gPSBub2RlLnByb3BzLnZhbGlkYXRlID9cbiAgICB2YWxpZGF0b3JzLnZhbGlkYXRvcihub2RlLnByb3BzLnZhbGlkYXRlKSh2YWx1ZSwgbm9kZS5wcm9wcykgOlxuICAgIHZhbGlkYXRvcnMuc3VjY2VzcztcblxuICByZXR1cm4ge1xuICAgIHZhbHVlOiBkZXNlcmlhbGl6ZWQudmFsdWUsXG4gICAgdmFsaWRhdGlvbjoge3ZhbGlkYXRpb246dmFsaWRhdGlvbn1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVTY2hlbWFDaGlsZHJlbihub2RlLCB2YWx1ZSkge1xuICB2YXIgdmFsaWRhdGlvbiA9IHt9O1xuICB2YXIgY2hpbGRyZW4gPSB7fTtcblxuICBpZiAodmFsdWUgJiYgbm9kZS5jaGlsZHJlbikge1xuICAgIGZvciAodmFyIG5hbWUgaW4gbm9kZS5jaGlsZHJlbikge1xuICAgICAgdmFyIGNoaWxkVmFsdWUgPSB2YWx1ZVtuYW1lXSAhPT0gdW5kZWZpbmVkID9cbiAgICAgICAgdmFsdWVbbmFtZV0gOlxuICAgICAgICBnZXREZWZhdWx0VmFsdWVGb3JTY2hlbWEobm9kZS5jaGlsZHJlbltuYW1lXSk7XG4gICAgICB2YXIgY2hpbGRWYWxpZGF0aW9uID0gdmFsaWRhdGUobm9kZS5jaGlsZHJlbltuYW1lXSwgY2hpbGRWYWx1ZSk7XG5cbiAgICAgIGlmIChpc0ZhaWx1cmUoY2hpbGRWYWxpZGF0aW9uLnZhbGlkYXRpb24pKSB7XG4gICAgICAgIHZhbGlkYXRpb25bbmFtZV0gPSBjaGlsZFZhbGlkYXRpb24udmFsaWRhdGlvbjtcbiAgICAgIH1cblxuICAgICAgY2hpbGRyZW5bbmFtZV0gPSBjaGlsZFZhbGlkYXRpb24udmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHt2YWxpZGF0aW9uOnZhbGlkYXRpb24sIGNoaWxkcmVuOmNoaWxkcmVufTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVMaXN0KG5vZGUsIHZhbHVlKSB7XG4gIHZhciBjaGlsZHJlblZhbGlkYXRpb24gPSB2YWxpZGF0ZUxpc3RDaGlsZHJlbihub2RlLCB2YWx1ZSk7XG5cbiAgdmFyIHZhbGlkYXRpb24gPSB2YWxpZGF0ZUxpc3RPbmx5KFxuICAgICAgbm9kZSxcbiAgICAgIGNoaWxkcmVuVmFsaWRhdGlvbi5jaGlsZHJlbixcbiAgICAgIGNoaWxkcmVuVmFsaWRhdGlvbi52YWxpZGF0aW9uXG4gICk7XG4gIHJldHVybiB2YWxpZGF0aW9uO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUxpc3RPbmx5KG5vZGUsIHZhbHVlLCBjaGlsZHJlbikge1xuXG4gIGlmICghYXJlQ2hpbGRyZW5WYWxpZChjaGlsZHJlbikpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6dmFsdWUsXG4gICAgICB2YWxpZGF0aW9uOiB7XG4gICAgICAgIHZhbGlkYXRpb246IHtmYWlsdXJlOiB1bmRlZmluZWR9LFxuICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgdmFyIGRlc2VyaWFsaXplZCA9IGRlc2VyaWFsaXplT25seShub2RlLCB2YWx1ZSk7XG5cbiAgaWYgKGlzRmFpbHVyZShkZXNlcmlhbGl6ZWQudmFsaWRhdGlvbikpIHtcbiAgICByZXR1cm4gZGVzZXJpYWxpemVkO1xuICB9XG5cbiAgdmFyIHZhbGlkYXRvciA9IG5vbkVtcHR5LmFuZFRoZW4obm9kZS5wcm9wcy52YWxpZGF0ZSk7XG4gIHZhciB2YWxpZGF0aW9uID0gdmFsaWRhdG9yKGRlc2VyaWFsaXplZC52YWx1ZSwgbm9kZS5wcm9wcyk7XG5cbiAgcmV0dXJuIHtcbiAgICB2YWx1ZTogZGVzZXJpYWxpemVkLnZhbHVlLFxuICAgIHZhbGlkYXRpb246IHt2YWxpZGF0aW9uOnZhbGlkYXRpb259XG4gIH07XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlTGlzdENoaWxkcmVuKG5vZGUsIHZhbHVlKSB7XG4gIHZhciB2YWxpZGF0aW9uID0ge307XG4gIHZhciBjaGlsZHJlbiA9IFtdO1xuXG4gIGlmICh2YWx1ZSAmJiBub2RlLmNoaWxkcmVuKSB7XG4gICAgZm9yICh2YXIgaWR4ID0gMCwgbGVuID0gdmFsdWUubGVuZ3RoOyBpZHggPCBsZW47IGlkeCsrKSB7XG4gICAgICB2YXIgY2hpbGRWYWxpZGF0aW9uID0gdmFsaWRhdGUobm9kZS5jaGlsZHJlbiwgdmFsdWVbaWR4XSk7XG4gICAgICBpZiAoaXNGYWlsdXJlKGNoaWxkVmFsaWRhdGlvbi52YWxpZGF0aW9uKSkge1xuICAgICAgICB2YWxpZGF0aW9uW2lkeF0gPSBjaGlsZFZhbGlkYXRpb24udmFsaWRhdGlvbjtcbiAgICAgIH1cbiAgICAgIGNoaWxkcmVuW2lkeF0gPSBjaGlsZFZhbGlkYXRpb24udmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHt2YWxpZGF0aW9uOnZhbGlkYXRpb24sIGNoaWxkcmVuOmNoaWxkcmVufTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wZXJ0eShub2RlLCB2YWx1ZSkge1xuXG4gIHZhciBkZXNlcmlhbGl6ZWQgPSBkZXNlcmlhbGl6ZU9ubHkobm9kZSwgdmFsdWUpO1xuXG4gIGlmIChpc0ZhaWx1cmUoZGVzZXJpYWxpemVkLnZhbGlkYXRpb24pKSB7XG4gICAgcmV0dXJuIGRlc2VyaWFsaXplZDtcbiAgfVxuXG4gIHZhciB2YWxpZGF0b3IgPSBleGlzdHMuYW5kVGhlbihub2RlLnByb3BzLnZhbGlkYXRlKTtcbiAgdmFyIHZhbGlkYXRpb24gPSB2YWxpZGF0b3IoZGVzZXJpYWxpemVkLnZhbHVlLCBub2RlLnByb3BzKTtcblxuICByZXR1cm4ge1xuICAgIHZhbHVlOiBkZXNlcmlhbGl6ZWQudmFsdWUsXG4gICAgdmFsaWRhdGlvbjoge3ZhbGlkYXRpb246dmFsaWRhdGlvbn1cbiAgfTtcbn1cblxudmFyIHN1Y2Nlc3MgPSB7XG4gIHZhbGlkYXRpb246IHt9LFxuICBjaGlsZHJlbjoge31cbn07XG5cbmZ1bmN0aW9uIGZhaWx1cmUoZmFpbHVyZSkge1xuICByZXR1cm4ge3ZhbGlkYXRpb246IHtmYWlsdXJlOmZhaWx1cmV9fTtcbn1cblxuZnVuY3Rpb24gaXNTdWNjZXNzKHZhbGlkYXRpb24pIHtcbiAgcmV0dXJuICFpc0ZhaWx1cmUodmFsaWRhdGlvbik7XG59XG5cbmZ1bmN0aW9uIGlzRmFpbHVyZSh2YWxpZGF0aW9uKSB7XG4gIHJldHVybiAoXG4gICAgKHZhbGlkYXRpb24udmFsaWRhdGlvbiAmJiB2YWxpZGF0aW9uLnZhbGlkYXRpb24uZmFpbHVyZSAhPT0gdW5kZWZpbmVkKVxuICAgIHx8ICh2YWxpZGF0aW9uLmNoaWxkcmVuICE9PSB1bmRlZmluZWQgJiYgIWFyZUNoaWxkcmVuVmFsaWQodmFsaWRhdGlvbi5jaGlsZHJlbikpXG4gICk7XG59XG5cblxuZnVuY3Rpb24gYXJlQ2hpbGRyZW5WYWxpZChjaGlsZHJlbikge1xuICBmb3IgKHZhciBrIGluIGNoaWxkcmVuKSB7XG4gICAgaWYgKGlzRmFpbHVyZShjaGlsZHJlbltrXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHZhbGlkYXRlOnZhbGlkYXRlLCB2YWxpZGF0ZU9ubHk6dmFsaWRhdGVPbmx5LFxuICBzdWNjZXNzOnN1Y2Nlc3MsIGZhaWx1cmU6ZmFpbHVyZSxcbiAgZGVzZXJpYWxpemVPbmx5OmRlc2VyaWFsaXplT25seSwgc2VyaWFsaXplOnNlcmlhbGl6ZSxcbiAgaXNTdWNjZXNzOmlzU3VjY2VzcywgaXNGYWlsdXJlOmlzRmFpbHVyZVxufTtcbiIsIi8qKlxuICogQGpzeCBSZWFjdC5ET01cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBtZXNzYWdlcyAgICAgID0gcmVxdWlyZSgnLi9tZXNzYWdlcycpO1xuXG52YXIgc3VjY2VzcyA9IHtmYWlsdXJlOiB1bmRlZmluZWR9O1xudmFyIGNvbW1vbkZhaWx1cmUgPSB7ZmFpbHVyZTogbWVzc2FnZXMuSU5WQUxJRF9WQUxVRX07XG5cbmZ1bmN0aW9uIGlzU3VjY2Vzcyh2YWxpZGF0aW9uKSB7XG4gIHJldHVybiB2YWxpZGF0aW9uLmZhaWx1cmUgPT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaXNGYWlsdXJlKHZhbGlkYXRpb24pIHtcbiAgcmV0dXJuIHZhbGlkYXRpb24uZmFpbHVyZSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBtYWtlKGZ1bmMpIHtcbiAgdmFyIHdyYXBwZXIgPSBmdW5jdGlvbih2YWx1ZSwgc2NoZW1hKSAge1xuICAgIHZhciBtYXliZUZhaWx1cmUgPSBmdW5jKHZhbHVlLCBzY2hlbWEpO1xuICAgIGlmIChtYXliZUZhaWx1cmUgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgIH1cbiAgICBpZiAobWF5YmVGYWlsdXJlID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGNvbW1vbkZhaWx1cmU7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1N0cmluZyhtYXliZUZhaWx1cmUpKSB7XG4gICAgICByZXR1cm4ge2ZhaWx1cmU6IG1heWJlRmFpbHVyZX07XG4gICAgfVxuICAgIHJldHVybiBtYXliZUZhaWx1cmU7XG4gIH07XG4gIHdyYXBwZXIuYW5kVGhlbiA9IGFuZFRoZW4uYmluZChudWxsLCB3cmFwcGVyKTtcbiAgd3JhcHBlci5pc1ZhbGlkYXRvciA9IHRydWU7XG4gIHJldHVybiB3cmFwcGVyO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0b3JFbXB0eShmdW5jKSB7XG4gIGlmICghZnVuYykge1xuICAgIHJldHVybiB1dGlscy5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZTtcbiAgfVxuICBpZiAoZnVuYy5pc1ZhbGlkYXRvcikge1xuICAgIHJldHVybiBmdW5jO1xuICB9XG5cbiAgcmV0dXJuIG1ha2UoZnVuYyk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRvcihmdW5jKSB7XG4gIGlmICghZnVuYykge1xuICAgIHJldHVybiB1dGlscy5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZTtcbiAgfVxuICBpZiAoZnVuYy5pc1ZhbGlkYXRvcikge1xuICAgIHJldHVybiBmdW5jO1xuICB9XG5cbiAgdmFyIHdyYXBwZXIgPSBmdW5jdGlvbih2YWx1ZSwgc2NoZW1hKSBcbiAgICB7cmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgP1xuICAgICAgdHJ1ZSA6XG4gICAgICBmdW5jKHZhbHVlLCBzY2hlbWEpO307XG5cbiAgcmV0dXJuIG1ha2Uod3JhcHBlcik7XG59XG5cbmZ1bmN0aW9uIGFuZFRoZW4oZmlyc3QsIHNlY29uZCkge1xuICBpZiAoIXNlY29uZCkge1xuICAgIHJldHVybiBmaXJzdDtcbiAgfVxuXG4gIHNlY29uZCA9IHZhbGlkYXRvcihzZWNvbmQpO1xuXG4gIHZhciB3cmFwcGVyID0gZnVuY3Rpb24odmFsdWUsIHNjaGVtYSkgIHtcbiAgICB2YXIgdmFsaWRhdGlvbiA9IGZpcnN0KHZhbHVlLCBzY2hlbWEpO1xuICAgIHJldHVybiBpc0ZhaWx1cmUodmFsaWRhdGlvbikgP1xuICAgICAgdmFsaWRhdGlvbiA6XG4gICAgICBzZWNvbmQodmFsdWUsIHNjaGVtYSk7XG4gIH07XG5cbiAgcmV0dXJuIG1ha2Uod3JhcHBlcik7XG59XG5cbnZhciBleGlzdHMgPSB2YWxpZGF0b3JFbXB0eShmdW5jdGlvbih2YWx1ZSwgc2NoZW1hKSBcbiAge3JldHVybiBzY2hlbWEucmVxdWlyZWQgJiYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpID9cbiAgICBtZXNzYWdlcy5WQUxVRV9JU19SRVFVSVJFRCA6XG4gICAgdHJ1ZTt9KTtcblxudmFyIG5vbkVtcHR5ID0gdmFsaWRhdG9yKGZ1bmN0aW9uKHZhbHVlLCBzY2hlbWEpIFxuICB7cmV0dXJuIHNjaGVtYS5ub25FbXB0eSAmJiB2YWx1ZS5sZW5ndGggPT09IDAgP1xuICAgIG1lc3NhZ2VzLkFUX0xFQVNUX09ORV9JVEVNX0lTX1JFUVVJUkVEIDpcbiAgICB0cnVlO30pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdmFsaWRhdG9yRW1wdHk6dmFsaWRhdG9yRW1wdHksXG4gIHZhbGlkYXRvcjp2YWxpZGF0b3IsXG5cbiAgaXNTdWNjZXNzOmlzU3VjY2VzcyxcbiAgaXNGYWlsdXJlOmlzRmFpbHVyZSxcblxuICBzdWNjZXNzOnN1Y2Nlc3MsXG4gIGV4aXN0czpleGlzdHMsXG4gIG5vbkVtcHR5Om5vbkVtcHR5XG59O1xuIl19
