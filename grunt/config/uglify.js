'use strict';

module.exports = function (grunt,opt) {
   return{
        build: {
            files: [{
                expand: true,
                cwd: '.build/_/assets/js',
                src: ['**/*.js'],
                dest: '.build/_/assets/js'
            }]
        }
    };
};
 