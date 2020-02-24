import React from 'react'
import t from 'prop-types'
import classNames from 'classnames'
import './icon.css'

const Icon = ({
  name,
  prefix = 'sprite_pw',
  size,
  tone,
  className,
  ...props
}) => {
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
    <svg {...a11y} className={classes} {...props}>
      <use role="presentation" xlinkHref={`#${prefix}-${name}`} />
    </svg>
  )
}

Icon.propTypes = {
  /**
   * Name of the icon to render
   */
  name: t.string.isRequired,

  /**
   * A prefix for symbols in the sprite sheet
   */
  prefix: t.string,

  /**
   * Sets the dimension (width/height) of the icon
   */
  size: t.string,
}

export default Icon
