'use strict';

var fs          = require('fs');
var path        = require('path');
var express     = require('express');
var less        = require('less-file');

function cur() {
  var args = Array.prototype.slice.call(arguments);
  args.unshift(__dirname);
  return path.join.apply(path, args);
}

function page(req, res, next) {
  fs.readFile(cur('index.html'), 'utf8', function(err, content) {
    if (err) {
      return next(err);
    }
    res.setHeader('Content-Type', 'text/html');
    res.send(content);
  });
}

var app = express();

var browserify  = require('connect-browserify');
app.get('/bundle.js', browserify(__dirname, {debug: true}));

app.use(less(cur('styles/index.less')));
app.use('/assets', express.static(cur('assets')));
app.use('/mock', express.static(cur('mock')));
app.use(page);

var argv = process.argv.slice(2);
var port = argv[0] || 8080;

app.listen(port, function() {
  console.log('Started rex.component-demo on http://localhost:' + port + '/')
});
