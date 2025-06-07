// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // This can be any endpoint prefix
    createProxyMiddleware({
      target: 'https://api.jdoodle.com', // JDoodle's API
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/v1/execute', // Rewrite the URL path
      },
    })
  );
};
