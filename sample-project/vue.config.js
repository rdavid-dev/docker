module.exports = {
    devServer: {
        // lintOnSave: false,
        public: 'localhost',
        disableHostCheck: true,
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