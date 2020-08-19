const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // 基本路径
  publicPath: './',
  outputDir: resolve('docs'),
  // webpack配置
  /* 生产环境是否生成 sourceMap 文件，false将提高构建速度 */
  productionSourceMap: false,
  /* 代码保存时是否进行eslint检测 */
  lintOnSave: false,
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: config => {
    config.entry.app = ["babel-polyfill", resolve('src/main.js')],
      config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('styles', resolve('src/assets/styles'))
      .set('components', resolve('src/components')),
      config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Chelsea Huang'
        return args
      })
  }
}
