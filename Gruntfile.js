module.exports = function(grunt) {

  grunt.initConfig({
    browserify: {
      test: {
        options: {
          transform: [
                      ['babelify', {presets: ['es2015']}]
                     ]
        },
        src: ['testfile.js'],
        dest: 'testfile.browserify.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['browserify']);
};