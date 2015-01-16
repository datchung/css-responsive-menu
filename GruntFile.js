module.exports = function(grunt) {

  var tasks = ['less', 'cssmin'];

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      options: {
        livereload: true,
        atBegin: true
      },
      app: {
        files: ['css/*.less'],
        tasks: tasks
      }
    },

    less: {
      all: {
        files: {
          'dist/css-responsive-menu.css': 'css/*.less'
        }
      }
    },

    cssmin: {
      target: {
        files: {
          'dist/css-responsive-menu.min.css': ['dist/css-responsive-menu.css']
        }
      }
    }
  });

  grunt.registerTask('default', ['watch']);
};