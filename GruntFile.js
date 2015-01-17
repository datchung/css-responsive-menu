module.exports = function(grunt) {

  var tasks = ['less', 'cssmin', 'header', 'csslint', 'compress', 'clean'];

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-header');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-clean');

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
          'build/css-responsive-menu.css': 'css/*.less'
        }
      }
    },

    cssmin: {
      target: {
        files: {
          'build/css-responsive-menu.min.css': ['build/css-responsive-menu.css']
        }
      }
    },

    header: {
        dist: {
            options: {
                text: '/* <%= pkg.title %> v<%= pkg.version %> | <%= pkg.homepage %> | ' + 
                  'Licensed <%= pkg.license %> | Built <%= grunt.template.today() %> */'
            },
            files: {
                'dist/css-responsive-menu.css': 'build/css-responsive-menu.css',
                'dist/css-responsive-menu.min.css': 'build/css-responsive-menu.min.css'
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
    },

    clean: ["build"]
  });

  grunt.registerTask('default', ['watch']);
};