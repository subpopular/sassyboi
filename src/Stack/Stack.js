import React from 'react'
import t from 'prop-types'
import cx from 'classnames'
import * as types from '../types'
import {useStyles} from '../Provider'
import Box from '../Box/Box'
import './stack.css'

const Stack = ({
  space = 'gutter',
  dividers = false,
  className,
  children,
  ...props
}) => {
  const styles = useStyles()
  const classes = cx('u-stack', className)
    .split(' ')
    .map((c) => styles[c] || c)
    .join(' ')

  return (
    <Box className={classes} align="stretch" justify="flex-start" {...props}>
      {React.Children.toArray(children)
        .filter((i) => i)
        .map((child, i) => {
          return (
            <React.Fragment key={child.key}>
              {i > 0 && dividers && (
                <Box
                  {...(child.props.display && {display: child.props.display})}
                  marginTop={space}
                  className={styles['u-stack__divider']}
                />
              )}

              <Box
                {...(child.props.display && {display: child.props.display})}
                {...(child.props.alignSelf && {
                  alignSelf: child.props.alignSelf,
                })}
                marginTop={i > 0 ? space : undefined}
                className={styles['u-stack__item']}
              >
                {child}
              </Box>
            </React.Fragment>
          )
        })}
    </Box>
  )
}

Stack.propTypes = {
  /**
   * Applies spacing between child elements
   */
  space: types.spacing,
  /**
   * Render a divider between elements
   */
  dividers: t.bool,
}

export default Stack
