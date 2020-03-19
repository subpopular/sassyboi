import 'focus-visible'
import React, {useEffect} from 'react'
import {SassyboiProvider, defaultTheme} from '../dist'

export default ({children}) => {
  return <SassyboiProvider value={defaultTheme}>{children}</SassyboiProvider>
}
