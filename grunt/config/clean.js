module.exports = function(grunt, opt){
    return {
        temp:'.tmp',
        pages: '<%=config.dev%>/templates/*.html',
        js: '<%=config.dev%>/static/*.js',
        svgIconFont: '<%=config.svg_iconFont%>/*.*'
    };
};