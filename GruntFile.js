module.exports = function(grunt) {

  var tasks = ['less', 'cssmin', 'csslint'];

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-csslint');

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
    },

    csslint: {
      strict: {
        options: {
          import: 2
        },
        src: ['dist/css-responsive-menu.min.css', 'dist/css-responsive-menu.css']
      }//,
      // lax: {
      //   options: {
      //     import: false
      //   },
      //   src: ['path/to/**/*.css']
      // }
    }
  });

  grunt.registerTask('default', ['watch']);
};