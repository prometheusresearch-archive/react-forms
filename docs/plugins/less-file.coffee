###

  Plugin which renders less with less-file

###

compile = require 'less-file/lib/compiler'

module.exports = (env, callback) ->

  class LessFilePlugin extends env.ContentPlugin

    constructor: (@filepath) ->

    getFilename: ->
      @filepath.relative.replace /less$/, 'css'

    getView: ->
      return (env, locals, contents, templates, callback) ->
        compile(@filepath.full, {minify: true}).done(
          (result) -> callback(null, result.raw),
          (err) -> callback(err)
        )

    @fromFile = (filepath, callback) ->
      callback(null, new LessFilePlugin(filepath))

  env.registerContentPlugin 'styles', '**/*.less', LessFilePlugin

  callback()
