module.exports = function(grunt, opt){
    return {
        pages: {
            path: 'http://localhost:<%= express.local.options.port %>/templates'
        }
    };
};