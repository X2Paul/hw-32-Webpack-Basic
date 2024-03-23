const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './index.js',
    stat: './statistics.js'
  },

  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
  },

  optimization:{
    splitChunks: {
      chunks: 'all'
    }
  },

  plugins: [new HTMLWebpackPlugin({ template: './index.html' }), new CleanWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif|webp)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name].[contenthash][ext]'
        }
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name].[contenthash][ext]'
        },
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      },
      {
        test: /\.csv$/,
        use: ['csv-loader']
      }
    ]
  }
}

