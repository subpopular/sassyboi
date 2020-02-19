import React from 'react'
import t from 'prop-types'
import cx from 'classnames'
import {renderBackgroundProvider} from '../util/BackgroundContext'
import useBoxStyles from './useBoxStyles'

import './box.css'

const Box = React.forwardRef(
  (
    {
      as = 'div',
      background,
      className,
      padding,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      paddingX,
      paddingY,
      margin,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      marginX,
      marginY,
      boxShadow,
      display,
      flexGrow,
      size,
      ...props
    },
    ref
  ) => {
    const boxStyles = useBoxStyles({
      as,
      background,
      padding,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      paddingX,
      paddingY,
      margin,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      marginX,
      marginY,
      boxShadow,
      display,
      flexGrow,
      size
    })

    const element = React.createElement(as, {
      className: cx(boxStyles, className),
      ref,
      ...props
    })

    return renderBackgroundProvider(background, element)
  }
)

const spacingProps = [
  'xxsmall',
  'xsmall',
  'smallish',
  'small',
  'gutter',
  'medium',
  'large',
  'largeish',
  'xlarge',
  'xxlarge'
]

Box.propTypes = {
  as: t.element,
  background: t.oneOf(['brand', 'critical']),
  padding: t.oneOf(spacingProps),
  paddingTop: t.oneOf(spacingProps),
  paddingRight: t.oneOf(spacingProps),
  paddingBottom: t.oneOf(spacingProps),
  paddingLeft: t.oneOf(spacingProps),
  paddingX: t.oneOf(spacingProps),
  paddingY: t.oneOf(spacingProps),
  margin: t.oneOf(spacingProps),
  marginTop: t.oneOf(spacingProps),
  marginRight: t.oneOf(spacingProps),
  marginBottom: t.oneOf(spacingProps),
  marginLeft: t.oneOf(spacingProps),
  marginX: t.oneOf(spacingProps),
  marginY: t.oneOf(spacingProps),
  boxShadow: t.string,
  display: t.string,
  flexGrow: t.number,
  size: t.number,
  className: t.string
}

export default Box
