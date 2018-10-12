const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// import path from 'path'
module.exports = {
  entry:  path.resolve(__dirname, './app/main.js'),//已多次提及的唯一入口文件
  output: {
    path: path.resolve(__dirname, './build'),//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
            {
                loader: "style-loader"
            }, {
                loader: "css-loader",
                options: {
                  modules: true, // 指定启用css modules
                  localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                }
            }
        ]
      }
    ]
  },
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase:  path.join(__dirname, './public'),//本地服务器所加载的页面所在的目录
    port: 9000,
    inline: true, //实时刷新
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000  // 可以将监听时间设置减少频繁刷新
    }
  },
  plugins: [
    // new webpack.BannerPlugin('版权所有，翻版必究'),
    new HtmlWebpackPlugin({
        template: __dirname + "/public/index.html"//new 一个这个插件的实例，并传入相关的参数
    })
  ]
}