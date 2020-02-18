import React from 'react'
import cx from 'classnames'
import Box from '../Box/Box'
import './content-block.css'

const ContentBlock = ({
  paddingX = 'gutter',
  width = 'large',
  children,
  ...props
}) => {
  const classes = cx('u-content-block', `u-content-block--${width}`)

  return (
    <Box className={classes} paddingX={paddingX} {...props}>
      {children}
    </Box>
  )
}

export default ContentBlock
