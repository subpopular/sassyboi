const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const dist = path.resolve(__dirname, 'dist')

module.exports = (env, argv) => {
  return {
    entry: './src/index.js',
    output: {
      path: dist,
      filename: 'main.js',
      publicPath: '/',
    },
    devServer: {
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.mdx$/,
          use: ['babel-loader', '@mdx-js/loader'],
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
            },
          ],
        },
        {
          test: /\.css?$/,
          use: [
            argv.mode === 'production'
              ? MiniCssExtractPlugin.loader
              : 'style-loader',
            {loader: 'css-loader', options: {importLoaders: 1}},
          ],
        },
        {
          test: /\.svg$/i,
          include: /sprite\.svg/,
          use: [
            {
              loader: 'svg-sprite-loader',
              options: {
                publicPath: '',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: './index.html',
      }),
      new CopyPlugin([{from: '_redirects'}]),
    ],
  }
}
