module.exports = function(grunt){
    // variables globales que estarán disponibles en todas las tareas y módulos
    var config = {
        dev: 'dev',
        static: 'tol/static',
        dist: 'dist',
        build_date: grunt.template.today('yyyymmddHHMM'),
        version:  grunt.file.readJSON('package.json').version
    };

    var path = require('path');

    require('load-grunt-config')(grunt, {

        configPath: path.join(process.cwd(), 'grunt/config/'),
        jitGrunt: {
            customTasksDir: 'grunt/tasks/'
        },
        data: {
            config: config
        }
    });
};
