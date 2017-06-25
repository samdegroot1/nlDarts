module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                files: {
                    'themes/nldarts/css/style.css' : 'themes/nldarts/css/main.scss'
                }
            }
        },
        cssmin: {
           dist: {
              files: {
                 'themes/nldarts/css/style.min.css': ['themes/nldarts/css/**/*.css']
              }
          }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass', 'cssmin']
            }
        },
        
    });
    
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['watch', 'cssmin']);
}
