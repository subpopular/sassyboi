import React from 'react'
import t from 'prop-types'
import cx from 'classnames'
import * as types from '../types'
import Box from '../Box/Box'

import './inline.css'

const Inline = ({
  space = 'gutter',
  dividers = false,
  collapseBelow,
  width,
  className,
  children,
  ...props
}) => {
  const classes = cx(
    'u-inline',
    `u-inline--${space}`,
    {
      'u-inline--collapse-1': collapseBelow === 'tablet',
      'u-inline--collapse-2': collapseBelow === 'desktop',
    },
    className
  )

  return (
    <Box className={classes} align="center" justify="flex-start" {...props}>
      {React.Children.toArray(children)
        .filter((i) => i)
        .map((child, i) => {
          return (
            <React.Fragment key={child.key + i}>
              {i > 0 && dividers && (
                <Box
                  className="u-inline__divider"
                  marginLeft={space}
                  display={child.props && child.props.display}
                />
              )}
              <Box
                className="u-inline__item"
                marginLeft={i > 0 ? space : undefined}
                display={child.props && child.props.display}
                flexGrow={child.props && child.props.flexGrow}
              >
                {child}
              </Box>
            </React.Fragment>
          )
        })}
    </Box>
  )
}

Inline.propTypes = {
  /**
   * Applies spacing between child elements
   */
  space: types.spacing,
  /**
   * Render a divider between elements
   */
  dividers: t.bool,
}

export default Inline
