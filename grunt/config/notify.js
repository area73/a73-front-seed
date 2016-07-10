'use strict';

module.exports = function notify(grunt) {
    grunt.loadNpmTasks('grunt-notify');

    return {
        notify_hooks: {
            options: {
                enabled: true,
                title: 'Worten ES',
                max_jshint_notifications: 5,
                duration: 1
            }
        }
    };
};
