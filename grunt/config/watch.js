'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');

    return {
        less: {
            files: ['public/css/**/*.less'],
            tasks: ['less:app'],
            options: {
                spawn: false,
                atBegin: true
            }
        },
        compass: {
            files: ['**/*.scss'],
            tasks: ['compass:dev'],
            options: {
                spawn: false,
                atBegin: true
            }
        },
        server: {
            files: [
                'controllers/**/*.js',
                'lib/**/*.js'
            ],
            tasks: ['jshint:server'],
            options: {
                spawn: false
            }
        },
        client: {
            files: ['front-end/javascripts/ecomisi/**/*.js'],
            tasks: ['jshint:client', 'copyto:ecomisi_dev'],
            options: {
                spawn: false,
                atBegin: true
            }
        },
        assets: {
            files: ['front-end/assets/**/*.*'],
            tasks: ['copyto:assets_dev'],
            options: {
                spawn: false,
                atBegin: true
            }
        },
        templates: {
            files: ['front-end/templates/**/*.dust'],
            tasks: ['copyto:templates_dev'],
            options: {
                spawn: false,
                atBegin: true
            }
        },

        vendor: {
            files: ['front-end/javascripts/**/*.js'],
            tasks: ['concat:vendor'],
            options: {
                spawn: false,
                atBegin: true
            }
        },

    };
};
