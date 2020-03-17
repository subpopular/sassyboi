import React from 'react'
import t from 'prop-types'
import cx from 'classnames'
import * as types from '../types'
import {useStyles} from '../Provider'
import {useBackground} from '../util/BackgroundContext'
import Box from '../Box/Box'
import './text.css'

const Text = ({
  size = 'standard',
  tone = 'neutral',
  weight = 'regular',
  align = 'left',
  heading = false,
  baseline = true,
  block = false,
  normalize = false,
  className,
  ...props
}) => {
  const styles = useStyles()
  const backgroundContext = useBackground()

  const background =
    backgroundContext && backgroundContext !== 'transparent'
      ? backgroundContext
      : null

  const classes = cx(
    {
      'u-text': !heading,
      'u-text-heading': heading,
      'u-text--baseline': baseline,
      'u-text--block': block,
      [`color-${tone}-on-${background}`]: background,
      [`color-${tone}`]: tone,
      [`u-text--weight-${weight}`]: weight !== 'regular',
      [`u-text--${size}`]: !heading,
      [`u-text-heading--${size}`]: heading,
      normalizeLineHeight: normalize,
    },
    `u-text--align-${align}`,
    className
  )
    .split(' ')
    .map((c) => styles[c] || c)
    .join(' ')

  return <Box className={classes} as="p" {...props} />
}

Text.propTypes = {
  /**
   * Set size and line-height
   */
  size: t.oneOf(types.tokens.textSizes),
  /**
   * Set the font weight
   */
  weight: t.oneOf(['regular', 'medium', 'strong']),
  /**
   * Set the text color
   */
  tone: t.oneOf(types.tokens.foreground),
  /**
   * Set text alignment
   */
  align: t.oneOf(['left', 'center', 'right']),
  /**
   * Use heading font styles
   */
  heading: t.bool,
  /**
   * Strips space from top and bottom of text for precise alignment.
   */
  baseline: t.bool,
  /**
   * Applies block level styling
   */
  block: t.bool,
}

export default Text
