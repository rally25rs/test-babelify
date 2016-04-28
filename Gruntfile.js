module.exports = function(grunt) {

  grunt.initConfig({
    browserify: {
      test: {
        options: {
          browserifyOptions: {
            debug: true
          },
          transform: [
                      ['babelify', {presets: ['es2015']}]
                     ],
          plugin: ['proxyquireify/plugin']
        },
        src: ['testfile.js'],
        dest: 'testfile.browserify.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['browserify']);
};