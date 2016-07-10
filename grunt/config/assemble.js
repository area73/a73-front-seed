module.exports = function(grunt, opt){
    return {
		options: {
			layoutdir: '<%=config.dev_hbs%>/layouts',
			layout: 'base-layout.hbs',
			flatten: true,
			data: '<%=config.dev_hbs%>/data/*.json',
			partials: ['<%=config.dev_hbs%>/general/*.hbs', '<%=config.dev_hbs%>/modules/**/*.hbs'],
			helpers: ['<%= config.dev_hbs %>/helpers/*'],
            plugins: ['grunt-assemble-permalinks']
		},
		reference: {
            files: [{
                expand: true,
                cwd: '<%=config.dev_hbs%>/pages/reference/',
                src: ['*.hbs'],
                dest: '<%=config.dist%>/',
                ext: '.html'
            }]
        },
		modules: {
			options: {
                layout: 'module-layout.hbs'
            },
            files: [{
				expand: true,
				cwd: '<%=config.dev_hbs%>/modules/',
				src: '*.hbs',
				dest: '<%=config.dist%>/modules/',
				ext: '.html'
			}]           
		},
		pages: {
            options: {
                layout: 'base-layout.hbs'
            },
			files: [{
				expand: true,
				cwd: '<%=config.dev_hbs%>/pages/',
				src: '*.hbs',
				dest: '<%=config.dist%>/pages/',
				ext: '.html'
			}]
		}
    };
};