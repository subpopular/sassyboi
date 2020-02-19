const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')
const postcssSassyboi = require('./dist/postcss-sassyboi')

module.exports = {
  components: './playroom-components',
  outputPath: './playroom',

  // Optional:
  title: 'Sassyboi',
  widths: [320, 375, 768, 1024],
  port: 9000,
  openBrowser: true,
  exampleCode: `
    <Button>
      Hello World!
    </Button>
  `,
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.svg$/i,
          include: /sprite\.svg/,
          use: [
            {
              loader: 'svg-sprite-loader',
              options: {
                publicPath: ''
              }
            }
          ]
        },
        {
          test: /\.css?$/,
          exclude: /node_modules/,
          use: [
            'style-loader',
            {loader: 'css-loader', options: {importLoaders: 1}},
            {
              loader: 'postcss-loader',
              options: {
                syntax: 'postcss-scss',
                plugins: [
                  postcssSassyboi({
                    variables: require('./vars.js')
                  })
                ]
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new SpriteLoaderPlugin()
    ]
  })
}
