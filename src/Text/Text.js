import React from 'react'
import t from 'prop-types'
import cx from 'classnames'
import * as types from '../types'
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
  inline = false,
  normalize = false,
  block,
  className,
  ...props
}) => {
  const backgroundContext = useBackground()

  const background =
    backgroundContext && backgroundContext !== 'transparent'
      ? backgroundContext
      : null

  const classes = cx(
    {
      text: !heading,
      heading: heading,
      baseline: baseline,
      [`color-${tone}-on-${background}`]: background,
      [`color-${tone}`]: tone,
      [`weight-${weight}`]: weight !== 'regular',
      [`text-${size}`]: !heading,
      [`heading-${size}`]: heading,
      normalizeLineHeight: normalize,
    },
    `textAlign-${align}`,
    className
  )
  return (
    <Box
      className={classes}
      as="p"
      display={inline ? 'inline' : 'block'}
      {...props}
    />
  )
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
   * Applies inline level styling (block by default regardless of element type)
   */
  inline: t.bool,
  /**
   * Deprecated prop! Block is by default, use `inline` as needed.
   */
  block: t.bool,
}

export default Text
