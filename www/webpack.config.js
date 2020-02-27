const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const sassyboi = require('sassyboi/dist/postcss-sassyboi')

const dist = path.resolve(__dirname, 'dist')

module.exports = (env) => {
  const prod =
    (env && env.mode === 'production') || process.env.NODE_ENV === 'production'
      ? true
      : undefined

  let plugins = [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ]

  if (prod) {
    plugins = [
      new CopyPlugin([{from: '_redirects'}]),
      new MiniCssExtractPlugin(),
      ...plugins,
    ]
  }

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
          test: /\.css$/,
          use: [
            prod ? MiniCssExtractPlugin.loader : 'style-loader',
            {loader: 'css-loader', options: {importLoaders: 1}},
            {
              loader: 'postcss-loader',
              options: {
                syntax: 'postcss-scss',
                plugins: [
                  sassyboi({
                    from: path.resolve(__dirname, '../'),
                  }),
                ],
              },
            },
          ],
        },
      ],
    },
    plugins,
  }
}
