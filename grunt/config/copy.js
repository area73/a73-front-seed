module.exports = function(grunt, opt){
    return {
  		dist: {
          files: [{
            expand: true,
            cwd: '<%=config.dev%>',
            dest: '<%=config.dist%>',
            src: ['<%=config.static%>/**/*','favicon.ico']
          },
          {
            expand: true,
            cwd: '.',
            dest: '<%=config.dist%>',
            src: ['bower_components/**/*']
          }
          ]
        },
        build: {
            files: [{
                expand: true,
                cwd: '<%=config.dev%>',
                dest: '<%=config.build%>',
                src: ['<%=config.static%>/**/*','favicon.ico']
            },
                {
                    expand: true,
                    cwd: '.',
                    dest: '<%=config.dist%>',
                    src: ['bower_components/**/*']
                }
            ]
        }
        
      };
};