const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = () => ({
  // output: {
  //   filename: "bundle.js"
  // },
  optimization: {
    minimizer: [
      new UglifyJsPlugin(),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "stylus-loader"]
        // use: ["style-loader", "css-loader", "stylus-loader"]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      { test: /\.(gif|png|jpg|woff|svg|ttf|eot)$/, 
        use: [{
          loader:'url-loader',
          options: {
              limit:500,
              outputPath: 'img/',// 指定打包后的图片位置
              // name:'[name].[ext]?[hash]',//name:'[path][name].[ext]
              // name:'[path][name].[ext]'
              // publicPath:output,
              regExp: /\/([A-Za-z0-9]+)\/[A-Za-z\_0-9]+\.(png|jpg)$/,
              // regExp: /(\/[a-z0-9]+)*\/.*\.(png|jpg)$/
              name: '[1]/[name].[ext]'
          } 
        }]
      }
    ]
  },

  optimization: {
    splitChunks: {
        cacheGroups: {
            commons: {
                name: "commons",
                chunks: "initial",
                minChunks: 2
            }
        }
    }
  },

  plugins: [
    new MiniCssExtractPlugin()
  ]
});
