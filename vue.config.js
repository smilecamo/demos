// webpack 配置项
const path = require('path')
// 定义一个绝对路径方法
const resolve = dir => path.join(__dirname, dir)
// 区分开发与生产使用不同路径
const BASE_URL = process.env.NODE_ENV === 'procution' ? '/admin/' : '/'
module.exports = {
  // eslint 保存时是否检查
  lintOnSave: false,
  // 项目路径
  baseUrl: BASE_URL,
  // 颗粒化配置webpack
  chainWebpack: config => {
    // 配置别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
      .set('_v', resolve('src/views'))
  },
  // 打包时不生成map文件
  productionSourceMap: false
  // 跨域
  // devServer: {
  //   proxy: 'http://localhost:4000'
  // }
}
