import React from 'react'
import t from 'prop-types'
import classNames from 'classnames'
import {useBackground} from '../util/BackgroundContext'
import Box from '../Box/Box'
import './icon.css'

const Icon = ({name, size = 'gutter', tone, className, ...props}) => {
  const backgroundContext = useBackground()

  const background =
    backgroundContext && backgroundContext !== 'transparent'
      ? backgroundContext
      : null

  const a11y =
    props.title && props.title.length ? {role: 'img'} : {'aria-hidden': 'true'}

  const classes = classNames(
    'u-icon',
    {
      [`u-icon--${size}`]: size,
      [`tone--${tone}`]: tone,
      [`tone--${tone}`]: tone && !background,
      [`tone--${tone}-on-${background}`]: background,
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
