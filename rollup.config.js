import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import scssVariables from 'postcss-advanced-variables'
import calc from 'postcss-calc'
import nesting from 'postcss-nesting'
import mapGet from 'postcss-map-get'
import functions from 'postcss-functions'
import cssImports from 'postcss-import'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'
import {isLight} from './src/style-functions'

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    postcss({
      modules: false,
      syntax: 'postcss-scss',
      plugins: [
        cssImports(),

        scssVariables({
          variables: require('./vars')
        }),

        mapGet(),
        calc({mediaQueries: true}),

        functions({
          functions: {
            getRed: () => {
              return 'red'
            },
            isLight: (color) => {
              console.log(color)
              return isLight(color)
            },
            mod: (a, b) => {
              return a % b
            }
          }
        }),

        nesting()
      ],
      extract: true
    }),
    url(),
    svgr(),
    babel({
      exclude: 'node_modules/**',
      plugins: [ 'external-helpers' ]
    }),
    resolve(),
    commonjs()
  ]
}
