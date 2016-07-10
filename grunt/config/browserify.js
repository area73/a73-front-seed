module.exports = function(grunt, opt){
    return {
        dist: {
            options: {
                transform: [
                    [
                        'babelify',
                        {
                            sourceMap: true,
                            presets: ['es2015']
                        }
                    ]
                ]
            },
            files: {
                '<%= path.public %>/<%= path.scripts %>/main.js': '<%= path.assets %>/<%= path.scripts %>/main.js'
            }
        }
    };
};

