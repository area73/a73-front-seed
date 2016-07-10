'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-concurrent');

    return {
        devprd: {
            tasks: [
                'nodemon:devprd',
                'watch:server',
                'watch:client',
                'watch:assets',
                'watch:templates',
                'watch:less',
                'watch:compass',
                'watch:vendor'],
            options: {
                limit: 8,
                logConcurrentOutput: true
            }
        }
    };
};
