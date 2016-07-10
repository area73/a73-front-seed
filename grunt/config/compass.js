module.exports = function(grunt, opt){
    return {
        dist: {
            options: {
                config: 'config.rb',
                httpPath: '/',
                sassDir: '<%=config.dev%>/mvf/scss',
                cssDir: '<%=config.dev_static%>/css',
                javascriptsDir: '<%=config.dev_static%>/js',
                imagesDir: '<%=config.dev_static%>/img',
                fontsDir: '<%=config.dev_static%>/fonts',
                environment: 'development',
                noLineComments: true,
                sourcemap:true,
                outputStyle: 'compact',
                watch:false,
                relativeAssets: true
            }
        }
    };
};