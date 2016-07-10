'use strict';

var responsive_images = {
    options: {
        engine: 'gm',
        upscale: false,
        createNoScaledImage: true,
        separator: '-',
        sample: true,
        sizes: [
            {
                width: 320
            },
            {
                width: 640
            },
            {
                rename: false,
                width: 950
            }
        ]
    },
    all: {
        files: [
            {
                expand: true,
                cwd: '<%= path.public %>/<%= path.images %>/content',
                src: [
                    '*.{gif,jpeg,jpg,png}'
                ],
                dest: '<%= path.public %>/<%= path.images %>'
            }
        ]
    }
}

module.exports = responsive_images;
