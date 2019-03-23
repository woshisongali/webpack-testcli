const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

// const DropConsoleWebpackPlugin = require('drop-console-webpack-plugin')

module.exports = () => ({
  // output: {
  //   filename: "bundle.js"
  // },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: true,
            drop_console: true
          }
        },
        sourceMap: true,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ],

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
  
  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  },

  plugins: [
    //配置环境
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new MiniCssExtractPlugin()
    // new BundleAnalyzerPlugin({ analyzerPort: 8919 }),
    
  ]
});