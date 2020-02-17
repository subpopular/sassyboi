import React from 'react'
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

export default Box
