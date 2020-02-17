import React from 'react'
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

const Button = (
  {
    as = 'button',
    className,
    icon,
    iconRight,
    iconSize = 'regular',
    weight = 'regular',
    type = 'button',
    size = 'regular',
    justify = false,
    background,
    tone,
    loading,
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
      [`u-button--icon-only`]: iconOnly
    },
    className
  )

  const paddings = {
    xsmall: {x: 'small', y: 'xxsmall'},
    small: {x: 'small', y: 'xsmall'},
    regular: {x: 'gutter', y: 'smallish'}
  }
  const fontSizes = {
    xsmall: 'small',
    small: 'small',
    regular: 'standard'
  }

  let paddingX = paddings[size].x
  let paddingY = paddings[size].y

  const text = hasChildren && (
    <Text
      className='u-button__text'
      as='div'
      baseline={false}
      size={fontSizes[size]}
      tone={tone || (weight === 'link' ? 'link' : 'neutral')}
      align='center'
      weight='regular'
      display={children.props && children.props.display}
      block
    >
      {children}
    </Text>
  )

  return (
    <Box
      ref={ref}
      as={as}
      paddingY={!iconOnly && paddingY}
      paddingX={!iconOnly && paddingX}
      boxShadow={weight === 'weak' && 'borderStandard'}
      background={background || bg(weight)}
      className={classes}
      type={type}
      tone={tone}
      {...props}
    >
      {icon || iconRight ? (
        <Inline space='xsmall' justify={justify ? 'space-between' : 'center'}>
          {icon && (
            <Text
              baseline={false}
              as='span'
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
              as='span'
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

export default React.forwardRef(Button)
