const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')
const postcssSassyboi = require('./dist/postcss-sassyboi')

module.exports = {
  components: './playroom-components',
  outputPath: './playroom',

  // Optional:
  title: 'Sassyboi',
  widths: [375, 768, 1024],
  port: 9000,
  openBrowser: false,
  snippets: './playroom-snippets.js',
  exampleCode: `
    <Stack padding={["large", "xlarge"]} align="center">
      <Text heading size="large">
        Don't sass me!
      </Text>
      <Inline space="small">
        <Button>Increase sass</Button>
        <Button weight="weak">Refrain</Button>
      </Inline>
    </Stack>
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
                publicPath: '',
              },
            },
          ],
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
                    variables: require('./sassyboi.config.js'),
                  }),
                ],
              },
            },
          ],
        },
      ],
    },
    plugins: [new SpriteLoaderPlugin()],
  }),
}
