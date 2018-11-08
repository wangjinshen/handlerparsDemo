require.config({
    baseUrl: "./js",
    paths: {
        '$': "./lib/jquery.min",
        'handlebar': "./lib/handlebars",
        'render':"./renden",
        'hd':'./lib/hdbexpress'

    },
    shim: {
        '$': {
            deps: [],
            exports: '$'
        },
        'handlebar': {
            deps: ['$'],
            exports: 'handlebar'
        }
    }


});