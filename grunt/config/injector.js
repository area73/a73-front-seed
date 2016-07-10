module.exports = function(grunt, opt){
    return {
        options: {},
        local_dependencies: {
            files: {
                'index.html': ['**/*.js', '**/*.css'],
            }
        },
        build: {
            files: {
                'index.html': ['<%config.build-path%>/**/*.js', '**/*.css'],
            }
        }
        
    };
};