import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import cssImports from 'postcss-import'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import pkg from './package.json'

const isProduction = process.env.NODE_ENV === 'production'
const isExampleBuild = process.env.EXAMPLE_BUILD === 'true'

const mainConfig = {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    postcss({
      modules: false,
      syntax: 'postcss-scss',
      plugins: [cssImports()],
      extract: true,
    }),
    url(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['react-docgen'],
    }),
    resolve(),
    commonjs(),
  ],
}

const pluginConfig = {
  input: 'src/postcss-sassyboi.js',
  output: {
    file: 'dist/postcss-sassyboi.js',
    format: 'cjs',
    sourcemap: false,
  },
  plugins: [],
}

const configs = [mainConfig]

if (isProduction) {
  configs.push(pluginConfig)
}

export default configs
