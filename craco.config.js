// webpack单独配置文件，利用craco实现配置合并
// 注意：package.json中一定要修改启动命令"react-scripts start" 改成=> "craco start"
const path = require('path')
const CracoLessPlugin = require('craco-less')

module.exports = {
  webpack: {
    alias: {
      // 设置别名需要绝对路径，通过path拼接当前路径dirname和src
      '@': path.resolve(__dirname, 'src'),
      'components': path.resolve(__dirname, 'src/components')
    }
  },
  // less插件 参考：ant Design官网(官方推荐使用craco对webpack配置)
  plugins: [
    {
      plugin: CracoLessPlugin
    },
  ]
}