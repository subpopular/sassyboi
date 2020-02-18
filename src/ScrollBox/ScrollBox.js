import React from 'react'
import cx from 'classnames'
import Box from '../Box/Box'
import './scrollbox.css'

const ScrollBox = ({className, children, ...props}) => {
  const classes = cx('u-scrollbox', className)

  return (
    <Box className={classes} {...props}>
      <Box className='u-scrollbox__wrapper'>
        <Box className='u-scrollbox__container'>{children}</Box>
      </Box>
    </Box>
  )
}

export default ScrollBox
