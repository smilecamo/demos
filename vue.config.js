const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  /**
   * es-lint配置
   * 通过 eslint-loader 在每次保存时执行校验的选项是默认开启的，
   * 你也可以通过 vue.config.js 中的 lintOnSave 选项将其关闭。
   */
  lintOnSave: false,
  /**
   * 别名配置
   */
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_a', resolve('src/api'))
      .set('assets', resolve('src/assets'))
      .set('_v', resolve('src/view'))
      .set('layout', resolve('src/layout'))
      .set('base', resolve('src/base'))
      .set('static', resolve('src/static'));
  },
  /**
   * baseUrl配置
   */
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '/',
  /**
   * 代理
   * 如果你的前端应用和后端 API 服务器没有运行在同一个主机上，
   * 你需要在开发环境下将 API 请求代理到 API 服务器。
   * 这个问题可以通过 vue.config.js 中的 devServer.proxy选项来配置
   */
  devServer: {
    proxy: 'http://localhost:4000',
  },
};
