import React from 'react'
import t from 'prop-types'
import cx from 'classnames'
import * as types from '../types'
import {useStyles} from '../Provider'
import {resolveResponsiveClassnames} from '../util'
import Box from '../Box/Box'

import './inline.css'

const Inline = ({
  space = 'gutter',
  collapseBelow,
  className,
  children,
  ...props
}) => {
  const styles = useStyles()
  const classes = cx(
    'u-inline',
    resolveResponsiveClassnames('inline', space, 'space'),
    {
      'u-inline--collapse-1': collapseBelow === 'tablet',
      'u-inline--collapse-2': collapseBelow === 'desktop',
    },
    className
  )
    .split(' ')
    .map((c) => styles[c] || c)
    .join(' ')

  return (
    <Box
      className={cx(resolveResponsiveClassnames('inline', space, 'container'))
        .split(' ')
        .map((c) => styles[c] || c)
        .join(' ')}
    >
      <Box
        align="center"
        justify="flex-start"
        wrap
        className={classes}
        {...props}
      >
        {React.Children.toArray(children)
          .filter((i) => i)
          .map((child, i) => {
            return (
              <Box
                key={child.key + i}
                className={styles['u-inline__item']}
                paddingLeft={space}
                paddingTop={space}
                display={child.props && child.props.display}
                flexGrow={child.props && child.props.flexGrow}
              >
                {child}
              </Box>
            )
          })}
      </Box>
    </Box>
  )
}

Inline.propTypes = {
  /**
   * Applies spacing between child elements
   */
  space: types.spacing,
}

export default Inline
