module.exports = function(grunt) {

    var fs = require("fs");

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sync');
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    noCache: true
                  },
                files: {
                    'contents/css/styles.css' : 'contents/sass/styles.scss'
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'contents/scripts/script.min.js': ['contents/scripts/script.js']
                },
                sourceMap: true
            }
        },
        sync: {
            copy_resources: {
                files: [
                    { cwd: 'contents', src: 'css/**', dest: '../public_html' },
                    { cwd: 'contents', src: 'scripts/script.min.js', dest: '../public_html' }
                ]
            }
        },
        watch: {
            options: {
                livereload: true
            },
            scss: {
                files: '**/*.scss',
                tasks: ['sass']
            },
            css: {
                files: '**/*.css',
                tasks: ['sync']
            },
            dev: {
                files: ["contents/scripts/[!script.min.js]*.js"],
                tasks: ["browserify"]
            },
            js: {
                files: 'contents/scripts/script.js',
                tasks: ['uglify']
            },
            min: {
                files: 'contents/scripts/script.min.js',
                tasks: ['sync']
            }
        }
    });


    grunt.registerTask("default", ["sass", "uglify", "sync", "watch"]);


}