import React from 'react'
import t from 'prop-types'
import classNames from 'classnames'
import Box from '../Box/Box'
import './icon.css'

const Icon = ({name, size = 'gutter', tone, className, ...props}) => {
  const a11y =
    props.title && props.title.length ? {role: 'img'} : {'aria-hidden': 'true'}
  const sizeClass = `u-icon--${size}`

  const classes = classNames(
    'u-icon',
    {
      [sizeClass]: !!size,
      [`tone--${tone}`]: tone,
    },
    className
  )

  return (
    <Box as="svg" size={size} {...a11y} className={classes} {...props}>
      <use role="presentation" xlinkHref={`#${name}`} />
    </Box>
  )
}

Icon.propTypes = {
  /**
   * SVG symbol ID from sprite
   */
  name: t.string.isRequired,

  /**
   * Sets the dimension (width/height) of the icon (passed to Box)
   */
  size: t.string,
}

export default Icon
