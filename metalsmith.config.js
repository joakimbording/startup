/* this is the metalsmith config */
module.exports = {
    port: 43565,
    src: {
        content: './html/content',
        layout: './html/layouts',
        partials: './html/layouts/partials',
        assets: './images',
        watch: {
            '${source}/**/*': '**/*',
            './html/layouts/**/*': '**/*',
        },
    },
    dist: {
        root: 'public',
        assets: './images',
        html: './public/',

    },
};
