import postcss from 'postcss'
import scssVariables from 'postcss-advanced-variables'
import calc from 'postcss-calc'
import nesting from 'postcss-nesting'
import mapGet from 'postcss-map-get'
import functions from 'postcss-functions'
import cssImports from 'postcss-import'
import {isLight, mod} from './style-functions'

const plugins = [
  cssImports,
  scssVariables,
  mapGet,
  calc,
  functions,
  nesting
]

export default postcss.plugin('postcss-sassyboi', rawopts => {
  const opts = Object.assign({
    mediaQueries: true,
    functions: { isLight, mod }
  }, rawopts)

  // initialize all plugins
  const initializedPlugins = plugins.map(
    plugin => {
      return plugin(opts)
    }
  )

  // process css with all plugins
  return (root, result) => {
    return initializedPlugins.reduce(
      (promise, plugin) => promise.then(
        () => plugin(result.root, result)
      ),
      Promise.resolve()
    )
  }
})
