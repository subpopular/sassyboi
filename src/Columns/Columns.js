import React from 'react'
import cx from 'classnames'
import Box from '../Box/Box'
import './columns.css'

export const Column = ({span, className, children, ...props}) => {
  const classes = cx('u-col', getResponsiveSpanClasses(span), className)

  return (
    <Box className={classes} {...props}>
      {children}
    </Box>
  )
}

const Columns = ({
  gap = 'gutter',
  cols = 12,
  collapse,
  collapseBelowTablet,
  className,
  children,
  ...props
}) => {
  const classes = cx(
    'u-cols',
    resolveResponsiveClasses(cols, 'cols'),
    resolveResponsiveClasses(gap, 'gap'),
    {
      'u-cols--collapse-0': collapse,
      'u-cols--collapse-1': collapseBelowTablet
    },
    className
  )

  return (
    <Box className={classes} {...props}>
      {children}
    </Box>
  )
}

export default Columns

function resolveResponsiveClasses(value, label) {
  if (value != null) {
    if (Array.isArray(value)) {
      return value.map((v, i) => {
        return `u-cols--${label}-${v}-${i}`
      })
    }
    return `u-cols--${label}-${value}-0`
  }
}

function getResponsiveSpanClasses(span) {
  if (span != null) {
    if (Array.isArray(span)) {
      return span.map((cols, i) => {
        return `u-col--span-${cols}-${i}`
      })
    }
    return `u-col--span-${span}-0`
  }
}
