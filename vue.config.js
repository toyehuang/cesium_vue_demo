const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([{
        from: 'node_modules/cesium/Build/Cesium/Workers',
        to: 'cesium/Workers'
      }]),
      new CopyWebpackPlugin([{
        from: 'node_modules/cesium/Build/Cesium/Assets',
        to: 'cesium/Assets'
      }]),
      new CopyWebpackPlugin([{
        from: 'node_modules/cesium/Build/Cesium/Widgets',
        to: 'cesium/Widgets'
      }]),
      new CopyWebpackPlugin([{
        from: 'node_modules/cesium/Build/Cesium/ThirdParty',
        to: 'cesium/ThirdParty'
      }]),

      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify('./cesium')
      })
    ],
    module: {
      unknownContextCritical: false,
      unknownContextRegExp: /\/cesium\/cesium\/Source\/Core\/buildModuleUrl\.js/,
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: '@open-wc/webpack-import-meta-loader'
          }
        }]
    }
  }
}
