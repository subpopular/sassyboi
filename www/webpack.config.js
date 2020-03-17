const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')
const TerserPlugin = require('terser-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const cssnano = require('cssnano')
const sassyboi = require('sassyboi/dist/postcss-sassyboi')

const dist = path.resolve(__dirname, 'dist')

module.exports = (env, argv) => {
  const prod =
    (env && env.mode === 'production') ||
    process.env.NODE_ENV === 'production' ||
    (argv && argv.mode === 'production')
      ? true
      : undefined

  let plugins = [
    new HtmlWebPackPlugin({
      template: './src/index.ejs',
      filename: './index.html',
    }),
    new SpriteLoaderPlugin({plainSprite: true}),
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
          // include: [/node_modules\/sassyboi/],
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
          test: /\.svg$/,
          use: [
            {
              loader: 'svg-sprite-loader',
            },
            {
              loader: 'svgo-loader',
              options: {
                plugins: [{inlineStyles: true}],
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            prod ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: {
                  mode: 'local',
                  localIdentName: '[hash:base64:6]',
                  context: path.resolve(__dirname, 'src'),
                  hashPrefix: 'sb_',
                },
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                syntax: 'postcss-scss',
                plugins: [
                  sassyboi({
                    from: path.resolve(__dirname, '../'),
                  }),
                  cssnano({
                    preset: 'default',
                  }),
                ],
              },
            },
          ],
        },
      ],
    },
    ...(prod && {
      optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
      },
    }),
    plugins,
  }
}
