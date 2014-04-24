###

  Plugin which renders React components as templates.

###

nodeJSX = require 'node-jsx'
React = require 'react'

nodeJSX.install(harmony: true)

module.exports = (env, callback) ->

  class ReactTemplate extends env.TemplatePlugin

    constructor: (@component) ->

    render: (locals, callback) ->
      try
        markup = React.renderComponentToString(this.component(locals))
      catch e
        return callback(e)

      markup = '<!doctype html>\n' + markup

      callback(null, new Buffer(markup))

    @fromFile: (filepath, callback) ->
      delete require.cache[filepath.full]
      try
        component = require(filepath.full)
      catch e
        return callback(e)

      callback(null, new ReactTemplate(component))


  env.registerTemplatePlugin '**/*.*(js)', ReactTemplate

  callback()
