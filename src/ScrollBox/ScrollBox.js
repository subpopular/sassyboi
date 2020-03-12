import React from 'react'
import cx from 'classnames'
import Box from '../Box/Box'
import './scrollbox.css'

const ScrollBox = ({className, scrollX = false, scrollY = false, children, ...props}) => {
  const classes = cx('u-scrollbox', className)

  return (
    <Box className={classes} {...props}>
      <Box overflowX={scrollX ? 'scroll' : undefined} overflowY={scrollY ? 'scroll' : undefined} className='u-scrollbox__wrapper'>
        <Box className='u-scrollbox__container'>{children}</Box>
      </Box>
    </Box>
  )
}

export default ScrollBox
