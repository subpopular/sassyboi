import React from 'react'
import cx from 'classnames'
import Box from '../Box/Box'
import './divider.css'

const Divider = ({darker = false, className, ...props}) => {
  return (
    <Box
      aria-hidden
      className={cx(`u-divider`, {'u-divider--dark': darker}, className)}
      {...props}
    />
  )
}

export default Divider
