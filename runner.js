var fs = require('fs');
var browserify = require('browserify');
var proxyquire = require('proxyquireify');
var babelify = require('babelify');

browserify('testfile.js', { debug: true })
  .transform(babelify, {presets: ['es2015']})
  .plugin(proxyquire.plugin)
  .bundle()
  .pipe(fs.createWriteStream('testfile.browserify.js'));
