import React from 'react'
import cx from 'classnames'
import Box from '../Box/Box'

import './inline.css'

const Inline = ({
  as = 'div',
  space = 'gutter',
  align = 'center',
  justify = 'flex-start',
  dividers,
  width,
  wrap = false,
  className,
  children,
  ...props
}) => {
  const classes = cx(
    'u-inline',
    `u-inline--${space}`,
    `u-inline--align-${align}`,
    `u-inline--justify-${justify}`,
    {'u-inline--wrap': wrap},
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
                  className='u-inline__divider'
                  marginLeft={space}
                  display={child.props && child.props.display}
                />
              )}
              <Box
                className='u-inline__item'
                marginLeft={i > 0 && space}
                display={child.props && child.props.display}
              >
                {child}
              </Box>
            </React.Fragment>
          )
        })}
    </Box>
  )
}

export default Inline
