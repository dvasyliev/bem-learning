'use strict';

module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        // sasslint: {
        //     options: {
        //         configFile: './.sasslintrc'
        //     },
        //     target: ['src/scss/*.scss',
        //         'src/scss/**/*.scss']
        // },
        sass: {
            dev: {
                options: {
                    sourseMap: true,
                    outputStyle: 'expanded',
                    // includePaths: require('node-bourbon').includePaths
                },
                files: {
                    'stylesheet/main.css': 'src/scss/main.scss'
                }
            }
        },
        watch: {
            css: {
                // * -- любые символы, /**/ -- папка любой вложенности
                files: ['src/scss/**/*.scss'],
                tasks: ['dev-sass']
            }
        }
    });

    // grunt.loadNpmTasks('grunt-sass-lint');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-newer');
    // grunt.loadNpmTasks('bourbon');

    // Default task(s).
    grunt.registerTask('dev-sass', [/*'sasslint', */'newer:sass:dev']);
    grunt.registerTask('default', ['dev-sass']);
};