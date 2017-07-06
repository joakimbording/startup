/* this is the metalsmith config */
module.exports = {
    port: 43565,
    src: {
        content: './html/content',
        layout: './html/layouts',
        partials: './html/layouts/partials',
        assets: './assets',
        watch: {
            '${source}/**/*': '**/*',
            './html/layouts/**/*': '**/*',
            './assets/**/*': '**/*',
        },
    },
    dist: {
        root: 'public',
        assets: './assets',
        html: './public/',
    },
};
