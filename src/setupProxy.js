const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/edcr",
    createProxyMiddleware({
      target: "https://ppa-demo.ddns.net",
      changeOrigin: true,
      secure: false,
    })
  );
};
