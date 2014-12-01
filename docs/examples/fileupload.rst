File upload
===========

This example demonstrates how to implement file upload with React Forms:

.. raw:: html

  <style>
    .MyForm {
      margin-bottom: 1.5em;
    }
  </style>
  <div id="example"></div>

First we need to define a custom input component which will expose a File_
object as the selected value of the corresponding field. That will allow to keep
and manipulate the state of the field in JavaScript instead of relying on DOM.

The component itself is pretty simple but in your application you would probably
want to have a more sophisticated implementation which depends on the concrete
use case. For example, for image uploading you might want to render the file
contents on ``<canvas />`` element and allow users to manipulate the image
before sending it to a server.

What we have is just a button and a filename rendered:

.. jsx::
  :harmony:

  var React = require('react')

  var FileInput = React.createClass({

    render() {
      var {value, ...props} = this.props
      return (
        <div {...props} onChange={undefined} className="rf-FileInput">
          <div className="rf-FileInput__input">
            <button
              type="button"
              onClick={this.onClick}
              className="rf-FileInput__button">
              Choose file
            </button>
            <div className="rf-FileInput__filename">
              {value ? value.name : 'No file chosen'}
            </div>
          </div>
          <input
            ref="underlying"
            style={{display: 'none'}}
            type="file"
            onChange={this.onChange}
            />
        </div>
      )
    },

    onChange(e) {
      var files = e.target.files
      this.props.onChange(files[0])
    },

    onClick() {
      this.refs.underlying.getDOMNode().click()
    }

  })

Note that we still need to render a ``<input type="file" />`` but make it
hidden. This is made to proxy button's clicks on it to allow file picker dialog
to appear.

Now we need to define a form schema node which will represent files:

.. jsx::
  :harmony:

  var ReactForms = require('react-forms')

  class FileNode extends ReactForms.schema.ScalarNode {

    getDefaultProps() {
      return {input: FileInput}
    }

    deserialize(value) {
      return value
    }

    serialize(value) {
      return value
    }
  }

That's all we need to render a form with file uploads:

.. jsx::
  :harmony:

  var Demo = require('react-forms/lib/Demo')

  var schema = ReactForms.schema.Mapping({
    reportTitle: ReactForms.schema.Scalar({label: 'Title'}),
    reportContents: FileNode.create({label: 'Report'})
  })

  React.render(
    <Demo>
      <ReactForms.Form schema={schema} />
    </Demo>,
    document.getElementById('example'))

.. _File: https://developer.mozilla.org/en-US/docs/Web/API/File
