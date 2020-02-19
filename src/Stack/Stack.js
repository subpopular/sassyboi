import React from 'react'
import cx from 'classnames'
import Box from '../Box/Box'

import './stack.css'

const Stack = ({
  as = 'div',
  space = 'gutter',
  align = 'stretch',
  className,
  dividers = false,
  children,
  ...props
}) => {
  const classes = cx(
    'u-stack',
    `u-stack--${space}`,
    getResponsiveClasses(align, 'align'),
    className
  )

  return (
    <Box as={as} className={classes} {...props}>
      {React.Children.toArray(children)
        .filter((i) => i)
        .map((child, i) => {
          return (
            <React.Fragment key={child.key}>
              {i > 0 && dividers && (
                <Box
                  {...(child.props.display && {display: child.props.display})}
                  marginTop={space}
                  className="u-stack__divider"
                />
              )}

              <Box
                {...(child.props.display && {display: child.props.display})}
                marginTop={i > 0 && space}
                className="u-stack__item"
              >
                {child}
              </Box>
            </React.Fragment>
          )
        })}
    </Box>
  )
}

export default Stack

function getResponsiveClasses(value, label) {
  if (value != null) {
    if (Array.isArray(value)) {
      return value.map((v, i) => {
        return `u-stack--${label}-${v}-${i}`
      })
    }
    return `u-stack--${label}-${value}-0`
  }
}
