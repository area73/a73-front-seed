'use strict';

var tinypng = {
    options: {
        apiKey: "5jKbZ1I0Yi9hzFDoGoPRetafAHok6kFJ",
        checkSigs: true,
        sigFile: '../dest/file_sigs.json',
        summarize: true,
        showProgress: true,
        stopOnImageError: true
    },
    your_target: {
        src: '*.{png,jpg}',
        cwd: '<%= path.public %>/<%= path.images %>',
        dest: '<%= path.public %>/<%= path.images %>',
        expand: true
    },
};

module.exports = tinypng;
