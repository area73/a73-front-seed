'use strict';

var svgmin = {
    dist: {
        files: {
            '<%= path.public %>/<%= path.svgs %>/sprite.svg': '<%= path.public %>/<%= path.svgs %>/sprite.svg'
        }
    }
};

module.exports = svgmin;
