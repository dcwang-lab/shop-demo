const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      // 路径别名
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'network': '@/network',
        'utils': '@/utils',
        'views': '@/views'
      }
    }
  }
})
