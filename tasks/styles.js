module.exports = function(grunt) {
  grunt.registerTask('styles', [
    'copy:styles',
    'sass'
  ]);
};