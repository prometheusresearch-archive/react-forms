React Forms and Flux architecture
=================================

React Forms plays well with Flux architecture. Because the entire form state is
encapsulated within the Form value object it is easy to manage it inside Flux
store.

The motivation for keeping form value in Flux store is the following:

- Form value becomes globally available and application can easily access and
  render different bits and pieces of it in different parts of the application
  screen.

- The code for async validation / auto-save or any other non-presentation
  related logic can be kept outside of React components which makes separation
  of concerns more clear and the code itself reusable.

The code examples below are written using `facebook/flux`_ library but similar
code will be required, for example, for reflux_.

Actions
-------

The code for ``ActionConstants.js``, the module which defines constants which
are shared between stores and action creators::

    var ActionConstants = {
      UPDATE_FORM_VALUE: 'UPDATE_FORM_VALUE',
      INIT_FORM: 'INIT_FORM'
    }

    module.exports = ActionConstants

The code for ``Actions.js``, the module which defines action creators. There are
two actions, ``initForm`` which is called when user starts editing some value in
a form and ``updateFormValue`` which is called on each update to a form::

    var Dispatcher = require('./Dispatcher')
    var ActionConstants = require('./ActionConstants')

    var Actions = {

      initForm(value) {
        Dispatcher.handleViewAction({
          actionType: ActionConstants.INIT_FORM,
          value: value
        })
      },

      updateFormValue(formValue, keyPath) {
        Dispatcher.handleViewAction({
          actionType: ActionConstants.UPDATE_FORM_VALUE,
          formValue: formValue,
          keyPath: keyPath
        })
      }
    }

    module.exports = Actions

Form value store
----------------

Finally the only React Forms specific bit of code which defines
``FormValueStore.js``, a module for a store which manages form value object::

    var {EventEmitter} = require('events')
    var ReactForms = require('react-forms')
    var assign = require('object-assign')
    var ActionConstants = require('./ActionConstants')
    var Actions = require('./Actions')
    var Dispatcher = require('./Dispatcher')

    var CHANGE_EVENT = 'change'

    var _formValue

    function updateFormValue(formValue) {
      _formValue = formValue
    }

    initForm(value) {
      var onUpdate = Actions.updateFormValue
      var root = FormValueStore.getFormValue

      _formValue = ReactForms.Value.create(
        schema,
        value,
        Actions.updateFormValue,
        FormValueStore.getFormValue
      )
    }

    var FormValueStore = assign({}, EventEmitter.prototype, {

      getFormValue() {
        return _formValue
      },

      emitChange() {
        this.emit(CHANGE_EVENT)
      },

      addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback)
      },

      removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback)
      }

    })

    Dispatcher.register(function(payload) {

      var action = payload.action

      switch (action.actionType) {
        case ActionConstants.UPDATE_FORM_VALUE:
          updateFormValue(action.formValue)
        case ActionConstants.INIT_FORM:
          initForm(action.value)
        default:
          return true
      }

      FormValueStore.emitChange()

      return true

    })

    module.exports = FormValueStore

Form component
--------------

The example form component which pulls data from ``FormValueStore``. Note that
there's no need to use ``<ReactForms.Form />`` component because we already
manage form value inside the ``FormValueStore``. Because of that we render form
with ``<ReactForms.Element />`` stateless component directly::

    var React = require('react')
    var ReactForms = require('react-forms')
    var FormValueStore = require('./FormValueStore')

    function getFormValueState() {
      return {formValue: FormValueStore.getFormValue()}
    }

    var Form = React.createClass({

      render() {
        var {formValue} = this.state
        return (
          <form>
            <ReactForms.Element value={formValue} />
          </form>
        )
      },

      getInitialState() {
        return getFormValueState()
      },

      componentDidMount() {
        FormValueStore.addChangeListener(this._onChange);
      },

      componentWillUnmount() {
        FormValueStore.removeChangeListener(this._onChange);
      },

      _onChange() {
        this.setState(getFormValueState())
      }
    })

    module.exports = Form

.. _facebook/flux: https://github.com/facebook/flux
.. _reflux: https://github.com/spoike/refluxjs
