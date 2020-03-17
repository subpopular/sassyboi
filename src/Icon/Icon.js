import React from 'react'
import t from 'prop-types'
import classNames from 'classnames'
import * as types from '../types'
import {useStyles} from '../Provider'
import {useBackground} from '../util/BackgroundContext'
import Box from '../Box/Box'
import './icon.css'

const Icon = ({name, url, size = 'gutter', tone, className, ...props}) => {
  const styles = useStyles()
  const backgroundContext = useBackground()

  const background =
    backgroundContext && backgroundContext !== 'transparent'
      ? backgroundContext
      : null

  const a11y =
    props.title && props.title.length ? {role: 'img'} : {'aria-hidden': 'true'}

  const classes = classNames(
    styles['icon'],
    {
      [`color-${tone}`]: tone,
      [`color-${tone}-on-${background}`]: tone && background,
      inheritColor: !tone,
    },
    className
  )
    .split(' ')
    .map((c) => styles[c] || c)
    .join(' ')

  return (
    <Box as="svg" size={size} {...a11y} className={classes} {...props}>
      <use role="presentation" xlinkHref={url ? url : `#${name}`} />
    </Box>
  )
}

Icon.propTypes = {
  /**
   * SVG symbol ID from sprite
   */
  name: t.string,

  /**
   * SVG sprite url
   */
  url: t.string,

  /**
   * Sets the dimension (width/height) of the icon (passed to Box)
   */
  size: types.spacing,
}

export default Icon
