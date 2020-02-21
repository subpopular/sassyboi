import React from 'react'
import t from 'prop-types'
import cx from 'classnames'
import Box from '../Box/Box'
import './content-block.css'

const ContentBlock = ({width = 'large', ...props}) => {
  const classes = cx('u-content-block', `u-content-block--${width}`)

  return <Box className={classes} paddingX="gutter" {...props} />
}

ContentBlock.propTypes = {
  /**
   * Sets the maximum width of the element
   */
  width: t.oneOf(['medium', 'large', 'max']),
}

export default ContentBlock
