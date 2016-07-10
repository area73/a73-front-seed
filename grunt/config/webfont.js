module.exports = function (grunt, opt) {
    return {
        icons: {
            src: '<%=config.dev_static%>/img/svg/*.svg',
            dest: '<%=config.svg_iconFont%>',
            // destCss : (Directory for resulting CSS files (if different than font directory).)
            options: {
                font: 'icon-tol',
                fontFilename: 'tol-icon-font',
                hashes: false , // Append font file names with unique string to flush browser cache when you update your icons. --> esto loo estamos haciendo ya con compass
                styles : ' ',
                types: 'eot,woff,ttf,svg',
                // order: ( Default: 'eot,woff,ttf,svg') Order of @font-face’s src values in CSS file. (Only file types defined in types option will be generated.
                // syntax: (Default: bem) Icon classes syntax. bem for double class names:

                template: '<%=config.svg_iconFont%>/template/demo.css',
                 templateOptions: {
                    baseClass: 'icon-tol',
                    classPrefix: '',
                    mixinPrefix: ''
                 },
                stylesheet: 'scss',
                // relativeFontPath: Custom font path. Will be used instead of destCss in CSS file.
                htmlDemo: true,
                htmlDemoTemplate: '<%=config.svg_iconFont%>/template/demo.html',
                // ligatures: DEFAULT false --> si se quiere utilizar hay que usar fontforge como engine
                engine:'fontforge', // 'fontforge' es el de por defecto mejor resultado y posibilidad e utilizar ligatures
                optimize: false,
                normalize: true,
                fontHeight:  128 // 512 (por defecto)
                // descent:  64 (por defecto)
            }
        }

    };
};









