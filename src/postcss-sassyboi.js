import path from 'path'
import postcss from 'postcss'
import scssVariables from 'postcss-advanced-variables'
import calc from 'postcss-calc'
import nesting from 'postcss-nesting'
import mapGet from 'postcss-map-get'
import functions from 'postcss-functions'
import cssImports from 'postcss-import'
import contrast from 'postcss-contrast'
import {isLight, mod, baseliner} from './style-functions'

export default postcss.plugin('postcss-sassyboi', (rawopts) => {
  const variables = rawopts.configPath
    ? path.join(rawopts.configPath, 'sassyboi.config.js')
    : require(path.resolve(process.cwd(), 'sassyboi.config.js'))

  // initialize all plugins
  const initializedPlugins = [
    cssImports({
      from: rawopts.from || process.cwd(),
    }),
    scssVariables({variables}),
    mapGet(),
    calc({mediaQueries: true, selectors: true}),
    functions({
      functions: {isLight, mod, baseliner: baseliner(variables)},
    }),
    contrast(),
    nesting(),
  ]

  // process css with all plugins
  return (root, result) => {
    return initializedPlugins.reduce(
      (promise, plugin) => promise.then(() => plugin(result.root, result)),
      Promise.resolve()
    )
  }
})
