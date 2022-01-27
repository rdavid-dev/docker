module.exports = {
    devServer: {
        // hot: false,
        // liveReload: false,
        public: 'localhost',
        disableHostCheck: true,
        //proxy: 'http://localhost:5010/api/',
        proxy: {
            '/v1': {
                target: 'http://localhost:5010/api',
                changeOrigin: true,
                pathRewrite: { "^/v1": "/" }
            },
            '/random': {
                target: 'https://www.random.org',
                secure: false,
                changeOrigin: true,
                pathRewrite: { "^/random": "/" }
            },
    
        }
    }
}