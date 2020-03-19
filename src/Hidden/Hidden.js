import React from 'react'
import t from 'prop-types'
import cx from 'classnames'
import * as types from '../types'
import Box from '../Box/Box'
import {useTheme} from '../Provider'

const Hidden = ({showAt, inline = false, className, children, ...props}) => {
  let displayPoints = ['none']
  const theme = useTheme()
  const breakpoints = theme.breakpoints
  if (showAt.length > 0) {
    Object.keys(breakpoints).forEach((breakpoint, index) => {
      displayPoints[index] = 'none'
      showAt.forEach((visiblePoint) => {
        displayPoints[visiblePoint] = inline ? 'inline' : 'block'
      })
    })
  }
  return (
    <Box className={className} display={displayPoints} {...props}>
      {children}
    </Box>
  )
}

Hidden.displayName = 'Hidden'

Hidden.propTypes = {
  /**
   * A list that declares at which breakpoints the content should be visible at
   */
  showAt: t.array,
  /**
   * A boolean variable that determines if visible content should be rendered inline or not
   */
  inline: t.bool,
}
export default Hidden
