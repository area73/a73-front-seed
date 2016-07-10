'use strict';

var svgstore = {
    options: {
        prefix: 'icon-',
        cleanup: false,
        svg: {
            style: 'display: none'
        }
    },
    default: {
        files: {
            '<%= path.public %>/<%= path.svgs %>/sprite.svg': '<%= path.assets %>/<%= path.svgs %>/*.svg'
        }
    }
};

module.exports = svgstore;
