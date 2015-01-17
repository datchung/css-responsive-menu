module.exports = function(grunt) {

  var tasks = ['less', 'cssmin', 'csslint', 'compress'];

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-compress');

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
    },

    compress: {
      main: {
        options: {
          archive: 'dist/css-responsive-menu.zip'
        },
        src: ['dist/*.css']
      }
    }
  });

  grunt.registerTask('default', ['watch']);
};