import React, {useContext} from 'react'
import defaultConfig from './config'

const ctx = React.createContext()
const Provider = ctx.Provider

export const ThemeProvider = ({theme, styles, ...props}) => (
  <Provider value={{theme: {...defaultConfig, ...theme}, styles}} {...props} />
)

export const useTheme = () => {
  const c = useContext(ctx)
  return c.theme
}

export const useStyles = () => {
  const c = useContext(ctx)
  return c.styles
}
