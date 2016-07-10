module.exports = function(grunt, opt){
    return {
        options: {
          curly: true,
          eqeqeq: true,
          eqnull: true,
          browser: true,
          globals: {
            jQuery: true,
            angular: true
          },
        },
        all: ['Gruntfile.js', '<%=config.dev_static%>/js/**/*.js']
    };
};