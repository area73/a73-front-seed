module.exports = function(grunt, opt){
    return {
        server: {
            options: {
                port: 9001,
                // base: 'www-root'
                index: 'index.html',
                // keepalive: true
            }
        }
    };
};


