module.exports = function(grunt, opt){
    return {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                '<%= path.public %>/<%= path.styles %>/main.min.css': '<%= path.public %>/<%= path.styles %>/main.css'
            }
        }
    };
};

