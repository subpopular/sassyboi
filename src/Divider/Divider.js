import React from 'react'
import cx from 'classnames'
import {useStyles} from '../Provider'
import Box from '../Box/Box'
import './divider.css'

const Divider = ({tone = 'subtle', className, ...props}) => {
  const styles = useStyles()
  return (
    <Box
      aria-hidden
      className={cx(`${tone}`, className)
        .split(' ')
        .map((c) => styles[c] || c)
        .join(' ')}
      {...props}
    />
  )
}

export default Divider
