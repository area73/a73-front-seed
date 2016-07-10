module.exports = function(grunt, opt){
    return {
      app_properties: {
        options: {
          patterns: [
            { json: grunt.file.readJSON('package.json')},
            { match: 'build-date', replacement: '<%=config.build_date%>'}
          ]
        },
        files: [{
          expand: true,
          flatten: false,
          src: ['<%=config.dist%>/index.html']        
        }]
      }     
    };
};