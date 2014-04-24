###

  Plugin which renders jsx with

###

fs = require 'fs'
tools = require 'react-tools'

module.exports = (env, callback) ->

  class JSXPlugin extends env.ContentPlugin

    constructor: (@filepath, @content) ->

    getFilename: ->
      @filepath.relative.replace /jsx$/, 'js'

    getView: ->
      return (env, locals, contents, templates, callback) ->

        try
          content = tools.transform(@content, {harmony: true})
        catch e
          return callback(e)

        callback(null, new Buffer(content))

    @fromFile = (filepath, callback) ->

      fs.readFile filepath.full, 'utf8', (err, content) -> 
        if err
          callback(err)
        else
          callback(null, new JSXPlugin(filepath, content))

  env.registerContentPlugin 'js', '**/*.jsx', JSXPlugin

  callback()

