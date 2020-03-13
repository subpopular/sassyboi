import React from 'react'
import cx from 'classnames'
import Box from '../Box/Box'
import './scrollbox.css'

const ScrollBox = ({className, scrollX = false, scrollY = false, children, ...props}) => {
  const classes = cx('u-scrollbox', className)

  return (
    <Box height="full" width="full" overflow="hidden" className={classes} {...props}>
      <Box height="full" overflowX={scrollX ? 'scroll' : undefined} overflowY={scrollY ? 'scroll' : undefined} className='u-scrollbox__wrapper'>
        <Box height="full">{children}</Box>
      </Box>
    </Box>
  )
}

export default ScrollBox
