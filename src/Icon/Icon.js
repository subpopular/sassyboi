import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './icon.css'

class Icon extends React.PureComponent {
  render() {
    const {prefix, name, title, size, className, style} = this.props

    const a11y = title.length ? {role: 'img'} : {'aria-hidden': 'true'}
    const sizeClass = `u-icon--${size}`

    const classes = classNames(
      'u-icon',
      {
        [sizeClass]: !!size
      },
      className
    )

    return (
      <svg
        {...a11y}
        className={classes}
        title={title}
        style={style}
      >
        <use role='presentation' xlinkHref={`#${prefix}-${name}`} />
      </svg>
    )
  }
}

Icon.defaultProps = {
  name: '',
  title: '',
  prefix: 'pw',
  style: {}
}

Icon.propTypes = {
  /**
     * Identifier for the desired icon. Usually the filename, sans its prefix.
     * For example, if the target icon is `pw-chevron-up.svg`, the name
     * is `chevron-up`.
     */
  name: PropTypes.string.isRequired,

  /**
     * Adds values to the `class` attribute of the root element.
     */
  className: PropTypes.string,

  /**
     * The prefix is the first part of the icon name/id. If you're using a
     * different icon set, the prefix may need to be modified.
     */
  prefix: PropTypes.string,

  /**
     * The size of the icon, controlled by CSS.
     */
  size: PropTypes.string,

  /**
     * Custom `style` attribute.
     */
  style: PropTypes.object,

  /**
     * **Beware** that ommitting a `title` will leave the icon **invisible** to
     * screen readers. If included, screen readers will read and treat the
     * icon like an image with alt text.
     */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
}

export default Icon
