import React from 'react'
import cx from 'classnames'
import {useBackground} from '../util/BackgroundContext'
import Box from '../Box/Box'
import './text.css'

const Text = ({
  as = 'p',
  size = 'small',
  align = 'left',
  heading = false,
  baseline = true,
  block = false,
  weight = 'regular',
  tone = 'neutral',
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
      'u-text': !heading,
      'u-text-heading': heading,
      'u-text--baseline': baseline,
      'u-text--block': block,
      [`tone--${tone}`]: tone && !background,
      [`tone--${tone}-on-${background}`]: background,
      [`u-text--weight-${weight}`]: weight !== 'regular',
      [`u-text--${size}`]: !heading,
      [`u-text-heading--${size}`]: heading
    },
    `u-text--align-${align}`,
    className
  )

  return <Box className={classes} as={as} {...props} />
}

export default Text
