import React from 'react'
import t from 'prop-types'
import cx from 'classnames'
import Box from '../Box/Box'
import Text from '../Text/Text'
import Inline from '../Inline/Inline'
import Icon from '../Icon/Icon'
import './button.css'

const bg = (weight) => {
  switch (weight) {
    case 'regular':
      return 'brand'
    case 'strong':
      return 'brandAccent'
    default:
      return 'transparent'
  }
}

const Button = React.forwardRef(
  (
    {
      className,
      weight = 'regular',
      size = 'regular',
      icon,
      iconRight,
      iconSize = 'regular',
      innerJustify = false,
      loading = false,
      children,
      ...props
    },
    ref
  ) => {
    const hasChildren = React.Children.count(children) > 0
    const iconOnly = !hasChildren && (icon || iconRight)

    const classes = cx(
      'u-button',
      `u-button--weight-${weight}`,
      {
        [`u-button--size-${size}`]: size,
        [`u-button--icon-only`]: iconOnly,
      },
      className
    )

    const paddings = {
      xsmall: {x: 'small', y: 'xxsmall'},
      small: {x: 'small', y: 'xsmall'},
      regular: {x: 'gutter', y: 'smallish'},
    }
    const fontSizes = {
      xsmall: 'small',
      small: 'small',
      regular: 'standard',
    }

    let paddingX = paddings[size].x
    let paddingY = paddings[size].y

    const text = hasChildren && (
      <Text
        className="u-button__text"
        as="div"
        baseline={false}
        size={fontSizes[size]}
        tone={props.tone || weight === 'link' ? 'link' : 'neutral'}
        align="center"
        weight="regular"
        display={children.props && children.props.display}
        block
      >
        {children}
      </Text>
    )

    return (
      <Box
        ref={ref}
        as="button"
        paddingY={!iconOnly && paddingY}
        paddingX={!iconOnly && paddingX}
        boxShadow={weight === 'weak' ? 'borderStandard' : undefined}
        background={bg(weight)}
        className={classes}
        type="button"
        {...props}
      >
        {icon || iconRight ? (
          <Inline
            space="xsmall"
            justify={innerJustify ? 'space-between' : 'center'}
          >
            {icon && (
              <Text
                baseline={false}
                as="span"
                tone={tone || (weight === 'link' ? 'link' : 'neutral')}
                block
              >
                <Icon
                  name={icon}
                  size={iconSize}
                  className={`pw-icon--${icon}`}
                />
              </Text>
            )}

            {text}

            {iconRight && (
              <Text
                baseline={false}
                as="span"
                tone={tone || (weight === 'link' ? 'link' : 'neutral')}
                block
              >
                <Icon
                  name={iconRight}
                  size={iconSize}
                  className={`pw-icon--${iconRight}`}
                />
              </Text>
            )}
          </Inline>
        ) : (
          text
        )}
      </Box>
    )
  }
)

Button.displayName = 'Button'

Button.propTypes = {
  /**
   * Sets the button's overall appearance
   */
  weight: t.oneOf(['regular', 'strong', 'weak', 'link']),
  /**
   * Sets the size of the button
   */
  size: t.oneOf(['small', 'regular', 'large']),
  /**
   * Render a given icon to the left of the text
   */
  icon: t.string,
  /**
   * Render a given icon to the right of the text
   */
  iconRight: t.string,
  /**
   * Sets the dimensions (width/height) of the icon
   */
  iconSize: t.oneOf(['small', 'regular', 'large']),
  /**
   * Justifies/spaces text and icon at each end (space-between).
   */
  innerJustify: t.bool,
  /**
   * Used to switch between the button contents and a loading spinner (not yet implemeted)
   */
  loading: t.bool,
}

export default Button
